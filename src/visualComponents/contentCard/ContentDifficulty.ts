import { Colors } from '@monorail/helpers/color'

export enum ContentDifficulty {
  Foundational,
  Intermediate,
  Advanced,
  Expert,
}

const FALLBACK_DIFFICULTY_COLOR = Colors.Gray12

/**
 * Get the color associated
 */
export const getDifficultyColorByLevel = (
  difficulty: ContentDifficulty,
  level: number,
): Colors =>
  difficulty > level
    ? getDifficultyColor(difficulty)
    : FALLBACK_DIFFICULTY_COLOR

export const getDifficultyColor = (difficulty: ContentDifficulty): Colors =>
  difficultyColor[difficulty]

const difficultyColor: Record<ContentDifficulty, Colors> = {
  [ContentDifficulty.Foundational]: Colors.Tier4,
  [ContentDifficulty.Intermediate]: Colors.Tier3,
  [ContentDifficulty.Advanced]: Colors.Tier2,
  [ContentDifficulty.Expert]: Colors.Tier1,
}
