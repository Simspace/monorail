"use strict";(self.webpackChunk_monorail_storybook=self.webpackChunk_monorail_storybook||[]).push([[3367],{"../../node_modules/@mui/material/useMediaQuery/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>material_useMediaQuery});var react=__webpack_require__("../../node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2),useEnhancedEffect=__webpack_require__("../../node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"),getThemeProps=__webpack_require__("../../node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),useThemeWithoutDefault=__webpack_require__("../../node_modules/@mui/system/esm/useThemeWithoutDefault/useThemeWithoutDefault.js");function useMediaQueryOld(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const[match,setMatch]=react.useState((()=>noSsr&&matchMedia?matchMedia(query).matches:ssrMatchMedia?ssrMatchMedia(query).matches:defaultMatches));return(0,useEnhancedEffect.Z)((()=>{if(!matchMedia)return;const queryList=matchMedia(query),updateMatch=()=>{setMatch(queryList.matches)};return updateMatch(),queryList.addEventListener("change",updateMatch),()=>{queryList.removeEventListener("change",updateMatch)}}),[query,matchMedia]),match}const maybeReactUseSyncExternalStore={...react_namespaceObject}.useSyncExternalStore;function useMediaQueryNew(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const getDefaultSnapshot=react.useCallback((()=>defaultMatches),[defaultMatches]),getServerSnapshot=react.useMemo((()=>{if(noSsr&&matchMedia)return()=>matchMedia(query).matches;if(null!==ssrMatchMedia){const{matches}=ssrMatchMedia(query);return()=>matches}return getDefaultSnapshot}),[getDefaultSnapshot,query,ssrMatchMedia,noSsr,matchMedia]),[getSnapshot,subscribe]=react.useMemo((()=>{if(null===matchMedia)return[getDefaultSnapshot,()=>()=>{}];const mediaQueryList=matchMedia(query);return[()=>mediaQueryList.matches,notify=>(mediaQueryList.addEventListener("change",notify),()=>{mediaQueryList.removeEventListener("change",notify)})]}),[getDefaultSnapshot,matchMedia,query]);return maybeReactUseSyncExternalStore(subscribe,getSnapshot,getServerSnapshot)}function unstable_createUseMediaQuery(params={}){const{themeId}=params;return function useMediaQuery(queryInput,options={}){let theme=(0,useThemeWithoutDefault.Z)();theme&&themeId&&(theme=theme[themeId]||theme);const supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches=!1,matchMedia=supportMatchMedia?window.matchMedia:null,ssrMatchMedia=null,noSsr=!1}=(0,getThemeProps.Z)({name:"MuiUseMediaQuery",props:options,theme});let query="function"==typeof queryInput?queryInput(theme):queryInput;query=query.replace(/^@media( ?)/m,"");return(void 0!==maybeReactUseSyncExternalStore?useMediaQueryNew:useMediaQueryOld)(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr)}}unstable_createUseMediaQuery();const material_useMediaQuery=unstable_createUseMediaQuery({themeId:__webpack_require__("../../node_modules/@mui/material/styles/identifier.js").Z})},"../../node_modules/@mui/material/utils/useEnhancedEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js").Z},"./src/Hidden/Hidden.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Deprecated:()=>Deprecated,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Hidden_stories});var react=__webpack_require__("../../node_modules/react/index.js"),getThemeProps=__webpack_require__("../../node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),useTheme=__webpack_require__("../../node_modules/@mui/material/styles/useTheme.js"),useEnhancedEffect=__webpack_require__("../../node_modules/@mui/material/utils/useEnhancedEffect.js"),useMediaQuery=__webpack_require__("../../node_modules/@mui/material/useMediaQuery/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const breakpointKeys=["xs","sm","md","lg","xl"],isWidthUp=(breakpoint,width,inclusive=!0)=>inclusive?breakpointKeys.indexOf(breakpoint)<=breakpointKeys.indexOf(width):breakpointKeys.indexOf(breakpoint)<breakpointKeys.indexOf(width),isWidthDown=(breakpoint,width,inclusive=!1)=>inclusive?breakpointKeys.indexOf(width)<=breakpointKeys.indexOf(breakpoint):breakpointKeys.indexOf(width)<breakpointKeys.indexOf(breakpoint);const Hidden_HiddenJs=((options={})=>Component=>{const{withTheme:withThemeOption=!1,noSSR=!1,initialWidth:initialWidthOption}=options;return function WithWidth(props){const contextTheme=(0,useTheme.Z)(),theme=props.theme||contextTheme,{initialWidth,width,...other}=(0,getThemeProps.Z)({theme,name:"MuiWithWidth",props}),[mountedState,setMountedState]=react.useState(!1);(0,useEnhancedEffect.Z)((()=>{setMountedState(!0)}),[]);const widthComputed=theme.breakpoints.keys.slice().reverse().reduce(((output,key)=>{const matches=(0,useMediaQuery.Z)(theme.breakpoints.up(key));return!output&&matches?key:output}),null),more={width:width||(mountedState||noSSR?widthComputed:void 0)||initialWidth||initialWidthOption,...withThemeOption?{theme}:{},...other};return void 0===more.width?null:(0,jsx_runtime.jsx)(Component,{...more})}})()((function HiddenJs(props){const{children,only,width}=props,theme=(0,useTheme.Z)();let visible=!0;if(only)if(Array.isArray(only))for(let i=0;i<only.length;i+=1){if(width===only[i]){visible=!1;break}}else only&&width===only&&(visible=!1);if(visible)for(let i=0;i<theme.breakpoints.keys.length;i+=1){const breakpoint=theme.breakpoints.keys[i],breakpointUp=props[`${breakpoint}Up`],breakpointDown=props[`${breakpoint}Down`];if(breakpointUp&&isWidthUp(breakpoint,width)||breakpointDown&&isWidthDown(breakpoint,width)){visible=!1;break}}return visible?(0,jsx_runtime.jsx)(react.Fragment,{children}):null}));var clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getHiddenCssUtilityClass(slot){return(0,generateUtilityClass.ZP)("PrivateHiddenCss",slot)}(0,generateUtilityClasses.Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const HiddenCssRoot=(0,styled.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((({theme,ownerState})=>{const hidden={display:"none"};return{...ownerState.breakpoints.map((({breakpoint,dir})=>"only"===dir?{[theme.breakpoints.only(breakpoint)]:hidden}:"up"===dir?{[theme.breakpoints.up(breakpoint)]:hidden}:{[theme.breakpoints.down(breakpoint)]:hidden})).reduce(((r,o)=>(Object.keys(o).forEach((k=>{r[k]=o[k]})),r)),{})}}));const Hidden_HiddenCss=function HiddenCss(props){const{children,className,only,...other}=props,theme=(0,useTheme.Z)(),breakpoints=[];for(let i=0;i<theme.breakpoints.keys.length;i+=1){const breakpoint=theme.breakpoints.keys[i],breakpointUp=other[`${breakpoint}Up`],breakpointDown=other[`${breakpoint}Down`];breakpointUp&&breakpoints.push({breakpoint,dir:"up"}),breakpointDown&&breakpoints.push({breakpoint,dir:"down"})}if(only){(Array.isArray(only)?only:[only]).forEach((breakpoint=>{breakpoints.push({breakpoint,dir:"only"})}))}const ownerState={...props,breakpoints},classes=(ownerState=>{const{classes,breakpoints}=ownerState,slots={root:["root",...breakpoints.map((({breakpoint,dir})=>"only"===dir?`${dir}${(0,capitalize.Z)(breakpoint)}`:`${breakpoint}${(0,capitalize.Z)(dir)}`))]};return(0,composeClasses.Z)(slots,getHiddenCssUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(HiddenCssRoot,{className:(0,clsx.Z)(classes.root,className),ownerState,children})};const Hidden_Hidden_Hidden=function Hidden(props){const{implementation="js",lgDown=!1,lgUp=!1,mdDown=!1,mdUp=!1,smDown=!1,smUp=!1,xlDown=!1,xlUp=!1,xsDown=!1,xsUp=!1,...other}=props;return"js"===implementation?(0,jsx_runtime.jsx)(Hidden_HiddenJs,{lgDown,lgUp,mdDown,mdUp,smDown,smUp,xlDown,xlUp,xsDown,xsUp,...other}):(0,jsx_runtime.jsx)(Hidden_HiddenCss,{lgDown,lgUp,mdDown,mdUp,smDown,smUp,xlDown,xlUp,xsDown,xsUp,...other})};try{Hidden_Hidden_Hidden.displayName="Hidden",Hidden_Hidden_Hidden.__docgenInfo={description:"Responsively hides children based on the selected implementation.\n\nDemos:\n\n- [Hidden](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/utils-hidden--default)\n- [Hidden (MUI)](https://mui.com/material-ui/react-hidden/)\n\nAPI:\n\n- [Hidden API](https://mui.com/material-ui/api/hidden/)",displayName:"Hidden",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Hidden/Hidden.tsx#Hidden"]={docgenInfo:Hidden_Hidden_Hidden.__docgenInfo,name:"Hidden",path:"../components/src/Hidden/Hidden.tsx#Hidden"})}catch(__react_docgen_typescript_loader_error){}var Typography=__webpack_require__("../components/src/Typography/Typography.tsx"),storybook=__webpack_require__("./src/helpers/storybook.ts");const Hidden_stories={title:"Utils/Hidden",component:Hidden_Hidden_Hidden},Template=(0,storybook.yg)((args=>(0,jsx_runtime.jsx)(Hidden_Hidden_Hidden,{...args})),{args:{children:"This content may be hidden at certain screen sizes."}}),Default=(0,storybook.yg)(Template),Deprecated=(0,storybook.yg)((()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(Typography.ZT,{children:["Use the ",(0,jsx_runtime.jsx)("code",{children:"sx"})," prop to replace"," ",(0,jsx_runtime.jsx)("code",{children:'implementation="css"'}),":"]}),(0,jsx_runtime.jsx)("pre",{children:"-<Hidden implementation=\"css\" xlUp><Paper /></Hidden>\n-<Hidden implementation=\"css\" xlUp><button /></Hidden>\n+<Paper sx={{ display: { xl: 'none', xs: 'block' } }} />\n+<Box component=\"button\" sx={{ display: { xl: 'none', xs: 'block' } }} />"}),(0,jsx_runtime.jsx)("pre",{children:"-<Hidden implementation=\"css\" mdDown><Paper /></Hidden>\n-<Hidden implementation=\"css\" mdDown><button /></Hidden>\n+<Paper sx={{ display: { xs: 'none', md: 'block' } }} />\n+<Box component=\"button\" sx={{ display: { xs: 'none', md: 'block' } }} />"}),(0,jsx_runtime.jsxs)(Typography.ZT,{children:["Use the ",(0,jsx_runtime.jsx)("code",{children:"useMediaQuery"})," hook to replace"," ",(0,jsx_runtime.jsx)("code",{children:'implementation="js"'}),":"]}),(0,jsx_runtime.jsx)("pre",{children:"-<Hidden implementation=\"js\" xlUp><Paper /></Hidden>\n+const hidden = useMediaQuery(theme => theme.breakpoints.up('xl'));\n+return hidden ? null : <Paper />;"})]})));Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"story(Template)",...Default.parameters?.docs?.source}}},Deprecated.parameters={...Deprecated.parameters,docs:{...Deprecated.parameters?.docs,source:{originalSource:"story<HiddenProps>(() => {\n  return <div>\n      <Typography>\n        Use the <code>sx</code> prop to replace{' '}\n        <code>implementation=\"css\"</code>:\n      </Typography>\n\n      <pre>\n        {`-<Hidden implementation=\"css\" xlUp><Paper /></Hidden>\n-<Hidden implementation=\"css\" xlUp><button /></Hidden>\n+<Paper sx={{ display: { xl: 'none', xs: 'block' } }} />\n+<Box component=\"button\" sx={{ display: { xl: 'none', xs: 'block' } }} />`}\n      </pre>\n\n      <pre>{`-<Hidden implementation=\"css\" mdDown><Paper /></Hidden>\n-<Hidden implementation=\"css\" mdDown><button /></Hidden>\n+<Paper sx={{ display: { xs: 'none', md: 'block' } }} />\n+<Box component=\"button\" sx={{ display: { xs: 'none', md: 'block' } }} />`}</pre>\n\n      <Typography>\n        Use the <code>useMediaQuery</code> hook to replace{' '}\n        <code>implementation=\"js\"</code>:\n      </Typography>\n\n      <pre>{`-<Hidden implementation=\"js\" xlUp><Paper /></Hidden>\n+const hidden = useMediaQuery(theme => theme.breakpoints.up('xl'));\n+return hidden ? null : <Paper />;`}</pre>\n    </div>;\n})",...Deprecated.parameters?.docs?.source},description:{story:"The `<Hidden>` component is deprecated, but was previously used to responsively hide or affect content based on screen size.\n\nThe approved way of doing this now is to use the system `sx` property, or `useMediaQuery`, as shown in this example.",...Deprecated.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Deprecated"];try{Deprecated.displayName="Deprecated",Deprecated.__docgenInfo={description:"The `<Hidden>` component is deprecated, but was previously used to responsively hide or affect content based on screen size.\n\nThe approved way of doing this now is to use the system `sx` property, or `useMediaQuery`, as shown in this example.",displayName:"Deprecated",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hidden/Hidden.stories.tsx#Deprecated"]={docgenInfo:Deprecated.__docgenInfo,name:"Deprecated",path:"src/Hidden/Hidden.stories.tsx#Deprecated"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{yg:()=>story});var light=__webpack_require__("../themes/src/meteor/theme/light.ts");const isNonEmptyString=x=>(x=>"string"==typeof x)(x)&&x.length>0;let A11yElement=function(A11yElement){return A11yElement.Root="#root",A11yElement.Component="#root > *",A11yElement.Modal=".MuiDialog-root",A11yElement.Popover=".MuiPopover-root",A11yElement.Drawer=".MuiDrawer-root",A11yElement}({});A11yElement.Root,A11yElement.Component;function story(Template,{args,argTypes,parameters,storyName,muiName}={}){let themeProps={};muiName&&(themeProps=light.D4.components?.[muiName]?.defaultProps);const NewStory=Template.bind({});return NewStory.args={...themeProps,...Template.args,...args},NewStory.argTypes={...Template.argTypes,...argTypes},NewStory.parameters={...Template.parameters,...parameters},isNonEmptyString(storyName)&&(NewStory.storyName=storyName),NewStory}}}]);