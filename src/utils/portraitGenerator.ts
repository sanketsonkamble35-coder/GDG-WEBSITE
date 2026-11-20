import {CharacterClass} from '../data/characters';

interface ClassPalette {
  bgTop: string;
  bgBottom: string;
  halo: string;
  primary: string;
  secondary: string;
  trim: string;
  glow: string;
}

const CLASS_PALETTES: Record<CharacterClass, ClassPalette[]> = {
  Mage: [
    {
      bgTop: '#161436',
      bgBottom: '#2d2563',
      halo: '#60a5fa',
      primary: '#2e3a8c',
      secondary: '#1e1b4b',
      trim: '#eab308',
      glow: '#93c5fd',
    },
    {
      bgTop: '#1e1136',
      bgBottom: '#43206b',
      halo: '#c084fc',
      primary: '#4c1d95',
      secondary: '#1e1035',
      trim: '#f59e0b',
      glow: '#e9d5ff',
    },
    {
      bgTop: '#0f2537',
      bgBottom: '#164e63',
      halo: '#22d3ee',
      primary: '#155e75',
      secondary: '#083344',
      trim: '#fbbf24',
      glow: '#a5f3fc',
    },
  ],
  Rogue: [
    {
      bgTop: '#0f172a',
      bgBottom: '#1e293b',
      halo: '#38bdf8',
      primary: '#27272a',
      secondary: '#18181b',
      trim: '#94a3b8',
      glow: '#7dd3fc',
    },
    {
      bgTop: '#18122b',
      bgBottom: '#393053',
      halo: '#a78bfa',
      primary: '#3f2e3e',
      secondary: '#1f1724',
      trim: '#cbd5e1',
      glow: '#c4b5fd',
    },
    {
      bgTop: '#0c1f1c',
      bgBottom: '#134e4a',
      halo: '#2dd4bf',
      primary: '#1f2937',
      secondary: '#111827',
      trim: '#d97706',
      glow: '#99f6e4',
    },
  ],
  Warrior: [
    {
      bgTop: '#241111',
      bgBottom: '#571919',
      halo: '#f97316',
      primary: '#991b1b',
      secondary: '#475569',
      trim: '#d97706',
      glow: '#fdba74',
    },
    {
      bgTop: '#1c1917',
      bgBottom: '#44403c',
      halo: '#ef4444',
      primary: '#7f1d1d',
      secondary: '#64748b',
      trim: '#fbbf24',
      glow: '#fca5a5',
    },
    {
      bgTop: '#1e2430',
      bgBottom: '#3b4252',
      halo: '#f59e0b',
      primary: '#b45309',
      secondary: '#334155',
      trim: '#e2e8f0',
      glow: '#fde68a',
    },
  ],
  Archer: [
    {
      bgTop: '#132417',
      bgBottom: '#2b4a2f',
      halo: '#a3e635',
      primary: '#3f6212',
      secondary: '#5c4033',
      trim: '#d97706',
      glow: '#d9f99d',
    },
    {
      bgTop: '#1a2016',
      bgBottom: '#3d4d2c',
      halo: '#facc15',
      primary: '#4d7c0f',
      secondary: '#78350f',
      trim: '#eab308',
      glow: '#fef08a',
    },
    {
      bgTop: '#122229',
      bgBottom: '#1f444c',
      halo: '#34d399',
      primary: '#166534',
      secondary: '#451a03',
      trim: '#fbbf24',
      glow: '#a7f3d0',
    },
  ],
  Paladin: [
    {
      bgTop: '#261b0f',
      bgBottom: '#593c18',
      halo: '#fbbf24',
      primary: '#e2e8f0',
      secondary: '#1e3a8a',
      trim: '#f59e0b',
      glow: '#fef3c7',
    },
    {
      bgTop: '#1e293b',
      bgBottom: '#475569',
      halo: '#fde047',
      primary: '#cbd5e1',
      secondary: '#7c2d12',
      trim: '#eab308',
      glow: '#fef08a',
    },
    {
      bgTop: '#2b1616',
      bgBottom: '#6b2c20',
      halo: '#fb923c',
      primary: '#f1f5f9',
      secondary: '#991b1b',
      trim: '#f59e0b',
      glow: '#fed7aa',
    },
  ],
  Necromancer: [
    {
      bgTop: '#0b1615',
      bgBottom: '#13332f',
      halo: '#2dd4bf',
      primary: '#1f2937',
      secondary: '#111827',
      trim: '#d6d3d1',
      glow: '#5eead4',
    },
    {
      bgTop: '#130f24',
      bgBottom: '#2e1d4c',
      halo: '#4ade80',
      primary: '#27272a',
      secondary: '#09090b',
      trim: '#e7e5e4',
      glow: '#86efac',
    },
    {
      bgTop: '#0f172a',
      bgBottom: '#1e293b',
      halo: '#38bdf8',
      primary: '#334155',
      secondary: '#0f172a',
      trim: '#cbd5e1',
      glow: '#bae6fd',
    },
  ],
  Druid: [
    {
      bgTop: '#102418',
      bgBottom: '#1e4d32',
      halo: '#4ade80',
      primary: '#166534',
      secondary: '#5c4033',
      trim: '#d97706',
      glow: '#bbf7d0',
    },
    {
      bgTop: '#241a10',
      bgBottom: '#4d361d',
      halo: '#fbbf24',
      primary: '#3f6212',
      secondary: '#78350f',
      trim: '#a3e635',
      glow: '#fde68a',
    },
    {
      bgTop: '#102026',
      bgBottom: '#1f4247',
      halo: '#2dd4bf',
      primary: '#14532d',
      secondary: '#422006',
      trim: '#fbbf24',
      glow: '#99f6e4',
    },
  ],
};

const SKIN_TONES = [
  {base: '#f6d5be', shadow: '#cfa084', highlight: '#ffebd9'},
  {base: '#eab896', shadow: '#bf8560', highlight: '#f9d4b8'},
  {base: '#d49a73', shadow: '#a36843', highlight: '#e7b693'},
  {base: '#a86b47', shadow: '#784527', highlight: '#c48662'},
  {base: '#75462f', shadow: '#4c2919', highlight: '#915c42'},
  {base: '#d7dbe0', shadow: '#9aa3b0', highlight: '#eef1f5'}, // Pale moonlit fantasy skin
];

const HAIR_COLORS = [
  {base: '#1f1b24', shadow: '#0d0b0f', highlight: '#3e3747'},
  {base: '#5c3317', shadow: '#381e0c', highlight: '#854e28'},
  {base: '#9a3412', shadow: '#631d07', highlight: '#c2512b'},
  {base: '#d4a348', shadow: '#9c7122', highlight: '#f2ca79'},
  {base: '#cbd5e1', shadow: '#808b99', highlight: '#f1f5f9'},
  {base: '#4c1d95', shadow: '#2e1065', highlight: '#7c3aed'},
];

const EYE_COLORS = ['#38bdf8', '#4ade80', '#f59e0b', '#a855f7', '#e11d48', '#94a3b8'];

function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRng(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ''}${parts[parts.length - 1][0] ?? ''}`.toUpperCase();
}

function drawPolygon(
  ctx: CanvasRenderingContext2D,
  points: [number, number][],
  fill: string,
  stroke = '#161318',
  lineWidth = 4
) {
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1]);
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  if (lineWidth > 0) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = stroke;
    ctx.lineJoin = 'round';
    ctx.stroke();
  }
}

export function generateCharacterPortraitDataUrl(
  name: string,
  characterClass: CharacterClass,
  variant: number
): string {
  const size = 768;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Scale logical 512x512 coordinate space to 768x768 for crisp ink lines
  ctx.scale(size / 512, size / 512);

  const nameSeed = hashString(`${name}::${characterClass}`);
  const variantSeed = hashString(`${name}::${characterClass}::v${variant}`);
  const rng = createRng(variantSeed);
  const nameRng = createRng(nameSeed);

  const palettes = CLASS_PALETTES[characterClass];
  const palette = palettes[variant % palettes.length];

  // Vary appearance noticeably across both character name and regeneration variant
  const skinIndex =
    characterClass === 'Necromancer' && variant % 2 === 0
      ? 5
      : Math.floor((nameRng() * 5 + variant) % 5);
  const skin = SKIN_TONES[skinIndex];
  const hair = HAIR_COLORS[Math.floor((nameRng() * 6 + variant * 2) % HAIR_COLORS.length)];
  const eyeColor = EYE_COLORS[Math.floor((nameRng() * 6 + variant) % EYE_COLORS.length)];

  const hairStyle = Math.floor(rng() * 5); // 0..4
  const hasBeard =
    (characterClass === 'Warrior' || characterClass === 'Druid' || characterClass === 'Paladin' || characterClass === 'Mage')
      ? rng() > 0.48
      : rng() > 0.78;
  const hasScar =
    characterClass === 'Warrior' || characterClass === 'Rogue'
      ? rng() > 0.42
      : rng() > 0.75;
  const expression = Math.floor(rng() * 3); // 0: resolute, 1: fierce/smirk, 2: calm/focused
  const hasHeadgear =
    characterClass === 'Rogue' || characterClass === 'Druid' || characterClass === 'Mage'
      ? rng() > 0.25
      : rng() > 0.55;

  // 1. Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
  bgGrad.addColorStop(0, palette.bgTop);
  bgGrad.addColorStop(1, palette.bgBottom);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 512, 512);

  // Subtle video-game radial atmospheric glow behind hero
  const haloGrad = ctx.createRadialGradient(256, 215, 20, 256, 215, 230);
  haloGrad.addColorStop(0, `${palette.halo}66`);
  haloGrad.addColorStop(0.55, `${palette.halo}1f`);
  haloGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = haloGrad;
  ctx.fillRect(0, 0, 512, 512);

  // Architectural / environment motif
  ctx.save();
  ctx.strokeStyle = `${palette.glow}26`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(256, 200, 165, Math.PI, 0);
  ctx.lineTo(421, 460);
  ctx.moveTo(91, 200);
  ctx.lineTo(91, 460);
  ctx.stroke();

  // Name-keyed geometric crest ring behind head
  const crestSides = 5 + (nameSeed % 4); // 5..8 sided arcane/heraldic frame
  const crestRadius = 128 + (variant % 2) * 10;
  ctx.beginPath();
  for (let i = 0; i <= crestSides; i++) {
    const angle = (i / crestSides) * Math.PI * 2 - Math.PI / 2;
    const x = 256 + Math.cos(angle) * crestRadius;
    const y = 205 + Math.sin(angle) * crestRadius;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = `${palette.trim}55`;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.restore();

  // Ambient drifting particles
  for (let i = 0; i < 18; i++) {
    const px = 40 + rng() * 432;
    const py = 35 + rng() * 380;
    const pr = 1.5 + rng() * 3.5;
    ctx.beginPath();
    ctx.arc(px, py, pr, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 === 0 ? `${palette.glow}aa` : `${palette.trim}88`;
    ctx.fill();
  }

  // 2. Class back props / weapons
  ctx.save();
  if (characterClass === 'Warrior') {
    // Broadsword diagonal behind shoulder
    ctx.translate(360, 210);
    ctx.rotate(0.55);
    drawPolygon(
      ctx,
      [
        [-14, -180],
        [0, -210],
        [14, -180],
        [16, 40],
        [-16, 40],
      ],
      '#cbd5e1',
      '#161318',
      4.5
    );
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(0, -185, 11, 220);
    drawPolygon(
      ctx,
      [
        [-38, 34],
        [38, 34],
        [32, 50],
        [-32, 50],
      ],
      palette.trim,
      '#161318',
      4
    );
  } else if (characterClass === 'Mage') {
    // Runic Staff
    ctx.translate(120, 250);
    ctx.rotate(-0.18);
    ctx.fillStyle = '#5c3a21';
    ctx.strokeStyle = '#161318';
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.roundRect(-8, -145, 16, 360, 6);
    ctx.fill();
    ctx.stroke();
    // Glowing crystal top
    ctx.beginPath();
    ctx.arc(0, -165, 24, 0, Math.PI * 2);
    ctx.fillStyle = palette.glow;
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(-5, -171, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  } else if (characterClass === 'Archer') {
    // Longbow curve & fletched arrows
    ctx.strokeStyle = '#161318';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(415, 255, 195, Math.PI * 0.72, Math.PI * 1.28);
    ctx.stroke();
    ctx.strokeStyle = '#854d0e';
    ctx.lineWidth = 8;
    ctx.stroke();
    // Quiver arrows behind left shoulder
    for (let a = 0; a < 3; a++) {
      ctx.save();
      ctx.translate(150 + a * 12, 245);
      ctx.rotate(-0.35 + a * 0.08);
      ctx.fillStyle = '#d6d3d1';
      ctx.strokeStyle = '#161318';
      ctx.lineWidth = 3;
      ctx.fillRect(-3, -105, 6, 110);
      ctx.strokeRect(-3, -105, 6, 110);
      drawPolygon(
        ctx,
        [
          [-10, -110],
          [0, -92],
          [10, -110],
          [0, -128],
        ],
        palette.trim,
        '#161318',
        2.5
      );
      ctx.restore();
    }
  } else if (characterClass === 'Paladin') {
    // Sunburst halo + Warhammer
    for (let r = 0; r < 12; r++) {
      const ang = (r / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(256 + Math.cos(ang) * 90, 200 + Math.sin(ang) * 90);
      ctx.lineTo(256 + Math.cos(ang) * 145, 200 + Math.sin(ang) * 145);
      ctx.strokeStyle = `${palette.glow}66`;
      ctx.lineWidth = 5;
      ctx.stroke();
    }
    ctx.save();
    ctx.translate(390, 240);
    ctx.rotate(0.25);
    ctx.fillStyle = '#78350f';
    ctx.strokeStyle = '#161318';
    ctx.lineWidth = 4;
    ctx.fillRect(-7, -115, 14, 290);
    ctx.strokeRect(-7, -115, 14, 290);
    drawPolygon(
      ctx,
      [
        [-38, -145],
        [38, -145],
        [44, -100],
        [-44, -100],
      ],
      '#cbd5e1',
      '#161318',
      4.5
    );
    ctx.restore();
  } else if (characterClass === 'Necromancer') {
    // Floating spectral flame lantern / staff
    ctx.translate(118, 250);
    ctx.rotate(-0.14);
    ctx.fillStyle = '#292524';
    ctx.strokeStyle = '#161318';
    ctx.lineWidth = 4.5;
    ctx.fillRect(-7, -135, 14, 340);
    ctx.strokeRect(-7, -135, 14, 340);
    drawPolygon(
      ctx,
      [
        [-22, -165],
        [22, -165],
        [16, -125],
        [-16, -125],
      ],
      palette.glow,
      '#161318',
      4
    );
  } else if (characterClass === 'Druid') {
    // Gnarled hawthorn staff with emerald stone
    ctx.translate(392, 250);
    ctx.rotate(0.16);
    ctx.strokeStyle = '#161318';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.moveTo(0, 190);
    ctx.quadraticCurveTo(-12, 20, 6, -135);
    ctx.stroke();
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 9;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(6, -150, 16, 0, Math.PI * 2);
    ctx.fillStyle = palette.glow;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#161318';
    ctx.stroke();
  } else if (characterClass === 'Rogue') {
    // Twin silver dagger blade silhouette behind shoulder
    ctx.translate(132, 240);
    ctx.rotate(-0.55);
    drawPolygon(
      ctx,
      [
        [-8, -135],
        [0, -165],
        [8, -135],
        [10, 10],
        [-10, 10],
      ],
      '#e2e8f0',
      '#161318',
      4
    );
  }
  ctx.restore();

  // 3. Cloak / Back Shoulders
  drawPolygon(
    ctx,
    [
      [110, 470],
      [135, 315],
      [256, 290],
      [377, 315],
      [402, 470],
    ],
    palette.secondary,
    '#161318',
    5
  );

  // 4. Torso / Class Armor or Robes
  drawPolygon(
    ctx,
    [
      [148, 470],
      [162, 326],
      [256, 305],
      [350, 326],
      [364, 470],
    ],
    palette.primary,
    '#161318',
    5
  );

  // Cel-shaded right-side shadow across torso
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(256, 305);
  ctx.lineTo(350, 326);
  ctx.lineTo(364, 470);
  ctx.lineTo(265, 470);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
  ctx.fill();
  ctx.restore();

  // Class shoulder armor / collar details
  if (characterClass === 'Warrior' || characterClass === 'Paladin') {
    // Pauldrons
    drawPolygon(
      ctx,
      [
        [118, 365],
        [140, 308],
        [205, 315],
        [192, 372],
      ],
      '#94a3b8',
      '#161318',
      4.5
    );
    drawPolygon(
      ctx,
      [
        [394, 365],
        [372, 308],
        [307, 315],
        [320, 372],
      ],
      '#64748b',
      '#161318',
      4.5
    );
    // Trim border on pauldrons
    ctx.strokeStyle = palette.trim;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(132, 355);
    ctx.lineTo(192, 364);
    ctx.moveTo(380, 355);
    ctx.lineTo(320, 364);
    ctx.stroke();
  } else {
    // High collar / scarf / stole
    drawPolygon(
      ctx,
      [
        [176, 322],
        [256, 365],
        [336, 322],
        [314, 385],
        [256, 405],
        [198, 385],
      ],
      palette.trim,
      '#161318',
      4
    );
  }

  // Chest strap / clasp
  drawPolygon(
    ctx,
    [
      [242, 366],
      [256, 352],
      [270, 366],
      [256, 384],
    ],
    palette.glow,
    '#161318',
    3.5
  );

  // 5. Neck
  drawPolygon(
    ctx,
    [
      [230, 275],
      [282, 275],
      [286, 330],
      [256, 344],
      [226, 330],
    ],
    skin.shadow,
    '#161318',
    4.5
  );

  // 6. Back Hair Layer (for longer hair styles)
  if (hairStyle === 1 || hairStyle === 3) {
    drawPolygon(
      ctx,
      [
        [184, 170],
        [256, 128],
        [328, 170],
        [342, 298],
        [308, 312],
        [204, 312],
        [170, 298],
      ],
      hair.shadow,
      '#161318',
      4.5
    );
  }

  // Hood back layer for Rogue or Archer
  if ((characterClass === 'Rogue' || characterClass === 'Archer') && hasHeadgear) {
    drawPolygon(
      ctx,
      [
        [162, 290],
        [175, 145],
        [256, 98],
        [337, 145],
        [350, 290],
      ],
      palette.secondary,
      '#161318',
      5
    );
  }

  // 7. Ears (pointed elf ears for some variants/classes!)
  const isElven =
    characterClass === 'Archer' ||
    characterClass === 'Mage' ||
    characterClass === 'Druid'
      ? variant % 2 === 0
      : nameSeed % 4 === 0;

  if (isElven) {
    drawPolygon(
      ctx,
      [
        [192, 204],
        [162, 186],
        [192, 232],
      ],
      skin.base,
      '#161318',
      4
    );
    drawPolygon(
      ctx,
      [
        [320, 204],
        [350, 186],
        [320, 232],
      ],
      skin.shadow,
      '#161318',
      4
    );
  } else {
    drawPolygon(
      ctx,
      [
        [192, 204],
        [178, 208],
        [182, 232],
        [194, 234],
      ],
      skin.base,
      '#161318',
      4
    );
    drawPolygon(
      ctx,
      [
        [320, 204],
        [334, 208],
        [330, 232],
        [318, 234],
      ],
      skin.shadow,
      '#161318',
      4
    );
  }

  // 8. Head / Face silhouette
  const jawWidth = 42 + (nameSeed % 10);
  drawPolygon(
    ctx,
    [
      [194, 182],
      [204, 140],
      [256, 128],
      [308, 140],
      [318, 182],
      [312, 245],
      [256 + jawWidth * 0.45, 280],
      [256, 295],
      [256 - jawWidth * 0.45, 280],
      [200, 245],
    ],
    skin.base,
    '#161318',
    5
  );

  // Cel-shaded face side shadow
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(276, 134);
  ctx.lineTo(308, 140);
  ctx.lineTo(318, 182);
  ctx.lineTo(312, 245);
  ctx.lineTo(256 + jawWidth * 0.45, 280);
  ctx.lineTo(256, 295);
  ctx.lineTo(278, 248);
  ctx.lineTo(286, 182);
  ctx.closePath();
  ctx.fillStyle = skin.shadow;
  ctx.globalAlpha = 0.55;
  ctx.fill();
  ctx.restore();

  // Optional battle scar
  if (hasScar) {
    ctx.strokeStyle = '#7f1d1d';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(282, 188);
    ctx.lineTo(298, 234);
    ctx.stroke();
  }

  // 9. Stylized Video-Game Eyes & Brows
  const drawEye = (cx: number, cy: number, flip: boolean) => {
    ctx.save();
    ctx.translate(cx, cy);
    if (flip) ctx.scale(-1, 1);

    // Sclera
    ctx.beginPath();
    ctx.moveTo(-16, 2);
    ctx.quadraticCurveTo(0, -10, 16, 0);
    ctx.quadraticCurveTo(0, 10, -16, 2);
    ctx.closePath();
    ctx.fillStyle = '#f8fafc';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#161318';
    ctx.stroke();

    // Iris
    ctx.beginPath();
    ctx.arc(1, 0, 6.5, 0, Math.PI * 2);
    ctx.fillStyle =
      characterClass === 'Mage' || characterClass === 'Necromancer'
        ? palette.glow
        : eyeColor;
    ctx.fill();

    // Pupil
    ctx.beginPath();
    ctx.arc(1, 0, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#0f172a';
    ctx.fill();

    // Specular catchlight
    ctx.beginPath();
    ctx.arc(-2, -2.5, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Brow
    ctx.beginPath();
    if (expression === 1) {
      ctx.moveTo(-19, -14);
      ctx.lineTo(15, -7);
    } else if (expression === 2) {
      ctx.moveTo(-18, -10);
      ctx.quadraticCurveTo(0, -16, 16, -11);
    } else {
      ctx.moveTo(-18, -12);
      ctx.lineTo(16, -10);
    }
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = hair.shadow;
    ctx.stroke();

    ctx.restore();
  };

  drawEye(228, 206, false);
  drawEye(284, 206, true);

  // Stylized Nose
  ctx.beginPath();
  ctx.moveTo(256, 204);
  ctx.lineTo(251, 234);
  ctx.lineTo(262, 236);
  ctx.strokeStyle = '#161318';
  ctx.lineWidth = 3.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();

  // Mouth / Expression
  ctx.beginPath();
  if (expression === 1) {
    // Confident smirk
    ctx.moveTo(240, 258);
    ctx.quadraticCurveTo(258, 265, 274, 252);
  } else if (expression === 2) {
    // Calm slight smile
    ctx.moveTo(242, 257);
    ctx.quadraticCurveTo(256, 263, 270, 257);
  } else {
    // Resolute line
    ctx.moveTo(242, 258);
    ctx.lineTo(270, 257);
  }
  ctx.strokeStyle = '#161318';
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Optional Beard
  if (hasBeard) {
    drawPolygon(
      ctx,
      [
        [204, 238],
        [224, 254],
        [256, 268],
        [288, 254],
        [308, 238],
        [296, 294],
        [256, 326],
        [216, 294],
      ],
      hair.base,
      '#161318',
      4.5
    );
    // Re-draw mouth over beard mustache gap
    ctx.beginPath();
    ctx.moveTo(244, 257);
    ctx.lineTo(268, 257);
    ctx.strokeStyle = '#161318';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // 10. Front Hair & Class Headwear
  if (hairStyle === 0) {
    // Swept dynamic locks
    drawPolygon(
      ctx,
      [
        [188, 198],
        [186, 138],
        [238, 108],
        [304, 118],
        [326, 165],
        [318, 198],
        [294, 162],
        [254, 152],
        [212, 168],
      ],
      hair.base,
      '#161318',
      4.5
    );
  } else if (hairStyle === 1) {
    // Parted flowing hair
    drawPolygon(
      ctx,
      [
        [188, 206],
        [190, 134],
        [256, 112],
        [322, 134],
        [324, 206],
        [298, 160],
        [256, 156],
        [214, 160],
      ],
      hair.base,
      '#161318',
      4.5
    );
  } else if (hairStyle === 2) {
    // Spiky windswept warrior/rogue cut
    drawPolygon(
      ctx,
      [
        [186, 194],
        [178, 146],
        [210, 112],
        [238, 96],
        [268, 110],
        [304, 98],
        [334, 148],
        [320, 194],
        [292, 156],
        [256, 166],
        [220, 152],
      ],
      hair.base,
      '#161318',
      4.5
    );
  } else if (hairStyle === 3) {
    // Braided crown & side locks
    drawPolygon(
      ctx,
      [
        [188, 210],
        [192, 136],
        [256, 114],
        [320, 136],
        [324, 210],
        [302, 168],
        [256, 144],
        [210, 168],
      ],
      hair.base,
      '#161318',
      4.5
    );
  } else {
    // Short cropped disciplined cut
    drawPolygon(
      ctx,
      [
        [194, 188],
        [196, 134],
        [256, 118],
        [316, 134],
        [318, 188],
        [298, 156],
        [256, 150],
        [214, 156],
      ],
      hair.base,
      '#161318',
      4.5
    );
  }

  // Class headwear overlays
  if (characterClass === 'Druid' && hasHeadgear) {
    // Carved antler circlet
    ctx.strokeStyle = '#161318';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(212, 142);
    ctx.quadraticCurveTo(182, 102, 192, 68);
    ctx.moveTo(192, 102);
    ctx.lineTo(166, 88);
    ctx.moveTo(300, 142);
    ctx.quadraticCurveTo(330, 102, 320, 68);
    ctx.moveTo(320, 102);
    ctx.lineTo(346, 88);
    ctx.stroke();

    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 5;
    ctx.stroke();
  } else if ((characterClass === 'Mage' || characterClass === 'Paladin') && hasHeadgear) {
    // Runic/golden brow circlet
    drawPolygon(
      ctx,
      [
        [194, 158],
        [256, 144],
        [318, 158],
        [318, 170],
        [256, 156],
        [194, 170],
      ],
      palette.trim,
      '#161318',
      3.5
    );
    drawPolygon(
      ctx,
      [
        [248, 148],
        [256, 136],
        [264, 148],
        [256, 162],
      ],
      palette.glow,
      '#161318',
      3
    );
  } else if ((characterClass === 'Rogue' || characterClass === 'Archer') && hasHeadgear) {
    // Draped hood front peak
    drawPolygon(
      ctx,
      [
        [168, 224],
        [176, 134],
        [256, 88],
        [336, 134],
        [344, 224],
        [318, 162],
        [256, 126],
        [194, 162],
      ],
      palette.primary,
      '#161318',
      4.5
    );
  }

  // 11. Subtle Heraldic Initials Medallion (top-left, tied to character Name)
  const initials = getInitials(name);
  ctx.save();
  ctx.beginPath();
  ctx.arc(54, 54, 24, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(20, 17, 22, 0.85)';
  ctx.fill();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = palette.trim;
  ctx.stroke();
  ctx.fillStyle = palette.glow;
  ctx.font = '700 17px "Cinzel", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(initials, 54, 55);
  ctx.restore();

  // 12. Bottom RPG Portrait Nameplate representing Name & Class
  ctx.save();
  ctx.fillStyle = 'rgba(18, 15, 20, 0.9)';
  ctx.fillRect(0, 444, 512, 68);
  ctx.strokeStyle = palette.trim;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(0, 444);
  ctx.lineTo(512, 444);
  ctx.stroke();

  ctx.fillStyle = '#faf7f2';
  ctx.font = '700 22px "Cinzel", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, 256, 469, 460);

  ctx.fillStyle = palette.glow;
  ctx.font = '600 13px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(characterClass.toUpperCase(), 256, 494);
  ctx.restore();

  // Crisp inner frame
  ctx.strokeStyle = '#161318';
  ctx.lineWidth = 8;
  ctx.strokeRect(4, 4, 504, 504);

  return canvas.toDataURL('image/png');
}
