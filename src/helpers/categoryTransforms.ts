import { Colors } from '@monorail/helpers/color'

export const categoryReadableName = (entryCategory: string) => {
  switch (entryCategory) {
    case 'academy-course-plan':
      return 'Course Plan'
    case 'academy-package':
      return 'Training Package'
    case 'academy-content-module':
      return 'Content Module'
    case 'hardhat-specification':
      return 'Network Spec'
    case 'external-subnet':
      return 'External Subnet'
    case 'physical-asset':
      return 'Physical Asset'
    case 'config-module':
      return 'Config Module'
    case 'vm-template':
      return 'VM Template'
    case 'range':
      return 'Range'
    case 'event':
      return 'Event'
    default:
      return entryCategory
  }
}

export const categoryIcon = (entryCategory: string) => {
  switch (entryCategory) {
    case 'academy-course-plan':
      return 'local_library'
    case 'academy-package':
      return 'school'
    case 'academy-content-module':
      return 'category'
    case 'hardhat-specification':
      return 'device_hub'
    case 'config-module':
      return 'code'
    case 'external-subnet':
      return 'dns'
    case 'physical-asset':
      return 'router'
    case 'range':
      return 'dns'
    case 'vm-template':
      return 'desktop_windows'
    case 'clone-source':
      return 'aspect_ratio'
    case 'event':
      return 'calendar_today'
    case 'exercise':
      return 'bar_chart'
    default:
      return entryCategory
  }
}

// export const entryIcon = (entry: CatalogEntry) =>
//   fromNullable(entry.fields.archived as Array<boolean>)
//     .chain(x => findFirst(x, y => y === true))
//     .fold(categoryIcon(entry.categoryId), x => 'archived')

export const categoryColor = (entryCategory: string) => {
  switch (entryCategory) {
    case 'external-subnet':
    case 'hardhat-specification':
    case 'vm-template':
    case 'network':
    case 'range':
    case 'physical-asset':
    case 'clone-source':
    case 'config-module':
      return Colors.RangeAlt
    case 'exercise':
    case 'event':
      return Colors.Tracker
    case 'academy-course-plan':
    default:
      return Colors.Academy
  }
}

// export const entryColor = (entry: CatalogEntry) =>
//   fromNullable(entry.fields.archived as Array<boolean>)
//     .chain(x => findFirst(x, y => y === true))
//     .fold(categoryColor(entry.categoryId), x => Colors.Black38)

export const categoryPathname = (entryCategory: string) => {
  switch (entryCategory) {
    case 'academy-course-plan':
      return '/catalog/course-plan'
    case 'academy-package':
      return '/catalog/training-packages'
    case 'academy-content-module':
      return '/catalog/content-modules'
    case 'external-subnet':
      return '/catalog/external-subnets'
    case 'hardhat-specification':
      return '/catalog/network-spec'
    case 'physical-asset':
      return '/catalog/physical-assets'
    case 'vm-template':
      return '/catalog/vm-templates'
    case 'config-module':
      return '/catalog/config-modules'
    case 'event':
      return '/events'
    default:
      return '/catalog/discover'
  }
}
