import React from 'react'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

import type { ColorCardProps, ColorSwatchProps } from './palette.types'

export const ColorSwatchContainer = ({
  children,
}: {
  children: Array<JSX.Element> | JSX.Element
}) => (
  <Stack direction="row" flexWrap="wrap" gap={4} mb={10}>
    {children}
  </Stack>
)

export const ColorCard = ({
  token,
  mapping,
  colorValue,
  figmaStyle,
  description,
  opacity,
}: ColorCardProps) => {
  const showColorMap =
    mapping !== undefined ? (
      <Typography>{`RawColor.${mapping}`}</Typography>
    ) : (
      <></>
    )

  const showOpacity =
    opacity !== undefined ? (
      <Typography>{`Opacity: ${opacity}`}</Typography>
    ) : (
      <></>
    )

  const showColorValue =
    opacity === undefined ? <Typography>{colorValue}</Typography> : <></>

  const showDescription =
    description !== undefined ? (
      <Typography variant="body2" color="text.secondary" mt={3}>
        {description}
      </Typography>
    ) : (
      <></>
    )

  return (
    <Card variant="outlined" sx={{ minWidth: 275, width: '24%' }}>
      <CardContent>
        <Stack gap={2}>
          <Box
            sx={{
              width: '100%',
              height: 120,
              bgcolor: colorValue,
            }}
          ></Box>
          <Typography fontWeight="medium" sx={{ wordWrap: 'break-word' }}>
            {token}
          </Typography>
          <Typography>{figmaStyle}</Typography>
          {showColorMap}
          {showOpacity}
          {showColorValue}
          {showDescription}
        </Stack>
      </CardContent>
    </Card>
  )
}
/**
 * TODO:
 *
 * Pull information from Notion.
 * - figmaStyle
 * - description
 *
 * Figure out how to display token variable (Object.key?) instead of typing it out
 *
 * How to display global token assigned to alias instead of the color value?
 *
 *
 */

export const ColorMap = ({
  data,
  colorMode,
  rawColorObj,
}: ColorSwatchProps) => {
  const getObjectKey = (value: string) => {
    if (rawColorObj !== undefined) {
      return Object.keys(rawColorObj).find(key => rawColorObj[key] === value)
    }
  }

  return (
    <>
      {data !== undefined ? (
        data.map(color => (
          <ColorCard
            key={color.token}
            token={color.token}
            mapping={getObjectKey(color.colorValue)}
            opacity={color.opacity}
            colorValue={color.colorValue}
            figmaStyle={`${colorMode}/${color.figmaStyle}`}
            description={color.description}
          />
        ))
      ) : (
        <Typography color="error">No Colors</Typography>
      )}
    </>
  )
}
