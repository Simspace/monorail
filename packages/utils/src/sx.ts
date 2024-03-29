import type { Theme } from '@mui/material'
import type { CSSObject, SxProps, SystemStyleObject } from '@mui/system'

/**
 * The `sx` function, pre-applied with MUI's `Theme` type
 *
 * @param styles An `SxProps` value
 * @returns A CSS object
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
export const sx =
  (styles: SxProps<Theme>): (({ theme }: { theme: Theme }) => CSSObject) =>
  ({ theme }) =>
    theme.unstable_sx(styles)

type SxPropsInner<Theme extends object> =
  | boolean
  | SystemStyleObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>)

/**
 * Combines multiple MUI `sx` props into one. Useful when creating components
 * that utilitize `sx` internally, and also allow `sx` to be passed in by users
 *
 * @example
 * ```ts
 * interface ComponentProps {
 *   sx?: SxProps<Theme>
 * }
 *
 * const Component = (props: ComponentProps) => {
 *   const { sx } = props
 *   return (
 *     <InnerComponent
 *      sx={combineSxProps(
 *        (theme) => ({ flex: 1, margin: theme.spacing(2) }),
 *        sx
 *      )}
 *     />
 *   )
 * }
 * ```
 *
 * @param props The array of `sx` values to combine
 * @returns The combined result of all `sx` values passed in, which can be passed directly to the `sx` prop
 */
export function combineSxProps<Theme extends object = {}>(
  ...props: ReadonlyArray<SxProps<Theme> | undefined>
): Array<SxPropsInner<Theme>> {
  const result: Array<SxPropsInner<Theme>> = []
  for (const sx of props) {
    if (sx === undefined) {
      continue
    }
    if (Array.isArray(sx)) {
      result.push(...sx)
    } else {
      result.push(
        sx as Exclude<SxProps<Theme>, ReadonlyArray<SxPropsInner<Theme>>>,
      )
    }
  }
  return result
}
