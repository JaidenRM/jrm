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
exports.Navbar = void 0;
var react_1 = __importStar(require("react"));
var map_1 = __importDefault(require("lodash/map"));
var fa_1 = require("react-icons/fa");
var S = __importStar(require("./index.styled"));
var nav_1 = require("../../utils/constants/nav");
var Navbar = function (_a) {
  var toggle = _a.toggle;
  var _b = react_1.useState(false),
    isNavScrolling = _b[0],
    setIsNavScrolling = _b[1];
  var onScrollHandler = function () {
    return setIsNavScrolling(window.scrollY >= 80);
  };
  react_1.useEffect(function () {
    window.addEventListener("scroll", onScrollHandler);
    return function () {
      return window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);
  return (
    <S.Nav isNavScrolling={isNavScrolling}>
      <S.NavContainer>
        <S.NavMobileWrapper>
          <fa_1.FaBars onClick={toggle} />
        </S.NavMobileWrapper>
        <S.NavMenu>
          {map_1.default(nav_1.NAV_OPTIONS, function (opt, idx) {
            return (
              <S.NavMenuItem>
                <S.NavLinks to={opt.to} key={idx} duration={500} smooth spy>
                  {opt.name}
                </S.NavLinks>
              </S.NavMenuItem>
            );
          })}
        </S.NavMenu>
      </S.NavContainer>
    </S.Nav>
  );
};
exports.Navbar = Navbar;
