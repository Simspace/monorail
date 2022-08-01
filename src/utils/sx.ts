import { Theme } from '@mui/material'
import { CSSObject, SxProps, SystemStyleObject } from '@mui/system'
import muiSx from '@mui/system/sx'

export const sx: (styles: SxProps<Theme>) => CSSObject = muiSx

type SxPropsInner<Theme extends object> =
  | boolean
  | SystemStyleObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>)

export function combineSxProps(
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
      result.push(sx)
    }
  }
  return result
}
