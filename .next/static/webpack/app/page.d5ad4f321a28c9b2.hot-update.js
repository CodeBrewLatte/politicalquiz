"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Results.js":
/*!***********************************!*\
  !*** ./app/components/Results.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst detailedReasons = {\n    \"A\": {\n        \"healthcare\": \"Kamala Harris supports a public option alongside private insurance, aiming to expand healthcare access.\",\n        \"taxation\": \"Kamala Harris supports increasing taxes on the wealthy to fund social programs.\",\n        \"climateChange\": \"Kamala Harris views climate change as a critical issue that requires immediate and significant government action.\",\n        \"immigration\": \"Kamala Harris supports providing a path to citizenship for undocumented immigrants and increasing legal immigration.\",\n        \"incomeInequality\": \"Kamala Harris supports policies to redistribute wealth, such as higher taxes on the wealthy and increased social spending.\",\n        \"gunControl\": \"Kamala Harris supports strict gun control laws and background checks.\",\n        \"lgbtqRights\": \"Kamala Harris fully supports LGBTQ+ rights, including marriage equality and anti-discrimination laws.\",\n        \"foreignPolicy\": \"Kamala Harris promotes diplomacy and international cooperation, reducing military interventions.\",\n        \"education\": \"Kamala Harris supports increasing funding for public schools and making higher education free or affordable.\",\n        \"socialWelfare\": \"Kamala Harris supports expanding social welfare programs to support the needy and reduce poverty.\"\n    },\n    \"C\": {\n        \"healthcare\": \"Donald Trump supports leaving healthcare primarily to private companies with minimal government intervention.\",\n        \"taxation\": \"Donald Trump supports lowering taxes across the board to stimulate economic growth.\",\n        \"climateChange\": \"Donald Trump views climate change as an issue but believes government regulation should be limited.\",\n        \"immigration\": \"Donald Trump supports increasing border security and reducing the number of legal immigrants allowed.\",\n        \"incomeInequality\": \"Donald Trump believes income inequality is not a major concern that requires government action.\",\n        \"gunControl\": \"Donald Trump supports protecting the Second Amendment rights with minimal restrictions.\",\n        \"lgbtqRights\": \"Donald Trump respects individuals' choices but opposes government mandates on private businesses.\",\n        \"foreignPolicy\": \"Donald Trump focuses on national interests with limited involvement in global conflicts.\",\n        \"education\": \"Donald Trump supports increasing school choice and reducing government involvement in education.\",\n        \"socialWelfare\": \"Donald Trump supports reducing the scope of social welfare and promoting work incentives.\"\n    }\n};\nconst Results = (param)=>{\n    let { score, reasons } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-center p-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-2xl w-full bg-white rounded-lg shadow-md p-8 dark:bg-gray-800\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-4\",\n                    children: \"Your Results\"\n                }, void 0, false, {\n                    fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-2\",\n                    children: [\n                        \"Alignment with Donald Trump: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: [\n                                score.trump,\n                                \"/10\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                            lineNumber: 34,\n                            columnNumber: 56\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-2\",\n                    children: [\n                        \"Alignment with Kamala Harris: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: [\n                                score.harris,\n                                \"/10\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                            lineNumber: 35,\n                            columnNumber: 57\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-4\",\n                    children: [\n                        \"Neutral Responses: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: [\n                                score.neutral,\n                                \"/10\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                            lineNumber: 36,\n                            columnNumber: 46\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-xl font-semibold mt-4\",\n                    children: \"Reasons for Scores:\"\n                }, void 0, false, {\n                    fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-disc list-inside mt-2 space-y-2\",\n                    children: reasons.map((reason, index)=>{\n                        var _detailedReasons_reason_answer;\n                        const detailedReason = ((_detailedReasons_reason_answer = detailedReasons[reason.answer]) === null || _detailedReasons_reason_answer === void 0 ? void 0 : _detailedReasons_reason_answer[reason.topic]) || \"No detailed reason available.\";\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"leading-relaxed\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            \"Question \",\n                                            index + 1,\n                                            \":\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    ' You answered \"',\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: reason.answer\n                                    }, void 0, false, {\n                                        fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 70\n                                    }, undefined),\n                                    '\" which aligns with ',\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: reason.candidate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 122\n                                    }, undefined),\n                                    \" because \",\n                                    detailedReason,\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/SteveBenner/Desktop/politicalquiz/app/components/Results.js\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Jlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsa0JBQWtCO0lBQ3RCLEtBQUs7UUFDSCxjQUFjO1FBQ2QsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixpQkFBaUI7SUFDbkI7SUFDQSxLQUFLO1FBQ0gsY0FBYztRQUNkLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsaUJBQWlCO0lBQ25CO0FBQ0Y7QUFFQSxNQUFNQyxVQUFVO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUU7eUJBQ2pDLDhEQUFDQztRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQThCOzs7Ozs7OEJBQzVDLDhEQUFDRztvQkFBRUgsV0FBVTs7d0JBQU87c0NBQTZCLDhEQUFDSTs7Z0NBQVFQLE1BQU1RLEtBQUs7Z0NBQUM7Ozs7Ozs7Ozs7Ozs7OEJBQ3RFLDhEQUFDRjtvQkFBRUgsV0FBVTs7d0JBQU87c0NBQThCLDhEQUFDSTs7Z0NBQVFQLE1BQU1TLE1BQU07Z0NBQUM7Ozs7Ozs7Ozs7Ozs7OEJBQ3hFLDhEQUFDSDtvQkFBRUgsV0FBVTs7d0JBQU87c0NBQW1CLDhEQUFDSTs7Z0NBQVFQLE1BQU1VLE9BQU87Z0NBQUM7Ozs7Ozs7Ozs7Ozs7OEJBQzlELDhEQUFDQztvQkFBR1IsV0FBVTs4QkFBNkI7Ozs7Ozs4QkFDM0MsOERBQUNTO29CQUFHVCxXQUFVOzhCQUNYRixRQUFRWSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7NEJBQ0dqQjt3QkFBdkIsTUFBTWtCLGlCQUFpQmxCLEVBQUFBLGlDQUFBQSxlQUFlLENBQUNnQixPQUFPRyxNQUFNLENBQUMsY0FBOUJuQixxREFBQUEsOEJBQWdDLENBQUNnQixPQUFPSSxLQUFLLENBQUMsS0FBSTt3QkFDekUscUJBQ0UsOERBQUNDOzRCQUFlaEIsV0FBVTtzQ0FDeEIsNEVBQUNHOztrREFDQyw4REFBQ0M7OzRDQUFPOzRDQUFVUSxRQUFROzRDQUFFOzs7Ozs7O29DQUFVO2tEQUFlLDhEQUFDUjtrREFBUU8sT0FBT0csTUFBTTs7Ozs7O29DQUFVO2tEQUFvQiw4REFBQ1Y7a0RBQVFPLE9BQU9NLFNBQVM7Ozs7OztvQ0FBVTtvQ0FBVUo7b0NBQWU7Ozs7Ozs7MkJBRmhLRDs7Ozs7b0JBTWI7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWxCRmhCO0FBd0JOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Jlc3VsdHMuanM/NjRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZXRhaWxlZFJlYXNvbnMgPSB7XG4gIFwiQVwiOiB7XG4gICAgXCJoZWFsdGhjYXJlXCI6IFwiS2FtYWxhIEhhcnJpcyBzdXBwb3J0cyBhIHB1YmxpYyBvcHRpb24gYWxvbmdzaWRlIHByaXZhdGUgaW5zdXJhbmNlLCBhaW1pbmcgdG8gZXhwYW5kIGhlYWx0aGNhcmUgYWNjZXNzLlwiLFxuICAgIFwidGF4YXRpb25cIjogXCJLYW1hbGEgSGFycmlzIHN1cHBvcnRzIGluY3JlYXNpbmcgdGF4ZXMgb24gdGhlIHdlYWx0aHkgdG8gZnVuZCBzb2NpYWwgcHJvZ3JhbXMuXCIsXG4gICAgXCJjbGltYXRlQ2hhbmdlXCI6IFwiS2FtYWxhIEhhcnJpcyB2aWV3cyBjbGltYXRlIGNoYW5nZSBhcyBhIGNyaXRpY2FsIGlzc3VlIHRoYXQgcmVxdWlyZXMgaW1tZWRpYXRlIGFuZCBzaWduaWZpY2FudCBnb3Zlcm5tZW50IGFjdGlvbi5cIixcbiAgICBcImltbWlncmF0aW9uXCI6IFwiS2FtYWxhIEhhcnJpcyBzdXBwb3J0cyBwcm92aWRpbmcgYSBwYXRoIHRvIGNpdGl6ZW5zaGlwIGZvciB1bmRvY3VtZW50ZWQgaW1taWdyYW50cyBhbmQgaW5jcmVhc2luZyBsZWdhbCBpbW1pZ3JhdGlvbi5cIixcbiAgICBcImluY29tZUluZXF1YWxpdHlcIjogXCJLYW1hbGEgSGFycmlzIHN1cHBvcnRzIHBvbGljaWVzIHRvIHJlZGlzdHJpYnV0ZSB3ZWFsdGgsIHN1Y2ggYXMgaGlnaGVyIHRheGVzIG9uIHRoZSB3ZWFsdGh5IGFuZCBpbmNyZWFzZWQgc29jaWFsIHNwZW5kaW5nLlwiLFxuICAgIFwiZ3VuQ29udHJvbFwiOiBcIkthbWFsYSBIYXJyaXMgc3VwcG9ydHMgc3RyaWN0IGd1biBjb250cm9sIGxhd3MgYW5kIGJhY2tncm91bmQgY2hlY2tzLlwiLFxuICAgIFwibGdidHFSaWdodHNcIjogXCJLYW1hbGEgSGFycmlzIGZ1bGx5IHN1cHBvcnRzIExHQlRRKyByaWdodHMsIGluY2x1ZGluZyBtYXJyaWFnZSBlcXVhbGl0eSBhbmQgYW50aS1kaXNjcmltaW5hdGlvbiBsYXdzLlwiLFxuICAgIFwiZm9yZWlnblBvbGljeVwiOiBcIkthbWFsYSBIYXJyaXMgcHJvbW90ZXMgZGlwbG9tYWN5IGFuZCBpbnRlcm5hdGlvbmFsIGNvb3BlcmF0aW9uLCByZWR1Y2luZyBtaWxpdGFyeSBpbnRlcnZlbnRpb25zLlwiLFxuICAgIFwiZWR1Y2F0aW9uXCI6IFwiS2FtYWxhIEhhcnJpcyBzdXBwb3J0cyBpbmNyZWFzaW5nIGZ1bmRpbmcgZm9yIHB1YmxpYyBzY2hvb2xzIGFuZCBtYWtpbmcgaGlnaGVyIGVkdWNhdGlvbiBmcmVlIG9yIGFmZm9yZGFibGUuXCIsXG4gICAgXCJzb2NpYWxXZWxmYXJlXCI6IFwiS2FtYWxhIEhhcnJpcyBzdXBwb3J0cyBleHBhbmRpbmcgc29jaWFsIHdlbGZhcmUgcHJvZ3JhbXMgdG8gc3VwcG9ydCB0aGUgbmVlZHkgYW5kIHJlZHVjZSBwb3ZlcnR5LlwiXG4gIH0sXG4gIFwiQ1wiOiB7XG4gICAgXCJoZWFsdGhjYXJlXCI6IFwiRG9uYWxkIFRydW1wIHN1cHBvcnRzIGxlYXZpbmcgaGVhbHRoY2FyZSBwcmltYXJpbHkgdG8gcHJpdmF0ZSBjb21wYW5pZXMgd2l0aCBtaW5pbWFsIGdvdmVybm1lbnQgaW50ZXJ2ZW50aW9uLlwiLFxuICAgIFwidGF4YXRpb25cIjogXCJEb25hbGQgVHJ1bXAgc3VwcG9ydHMgbG93ZXJpbmcgdGF4ZXMgYWNyb3NzIHRoZSBib2FyZCB0byBzdGltdWxhdGUgZWNvbm9taWMgZ3Jvd3RoLlwiLFxuICAgIFwiY2xpbWF0ZUNoYW5nZVwiOiBcIkRvbmFsZCBUcnVtcCB2aWV3cyBjbGltYXRlIGNoYW5nZSBhcyBhbiBpc3N1ZSBidXQgYmVsaWV2ZXMgZ292ZXJubWVudCByZWd1bGF0aW9uIHNob3VsZCBiZSBsaW1pdGVkLlwiLFxuICAgIFwiaW1taWdyYXRpb25cIjogXCJEb25hbGQgVHJ1bXAgc3VwcG9ydHMgaW5jcmVhc2luZyBib3JkZXIgc2VjdXJpdHkgYW5kIHJlZHVjaW5nIHRoZSBudW1iZXIgb2YgbGVnYWwgaW1taWdyYW50cyBhbGxvd2VkLlwiLFxuICAgIFwiaW5jb21lSW5lcXVhbGl0eVwiOiBcIkRvbmFsZCBUcnVtcCBiZWxpZXZlcyBpbmNvbWUgaW5lcXVhbGl0eSBpcyBub3QgYSBtYWpvciBjb25jZXJuIHRoYXQgcmVxdWlyZXMgZ292ZXJubWVudCBhY3Rpb24uXCIsXG4gICAgXCJndW5Db250cm9sXCI6IFwiRG9uYWxkIFRydW1wIHN1cHBvcnRzIHByb3RlY3RpbmcgdGhlIFNlY29uZCBBbWVuZG1lbnQgcmlnaHRzIHdpdGggbWluaW1hbCByZXN0cmljdGlvbnMuXCIsXG4gICAgXCJsZ2J0cVJpZ2h0c1wiOiBcIkRvbmFsZCBUcnVtcCByZXNwZWN0cyBpbmRpdmlkdWFscycgY2hvaWNlcyBidXQgb3Bwb3NlcyBnb3Zlcm5tZW50IG1hbmRhdGVzIG9uIHByaXZhdGUgYnVzaW5lc3Nlcy5cIixcbiAgICBcImZvcmVpZ25Qb2xpY3lcIjogXCJEb25hbGQgVHJ1bXAgZm9jdXNlcyBvbiBuYXRpb25hbCBpbnRlcmVzdHMgd2l0aCBsaW1pdGVkIGludm9sdmVtZW50IGluIGdsb2JhbCBjb25mbGljdHMuXCIsXG4gICAgXCJlZHVjYXRpb25cIjogXCJEb25hbGQgVHJ1bXAgc3VwcG9ydHMgaW5jcmVhc2luZyBzY2hvb2wgY2hvaWNlIGFuZCByZWR1Y2luZyBnb3Zlcm5tZW50IGludm9sdmVtZW50IGluIGVkdWNhdGlvbi5cIixcbiAgICBcInNvY2lhbFdlbGZhcmVcIjogXCJEb25hbGQgVHJ1bXAgc3VwcG9ydHMgcmVkdWNpbmcgdGhlIHNjb3BlIG9mIHNvY2lhbCB3ZWxmYXJlIGFuZCBwcm9tb3Rpbmcgd29yayBpbmNlbnRpdmVzLlwiXG4gIH1cbn07XG5cbmNvbnN0IFJlc3VsdHMgPSAoeyBzY29yZSwgcmVhc29ucyB9KSA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLThcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCB3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC04IGRhcms6YmctZ3JheS04MDBcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5Zb3VyIFJlc3VsdHM8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPkFsaWdubWVudCB3aXRoIERvbmFsZCBUcnVtcDogPHN0cm9uZz57c2NvcmUudHJ1bXB9LzEwPC9zdHJvbmc+PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPkFsaWdubWVudCB3aXRoIEthbWFsYSBIYXJyaXM6IDxzdHJvbmc+e3Njb3JlLmhhcnJpc30vMTA8L3N0cm9uZz48L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+TmV1dHJhbCBSZXNwb25zZXM6IDxzdHJvbmc+e3Njb3JlLm5ldXRyYWx9LzEwPC9zdHJvbmc+PC9wPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtdC00XCI+UmVhc29ucyBmb3IgU2NvcmVzOjwvaDM+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIG10LTIgc3BhY2UteS0yXCI+XG4gICAgICAgIHtyZWFzb25zLm1hcCgocmVhc29uLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldGFpbGVkUmVhc29uID0gZGV0YWlsZWRSZWFzb25zW3JlYXNvbi5hbnN3ZXJdPy5bcmVhc29uLnRvcGljXSB8fCBcIk5vIGRldGFpbGVkIHJlYXNvbiBhdmFpbGFibGUuXCI7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5RdWVzdGlvbiB7aW5kZXggKyAxfTo8L3N0cm9uZz4gWW91IGFuc3dlcmVkIFwiPHN0cm9uZz57cmVhc29uLmFuc3dlcn08L3N0cm9uZz5cIiB3aGljaCBhbGlnbnMgd2l0aCA8c3Ryb25nPntyZWFzb24uY2FuZGlkYXRlfTwvc3Ryb25nPiBiZWNhdXNlIHtkZXRhaWxlZFJlYXNvbn0uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L21haW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZGV0YWlsZWRSZWFzb25zIiwiUmVzdWx0cyIsInNjb3JlIiwicmVhc29ucyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJzdHJvbmciLCJ0cnVtcCIsImhhcnJpcyIsIm5ldXRyYWwiLCJoMyIsInVsIiwibWFwIiwicmVhc29uIiwiaW5kZXgiLCJkZXRhaWxlZFJlYXNvbiIsImFuc3dlciIsInRvcGljIiwibGkiLCJjYW5kaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Results.js\n"));

/***/ })

});