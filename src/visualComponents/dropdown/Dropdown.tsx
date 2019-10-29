import Downshift, {
  ControllerStateAndHelpers,
  DownshiftState,
  StateChangeOptions,
} from 'downshift'
import { pipe } from 'fp-ts/lib/function'
import { fromNullable, Option } from 'fp-ts/lib/Option'
import React, { ReactElement } from 'react'

import { flexFlow, FontSizes, typography } from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'
import { CommonComponentType } from '@monorail/types'
import {
  DownshiftRootPropsGetter,
  DropdownItemValue,
  DropdownType,
} from '@monorail/visualComponents/dropdown/helpers'

import {
  BehaviorControllerHook,
  StateReducer,
  useAsFilter,
  useControlledDropdown,
} from './behavior'
import {
  InteractionController,
  KeyboardInteractionHook,
  useKeyboardInteraction,
} from './interaction'
import {
  DropdownParser,
  DropdownParserHook,
  useDropdownTypeParser,
} from './parsers'
import {
  DropdownSkinCommonType,
  DropdownSkinHook,
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
  skin?: DropdownSkinHook<D>
}

export type DropdownProps<D extends DropdownType> = CommonComponentType &
  DropdownHooks<D> &
  DropdownSkinCommonType & {
    items: Array<D>
    value?: D | DropdownItemValue
    onChange?: DropdownChangeHandler<D>
    error?: Option<string>
    required?: boolean
  }

const DropdownContainer = styled.div<CommonComponentType>`
  ${flexFlow('column')};
  ${typography(400, FontSizes.Title5)};

  position: relative;
  width: 256px;
  max-width: 100%;
`

const useKeyboardInteractionDefault = <T extends DropdownType>(
  parser: DropdownParser<T>,
): InteractionController<T> => useKeyboardInteraction<T>()(parser)

export const Dropdown = <D extends DropdownType>({
  label,
  placeholder = 'Select',
  disabled = false,
  items: collection,
  value,
  onChange,
  behavior = useAsFilter,
  skin = useDropdownSkin,
  parser = useDropdownTypeParser,
  interaction = useKeyboardInteractionDefault,
  error,
  required,
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
    placeholder,
    document,
    error,
    required,
    label,
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
      reduceStateBase(state),
      behaviorController.stateReducer(state),
      interactionController.stateReducer(state),
    )(changes)

  return (
    <Downshift
      {...behaviorController.downshiftProps}
      selectedItem={selectedDropdownItem.toNullable()}
      itemToString={parserController.label}
      onChange={onChangeHandler}
      selectedItemChanged={selectedItemChanged}
      stateReducer={stateReducer}
    >
      {(downshiftProps: ControllerStateAndHelpers<D>) => {
        const { getRootProps, inputValue } = downshiftProps
        const rootProps = getRootProps() as DownshiftRootPropsGetter<D>

        return (
          <DropdownContainer {...domProps} {...rootProps}>
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
