import { Colors } from '@monorail/helpers/color';
export declare enum ContentDifficulty {
    Foundational = 0,
    Intermediate = 1,
    Advanced = 2,
    Expert = 3
}
/**
 * Get the color associated
 */
export declare const getDifficultyColorByLevel: (difficulty: ContentDifficulty, level: number) => Colors;
export declare const getDifficultyColor: (difficulty: ContentDifficulty) => Colors;
