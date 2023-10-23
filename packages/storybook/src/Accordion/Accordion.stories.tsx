// Edit this file to add new stories
import React from 'react'
import ArrowForwardIosSharp from '@mui/icons-material/ArrowForwardIosSharp'
import CheckCircle from '@mui/icons-material/CheckCircle'
import Error from '@mui/icons-material/Error'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Warning from '@mui/icons-material/Warning'
import type { CSSInterpolation } from '@mui/material'

import type {
  AccordionProps,
  AccordionSummaryProps,
} from '@monorail/components'
import {
  Accordion,
  AccordionActions,
  accordionClasses,
  AccordionDetails,
  accordionDetailsClasses,
  AccordionSummary,
  Box,
  Button,
  Chip,
  collapseClasses,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  ScrollShadow,
  Stack,
  Switch,
  Typography,
} from '@monorail/components'
import { styled, useTheme } from '@monorail/utils'

import { story } from '../helpers.js'

export default {
  title: 'Surfaces/Accordion',
  component: Accordion,
  subcomponents: { AccordionDetails, AccordionSummary }, // This adds docgen tabs to the Docs page for the Default story - not super helpful
}

const Template = story<AccordionProps>(
  args => (
    <Box minHeight={288}>
      <Accordion {...args}>
        {/* TODO: could try to reuse stories from other components here, but then the "View Code" is not great */}
        <AccordionSummary>Summary</AccordionSummary>
        <AccordionDetails>Details</AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        {/* TODO: could try to reuse stories from other components here, but then the "View Code" is not great */}
        <AccordionSummary>Summary</AccordionSummary>
        <AccordionDetails>Details</AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        {/* TODO: could try to reuse stories from other components here, but then the "View Code" is not great */}
        <AccordionSummary>Summary</AccordionSummary>
        <AccordionDetails>Details</AccordionDetails>
      </Accordion>
    </Box>
  ),
  {
    muiName: 'MuiAccordion',
  },
)

export const Default = story(Template)

export const Stacked = story(
  () => {
    return (
      <div>
        <Accordion>
          <AccordionSummary
            aria-controls="stacked-panel1a-content"
            id="stacked-panel1a-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails id="stacked-panel1a-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="stacked-panel2a-content"
            id="stacked-panel2a-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails id="stacked-panel2a-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            aria-controls="stacked-panel3a-content"
            id="stacked-panel3a-header"
          >
            Disabled Accordion
          </AccordionSummary>
        </Accordion>
      </div>
    )
  },
  {
    parameters: {
      a11y: {
        disable: true, // a11y considers having aria-controls on summary and the same id on details a violation, but this is how uncontrolled accordion works
      },
    },
  },
)

export const StackedBorderless = story(
  () => {
    return (
      <div>
        <Accordion borderless>
          <AccordionSummary
            aria-controls="borderless-panel1a-content"
            id="borderless-panel1a-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails id="borderless-panel1a-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion borderless>
          <AccordionSummary
            aria-controls="borderless-panel2a-content"
            id="borderless-panel2a-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails id="borderless-panel2a-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion borderless disabled>
          <AccordionSummary
            aria-controls="borderless-panel3a-content"
            id="borderless-panel3a-header"
          >
            Disabled Accordion
          </AccordionSummary>
        </Accordion>
      </div>
    )
  },
  {
    parameters: {
      a11y: {
        disable: true, // a11y considers having aria-controls on summary and the same id on details a violation, but this is how uncontrolled accordion works
      },
    },
  },
)

/**
 * `borderless`, `removeBorderX`, and `removeBorderY` are utility props that help manage border stacking in cases where an Accordion or a group of Accordions are surrounded by elements that also have borders.
 * ⚠️ Remember to wrap Accordions in a container in order for these props to work.
 */
export const Borders = story(
  () => {
    const [borderless, setBorderless] = React.useState(true)
    const [removeBorderX, setRemoveBorderX] = React.useState(true)
    const [removeBorderY, setRemoveBorderY] = React.useState(true)
    const [containerBorder, setContainerBorder] = React.useState(true)
    const [headerBorder, setHeaderBorder] = React.useState(true)

    return (
      <Stack direction="row" gap={10}>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Accordion props</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={borderless}
                  onChange={event => setBorderless(event.target.checked)}
                />
              }
              label="borderless"
            />
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={removeBorderX}
                  onChange={event => setRemoveBorderX(event.target.checked)}
                />
              }
              label="removeBorderX"
            />
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={removeBorderY}
                  onChange={event => setRemoveBorderY(event.target.checked)}
                />
              }
              label="removeBorderY"
            />
          </FormGroup>
          <FormGroup sx={{ mt: 4 }}>
            <FormLabel component="legend">Container borders</FormLabel>
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={containerBorder}
                  onChange={event => setContainerBorder(event.target.checked)}
                />
              }
              label="Outer"
            />
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={headerBorder}
                  onChange={event => setHeaderBorder(event.target.checked)}
                />
              }
              label="Header"
            />
          </FormGroup>
        </FormControl>

        <Box
          width={320}
          height={480}
          overflow="auto"
          border={theme =>
            containerBorder ? `1px solid ${theme.palette.divider}` : 'none'
          }
        >
          <Box
            p={4}
            borderBottom={theme =>
              headerBorder ? `1px solid ${theme.palette.divider}` : 'none'
            }
          >
            <Typography variant="h3">Header</Typography>
          </Box>

          <Box>
            <Accordion
              borderless={borderless}
              removeBorderX={removeBorderX}
              removeBorderY={removeBorderY}
              square
            >
              <AccordionSummary
                aria-controls="borderless-panel1a-content"
                id="borderless-panel1a-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails id="borderless-panel1a-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion
              borderless={borderless}
              removeBorderX={removeBorderX}
              removeBorderY={removeBorderY}
              square
            >
              <AccordionSummary
                aria-controls="borderless-panel2a-content"
                id="borderless-panel2a-header"
              >
                Accordion 2
              </AccordionSummary>
              <AccordionDetails id="borderless-panel2a-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion
              borderless={borderless}
              removeBorderX={removeBorderX}
              removeBorderY={removeBorderY}
              square
              disabled
            >
              <AccordionSummary
                aria-controls="borderless-panel3a-content"
                id="borderless-panel3a-header"
              >
                Disabled Accordion
              </AccordionSummary>
            </Accordion>
          </Box>
          <Box p={4} mt={2} bgcolor="error.lowEmphasis.main">
            <Typography variant="subtitle1">A Section</Typography>
          </Box>
        </Box>
      </Stack>
    )
  },
  {
    parameters: {
      a11y: {
        disable: true, // a11y considers having aria-controls on summary and the same id on details a violation, but this is how uncontrolled accordion works
      },
    },
  },
)

export const AccordionWithChip = story(
  () => {
    return (
      <Box>
        <Accordion borderless>
          <AccordionSummary
            aria-controls="chip-panel1a-content"
            id="chip-panel1a-header"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Chip size="small" color="default" label="10" />
              <span>Accordion 1</span>
            </Stack>
          </AccordionSummary>
          <AccordionDetails id="chip-panel1a-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion borderless>
          <AccordionSummary
            aria-controls="chip-panel2a-content"
            id="chip-panel2a-header"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Chip size="small" color="default" label="10" />
              <span>Accordion 2</span>
            </Stack>
          </AccordionSummary>
          <AccordionDetails id="chip-panel2a-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion borderless disabled>
          <AccordionSummary
            aria-controls="chip-panel3a-content"
            id="chip-panel3a-header"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Chip size="small" color="default" label="10" />
              <span>Disabled Accordion</span>
            </Stack>
          </AccordionSummary>
        </Accordion>
      </Box>
    )
  },
  {
    parameters: {
      a11y: {
        disable: true, // a11y considers having aria-controls on summary and the same id on details a violation, but this is how uncontrolled accordion works
      },
    },
  },
)

export const AccordionWithIcon = story(
  () => {
    return (
      <div>
        <Accordion borderless>
          <AccordionSummary
            aria-controls="icon-panel1a-content"
            id="icon-panel1a-header"
          >
            <Stack direction="row" spacing={2}>
              <CheckCircle color="success" />
              <span>Accordion 1</span>
            </Stack>
          </AccordionSummary>
          <AccordionDetails id="icon-panel1a-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion borderless>
          <AccordionSummary
            aria-controls="icon-panel2a-content"
            id="icon-panel2a-header"
          >
            <Stack direction="row" spacing={2}>
              <Warning color="warning" />
              <span>Accordion 2</span>
            </Stack>
          </AccordionSummary>
          <AccordionDetails id="icon-panel2a-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion borderless disabled>
          <AccordionSummary
            aria-controls="icon-panel3a-content"
            id="icon-panel3a-header"
          >
            <Stack direction="row" spacing={2}>
              <Error color="error" />
              <span>Disabled Accordion</span>
            </Stack>
          </AccordionSummary>
        </Accordion>
      </div>
    )
  },
  {
    parameters: {
      a11y: {
        disable: true, // a11y considers having aria-controls on summary and the same id on details a violation, but this is how uncontrolled accordion works
      },
    },
  },
)

export const Actions = () => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMore />}>Summary</AccordionSummary>
      <AccordionDetails>Lorem ipsum dolor sit amet</AccordionDetails>
      <Divider />
      <AccordionActions>
        <Button variant="text" color="primary">
          Other Action
        </Button>
        <Button variant="contained" color="primary">
          Main Action
        </Button>
      </AccordionActions>
    </Accordion>
  )
}

const StyledAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
    '&.Mui-expanded': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export const CustomStyled = () => {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange =
    (panel: string) => (_event: unknown, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : '')
    }

  return (
    <div>
      <StyledAccordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <StyledAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Collapsible Group Item #1</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <StyledAccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>Collapsible Group Item #2</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <StyledAccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>Collapsible Group Item #3</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  )
}

const DummyCard = styled(Paper)({
  height: 120,
})

const DummyCardStack = () => (
  <Stack gap={2} p={2}>
    <DummyCard />
    <DummyCard />
    <DummyCard />
    <DummyCard />
    <DummyCard />
    <DummyCard />
  </Stack>
)

export const InternalScroll = story<AccordionProps>(args => {
  // For demo purposes. styled(Accordion) is recommended.
  const theme = useTheme()
  const accordionStyles: CSSInterpolation = {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    [`& > .${collapseClasses.root} > .${collapseClasses.wrapper}`]: {
      height: '100%',
    },
    [`& .${accordionClasses.region}`]: {
      height: '100%',
    },
    [`&.${accordionClasses.expanded}`]: {
      flex: 1,
    },
    [`& .${accordionDetailsClasses.root}`]: {
      backgroundColor: theme.palette.background.default,
      padding: 0,
      height: '100%',
    },
  }
  return (
    <Stack maxWidth={600} height="600px" bgcolor="background.default">
      <Accordion
        TransitionProps={{ timeout: 0 }}
        square
        sx={accordionStyles}
        {...args}
      >
        <AccordionSummary>
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ScrollShadow bottom>
            <DummyCardStack />
          </ScrollShadow>
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ timeout: 0 }}
        square
        sx={accordionStyles}
        {...args}
      >
        <AccordionSummary>
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ScrollShadow bottom>
            <DummyCardStack />
          </ScrollShadow>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
})
