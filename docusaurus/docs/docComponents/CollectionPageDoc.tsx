import React from 'react'

import {
  categoryColor,
  categoryIcon,
} from '@monorail/helpers/categoryTransforms'
import { FramedIcon } from '@monorail/visualComponents/icon/FramedIcon'
// import { ContentCardDeprecated } from 'src/training/shared/components/ContentCard'

export const searchFilter = ({ item, compareSearch }) =>
  compareSearch(item.entity.name) ||
  compareSearch(item.project.name) ||
  compareSearch(item.project.owner)

export const renderCard = item => {
  return
  // return (
  //   <ContentCardDeprecated
  //     noLogo
  //     packageData={{
  //       name: item.entity.name,
  //       Icon: (
  //         <FramedIcon
  //           css="vertical-align: middle; margin: 0 8px 4px 0;"
  //           frameColor={categoryColor('clone-source')}
  //           icon={categoryIcon('clone-source')}
  //         />
  //       ),
  //       categoryId: 'academy-package',
  //       difficulty: 'intermediate',
  //       enrollmentType: 'individual',
  //       description: '',
  //     }}
  //   />
  // )
}

export const columns = [
  {
    Header: 'Name',
    accessor: 'entity.name',
  },
  {
    Header: 'Network Spec',
    accessor: 'project.name',
  },
  {
    Header: 'Organization',
    accessor: 'project.owner',
  },
]

export const data = [
  {
    entity: {
      name: 'Item Name',
      type: 'deployment',
    },
    project: {
      key: 'key',
      name: 'name',
      owner: 'owner',
      latestVersionKey: 'key',
    },
  },
  {
    entity: {
      name: 'Item Name',
      type: 'deployment',
    },
    project: {
      key: 'key',
      name: 'name',
      owner: 'owner',
      latestVersionKey: 'key',
    },
  },
  {
    entity: {
      name: 'Item Name',
      type: 'deployment',
    },
    project: {
      key: 'key',
      name: 'name',
      owner: 'owner',
      latestVersionKey: 'key',
    },
  },
]
