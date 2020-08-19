import React from 'react'
import styled, { css } from 'styled-components'

import {
  Colors,
  ElevationRange,
  flexFlow,
  FontSizes,
  FontWeights,
  getColor,
  getElevationShadow,
  typography,
} from '@monorail/helpers/exports'
import { CssOverridesType } from '@monorail/types'
import { Button } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { StyledInput } from '@monorail/visualComponents/inputs/TextField'

const CollapsibleTitle = styled.div`
  color: ${getColor(Colors.Gray89)};
  ${flexFlow()};
  justify-content: center;
  height: 24px;
  ${typography(FontWeights.Book, FontSizes.Title5, '0')};
`

const CollapsibleTitleWrapper = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    padding: 8px 8px 8px 16px;
    ${flexFlow('row')}
    justify-content: space-between;
    background-color: ${isOpen ? getColor(Colors.Gray06) : 'inherit'};
  `,
)

const CollapsibleContentWrapper = styled.div`
  ${flexFlow('row', 'wrap')}
  padding: 8px 16px;
  justify-content: space-between;
  background-color: ${getColor(Colors.Grey98)};
  ${getElevationShadow(ElevationRange.Elevation1)};
  width: 100%;
  z-index: 9;
  position: absolute;
  box-sizing: border-box;
  cursor: pointer;
`

const CollapsibleDiv = styled.div<{ cssOverrides: CssOverridesType }>(
  ({ cssOverrides }) => css`
    box-sizing: border-box;
    width: 100%;
    background-color: ${getColor(Colors.Grey98)};
    ${getElevationShadow(ElevationRange.Elevation1)};
    position: relative;

    ${cssOverrides};
  `,
)

interface CollapsibleTextInputProps {
  onSubmit: (val: string) => void
  closeOnSubmit?: true
  buttonText: string
  titleText: string
  allowEmpty?: true
  cssOverrides?: CssOverridesType
  maxLength?: number
  disabled?: boolean
  placeholder?: string
}

export const CollapsibleTextInput = (props: CollapsibleTextInputProps) => {
  const [contentOpen, toggleContentOpen] = React.useState(false)
  const [text, setText] = React.useState('')
  const [showErr, setShowErr] = React.useState(false)

  const {
    onSubmit,
    closeOnSubmit,
    buttonText,
    titleText,
    allowEmpty,
    cssOverrides,
    ...inputProps
  } = props

  const updateText = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setShowErr(false)
    setText(evt.target.value)
  }

  const handleSubmit = () => {
    if (text.length > 0 || allowEmpty) {
      onSubmit(text)
      setText('')
      closeOnSubmit && toggleContentOpen(false)
    } else {
      setShowErr(true)
    }
  }

  return (
    <CollapsibleDiv cssOverrides={cssOverrides}>
      <CollapsibleTitleWrapper
        isOpen={contentOpen}
        onClick={() => toggleContentOpen(!contentOpen)}
      >
        <CollapsibleTitle>{titleText}</CollapsibleTitle>
        <IconButton
          size={ButtonSize.Dense}
          display={ButtonDisplay.Chromeless}
          icon={contentOpen ? 'chevron_double_up' : 'chevron_double_down'}
        ></IconButton>
      </CollapsibleTitleWrapper>
      <CollapsibleContentWrapper
        css={{
          display: contentOpen ? 'flex' : 'none',
        }}
      >
        <StyledInput
          css={{
            flexGrow: 1,
            marginRight: '4px',
          }}
          err={showErr}
          maxLength={100}
          value={text}
          onChange={updateText}
          onKeyDown={(evt: React.KeyboardEvent<HTMLInputElement | Element>) => {
            if (evt.keyCode === 13) {
              handleSubmit()
            }
          }}
          {...(inputProps || {})}
        ></StyledInput>
        <Button
          display={ButtonDisplay.Secondary}
          onClick={handleSubmit}
          disabled={props.disabled}
        >
          {buttonText}
        </Button>
      </CollapsibleContentWrapper>
    </CollapsibleDiv>
  )
}
