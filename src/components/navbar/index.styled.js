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
exports.NavLinks =
  exports.NavMenuItem =
  exports.NavMenu =
  exports.NavMobileWrapper =
  exports.NavContainer =
  exports.Nav =
    void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_scroll_1 = require("react-scroll");
exports.Nav = styled_components_1.default.nav(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  background: ",
        ";\n  height: 80px;\n  transition: background-color 0.3s ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n\n  @media screen and (max-width: 960px) {\n    transition: all 0.8s ease;\n  }\n",
      ],
      [
        "\n  background: ",
        ";\n  height: 80px;\n  transition: background-color 0.3s ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n\n  @media screen and (max-width: 960px) {\n    transition: all 0.8s ease;\n  }\n",
      ]
    )),
  function (_a) {
    var isNavScrolling = _a.isNavScrolling;
    return isNavScrolling ? "#000" : "transparent";
  }
);
exports.NavContainer = styled_components_1.default.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  display: flex;\n  justify-content: center;\n  height: 80px;\n  z-index: 1;\n  width: 100%;\n  padding: 0 24px;\n  max-width: 1100px;\n",
      ],
      [
        "\n  display: flex;\n  justify-content: center;\n  height: 80px;\n  z-index: 1;\n  width: 100%;\n  padding: 0 24px;\n  max-width: 1100px;\n",
      ]
    ))
);
exports.NavMobileWrapper = styled_components_1.default.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  display: none;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: #fff;\n  }\n",
      ],
      [
        "\n  display: none;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: #fff;\n  }\n",
      ]
    ))
);
exports.NavMenu = styled_components_1.default.ul(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  display: flex;\n  align-items: center;\n  list-style: none;\n  text-align: center;\n  height: 100%;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n",
      ],
      [
        "\n  display: flex;\n  align-items: center;\n  list-style: none;\n  text-align: center;\n  height: 100%;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n",
      ]
    ))
);
exports.NavMenuItem = styled_components_1.default.li(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ["\n  height: 100%;\n  margin: auto;\n"],
      ["\n  height: 100%;\n  margin: auto;\n"]
    ))
);
exports.NavLinks = styled_components_1.default(react_scroll_1.Link)(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        "\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    border-bottom: 3px solid #01bf71;\n  }\n",
      ],
      [
        "\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    border-bottom: 3px solid #01bf71;\n  }\n",
      ]
    ))
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6;
