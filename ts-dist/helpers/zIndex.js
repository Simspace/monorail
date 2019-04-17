export var ZIndexNodeName;
(function (ZIndexNodeName) {
    ZIndexNodeName["SidebarContainer"] = "SidebarContainer";
    ZIndexNodeName["NewFlowSection"] = "NewFlowSection";
    ZIndexNodeName["NewFlowSectionAfter"] = "NewFlowSectionAfter";
})(ZIndexNodeName || (ZIndexNodeName = {}));
export const zIndex = (nodeName) => {
    switch (nodeName) {
        case ZIndexNodeName.SidebarContainer:
            return 'z-index: 10;';
        case ZIndexNodeName.NewFlowSection:
            return 'z-index: 5;';
        case ZIndexNodeName.NewFlowSectionAfter:
            return 'z-index: -5;';
        default:
            return 'z-index: 0;';
    }
};
//# sourceMappingURL=zIndex.js.map