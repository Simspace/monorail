"use strict";(self.webpackChunk_monorail_storybook=self.webpackChunk_monorail_storybook||[]).push([[6522],{"../../node_modules/@mui/material/AlertTitle/AlertTitle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AlertTitle_AlertTitle});var esm_extends=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),Typography=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAlertTitleUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiAlertTitle",slot)}(0,generateUtilityClasses.Z)("MuiAlertTitle",["root"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className"],AlertTitleRoot=(0,styled.ZP)(Typography.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme})=>({fontWeight:theme.typography.fontWeightMedium,marginTop:-2}))),AlertTitle_AlertTitle=react.forwardRef((function AlertTitle(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAlertTitle"}),{className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=props,classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getAlertTitleUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(AlertTitleRoot,(0,esm_extends.Z)({gutterBottom:!0,component:"div",ownerState,ref,className:(0,clsx_m.Z)(classes.root,className)},other))}))},"../../node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),_mui_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_mui_base__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),_typographyClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/Typography/typographyClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Typography(inProps,ref){const themeProps=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,_mui_system__WEBPACK_IMPORTED_MODULE_8__.Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_3__.Z)(slots,_typographyClasses__WEBPACK_IMPORTED_MODULE_4__.f,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TypographyRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({as:Component,ref,ownerState,className:(0,clsx__WEBPACK_IMPORTED_MODULE_10__.Z)(classes.root,className)},other))}))},"../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./src/AlertTitle/AlertTitle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _monorail_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../components/src/AlertTitle/AlertTitle.tsx"),_helpers_storybook_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/storybook.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/Alert/AlertTitle",component:_monorail_components__WEBPACK_IMPORTED_MODULE_3__.Cd,parameters:{docs:{description:{component:'Metadata for AlertTitle stories - update/extend as needed\nThis is intended to be exported as story-level metadata from the main .stories.tsx file, like:\n"export default { ...defaultStoryMeta } // Add/extend as needed'}}}},Template=(0,_helpers_storybook_js__WEBPACK_IMPORTED_MODULE_1__.yg)((args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_monorail_components__WEBPACK_IMPORTED_MODULE_3__.Cd,{...args})),{args:{children:"Alert Title"},muiName:"MuiAlertTitle"}),Default=(0,_helpers_storybook_js__WEBPACK_IMPORTED_MODULE_1__.yg)(Template);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"story(Template)",...Default.parameters?.docs?.source},description:{story:"Default story for AlertTitle (edit/remove by hand if needed)",...Default.parameters?.docs?.description}}};const __namedExportsOrder=["Default"];try{AlertTitlestories.displayName="AlertTitlestories",AlertTitlestories.__docgenInfo={description:'Metadata for AlertTitle stories - update/extend as needed\nThis is intended to be exported as story-level metadata from the main .stories.tsx file, like:\n"export default { ...defaultStoryMeta } // Add/extend as needed',displayName:"AlertTitlestories",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AlertTitle/AlertTitle.stories.tsx#AlertTitlestories"]={docgenInfo:AlertTitlestories.__docgenInfo,name:"AlertTitlestories",path:"src/AlertTitle/AlertTitle.stories.tsx#AlertTitlestories"})}catch(__react_docgen_typescript_loader_error){}try{Default.displayName="Default",Default.__docgenInfo={description:"Default story for AlertTitle (edit/remove by hand if needed)",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AlertTitle/AlertTitle.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/AlertTitle/AlertTitle.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"../components/src/AlertTitle/AlertTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>AlertTitle});const AlertTitle=__webpack_require__("../../node_modules/@mui/material/AlertTitle/AlertTitle.js").Z;try{AlertTitle.displayName="AlertTitle",AlertTitle.__docgenInfo={description:"\nDemos:\n\n- [Alert](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/feedback-alert--default)\n- [Alert (MUI)](https://mui.com/material-ui/react-alert/)\n\nAPI:\n\n- [AlertTitle API](https://mui.com/material-ui/api/alert-title/)",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},slot:{defaultValue:null,description:"",name:"slot",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},dangerouslySetInnerHTML:{defaultValue:null,description:"",name:"dangerouslySetInnerHTML",required:!1,type:{name:"{ __html: string; }"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:'"no" | "yes"'}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}},accessKey:{defaultValue:null,description:"",name:"accessKey",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"Booleanish"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},spellCheck:{defaultValue:null,description:"",name:"spellCheck",required:!1,type:{name:"Booleanish"}},radioGroup:{defaultValue:null,description:"",name:"radioGroup",required:!1,type:{name:"string"}},about:{defaultValue:null,description:"",name:"about",required:!1,type:{name:"string"}},datatype:{defaultValue:null,description:"",name:"datatype",required:!1,type:{name:"string"}},inlist:{defaultValue:null,description:"",name:"inlist",required:!1,type:{name:"any"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},property:{defaultValue:null,description:"",name:"property",required:!1,type:{name:"string"}},resource:{defaultValue:null,description:"",name:"resource",required:!1,type:{name:"string"}},typeof:{defaultValue:null,description:"",name:"typeof",required:!1,type:{name:"string"}},vocab:{defaultValue:null,description:"",name:"vocab",required:!1,type:{name:"string"}},autoCapitalize:{defaultValue:null,description:"",name:"autoCapitalize",required:!1,type:{name:"string"}},autoCorrect:{defaultValue:null,description:"",name:"autoCorrect",required:!1,type:{name:"string"}},autoSave:{defaultValue:null,description:"",name:"autoSave",required:!1,type:{name:"string"}},itemProp:{defaultValue:null,description:"",name:"itemProp",required:!1,type:{name:"string"}},itemScope:{defaultValue:null,description:"",name:"itemScope",required:!1,type:{name:"boolean"}},itemType:{defaultValue:null,description:"",name:"itemType",required:!1,type:{name:"string"}},itemID:{defaultValue:null,description:"",name:"itemID",required:!1,type:{name:"string"}},itemRef:{defaultValue:null,description:"",name:"itemRef",required:!1,type:{name:"string"}},results:{defaultValue:null,description:"",name:"results",required:!1,type:{name:"number"}},security:{defaultValue:null,description:"",name:"security",required:!1,type:{name:"string"}},unselectable:{defaultValue:null,description:"",name:"unselectable",required:!1,type:{name:'"off" | "on"'}},inputMode:{defaultValue:null,description:"Hints at the type of data that might be entered by the user while editing the element or its contents\n@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute",name:"inputMode",required:!1,type:{name:'"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal"'}},is:{defaultValue:null,description:"Specify that a standard HTML element should behave like a defined custom built-in element\n@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is",name:"is",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/AlertTitle/AlertTitle.tsx#AlertTitle"]={docgenInfo:AlertTitle.__docgenInfo,name:"AlertTitle",path:"../components/src/AlertTitle/AlertTitle.tsx#AlertTitle"})}catch(__react_docgen_typescript_loader_error){}try{getAlertTitleUtilityClass.displayName="getAlertTitleUtilityClass",getAlertTitleUtilityClass.__docgenInfo={description:"",displayName:"getAlertTitleUtilityClass",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\ncontaining the results of that search, or null if no matches are found.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string or regular expression to search for.\n@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue An object that supports searching for and replacing matches within a string.\n@param replaceValue The replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[]) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[]) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@deprecated A legacy feature for browser compatibility\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition – length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:"Matches a string with a regular expression, and returns an iterable of matches\ncontaining the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.",name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},replaceAll:{defaultValue:null,description:"Replace all instances of a substring in a string, using a regular expression or search string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.",name:"replaceAll",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},at:{defaultValue:null,description:"Returns a new String consisting of the single UTF-16 code unit located at the specified index.\n@param index The zero-based index of the desired code unit. A negative index will count back from the last item.",name:"at",required:!0,type:{name:"(index: number) => string"}},"__@iterator@75":{defaultValue:null,description:"Iterator",name:"__@iterator@75",required:!0,type:{name:"() => IterableIterator<string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/AlertTitle/AlertTitle.tsx#getAlertTitleUtilityClass"]={docgenInfo:getAlertTitleUtilityClass.__docgenInfo,name:"getAlertTitleUtilityClass",path:"../components/src/AlertTitle/AlertTitle.tsx#getAlertTitleUtilityClass"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u3:()=>getRawColorObject,pQ:()=>isMeteorTheme,yg:()=>story});var light=__webpack_require__("../themes/src/classic/theme/light.ts"),dark=__webpack_require__("../themes/src/classic/theme/dark.ts"),theme_dark=__webpack_require__("../themes/src/meteor/theme/dark.ts"),theme_light=__webpack_require__("../themes/src/meteor/theme/light.ts"),theme=__webpack_require__("../themes/src/mui/theme.ts"),pcte_theme_dark=__webpack_require__("../themes/src/pcte/theme/dark.tsx"),pcte_theme_light=__webpack_require__("../themes/src/pcte/theme/light.tsx");let ThemeName=function(ThemeName){return ThemeName.ClassicLight="classicLight",ThemeName.ClassicDark="classicDark",ThemeName.MUILight="muiLight",ThemeName.MUIDark="muiDark",ThemeName.PCTELight="pcteLight",ThemeName.PCTEDark="pcteDark",ThemeName.MeteorLight="meteorLight",ThemeName.MeteorDark="meteorDark",ThemeName}({});const isNonEmptyString=x=>(x=>"string"==typeof x)(x)&&x.length>0;let A11yElement=function(A11yElement){return A11yElement.Root="#root",A11yElement.Component="#root > *",A11yElement.Modal=".MuiDialog-root",A11yElement.Popover=".MuiPopover-root",A11yElement.Drawer=".MuiDrawer-root",A11yElement}({});A11yElement.Root,A11yElement.Component;function story(Template,{args,argTypes,parameters,storyName,muiName}={}){let themeProps={};muiName&&(themeProps=light.I$.components?.[muiName]?.defaultProps);const NewStory=Template.bind({});return NewStory.args={...themeProps,...Template.args,...args},NewStory.argTypes={...Template.argTypes,...argTypes},NewStory.parameters={...Template.parameters,...parameters},isNonEmptyString(storyName)&&(NewStory.storyName=storyName),NewStory}const getRawColorObject=themeName=>{switch(themeName){case ThemeName.ClassicLight:return light.Yf;case ThemeName.ClassicDark:return dark.Yf;case ThemeName.MUILight:case ThemeName.MUIDark:return theme.Yf;case ThemeName.PCTELight:return pcte_theme_light.Yf;case ThemeName.PCTEDark:return pcte_theme_dark.Yf;case ThemeName.MeteorLight:return theme_light.Yf;case ThemeName.MeteorDark:return theme_dark.Yf}},isMeteorTheme=themeName=>themeName===ThemeName.MeteorLight||themeName===ThemeName.MeteorDark}}]);