"use strict";(self.webpackChunk_monorail_storybook=self.webpackChunk_monorail_storybook||[]).push([[7042],{"./src/ScopedCssBaseline/ScopedCssBaseline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ScopedCssBaseline_stories});var react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("../../node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("../../node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),CssBaseline=__webpack_require__("../../node_modules/@mui/material/CssBaseline/CssBaseline.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function scopedCssBaselineClasses_getScopedCssBaselineUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiScopedCssBaseline",slot)}(0,generateUtilityClasses.Z)("MuiScopedCssBaseline",["root"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ScopedCssBaselineRoot=(0,styled.ZP)("div",{name:"MuiScopedCssBaseline",slot:"Root",overridesResolver:(props,styles)=>styles.root})((0,memoTheme.Z)((({theme})=>{const colorSchemeStyles={};return theme.colorSchemes&&Object.entries(theme.colorSchemes).forEach((([key,scheme])=>{const selector=theme.getColorSchemeSelector(key);selector.startsWith("@")?colorSchemeStyles[selector]={colorScheme:scheme.palette?.mode}:colorSchemeStyles[`&${selector.replace(/\s*&/,"")}`]={colorScheme:scheme.palette?.mode}})),{...(0,CssBaseline.dy)(theme,!1),...(0,CssBaseline.d1)(theme),"& *, & *::before, & *::after":{boxSizing:"inherit"},"& strong, & b":{fontWeight:theme.typography.fontWeightBold},variants:[{props:{enableColorScheme:!0},style:theme.vars?colorSchemeStyles:{colorScheme:theme.palette.mode}}]}}))),ScopedCssBaseline_ScopedCssBaseline_ScopedCssBaseline=react.forwardRef((function ScopedCssBaseline(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiScopedCssBaseline"}),{className,component="div",enableColorScheme,...other}=props,ownerState={...props,component},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},scopedCssBaselineClasses_getScopedCssBaselineUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ScopedCssBaselineRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ref,ownerState,...other})}));try{ScopedCssBaseline_ScopedCssBaseline_ScopedCssBaseline.displayName="ScopedCssBaseline",ScopedCssBaseline_ScopedCssBaseline_ScopedCssBaseline.__docgenInfo={description:"\nDemos:\n\n- [Css baseline](https://mui.com/material-ui/react-css-baseline/)\n\nAPI:\n\n- [ScopedCssBaseline API](https://mui.com/material-ui/api/scoped-css-baseline/)",displayName:"ScopedCssBaseline",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ScopedCssBaselineClasses> & Partial<ClassNameMap<never>>"}},enableColorScheme:{defaultValue:null,description:"Enable `color-scheme` CSS property to use `theme.palette.mode`.\nFor more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme\nFor browser support, check out https://caniuse.com/?search=color-scheme",name:"enableColorScheme",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/ScopedCssBaseline/ScopedCssBaseline.tsx#ScopedCssBaseline"]={docgenInfo:ScopedCssBaseline_ScopedCssBaseline_ScopedCssBaseline.__docgenInfo,name:"ScopedCssBaseline",path:"../components/src/ScopedCssBaseline/ScopedCssBaseline.tsx#ScopedCssBaseline"})}catch(__react_docgen_typescript_loader_error){}try{getScopedCssBaselineUtilityClass.displayName="getScopedCssBaselineUtilityClass",getScopedCssBaselineUtilityClass.__docgenInfo={description:"",displayName:"getScopedCssBaselineUtilityClass",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\ncontaining the results of that search, or null if no matches are found.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string or regular expression to search for.\n@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue An object that supports searching for and replacing matches within a string.\n@param replaceValue The replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[]) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[]) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@deprecated A legacy feature for browser compatibility\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition – length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:"Matches a string with a regular expression, and returns an iterable of matches\ncontaining the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.",name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},replaceAll:{defaultValue:null,description:"Replace all instances of a substring in a string, using a regular expression or search string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.",name:"replaceAll",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},at:{defaultValue:null,description:"Returns a new String consisting of the single UTF-16 code unit located at the specified index.\n@param index The zero-based index of the desired code unit. A negative index will count back from the last item.",name:"at",required:!0,type:{name:"(index: number) => string"}},"__@iterator@84":{defaultValue:null,description:"Iterator",name:"__@iterator@84",required:!0,type:{name:"() => IterableIterator<string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/ScopedCssBaseline/ScopedCssBaseline.tsx#getScopedCssBaselineUtilityClass"]={docgenInfo:getScopedCssBaselineUtilityClass.__docgenInfo,name:"getScopedCssBaselineUtilityClass",path:"../components/src/ScopedCssBaseline/ScopedCssBaseline.tsx#getScopedCssBaselineUtilityClass"})}catch(__react_docgen_typescript_loader_error){}var storybook=__webpack_require__("./src/helpers/storybook.ts");const ScopedCssBaseline_stories={title:"Utils/ScopedCssBaseline",component:ScopedCssBaseline_ScopedCssBaseline_ScopedCssBaseline},Template=(0,storybook.yg)((args=>(0,jsx_runtime.jsx)(ScopedCssBaseline_ScopedCssBaseline_ScopedCssBaseline,{...args,children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("code",{children:"ScopedCssBaseline"})," is useful when you need a CSS reset/normalization at a level in the app that is more scoped. You might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the ScopedCssBaseline component."]})})),{args:{},muiName:"MuiScopedCssBaseline"}),Default=(0,storybook.yg)(Template);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"story(Template)",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/helpers/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{yg:()=>story});var light=__webpack_require__("../themes/src/meteor/theme/light.ts");const isNonEmptyString=x=>(x=>"string"==typeof x)(x)&&x.length>0;let A11yElement=function(A11yElement){return A11yElement.Root="#root",A11yElement.Component="#root > *",A11yElement.Modal=".MuiDialog-root",A11yElement.Popover=".MuiPopover-root",A11yElement.Drawer=".MuiDrawer-root",A11yElement}({});A11yElement.Root,A11yElement.Component;function story(Template,{args,argTypes,parameters,storyName,muiName}={}){let themeProps={};muiName&&(themeProps=light.D4.components?.[muiName]?.defaultProps);const NewStory=Template.bind({});return NewStory.args={...themeProps,...Template.args,...args},NewStory.argTypes={...Template.argTypes,...argTypes},NewStory.parameters={...Template.parameters,...parameters},isNonEmptyString(storyName)&&(NewStory.storyName=storyName),NewStory}}}]);