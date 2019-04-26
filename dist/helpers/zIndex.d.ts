export declare enum ZIndexNodeName {
    SidebarContainer = "SidebarContainer",
    NewFlowSection = "NewFlowSection",
    NewFlowSectionAfter = "NewFlowSectionAfter"
}
export declare const zIndex: (nodeName: ZIndexNodeName) => "z-index: 10;" | "z-index: 5;" | "z-index: -5;" | "z-index: 0;";
