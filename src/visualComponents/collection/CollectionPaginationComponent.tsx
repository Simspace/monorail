import React, { FC } from 'react'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { Text } from '@monorail/visualComponents/typography/Text'
import { FontSizes, getColor, Colors } from '@monorail/helpers/exports'
import { Button } from '@monorail/visualComponents/buttons/Button'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { css } from '@monorail/helpers/styled-components'

const NumberButton: FC<{
  number: number
  current?: boolean
  handleClick: () => void
}> = ({ number, current = false, handleClick }) => (
  <Button
    onClick={handleClick}
    display={ButtonDisplay.Chromeless}
    css={{ margin: '0 4px' }}
  >
    <Text
      fontSize={FontSizes.Title5}
      fontWeight={500}
      css={{
        color: getColor(current ? Colors.Black54 : Colors.BrandLightBlue),
      }}
    >
      {number}
    </Text>
  </Button>
)

const Ellipsis: FC = () => <span style={{ margin: '0 4px' }}>...</span>

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

  const changePage = (pg: number) => {
    const safePage = getSafePage(pg)
    if (page !== safePage) {
      onPageChange(safePage)
    }
  }

  const linksForEveryPage = () => (
    <>
      {Array.from(Array(pages).keys()).map(n => (
        <NumberButton
          number={n + 1}
          current={page === n}
          handleClick={() => changePage(n)}
        />
      ))}
    </>
  )

  const ellipsisAfterBeginning = () => (
    <>
      <NumberButton
        number={1}
        handleClick={() => changePage(0)}
        current={page === 0}
      />
      <NumberButton
        number={2}
        handleClick={() => changePage(1)}
        current={page === 1}
      />
      <NumberButton
        number={3}
        handleClick={() => changePage(2)}
        current={page === 2}
      />
      {page === 2 ? (
        <NumberButton number={4} handleClick={() => changePage(3)} />
      ) : null}
      <Ellipsis />
      <NumberButton number={pages} handleClick={() => changePage(pages - 1)} />
    </>
  )

  const ellipsisBeforeEnd = () => (
    <>
      <NumberButton number={1} handleClick={() => changePage(0)} />
      <Ellipsis />
      {page === pages - 3 ? (
        <NumberButton
          number={pages - 3}
          handleClick={() => changePage(pages - 4)}
          current={page === pages - 4}
        />
      ) : null}
      <NumberButton
        number={pages - 2}
        handleClick={() => changePage(pages - 3)}
        current={page === pages - 3}
      />
      <NumberButton
        number={pages - 1}
        handleClick={() => changePage(pages - 2)}
        current={page === pages - 2}
      />
      <NumberButton
        number={pages}
        handleClick={() => changePage(pages - 1)}
        current={page === pages - 1}
      />
    </>
  )

  const numbers = () => {
    if (pages < 8) {
      return linksForEveryPage()
    }
    if (page < 3) {
      return ellipsisAfterBeginning()
    } else if (page > pages - 4) {
      return ellipsisBeforeEnd()
    } else {
      return (
        <>
          <NumberButton number={1} handleClick={() => changePage(0)} />
          <Ellipsis />
          <NumberButton
            number={page}
            handleClick={() => changePage(page - 1)}
          />
          <NumberButton number={page + 1} current handleClick={() => {}} />
          <NumberButton
            number={page + 2}
            handleClick={() => changePage(page + 1)}
          />
          <Ellipsis />
          <NumberButton
            number={pages}
            handleClick={() => changePage(pages - 1)}
          />
        </>
      )
    }
  }
  return (
    <div
      style={{
        background: getColor(Colors.Grey98),
        padding: '4px 24px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex' }}>
        <Button
          onClick={() => changePage(page - 1)}
          display={ButtonDisplay.Chromeless}
        >
          <Icon
            icon="chevron_left"
            css={{
              color: getColor(
                page > 0 ? Colors.BrandLightBlue : Colors.Black54,
              ),
            }}
          ></Icon>
          <Text
            fontSize={FontSizes.Title5}
            fontWeight={500}
            css={`
              margin: 0;
              color: ${getColor(
                page > 0 ? Colors.BrandLightBlue : Colors.Black54,
              )};
            `}
          >
            Previous
          </Text>
        </Button>
        <div
          css={css`
            display: flex;
            width: 250px;
            align-items: center;
            justify-content: center;
          `}
        >
          {numbers()}
        </div>
        <Button
          onClick={() => changePage(page + 1)}
          display={ButtonDisplay.Chromeless}
        >
          <Text
            fontSize={FontSizes.Title5}
            fontWeight={500}
            css={`
              margin: 0;
              color: ${getColor(
                page < pages - 1 ? Colors.BrandLightBlue : Colors.Black54,
              )};
            `}
          >
            Next
          </Text>

          <Icon
            icon="chevron_right"
            css={{
              color: getColor(
                page < pages - 1 ? Colors.BrandLightBlue : Colors.Black54,
              ),
            }}
          ></Icon>
        </Button>
      </div>
      <Text
        fontSize={FontSizes.Title5}
        fontWeight={500}
        css={`
          position: absolute;
          right: 8px;
          margin-top: 4px;
          color: ${getColor(Colors.Black54)};
        `}
      >
        Showing {min}-{max} of {total} Results
      </Text>
    </div>
  )
}
