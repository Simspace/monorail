"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useControlledList = exports.OutlineListItem = exports.LayoutDetailHeader = exports.RowLayout = exports.ColumnLayout = exports.LayoutContentWrapper = exports.EmptyLayoutList = exports.EmptyLayoutContainer = exports.EmptyListButtonsBox = exports.EmptyListBoxInner = exports.EmptyListBox = exports.LayoutOutline = exports.OutlineList = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _Array = require("fp-ts/lib/Array");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _exports = require("../../helpers/exports");

var _flex = require("../../helpers/flex");

var _ActionsMenu = require("../actionsMenu/ActionsMenu");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Header = require("../header/Header");

var _Icon = require("../icon/Icon");

var _TextArea = require("../inputs/TextArea");

var _ScrollAnimation = require("./ScrollAnimation");

var _List = require("../list/List");

var _Text = require("../typography/Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const OutlineList = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__OutlineList",
  componentId: "sc-1fcq5a-0"
})(["", ";background:", ";border-right:1px solid ", ";flex:1;max-width:256px;min-width:186px;"], (0, _flex.flexFlow)('column'), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.Black12a));

exports.OutlineList = OutlineList;

const OutlineContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__OutlineContainer",
  componentId: "sc-1fcq5a-1"
})(["", ";flex:1;overflow:hidden;width:100%;height:100%;"], (0, _flex.flexFlow)('row'));

const OutlineContent = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__OutlineContent",
  componentId: "sc-1fcq5a-2"
})(["", ";flex:1;overflow:hidden;"], (0, _flex.flexFlow)('column'));

const IconButtonContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__IconButtonContainer",
  componentId: "sc-1fcq5a-3"
})(["", ""], (0, _exports.visible)(false));

var _StyledScrollAnimation = /*#__PURE__*/(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "LayoutOutline___StyledScrollAnimation",
  componentId: "sc-1fcq5a-4"
})(["transform:none;"]);

const LayoutOutline = ({
  children,
  header,
  headerProps,
  list,
  listFooter,
  title,
  ...domProps
}) => {
  const renderTitleHeader = () => /*#__PURE__*/_react.default.createElement(_Header.Header, _extends({
    cssTitle: "flex: 1;"
  }, headerProps, {
    title: title
  }));

  return /*#__PURE__*/_react.default.createElement(OutlineContainer, domProps, /*#__PURE__*/_react.default.createElement(OutlineList, null, (0, _pipeable.pipe)(O.fromNullable(header), O.alt(() => (0, _pipeable.pipe)(O.fromNullable(title), O.map(t => renderTitleHeader))), O.fold(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), render => render())), /*#__PURE__*/_react.default.createElement(_StyledScrollAnimation, null, list()), listFooter && listFooter()), /*#__PURE__*/_react.default.createElement(OutlineContent, null, children()));
};

exports.LayoutOutline = LayoutOutline;

const EmptyListBox = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__EmptyListBox",
  componentId: "sc-1fcq5a-5"
})(["align-items:center;justify-content:center;margin:auto;", ""], (0, _flex.flexFlow)('row'));

exports.EmptyListBox = EmptyListBox;

const EmptyListBoxInner = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__EmptyListBoxInner",
  componentId: "sc-1fcq5a-6"
})(["min-width:200px;align-items:center;justify-content:center;", " p{text-align:center;}"], (0, _flex.flexFlow)('column'));

exports.EmptyListBoxInner = EmptyListBoxInner;

const EmptyListButtonsBox = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__EmptyListButtonsBox",
  componentId: "sc-1fcq5a-7"
})(["display:flex;"]);

exports.EmptyListButtonsBox = EmptyListButtonsBox;

const EmptyLayoutContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__EmptyLayoutContainer",
  componentId: "sc-1fcq5a-8"
})(["", ";background:", ";flex:1;height:100%;overflow:hidden;"], (0, _flex.flexFlow)('column'), (0, _exports.getColor)(_exports.Colors.Grey96));

exports.EmptyLayoutContainer = EmptyLayoutContainer;

const EmptyLayoutList = ({
  title = 'No Selection',
  message = 'Select an item on the left or create a new item',
  actions
}) => /*#__PURE__*/_react.default.createElement(EmptyListBox, null, /*#__PURE__*/_react.default.createElement(EmptyListBoxInner, null, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
  icon: "empty_syllabus_list",
  size: 120
}), /*#__PURE__*/_react.default.createElement(_Text.Text, {
  fontWeight: 700,
  fontSize: _exports.FontSizes.Title1,
  as: "p",
  margin: "0 0 16px 0"
}, title), /*#__PURE__*/_react.default.createElement(_Text.Text, {
  fontWeight: 400,
  fontSize: _exports.FontSizes.Title3,
  as: "p",
  margin: "0 0 24px 0"
}, message), actions && /*#__PURE__*/_react.default.createElement(EmptyListButtonsBox, null, actions)));

exports.EmptyLayoutList = EmptyLayoutList;

const titleStyle = disabled => (0, _styledComponents.css)(["max-width:unset;flex:3;", "{", ";", "}margin-right:8px;"], _TextArea.TextAreaInput, (0, _exports.typographyFont)(700, _exports.FontSizes.Title1), disabled && (0, _styledComponents.css)(["border:none;&:hover,&:focus,&:active{border:none;}"]));

const LayoutContentWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__LayoutContentWrapper",
  componentId: "sc-1fcq5a-9"
})(["", " ", ";flex:1;overflow:hidden;"], (0, _flex.flexFlow)('column', 'nowrap'), (0, _exports.pageSizePadding)({
  paddingTop: 16,
  paddingBottom: 16
}));

exports.LayoutContentWrapper = LayoutContentWrapper;

const ColumnLayout = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__ColumnLayout",
  componentId: "sc-1fcq5a-10"
})(["", " flex:1;width:100%;"], (0, _flex.flexFlow)('column'));

exports.ColumnLayout = ColumnLayout;

const RowLayout = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__RowLayout",
  componentId: "sc-1fcq5a-11"
})(["", " flex:1;width:100%;justify-items:center;align-items:center;"], (0, _flex.flexFlow)('row'));

exports.RowLayout = RowLayout;

const LayoutDetailHeaderContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "LayoutOutline__LayoutDetailHeaderContainer",
  componentId: "sc-1fcq5a-12"
})(["", " flex:0;height:auto;margin-left:-8px;"], (0, _flex.flexFlow)('row'));

var _StyledLayoutDetailHeaderContainer = /*#__PURE__*/(0, _styledComponents.default)(LayoutDetailHeaderContainer).withConfig({
  displayName: "LayoutOutline___StyledLayoutDetailHeaderContainer",
  componentId: "sc-1fcq5a-13"
})(["", ""], p => p._css);

var _StyledActionsMenu = /*#__PURE__*/(0, _styledComponents.default)(_ActionsMenu.ActionsMenu).withConfig({
  displayName: "LayoutOutline___StyledActionsMenu",
  componentId: "sc-1fcq5a-14"
})(["margin-top:4px;"]);

const LayoutDetailHeader = ({
  actions,
  containerCssOverrides,
  ...textAreaProps
}) => /*#__PURE__*/_react.default.createElement(_StyledLayoutDetailHeaderContainer, {
  _css: containerCssOverrides
}, /*#__PURE__*/_react.default.createElement(_TextArea.TextArea, _extends({
  chromeless: true,
  compact: true,
  cssOverrides: titleStyle(textAreaProps.disabled),
  placeholder: "New Item",
  required: true
}, textAreaProps)), actions && /*#__PURE__*/_react.default.createElement(_StyledActionsMenu, {
  actions: actions
})); // Outline items and actions


exports.LayoutDetailHeader = LayoutDetailHeader;

var _StyledSimpleListItem = /*#__PURE__*/(0, _styledComponents.default)(_List.SimpleListItem).withConfig({
  displayName: "LayoutOutline___StyledSimpleListItem",
  componentId: "sc-1fcq5a-15"
})(["&:hover{", "{", "}}"], IconButtonContainer, p => p._css2);

const OutlineListItem = props => {
  const {
    item,
    selected = false,
    onClick,
    onDelete,
    size = _exports.Sizes.DP40,
    icon = 'settings',
    cssOverrides
  } = props;
  return /*#__PURE__*/_react.default.createElement(_StyledSimpleListItem, {
    key: item.key,
    leftIcon: icon,
    primaryText: item.content,
    size: size,
    className: selected ? 'is-active' : '',
    onClick: () => onClick && onClick(item),
    cssOverrides: cssOverrides,
    _css2: (0, _exports.visible)(true)
  }, onDelete && /*#__PURE__*/_react.default.createElement(IconButtonContainer, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    size: _buttonTypes.ButtonSize.Compact,
    display: _buttonTypes.ButtonDisplay.Toolbar,
    icon: 'delete',
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      onDelete(item);
    }
  })));
};

exports.OutlineListItem = OutlineListItem;

const baseNewItem = ndx => ({
  key: `${ndx + 1}`,
  content: `New Item ${ndx + 1}`
}); // Controller helper for outline list of items


const useControlledList = ({
  items,
  newItem = baseNewItem
}) => {
  const [selected, setSelected] = (0, _react.useState)();
  const [list, setList] = (0, _react.useState)(items);
  (0, _react.useEffect)(() => {
    if (!selected) {
      setSelected((0, _pipeable.pipe)((0, _Array.lookup)(0, list), O.toUndefined));
    }
  }, [list, selected]);

  const getNewItem = () => newItem(list.length);

  const duplicateItem = item => {
    const ndx = Math.round(Math.random() * 1000);
    return { ...item,
      key: `${item.key}-${ndx}`,
      content: `${item.content}*`
    };
  };

  const createNewItem = key => {
    const item = key && findItem(key);
    return item ? duplicateItem(item) : getNewItem();
  };

  const findItemIndex = key => list.findIndex(item => item.key === key);

  const findItem = key => list.find(item => item.key === key);

  const updateItem = (key, changes) => {
    const oldItem = findItem(key);

    if (oldItem) {
      const updatedItem = { ...oldItem,
        ...changes
      };
      setList(list.map(item => item.key === key ? updatedItem : item));
      setSelected(updatedItem);
    }
  };

  const createItem = key => {
    const item = createNewItem(key);
    setList([...list, item]);
    setSelected(item);
  };

  const deleteItem = key => {
    const ndx = findItemIndex(key);

    if (ndx >= 0) {
      const newList = list.filter(item => item.key !== key);
      setList(newList);

      if (selected && key === selected.key) {
        setSelected(newList[ndx >= newList.length ? newList.length - 1 : ndx]);
      }
    }
  };

  const selectItem = key => {
    setSelected(findItem(key));
  };

  return {
    selectedItem: selected,
    items: list,
    actions: {
      create: createItem,
      delete: deleteItem,
      update: updateItem,
      select: selectItem
    }
  };
};

exports.useControlledList = useControlledList;