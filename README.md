# 快餐大亨重制版 - 本地版

这是从公开 Astrocade 页面整理出的本地可运行版本。入口文件在 `site/index.html`。

## 启动

当前本地服务器已启动：

```bash
python3 -m http.server 8000 --directory site
```

浏览器打开：

```text
http://127.0.0.1:8000/index.html
```

## 目录

- `site/index.html`: 游戏主页面和游戏逻辑。
- `site/local-runtime.js`: 本地运行时，替代 Astrocade iframe 环境，提供资源映射、本地存档和本机排行榜。
- `site/assets/`: 游戏图片、音频和 3D 模型。
- `site/vendor/`: Three.js、i18next 和 Draco 解码器。
- `raw/`: 抓取过程中的原始页面、上下文包和验证截图。
- `tools/`: 本地 runtime 生成、调试验证脚本。

## 说明

进度保存在浏览器 `localStorage` 中。换浏览器或清理站点数据会丢失本地进度。
