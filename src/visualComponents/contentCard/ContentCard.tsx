import React, { useMemo } from 'react'
import TextTruncate from 'react-truncate'
import * as O from 'fp-ts/lib/Option'

import { flexFlow } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { matchOnI } from '@monorail/sharedHelpers/matchers'
import { isNil, isNotNil } from '@monorail/sharedHelpers/typeGuards'
import {
  PCTELogoMark,
  SimSpaceLogoMark,
} from '@monorail/visualComponents/brand/Logo'
import {
  BBCardBackground,
  BBCardBackgroundProps,
} from '@monorail/visualComponents/cards/Cards'
import {
  ContentCardHeader,
  ContentCardHeaderProps,
} from '@monorail/visualComponents/contentCard/ContentCardHeader'
import { BaseLink } from '@monorail/visualComponents/hyperLink/BaseLink'

import { ContentCardProps } from './ContentCardProps'
import { Description } from './Description'
import { Difficulty } from './Difficulty'
import { Footer } from './Footer'
import { EditLogo, StaticLogo } from './Logo'
import { OrgName } from './OrgName'
import { Title } from './Title'

export const ContentCard = (props: ContentCardProps) => {
  const {
    cssOverrides,
    organization,
    title,
    description,
    difficulty,
    renderFooter,
  } = props

  const matchOnMode = useMemo(() => matchOnI('mode')(props), [props])

  const bbCardAsLinkProps = matchOnMode<BBCardBackgroundProps>({
    edit: () => ({ as: 'section' }),
    view: p =>
      p.asLink
        ? {
            as: BaseLink,
            activeClassName: p.activeClassName,
            activeStyle: p.activeStyle,
            onlyActiveOnIndex: p.onlyActiveOnIndex,
            to: p.to,
            hover: true,
          }
        : { as: 'section' },
  })

  const headerProps = matchOnMode<ContentCardHeaderProps>({
    view: p => ({ mode: 'view', image: O.fromNullable(p.image) }),
    edit: p => ({
      mode: 'edit',
      onImageChange: p.onImageChange,
      onRemoveImage: p.onRemoveImage,
      image: p.image,
    }),
  })

  const logo: React.ReactElement = matchOnMode({
    view: p => (
      <StaticLogo logo={isNotNil(p.logo) ? p.logo : renderFallbackLogo()} />
    ),
    edit: p => (
      <EditLogo
        logo={p.logo}
        onRemove={p.onRemoveLogo}
        onChange={p.onLogoChange}
      />
    ),
  })

  const footer = useMemo(() => {
    if (isNil(renderFooter)) {
      return null
    }

    const content = renderFooter()

    return isNotNil(content) ? <Footer>{content}</Footer> : null
  }, [renderFooter])

  return (
    <BBCardBackground
      {...bbCardAsLinkProps}
      cssOverrides={css`
        margin: 8px;
        width: 256px;
        ${cssOverrides};
      `}
    >
      <ContentCardHeader {...headerProps} />

      {logo}

      {isNotNil(difficulty) && <Difficulty difficulty={difficulty} />}

      <Main paddingTop={isNil(difficulty) ? 24 : null}>
        {isNotNil(organization) && <OrgName>{organization}</OrgName>}

        {<Title>{title}</Title>}

        {isNotNil(description) && (
          <Description>
            <TextTruncate lines={3}>{description}</TextTruncate>
          </Description>
        )}
      </Main>

      {footer}
    </BBCardBackground>
  )
}

const Main = styled.main<{ paddingTop: number | null }>`
  ${flexFlow('column')}
  flex-grow: 1;
  padding: ${p => `${(p.paddingTop ?? 0) + 8}px 16px 4px`};
`

declare const __CUSTOMER_VARIANT__: string | undefined

function renderFallbackLogo() {
  const VariantLogo = isNil(__CUSTOMER_VARIANT__)
    ? SimSpaceLogoMark
    : PCTELogoMark

  return <VariantLogo />
}
