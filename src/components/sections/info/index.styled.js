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
exports.StyledImg =
  exports.ImageWrapper =
  exports.ButtonWrapper =
  exports.Subheading =
  exports.Heading =
  exports.TopLine =
  exports.TextWrapper =
  exports.Column2 =
  exports.Column1 =
  exports.InfoRow =
  exports.InfoWrapper =
  exports.InfoContainer =
    void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.InfoContainer = styled_components_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  color: #fff;\n  background: ",
        ";\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n  }\n",
      ],
      [
        "\n  color: #fff;\n  background: ",
        ";\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n  }\n",
      ]
    )),
  function (_a) {
    var isLightBg = _a.isLightBg;
    return isLightBg ? "#f9f9f9" : "#010606";
  }
);
exports.InfoWrapper = styled_components_1.default.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  display: grid;\n  z-index: 100%;\n  height: 860px;\n  width: 100%;\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 24px;\n  justify-content: center;\n",
      ],
      [
        "\n  display: grid;\n  z-index: 100%;\n  height: 860px;\n  width: 100%;\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 24px;\n  justify-content: center;\n",
      ]
    ))
);
exports.InfoRow = styled_components_1.default.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ",
        ";\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ",
        ";\n  }\n",
      ],
      [
        "\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ",
        ";\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ",
        ";\n  }\n",
      ]
    )),
  function (_a) {
    var isImgStart = _a.isImgStart;
    return isImgStart ? "'col2 col1'" : "'col1 col2'";
  },
  function (_a) {
    var isImgStart = _a.isImgStart;
    return isImgStart ? "'col1' 'col2'" : "'col1 col1' 'col2 col2'";
  }
);
exports.Column1 = styled_components_1.default.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n"],
      ["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n"]
    ))
);
exports.Column2 = styled_components_1.default.div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n"],
      ["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n"]
    ))
);
exports.TextWrapper = styled_components_1.default.div(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      ["\n  max-width: 540px;\n  padding-top: 0;\n  padding-bottom: 60px;\n"],
      ["\n  max-width: 540px;\n  padding-top: 0;\n  padding-bottom: 60px;\n"]
    ))
);
exports.TopLine = styled_components_1.default.p(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        "\n  color: #01bf71;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n",
      ],
      [
        "\n  color: #01bf71;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n",
      ]
    ))
);
exports.Heading = styled_components_1.default.h1(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        "\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ",
        ";\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n",
      ],
      [
        "\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ",
        ";\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n",
      ]
    )),
  function (_a) {
    var isLightText = _a.isLightText;
    return isLightText ? "#f7f8fa" : "#010606";
  }
);
exports.Subheading = styled_components_1.default.p(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      [
        "\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ",
        ";\n",
      ],
      [
        "\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ",
        ";\n",
      ]
    )),
  function (_a) {
    var isDarkText = _a.isDarkText;
    return isDarkText ? "#010606" : "#fff";
  }
);
exports.ButtonWrapper = styled_components_1.default.div(
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      ["\n  display: flex;\n  justify-content: flex-start;\n"],
      ["\n  display: flex;\n  justify-content: flex-start;\n"]
    ))
);
exports.ImageWrapper = styled_components_1.default.div(
  templateObject_11 ||
    (templateObject_11 = __makeTemplateObject(
      ["\n  max-width: 555px;\n  height: 100%;\n"],
      ["\n  max-width: 555px;\n  height: 100%;\n"]
    ))
);
exports.StyledImg = styled_components_1.default.img(
  templateObject_12 ||
    (templateObject_12 = __makeTemplateObject(
      ["\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n"],
      ["\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n"]
    ))
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12;
