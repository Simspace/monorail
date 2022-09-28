import type { DistributiveOmit } from '@mui/types'

/**
 * Maps an existing type to require a union of the given keys
 *
 * @example
 * ```
 * interface A {
 *   x?: string
 *   y?: string
 *   z?: string
 * }
 *
 * type X = RequireKeysUnion<T, ['x' | 'y', 'y', 'z']>
 *
 * type X =
 *   | { x: string, y: string, z?: string }
 *   | { x?: string, y: string, z?: string }
 *   | { x?: string, y?: string, z: string }
 * ```
 */
export type RequireKeysUnion<T, K extends Array<string>> = 0 extends K['length']
  ? T
  : {
      [P0 in keyof K]: K[P0] extends keyof T
        ? {
            [P1 in K[P0]]: NonNullable<T[P1]>
          } & DistributiveOmit<T, K[P0]>
        : never
    }[number]
