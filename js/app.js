// ============================================================================
// 🏹🐾💥 Angry Critters: Rainbow Slingshot! (Balanced Goldilocks Edition)
// 100% Zero-Text Visual UI • Smooth Manual Slingshot + Mid-Air Critter Skills
// Breakable Wood/Ice/Candy/Stone Castles • Chain-Reaction TNT • Never Force-Resets!
// ============================================================================

const W = 820;
const H = 540;
const GROUND_Y = 472;
const SLING_X = 152;
const SLING_Y = 360;
const MAX_PULL = 118;
const GRAVITY = 0.35;

const CRITTERS = [
  {
    id: 'dogday',
    img: 'icons/dogday.jpg',
    power: '☀️',
    color: '#ff922b',
    bandColor: '#ea580c',
    skyTop: '#fef3c7',
    skyBot: '#bae6fd',
    hillColor: '#86efac',
    groundColor: '#22c55e',
    monster: '🐷',
    skillType: 'dive'
  },
  {
    id: 'hoppy',
    img: 'icons/hoppy.jpg',
    power: '⚡',
    color: '#22c55e',
    bandColor: '#15803d',
    skyTop: '#dcfce7',
    skyBot: '#99f6e4',
    hillColor: '#6ee7b7',
    groundColor: '#16a34a',
    monster: '👾',
    skillType: 'dash'
  },
  {
    id: 'bobby',
    img: 'icons/bobby.jpg',
    power: '💖',
    color: '#f43f5e',
    bandColor: '#be123c',
    skyTop: '#ffe4e6',
    skyBot: '#fbcfe8',
    hillColor: '#f9a8d4',
    groundColor: '#ec4899',
    monster: '🐷',
    skillType: 'shock'
  },
  {
    id: 'picky',
    img: 'icons/picky.jpg',
    power: '🍉',
    color: '#fb7185',
    bandColor: '#e11d48',
    skyTop: '#ffedd5',
    skyBot: '#fecdd3',
    hillColor: '#fdba74',
    groundColor: '#f97316',
    monster: '👾',
    skillType: 'heavy'
  },
  {
    id: 'bubba',
    img: 'icons/bubba.jpg',
    power: '🌊',
    color: '#38bdf8',
    bandColor: '#0369a1',
    skyTop: '#e0f2fe',
    skyBot: '#a5f3fc',
    hillColor: '#7dd3fc',
    groundColor: '#0284c7',
    monster: '🐙',
    skillType: 'dash'
  },
  {
    id: 'craftycorn',
    img: 'icons/craftycorn.jpg',
    power: '🌈',
    color: '#a855f7',
    bandColor: '#7e22ce',
    skyTop: '#f3e8ff',
    skyBot: '#e0e7ff',
    hillColor: '#c4b5fd',
    groundColor: '#8b5cf6',
    monster: '👾',
    skillType: 'split'
  },
  {
    id: 'kickin',
    img: 'icons/kickin.jpg',
    power: '🌟',
    color: '#eab308',
    bandColor: '#a16207',
    skyTop: '#fef9c3',
    skyBot: '#fed7aa',
    hillColor: '#fde047',
    groundColor: '#ca8a04',
    monster: '🐷',
    skillType: 'dive'
  },
  {
    id: 'catnap',
    img: 'icons/catnap.jpg',
    power: '🌙',
    color: '#8b5cf6',
    bandColor: '#5b21b6',
    skyTop: '#ede9fe',
    skyBot: '#c4b5fd',
    hillColor: '#a78bfa',
    groundColor: '#6d28d9',
    monster: '👻',
    skillType: 'vortex'
  }
];

// Balanced Block HP:
// - 'ice':   HP 2 (Shatters in 1 hit!)
// - 'wood':  HP 3 (Breaks in 1 fast hit or 2 light hits)
// - 'candy': HP 3 (Bouncy candy beams)
// - 'stone': HP 5 (Sturdy stone pillars — cracks on 1st hit, breaks on 2nd hit or 1 Mega/TNT hit!)
// - 'tnt':   HP 1 (Explodes in a 135px chain-reaction radius!)

const LEVEL_CASTLES = [
  // Stage 0: DogDay — Sunny Wood & Ice Twin Towers
  {
    blocks: [
      { x: 495, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 585, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 540, y: 354, w: 124, h: 24, type: 'wood' },
      { x: 505, y: 304, w: 26, h: 76, type: 'ice' },
      { x: 575, y: 304, w: 26, h: 76, type: 'ice' },
      { x: 540, y: 254, w: 110, h: 22, type: 'wood' },
      { x: 665, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 750, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 708, y: 354, w: 118, h: 24, type: 'wood' },
      { x: 625, y: 448, w: 38, h: 38, type: 'tnt' }
    ],
    monsters: [
      { x: 540, y: 446, r: 23, hp: 1, armor: '' },
      { x: 540, y: 318, r: 22, hp: 1, armor: '' },
      { x: 708, y: 446, r: 23, hp: 2, armor: '🪖' },
      { x: 708, y: 318, r: 22, hp: 1, armor: '' }
    ],
    stars: [
      { x: 445, y: 230, r: 20 },
      { x: 540, y: 185, r: 20 },
      { x: 708, y: 220, r: 20 }
    ]
  },

  // Stage 1: Hoppy — Ice Bridge & Stone Arch
  {
    blocks: [
      { x: 485, y: 420, w: 28, h: 104, type: 'ice' },
      { x: 575, y: 420, w: 28, h: 104, type: 'ice' },
      { x: 530, y: 354, w: 122, h: 24, type: 'wood' },
      { x: 530, y: 304, w: 28, h: 76, type: 'ice' },
      { x: 655, y: 420, w: 30, h: 104, type: 'stone' },
      { x: 745, y: 420, w: 30, h: 104, type: 'ice' },
      { x: 700, y: 354, w: 124, h: 24, type: 'stone' },
      { x: 615, y: 448, w: 38, h: 38, type: 'tnt' }
    ],
    monsters: [
      { x: 530, y: 446, r: 22, hp: 1, armor: '' },
      { x: 530, y: 242, r: 22, hp: 1, armor: '' },
      { x: 700, y: 446, r: 23, hp: 2, armor: '🪖' },
      { x: 700, y: 318, r: 22, hp: 2, armor: '🪖' }
    ],
    stars: [
      { x: 435, y: 240, r: 20 },
      { x: 615, y: 205, r: 20 },
      { x: 735, y: 215, r: 20 }
    ]
  },

  // Stage 2: Bobby — Candy Heart Pyramid
  {
    blocks: [
      { x: 480, y: 420, w: 28, h: 104, type: 'candy' },
      { x: 560, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 520, y: 354, w: 116, h: 24, type: 'candy' },
      { x: 635, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 715, y: 420, w: 28, h: 104, type: 'candy' },
      { x: 675, y: 354, w: 116, h: 24, type: 'candy' },
      { x: 598, y: 302, w: 28, h: 80, type: 'ice' },
      { x: 598, y: 248, w: 136, h: 24, type: 'candy' },
      { x: 598, y: 448, w: 38, h: 38, type: 'tnt' }
    ],
    monsters: [
      { x: 520, y: 446, r: 22, hp: 1, armor: '' },
      { x: 675, y: 446, r: 22, hp: 2, armor: '🪖' },
      { x: 520, y: 318, r: 22, hp: 1, armor: '' },
      { x: 675, y: 318, r: 22, hp: 1, armor: '' },
      { x: 598, y: 212, r: 24, hp: 2, armor: '👑' }
    ],
    stars: [
      { x: 465, y: 215, r: 20 },
      { x: 598, y: 145, r: 20 },
      { x: 730, y: 215, r: 20 }
    ]
  },

  // Stage 3: PickyPiggy — Watermelon Bunker + Twin TNT
  {
    blocks: [
      { x: 475, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 555, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 515, y: 354, w: 116, h: 24, type: 'wood' },
      { x: 515, y: 320, w: 38, h: 38, type: 'tnt' },
      { x: 645, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 735, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 690, y: 354, w: 120, h: 24, type: 'candy' },
      { x: 655, y: 302, w: 26, h: 80, type: 'ice' },
      { x: 725, y: 302, w: 26, h: 80, type: 'ice' },
      { x: 690, y: 248, w: 112, h: 24, type: 'wood' },
      { x: 600, y: 448, w: 38, h: 38, type: 'tnt' }
    ],
    monsters: [
      { x: 515, y: 446, r: 22, hp: 2, armor: '🪖' },
      { x: 690, y: 446, r: 24, hp: 2, armor: '👑' },
      { x: 690, y: 318, r: 22, hp: 1, armor: '' },
      { x: 690, y: 212, r: 22, hp: 1, armor: '' }
    ],
    stars: [
      { x: 455, y: 230, r: 20 },
      { x: 585, y: 195, r: 20 },
      { x: 690, y: 150, r: 20 }
    ]
  },

  // Stage 4: Bubba — Splash Ice Citadel
  {
    blocks: [
      { x: 480, y: 420, w: 28, h: 104, type: 'ice' },
      { x: 560, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 520, y: 354, w: 114, h: 24, type: 'ice' },
      { x: 520, y: 302, w: 28, h: 80, type: 'ice' },
      { x: 520, y: 248, w: 108, h: 24, type: 'wood' },
      { x: 650, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 740, y: 420, w: 28, h: 104, type: 'ice' },
      { x: 695, y: 354, w: 118, h: 24, type: 'ice' },
      { x: 695, y: 302, w: 28, h: 80, type: 'wood' },
      { x: 695, y: 248, w: 112, h: 24, type: 'candy' },
      { x: 605, y: 448, w: 38, h: 38, type: 'tnt' }
    ],
    monsters: [
      { x: 520, y: 446, r: 22, hp: 2, armor: '🪖' },
      { x: 520, y: 212, r: 22, hp: 1, armor: '' },
      { x: 695, y: 446, r: 24, hp: 2, armor: '👑' },
      { x: 695, y: 212, r: 22, hp: 2, armor: '🪖' }
    ],
    stars: [
      { x: 445, y: 245, r: 20 },
      { x: 605, y: 175, r: 20 },
      { x: 715, y: 145, r: 20 }
    ]
  },

  // Stage 5: CraftyCorn — Rainbow Triple-Tower
  {
    blocks: [
      { x: 470, y: 420, w: 28, h: 104, type: 'candy' },
      { x: 540, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 505, y: 354, w: 104, h: 24, type: 'candy' },
      { x: 600, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 670, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 635, y: 354, w: 104, h: 24, type: 'candy' },
      { x: 720, y: 420, w: 28, h: 104, type: 'ice' },
      { x: 780, y: 420, w: 28, h: 104, type: 'candy' },
      { x: 750, y: 354, w: 94, h: 24, type: 'wood' },
      { x: 570, y: 448, w: 36, h: 36, type: 'tnt' },
      { x: 635, y: 318, w: 36, h: 36, type: 'tnt' }
    ],
    monsters: [
      { x: 505, y: 446, r: 22, hp: 1, armor: '' },
      { x: 635, y: 446, r: 24, hp: 2, armor: '👑' },
      { x: 750, y: 446, r: 22, hp: 2, armor: '🪖' },
      { x: 505, y: 318, r: 21, hp: 1, armor: '' },
      { x: 750, y: 318, r: 21, hp: 1, armor: '' }
    ],
    stars: [
      { x: 505, y: 215, r: 20 },
      { x: 635, y: 185, r: 20 },
      { x: 750, y: 215, r: 20 }
    ]
  },

  // Stage 6: KickinChicken — Golden Star Fortress
  {
    blocks: [
      { x: 485, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 565, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 525, y: 354, w: 112, h: 24, type: 'wood' },
      { x: 525, y: 302, w: 28, h: 80, type: 'wood' },
      { x: 525, y: 248, w: 108, h: 24, type: 'candy' },
      { x: 655, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 745, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 700, y: 354, w: 120, h: 24, type: 'stone' },
      { x: 665, y: 302, w: 26, h: 80, type: 'ice' },
      { x: 735, y: 302, w: 26, h: 80, type: 'ice' },
      { x: 700, y: 248, w: 114, h: 24, type: 'wood' },
      { x: 610, y: 448, w: 38, h: 38, type: 'tnt' }
    ],
    monsters: [
      { x: 525, y: 446, r: 22, hp: 2, armor: '🪖' },
      { x: 525, y: 212, r: 22, hp: 1, armor: '' },
      { x: 700, y: 446, r: 24, hp: 2, armor: '👑' },
      { x: 700, y: 318, r: 22, hp: 2, armor: '🪖' },
      { x: 700, y: 212, r: 22, hp: 2, armor: '👑' }
    ],
    stars: [
      { x: 450, y: 235, r: 20 },
      { x: 610, y: 180, r: 20 },
      { x: 700, y: 145, r: 20 }
    ]
  },

  // Stage 7: CatNap — Dreamy Moon Grand Castle
  {
    blocks: [
      { x: 480, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 555, y: 420, w: 28, h: 104, type: 'ice' },
      { x: 518, y: 354, w: 108, h: 24, type: 'candy' },
      { x: 518, y: 302, w: 28, h: 80, type: 'ice' },
      { x: 518, y: 248, w: 106, h: 24, type: 'wood' },
      { x: 640, y: 420, w: 28, h: 104, type: 'ice' },
      { x: 710, y: 420, w: 28, h: 104, type: 'stone' },
      { x: 775, y: 420, w: 28, h: 104, type: 'wood' },
      { x: 675, y: 354, w: 104, h: 24, type: 'wood' },
      { x: 742, y: 354, w: 96, h: 24, type: 'candy' },
      { x: 708, y: 302, w: 28, h: 80, type: 'wood' },
      { x: 708, y: 248, w: 132, h: 24, type: 'candy' },
      { x: 598, y: 448, w: 38, h: 38, type: 'tnt' },
      { x: 675, y: 318, w: 36, h: 36, type: 'tnt' }
    ],
    monsters: [
      { x: 518, y: 446, r: 22, hp: 2, armor: '🪖' },
      { x: 518, y: 212, r: 22, hp: 1, armor: '' },
      { x: 675, y: 446, r: 24, hp: 2, armor: '👑' },
      { x: 742, y: 446, r: 22, hp: 2, armor: '🪖' },
      { x: 708, y: 212, r: 24, hp: 2, armor: '👑' }
    ],
    stars: [
      { x: 450, y: 225, r: 20 },
      { x: 605, y: 170, r: 20 },
      { x: 708, y: 140, r: 20 }
    ]
  }
];

// ============================================================================
// WebAudio Cute Sound Synthesizer
// ============================================================================
class SoundBox {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.14, gainVal = 0.14, slideFreq = null) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (slideFreq) {
        osc.frequency.exponentialRampToValueAtTime(slideFreq, now + duration);
      }
      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (_) {}
  }

  playLaunch() {
    this.playTone(230, 'sine', 0.22, 0.16, 660);
  }

  playPop() {
    this.playTone(500, 'triangle', 0.13, 0.17, 900);
  }

  playClank() {
    this.playTone(210, 'square', 0.11, 0.14, 130);
  }

  playBoom() {
    this.playTone(145, 'sawtooth', 0.28, 0.22, 44);
  }

  playStar() {
    this.playTone(587, 'sine', 0.12, 0.15, 880);
    setTimeout(() => this.playTone(880, 'sine', 0.18, 0.15, 1174), 70);
  }

  playWin() {
    const notes = [523, 659, 784, 1046];
    notes.forEach((n, i) => {
      setTimeout(() => this.playTone(n, 'triangle', 0.22, 0.16), i * 110);
    });
  }
}

const sfx = new SoundBox();

// ============================================================================
// Game State & Image Preloader
// ============================================================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const critterImages = {};
CRITTERS.forEach((c) => {
  const img = new Image();
  img.src = c.img;
  critterImages[c.id] = img;
});

let currentLevel = 0;
let completedLevels = new Set();
let starsEarned = 0;
let ammoRemaining = 5;
let hasShotThisLevel = false;
let levelWon = false;
let animTick = 0;

// Active Power Toggles
let megaMode = false;
let nextShotTriple = false;
let longArcGuide = false;

// Active Entities
let slingPull = {
  dragging: false,
  x: SLING_X,
  y: SLING_Y
};

let projectiles = [];
let blocks = [];
let monsters = [];
let stars = [];
let particles = [];
let shockwaves = [];
let clouds = [
  { x: 120, y: 70, s: 1.0, v: 0.22 },
  { x: 390, y: 52, s: 0.85, v: 0.16 },
  { x: 670, y: 80, s: 1.1, v: 0.2 }
];

// ============================================================================
// DOM Elements & UI Builders
// ============================================================================
const levelNavBar = document.getElementById('levelNavBar');
const sideCritterImg = document.getElementById('sideCritterImg');
const critterPowerBadge = document.getElementById('critterPowerBadge');
const targetSlotsRow = document.getElementById('targetSlotsRow');
const floatingToast = document.getElementById('floatingToast');

const btnShootNow = document.getElementById('btnShootNow');
const btnMegaPower = document.getElementById('btnMegaPower');
const btnTripleShot = document.getElementById('btnTripleShot');
const btnMeteorWin = document.getElementById('btnMeteorWin');
const btnResetLevel = document.getElementById('btnResetLevel');
const btnSoundToggle = document.getElementById('btnSoundToggle');

const winModal = document.getElementById('winModal');
const winCritterImg = document.getElementById('winCritterImg');
const winPowerBadge = document.getElementById('winPowerBadge');
const winStarsDisplay = document.getElementById('winStarsDisplay');
const btnWinReplay = document.getElementById('btnWinReplay');
const btnWinNext = document.getElementById('btnWinNext');

const finaleModal = document.getElementById('finaleModal');
const finaleCrittersGrid = document.getElementById('finaleCrittersGrid');
const btnFinaleClose = document.getElementById('btnFinaleClose');

function renderTopBar() {
  levelNavBar.innerHTML = '';
  CRITTERS.forEach((c, idx) => {
    const btn = document.createElement('button');
    btn.className = 'level-pill' +
      (idx === currentLevel ? ' active' : '') +
      (completedLevels.has(idx) ? ' completed' : '');
    btn.setAttribute('aria-label', c.id);

    const img = document.createElement('img');
    img.src = c.img;
    img.alt = '';
    btn.appendChild(img);

    const badge = document.createElement('span');
    badge.className = 'pill-stars';
    badge.textContent = completedLevels.has(idx) ? '⭐⭐⭐' : c.power;
    btn.appendChild(badge);

    btn.addEventListener('click', () => {
      sfx.playPop();
      loadLevel(idx);
    });
    levelNavBar.appendChild(btn);
  });
}

function updateDockButtonsUI() {
  btnMegaPower.classList.toggle('active', megaMode);
  btnTripleShot.classList.toggle('active', nextShotTriple);
  btnMeteorWin.classList.toggle('active', longArcGuide);
}

function updateVisualHUD() {
  const critter = CRITTERS[currentLevel];
  sideCritterImg.src = critter.img;
  critterPowerBadge.textContent = critter.power;

  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`starSlot${i}`);
    if (slot) {
      slot.classList.toggle('collected', i < starsEarned);
    }
  }

  targetSlotsRow.innerHTML = '';
  monsters.forEach((m) => {
    const pill = document.createElement('div');
    pill.className = 'hud-target-pill' + (m.popped ? ' popped' : '');
    pill.textContent = m.popped ? '💥' : (m.armor || critter.monster);
    targetSlotsRow.appendChild(pill);
  });

  updateDockButtonsUI();
}

let toastTimer = null;
function showEmojiToast(emojis) {
  floatingToast.textContent = emojis;
  floatingToast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    floatingToast.classList.add('hidden');
  }, 1100);
}

// ============================================================================
// Level Initialization
// ============================================================================
function getBlockMaxHp(type) {
  if (type === 'stone') return 5;
  if (type === 'candy') return 3;
  if (type === 'wood') return 3;
  if (type === 'ice') return 2;
  return 1; // tnt
}

function loadLevel(idx) {
  currentLevel = (idx + CRITTERS.length) % CRITTERS.length;
  const layout = LEVEL_CASTLES[currentLevel];

  winModal.classList.add('hidden');
  finaleModal.classList.add('hidden');

  starsEarned = 0;
  ammoRemaining = 5;
  hasShotThisLevel = false;
  levelWon = false;

  projectiles = [];
  particles = [];
  shockwaves = [];
  slingPull.dragging = false;
  slingPull.x = SLING_X;
  slingPull.y = SLING_Y;

  blocks = layout.blocks.map((b) => {
    const maxHp = getBlockMaxHp(b.type);
    return {
      x: b.x,
      y: b.y,
      w: b.w,
      h: b.h,
      type: b.type,
      hp: maxHp,
      maxHp,
      destroyed: false,
      shake: 0
    };
  });

  monsters = layout.monsters.map((m, i) => ({
    id: i,
    x: m.x,
    y: m.y,
    vy: 0,
    r: m.r,
    hp: m.hp || 1,
    maxHp: m.hp || 1,
    armor: m.armor || '',
    popped: false,
    hurtCooldown: 0,
    phase: i * 1.3
  }));

  stars = layout.stars.map((s, i) => ({
    id: i,
    x: s.x,
    y: s.y,
    baseY: s.y,
    r: s.r,
    collected: false,
    phase: i * 2.1
  }));

  renderTopBar();
  updateVisualHUD();
}

// ============================================================================
// Launching & Mid-Air Special Skills
// ============================================================================
function launchFromSlingshot(vx, vy) {
  if (levelWon) return;

  const critter = CRITTERS[currentLevel];
  hasShotThisLevel = true;
  ammoRemaining = Math.max(1, ammoRemaining - 1);
  // Auto-refill squad when down to last Critter so progress is never lost!
  if (ammoRemaining <= 1) {
    setTimeout(() => {
      ammoRemaining = 5;
    }, 650);
  }
  sfx.playLaunch();

  const isMega = megaMode;
  const isTriple = nextShotTriple;
  nextShotTriple = false;
  updateDockButtonsUI();

  const offsets = isTriple ? [-1.9, 0, 1.9] : [0];
  offsets.forEach((offVy, i) => {
    projectiles.push({
      x: SLING_X,
      y: SLING_Y,
      vx: vx + (i - 1) * (isTriple ? 0.6 : 0),
      vy: vy + offVy,
      r: isMega ? 31 : 23,
      isMega,
      critter,
      powerUsed: i !== 0,
      bounces: 0,
      age: 0,
      hitSet: new Set(),
      trail: []
    });
  });

  slingPull.dragging = false;
  slingPull.x = SLING_X;
  slingPull.y = SLING_Y;
}

// Helper shot for the Left Dock 🏹 button (fires a helpful arc toward the castle, with slight natural variance)
function fireHelperShot() {
  if (levelWon) return;
  const target = monsters.find((m) => !m.popped) || { x: 600, y: 340 };
  const dx = Math.max(140, target.x - SLING_X);
  const dy = (target.y - 12) - SLING_Y;
  const frames = Math.max(30, Math.min(50, dx / 11.5));
  const vx = dx / frames;
  const vy = (dy - 0.5 * GRAVITY * frames * frames) / frames;
  launchFromSlingshot(vx, vy);
  showEmojiToast('🏹🐾');
}

function activateInFlightPower(proj) {
  if (!proj || proj.powerUsed) return;
  proj.powerUsed = true;
  const pEmoji = proj.critter.power;
  const skill = proj.critter.skillType;
  sfx.playStar();
  showEmojiToast(`${pEmoji}⚡`);

  spawnBurst(proj.x, proj.y, pEmoji, 10);
  shockwaves.push({
    x: proj.x,
    y: proj.y,
    r: 14,
    maxR: 115,
    color: proj.critter.color,
    alpha: 1.0
  });

  if (skill === 'dive') {
    proj.vx *= 0.45;
    proj.vy = 13.5;
    proj.isMega = true;
  } else if (skill === 'dash') {
    proj.vx = Math.max(13.5, proj.vx * 1.6);
    proj.vy = -1.2;
    proj.isMega = true;
  } else if (skill === 'heavy') {
    proj.r = 32;
    proj.vy = Math.max(9, proj.vy + 6.5);
    proj.isMega = true;
  } else if (skill === 'split') {
    [-2.6, 2.6].forEach((dv) => {
      projectiles.push({
        x: proj.x,
        y: proj.y,
        vx: proj.vx * 0.96,
        vy: proj.vy + dv,
        r: 20,
        isMega: proj.isMega,
        critter: proj.critter,
        powerUsed: true,
        bounces: 0,
        age: proj.age,
        hitSet: new Set(),
        trail: []
      });
    });
  } else {
    // Radial Shockwave / Vortex: damages nearby blocks & monsters within 130px
    blocks.forEach((b) => {
      if (!b.destroyed && Math.hypot(b.x - proj.x, b.y - proj.y) < 130) {
        if (b.type === 'tnt') {
          detonateTNT(b);
        } else {
          b.hp -= 3;
          b.shake = 8;
          if (b.hp <= 0) b.destroyed = true;
        }
      }
    });
    monsters.forEach((m) => {
      if (!m.popped && Math.hypot(m.x - proj.x, m.y - proj.y) < 130) {
        damageMonster(m, 1);
      }
    });
  }
}

// ============================================================================
// Explosions, Damage, Collisions & Win Checks
// ============================================================================
function spawnBurst(x, y, emoji, count = 9) {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const speed = 2.2 + Math.random() * 5.0;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.8,
      emoji,
      size: 18 + Math.random() * 9,
      life: 1.0
    });
  }
}

function detonateTNT(block) {
  if (block.destroyed) return;
  block.destroyed = true;
  sfx.playBoom();
  showEmojiToast('🧨💥');

  shockwaves.push({
    x: block.x,
    y: block.y,
    r: 18,
    maxR: 140,
    color: '#f97316',
    alpha: 1.0
  });

  spawnBurst(block.x, block.y, '💥', 12);
  spawnBurst(block.x, block.y, '⭐', 6);

  const blastRadius = 136;
  blocks.forEach((other) => {
    if (!other.destroyed && Math.hypot(other.x - block.x, other.y - block.y) < blastRadius) {
      if (other.type === 'tnt') {
        detonateTNT(other);
      } else {
        other.hp -= 6;
        other.shake = 8;
        if (other.hp <= 0) {
          other.destroyed = true;
          spawnBurst(other.x, other.y, '✨', 4);
        }
      }
    }
  });

  monsters.forEach((m) => {
    if (!m.popped && Math.hypot(m.x - block.x, m.y - block.y) < blastRadius) {
      damageMonster(m, 2);
    }
  });

  stars.forEach((s) => {
    if (!s.collected && Math.hypot(s.x - block.x, s.y - block.y) < blastRadius + 15) {
      collectStar(s);
    }
  });
}

function collectStar(star) {
  if (star.collected) return;
  star.collected = true;
  starsEarned = Math.min(3, starsEarned + 1);
  sfx.playStar();
  spawnBurst(star.x, star.y, '⭐', 9);
  updateVisualHUD();
}

function damageMonster(monster, dmg = 1) {
  if (monster.popped || monster.hurtCooldown > 0) return;
  monster.hp -= dmg;
  monster.hurtCooldown = 10;

  if (monster.hp <= 0) {
    monster.popped = true;
    sfx.playPop();
    const critter = CRITTERS[currentLevel];
    spawnBurst(monster.x, monster.y, '💥', 9);
    spawnBurst(monster.x, monster.y, critter.power, 7);
    updateVisualHUD();
    checkStageClear();
  } else {
    sfx.playClank();
    spawnBurst(monster.x, monster.y - 12, monster.armor || '🛡️', 5);
    monster.armor = '';
    updateVisualHUD();
  }
}

function checkStageClear() {
  if (levelWon) return;
  const allPopped = monsters.every((m) => m.popped);
  if (!allPopped) return;

  levelWon = true;
  const finalStars = Math.max(2, Math.min(3, starsEarned + 1));
  starsEarned = finalStars;

  completedLevels.add(currentLevel);
  renderTopBar();
  updateVisualHUD();
  sfx.playWin();
  showEmojiToast('🎉⭐⭐⭐🎉');

  if (winStarsDisplay) {
    const bigStars = winStarsDisplay.querySelectorAll('.win-star-big');
    bigStars.forEach((el, idx) => {
      el.classList.toggle('earned', idx < finalStars);
    });
  }

  setTimeout(() => {
    if (completedLevels.size === CRITTERS.length) {
      showFinaleModal();
    } else {
      const critter = CRITTERS[currentLevel];
      winCritterImg.src = critter.img;
      winPowerBadge.textContent = critter.power;
      winModal.classList.remove('hidden');
    }
  }, 850);
}

function showFinaleModal() {
  finaleCrittersGrid.innerHTML = '';
  CRITTERS.forEach((c) => {
    const badge = document.createElement('div');
    badge.className = 'finale-critter-tile';
    const img = document.createElement('img');
    img.src = c.img;
    img.alt = '';
    const sp = document.createElement('span');
    sp.textContent = c.power;
    badge.appendChild(img);
    badge.appendChild(sp);
    finaleCrittersGrid.appendChild(badge);
  });
  finaleModal.classList.remove('hidden');
}

// ============================================================================
// Physics Update Step
// ============================================================================
function updatePhysics() {
  animTick++;

  clouds.forEach((c) => {
    c.x += c.v;
    if (c.x > W + 80) c.x = -80;
  });

  stars.forEach((s) => {
    if (!s.collected) {
      s.y = s.baseY + Math.sin(animTick * 0.06 + s.phase) * 7;
    }
  });

  // Settle blocks downward if supporting blocks beneath were smashed
  blocks.forEach((b) => {
    if (b.destroyed) return;
    if (b.shake > 0) b.shake *= 0.8;
    const bottom = b.y + b.h / 2;
    if (bottom < GROUND_Y) {
      const supported = blocks.some((other) => {
        if (other === b || other.destroyed) return false;
        const horizOverlap = Math.abs(other.x - b.x) < (other.w + b.w) * 0.46;
        const vertTouch = Math.abs((other.y - other.h / 2) - bottom) < 10;
        return horizOverlap && vertTouch;
      });
      if (!supported) {
        b.y = Math.min(GROUND_Y - b.h / 2, b.y + 5.0);
        // Falling block crushes monsters underneath!
        monsters.forEach((m) => {
          if (!m.popped && Math.abs(m.x - b.x) < b.w * 0.55 && Math.abs((m.y - m.r) - bottom) < 14) {
            damageMonster(m, 2);
          }
        });
      }
    }
  });

  // Update monsters & fall damage
  monsters.forEach((m) => {
    if (m.popped) return;
    if (m.hurtCooldown > 0) m.hurtCooldown--;
    const bottom = m.y + m.r;
    if (bottom < GROUND_Y) {
      const supported = blocks.some((b) => {
        if (b.destroyed) return false;
        const horizOverlap = Math.abs(b.x - m.x) < b.w * 0.55 + m.r * 0.4;
        const topEdge = b.y - b.h / 2;
        return horizOverlap && bottom >= topEdge - 6 && bottom <= topEdge + 14;
      });
      if (!supported) {
        m.vy = Math.min(9.5, m.vy + 0.44);
        m.y += m.vy;
        if (m.y + m.r >= GROUND_Y) {
          m.y = GROUND_Y - m.r;
          if (m.vy > 4.8) {
            damageMonster(m, 2);
          }
          m.vy = 0;
        }
      } else {
        m.vy = 0;
      }
    }
  });

  // Update flying Critter projectiles
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    p.age++;
    p.vy += GRAVITY;
    p.x += p.vx;
    p.y += p.vy;

    if (p.age % 2 === 0 && p.trail.length < 24) {
      p.trail.push({ x: p.x, y: p.y });
    }

    // Ground bounce
    if (p.y + p.r >= GROUND_Y) {
      p.y = GROUND_Y - p.r;
      p.vy = -p.vy * 0.54;
      p.vx *= 0.8;
      p.bounces++;
      sfx.playPop();
    }

    // Collect floating stars
    stars.forEach((s) => {
      if (!s.collected && Math.hypot(p.x - s.x, p.y - s.y) < p.r + s.r + 10) {
        collectStar(s);
      }
    });

    // Hit castle blocks
    blocks.forEach((b, bIdx) => {
      if (b.destroyed) return;
      const closestX = Math.max(b.x - b.w / 2, Math.min(p.x, b.x + b.w / 2));
      const closestY = Math.max(b.y - b.h / 2, Math.min(p.y, b.y + b.h / 2));
      const dist = Math.hypot(p.x - closestX, p.y - closestY);

      if (dist < p.r + 3) {
        if (b.type === 'tnt') {
          detonateTNT(b);
          return;
        }

        const hitKey = `b_${bIdx}_${Math.floor(p.age / 5)}`;
        if (p.hitSet.has(hitKey)) return;
        p.hitSet.add(hitKey);

        const speed = Math.hypot(p.vx, p.vy);
        let dmg = speed > 7.5 ? 3 : 2;
        if (p.isMega) dmg += 4;

        b.hp -= dmg;
        b.shake = 7;

        if (b.hp <= 0) {
          b.destroyed = true;
          sfx.playPop();
          const burstIcon = b.type === 'stone' ? '🪨' : b.type === 'candy' ? '🍬' : b.type === 'ice' ? '❄️' : '🪵';
          spawnBurst(b.x, b.y, burstIcon, 6);
          p.vx *= p.isMega ? 0.88 : 0.72;
          p.vy *= p.isMega ? 0.88 : 0.75;
        } else {
          sfx.playClank();
          const overlapX = Math.abs(p.x - b.x) / (b.w / 2);
          const overlapY = Math.abs(p.y - b.y) / (b.h / 2);
          const bounceFactor = b.type === 'candy' ? 0.8 : 0.55;
          if (overlapX > overlapY) {
            p.vx = -p.vx * bounceFactor;
            p.x += Math.sign(p.x - b.x) * 5;
          } else {
            p.vy = -p.vy * bounceFactor;
            p.y += Math.sign(p.y - b.y) * 5;
          }
        }
      }
    });

    // Hit monsters
    monsters.forEach((m) => {
      if (!m.popped && Math.hypot(p.x - m.x, p.y - m.y) < p.r + m.r + 7) {
        damageMonster(m, p.isMega ? 2 : 1);
      }
    });

    if (p.x > W + 80 || p.x < -80 || p.age > 210 || (p.bounces > 3 && Math.abs(p.vx) < 0.75)) {
      projectiles.splice(i, 1);
    }
  }

  for (let i = shockwaves.length - 1; i >= 0; i--) {
    const sw = shockwaves[i];
    sw.r += 8;
    sw.alpha -= 0.06;
    if (sw.alpha <= 0 || sw.r >= sw.maxR) {
      shockwaves.splice(i, 1);
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const pt = particles[i];
    pt.x += pt.vx;
    pt.y += pt.vy;
    pt.vy += 0.18;
    pt.life -= 0.028;
    if (pt.life <= 0) {
      particles.splice(i, 1);
    }
  }
}

// ============================================================================
// Canvas Rendering (100% Zero Text, Full Opaque Emojis)
// ============================================================================
function drawScene() {
  const critter = CRITTERS[currentLevel];

  // 1. Sky Gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
  skyGrad.addColorStop(0, critter.skyTop);
  skyGrad.addColorStop(1, critter.skyBot);
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, W, GROUND_Y);

  // 2. Fluffy Clouds
  clouds.forEach((c) => {
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.scale(c.s, c.s);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.82)';
    ctx.beginPath();
    ctx.arc(0, 0, 26, 0, Math.PI * 2);
    ctx.arc(24, -6, 22, 0, Math.PI * 2);
    ctx.arc(46, 2, 20, 0, Math.PI * 2);
    ctx.arc(-22, 4, 19, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  // 3. Soft Rolling Toy Hills & Ground
  ctx.fillStyle = critter.hillColor;
  ctx.beginPath();
  ctx.arc(190, GROUND_Y + 40, 180, Math.PI, Math.PI * 2);
  ctx.arc(580, GROUND_Y + 55, 240, Math.PI, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = critter.groundColor;
  ctx.fillRect(0, GROUND_Y, W, H - GROUND_Y);

  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  ctx.fillRect(0, GROUND_Y, W, 8);

  // 4. Waiting Critter Squad Queue by the Slingshot
  const waitingCount = Math.max(0, ammoRemaining - 1);
  for (let q = 0; q < waitingCount; q++) {
    const qx = 30 + q * 28;
    const bounce = Math.abs(Math.sin(animTick * 0.08 + q * 1.1)) * 5;
    const qy = GROUND_Y - 18 - bounce;
    drawCritterOrb(qx, qy, 15, critter, false);
  }

  // 5. Slingshot Back Fork + Aiming Trajectory Preview
  drawSlingshotBack(critter);

  // 6. Floating Star Balloons
  stars.forEach((s) => {
    if (s.collected) return;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y - 16);
    ctx.lineTo(s.x, s.y + 4);
    ctx.stroke();

    ctx.fillStyle = 'rgba(250, 204, 21, 0.28)';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r + 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = '26px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🎈', s.x, s.y - 23);
    ctx.fillText('⭐', s.x, s.y + 3);
    ctx.restore();
  });

  // 7. Destructible Castle Blocks (Stone, Wood, Candy, Ice, TNT) with Crack States
  blocks.forEach((b) => {
    if (b.destroyed) return;
    ctx.save();
    const sx = b.shake ? (Math.random() - 0.5) * b.shake : 0;
    ctx.translate(b.x + sx, b.y);

    if (b.type === 'tnt') {
      ctx.fillStyle = '#ef4444';
      ctx.strokeStyle = '#991b1b';
      ctx.lineWidth = 3.5;
      roundRect(ctx, -b.w / 2, -b.h / 2, b.w, b.h, 8);
      ctx.fill();
      ctx.stroke();

      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffffff';
      ctx.font = '22px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🧨', 0, 1);
    } else {
      if (b.type === 'stone') {
        ctx.fillStyle = '#64748b';
        ctx.strokeStyle = '#1e293b';
      } else if (b.type === 'wood') {
        ctx.fillStyle = '#d97706';
        ctx.strokeStyle = '#78350f';
      } else if (b.type === 'ice') {
        ctx.fillStyle = 'rgba(125, 211, 252, 0.88)';
        ctx.strokeStyle = '#0284c7';
      } else {
        ctx.fillStyle = '#f472b6';
        ctx.strokeStyle = '#be185d';
      }
      ctx.lineWidth = 3;
      roundRect(ctx, -b.w / 2, -b.h / 2, b.w, b.h, 7);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = 'rgba(255,255,255,0.28)';
      roundRect(ctx, -b.w / 2 + 3, -b.h / 2 + 3, b.w - 6, 5, 3);
      ctx.fill();

      if (b.hp < b.maxHp) {
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.65)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-b.w * 0.25, -b.h * 0.25);
        ctx.lineTo(0, 0);
        ctx.lineTo(b.w * 0.2, -b.h * 0.1);
        ctx.stroke();
      }
    }
    ctx.restore();
  });

  // 8. Target Monsters + Helmet / King Crown Badges
  monsters.forEach((m) => {
    if (m.popped) return;
    ctx.save();
    const squish = 1 + Math.sin(animTick * 0.1 + m.phase) * 0.05;
    ctx.translate(m.x, m.y);
    ctx.scale(squish, 2 - squish);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.strokeStyle = m.armor === '👑' ? '#eab308' : m.armor === '🪖' ? '#94a3b8' : '#4ade80';
    ctx.lineWidth = m.hp >= 2 ? 4.2 : 3.2;
    ctx.beginPath();
    ctx.arc(0, 0, m.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = `${Math.round(m.r * 1.3)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(critter.monster, 0, 2);

    if (m.armor) {
      ctx.font = '20px sans-serif';
      ctx.fillText(m.armor, 0, -m.r + 2);
    }
    ctx.restore();
  });

  // 9. Flying Projectiles & Rainbow Trails
  const rainbowColors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];
  projectiles.forEach((p) => {
    p.trail.forEach((pt, idx) => {
      ctx.save();
      ctx.fillStyle = rainbowColors[idx % rainbowColors.length];
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3.5 + (idx / p.trail.length) * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    drawCritterOrb(p.x, p.y, p.r, p.critter, true);
  });

  // 10. Ready Critter on Slingshot + Front Fork
  drawSlingshotFront(critter);

  // 11. Shockwaves & Emoji Particles
  shockwaves.forEach((sw) => {
    ctx.save();
    ctx.strokeStyle = sw.color;
    ctx.globalAlpha = Math.max(0, sw.alpha);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  });

  particles.forEach((pt) => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, pt.life);
    ctx.fillStyle = '#ffffff';
    ctx.font = `${Math.round(pt.size)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pt.emoji, pt.x, pt.y);
    ctx.restore();
  });

  // 12. Animated Finger Pull Guide (Before first shot)
  if (!hasShotThisLevel && !slingPull.dragging && projectiles.length === 0) {
    drawVisualTutorialGuide();
  }
}

function drawCritterOrb(x, y, r, critter, showPowerBadge) {
  ctx.save();
  ctx.translate(x, y);

  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = critter.color;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  const img = critterImages[critter.id];
  if (img && img.complete && img.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, r - 2.5, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(img, -r, -r, r * 2, r * 2);
    ctx.restore();
  }

  if (showPowerBadge) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = `${Math.max(14, Math.round(r * 0.7))}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(critter.power, r * 0.72, -r * 0.72);
  }
  ctx.restore();
}

function drawSlingshotBack(critter) {
  ctx.save();
  ctx.strokeStyle = '#78350f';
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(SLING_X, GROUND_Y);
  ctx.lineTo(SLING_X, SLING_Y + 28);
  ctx.lineTo(SLING_X + 18, SLING_Y - 12);
  ctx.stroke();

  const pouchX = slingPull.x;
  const pouchY = slingPull.y;
  ctx.strokeStyle = critter.bandColor;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(SLING_X + 18, SLING_Y - 12);
  ctx.lineTo(pouchX, pouchY);
  ctx.stroke();

  // Balanced Trajectory Preview Dots while pulling (10 dots standard, 18 dots with 💡 Guide toggle)
  if (slingPull.dragging) {
    const dx = SLING_X - pouchX;
    const dy = SLING_Y - slingPull.y;
    const vx = dx * 0.215;
    const vy = dy * 0.215;
    const maxDots = longArcGuide ? 18 : 10;
    const rainbow = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];
    for (let step = 1; step <= maxDots; step++) {
      const t = step * 2.8;
      const px = SLING_X + vx * t;
      const py = SLING_Y + vy * t + 0.5 * GRAVITY * t * t;
      if (py > GROUND_Y) break;
      ctx.fillStyle = rainbow[step % rainbow.length];
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(4, 8.5 - step * 0.28), 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawSlingshotFront(critter) {
  ctx.save();
  const pouchX = slingPull.x;
  const pouchY = slingPull.y;
  const orbR = megaMode ? 31 : 23;

  drawCritterOrb(pouchX, pouchY, orbR, critter, true);

  ctx.strokeStyle = critter.bandColor;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(SLING_X - 16, SLING_Y - 8);
  ctx.lineTo(pouchX - 6, pouchY + 4);
  ctx.stroke();

  ctx.strokeStyle = '#92400e';
  ctx.lineWidth = 13;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(SLING_X, SLING_Y + 28);
  ctx.lineTo(SLING_X - 16, SLING_Y - 8);
  ctx.stroke();
  ctx.restore();
}

function drawVisualTutorialGuide() {
  const t = (animTick % 90) / 90;
  const pullProgress = Math.sin(t * Math.PI);
  const hx = SLING_X - pullProgress * 72;
  const hy = SLING_Y + pullProgress * 28;

  ctx.save();
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#ffffff';
  ctx.font = '38px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('👆', hx, hy + 26);
  ctx.restore();
}

function roundRect(context, x, y, w, h, r) {
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + w, y, x + w, y + h, r);
  context.arcTo(x + w, y + h, x, y + h, r);
  context.arcTo(x, y + h, x, y, r);
  context.arcTo(x, y, x + w, y, r);
  context.closePath();
}

// ============================================================================
// Pointer & Touch Controls (Easy Slingshot Pull + Mid-Air Skill Tap)
// ============================================================================
function getCanvasCoords(e) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: ((clientX - rect.left) / rect.width) * W,
    y: ((clientY - rect.top) / rect.height) * H
  };
}

canvas.addEventListener('pointerdown', (e) => {
  if (levelWon) return;
  const pt = getCanvasCoords(e);

  // 1. If a Critter is flying in mid-air, tapping triggers its Special Skill!
  const activeProj = projectiles.find((p) => !p.powerUsed && p.x > SLING_X + 60);
  if (activeProj) {
    activateInFlightPower(activeProj);
    return;
  }

  // 2. Pull the slingshot from anywhere on the left half of the screen (easy to grab!)
  if (pt.x < 390) {
    slingPull.dragging = true;
    updateSlingPull(pt.x, pt.y);
  } else {
    showEmojiToast('👈 🏹');
  }
});

window.addEventListener('pointermove', (e) => {
  if (!slingPull.dragging) return;
  const pt = getCanvasCoords(e);
  updateSlingPull(pt.x, pt.y);
});

window.addEventListener('pointerup', () => {
  if (!slingPull.dragging) return;
  const dx = SLING_X - slingPull.x;
  const dy = SLING_Y - slingPull.y;
  const pullDist = Math.hypot(dx, dy);

  if (pullDist > 16) {
    launchFromSlingshot(dx * 0.215, dy * 0.215);
  } else {
    slingPull.dragging = false;
    slingPull.x = SLING_X;
    slingPull.y = SLING_Y;
  }
});

function updateSlingPull(px, py) {
  let dx = px - SLING_X;
  let dy = py - SLING_Y;
  const dist = Math.hypot(dx, dy);
  if (dist > MAX_PULL) {
    dx = (dx / dist) * MAX_PULL;
    dy = (dy / dist) * MAX_PULL;
  }
  if (dx > 20) dx = -Math.abs(dx);
  slingPull.x = SLING_X + dx;
  slingPull.y = Math.min(GROUND_Y - 22, SLING_Y + dy);
}

// ============================================================================
// Left Dock Buttons (Repeatable Kid-Friendly Boosts + Manual Aiming)
// ============================================================================
btnShootNow.addEventListener('click', () => {
  const activeProj = projectiles.find((p) => !p.powerUsed && p.x > SLING_X + 60);
  if (activeProj) {
    activateInFlightPower(activeProj);
  } else {
    fireHelperShot();
  }
});

btnMegaPower.addEventListener('click', () => {
  megaMode = !megaMode;
  sfx.playStar();
  updateDockButtonsUI();
  showEmojiToast(megaMode ? '💥🐾⬆️' : '🐾');
});

btnTripleShot.addEventListener('click', () => {
  nextShotTriple = !nextShotTriple;
  sfx.playStar();
  updateDockButtonsUI();
  showEmojiToast(nextShotTriple ? '🌈🐾🐾🐾' : '🐾');
});

btnMeteorWin.addEventListener('click', () => {
  longArcGuide = !longArcGuide;
  sfx.playStar();
  updateDockButtonsUI();
  showEmojiToast(longArcGuide ? '💡🎯' : '🐾');
});

btnResetLevel.addEventListener('click', () => {
  sfx.playPop();
  loadLevel(currentLevel);
  showEmojiToast('🔄✨');
});

btnSoundToggle.addEventListener('click', () => {
  sfx.enabled = !sfx.enabled;
  btnSoundToggle.textContent = sfx.enabled ? '🔊' : '🔇';
  btnSoundToggle.classList.toggle('muted', !sfx.enabled);
  if (sfx.enabled) sfx.playPop();
});

btnWinReplay.addEventListener('click', () => {
  sfx.playPop();
  loadLevel(currentLevel);
});

btnWinNext.addEventListener('click', () => {
  sfx.playStar();
  loadLevel((currentLevel + 1) % CRITTERS.length);
});

btnFinaleClose.addEventListener('click', () => {
  sfx.playWin();
  completedLevels.clear();
  loadLevel(0);
});

// ============================================================================
// Main Loop
// ============================================================================
function gameLoop() {
  updatePhysics();
  drawScene();
  requestAnimationFrame(gameLoop);
}

loadLevel(0);
requestAnimationFrame(gameLoop);
