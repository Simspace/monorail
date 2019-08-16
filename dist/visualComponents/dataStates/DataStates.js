"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomNoResults = exports.CustomNoData = exports.NotFound = exports.SomethingWentWrong = exports.NotAuthorized = exports.NoData = exports.EmptyTable = exports.NoResults = exports.NoResultsCollection = void 0;

var _Apply = require("fp-ts/lib/Apply");

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NoResultsCollection = () => _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(NoResultsIcon, null)), _react.default.createElement(Banner, null, "No Entries Found"), _react.default.createElement(Detail, null, _react.default.createElement("span", null, "We couldn't find any records that match your search."), _react.default.createElement("span", null, "Please try again or browse the libraries.")));

exports.NoResultsCollection = NoResultsCollection;

const NoResults = () => _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(NoResultsIcon, null)), _react.default.createElement(Banner, null, "No Entries Found"), _react.default.createElement(Detail, null, _react.default.createElement("span", null, "We couldn't find any records that match your search.")));

exports.NoResults = NoResults;

const EmptyTable = () => _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(NoResultsIcon, null)), _react.default.createElement(Banner, null, "No Entries Found"), _react.default.createElement(Detail, null, _react.default.createElement("span", null, "We couldn't find any records.")));

exports.EmptyTable = EmptyTable;

const NoData = () => _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(NoResultsIcon, null)), _react.default.createElement(Banner, null, "There's Nothing Here"), _react.default.createElement(Detail, null, _react.default.createElement("span", null)));

exports.NoData = NoData;

const NotAuthorized = () => _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(NotAuthorizedIcon, null)), _react.default.createElement(Banner, null, "Not Authorized"), _react.default.createElement(Detail, null, _react.default.createElement("span", null, "We could not verify that you are authorized to access"), _react.default.createElement("span", null, "the requested page. Sorry!")));

exports.NotAuthorized = NotAuthorized;

const SomethingWentWrong = () => _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(SomethingWentWrongIcon, null)), _react.default.createElement(Banner, null, "Something Went Wrong"), _react.default.createElement(Detail, null, _react.default.createElement("span", null, "We wish we could be more specific, but that's all we"), _react.default.createElement("span", null, "know. Did you try turning it off and back on?")));

exports.SomethingWentWrong = SomethingWentWrong;

const NotFound = () => _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(NotFoundIcon, null)), _react.default.createElement(Banner, null, "We couldn't find your page..."), _react.default.createElement(Detail, null, _react.default.createElement("span", null, "We searched high and low, far and wide"), _react.default.createElement("span", null, "but can't seem to find the page you're looking for.")));

exports.NotFound = NotFound;

const CustomNoData = ({
  headingText,
  details
}) => _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(NoResultsIcon, null)), _react.default.createElement(Banner, null, headingText), _react.default.createElement(Detail, null, details));

exports.CustomNoData = CustomNoData;

const CustomNoResults = props => {
  const {
    bannerText,
    detailText
  } = props;
  return (0, _Apply.liftA2)(_Option.option)(bannerText_ => detailText_ => {
    if (bannerText_ || detailText_) {
      return _react.default.createElement(Container, null, _react.default.createElement(IconBox, null, _react.default.createElement(NoResultsIcon, null)), _react.default.createElement(Banner, null, bannerText.getOrElse('')), detailText.getOrElse('').split('.').map((str, idx) => {
        return _react.default.createElement(Detail, {
          key: idx + str
        }, str, str.length > 0 && '.');
      }));
    } else {
      return _react.default.createElement(NoResults, null);
    }
  })(bannerText)(detailText).getOrElse(_react.default.createElement(NoResults, null));
};

exports.CustomNoResults = CustomNoResults;

const Banner =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataStates__Banner",
  componentId: "sc-19xnotc-0"
})(["color:", ";margin:24px auto;", ";"], (0, _exports.getColor)(_exports.Colors.Black89), (0, _exports.typography)(700, _exports.FontSizes.Title1));

const Container =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataStates__Container",
  componentId: "sc-19xnotc-1"
})(["align-items:center;justify-content:center;margin:auto;", ";"], (0, _exports.flexFlow)('column'));

const Detail =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataStates__Detail",
  componentId: "sc-19xnotc-2"
})(["color:", ";text-align:center;", ";", ";"], (0, _exports.getColor)(_exports.Colors.Black89), (0, _exports.flexFlow)('column'), (0, _exports.typography)(400, _exports.FontSizes.Title3));

const IconBox =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "DataStates__IconBox",
  componentId: "sc-19xnotc-3"
})(["align-items:center;height:120px;justify-content:center;width:120px;", ";"], (0, _exports.flexFlow)('column'));

const NoResultsIcon = () => _react.default.createElement("svg", {
  width: "135",
  height: "135",
  viewBox: "0 0 135 135",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("path", {
  d: "M57.6561 13.8355L60 10L62.3439 13.8355L61.1215 15.8358L60 15.1505L58.8785 15.8358L57.6561 13.8355Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M64.5833 17.5L69.1667 25L65.7535 27.0858L61.1702 19.5858L64.5833 17.5Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M71.4583 28.75L76.0417 36.25L72.6285 38.3358L68.0452 30.8358L71.4583 28.75Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M78.3333 40L82.9167 47.5L79.5035 49.5858L74.9202 42.0858L78.3333 40Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M83.8333 51H85.0556L87.5 55H82.8122L81.7952 53.3358L83.8333 52.0903V51Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M80.1667 55H72.8333V51H80.1667V55Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M69.1667 55H61.8333V51H69.1667V55Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M50.8333 55H58.1667V51H50.8333V55Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M47.1667 55H39.8333V51H47.1667V55Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M38.2048 53.3358L37.1878 55H32.5L34.9444 51H36.1667V52.0903L38.2048 53.3358Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M37.0833 47.5L41.6667 40L45.0798 42.0858L40.4965 49.5858L37.0833 47.5Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M43.9583 36.25L48.5417 28.75L51.9548 30.8358L47.3715 38.3358L43.9583 36.25Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M50.8333 25L55.4167 17.5L58.8298 19.5858L54.2465 27.0858L50.8333 25Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M50.5556 67.5V71.5H51V71.9444H55V67.5H50.5556Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M55 76.3889V85.2778H51V76.3889H55Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M55 89.7222V98.6111H51V89.7222H55Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M55 103.056V107.5H50.5556V103.5H51V103.056H55Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M46.1111 107.5H37.2222V103.5H46.1111V107.5Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M32.7778 107.5H23.8889V103.5H32.7778V107.5Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M19.4444 107.5H15V103.056H19V103.5H19.4444V107.5Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M15 98.6111V89.7222H19V98.6111H15Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M15 85.2778V76.3889H19V85.2778H15Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M15 71.9444V67.5H19.4444V71.5H19V71.9444H15Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M23.8889 67.5H32.7778V71.5H23.8889V67.5Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M37.2222 67.5H46.1111V71.5H37.2222V67.5Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M87.5 65C88.8361 65 90.1435 65.1142 91.4133 65.3336L90.7325 69.2752C89.6873 69.0947 88.6076 69 87.5 69C86.3924 69 85.3127 69.0947 84.2675 69.2752L83.5867 65.3336C84.8565 65.1142 86.1639 65 87.5 65Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M79.7918 66.3362C77.2921 67.2372 75.0031 68.5658 73.0114 70.2354L75.5812 73.3008C77.2171 71.9294 79.0963 70.8388 81.1482 70.0992L79.7918 66.3362Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M70.2354 73.0114C68.5658 75.0031 67.2372 77.2921 66.3362 79.7918L70.0992 81.1482C70.8388 79.0963 71.9294 77.2171 73.3008 75.5812L70.2354 73.0114Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M65.3336 83.5867C65.1142 84.8565 65 86.164 65 87.5C65 88.8361 65.1142 90.1436 65.3336 91.4133L69.2752 90.7325C69.0947 89.6873 69 88.6076 69 87.5C69 86.3924 69.0947 85.3127 69.2752 84.2675L65.3336 83.5867Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M70.2354 101.989C68.5658 99.9969 67.2372 97.7079 66.3362 95.2082L70.0992 93.8518C70.8388 95.9037 71.9294 97.783 73.3008 99.4188L70.2354 101.989Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M73.0114 104.765C75.0031 106.434 77.2921 107.763 79.7918 108.664L81.1482 104.901C79.0963 104.161 77.2171 103.071 75.5812 101.699L73.0114 104.765Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M83.5867 109.666C84.8565 109.886 86.1639 110 87.5 110C88.8361 110 90.1436 109.886 91.4133 109.666L90.7325 105.725C89.6873 105.905 88.6076 106 87.5 106C86.3924 106 85.3127 105.905 84.2675 105.725L83.5867 109.666Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M95.2082 108.664C97.7079 107.763 99.9969 106.434 101.989 104.765L99.4188 101.699C97.783 103.071 95.9037 104.161 93.8518 104.901L95.2082 108.664Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M104.765 101.989C106.434 99.9969 107.763 97.708 108.664 95.2082L104.901 93.8518C104.161 95.9037 103.071 97.783 101.699 99.4188L104.765 101.989Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M109.666 91.4133C109.886 90.1436 110 88.8361 110 87.5C110 86.164 109.886 84.8565 109.666 83.5867L105.725 84.2675C105.905 85.3127 106 86.3924 106 87.5C106 88.6076 105.905 89.6873 105.725 90.7325L109.666 91.4133Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M108.664 79.7918C107.763 77.2921 106.434 75.0031 104.765 73.0114L101.699 75.5812C103.071 77.2171 104.161 79.0963 104.901 81.1482L108.664 79.7918Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  d: "M101.989 70.2354C99.9969 68.5658 97.7079 67.2372 95.2082 66.3362L93.8518 70.0992C95.9037 70.8388 97.783 71.9294 99.4188 73.3008L101.989 70.2354Z",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M104.42 102.083H107.021L123.446 118.542L118.542 123.446L102.083 107.021V104.42L101.195 103.499C97.4421 106.725 92.5704 108.667 87.2708 108.667C75.4538 108.667 65.875 99.0879 65.875 87.2708C65.875 75.4538 75.4538 65.875 87.2708 65.875C99.0879 65.875 108.667 75.4538 108.667 87.2708C108.667 92.5704 106.725 97.4421 103.499 101.195L104.42 102.083ZM72.4584 87.2708C72.4584 95.467 79.0746 102.083 87.2709 102.083C95.4671 102.083 102.083 95.467 102.083 87.2708C102.083 79.0745 95.4671 72.4583 87.2709 72.4583C79.0746 72.4583 72.4584 79.0745 72.4584 87.2708Z",
  fill: "#C0C1C2"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M91.2558 66.2454C89.9647 66.0022 88.6326 65.875 87.2708 65.875C86.0648 65.875 84.8821 65.9748 83.7305 66.1665L83.9271 67.3044L84.2675 69.2752C85.3127 69.0947 86.3924 69 87.5 69C88.6076 69 89.6873 69.0947 90.7325 69.2752L91.0729 67.3044L91.2558 66.2454ZM73.5376 70.8631C75.4585 69.2537 77.6661 67.9753 80.0728 67.1158L80.47 68.2177L81.1482 70.0992C79.0963 70.8388 77.2171 71.9294 75.5812 73.3008L74.2963 71.7681L73.5376 70.8631ZM67.1158 80.0728C67.9753 77.6661 69.2537 75.4585 70.8631 73.5376L71.7681 74.2963L73.3008 75.5812C71.9294 77.2171 70.8388 79.0963 70.0992 81.1482L68.2177 80.47L67.1158 80.0728ZM66.2454 91.2558C66.0022 89.9647 65.875 88.6326 65.875 87.2708C65.875 86.0648 65.9748 84.8821 66.1665 83.7306L67.3044 83.9271L69.2752 84.2675C69.0947 85.3127 69 86.3924 69 87.5C69 88.6076 69.0947 89.6873 69.2752 90.7325L67.3044 91.0729L66.2454 91.2558ZM71.0909 101.271C69.4664 99.3957 68.1627 97.2346 67.265 94.8734L68.2177 94.53L70.0992 93.8518C70.8388 95.9037 71.9294 97.783 73.3008 99.4188L71.7681 100.704L71.0909 101.271ZM80.2194 107.478C77.8503 106.651 75.6711 105.42 73.7646 103.866L74.2963 103.232L75.5812 101.699C77.2171 103.071 79.0963 104.161 81.1482 104.901L80.47 106.782L80.2194 107.478ZM91.1787 108.308C89.9105 108.544 88.6042 108.667 87.2708 108.667C86.0917 108.667 84.9348 108.571 83.8075 108.388L83.9271 107.696L84.2675 105.725C85.3127 105.905 86.3924 106 87.5 106C88.6076 106 89.6873 105.905 90.7325 105.725L91.0729 107.696L91.1787 108.308ZM101.039 103.632C99.1759 105.202 97.044 106.46 94.7257 107.325L94.53 106.782L93.8518 104.901C95.9037 104.161 97.783 103.071 99.4188 101.699L100.704 103.232L101.039 103.632ZM107.325 94.7257C106.46 97.044 105.202 99.1759 103.631 101.039L103.232 100.704L101.699 99.4188C103.071 97.783 104.161 95.9037 104.901 93.8518L106.782 94.53L107.325 94.7257ZM108.388 83.8075C108.571 84.9348 108.667 86.0917 108.667 87.2708C108.667 88.6042 108.544 89.9105 108.308 91.1787L107.696 91.0729L105.725 90.7325C105.905 89.6873 106 88.6076 106 87.5C106 86.3924 105.905 85.3127 105.725 84.2675L107.696 83.9271L108.388 83.8075ZM103.866 73.7646C105.42 75.6711 106.651 77.8503 107.478 80.2194L106.782 80.47L104.901 81.1482C104.161 79.0963 103.071 77.2171 101.699 75.5812L103.232 74.2963L103.866 73.7646ZM94.8734 67.265C97.2346 68.1627 99.3957 69.4664 101.271 71.0909L100.704 71.7681L99.4188 73.3008C97.783 71.9294 95.9037 70.8388 93.8518 70.0992L94.53 68.2177L94.8734 67.265Z",
  fill: "#929393"
}));

const NotAuthorizedIcon = () => _react.default.createElement("svg", {
  width: "120",
  height: "120",
  viewBox: "0 0 120 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("g", {
  opacity: "0.7"
}, _react.default.createElement("path", {
  opacity: "0.8",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120ZM12 51C9.79083 51 8 52.7909 8 55V67C8 69.2091 9.79089 71 12 71H108C110.209 71 112 69.2091 112 67V55C112 52.7909 110.209 51 108 51H12Z",
  fill: "#E50102"
})));

const SomethingWentWrongIcon = () => _react.default.createElement("svg", {
  width: "140",
  height: "140",
  viewBox: "0 0 140 140",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("path", {
  d: "M69.9999 11.6666C37.7999 11.6666 11.6666 37.7999 11.6666 69.9999C11.6666 102.2 37.7999 128.333 69.9999 128.333C102.2 128.333 128.333 102.2 128.333 69.9999C128.333 37.7999 102.2 11.6666 69.9999 11.6666Z",
  fill: "#ED6D6E"
}), _react.default.createElement("rect", {
  x: "43",
  y: "66",
  width: "54",
  height: "22",
  fill: "#C4C4C4"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M74.8713 31.5727C73.5794 30.272 71.8271 29.5413 70 29.5413C68.1729 29.5413 66.4207 30.272 65.1287 31.5727C63.8368 32.8734 63.1109 34.6376 63.1109 36.477C63.1109 39.0433 64.4888 41.2974 66.5555 42.4765V46.8807H63.1109C56.7161 46.8807 50.5832 49.4383 46.0614 53.9908C41.5395 58.5432 38.9992 64.7177 38.9992 71.1559H35.5546C34.6411 71.1559 33.765 71.5213 33.119 72.1717C32.473 72.822 32.1101 73.7041 32.1101 74.6238V85.0275C32.1101 85.9472 32.473 86.8293 33.119 87.4797C33.765 88.13 34.6411 88.4954 35.5546 88.4954H38.9992V91.9633C38.9992 93.8028 39.725 95.5669 41.0169 96.8676C42.3089 98.1683 44.0612 98.8991 45.8883 98.8991H94.1118C95.9389 98.8991 97.6911 98.1683 98.9831 96.8676C100.275 95.5669 101.001 93.8028 101.001 91.9633V88.4954H104.445C105.359 88.4954 106.235 88.13 106.881 87.4797C107.527 86.8293 107.89 85.9472 107.89 85.0275V74.6238C107.89 73.7041 107.527 72.822 106.881 72.1717C106.235 71.5213 105.359 71.1559 104.445 71.1559H101.001C101.001 64.7177 98.4605 58.5432 93.9387 53.9908C89.4169 49.4383 83.2839 46.8807 76.8891 46.8807H73.4446V42.4765C75.5113 41.2974 76.8891 39.0433 76.8891 36.477C76.8891 34.6376 76.1633 32.8734 74.8713 31.5727Z",
  fill: "#fff"
}), _react.default.createElement("path", {
  d: "M61.1333 71.0784L59.8173 69.7624L54.5999 74.9797L49.3826 69.7624L48.0666 71.0784L53.2839 76.2957L48.0666 81.5131L49.3826 82.8291L54.5999 77.6117L59.8173 82.8291L61.1333 81.5131L55.9159 76.2957L61.1333 71.0784Z",
  fill: "#ED6D6E"
}), _react.default.createElement("path", {
  d: "M91.9333 71.0784L90.6173 69.7624L85.4 74.9797L80.1826 69.7624L78.8666 71.0784L84.084 76.2957L78.8666 81.5131L80.1826 82.8291L85.4 77.6117L90.6173 82.8291L91.9333 81.5131L86.716 76.2957L91.9333 71.0784Z",
  fill: "#ED6D6E"
}), _react.default.createElement("path", {
  d: "M61.1333 71.0784L62.1232 72.0684L63.1132 71.0784L62.1232 70.0885L61.1333 71.0784ZM59.8173 69.7624L60.8072 68.7725L59.8173 67.7825L58.8273 68.7725L59.8173 69.7624ZM54.5999 74.9797L53.61 75.9697L54.5999 76.9596L55.5899 75.9697L54.5999 74.9797ZM49.3826 69.7624L50.3725 68.7725L49.3826 67.7825L48.3926 68.7725L49.3826 69.7624ZM48.0666 71.0784L47.0766 70.0885L46.0867 71.0784L47.0766 72.0684L48.0666 71.0784ZM53.2839 76.2957L54.2739 77.2857L55.2638 76.2957L54.2739 75.3058L53.2839 76.2957ZM48.0666 81.5131L47.0766 80.5231L46.0867 81.5131L47.0766 82.503L48.0666 81.5131ZM49.3826 82.8291L48.3926 83.819L49.3826 84.809L50.3725 83.819L49.3826 82.8291ZM54.5999 77.6117L55.5899 76.6218L54.5999 75.6318L53.61 76.6218L54.5999 77.6117ZM59.8173 82.8291L58.8273 83.819L59.8173 84.809L60.8072 83.819L59.8173 82.8291ZM61.1333 81.5131L62.1232 82.503L63.1132 81.5131L62.1232 80.5231L61.1333 81.5131ZM55.9159 76.2957L54.926 75.3058L53.936 76.2957L54.926 77.2857L55.9159 76.2957ZM91.9333 71.0784L92.9232 72.0684L93.9132 71.0784L92.9232 70.0885L91.9333 71.0784ZM90.6173 69.7624L91.6072 68.7725L90.6173 67.7825L89.6273 68.7725L90.6173 69.7624ZM85.4 74.9797L84.41 75.9697L85.4 76.9596L86.3899 75.9697L85.4 74.9797ZM80.1826 69.7624L81.1726 68.7725L80.1826 67.7825L79.1927 68.7725L80.1826 69.7624ZM78.8666 71.0784L77.8767 70.0885L76.8867 71.0784L77.8767 72.0684L78.8666 71.0784ZM84.084 76.2957L85.0739 77.2857L86.0639 76.2957L85.0739 75.3058L84.084 76.2957ZM78.8666 81.5131L77.8767 80.5231L76.8867 81.5131L77.8767 82.503L78.8666 81.5131ZM80.1826 82.8291L79.1927 83.819L80.1826 84.809L81.1726 83.819L80.1826 82.8291ZM85.4 77.6117L86.3899 76.6218L85.4 75.6318L84.41 76.6218L85.4 77.6117ZM90.6173 82.8291L89.6273 83.819L90.6173 84.809L91.6072 83.819L90.6173 82.8291ZM91.9333 81.5131L92.9232 82.503L93.9132 81.5131L92.9232 80.5231L91.9333 81.5131ZM86.716 76.2957L85.726 75.3058L84.7361 76.2957L85.726 77.2857L86.716 76.2957ZM62.1232 70.0885L60.8072 68.7725L58.8273 70.7524L60.1433 72.0684L62.1232 70.0885ZM58.8273 68.7725L53.61 73.9898L55.5899 75.9697L60.8072 70.7524L58.8273 68.7725ZM55.5899 73.9898L50.3725 68.7725L48.3926 70.7524L53.61 75.9697L55.5899 73.9898ZM48.3926 68.7725L47.0766 70.0885L49.0565 72.0684L50.3725 70.7524L48.3926 68.7725ZM47.0766 72.0684L52.294 77.2857L54.2739 75.3058L49.0565 70.0885L47.0766 72.0684ZM52.294 75.3058L47.0766 80.5231L49.0565 82.503L54.2739 77.2857L52.294 75.3058ZM47.0766 82.503L48.3926 83.819L50.3725 81.8391L49.0565 80.5231L47.0766 82.503ZM50.3725 83.819L55.5899 78.6017L53.61 76.6218L48.3926 81.8391L50.3725 83.819ZM53.61 78.6017L58.8273 83.819L60.8072 81.8391L55.5899 76.6218L53.61 78.6017ZM60.8072 83.819L62.1232 82.503L60.1433 80.5231L58.8273 81.8391L60.8072 83.819ZM62.1232 80.5231L56.9059 75.3058L54.926 77.2857L60.1433 82.503L62.1232 80.5231ZM56.9059 77.2857L62.1232 72.0684L60.1433 70.0885L54.926 75.3058L56.9059 77.2857ZM92.9232 70.0885L91.6072 68.7725L89.6273 70.7524L90.9433 72.0684L92.9232 70.0885ZM89.6273 68.7725L84.41 73.9898L86.3899 75.9697L91.6072 70.7524L89.6273 68.7725ZM86.3899 73.9898L81.1726 68.7725L79.1927 70.7524L84.41 75.9697L86.3899 73.9898ZM79.1927 68.7725L77.8767 70.0885L79.8566 72.0684L81.1726 70.7524L79.1927 68.7725ZM77.8767 72.0684L83.094 77.2857L85.0739 75.3058L79.8566 70.0885L77.8767 72.0684ZM83.094 75.3058L77.8767 80.5231L79.8566 82.503L85.0739 77.2857L83.094 75.3058ZM77.8767 82.503L79.1927 83.819L81.1726 81.8391L79.8566 80.5231L77.8767 82.503ZM81.1726 83.819L86.3899 78.6017L84.41 76.6218L79.1927 81.8391L81.1726 83.819ZM84.41 78.6017L89.6273 83.819L91.6072 81.8391L86.3899 76.6218L84.41 78.6017ZM91.6072 83.819L92.9232 82.503L90.9433 80.5231L89.6273 81.8391L91.6072 83.819ZM92.9232 80.5231L87.7059 75.3058L85.726 77.2857L90.9433 82.503L92.9232 80.5231ZM87.7059 77.2857L92.9232 72.0684L90.9433 70.0885L85.726 75.3058L87.7059 77.2857Z",
  fill: "#ED6D6E"
}));

const NotFoundIcon = () => _react.default.createElement("svg", {
  width: "185",
  height: "68",
  viewBox: "0 0 185 68",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("path", {
  opacity: "0.7",
  d: "M35.28 66H45.664V51.568H54.904V42.68H45.664V1.496H36.424L0.696 43.824L2.808 51.568H35.28V66ZM13.544 42.68L35.28 16.456V42.68H13.544ZM93.2583 67.056C110.066 67.056 121.154 52.184 121.154 33.968V33.792C121.154 15.488 110.154 0.879999 93.4343 0.879999C76.6263 0.879999 65.5383 15.752 65.5383 33.968V34.144C65.5383 52.448 76.4503 67.056 93.2583 67.056ZM93.4343 57.288C83.2263 57.288 76.7143 46.728 76.7143 33.968V33.792C76.7143 20.944 83.1382 10.648 93.2583 10.648C103.378 10.648 109.978 21.208 109.978 33.968V34.144C109.978 46.904 103.642 57.288 93.4343 57.288ZM165.046 66H175.43V51.568H184.67V42.68H175.43V1.496H166.19L130.462 43.824L132.574 51.568H165.046V66ZM143.31 42.68L165.046 16.456V42.68H143.31Z",
  fill: "#F44336"
}));