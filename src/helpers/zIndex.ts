export enum ZIndexNodeName {
  SidebarContainer = 'SidebarContainer',
  NewFlowSection = 'NewFlowSection',
  NewFlowSectionAfter = 'NewFlowSectionAfter',
}

export const zIndex = (nodeName: ZIndexNodeName) => {
  switch (nodeName) {
    case ZIndexNodeName.SidebarContainer:
      return 'z-index: 10;'
    case ZIndexNodeName.NewFlowSection:
      return 'z-index: 5;'
    case ZIndexNodeName.NewFlowSectionAfter:
      return 'z-index: -5;'
    default:
      return 'z-index: 0;'
  }
}
