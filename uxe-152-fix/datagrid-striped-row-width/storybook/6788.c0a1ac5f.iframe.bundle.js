"use strict";(self.webpackChunk_monorail_storybook=self.webpackChunk_monorail_storybook||[]).push([[6788],{"../../node_modules/@mui/material/Collapse/Collapse.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),react_transition_group__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/react-transition-group/esm/Transition.js"),_mui_base_composeClasses__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),_styles_createTransitions__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/material/styles/createTransitions.js"),_transitions_utils__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@mui/material/transitions/utils.js"),_styles_useTheme__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@mui/material/styles/useTheme.js"),_utils__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@mui/material/utils/useForkRef.js"),_collapseClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/material/Collapse/collapseClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],CollapseRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.orientation],"entered"===ownerState.state&&styles.entered,"exited"===ownerState.state&&!ownerState.in&&"0px"===ownerState.collapsedSize&&styles.hidden]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({height:0,overflow:"hidden",transition:theme.transitions.create("height")},"horizontal"===ownerState.orientation&&{height:"auto",width:0,transition:theme.transitions.create("width")},"entered"===ownerState.state&&(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({height:"auto",overflow:"visible"},"horizontal"===ownerState.orientation&&{width:"auto"}),"exited"===ownerState.state&&!ownerState.in&&"0px"===ownerState.collapsedSize&&{visibility:"hidden"}))),CollapseWrapper=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(props,styles)=>styles.wrapper})((({ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({display:"flex",width:"100%"},"horizontal"===ownerState.orientation&&{width:"auto",height:"100%"}))),CollapseWrapperInner=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(props,styles)=>styles.wrapperInner})((({ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({width:"100%"},"horizontal"===ownerState.orientation&&{width:"auto",height:"100%"}))),Collapse=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Collapse(inProps,ref){const props=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_6__.Z)({props:inProps,name:"MuiCollapse"}),{addEndListener,children,className,collapsedSize:collapsedSizeProp="0px",component,easing,in:inProp,onEnter,onEntered,onEntering,onExit,onExited,onExiting,orientation="vertical",style,timeout=_styles_createTransitions__WEBPACK_IMPORTED_MODULE_7__.x9.standard,TransitionComponent=react_transition_group__WEBPACK_IMPORTED_MODULE_8__.ZP}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},props,{orientation,collapsedSize:collapsedSizeProp}),classes=(ownerState=>{const{orientation,classes}=ownerState,slots={root:["root",`${orientation}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${orientation}`],wrapperInner:["wrapperInner",`${orientation}`]};return(0,_mui_base_composeClasses__WEBPACK_IMPORTED_MODULE_2__.Z)(slots,_collapseClasses__WEBPACK_IMPORTED_MODULE_3__.d,classes)})(ownerState),theme=(0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_10__.Z)(),timer=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),wrapperRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),autoTransitionDuration=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),collapsedSize="number"==typeof collapsedSizeProp?`${collapsedSizeProp}px`:collapsedSizeProp,isHorizontal="horizontal"===orientation,size=isHorizontal?"width":"height";react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(timer.current)}),[]);const nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_utils__WEBPACK_IMPORTED_MODULE_11__.Z)(ref,nodeRef),normalizedTransitionCallback=callback=>maybeIsAppearing=>{if(callback){const node=nodeRef.current;void 0===maybeIsAppearing?callback(node):callback(node,maybeIsAppearing)}},getWrapperSize=()=>wrapperRef.current?wrapperRef.current[isHorizontal?"clientWidth":"clientHeight"]:0,handleEnter=normalizedTransitionCallback(((node,isAppearing)=>{wrapperRef.current&&isHorizontal&&(wrapperRef.current.style.position="absolute"),node.style[size]=collapsedSize,onEnter&&onEnter(node,isAppearing)})),handleEntering=normalizedTransitionCallback(((node,isAppearing)=>{const wrapperSize=getWrapperSize();wrapperRef.current&&isHorizontal&&(wrapperRef.current.style.position="");const{duration:transitionDuration,easing:transitionTimingFunction}=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_12__.C)({style,timeout,easing},{mode:"enter"});if("auto"===timeout){const duration2=theme.transitions.getAutoHeightDuration(wrapperSize);node.style.transitionDuration=`${duration2}ms`,autoTransitionDuration.current=duration2}else node.style.transitionDuration="string"==typeof transitionDuration?transitionDuration:`${transitionDuration}ms`;node.style[size]=`${wrapperSize}px`,node.style.transitionTimingFunction=transitionTimingFunction,onEntering&&onEntering(node,isAppearing)})),handleEntered=normalizedTransitionCallback(((node,isAppearing)=>{node.style[size]="auto",onEntered&&onEntered(node,isAppearing)})),handleExit=normalizedTransitionCallback((node=>{node.style[size]=`${getWrapperSize()}px`,onExit&&onExit(node)})),handleExited=normalizedTransitionCallback(onExited),handleExiting=normalizedTransitionCallback((node=>{const wrapperSize=getWrapperSize(),{duration:transitionDuration,easing:transitionTimingFunction}=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_12__.C)({style,timeout,easing},{mode:"exit"});if("auto"===timeout){const duration2=theme.transitions.getAutoHeightDuration(wrapperSize);node.style.transitionDuration=`${duration2}ms`,autoTransitionDuration.current=duration2}else node.style.transitionDuration="string"==typeof transitionDuration?transitionDuration:`${transitionDuration}ms`;node.style[size]=collapsedSize,node.style.transitionTimingFunction=transitionTimingFunction,onExiting&&onExiting(node)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({in:inProp,onEnter:handleEnter,onEntered:handleEntered,onEntering:handleEntering,onExit:handleExit,onExited:handleExited,onExiting:handleExiting,addEndListener:next=>{"auto"===timeout&&(timer.current=setTimeout(next,autoTransitionDuration.current||0)),addEndListener&&addEndListener(nodeRef.current,next)},nodeRef,timeout:"auto"===timeout?null:timeout},other,{children:(state,childProps)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollapseRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({as:component,className:(0,clsx__WEBPACK_IMPORTED_MODULE_13__.Z)(classes.root,className,{entered:classes.entered,exited:!inProp&&"0px"===collapsedSize&&classes.hidden}[state]),style:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({[isHorizontal?"minWidth":"minHeight"]:collapsedSize},style),ownerState:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},ownerState,{state}),ref:handleRef},childProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollapseWrapper,{ownerState:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},ownerState,{state}),className:classes.wrapper,ref:wrapperRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollapseWrapperInner,{ownerState:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},ownerState,{state}),className:classes.wrapperInner,children})})}))}))}));Collapse.muiSupportAuto=!0;const __WEBPACK_DEFAULT_EXPORT__=Collapse},"../../node_modules/@mui/material/Collapse/collapseClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,d:()=>getCollapseUtilityClass});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCollapseUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiCollapse",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"])},"../../node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),_mui_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_mui_base_composeClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),_typographyClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/Typography/typographyClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Typography(inProps,ref){const themeProps=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,_mui_system__WEBPACK_IMPORTED_MODULE_8__.Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,_mui_base_composeClasses__WEBPACK_IMPORTED_MODULE_3__.Z)(slots,_typographyClasses__WEBPACK_IMPORTED_MODULE_4__.f,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TypographyRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({as:Component,ref,ownerState,className:(0,clsx__WEBPACK_IMPORTED_MODULE_10__.Z)(classes.root,className)},other))}))},"../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"../../node_modules/@mui/x-tree-view/TreeItem/TreeItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TreeItem});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@mui/x-tree-view/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@mui/x-tree-view/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}const dist_clsx=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n};var Collapse=__webpack_require__("../../node_modules/@mui/material/Collapse/Collapse.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),colorManipulator=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),ownerDocument=__webpack_require__("../../node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"),useForkRef=__webpack_require__("../../node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),DescendantProvider=__webpack_require__("../../node_modules/@mui/x-tree-view/internals/TreeViewProvider/DescendantProvider.js"),useTreeItem=__webpack_require__("../../node_modules/@mui/x-tree-view/TreeItem/useTreeItem.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["classes","className","displayIcon","expansionIcon","icon","label","nodeId","onClick","onMouseDown"],TreeItemContent=react.forwardRef((function TreeItemContent(props,ref){const{classes,className,displayIcon,expansionIcon,icon:iconProp,label,nodeId,onClick,onMouseDown}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{disabled,expanded,selected,focused,handleExpansion,handleSelection,preventSelection}=(0,useTreeItem.I)(nodeId),icon=iconProp||expansionIcon||displayIcon;return(0,jsx_runtime.jsxs)("div",(0,esm_extends.Z)({},other,{className:dist_clsx(className,classes.root,expanded&&classes.expanded,selected&&classes.selected,focused&&classes.focused,disabled&&classes.disabled),onClick:event=>{handleExpansion(event),handleSelection(event),onClick&&onClick(event)},onMouseDown:event=>{preventSelection(event),onMouseDown&&onMouseDown(event)},ref,children:[(0,jsx_runtime.jsx)("div",{className:classes.iconContainer,children:icon}),(0,jsx_runtime.jsx)("div",{className:classes.label,children:label})]}))}));var treeItemClasses=__webpack_require__("../../node_modules/@mui/x-tree-view/TreeItem/treeItemClasses.js"),useTreeViewContext=__webpack_require__("../../node_modules/@mui/x-tree-view/internals/TreeViewProvider/useTreeViewContext.js");const TreeItem_excluded=["children","className","collapseIcon","ContentComponent","ContentProps","endIcon","expandIcon","disabled","icon","id","label","nodeId","onClick","onMouseDown","TransitionComponent","TransitionProps"],TreeItemRoot=(0,styled.ZP)("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:(props,styles)=>styles.root})({listStyle:"none",margin:0,padding:0,outline:0}),StyledTreeItemContent=(0,styled.ZP)(TreeItemContent,{name:"MuiTreeItem",slot:"Content",overridesResolver:(props,styles)=>[styles.content,styles.iconContainer&&{[`& .${treeItemClasses.r.iconContainer}`]:styles.iconContainer},styles.label&&{[`& .${treeItemClasses.r.label}`]:styles.label}]})((({theme})=>({padding:"0 8px",width:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(theme.vars||theme).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${treeItemClasses.r.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity,backgroundColor:"transparent"},[`&.${treeItemClasses.r.focused}`]:{backgroundColor:(theme.vars||theme).palette.action.focus},[`&.${treeItemClasses.r.selected}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity),"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity)}},[`&.${treeItemClasses.r.focused}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)}},[`& .${treeItemClasses.r.iconContainer}`]:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},[`& .${treeItemClasses.r.label}`]:(0,esm_extends.Z)({paddingLeft:4,width:"100%",boxSizing:"border-box",minWidth:0,position:"relative"},theme.typography.body1)}))),TreeItemGroup=(0,styled.ZP)(Collapse.Z,{name:"MuiTreeItem",slot:"Group",overridesResolver:(props,styles)=>styles.group})({margin:0,padding:0,marginLeft:17}),TreeItem=react.forwardRef((function TreeItem(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiTreeItem"}),{children,className,collapseIcon,ContentComponent=TreeItemContent,ContentProps,endIcon,expandIcon,disabled:disabledProp,icon,id:idProp,label,nodeId,onClick,onMouseDown,TransitionComponent=Collapse.Z,TransitionProps}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,TreeItem_excluded),{icons:contextIcons,multiSelect,disabledItemsFocusable,treeId,instance}=(0,useTreeViewContext.E)();let id;null!=idProp?id=idProp:treeId&&nodeId&&(id=`${treeId}-${nodeId}`);const[treeItemElement,setTreeItemElement]=react.useState(null),contentRef=react.useRef(null),handleRef=(0,useForkRef.Z)(setTreeItemElement,ref),descendant=react.useMemo((()=>({element:treeItemElement,id:nodeId})),[nodeId,treeItemElement]),{index,parentId}=(0,DescendantProvider.Y)(descendant),expandable=Boolean(Array.isArray(children)?children.length:children),expanded=!!instance&&instance.isNodeExpanded(nodeId),focused=!!instance&&instance.isNodeFocused(nodeId),selected=!!instance&&instance.isNodeSelected(nodeId),disabled=!!instance&&instance.isNodeDisabled(nodeId),ownerState=(0,esm_extends.Z)({},props,{expanded,focused,selected,disabled}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],label:["label"],group:["group"]},treeItemClasses.P,classes)})(ownerState);let displayIcon,expansionIcon,ariaSelected;return expandable&&(expansionIcon=expanded?collapseIcon||contextIcons.defaultCollapseIcon:expandIcon||contextIcons.defaultExpandIcon),displayIcon=expandable?contextIcons.defaultParentIcon:endIcon||contextIcons.defaultEndIcon,react.useEffect((()=>{if(instance&&-1!==index)return instance.updateNode({id:nodeId,idAttribute:id,index,parentId,expandable,disabled:disabledProp}),()=>instance.removeNode(nodeId)}),[instance,parentId,index,nodeId,expandable,disabledProp,id]),react.useEffect((()=>{var _contentRef$current$t,_contentRef$current;if(instance&&label)return instance.mapFirstChar(nodeId,(null!=(_contentRef$current$t=null==(_contentRef$current=contentRef.current)?void 0:_contentRef$current.textContent)?_contentRef$current$t:"").substring(0,1).toLowerCase())}),[instance,nodeId,label]),multiSelect?ariaSelected=selected:selected&&(ariaSelected=!0),(0,jsx_runtime.jsxs)(TreeItemRoot,(0,esm_extends.Z)({className:dist_clsx(classes.root,className),role:"treeitem","aria-expanded":expandable?expanded:void 0,"aria-selected":ariaSelected,"aria-disabled":disabled||void 0,id,tabIndex:-1},other,{ownerState,onFocus:function handleFocus(event){if(event.target===event.currentTarget){let rootElement;rootElement="function"==typeof event.target.getRootNode?event.target.getRootNode():(0,ownerDocument.Z)(event.target),rootElement.getElementById(treeId).focus({preventScroll:!0})}const unfocusable=!disabledItemsFocusable&&disabled;!instance||focused||event.currentTarget!==event.target||unfocusable||instance.focusNode(event,nodeId)},ref:handleRef,children:[(0,jsx_runtime.jsx)(StyledTreeItemContent,(0,esm_extends.Z)({as:ContentComponent,ref:contentRef,classes:{root:classes.content,expanded:classes.expanded,selected:classes.selected,focused:classes.focused,disabled:classes.disabled,iconContainer:classes.iconContainer,label:classes.label},label,nodeId,onClick,onMouseDown,icon,expansionIcon,displayIcon,ownerState},ContentProps)),children&&(0,jsx_runtime.jsx)(DescendantProvider.w,{id:nodeId,children:(0,jsx_runtime.jsx)(TreeItemGroup,(0,esm_extends.Z)({as:TransitionComponent,unmountOnExit:!0,className:classes.group,in:expanded,component:"ul",role:"group"},TransitionProps,{children}))})]}))}))},"../../node_modules/@mui/x-tree-view/TreeItem/useTreeItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useTreeItem});var _internals_TreeViewProvider_useTreeViewContext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@mui/x-tree-view/internals/TreeViewProvider/useTreeViewContext.js");function useTreeItem(nodeId){const{instance,multiSelect}=(0,_internals_TreeViewProvider_useTreeViewContext__WEBPACK_IMPORTED_MODULE_0__.E)(),expandable=!!instance&&instance.isNodeExpandable(nodeId),expanded=!!instance&&instance.isNodeExpanded(nodeId),focused=!!instance&&instance.isNodeFocused(nodeId),selected=!!instance&&instance.isNodeSelected(nodeId),disabled=!!instance&&instance.isNodeDisabled(nodeId);return{disabled,expanded,selected,focused,handleExpansion:event=>{if(instance&&!disabled){focused||instance.focusNode(event,nodeId);const multiple=multiSelect&&(event.shiftKey||event.ctrlKey||event.metaKey);!expandable||multiple&&instance.isNodeExpanded(nodeId)||instance.toggleNodeExpansion(event,nodeId)}},handleSelection:event=>{if(instance&&!disabled){focused||instance.focusNode(event,nodeId);multiSelect&&(event.shiftKey||event.ctrlKey||event.metaKey)?event.shiftKey?instance.selectRange(event,{end:nodeId}):instance.selectNode(event,nodeId,!0):instance.selectNode(event,nodeId)}},preventSelection:event=>{(event.shiftKey||event.ctrlKey||event.metaKey||disabled)&&event.preventDefault()}}}},"../../node_modules/@mui/x-tree-view/internals/TreeViewProvider/DescendantProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useDescendant,w:()=>DescendantProvider});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/x-tree-view/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/x-tree-view/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["element"];const DescendantContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});const noop=()=>{};function useDescendant(descendant){const[,forceUpdate]=react__WEBPACK_IMPORTED_MODULE_0__.useState(),{registerDescendant=noop,unregisterDescendant=noop,descendants=[],parentId=null}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DescendantContext),index=function findIndex(array,comp){for(let i=0;i<array.length;i+=1)if(comp(array[i]))return i;return-1}(descendants,(item=>item.element===descendant.element)),previousDescendants=function usePrevious(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{ref.current=value}),[value]),ref.current}(descendants),someDescendantsHaveChanged=descendants.some(((newDescendant,position)=>previousDescendants&&previousDescendants[position]&&previousDescendants[position].element!==newDescendant.element));return(0,_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_2__.Z)((()=>{if(descendant.element)return registerDescendant((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},descendant,{index})),()=>{unregisterDescendant(descendant.element)};forceUpdate({})}),[registerDescendant,unregisterDescendant,index,someDescendantsHaveChanged,descendant]),{parentId,index}}function DescendantProvider(props){const{children,id}=props,[items,set]=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),registerDescendant=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((_ref=>{let{element}=_ref,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);set((oldItems=>{if(0===oldItems.length)return[(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},other,{element,index:0})];const index=function binaryFindElement(array,element){let start=0,end=array.length-1;for(;start<=end;){const middle=Math.floor((start+end)/2);if(array[middle].element===element)return middle;array[middle].element.compareDocumentPosition(element)&Node.DOCUMENT_POSITION_PRECEDING?end=middle-1:start=middle+1}return start}(oldItems,element);let newItems;if(oldItems[index]&&oldItems[index].element===element)newItems=oldItems;else{const newItem=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},other,{element,index});newItems=oldItems.slice(),newItems.splice(index,0,newItem)}return newItems.forEach(((item,position)=>{item.index=position})),newItems}))}),[]),unregisterDescendant=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((element=>{set((oldItems=>oldItems.filter((item=>element!==item.element))))}),[]),value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({descendants:items,registerDescendant,unregisterDescendant,parentId:id})),[items,registerDescendant,unregisterDescendant,id]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DescendantContext.Provider,{value,children})}},"../../node_modules/@mui/x-tree-view/internals/TreeViewProvider/TreeViewContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>DEFAULT_TREE_VIEW_CONTEXT_VALUE,d:()=>TreeViewContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const DEFAULT_TREE_VIEW_CONTEXT_VALUE={instance:null,multiSelect:!1,disabledItemsFocusable:!1,treeId:void 0,icons:{defaultCollapseIcon:null,defaultExpandIcon:null,defaultParentIcon:null,defaultEndIcon:null}},TreeViewContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(DEFAULT_TREE_VIEW_CONTEXT_VALUE)},"../../node_modules/@mui/x-tree-view/internals/TreeViewProvider/useTreeViewContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>useTreeViewContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_TreeViewContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@mui/x-tree-view/internals/TreeViewProvider/TreeViewContext.js");const useTreeViewContext=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(_TreeViewContext__WEBPACK_IMPORTED_MODULE_1__.d)},"../../node_modules/@mui/x-tree-view/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../node_modules/@mui/x-tree-view/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})}}]);