import { Colors } from '@monorail/helpers/color'
import { IconType } from '@monorail/visualComponents/icon/IconType'

export const categoryReadableName = (entryCategory: string) => {
  switch (entryCategory) {
    case 'academy-course-plan':
      return 'Course Plan'
    case 'academy-package':
      return 'Training Package'
    case 'academy-content-module':
      return 'Content Module'
    case 'event-template':
      return 'Event Template'
    case 'hardhat-specification':
      return 'Network Spec'
    case 'external-subnet':
      return 'External Subnet'
    case 'physical-asset':
      return 'Physical Asset'
    case 'config-module':
      return 'Config Module'
    case 'puppet-module':
      return 'Puppet Module'
    case 'vm-template':
      return 'VM Template'
    case 'range':
      return 'Range'
    case 'event':
      return 'Event'
    case 'attack-scenario':
      return 'Attack Scenario'
    case 'attack-tool':
      return 'Attack Tool'
    default:
      return entryCategory
  }
}

export const categoryIcon = (entryCategory: string): IconType => {
  switch (entryCategory) {
    case 'academy-course-plan':
      return 'local_library'
    case 'academy-package':
      return 'school'
    case 'event-template':
      return 'event'
    case 'academy-content-module':
      return 'category'
    case 'hardhat-specification':
      return 'device_hub'
    case 'config-module':
      return 'code'
    case 'puppet-module':
      return 'puppet'
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
    case 'attack-scenario':
      return 'target'
    case 'attack-tool':
      return 'tools'
    default:
      return entryCategory as IconType // TODO: this is undesirable, but this is what the code was doing before and is apparently required. It's not clear what entryCategory is, but it should not be a string - it should be some other union that can be mapped to an IconType if needed. (AW 2020-6-25)
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
    case 'puppet-module':
      return Colors.RangeAlt
    case 'exercise':
    case 'event':
      return Colors.Tracker
    case 'attack-scenario':
    case 'attack-tool':
      return Colors.AttackElements
    case 'academy-course-plan':
    case 'event-template':
      return Colors.Academy
    default:
      return Colors.Academy
  }
}

// export const entryColor = (entry: CatalogEntry) =>
//   fromNullable(entry.fields.archived as Array<boolean>)
//     .chain(x => findFirst(x, y => y === true))
//     .fold(categoryColor(entry.categoryId), x => Colors.Black38a)

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
    case 'puppet-module':
      return '/catalog/puppet-modules'
    case 'event':
      return '/events'
    case 'attack-scenario':
      return '/catalog/attack-scenarios'
    case 'attack-tool':
      return '/catalog/attack-tools'
    case 'event-template':
      return '/catalog/event-templates'
    default:
      return '/catalog'
  }
}
