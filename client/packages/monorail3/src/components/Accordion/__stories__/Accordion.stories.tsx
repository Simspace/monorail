// Edit this file to add new stories
import React from 'react'
import { Accordion, AccordionProps } from '../Accordion'
import { AccordionDetails } from '../../AccordionDetails/AccordionDetails'
import {
  AccordionSummary,
  AccordionSummaryProps,
} from '../../AccordionSummary/AccordionSummary'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Accordion.stories.gen'
import { Typography } from '../../Typography/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ArrowForwardIosSharp from '@mui/icons-material/ArrowForwardIosSharp'
import { styled } from '@mui/material/styles'
import { Divider } from '../../Divider/Divider'
import { AccordionActions } from '../../AccordionActions/AccordionActions'
import { Button } from '../../Button/Button'

/**
 * Metadata for Accordion stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Surfaces/Accordion',
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
    <Accordion {...args}>
      {/* TODO: could try to reuse stories from other components here, but then the "View Code" is not great */}
      <AccordionSummary>Summary</AccordionSummary>
      <AccordionDetails>Details</AccordionDetails>
    </Accordion>
  ),
  {
    args: {
      variant: 'outlined',
      square: true,
    },
  },
)

/** Default story for Accordion (edit/remove by hand if needed) */
export const Default = story(Template)

export const Stacked = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel1a-content">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel2a-content">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  )
}

export const StackedDisableGutters = () => {
  return (
    <div>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel1a-content">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel2a-content">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters disabled>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  )
}

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

  const handleChange = (panel: string) => (
    _event: unknown,
    newExpanded: boolean,
  ) => {
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
