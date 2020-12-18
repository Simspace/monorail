import {
  FontSizes,
  FontWeights,
  gothamFontFamily,
  typographyFont,
} from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'

export const AccordionContent = styled.p`
  ${gothamFontFamily}
  ${typographyFont(500, FontSizes.Title5)}

padding: 16px;
  background: #fff;
  max-width: 600px;
`

export const accordionDummyData = [
  {
    title: 'First',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum quas reprehenderit repellat id odit.',
  },
  {
    title: 'Second',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum quas reprehenderit repellat id odit.',
  },
  {
    title: 'Third',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum quas reprehenderit repellat id odit.',
  },
]
