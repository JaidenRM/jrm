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
exports.Topbar = void 0;
var map_1 = __importDefault(require("lodash/map"));
var react_1 = __importDefault(require("react"));
var S = __importStar(require("./index.styled"));
var nav_1 = require("../../utils/constants/nav");
var Topbar = function (_a) {
  var isOpen = _a.isOpen,
    toggle = _a.toggle;
  return (
    <S.TopbarContainer isOpen={isOpen}>
      <S.IconWrapper>
        <S.CloseIcon onClick={toggle} />
      </S.IconWrapper>
      <S.TopbarMenuWrapper>
        {map_1.default(nav_1.NAV_OPTIONS, function (nav, idx) {
          return (
            <S.TopbarLink to={nav.to} onClick={toggle} key={idx}>
              {nav.name}
            </S.TopbarLink>
          );
        })}
      </S.TopbarMenuWrapper>
    </S.TopbarContainer>
  );
};
exports.Topbar = Topbar;
