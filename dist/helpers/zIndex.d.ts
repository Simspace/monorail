export declare enum ZIndexNodeName {
    SidebarContainer = "SidebarContainer",
    NewFlowSection = "NewFlowSection",
    NewFlowSectionAfter = "NewFlowSectionAfter",
    PageLevelNavItem = "PageLevelNavItem",
    FramedIconBackground = "FramedIconBackground",
    FramedIcon = "FramedIcon",
    TabBarIndicator = "TabBarIndicator"
}
export declare const zIndex: (nodeName: ZIndexNodeName) => "z-index: 10;" | "z-index: 5;" | "z-index: -5;" | "z-index: 0;";
