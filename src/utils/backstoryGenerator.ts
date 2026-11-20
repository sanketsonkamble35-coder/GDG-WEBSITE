import {CharacterClass, FantasyCharacter} from '../data/characters';

interface ClassStoryPool {
  openings: ((c: FantasyCharacter) => string)[];
  continuations: ((c: FantasyCharacter) => string)[];
  singleSentence: ((c: FantasyCharacter) => string)[];
}

const STORY_POOLS: Record<CharacterClass, ClassStoryPool> = {
  Mage: {
    openings: [
      (c) =>
        `Born beneath a comet-lit sky in ${c.origin}, ${c.name} became an apprentice mage after accidentally igniting a library's warded archives with a whispered syllable.`,
      (c) =>
        `${c.name} spent seven silent winters in the observatories of ${c.origin}, earning the rank of mage by translating a frostbound star chart.`,
      (c) =>
        `Though raised among humble scribes in ${c.origin}, ${c.name} revealed an innate gift as a mage when stray sparks danced around ${c.gear.toLowerCase()}.`,
      (c) =>
        `Expelled from the gilded towers of ${c.origin} for questioning forbidden theorems, ${c.name} now wanders the realm as a rogue mage.`,
      (c) =>
        `After surviving a collapsed ley-line beneath ${c.origin}, ${c.name} emerged with silver-flecked eyes and the disciplined mind of a battle mage.`,
      (c) =>
        `${c.name} studied the volatile arts of a storm mage along the sea cliffs of ${c.origin} before setting out to map unrecorded rifts.`,
    ],
    continuations: [
      (c) =>
        `Armed with ${c.gear}, this sharp-minded mage seeks the lost third volume of the Astral Compendium.`,
      (c) =>
        `Guided by a quiet discipline, ${c.name} now trades arcane counsel for shelter and forgotten lore.`,
      (c) =>
        `Each spell cast through ${c.gear} brings ${c.name} one step closer to lifting an ancestral curse.`,
      (c) =>
        `Those who travel alongside this mage soon learn that every rune sketched in the dust has a deliberate purpose.`,
      (c) =>
        `Now ${c.name} sells neither oaths nor miracles, offering arcane aid only to companions of proven resolve.`,
      (c) =>
        `With ${c.gear} slung close, ${c.name} pursues rumors of a waking citadel beyond the northern mists.`,
    ],
    singleSentence: [
      (c) =>
        `Once a quiet archivist of ${c.origin}, ${c.name} became a wandering mage after binding a starlight shard into ${c.gear} to save a burning village.`,
      (c) =>
        `${c.name} earned renown as a fearless mage of ${c.origin} by sealing an ancient rift with nothing more than ${c.gear} and an unbroken will.`,
    ],
  },
  Rogue: {
    openings: [
      (c) =>
        `Growing up along the lantern-lit rooftops of ${c.origin}, ${c.name} learned the trade of a rogue by outsmarting corrupt guildmasters.`,
      (c) =>
        `${c.name} vanished from a locked debtor's vault in ${c.origin} without disturbing a single lock, cementing a reputation as an unmatched rogue.`,
      (c) =>
        `Once a courier for the shadowed courts of ${c.origin}, ${c.name} turned rogue after uncovering a ledger marked for silent erasure.`,
      (c) =>
        `Left with nothing save quick wits and ${c.gear}, ${c.name} survived the back-alleys of ${c.origin} to become a sought-after rogue.`,
      (c) =>
        `${c.name} honed the patient craft of a rogue while lifting gilded signets from complacent nobles across ${c.origin}.`,
      (c) =>
        `After taking the fall for a botanical heist in ${c.origin}, ${c.name} embraced life as a wandering rogue with a score yet unsettled.`,
    ],
    continuations: [
      (c) =>
        `Never far from ${c.gear}, this nimble rogue now hires out for impossible infiltrations and quiet rescues.`,
      (c) =>
        `Even in crowded taverns, ${c.name} tracks every exit before taking a single sip.`,
      (c) =>
        `Rumors claim ${c.name} holds a brass key stolen from a duke's bedchamber and waits for the vault it opens.`,
      (c) =>
        `Though quick to vanish into dusk, this rogue keeps fierce loyalty toward anyone who shares an honest campfire.`,
      (c) =>
        `With ${c.gear} concealed beneath a weathered cloak, ${c.name} moves always one stride ahead of old pursuers.`,
      (c) =>
        `Now ${c.name} seeks a clean slate—or one final vault grand enough to buy freedom forever.`,
    ],
    singleSentence: [
      (c) =>
        `Born to the fog-draped alleys of ${c.origin}, ${c.name} rose as a cunning rogue who steals only from tyrants using ${c.gear} and unmatched nerve.`,
      (c) =>
        `${c.name} became the most whispered-of rogue in ${c.origin} after slipping out of the Warden's Spire with ${c.gear} and a baron's seal.`,
    ],
  },
  Warrior: {
    openings: [
      (c) =>
        `Forged in the border skirmishes of ${c.origin}, ${c.name} stood as a frontline warrior when three seasoned captains fell at the river ford.`,
      (c) =>
        `${c.name} served ten hard years in the iron garrison of ${c.origin} before taking the road as a freeborn warrior.`,
      (c) =>
        `Raised beside the mountain smithies of ${c.origin}, ${c.name} proved worthy of the warrior mantle during a brutal winter siege.`,
      (c) =>
        `When raiders burned the watchtower of ${c.origin}, ${c.name} rallied the townsfolk as an unyielding warrior and held the gate until dawn.`,
      (c) =>
        `${c.name} fought through the pit-arenas of ${c.origin} to win back a family banner, emerging as a scarred and honored warrior.`,
      (c) =>
        `After a treaty dissolved the shield-company of ${c.origin}, ${c.name} carried the discipline of a veteran warrior into untamed lands.`,
    ],
    continuations: [
      (c) =>
        `Bearing ${c.gear}, this battle-tested warrior answers only to causes worth defending with steel.`,
      (c) =>
        `Every dent along ${c.gear} marks a skirmish ${c.name} survived by refusing to yield an inch of ground.`,
      (c) =>
        `Behind a quiet stance, ${c.name} still searches for the scattered survivors of that fateful campaign.`,
      (c) =>
        `Companions quickly learn that when shields splinter, this warrior is always the last to step back.`,
      (c) =>
        `Now ${c.name} patrols the border roads, offering a steady blade to caravans brave enough to cross the pass.`,
      (c) =>
        `Guided by hard-won honor, ${c.name} seeks a worthy crest to plant atop the ruined keep of old.`,
    ],
    singleSentence: [
      (c) =>
        `A seasoned warrior from ${c.origin}, ${c.name} earned lasting renown by holding the Ashgate bridge alone with ${c.gear} against an entire vanguard.`,
      (c) =>
        `Trained among the stone bastions of ${c.origin}, ${c.name} walks the realm as a stalwart warrior sworn to protect those who cannot lift steel.`,
    ],
  },
  Archer: {
    openings: [
      (c) =>
        `Raised among the timber-watch towers of ${c.origin}, ${c.name} became an expert archer while tracking timber wolves through blinding snow.`,
      (c) =>
        `${c.name} earned the green mantle of a border archer after threading an arrow through a bandit captain's lantern cord at two hundred paces.`,
      (c) =>
        `Orphaned near the misty ridges of ${c.origin}, ${c.name} survived by mastering the quiet patience of a woodland archer.`,
      (c) =>
        `Once a scout for the silver-caravans of ${c.origin}, ${c.name} took up the bow as a roving archer when monstrous flocks darkened the pass.`,
      (c) =>
        `${c.name} learned from elder rangers in ${c.origin} that a true archer reads the wind long before drawing the string.`,
      (c) =>
        `After outshooting every noble marksman at the Midsummer Tourney of ${c.origin}, ${c.name} departed as a self-reliant archer seeking wilder horizons.`,
    ],
    continuations: [
      (c) =>
        `With ${c.gear} slung across one shoulder, this keen-eyed archer never wastes a shaft or a second glance.`,
      (c) =>
        `At camp, ${c.name} fletches arrows by ember-light while listening to distant birdsong for signs of ambush.`,
      (c) =>
        `Now ${c.name} hunts a white stag rumored to appear only where ancient wards begin to fray.`,
      (c) =>
        `Even in gale-force rain, this archer finds the narrow gap between helm and shield.`,
      (c) =>
        `Guided by old trail-marks, ${c.name} serves as eyes and vanguard for travelers venturing off the king's road.`,
      (c) =>
        `Each notch carved onto ${c.gear} commemorates a perilous ridge ${c.name} crossed unscathed.`,
    ],
    singleSentence: [
      (c) =>
        `Hailing from the windswept heights of ${c.origin}, ${c.name} is a peerless archer whose arrows from ${c.gear} rarely miss their mark even in stormlight.`,
      (c) =>
        `As a former trail-warden of ${c.origin}, ${c.name} roams the wild marches as a sharp-eyed archer who spots danger miles before it strikes.`,
    ],
  },
  Paladin: {
    openings: [
      (c) =>
        `Sworn at the sun-warmed altar of ${c.origin}, ${c.name} took the vows of a paladin after witnessing a humble healer defy a plague-ridden siege.`,
      (c) =>
        `${c.name} began as a temple squire in ${c.origin}, rising to paladin when dawn-fire answered a desperate prayer on the battlefield.`,
      (c) =>
        `Following years of penance in the cloisters of ${c.origin}, ${c.name} rode forth as an oathbound paladin determined to mend broken lands.`,
      (c) =>
        `When corrupt magistrates taxed ${c.origin} into famine, ${c.name} shattered the court seals and claimed the path of a wandering paladin.`,
      (c) =>
        `${c.name} inherited a tarnished crest from a fallen mentor in ${c.origin}, polishing it anew as a steadfast paladin of the dawn.`,
      (c) =>
        `Saved from a shipwreck off ${c.origin} by a beacon of golden light, ${c.name} pledged every remaining breath as a paladin of shelter and justice.`,
    ],
    continuations: [
      (c) =>
        `Carrying ${c.gear}, this noble paladin stands between innocent travelers and the encroaching dark.`,
      (c) =>
        `Though bound by strict conviction, ${c.name} offers mercy first and draws steel only when words fail.`,
      (c) =>
        `Each dawn, ${c.name} polishes ${c.gear} and recites the names of those who taught the true weight of an oath.`,
      (c) =>
        `Allies find quiet courage merely by marching beside this resolute paladin's banner.`,
      (c) =>
        `Now ${c.name} quests to recover a stolen reliquary whose light once guarded the eastern valleys.`,
      (c) =>
        `Wherever tyranny takes root, ${c.name} arrives with ${c.gear} and an unshakeable sense of duty.`,
    ],
    singleSentence: [
      (c) =>
        `An oathbound paladin of ${c.origin}, ${c.name} wields ${c.gear} with unwavering grace to shield the weak and restore forgotten shrines.`,
      (c) =>
        `Consecrated beneath the amber spires of ${c.origin}, ${c.name} rides as a fearless paladin whose vow outlasts both steel and winter.`,
    ],
  },
  Necromancer: {
    openings: [
      (c) =>
        `Studying beneath the catacombs of ${c.origin}, ${c.name} became a solemn necromancer not for conquest, but to hear the last truths of forgotten ancestors.`,
      (c) =>
        `After surviving a fever that left breath cold as river mist, ${c.name} left ${c.origin} to master the hushed arts of a necromancer.`,
      (c) =>
        `${c.name} served as a grave-keeper in ${c.origin} until restless spirits began whispering warnings only a necromancer could quiet.`,
      (c) =>
        `Cast out by fearful elders in ${c.origin}, ${c.name} embraced the path of a wandering necromancer to uncover who poisoned the valley's tombs.`,
      (c) =>
        `While cataloging ossuary tablets in ${c.origin}, ${c.name} unlocked an ancient seal and stepped into the veiled discipline of a necromancer.`,
      (c) =>
        `${c.name} bargained with a lingering shade beneath ${c.origin} to save a sibling's life, forever binding fate to the craft of a necromancer.`,
    ],
    continuations: [
      (c) =>
        `By the pale glow of ${c.gear}, this composed necromancer commands respect from both the living and the long-departed.`,
      (c) =>
        `Unlike reckless dabblers, ${c.name} treats every bone and echo with solemn precision.`,
      (c) =>
        `With ${c.gear} close at hand, ${c.name} hunts a rogue lich who broke the sacred compact of rest.`,
      (c) =>
        `Though strangers recoil at first glance, this necromancer often rescues cursed souls no cleric can reach.`,
      (c) =>
        `In quiet hours, ${c.name} inscribes names into ash-vellum so no fallen companion goes unremembered.`,
      (c) =>
        `Now ${c.name} walks dusk-lit roads searching for the sunken crypt where that first pact began.`,
    ],
    singleSentence: [
      (c) =>
        `Once a silent chronicler of ${c.origin}, ${c.name} walks the realm as a measured necromancer using ${c.gear} to lay restless spirits back to peace.`,
      (c) =>
        `From the misty vaults of ${c.origin}, ${c.name} emerged as a fearless necromancer who treats death not as an enemy, but as an ancient archive.`,
    ],
  },
  Druid: {
    openings: [
      (c) =>
        `Raised among the moss-wrapped standing stones of ${c.origin}, ${c.name} answered the wild's call as a druid when a centuries-old oak spoke in a dream.`,
      (c) =>
        `${c.name} left the stone walls of ${c.origin} behind to live among wolf packs and storm-winds, earning the elder title of druid.`,
      (c) =>
        `When blight crept across the orchards of ${c.origin}, ${c.name} knelt in the ash and awakened as a druid capable of coaxing green shoots from stone.`,
      (c) =>
        `Born during an autumn equinox near ${c.origin}, ${c.name} grew up fluent in river-currents and bird-calls as a keeper druid.`,
      (c) =>
        `${c.name} apprenticed to a solitary herb-sage in ${c.origin}, inheriting both ${c.gear} and the sacred duties of a grove druid.`,
      (c) =>
        `After guiding lost miners safely through a subterranean root-cavern beneath ${c.origin}, ${c.name} vowed to protect the balance as a wandering druid.`,
    ],
    continuations: [
      (c) =>
        `Guided by ${c.gear}, this wise druid mends blighted soil and calms tempestuous beasts along untamed trails.`,
      (c) =>
        `Even inside bustling cities, ${c.name} hears the slow pulse of deep roots beneath the cobblestones.`,
      (c) =>
        `With ${c.gear} in hand, ${c.name} seeks three scattered seed-stones needed to renew a withered sanctuary.`,
      (c) =>
        `Travelers who respect the forest quickly find this druid an invaluable healer and steadfast guide.`,
      (c) =>
        `Where axes threaten sacred groves, ${c.name} summons mist, thorn, and patient resolve to turn greed away.`,
      (c) =>
        `Now ${c.name} follows migrating starlings southward in search of an elder circle long thought extinct.`,
    ],
    singleSentence: [
      (c) =>
        `A serene druid from the green heart of ${c.origin}, ${c.name} carries ${c.gear} to heal scarred woodlands and keep ancient seasonal vows.`,
      (c) =>
        `Attuned to storm, stone, and sap in ${c.origin}, ${c.name} wanders as a watchful druid defending the fragile boundary between civilization and wild.`,
    ],
  },
};

export function generateCharacterBackstory(
  character: FantasyCharacter,
  seenStories: Set<string>,
  currentStory?: string | null
): string {
  const pool = STORY_POOLS[character.characterClass];

  // Build all candidate 1- and 2-sentence stories for this character
  const candidates: string[] = [];
  for (const single of pool.singleSentence) {
    candidates.push(single(character));
  }
  for (const open of pool.openings) {
    for (const cont of pool.continuations) {
      candidates.push(`${open(character)} ${cont(character)}`);
    }
  }

  let unseen = candidates.filter((story) => !seenStories.has(story));
  if (unseen.length === 0) {
    seenStories.clear();
    if (currentStory) {
      seenStories.add(currentStory);
    }
    unseen = candidates.filter((story) => story !== currentStory);
  }

  const choicePool = unseen.length > 0 ? unseen : candidates;
  const picked = choicePool[Math.floor(Math.random() * choicePool.length)];
  seenStories.add(picked);
  return picked;
}
