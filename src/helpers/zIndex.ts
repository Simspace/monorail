export enum ZIndexNodeName {
  SidebarContainer = 'SidebarContainer',
  NewFlowSection = 'NewFlowSection',
  NewFlowSectionAfter = 'NewFlowSectionAfter',
  PageLevelNavItem = 'PageLevelNavItem',
  FramedIconBackground = 'FramedIconBackground',
  FramedIcon = 'FramedIcon',
  TabBarIndicator = 'TabBarIndicator',
}

export const zIndex = (nodeName: ZIndexNodeName) => {
  switch (nodeName) {
    case ZIndexNodeName.SidebarContainer:
      return 'z-index: 10;'
    case ZIndexNodeName.NewFlowSection:
    case ZIndexNodeName.PageLevelNavItem:
    case ZIndexNodeName.TabBarIndicator:
      return 'z-index: 5;'
    case ZIndexNodeName.FramedIconBackground:
    case ZIndexNodeName.NewFlowSectionAfter:
      return 'z-index: -5;'
    case ZIndexNodeName.FramedIcon:
    default:
      return 'z-index: 0;'
  }
}
