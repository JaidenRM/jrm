"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoSection = void 0;
var react_1 = __importDefault(require("react"));
var SBtn = __importStar(require("../../shared/buttons.styled"));
var S = __importStar(require("./index.styled"));
var InfoSection = function (_a) {
  var id = _a.id,
    isLightText = _a.isLightText,
    isImgStart = _a.isImgStart,
    topLine = _a.topLine,
    heading = _a.heading,
    subheading = _a.subheading,
    buttonLabel = _a.buttonLabel,
    imgSrc = _a.imgSrc,
    alt = _a.alt,
    isDark = _a.isDark,
    isPrimary = _a.isPrimary,
    isDarkText = _a.isDarkText;
  return (
    <S.InfoContainer
      id={id}
      data-sal="slide-right"
      data-sal-delay="100"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <S.InfoWrapper>
        <S.InfoRow isImgStart={isImgStart}>
          <S.Column1>
            <S.TextWrapper>
              <S.TopLine>{topLine}</S.TopLine>
              <S.Heading isLightText={isLightText}>{heading}</S.Heading>
              <S.Subheading isDarkText={isDarkText}>{subheading}</S.Subheading>
              <S.ButtonWrapper>
                <SBtn.PrimaryButton
                  to="hero"
                  duration={500}
                  smooth
                  spy
                  isPrimary={isPrimary}
                  isDark={isDark}
                >
                  {buttonLabel}
                </SBtn.PrimaryButton>
              </S.ButtonWrapper>
            </S.TextWrapper>
          </S.Column1>
          <S.Column2>
            <S.ImageWrapper>
              <S.StyledImg src={imgSrc} alt={alt} />
            </S.ImageWrapper>
          </S.Column2>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.InfoContainer>
  );
};
exports.InfoSection = InfoSection;
