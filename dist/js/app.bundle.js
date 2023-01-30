/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Api.tsx":
/*!*********************!*\
  !*** ./src/Api.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Api = void 0;
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var URL = "https://api.ecowitt.net/api/v3/device/real_time?application_key=4D9EABA31D2BD6FA29D70E3A70708E96&api_key=a67a1528-dcf3-49ef-b670-4d5a76478065&mac=30:83:98:A7:44:CC&call_back=all&temp_unitid=1&wind_speed_unitid=6&rainfall_unitid=12";
var Api = (function () {
    function Api() {
    }
    Api.Get = function (url, signal) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default.get(url, {
                            signal: signal,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    Api.getWeather = function (signal) {
        return Api.Get(URL, signal);
    };
    return Api;
}());
exports.Api = Api;


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var client_1 = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
var styles_1 = __webpack_require__(/*! @independent-software/typeui/styles */ "./node_modules/@independent-software/typeui/styles/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var Screen_1 = __webpack_require__(/*! ./Screen */ "./src/Screen.tsx");
var MyTheme = __assign(__assign({}, styles_1.Theme), { radius: 4 });
var App = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement(styles_1.StyleReset, null),
        React.createElement(styles_1.StyleBase, null),
        React.createElement(styled_components_1.ThemeProvider, { theme: MyTheme },
            React.createElement(Screen_1.Screen, null)));
};
exports.App = App;
var root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(React.createElement(App, null));
if (false) {}


/***/ }),

/***/ "./src/Chart.tsx":
/*!***********************!*\
  !*** ./src/Chart.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chart = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Theme_1 = __webpack_require__(/*! @independent-software/typeui/styles/Theme */ "./node_modules/@independent-software/typeui/styles/Theme.js");
var Api_1 = __webpack_require__(/*! ./Api */ "./src/Api.tsx");
var recharts_1 = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
var recharts_2 = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
var date_fns_1 = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
var ChartBase = function (props) {
    var timerID = React.useRef(null);
    var _a = React.useState([]), weathers = _a[0], setWeathers = _a[1];
    var loadData = function () {
        Api_1.Api.getWeather()
            .then(function (weather) {
            setWeathers(function (weathers) { return __spreadArray(__spreadArray([], weathers, true), [weather], false); });
        });
    };
    var onTime = function () {
        loadData();
    };
    React.useEffect(function () {
        timerID.current = window.setInterval(onTime, 3000);
        return function () { return window.clearInterval(timerID.current); };
    }, []);
    var getData = function () {
        return weathers.map(function (weather) {
            return {
                time: weather.time,
                wind_gust: parseFloat(weather.data.wind.wind_speed.value),
                temp: parseFloat(weather.data.outdoor.temperature.value)
            };
        });
    };
    return (React.createElement("div", { className: props.className },
        React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
            React.createElement(recharts_2.LineChart, { data: getData() },
                React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                React.createElement(recharts_1.XAxis, { dataKey: "time", domain: ['auto', 'auto'], tickFormatter: function (value) {
                        if (value === "auto")
                            return value;
                        var d = new Date(0);
                        d.setUTCSeconds(value);
                        return (0, date_fns_1.format)(d, "dd MM HH:mm:ss");
                    } }),
                React.createElement(recharts_1.YAxis, null),
                React.createElement(recharts_1.Line, { name: "Wind gust", dataKey: "wind_gust", stroke: "#8884d8", isAnimationActive: false }),
                React.createElement(recharts_1.Line, { name: "Temp", dataKey: "temp", stroke: "#d48648", isAnimationActive: false }),
                React.createElement(recharts_1.Legend, null)))));
};
var Chart = (0, Theme_1.default)(ChartBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  background: white;\n  padding: 32px;\n"], ["\n  flex: 1;\n  background: white;\n  padding: 32px;\n"])));
exports.Chart = Chart;
var templateObject_1;


/***/ }),

/***/ "./src/Footer.tsx":
/*!************************!*\
  !*** ./src/Footer.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Footer = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Theme_1 = __webpack_require__(/*! @independent-software/typeui/styles/Theme */ "./node_modules/@independent-software/typeui/styles/Theme.js");
var FooterBase = function (props) {
    return React.createElement("div", { className: props.className }, "Data from Jo\u00E3o's rooftop");
};
var Footer = (0, Theme_1.default)(FooterBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 50px;\n  display: flex;\n  box-sizing: border-box;\n  background: #333;\n  color: #fff;\n  padding: 14px 16px 0 16px;\n"], ["\n  height: 50px;\n  display: flex;\n  box-sizing: border-box;\n  background: #333;\n  color: #fff;\n  padding: 14px 16px 0 16px;\n"])));
exports.Footer = Footer;
var templateObject_1;


/***/ }),

/***/ "./src/Header.tsx":
/*!************************!*\
  !*** ./src/Header.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Header = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Theme_1 = __webpack_require__(/*! @independent-software/typeui/styles/Theme */ "./node_modules/@independent-software/typeui/styles/Theme.js");
var HeaderBase = function (props) {
    return React.createElement("div", { className: props.className }, "Ecowitt");
};
var Header = (0, Theme_1.default)(HeaderBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 1;\n  height: 60px;\n  padding-top: 15px;\n  padding-left: 16px;\n  box-sizing: border-box;\n  background: skyblue;\n  border-bottom: solid 1px #333;\n  font-size: 18px;\n  font-weight: 500;\n  box-shadow: 0 1px 2px rgb(0,0,0,0.5);\n"], ["\n  z-index: 1;\n  height: 60px;\n  padding-top: 15px;\n  padding-left: 16px;\n  box-sizing: border-box;\n  background: skyblue;\n  border-bottom: solid 1px #333;\n  font-size: 18px;\n  font-weight: 500;\n  box-shadow: 0 1px 2px rgb(0,0,0,0.5);\n"])));
exports.Header = Header;
var templateObject_1;


/***/ }),

/***/ "./src/Screen.tsx":
/*!************************!*\
  !*** ./src/Screen.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Screen = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Theme_1 = __webpack_require__(/*! @independent-software/typeui/styles/Theme */ "./node_modules/@independent-software/typeui/styles/Theme.js");
var Header_1 = __webpack_require__(/*! ./Header */ "./src/Header.tsx");
var Chart_1 = __webpack_require__(/*! ./Chart */ "./src/Chart.tsx");
var Footer_1 = __webpack_require__(/*! ./Footer */ "./src/Footer.tsx");
var ScreenBase = function (props) {
    return React.createElement("div", { className: props.className },
        React.createElement(Header_1.Header, null),
        React.createElement(Chart_1.Chart, null),
        React.createElement(Footer_1.Footer, null));
};
var Screen = (0, Theme_1.default)(ScreenBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n\n  display: flex;\n  flex-direction: column;\n  \n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n\n  display: flex;\n  flex-direction: column;\n  \n"])));
exports.Screen = Screen;
var templateObject_1;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkecowitt"] = self["webpackChunkecowitt"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/App.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map