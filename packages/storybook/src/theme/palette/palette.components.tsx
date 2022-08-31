import React from 'react'
import type { Color } from '@mui/material'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

import type { ColorCardProps, ColorSwatchProps } from './palette.types'

const ColorSwatchContainer = ({
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
            sx={theme => ({
              width: '100%',
              height: 120,
              bgcolor: colorValue,
              border:
                colorValue !== undefined &&
                colorValue.toLowerCase().includes('#fff')
                  ? `1px solid ${theme.palette.divider}`
                  : 'none',
            })}
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

export const ColorMap = ({
  colorMetadata,
  colorMode,
  rawColorObj,
}: ColorSwatchProps) => {
  const getObjectKey = (value: string) => {
    if (rawColorObj !== undefined) {
      return Object.keys(rawColorObj).find(key => rawColorObj[key] === value)
    }
  }

  return (
    <ColorSwatchContainer>
      {colorMetadata !== undefined ? (
        colorMetadata.map(color => {
          const figmaStyle =
            color.figmaStyle !== undefined
              ? `${colorMode}/${color.figmaStyle}`
              : 'No Figma Style'

          const colorValue =
            color.colorValue !== undefined ? color.colorValue : ''

          return (
            <ColorCard
              key={color.token}
              token={color.token}
              mapping={getObjectKey(colorValue)}
              opacity={color.opacity}
              colorValue={color.colorValue}
              figmaStyle={figmaStyle}
              description={color.description}
            />
          )
        })
      ) : (
        <Typography color="error">No Colors</Typography>
      )}
    </ColorSwatchContainer>
  )
}

export const SingleColorBox = ({
  color,
  label,
  minWidth,
}: {
  color: string
  label: string
  minWidth: string
}) => {
  return color ? (
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ minWidth, marginRight: 2 }}>{label}</Typography>
      <Box
        sx={{
          height: '40px',
          backgroundColor: color,
          border: '1px solid black',
        }}
      />
      <Box sx={{ fontSize: '60%', fontWeight: 100 }}>{color || '???'}</Box>
    </Box>
  ) : (
    <></>
  )
}

export const ColorShadesBox = ({
  label,
  color,
}: {
  label: string
  color: Color
}) => {
  const minWidth = '50px'
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <Box component="h3" sx={{ flex: 1 }}>
        {label}
      </Box>
      <SingleColorBox label="50" color={color[50]} minWidth={minWidth} />
      <SingleColorBox label="100" color={color[100]} minWidth={minWidth} />
      <SingleColorBox label="200" color={color[200]} minWidth={minWidth} />
      <SingleColorBox label="300" color={color[300]} minWidth={minWidth} />
      <SingleColorBox label="400" color={color[400]} minWidth={minWidth} />
      <SingleColorBox label="500" color={color[500]} minWidth={minWidth} />
      <SingleColorBox label="600" color={color[600]} minWidth={minWidth} />
      <SingleColorBox label="700" color={color[700]} minWidth={minWidth} />
      <SingleColorBox label="800" color={color[800]} minWidth={minWidth} />
      <SingleColorBox label="900" color={color[900]} minWidth={minWidth} />
      <SingleColorBox label="A100" color={color.A100} minWidth={minWidth} />
      <SingleColorBox label="A200" color={color.A200} minWidth={minWidth} />
      <SingleColorBox label="A400" color={color.A400} minWidth={minWidth} />
      <SingleColorBox label="A700" color={color.A700} minWidth={minWidth} />
    </Box>
  )
}
