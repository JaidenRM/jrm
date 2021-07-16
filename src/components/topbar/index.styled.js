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
exports.TopbarLink =
  exports.TopbarMenuWrapper =
  exports.IconWrapper =
  exports.CloseIcon =
  exports.TopbarContainer =
    void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_scroll_1 = require("react-scroll");
var fa_1 = require("react-icons/fa");
exports.TopbarContainer = styled_components_1.default.aside(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background: #0d0d0d;\n  display: grid;\n  align-items: center;\n  top: 0;\n  left: 0;\n  transition: 0.3s ease-in-out;\n  opacity: ",
        ";\n  top: ",
        ";\n",
      ],
      [
        "\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background: #0d0d0d;\n  display: grid;\n  align-items: center;\n  top: 0;\n  left: 0;\n  transition: 0.3s ease-in-out;\n  opacity: ",
        ";\n  top: ",
        ";\n",
      ]
    )),
  function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 1 : 0;
  },
  function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 0 : "-100%";
  }
);
exports.CloseIcon = styled_components_1.default(fa_1.FaTimes)(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ["\n  color: #fff;\n"],
      ["\n  color: #fff;\n"]
    ))
);
exports.IconWrapper = styled_components_1.default.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n",
      ],
      [
        "\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n",
      ]
    ))
);
exports.TopbarMenuWrapper = styled_components_1.default.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  color: #fff;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(6, 80px);\n  text-align: center;\n\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(6, 60px);\n  }\n",
      ],
      [
        "\n  color: #fff;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(6, 80px);\n  text-align: center;\n\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(6, 60px);\n  }\n",
      ]
    ))
);
exports.TopbarLink = styled_components_1.default(react_scroll_1.Link)(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  text-decoration: none;\n  list-style-type: none;\n  transition: 0.2s ease-in-out;\n  color: #fff;\n  cursor: pointer;\n\n  &:hover {\n    color: #01bf71;\n    transition: 0.2s ease-in-out;\n  }\n",
      ],
      [
        "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  text-decoration: none;\n  list-style-type: none;\n  transition: 0.2s ease-in-out;\n  color: #fff;\n  cursor: pointer;\n\n  &:hover {\n    color: #01bf71;\n    transition: 0.2s ease-in-out;\n  }\n",
      ]
    ))
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5;
