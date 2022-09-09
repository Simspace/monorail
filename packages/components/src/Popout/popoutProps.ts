import type { Theme } from '@mui/material'

export interface PopoutProps {
  /**
   * The title of the window or tab
   */
  title: string
  /**
   * The URL of the window or tab
   *
   * @default undefined
   */
  url?: string
  /**
   * The name of the browsing context
   *
   * @default undefined
   */
  target?: string
  /**
   * The content of the window or tab
   */
  children?: React.ReactNode
  /**
   * The MUI theme that will be provided to the content within this window
   *
   * @default the theme provided by the ThemeProvider
   */
  theme?: Theme
  /**
   * The features of the window or tab
   *
   * @default {}
   */
  features?: {
    /**
     * Should the popout be a window or a tab? `true` will open a window, `false` will open a tab.
     *
     * @default true
     */
    popup?: boolean
    /**
     * The width in pixels of the new window
     *
     * @default undefined
     */
    width?: number
    /**
     * The height in pixels of the new window
     *
     * @default undefined
     */
    height?: number
    /**
     * The position in pixels from the left of the screen
     *
     * @default undefined
     */
    left?: number
    /**
     * The position in pixels from the top of the screen
     *
     * @default undefined
     */
    top?: number
    /**
     * If this feature is set, the new window will not have access to the originating window via Window.opener and returns null.
     *
     * @default undefined
     */
    noopener?: boolean
    /**
     * If this feature is set, the browser will omit the Referer header, as well as set noopener to true
     *
     * @default undefined
     */
    noreferrer?: boolean
  }
  /**
   * A callback that will be executed when the window or tab is closing
   */
  onWindowClose?: () => void
  /**
   * A callback that will be executed when the window or tab is opening. If the `window` parameter is
   * `null`, the window failed to open.
   */
  onWindowOpen?: (window: Window | null) => void
}
