import {Trash2} from 'lucide-react';
import {CLASS_CATALOG, FantasyCharacter} from '../data/characters';

export interface SavedDeckCard {
  deckId: string;
  savedAt: number;
  character: FantasyCharacter;
  portraitUrl: string;
  backstory: string;
}

interface DeckSectionProps {
  deck: SavedDeckCard[];
  onLoadCard: (card: SavedDeckCard) => void;
  onRemoveCard: (deckId: string) => void;
}

export function DeckSection({
  deck,
  onLoadCard,
  onRemoveCard,
}: DeckSectionProps) {
  return (
    <section
      aria-label="My Deck"
      className="mt-10 border-t border-[#c59b49]/25 pt-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-wide text-[#f4e4c1] sm:text-3xl">
            My Deck
          </h2>
          <p className="mt-1 text-sm text-[#cbb99d]">
            Saved character cards forged at the workbench.
          </p>
        </div>

        <span className="text-xs font-semibold tracking-wide text-[#e7c77f] tabular-nums">
          {deck.length} {deck.length === 1 ? 'Character' : 'Characters'} Saved
        </span>
      </div>

      {deck.length === 0 ? (
        <div className="mt-6 rounded-xl border border-[#c29648]/30 bg-[#1a1410]/85 px-6 py-10 text-center">
          <p className="text-sm text-[#cbb99d]">
            No characters in your deck yet. Click{' '}
            <span className="font-semibold text-[#f3cf83]">Save to Deck</span>{' '}
            on the player card above to preserve a hero.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deck.map((entry) => {
            const {character, portraitUrl, backstory, deckId} = entry;
            const fallbackPortrait =
              CLASS_CATALOG[character.characterClass].portrait;

            return (
              <article
                key={deckId}
                data-testid="deck-card"
                className="flex flex-col justify-between overflow-hidden rounded-xl border-2 border-[#b4893e]/80 bg-gradient-to-br from-[#f2e5cb] via-[#e8d6b3] to-[#dcc295] text-[#241811] shadow-[inset_0_0_0_1px_rgba(94,65,26,0.45),0_14px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center gap-3.5 border-b border-[#8c642b]/35 bg-[#221711] px-4 py-3 text-[#f5e7ca]">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md border border-[#c99e46]/70 bg-[#140e0a]">
                      <img
                        src={portraitUrl || fallbackPortrait}
                        alt={`${character.name}, ${character.characterClass}`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-display text-lg font-bold tracking-wide text-[#f6e6c3]">
                        {character.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#e7c77f]">
                        {character.characterClass}
                        <span className="mx-1.5 text-[#9a7d52]" aria-hidden="true">
                          ·
                        </span>
                        <span className="font-normal text-[#cbb694]">
                          {character.archetype}
                        </span>
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-3 divide-x divide-[#6e4e2c]/25 border-b border-[#6e4e2c]/25 bg-[#e6d3ad]/45 text-center">
                    <div className="px-2 py-2.5">
                      <dt className="text-[11px] font-semibold tracking-wide text-[#664c36]">
                        Health
                      </dt>
                      <dd className="mt-0.5 text-base font-bold text-[#241811] tabular-nums">
                        {character.stats.health}
                      </dd>
                    </div>
                    <div className="px-2 py-2.5">
                      <dt className="text-[11px] font-semibold tracking-wide text-[#664c36]">
                        Mana
                      </dt>
                      <dd className="mt-0.5 text-base font-bold text-[#241811] tabular-nums">
                        {character.stats.mana}
                      </dd>
                    </div>
                    <div className="px-2 py-2.5">
                      <dt className="text-[11px] font-semibold tracking-wide text-[#664c36]">
                        Strength
                      </dt>
                      <dd className="mt-0.5 text-base font-bold text-[#241811] tabular-nums">
                        {character.stats.strength}
                      </dd>
                    </div>
                  </dl>

                  <div className="p-4">
                    <p className="text-xs leading-relaxed text-[#2f2016]">
                      {backstory}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-[#6e4e2c]/20 px-4 py-3">
                  <button
                    type="button"
                    onClick={() => onLoadCard(entry)}
                    className="inline-flex min-h-[36px] flex-1 cursor-pointer items-center justify-center rounded-md border border-[#8c642b]/70 bg-gradient-to-b from-[#33251d] to-[#1e1510] px-3 py-1.5 text-xs font-semibold text-[#f6e8cb] transition-colors duration-150 hover:from-[#423026] hover:to-[#281c15] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c2319] whitespace-nowrap"
                  >
                    Load Card
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemoveCard(deckId)}
                    aria-label={`Remove ${character.name} from deck`}
                    className="inline-flex min-h-[36px] shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-[#7c5927]/35 bg-[#f6ebd3]/60 px-3 py-1.5 text-xs font-semibold text-[#6b2419] transition-colors duration-150 hover:bg-[#f6ebd3] hover:text-[#4e170f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c2319] whitespace-nowrap"
                  >
                    <Trash2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>Remove</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
