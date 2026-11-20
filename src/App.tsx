import {useEffect, useRef, useState} from 'react';
import {
  BookmarkPlus,
  Check,
  Copy,
  Dices,
  Feather,
  ImagePlus,
  RefreshCw,
} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {CharacterPortrait} from './components/CharacterPortrait';
import {DeckSection, SavedDeckCard} from './components/DeckSection';
import {
  CHARACTER_CLASSES,
  CharacterClass,
  CLASS_CATALOG,
  createFantasyCharacter,
  FantasyCharacter,
} from './data/characters';
import {generateCharacterBackstory} from './utils/backstoryGenerator';
import {generateCharacterPortraitDataUrl} from './utils/portraitGenerator';

const DECK_STORAGE_KEY = 'fantasy-character-creator-deck-v1';

function loadInitialDeck(): SavedDeckCard[] {
  try {
    const raw = window.localStorage.getItem(DECK_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is SavedDeckCard =>
        Boolean(item?.deckId) &&
        Boolean(item?.character?.name) &&
        Boolean(item?.character?.characterClass) &&
        Boolean(item?.character?.stats)
    );
  } catch {
    return [];
  }
}

export default function App() {
  const usedNamesRef = useRef<Set<string>>(new Set());
  const rollCounterRef = useRef<number>(1);

  const [character, setCharacter] = useState<FantasyCharacter>(() =>
    createFantasyCharacter(usedNamesRef.current, 1)
  );
  const [history, setHistory] = useState<FantasyCharacter[]>(() => [character]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [justSavedId, setJustSavedId] = useState<string | null>(null);
  const [portraits, setPortraits] = useState<
    Record<string, {url: string; variant: number}>
  >({});
  const [backstories, setBackstories] = useState<Record<string, string>>({});
  const seenBackstoriesRef = useRef<Record<string, Set<string>>>({});
  const [deck, setDeck] = useState<SavedDeckCard[]>(loadInitialDeck);

  useEffect(() => {
    try {
      window.localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deck));
    } catch {
      // Gracefully keep deck in memory if localStorage quota is exceeded
    }
  }, [deck]);

  const activePortrait = portraits[character.id] ?? null;
  const activeBackstory = backstories[character.id] ?? null;

  const handleGenerateCharacter = () => {
    rollCounterRef.current += 1;
    const next = createFantasyCharacter(
      usedNamesRef.current,
      rollCounterRef.current
    );
    setCharacter(next);
    setHistory((prev) => [next, ...prev].slice(0, 6));
    setCopiedId(null);
    setJustSavedId(null);
  };

  const handleGenerateForClass = (selectedClass: CharacterClass) => {
    rollCounterRef.current += 1;
    const next = createFantasyCharacter(
      usedNamesRef.current,
      rollCounterRef.current,
      selectedClass
    );
    setCharacter(next);
    setHistory((prev) => [next, ...prev].slice(0, 6));
    setCopiedId(null);
    setJustSavedId(null);
  };

  const handleSelectHistory = (entry: FantasyCharacter) => {
    setCharacter(entry);
    setCopiedId(null);
    setJustSavedId(null);
  };

  const handleClearHistory = () => {
    setHistory([character]);
  };

  const handleGeneratePortrait = () => {
    const existing = portraits[character.id];
    const nextVariant = existing ? existing.variant + 1 : 1;
    const url = generateCharacterPortraitDataUrl(
      character.name,
      character.characterClass,
      nextVariant
    );
    setPortraits((prev) => ({
      ...prev,
      [character.id]: {url, variant: nextVariant},
    }));
  };

  const handleRegeneratePortrait = () => {
    const existing = portraits[character.id];
    const nextVariant = existing ? existing.variant + 1 : 2;
    const url = generateCharacterPortraitDataUrl(
      character.name,
      character.characterClass,
      nextVariant
    );
    setPortraits((prev) => ({
      ...prev,
      [character.id]: {url, variant: nextVariant},
    }));
  };

  const handleGenerateBackstory = () => {
    if (!seenBackstoriesRef.current[character.id]) {
      seenBackstoriesRef.current[character.id] = new Set();
    }
    const nextBackstory = generateCharacterBackstory(
      character,
      seenBackstoriesRef.current[character.id],
      activeBackstory
    );
    setBackstories((prev) => ({
      ...prev,
      [character.id]: nextBackstory,
    }));
  };

  const handleSaveToDeck = () => {
    let storyToSave = activeBackstory;
    if (!storyToSave) {
      if (!seenBackstoriesRef.current[character.id]) {
        seenBackstoriesRef.current[character.id] = new Set();
      }
      storyToSave = generateCharacterBackstory(
        character,
        seenBackstoriesRef.current[character.id]
      );
      setBackstories((prev) => ({
        ...prev,
        [character.id]: storyToSave!,
      }));
    }

    const portraitToSave =
      activePortrait?.url ?? CLASS_CATALOG[character.characterClass].portrait;

    const newCard: SavedDeckCard = {
      deckId: `${character.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      savedAt: Date.now(),
      character,
      portraitUrl: portraitToSave,
      backstory: storyToSave,
    };

    setDeck((prev) => [newCard, ...prev]);
    setJustSavedId(character.id);
    window.setTimeout(() => {
      setJustSavedId((current) => (current === character.id ? null : current));
    }, 1800);
  };

  const handleLoadDeckCard = (entry: SavedDeckCard) => {
    setCharacter(entry.character);
    setBackstories((prev) => ({
      ...prev,
      [entry.character.id]: entry.backstory,
    }));
    if (entry.portraitUrl) {
      setPortraits((prev) => ({
        ...prev,
        [entry.character.id]: {
          url: entry.portraitUrl,
          variant: prev[entry.character.id]?.variant ?? 1,
        },
      }));
    }
    setCopiedId(null);
    setJustSavedId(null);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const handleRemoveDeckCard = (deckId: string) => {
    setDeck((prev) => prev.filter((item) => item.deckId !== deckId));
  };

  const handleCopyCharacter = async () => {
    const lines = [
      `Name: ${character.name}`,
      `Class: ${character.characterClass} (${character.archetype})`,
      `Health: ${character.stats.health} | Mana: ${character.stats.mana} | Strength: ${character.stats.strength}`,
      `Origin: ${character.origin}`,
      `Signature Gear: ${character.gear}`,
      `Trait: ${character.trait}`,
    ];
    if (activeBackstory) {
      lines.push(`Backstory: ${activeBackstory}`);
    }
    const text = lines.join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(character.id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === character.id ? null : current));
      }, 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  const formattedRoll = String(character.rollNumber).padStart(2, '0');
  const isCopied = copiedId === character.id;
  const isJustSaved = justSavedId === character.id;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#120d0a] text-[#f3ead8]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-55"
        style={{
          backgroundImage:
            'url("/src/assets/images/alchemist_workbench_bg_1795167713636.jpg")',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-[#120d0a]/75 via-[#18110d]/65 to-[#0d0907]/90"
      />

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="flex flex-col gap-6 border-b border-[#c59b49]/25 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h1 className="font-display text-3xl font-bold tracking-wide text-[#f4e4c1] text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] sm:text-4xl">
              Fantasy Character Creator
            </h1>
            <p className="mt-2.5 text-base leading-relaxed text-[#cbb99d]">
              Forge a fantasy player card across seven classic classes, roll
              combat stats, and collect your favorites in your deck.
            </p>
          </div>

          <button
            type="button"
            onClick={handleGenerateCharacter}
            className="inline-flex min-h-[46px] shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-[#d6ae5e]/80 bg-gradient-to-b from-[#8c2d1e] to-[#5e1b11] px-6 py-3 text-sm font-semibold tracking-wide text-[#fbf2df] shadow-[inset_0_1px_0_rgba(255,232,179,0.35),0_6px_18px_rgba(0,0,0,0.45)] transition-all duration-150 hover:from-[#a13524] hover:to-[#6d2015] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7c77f] active:scale-[0.99] whitespace-nowrap"
          >
            <Dices
              className="h-4 w-4 shrink-0 text-[#f3cf83]"
              aria-hidden="true"
            />
            <span>Generate Character</span>
          </button>
        </header>

        <section
          aria-label="Generated Character"
          className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <article className="relative overflow-hidden rounded-xl border-2 border-[#c99e46] bg-gradient-to-br from-[#f3e7ce] via-[#ead8b4] to-[#dec394] text-[#241811] shadow-[inset_0_0_0_2px_#5e411a,inset_0_0_52px_rgba(116,74,30,0.2),0_24px_54px_rgba(0,0,0,0.65)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={character.id}
                  initial={{opacity: 0, y: 6}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -4}}
                  transition={{duration: 0.16, ease: [0.16, 1, 0.3, 1]}}
                >
                  <div className="flex flex-col gap-4 border-b-2 border-[#8c642b]/65 bg-[#221711] px-6 py-5 text-[#f5e7ca] sm:flex-row sm:items-center sm:justify-between sm:px-8">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-wide text-[#cbb694] tabular-nums">
                        Card #{formattedRoll}
                        <span className="mx-2 text-[#8c6a48]" aria-hidden="true">
                          ·
                        </span>
                        {character.archetype}
                      </p>
                      <h2
                        data-testid="character-name"
                        className="mt-1 font-display text-2xl font-bold tracking-wide text-[#f6e6c3] text-balance sm:text-[2rem] sm:leading-tight"
                      >
                        {character.name}
                      </h2>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xs font-semibold tracking-wide text-[#cbb694]">
                          Class
                        </span>
                        <span
                          data-testid="character-class"
                          className="text-base font-bold tracking-wide text-[#e7c77f]"
                        >
                          {character.characterClass}
                        </span>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handleSaveToDeck}
                        className="inline-flex min-h-[42px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#d6ae5e]/85 bg-gradient-to-b from-[#b5842c] to-[#875e18] px-4 py-2 text-xs font-bold tracking-wide text-[#1a110a] shadow-[inset_0_1px_0_rgba(255,244,205,0.45),0_3px_10px_rgba(0,0,0,0.4)] transition-all duration-150 hover:from-[#c79436] hover:to-[#976a1d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3cf83] whitespace-nowrap"
                      >
                        {isJustSaved ? (
                          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                        ) : (
                          <BookmarkPlus
                            className="h-4 w-4 shrink-0"
                            aria-hidden="true"
                          />
                        )}
                        <span>{isJustSaved ? 'Saved! Save to Deck' : 'Save to Deck'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyCharacter}
                        className="inline-flex min-h-[42px] shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#c59b49]/40 bg-[#2f221a] px-3 py-2 text-xs font-semibold text-[#e9d9bc] transition-colors duration-150 hover:border-[#c59b49]/75 hover:bg-[#3a2a20] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7c77f] whitespace-nowrap"
                      >
                        {isCopied ? (
                          <>
                            <Check
                              className="h-3.5 w-3.5 text-[#86efac]"
                              aria-hidden="true"
                            />
                            <span className="text-[#bbf7d0]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 p-6 sm:flex-row sm:gap-8 sm:p-8">
                    <div className="w-full shrink-0 sm:w-56 md:w-64">
                      <CharacterPortrait
                        characterClass={character.characterClass}
                        characterName={character.name}
                        portraitUrl={activePortrait?.url}
                      />

                      <div className="mt-3 flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={handleGeneratePortrait}
                          className="inline-flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#b4893e]/75 bg-gradient-to-b from-[#33251d] to-[#1e1510] px-4 py-2 text-xs font-semibold tracking-wide text-[#f6e8cb] shadow-[inset_0_1px_0_rgba(255,225,165,0.22),0_3px_8px_rgba(36,24,17,0.25)] transition-all duration-150 hover:from-[#423026] hover:to-[#281c15] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c2319] whitespace-nowrap"
                        >
                          <ImagePlus
                            className="h-3.5 w-3.5 shrink-0 text-[#e7c77f]"
                            aria-hidden="true"
                          />
                          <span>Generate Portrait</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleRegeneratePortrait}
                          className="inline-flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#8c642b]/70 bg-gradient-to-b from-[#efe0be] to-[#d9be8b] px-4 py-2 text-xs font-semibold tracking-wide text-[#2a1c12] shadow-[inset_0_1px_0_rgba(255,250,235,0.65),0_2px_6px_rgba(36,24,17,0.14)] transition-all duration-150 hover:from-[#f4e7c9] hover:to-[#e1c998] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c2319] whitespace-nowrap"
                        >
                          <RefreshCw
                            className="h-3.5 w-3.5 shrink-0 text-[#6e4c1d]"
                            aria-hidden="true"
                          />
                          <span>Regenerate Portrait</span>
                        </button>
                      </div>

                      {activePortrait && (
                        <p
                          data-testid="portrait-variant"
                          className="mt-2 text-center text-xs font-medium text-[#5c4532] tabular-nums"
                        >
                          Custom Portrait · Variant #
                          {String(activePortrait.variant).padStart(2, '0')}
                        </p>
                      )}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <dl
                          aria-label="Character Stats"
                          className="grid grid-cols-3 divide-x divide-[#6e4e2c]/25 border-y border-[#6e4e2c]/30 bg-[#e6d3ad]/45 text-center"
                        >
                          <div className="px-2 py-3">
                            <dt className="text-xs font-semibold tracking-wide text-[#664c36]">
                              Health
                            </dt>
                            <dd
                              data-testid="stat-health"
                              className="mt-0.5 font-display text-xl font-bold text-[#7c2319] tabular-nums sm:text-2xl"
                            >
                              {character.stats.health}
                            </dd>
                          </div>
                          <div className="px-2 py-3">
                            <dt className="text-xs font-semibold tracking-wide text-[#664c36]">
                              Mana
                            </dt>
                            <dd
                              data-testid="stat-mana"
                              className="mt-0.5 font-display text-xl font-bold text-[#25406b] tabular-nums sm:text-2xl"
                            >
                              {character.stats.mana}
                            </dd>
                          </div>
                          <div className="px-2 py-3">
                            <dt className="text-xs font-semibold tracking-wide text-[#664c36]">
                              Strength
                            </dt>
                            <dd
                              data-testid="stat-strength"
                              className="mt-0.5 font-display text-xl font-bold text-[#2b1d14] tabular-nums sm:text-2xl"
                            >
                              {character.stats.strength}
                            </dd>
                          </div>
                        </dl>

                        <p className="mt-4 text-sm leading-relaxed text-[#3e2c1f] sm:text-[15px]">
                          {character.summary}
                        </p>

                        <dl className="mt-4 divide-y divide-[#6e4e2c]/20 border-t border-[#6e4e2c]/25 text-sm">
                          <div className="flex flex-col gap-1 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <dt className="shrink-0 font-semibold text-[#664c36]">
                              Origin
                            </dt>
                            <dd className="font-semibold text-[#241811] sm:text-right">
                              {character.origin}
                            </dd>
                          </div>
                          <div className="flex flex-col gap-1 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <dt className="shrink-0 font-semibold text-[#664c36]">
                              Signature Gear
                            </dt>
                            <dd className="font-semibold text-[#241811] sm:text-right">
                              {character.gear}
                            </dd>
                          </div>
                          <div className="flex flex-col gap-1 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <dt className="shrink-0 font-semibold text-[#664c36]">
                              Defining Trait
                            </dt>
                            <dd className="font-semibold text-[#241811] sm:text-right">
                              {character.trait}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="mt-4 border-t border-[#6e4e2c]/30 pt-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="font-display text-sm font-bold tracking-wide text-[#4e3622]">
                            Backstory
                          </h3>
                          <button
                            type="button"
                            onClick={handleGenerateBackstory}
                            className="inline-flex min-h-[38px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#d6ae5e]/75 bg-gradient-to-b from-[#7a281b] to-[#561a11] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#fbf2df] shadow-[inset_0_1px_0_rgba(255,232,179,0.3),0_2px_8px_rgba(36,24,17,0.2)] transition-all duration-150 hover:from-[#8d2f20] hover:to-[#651f14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c2319] whitespace-nowrap"
                          >
                            <Feather
                              className="h-3.5 w-3.5 shrink-0 text-[#f3cf83]"
                              aria-hidden="true"
                            />
                            <span>Generate Backstory</span>
                          </button>
                        </div>

                        {activeBackstory ? (
                          <p
                            data-testid="character-backstory"
                            className="mt-3 text-sm leading-relaxed text-[#2b1d14] sm:text-[15px]"
                          >
                            {activeBackstory}
                          </p>
                        ) : (
                          <p className="mt-3 text-sm italic text-[#6c523b]">
                            No chronicle inscribed yet. Click Generate Backstory
                            to unveil this hero&apos;s past.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </article>
          </div>

          <aside className="flex flex-col gap-6 lg:col-span-4">
            <section
              aria-label="Character Classes"
              className="rounded-xl border border-[#c29648]/30 bg-[#1a1410]/92 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.48)] backdrop-blur-xs"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-bold tracking-wide text-[#e7c77f]">
                  Classes
                </h3>
                <span className="text-xs text-[#ab977c]">
                  Click to roll class
                </span>
              </div>

              <ul className="mt-4 divide-y divide-[#c29648]/15 border-t border-[#c29648]/20">
                {CHARACTER_CLASSES.map((cls) => {
                  const isActive = character.characterClass === cls;
                  const meta = CLASS_CATALOG[cls];

                  return (
                    <li key={cls}>
                      <button
                        type="button"
                        onClick={() => handleGenerateForClass(cls)}
                        className={`flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-3 rounded-md px-2.5 py-2.5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e7c77f] ${
                          isActive
                            ? 'bg-[#c29648]/15 text-[#f7dca1]'
                            : 'text-[#e5d6bd] hover:bg-[#c29648]/8 hover:text-[#fbf2df]'
                        }`}
                      >
                        <div className="min-w-0">
                          <span
                            className={`block text-sm ${
                              isActive
                                ? 'font-bold text-[#f3cf83]'
                                : 'font-medium text-[#f2e6d0]'
                            }`}
                          >
                            {cls}
                          </span>
                          <span className="block truncate text-xs text-[#ab977c]">
                            {meta.archetype}
                          </span>
                        </div>

                        {isActive && (
                          <span className="shrink-0 text-xs font-semibold text-[#e7c77f] whitespace-nowrap">
                            Selected
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>

            {history.length > 1 && (
              <section
                aria-label="Recent Characters"
                className="rounded-xl border border-[#c29648]/30 bg-[#1a1410]/92 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.48)] backdrop-blur-xs"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold tracking-wide text-[#e7c77f]">
                    Recent Rolls
                  </h3>
                  <button
                    type="button"
                    onClick={handleClearHistory}
                    className="cursor-pointer text-xs font-medium text-[#b8a388] transition-colors hover:text-[#f4e4c1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7c77f] whitespace-nowrap shrink-0"
                  >
                    Clear
                  </button>
                </div>

                <ul className="mt-4 divide-y divide-[#c29648]/15 border-t border-[#c29648]/20">
                  {history.map((entry) => {
                    const isCurrent = entry.id === character.id;
                    const entryRoll = String(entry.rollNumber).padStart(2, '0');

                    return (
                      <li key={entry.id}>
                        <button
                          type="button"
                          onClick={() => handleSelectHistory(entry)}
                          className={`flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-3 rounded-md px-2.5 py-2.5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e7c77f] ${
                            isCurrent
                              ? 'bg-[#c29648]/15'
                              : 'hover:bg-[#c29648]/8'
                          }`}
                        >
                          <div className="min-w-0">
                            <span className="block truncate text-sm font-medium text-[#f2e6d0]">
                              {entry.name}
                            </span>
                            <span className="block text-xs text-[#ab977c] tabular-nums">
                              #{entryRoll} · {entry.characterClass}
                            </span>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
          </aside>
        </section>

        <DeckSection
          deck={deck}
          onLoadCard={handleLoadDeckCard}
          onRemoveCard={handleRemoveDeckCard}
        />
      </main>
    </div>
  );
}
