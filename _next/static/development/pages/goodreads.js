(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/goodreads.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Fgoodreads.js!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Fgoodreads.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/goodreads", function() {
      var mod = __webpack_require__(/*! ./pages/goodreads.js */ "./pages/goodreads.js")
      if(true) {
        module.hot.accept(/*! ./pages/goodreads.js */ "./pages/goodreads.js", function() {
          if(!next.router.components["/goodreads"]) return
          var updatedPage = __webpack_require__(/*! ./pages/goodreads.js */ "./pages/goodreads.js")
          next.router.update("/goodreads", updatedPage)
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

/***/ "./pages/goodreads.js":
/*!****************************!*\
  !*** ./pages/goodreads.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/jewelyhoxie/jhoxie.github.io/pages/goodreads.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var GoodReads = function GoodReads() {
  return __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "section-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, "Case Study: Information Architecture ", __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 82
    }
  }), " Analysis of Goodreads"), __jsx("div", {
    style: {
      marginTop: 60
    },
    className: "jsx-1189304397" + " " + "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/GR-hero.png",
    className: "jsx-1189304397" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "grid problems one-third-two-thirds full-width-mobile extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "gray sub-panel meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1189304397" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Client:"), __jsx("span", {
    className: "jsx-1189304397" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 58
    }
  }, " Personal project")), __jsx("div", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1189304397" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-1189304397" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 56
    }
  }, " September 2020")), __jsx("div", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1189304397" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-1189304397" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 57
    }
  }, " Figma, Octopus.do, Optimal Workshop"))), __jsx("div", {
    className: "jsx-1189304397" + " " + "disclaimer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 24
    }
  }, "Disclaimer:"), " I am not affiliated with Goodreads. This is a fun side project where I use limited user research and make assumptions. I like my design but I\u2019m NOT advocating this is how Goodreads SHOULD be.")))), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "People love talking about how Goodreads has bad design. At the time of starting this project, Goodreads had 350,000 reviews and rated #9 in the \"books\" category in the app store. So despite its infamy, people definitely use and like Goodreads.", __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 23
    }
  }), "I put my own opinions about Goodreads aside and investigated this dichotomy further by reading app store reviews.", __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }), "I looked at the 4-5 star reviews to see why people continue using the app and then looked at the 1-2 star reviews to see what is stopping people from using the app successfully.", __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  }), "I took a step back from all the nice-to-have comments like \u201Cwhy can\u2019t I review with half stars\u201D and tried to suss out what the bigger picture problems were that dedicated users cared about.")), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Problems"), __jsx("ul", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Decreased mobile app engagement due to limited features compared to desktop"), __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Outdated UI contributes to negative reviews")), __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Goals"), __jsx("ul", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Optimize mobile app features for power users"), __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Updated UI")), __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Why is this important?"), __jsx("ul", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Familiarity, consistency, and user engagement"), __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.nngroup.com/articles/aesthetic-usability-effect",
    target: "_blank",
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Aesthetic-Usability Effect"))), __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Success Metrics"), __jsx("ul", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Increased app downloads"), __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "More positive app store reviews/ratings"), __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Increased engagement on the app")), __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Research & Information Architecture Analysis"), __jsx("div", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "I conducted user research with ", __jsx("a", {
    href: "https://www.optimalworkshop.com",
    target: "_blank",
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 48
    }
  }, "Optimal Workshop\u2019s"), " virtual card sorting in order to understand user\u2019s mental models and expectations for wayfinding.", __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041
    },
    src: "/goodread-cardsort.png",
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }), "I documented the current sitemap for both mobile and desktop versions of Goodreads using ", __jsx("a", {
    href: "htts://octopus.do",
    target: "_blank",
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 106
    }
  }, "Octopus.do"), ".")), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "gray grid half-and-half full-width-mobile sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      margin: '0 0'
    },
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("img", {
    style: {
      maxWidth: 521
    },
    src: "/goodreads-current-mobile.png",
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-1189304397" + " " + "hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      fontSize: 20
    },
    className: "jsx-1189304397" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, "Color Key:"), __jsx("div", {
    className: "jsx-1189304397" + " " + "color-swatch-container flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 72
    }
  }, "Both"), __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 73
    }
  }, "Limited on mobile"), __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch purple",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 74
    }
  }, "Excluded from mobile")))), __jsx("img", {
    style: {
      marginTop: 0,
      maxWidth: 521
    },
    src: "/goodreads-current-desktop.png",
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1189304397" + " " + "hidden-gt-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      fontSize: 20
    },
    className: "jsx-1189304397" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "Color Key:"), __jsx("div", {
    className: "jsx-1189304397" + " " + "color-swatch-container flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 72
    }
  }, "Both")), __jsx("div", {
    className: "jsx-1189304397" + " " + "color-swatch-container flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 73
    }
  }, "Limited on mobile")), __jsx("div", {
    className: "jsx-1189304397" + " " + "color-swatch-container flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch purple",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-1189304397" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 74
    }
  }, "Excluded from mobile"))))), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      columnGap: 20
    },
    className: "jsx-1189304397" + " " + "gray sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "sub-panel-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, "Mobile Redesign:"), __jsx("img", {
    style: {
      maxWidth: 999
    },
    src: "/goodreads-redesign-mobile.png",
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "I analyzed the data and came up with a new sitemap that:"), __jsx("ul", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "Is organized to match most user\u2019s mental models"), __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "Consolidates features that were previously multiplied and spread through the app"), __jsx("li", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, "Allows for more space to add desktop features for power users."))), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm before",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "Before:"), __jsx("img", {
    style: {
      maxWidth: 479
    },
    src: "/goodreads-before-1.png",
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1189304397" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "The search function is in a fixed search bar at the top of the app and also has its own tab in the menu. The fixed ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 132
    }
  }, "Search"), " bar at the top sometimes functions as a general search of the entire app and sometimes is only a search within your personal bookshelf - which I found confusing."), __jsx("img", {
    style: {
      maxWidth: 760
    },
    src: "/goodreads-before-2.png",
    className: "jsx-1189304397" + " " + "grid-image extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1189304397" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "My Books"), ", ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 34
    }
  }, "More"), ", and ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 51
    }
  }, "Profile"), " have overlapping features")), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm after",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "After:"), __jsx("img", {
    style: {
      maxWidth: 1041
    },
    src: "/goodreads-after-dsktp-1.png",
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1189304397" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "I replaced the ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 32
    }
  }, "More"), " tab with ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 53
    }
  }, "Me"), " because \u201Cmore\u201D is a vague description. The ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 106
    }
  }, "Me"), " tab now houses the same features in a more intuitive design. ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 177
    }
  }, "Me"), " is laid out like the user\u2019s profile and includes bookshelves, challenges, and notes - which used to live in both ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 300
    }
  }, "More"), " and ", __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 316
    }
  }, "My Books"), "."), __jsx("img", {
    style: {
      maxWidth: 1041
    },
    src: "/goodreads-after-dsktp-2.png",
    className: "jsx-1189304397" + " " + "grid-image extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm before",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "Before:"), __jsx("img", {
    style: {
      maxWidth: 780
    },
    src: "/goodreads-before-3.png",
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1189304397" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, "Discover"), " is not as robust as it is on desktop and is not utilizing mobile space to its full potential.")), __jsx("div", {
    className: "jsx-1189304397" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1189304397" + " " + "section-subheader extra-top-padding-sm after",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, "After:"), __jsx("img", {
    style: {
      maxWidth: 1041
    },
    src: "/goodreads-after-dsktp-3.png",
    className: "jsx-1189304397" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1189304397" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "Many features on the mobile app are limited compared to its web equivalent. Changing the architecture of the app allowed for more space and intuitive access to more features."), __jsx("img", {
    style: {
      maxWidth: 1041
    },
    src: "/goodreads-after-dsktp-4.png",
    className: "jsx-1189304397" + " " + "grid-image extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1189304397" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-1189304397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, "Search"), " is consolidated to the menu. If I worked at Goodreads I would have more information about how often the search bar at the top of the app is used or how vital it is to users. For the purposes of my project, I assumed that the top search bar is not used as often as it is in other apps where this is a core feature like a shopping app.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1189304397",
    __self: _this
  }, ".section-header.jsx-1189304397{line-height:60px;}a.jsx-1189304397{-webkit-text-decoration:underline;text-decoration:underline;}.before.jsx-1189304397{color:#EE595B;}.after.jsx-1189304397{color:#2AC3A9;}.quote-text.jsx-1189304397{font-weight:normal;font-size:18px;line-height:36px;padding:36px;padding-bottom:72px;background-image:url(\"/quote-container.svg\");text-align:center;}.grid-image-scheduling.jsx-1189304397{object-fit:cover;width:100%;}.portfolio-piece-img.jsx-1189304397{max-width:100%;}.problems.jsx-1189304397{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.problems.jsx-1189304397>.section-subheader.jsx-1189304397{-webkit-flex:0 0 none;-ms-flex:0 0 none;flex:0 0 none;padding-right:40px;}.disclaimer.jsx-1189304397{font-family:Roboto;font-weight:300;font-size:18px;line-height:30px;margin-left:42;}.color-swatch.jsx-1189304397{display:inline-block;width:18px;height:18px;background-color:#3582EC;margin-right:8px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.color-swatch.blue.jsx-1189304397{background-color:#3582EC;}.color-swatch.green.jsx-1189304397{background-color:#2AC3A9;}.color-swatch.purple.jsx-1189304397{background-color:#A964E7;}.color-swatch-text.jsx-1189304397{font-size:16px;line-height:16px;margin-right:20px;}.color-swatch-container.jsx-1189304397{padding-top:16px;padding-bottom:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.grid-image.jsx-1189304397{max-width:100%;width:100%;}.sub-panel.gray.jsx-1189304397{padding:20px;}.no-wrap.jsx-1189304397{white-space:nowrap;}@media only screen and (min-width:768px){.disclaimer.jsx-1189304397{margin-left:42px;}.sub-panel-subheader.jsx-1189304397{margin-bottom:16px;font-size:16px;}}@media only screen and (max-width:767px){.portfolio-piece-img.jsx-1189304397{margin-bottom:50px;width:1279px;}.problems.jsx-1189304397{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.problems.jsx-1189304397>.section-subheader.jsx-1189304397{padding-right:0x;}.quote-text.jsx-1189304397{font-size:12px;line-height:26px;padding:24px 12px;padding-bottom:50px;}.quote-text.jsx-1189304397:first-of-type{margin-bottom:18px;}.grid-image-scheduling.jsx-1189304397{margin-top:30px;}.grid-image-scheduling.jsx-1189304397:first-of-type{margin-top:0px;}.sub-panel.jsx-1189304397{white-space:normal;}.sub-panel.jsx-1189304397:first-of-type{margin-bottom:18px;}.sub-panel.gray.jsx-1189304397{padding:8px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9qaG94aWUuZ2l0aHViLmlvL3BhZ2VzL2dvb2RyZWFkcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Sm9CLEFBR2tDLEFBR1MsQUFHWixBQUdBLEFBR0ssQUFTRixBQUlGLEFBS0ksQUFHTCxBQUlLLEFBT0UsQUFRSSxBQUdBLEFBR0EsQUFHVixBQUtFLEFBTUYsQUFJRixBQUdNLEFBSUUsQUFHRSxBQU1BLEFBSUcsQUFHTCxBQUdGLEFBTUksQUFHSCxBQUdELEFBR0ksQUFHQSxBQUdQLFlBQ2YsQ0EvQ0osQ0F0RUQsQUFHQSxDQWdCQSxBQW9DcUIsQUFXTixBQThCVSxBQVlwQixDQUhBLENBL0dMLEFBcUJlLEFBNkNTLEFBaUJwQixBQWdCQSxFQXZGZSxBQXlCQyxBQTBDbkIsQUFPc0IsQUFNRixBQWdCakIsQUFTQSxBQUdDLEVBNUVVLElBUWQsQUFHQSxBQUdBLENBZUEsRUFuREQsSUF1QmdCLEFBaUJNLEFBK0JsQixBQVVzQixFQTFGTCxBQTBFakIsQ0FqRGUsRUE2QkksT0FyQk0sTUFQUixBQXdCcEIsQUF5QzJCLENBMUZYLEdBbUJNLE1BOUJ2QixJQVl3QixHQXlCTCxFQU9FLENBMERqQixHQXZFSixLQThESSxJQXZESixFQXpCaUQsRUFnQy9CLE9BbEJsQixvQ0Fic0IsQ0FtREwsWUFuQmhCLEtBL0JELHlEQW1EQyIsImZpbGUiOiIvVXNlcnMvamV3ZWx5aG94aWUvamhveGllLmdpdGh1Yi5pby9wYWdlcy9nb29kcmVhZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHb29kUmVhZHMgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBIZXJvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5DYXNlIFN0dWR5OiBJbmZvcm1hdGlvbiBBcmNoaXRlY3R1cmUgPGJyLz4gQW5hbHlzaXMgb2YgR29vZHJlYWRzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDYwIH19PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXBpZWNlLWltZ1wiIHNyYz1cIi9HUi1oZXJvLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICB7LyogTWV0YSAqL31cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcHJvYmxlbXMgb25lLXRoaXJkLXR3by10aGlyZHMgZnVsbC13aWR0aC1tb2JpbGUgZXh0cmEtdG9wLXBhZGRpbmcgbm8tdG9wLXBhZGRpbmctbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF5IHN1Yi1wYW5lbCBtZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5DbGllbnQ6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gUGVyc29uYWwgcHJvamVjdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5EYXRlOjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IFNlcHRlbWJlciAyMDIwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlRvb2xzOjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IEZpZ21hLCBPY3RvcHVzLmRvLCBPcHRpbWFsIFdvcmtzaG9wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PGk+RGlzY2xhaW1lcjo8L2k+IEkgYW0gbm90IGFmZmlsaWF0ZWQgd2l0aCBHb29kcmVhZHMuIFRoaXMgaXMgYSBmdW4gc2lkZSBwcm9qZWN0IHdoZXJlIEkgdXNlIGxpbWl0ZWQgdXNlciByZXNlYXJjaCBhbmQgbWFrZSBhc3N1bXB0aW9ucy4gSSBsaWtlIG15IGRlc2lnbiBidXQgSeKAmW0gTk9UIGFkdm9jYXRpbmcgdGhpcyBpcyBob3cgR29vZHJlYWRzIFNIT1VMRCBiZS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFBlb3BsZSBsb3ZlIHRhbGtpbmcgYWJvdXQgaG93IEdvb2RyZWFkcyBoYXMgYmFkIGRlc2lnbi4gQXQgdGhlIHRpbWUgb2Ygc3RhcnRpbmcgdGhpcyBwcm9qZWN0LCBHb29kcmVhZHMgaGFkIDM1MCwwMDAgcmV2aWV3cyBhbmQgcmF0ZWQgIzkgaW4gdGhlIFwiYm9va3NcIiBjYXRlZ29yeSBpbiB0aGUgYXBwIHN0b3JlLiBTbyBkZXNwaXRlIGl0cyBpbmZhbXksIHBlb3BsZSBkZWZpbml0ZWx5IHVzZSBhbmQgbGlrZSBHb29kcmVhZHMuXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgSSBwdXQgbXkgb3duIG9waW5pb25zIGFib3V0IEdvb2RyZWFkcyBhc2lkZSBhbmQgaW52ZXN0aWdhdGVkIHRoaXMgZGljaG90b215IGZ1cnRoZXIgYnkgcmVhZGluZyBhcHAgc3RvcmUgcmV2aWV3cy5cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICBJIGxvb2tlZCBhdCB0aGUgNC01IHN0YXIgcmV2aWV3cyB0byBzZWUgd2h5IHBlb3BsZSBjb250aW51ZSB1c2luZyB0aGUgYXBwIGFuZCB0aGVuIGxvb2tlZCBhdCB0aGUgMS0yIHN0YXIgcmV2aWV3cyB0byBzZWUgd2hhdCBpcyBzdG9wcGluZyBwZW9wbGUgZnJvbSB1c2luZyB0aGUgYXBwIHN1Y2Nlc3NmdWxseS5cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICBJIHRvb2sgYSBzdGVwIGJhY2sgZnJvbSBhbGwgdGhlIG5pY2UtdG8taGF2ZSBjb21tZW50cyBsaWtlIOKAnHdoeSBjYW7igJl0IEkgcmV2aWV3IHdpdGggaGFsZiBzdGFyc+KAnSBhbmQgdHJpZWQgdG8gc3VzcyBvdXQgd2hhdCB0aGUgYmlnZ2VyIHBpY3R1cmUgcHJvYmxlbXMgd2VyZSB0aGF0IGRlZGljYXRlZCB1c2VycyBjYXJlZCBhYm91dC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5Qcm9ibGVtczwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5EZWNyZWFzZWQgbW9iaWxlIGFwcCBlbmdhZ2VtZW50IGR1ZSB0byBsaW1pdGVkIGZlYXR1cmVzIGNvbXBhcmVkIHRvIGRlc2t0b3A8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5PdXRkYXRlZCBVSSBjb250cmlidXRlcyB0byBuZWdhdGl2ZSByZXZpZXdzPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+R29hbHM8L2Rpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+T3B0aW1pemUgbW9iaWxlIGFwcCBmZWF0dXJlcyBmb3IgcG93ZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5VcGRhdGVkIFVJPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+V2h5IGlzIHRoaXMgaW1wb3J0YW50PzwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5GYW1pbGlhcml0eSwgY29uc2lzdGVuY3ksIGFuZCB1c2VyIGVuZ2FnZW1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cubm5ncm91cC5jb20vYXJ0aWNsZXMvYWVzdGhldGljLXVzYWJpbGl0eS1lZmZlY3RcIiB0YXJnZXQ9XCJfYmxhbmtcIj5BZXN0aGV0aWMtVXNhYmlsaXR5IEVmZmVjdDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5TdWNjZXNzIE1ldHJpY3M8L2Rpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+SW5jcmVhc2VkIGFwcCBkb3dubG9hZHM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Nb3JlIHBvc2l0aXZlIGFwcCBzdG9yZSByZXZpZXdzL3JhdGluZ3M8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5JbmNyZWFzZWQgZW5nYWdlbWVudCBvbiB0aGUgYXBwPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+XG4gICAgICAgICAgICAgICAgUmVzZWFyY2ggJmFtcDsgSW5mb3JtYXRpb24gQXJjaGl0ZWN0dXJlIEFuYWx5c2lzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgSSBjb25kdWN0ZWQgdXNlciByZXNlYXJjaCB3aXRoIDxhIGhyZWY9XCJodHRwczovL3d3dy5vcHRpbWFsd29ya3Nob3AuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+T3B0aW1hbCBXb3Jrc2hvcOKAmXM8L2E+IHZpcnR1YWwgY2FyZCBzb3J0aW5nIGluIG9yZGVyIHRvIHVuZGVyc3RhbmQgdXNlcuKAmXMgbWVudGFsIG1vZGVscyBhbmQgZXhwZWN0YXRpb25zIGZvciB3YXlmaW5kaW5nLlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxIH19IHNyYz1cIi9nb29kcmVhZC1jYXJkc29ydC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgSSBkb2N1bWVudGVkIHRoZSBjdXJyZW50IHNpdGVtYXAgZm9yIGJvdGggbW9iaWxlIGFuZCBkZXNrdG9wIHZlcnNpb25zIG9mIEdvb2RyZWFkcyB1c2luZyA8YSBocmVmPVwiaHR0czovL29jdG9wdXMuZG9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5PY3RvcHVzLmRvPC9hPi4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXkgZ3JpZCBoYWxmLWFuZC1oYWxmIGZ1bGwtd2lkdGgtbW9iaWxlIHN1Yi1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1hcmdpbjogJzAgMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiA1MjEgfX0gc3JjPVwiL2dvb2RyZWFkcy1jdXJyZW50LW1vYmlsZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbi1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IgS2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaC1jb250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaCBibHVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaC10ZXh0XCI+Qm90aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2ggZ3JlZW5cIj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiY29sb3Itc3dhdGNoLXRleHRcIj5MaW1pdGVkIG9uIG1vYmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2ggcHVycGxlXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaC10ZXh0XCI+RXhjbHVkZWQgZnJvbSBtb2JpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDAsIG1heFdpZHRoOiA1MjEgfX0gc3JjPVwiL2dvb2RyZWFkcy1jdXJyZW50LWRlc2t0b3AucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbi1ndC1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IgS2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaC1jb250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaCBibHVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaC10ZXh0XCI+Qm90aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2gtY29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2ggZ3JlZW5cIj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiY29sb3Itc3dhdGNoLXRleHRcIj5MaW1pdGVkIG9uIG1vYmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2gtY29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2ggcHVycGxlXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaC10ZXh0XCI+RXhjbHVkZWQgZnJvbSBtb2JpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXkgc3ViLXBhbmVsXCIgc3R5bGU9e3sgY29sdW1uR2FwOiAyMCB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1wYW5lbC1zdWJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgTW9iaWxlIFJlZGVzaWduOlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiA5OTkgfX0gc3JjPVwiL2dvb2RyZWFkcy1yZWRlc2lnbi1tb2JpbGUucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5JIGFuYWx5emVkIHRoZSBkYXRhIGFuZCBjYW1lIHVwIHdpdGggYSBuZXcgc2l0ZW1hcCB0aGF0OjwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5JcyBvcmdhbml6ZWQgdG8gbWF0Y2ggbW9zdCB1c2Vy4oCZcyBtZW50YWwgbW9kZWxzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29uc29saWRhdGVzIGZlYXR1cmVzIHRoYXQgd2VyZSBwcmV2aW91c2x5IG11bHRpcGxpZWQgYW5kIHNwcmVhZCB0aHJvdWdoIHRoZSBhcHA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BbGxvd3MgZm9yIG1vcmUgc3BhY2UgdG8gYWRkIGRlc2t0b3AgZmVhdHVyZXMgZm9yIHBvd2VyIHVzZXJzLjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc20gYmVmb3JlXCI+QmVmb3JlOjwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDQ3OSB9fSBzcmM9XCIvZ29vZHJlYWRzLWJlZm9yZS0xLnBuZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgVGhlIHNlYXJjaCBmdW5jdGlvbiBpcyBpbiBhIGZpeGVkIHNlYXJjaCBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgYXBwIGFuZCBhbHNvIGhhcyBpdHMgb3duIHRhYiBpbiB0aGUgbWVudS4gVGhlIGZpeGVkIDxiPlNlYXJjaDwvYj4gYmFyIGF0IHRoZSB0b3Agc29tZXRpbWVzIGZ1bmN0aW9ucyBhcyBhIGdlbmVyYWwgc2VhcmNoIG9mIHRoZSBlbnRpcmUgYXBwIGFuZCBzb21ldGltZXMgaXMgb25seSBhIHNlYXJjaCB3aXRoaW4geW91ciBwZXJzb25hbCBib29rc2hlbGYgLSB3aGljaCBJIGZvdW5kIGNvbmZ1c2luZy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlIGV4dHJhLXRvcC1wYWRkaW5nXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDc2MCB9fSBzcmM9XCIvZ29vZHJlYWRzLWJlZm9yZS0yLnBuZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGI+TXkgQm9va3M8L2I+LCA8Yj5Nb3JlPC9iPiwgYW5kIDxiPlByb2ZpbGU8L2I+IGhhdmUgb3ZlcmxhcHBpbmcgZmVhdHVyZXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc20gYWZ0ZXJcIj5BZnRlcjo8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxIH19IHNyYz1cIi9nb29kcmVhZHMtYWZ0ZXItZHNrdHAtMS5wbmdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIEkgcmVwbGFjZWQgdGhlIDxiPk1vcmU8L2I+IHRhYiB3aXRoIDxiPk1lPC9iPiBiZWNhdXNlIOKAnG1vcmXigJ0gaXMgYSB2YWd1ZSBkZXNjcmlwdGlvbi4gVGhlIDxiPk1lPC9iPiB0YWIgbm93IGhvdXNlcyB0aGUgc2FtZSBmZWF0dXJlcyBpbiBhIG1vcmUgaW50dWl0aXZlIGRlc2lnbi4gPGI+TWU8L2I+IGlzIGxhaWQgb3V0IGxpa2UgdGhlIHVzZXLigJlzIHByb2ZpbGUgYW5kIGluY2x1ZGVzIGJvb2tzaGVsdmVzLCBjaGFsbGVuZ2VzLCBhbmQgbm90ZXMgLSB3aGljaCB1c2VkIHRvIGxpdmUgaW4gYm90aCA8Yj5Nb3JlPC9iPiBhbmQgPGI+TXkgQm9va3M8L2I+LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2UgZXh0cmEtdG9wLXBhZGRpbmdcIiBzdHlsZT17eyBtYXhXaWR0aDogMTA0MSB9fSBzcmM9XCIvZ29vZHJlYWRzLWFmdGVyLWRza3RwLTIucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtIGJlZm9yZVwiPkJlZm9yZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiA3ODAgfX0gc3JjPVwiL2dvb2RyZWFkcy1iZWZvcmUtMy5wbmdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxiPkRpc2NvdmVyPC9iPiBpcyBub3QgYXMgcm9idXN0IGFzIGl0IGlzIG9uIGRlc2t0b3AgYW5kIGlzIG5vdCB1dGlsaXppbmcgbW9iaWxlIHNwYWNlIHRvIGl0cyBmdWxsIHBvdGVudGlhbC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc20gYWZ0ZXJcIj5BZnRlcjo8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxIH19IHNyYz1cIi9nb29kcmVhZHMtYWZ0ZXItZHNrdHAtMy5wbmdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIE1hbnkgZmVhdHVyZXMgb24gdGhlIG1vYmlsZSBhcHAgYXJlIGxpbWl0ZWQgY29tcGFyZWQgdG8gaXRzIHdlYiBlcXVpdmFsZW50LiBDaGFuZ2luZyB0aGUgYXJjaGl0ZWN0dXJlIG9mIHRoZSBhcHAgYWxsb3dlZCBmb3IgbW9yZSBzcGFjZSBhbmQgaW50dWl0aXZlIGFjY2VzcyB0byBtb3JlIGZlYXR1cmVzLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2UgZXh0cmEtdG9wLXBhZGRpbmdcIiBzdHlsZT17eyBtYXhXaWR0aDogMTA0MSB9fSBzcmM9XCIvZ29vZHJlYWRzLWFmdGVyLWRza3RwLTQucG5nXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICA8Yj5TZWFyY2g8L2I+IGlzIGNvbnNvbGlkYXRlZCB0byB0aGUgbWVudS4gSWYgSSB3b3JrZWQgYXQgR29vZHJlYWRzIEkgd291bGQgaGF2ZSBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyBvZnRlbiB0aGUgc2VhcmNoIGJhciBhdCB0aGUgdG9wIG9mIHRoZSBhcHAgaXMgdXNlZCBvciBob3cgdml0YWwgaXQgaXMgdG8gdXNlcnMuIEZvciB0aGUgcHVycG9zZXMgb2YgbXkgcHJvamVjdCwgSSBhc3N1bWVkIHRoYXQgdGhlIHRvcCBzZWFyY2ggYmFyIGlzIG5vdCB1c2VkIGFzIG9mdGVuIGFzIGl0IGlzIGluIG90aGVyIGFwcHMgd2hlcmUgdGhpcyBpcyBhIGNvcmUgZmVhdHVyZSBsaWtlIGEgc2hvcHBpbmcgYXBwLiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNFRTU5NUI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMkFDM0E5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnF1b3RlLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDM2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDcycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3F1b3RlLWNvbnRhaW5lci5zdmdcIik7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmdyaWQtaW1hZ2Utc2NoZWR1bGluZyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLXBpZWNlLWltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2JsZW1zIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9ibGVtcyA+IC5zZWN0aW9uLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xvci1zd2F0Y2gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1ODJFQztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5ibHVlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU4MkVDO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLmdyZWVuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFDM0E5O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLnB1cnBsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0E5NjRFNztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuZ3JpZC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuc3ViLXBhbmVsLmdyYXkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5uby13cmFwIHtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3ViLXBhbmVsLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgLnBvcnRmb2xpby1waWVjZS1pbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI3OXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvYmxlbXMge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvYmxlbXMgPiAuc2VjdGlvbi1zdWJoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnF1b3RlLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucXVvdGUtdGV4dDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmdyaWQtaW1hZ2Utc2NoZWR1bGluZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JpZC1pbWFnZS1zY2hlZHVsaW5nOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3ViLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5zdWItcGFuZWw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLnN1Yi1wYW5lbC5ncmF5IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2RSZWFkczsiXX0= */\n/*@ sourceURL=/Users/jewelyhoxie/jhoxie.github.io/pages/goodreads.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GoodReads);

/***/ }),

/***/ 3:
/*!******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Fgoodreads.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Fgoodreads.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Fgoodreads.js!./");


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
//# sourceMappingURL=goodreads.js.map