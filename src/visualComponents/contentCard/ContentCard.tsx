import React, { ReactType, useRef } from 'react'
import TextTruncate from 'react-truncate'
import { LinkProps } from 'react-router/lib/Link'
import { SimpleInterpolation } from 'styled-components'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import {
  Colors,
  FontSizes,
  FontWeights,
  getColor,
  typography,
  flexFlow,
  ellipsis,
  visible,
} from '@monorail/helpers/exports'
import { BBCardBackground } from '@monorail/visualComponents/cards/Cards'
import { Fill, Rating, Size } from '@monorail/visualComponents/rating/Rating'
import { Text } from '../typography/Text'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import styled, { css } from '@monorail/helpers/styled-components'
import {
  HiddenSingleFileInput,
  FileType,
} from '@monorail/visualComponents/inputs/FileUpload'
import {
  ContentCardHeader,
  ContentCardHeaderProps,
  ImageFallbackData,
} from '@monorail/visualComponents/contentCard/ContentCardHeader'
import { matchOnI } from '@monorail/sharedHelpers/matchers'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { BaseLink } from '@monorail/visualComponents/hyperLink/BaseLink'

const LogoIconContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: 4px;
  border-radius: 50%;
`

const LogoContainer = styled.div<{ hasLogo?: boolean; isEditMode: boolean }>(
  ({ hasLogo, isEditMode }) => css`
    position: absolute;
    width: 56px;
    height: 56px;
    top: 118px;
    left: 12px;
    border-radius: 50%;
    background-color: ${getColor(Colors.White)};
    pointer-events: auto;

    ${hasLogo &&
      `${LogoIconContainer} {
        ${visible(false)}
      }

      &:hover {
        ${LogoIconContainer} {
          ${visible(true)}
      }`}

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      margin: 4px;

      ${!hasLogo && `border: 2px dashed ${getColor(Colors.Gray54)};`}
    }

    ${isEditMode &&
      `&:hover {
        cursor: pointer;
      }

      &:hover:before {
      background-color: ${getColor(
        hasLogo ? Colors.Black : Colors.Grey90,
        0.6,
      )};
    }`}
  `,
)

const Logo = styled.div<{ logo?: string }>(
  ({ logo }) => css`
    background-image: url(${logo});
    background-position: center;
    background-size: cover;
    height: 48px;
    width: 48px;
    margin: 4px;
    border-radius: 50%;
    flex-shrink: 0;
  `,
)

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

const TextContainer = styled.div`
  ${flexFlow('column')}

  padding: 8px 16px 4px;
`

const OrgName = styled.div`
  ${ellipsis}
  ${typography(500, FontSizes.Title5, '0 0 8px 0')};

  color: ${getColor(Colors.Gray89)};
`

const Title = styled.div`
  ${ellipsis}
  ${typography(700, FontSizes.Title4, '0 0 8px 0')};

  color: ${getColor(Colors.Gray89)};
`

const Description = styled.div`
  ${ellipsis}
  ${typography(400, FontSizes.Title5)};

  color: ${getColor(Colors.Gray62)};
  height: 48px;
  margin-bottom: 8px;
  text-align: left;
`

const Footer = styled.div`
  ${flexFlow('row')}

  align-items: center;
  height: 16px;
  margin-bottom: 4px;
`

const StaticLogo = (props: { logo: string }) => (
  <LogoContainer hasLogo isEditMode={false}>
    <Logo logo={props.logo} />
  </LogoContainer>
)

const EditLogo = (props: {
  logo?: string
  onRemove: () => void
  onChange: (file: O.Option<File>) => void
}) => {
  const logoInputRef = useRef<HTMLInputElement>(null)
  const [logoEl, icon, action] = pipe(
    O.fromNullable(props.logo),
    O.fold<string, [React.ReactNode, IconType, () => void]>(
      () => [<></>, 'upload', () => logoInputRef.current?.click()],
      logo => [<Logo logo={logo} />, 'delete', props.onRemove],
    ),
  )

  return (
    <LogoContainer hasLogo={isNotNil(props.logo)} isEditMode onClick={action}>
      {logoEl}
      <LogoIconContainer>
        <Icon
          icon={icon}
          size={24}
          css={css`
            color: ${getColor(Colors.Gray54)};
            bottom: 16px;
            left: 16px;
            position: absolute;
          `}
        />
      </LogoIconContainer>
      <HiddenSingleFileInput
        accept={[FileType.JPG, FileType.PNG]}
        inputRef={logoInputRef}
        onChange={props.onChange}
      />
    </LogoContainer>
  )
}

type PackageDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export const difficultyLevels: Record<PackageDifficulty, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
  expert: 3,
}

const difficultyColor: Record<PackageDifficulty, Colors> = {
  beginner: Colors.Tier4,
  intermediate: Colors.Tier3,
  advanced: Colors.Tier2,
  expert: Colors.Tier1,
}

const Difficulty = (props: { difficulty: PackageDifficulty }) => {
  const { difficulty } = props

  return (
    <DifficultyContainer>
      <DifficultyBars>
        <DifficultyBar color={difficultyColor[difficulty]} />
        <DifficultyBar
          color={
            difficultyLevels[difficulty] > 0
              ? difficultyColor[difficulty]
              : Colors.Gray12
          }
        />
        <DifficultyBar
          color={
            difficultyLevels[difficulty] > 1
              ? difficultyColor[difficulty]
              : Colors.Gray12
          }
        />
        <DifficultyBar
          color={
            difficultyLevels[difficulty] > 2
              ? difficultyColor[difficulty]
              : Colors.Gray12
          }
        />
      </DifficultyBars>
      <Text
        fontSize={FontSizes.Micro}
        fontWeight={700}
        margin={'6px 0 0 0'}
        css={css`
          color: ${getColor(difficultyColor[difficulty])};
          text-transform: uppercase;
        `}
      >
        {difficulty}
      </Text>
    </DifficultyContainer>
  )
}
const Enrollment = (props: { selfEnroll: boolean }) => (
  <Text
    color={Colors.Gray54}
    fontSize={FontSizes.Title5}
    fontWeight={FontWeights.Bold}
  >
    {props.selfEnroll ? 'Self-Enroll' : 'Manager-Led'} •
  </Text>
)

const Duration = (props: { duration: number }) => (
  <Text
    color={Colors.Gray54}
    fontSize={FontSizes.Title5}
    fontWeight={FontWeights.Medium}
    margin="0 0 0 4px"
  >
    {props.duration} hr
  </Text>
)

const StarRating = (props: { rating: number }) => (
  <>
    <Rating rating={props.rating} fill={Fill.Gold} size={Size.Tiny} />
    <Text
      color={Colors.Gray54}
      fontSize={FontSizes.Title5}
      fontWeight={FontWeights.Bold}
      margin="0 4px"
    >
      {props.rating} •
    </Text>
  </>
)

type BaseProps = {
  cssOverrides?: SimpleInterpolation
  organization?: string
  title: string
  description: string
  difficulty: PackageDifficulty
  rating?: number
  duration?: number
  isSelfEnroll?: boolean
  logo?: string
}

// [MM 2020-08-05] Unfortunately, it seems like we can't make `asLink` optional
// because we need it to be explicitly `true` or `false` so we can use it as a
// discriminator and be confident that certain other props have to be passed
// (and can _only_ be passed) in specific situations. A bit of boilerplate, but
// a small price to pay for some additional safety.
type MaybeLinkProps = AsLinkProps | { asLink: false }

type ViewCardProps = {
  mode: 'view'
  image?: string
} & MaybeLinkProps

type EditCardProps = {
  mode: 'edit'
  image: ImageFallbackData
  onLogoChange: (file: O.Option<File>) => void
  onImageChange: (file: O.Option<File>) => void
  onRemoveLogo: () => void
  onRemoveImage: () => void
}

type AsLinkProps = {
  asLink: true
} & LinkProps

// TODO: Remove old ContentCard after this ticket is completed: https://ticket.simspace.com/browse/PS-10159 [SJ-2020-06-10]
export type ContentCardProps = BaseProps & (ViewCardProps | EditCardProps)

export const ContentCard = (props: ContentCardProps) => {
  const {
    cssOverrides,
    organization,
    title,
    description,
    difficulty,
    rating,
    duration,
    isSelfEnroll,
  } = props

  // [MM 2020-08-05] We want to conditionally pass `BaseLink` as the `as=...`
  // prop to `BBCardBackground`, but without a little type hint, TS seems to get
  // very confused about Forward Refs
  const baseLinkComponent: ReactType = BaseLink

  const maybeLinkProps = matchOnI('mode')(props)({
    edit: () => {},
    view: p =>
      p.asLink
        ? {
            as: baseLinkComponent,
            activeClassName: p.activeClassName,
            activeStyle: p.activeStyle,
            onlyActiveOnIndex: p.onlyActiveOnIndex,
            to: p.to,
            hover: true,
          }
        : {},
  })

  const headerProps = matchOnI('mode')(props)<ContentCardHeaderProps>({
    view: p => ({ mode: 'view', image: O.fromNullable(p.image) }),
    edit: p => ({
      mode: 'edit',
      onImageChange: p.onImageChange,
      onRemoveImage: p.onRemoveImage,
      image: p.image,
    }),
  })

  const showFooter =
    isNotNil(rating) || isNotNil(isSelfEnroll) || isNotNil(duration)

  return (
    <BBCardBackground
      {...maybeLinkProps}
      css={css`
        margin: 8px;
        width: 256px;

        ${cssOverrides};
      `}
    >
      <ContentCardHeader {...headerProps} />
      {matchOnI('mode')(props)({
        view: p => (isNotNil(p.logo) ? <StaticLogo logo={p.logo} /> : <></>),
        edit: p => (
          <EditLogo
            logo={p.logo}
            onRemove={p.onRemoveLogo}
            onChange={p.onLogoChange}
          />
        ),
      })}
      {isNotNil(difficulty) && <Difficulty difficulty={difficulty} />}
      <TextContainer>
        {isNotNil(organization) && <OrgName>{organization}</OrgName>}
        {<Title>{title}</Title>}
        {isNotNil(description) && (
          <Description>
            <TextTruncate lines={3}>{description}</TextTruncate>
          </Description>
        )}
        {showFooter && (
          <Footer>
            {isNotNil(rating) && <StarRating rating={rating} />}
            {isNotNil(isSelfEnroll) && <Enrollment selfEnroll={isSelfEnroll} />}
            {isNotNil(duration) && <Duration duration={duration} />}
          </Footer>
        )}
      </TextContainer>
    </BBCardBackground>
  )
}
