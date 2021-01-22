import React from 'react'
import { css } from 'styled-components'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'

import {
  Colors,
  ellipsis,
  FontSizes,
  FontWeights,
} from '@monorail/helpers/exports'
import {
  FooterList,
  FooterListItem,
} from '@monorail/visualComponents/contentCard/Footer'

import { Icon } from '../icon/Icon'
import { Text } from '../typography/Text'

export function LiveActionPlanFooter(props: LiveActionPlanFooterProps) {
  const { network } = props

  return (
    <>
      {pipe(
        network,
        O.fold(
          () => <LiveAction />,
          name => (
            <FooterList>
              <FooterListItem>
                <NetworkName name={name} />
              </FooterListItem>
              <FooterListItem>
                <LiveAction />
              </FooterListItem>
            </FooterList>
          ),
        ),
      )}
    </>
  )
}

export type LiveActionPlanFooterProps = {
  readonly network: O.Option<string> // network name
}

export function LiveAction() {
  return (
    <Text
      fontSize={FontSizes.Title5}
      fontWeight={FontWeights.Bold}
      color={Colors.Gray54}
    >
      Live Action
    </Text>
  )
}

export function NetworkName(props: { name: string }) {
  return (
    <div
      css={`
        align-items: center;
        display: flex;
      `}
    >
      <Icon
        icon={'device_hub'}
        color={Colors.Gray54}
        css={`
          margin-right: 8px;
        `}
      />
      <Text
        title={props.name}
        fontSize={FontSizes.Title5}
        fontWeight={FontWeights.Bold}
        color={Colors.Gray54}
        margin="0"
        css={css`
          ${ellipsis};
          width: 104px;
        `}
      >
        {props.name}
      </Text>
    </div>
  )
}
