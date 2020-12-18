import { ReactElement } from 'react'
import { LinkProps } from 'react-router/lib/Link'
import { SimpleInterpolation } from 'styled-components'
import { O } from '@monorail/sharedHelpers/fp-ts-imports'

import { ImageFallbackData } from './ContentCardHeader'
import { ContentDifficulty } from './ContentDifficulty'

// TODO: Remove old ContentCard after this ticket is completed: https://ticket.simspace.com/browse/PS-10159 [SJ-2020-06-10]
export type ContentCardProps = BaseProps & (ViewCardProps | EditCardProps)

type BaseProps = {
  cssOverrides?: SimpleInterpolation
  organization?: string
  title: string
  description: string
  difficulty?: ContentDifficulty
  logo?: string

  renderFooter?: () => ReactElement | null
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
