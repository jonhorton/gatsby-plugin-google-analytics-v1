"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.OutboundLink = OutboundLink;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxFileName = "/Users/jonhorton/Sites/gatsby/packages/gatsby-plugin-google-analytics/src/index.js";

function OutboundLink(props) {
  return _react.default.createElement("a", (0, _extends2.default)({}, props, {
    onClick: function onClick(e) {
      if (typeof props.onClick === "function") {
        props.onClick();
      }

      var redirect = true;

      if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) {
        redirect = false;
      }

      if (props.target && props.target.toLowerCase() !== "_self") {
        redirect = false;
      }

      if (window.ga) {
        window.ga("send", "event", {
          eventCategory: "Outbound Link",
          eventAction: "click",
          eventLabel: props.href,
          transport: redirect ? "beacon" : "",
          hitCallback: function hitCallback() {
            if (redirect) {
              document.location = props.href;
            }
          }
        });
      } else {
        if (redirect) {
          document.location = props.href;
        }
      }

      return false;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

OutboundLink.propTypes = {
  href: _propTypes.default.string,
  target: _propTypes.default.string,
  onClick: _propTypes.default.func
};