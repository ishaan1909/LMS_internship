webpackHotUpdate_N_E("pages/homepage",{

/***/ "./components/myCards.js":
/*!*******************************!*\
  !*** ./components/myCards.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses */ "./courses.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");


var _jsxFileName = "D:\\Internship\\client\\components\\myCards.js";













function MyCard() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        bgcolor: 'text.disabled',
        pt: 8,
        pb: 6
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        maxWidth: "sm",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          component: "h3",
          variant: "h4",
          align: "center",
          color: "text.primary",
          children: "Select the course"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          variant: "h5",
          align: "center",
          color: "text.secondary",
          paragraph: true,
          children: "Offers over 100 different courses ranging in over 25 domains"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        py: 8
      },
      maxWidth: "lg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        container: true,
        spacing: 4,
        columns: 16,
        children: _courses__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (course) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
            item: true,
            xs: 12,
            sm: 6,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
              sx: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                align: "center",
                ':hover': {
                  boxShadow: 20
                }
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
                component: "img",
                sx: {
                  // 16:9
                  pt: '10%'
                },
                image: course.imageURL,
                alt: "random"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
                sx: {
                  flexGrow: 1
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: course.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  children: course.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  size: "small",
                  children: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  size: "small",
                  children: "Purchase"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this)
          }, course, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_c = MyCard;
/* harmony default export */ __webpack_exports__["default"] = (MyCard);

var _c;

$RefreshReg$(_c, "MyCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teUNhcmRzLmpzIl0sIm5hbWVzIjpbIk15Q2FyZCIsImJnY29sb3IiLCJwdCIsInBiIiwicHkiLCJjb3Vyc2VzIiwibWFwIiwiY291cnNlIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJib3JkZXJSYWRpdXMiLCJhbGlnbiIsImJveFNoYWRvdyIsImltYWdlVVJMIiwiZmxleEdyb3ciLCJuYW1lIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsTUFBVCxHQUFpQjtBQUFBOztBQUNiLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsMERBQUQ7QUFDRixRQUFFLEVBQUU7QUFDRkMsZUFBTyxFQUFFLGVBRFA7QUFFRkMsVUFBRSxFQUFFLENBRkY7QUFHRkMsVUFBRSxFQUFFO0FBSEYsT0FERjtBQUFBLDZCQU9GLHFFQUFDLCtEQUFEO0FBQVcsZ0JBQVEsRUFBQyxJQUFwQjtBQUFBLGdDQUdFLHFFQUFDLGlFQUFEO0FBQ0UsbUJBQVMsRUFBQyxJQURaO0FBRUUsaUJBQU8sRUFBQyxJQUZWO0FBR0UsZUFBSyxFQUFDLFFBSFI7QUFJRSxlQUFLLEVBQUMsY0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQVlFLHFFQUFDLGlFQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUF5QixlQUFLLEVBQUMsUUFBL0I7QUFBd0MsZUFBSyxFQUFDLGdCQUE5QztBQUErRCxtQkFBUyxNQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUEwQkEscUVBQUMsK0RBQUQ7QUFBVyxRQUFFLEVBQUU7QUFBRUMsVUFBRSxFQUFFO0FBQU4sT0FBZjtBQUEwQixjQUFRLEVBQUMsSUFBbkM7QUFBQSw2QkFFRSxxRUFBQywwREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENBQXpCO0FBQTRCLGVBQU8sRUFBRSxFQUFyQztBQUFBLGtCQUNHQyxnREFBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsTUFBRDtBQUFBLDhCQUNYLHFFQUFDLDBEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUF3QixjQUFFLEVBQUUsRUFBNUI7QUFBZ0MsY0FBRSxFQUFFLENBQXBDO0FBQXVDLGNBQUUsRUFBRSxDQUEzQztBQUFBLG1DQUNFLHFFQUFDLDBEQUFEO0FBQ0MsZ0JBQUUsRUFBRTtBQUFFQyxzQkFBTSxFQUFFLE1BQVY7QUFBaUJDLHVCQUFPLEVBQUUsTUFBMUI7QUFBaUNDLDZCQUFhLEVBQUUsUUFBaEQ7QUFBeURDLDRCQUFZLEVBQUUsTUFBdkU7QUFBK0VDLHFCQUFLLEVBQUMsUUFBckY7QUFBK0YsMEJBQVU7QUFBQ0MsMkJBQVMsRUFBRTtBQUFaO0FBQXpHLGVBREw7QUFBQSxzQ0FHRSxxRUFBQywrREFBRDtBQUNFLHlCQUFTLEVBQUMsS0FEWjtBQUVFLGtCQUFFLEVBQUU7QUFDRjtBQUNBWCxvQkFBRSxFQUFFO0FBRkYsaUJBRk47QUFNRSxxQkFBSyxFQUFFSyxNQUFNLENBQUNPLFFBTmhCO0FBT0UsbUJBQUcsRUFBQztBQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsZUFZRSxxRUFBQyxpRUFBRDtBQUFhLGtCQUFFLEVBQUU7QUFBRUMsMEJBQVEsRUFBRTtBQUFaLGlCQUFqQjtBQUFBLHdDQUNFLHFFQUFDLGlFQUFEO0FBQVksOEJBQVksTUFBeEI7QUFBeUIseUJBQU8sRUFBQyxJQUFqQztBQUFzQywyQkFBUyxFQUFDLElBQWhEO0FBQUEsNEJBQ0dSLE1BQU0sQ0FBQ1M7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUUscUVBQUMsaUVBQUQ7QUFBQSw0QkFDR1QsTUFBTSxDQUFDVTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpGLGVBb0JFLHFFQUFDLGlFQUFEO0FBQUEsd0NBQ0UscUVBQUMsNkRBQUQ7QUFBUSxzQkFBSSxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFRLHNCQUFJLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQWdCVixNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUEsU0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJBO0FBQUEsa0JBREo7QUErREg7O0tBaEVRUCxNO0FBa0VNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lcGFnZS5iMGFjMTM0YjkwNmZiYzJjMzEwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291cnNlcyBmcm9tIFwiLi4vY291cnNlc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuXHJcblxyXG5mdW5jdGlvbiBNeUNhcmQoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmdjb2xvcjogJ3RleHQuZGlzYWJsZWQnLFxyXG4gICAgICAgICAgICBwdDogOCxcclxuICAgICAgICAgICAgcGI6IDYsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiXHJcbiAgICAgICAgICBcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VsZWN0IHRoZSBjb3Vyc2VcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgT2ZmZXJzIG92ZXIgMTAwIGRpZmZlcmVudCBjb3Vyc2VzIHJhbmdpbmcgaW4gb3ZlciAyNSBkb21haW5zIFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPENvbnRhaW5lciBzeD17eyBweTogOCB9fSBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgICAgICB7LyogRW5kIGhlcm8gdW5pdCAqL31cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBjb2x1bW5zPXsxNn0+XHJcbiAgICAgICAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2NvdXJzZX0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICBzeD17eyBoZWlnaHQ6ICcxMDAlJyxkaXNwbGF5OiAnZmxleCcsZmxleERpcmVjdGlvbjogJ2NvbHVtbicsYm9yZGVyUmFkaXVzOiAnMTBweCcsIGFsaWduOlwiY2VudGVyXCIsICc6aG92ZXInOiB7Ym94U2hhZG93OiAyMH19fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gMTY6OVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHQ6ICcxMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2NvdXJzZS5pbWFnZVVSTH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJyYW5kb21cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+VmlldzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+UHVyY2hhc2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDYXJkO1xyXG4gICJdLCJzb3VyY2VSb290IjoiIn0=