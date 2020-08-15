(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/healthkeep.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhealthkeep&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fhealthkeep.js!./":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhealthkeep&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fhealthkeep.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/healthkeep", function() {
      var mod = __webpack_require__(/*! ./pages/healthkeep.js */ "./pages/healthkeep.js")
      if(true) {
        module.hot.accept(/*! ./pages/healthkeep.js */ "./pages/healthkeep.js", function() {
          if(!next.router.components["/healthkeep"]) return
          var updatedPage = __webpack_require__(/*! ./pages/healthkeep.js */ "./pages/healthkeep.js")
          next.router.update("/healthkeep", updatedPage)
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

/***/ "./pages/healthkeep.js":
/*!*****************************!*\
  !*** ./pages/healthkeep.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/jewelyhoxie/code/julie-portfolio/pages/healthkeep.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Healthkeep = function Healthkeep() {
  return __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "grid two-thirds-one-third full-width-mobile extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      margin: 'auto 0'
    },
    className: "jsx-363080028" + " " + "grid-tile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }, "Health screening app"), __jsx("div", {
    className: "jsx-363080028" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, "How user research helped guide a major pivot")), __jsx("div", {
    className: "jsx-363080028" + " " + "grid-tile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/healthkeep-header.png",
    className: "jsx-363080028" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "grid half-and-half full-width-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      alignSelf: 'start'
    },
    className: "jsx-363080028" + " " + "gray sub-panel meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-363080028" + " " + "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-363080028" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 62
    }
  }, " August 2019")), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-363080028" + " " + "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "Client:"), __jsx("span", {
    className: "jsx-363080028" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 64
    }
  }, " Personal project")), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-363080028" + " " + "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-363080028" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 63
    }
  }, " Figma, Google survey, Whimsical"))))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "You are sitting in your new doctor\u2019s office.", __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }), "You are asked about your recent screenings. You did not bring your health records. You do not have access to your previous healthcare portal.", __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }), "Luckily you have Health Keep and you can quickly and securely open the app to find your most recent test results and recommendations.")), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Your health in your own hands"), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "As a registered nurse at an OBGYN clinic I helped people have a better understanding of their health. I wanted patients to have more autonomy to learn and have confidence in their health.", __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }), "Two problems I wanted to solve for:")), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "gray sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Medical jargon and anxiety creates barriers to understanding"), __jsx("li", {
    style: {
      paddingBottom: 0
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "People often do not know what procedures they have had and/or do not remember when they had them.")))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "I set out to create a educational tool to help people understanding what they were being screened for and what their individual results meant.", __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }), "But then user research changed everything.", __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }), "After some competitve analysis and before sketching, I conducted user interviews. I learned that one of the big issues people were facing was constantly changing jobs, locations, insurance, and ultimately, healthcare providers.", __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }), "This led my to my third problem:"), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "gray sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("li", {
    style: {
      paddingBottom: 0
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "Our health care records are fragmented and/or incomplete.")))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "Goals:", __jsx("div", {
    className: "jsx-363080028" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "gray sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, "Easily navigate and maintain personal health information"), __jsx("li", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, "Clearly understand what is being screened for, what the results mean, and when to follow up"), __jsx("li", {
    style: {
      paddingBottom: 0
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "Decrease anxiety with an inituitive and calming interface"))))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "People want access and autonomy over their health information"), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "User testing showed that one easily accessible place to store all healthcare data would bring greater clarity and autonomy over someone\u2019s health status and how to manage their care going forward. The app is a space that offers understanding and self-advocacy."), __jsx("div", {
    className: "jsx-363080028" + " " + "extra-top-padding img-grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "gray img-grid-subcontainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/healthkeep-sketches1.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }), __jsx("img", {
    src: "/healthkeep-sketches2.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/healthkeep-sketches3.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }), __jsx("img", {
    src: "/healthkeep-flow.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  })), __jsx("div", {
    style: {
      textAlgin: 'center',
      margin: 'auto'
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("i", {
    style: {
      fontSize: 16,
      lineHeight: '19px'
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "Sketches; user flow"))))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Minimalist UI to create a sense of calm"), __jsx("div", {
    className: "jsx-363080028" + " " + "sense-of-calm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/healthkeep-font.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/healthkeep-icons.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/healthkeep-buttons.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/healthkeep-color.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Back to the drawing board"), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Intially I kept people\u2019s results secure and private by making a card that pulls down to reveal the result. However, during my next round of user testing I found that the card pulling down was actually confusing instead of delightful."), __jsx("div", {
    className: "jsx-363080028" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "gray drawing-board",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "drawing-board-img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/healthkeep-early1.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }), __jsx("div", {
    style: {
      textAlign: 'center',
      marginTop: 10
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, __jsx("i", {
    style: {
      fontSize: 16,
      lineHeight: '19px'
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, "Main screen"))), __jsx("div", {
    className: "jsx-363080028" + " " + "drawing-board-img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/healthkeep-early2.png",
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }), __jsx("div", {
    style: {
      textAlign: 'center',
      marginTop: 10
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, __jsx("i", {
    style: {
      fontSize: 16,
      lineHeight: '19px'
    },
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, "Card reveal"))))), __jsx("div", {
    className: "jsx-363080028" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "I went back to sketching and found a pattern that solved the issue of privacy while also being a more common and friendly design."))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, "Result storage with privacy in mind"), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, "Initially opening the app would require a password everytime you open and close the app and would have a timed lockout. Once signed in, the actual results are still covered and only exposed when the user pressed the arrow to reveal them."), __jsx("div", {
    className: "jsx-363080028" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "final-img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/healthkeep-final1.png",
    className: "jsx-363080028" + " " + "final-img final-img-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, "Option to turn on or off due date alerts so that the user has more control over their privacy"), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "final-img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/healthkeep-final2.png",
    className: "jsx-363080028" + " " + "final-img final-img-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, "Interpretations based on the user\u2019s personal result history"), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "final-img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/healthkeep-final3.png",
    className: "jsx-363080028" + " " + "final-img final-img-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  })))), __jsx("div", {
    style: {
      paddingBottom: 120
    },
    className: "jsx-363080028" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-363080028" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, "Future"), __jsx("div", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, "If I had more time and resources for this project it would be great to collaborate with other designers and software engineers for more feedback and to also cast a wider net of people for the user research.", __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-363080028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 23
    }
  }), "I made the app based on my experiencing in OBGYN and I would be curious to learn more about other healthcare specialities to see how the other screenings might fit into this app and how I might need to change the app to make it more adaptable to other specialities.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "363080028",
    __self: _this
  }, ".portfolio-piece-img.jsx-363080028{width:335px;height:249px;margin-top:0;margin-right:80px;}.sense-of-calm.jsx-363080028{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.sense-of-calm.jsx-363080028 img.jsx-363080028{margin:10px;width:357px;}.drawing-board.jsx-363080028{margin:auto;width:692px;padding:10px;borderRadius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.drawing-board.jsx-363080028 img.jsx-363080028{width:294px;}.drawing-board-img-container.jsx-363080028{margin:20px;}.final-img-1.jsx-363080028{width:561px;}.final-img-2.jsx-363080028{width:948px;}.final-img-3.jsx-363080028{width:661px;}.img-grid-container.jsx-363080028 img.jsx-363080028{margin:10px;}.img-grid-subcontainer.jsx-363080028{margin:auto;width:400px;padding:10px;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.img-grid-subcontainer.jsx-363080028>div.jsx-363080028{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.img-grid-subcontainer.jsx-363080028 img.jsx-363080028{width:166px;}@media only screen and (max-width:767px){.img-grid-subcontainer.jsx-363080028{width:327px;}.img-grid-subcontainer.jsx-363080028 img.jsx-363080028{width:148px;}.portfolio-piece-img.jsx-363080028{margin-top:33px;margin-right:0;}.sense-of-calm.jsx-363080028{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sense-of-calm.jsx-363080028>div.jsx-363080028{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sense-of-calm.jsx-363080028 img.jsx-363080028{width:327px;}.img-grid-container.jsx-363080028 img.jsx-363080028{margin:4px;}.drawing-board.jsx-363080028{width:327px;}.drawing-board.jsx-363080028 img.jsx-363080028{width:130px;}.drawing-board-img-container.jsx-363080028{margin:10px;}.final-img-1.jsx-363080028{width:328px;}.final-img-2.jsx-363080028{width:327px;}.final-img-3.jsx-363080028{width:327px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9jb2RlL2p1bGllLXBvcnRmb2xpby9wYWdlcy9oZWFsdGhrZWVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Nb0IsQUFHNkIsQUFNQyxBQU1ELEFBSUEsQUFTQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQVNDLEFBTUQsQUFJSSxBQUdBLEFBR0ksQUFJTSxBQUdBLEFBSVYsQUFHRCxBQUdDLEFBR0EsQUFHQSxBQU1BLEFBR0EsQUFHQSxXQXBCaEIsQ0FsRmEsQUFZRCxBQUlBLEFBU2hCLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdnQixBQWVoQixBQUlJLEFBR0EsQUFjQSxBQU1BLEFBR0EsQUFHQSxBQU1BLEFBR0EsQUFHQSxJQW5DbUIsUUF2RHZCLEFBSWlCLEFBMkJBLENBM0NBLE1Bb0ViLE1BbkRpQixBQTJCQyxDQTNDQSxnQkFpQkwsQ0EyQkEsQ0EzQ2pCLGtCQUd1QixBQThDQSxJQW9CbkIsQUFHaUIsa0RBdkRLLENBMkJBLGNBeENILEFBOENBLFNBdUJuQixzREF2RHVCLENBMkJBLDZCQXhDQSxBQThDQSwrRUFoQzNCLENBMkJBLG1CQXhDQSxBQThDQSIsImZpbGUiOiIvVXNlcnMvamV3ZWx5aG94aWUvY29kZS9qdWxpZS1wb3J0Zm9saW8vcGFnZXMvaGVhbHRoa2VlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWx0aGtlZXAgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBIZXJvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB0d28tdGhpcmRzLW9uZS10aGlyZCBmdWxsLXdpZHRoLW1vYmlsZSBleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC10aWxlXCIgc3R5bGU9e3ttYXJnaW46ICdhdXRvIDAnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5IZWFsdGggc2NyZWVuaW5nIGFwcDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPkhvdyB1c2VyIHJlc2VhcmNoIGhlbHBlZCBndWlkZSBhIG1ham9yIHBpdm90PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXRpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3J0Zm9saW8tcGllY2UtaW1nXCIgc3JjPVwiL2hlYWx0aGtlZXAtaGVhZGVyLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICB7LyogTWV0YSAqL31cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgaGFsZi1hbmQtaGFsZiBmdWxsLXdpZHRoLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBzdWItcGFuZWwgbWV0YVwiIHN0eWxlPXt7IGFsaWduU2VsZjogJ3N0YXJ0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lZGl1bVwiPkRhdGU6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gQXVndXN0IDIwMTk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVkaXVtXCI+Q2xpZW50Ojwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IFBlcnNvbmFsIHByb2plY3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVkaXVtXCI+VG9vbHM6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gRmlnbWEsIEdvb2dsZSBzdXJ2ZXksIFdoaW1zaWNhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgWW91IGFyZSBzaXR0aW5nIGluIHlvdXIgbmV3IGRvY3RvcuKAmXMgb2ZmaWNlLiAgXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIFlvdSBhcmUgYXNrZWQgYWJvdXQgeW91ciByZWNlbnQgc2NyZWVuaW5ncy4gWW91IGRpZCBub3QgYnJpbmcgeW91ciBoZWFsdGggcmVjb3Jkcy4gWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB5b3VyIHByZXZpb3VzIGhlYWx0aGNhcmUgcG9ydGFsLlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICBMdWNraWx5IHlvdSBoYXZlIEhlYWx0aCBLZWVwIGFuZCB5b3UgY2FuIHF1aWNrbHkgYW5kIHNlY3VyZWx5IG9wZW4gdGhlIGFwcCB0byBmaW5kIHlvdXIgbW9zdCByZWNlbnQgdGVzdCByZXN1bHRzIGFuZCByZWNvbW1lbmRhdGlvbnMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgWW91ciBoZWFsdGggaW4geW91ciBvd24gaGFuZHNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEFzIGEgcmVnaXN0ZXJlZCBudXJzZSBhdCBhbiBPQkdZTiBjbGluaWMgSSBoZWxwZWQgcGVvcGxlIGhhdmUgYSBiZXR0ZXIgdW5kZXJzdGFuZGluZyBvZiB0aGVpciBoZWFsdGguIEkgd2FudGVkIHBhdGllbnRzIHRvIGhhdmUgbW9yZSBhdXRvbm9teSB0byBsZWFybiBhbmQgaGF2ZSBjb25maWRlbmNlIGluIHRoZWlyIGhlYWx0aC5cbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgVHdvIHByb2JsZW1zIEkgd2FudGVkIHRvIHNvbHZlIGZvcjpcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBzdWItcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5NZWRpY2FsIGphcmdvbiBhbmQgYW54aWV0eSBjcmVhdGVzIGJhcnJpZXJzIHRvIHVuZGVyc3RhbmRpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAwfX0+UGVvcGxlIG9mdGVuIGRvIG5vdCBrbm93IHdoYXQgcHJvY2VkdXJlcyB0aGV5IGhhdmUgaGFkIGFuZC9vciBkbyBub3QgcmVtZW1iZXIgd2hlbiB0aGV5IGhhZCB0aGVtLjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIEkgc2V0IG91dCB0byBjcmVhdGUgYSBlZHVjYXRpb25hbCB0b29sIHRvIGhlbHAgcGVvcGxlIHVuZGVyc3RhbmRpbmcgd2hhdCB0aGV5IHdlcmUgYmVpbmcgc2NyZWVuZWQgZm9yIGFuZCB3aGF0IHRoZWlyIGluZGl2aWR1YWwgcmVzdWx0cyBtZWFudC5cbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgQnV0IHRoZW4gdXNlciByZXNlYXJjaCBjaGFuZ2VkIGV2ZXJ5dGhpbmcuIFxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICBBZnRlciBzb21lIGNvbXBldGl0dmUgYW5hbHlzaXMgYW5kIGJlZm9yZSBza2V0Y2hpbmcsIEkgY29uZHVjdGVkIHVzZXIgaW50ZXJ2aWV3cy4gSSBsZWFybmVkIHRoYXQgb25lIG9mIHRoZSBiaWcgaXNzdWVzIHBlb3BsZSB3ZXJlIGZhY2luZyB3YXMgY29uc3RhbnRseSBjaGFuZ2luZyBqb2JzLCBsb2NhdGlvbnMsIGluc3VyYW5jZSwgYW5kIHVsdGltYXRlbHksIGhlYWx0aGNhcmUgcHJvdmlkZXJzLlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICBUaGlzIGxlZCBteSB0byBteSB0aGlyZCBwcm9ibGVtOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBzdWItcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e3BhZGRpbmdCb3R0b206IDB9fT5PdXIgaGVhbHRoIGNhcmUgcmVjb3JkcyBhcmUgZnJhZ21lbnRlZCBhbmQvb3IgaW5jb21wbGV0ZS48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICBHb2FsczpcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmctc21cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXkgc3ViLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FYXNpbHkgbmF2aWdhdGUgYW5kIG1haW50YWluIHBlcnNvbmFsIGhlYWx0aCBpbmZvcm1hdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2xlYXJseSB1bmRlcnN0YW5kIHdoYXQgaXMgYmVpbmcgc2NyZWVuZWQgZm9yLCB3aGF0IHRoZSByZXN1bHRzIG1lYW4sIGFuZCB3aGVuIHRvIGZvbGxvdyB1cDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAwfX0+RGVjcmVhc2UgYW54aWV0eSB3aXRoIGFuIGluaXR1aXRpdmUgYW5kIGNhbG1pbmcgaW50ZXJmYWNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICBQZW9wbGUgd2FudCBhY2Nlc3MgYW5kIGF1dG9ub215IG92ZXIgdGhlaXIgaGVhbHRoIGluZm9ybWF0aW9uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgVXNlciB0ZXN0aW5nIHNob3dlZCB0aGF0IG9uZSBlYXNpbHkgYWNjZXNzaWJsZSBwbGFjZSB0byBzdG9yZSBhbGwgaGVhbHRoY2FyZSBkYXRhIHdvdWxkIGJyaW5nIGdyZWF0ZXIgY2xhcml0eSBhbmQgYXV0b25vbXkgb3ZlciBzb21lb25l4oCZcyBoZWFsdGggc3RhdHVzIGFuZCBob3cgdG8gbWFuYWdlIHRoZWlyIGNhcmUgZ29pbmcgZm9yd2FyZC4gVGhlIGFwcCBpcyBhIHNwYWNlIHRoYXQgb2ZmZXJzIHVuZGVyc3RhbmRpbmcgYW5kIHNlbGYtYWR2b2NhY3kuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmcgaW1nLWdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF5IGltZy1ncmlkLXN1YmNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaGVhbHRoa2VlcC1za2V0Y2hlczEucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaGVhbHRoa2VlcC1za2V0Y2hlczIucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2hlYWx0aGtlZXAtc2tldGNoZXMzLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2hlYWx0aGtlZXAtZmxvdy5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsZ2luOiAnY2VudGVyJywgbWFyZ2luOiAnYXV0byd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Zm9udFNpemU6IDE2LCBsaW5lSGVpZ2h0OiAnMTlweCd9fT5Ta2V0Y2hlczsgdXNlciBmbG93PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICBNaW5pbWFsaXN0IFVJIHRvIGNyZWF0ZSBhIHNlbnNlIG9mIGNhbG1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5zZS1vZi1jYWxtXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaGVhbHRoa2VlcC1mb250LnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaGVhbHRoa2VlcC1pY29ucy5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaGVhbHRoa2VlcC1idXR0b25zLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaGVhbHRoa2VlcC1jb2xvci5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgQmFjayB0byB0aGUgZHJhd2luZyBib2FyZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEludGlhbGx5IEkga2VwdCBwZW9wbGXigJlzIHJlc3VsdHMgc2VjdXJlIGFuZCBwcml2YXRlIGJ5IG1ha2luZyBhIGNhcmQgdGhhdCBwdWxscyBkb3duIHRvIHJldmVhbCB0aGUgcmVzdWx0LiBIb3dldmVyLCBkdXJpbmcgbXkgbmV4dCByb3VuZCBvZiB1c2VyIHRlc3RpbmcgSSBmb3VuZCB0aGF0IHRoZSBjYXJkIHB1bGxpbmcgZG93biB3YXMgYWN0dWFsbHkgY29uZnVzaW5nIGluc3RlYWQgb2YgZGVsaWdodGZ1bC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBkcmF3aW5nLWJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYXdpbmctYm9hcmQtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2hlYWx0aGtlZXAtZWFybHkxLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2ZvbnRTaXplOiAxNiwgbGluZUhlaWdodDogJzE5cHgnfX0+TWFpbiBzY3JlZW48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhd2luZy1ib2FyZC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaGVhbHRoa2VlcC1lYXJseTIucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Zm9udFNpemU6IDE2LCBsaW5lSGVpZ2h0OiAnMTlweCd9fT5DYXJkIHJldmVhbDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIEkgd2VudCBiYWNrIHRvIHNrZXRjaGluZyBhbmQgZm91bmQgYSBwYXR0ZXJuIHRoYXQgc29sdmVkIHRoZSBpc3N1ZSBvZiBwcml2YWN5IHdoaWxlIGFsc28gYmVpbmcgYSBtb3JlIGNvbW1vbiBhbmQgZnJpZW5kbHkgZGVzaWduLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlclwiPlxuICAgICAgICAgICAgICAgIFJlc3VsdCBzdG9yYWdlIHdpdGggcHJpdmFjeSBpbiBtaW5kXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgSW5pdGlhbGx5IG9wZW5pbmcgdGhlIGFwcCB3b3VsZCByZXF1aXJlIGEgcGFzc3dvcmQgZXZlcnl0aW1lIHlvdSBvcGVuIGFuZCBjbG9zZSB0aGUgYXBwIGFuZCB3b3VsZCBoYXZlIGEgdGltZWQgbG9ja291dC4gT25jZSBzaWduZWQgaW4sIHRoZSBhY3R1YWwgcmVzdWx0cyBhcmUgc3RpbGwgY292ZXJlZCBhbmQgb25seSBleHBvc2VkIHdoZW4gdGhlIHVzZXIgcHJlc3NlZCB0aGUgYXJyb3cgdG8gcmV2ZWFsIHRoZW0uIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW5hbC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmluYWwtaW1nIGZpbmFsLWltZy0xXCIgc3JjPVwiL2hlYWx0aGtlZXAtZmluYWwxLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICBPcHRpb24gdG8gdHVybiBvbiBvciBvZmYgZHVlIGRhdGUgYWxlcnRzIHNvIHRoYXQgdGhlIHVzZXIgaGFzIG1vcmUgY29udHJvbCBvdmVyIHRoZWlyIHByaXZhY3lcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbmFsLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaW5hbC1pbWcgZmluYWwtaW1nLTJcIiBzcmM9XCIvaGVhbHRoa2VlcC1maW5hbDIucG5nXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlclwiPlxuICAgICAgICAgICAgSW50ZXJwcmV0YXRpb25zIGJhc2VkIG9uIHRoZSB1c2Vy4oCZcyBwZXJzb25hbCByZXN1bHQgaGlzdG9yeVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmluYWwtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbmFsLWltZyBmaW5hbC1pbWctM1wiIHNyYz1cIi9oZWFsdGhrZWVwLWZpbmFsMy5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMTIwIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlclwiPlxuICAgICAgICAgICAgICAgIEZ1dHVyZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIElmIEkgaGFkIG1vcmUgdGltZSBhbmQgcmVzb3VyY2VzIGZvciB0aGlzIHByb2plY3QgaXQgd291bGQgYmUgZ3JlYXQgdG8gY29sbGFib3JhdGUgd2l0aCBvdGhlciBkZXNpZ25lcnMgYW5kIHNvZnR3YXJlIGVuZ2luZWVycyBmb3IgbW9yZSBmZWVkYmFjayBhbmQgdG8gYWxzbyBjYXN0IGEgd2lkZXIgbmV0IG9mIHBlb3BsZSBmb3IgdGhlIHVzZXIgcmVzZWFyY2guXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgSSBtYWRlIHRoZSBhcHAgYmFzZWQgb24gbXkgZXhwZXJpZW5jaW5nIGluIE9CR1lOIGFuZCBJIHdvdWxkIGJlIGN1cmlvdXMgdG8gbGVhcm4gbW9yZSBhYm91dCBvdGhlciBoZWFsdGhjYXJlIHNwZWNpYWxpdGllcyB0byBzZWUgaG93IHRoZSBvdGhlciBzY3JlZW5pbmdzIG1pZ2h0IGZpdCBpbnRvIHRoaXMgYXBwIGFuZCBob3cgSSBtaWdodCBuZWVkIHRvIGNoYW5nZSB0aGUgYXBwIHRvIG1ha2UgaXQgbW9yZSBhZGFwdGFibGUgdG8gb3RoZXIgc3BlY2lhbGl0aWVzLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9ydGZvbGlvLXBpZWNlLWltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjQ5cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2Vuc2Utb2YtY2FsbSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2Vuc2Utb2YtY2FsbSBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzU3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZHJhd2luZy1ib2FyZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2OTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNnB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kcmF3aW5nLWJvYXJkIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI5NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyYXdpbmctYm9hcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbmFsLWltZy0xIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTYxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmluYWwtaW1nLTIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maW5hbC1pbWctMyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZy1ncmlkLWNvbnRhaW5lciBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWctZ3JpZC1zdWJjb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZy1ncmlkLXN1YmNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nLWdyaWQtc3ViY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2NnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIC5pbWctZ3JpZC1zdWJjb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzI3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWctZ3JpZC1zdWJjb250YWluZXIgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0OHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucG9ydGZvbGlvLXBpZWNlLWltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMzcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNlbnNlLW9mLWNhbG0ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2Vuc2Utb2YtY2FsbSA+IGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zZW5zZS1vZi1jYWxtIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltZy1ncmlkLWNvbnRhaW5lciBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRyYXdpbmctYm9hcmQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzI3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kcmF3aW5nLWJvYXJkIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRyYXdpbmctYm9hcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbmFsLWltZyB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmluYWwtaW1nLTEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzI4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maW5hbC1pbWctMiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbmFsLWltZy0zIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhbHRoa2VlcDsiXX0= */\n/*@ sourceURL=/Users/jewelyhoxie/code/julie-portfolio/pages/healthkeep.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Healthkeep);

/***/ }),

/***/ 2:
/*!**************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fhealthkeep&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fhealthkeep.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fhealthkeep&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fhealthkeep.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhealthkeep&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fhealthkeep.js!./");


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
//# sourceMappingURL=healthkeep.js.map