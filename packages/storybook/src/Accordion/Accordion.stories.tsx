// Edit this file to add new stories
import React from 'react'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@monorail/components'
import ArrowForwardIosSharp from '@mui/icons-material/ArrowForwardIosSharp'
import CheckCircle from '@mui/icons-material/CheckCircle'
import Error from '@mui/icons-material/Error'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Warning from '@mui/icons-material/Warning'
import { styled } from '@mui/material'

import { story } from '../helpers'

/**
 * Metadata for Accordion stories - update/extend as needed
 */
export default {
  title: 'Surfaces/Accordion',
  component: Accordion,
  subcomponents: { AccordionDetails, AccordionSummary }, // This adds docgen tabs to the Docs page for the Default story - not super helpful
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
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

/** Default story for Accordion (edit/remove by hand if needed) */
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

export const AccordionWithChip = story(
  () => {
    return (
      <div>
        <Accordion borderless>
          <AccordionSummary
            aria-controls="chip-panel1a-content"
            id="chip-panel1a-header"
          >
            <Stack direction="row" spacing={2}>
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
            <Stack direction="row" spacing={2}>
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
            <Stack direction="row" spacing={2}>
              <Chip size="small" color="default" label="10" />
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
    marginLeft: theme.spacing(1),
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
