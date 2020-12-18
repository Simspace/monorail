---
id: color
title: Color
sidebar_label: Color
---

The goal of the `colors.ts` file is to include all of the saved colors in Figma so that FE can easily use the correct colors that design includes in a UI. If UX decides to change a color globally thoughout the app, having definined colors in the `colors.ts` file also enables FE to easily update the color thoughout the product.

## Adding Colors

How to add colors to Monorail:

1. Click on the object in Figma that has the color you want to add to the code
2. If you have view-only access to figma, you will see the CSS of the selected object on the left by default.
   - [Only for those with edit access] On the right sidebar, shift from the `Design` tab to the `Code` tab.
   - [Where to find color in Figma](https://imgur.com/wxtjVKz)
3. The innermost layer will most likely be the layer that the color is be applied to. For eg: for a button, it will be the color of the rounded rectangle. If you are not already on the innermost layer, navigate to it through the layers list on the left.
4. The color will be displayed in hex value (example: `#5DB082`) if it has no opacity(A value). If the color has an opacity, Figma will display it as RGBA (example: `rgba(0, 0, 0, 0.54);`). Convert this color to HSLA using a website like https://www.w3schools.com/colors/colors_converter.asp
5. The name given to the color in Figma Components will be shown as a comment above the color code. If the color is part of a group, that group name will be before the `/` and the color name after it. Try to maintain the same name in the code too.
6. Add the color (matching the name from Figma) to the `Colors` enum in `portal/src/packages/monorail/src/helpers/color.ts`
7. Assign the HSLa value in `colorHSLAMap`
