"use strict";(self.webpackChunk_monorail_storybook=self.webpackChunk_monorail_storybook||[]).push([[480],{"../../node_modules/@mui/x-data-grid/components/containers/GridToolbarContainer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>GridToolbarContainer});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/x-data-grid/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/x-data-grid/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@mui/x-data-grid/node_modules/clsx/dist/clsx.mjs"),_mui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/system/esm/styled.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_constants_gridClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/x-data-grid/constants/gridClasses.js"),_hooks_utils_useGridRootProps__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","children"],GridToolbarContainerRoot=(0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.Z)("div",{name:"MuiDataGrid",slot:"ToolbarContainer",overridesResolver:(_,styles)=>styles.toolbarContainer})((({theme})=>({display:"flex",alignItems:"center",flexWrap:"wrap",gap:theme.spacing(1),padding:theme.spacing(.5,.5,0)}))),GridToolbarContainer=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function GridToolbarContainer(props,ref){const{className,children}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__.Z)(props,_excluded),rootProps=(0,_hooks_utils_useGridRootProps__WEBPACK_IMPORTED_MODULE_6__.B)(),classes=(ownerState=>{const{classes}=ownerState;return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)({root:["toolbarContainer"]},_constants_gridClasses__WEBPACK_IMPORTED_MODULE_3__.d,classes)})(rootProps);return children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GridToolbarContainerRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.Z)(className,classes.root),ownerState:rootProps},other,{children})):null}))},"../../node_modules/@mui/x-data-grid/components/toolbar/GridToolbarDensitySelector.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>GridToolbarDensitySelector});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@mui/x-data-grid/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/x-data-grid/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@mui/utils/esm/useId/useId.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),_mui_material_MenuList__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@mui/material/MenuList/MenuList.js"),_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@mui/material/MenuItem/MenuItem.js"),_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js"),_hooks_features_density_densitySelector__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/x-data-grid/hooks/features/density/densitySelector.js"),_utils_keyboardUtils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@mui/x-data-grid/utils/keyboardUtils.js"),_hooks_utils_useGridApiContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/x-data-grid/hooks/utils/useGridApiContext.js"),_hooks_utils_useGridSelector__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js"),_menu_GridMenu__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@mui/x-data-grid/components/menu/GridMenu.js"),_hooks_utils_useGridRootProps__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js"),_constants_gridClasses__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/@mui/x-data-grid/constants/gridClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["onClick"],GridToolbarDensitySelector=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function GridToolbarDensitySelector(props,ref){var _rootProps$slotProps;const{onClick}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded),apiRef=(0,_hooks_utils_useGridApiContext__WEBPACK_IMPORTED_MODULE_3__.l)(),rootProps=(0,_hooks_utils_useGridRootProps__WEBPACK_IMPORTED_MODULE_4__.B)(),densityValue=(0,_hooks_utils_useGridSelector__WEBPACK_IMPORTED_MODULE_5__.P)(apiRef,_hooks_features_density_densitySelector__WEBPACK_IMPORTED_MODULE_6__.Jz),densityButtonId=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__.Z)(),densityMenuId=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__.Z)(),[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),buttonRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_8__.Z)(ref,buttonRef),densityOptions=[{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(rootProps.slots.densityCompactIcon,{}),label:apiRef.current.getLocaleText("toolbarDensityCompact"),value:"compact"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(rootProps.slots.densityStandardIcon,{}),label:apiRef.current.getLocaleText("toolbarDensityStandard"),value:"standard"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(rootProps.slots.densityComfortableIcon,{}),label:apiRef.current.getLocaleText("toolbarDensityComfortable"),value:"comfortable"}],startIcon=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{switch(densityValue){case"compact":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(rootProps.slots.densityCompactIcon,{});case"comfortable":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(rootProps.slots.densityComfortableIcon,{});default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(rootProps.slots.densityStandardIcon,{})}}),[densityValue,rootProps]);if(rootProps.disableDensitySelector)return null;const densityElements=densityOptions.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__.Z,{onClick:()=>{return newDensity=option.value,apiRef.current.setDensity(newDensity),void setOpen(!1);var newDensity},selected:option.value===densityValue,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__.Z,{children:option.icon}),option.label]},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(rootProps.slots.baseButton,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_12__.Z)({ref:handleRef,size:"small",startIcon,"aria-label":apiRef.current.getLocaleText("toolbarDensityLabel"),"aria-haspopup":"menu","aria-expanded":open,"aria-controls":open?densityMenuId:void 0,id:densityButtonId},other,{onClick:event=>{setOpen((prevOpen=>!prevOpen)),null==onClick||onClick(event)}},null==(_rootProps$slotProps=rootProps.slotProps)?void 0:_rootProps$slotProps.baseButton,{children:apiRef.current.getLocaleText("toolbarDensity")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_menu_GridMenu__WEBPACK_IMPORTED_MODULE_13__.r,{open,target:buttonRef.current,onClose:()=>{setOpen(!1)},position:"bottom-start",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_MenuList__WEBPACK_IMPORTED_MODULE_14__.Z,{id:densityMenuId,className:_constants_gridClasses__WEBPACK_IMPORTED_MODULE_15__._.menuList,"aria-labelledby":densityButtonId,onKeyDown:event=>{(0,_utils_keyboardUtils__WEBPACK_IMPORTED_MODULE_9__.id)(event.key)&&event.preventDefault(),(0,_utils_keyboardUtils__WEBPACK_IMPORTED_MODULE_9__.Mh)(event.key)&&setOpen(!1)},autoFocusItem:open,children:densityElements})})]})}))},"./src/DataGrid/DataGridAccessibility.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DensitySelectorSmallGrid:()=>DensitySelectorSmallGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _mui_x_data_grid_generator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mui/x-data-grid-generator/hooks/useDemoData.js"),_monorail_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../components/src/DataGrid/DataGrid.tsx"),_monorail_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/x-data-grid/components/containers/GridToolbarContainer.js"),_monorail_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@mui/x-data-grid/components/toolbar/GridToolbarDensitySelector.js"),_helpers_storybook_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/storybook.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Data Grid/Accessibility",component:_monorail_components__WEBPACK_IMPORTED_MODULE_3__._,parameters:{creevey:{skip:"Mismatch expected because data gets regenerated by mui/x-data-grid-generator."}}},CustomToolbar=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_monorail_components__WEBPACK_IMPORTED_MODULE_4__.D,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_monorail_components__WEBPACK_IMPORTED_MODULE_5__.L,{})});CustomToolbar.displayName="CustomToolbar";const Template=(0,_helpers_storybook_js__WEBPACK_IMPORTED_MODULE_1__.yg)((args=>{const{data}=(0,_mui_x_data_grid_generator__WEBPACK_IMPORTED_MODULE_6__.PT)({dataSet:"Commodity",rowLength:4,maxColumns:6});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{height:300,width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_monorail_components__WEBPACK_IMPORTED_MODULE_3__._,{...args,...data,components:{Toolbar:CustomToolbar}})})})),Default=(0,_helpers_storybook_js__WEBPACK_IMPORTED_MODULE_1__.yg)(Template);Default.parameters={docs:{description:{component:"The Data Grid has complete accessibility support. For instance, every cell is accessible using the keyboard.\n\n### Guidelines\n\nThe most commonly encountered conformance guidelines for accessibility are:\n\n-   [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)- Globally accepted standard\n-   [ADA](https://www.ada.gov/)- US Department of Justice\n-   [Section 508](https://www.section508.gov/)- US federal agencies\n\nWCAG 2.0 has three levels of conformance; A, AA, and AAA (in order of conformance). As meeting WCAG 2.0 level AA guidelines also meets the ADA and Section 508 standards, it's likely the standard that most organizations will want to target.\n\nThe  [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices/#grid)  provides valuable insight on how to make the grid highly accessible.\n\n### Density\n\nYou can change the density of the rows and the column header.\n\n### Density selector\n\nTo enable the density selector, you need to compose a toolbar containing the  `GridToolbarDensitySelector`  component and apply it using the  `Toolbar`  property in the grid  `components`  prop.\n\nThe user can change the density of the data grid by using the density selector from the toolbar.\n\nTo hide the density selector add the disableDensitySelector prop to the data grid."}},creevey:{skip:"Mismatch expected because data gets regenerated by mui/x-data-grid-generator."}};const DensitySelectorSmallGrid=(0,_helpers_storybook_js__WEBPACK_IMPORTED_MODULE_1__.yg)((args=>{const{data}=(0,_mui_x_data_grid_generator__WEBPACK_IMPORTED_MODULE_6__.PT)({dataSet:"Commodity",rowLength:4,maxColumns:6});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{height:300,width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_monorail_components__WEBPACK_IMPORTED_MODULE_3__._,{...args,...data,density:"compact",components:{Toolbar:CustomToolbar}})})}));DensitySelectorSmallGrid.storyName="Density prop",DensitySelectorSmallGrid.parameters={docs:{description:{story:"The vertical density of the data grid can be set using the `density` prop. The `density` prop applies the values determined by the `rowHeight` and `headerHeight` props if supplied. The user can override this setting with the toolbar density selector if provided.\n      \n**Keyboard navigation** - https://mui.com/components/data-grid/accessibility/#keyboard-navigation"}},creevey:{skip:"Mismatch expected because data gets regenerated by mui/x-data-grid-generator."}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"story(Template)",...Default.parameters?.docs?.source}}},DensitySelectorSmallGrid.parameters={...DensitySelectorSmallGrid.parameters,docs:{...DensitySelectorSmallGrid.parameters?.docs,source:{originalSource:"story<DataGridProps>(args => {\n  const {\n    data\n  } = useDemoData({\n    dataSet: 'Commodity',\n    rowLength: 4,\n    maxColumns: 6\n  });\n  return <div style={{\n    height: 300,\n    width: '100%'\n  }}>\n      <DataGrid {...args} {...data} density=\"compact\" components={{\n      Toolbar: CustomToolbar\n    }} />\n    </div>;\n})",...DensitySelectorSmallGrid.parameters?.docs?.source},description:{story:"Density prop",...DensitySelectorSmallGrid.parameters?.docs?.description}}};const __namedExportsOrder=["Default","DensitySelectorSmallGrid"];try{DensitySelectorSmallGrid.displayName="DensitySelectorSmallGrid",DensitySelectorSmallGrid.__docgenInfo={description:"Density prop",displayName:"DensitySelectorSmallGrid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/DataGrid/DataGridAccessibility.stories.tsx#DensitySelectorSmallGrid"]={docgenInfo:DensitySelectorSmallGrid.__docgenInfo,name:"DensitySelectorSmallGrid",path:"src/DataGrid/DataGridAccessibility.stories.tsx#DensitySelectorSmallGrid"})}catch(__react_docgen_typescript_loader_error){}}}]);