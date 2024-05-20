import React from 'react'
import type { CSSInterpolation } from '@mui/styled-engine'
import clsx from 'clsx'
import useResizeObserver from 'use-resize-observer'

import {
  combineSxProps,
  composeClasses,
  styled,
  useControlled,
  useThemeSpacingMultiplier,
} from '@monorail/utils'

import { MenuItem } from '../MenuItem.js'
import type { PaginationProps, PaginationRenderItemParams } from '../Pagination'
import { Pagination, paginationClasses } from '../Pagination.js'
import { PaginationItem } from '../PaginationItem.js'
import { Select } from '../Select.js'
import { Typography } from '../Typography.js'
import {
  getPaginationFooterUtilityClass,
  PaginationFooterClasses,
} from './PaginationFooterClasses.js'
import { PAGINATION_FOOTER_DEFAULT_LOCALE_TEXT } from './PaginationFooterLocaleText.js'
import type { PaginationFooterProps } from './PaginationFooterProps'

interface PaginationFooterRootProps {
  ownerState: PaginationFooterProps
}

const PaginationFooterRoot = styled('div', {
  name: 'MonorailPaginationFooter',
  slot: 'Root',
  overridesResolver,
})<PaginationFooterRootProps>({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
  containerType: 'inline-size',
  containerName: 'pagination-bar',
  width: '100%',
})

const PaginationFooterSelectedCountContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  [`@container pagination-bar (width < ${theme.spacing(115)})`]: {
    visibility: 'hidden',
    '& *': {
      width: 0,
    },
  },
}))

const PaginationFooterPageSizeSelectContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  [`@container pagination-bar (width < ${theme.spacing(175)})`]: {
    visibility: 'hidden',
    '& *': {
      width: 0,
    },
  },
}))

const PaginationFooterSpacer = styled('div')({
  display: 'flex',
  flex: 1,
})

const PaginationFooterShowingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
  justifyContent: 'flex-end',
  [`@container pagination-bar (width < ${theme.spacing(150)})`]: {
    visibility: 'hidden',
    '& *': {
      width: 0,
    },
  },
}))

const PaginationFooterMinimalContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
})

const defaultRenderItem = (
  params: PaginationRenderItemParams & { 'aria-label': string },
) => <PaginationItem {...params} />

const defaultGetAriaLabel: NonNullable<PaginationProps['getItemAriaLabel']> = (
  type,
  page,
  selected,
) => {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`
  }
  return `Go to ${type} page`
}

export const PaginationFooter = React.forwardRef(function PaginationFooter(
  props,
  ref,
) {
  const {
    className,
    disabled,
    localeText = PAGINATION_FOOTER_DEFAULT_LOCALE_TEXT,
    selectedCount,
    totalItems,
    pageSize: pageSizeProp,
    defaultPageSize,
    page: pageProp,
    onPageSizeChange,
    pageSizeOptions = [10, 20, 50],
    onPageChange,
    pageItems,
    slotProps = {},
    slots = {},
    sx,
    ...others
  } = props

  const { pagination: paginationProps = {} } = slotProps

  const {
    size,
    color,
    variant,
    showFirstButton,
    showLastButton,
    boundaryCount: boundaryCountProp = 1,
    siblingCount,
    renderItem = defaultRenderItem,
    shape,
    defaultPage,
    ...otherPaginationProps
  } = paginationProps

  const getItemAriaLabel =
    paginationProps.getItemAriaLabel ?? defaultGetAriaLabel

  const { pagination: PaginationComponent = Pagination } = slots

  const rootRef = React.useRef<HTMLDivElement | null>(null)
  React.useImperativeHandle(ref, () => rootRef.current!)

  const spacingMultiplier = useThemeSpacingMultiplier()

  const [displayMinimalPagination, setDisplayMinimalPagination] =
    React.useState(false)

  const classes = useUtilityClasses(props)

  const [page, setPage] = useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: 'PaginationFooter',
    state: 'page',
  })

  const [pageSize, setPageSize] = useControlled({
    controlled: pageSizeProp,
    default: defaultPageSize,
    name: 'PaginationFooter',
    state: 'pageSize',
  })

  const [boundaryCount, setBoundaryCount] = React.useState(boundaryCountProp)

  const totalPages = Math.ceil(totalItems / pageSize)

  const handlePageChange = React.useCallback<
    NonNullable<PaginationFooterProps['onPageChange']>
  >(
    (event, page) => {
      setPage(page)
      onPageChange?.(event, page)
    },
    [onPageChange, setPage],
  )

  const handlePageSizeChange = React.useCallback<
    NonNullable<PaginationFooterProps['onPageSizeChange']>
  >(
    event => {
      setPageSize(event.target.value)
      onPageSizeChange?.(event)
    },
    [onPageSizeChange, setPageSize],
  )

  const shouldDisplaySelectedCount = selectedCount !== undefined
  let leftComponent: JSX.Element | null = null
  if (shouldDisplaySelectedCount) {
    leftComponent = (
      <PaginationFooterSelectedCountContainer className={classes.left}>
        <Typography variant="body2" noWrap>
          {localeText.selectedLabel(selectedCount)}
        </Typography>
      </PaginationFooterSelectedCountContainer>
    )
  } else {
    leftComponent = <PaginationFooterSpacer className={classes.left} />
  }

  const itemCountStart = page > 1 ? (page - 1) * pageSize + 1 : 1
  const itemCountEnd = pageSize > pageItems ? totalItems : pageSize * page

  const shouldDisplaySizeSelector = onPageSizeChange !== undefined

  const shownCount = (
    <Typography
      variant={shouldDisplaySizeSelector ? 'subtitle2' : 'body2'}
      noWrap
    >
      {localeText.pageItemCount(itemCountStart, itemCountEnd, totalItems)}
    </Typography>
  )

  let rightComponent: JSX.Element | null = null
  if (shouldDisplaySizeSelector) {
    rightComponent = (
      <PaginationFooterPageSizeSelectContainer className={classes.right}>
        <Typography variant="inputLabel">
          {localeText.pageSizeSelectLabel}
        </Typography>
        <Select
          value={pageSize}
          onChange={handlePageSizeChange}
          sx={theme => ({
            mr: 2,
            backgroundColor: theme.palette.background.paper,
          })}
          disabled={disabled}
        >
          {pageSizeOptions.map(option => {
            if (typeof option === 'number') {
              return (
                <MenuItem
                  key={option}
                  selected={option === pageSize}
                  value={option}
                >
                  {option}
                </MenuItem>
              )
            } else {
              return (
                <MenuItem
                  key={option.value}
                  selected={option.value === pageSize}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              )
            }
          })}
        </Select>
        {shownCount}
      </PaginationFooterPageSizeSelectContainer>
    )
  } else {
    rightComponent = (
      <PaginationFooterShowingContainer className={classes.right}>
        <Typography variant="subtitle2">
          {localeText.itemsShownLabel}
        </Typography>
        {shownCount}
      </PaginationFooterShowingContainer>
    )
  }

  const handlePreviousClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (page === 1) {
        return
      }
      handlePageChange(event, page - 1)
    },
    [handlePageChange, page],
  )

  const handleNextClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (page === totalPages) {
        return
      }
      handlePageChange(event, page + 1)
    },
    [handlePageChange, page, totalPages],
  )

  let centerComponent: JSX.Element
  if (displayMinimalPagination) {
    centerComponent = (
      <PaginationFooterMinimalContainer className={classes.pagination}>
        {renderItem({
          variant,
          size,
          color,
          shape,
          onClick: handlePreviousClick,
          disabled: disabled === true || page === 1,
          type: 'previous',
          page: page - 1,
          selected: false,
          'aria-label': getItemAriaLabel('previous', page - 1, false),
        })}
        {renderItem({
          variant,
          size,
          color,
          shape,
          onClick: () => {},
          disabled: disabled === true,
          type: 'page',
          page,
          selected: true,
          'aria-label': getItemAriaLabel('page', page, true),
        })}
        {renderItem({
          variant,
          size,
          color,
          shape,
          onClick: handleNextClick,
          disabled: disabled === true || page === totalPages,
          type: 'next',
          page: page + 1,
          selected: false,
          'aria-label': getItemAriaLabel('next', page + 1, false),
        })}
      </PaginationFooterMinimalContainer>
    )
  } else {
    centerComponent = (
      <PaginationComponent
        {...otherPaginationProps}
        className={clsx(classes.pagination, otherPaginationProps.className)}
        disabled={disabled}
        count={totalPages}
        page={page}
        boundaryCount={boundaryCount}
        siblingCount={siblingCount}
        onChange={handlePageChange}
        variant={variant}
        size={size}
        color={color}
        shape={shape}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        sx={combineSxProps(
          {
            [`& .${paginationClasses.ul}`]: {
              flexWrap: 'nowrap',
            },
          },
          otherPaginationProps.sx,
        )}
      />
    )
  }

  const handleResize = React.useCallback(() => {
    const rootElement = rootRef.current

    if (!rootElement) {
      return
    }

    if (rootElement.clientWidth < 90 * spacingMultiplier) {
      setBoundaryCount(0)
    } else {
      setBoundaryCount(1)
    }

    if (rootElement.clientWidth < 70 * spacingMultiplier) {
      setDisplayMinimalPagination(true)
    } else {
      setDisplayMinimalPagination(false)
    }
  }, [spacingMultiplier])

  const handleRootRefCallback = React.useCallback(
    (element: HTMLDivElement | null) => {
      rootRef.current = element
      handleResize()
    },
    [handleResize],
  )

  useResizeObserver({
    ref: rootRef,
    onResize: handleResize,
  })

  const ownerState = {
    ...props,
    page,
    pageSize,
  }

  return (
    <PaginationFooterRoot
      ownerState={ownerState}
      className={clsx(className, classes.root)}
      ref={handleRootRefCallback}
      sx={sx}
      {...others}
    >
      {leftComponent}
      {centerComponent}
      {rightComponent}
    </PaginationFooterRoot>
  )
}) as (props: PaginationFooterProps) => JSX.Element

function useUtilityClasses(ownerState: PaginationFooterProps) {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
    pagination: ['pagination'],
    left: ['left'],
    right: ['right'],
  }

  return composeClasses(slots, getPaginationFooterUtilityClass, classes)
}

function overridesResolver(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _props: any,
  styles: Record<string, CSSInterpolation>,
) {
  return [
    { [`& .${PaginationFooterClasses.left}`]: styles.left },
    { [`& .${PaginationFooterClasses.right}`]: styles.right },
    { [`& .${PaginationFooterClasses.pagination}`]: styles.pagination },
    styles.root,
  ]
}
