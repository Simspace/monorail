"use strict";(self.webpackChunk_monorail_storybook=self.webpackChunk_monorail_storybook||[]).push([[3287],{"../../node_modules/@mui/x-date-pickers/YearCalendar/YearCalendar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>YearCalendar});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/clsx/dist/clsx.mjs"),useTheme=__webpack_require__("../../node_modules/@mui/system/esm/useTheme.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),composeClasses=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useControlled=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/@mui/utils/esm/useControlled/useControlled.js"),useEventCallback=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"),useForkRef=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),colorManipulator=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/x-date-pickers/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");function getPickersYearUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPickersYear",slot)}const pickersYearClasses=(0,generateUtilityClasses.Z)("MuiPickersYear",["root","yearButton","selected","disabled"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["autoFocus","className","children","disabled","selected","value","tabIndex","onClick","onKeyDown","onFocus","onBlur","aria-current","yearsPerRow"],PickersYearRoot=(0,styled.ZP)("div",{name:"MuiPickersYear",slot:"Root",overridesResolver:(_,styles)=>[styles.root]})((({ownerState})=>({flexBasis:3===ownerState.yearsPerRow?"33.3%":"25%",display:"flex",alignItems:"center",justifyContent:"center"}))),PickersYearButton=(0,styled.ZP)("button",{name:"MuiPickersYear",slot:"YearButton",overridesResolver:(_,styles)=>[styles.yearButton,{[`&.${pickersYearClasses.disabled}`]:styles.disabled},{[`&.${pickersYearClasses.selected}`]:styles.selected}]})((({theme})=>(0,esm_extends.Z)({color:"unset",backgroundColor:"transparent",border:0,outline:0},theme.typography.subtitle1,{margin:"6px 0",height:36,width:72,borderRadius:18,cursor:"pointer","&:focus":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})`:(0,colorManipulator.Fq)(theme.palette.action.active,theme.palette.action.focusOpacity)},"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.action.active,theme.palette.action.hoverOpacity)},"&:disabled":{cursor:"auto",pointerEvents:"none"},[`&.${pickersYearClasses.disabled}`]:{color:(theme.vars||theme).palette.text.secondary},[`&.${pickersYearClasses.selected}`]:{color:(theme.vars||theme).palette.primary.contrastText,backgroundColor:(theme.vars||theme).palette.primary.main,"&:focus, &:hover":{backgroundColor:(theme.vars||theme).palette.primary.dark}}}))),PickersYear=react.memo((function PickersYear(inProps){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPickersYear"}),{autoFocus,className,children,disabled,selected,value,tabIndex,onClick,onKeyDown,onFocus,onBlur,"aria-current":ariaCurrent}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ref=react.useRef(null),classes=(ownerState=>{const{disabled,selected,classes}=ownerState,slots={root:["root"],yearButton:["yearButton",disabled&&"disabled",selected&&"selected"]};return(0,composeClasses.Z)(slots,getPickersYearUtilityClass,classes)})(props);return react.useEffect((()=>{autoFocus&&ref.current.focus()}),[autoFocus]),(0,jsx_runtime.jsx)(PickersYearRoot,(0,esm_extends.Z)({className:(0,clsx.Z)(classes.root,className),ownerState:props},other,{children:(0,jsx_runtime.jsx)(PickersYearButton,{ref,disabled,type:"button",role:"radio",tabIndex:disabled?-1:tabIndex,"aria-current":ariaCurrent,"aria-checked":selected,onClick:event=>onClick(event,value),onKeyDown:event=>onKeyDown(event,value),onFocus:event=>onFocus(event,value),onBlur:event=>onBlur(event,value),className:classes.yearButton,ownerState:props,children})}))}));var useUtils=__webpack_require__("../../node_modules/@mui/x-date-pickers/internals/hooks/useUtils.js");function getYearCalendarUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiYearCalendar",slot)}(0,generateUtilityClasses.Z)("MuiYearCalendar",["root"]);var date_utils=__webpack_require__("../../node_modules/@mui/x-date-pickers/internals/utils/date-utils.js"),valueManagers=__webpack_require__("../../node_modules/@mui/x-date-pickers/internals/utils/valueManagers.js"),getDefaultReferenceDate=__webpack_require__("../../node_modules/@mui/x-date-pickers/internals/utils/getDefaultReferenceDate.js"),useValueWithTimezone=__webpack_require__("../../node_modules/@mui/x-date-pickers/internals/hooks/useValueWithTimezone.js"),dimensions=__webpack_require__("../../node_modules/@mui/x-date-pickers/internals/constants/dimensions.js");const YearCalendar_excluded=["autoFocus","className","value","defaultValue","referenceDate","disabled","disableFuture","disablePast","maxDate","minDate","onChange","readOnly","shouldDisableYear","disableHighlightToday","onYearFocus","hasFocus","onFocusedViewChange","yearsPerRow","timezone","gridLabelId"];const YearCalendarRoot=(0,styled.ZP)("div",{name:"MuiYearCalendar",slot:"Root",overridesResolver:(props,styles)=>styles.root})({display:"flex",flexDirection:"row",flexWrap:"wrap",overflowY:"auto",height:"100%",padding:"0 4px",width:dimensions.Pl,maxHeight:dimensions.uK,boxSizing:"border-box",position:"relative"}),YearCalendar=react.forwardRef((function YearCalendar(inProps,ref){const props=function useYearCalendarDefaultizedProps(props,name){var _themeProps$yearsPerR;const utils=(0,useUtils.nB)(),defaultDates=(0,useUtils.PP)(),themeProps=(0,useThemeProps.Z)({props,name});return(0,esm_extends.Z)({disablePast:!1,disableFuture:!1},themeProps,{yearsPerRow:null!=(_themeProps$yearsPerR=themeProps.yearsPerRow)?_themeProps$yearsPerR:3,minDate:(0,date_utils.US)(utils,themeProps.minDate,defaultDates.minDate),maxDate:(0,date_utils.US)(utils,themeProps.maxDate,defaultDates.maxDate)})}(inProps,"MuiYearCalendar"),{autoFocus,className,value:valueProp,defaultValue,referenceDate:referenceDateProp,disabled,disableFuture,disablePast,maxDate,minDate,onChange,readOnly,shouldDisableYear,disableHighlightToday,onYearFocus,hasFocus,onFocusedViewChange,yearsPerRow,timezone:timezoneProp,gridLabelId}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,YearCalendar_excluded),{value,handleValueChange,timezone}=(0,useValueWithTimezone.m)({name:"YearCalendar",timezone:timezoneProp,value:valueProp,defaultValue,onChange,valueManager:valueManagers.h}),now=(0,useUtils.mX)(timezone),theme=(0,useTheme.Z)(),utils=(0,useUtils.nB)(),referenceDate=react.useMemo((()=>valueManagers.h.getInitialReferenceValue({value,utils,props,timezone,referenceDate:referenceDateProp,granularity:getDefaultReferenceDate.Kn.year})),[]),ownerState=props,classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getYearCalendarUtilityClass,classes)})(ownerState),todayYear=react.useMemo((()=>utils.getYear(now)),[utils,now]),selectedYear=react.useMemo((()=>null!=value?utils.getYear(value):disableHighlightToday?null:utils.getYear(referenceDate)),[value,utils,disableHighlightToday,referenceDate]),[focusedYear,setFocusedYear]=react.useState((()=>selectedYear||todayYear)),[internalHasFocus,setInternalHasFocus]=(0,useControlled.Z)({name:"YearCalendar",state:"hasFocus",controlled:hasFocus,default:null!=autoFocus&&autoFocus}),changeHasFocus=(0,useEventCallback.Z)((newHasFocus=>{setInternalHasFocus(newHasFocus),onFocusedViewChange&&onFocusedViewChange(newHasFocus)})),isYearDisabled=react.useCallback((dateToValidate=>{if(disablePast&&utils.isBeforeYear(dateToValidate,now))return!0;if(disableFuture&&utils.isAfterYear(dateToValidate,now))return!0;if(minDate&&utils.isBeforeYear(dateToValidate,minDate))return!0;if(maxDate&&utils.isAfterYear(dateToValidate,maxDate))return!0;if(!shouldDisableYear)return!1;const yearToValidate=utils.startOfYear(dateToValidate);return shouldDisableYear(yearToValidate)}),[disableFuture,disablePast,maxDate,minDate,now,shouldDisableYear,utils]),handleYearSelection=(0,useEventCallback.Z)(((event,year)=>{if(readOnly)return;const newDate=utils.setYear(null!=value?value:referenceDate,year);handleValueChange(newDate)})),focusYear=(0,useEventCallback.Z)((year=>{isYearDisabled(utils.setYear(null!=value?value:referenceDate,year))||(setFocusedYear(year),changeHasFocus(!0),null==onYearFocus||onYearFocus(year))}));react.useEffect((()=>{setFocusedYear((prevFocusedYear=>null!==selectedYear&&prevFocusedYear!==selectedYear?selectedYear:prevFocusedYear))}),[selectedYear]);const handleKeyDown=(0,useEventCallback.Z)(((event,year)=>{switch(event.key){case"ArrowUp":focusYear(year-yearsPerRow),event.preventDefault();break;case"ArrowDown":focusYear(year+yearsPerRow),event.preventDefault();break;case"ArrowLeft":focusYear(year+("ltr"===theme.direction?-1:1)),event.preventDefault();break;case"ArrowRight":focusYear(year+("ltr"===theme.direction?1:-1)),event.preventDefault()}})),handleYearFocus=(0,useEventCallback.Z)(((event,year)=>{focusYear(year)})),handleYearBlur=(0,useEventCallback.Z)(((event,year)=>{focusedYear===year&&changeHasFocus(!1)})),scrollerRef=react.useRef(null),handleRef=(0,useForkRef.Z)(ref,scrollerRef);return react.useEffect((()=>{if(autoFocus||null===scrollerRef.current)return;const tabbableButton=scrollerRef.current.querySelector('[tabindex="0"]');if(!tabbableButton)return;const offsetHeight=tabbableButton.offsetHeight,offsetTop=tabbableButton.offsetTop,clientHeight=scrollerRef.current.clientHeight,scrollTop=scrollerRef.current.scrollTop,elementBottom=offsetTop+offsetHeight;offsetHeight>clientHeight||offsetTop<scrollTop||(scrollerRef.current.scrollTop=elementBottom-clientHeight/2-offsetHeight/2)}),[autoFocus]),(0,jsx_runtime.jsx)(YearCalendarRoot,(0,esm_extends.Z)({ref:handleRef,className:(0,clsx.Z)(classes.root,className),ownerState,role:"radiogroup","aria-labelledby":gridLabelId},other,{children:utils.getYearRange(minDate,maxDate).map((year=>{const yearNumber=utils.getYear(year),isSelected=yearNumber===selectedYear,isDisabled=disabled||isYearDisabled(year);return(0,jsx_runtime.jsx)(PickersYear,{selected:isSelected,value:yearNumber,onClick:handleYearSelection,onKeyDown:handleKeyDown,autoFocus:internalHasFocus&&yearNumber===focusedYear,disabled:isDisabled,tabIndex:yearNumber===focusedYear?0:-1,onFocus:handleYearFocus,onBlur:handleYearBlur,"aria-current":todayYear===yearNumber?"date":void 0,yearsPerRow,children:utils.format(year,"year")},utils.format(year,"year"))}))}))}))},"../../node_modules/@mui/x-date-pickers/node_modules/@mui/utils/esm/useForkRef/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useForkRef});var react=__webpack_require__("../../node_modules/react/index.js");function useForkRef(...refs){return react.useMemo((()=>refs.every((ref=>null==ref))?null:instance=>{refs.forEach((ref=>{!function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}(ref,instance)}))}),refs)}},"./src/YearPicker/YearPicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>YearPicker_stories});var react=__webpack_require__("../../node_modules/react/index.js");const YearCalendar_YearCalendar=__webpack_require__("../../node_modules/@mui/x-date-pickers/YearCalendar/YearCalendar.js").i;try{YearCalendar_YearCalendar.displayName="YearCalendar",YearCalendar_YearCalendar.__docgenInfo={description:"Demos:\n\n[Year Calendar](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-date-and-time-date-yearpicker--default)",displayName:"YearCalendar",props:{autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"className applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<YearCalendarClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:null,description:"If `true` picker is disabled",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The selected value.\nUsed when the component is controlled.",name:"value",required:!1,type:{name:"TDate"}},defaultValue:{defaultValue:null,description:"The default selected value.\nUsed when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"TDate"}},referenceDate:{defaultValue:{value:"The closest valid year using the validation props, except callbacks such as `shouldDisableYear`."},description:"The date used to generate the new value when both `value` and `defaultValue` are empty.",name:"referenceDate",required:!1,type:{name:"TDate"}},readOnly:{defaultValue:null,description:"If `true` picker is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},disableHighlightToday:{defaultValue:{value:"false"},description:"If `true`, today's date is rendering without highlighting with circle.",name:"disableHighlightToday",required:!1,type:{name:"boolean"}},hasFocus:{defaultValue:null,description:"",name:"hasFocus",required:!1,type:{name:"boolean"}},gridLabelId:{defaultValue:null,description:"",name:"gridLabelId",required:!1,type:{name:"string"}},yearsPerRow:{defaultValue:{value:"3"},description:"Years rendered per row.",name:"yearsPerRow",required:!1,type:{name:"3 | 4"}},shouldDisableYear:{defaultValue:null,description:"Disable specific year.\n@template TDate\n@param year The year to test.\n@returns If `true`, the year will be disabled.",name:"shouldDisableYear",required:!1,type:{name:"(year: TDate) => boolean"}},maxDate:{defaultValue:null,description:"Maximal selectable date.",name:"maxDate",required:!1,type:{name:"TDate"}},minDate:{defaultValue:null,description:"Minimal selectable date.",name:"minDate",required:!1,type:{name:"TDate"}},disablePast:{defaultValue:{value:"false"},description:"If `true`, disable values before the current date for date components, time for time components and both for date time components.",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:{value:"false"},description:"If `true`, disable values after the current date for date components, time for time components and both for date time components.",name:"disableFuture",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/YearCalendar/YearCalendar.tsx#YearCalendar"]={docgenInfo:YearCalendar_YearCalendar.__docgenInfo,name:"YearCalendar",path:"../components/src/YearCalendar/YearCalendar.tsx#YearCalendar"})}catch(__react_docgen_typescript_loader_error){}try{getYearCalendarUtilityClass.displayName="getYearCalendarUtilityClass",getYearCalendarUtilityClass.__docgenInfo={description:"",displayName:"getYearCalendarUtilityClass",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\ncontaining the results of that search, or null if no matches are found.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string or regular expression to search for.\n@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue An object that supports searching for and replacing matches within a string.\n@param replaceValue The replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[]) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[]) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@deprecated A legacy feature for browser compatibility\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition – length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:"Matches a string with a regular expression, and returns an iterable of matches\ncontaining the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.",name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},replaceAll:{defaultValue:null,description:"Replace all instances of a substring in a string, using a regular expression or search string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.",name:"replaceAll",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},at:{defaultValue:null,description:"Returns a new String consisting of the single UTF-16 code unit located at the specified index.\n@param index The zero-based index of the desired code unit. A negative index will count back from the last item.",name:"at",required:!0,type:{name:"(index: number) => string"}},"__@iterator@82":{defaultValue:null,description:"Iterator",name:"__@iterator@82",required:!0,type:{name:"() => IterableIterator<string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/YearCalendar/YearCalendar.tsx#getYearCalendarUtilityClass"]={docgenInfo:getYearCalendarUtilityClass.__docgenInfo,name:"getYearCalendarUtilityClass",path:"../components/src/YearCalendar/YearCalendar.tsx#getYearCalendarUtilityClass"})}catch(__react_docgen_typescript_loader_error){}var storybook=__webpack_require__("./src/helpers/storybook.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const YearPicker_stories={title:"Inputs/Date and Time/Date/YearCalendar",component:YearCalendar_YearCalendar},Template=(0,storybook.yg)((args=>{const minDate=new Date("2020-01-01T00:00:00.000"),maxDate=new Date("2034-01-01T00:00:00.000"),[date,setDate]=react.useState(new Date("2021-01-01T12:34:00.000Z"));return(0,jsx_runtime.jsx)(YearCalendar_YearCalendar,{value:date,shouldDisableYear:()=>!1,minDate,maxDate,onChange:newDate=>setDate(newDate),...args})}),{muiName:"MuiYearCalendar"}),Default=(0,storybook.yg)(Template);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"story(Template)",...Default.parameters?.docs?.source},description:{story:"`YearCalendar` is a low-level component for picking a year",...Default.parameters?.docs?.description}}};const __namedExportsOrder=["Default"];try{Default.displayName="Default",Default.__docgenInfo={description:"`YearCalendar` is a low-level component for picking a year",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/YearPicker/YearPicker.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/YearPicker/YearPicker.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{yg:()=>story});var light=__webpack_require__("../themes/src/meteor/theme/light.ts");const isNonEmptyString=x=>(x=>"string"==typeof x)(x)&&x.length>0;let A11yElement=function(A11yElement){return A11yElement.Root="#root",A11yElement.Component="#root > *",A11yElement.Modal=".MuiDialog-root",A11yElement.Popover=".MuiPopover-root",A11yElement.Drawer=".MuiDrawer-root",A11yElement}({});A11yElement.Root,A11yElement.Component;function story(Template,{args,argTypes,parameters,storyName,muiName}={}){let themeProps={};muiName&&(themeProps=light.D4.components?.[muiName]?.defaultProps);const NewStory=Template.bind({});return NewStory.args={...themeProps,...Template.args,...args},NewStory.argTypes={...Template.argTypes,...argTypes},NewStory.parameters={...Template.parameters,...parameters},isNonEmptyString(storyName)&&(NewStory.storyName=storyName),NewStory}}}]);