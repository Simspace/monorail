import React, { FC, SyntheticEvent } from 'react'

import {
  Colors,
  ElevationRange,
  FontSizes,
  FontWeights,
  getColor,
  getElevationShadow,
} from '@monorail/helpers/exports'
import { css, styled } from '@monorail/helpers/styled-components'
import { Select } from '@monorail/v2/core/Select/Select'
import { SelectItem } from '@monorail/v2/core/Select/SelectItem'
import { Button } from '@monorail/visualComponents/buttons/Button'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import {
  isItemsPerPageOption,
  ITEMS_PER_PAGE_OPTIONS,
  ItemsPerPageOption,
} from '@monorail/visualComponents/dataTable/ReactTableSelect/helpers'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { Text } from '@monorail/visualComponents/typography/Text'

export enum TestId {
  TotalSelectedLabel = 'total-selected',
  ItemsPerPage = 'items-per-page',
  PreviousPage = 'prev-page',
  NextPage = 'next-page',
  Pages = 'pages',
}

//#region css
const BarRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  background: ${getColor(Colors.Grey96)};
  padding: 4px 16px;
  ${getElevationShadow(ElevationRange.Elevation4)};
`

const BarSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 0;
`

const NumberButton: FC<{
  number: number
  current?: boolean
  handleClick: (e: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void
}> = ({ number, current = false, handleClick }) => {
  return current ? (
    <Text
      fontSize={FontSizes.Title5}
      fontWeight={500}
      css={{ color: getColor(Colors.Black89a), padding: '0 11px' }}
    >
      {number}
    </Text>
  ) : (
    <Button onClick={handleClick} display={ButtonDisplay.Chromeless}>
      <Text
        fontSize={FontSizes.Title5}
        fontWeight={500}
        css={{
          color: getColor(Colors.BrandLightBlue),
          margin: 0,
        }}
      >
        {number}
      </Text>
    </Button>
  )
}

const Ellipsis: FC = () => <span css={{ padding: '0 11px' }}>...</span>
//#endregion

//#region PageControls
type PaginationButtonProps = {
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}
export const PaginationBackButton = ({
  onClick,
  disabled = false,
}: PaginationButtonProps) => (
  <Button
    onClick={onClick}
    display={ButtonDisplay.Chromeless}
    disabled={disabled}
    cssOverrides={disabled ? 'opacity: 1;' : ''}
    data-test-id={TestId.PreviousPage}
  >
    <Icon
      icon="chevron_left"
      css={{
        color: getColor(disabled ? Colors.Black54a : Colors.BrandLightBlue),
      }}
    ></Icon>
    <Text
      fontSize={FontSizes.Title5}
      fontWeight={500}
      css={`
        margin: 0;
        text-transform: capitalize;
        color: ${getColor(disabled ? Colors.Black54a : Colors.BrandLightBlue)};
      `}
    >
      Previous
    </Text>
  </Button>
)
export const PaginationNextButton = ({
  onClick,
  disabled = false,
}: PaginationButtonProps) => (
  <Button
    onClick={onClick}
    display={ButtonDisplay.Chromeless}
    disabled={disabled}
    cssOverrides={disabled ? 'opacity: 1;' : ''}
    data-test-id={TestId.NextPage}
  >
    <Text
      fontSize={FontSizes.Title5}
      fontWeight={500}
      css={`
        margin: 0;
        text-transform: capitalize;
        color: ${getColor(disabled ? Colors.Black54a : Colors.BrandLightBlue)};
      `}
    >
      Next
    </Text>
    <Icon
      icon="chevron_right"
      css={{
        color: getColor(disabled ? Colors.Black54a : Colors.BrandLightBlue),
      }}
    ></Icon>
  </Button>
)

type PageControlsProps = Pick<
  SelectionPaginationBarProps<unknown>,
  'page' | 'pages' | 'onPageChange'
>

const PageControls = ({ page, pages, onPageChange }: PageControlsProps) => {
  const getSafePage = (pg: number) => {
    return Math.min(Math.max(pg, 0), pages - 1)
  }

  const changePage = (
    e: SyntheticEvent<HTMLButtonElement, MouseEvent>,
    pg: number,
  ) => {
    const safePage = getSafePage(pg)
    if (page !== safePage) {
      onPageChange(safePage)
    }
    e.currentTarget.blur()
  }

  const linksForEveryPage = () => (
    <>
      {Array.from(Array(pages).keys()).map((n, i) => (
        <NumberButton
          key={i}
          number={n + 1}
          current={page === n}
          handleClick={e => changePage(e, n)}
        />
      ))}
    </>
  )

  const ellipsisAfterBeginning = () => (
    <>
      <NumberButton
        number={1}
        handleClick={e => changePage(e, 0)}
        current={page === 0}
      />
      <NumberButton
        number={2}
        handleClick={e => changePage(e, 1)}
        current={page === 1}
      />
      <NumberButton
        number={3}
        handleClick={e => changePage(e, 2)}
        current={page === 2}
      />
      <NumberButton
        number={4}
        handleClick={e => changePage(e, 3)}
        current={page === 3}
      />
      <NumberButton number={5} handleClick={e => changePage(e, 4)} />
      <Ellipsis />
      <NumberButton
        number={pages}
        handleClick={e => changePage(e, pages - 1)}
      />
    </>
  )

  const ellipsisBeforeEnd = () => (
    <>
      <NumberButton number={1} handleClick={e => changePage(e, 0)} />
      <Ellipsis />
      <NumberButton
        number={pages - 4}
        handleClick={e => changePage(e, pages - 5)}
      />
      <NumberButton
        number={pages - 3}
        handleClick={e => changePage(e, pages - 4)}
        current={page === pages - 4}
      />
      <NumberButton
        number={pages - 2}
        handleClick={e => changePage(e, pages - 3)}
        current={page === pages - 3}
      />
      <NumberButton
        number={pages - 1}
        handleClick={e => changePage(e, pages - 2)}
        current={page === pages - 2}
      />
      <NumberButton
        number={pages}
        handleClick={e => changePage(e, pages - 1)}
        current={page === pages - 1}
      />
    </>
  )

  const numbers = () => {
    if (pages < 8) {
      return linksForEveryPage()
    }
    if (page < 4) {
      return ellipsisAfterBeginning()
    } else if (page > pages - 5) {
      return ellipsisBeforeEnd()
    } else {
      return (
        <>
          <NumberButton number={1} handleClick={e => changePage(e, 0)} />
          <Ellipsis />
          <NumberButton
            number={page}
            key={page}
            handleClick={e => changePage(e, page - 1)}
          />
          <NumberButton number={page + 1} current handleClick={() => {}} />
          <NumberButton
            key={page + 2}
            number={page + 2}
            handleClick={e => changePage(e, page + 1)}
          />
          <Ellipsis />
          <NumberButton
            number={pages}
            handleClick={e => changePage(e, pages - 1)}
          />
        </>
      )
    }
  }
  return (
    <>
      <PaginationBackButton
        onClick={e => changePage(e, page - 1)}
        disabled={page === 0}
      />
      <div
        data-test-id={TestId.Pages}
        css={css`
          display: flex;
          width: ${pages > 6 ? '250px' : 'auto'};
          align-items: center;
          justify-content: space-between;
        `}
      >
        {numbers()}
      </div>
      <PaginationNextButton
        onClick={e => changePage(e, page + 1)}
        disabled={page === pages - 1}
      />
    </>
  )
}
//#endregion

const TotalSelectedLabel = (
  props: Pick<SelectionPaginationBarProps<unknown>, 'totalSelectedItems'>,
) => (
  <div data-test-id={TestId.TotalSelectedLabel}>
    <Text
      fontSize={FontSizes.Title5}
      fontWeight={FontWeights.Bold}
      color={Colors.Gray89}
    >
      {props.totalSelectedItems}
    </Text>
    <Text
      fontSize={FontSizes.Title5}
      fontWeight={FontWeights.Book}
      color={Colors.Gray89}
    >
      {' selected'}
    </Text>
  </div>
)

export type SelectionPaginationBarProps<T> = {
  /**
   * Filtered data
   */
  sortedData: Array<T>
  /**
   * Total unfiltered count
   */
  totalItems: number
  /**
   * Total selected count
   */
  totalSelectedItems: number
  /**
   * The selected option for the items-per-page Select
   */
  itemsPerPage: ItemsPerPageOption
  onItemsPerPageChange: (n: ItemsPerPageOption) => void
  /**
   * Zero-indexed current page
   */
  page: number
  /**
   * Count of pages available
   */
  pages: number
  pageSize: number
  onPageChange: (n: number) => void
}

export const SelectionPaginationBar = <T extends unknown>(
  props: SelectionPaginationBarProps<T>,
) => {
  const {
    sortedData,
    totalItems,
    totalSelectedItems,
    page,
    pages,
    pageSize,
    onPageChange,
    itemsPerPage,
    onItemsPerPageChange,
  } = props

  const startingShownRange = page * pageSize + 1
  const endingShownRange = Math.min((page + 1) * pageSize, sortedData.length)

  return (
    <BarRow>
      <BarSection>
        {totalSelectedItems > 0 && (
          <TotalSelectedLabel totalSelectedItems={totalSelectedItems} />
        )}
      </BarSection>

      <BarSection
        css={`
          justify-content: center;
        `}
      >
        <PageControls page={page} pages={pages} onPageChange={onPageChange} />
      </BarSection>

      <BarSection
        css={`
          justify-content: flex-end;
        `}
      >
        <Text
          fontSize={FontSizes.Title5}
          fontWeight={FontWeights.Book}
          color={Colors.Gray89}
          margin="0 8px 0"
        >
          Show:
        </Text>
        <Select
          popoverPosition="above"
          value={itemsPerPage}
          onChange={({ target: { value } }) => {
            if (isItemsPerPageOption(value)) {
              onItemsPerPageChange(value)
            }
          }}
          aria-label="Items per page"
          SelectDisplayProps={{
            'data-test-id': TestId.ItemsPerPage,
          }}
        >
          {ITEMS_PER_PAGE_OPTIONS.map((value, index) => (
            <SelectItem key={index} value={value}>
              {value}
            </SelectItem>
          ))}
        </Select>
        <Text
          fontSize={FontSizes.Title5}
          fontWeight={FontWeights.Book}
          color={Colors.Gray89}
          margin="0 0 0 16px"
        >
          {`${startingShownRange}-${endingShownRange} of ${totalItems}`}
        </Text>
      </BarSection>
    </BarRow>
  )
}
