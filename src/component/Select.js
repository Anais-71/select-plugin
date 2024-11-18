"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./select.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Select component that renders a dropdown list.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.options - Array of options to display in the dropdown.
 * @param {string} props.label - The label for the select input.
 * @param {string} props.value - The currently selected value in the select input.
 * @param {Function} props.onChange - Callback function when the value changes.
 * @param {string} props.name - The name attribute for the select input.
 * @param {string} props.valueField - The field in each option object to use for the option value.
 * @param {string} props.labelField - The field in each option object to display as the option label.
 *
 * @returns {JSX.Element} The rendered Select component.
 */
var Select = function Select(_ref) {
  var options = _ref.options,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    name = _ref.name,
    valueField = _ref.valueField,
    labelField = _ref.labelField;
  var selectRef = (0, _react.useRef)(null);

  /**
   * Handles focus event on the <select> element.
   * No custom logic needed since the native <select> element automatically opens when focused.
   */
  var handleFocus = function handleFocus() {
    // L'élément <select> s'ouvre automatiquement lorsqu'il reçoit le focus, donc pas besoin de logique ici.
  };

  /**
   * Handles blur event on the <select> element.
   * No custom logic needed since the native <select> element automatically closes when it loses focus.
   */
  var handleBlur = function handleBlur() {
    // L'élément <select> se ferme automatiquement lorsqu'il perd le focus, donc pas besoin de logique ici non plus.
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "select-container"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name,
    id: "".concat(name, "-label")
  }, label), /*#__PURE__*/_react["default"].createElement("select", {
    ref: selectRef,
    className: "select",
    id: name,
    value: value,
    onChange: onChange,
    name: name,
    onFocus: handleFocus // Ouvre le menu lorsque l'élément reçoit le focus (comportement natif)
    ,
    onBlur: handleBlur // Ferme le menu lorsque l'élément perd le focus (comportement natif)
    ,
    "aria-labelledby": "".concat(name, "-label"),
    "aria-expanded": "false" // Attribut ARIA pour signaler que l'état du dropdown est fermé
    ,
    "aria-controls": "".concat(name, "-options") // Lier les options au select
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "",
    className: "select__placeholder",
    "aria-placeholder": "true"
  }, "Select an option"), options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      className: "select__option",
      key: option[valueField],
      value: option[valueField],
      "aria-selected": option[valueField] === value // Attribut ARIA pour signaler l'option sélectionnée
    }, option[labelField]);
  })));
};
Select.propTypes = {
  /**
   * Array of options for the select dropdown.
   * Each option is an object that contains at least two fields: one for the label and one for the value.
   * @type {Array<Object>}
   * @required
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape(_defineProperty({}, _propTypes["default"].string, _propTypes["default"].any))).isRequired,
  /**
   * The label for the select input.
   * This text is displayed as a label above the select dropdown.
   * @type {string}
   * @required
   */
  label: _propTypes["default"].string.isRequired,
  /**
   * The value of the currently selected option.
   * This is used to determine which option is selected in the dropdown.
   * @type {string}
   * @required
   */
  value: _propTypes["default"].string.isRequired,
  /**
   * The callback function to call when the selected option changes.
   * @type {Function}
   * @required
   */
  onChange: _propTypes["default"].func.isRequired,
  /**
   * The name attribute for the select element, used to identify the input in form submissions.
   * @type {string}
   * @required
   */
  name: _propTypes["default"].string.isRequired,
  /**
   * The name of the field in the options array that holds the value for each option.
   * @type {string}
   * @required
   */
  valueField: _propTypes["default"].string.isRequired,
  /**
   * The name of the field in the options array that holds the label for each option.
   * @type {string}
   * @required
   */
  labelField: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = Select;