export enum DisplayType {
  Edit = 'Edit',
  View = 'View',
}

/**
 * Pattern match on a {@link DisplayType}
 *
 * usage example:
 *
 * ```jsx
 * const myDisplayType = DisplayType.Edit
 *
 *
 * <div>
 *   {match({
 *     Edit: () => <button>edit</button>,
 *     View: () => <a href="">view</a>
 *   })}
 * </div>
 * ```
 *
 * @param matchers an object of functions that will be invoked
 *                 for each view type
 */
export function match<Z>(matchers: {
  Edit: () => Z
  View: () => Z
}): (displayType: DisplayType) => Z {
  return d => (d === DisplayType.Edit ? matchers.Edit() : matchers.View())
}
