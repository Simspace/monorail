# 🚝 Monorail | Cyber Design System

Monorail for React helps developers execute the [Monorail Design Language](https://design.simspace.com). Developed by the core team of engineers and UX designers at SimSpace, these components enable a reliable development workflow to build beautiful and functional web projects.

## Quick Start

Add Monorail to your React application.

```
yarn add @simspace/monorail
```

You will also need our `peerDependencies`:

```
yarn add react react-dom styled-components
```

Check the accepted version range in `package.json` for compatibility.

To use Monorail components you must wrap your app with `ThemeProvider` and pass it `monorailTheme`	

```jsx
import { monorailTheme } from "@simspace/monorail/dist/helpers/theme";	
import { ThemeProvider } from "@simspace/monorail/dist/helpers/styled-components";	
<ThemeProvider theme={monorailTheme}>	
...	
</ThemeProvider>	
```

Import the components you want and use them

```jsx
import { Button } from '@simspace/monorail/dist/visualComponents/buttons/Button'

...

render() {
  return (
    <Button>Monorail</Button>
  )
}
```

Check out our documentation site, [design.simspace.com](https://design.simspace.com) to see all the components that are available, and how to use them.

## Iconography

Some Monorail components need default icons from the Material Icon's set. Link the iconography font into your app:

`<link href=“https://fonts.googleapis.com/icon?family=Material+Icons” rel=“stylesheet”>`

## Typescript

When using Monorail with a typescript project, make sure to add the following line to the `compilerOptions` of your `tsconfig.json`:

```json
"skipLibCheck": true
```
