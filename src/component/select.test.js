"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _Select = _interopRequireDefault(require("./Select"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Ensure the import path is correct

var mockOptions = [{
  id: 1,
  label: 'Option 1'
}, {
  id: 2,
  label: 'Option 2'
}];

/**
 * Test suite for the Select component.
 */
describe('Select Component', function () {
  /**
   * Test to check if the select field is rendered.
   */
  test('Then the select field is rendered', function () {
    (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Select["default"], {
      options: mockOptions,
      label: "Test Select",
      value: "",
      onChange: function onChange() {},
      name: "test-select-1" // Unique ID for this test
      ,
      valueField: "id",
      labelField: "label"
    }));
    var select = _react2.screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  /**
   * Test to verify that the onChange function is called when an option is selected.
   */
  test('When an option is selected, Then the onChange function is called', function () {
    var mockOnChange = jest.fn(); // Mock of the onChange function
    var TestComponent = function TestComponent() {
      var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        selectedValue = _useState2[0],
        setSelectedValue = _useState2[1]; // State for the selected value

      var handleChange = function handleChange(event) {
        setSelectedValue(event.target.value); // Update state with the new value
        mockOnChange(event); // Call the mocked onChange function
      };
      return /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        options: mockOptions,
        label: "Test Select",
        value: selectedValue // Pass the state value
        ,
        onChange: handleChange // Pass the event handler
        ,
        name: "test-select-2" // Unique ID for this test
        ,
        valueField: "id",
        labelField: "label"
      });
    };
    (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(TestComponent, null)); // Render the test component

    var select = _react2.screen.getByRole('combobox');
    _react2.fireEvent.change(select, {
      target: {
        value: '1'
      }
    }); // Select option 1

    expect(mockOnChange).toHaveBeenCalledTimes(1); // Check that the function was called once
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object)); // Check that the function was called with an event object
    expect(select.value).toBe('1'); // Check that the selected value has been updated
  });

  /**
   * Test to verify that the select displays the correct options.
   */
  test('Then the select displays the correct options', function () {
    (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Select["default"], {
      options: mockOptions,
      label: "Test Select",
      value: "",
      onChange: function onChange() {},
      name: "test-select-3" // Unique ID for this test
      ,
      valueField: "id",
      labelField: "label"
    }));
    var select = _react2.screen.getByRole('combobox');
    expect(select).toHaveTextContent(' '); // Check that the default option is present
    expect(select).toHaveTextContent('Option 1'); // Check that option 1 is present
    expect(select).toHaveTextContent('Option 2'); // Check that option 2 is present
  });

  /**
   * Snapshot test for the Select component.
   */
  test('Select component matches snapshot', function () {
    var _render = (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Select["default"], {
        options: mockOptions,
        label: "Test Select",
        value: "",
        onChange: function onChange() {},
        name: "test-select-snapshot" // Unique ID for this test
        ,
        valueField: "id",
        labelField: "label"
      })),
      asFragment = _render.asFragment;
    expect(asFragment()).toMatchSnapshot(); // Check that the component matches the snapshot
  });
});