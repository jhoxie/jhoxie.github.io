(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/artist-dashboard.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fartist-dashboard&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fartist-dashboard.js!./":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fartist-dashboard&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fartist-dashboard.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/artist-dashboard", function() {
      var mod = __webpack_require__(/*! ./pages/artist-dashboard.js */ "./pages/artist-dashboard.js")
      if(true) {
        module.hot.accept(/*! ./pages/artist-dashboard.js */ "./pages/artist-dashboard.js", function() {
          if(!next.router.components["/artist-dashboard"]) return
          var updatedPage = __webpack_require__(/*! ./pages/artist-dashboard.js */ "./pages/artist-dashboard.js")
          next.router.update("/artist-dashboard", updatedPage)
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

/***/ "./pages/artist-dashboard.js":
/*!***********************************!*\
  !*** ./pages/artist-dashboard.js ***!
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
    _jsxFileName = "/Users/nathanhayflick/Dev/julie-portfolio/pages/artist-dashboard.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var ArtistDashboard = function ArtistDashboard() {
  return __jsx("div", {
    className: "jsx-1103707299" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "jsx-1103707299" + " " + "casestudy-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1103707299" + " " + "section-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 11
    }
  }, "Showcase: Artist Dashboard"), __jsx("div", {
    style: {
      marginTop: 60
    },
    className: "jsx-1103707299" + " " + "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/ampled-people.png",
    className: "jsx-1103707299" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "jsx-1103707299" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "jsx-1103707299" + " " + "grid one-third-two-thirds problems full-width-mobile extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1103707299" + " " + "gray sub-panel meta no-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-1103707299" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 23
    }
  }, "Client:"), __jsx("span", {
    className: "jsx-1103707299" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 56
    }
  }, " Ampled")), __jsx("div", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-1103707299" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 23
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-1103707299" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 54
    }
  }, " January 2021")), __jsx("div", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-1103707299" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-1103707299" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 55
    }
  }, " Figma, Slack"))))), __jsx("div", {
    className: "jsx-1103707299" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1103707299" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Problem"), __jsx("div", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Artists need to have easy access to account information and resources to improve their artist pages in order to gain more supporters")), __jsx("div", {
    className: "jsx-1103707299" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1103707299" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Before"), __jsx("div", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Relevant resources were spread throughout the platform or limited in scope and there was a lack of emphasis on important features. This created a barrier to artists connecting with supporters.", __jsx("br", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), __jsx("br", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("img", {
    style: {
      maxWidth: 686,
      marginBottom: 30
    },
    src: "/artist-dashboard-before.png",
    className: "jsx-1103707299" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), "As support tickets came in I noticed a theme among both artist-owners and new users. They were asking how they could find other artists on the platform. There was not a browse page because artists gained supporters by linking their page to social media.")), __jsx("div", {
    className: "jsx-1103707299" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1103707299" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Final Design"), __jsx("p", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "My team mocked up the side bar layout and worked through the other dashboard sections while I owned the \u201COverview\u201D page.", __jsx("br", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }), "I was given a list of requirements. I grouped similar content together to create organization and structure.")), __jsx("div", {
    className: "jsx-1103707299" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      maxWidth: 729,
      margin: 'auto',
      textAlign: 'center'
    },
    className: "jsx-1103707299" + " " + "grid half-and-half",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/dashboard-finished-1.png",
    className: "jsx-1103707299" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-1103707299" + " " + "thin meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Mobile Profile/Overview")), __jsx("div", {
    className: "jsx-1103707299",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/dashboard-finished-2.png",
    className: "jsx-1103707299" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-1103707299" + " " + "thin meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Fixed menu with scroll down"))), __jsx("div", {
    style: {
      maxWidth: 729,
      margin: 'auto',
      textAlign: 'center'
    },
    className: "jsx-1103707299" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/dashboard-finished-3.png",
    className: "jsx-1103707299" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-1103707299" + " " + "thin meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Desktop dashboard redesign hi-fi mock"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1103707299",
    __self: _this
  }, "a.jsx-1103707299{-webkit-text-decoration:underline;text-decoration:underline;}.before.jsx-1103707299{color:#EE595B;}.after.jsx-1103707299{color:#2AC3A9;}.quote-text.jsx-1103707299{font-weight:normal;font-size:18px;line-height:36px;padding:36px;padding-bottom:72px;background-image:url(\"/quote-container.svg\");text-align:center;}.grid-image-scheduling.jsx-1103707299{object-fit:cover;width:100%;}.portfolio-piece-img.jsx-1103707299{max-width:721.67px;}.problems.jsx-1103707299{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.problems.jsx-1103707299>.section-subheader.jsx-1103707299{-webkit-flex:0 0 none;-ms-flex:0 0 none;flex:0 0 none;padding-right:40px;}.disclaimer.jsx-1103707299{font-family:Roboto;font-weight:300;font-size:18px;line-height:30px;margin-left:42;}.color-swatch.jsx-1103707299{display:inline-block;width:18px;height:18px;background-color:#3582EC;margin-right:8px;}.color-swatch.blue.jsx-1103707299{background-color:#3582EC;}.color-swatch.green.jsx-1103707299{background-color:#2AC3A9;}.color-swatch.purple.jsx-1103707299{background-color:#A964E7;}.color-swatch-text.jsx-1103707299{font-size:16px;line-height:16px;margin-right:20px;}.color-swatch-container.jsx-1103707299{padding-top:16px;padding-bottom:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.grid-image.jsx-1103707299{max-width:100%;width:100%;}.sub-panel.gray.jsx-1103707299{padding:20px;}.no-wrap.jsx-1103707299{white-space:nowrap;}@media only screen and (min-width:768px){.disclaimer.jsx-1103707299{margin-left:42px;}.sub-panel-subheader.jsx-1103707299{margin-bottom:16px;font-size:16px;}}@media only screen and (max-width:767px){.meta.jsx-1103707299{width:100%;}.portfolio-piece-img.jsx-1103707299{margin-bottom:50px;width:300px;}.problems.jsx-1103707299{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.problems.jsx-1103707299>.section-subheader.jsx-1103707299{padding-right:0x;}.quote-text.jsx-1103707299{font-size:12px;line-height:26px;padding:24px 12px;padding-bottom:50px;}.quote-text.jsx-1103707299:first-of-type{margin-bottom:18px;}.grid-image-scheduling.jsx-1103707299{margin-top:30px;}.grid-image-scheduling.jsx-1103707299:first-of-type{margin-top:0px;}.sub-panel.jsx-1103707299{white-space:normal;}.sub-panel.jsx-1103707299:first-of-type{margin-bottom:18px;}.sub-panel.gray.jsx-1103707299{padding:8px;padding-left:16px;padding-right:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW5oYXlmbGljay9EZXYvanVsaWUtcG9ydGZvbGlvL3BhZ2VzL2FydGlzdC1kYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQixBQUd5QyxBQUdaLEFBR0EsQUFHSyxBQVNGLEFBSUUsQUFLQSxBQUdMLEFBSUssQUFPRSxBQU9JLEFBR0EsQUFHQSxBQUdWLEFBS0UsQUFNRixBQUlGLEFBR00sQUFJRSxBQUdFLEFBTVIsQUFHUSxBQUlHLEFBR0wsQUFHRixBQU1JLEFBR0gsQUFHRCxBQUdJLEFBR0EsQUFHUCxXQWpDaEIsQ0FrQ3NCLENBbER6QixDQXJFRCxBQUdBLENBbURxQixBQVdOLEFBaUNVLEFBWXBCLENBSEEsQ0E1RlUsQUE0Q1MsQUFpQnBCLEFBbUJBLEVBekZlLEFBYW5CLEFBWW9CLEFBeUNuQixBQU9zQixBQVNILEFBZ0JoQixBQVNBLEFBR0MsRUE5RVUsSUFPZCxBQUdBLEFBR0EsQ0FlQSxFQWxERCxFQXdHMkIsQ0EvQnZCLENBbERZLEFBZ0JNLEFBNENJLEVBNUZMLEFBeUVqQixDQWhEZSxFQTRCSSxPQXBCTSxLQWlGeEIsQ0F4RmdCLEFBdUJwQixBQTRDMkIsQ0E1RlgsR0FtQk0sTUE5QnZCLElBWXdCLEdBeUJMLEVBT0UsQ0E0RGpCLEdBekVKLEtBZ0VJLElBekRKLEVBekJpRCxFQWdDaEQsT0FsQkQsb0NBYnNCLENBa0RMLGlCQWpEakIseURBa0RDIiwiZmlsZSI6Ii9Vc2Vycy9uYXRoYW5oYXlmbGljay9EZXYvanVsaWUtcG9ydGZvbGlvL3BhZ2VzL2FydGlzdC1kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcnRpc3REYXNoYm9hcmQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LWNvbnRhaW5lclwiPlxuICAgICAgey8qIEhlcm8gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+U2hvd2Nhc2U6IEFydGlzdCBEYXNoYm9hcmQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDYwIH19PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcnRmb2xpby1waWVjZS1pbWdcIiBzcmM9XCIvYW1wbGVkLXBlb3BsZS5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgey8qIE1ldGEgKi99XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgb25lLXRoaXJkLXR3by10aGlyZHMgcHJvYmxlbXMgZnVsbC13aWR0aC1tb2JpbGUgZXh0cmEtdG9wLXBhZGRpbmcgbm8tdG9wLXBhZGRpbmctbW9iaWxlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBzdWItcGFuZWwgbWV0YSBuby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNsaWVudDo8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBBbXBsZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+RGF0ZTo8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBKYW51YXJ5IDIwMjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+VG9vbHM6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gRmlnbWEsIFNsYWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPlByb2JsZW1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIEFydGlzdHMgbmVlZCB0byBoYXZlIGVhc3kgYWNjZXNzIHRvIGFjY291bnQgaW5mb3JtYXRpb24gYW5kIHJlc291cmNlcyB0byBpbXByb3ZlIHRoZWlyIGFydGlzdCBwYWdlcyBpbiBvcmRlciB0byBnYWluIG1vcmUgc3VwcG9ydGVyc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5CZWZvcmVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBSZWxldmFudCByZXNvdXJjZXMgd2VyZSBzcHJlYWQgdGhyb3VnaG91dCB0aGUgcGxhdGZvcm0gb3IgbGltaXRlZCBpbiBzY29wZSBhbmQgdGhlcmUgd2FzIGEgbGFjayBvZiBlbXBoYXNpcyBvbiBpbXBvcnRhbnQgZmVhdHVyZXMuIFRoaXMgY3JlYXRlZCBhIGJhcnJpZXIgdG8gYXJ0aXN0cyBjb25uZWN0aW5nIHdpdGggc3VwcG9ydGVycy5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiA2ODYsIG1hcmdpbkJvdHRvbTogMzAgfX0gc3JjPVwiL2FydGlzdC1kYXNoYm9hcmQtYmVmb3JlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgQXMgc3VwcG9ydCB0aWNrZXRzIGNhbWUgaW4gSSBub3RpY2VkIGEgdGhlbWUgYW1vbmcgYm90aCBhcnRpc3Qtb3duZXJzIGFuZCBuZXcgdXNlcnMuIFRoZXkgd2VyZSBhc2tpbmcgaG93IHRoZXkgY291bGQgZmluZCBvdGhlciBhcnRpc3RzIG9uIHRoZSBwbGF0Zm9ybS4gVGhlcmUgd2FzIG5vdCBhIGJyb3dzZSBwYWdlIGJlY2F1c2UgYXJ0aXN0cyBnYWluZWQgc3VwcG9ydGVycyBieSBsaW5raW5nIHRoZWlyIHBhZ2UgdG8gc29jaWFsIG1lZGlhLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5GaW5hbCBEZXNpZ248L2Rpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE15IHRlYW0gbW9ja2VkIHVwIHRoZSBzaWRlIGJhciBsYXlvdXQgYW5kIHdvcmtlZCB0aHJvdWdoIHRoZSBvdGhlciBkYXNoYm9hcmQgc2VjdGlvbnMgd2hpbGUgSSBvd25lZCB0aGUg4oCcT3ZlcnZpZXfigJ0gcGFnZS5cbiAgICAgICAgICAgIDwgYnIvPjxiciAvPlxuICAgICAgICAgICAgSSB3YXMgZ2l2ZW4gYSBsaXN0IG9mIHJlcXVpcmVtZW50cy4gSSBncm91cGVkIHNpbWlsYXIgY29udGVudCB0b2dldGhlciB0byBjcmVhdGUgb3JnYW5pemF0aW9uIGFuZCBzdHJ1Y3R1cmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgaGFsZi1hbmQtaGFsZlwiIHN0eWxlPXt7IG1heFdpZHRoOiA3MjksIG1hcmdpbjogJ2F1dG8nLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzcmM9XCIvZGFzaGJvYXJkLWZpbmlzaGVkLTEucG5nXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRoaW4gbWV0YVwiPk1vYmlsZSBQcm9maWxlL092ZXJ2aWV3PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzcmM9XCIvZGFzaGJvYXJkLWZpbmlzaGVkLTIucG5nXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRoaW4gbWV0YVwiPkZpeGVkIG1lbnUgd2l0aCBzY3JvbGwgZG93bjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmdcIiBzdHlsZT17eyBtYXhXaWR0aDogNzI5LCBtYXJnaW46ICdhdXRvJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHNyYz1cIi9kYXNoYm9hcmQtZmluaXNoZWQtMy5wbmdcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGhpbiBtZXRhXCI+RGVza3RvcCBkYXNoYm9hcmQgcmVkZXNpZ24gaGktZmkgbW9jazwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjRUU1OTVCO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWZ0ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogIzJBQzNBOTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLXRleHQge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzJweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3F1b3RlLWNvbnRhaW5lci5zdmdcIik7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyaWQtaW1hZ2Utc2NoZWR1bGluZyB7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvcnRmb2xpby1waWVjZS1pbWcge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMS42N3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvYmxlbXMge1xuICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvYmxlbXMgPiAuc2VjdGlvbi1zdWJoZWFkZXIge1xuICAgICAgICAgICAgICBmbGV4OiAwIDAgbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2xvci1zd2F0Y2gge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTgyRUM7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5jb2xvci1zd2F0Y2guYmx1ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTgyRUM7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5ncmVlbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQUMzQTk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5wdXJwbGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTk2NEU3O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5jb2xvci1zd2F0Y2gtdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuY29sb3Itc3dhdGNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZ3JpZC1pbWFnZSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLnN1Yi1wYW5lbC5ncmF5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubm8td3JhcCB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdWItcGFuZWwtc3ViaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAubWV0YSB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucG9ydGZvbGlvLXBpZWNlLWltZyB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcm9ibGVtcyB7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcm9ibGVtcyA+IC5zZWN0aW9uLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucXVvdGUtdGV4dCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTJweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5xdW90ZS10ZXh0OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ3JpZC1pbWFnZS1zY2hlZHVsaW5nIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmc6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdWItcGFuZWwge1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgLnN1Yi1wYW5lbDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAuc3ViLXBhbmVsLmdyYXkge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aXN0RGFzaGJvYXJkOyJdfQ== */\n/*@ sourceURL=/Users/nathanhayflick/Dev/julie-portfolio/pages/artist-dashboard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArtistDashboard);

/***/ }),

/***/ 3:
/*!****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fartist-dashboard&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fartist-dashboard.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fartist-dashboard&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fartist-dashboard.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fartist-dashboard&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Fartist-dashboard.js!./");


/***/ }),

/***/ "dll-reference dll_b29684ed772f9fa2503e":
/*!*******************************************!*\
  !*** external "dll_b29684ed772f9fa2503e" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_b29684ed772f9fa2503e;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=artist-dashboard.js.map