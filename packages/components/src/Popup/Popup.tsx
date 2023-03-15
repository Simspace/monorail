/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type { PopperPlacementType } from '@mui/base'
import { appendOwnerState } from '@mui/base'
import { capitalize, styled, useThemeProps } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { Fade } from '../Fade.js'
import type { PaperProps } from '../Paper.js'
import { Paper } from '../Paper.js'
import { Popper as MuiPopper } from '../Popper.js'
import { getPopupUtilityClass, popupClasses } from './popupClasses.js'
import type { PopupProps } from './popupProps.js'

const Arrow = styled('div', {
  overridesResolver: (props, styles) => styles.arrow,
})(({ theme }) => ({
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: theme.spacing(2),
    height: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
}))

type PopupOwnerState = Omit<PopupProps, 'placement' | 'elevation'> & {
  placement: PopperPlacementType
  elevation: number
}

interface PopupPopperProps {
  ownerState: PopupOwnerState
}

const PopupPopper = styled(MuiPopper, {
  overridesResolver: (props: PopupPopperProps, styles) => {
    const { ownerState } = props

    return [styles.popper, ownerState.arrow && styles.popperArrow]
  },
})<PopupPopperProps>(({ theme, ownerState: ownerState_ }) => {
  const ownerState = ownerState_ as PopupOwnerState
  return {
    zIndex: 1,
    ...(ownerState.arrow && {
      [`&[data-popper-placement*="bottom"] .${popupClasses.arrow}`]: {
        top: 0,
        left: 0,
        '&::before': {
          transform: 'translate(50%, 51%) rotate(-45deg)',
          clipPath:
            'polygon(300% 300%, calc(100% + 4px) -4px, -4px -4px, calc(100% + 4px) calc(100% + 4px))',
          boxShadow: theme.shadows[ownerState.elevation],
          borderTopRightRadius: '1px',
        },
      },
      [`&[data-popper-placement*="top"] .${popupClasses.arrow}`]: {
        bottom: 0,
        left: 0,
        '&::before': {
          transform: 'translate(50%, 49%) rotate(315deg)',
          clipPath:
            'polygon(300% 300%, calc(100% + 4px) calc(100% + 4px), -4px -4px, -300% 300%)',
          boxShadow: theme.shadows[ownerState.elevation],
          borderBottomLeftRadius: '1px',
        },
      },
      [`&[data-popper-placement*="right"] .${popupClasses.arrow}`]: {
        left: 0,
        '&::before': {
          transform: 'translate(51%, 50%) rotate(45deg)',
          clipPath:
            'polygon(-4px -4px, -300% calc(100% + 4px), 300% 300%, calc(100% + 4px) calc(100% + 4px))',
          boxShadow: theme.shadows[ownerState.elevation],
          borderBottomLeftRadius: '1px',
        },
      },
      [`&[data-popper-placement*="left"] .${popupClasses.arrow}`]: {
        right: 0,
        '&::before': {
          transform: 'translate(49%, 50%) rotate(315deg)',
          clipPath:
            'polygon(-100% calc(100% + 8px), 300% 300%, 300% 300%, calc(100% + 4px) -4px)',
          boxShadow: theme.shadows[ownerState.elevation],
          borderBottomRightRadius: '1px',
        },
      },
    }),
  }
})

/**
 * A precomposed Popper + Paper + Transition + an optional arrow
 *
 * Demos:
 *
 * - [Popup](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/utils-popup--default)
 */
export const Popup = React.forwardRef(function Popup(
  inProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const props = useThemeProps({
    name: 'MonorailPopup',
    props: inProps,
  })
  const {
    arrow = false,
    anchorEl,
    open,
    modifiers,
    popperOptions: popperOptionsProp,
    placement = 'bottom',
    elevation = 5,
    components = {},
    slotProps = {},
    children,
    ...other
  } = props

  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null)

  const ownerState = {
    placement,
    elevation,
    ...props,
  }

  const classes = useUtilityClasses(ownerState)

  const ArrowComponent = components.Arrow ?? Arrow

  const arrowProps = appendOwnerState(
    ArrowComponent,
    { ...slotProps.arrow },
    ownerState,
  )

  const PopperComponent = components.Popper ?? PopupPopper

  const popperProps = appendOwnerState(
    PopperComponent,
    {
      anchorEl,
      open,
      modifiers,
      placement,
      ...slotProps.popper,
    },
    ownerState,
  )

  const TransitionComponent = components.Transition ?? Fade

  const transitionProps = { ...slotProps.transition }

  const PaperComponent = components.Paper ?? Paper

  const paperProps: PaperProps = {
    ...slotProps.paper,
    elevation,
  }

  const popperOptions = React.useMemo(() => {
    let popupModifiers = [
      {
        name: 'arrow',
        enabled: Boolean(arrowRef),
        options: {
          element: arrowRef,
          padding: 4,
        },
      },
      ...(arrow
        ? [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ]
        : []),
    ]

    if (popperOptionsProp?.modifiers) {
      popupModifiers = popupModifiers.concat(popperOptionsProp.modifiers)
    }

    return {
      ...popperOptionsProp,
      modifiers: popupModifiers,
    }
  }, [arrow, arrowRef, popperOptionsProp])

  return (
    <PopperComponent
      className={clsx(classes.popper, popperProps.className)}
      popperOptions={popperOptions}
      transition
      {...popperProps}
      {...other}
      ref={ref}
    >
      {({ TransitionProps: TransitionPropsInner }) => (
        <TransitionComponent {...TransitionPropsInner} {...transitionProps}>
          <PaperComponent
            {...paperProps}
            className={clsx(classes.paper, paperProps.className)}
          >
            {arrow ? (
              <ArrowComponent
                {...arrowProps}
                ref={setArrowRef}
                className={clsx(classes.arrow, arrowProps.className)}
              />
            ) : null}
            {children}
          </PaperComponent>
        </TransitionComponent>
      )}
    </PopperComponent>
  )
}) as (props: PopupProps) => JSX.Element

function useUtilityClasses(ownerState: PopupOwnerState) {
  const { classes, arrow, placement } = ownerState

  const slots = {
    popper: [
      'popper',
      arrow && 'popperArrow',
      `popperPlacement${capitalize(placement.split('-')[0])}`,
    ],
    arrow: ['arrow'],
    paper: ['paper'],
  }

  return composeClasses(slots, getPopupUtilityClass, classes)
}
