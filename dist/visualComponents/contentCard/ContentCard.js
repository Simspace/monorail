"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentCard = exports.difficultyLevels = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _exports = require("../../helpers/exports");

var _Cards = require("../cards/Cards");

var _Rating = require("../rating/Rating");

var _Text = require("../typography/Text");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _FileUpload = require("../inputs/FileUpload");

var _ContentCardHeader = require("./ContentCardHeader");

var _matchers = require("../../sharedHelpers/matchers");

var _BaseLink = require("../hyperLink/BaseLink");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const LogoIconContainer = _styledComponents2.default.div`
  width: 48px;
  height: 48px;
  margin: 4px;
  border-radius: 50%;
`;

const LogoContainer = _styledComponents2.default.div(({
  hasLogo,
  isEditMode
}) => (0, _styledComponents2.css)`
    position: absolute;
    width: 56px;
    height: 56px;
    top: 118px;
    left: 12px;
    border-radius: 50%;
    background-color: ${(0, _exports.getColor)(_exports.Colors.White)};
    pointer-events: auto;

    ${hasLogo && `${LogoIconContainer} {
        ${(0, _exports.visible)(false)}
      }

      &:hover {
        ${LogoIconContainer} {
          ${(0, _exports.visible)(true)}
      }`}

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      margin: 4px;

      ${!hasLogo && `border: 2px dashed ${(0, _exports.getColor)(_exports.Colors.Gray54)};`}
    }

    ${isEditMode && `&:hover {
        cursor: pointer;
      }

      &:hover:before {
      background-color: ${(0, _exports.getColor)(hasLogo ? _exports.Colors.Black : _exports.Colors.Grey90, 0.6)};
    }`}
  `);

const Logo = _styledComponents2.default.div(({
  logo
}) => (0, _styledComponents2.css)`
    background-image: url(${logo});
    background-position: center;
    background-size: cover;
    height: 48px;
    width: 48px;
    margin: 4px;
    border-radius: 50%;
    flex-shrink: 0;
  `);

const DifficultyContainer = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('column')}

  width: 108px;
  margin: 8px 16px 0 auto;
`;
const DifficultyBars = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('row')}
`;

const DifficultyBar = _styledComponents2.default.div(({
  color
}) => (0, _styledComponents2.css)`
    background-color: ${(0, _exports.getColor)(color)};
    margin: 0 4px 0 0;
    width: 24px;
    height: 8px;
  `);

const TextContainer = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('column')}

  padding: 8px 16px 4px;
`;
const OrgName = _styledComponents2.default.div`
  ${_exports.ellipsis}
  ${(0, _exports.typography)(500, _exports.FontSizes.Title5, '0 0 8px 0')};

  color: ${(0, _exports.getColor)(_exports.Colors.Gray89)};
`;
const Title = _styledComponents2.default.div`
  ${_exports.ellipsis}
  ${(0, _exports.typography)(700, _exports.FontSizes.Title4, '0 0 8px 0')};

  color: ${(0, _exports.getColor)(_exports.Colors.Gray89)};
`;
const Description = _styledComponents2.default.div`
  ${_exports.ellipsis}
  ${(0, _exports.typography)(400, _exports.FontSizes.Title5)};

  color: ${(0, _exports.getColor)(_exports.Colors.Gray62)};
  height: 48px;
  margin-bottom: 8px;
  text-align: left;
`;
const Footer = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('row')}

  align-items: center;
  height: 16px;
  margin-bottom: 4px;
`;

const StaticLogo = props => _react.default.createElement(LogoContainer, {
  hasLogo: true,
  isEditMode: false
}, _react.default.createElement(Logo, {
  logo: props.logo
}));

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "ContentCard___StyledIcon",
  componentId: "sc-18v2tyl-0"
})(["color:", ";bottom:16px;left:16px;position:absolute;"], p => p._css);

const EditLogo = props => {
  const logoInputRef = (0, _react.useRef)(null);
  const [logoEl, icon, action] = (0, _pipeable.pipe)(O.fromNullable(props.logo), O.fold(() => [_react.default.createElement(_react.default.Fragment, null), 'upload', () => {
    var _logoInputRef$current;

    return (_logoInputRef$current = logoInputRef.current) === null || _logoInputRef$current === void 0 ? void 0 : _logoInputRef$current.click();
  }], logo => [_react.default.createElement(Logo, {
    logo: logo
  }), 'delete', props.onRemove]));
  return _react.default.createElement(LogoContainer, {
    hasLogo: (0, _typeGuards.isNotNil)(props.logo),
    isEditMode: true,
    onClick: action
  }, logoEl, _react.default.createElement(LogoIconContainer, null, _react.default.createElement(_StyledIcon, {
    icon: icon,
    size: 24,
    _css: (0, _exports.getColor)(_exports.Colors.Gray54)
  })), _react.default.createElement(_FileUpload.HiddenSingleFileInput, {
    accept: [_FileUpload.FileType.JPG, _FileUpload.FileType.PNG],
    inputRef: logoInputRef,
    onChange: props.onChange
  }));
};

const difficultyLevels = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
  expert: 3
};
exports.difficultyLevels = difficultyLevels;
const difficultyColor = {
  beginner: _exports.Colors.Tier4,
  intermediate: _exports.Colors.Tier3,
  advanced: _exports.Colors.Tier2,
  expert: _exports.Colors.Tier1
};

var _StyledText =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "ContentCard___StyledText",
  componentId: "sc-18v2tyl-1"
})(["color:", ";text-transform:uppercase;"], p => p._css2);

const Difficulty = props => {
  const {
    difficulty
  } = props;
  return _react.default.createElement(DifficultyContainer, null, _react.default.createElement(DifficultyBars, null, _react.default.createElement(DifficultyBar, {
    color: difficultyColor[difficulty]
  }), _react.default.createElement(DifficultyBar, {
    color: difficultyLevels[difficulty] > 0 ? difficultyColor[difficulty] : _exports.Colors.Gray12
  }), _react.default.createElement(DifficultyBar, {
    color: difficultyLevels[difficulty] > 1 ? difficultyColor[difficulty] : _exports.Colors.Gray12
  }), _react.default.createElement(DifficultyBar, {
    color: difficultyLevels[difficulty] > 2 ? difficultyColor[difficulty] : _exports.Colors.Gray12
  })), _react.default.createElement(_StyledText, {
    fontSize: _exports.FontSizes.Micro,
    fontWeight: 700,
    margin: '6px 0 0 0',
    _css2: (0, _exports.getColor)(difficultyColor[difficulty])
  }, difficulty));
};

const Enrollment = props => _react.default.createElement(_Text.Text, {
  color: _exports.Colors.Gray54,
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Bold
}, props.selfEnroll ? 'Self-Enroll' : 'Manager-Led', " \u2022");

const Duration = props => _react.default.createElement(_Text.Text, {
  color: _exports.Colors.Gray54,
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Medium,
  margin: "0 0 0 4px"
}, props.duration, " hr");

const StarRating = props => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Rating.Rating, {
  rating: props.rating,
  fill: _Rating.Fill.Gold,
  size: _Rating.Size.Tiny
}), _react.default.createElement(_Text.Text, {
  color: _exports.Colors.Gray54,
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Bold,
  margin: "0 4px"
}, props.rating, " \u2022"));

var _StyledBBCardBackground =
/*#__PURE__*/
(0, _styledComponents.default)(_Cards.BBCardBackground).withConfig({
  displayName: "ContentCard___StyledBBCardBackground",
  componentId: "sc-18v2tyl-2"
})(["margin:8px;width:256px;", ";"], p => p._css3);

const ContentCard = props => {
  const {
    cssOverrides,
    organization,
    title,
    description,
    difficulty,
    rating,
    duration,
    isSelfEnroll
  } = props; // [MM 2020-08-05] We want to conditionally pass `BaseLink` as the `as=...`
  // prop to `BBCardBackground`, but without a little type hint, TS seems to get
  // very confused about Forward Refs

  const baseLinkComponent = _BaseLink.BaseLink;
  const maybeLinkProps = (0, _matchers.matchOnI)('mode')(props)({
    edit: () => {},
    view: p => p.asLink ? {
      as: baseLinkComponent,
      activeClassName: p.activeClassName,
      activeStyle: p.activeStyle,
      onlyActiveOnIndex: p.onlyActiveOnIndex,
      to: p.to,
      hover: true
    } : {}
  });
  const headerProps = (0, _matchers.matchOnI)('mode')(props)({
    view: p => ({
      mode: 'view',
      image: O.fromNullable(p.image)
    }),
    edit: p => ({
      mode: 'edit',
      onImageChange: p.onImageChange,
      onRemoveImage: p.onRemoveImage,
      image: p.image
    })
  });
  const showFooter = (0, _typeGuards.isNotNil)(rating) || (0, _typeGuards.isNotNil)(isSelfEnroll) || (0, _typeGuards.isNotNil)(duration);
  return _react.default.createElement(_StyledBBCardBackground, _extends({}, maybeLinkProps, {
    _css3: cssOverrides
  }), _react.default.createElement(_ContentCardHeader.ContentCardHeader, headerProps), (0, _matchers.matchOnI)('mode')(props)({
    view: p => (0, _typeGuards.isNotNil)(p.logo) ? _react.default.createElement(StaticLogo, {
      logo: p.logo
    }) : _react.default.createElement(_react.default.Fragment, null),
    edit: p => _react.default.createElement(EditLogo, {
      logo: p.logo,
      onRemove: p.onRemoveLogo,
      onChange: p.onLogoChange
    })
  }), (0, _typeGuards.isNotNil)(difficulty) && _react.default.createElement(Difficulty, {
    difficulty: difficulty
  }), _react.default.createElement(TextContainer, null, (0, _typeGuards.isNotNil)(organization) && _react.default.createElement(OrgName, null, organization), _react.default.createElement(Title, null, title), (0, _typeGuards.isNotNil)(description) && _react.default.createElement(Description, null, _react.default.createElement(_reactTruncate.default, {
    lines: 3
  }, description)), showFooter && _react.default.createElement(Footer, null, (0, _typeGuards.isNotNil)(rating) && _react.default.createElement(StarRating, {
    rating: rating
  }), (0, _typeGuards.isNotNil)(isSelfEnroll) && _react.default.createElement(Enrollment, {
    selfEnroll: isSelfEnroll
  }), (0, _typeGuards.isNotNil)(duration) && _react.default.createElement(Duration, {
    duration: duration
  }))));
};

exports.ContentCard = ContentCard;