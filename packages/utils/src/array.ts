/**
 * Performs a filter and map in one step. If the defined callback function returns undefined,
 * the element will be dropped from the result.
 *
 * @example
 * ```ts
 * interface ComponentProps {
 *   items: string[]
 * }
 *
 * const Component = (props: ComponentProps) => {
 *   const { items } = props
 *   const [searchText, setSearchText] = React.useState("")
 *   return (
 *      <List>
 *        {filterMap(items, (value, index) => {
 *          if (value.includes(searchText)) {
 *            const label = renderValue?.(value) ?? value
 *            return (
 *              <ListItem key={index} label={label} />
 *            )
 *          }
 *        })}
 *     </List>
 *   )
 * }
 * ```
 *
 * @param array The array to be processed
 * @param f A function that accepts the value and index of the current element. `filterMap` calls this function one time for each element in the array
 * @returns The resulting filtered and mapped array
 */
export function filterMap<A, B>(
  array: ReadonlyArray<A>,
  f: (value: A, index: number) => B | undefined,
): Array<B> {
  if (array.length === 0) {
    return []
  }

  const result: Array<B> = []
  for (let i = 0; i < array.length; i++) {
    const b = f(array[i], i)
    if (b === undefined) {
      continue
    }
    result.push(b)
  }

  return result
}
