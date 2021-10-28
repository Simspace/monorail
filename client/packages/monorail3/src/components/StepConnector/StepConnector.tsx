// Placeholder for extra functionality - add extra types/values/functions/etc. for StepConnector
import React from 'react'
import {
  StepConnector as _StepConnector,
  StepConnectorProps as _StepConnectorProps,
} from './StepConnector'
export * from './StepConnector.gen'
// Add more functions/etc. below

// @TODO (@danm) - Wondering why we would re-export here, but for now
// just following the `export all the things` pattern - (2021-07-20)
export { stepConnectorClasses } from '@mui/material/StepConnector'
