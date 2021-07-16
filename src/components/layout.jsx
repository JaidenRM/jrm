"use strict";
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
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
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
require("./layout.css");
var navbar_1 = require("./navbar");
var topbar_1 = require("./topbar");
var Layout = function (_a) {
  var children = _a.children;
  var _b = react_1.useState(false),
    isTopbarOpen = _b[0],
    setIsTopbarOpen = _b[1];
  var toggleIsTopbarOpen = function () {
    return setIsTopbarOpen(function (prev) {
      return !prev;
    });
  };
  return (
    <>
      <topbar_1.Topbar isOpen={isTopbarOpen} toggle={toggleIsTopbarOpen} />
      <navbar_1.Navbar toggle={toggleIsTopbarOpen} />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0 1.0875rem 1.45rem",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: "2rem",
          }}
        >
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};
Layout.propTypes = {
  children: prop_types_1.default.node.isRequired,
};
exports.default = Layout;
