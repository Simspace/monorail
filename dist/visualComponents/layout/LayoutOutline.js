"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useControlledList = exports.OutlineListItem = exports.LayoutDetailHeader = exports.RowLayout = exports.ColumnLayout = exports.LayoutContentWrapper = exports.EmptyLayoutList = exports.EmptyListButtonsBox = exports.EmptyListBoxInner = exports.EmptyListBox = exports.LayoutOutline = exports.OutlineList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Array = require("fp-ts/lib/Array");

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _flex = require("../../helpers/flex");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const OutlineList = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')};
  background: ${(0, _exports.getColor)(_exports.Colors.White)};
  border-right: 1px solid ${(0, _exports.getColor)(_exports.Colors.Black12)};
  flex: 1;
  max-width: 256px;
  min-width: 186px;
`;
exports.OutlineList = OutlineList;
const OutlineContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')};
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const OutlineContent = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')};
  flex: 1;
  overflow: hidden;
`;

var _StyledScrollAnimation =
/*#__PURE__*/
(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "LayoutOutline___StyledScrollAnimation",
  componentId: "sc-1fcq5a-0"
})(["transform:none;"]);

const LayoutOutline = ({
  children,
  headerProps,
  list,
  listFooter,
  title,
  ...domProps
}) => {
  return _react.default.createElement(OutlineContainer, domProps, _react.default.createElement(OutlineList, null, _react.default.createElement(_Header.Header, _extends({
    cssTitle: "flex: 1;"
  }, headerProps, {
    title: title
  })), _react.default.createElement(_StyledScrollAnimation, null, list()), listFooter && listFooter()), _react.default.createElement(OutlineContent, null, children()));
};

exports.LayoutOutline = LayoutOutline;
const EmptyListBox = _styledComponents2.default.div`
  align-items: center;
  justify-content: center;
  margin: auto;
  ${(0, _flex.flexFlow)('row')}
`;
exports.EmptyListBox = EmptyListBox;
const EmptyListBoxInner = _styledComponents2.default.div`
  min-width: 200px;
  align-items: center;
  justify-content: center;

  ${(0, _flex.flexFlow)('column')}

  p {
    text-align: center;
  }
`;
exports.EmptyListBoxInner = EmptyListBoxInner;
const EmptyListButtonsBox = _styledComponents2.default.div`
  display: flex;
`;
exports.EmptyListButtonsBox = EmptyListButtonsBox;

const EmptyLayoutList = ({
  title = 'Empty List',
  message = 'Add items to your list',
  actions
}) => _react.default.createElement(EmptyListBox, null, _react.default.createElement(EmptyListBoxInner, null, _react.default.createElement(_Icon.Icon, {
  icon: "empty_syllabus_list",
  size: 120
}), _react.default.createElement(_Text.Text, {
  fontWeight: 700,
  fontSize: _exports.FontSizes.Title1,
  as: "p",
  margin: "0 0 16px 0"
}, title), _react.default.createElement(_Text.Text, {
  fontWeight: 400,
  fontSize: _exports.FontSizes.Title3,
  as: "p",
  margin: "0 0 24px 0"
}, message), actions && _react.default.createElement(EmptyListButtonsBox, null, actions)));

exports.EmptyLayoutList = EmptyLayoutList;
const titleStyle = (0, _styledComponents2.css)`
  max-width: unset;
  flex: 3;
  textarea {
    ${(0, _exports.typography)(700, _exports.FontSizes.Title1)};
  }
  textarea::placeholder {
    font-style: italic;
    color: '#8c8c8c';
  }
  margin-right: 8px;
`;
const LayoutContentWrapper = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column', 'nowrap')}
  ${(0, _exports.pageSizePadding)({
  paddingTop: 16,
  paddingBottom: 16
})};

  flex: 1;
  overflow: hidden;
`;
exports.LayoutContentWrapper = LayoutContentWrapper;
const ColumnLayout = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')}
  flex: 1;
  width: 100%;
`;
exports.ColumnLayout = ColumnLayout;
const RowLayout = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')}
  flex: 1;
  width: 100%;
  justify-items: center;
  align-items: center;
`;
exports.RowLayout = RowLayout;
const LayoutDetailHeaderContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')}
  flex: 0;
  height: auto;
  margin-left: -8px;
`;

var _StyledActionsMenu =
/*#__PURE__*/
(0, _styledComponents.default)(_ActionsMenu.ActionsMenu).withConfig({
  displayName: "LayoutOutline___StyledActionsMenu",
  componentId: "sc-1fcq5a-1"
})(["margin-top:4px;"]);

const LayoutDetailHeader = ({
  actions,
  ...textAreaProps
}) => _react.default.createElement(LayoutDetailHeaderContainer, null, _react.default.createElement(_TextArea.TextArea, _extends({
  chromeless: true,
  compact: true,
  cssOverrides: titleStyle,
  placeholder: "New Item",
  required: true
}, textAreaProps)), actions && _react.default.createElement(_StyledActionsMenu, {
  actions: actions
})); // Outline items and actions


exports.LayoutDetailHeader = LayoutDetailHeader;

const OutlineListItem = props => {
  const {
    item,
    selected = false,
    onClick,
    onDelete,
    icon = 'settings'
  } = props;
  return _react.default.createElement(_List.SimpleListItem, {
    key: item.key,
    leftIcon: icon,
    primaryText: item.content,
    size: _exports.Sizes.DP40,
    className: selected ? 'is-active' : '',
    onClick: () => onClick && onClick(item)
  }, onDelete && _react.default.createElement(_IconButton.IconButton, {
    size: _buttonTypes.ButtonSize.Compact,
    display: _buttonTypes.ButtonDisplay.Toolbar,
    icon: "cancel",
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      onDelete(item);
    }
  }));
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
      setSelected((0, _Array.lookup)(0, list).toUndefined());
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