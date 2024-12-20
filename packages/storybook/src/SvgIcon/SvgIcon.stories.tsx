import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { styled } from '@mui/material'

import type { IconProps, SvgIconProps } from '@monorail/components'
import { Box, SvgIcon, Typography } from '@monorail/components'
import * as Icons from '@monorail/components/icons/svgs'
import { WarningTwoColor } from '@monorail/components/icons/svgs'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/SvgIcon', component: SvgIcon }

const Template = story<SvgIconProps>((args) => <SvgIcon component={Icons.Default} {...args} />, {
  args: {},
  muiName: 'MuiSvgIcon',
})

export const Default = story(Template)

const IconsContainer = styled('div')`
  svg {
    font-size: 48px;
  }
`

const IconContainer = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <Box gridColumn='span 3' display='grid' minHeight={80} sx={{ placeItems: 'center' }}>
    {icon}
    <Typography align='center' mt={2}>
      {label}
    </Typography>
  </Box>
)

export const MaterialIcons = story<IconProps>(
  () => (
    <IconsContainer>
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={8}>
        <IconContainer label='Home' icon={<HomeIcon color='default' />} />
        <IconContainer label='Home Outlined' icon={<HomeOutlinedIcon color='default' />} />
        <IconContainer label='Delete' icon={<DeleteIcon color='default' />} />
        <IconContainer
          label='Delete Outlined'
          icon={<DeleteOutlineOutlinedIcon color='default' />}
        />
        <IconContainer label='Account Circle' icon={<AccountCircleIcon color='default' />} />
        <IconContainer
          label='Account Circle Outlined'
          icon={<AccountCircleOutlinedIcon color='default' />}
        />
        <IconContainer
          label='Arrow Drop Down Circle'
          icon={<ArrowDropDownCircleIcon color='default' />}
        />
        <IconContainer
          label='Arrow Drop Down Circle Outlined'
          icon={<ArrowDropDownCircleOutlinedIcon color='default' />}
        />
      </Box>
    </IconsContainer>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Search over 1,900+ Material icons: https://mui.com/components/material-icons/`,
        },
      },
    },
  },
)

const colors = [
  'default',
  'inherit',
  'disabled',
  'action',
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'warning',
] as const

export const Colors = story<IconProps>(() => (
  <IconsContainer>
    <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={8}>
      {colors.map((color) => (
        <IconContainer key={`icon-${color}`} label={color} icon={<HomeIcon color={color} />} />
      ))}
    </Box>
  </IconsContainer>
))

const sizes = ['small', 'medium', 'large', 'inherit'] as const

export const Sizes = story<IconProps>(() => (
  <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={8}>
    {sizes.map((size) => (
      <IconContainer key={`icon-${size}`} label={size} icon={<HomeIcon fontSize={size} />} />
    ))}
  </Box>
))

export const AllCustomIcons = story<IconProps>((args) => (
  <IconsContainer>
    <Box mt={4}>
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={8}>
        {Object.keys(Icons)
          .sort()
          .map((icon, index) => (
            <Box
              key={index}
              gridColumn='span 3'
              display='grid'
              height={80}
              sx={{ placeItems: 'center' }}
            >
              {
                // eslint-disable-next-line
                React.createElement((Icons as any)[icon], { ...args })
              }
              <Typography noWrap>{icon}</Typography>
            </Box>
          ))}
      </Box>
    </Box>
  </IconsContainer>
))

export const AppIcons = story<IconProps>(() => (
  <IconsContainer>
    <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={8}>
      <IconContainer label='Admin' icon={<Icons.AdminApp />} />
      <IconContainer label='Catalog' icon={<Icons.CatalogApp />} />
      <IconContainer label='Events' icon={<Icons.EventsApp />} />
      <IconContainer label='Home' icon={<Icons.HomeApp />} />
      <IconContainer label='My Org' icon={<Icons.MyOrgApp />} />
      <IconContainer label='Product Scoring' icon={<Icons.ProductScoringApp />} />
      <IconContainer label='Reports Analytics' icon={<Icons.ReportsAnalyticsApp />} />
      <IconContainer label='Risk' icon={<Icons.RiskApp />} />
      <IconContainer label='Tech Ops' icon={<Icons.TechOpsApp />} />
      <IconContainer label='Training' icon={<Icons.TrainingApp />} />
    </Box>
  </IconsContainer>
))

const ILLUSTRATION_SIZE = 136

export const Illustrations = story<IconProps>(() => (
  <Box mt={4}>
    <Typography variant='h2' mb={4}>
      Spot Illustrations
    </Typography>
    <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={8}>
      <IconContainer
        label='Bare Tree'
        icon={
          <Icons.BareTree
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Broken Heart'
        icon={
          <Icons.BrokenHeart
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Calendar'
        icon={
          <Icons.Calendar
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Chickenlets'
        icon={
          <Icons.Chickenlets
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='DNS Outline'
        icon={
          <Icons.DnsOutline
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Empty Upload'
        icon={
          <Icons.EmptyUpload
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Event Complete'
        icon={
          <Icons.EventComplete
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Event Paused'
        icon={
          <Icons.EventPaused
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Ghost Empty'
        icon={
          <Icons.GhostEmpty
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Ghost Link'
        icon={
          <Icons.GhostLink
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Ghost Shrug'
        icon={
          <Icons.GhostShrug
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Happy Sun'
        icon={
          <Icons.HappySun
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='No Results'
        icon={
          <Icons.NoResults
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Shrug'
        icon={
          <Icons.Shrug
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Telescope'
        icon={
          <Icons.Telescope
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Target Empty'
        icon={
          <Icons.EmptyTarget
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
    </Box>
    <Typography variant='h2' mt={10} mb={4}>
      Other Illustrations
    </Typography>
    <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={8}>
      <IconContainer
        label='Browse Content Catalog'
        icon={
          <Icons.BrowseContentCatalog
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Content Catalog Training'
        icon={
          <Icons.ContentCatalogTraining
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Pac Man'
        icon={
          <Icons.PacMan
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Readiness Rollup'
        icon={
          <Icons.ReadinessRollup
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Spider Chart'
        icon={
          <Icons.SpiderChart
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
      <IconContainer
        label='Welcome'
        icon={
          <Icons.Welcome
            sx={{
              width: ILLUSTRATION_SIZE,
              height: ILLUSTRATION_SIZE,
            }}
          />
        }
      />
    </Box>
  </Box>
))

export const TwoColor = () => (
  <WarningTwoColor fontSize='large' color='warning' secondaryColor='text.primary' />
)
