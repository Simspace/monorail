import React, { ReactElement } from 'react'
import Downshift, {
  ControllerStateAndHelpers,
  DownshiftState,
  StateChangeOptions,
} from 'downshift'
import styled, { css } from 'styled-components'
import { pipe } from 'fp-ts/lib/function'
import { fromNullable, Option, toNullable } from 'fp-ts/lib/Option'

import { flexFlow, FontSizes, typographyFont } from '@monorail/helpers/exports'
import { CssOverrides } from '@monorail/StyleHelpers'
import { CommonComponentType } from '@monorail/types'
import {
  DownshiftRootPropsGetter,
  DropdownItemValue,
  DropdownType,
} from '@monorail/visualComponents/dropdown/helpers'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'

import {
  BehaviorControllerHook,
  StateReducer,
  useAsFilter,
  useControlledDropdown,
} from './behavior'
import {
  createKeyboardInteraction,
  InteractionController,
  KeyboardInteractionHook,
} from './interaction'
import {
  createDropdownTypeParser,
  DropdownParser,
  DropdownParserHook,
} from './parsers'
import {
  DropdownSkinCommonType,
  DropdownSkinComponent,
  useDropdownSkin,
} from './skin'

export type DropdownChangeHandler<D> = (
  item?: D,
  downshiftProps?: ControllerStateAndHelpers<D>,
) => void

export type DropdownHooks<D extends DropdownType> = {
  behavior?: BehaviorControllerHook<D>
  interaction?: KeyboardInteractionHook<D>
  parser?: DropdownParserHook<D>
  skin?: DropdownSkinComponent<D>
}

export type DropdownProps<D extends DropdownType> = CommonComponentType &
  DropdownHooks<D> &
  DropdownSkinCommonType & {
    items: Array<D>
    value?: D | DropdownItemValue
    onChange?: DropdownChangeHandler<D>
    triggerOnAllSelections?: boolean // false triggers on value CHANGES, true triggers no matter which value is chosen
    onBlur?: VoidFunction
    error?: Option<string>
    required?: boolean
    cssOverrides?: CssOverrides
  }

export const DropdownContainer = styled.div<CommonComponentType>(
  ({ cssOverrides }: { cssOverrides?: CssOverrides }) => css`
    ${flexFlow('column')};
    ${typographyFont(400, FontSizes.Title5)};

    position: relative;
    width: 256px;
    max-width: 100%;

    ${cssOverrides}
  `,
)

const createKeyboardInteractionDefault = <T extends DropdownType>(
  parser: DropdownParser<T>,
): InteractionController<T> => createKeyboardInteraction<T>()(parser)

export const Dropdown = <D extends DropdownType>({
  label,
  placeholder = 'Select',
  disabled = false,
  clearable = true,
  extraWidth = 0,
  items: collection,
  value,
  onChange,
  triggerOnAllSelections = false,
  behavior = useAsFilter,
  skin = useDropdownSkin,
  parser = createDropdownTypeParser,
  interaction = createKeyboardInteractionDefault,
  error,
  required,
  display = DisplayType.Edit,
  cssOverrides,
  ...domProps
}: DropdownProps<D>): ReactElement<DropdownProps<D>> => {
  /** Controllers **/
  const parserController = parser()
  const interactionController = interaction(parserController)
  const behaviorController = behavior(collection, parserController)

  /** Selected Dropdown Item **/
  const [
    selectedDropdownItem,
    setSelectedDropdownItem,
    selectedItemChanged,
  ] = useControlledDropdown<D>({ value, collection, parser: parserController })

  const skinController = skin({
    parser: parserController,
    interaction: interactionController,
    disabled,
    clearable,
    placeholder,
    error,
    required,
    label,
    display,
    extraWidth,
  })

  const onChangeHandler: DropdownChangeHandler<D> = (item, downshiftProps) => {
    setSelectedDropdownItem(fromNullable(item))
    onChange && onChange(item, downshiftProps)
  }

  // Base Downshift state reducer
  const reduceStateBase: StateReducer<D> = () => changes => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.clickButton:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          inputValue: '',
        }

      case Downshift.stateChangeTypes.mouseUp:
        return { type: changes.type, inputValue: '', isOpen: false }

      default:
        return changes
    }
  }

  const stateReducer = (
    state: DownshiftState<D>,
    changes: StateChangeOptions<D>,
  ) =>
    pipe(
      changes,
      reduceStateBase(state),
      behaviorController.stateReducer(state),
      interactionController.stateReducer(state),
    )

  return (
    <Downshift
      {...behaviorController.downshiftProps}
      selectedItem={toNullable(selectedDropdownItem)}
      itemToString={parserController.label}
      // onChange only triggers on value CHANGES, onSelect triggers no matter which value is chosen
      onChange={!triggerOnAllSelections ? onChangeHandler : undefined}
      onSelect={triggerOnAllSelections ? onChangeHandler : undefined}
      selectedItemChanged={selectedItemChanged}
      stateReducer={stateReducer}
    >
      {(downshiftProps: ControllerStateAndHelpers<D>) => {
        const { getRootProps, inputValue } = downshiftProps
        const rootProps = getRootProps() as DownshiftRootPropsGetter<D>

        return (
          <DropdownContainer
            cssOverrides={cssOverrides}
            {...domProps}
            {...rootProps}
          >
            {skinController({
              items: behaviorController.getItems(inputValue || ''),
              downshiftProps,
            })}
          </DropdownContainer>
        )
      }}
    </Downshift>
  )
}
