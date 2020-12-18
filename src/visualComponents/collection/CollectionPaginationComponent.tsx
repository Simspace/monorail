import React, { FC, SyntheticEvent } from 'react'

import {
  Colors,
  ElevationRange,
  FontSizes,
  getColor,
  getElevationShadow,
} from '@monorail/helpers/exports'
import { css } from '@monorail/helpers/styled-components'
import { Button } from '@monorail/visualComponents/buttons/Button'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { Text } from '@monorail/visualComponents/typography/Text'

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

export const CollectionPaginationComponent: FC<{
  data: Array<object> // data gets passed as prop by ReactTable; don't care what's in it, just care abt length to get total
  page: number
  pages: number
  pageSize: number
  onPageChange: (n: number) => void
}> = ({ data, page, pages, pageSize, onPageChange }) => {
  const min = 1 + page * pageSize
  const total = data.length
  const max = Math.min(min + pageSize - 1, total)

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
    <div
      css={`
        background: ${getColor(Colors.Grey98)};
        padding: 4px 24px;
        display: flex;
        justify-content: center;
        ${getElevationShadow(ElevationRange.Elevation4)};
      `}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <PaginationBackButton
          onClick={e => changePage(e, page - 1)}
          disabled={page === 0}
        />
        <div
          css={css`
            display: flex;
            width: ${pages > 6 ? '250px' : 'auto'};
            align-items: center;
            justify-content: space-between;
            flex: 1 1 0;
          `}
        >
          {numbers()}
        </div>
        <PaginationNextButton
          onClick={e => changePage(e, page + 1)}
          disabled={page === pages - 1}
        />
      </div>
      <Text
        fontSize={FontSizes.Title5}
        fontWeight={500}
        css={`
          position: absolute;
          right: 8px;
          margin-top: 4px;
          color: ${getColor(Colors.Black54a)};
        `}
      >
        Showing {min}-{max} of {total} Results
      </Text>
    </div>
  )
}
