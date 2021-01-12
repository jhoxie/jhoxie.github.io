(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/healthscheduling.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhealthscheduling&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fhealthscheduling.js!./":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhealthscheduling&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fhealthscheduling.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/healthscheduling", function() {
      var mod = __webpack_require__(/*! ./pages/healthscheduling.js */ "./pages/healthscheduling.js")
      if(true) {
        module.hot.accept(/*! ./pages/healthscheduling.js */ "./pages/healthscheduling.js", function() {
          if(!next.router.components["/healthscheduling"]) return
          var updatedPage = __webpack_require__(/*! ./pages/healthscheduling.js */ "./pages/healthscheduling.js")
          next.router.update("/healthscheduling", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_b29684ed772f9fa2503e ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_b29684ed772f9fa2503e */ "dll-reference dll_b29684ed772f9fa2503e"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/healthscheduling.js":
/*!***********************************!*\
  !*** ./pages/healthscheduling.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/nathanhayflick/Dev/julie-portfolio/pages/healthscheduling.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var HealthScheduling = function HealthScheduling() {
  return __jsx("div", {
    className: "jsx-552376608" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "casestudy-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "section-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, "Healthcare scheduling app"), __jsx("div", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Improve appointment scheduling at a specialized heath clinic"), __jsx("div", {
    style: {
      marginTop: 60
    },
    className: "jsx-552376608" + " " + "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/apptapp-header-2.png",
    className: "jsx-552376608" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-552376608" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "grid one-third-two-thirds full-width-mobile extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "gray sub-panel meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-552376608" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "Client:"), __jsx("span", {
    className: "jsx-552376608" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 58
    }
  }, " Personal project")), __jsx("div", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-552376608" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-552376608" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 56
    }
  }, " September 2019")), __jsx("div", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-552376608" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-552376608" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 57
    }
  }, " Figma, Invision"))), __jsx("div", {
    className: "jsx-552376608" + " " + "quote-blue sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "\u201CHow might we make scheduling appointments more accessible and efficient for patients?\u201D")), __jsx("div", {
    className: "jsx-552376608" + " " + "extra-top-padding problems",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Problems"), __jsx("div", {
    style: {
      flex: '1 0 none'
    },
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "An OBGYN clinic I worked at did not have online scheduling. Patients would either have to call to schedule or send a message to the provider through an online portal. This was time consuming and inconvenient for patients.", __jsx("br", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), __jsx("br", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 27
    }
  }), "There are many factors that go into scheduling such as provider availability, sufficient back office staffing, room availability, and considerations appointment type (i.e. time, supplies)"))), __jsx("div", {
    className: "jsx-552376608" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Simplify the experience with progressive disclosure"), __jsx("div", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "In order to not overwhelm the user and to keep their expectations grounded they had to answer each question successively.", __jsx("br", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-552376608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 23
    }
  }), "For example if a patient chose a provider first and it turned out that provider didn\u2019t perform that procedure then they may be disappointed or frustrated to have to start the process over again."), __jsx("div", {
    className: "jsx-552376608" + " " + "sides-80",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "grid thirds full-width-mobile extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/healthsched-progressive-appt.png",
    className: "jsx-552376608" + " " + "grid-image-scheduling",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/healthsched-progressive-selected.png",
    className: "jsx-552376608" + " " + "grid-image-scheduling",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/healthsched-progressive-portal.png",
    className: "jsx-552376608" + " " + "grid-image-scheduling",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "jsx-552376608" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "When choosing the date, time, and provider I kept it all on the same screen so that the user could easily toggle between different providers or different days to find a time that would work best for them."), __jsx("div", {
    className: "jsx-552376608" + " " + "sides-80",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "grid thirds full-width-mobile extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/healthshed-dateselected.png",
    className: "jsx-552376608" + " " + "grid-image-scheduling",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/healthsched-timeselected.png",
    className: "jsx-552376608" + " " + "grid-image-scheduling",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/healthsched-confirm.png",
    className: "jsx-552376608" + " " + "grid-image-scheduling",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "jsx-552376608" + " " + "grid full-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-552376608" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Prototype"), __jsx("video", {
    controls: true,
    src: "/Schedule_Prototype.mov",
    poster: "/scheduling-cover.png",
    style: {
      maxWidth: 686,
      width: '100%'
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: "jsx-552376608" + " " + "grid-image extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "552376608",
    __self: _this
  }, ".quote-text.jsx-552376608{font-weight:normal;font-size:18px;line-height:36px;padding:36px;padding-bottom:72px;background-image:url(\"/quote-container.svg\");text-align:center;}.grid-image-scheduling.jsx-552376608{object-fit:cover;width:100%;}.portfolio-piece-img.jsx-552376608{max-width:708.22px;}.problems.jsx-552376608{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.problems.jsx-552376608>.section-subheader.jsx-552376608{-webkit-flex:0 0 none;-ms-flex:0 0 none;flex:0 0 none;padding-right:40px;}@media only screen and (max-width:767px){.portfolio-piece-img.jsx-552376608{margin-top:18px;width:184px;height:121.59px;}.problems.jsx-552376608{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.problems.jsx-552376608>.section-subheader.jsx-552376608{padding-right:0x;}.quote-text.jsx-552376608{font-size:12px;line-height:26px;padding:24px 12px;padding-bottom:50px;}.quote-text.jsx-552376608:first-of-type{margin-bottom:18px;}.grid-image-scheduling.jsx-552376608{margin-top:30px;}.grid-image-scheduling.jsx-552376608:first-of-type{margin-top:0px;}.sub-panel.jsx-552376608:first-of-type{margin-bottom:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW5oYXlmbGljay9EZXYvanVsaWUtcG9ydGZvbGlvL3BhZ2VzL2hlYWx0aHNjaGVkdWxpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVvQixBQUdvQyxBQVNGLEFBSUUsQUFHTixBQUlDLEFBS00sQUFLTSxBQUdMLEFBR0YsQUFNSSxBQUdILEFBR0QsQUFHSyxlQWRILEFBWXBCLENBdkJlLEFBb0JmLENBcENVLEFBd0JYLEVBakNlLEFBYW5CLEFBNkJJLEFBU0MsU0F6Q0wsQUFnQndCLElBV0UsRUFwQ0wsVUEwQmpCLE1BV3dCLENBcENYLEdBa0JNLFVBakJDLE1Bb0NwQixHQWxCSixDQUx1QixJQWNuQixNQTFCNkMsNkNBQzNCLGNBWXRCLElBWEEiLCJmaWxlIjoiL1VzZXJzL25hdGhhbmhheWZsaWNrL0Rldi9qdWxpZS1wb3J0Zm9saW8vcGFnZXMvaGVhbHRoc2NoZWR1bGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWx0aFNjaGVkdWxpbmcgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBIZXJvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5IZWFsdGhjYXJlIHNjaGVkdWxpbmcgYXBwPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkltcHJvdmUgYXBwb2ludG1lbnQgc2NoZWR1bGluZyBhdCBhIHNwZWNpYWxpemVkIGhlYXRoIGNsaW5pYzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA2MCB9fT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcnRmb2xpby1waWVjZS1pbWdcIiBzcmM9XCIvYXBwdGFwcC1oZWFkZXItMi5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgey8qIE1ldGEgKi99XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG9uZS10aGlyZC10d28tdGhpcmRzIGZ1bGwtd2lkdGgtbW9iaWxlIGV4dHJhLXRvcC1wYWRkaW5nIG5vLXRvcC1wYWRkaW5nLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBzdWItcGFuZWwgbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Q2xpZW50Ojwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IFBlcnNvbmFsIHByb2plY3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+RGF0ZTo8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBTZXB0ZW1iZXIgMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5Ub29sczo8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBGaWdtYSwgSW52aXNpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtYmx1ZSBzdWItcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAg4oCcSG93IG1pZ2h0IHdlIG1ha2Ugc2NoZWR1bGluZyBhcHBvaW50bWVudHMgbW9yZSBhY2Nlc3NpYmxlIGFuZCBlZmZpY2llbnQgZm9yIHBhdGllbnRzP+KAnVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nIHByb2JsZW1zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9ibGVtc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAnMSAwIG5vbmUnfX0+XG4gICAgICAgICAgICAgICAgICAgIEFuIE9CR1lOIGNsaW5pYyBJIHdvcmtlZCBhdCBkaWQgbm90IGhhdmUgb25saW5lIHNjaGVkdWxpbmcuIFBhdGllbnRzIHdvdWxkIGVpdGhlciBoYXZlIHRvIGNhbGwgdG8gc2NoZWR1bGUgb3Igc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHByb3ZpZGVyIHRocm91Z2ggYW4gb25saW5lIHBvcnRhbC4gVGhpcyB3YXMgdGltZSBjb25zdW1pbmcgYW5kIGluY29udmVuaWVudCBmb3IgcGF0aWVudHMuXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICBUaGVyZSBhcmUgbWFueSBmYWN0b3JzIHRoYXQgZ28gaW50byBzY2hlZHVsaW5nIHN1Y2ggYXMgcHJvdmlkZXIgYXZhaWxhYmlsaXR5LCBzdWZmaWNpZW50IGJhY2sgb2ZmaWNlIHN0YWZmaW5nLCByb29tIGF2YWlsYWJpbGl0eSwgYW5kIGNvbnNpZGVyYXRpb25zIGFwcG9pbnRtZW50IHR5cGUgKGkuZS4gdGltZSwgc3VwcGxpZXMpXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgU2ltcGxpZnkgdGhlIGV4cGVyaWVuY2Ugd2l0aCBwcm9ncmVzc2l2ZSBkaXNjbG9zdXJlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgSW4gb3JkZXIgdG8gbm90IG92ZXJ3aGVsbSB0aGUgdXNlciBhbmQgdG8ga2VlcCB0aGVpciBleHBlY3RhdGlvbnMgZ3JvdW5kZWQgdGhleSBoYWQgdG8gYW5zd2VyIGVhY2ggcXVlc3Rpb24gc3VjY2Vzc2l2ZWx5LiBcbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICBGb3IgZXhhbXBsZSBpZiBhIHBhdGllbnQgY2hvc2UgYSBwcm92aWRlciBmaXJzdCBhbmQgaXQgdHVybmVkIG91dCB0aGF0IHByb3ZpZGVyIGRpZG7igJl0IHBlcmZvcm0gdGhhdCBwcm9jZWR1cmUgdGhlbiB0aGV5IG1heSBiZSBkaXNhcHBvaW50ZWQgb3IgZnJ1c3RyYXRlZCB0byBoYXZlIHRvIHN0YXJ0IHRoZSBwcm9jZXNzIG92ZXIgYWdhaW4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZXMtODBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdGhpcmRzIGZ1bGwtd2lkdGgtbW9iaWxlIGV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZS1zY2hlZHVsaW5nXCIgc3JjPVwiL2hlYWx0aHNjaGVkLXByb2dyZXNzaXZlLWFwcHQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlLXNjaGVkdWxpbmdcIiBzcmM9XCIvaGVhbHRoc2NoZWQtcHJvZ3Jlc3NpdmUtc2VsZWN0ZWQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlLXNjaGVkdWxpbmdcIiBzcmM9XCIvaGVhbHRoc2NoZWQtcHJvZ3Jlc3NpdmUtcG9ydGFsLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICBXaGVuIGNob29zaW5nIHRoZSBkYXRlLCB0aW1lLCBhbmQgcHJvdmlkZXIgSSBrZXB0IGl0IGFsbCBvbiB0aGUgc2FtZSBzY3JlZW4gc28gdGhhdCB0aGUgdXNlciBjb3VsZCBlYXNpbHkgdG9nZ2xlIGJldHdlZW4gZGlmZmVyZW50IHByb3ZpZGVycyBvciBkaWZmZXJlbnQgZGF5cyB0byBmaW5kIGEgdGltZSB0aGF0IHdvdWxkIHdvcmsgYmVzdCBmb3IgdGhlbS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlcy04MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB0aGlyZHMgZnVsbC13aWR0aC1tb2JpbGUgZXh0cmEtdG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlLXNjaGVkdWxpbmdcIiBzcmM9XCIvaGVhbHRoc2hlZC1kYXRlc2VsZWN0ZWQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlLXNjaGVkdWxpbmdcIiBzcmM9XCIvaGVhbHRoc2NoZWQtdGltZXNlbGVjdGVkLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZS1zY2hlZHVsaW5nXCIgc3JjPVwiL2hlYWx0aHNjaGVkLWNvbmZpcm0ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm90b3R5cGVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx2aWRlbyBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL1NjaGVkdWxlX1Byb3RvdHlwZS5tb3ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyPVwiL3NjaGVkdWxpbmctY292ZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2UgZXh0cmEtdG9wLXBhZGRpbmctc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogNjg2LCB3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5IGxvb3AgbXV0ZWQgcGxheXNJbmxpbmUgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnF1b3RlLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDM2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDcycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3F1b3RlLWNvbnRhaW5lci5zdmdcIik7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmdyaWQtaW1hZ2Utc2NoZWR1bGluZyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLXBpZWNlLWltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDguMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9ibGVtcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2JsZW1zID4gLnNlY3Rpb24tc3ViaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIC5wb3J0Zm9saW8tcGllY2UtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4NHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMS41OXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvYmxlbXMge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvYmxlbXMgPiAuc2VjdGlvbi1zdWJoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnF1b3RlLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucXVvdGUtdGV4dDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmdyaWQtaW1hZ2Utc2NoZWR1bGluZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JpZC1pbWFnZS1zY2hlZHVsaW5nOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLnN1Yi1wYW5lbDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhbHRoU2NoZWR1bGluZzsiXX0= */\n/*@ sourceURL=/Users/nathanhayflick/Dev/julie-portfolio/pages/healthscheduling.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HealthScheduling);

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fhealthscheduling&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fhealthscheduling.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fhealthscheduling&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fhealthscheduling.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhealthscheduling&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fhealthscheduling.js!./");


/***/ }),

/***/ "dll-reference dll_b29684ed772f9fa2503e":
/*!*******************************************!*\
  !*** external "dll_b29684ed772f9fa2503e" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_b29684ed772f9fa2503e;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=healthscheduling.js.map