webpackHotUpdate("static\\development\\pages\\sobre.js",{

/***/ "./pages/components/Menu.js":
/*!**********************************!*\
  !*** ./pages/components/Menu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.module.css */ "./pages/components/Menu.module.css");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Vitor_Gabriel_Landim_Andre_Projetos\\Projeto-React-Back-Avancado\\pages\\components\\Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Menu = function Menu() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbrand,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Jornada Recode"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navitem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navlink,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navitem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navlink,
    href: "/sobre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "Sobre")))));
};

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL01lbnUuanMiXSwibmFtZXMiOlsiTWVudSIsInN0eWxlcyIsIm5hdiIsIm5hdmJyYW5kIiwidG9nZ2xlIiwibmF2aXRlbSIsIm5hdmxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlEQUFEO0FBQVEsYUFBUyxFQUFFQyx1REFBTSxDQUFDQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFhLGFBQVMsRUFBRUQsdURBQU0sQ0FBQ0UsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUVJLE1BQUMsd0RBQUQ7QUFBZSxXQUFPLEVBQUVDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdRLE1BQUMsOENBQUQ7QUFBSyxhQUFTLEVBQUVILHVEQUFNLENBQUNDLEdBQXZCO0FBQTRCLFVBQU0sTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsa0RBQUQ7QUFBUyxhQUFTLEVBQUVELHVEQUFNLENBQUNJLE9BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFFSix1REFBTSxDQUFDSyxPQUEzQjtBQUFvQyxRQUFJLEVBQUMsR0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLENBRkosRUFNSSxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFFTCx1REFBTSxDQUFDSSxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFTLGFBQVMsRUFBRUosdURBQU0sQ0FBQ0ssT0FBM0I7QUFBb0MsUUFBSSxFQUFDLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixDQU5KLENBSFIsQ0FESixDQURKO0FBb0JILENBckJEOztLQUFNTixJO0FBdUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc29icmUuanMuNGViNWM3NzkyMDRkZWU0ZjUzOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbGxhcHNlLCBOYXZiYXIsIE5hdmJhclRvZ2dsZXIsIE5hdmJhckJyYW5kLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lbnUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBjbGFzc05hbWU9e3N0eWxlcy5uYXZicmFuZH0+Sm9ybmFkYSBSZWNvZGU8L05hdmJhckJyYW5kPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fSBuYXZiYXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT17c3R5bGVzLm5hdmxpbmt9IGhyZWY9XCIvXCI+SG9tZTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9e3N0eWxlcy5uYXZsaW5rfSBocmVmPVwiL3NvYnJlXCI+U29icmU8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==