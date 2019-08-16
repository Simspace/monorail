export enum ZIndexNodeName {
  ArrowButtons = 'ArrowButtons',
  FramedIcon = 'FramedIcon',
  FramedIconBackground = 'FramedIconBackground',
  NewFlowSection = 'NewFlowSection',
  NewFlowSectionAfter = 'NewFlowSectionAfter',
  PageLevelNavItem = 'PageLevelNavItem',
  SidebarContainer = 'SidebarContainer',
  TabBarIndicator = 'TabBarIndicator',
  CardBody = 'CardBody',
  CardBackground = 'CardBackground',
  CardShadow = 'CardShadow',
}

export const zIndex = (nodeName: ZIndexNodeName) => {
  switch (nodeName) {
    case ZIndexNodeName.SidebarContainer:
      return 'z-index: 10;'
    case ZIndexNodeName.ArrowButtons:
    case ZIndexNodeName.NewFlowSection:
    case ZIndexNodeName.PageLevelNavItem:
    case ZIndexNodeName.TabBarIndicator:
      return 'z-index: 5;'
    case ZIndexNodeName.CardBackground:
    case ZIndexNodeName.FramedIconBackground:
    case ZIndexNodeName.NewFlowSectionAfter:
      return 'z-index: -5;'
    case ZIndexNodeName.CardShadow:
      return 'z-index: -10;'
    case ZIndexNodeName.FramedIcon:
    case ZIndexNodeName.CardBody:
    default:
      return 'z-index: 0;'
  }
}
