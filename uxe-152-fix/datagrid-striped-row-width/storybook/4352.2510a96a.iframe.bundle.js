"use strict";(self.webpackChunk_monorail_storybook=self.webpackChunk_monorail_storybook||[]).push([[4352],{"../../node_modules/@mui/material/Grow/Grow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-transition-group/esm/Transition.js"),_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/styles/useTheme.js"),_transitions_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/transitions/utils.js"),_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/utils/useForkRef.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function getScale(value){return`scale(${value}, ${value**2})`}const styles={entering:{opacity:1,transform:getScale(1)},entered:{opacity:1,transform:"none"}},isWebKit154="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Grow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Grow(props,ref){const{addEndListener,appear=!0,children,easing,in:inProp,onEnter,onEntered,onEntering,onExit,onExited,onExiting,style,timeout="auto",TransitionComponent=react_transition_group__WEBPACK_IMPORTED_MODULE_2__.ZP}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__.Z)(props,_excluded),timer=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),autoTimeout=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),theme=(0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__.Z)(),nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.Z)(nodeRef,children.ref,ref),normalizedTransitionCallback=callback=>maybeIsAppearing=>{if(callback){const node=nodeRef.current;void 0===maybeIsAppearing?callback(node):callback(node,maybeIsAppearing)}},handleEntering=normalizedTransitionCallback(onEntering),handleEnter=normalizedTransitionCallback(((node,isAppearing)=>{(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.n)(node);const{duration:transitionDuration,delay,easing:transitionTimingFunction}=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.C)({style,timeout,easing},{mode:"enter"});let duration;"auto"===timeout?(duration=theme.transitions.getAutoHeightDuration(node.clientHeight),autoTimeout.current=duration):duration=transitionDuration,node.style.transition=[theme.transitions.create("opacity",{duration,delay}),theme.transitions.create("transform",{duration:isWebKit154?duration:.666*duration,delay,easing:transitionTimingFunction})].join(","),onEnter&&onEnter(node,isAppearing)})),handleEntered=normalizedTransitionCallback(onEntered),handleExiting=normalizedTransitionCallback(onExiting),handleExit=normalizedTransitionCallback((node=>{const{duration:transitionDuration,delay,easing:transitionTimingFunction}=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.C)({style,timeout,easing},{mode:"exit"});let duration;"auto"===timeout?(duration=theme.transitions.getAutoHeightDuration(node.clientHeight),autoTimeout.current=duration):duration=transitionDuration,node.style.transition=[theme.transitions.create("opacity",{duration,delay}),theme.transitions.create("transform",{duration:isWebKit154?duration:.666*duration,delay:isWebKit154?delay:delay||.333*duration,easing:transitionTimingFunction})].join(","),node.style.opacity=0,node.style.transform=getScale(.75),onExit&&onExit(node)})),handleExited=normalizedTransitionCallback(onExited);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(timer.current)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({appear,in:inProp,nodeRef,onEnter:handleEnter,onEntered:handleEntered,onEntering:handleEntering,onExit:handleExit,onExited:handleExited,onExiting:handleExiting,addEndListener:next=>{"auto"===timeout&&(timer.current=setTimeout(next,autoTimeout.current||0)),addEndListener&&addEndListener(nodeRef.current,next)},timeout:"auto"===timeout?null:timeout},other,{children:(state,childProps)=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({style:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({opacity:0,transform:getScale(.75),visibility:"exited"!==state||inProp?void 0:"hidden"},styles[state],style,children.props.style),ref:handleRef},childProps))}))}));Grow.muiSupportAuto=!0;const __WEBPACK_DEFAULT_EXPORT__=Grow},"../../node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js");const styles_getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)};var useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPaper",slot)}(0,generateUtilityClasses.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],PaperRoot=(0,styled.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.Z)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.Z)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,elevation,square,variant}),classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.Z)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other))}))},"../../node_modules/@mui/material/Popover/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XS:()=>PopoverPaper,ZP:()=>Popover_Popover});var esm_extends=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useSlotProps=__webpack_require__("../../node_modules/@mui/base/utils/useSlotProps.js"),isHostComponent=__webpack_require__("../../node_modules/@mui/base/utils/isHostComponent.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),debounce=__webpack_require__("../../node_modules/@mui/material/utils/debounce.js"),ownerDocument=__webpack_require__("../../node_modules/@mui/material/utils/ownerDocument.js"),ownerWindow=__webpack_require__("../../node_modules/@mui/material/utils/ownerWindow.js"),useForkRef=__webpack_require__("../../node_modules/@mui/material/utils/useForkRef.js"),Grow=__webpack_require__("../../node_modules/@mui/material/Grow/Grow.js"),Modal=__webpack_require__("../../node_modules/@mui/material/Modal/Modal.js"),Paper=__webpack_require__("../../node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPopoverUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPopover",slot)}(0,generateUtilityClasses.Z)("MuiPopover",["root","paper"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["onEntering"],_excluded2=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],_excluded3=["slotProps"];function getOffsetTop(rect,vertical){let offset=0;return"number"==typeof vertical?offset=vertical:"center"===vertical?offset=rect.height/2:"bottom"===vertical&&(offset=rect.height),offset}function getOffsetLeft(rect,horizontal){let offset=0;return"number"==typeof horizontal?offset=horizontal:"center"===horizontal?offset=rect.width/2:"right"===horizontal&&(offset=rect.width),offset}function getTransformOriginValue(transformOrigin){return[transformOrigin.horizontal,transformOrigin.vertical].map((n=>"number"==typeof n?`${n}px`:n)).join(" ")}function resolveAnchorEl(anchorEl){return"function"==typeof anchorEl?anchorEl():anchorEl}const PopoverRoot=(0,styled.ZP)(Modal.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),PopoverPaper=(0,styled.ZP)(Paper.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(props,styles)=>styles.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Popover_Popover=react.forwardRef((function Popover(inProps,ref){var _slotProps$paper,_slots$root,_slots$paper;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPopover"}),{action,anchorEl,anchorOrigin={vertical:"top",horizontal:"left"},anchorPosition,anchorReference="anchorEl",children,className,container:containerProp,elevation=8,marginThreshold=16,open,PaperProps:PaperPropsProp={},slots,slotProps,transformOrigin={vertical:"top",horizontal:"left"},TransitionComponent=Grow.Z,transitionDuration:transitionDurationProp="auto",TransitionProps:{onEntering}={},disableScrollLock=!1}=props,TransitionProps=(0,objectWithoutPropertiesLoose.Z)(props.TransitionProps,_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),externalPaperSlotProps=null!=(_slotProps$paper=null==slotProps?void 0:slotProps.paper)?_slotProps$paper:PaperPropsProp,paperRef=react.useRef(),handlePaperRef=(0,useForkRef.Z)(paperRef,externalPaperSlotProps.ref),ownerState=(0,esm_extends.Z)({},props,{anchorOrigin,anchorReference,elevation,marginThreshold,externalPaperSlotProps,transformOrigin,TransitionComponent,transitionDuration:transitionDurationProp,TransitionProps}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],paper:["paper"]},getPopoverUtilityClass,classes)})(ownerState),getAnchorOffset=react.useCallback((()=>{if("anchorPosition"===anchorReference)return anchorPosition;const resolvedAnchorEl=resolveAnchorEl(anchorEl),anchorRect=(resolvedAnchorEl&&1===resolvedAnchorEl.nodeType?resolvedAnchorEl:(0,ownerDocument.Z)(paperRef.current).body).getBoundingClientRect();return{top:anchorRect.top+getOffsetTop(anchorRect,anchorOrigin.vertical),left:anchorRect.left+getOffsetLeft(anchorRect,anchorOrigin.horizontal)}}),[anchorEl,anchorOrigin.horizontal,anchorOrigin.vertical,anchorPosition,anchorReference]),getTransformOrigin=react.useCallback((elemRect=>({vertical:getOffsetTop(elemRect,transformOrigin.vertical),horizontal:getOffsetLeft(elemRect,transformOrigin.horizontal)})),[transformOrigin.horizontal,transformOrigin.vertical]),getPositioningStyle=react.useCallback((element=>{const elemRect={width:element.offsetWidth,height:element.offsetHeight},elemTransformOrigin=getTransformOrigin(elemRect);if("none"===anchorReference)return{top:null,left:null,transformOrigin:getTransformOriginValue(elemTransformOrigin)};const anchorOffset=getAnchorOffset();let top=anchorOffset.top-elemTransformOrigin.vertical,left=anchorOffset.left-elemTransformOrigin.horizontal;const bottom=top+elemRect.height,right=left+elemRect.width,containerWindow=(0,ownerWindow.Z)(resolveAnchorEl(anchorEl)),heightThreshold=containerWindow.innerHeight-marginThreshold,widthThreshold=containerWindow.innerWidth-marginThreshold;if(null!==marginThreshold&&top<marginThreshold){const diff=top-marginThreshold;top-=diff,elemTransformOrigin.vertical+=diff}else if(null!==marginThreshold&&bottom>heightThreshold){const diff=bottom-heightThreshold;top-=diff,elemTransformOrigin.vertical+=diff}if(null!==marginThreshold&&left<marginThreshold){const diff=left-marginThreshold;left-=diff,elemTransformOrigin.horizontal+=diff}else if(right>widthThreshold){const diff=right-widthThreshold;left-=diff,elemTransformOrigin.horizontal+=diff}return{top:`${Math.round(top)}px`,left:`${Math.round(left)}px`,transformOrigin:getTransformOriginValue(elemTransformOrigin)}}),[anchorEl,anchorReference,getAnchorOffset,getTransformOrigin,marginThreshold]),[isPositioned,setIsPositioned]=react.useState(open),setPositioningStyles=react.useCallback((()=>{const element=paperRef.current;if(!element)return;const positioning=getPositioningStyle(element);null!==positioning.top&&(element.style.top=positioning.top),null!==positioning.left&&(element.style.left=positioning.left),element.style.transformOrigin=positioning.transformOrigin,setIsPositioned(!0)}),[getPositioningStyle]);react.useEffect((()=>(disableScrollLock&&window.addEventListener("scroll",setPositioningStyles),()=>window.removeEventListener("scroll",setPositioningStyles))),[anchorEl,disableScrollLock,setPositioningStyles]);react.useEffect((()=>{open&&setPositioningStyles()})),react.useImperativeHandle(action,(()=>open?{updatePosition:()=>{setPositioningStyles()}}:null),[open,setPositioningStyles]),react.useEffect((()=>{if(!open)return;const handleResize=(0,debounce.Z)((()=>{setPositioningStyles()})),containerWindow=(0,ownerWindow.Z)(anchorEl);return containerWindow.addEventListener("resize",handleResize),()=>{handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}),[anchorEl,open,setPositioningStyles]);let transitionDuration=transitionDurationProp;"auto"!==transitionDurationProp||TransitionComponent.muiSupportAuto||(transitionDuration=void 0);const container=containerProp||(anchorEl?(0,ownerDocument.Z)(resolveAnchorEl(anchorEl)).body:void 0),RootSlot=null!=(_slots$root=null==slots?void 0:slots.root)?_slots$root:PopoverRoot,PaperSlot=null!=(_slots$paper=null==slots?void 0:slots.paper)?_slots$paper:PopoverPaper,paperProps=(0,useSlotProps.y)({elementType:PaperSlot,externalSlotProps:(0,esm_extends.Z)({},externalPaperSlotProps,{style:isPositioned?externalPaperSlotProps.style:(0,esm_extends.Z)({},externalPaperSlotProps.style,{opacity:0})}),additionalProps:{elevation,ref:handlePaperRef},ownerState,className:(0,clsx.Z)(classes.paper,null==externalPaperSlotProps?void 0:externalPaperSlotProps.className)}),_useSlotProps=(0,useSlotProps.y)({elementType:RootSlot,externalSlotProps:(null==slotProps?void 0:slotProps.root)||{},externalForwardedProps:other,additionalProps:{ref,slotProps:{backdrop:{invisible:!0}},container,open},ownerState,className:(0,clsx.Z)(classes.root,className)}),{slotProps:rootSlotPropsProp}=_useSlotProps,rootProps=(0,objectWithoutPropertiesLoose.Z)(_useSlotProps,_excluded3);return(0,jsx_runtime.jsx)(RootSlot,(0,esm_extends.Z)({},rootProps,!(0,isHostComponent.X)(RootSlot)&&{slotProps:rootSlotPropsProp,disableScrollLock},{children:(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({appear:!0,in:open,onEntering:(element,isAppearing)=>{onEntering&&onEntering(element,isAppearing),setPositioningStyles()},onExited:()=>{setIsPositioned(!1)},timeout:transitionDuration},TransitionProps,{children:(0,jsx_runtime.jsx)(PaperSlot,(0,esm_extends.Z)({},paperProps,{children}))}))}))}))}}]);