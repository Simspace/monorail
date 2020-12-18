import React from 'react'
import styled, { css } from 'styled-components'
import { range } from 'fp-ts/lib/ReadonlyArray'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
} from '@monorail/helpers/exports'

import { Text } from '../typography/Text'
import {
  ContentDifficulty,
  getDifficultyColor,
  getDifficultyColorByLevel,
} from './ContentDifficulty'

export type DifficultyProps = {
  readonly difficulty: ContentDifficulty
}

export const Difficulty = (props: DifficultyProps) => {
  const { difficulty } = props

  return (
    <DifficultyContainer>
      <DifficultyBars>
        {range(-1, 2).map(level => (
          <DifficultyBar
            key={level}
            color={getDifficultyColorByLevel(difficulty, level)}
          />
        ))}
      </DifficultyBars>
      <Text
        fontSize={FontSizes.Micro}
        fontWeight={700}
        margin={'6px 0 0 0'}
        css={css`
          color: ${getColor(getDifficultyColor(difficulty))};
          text-transform: uppercase;
        `}
      >
        {difficultyToText(difficulty)}
      </Text>
    </DifficultyContainer>
  )
}

const difficultyToText = (difficulty: ContentDifficulty): string => {
  switch (difficulty) {
    case ContentDifficulty.Foundational:
      return 'Foundational'
    case ContentDifficulty.Intermediate:
      return 'Intermediate'
    case ContentDifficulty.Advanced:
      return 'Advanced'
    case ContentDifficulty.Expert:
      return 'Expert'
  }
}

const DifficultyContainer = styled.div`
  ${flexFlow('column')}
  width: 108px;
  margin: 8px 16px 0 auto;
`

const DifficultyBars = styled.div`
  ${flexFlow('row')}
`

const DifficultyBar = styled.div<{ color: Colors }>(
  ({ color }) => css`
    background-color: ${getColor(color)};
    margin: 0 4px 0 0;
    width: 24px;
    height: 8px;
  `,
)
