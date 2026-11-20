import {useEffect, useState} from 'react';
import {
  BowArrow,
  Flame,
  Shield,
  Skull,
  Sparkles,
  Sword,
  Trees,
} from 'lucide-react';
import {CharacterClass, CLASS_CATALOG} from '../data/characters';

interface CharacterPortraitProps {
  characterClass: CharacterClass;
  characterName: string;
  portraitUrl?: string | null;
}

function getClassIcon(characterClass: CharacterClass) {
  switch (characterClass) {
    case 'Mage':
      return Sparkles;
    case 'Rogue':
      return Flame;
    case 'Warrior':
      return Sword;
    case 'Archer':
      return BowArrow;
    case 'Paladin':
      return Shield;
    case 'Necromancer':
      return Skull;
    case 'Druid':
      return Trees;
  }
}

export function CharacterPortrait({
  characterClass,
  characterName,
  portraitUrl,
}: CharacterPortraitProps) {
  const meta = CLASS_CATALOG[characterClass];
  const [hasError, setHasError] = useState(false);
  const imageSrc = portraitUrl || meta.portrait;

  useEffect(() => {
    setHasError(false);
  }, [imageSrc]);

  const FallbackIcon = getClassIcon(characterClass);

  if (hasError) {
    return (
      <div
        className="relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-[#7c5c29]/80 bg-[#1a130f] p-6 text-[#f3ead8] shadow-[inset_0_0_0_1px_rgba(240,210,145,0.2),0_8px_20px_rgba(24,14,8,0.35)]"
        aria-label={`${characterName}, ${characterClass} portrait fallback`}
      >
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d6ae5e]/45"
          style={{backgroundColor: meta.accentColor}}
        >
          <FallbackIcon className="h-8 w-8 text-[#f7eedc]" strokeWidth={1.75} />
        </div>
        <span className="mt-4 font-display text-lg font-bold tracking-wide text-[#f7eedc]">
          {characterClass}
        </span>
        <span className="mt-1 text-xs text-[#cbb99f]">{meta.archetype}</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg border-2 border-[#7c5c29]/80 bg-[#1a130f] shadow-[inset_0_0_0_1px_rgba(240,210,145,0.22),0_8px_20px_rgba(24,14,8,0.35)]">
      <img
        src={imageSrc}
        alt={`${characterName}, ${characterClass}`}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover object-top transition-opacity duration-200"
      />
    </div>
  );
}
