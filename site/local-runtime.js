(() => {
  const STORAGE_KEY = 'astrocade.fast-food-tycoon-remake.save.v1';
  const LEADERBOARD_KEY = 'astrocade.fast-food-tycoon-remake.leaderboard.v1';

  window.gameConfig = {
  "stickmanModelURL": "stickman-animated_compressed.glb",
  "player": {
    "color": "#E74C3C",
    "startX": -16,
    "startZ": 13,
    "baseSpeed": 10,
    "baseCapacity": 10,
    "baseCollectionTime": 0.5
  },
  "resources": {
    "regenerationTime": 4,
    "itemValue": 20
  },
  "grills": [
    {
      "id": "grill_1",
      "x": -5,
      "z": -23,
      "equipmentType": "grill",
      "rotation": -180
    },
    {
      "id": "grill_2",
      "x": -2,
      "z": -23,
      "equipmentType": "grill",
      "rotation": -180
    },
    {
      "id": "grill_3",
      "x": 1,
      "z": -23,
      "equipmentType": "grill",
      "rotation": -180
    },
    {
      "id": "fryer_0",
      "x": 7,
      "z": -23,
      "equipmentType": "fryer",
      "rotation": -360
    },
    {
      "id": "fryer_1",
      "x": 4,
      "z": -23,
      "equipmentType": "fryer",
      "rotation": -180
    },
    {
      "id": "drink_0",
      "x": 7,
      "z": -7,
      "equipmentType": "drink_station",
      "rotation": 270
    },
    {
      "id": "drink_1",
      "x": 7,
      "z": -11,
      "equipmentType": "drink_station",
      "rotation": 630
    },
    {
      "id": "grill_5",
      "x": -8,
      "z": -23,
      "equipmentType": "grill",
      "rotation": -180
    },
    {
      "id": "drink_station_10",
      "x": -7,
      "z": -7,
      "equipmentType": "drink_station",
      "rotation": -270
    },
    {
      "id": "drink_station_11",
      "x": -7,
      "z": -11,
      "equipmentType": "drink_station",
      "rotation": -270
    }
  ],
  "sellZone": {
    "x": 9.841845960759247,
    "z": -9.208578872021114,
    "radius": 6,
    "color": "#27AE60",
    "deleted": true
  },
  "moneyZone": {
    "x": 12,
    "z": 20,
    "width": 10,
    "depth": 8,
    "color": "#FFD700",
    "deleted": true
  },
  "spendZone": {
    "x": -11.488736004568842,
    "z": 20.131738840172076,
    "width": 10,
    "depth": 8,
    "color": "#E74C3C",
    "deleted": true
  },
  "upgrades": {
    "capacity": {
      "level": 0,
      "baseCost": 50,
      "costMultiplier": 1.5,
      "bonusPerLevel": 5
    },
    "speed": {
      "level": 0,
      "baseCost": 75,
      "costMultiplier": 1.6,
      "bonusPerLevel": 2
    },
    "collection": {
      "level": 0,
      "baseCost": 100,
      "costMultiplier": 1.7,
      "reductionPerLevel": 0.15
    }
  },
  "currency": 9500,
  "settings": {
    "groundColor": "#D4A574",
    "skyColor": "#FFF5E6",
    "musicEnabled": true,
    "customersLeaveTrash": true,
    "autosaveEnabled": true,
    "defaultTableCost": 50,
    "paperMoneyValue": 10,
    "vacuumSpeed": 0,
    "diningFloorAsset": "floor_tile",
    "kitchenFloorAsset": "kitchen_floor_tile",
    "outdoorFloorColor": "#4d4e46",
    "startingCash": 500,
    "collectSoundPitchVariance": 0.1,
    "bugFix": false,
    "maxTotalCustomers": 40
  },
  "cashierStall": {
    "x": 0,
    "z": -3,
    "width": 8,
    "depth": 4,
    "maxBurgers": 100,
    "maxMoney": 100,
    "serveTime": 0.8,
    "customerSpawnRate": 3.25,
    "maxCustomers": 6,
    "color": "#8B4513"
  },
  "staffHireTile": {
    "x": 5,
    "z": -15,
    "width": 4,
    "depth": 4,
    "hireCost": 100,
    "color": "#9B59B6",
    "staffHired": false,
    "moneyDeposited": 0,
    "cost": 100
  },
  "diningTables": [],
  "diningTableTile": "__DELETE__",
  "diningTableTiles": [
    {
      "width": 4,
      "x": -15.016490604550816,
      "z": 16.133036187743055,
      "tableCost": 100,
      "depth": 4,
      "moneyDeposited": 0,
      "color": "#3498DB",
      "deleted": false,
      "cost": 100
    },
    {
      "width": 4,
      "x": -15.14183591719429,
      "z": 23.898387879930507,
      "tableCost": 100,
      "depth": 4,
      "moneyDeposited": 0,
      "color": "#3498DB",
      "deleted": false,
      "cost": 100
    },
    {
      "width": 4,
      "x": 6.132096347865142,
      "z": 16.127572994534983,
      "tableCost": 100,
      "depth": 4,
      "moneyDeposited": 0,
      "color": "#3498DB",
      "deleted": false,
      "cost": 100
    },
    {
      "width": 4,
      "x": -8.667152265934797,
      "z": 23.31763681926224,
      "tableCost": 100,
      "depth": 4,
      "moneyDeposited": 0,
      "color": "#3498DB",
      "deleted": false,
      "cost": 100
    },
    {
      "width": 4,
      "x": -8.545166447414058,
      "z": 16.01429074427949,
      "tableCost": 100,
      "depth": 4,
      "moneyDeposited": 0,
      "color": "#3498DB",
      "deleted": false,
      "cost": 100
    },
    {
      "width": 4,
      "x": 5.955364751646173,
      "z": 22.87584780489358,
      "tableCost": 100,
      "depth": 4,
      "moneyDeposited": 0,
      "color": "#3498DB",
      "deleted": false,
      "cost": 100
    },
    {
      "width": 4,
      "x": 11.896793010569025,
      "z": 16.391015807013854,
      "tableCost": 100,
      "depth": 4,
      "moneyDeposited": 0,
      "color": "#3498DB",
      "deleted": false,
      "cost": 100
    },
    {
      "width": 4,
      "x": 11.994271840852896,
      "z": 22.772683039660294,
      "tableCost": 100,
      "depth": 4,
      "moneyDeposited": 0,
      "color": "#3498DB",
      "deleted": false,
      "cost": 100
    }
  ],
  "trashBin": {
    "x": 12,
    "z": -20,
    "radius": 2,
    "color": "#7F8C8D"
  },
  "cleanerStaffTile": {
    "x": -1,
    "z": 21,
    "width": 4,
    "depth": 4,
    "hireCost": 150,
    "color": "#3498DB",
    "staffHired": false,
    "moneyDeposited": 0,
    "cost": 150
  },
  "runnerStaffTile": {
    "color": "#E67E22",
    "depth": 4,
    "hireCost": 300,
    "moneyDeposited": 0,
    "staffHired": false,
    "width": 4,
    "x": -5,
    "z": -15,
    "cost": 300
  },
  "vipCustomers": {
    "spawnChance": 0.15,
    "tipMultiplier": 3,
    "color": "#FFD700"
  },
  "rushHour": {
    "enabled": true,
    "duration": 30,
    "cooldown": 60,
    "spawnMultiplier": 2.5,
    "tipBonus": 1.5
  },
  "menuItems": [
    {
      "id": "burger",
      "name": "汉堡",
      "emoji": "🍔",
      "value": 100,
      "bunColor": "#DEB887",
      "pattyColor": "#8B4513",
      "toppingColor": "#32CD32",
      "accentColor": "#FFA500",
      "equipmentType": "grill"
    },
    {
      "id": "bigmac",
      "name": "巨无霸",
      "emoji": "🍔",
      "value": 150,
      "bunColor": "#DEB887",
      "pattyColor": "#8B4513",
      "toppingColor": "#32CD32",
      "accentColor": "#FFA500",
      "equipmentType": "grill"
    },
    {
      "id": "mcchicken",
      "name": "鸡肉堡",
      "emoji": "🍗",
      "value": 120,
      "bunColor": "#F5DEB3",
      "pattyColor": "#D4A574",
      "toppingColor": "#90EE90",
      "accentColor": "#FFFFFF",
      "equipmentType": "grill"
    },
    {
      "id": "fries",
      "name": "薯条",
      "emoji": "🍟",
      "value": 60,
      "bunColor": "#FFD700",
      "pattyColor": "#DAA520",
      "toppingColor": "#FF0000",
      "accentColor": "#FFFFFF",
      "equipmentType": "fryer"
    },
    {
      "id": "nuggets",
      "name": "鸡块",
      "emoji": "🍗",
      "value": 80,
      "bunColor": "#DEB887",
      "pattyColor": "#D4A574",
      "toppingColor": "#FFD700",
      "accentColor": "#CC0000",
      "equipmentType": "fryer"
    },
    {
      "id": "drink",
      "name": "饮料",
      "emoji": "🥤",
      "value": 40,
      "bunColor": "#FFFFFF",
      "pattyColor": "#E74C3C",
      "toppingColor": "#FFFFFF",
      "accentColor": "#3498DB",
      "equipmentType": "drink_station"
    },
    {
      "id": "mcflurry",
      "name": "冰淇淋",
      "emoji": "🍦",
      "value": 70,
      "bunColor": "#FFFAF0",
      "pattyColor": "#3C2415",
      "toppingColor": "#FFFFFF",
      "accentColor": "#87CEEB",
      "equipmentType": "drink_station"
    }
  ],
  "driveThruBooth": {
    "x": 27,
    "z": 0,
    "width": 10,
    "depth": 6,
    "maxBurgers": 20,
    "serveTime": 1,
    "carSpawnRate": 4,
    "maxCars": 4,
    "color": "#8B4513"
  },
  "bankVault": {
    "x": 19.156143651649913,
    "z": -28,
    "width": 5,
    "depth": 4,
    "color": "#2C3E50",
    "balance": 9500
  },
  "vaultUpgrades": {
    "earnings": 0,
    "capacity": 0,
    "tips": 0,
    "speed": 0
  },
  "vaultStaffTile": {
    "x": 20.765021614900473,
    "z": -20.270689447321523,
    "width": 4,
    "depth": 4,
    "hireCost": 100,
    "color": "#F1C40F",
    "staffHired": false,
    "moneyDeposited": 0,
    "deleted": true
  },
  "prestige": {
    "level": 0,
    "profitBonus": 0.1,
    "baseCost": 5000,
    "costMultiplier": 2.5
  },
  "prestigeLayouts": [
    {
      "level": 2,
      "grills": [
        {
          "id": "grill_1",
          "x": -12,
          "z": -28,
          "equipmentType": "grill"
        },
        {
          "id": "grill_2",
          "x": -6,
          "z": -28,
          "equipmentType": "grill"
        },
        {
          "id": "grill_3",
          "x": 0,
          "z": -28,
          "equipmentType": "grill"
        },
        {
          "id": "fryer_0",
          "x": 9.189076158220818,
          "z": -27.99915651314427,
          "equipmentType": "fryer"
        },
        {
          "id": "fryer_1",
          "x": 12,
          "z": -28,
          "equipmentType": "fryer"
        },
        {
          "id": "fryer_2",
          "x": 7.483807071767375,
          "z": -25.629013524533505,
          "equipmentType": "fryer"
        },
        {
          "id": "drink_0",
          "x": -15,
          "z": -22,
          "equipmentType": "drink_station"
        },
        {
          "id": "drink_1",
          "x": -9,
          "z": -22,
          "equipmentType": "drink_station"
        },
        {
          "id": "grill_4",
          "x": -3,
          "z": -22,
          "equipmentType": "grill"
        },
        {
          "id": "grill_5",
          "x": 3,
          "z": -22,
          "equipmentType": "grill"
        }
      ],
      "cashierStall": {
        "x": 0.28906841226326585,
        "z": 5.04635963040284,
        "width": 8,
        "depth": 4,
        "maxBurgers": 30,
        "serveTime": 0.8,
        "customerSpawnRate": 2.5,
        "maxCustomers": 6,
        "color": "#8B4513"
      },
      "staffHireTile": {
        "x": -7.0955394260919995,
        "z": 4.739915362829798,
        "width": 4,
        "depth": 4,
        "hireCost": 100,
        "color": "#9B59B6",
        "staffHired": false,
        "moneyDeposited": 0
      },
      "cleanerStaffTile": {
        "x": -14.864825954115048,
        "z": 4.336336887646887,
        "width": 4,
        "depth": 4,
        "hireCost": 100,
        "color": "#3498DB",
        "staffHired": false,
        "moneyDeposited": 0
      },
      "runnerStaffTile": {
        "color": "#E67E22",
        "depth": 4,
        "hireCost": 100,
        "moneyDeposited": 0,
        "staffHired": false,
        "width": 4,
        "x": 15,
        "z": -5
      },
      "vaultStaffTile": {
        "x": 20.765021614900473,
        "z": -20.270689447321523,
        "width": 4,
        "depth": 4,
        "hireCost": 150,
        "color": "#F1C40F",
        "staffHired": false,
        "moneyDeposited": 0
      },
      "diningTableTiles": [
        {
          "width": 4,
          "x": -17.227867093078277,
          "z": 26.46764854710877,
          "tableCost": 300,
          "depth": 4,
          "moneyDeposited": 0,
          "color": "#3498DB"
        },
        {
          "width": 4,
          "x": 12.466602103796491,
          "z": 26.608752185146525,
          "tableCost": 300,
          "depth": 4,
          "moneyDeposited": 0,
          "color": "#3498DB",
          "deleted": false
        },
        {
          "width": 4,
          "x": -1.3055000718761216,
          "z": 26.166043916084593,
          "tableCost": 300,
          "depth": 4,
          "moneyDeposited": 0,
          "color": "#3498DB",
          "deleted": false
        },
        {
          "width": 4,
          "x": 5.950127325117245,
          "z": 26.665006903200993,
          "tableCost": 300,
          "depth": 4,
          "moneyDeposited": 0,
          "color": "#3498DB",
          "deleted": false
        },
        {
          "width": 4,
          "x": -9.710922262460203,
          "z": 26.42274786429538,
          "tableCost": 300,
          "depth": 4,
          "moneyDeposited": 0,
          "color": "#3498DB",
          "deleted": false
        }
      ],
      "trashBin": {
        "x": 8.718287561121713,
        "z": -13.340571517218429,
        "radius": 2,
        "color": "#7F8C8D"
      },
      "bankVault": {
        "x": 19.156143651649913,
        "z": -30.93629744607111,
        "width": 5,
        "depth": 4,
        "color": "#2C3E50",
        "balance": 0
      }
    }
  ],
  "cashierTile": {
    "x": 0,
    "cost": 150,
    "color": "#3498DB",
    "moneyDeposited": 0,
    "z": -6,
    "unlocked": false,
    "width": 8,
    "depth": 4,
    "deleted": false
  },
  "grillTile": {
    "cost": 100,
    "deleted": false,
    "x": 0,
    "color": "#E74C3C",
    "width": 8,
    "z": -15,
    "depth": 4,
    "moneyDeposited": 0,
    "unlocked": false
  },
  "driveThruTile": {
    "width": 6,
    "color": "#8B4513",
    "deleted": false,
    "depth": 4,
    "x": 20,
    "unlocked": false,
    "moneyDeposited": 0,
    "cost": 1000,
    "z": -0.41427041514123175
  },
  "trashTile": {
    "color": "#7F8C8D",
    "z": -20,
    "depth": 4,
    "width": 4,
    "deleted": false,
    "cost": 10,
    "x": 12,
    "unlocked": false,
    "moneyDeposited": 0
  },
  "vaultTile": {
    "deleted": true,
    "width": 5,
    "unlocked": false,
    "cost": 500,
    "x": 19.15,
    "z": -28,
    "moneyDeposited": 0,
    "depth": 4,
    "color": "#F1C40F"
  },
  "fountainTile": {
    "x": -14,
    "z": -3,
    "width": 4,
    "depth": 4,
    "cost": 1000,
    "color": "#3498DB",
    "unlocked": false,
    "moneyDeposited": 0,
    "deleted": false
  },
  "fountain": {
    "x": -14,
    "z": -3,
    "radius": 2.5,
    "deleted": false
  },
  "unlockOrder": [
    "diningTable",
    "grillTile",
    "cashierTile",
    "trashTile",
    "staffHireTile",
    "driveThruTile",
    "cleanerStaffTile",
    "fountainTile",
    "selfOrderKioskTile"
  ],
  "selfOrderKiosk": {
    "x": -11,
    "z": 5,
    "width": 4,
    "depth": 3,
    "color": "#2C3E50",
    "maxQueue": 4,
    "rotation": 0,
    "deleted": false
  },
  "selfOrderKioskTile": {
    "x": -11,
    "z": 5,
    "width": 4,
    "depth": 4,
    "cost": 500,
    "color": "#2C3E50",
    "unlocked": false,
    "moneyDeposited": 0,
    "deleted": true
  },
  "fountain2": {
    "x": 13,
    "z": -8,
    "radius": 2.5,
    "deleted": false
  },
  "fountain2Tile": {
    "x": 13,
    "z": -8,
    "width": 4,
    "depth": 4,
    "cost": 1000,
    "color": "#3498DB",
    "unlocked": false,
    "moneyDeposited": 0,
    "deleted": false
  },
  "selfOrderKiosks": [
    {
      "id": 0,
      "x": -11,
      "z": 5,
      "width": 4,
      "depth": 3,
      "color": "#2C3E50",
      "icon": "🍔",
      "maxQueue": 4,
      "rotation": 0,
      "deleted": true
    },
    {
      "id": 1,
      "x": -5,
      "z": 5,
      "width": 4,
      "depth": 3,
      "color": "#E74C3C",
      "icon": "🍟",
      "maxQueue": 4,
      "rotation": 0,
      "deleted": true
    },
    {
      "id": 2,
      "x": 1,
      "z": 5,
      "width": 4,
      "depth": 3,
      "color": "#3498DB",
      "icon": "🥤",
      "maxQueue": 4,
      "rotation": 0,
      "deleted": true
    },
    {
      "id": 3,
      "x": 7,
      "z": 5,
      "width": 4,
      "depth": 3,
      "color": "#27AE60",
      "icon": "🍗",
      "maxQueue": 4,
      "rotation": 0,
      "deleted": true
    },
    {
      "id": 4,
      "x": 13,
      "z": 5,
      "width": 4,
      "depth": 3,
      "color": "#F39C12",
      "icon": "🍦",
      "maxQueue": 4,
      "rotation": 0,
      "deleted": true
    }
  ],
  "selfOrderKioskTiles": [
    {
      "kioskId": 0,
      "x": -11,
      "z": 5,
      "width": 4,
      "depth": 4,
      "cost": 500,
      "color": "#2C3E50",
      "unlocked": false,
      "moneyDeposited": 0,
      "deleted": false,
      "hidden": false
    },
    {
      "kioskId": 1,
      "x": -5,
      "z": 5,
      "width": 4,
      "depth": 4,
      "cost": 500,
      "color": "#E74C3C",
      "unlocked": false,
      "moneyDeposited": 0,
      "deleted": false,
      "hidden": false
    },
    {
      "kioskId": 2,
      "x": 6,
      "z": 5,
      "width": 4,
      "depth": 4,
      "cost": 500,
      "color": "#3498DB",
      "unlocked": false,
      "moneyDeposited": 0,
      "deleted": false,
      "hidden": false
    },
    {
      "kioskId": 3,
      "x": -17,
      "z": 5,
      "width": 4,
      "depth": 4,
      "cost": 500,
      "color": "#27AE60",
      "unlocked": false,
      "moneyDeposited": 0,
      "deleted": false,
      "hidden": false
    },
    {
      "kioskId": 4,
      "x": 12,
      "z": 5,
      "width": 4,
      "depth": 4,
      "cost": 500,
      "color": "#F39C12",
      "unlocked": false,
      "moneyDeposited": 0,
      "deleted": false,
      "hidden": false
    }
  ],
  "decorationUpgrades": {
    "wall": {
      "color": "#8b4513",
      "level": 0
    },
    "signs": {
      "level": 0
    },
    "tables": {
      "level": 0
    },
    "kitchen": {
      "level": 0
    },
    "plants": {
      "level": 0
    },
    "floor": {
      "level": 0,
      "asset": "floor_tile"
    }
  },
  "driveThruStaffTile": {
    "cost": 500,
    "x": 20,
    "z": 5,
    "extraStaff2Hired": false,
    "extraStaff1Hired": false,
    "staffHired": false,
    "depth": 4,
    "width": 4,
    "moneyDeposited": 0,
    "deleted": false,
    "color": "#F1C40F"
  }
};
  window.assetMap = {
  "collect_sound": {
    "url": "assets/collect_sound.mp3",
    "type": "audio",
    "prompt": null,
    "description": "A light and rewarding pop sound effect for collecting food items in a casual tycoon game.",
    "subtype": null,
    "aspect_ratio": null,
    "compression_suggestion": "original",
    "duration_secs": 0,
    "loop": null,
    "animation": null
  },
  "sell_sound": {
    "url": "assets/sell_sound.mp3",
    "type": "audio",
    "prompt": "A high-quality, satisfying cash register 'cha-ching' combined with a light metallic coin jingle. Designed for a restaurant tycoon game, the tone should be cheerful, bright, and rewarding. It features a crisp mechanical 'ding' followed by the subtle sound of coins settling. Clean, professional sound design with a short decay, suitable for frequent UI feedback without becoming grating.",
    "description": "A rewarding cash register 'cha-ching' sound effect for successful sales and earning money.",
    "subtype": "effect",
    "aspect_ratio": null,
    "compression_suggestion": "original",
    "duration_secs": 1.01,
    "loop": false,
    "animation": null
  },
  "upgrade_sound": {
    "url": "assets/upgrade_sound.mp3",
    "type": "audio",
    "prompt": "Uplifting 'level up' sound effect for a casual mobile tycoon game. Features a bright, triumphant major-scale chime with a shimmering magical sparkle quality and a rising tonal motif. Sounds rewarding and high-quality, similar to a successful building upgrade or milestone achievement. Clean, crisp, one-shot with a gentle crystalline reverb tail.",
    "description": "An uplifting and sparkly level-up sound effect for a casual mobile tycoon game, signaling success and achievement.",
    "subtype": "effect",
    "aspect_ratio": null,
    "compression_suggestion": "original",
    "duration_secs": 1.16,
    "loop": false,
    "animation": null
  },
  "background_music": {
    "url": "assets/background_music.mp3",
    "type": "audio",
    "prompt": "Upbeat, cheerful, and lighthearted background music for a casual restaurant tycoon mobile game. The style is a blend of light jazz and Bossa Nova, featuring a bouncy nylon-string guitar rhythm, a soft walking upright bass, gentle shaker percussion, and a melodic vibraphone or electric piano lead. The tempo is a steady 110-120 BPM, creating a pleasant and productive atmosphere. Instrumental only, clean production, designed for seamless looping with a natural flow and no harsh transitions. Positive, inviting, and cozy vibes.",
    "description": "Upbeat and cheerful Bossa Nova inspired background music for a casual restaurant tycoon game.",
    "subtype": "music",
    "aspect_ratio": null,
    "compression_suggestion": "original",
    "duration_secs": 60.02938775510204,
    "loop": true,
    "animation": null
  },
  "floor_tile": {
    "url": "assets/floor_tile.webp",
    "type": "image",
    "prompt": "Generate a fully tileable restaurant floor texture with a classic ceramic checkered pattern in a warm tan and beige color scheme. Top-down view, pixel art style to match a casual tycoon game aesthetic. Clean, polished look with subtle shine and reflections. Ensure the texture repeats seamlessly in both horizontal and vertical directions with no visible seams or shadows at the edges. Flat lighting, high resolution, professional game asset.",
    "description": "A seamless tileable restaurant floor texture in a warm tan/beige checkered pattern for a top-down tycoon game.",
    "subtype": "ground",
    "aspect_ratio": [
      1024,
      1024
    ],
    "compression_suggestion": "original",
    "duration_secs": null,
    "loop": null,
    "animation": null
  },
  "wall_tile": {
    "url": "assets/wall_tile.webp",
    "type": "image",
    "prompt": "Generate a fully tileable red brick wall texture for a restaurant interior, designed to repeat seamlessly in both horizontal and vertical directions. Red brick pattern with light tan or cream mortar lines in a standard running bond pattern. Style should be clean pixel art with a warm, inviting color palette. Flat lighting, no shadows at edges, polished look to match the existing floor_tile. Top-down/orthographic view.",
    "description": "A seamless tileable red brick wall texture for a diner interior.",
    "subtype": "ground",
    "aspect_ratio": [
      1024,
      1024
    ],
    "compression_suggestion": "medium",
    "duration_secs": null,
    "loop": null,
    "animation": null
  },
  "kitchen_floor_tile": {
    "url": "assets/kitchen_floor_tile.webp",
    "type": "image",
    "prompt": "Generate a fully tileable industrial kitchen floor texture for a fast food restaurant, designed to repeat seamlessly in both horizontal and vertical directions. Professional commercial kitchen style featuring a light gray anti-slip rubber pattern with subtle diamond plate textures and clean grid lines. Top-down orthographic view, clean and minimalist design, consistent lighting and silver-gray color palette. The texture should have subtle darker accents for depth and contrast well with the warm tan dining area. High resolution, no visible seams, game-ready texture.",
    "description": "A seamless gray industrial kitchen floor texture that tiles in both directions for a top-down restaurant tycoon game.",
    "subtype": "ground",
    "aspect_ratio": [
      1024,
      1024
    ],
    "compression_suggestion": "medium",
    "duration_secs": null,
    "loop": null,
    "animation": null
  },
  "paper_money": {
    "url": "assets/paper_money.webp",
    "type": "image",
    "prompt": "Generate a clear, top-down view pixel art sprite of a stack of green paper money. The asset should feature a crisp dollar bill on top with visible edges of a stack underneath. Clean, polished game-ready asset, vibrant green colors, simple shading, transparent background, high resolution pixel art style to match a casual tycoon aesthetic.",
    "description": "A top-down pixel art stack of green dollar bills used as a currency pickup in the restaurant tycoon game.",
    "subtype": "object",
    "aspect_ratio": [
      984,
      733
    ],
    "compression_suggestion": "high",
    "duration_secs": null,
    "loop": null,
    "animation": null
  },
  "coin_icon": {
    "url": "assets/coin_icon.webp",
    "type": "image",
    "prompt": "Generate a vibrant, high-quality 2D game icon of a green dollar sign ($). The icon should be shiny and polished with professional lighting and shading, suitable for a tycoon game HUD. Top-down perspective, front-view, isolated on a transparent background, clean edges, stylized and bold design.",
    "description": "A polished green dollar sign icon for the game's currency display.",
    "subtype": "ui",
    "aspect_ratio": [
      597,
      843
    ],
    "compression_suggestion": "high",
    "duration_secs": null,
    "loop": null,
    "animation": null
  },
  "pickup_sound": {
    "url": "assets/pickup_sound.mp3",
    "type": "audio",
    "prompt": null,
    "description": "A light and rewarding pop sound effect for collecting items like food or money in a casual tycoon game.",
    "subtype": null,
    "aspect_ratio": null,
    "compression_suggestion": "original",
    "duration_secs": 0,
    "loop": null,
    "animation": null
  },
  "stickman-animated_compressed.glb": {
    "url": "assets/stickman-animated_compressed.glb.glb",
    "type": "model_3d",
    "prompt": null,
    "description": "Compressed stickman GLB provided by user (for draco-compressed GLB).",
    "subtype": "glb",
    "aspect_ratio": null,
    "compression_suggestion": "original",
    "duration_secs": null,
    "loop": null,
    "animation": null
  }
};

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
    const nameMap = {
      You: '你',
      'Burger Baron': '汉堡大王',
      'Drive-Thru Ace': '得来速高手',
      'Fry Captain': '薯条队长',
      Anonymous: '匿名玩家',
    };
    const filtered = existing
      .map((entry) => ({ ...entry, username: nameMap[entry.username] || entry.username }))
      .filter((entry) => entry.username !== '你');
    filtered.push({ username: '你', score: currentScore });
    filtered.push(
      { username: '汉堡大王', score: Math.max(12500, currentScore - 500) },
      { username: '得来速高手', score: Math.max(9000, currentScore - 1500) },
      { username: '薯条队长', score: Math.max(6500, currentScore - 2500) }
    );

    const sorted = filtered
      .sort((a, b) => (Number(b.score) || 0) - (Number(a.score) || 0))
      .filter((entry, index, arr) => arr.findIndex((item) => item.username === entry.username) === index);

    writeJSON(LEADERBOARD_KEY, sorted);
    const entries = sorted.slice(0, limit);
    const userRank = sorted.findIndex((entry) => entry.username === '你') + 1;
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
          loading.innerHTML = '<div style="color:white;font:16px sans-serif;padding:24px">游戏启动失败，请查看浏览器控制台。</div>';
        }
      });
    }
  });
})();
