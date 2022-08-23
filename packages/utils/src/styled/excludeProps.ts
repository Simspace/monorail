/**
 * A convenient way to prevent `styled` components from forwarding props to a
 * component or DOM element.
 *
 * @example
 * ```ts
 * interface StyledDivProps {
 *   color: string
 *   backgroundColor: string
 * }
 * const StyledDiv = styled('div', {
 *   shouldForwardProps: excludeProps('backgroundColor', 'color')
 * })<StyledDivProps>(
 *   ({ backgroundColor, color }) => `
 *     background-color: ${backgroundColor};
 *     color: ${color};
 *   `
 * )
 * ```
 */
export function excludeProps<Names extends ReadonlyArray<PropertyKey>>(
  ...propNames: Names
): (propName: PropertyKey) => boolean {
  if (propNames.length === 0) {
    return () => true
  }
  if (propNames.length === 1) {
    return propName => propName !== propNames[0]
  }
  return propName => !propNames.includes(propName)
}
