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
exports.HeroDescription =
  exports.HeroHeader =
  exports.HeroContent =
  exports.HeroBg =
  exports.HeroContainer =
    void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.HeroContainer = styled_components_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  background: #0c0c0c;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n  height: 800px;\n  position: relative;\n  z-index: 1;\n",
      ],
      [
        "\n  background: #0c0c0c;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n  height: 800px;\n  position: relative;\n  z-index: 1;\n",
      ]
    ))
);
exports.HeroBg = styled_components_1.default.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n",
      ],
      [
        "\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n",
      ]
    ))
);
exports.HeroContent = styled_components_1.default.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  z-index: 3;\n  max-width: 1200px;\n  position: absolute;\n  padding: 8px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
      ],
      [
        "\n  z-index: 3;\n  max-width: 1200px;\n  position: absolute;\n  padding: 8px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
      ]
    ))
);
exports.HeroHeader = styled_components_1.default.h1(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  color: #fff;\n  font-size: 48px;\n  text-align: center;\n\n  @media screen and (max-width: 768px) {\n    font-size: 40px;\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n",
      ],
      [
        "\n  color: #fff;\n  font-size: 48px;\n  text-align: center;\n\n  @media screen and (max-width: 768px) {\n    font-size: 40px;\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n",
      ]
    ))
);
exports.HeroDescription = styled_components_1.default.p(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        "\n  margin-top: 24px;\n  color: #fff;\n  font-size: 24px;\n  text-align: center;\n  max-width: 600px;\n\n  @media screen and (max-width: 480px) {\n    font-size: 18px;\n  }\n",
      ],
      [
        "\n  margin-top: 24px;\n  color: #fff;\n  font-size: 24px;\n  text-align: center;\n  max-width: 600px;\n\n  @media screen and (max-width: 480px) {\n    font-size: 18px;\n  }\n",
      ]
    ))
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5;
