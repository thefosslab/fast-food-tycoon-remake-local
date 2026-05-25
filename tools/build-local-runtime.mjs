import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const rawPath = path.join(root, 'raw', 'play.json');
const siteDir = path.join(root, 'site');
const assetDir = path.join(siteDir, 'assets');

const data = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
const gameConfig = JSON.parse(data.game_config);
const assetMap = data.asset_map || {};

fs.mkdirSync(assetDir, { recursive: true });

const extFromUrl = (url, fallback = 'bin') => {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname).replace(/^\./, '');
  return ext || fallback;
};

const safeName = (id) =>
  String(id)
    .replace(/[^a-zA-Z0-9._-]+/g, '_')
    .replace(/^_+|_+$/g, '');

const manifest = Object.entries(assetMap).map(([id, asset]) => {
  const ext = extFromUrl(asset.url);
  const filename = `${safeName(id)}.${ext}`;
  return {
    id,
    url: asset.url,
    localPath: `assets/${filename}`,
    filename,
  };
});

const localAssetMap = {};
for (const [id, asset] of Object.entries(assetMap)) {
  const entry = manifest.find((item) => item.id === id);
  localAssetMap[id] = {
    ...asset,
    url: entry.localPath,
  };
}

fs.writeFileSync(
  path.join(siteDir, 'asset-manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n',
  'utf8'
);

const runtime = `(() => {
  const STORAGE_KEY = 'astrocade.fast-food-tycoon-remake.save.v1';
  const LEADERBOARD_KEY = 'astrocade.fast-food-tycoon-remake.leaderboard.v1';

  window.gameConfig = ${JSON.stringify(gameConfig, null, 2)};
  window.assetMap = ${JSON.stringify(localAssetMap, null, 2)};

  function readJSON(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      console.warn('[local runtime] failed to read', key, error);
      return fallback;
    }
  }

  function writeJSON(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function normalizeLeaderboard(score, limit) {
    const existing = readJSON(LEADERBOARD_KEY, []);
    const currentScore = Number.isFinite(score) ? Math.floor(score) : 0;
    const filtered = existing.filter((entry) => entry.username !== 'You');
    filtered.push({ username: 'You', score: currentScore });
    filtered.push(
      { username: 'Burger Baron', score: Math.max(12500, currentScore - 500) },
      { username: 'Drive-Thru Ace', score: Math.max(9000, currentScore - 1500) },
      { username: 'Fry Captain', score: Math.max(6500, currentScore - 2500) }
    );

    const sorted = filtered
      .sort((a, b) => (Number(b.score) || 0) - (Number(a.score) || 0))
      .filter((entry, index, arr) => arr.findIndex((item) => item.username === entry.username) === index);

    writeJSON(LEADERBOARD_KEY, sorted);
    const entries = sorted.slice(0, limit);
    const userRank = sorted.findIndex((entry) => entry.username === 'You') + 1;
    return { entries, userRank: userRank || null };
  }

  window.lib = {
    log: (...args) => console.log('[local runtime]', ...args),
    getAsset: (id) => window.assetMap && window.assetMap[id],
    shouldUseTouchControls: () =>
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0,
    showGameParameters: () => {},
    editMenu: {
      open: () => {},
      close: () => {},
    },
    getUserGameState: async () => ({ state: readJSON(STORAGE_KEY, null) }),
    saveUserGameState: async (state) => {
      writeJSON(STORAGE_KEY, state);
      return { success: true };
    },
    addPlayerScoreToLeaderboard: async (score, limit = 10) => ({
      success: true,
      ...normalizeLeaderboard(score, limit),
    }),
    getTopNEntriesFromLeaderboard: async (limit = 10) => normalizeLeaderboard(0, limit),
  };

  window.addEventListener('load', () => {
    if (typeof window.run === 'function') {
      window.run('play').catch((error) => {
        console.error('[local runtime] game failed to start', error);
        const loading = document.getElementById('loading-screen');
        if (loading) {
          loading.innerHTML = '<div style="color:white;font:16px sans-serif;padding:24px">Game failed to start. Check the browser console.</div>';
        }
      });
    }
  });
})();`;

fs.writeFileSync(path.join(siteDir, 'local-runtime.js'), runtime + '\n', 'utf8');
