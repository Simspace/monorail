"use strict";(self.webpackChunk_monorail_storybook=self.webpackChunk_monorail_storybook||[]).push([[5667],{"../../node_modules/@mui/material/Fade/Fade.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-transition-group/esm/Transition.js"),_mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js"),_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/styles/useTheme.js"),_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/transitions/utils.js"),_utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/utils/useForkRef.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const styles={entering:{opacity:1},entered:{opacity:1}},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Fade(props,ref){const theme=(0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__.Z)(),defaultTimeout={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{addEndListener,appear=!0,children,easing,in:inProp,onEnter,onEntered,onEntering,onExit,onExited,onExiting,style,timeout=defaultTimeout,TransitionComponent=react_transition_group__WEBPACK_IMPORTED_MODULE_3__.ZP,...other}=props,nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef,(0,_mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_5__.Z)(children),ref),normalizedTransitionCallback=callback=>maybeIsAppearing=>{if(callback){const node=nodeRef.current;void 0===maybeIsAppearing?callback(node):callback(node,maybeIsAppearing)}},handleEntering=normalizedTransitionCallback(onEntering),handleEnter=normalizedTransitionCallback(((node,isAppearing)=>{(0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__.n)(node);const transitionProps=(0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__.C)({style,timeout,easing},{mode:"enter"});node.style.webkitTransition=theme.transitions.create("opacity",transitionProps),node.style.transition=theme.transitions.create("opacity",transitionProps),onEnter&&onEnter(node,isAppearing)})),handleEntered=normalizedTransitionCallback(onEntered),handleExiting=normalizedTransitionCallback(onExiting),handleExit=normalizedTransitionCallback((node=>{const transitionProps=(0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__.C)({style,timeout,easing},{mode:"exit"});node.style.webkitTransition=theme.transitions.create("opacity",transitionProps),node.style.transition=theme.transitions.create("opacity",transitionProps),onExit&&onExit(node)})),handleExited=normalizedTransitionCallback(onExited);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent,{appear,in:inProp,nodeRef,onEnter:handleEnter,onEntered:handleEntered,onEntering:handleEntering,onExit:handleExit,onExited:handleExited,onExiting:handleExiting,addEndListener:next=>{addEndListener&&addEndListener(nodeRef.current,next)},timeout,...other,children:(state,childProps)=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{style:{opacity:0,visibility:"exited"!==state||inProp?void 0:"hidden",...styles[state],...style,...children.props.style},ref:handleRef,...childProps})})}))},"../../node_modules/notistack/dist/notistack.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{wT:()=>SnackbarProvider,Ds:()=>useSnackbar});var react=__webpack_require__("../../node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/react-dom/index.js");function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function clsx_m(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}var Slide=__webpack_require__("../../node_modules/@mui/material/Slide/Slide.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),colorManipulator=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator/colorManipulator.js"),Collapse=__webpack_require__("../../node_modules/@mui/material/Collapse/Collapse.js"),SvgIcon=__webpack_require__("../../node_modules/@mui/material/SvgIcon/SvgIcon.js"),ClickAwayListener=__webpack_require__("../../node_modules/@mui/material/ClickAwayListener/ClickAwayListener.js");__webpack_require__("../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}var SnackbarContext=react.createContext(),allClasses_container={containerRoot:{},containerAnchorOriginTopCenter:{},containerAnchorOriginBottomCenter:{},containerAnchorOriginTopRight:{},containerAnchorOriginBottomRight:{},containerAnchorOriginTopLeft:{},containerAnchorOriginBottomLeft:{}},SNACKBAR_INDENTS_view={default:20,dense:4},SNACKBAR_INDENTS_snackbar={default:6,dense:2},DEFAULTS={maxSnack:3,dense:!1,hideIconVariant:!1,variant:"default",autoHideDuration:5e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:Slide.Z,transitionDuration:{enter:225,exit:195}},capitalise=function capitalise(text){return text.charAt(0).toUpperCase()+text.slice(1)},omitContainerKeys=function omitContainerKeys(classes){return Object.keys(classes).filter((function(key){return!allClasses_container[key]})).reduce((function(obj,key){var _extends2;return _extends({},obj,((_extends2={})[key]=classes[key],_extends2))}),{})},REASONS={TIMEOUT:"timeout",CLICKAWAY:"clickaway",MAXSNACK:"maxsnack",INSTRUCTED:"instructed"},transformer_toContainerAnchorOrigin=function toContainerAnchorOrigin(origin){return"containerAnchorOrigin"+origin},transformer_toAnchorOrigin=function toAnchorOrigin(_ref){var vertical=_ref.vertical,horizontal=_ref.horizontal;return"anchorOrigin"+capitalise(vertical)+capitalise(horizontal)},transformer_toVariant=function toVariant(variant){return"variant"+capitalise(variant)},isDefined=function isDefined(value){return!!value||0===value},numberOrNull=function numberOrNull(numberish){return"number"==typeof numberish||null===numberish};function objectMerge(options,props,defaults){return void 0===options&&(options={}),void 0===props&&(props={}),void 0===defaults&&(defaults={}),_extends({},defaults,{},props,{},options)}var classes={root:"SnackbarContent-root"},Root=(0,styled.ZP)("div")((function(_ref){var _ref2,_ref3,theme=_ref.theme;return(_ref3={})["&."+classes.root]=((_ref2={display:"flex",flexWrap:"wrap",flexGrow:1})[theme.breakpoints.up("sm")]={flexGrow:"initial",minWidth:288},_ref2),_ref3})),SnackbarContent=(0,react.forwardRef)((function(_ref4,ref){var className=_ref4.className,props=_objectWithoutPropertiesLoose(_ref4,["className"]);return react.createElement(Root,Object.assign({ref,className:clsx_m(classes.root,className)},props))})),DIRECTION={right:"left",left:"right",bottom:"up",top:"down"},getTransitionDirection=function getTransitionDirection(anchorOrigin){return"center"!==anchorOrigin.horizontal?DIRECTION[anchorOrigin.horizontal]:DIRECTION[anchorOrigin.vertical]},CheckIcon=function CheckIcon(props){return react.createElement(SvgIcon.Z,Object.assign({},props),react.createElement("path",{d:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"}))},WarningIcon=function WarningIcon(props){return react.createElement(SvgIcon.Z,Object.assign({},props),react.createElement("path",{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}))},ErrorIcon=function ErrorIcon(props){return react.createElement(SvgIcon.Z,Object.assign({},props),react.createElement("path",{d:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"}))},InfoIcon=function InfoIcon(props){return react.createElement(SvgIcon.Z,Object.assign({},props),react.createElement("path",{d:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"}))},iconStyles={fontSize:20,marginInlineEnd:8},defaultIconVariants={default:void 0,success:react.createElement(CheckIcon,{style:iconStyles}),warning:react.createElement(WarningIcon,{style:iconStyles}),error:react.createElement(ErrorIcon,{style:iconStyles}),info:react.createElement(InfoIcon,{style:iconStyles})};function createChainedFunction(funcs,extraArg){return funcs.reduce((function(acc,func){return null==func?acc:function chainedFunction(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var argums=[].concat(args);extraArg&&-1===argums.indexOf(extraArg)&&argums.push(extraArg),acc.apply(this,argums),func.apply(this,argums)}}),(function(){}))}var useEnhancedEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;function useEventCallback(fn){var ref=(0,react.useRef)(fn);return useEnhancedEffect((function(){ref.current=fn})),(0,react.useCallback)((function(){return ref.current.apply(void 0,arguments)}),[])}var Snackbar=(0,react.forwardRef)((function(props,ref){var children=props.children,autoHideDuration=props.autoHideDuration,ClickAwayListenerProps=props.ClickAwayListenerProps,_props$disableWindowB=props.disableWindowBlurListener,disableWindowBlurListener=void 0!==_props$disableWindowB&&_props$disableWindowB,onClose=props.onClose,onMouseEnter=props.onMouseEnter,onMouseLeave=props.onMouseLeave,open=props.open,resumeHideDuration=props.resumeHideDuration,other=_objectWithoutPropertiesLoose(props,["children","autoHideDuration","ClickAwayListenerProps","disableWindowBlurListener","onClose","onMouseEnter","onMouseLeave","open","resumeHideDuration"]),timerAutoHide=(0,react.useRef)(),handleClose=useEventCallback((function(){onClose&&onClose.apply(void 0,arguments)})),setAutoHideTimer=useEventCallback((function(autoHideDurationParam){onClose&&null!=autoHideDurationParam&&(clearTimeout(timerAutoHide.current),timerAutoHide.current=setTimeout((function(){handleClose(null,REASONS.TIMEOUT)}),autoHideDurationParam))}));(0,react.useEffect)((function(){return open&&setAutoHideTimer(autoHideDuration),function(){clearTimeout(timerAutoHide.current)}}),[open,autoHideDuration,setAutoHideTimer]);var handlePause=function handlePause(){clearTimeout(timerAutoHide.current)},handleResume=(0,react.useCallback)((function(){null!=autoHideDuration&&setAutoHideTimer(null!=resumeHideDuration?resumeHideDuration:.5*autoHideDuration)}),[autoHideDuration,resumeHideDuration,setAutoHideTimer]);return(0,react.useEffect)((function(){if(!disableWindowBlurListener&&open)return window.addEventListener("focus",handleResume),window.addEventListener("blur",handlePause),function(){window.removeEventListener("focus",handleResume),window.removeEventListener("blur",handlePause)}}),[disableWindowBlurListener,handleResume,open]),(0,react.createElement)(ClickAwayListener.d,_extends({onClickAway:function handleClickAway(event){onClose&&onClose(event,REASONS.CLICKAWAY)}},ClickAwayListenerProps),(0,react.createElement)("div",_extends({onMouseEnter:function handleMouseEnter(event){onMouseEnter&&onMouseEnter(event),handlePause()},onMouseLeave:function handleMouseLeave(event){onMouseLeave&&onMouseLeave(event),handleResume()},ref},other),children))})),classes$1={contentRoot:"SnackbarItem-contentRoot",lessPadding:"SnackbarItem-lessPadding",variantSuccess:"SnackbarItem-variantSuccess",variantError:"SnackbarItem-variantError",variantInfo:"SnackbarItem-variantInfo",variantWarning:"SnackbarItem-variantWarning",message:"SnackbarItem-message",action:"SnackbarItem-action",wrappedRoot:"SnackbarItem-wrappedRoot"},StyledSnackbar=(0,styled.ZP)(Snackbar)((function(_ref){var _ref2,theme=_ref.theme,mode=theme.palette.mode||theme.palette.type,backgroundColor=(0,colorManipulator._4)(theme.palette.background.default,"light"===mode?.8:.98);return(_ref2={})["&."+classes$1.wrappedRoot]={position:"relative",transform:"translateX(0)",top:0,right:0,bottom:0,left:0},_ref2["."+classes$1.contentRoot]=_extends({},theme.typography.body2,{backgroundColor,color:theme.palette.getContrastText(backgroundColor),alignItems:"center",padding:"6px 16px",borderRadius:"4px",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"}),_ref2["."+classes$1.lessPadding]={paddingLeft:20},_ref2["."+classes$1.variantSuccess]={backgroundColor:"#43a047",color:"#fff"},_ref2["."+classes$1.variantError]={backgroundColor:"#d32f2f",color:"#fff"},_ref2["."+classes$1.variantInfo]={backgroundColor:"#2196f3",color:"#fff"},_ref2["."+classes$1.variantWarning]={backgroundColor:"#ff9800",color:"#fff"},_ref2["."+classes$1.message]={display:"flex",alignItems:"center",padding:"8px 0"},_ref2["."+classes$1.action]={display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8},_ref2})),SnackbarItem=function SnackbarItem(_ref3){var propClasses=_ref3.classes,props=_objectWithoutPropertiesLoose(_ref3,["classes"]),timeout=(0,react.useRef)(),_useState=(0,react.useState)(!0),collapsed=_useState[0],setCollapsed=_useState[1];(0,react.useEffect)((function(){return function(){timeout.current&&clearTimeout(timeout.current)}}),[]);var handleClose=createChainedFunction([props.snack.onClose,props.onClose],props.snack.key),style=props.style,otherAriaAttributes=props.ariaAttributes,otherClassName=props.className,hideIconVariant=props.hideIconVariant,iconVariant=props.iconVariant,snack=props.snack,otherAction=props.action,otherContent=props.content,otherTranComponent=props.TransitionComponent,otherTranProps=props.TransitionProps,otherTranDuration=props.transitionDuration,other=_objectWithoutPropertiesLoose(props,["style","dense","ariaAttributes","className","hideIconVariant","iconVariant","snack","action","content","TransitionComponent","TransitionProps","transitionDuration","onEnter","onEntered","onEntering","onExit","onExited","onExiting"]),key=snack.key,open=snack.open,singleClassName=snack.className,variant=snack.variant,singleContent=snack.content,singleAction=snack.action,singleAriaAttributes=snack.ariaAttributes,anchorOrigin=snack.anchorOrigin,snackMessage=snack.message,singleTranComponent=snack.TransitionComponent,singleTranProps=snack.TransitionProps,singleTranDuration=snack.transitionDuration,singleSnackProps=_objectWithoutPropertiesLoose(snack,["persist","key","open","entered","requestClose","className","variant","content","action","ariaAttributes","anchorOrigin","message","TransitionComponent","TransitionProps","transitionDuration","onEnter","onEntered","onEntering","onExit","onExited","onExiting"]),icon=_extends({},defaultIconVariants,{},iconVariant)[variant],ariaAttributes=_extends({"aria-describedby":"notistack-snackbar"},objectMerge(singleAriaAttributes,otherAriaAttributes)),TransitionComponent=singleTranComponent||otherTranComponent||DEFAULTS.TransitionComponent,transitionDuration=objectMerge(singleTranDuration,otherTranDuration,DEFAULTS.transitionDuration),transitionProps=_extends({direction:getTransitionDirection(anchorOrigin)},objectMerge(singleTranProps,otherTranProps)),action=singleAction||otherAction;"function"==typeof action&&(action=action(key));var content=singleContent||otherContent;"function"==typeof content&&(content=content(key,snack.message));var callbacks=["onEnter","onEntering","onEntered","onExit","onExiting","onExited"].reduce((function(acc,cbName){var _extends2;return _extends({},acc,((_extends2={})[cbName]=createChainedFunction([props.snack[cbName],props[cbName]],props.snack.key),_extends2))}),{});return react.createElement(Collapse.Z,{unmountOnExit:!0,timeout:175,in:collapsed,onExited:callbacks.onExited},react.createElement(StyledSnackbar,Object.assign({},other,singleSnackProps,{open,className:clsx_m(propClasses.root,classes$1.wrappedRoot,propClasses[transformer_toAnchorOrigin(anchorOrigin)]),onClose:handleClose}),react.createElement(TransitionComponent,Object.assign({appear:!0,in:open,timeout:transitionDuration},transitionProps,{onExit:callbacks.onExit,onExiting:callbacks.onExiting,onExited:function handleExitedScreen(){timeout.current=setTimeout((function(){setCollapsed(!collapsed)}),125)},onEnter:callbacks.onEnter,onEntering:callbacks.onEntering,onEntered:createChainedFunction([callbacks.onEntered,function handleEntered(){props.snack.requestClose&&handleClose(null,REASONS.INSTRCUTED)}])}),content||react.createElement(SnackbarContent,Object.assign({},ariaAttributes,{role:"alert",style,className:clsx_m(classes$1.contentRoot,classes$1[transformer_toVariant(variant)],propClasses[transformer_toVariant(variant)],otherClassName,singleClassName,!hideIconVariant&&icon&&classes$1.lessPadding)}),react.createElement("div",{id:ariaAttributes["aria-describedby"],className:classes$1.message},hideIconVariant?null:icon,snackMessage),action&&react.createElement("div",{className:classes$1.action},action)))))},collapse_container="& > .MuiCollapse-container, & > .MuiCollapse-root",collapse_wrapper="& > .MuiCollapse-container > .MuiCollapse-wrapper, & > .MuiCollapse-root > .MuiCollapse-wrapper",classes$2={root:"SnackbarContainer-root",rootDense:"SnackbarContainer-rootDense",top:"SnackbarContainer-top",bottom:"SnackbarContainer-bottom",left:"SnackbarContainer-left",right:"SnackbarContainer-right",center:"SnackbarContainer-center"},Root$1=(0,styled.ZP)("div")((function(_ref){var _ref2,_ref3,_ref4,_ref5,_ref6,_ref7,theme=_ref.theme;return(_ref7={})["&."+classes$2.root]=((_ref2={boxSizing:"border-box",display:"flex",maxHeight:"100%",position:"fixed",zIndex:theme.zIndex.snackbar,height:"auto",width:"auto",transition:"top 300ms ease 0ms, right 300ms ease 0ms, bottom 300ms ease 0ms, left 300ms ease 0ms, margin 300ms ease 0ms, max-width 300ms ease 0ms",pointerEvents:"none"})[collapse_container]={pointerEvents:"all"},_ref2[collapse_wrapper]={padding:SNACKBAR_INDENTS_snackbar.default+"px 0px",transition:"padding 300ms ease 0ms"},_ref2.maxWidth="calc(100% - "+2*SNACKBAR_INDENTS_view.default+"px)",_ref2[theme.breakpoints.down("sm")]={width:"100%",maxWidth:"calc(100% - 32px)"},_ref2),_ref7["&."+classes$2.rootDense]=((_ref3={})[collapse_wrapper]={padding:SNACKBAR_INDENTS_snackbar.dense+"px 0px"},_ref3),_ref7["&."+classes$2.top]={top:SNACKBAR_INDENTS_view.default-SNACKBAR_INDENTS_snackbar.default,flexDirection:"column"},_ref7["&."+classes$2.bottom]={bottom:SNACKBAR_INDENTS_view.default-SNACKBAR_INDENTS_snackbar.default,flexDirection:"column-reverse"},_ref7["&."+classes$2.left]=((_ref4={left:SNACKBAR_INDENTS_view.default})[theme.breakpoints.up("sm")]={alignItems:"flex-start"},_ref4[theme.breakpoints.down("sm")]={left:"16px"},_ref4),_ref7["&."+classes$2.right]=((_ref5={right:SNACKBAR_INDENTS_view.default})[theme.breakpoints.up("sm")]={alignItems:"flex-end"},_ref5[theme.breakpoints.down("sm")]={right:"16px"},_ref5),_ref7["&."+classes$2.center]=((_ref6={left:"50%",transform:"translateX(-50%)"})[theme.breakpoints.up("sm")]={alignItems:"center"},_ref6),_ref7})),SnackbarContainer=function SnackbarContainer(props){var className=props.className,anchorOrigin=props.anchorOrigin,dense=props.dense,other=_objectWithoutPropertiesLoose(props,["className","anchorOrigin","dense"]),combinedClassname=clsx_m(classes$2[anchorOrigin.vertical],classes$2[anchorOrigin.horizontal],classes$2.root,className,dense&&classes$2.rootDense);return react.createElement(Root$1,Object.assign({className:combinedClassname},other))},SnackbarContainer$1=react.memo(SnackbarContainer),SnackbarProvider=function(_Component){function SnackbarProvider(props){var _this;return(_this=_Component.call(this,props)||this).enqueueSnackbar=function(message,opts){void 0===opts&&(opts={});var _opts=opts,key=_opts.key,preventDuplicate=_opts.preventDuplicate,options=_objectWithoutPropertiesLoose(_opts,["key","preventDuplicate"]),hasSpecifiedKey=isDefined(key),id=hasSpecifiedKey?key:(new Date).getTime()+Math.random(),merger=function merge(options,props,defaults){return function(name){return"autoHideDuration"===name?numberOrNull(options.autoHideDuration)?options.autoHideDuration:numberOrNull(props.autoHideDuration)?props.autoHideDuration:DEFAULTS.autoHideDuration:options[name]||props[name]||defaults[name]}}(options,_this.props,DEFAULTS),snack=_extends({key:id},options,{message,open:!0,entered:!1,requestClose:!1,variant:merger("variant"),anchorOrigin:merger("anchorOrigin"),autoHideDuration:merger("autoHideDuration")});return options.persist&&(snack.autoHideDuration=void 0),_this.setState((function(state){if(void 0===preventDuplicate&&_this.props.preventDuplicate||preventDuplicate){var compareFunction=function compareFunction(item){return hasSpecifiedKey?item.key===key:item.message===message},inQueue=state.queue.findIndex(compareFunction)>-1,inView=state.snacks.findIndex(compareFunction)>-1;if(inQueue||inView)return state}return _this.handleDisplaySnack(_extends({},state,{queue:[].concat(state.queue,[snack])}))})),id},_this.handleDisplaySnack=function(state){return state.snacks.length>=_this.maxSnack?_this.handleDismissOldest(state):_this.processQueue(state)},_this.processQueue=function(state){var queue=state.queue,snacks=state.snacks;return queue.length>0?_extends({},state,{snacks:[].concat(snacks,[queue[0]]),queue:queue.slice(1,queue.length)}):state},_this.handleDismissOldest=function(state){if(state.snacks.some((function(item){return!item.open||item.requestClose})))return state;var popped=!1,ignore=!1;state.snacks.reduce((function(acc,current){return acc+(current.open&&current.persist?1:0)}),0)===_this.maxSnack&&(ignore=!0);var snacks=state.snacks.map((function(item){return popped||item.persist&&!ignore?_extends({},item):(popped=!0,item.entered?(item.onClose&&item.onClose(null,REASONS.MAXSNACK,item.key),_this.props.onClose&&_this.props.onClose(null,REASONS.MAXSNACK,item.key),_extends({},item,{open:!1})):_extends({},item,{requestClose:!0}))}));return _extends({},state,{snacks})},_this.handleEnteredSnack=function(node,isAppearing,key){if(!isDefined(key))throw new Error("handleEnteredSnack Cannot be called with undefined key");_this.setState((function(_ref){return{snacks:_ref.snacks.map((function(item){return item.key===key?_extends({},item,{entered:!0}):_extends({},item)}))}}))},_this.handleCloseSnack=function(event,reason,key){if(_this.props.onClose&&_this.props.onClose(event,reason,key),reason!==REASONS.CLICKAWAY){var shouldCloseAll=void 0===key;_this.setState((function(_ref2){var snacks=_ref2.snacks,queue=_ref2.queue;return{snacks:snacks.map((function(item){return shouldCloseAll||item.key===key?item.entered?_extends({},item,{open:!1}):_extends({},item,{requestClose:!0}):_extends({},item)})),queue:queue.filter((function(item){return item.key!==key}))}}))}},_this.closeSnackbar=function(key){var toBeClosed=_this.state.snacks.find((function(item){return item.key===key}));isDefined(key)&&toBeClosed&&toBeClosed.onClose&&toBeClosed.onClose(null,REASONS.INSTRUCTED,key),_this.handleCloseSnack(null,REASONS.INSTRUCTED,key)},_this.handleExitedSnack=function(event,key1,key2){var key=key1||key2;if(!isDefined(key))throw new Error("handleExitedSnack Cannot be called with undefined key");_this.setState((function(state){var newState=_this.processQueue(_extends({},state,{snacks:state.snacks.filter((function(item){return item.key!==key}))}));return 0===newState.queue.length?newState:_this.handleDismissOldest(newState)}))},_this.state={snacks:[],queue:[],contextValue:{enqueueSnackbar:_this.enqueueSnackbar.bind(_assertThisInitialized(_this)),closeSnackbar:_this.closeSnackbar.bind(_assertThisInitialized(_this))}},_this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}(SnackbarProvider,_Component),SnackbarProvider.prototype.render=function render(){var _this2=this,contextValue=this.state.contextValue,_this$props=this.props,iconVariant=_this$props.iconVariant,_this$props$dense=_this$props.dense,dense=void 0===_this$props$dense?DEFAULTS.dense:_this$props$dense,_this$props$hideIconV=_this$props.hideIconVariant,hideIconVariant=void 0===_this$props$hideIconV?DEFAULTS.hideIconVariant:_this$props$hideIconV,domRoot=_this$props.domRoot,children=_this$props.children,_this$props$classes=_this$props.classes,classes=void 0===_this$props$classes?{}:_this$props$classes,props=_objectWithoutPropertiesLoose(_this$props,["maxSnack","preventDuplicate","variant","anchorOrigin","iconVariant","dense","hideIconVariant","domRoot","children","classes"]),categ=this.state.snacks.reduce((function(acc,current){var _extends2,category=function originKeyExtractor(anchor){return""+capitalise(anchor.vertical)+capitalise(anchor.horizontal)}(current.anchorOrigin),existingOfCategory=acc[category]||[];return _extends({},acc,((_extends2={})[category]=[].concat(existingOfCategory,[current]),_extends2))}),{}),snackbars=Object.keys(categ).map((function(origin){var snacks=categ[origin];return react.createElement(SnackbarContainer$1,{key:origin,dense,anchorOrigin:snacks[0].anchorOrigin,className:clsx_m(classes.containerRoot,classes[transformer_toContainerAnchorOrigin(origin)])},snacks.map((function(snack){return react.createElement(SnackbarItem,Object.assign({},props,{key:snack.key,snack,dense,iconVariant,hideIconVariant,classes:omitContainerKeys(classes),onClose:_this2.handleCloseSnack,onExited:createChainedFunction([_this2.handleExitedSnack,_this2.props.onExited]),onEntered:createChainedFunction([_this2.handleEnteredSnack,_this2.props.onEntered])}))})))}));return react.createElement(SnackbarContext.Provider,{value:contextValue},children,domRoot?(0,react_dom.createPortal)(snackbars,domRoot):snackbars)},function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(SnackbarProvider,[{key:"maxSnack",get:function get(){return this.props.maxSnack||DEFAULTS.maxSnack}}]),SnackbarProvider}(react.Component),useSnackbar=function(){return(0,react.useContext)(SnackbarContext)}}}]);