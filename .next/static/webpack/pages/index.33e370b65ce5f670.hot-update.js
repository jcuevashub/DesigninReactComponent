"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/componets/SpeakersList.js":
/*!***************************************!*\
  !*** ./src/componets/SpeakersList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/componets/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar SpeakersList = function(param) {\n    var showSessions = param.showSessions;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data), speakersData = ref[0], setSpeakersData = ref[1];\n    var onFavoriteToggle = function(id) {\n        console.log(id);\n        var speakersRecPrevious = speakersData.find(function(rec) {\n            rec.id === id;\n        });\n        console.log(speakersRecPrevious);\n        var speakerRecUpdated = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, speakersRecPrevious), {\n            favorite: !speakersRecPrevious.favorite\n        });\n        var speakersDataNew = speakersData.map(function(rec) {\n            rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speaker-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"/Users/jacksoncuevas/DesigninReactComponent/src/componets/SpeakersList.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/jacksoncuevas/DesigninReactComponent/src/componets/SpeakersList.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jacksoncuevas/DesigninReactComponent/src/componets/SpeakersList.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpeakersList, \"wuvWnGDG1cZpF3THbsQMJHztE6w=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZXRzL1NwZWFrZXJzTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7QUFBZ0M7QUFDUztBQUNSO0FBRWpDLElBQU1HLFlBQVksR0FBRyxnQkFBc0I7UUFBbkJDLFlBQVksU0FBWkEsWUFBWTs7SUFDbEMsSUFBd0NGLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQ0QsOENBQUksQ0FBQyxFQUEvQ0ksWUFBWSxHQUFxQkgsR0FBYyxHQUFuQyxFQUFFSSxlQUFlLEdBQUlKLEdBQWMsR0FBbEI7SUFFcEMsSUFBTUssZ0JBQWdCLEdBQUcsU0FBQ0MsRUFBRSxFQUFLO1FBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDLENBQUM7UUFFaEIsSUFBTUcsbUJBQW1CLEdBQUdOLFlBQVksQ0FBQ08sSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUNyREEsR0FBRyxDQUFDTCxFQUFFLEtBQUtBLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUM7UUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQixDQUFDLENBQUM7UUFFakMsSUFBTUcsaUJBQWlCLEdBQUcsd0tBQ3JCSCxtQkFBbUI7WUFDdEJJLFFBQVEsRUFBRSxDQUFDSixtQkFBbUIsQ0FBQ0ksUUFBUTtVQUN4QztRQUVELElBQU1DLGVBQWUsR0FBR1gsWUFBWSxDQUFDWSxHQUFHLENBQUMsU0FBQ0osR0FBRyxFQUFLO1lBQ2hEQSxHQUFHLENBQUNMLEVBQUUsS0FBS0EsRUFBRSxHQUFHTSxpQkFBaUIsR0FBR0QsR0FBRyxDQUFDO1FBQzFDLENBQUMsQ0FBQztRQUVGUCxlQUFlLENBQUNVLGVBQWUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsd0JBQXdCO2tCQUNyQyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsS0FBSztzQkFDakJkLFlBQVksQ0FBQ1ksR0FBRyxDQUFDLFNBQUNHLE9BQU8sRUFBSztnQkFDN0IscUJBQ0UsOERBQUNwQixnREFBTztvQkFFTm9CLE9BQU8sRUFBRUEsT0FBTztvQkFDaEJoQixZQUFZLEVBQUVBLFlBQVk7b0JBQzFCRyxnQkFBZ0IsRUFBRSxXQUFNO3dCQUN0QkEsZ0JBQWdCLENBQUNhLE9BQU8sQ0FBQ1osRUFBRSxDQUFDLENBQUM7b0JBQy9CLENBQUM7bUJBTElZLE9BQU8sQ0FBQ1osRUFBRTs7Ozt5QkFNZixDQUNGO1lBQ0osQ0FBQyxDQUFDOzs7OztpQkFDRTs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQXhDS0wsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBMENsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25ldHMvU3BlYWtlcnNMaXN0LmpzP2UzOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3BlYWtlcnNMaXN0ID0gKHsgc2hvd1Nlc3Npb25zIH0pID0+IHtcbiAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4gIGNvbnN0IG9uRmF2b3JpdGVUb2dnbGUgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG5cbiAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoKHJlYykgPT4ge1xuICAgICAgcmVjLmlkID09PSBpZDtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzcGVha2Vyc1JlY1ByZXZpb3VzKTtcblxuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xuICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcbiAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcCgocmVjKSA9PiB7XG4gICAgICByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG5cbiAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2VyLWxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKChzcGVha2VyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cbiAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xuIl0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlU3RhdGUiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/componets/SpeakersList.js\n"));

/***/ })

});