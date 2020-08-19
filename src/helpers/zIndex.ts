export enum ZIndexNodeName {
  ArrowButtons = 'ArrowButtons',
  ContentCardButton = 'ContentCardButton',
  DataWellDivider = 'DataWellDivider',
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
  Overlay = 'Overlay',
  Modal = 'Modal',
  Tooltip = 'Tooltip',
}

export const zIndexValue = (nodeName: ZIndexNodeName): number => {
  switch (nodeName) {
    case ZIndexNodeName.ContentCardButton:
      return 1
    case ZIndexNodeName.SidebarContainer:
      return 10
    case ZIndexNodeName.ArrowButtons:
    case ZIndexNodeName.NewFlowSection:
    case ZIndexNodeName.PageLevelNavItem:
    case ZIndexNodeName.TabBarIndicator:
    case ZIndexNodeName.DataWellDivider:
      return 5
    case ZIndexNodeName.CardBackground:
    case ZIndexNodeName.FramedIconBackground:
    case ZIndexNodeName.NewFlowSectionAfter:
      return -5
    case ZIndexNodeName.CardShadow:
      return -10
    case ZIndexNodeName.Modal:
      return 9990
    case ZIndexNodeName.Overlay:
      return 9998
    case ZIndexNodeName.Tooltip:
      return 9999
    case ZIndexNodeName.FramedIcon:
    case ZIndexNodeName.CardBody:
    default:
      return 0
  }
}

export const zIndex = (nodeName: ZIndexNodeName): string =>
  `z-index: ${zIndexValue(nodeName)};`
