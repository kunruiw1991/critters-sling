// ============================================================================
// 🏹🐾💥 Angry Critters: Rainbow Slingshot! (100% Zero-Text Edition for Kids)
// Pure Visual Icons, Critter Avatars, Ballistic Slingshot, Tap-to-Shoot & Toy Powers
// ============================================================================

const W = 820;
const H = 540;
const GROUND_Y = 468;
const SLING_X = 160;
const SLING_Y = 355;
const MAX_PULL = 115;
const GRAVITY = 0.36;

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
    blockTheme: 'wood'
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
    blockTheme: 'ice'
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
    blockTheme: 'candy'
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
    blockTheme: 'wood'
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
    blockTheme: 'ice'
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
    blockTheme: 'candy'
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
    blockTheme: 'wood'
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
    blockTheme: 'ice'
  }
];

// 8 Unique Fun Castle Layouts (blocks, TNT crates, floating star balloons, and goofy monsters)
const LEVEL_CASTLES = [
  // Stage 0: DogDay Sunny Twin Towers
  {
    blocks: [
      { x: 500, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 590, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 545, y: 352, w: 136, h: 28, type: 'wood' },
      { x: 670, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 750, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 710, y: 352, w: 126, h: 28, type: 'wood' },
      { x: 628, y: 438, w: 42, h: 42, type: 'tnt' }
    ],
    monsters: [
      { x: 545, y: 438, r: 26 },
      { x: 545, y: 312, r: 25 },
      { x: 710, y: 312, r: 26 }
    ],
    stars: [
      { x: 435, y: 245, r: 22 },
      { x: 595, y: 210, r: 22 },
      { x: 725, y: 215, r: 22 }
    ]
  },
  // Stage 1: Hoppy Ice Double Bridge
  {
    blocks: [
      { x: 480, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 565, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 522, y: 352, w: 126, h: 28, type: 'ice' },
      { x: 522, y: 300, w: 34, h: 74, type: 'ice' },
      { x: 645, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 745, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 695, y: 352, w: 140, h: 28, type: 'ice' },
      { x: 605, y: 438, w: 42, h: 42, type: 'tnt' }
    ],
    monsters: [
      { x: 522, y: 240, r: 25 },
      { x: 695, y: 438, r: 26 },
      { x: 695, y: 312, r: 25 }
    ],
    stars: [
      { x: 430, y: 260, r: 22 },
      { x: 605, y: 215, r: 22 },
      { x: 745, y: 220, r: 22 }
    ]
  },
  // Stage 2: Bobby Candy Pyramid
  {
    blocks: [
      { x: 485, y: 424, w: 36, h: 88, type: 'candy' },
      { x: 565, y: 424, w: 36, h: 88, type: 'candy' },
      { x: 645, y: 424, w: 36, h: 88, type: 'candy' },
      { x: 725, y: 424, w: 36, h: 88, type: 'candy' },
      { x: 525, y: 364, w: 120, h: 28, type: 'candy' },
      { x: 685, y: 364, w: 120, h: 28, type: 'candy' },
      { x: 605, y: 312, w: 42, h: 42, type: 'tnt' },
      { x: 605, y: 268, w: 150, h: 26, type: 'candy' }
    ],
    monsters: [
      { x: 525, y: 438, r: 25 },
      { x: 685, y: 438, r: 25 },
      { x: 605, y: 228, r: 27 }
    ],
    stars: [
      { x: 465, y: 250, r: 22 },
      { x: 605, y: 155, r: 22 },
      { x: 745, y: 250, r: 22 }
    ]
  },
  // Stage 3: PickyPiggy Watermelon Fortress
  {
    blocks: [
      { x: 475, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 555, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 515, y: 352, w: 120, h: 28, type: 'candy' },
      { x: 620, y: 438, w: 44, h: 44, type: 'tnt' },
      { x: 680, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 760, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 720, y: 352, w: 120, h: 28, type: 'candy' },
      { x: 720, y: 316, w: 42, h: 42, type: 'tnt' }
    ],
    monsters: [
      { x: 515, y: 438, r: 25 },
      { x: 515, y: 312, r: 25 },
      { x: 720, y: 438, r: 25 },
      { x: 720, y: 268, r: 25 }
    ],
    stars: [
      { x: 440, y: 225, r: 22 },
      { x: 618, y: 220, r: 22 },
      { x: 750, y: 185, r: 22 }
    ]
  },
  // Stage 4: Bubba Splash Ice Castle
  {
    blocks: [
      { x: 490, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 580, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 670, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 755, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 535, y: 352, w: 125, h: 26, type: 'ice' },
      { x: 712, y: 352, w: 125, h: 26, type: 'ice' },
      { x: 625, y: 438, w: 44, h: 44, type: 'tnt' },
      { x: 535, y: 316, w: 42, h: 42, type: 'tnt' }
    ],
    monsters: [
      { x: 535, y: 438, r: 25 },
      { x: 712, y: 438, r: 25 },
      { x: 712, y: 312, r: 26 },
      { x: 625, y: 295, r: 25 }
    ],
    stars: [
      { x: 455, y: 235, r: 22 },
      { x: 625, y: 195, r: 22 },
      { x: 745, y: 215, r: 22 }
    ]
  },
  // Stage 5: CraftyCorn Rainbow Citadel
  {
    blocks: [
      { x: 475, y: 418, w: 34, h: 100, type: 'candy' },
      { x: 555, y: 418, w: 34, h: 100, type: 'candy' },
      { x: 515, y: 352, w: 120, h: 28, type: 'candy' },
      { x: 630, y: 418, w: 34, h: 100, type: 'ice' },
      { x: 710, y: 418, w: 34, h: 100, type: 'ice' },
      { x: 670, y: 352, w: 120, h: 28, type: 'ice' },
      { x: 592, y: 438, w: 42, h: 42, type: 'tnt' },
      { x: 758, y: 438, w: 42, h: 42, type: 'tnt' }
    ],
    monsters: [
      { x: 515, y: 438, r: 25 },
      { x: 515, y: 312, r: 25 },
      { x: 670, y: 438, r: 25 },
      { x: 670, y: 312, r: 25 }
    ],
    stars: [
      { x: 445, y: 230, r: 22 },
      { x: 592, y: 205, r: 22 },
      { x: 735, y: 220, r: 22 }
    ]
  },
  // Stage 6: KickinChicken Golden Star Stadium
  {
    blocks: [
      { x: 470, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 545, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 508, y: 352, w: 115, h: 28, type: 'wood' },
      { x: 615, y: 438, w: 44, h: 44, type: 'tnt' },
      { x: 615, y: 388, w: 44, h: 44, type: 'tnt' },
      { x: 685, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 760, y: 418, w: 34, h: 100, type: 'wood' },
      { x: 722, y: 352, w: 115, h: 28, type: 'wood' }
    ],
    monsters: [
      { x: 508, y: 438, r: 25 },
      { x: 508, y: 312, r: 25 },
      { x: 722, y: 438, r: 25 },
      { x: 722, y: 312, r: 25 }
    ],
    stars: [
      { x: 445, y: 235, r: 22 },
      { x: 615, y: 245, r: 22 },
      { x: 745, y: 215, r: 22 }
    ]
  },
  // Stage 7: CatNap Dreamy Moon Finale Castle
  {
    blocks: [
      { x: 465, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 545, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 505, y: 352, w: 120, h: 28, type: 'candy' },
      { x: 612, y: 438, w: 44, h: 44, type: 'tnt' },
      { x: 612, y: 352, w: 86, h: 28, type: 'ice' },
      { x: 680, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 760, y: 418, w: 32, h: 100, type: 'ice' },
      { x: 720, y: 352, w: 120, h: 28, type: 'candy' },
      { x: 720, y: 312, w: 42, h: 42, type: 'tnt' }
    ],
    monsters: [
      { x: 505, y: 438, r: 24 },
      { x: 505, y: 312, r: 24 },
      { x: 612, y: 312, r: 25 },
      { x: 720, y: 438, r: 24 },
      { x: 720, y: 262, r: 25 }
    ],
    stars: [
      { x: 455, y: 215, r: 22 },
      { x: 612, y: 195, r: 22 },
      { x: 748, y: 175, r: 22 }
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
    this.playTone(240, 'sine', 0.22, 0.16, 680);
  }

  playPop() {
    this.playTone(520, 'triangle', 0.14, 0.18, 920);
  }

  playBoom() {
    this.playTone(150, 'sawtooth', 0.28, 0.2, 48);
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
let megaMode = false;
let hasShotThisLevel = false;
let levelWon = false;
let animTick = 0;

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
  { x: 120, y: 72, s: 1.0, v: 0.25 },
  { x: 390, y: 54, s: 0.85, v: 0.18 },
  { x: 670, y: 82, s: 1.1, v: 0.22 }
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
    pill.textContent = m.popped ? '💥' : critter.monster;
    targetSlotsRow.appendChild(pill);
  });
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
function loadLevel(idx) {
  currentLevel = (idx + CRITTERS.length) % CRITTERS.length;
  const layout = LEVEL_CASTLES[currentLevel];

  winModal.classList.add('hidden');
  finaleModal.classList.add('hidden');

  starsEarned = 0;
  hasShotThisLevel = false;
  levelWon = false;
  projectiles = [];
  particles = [];
  shockwaves = [];
  slingPull.dragging = false;
  slingPull.x = SLING_X;
  slingPull.y = SLING_Y;

  blocks = layout.blocks.map((b) => ({
    x: b.x,
    y: b.y,
    w: b.w,
    h: b.h,
    type: b.type,
    hp: b.type === 'tnt' ? 1 : 2,
    destroyed: false,
    shake: 0
  }));

  monsters = layout.monsters.map((m, i) => ({
    id: i,
    x: m.x,
    y: m.y,
    vy: 0,
    r: m.r,
    popped: false,
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
// Launching & Ballistic Helpers
// ============================================================================
function spawnCritterProjectile(vx, vy, scale = 1.0, isClone = false) {
  const critter = CRITTERS[currentLevel];
  hasShotThisLevel = true;
  sfx.playLaunch();

  projectiles.push({
    x: SLING_X,
    y: SLING_Y,
    vx,
    vy,
    r: (megaMode ? 36 : 24) * scale,
    critter,
    powerUsed: isClone,
    bounces: 0,
    age: 0,
    trail: []
  });

  // Reset slingshot pouch
  slingPull.dragging = false;
  slingPull.x = SLING_X;
  slingPull.y = SLING_Y;
}

// Compute velocity `(vx, vy)` that sends a projectile from `(SLING_X, SLING_Y)` through `(tx, ty)`
function computeVelocityToTarget(tx, ty) {
  const dx = Math.max(120, tx - SLING_X);
  const dy = ty - SLING_Y;
  // Choose flight time in frames proportional to horizontal distance
  const frames = Math.max(28, Math.min(54, dx / 11.5));
  const vx = dx / frames;
  const vy = (dy - 0.5 * GRAVITY * frames * frames) / frames;
  return { vx, vy };
}

function shootAtPoint(tx, ty) {
  if (levelWon) return;
  const { vx, vy } = computeVelocityToTarget(tx, ty);
  // Brief visual pullback animation before release
  slingPull.x = Math.max(SLING_X - MAX_PULL, SLING_X - vx * 5.2);
  slingPull.y = Math.min(GROUND_Y - 25, Math.max(120, SLING_Y - vy * 5.2));
  spawnCritterProjectile(vx, vy, 1.0, false);
}

function autoShootNextTarget() {
  if (levelWon) return;
  const aliveMonster = monsters.find((m) => !m.popped);
  const uncollectedStar = stars.find((s) => !s.collected);
  const tntBlock = blocks.find((b) => !b.destroyed && b.type === 'tnt');

  if (aliveMonster) {
    shootAtPoint(aliveMonster.x, aliveMonster.y - 6);
    showEmojiToast('🏹🎯');
  } else if (tntBlock) {
    shootAtPoint(tntBlock.x, tntBlock.y);
    showEmojiToast('🏹🧨');
  } else if (uncollectedStar) {
    shootAtPoint(uncollectedStar.x, uncollectedStar.y);
    showEmojiToast('🏹⭐');
  } else {
    shootAtPoint(600, 340);
  }
}

function fireTripleRainbowVolley() {
  if (levelWon) return;
  const aliveMonster = monsters.find((m) => !m.popped);
  const tx = aliveMonster ? aliveMonster.x : 610;
  const ty = aliveMonster ? aliveMonster.y : 330;
  const base = computeVelocityToTarget(tx, ty);

  [-2.4, 0, 2.4].forEach((offsetVy, idx) => {
    setTimeout(() => {
      spawnCritterProjectile(base.vx + (idx - 1) * 0.8, base.vy + offsetVy, 1.0, false);
    }, idx * 75);
  });
  showEmojiToast('🌈🐾🐾🐾');
}

function activateInFlightPower(proj) {
  if (!proj || proj.powerUsed) return;
  proj.powerUsed = true;
  const pEmoji = proj.critter.power;
  sfx.playStar();
  showEmojiToast(`${pEmoji}💥`);

  shockwaves.push({
    x: proj.x,
    y: proj.y,
    r: 16,
    maxR: 135,
    color: proj.critter.color,
    alpha: 1.0
  });

  spawnBurst(proj.x, proj.y, pEmoji, 12);

  // Also launch 2 mini helper stars toward remaining monsters!
  monsters.filter((m) => !m.popped).slice(0, 2).forEach((m) => {
    const angle = Math.atan2(m.y - proj.y, m.x - proj.x);
    projectiles.push({
      x: proj.x,
      y: proj.y,
      vx: Math.cos(angle) * 13,
      vy: Math.sin(angle) * 13 - 2,
      r: 20,
      critter: proj.critter,
      powerUsed: true,
      bounces: 0,
      age: 0,
      trail: []
    });
  });
}

function triggerStarMeteorShower() {
  if (levelWon) return;
  hasShotThisLevel = true;
  sfx.playStar();
  showEmojiToast('☄️⭐🌈');

  const critter = CRITTERS[currentLevel];
  // Collect all stars immediately with sparkle bursts
  stars.forEach((s) => {
    if (!s.collected) {
      s.collected = true;
      starsEarned = Math.min(3, starsEarned + 1);
      spawnBurst(s.x, s.y, '⭐', 10);
    }
  });

  // Spawn 5 rainbow meteors raining down onto all castle blocks & monsters
  const targets = [
    ...monsters.filter((m) => !m.popped).map((m) => ({ x: m.x, y: m.y })),
    { x: 520, y: 360 },
    { x: 640, y: 360 },
    { x: 720, y: 360 }
  ];

  targets.slice(0, 5).forEach((t, i) => {
    setTimeout(() => {
      sfx.playLaunch();
      projectiles.push({
        x: t.x - 120,
        y: 35,
        vx: 5.5,
        vy: 11.5,
        r: 34,
        critter,
        powerUsed: true,
        bounces: 0,
        age: 0,
        trail: []
      });
    }, i * 95);
  });

  updateVisualHUD();
}

// ============================================================================
// Explosions, Collisions & Win Check
// ============================================================================
function spawnBurst(x, y, emoji, count = 10) {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const speed = 2.5 + Math.random() * 5.5;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2.0,
      emoji,
      size: 20 + Math.random() * 10,
      life: 1.0
    });
  }
}

function detonateTNT(block) {
  if (block.destroyed) return;
  block.destroyed = true;
  sfx.playBoom();
  showEmojiToast('🧨💥🎉');

  shockwaves.push({
    x: block.x,
    y: block.y,
    r: 18,
    maxR: 165,
    color: '#f97316',
    alpha: 1.0
  });

  spawnBurst(block.x, block.y, '💥', 14);
  spawnBurst(block.x, block.y, '⭐', 8);

  const blastRadius = 155;
  blocks.forEach((other) => {
    if (!other.destroyed && Math.hypot(other.x - block.x, other.y - block.y) < blastRadius) {
      if (other.type === 'tnt') {
        detonateTNT(other);
      } else {
        other.destroyed = true;
        spawnBurst(other.x, other.y, '✨', 5);
      }
    }
  });

  monsters.forEach((m) => {
    if (!m.popped && Math.hypot(m.x - block.x, m.y - block.y) < blastRadius) {
      popMonster(m);
    }
  });

  stars.forEach((s) => {
    if (!s.collected && Math.hypot(s.x - block.x, s.y - block.y) < blastRadius + 20) {
      collectStar(s);
    }
  });
}

function collectStar(star) {
  if (star.collected) return;
  star.collected = true;
  starsEarned = Math.min(3, starsEarned + 1);
  sfx.playStar();
  spawnBurst(star.x, star.y, '⭐', 10);
  updateVisualHUD();
}

function popMonster(monster) {
  if (monster.popped) return;
  monster.popped = true;
  sfx.playPop();
  const critter = CRITTERS[currentLevel];
  spawnBurst(monster.x, monster.y, '💥', 10);
  spawnBurst(monster.x, monster.y, critter.power, 8);
  updateVisualHUD();
  checkStageClear();
}

function checkStageClear() {
  if (levelWon) return;
  const allPopped = monsters.every((m) => m.popped);
  if (!allPopped) return;

  levelWon = true;
  // Award all 3 stars on stage clear so kids always celebrate a 3-star victory!
  stars.forEach((s) => {
    if (!s.collected) {
      s.collected = true;
      spawnBurst(s.x, s.y, '⭐', 8);
    }
  });
  starsEarned = 3;
  completedLevels.add(currentLevel);
  renderTopBar();
  updateVisualHUD();
  sfx.playWin();
  showEmojiToast('🎉⭐⭐⭐🎉');

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

  // Drift clouds
  clouds.forEach((c) => {
    c.x += c.v;
    if (c.x > W + 80) c.x = -80;
  });

  // Bob floating star balloons
  stars.forEach((s) => {
    if (!s.collected) {
      s.y = s.baseY + Math.sin(animTick * 0.06 + s.phase) * 7;
    }
  });

  // Settle blocks and monsters downward if supporting blocks beneath were smashed
  blocks.forEach((b) => {
    if (b.destroyed) return;
    if (b.shake > 0) b.shake *= 0.8;
    const bottom = b.y + b.h / 2;
    if (bottom < GROUND_Y) {
      // Check if supported by another block below
      const supported = blocks.some((other) => {
        if (other === b || other.destroyed) return false;
        const horizOverlap = Math.abs(other.x - b.x) < (other.w + b.w) * 0.45;
        const vertTouch = Math.abs((other.y - other.h / 2) - bottom) < 10;
        return horizOverlap && vertTouch;
      });
      if (!supported) {
        b.y = Math.min(GROUND_Y - b.h / 2, b.y + 4.5);
      }
    }
  });

  monsters.forEach((m) => {
    if (m.popped) return;
    const bottom = m.y + m.r;
    if (bottom < GROUND_Y) {
      const supported = blocks.some((b) => {
        if (b.destroyed) return false;
        const horizOverlap = Math.abs(b.x - m.x) < b.w * 0.55 + m.r * 0.4;
        const topEdge = b.y - b.h / 2;
        return horizOverlap && bottom >= topEdge - 6 && bottom <= topEdge + 14;
      });
      if (!supported) {
        m.vy = Math.min(9, m.vy + 0.42);
        m.y += m.vy;
        if (m.y + m.r >= GROUND_Y) {
          m.y = GROUND_Y - m.r;
          if (m.vy > 5.5) {
            popMonster(m);
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

    if (p.age % 2 === 0 && p.trail.length < 26) {
      p.trail.push({ x: p.x, y: p.y });
    }

    // Ground bounce
    if (p.y + p.r >= GROUND_Y) {
      p.y = GROUND_Y - p.r;
      p.vy = -p.vy * 0.58;
      p.vx *= 0.82;
      p.bounces++;
      sfx.playPop();
    }

    // Collect floating stars
    stars.forEach((s) => {
      if (!s.collected && Math.hypot(p.x - s.x, p.y - s.y) < p.r + s.r + 12) {
        collectStar(s);
      }
    });

    // Hit blocks
    blocks.forEach((b) => {
      if (b.destroyed) return;
      const closestX = Math.max(b.x - b.w / 2, Math.min(p.x, b.x + b.w / 2));
      const closestY = Math.max(b.y - b.h / 2, Math.min(p.y, b.y + b.h / 2));
      const dist = Math.hypot(p.x - closestX, p.y - closestY);

      if (dist < p.r + 4) {
        if (b.type === 'tnt') {
          detonateTNT(b);
        } else {
          const hitPower = megaMode || p.r >= 30 ? 3 : 2;
          b.hp -= hitPower;
          b.shake = 6;
          if (b.hp <= 0) {
            b.destroyed = true;
            sfx.playPop();
            spawnBurst(b.x, b.y, b.type === 'candy' ? '🍬' : b.type === 'ice' ? '❄️' : '🪵', 7);
            // Check if any monster directly above falls and pops
          } else {
            sfx.playPop();
          }
          if (!megaMode && p.r < 30) {
            p.vx *= 0.68;
            p.vy *= 0.72;
          }
        }
      }
    });

    // Hit monsters (generous kid-friendly hit radius!)
    monsters.forEach((m) => {
      if (!m.popped && Math.hypot(p.x - m.x, p.y - m.y) < p.r + m.r + 10) {
        popMonster(m);
      }
    });

    // Remove projectile once off-screen or settled
    if (p.x > W + 90 || p.x < -90 || p.age > 210 || (p.bounces > 3 && Math.abs(p.vx) < 0.8)) {
      projectiles.splice(i, 1);
    }
  }

  // Update shockwaves
  for (let i = shockwaves.length - 1; i >= 0; i--) {
    const sw = shockwaves[i];
    sw.r += 9;
    sw.alpha -= 0.06;
    if (sw.alpha <= 0 || sw.r >= sw.maxR) {
      shockwaves.splice(i, 1);
    }
  }

  // Update particles
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

  // 4. Waiting Critter Queue by the Slingshot (Cute bouncing buddies)
  for (let q = 0; q < 2; q++) {
    const qx = 52 + q * 44;
    const bounce = Math.abs(Math.sin(animTick * 0.08 + q * 1.4)) * 7;
    const qy = GROUND_Y - 22 - bounce;
    drawCritterOrb(qx, qy, 19, critter, false);
  }

  // 5. Slingshot Back Fork + Aiming Trajectory Arc
  drawSlingshotBack(critter);

  // 6. Floating Star Balloons
  stars.forEach((s) => {
    if (s.collected) return;
    ctx.save();
    // Balloon string
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y - 18);
    ctx.lineTo(s.x, s.y + 4);
    ctx.stroke();

    // Glowing Star Orb
    ctx.fillStyle = 'rgba(250, 204, 21, 0.28)';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r + 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = '30px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🎈', s.x, s.y - 26);
    ctx.fillText('⭐', s.x, s.y + 4);
    ctx.restore();
  });

  // 7. Destructible Castle Blocks & TNT Crates
  blocks.forEach((b) => {
    if (b.destroyed) return;
    ctx.save();
    const sx = b.shake ? (Math.random() - 0.5) * b.shake : 0;
    ctx.translate(b.x + sx, b.y);

    if (b.type === 'tnt') {
      ctx.fillStyle = '#ef4444';
      ctx.strokeStyle = '#991b1b';
      ctx.lineWidth = 3.5;
      roundRect(ctx, -b.w / 2, -b.h / 2, b.w, b.h, 9);
      ctx.fill();
      ctx.stroke();

      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffffff';
      ctx.font = '26px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🧨', 0, 1);
    } else {
      if (b.type === 'wood') {
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
      roundRect(ctx, -b.w / 2, -b.h / 2, b.w, b.h, 8);
      ctx.fill();
      ctx.stroke();

      // Glossy highlight stripe
      ctx.fillStyle = 'rgba(255,255,255,0.32)';
      roundRect(ctx, -b.w / 2 + 4, -b.h / 2 + 4, b.w - 8, 6, 3);
      ctx.fill();
    }
    ctx.restore();
  });

  // 8. Goofy Bouncing Target Monsters
  monsters.forEach((m) => {
    if (m.popped) return;
    ctx.save();
    const squish = 1 + Math.sin(animTick * 0.1 + m.phase) * 0.06;
    ctx.translate(m.x, m.y);
    ctx.scale(squish, 2 - squish);

    // Bubble shield ring
    ctx.fillStyle = 'rgba(255, 255, 255, 0.78)';
    ctx.strokeStyle = '#4ade80';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(0, 0, m.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = `${Math.round(m.r * 1.35)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(critter.monster, 0, 2);
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
      ctx.arc(pt.x, pt.y, 4 + (idx / p.trail.length) * 5, 0, Math.PI * 2);
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

  // 12. Animated Finger Tutorial Guide (100% Visual, shown before first shot)
  if (!hasShotThisLevel && !slingPull.dragging && projectiles.length === 0) {
    drawVisualTutorialGuide(critter);
  }
}

function drawCritterOrb(x, y, r, critter, showPowerBadge) {
  ctx.save();
  ctx.translate(x, y);

  // Outer glowing border
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = critter.color;
  ctx.lineWidth = 4.5;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Clipped Critter Portrait
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
    ctx.font = `${Math.max(16, Math.round(r * 0.72))}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(critter.power, r * 0.72, -r * 0.72);
  }
  ctx.restore();
}

function drawSlingshotBack(critter) {
  ctx.save();
  // Wooden Y-Slingshot base & back prong
  ctx.strokeStyle = '#78350f';
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(SLING_X, GROUND_Y);
  ctx.lineTo(SLING_X, SLING_Y + 28);
  ctx.lineTo(SLING_X + 18, SLING_Y - 12);
  ctx.stroke();

  // Back elastic band
  const pouchX = slingPull.x;
  const pouchY = slingPull.y;
  ctx.strokeStyle = critter.bandColor;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(SLING_X + 18, SLING_Y - 12);
  ctx.lineTo(pouchX, pouchY);
  ctx.stroke();

  // Rainbow Trajectory Preview Dots while pulling
  if (slingPull.dragging) {
    const dx = SLING_X - pouchX;
    const dy = SLING_Y - pouchY;
    const vx = dx * 0.21;
    const vy = dy * 0.21;
    const rainbow = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];
    for (let step = 1; step <= 18; step++) {
      const t = step * 3.0;
      const px = SLING_X + vx * t;
      const py = SLING_Y + vy * t + 0.5 * GRAVITY * t * t;
      if (py > GROUND_Y) break;
      ctx.fillStyle = rainbow[step % rainbow.length];
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(4, 9 - step * 0.22), 0, Math.PI * 2);
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
  const orbR = megaMode ? 35 : 25;

  // Draw the ready Critter sitting in the slingshot
  drawCritterOrb(pouchX, pouchY, orbR, critter, true);

  // Front elastic band
  ctx.strokeStyle = critter.bandColor;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(SLING_X - 16, SLING_Y - 8);
  ctx.lineTo(pouchX - 6, pouchY + 4);
  ctx.stroke();

  // Front wooden prong
  ctx.strokeStyle = '#92400e';
  ctx.lineWidth = 13;
  ctx.beginPath();
  ctx.moveTo(SLING_X, SLING_Y + 28);
  ctx.lineTo(SLING_X - 16, SLING_Y - 8);
  ctx.stroke();
  ctx.restore();
}

function drawVisualTutorialGuide() {
  const t = (animTick % 90) / 90;
  // Animated finger pulling back from SLING_X to SLING_X - 75
  const pullProgress = Math.sin(t * Math.PI);
  const hx = SLING_X - pullProgress * 72;
  const hy = SLING_Y + pullProgress * 28;

  ctx.save();
  // Dotted guide arc from slingshot toward the first monster
  const firstMonster = monsters.find((m) => !m.popped);
  if (firstMonster) {
    const { vx, vy } = computeVelocityToTarget(firstMonster.x, firstMonster.y);
    for (let i = 1; i <= 10; i++) {
      const ft = i * 4.2;
      const ax = SLING_X + vx * ft;
      const ay = SLING_Y + vy * ft + 0.5 * GRAVITY * ft * ft;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
      ctx.beginPath();
      ctx.arc(ax, ay, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Also show a pulsing target ring on the monster so tapping it is obvious
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(firstMonster.x, firstMonster.y, firstMonster.r + 8 + pullProgress * 6, 0, Math.PI * 2);
    ctx.stroke();
  }

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
// Pointer & Touch Controls (Pull Slingshot OR Tap Any Target / Mid-Air Power)
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

  // 1. If a Critter is currently flying and user taps near the castle, trigger Special Power!
  const activeProj = projectiles.find((p) => !p.powerUsed && p.x > 250);
  if (activeProj && pt.x > 280) {
    activateInFlightPower(activeProj);
    return;
  }

  // 2. If user taps on the right side (castle / monsters / stars), auto-aim & fire right there!
  if (pt.x > 310) {
    shootAtPoint(pt.x, Math.min(GROUND_Y - 20, pt.y));
    showEmojiToast('🎯🚀');
    return;
  }

  // 3. Otherwise start pulling the slingshot!
  slingPull.dragging = true;
  updateSlingPull(pt.x, pt.y);
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

  if (pullDist > 18) {
    spawnCritterProjectile(dx * 0.21, dy * 0.21, 1.0, false);
  } else {
    // Even a tiny tap on the slingshot auto-fires toward the next target for little fingers!
    slingPull.dragging = false;
    slingPull.x = SLING_X;
    slingPull.y = SLING_Y;
    autoShootNextTarget();
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
  // Keep pull mostly behind or below slingshot so shots always go forward toward the castle
  if (dx > 25) dx = -Math.abs(dx);
  slingPull.x = SLING_X + dx;
  slingPull.y = Math.min(GROUND_Y - 22, SLING_Y + dy);
}

// ============================================================================
// Left Dock Toy Buttons & Modal Controls
// ============================================================================
btnShootNow.addEventListener('click', () => {
  autoShootNextTarget();
});

btnMegaPower.addEventListener('click', () => {
  megaMode = !megaMode;
  btnMegaPower.classList.toggle('active', megaMode);
  sfx.playStar();
  showEmojiToast(megaMode ? '💥🐾⬆️' : '🐾✨');
});

btnTripleShot.addEventListener('click', () => {
  fireTripleRainbowVolley();
});

btnMeteorWin.addEventListener('click', () => {
  triggerStarMeteorShower();
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
