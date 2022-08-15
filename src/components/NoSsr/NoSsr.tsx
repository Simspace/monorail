import { NoSsr as MuiNoSsr } from '@mui/material'

/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 *
 * *   Escape hatch for broken dependencies not supporting SSR.
 * *   Improve the time-to-first paint on the client by only rendering above the fold.
 * *   Reduce the rendering time on the server.
 * *   Under too heavy server load, you can turn on service degradation.
 *
 * Demos:
 *
 * - [No ssr](https://mui.com/base/react-no-ssr/)
 *
 * API:
 *
 * - [NoSsr API](https://mui.com/base/api/no-ssr/)
 */
export const NoSsr: typeof MuiNoSsr = MuiNoSsr

export * from '@mui/material/NoSsr'
