export type CharacterClass =
  | 'Mage'
  | 'Rogue'
  | 'Warrior'
  | 'Archer'
  | 'Paladin'
  | 'Necromancer'
  | 'Druid';

export interface ClassMetadata {
  name: CharacterClass;
  archetype: string;
  summary: string;
  portrait: string;
  accentColor: string;
  signatureGear: string[];
}

export interface CharacterStats {
  health: number;
  mana: number;
  strength: number;
}

export interface FantasyCharacter {
  id: string;
  rollNumber: number;
  name: string;
  characterClass: CharacterClass;
  archetype: string;
  origin: string;
  gear: string;
  trait: string;
  summary: string;
  stats: CharacterStats;
}

export const CHARACTER_CLASSES: readonly CharacterClass[] = [
  'Mage',
  'Rogue',
  'Warrior',
  'Archer',
  'Paladin',
  'Necromancer',
  'Druid',
] as const;

export const CLASS_CATALOG: Record<CharacterClass, ClassMetadata> = {
  Mage: {
    name: 'Mage',
    archetype: 'Arcane Scholar',
    summary:
      'Commands elemental forces and ancient sigils through disciplined study of the astral weave.',
    portrait: '/src/assets/images/class_portrait_mage_1795165265985.jpg',
    accentColor: '#3730A3',
    signatureGear: [
      'Runed Ashwood Staff',
      'Starlight Astrolabe',
      'Bound Spellbook of Ember',
      'Obsidian Focus Rod',
    ],
  },
  Rogue: {
    name: 'Rogue',
    archetype: 'Shadow Operative',
    summary:
      'Moves unseen through vaulted alleys and castle shadows, striking before blades are drawn.',
    portrait: '/src/assets/images/class_portrait_rogue_1795165267309.jpg',
    accentColor: '#334155',
    signatureGear: [
      'Twin Silver-Inlaid Daggers',
      'Whispering Leather Cloak',
      'Masterwork Lockpicks',
      'Moonstone Grappling Hook',
    ],
  },
  Warrior: {
    name: 'Warrior',
    archetype: 'Frontline Vanguard',
    summary:
      'Stands unbroken at the shield wall, mastering steel and battlefield resolve through decades of campaign.',
    portrait: '/src/assets/images/class_portrait_warrior_1795165266952.jpg',
    accentColor: '#991B1B',
    signatureGear: [
      'Notched Greatsword',
      'Riveted Tower Shield',
      'Brushed Steel Pauldrons',
      'Campaign Battleaxe',
    ],
  },
  Archer: {
    name: 'Archer',
    archetype: 'Marksman Ranger',
    summary:
      'Tracks quarry across misty ridges and looses fletched arrows with wind-tested precision.',
    portrait: '/src/assets/images/class_portrait_archer_1795165267602.jpg',
    accentColor: '#3F6212',
    signatureGear: [
      'Yew War Longbow',
      'Fletched Bodkin Quiver',
      'Olive Brigandine Jerkin',
      'Falconer Bracer',
    ],
  },
  Paladin: {
    name: 'Paladin',
    archetype: 'Oathbound Knight',
    summary:
      'Bound by sacred vow to shield the defenseless and channel dawn-forged steel against creeping ruin.',
    portrait: '/src/assets/images/class_portrait_paladin_1795165266207.jpg',
    accentColor: '#9A3412',
    signatureGear: [
      'Sun-Crest Warhammer',
      'Etched Silver Buckler',
      'Consecrated Tabard',
      'Reliquary Gauntlets',
    ],
  },
  Necromancer: {
    name: 'Necromancer',
    archetype: 'Soulbinder',
    summary:
      'Reads the quiet ledger between breath and dust, bargaining with lingering echoes beyond the veil.',
    portrait: '/src/assets/images/class_portrait_necromancer_1795165266793.jpg',
    accentColor: '#115E59',
    signatureGear: [
      'Spirit-Wick Lantern',
      'Bone Talisman Collar',
      'Cryptwood Stave',
      'Ashen Hourglass',
    ],
  },
  Druid: {
    name: 'Druid',
    archetype: 'Grove Warden',
    summary:
      'Speaks the elder tongue of root, storm, and stone to preserve the balance of untamed wilds.',
    portrait: '/src/assets/images/class_portrait_druid_1795165269720.jpg',
    accentColor: '#166534',
    signatureGear: [
      'Ivy-Bound Hawthorn Staff',
      'Carved Antler Circlet',
      'Mist-Woven Mantle',
      'Moonlit Sickle',
    ],
  },
};

const GIVEN_NAMES = [
  'Aldric',
  'Aeliana',
  'Bramwell',
  'Caelum',
  'Corvus',
  'Dorian',
  'Elowen',
  'Elara',
  'Faelar',
  'Fenris',
  'Garrick',
  'Gwendolyn',
  'Hadrian',
  'Isolde',
  'Jorah',
  'Kaelen',
  'Kaelith',
  'Leander',
  'Lyra',
  'Maelis',
  'Malakor',
  'Mirella',
  'Morwen',
  'Neriah',
  'Nolan',
  'Orin',
  'Oakhart',
  'Peregrine',
  'Rowan',
  'Rhydian',
  'Sable',
  'Seraphina',
  'Silas',
  'Sorrel',
  'Sylvara',
  'Talia',
  'Thalor',
  'Theran',
  'Torin',
  'Ulric',
  'Valen',
  'Vespera',
  'Vorn',
  'Wren',
  'Xander',
  'Ysolde',
  'Zephyr',
  'Alistair',
  'Brynja',
  'Cassian',
  'Evander',
  'Freya',
  'Gideon',
  'Helena',
  'Ignatius',
  'Kieran',
  'Lucian',
  'Maeve',
  'Octavia',
  'Soren',
];

const SURNAMES = [
  'Ashvale',
  'Blackthorne',
  'Briarwood',
  'Cinderfell',
  'Coldwater',
  'Crowley',
  'Dawnward',
  'Duskweaver',
  'Embercrest',
  'Fairwind',
  'Frosthelm',
  'Galeborn',
  'Goldleaf',
  'Graycloak',
  'Greystone',
  'Hartwood',
  'Hawthorne',
  'Holloway',
  'Ironcrest',
  'Kestrel',
  'Lockhart',
  'Mirewalker',
  'Moonshadow',
  'Mossmantle',
  'Nightwind',
  'Northridge',
  'Oakhaven',
  'Ravenhurst',
  'Redmoor',
  'Riverbend',
  'Rookwood',
  'Shadewell',
  'Silverbrook',
  'Skye',
  'Stonebridge',
  'Stormwatch',
  'Sunspire',
  'Thornbury',
  'Vane',
  'Veridian',
  'Westfall',
  'Whitethorn',
  'Wilder',
  'Winterborne',
  'Wolfhart',
  'Wyrmwood',
  'Barrow',
  'crestfall',
  'Drakemoor',
  'Eldervale',
  'Flintlock',
  'Grimshaw',
  'Highwater',
  'Keldorn',
  'Larkspur',
  'Marrow',
  'Oakenfold',
  'Starling',
  'Valeborn',
  'Wraithwood',
].map((name) => name.charAt(0).toUpperCase() + name.slice(1));

const ORIGINS = [
  'Highvale Citadel',
  'Whispering Fen',
  'Ironcrag Reach',
  'Silvermere Coast',
  'Ashenvale Outpost',
  'Thornwood Marches',
  'Sunspire Cloister',
  'Frosthollow Keep',
  'Ambergris Harbor',
  'Elderbark Sanctuary',
  'Cinderpeak Watch',
  'Moonwell Abbey',
];

const TRAITS = [
  'Reads ancient runes by candlelight',
  'Never forgets a sworn debt',
  'Keeps an unerring sense of north',
  'Speaks little, observes everything',
  'Carries a silver coin from a fallen realm',
  'Rises before dawn without fail',
  'Refuses to leave an ally behind',
  'Hums old hearth-songs before battle',
  'Trusts steel and weather over promises',
  'Records every journey in a leather journal',
  'Calms spooked mounts with a quiet whistle',
  'Spots ambushes from broken twigs alone',
];

function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function generateUniqueFantasyName(usedNames: Set<string>): string {
  const maxAttempts = 500;
  for (let i = 0; i < maxAttempts; i++) {
    const first = pickRandom(GIVEN_NAMES);
    const last = pickRandom(SURNAMES);
    const candidate = `${first} ${last}`;
    if (!usedNames.has(candidate)) {
      usedNames.add(candidate);
      return candidate;
    }
  }

  // Fallback if session exceeds 3,600 unique combinations
  let suffixIndex = usedNames.size + 1;
  while (true) {
    const candidate = `${pickRandom(GIVEN_NAMES)} ${pickRandom(SURNAMES)} ${suffixIndex}`;
    if (!usedNames.has(candidate)) {
      usedNames.add(candidate);
      return candidate;
    }
    suffixIndex++;
  }
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateCharacterStats(
  characterClass: CharacterClass
): CharacterStats {
  switch (characterClass) {
    case 'Warrior':
      return {
        health: randomInt(105, 145),
        mana: randomInt(25, 55),
        strength: randomInt(75, 99),
      };
    case 'Paladin':
      return {
        health: randomInt(100, 140),
        mana: randomInt(55, 90),
        strength: randomInt(68, 94),
      };
    case 'Mage':
      return {
        health: randomInt(65, 95),
        mana: randomInt(95, 140),
        strength: randomInt(30, 55),
      };
    case 'Necromancer':
      return {
        health: randomInt(70, 100),
        mana: randomInt(90, 135),
        strength: randomInt(35, 62),
      };
    case 'Druid':
      return {
        health: randomInt(80, 115),
        mana: randomInt(80, 120),
        strength: randomInt(48, 76),
      };
    case 'Archer':
      return {
        health: randomInt(78, 112),
        mana: randomInt(45, 80),
        strength: randomInt(60, 88),
      };
    case 'Rogue':
      return {
        health: randomInt(75, 108),
        mana: randomInt(40, 75),
        strength: randomInt(62, 90),
      };
  }
}

export function createFantasyCharacter(
  usedNames: Set<string>,
  rollNumber: number,
  forcedClass?: CharacterClass
): FantasyCharacter {
  const characterClass = forcedClass ?? pickRandom(CHARACTER_CLASSES);
  const classMeta = CLASS_CATALOG[characterClass];
  const name = generateUniqueFantasyName(usedNames);

  return {
    id: `${Date.now()}-${rollNumber}-${Math.random().toString(36).slice(2, 7)}`,
    rollNumber,
    name,
    characterClass,
    archetype: classMeta.archetype,
    origin: pickRandom(ORIGINS),
    gear: pickRandom(classMeta.signatureGear),
    trait: pickRandom(TRAITS),
    summary: classMeta.summary,
    stats: generateCharacterStats(characterClass),
  };
}
