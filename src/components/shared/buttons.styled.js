"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apple = exports.PrimaryButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_scroll_1 = require("react-scroll");
exports.PrimaryButton = styled_components_1.default(react_scroll_1.Link)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  border-radius: 50px;\n  background: ",
        ";\n  white-space: nowrap;\n  padding: ",
        ";\n  color: ",
        ";\n  font-size: ",
        ";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: ",
        ";\n  }\n",
      ],
      [
        "\n  border-radius: 50px;\n  background: ",
        ";\n  white-space: nowrap;\n  padding: ",
        ";\n  color: ",
        ";\n  font-size: ",
        ";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: ",
        ";\n  }\n",
      ]
    )),
  function (_a) {
    var isPrimary = _a.isPrimary;
    return isPrimary ? "#01BF71" : "#010606";
  },
  function (_a) {
    var isBig = _a.isBig;
    return isBig ? "14px 48px" : "12px 30px";
  },
  function (_a) {
    var isDark = _a.isDark;
    return isDark ? "#010606" : "#01BF71";
  },
  function (_a) {
    var isFontBig = _a.isFontBig;
    return isFontBig ? "20px" : "16px";
  },
  function (_a) {
    var isPrimary = _a.isPrimary;
    return isPrimary ? "#fff" : "#01BF71 ";
  }
);
exports.Apple = "ss'";
var templateObject_1;
