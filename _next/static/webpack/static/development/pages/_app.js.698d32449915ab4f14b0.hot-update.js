webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/jewelyhoxie/jhoxie.github.io/components/nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Bluesky = function Bluesky(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M8.67 2.378C13.257 5.833 18.19 12.836 20 16.594v9.926c0-.211-.081.028-.256.542-.945 2.785-4.636 13.654-13.077 4.965-4.444-4.575-2.387-9.15 5.703-10.531-4.628.79-9.831-.516-11.259-5.635C.7 14.39 0 5.32 0 4.094 0-2.042 5.362-.114 8.67 2.378zm22.66 0C26.743 5.833 21.81 12.836 20 16.594v9.926c0-.211.081.028.256.542.945 2.785 4.636 13.654 13.077 4.965 4.445-4.575 2.387-9.15-5.703-10.531 4.628.79 9.831-.516 11.259-5.635C39.3 14.39 40 5.32 40 4.094c0-6.136-5.361-4.208-8.67-1.716z",
    fill: "#3E22ED"
  }));
};

Bluesky.defaultProps = {
  width: "40",
  height: "36",
  viewBox: "0 0 40 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Substack = function Substack(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M28.674 3.444H2.222a1.222 1.222 0 1 1 0-2.444h26.452a1.222 1.222 0 0 1 0 2.444zM28.674 10.889H2.222a1.222 1.222 0 1 1 0-2.445h26.452a1.222 1.222 0 0 1 0 2.445zM1 31.552V17.89a2 2 0 0 1 2-2h24.897a2 2 0 0 1 2 2v13.663c0 1.592-1.768 2.546-3.098 1.672l-9.155-6.012a4 4 0 0 0-4.391 0l-9.155 6.012C2.768 34.098 1 33.144 1 31.552z",
    fill: "#3E22ED",
    stroke: "#3E22ED",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }));
};

Substack.defaultProps = {
  width: "31",
  height: "35",
  viewBox: "0 0 31 35",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Exit = function Exit(props) {
  return __jsx("svg", props, __jsx("rect", {
    x: "21.328",
    y: "26.036",
    width: "32",
    height: "3.271",
    rx: "1",
    transform: "rotate(-131.797 21.328 26.036)",
    fill: "#3E22ED"
  }), __jsx("rect", {
    x: "13",
    y: "14",
    width: "3",
    height: "3",
    rx: "1",
    transform: "rotate(-180 13 14)",
    fill: "#3E22ED"
  }), __jsx("rect", {
    x: "23.559",
    y: "2.157",
    width: "32",
    height: "3.271",
    rx: "1",
    transform: "rotate(131.252 23.559 2.157)",
    fill: "#3E22ED"
  }));
};

Exit.defaultProps = {
  width: "24",
  height: "27",
  viewBox: "0 0 24 27",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Menu = function Menu(props) {
  return __jsx("svg", props, __jsx("rect", {
    x: "32",
    y: "3.271",
    width: "32",
    height: "3.271",
    rx: "1",
    transform: "rotate(-180 32 3.27)",
    fill: "#3E22ED"
  }), __jsx("rect", {
    x: "32",
    y: "14.271",
    width: "32",
    height: "3.271",
    rx: "1",
    transform: "rotate(-180 32 14.27)",
    fill: "#3E22ED"
  }), __jsx("rect", {
    x: "32",
    y: "25.27",
    width: "32",
    height: "3.271",
    rx: "1",
    transform: "rotate(-180 32 25.27)",
    fill: "#3E22ED"
  }));
};

Menu.defaultProps = {
  width: "32",
  height: "26",
  viewBox: "0 0 32 26",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};




var Nav = function Nav(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  return __jsx("div", {
    className: "jsx-4185235090" + " " + ((menuOpen ? 'header open' : 'header') || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4185235090" + " " + "header-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return setMenuOpen(false);
    },
    className: "jsx-4185235090" + " " + "nav-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "JH")), __jsx("div", {
    className: "jsx-4185235090" + " " + "nav-section hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-4185235090" + " " + (router.pathname === '/' && 'selected' || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "work")), __jsx("div", {
    className: "jsx-4185235090" + " " + (router.pathname === '/about' && 'selected' || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "about"))), __jsx("div", {
    onClick: function onClick() {
      return setMenuOpen(!menuOpen);
    },
    className: "jsx-4185235090" + " " + "nav-section hidden-gt-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, menuOpen ? __jsx(Exit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }) : __jsx(Menu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 44
    }
  }))), menuOpen && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4185235090" + " " + "nav-section menu menu-expanded hidden-gt-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return setMenuOpen(!menuOpen);
    },
    className: "jsx-4185235090" + " " + (router.pathname === '/about' && 'selected' || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "about")), __jsx("div", {
    onClick: function onClick() {
      return setMenuOpen(!menuOpen);
    },
    className: "jsx-4185235090" + " " + (router.pathname === '/' && 'selected' || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, "work"))), __jsx("div", {
    className: "jsx-4185235090" + " " + "thin-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-4185235090" + " " + "header-line hidden-gt-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      margin: 'auto'
    },
    className: "jsx-4185235090" + " " + "outbound-links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://lookingatbooks.substack.com/",
    target: "_blank",
    className: "jsx-4185235090",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx(Substack, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 92
    }
  })), __jsx("span", {
    className: "jsx-4185235090" + " " + "outbound-link-spacer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }), __jsx("a", {
    href: "https://bsky.app/profile/jhox.bsky.social",
    target: "_blank",
    className: "jsx-4185235090",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx(Bluesky, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 97
    }
  }))))), !menuOpen && __jsx("div", {
    className: "jsx-4185235090" + " " + "header-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-4185235090" + " " + "nav-subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "mailto:hoxie.julie@gmail.com",
    className: "jsx-4185235090",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "hoxie.julie@gmail.com"), __jsx("div", {
    className: "jsx-4185235090",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "product designer"), __jsx("div", {
    className: "jsx-4185235090",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, "oakland, CA")), __jsx("div", {
    className: "jsx-4185235090" + " " + "outbound-links hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://lookingatbooks.substack.com/",
    target: "_blank",
    className: "jsx-4185235090",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx(Substack, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 88
    }
  })), __jsx("span", {
    className: "jsx-4185235090" + " " + "outbound-link-spacer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }), __jsx("a", {
    href: "https://bsky.app/profile/jhox.bsky.social",
    target: "_blank",
    className: "jsx-4185235090",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx(Bluesky, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 93
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "136212312",
    __self: _this
  }, ".header.jsx-4185235090{width:100%;padding:80px;}.header.open.jsx-4185235090{position:fixed;top:0;height:100vh;background-color:#FFD8C1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.header-line.jsx-4185235090{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.nav-subsection.jsx-4185235090{margin-top:20px;font-size:18px;line-height:24px;}.nav-subsection.jsx-4185235090 *.jsx-4185235090{display:block;}.nav-subsection.jsx-4185235090 a.jsx-4185235090{line-height:24px;}.outbound-link-spacer.jsx-4185235090{width:8px;diplay:inline-block;margin:8px;}.thin-line.jsx-4185235090{border:1px solid #3E22ED;margin:24px -24px 24px -24px;}@media only screen and (max-width:767px){.header.jsx-4185235090{padding:24px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9qaG94aWUuZ2l0aHViLmlvL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFd0IsQUFHNEIsQUFJSSxBQVFGLEFBTUcsQUFLRixBQUdHLEFBR1AsQUFLZSxBQUtSLFVBVEcsQ0E3QlAsRUF1Q2IsQ0FoQkosQ0FuQlUsQ0FjUyxDQVFuQixJQXJCaUIsR0FKakIsQ0FpQ2tDLEtBSm5CLENBWE0sR0FiUSxPQXlCN0IsT0FYQSxNQWVBLEtBNUJpQixlQUtNLDJEQUpHLFVBS0gsb0VBSnZCLHlCQUtrQyxtSEFDbEMiLCJmaWxlIjoiL1VzZXJzL2pld2VseWhveGllL2pob3hpZS5naXRodWIuaW8vY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmx1ZXNreSBmcm9tICcuLi9zdmdzL2JsdWVza3lpY29uLnN2Zyc7XG5pbXBvcnQgU3Vic3RhY2sgZnJvbSAnLi4vc3Zncy9zdWJzdGFja2xvZ29pY29uLnN2Zyc7XG5pbXBvcnQgRXhpdCBmcm9tICcuLi9zdmdzL2V4aXQuc3ZnJztcbmltcG9ydCBNZW51IGZyb20gJy4uL3N2Z3MvbWVudS5zdmcnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5hdiA9ICh7IHJvdXRlciB9KSA9PiB7XG4gICAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnVPcGVuID8gJ2hlYWRlciBvcGVuJyA6ICdoZWFkZXInfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWN0aW9uXCIgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEpIXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWN0aW9uIGhpZGRlbi1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy8nICYmICdzZWxlY3RlZCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj53b3JrPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9hYm91dCcgJiYgJ3NlbGVjdGVkJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+YWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+UmVzdW1lPC9hPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWN0aW9uIGhpZGRlbi1ndC1tb2JpbGVcIiBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfT5cbiAgICAgICAgICAgICAgICAgICAge21lbnVPcGVuID8gPEV4aXQgLz4gOiA8TWVudSAvPiB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHttZW51T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc2VjdGlvbiBtZW51IG1lbnUtZXhwYW5kZWQgaGlkZGVuLWd0LW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9hYm91dCcgJiYgJ3NlbGVjdGVkJ30gb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPmFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgJ3NlbGVjdGVkJ30gb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj53b3JrPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+UmVzdW1lPC9hPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpbi1saW5lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGluZSBoaWRkZW4tZ3QtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGJvdW5kLWxpbmtzXCIgc3R5bGU9e3ttYXJnaW46ICdhdXRvJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xvb2tpbmdhdGJvb2tzLnN1YnN0YWNrLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48U3Vic3RhY2svPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRib3VuZC1saW5rLXNwYWNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnNreS5hcHAvcHJvZmlsZS9qaG94LmJza3kuc29jaWFsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEJsdWVza3kvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IW1lbnVPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aG94aWUuanVsaWVAZ21haWwuY29tXCI+aG94aWUuanVsaWVAZ21haWwuY29tPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5wcm9kdWN0IGRlc2lnbmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9ha2xhbmQsIENBPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGJvdW5kLWxpbmtzIGhpZGRlbi1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xvb2tpbmdhdGJvb2tzLnN1YnN0YWNrLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48U3Vic3RhY2svPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dGJvdW5kLWxpbmstc3BhY2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jza3kuYXBwL3Byb2ZpbGUvamhveC5ic2t5LnNvY2lhbFwiIHRhcmdldD1cIl9ibGFua1wiPjxCbHVlc2t5Lz48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyLm9wZW4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEOEMxO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXItbGluZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zdWJzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc3Vic2VjdGlvbiAqIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc3Vic2VjdGlvbiBhIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vdXRib3VuZC1saW5rLXNwYWNlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICBkaXBsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aGluLWxpbmUge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRTIyRUQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyNHB4IC0yNHB4IDI0cHggLTI0cHggO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgLm5hdi1zZWN0aW9uLm1lbnUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VjdGlvbi5tZW51ID4gZGl2IHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXNlY3Rpb24gPiBkaXYgPiBhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VjdGlvbiA+IGRpdiA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VjdGlvbi5tZW51ID4gZGl2ID4gYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXNlY3Rpb24ubWVudS1leHBhbmRlZCB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm1lbnUgPiBkaXY6Zmlyc3QtY2hpbGQgPiBhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VjdGlvbiA+IC5zZWxlY3RlZCA+IGEge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjM0UyMkVEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zZWN0aW9uID4gZGl2ID4gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMzRTIyRUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1leHBhbmRlZCB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGlkZGVuLWd0LW1vYmlsZSAub3V0Ym91bmQtbGlua3MgKiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2KTtcbiJdfQ== */\n/*@ sourceURL=/Users/jewelyhoxie/jhoxie.github.io/components/nav.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2496099139",
    __self: _this
  }, ".nav-section.menu{margin:auto;}.nav-section.menu>div{text-align:center;}.nav-section>div>a{margin-left:60px;}.nav-section>div>a:hover{-webkit-text-decoration:none;text-decoration:none;}.nav-section.menu>div>a{margin-left:auto;margin-top:24px;margin-bottom:24px;display:inline-block;text-align:center;}.nav-section.menu-expanded{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu>div:first-child>a{margin-top:100px;}.nav-section>.selected>a{border-bottom:3px solid #3E22ED;}.nav-section>div>a:hover{border-bottom:3px solid #3E22ED;}.menu-expanded{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}.hidden-gt-mobile .outbound-links *{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9qaG94aWUuZ2l0aHViLmlvL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHMkIsQUFHNkIsQUFHTSxBQUdELEFBR0ksQUFHSixBQU9LLEFBSUwsQUFHZSxBQUdBLEFBR2xCLEFBR08sWUFsQ3pCLEtBTUEsQUFNb0IsQUFXcEIsQ0FwQkEsR0FnQ0EsV0FUQSxBQUdBLENBaEJ1QixpQkFKdkIsRUFLeUIsRUFrQnpCLG1CQWpCc0IsS0FJdEIsYUFIQSIsImZpbGUiOiIvVXNlcnMvamV3ZWx5aG94aWUvamhveGllLmdpdGh1Yi5pby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbHVlc2t5IGZyb20gJy4uL3N2Z3MvYmx1ZXNreWljb24uc3ZnJztcbmltcG9ydCBTdWJzdGFjayBmcm9tICcuLi9zdmdzL3N1YnN0YWNrbG9nb2ljb24uc3ZnJztcbmltcG9ydCBFeGl0IGZyb20gJy4uL3N2Z3MvZXhpdC5zdmcnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vc3Zncy9tZW51LnN2Zyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTmF2ID0gKHsgcm91dGVyIH0pID0+IHtcbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudU9wZW4gPyAnaGVhZGVyIG9wZW4nIDogJ2hlYWRlcid9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGluZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNlY3Rpb25cIiBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbihmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSkhcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNlY3Rpb24gaGlkZGVuLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgJ3NlbGVjdGVkJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPndvcms8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2Fib3V0JyAmJiAnc2VsZWN0ZWQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5hYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5SZXN1bWU8L2E+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNlY3Rpb24gaGlkZGVuLWd0LW1vYmlsZVwiIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKCFtZW51T3Blbil9PlxuICAgICAgICAgICAgICAgICAgICB7bWVudU9wZW4gPyA8RXhpdCAvPiA6IDxNZW51IC8+IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lbnVPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWN0aW9uIG1lbnUgbWVudS1leHBhbmRlZCBoaWRkZW4tZ3QtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2Fib3V0JyAmJiAnc2VsZWN0ZWQnfSBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+YWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiAnc2VsZWN0ZWQnfSBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPndvcms8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5SZXN1bWU8L2E+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGluLWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5lIGhpZGRlbi1ndC1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0Ym91bmQtbGlua3NcIiBzdHlsZT17e21hcmdpbjogJ2F1dG8nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbG9va2luZ2F0Ym9va3Muc3Vic3RhY2suY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxTdWJzdGFjay8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dGJvdW5kLWxpbmstc3BhY2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ic2t5LmFwcC9wcm9maWxlL2pob3guYnNreS5zb2NpYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Qmx1ZXNreS8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshbWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpob3hpZS5qdWxpZUBnbWFpbC5jb21cIj5ob3hpZS5qdWxpZUBnbWFpbC5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnByb2R1Y3QgZGVzaWduZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+b2FrbGFuZCwgQ0E8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0Ym91bmQtbGlua3MgaGlkZGVuLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbG9va2luZ2F0Ym9va3Muc3Vic3RhY2suY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxTdWJzdGFjay8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0Ym91bmQtbGluay1zcGFjZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnNreS5hcHAvcHJvZmlsZS9qaG94LmJza3kuc29jaWFsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEJsdWVza3kvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXIub3BlbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ4QzE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlci1saW5lIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXN1YnNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zdWJzZWN0aW9uICoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zdWJzZWN0aW9uIGEge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm91dGJvdW5kLWxpbmstc3BhY2VyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICAgIGRpcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRoaW4tbGluZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNFMjJFRDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI0cHggLTI0cHggMjRweCAtMjRweCA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAubmF2LXNlY3Rpb24ubWVudSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zZWN0aW9uLm1lbnUgPiBkaXYge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VjdGlvbiA+IGRpdiA+IGEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zZWN0aW9uID4gZGl2ID4gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zZWN0aW9uLm1lbnUgPiBkaXYgPiBhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VjdGlvbi5tZW51LWV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubWVudSA+IGRpdjpmaXJzdC1jaGlsZCA+IGEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zZWN0aW9uID4gLnNlbGVjdGVkID4gYSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMzRTIyRUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXNlY3Rpb24gPiBkaXYgPiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzNFMjJFRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaWRkZW4tZ3QtbW9iaWxlIC5vdXRib3VuZC1saW5rcyAqIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXYpO1xuIl19 */\n/*@ sourceURL=/Users/jewelyhoxie/jhoxie.github.io/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Nav));

/***/ })

})
//# sourceMappingURL=_app.js.698d32449915ab4f14b0.hot-update.js.map