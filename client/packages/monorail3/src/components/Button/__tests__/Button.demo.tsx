import React from 'react'

import { Button } from '../Button'

export const VariantContained = () => (
  <Button variant="contained">Button</Button>
)

export const VariantOutlined = () => <Button variant="outlined">Button</Button>

export const VariantText = () => <Button variant="text">Button</Button>

export const Variants = () => (
  <>
    <VariantContained />
    <VariantOutlined />
    <VariantText />
  </>
)
