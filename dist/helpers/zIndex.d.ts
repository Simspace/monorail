export declare enum ZIndexNodeName {
    ArrowButtons = "ArrowButtons",
    FramedIcon = "FramedIcon",
    FramedIconBackground = "FramedIconBackground",
    NewFlowSection = "NewFlowSection",
    NewFlowSectionAfter = "NewFlowSectionAfter",
    PageLevelNavItem = "PageLevelNavItem",
    SidebarContainer = "SidebarContainer",
    TabBarIndicator = "TabBarIndicator",
    CardBody = "CardBody",
    CardBackground = "CardBackground",
    CardShadow = "CardShadow",
    Overlay = "Overlay",
    Modal = "Modal"
}
export declare const zIndexValue: (nodeName: ZIndexNodeName) => number;
export declare const zIndex: (nodeName: ZIndexNodeName) => string;
