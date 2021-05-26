(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/goodreads.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fgoodreads.js!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fgoodreads.js ***!
  \********************************************************************************************************************************************************************************************/
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
    _jsxFileName = "/Users/jewelyhoxie/code/julie-portfolio/pages/goodreads.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var GoodReads = function GoodReads() {
  return __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "section-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, "Case Study: Information Architecture ", __jsx("br", {
    className: "jsx-2168876143",
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
    className: "jsx-2168876143" + " " + "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/goodreads-mock-community.png",
    className: "jsx-2168876143" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), __jsx("span", {
    style: {
      width: 20,
      display: 'inline-block'
    },
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/goodreads-mock-profile.png",
    className: "jsx-2168876143" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "grid problems one-third-two-thirds full-width-mobile extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "gray sub-panel meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2168876143" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "Client:"), __jsx("span", {
    className: "jsx-2168876143" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 58
    }
  }, " Personal project")), __jsx("div", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2168876143" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-2168876143" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 56
    }
  }, " September 2020")), __jsx("div", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2168876143" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-2168876143" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 57
    }
  }, " Figma, Octopus.do, Optimal Workshop"))), __jsx("div", {
    className: "jsx-2168876143" + " " + "disclaimer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 24
    }
  }, "Disclaimer:"), " I am not affiliated with Goodreads. This is a fun side project where I use limited user research and make assumptions. I like my design but I\u2019m NOT advocating this is how Goodreads SHOULD be.")))), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "People love talking about how Goodreads has bad design. At the time of starting this project, Goodreads had 350,000 reviews and rated #9 in the \"books\" category in the app store. So despite its infamy, people definitely use and like Goodreads.", __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }), "I put my own opinions about Goodreads aside and investigated this dichotomy further by reading app store reviews.", __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  }), "I looked at the 4-5 star reviews to see why people continue using the app and then looked at the 1-2 star reviews to see what is stopping people from using the app successfully.", __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 23
    }
  }), "I took a step back from all the nice-to-have comments like \u201Cwhy can\u2019t I review with half stars\u201D and tried to suss out what the bigger picture problems were that dedicated users cared about.")), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Problems"), __jsx("ul", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Decreased mobile app engagement due to limited features compared to desktop"), __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Outdated UI contributes to negative reviews")), __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Goals"), __jsx("ul", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Optimize mobile app features for power users"), __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Updated UI")), __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Why is this important?"), __jsx("ul", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Familiarity, consistency, and user engagement"), __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.nngroup.com/articles/aesthetic-usability-effect",
    target: "_blank",
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "Aesthetic-Usability Effect"))), __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Success Metrics"), __jsx("ul", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Increased app downloads"), __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "More positive app store reviews/ratings"), __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Increased engagement on the app")), __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Research & Information Architecture Analysis"), __jsx("div", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "I conducted user research with ", __jsx("a", {
    href: "https://www.optimalworkshop.com",
    target: "_blank",
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 48
    }
  }, "Optimal Workshop\u2019s"), " virtual card sorting in order to understand user\u2019s mental models and expectations for wayfinding.", __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }), __jsx("img", {
    style: {
      maxWidth: 685
    },
    src: "/goodread-cardsort.png",
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 23
    }
  }), "I documented the current sitemap for both mobile and desktop versions of Goodreads using ", __jsx("a", {
    href: "htts://octopus.do",
    target: "_blank",
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 106
    }
  }, "Octopus.do"), ".")), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "gray grid half-and-half full-width-mobile sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      margin: '0 0'
    },
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("img", {
    style: {
      maxWidth: 521
    },
    src: "/goodreads-current-mobile.png",
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-2168876143" + " " + "hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      fontSize: 20
    },
    className: "jsx-2168876143" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, "Color Key:"), __jsx("div", {
    className: "jsx-2168876143" + " " + "color-swatch-container flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 72
    }
  }, "Both"), __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 73
    }
  }, "Limited on mobile"), __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch purple",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 74
    }
  }, "Excluded from mobile")))), __jsx("img", {
    style: {
      marginTop: 0,
      maxWidth: 521
    },
    src: "/goodreads-current-desktop.png",
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2168876143" + " " + "hidden-gt-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      fontSize: 20
    },
    className: "jsx-2168876143" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, "Color Key:"), __jsx("div", {
    className: "jsx-2168876143" + " " + "color-swatch-container flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 72
    }
  }, "Both")), __jsx("div", {
    className: "jsx-2168876143" + " " + "color-swatch-container flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 73
    }
  }, "Limited on mobile")), __jsx("div", {
    className: "jsx-2168876143" + " " + "color-swatch-container flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch purple",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "jsx-2168876143" + " " + "color-swatch-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 74
    }
  }, "Excluded from mobile"))))), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      columnGap: 20
    },
    className: "jsx-2168876143" + " " + "gray sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "sub-panel-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "Mobile Redesign:"), __jsx("img", {
    style: {
      maxWidth: 999
    },
    src: "/goodreads-redesign-mobile.png",
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "I analyzed the data and came up with a new sitemap that:"), __jsx("ul", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, "Is organized to match most user\u2019s mental models"), __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, "Consolidates features that were previously multiplied and spread through the app"), __jsx("li", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "Allows for more space to add desktop features for power users."))), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm before",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Before:"), __jsx("img", {
    style: {
      maxWidth: 479
    },
    src: "/goodreads-before-1.png",
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2168876143" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "The search function is in a fixed search bar at the top of the app and also has its own tab in the menu. The fixed ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 132
    }
  }, "Search"), " bar at the top sometimes functions as a general search of the entire app and sometimes is only a search within your personal bookshelf - which I found confusing."), __jsx("img", {
    style: {
      maxWidth: 760
    },
    src: "/goodreads-before-2.png",
    className: "jsx-2168876143" + " " + "grid-image extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2168876143" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "My Books"), ", ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 34
    }
  }, "More"), ", and ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 51
    }
  }, "Profile"), " have overlapping features")), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm after",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "After:"), __jsx("img", {
    style: {
      maxWidth: 780
    },
    src: "/goodreads-after-dsktp-1.png",
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2168876143" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "I replaced the ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 32
    }
  }, "More"), " tab with ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 53
    }
  }, "Me"), " because \u201Cmore\u201D is a vague description. The ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 106
    }
  }, "Me"), " tab now houses the same features in a more intuitive design. ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 177
    }
  }, "Me"), " is laid out like the user\u2019s profile and includes bookshelves, challenges, and notes - which used to live in both ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 300
    }
  }, "More"), " and ", __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 316
    }
  }, "My Books"), "."), __jsx("img", {
    style: {
      maxWidth: 775
    },
    src: "/goodreads-after-dsktp-2.png",
    className: "jsx-2168876143" + " " + "grid-image extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm before",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "Before:"), __jsx("img", {
    style: {
      maxWidth: 780
    },
    src: "/goodreads-before-3.png",
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2168876143" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "Discover"), " is not as robust as it is on desktop and is not utilizing mobile space to its full potential.")), __jsx("div", {
    className: "jsx-2168876143" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2168876143" + " " + "section-subheader extra-top-padding-sm after",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "After:"), __jsx("img", {
    style: {
      maxWidth: 1039
    },
    src: "/goodreads-after-dsktp-3.png",
    className: "jsx-2168876143" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2168876143" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, "Many features on the mobile app are limited compared to its web equivalent. Changing the architecture of the app allowed for more space and intuitive access to more features."), __jsx("img", {
    style: {
      maxWidth: 860
    },
    src: "/goodreads-after-dsktp-4.png",
    className: "jsx-2168876143" + " " + "grid-image extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2168876143" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-2168876143",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "Search"), " is consolidated to the menu. If I worked at Goodreads I would have more information about how often the search bar at the top of the app is used or how vital it is to users. For the purposes of my project, I assumed that the top search bar is not used as often as it is in other apps where this is a core feature like a shopping app.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2168876143",
    __self: _this
  }, ".section-header.jsx-2168876143{line-height:60px;}a.jsx-2168876143{-webkit-text-decoration:underline;text-decoration:underline;}.before.jsx-2168876143{color:#EE595B;}.after.jsx-2168876143{color:#2AC3A9;}.quote-text.jsx-2168876143{font-weight:normal;font-size:18px;line-height:36px;padding:36px;padding-bottom:72px;background-image:url(\"/quote-container.svg\");text-align:center;}.grid-image-scheduling.jsx-2168876143{object-fit:cover;width:100%;}.portfolio-piece-img.jsx-2168876143{max-width:317px;}.problems.jsx-2168876143{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.problems.jsx-2168876143>.section-subheader.jsx-2168876143{-webkit-flex:0 0 none;-ms-flex:0 0 none;flex:0 0 none;padding-right:40px;}.disclaimer.jsx-2168876143{font-family:Roboto;font-weight:300;font-size:18px;line-height:30px;margin-left:42;}.color-swatch.jsx-2168876143{display:inline-block;width:18px;height:18px;background-color:#3582EC;margin-right:8px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.color-swatch.blue.jsx-2168876143{background-color:#3582EC;}.color-swatch.green.jsx-2168876143{background-color:#2AC3A9;}.color-swatch.purple.jsx-2168876143{background-color:#A964E7;}.color-swatch-text.jsx-2168876143{font-size:16px;line-height:16px;margin-right:20px;}.color-swatch-container.jsx-2168876143{padding-top:16px;padding-bottom:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.grid-image.jsx-2168876143{max-width:100%;width:100%;}.sub-panel.gray.jsx-2168876143{padding:20px;}.no-wrap.jsx-2168876143{white-space:nowrap;}@media only screen and (min-width:768px){.disclaimer.jsx-2168876143{margin-left:42px;}.sub-panel-subheader.jsx-2168876143{margin-bottom:16px;font-size:16px;}}@media only screen and (max-width:767px){.portfolio-piece-img.jsx-2168876143{margin-bottom:50px;width:110px;}.problems.jsx-2168876143{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.problems.jsx-2168876143>.section-subheader.jsx-2168876143{padding-right:0x;}.quote-text.jsx-2168876143{font-size:12px;line-height:26px;padding:24px 12px;padding-bottom:50px;}.quote-text.jsx-2168876143:first-of-type{margin-bottom:18px;}.grid-image-scheduling.jsx-2168876143{margin-top:30px;}.grid-image-scheduling.jsx-2168876143:first-of-type{margin-top:0px;}.sub-panel.jsx-2168876143{white-space:normal;}.sub-panel.jsx-2168876143:first-of-type{margin-bottom:18px;}.sub-panel.gray.jsx-2168876143{padding:8px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9jb2RlL2p1bGllLXBvcnRmb2xpby9wYWdlcy9nb29kcmVhZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0pvQixBQUdrQyxBQUdTLEFBR1osQUFHQSxBQUdLLEFBU0YsQUFJRCxBQUtHLEFBR0wsQUFJSyxBQU9FLEFBUUksQUFHQSxBQUdBLEFBR1YsQUFLRSxBQU1GLEFBSUYsQUFHTSxBQUlFLEFBR0UsQUFNQSxBQUlHLEFBR0wsQUFHRixBQU1JLEFBR0gsQUFHRCxBQUdJLEFBR0EsQUFHUCxZQUNmLENBL0NKLENBdEVELEFBR0EsQ0FvRHFCLEFBV04sQUE4QlUsQUFZcEIsQ0F6RkwsQUFzRkssQ0EvR0wsQUFxQmUsQUE2Q1MsQUFpQnBCLEFBZ0JBLEVBdkZlLEFBeUJDLEFBMENuQixBQU9zQixBQU1ILEFBZ0JoQixBQVNBLEFBR0MsRUE1RVUsSUFRZCxBQUdBLEFBR0EsQ0FlQSxFQW5ERCxHQXVFSSxDQWhEWSxBQWlCTSxBQXlDSSxFQTFGTCxBQTBFakIsQ0FqRGUsRUE2QkksT0FyQk0sTUFQUixBQXdCcEIsQUF5QzJCLENBMUZYLEdBbUJNLE1BOUJ2QixJQVl3QixHQXlCTCxFQU9FLENBMERqQixHQXZFSixLQThESSxJQXZESixFQXpCaUQsRUFnQy9CLE9BbEJsQixvQ0Fic0IsQ0FtREwsWUFuQmhCLEtBL0JELHlEQW1EQyIsImZpbGUiOiIvVXNlcnMvamV3ZWx5aG94aWUvY29kZS9qdWxpZS1wb3J0Zm9saW8vcGFnZXMvZ29vZHJlYWRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR29vZFJlYWRzID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LWNvbnRhaW5lclwiPlxuICAgICAgICB7LyogSGVybyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+Q2FzZSBTdHVkeTogSW5mb3JtYXRpb24gQXJjaGl0ZWN0dXJlIDxici8+IEFuYWx5c2lzIG9mIEdvb2RyZWFkczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA2MCB9fT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcnRmb2xpby1waWVjZS1pbWdcIiBzcmM9XCIvZ29vZHJlYWRzLW1vY2stY29tbXVuaXR5LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgd2lkdGg6IDIwLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fS8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3J0Zm9saW8tcGllY2UtaW1nXCIgc3JjPVwiL2dvb2RyZWFkcy1tb2NrLXByb2ZpbGUucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIHsvKiBNZXRhICovfVxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwcm9ibGVtcyBvbmUtdGhpcmQtdHdvLXRoaXJkcyBmdWxsLXdpZHRoLW1vYmlsZSBleHRyYS10b3AtcGFkZGluZyBuby10b3AtcGFkZGluZy1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXkgc3ViLXBhbmVsIG1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNsaWVudDo8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBQZXJzb25hbCBwcm9qZWN0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkRhdGU6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gU2VwdGVtYmVyIDIwMjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+VG9vbHM6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gRmlnbWEsIE9jdG9wdXMuZG8sIE9wdGltYWwgV29ya3Nob3A8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD48aT5EaXNjbGFpbWVyOjwvaT4gSSBhbSBub3QgYWZmaWxpYXRlZCB3aXRoIEdvb2RyZWFkcy4gVGhpcyBpcyBhIGZ1biBzaWRlIHByb2plY3Qgd2hlcmUgSSB1c2UgbGltaXRlZCB1c2VyIHJlc2VhcmNoIGFuZCBtYWtlIGFzc3VtcHRpb25zLiBJIGxpa2UgbXkgZGVzaWduIGJ1dCBJ4oCZbSBOT1QgYWR2b2NhdGluZyB0aGlzIGlzIGhvdyBHb29kcmVhZHMgU0hPVUxEIGJlLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgUGVvcGxlIGxvdmUgdGFsa2luZyBhYm91dCBob3cgR29vZHJlYWRzIGhhcyBiYWQgZGVzaWduLiBBdCB0aGUgdGltZSBvZiBzdGFydGluZyB0aGlzIHByb2plY3QsIEdvb2RyZWFkcyBoYWQgMzUwLDAwMCByZXZpZXdzIGFuZCByYXRlZCAjOSBpbiB0aGUgXCJib29rc1wiIGNhdGVnb3J5IGluIHRoZSBhcHAgc3RvcmUuIFNvIGRlc3BpdGUgaXRzIGluZmFteSwgcGVvcGxlIGRlZmluaXRlbHkgdXNlIGFuZCBsaWtlIEdvb2RyZWFkcy5cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICBJIHB1dCBteSBvd24gb3BpbmlvbnMgYWJvdXQgR29vZHJlYWRzIGFzaWRlIGFuZCBpbnZlc3RpZ2F0ZWQgdGhpcyBkaWNob3RvbXkgZnVydGhlciBieSByZWFkaW5nIGFwcCBzdG9yZSByZXZpZXdzLlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIEkgbG9va2VkIGF0IHRoZSA0LTUgc3RhciByZXZpZXdzIHRvIHNlZSB3aHkgcGVvcGxlIGNvbnRpbnVlIHVzaW5nIHRoZSBhcHAgYW5kIHRoZW4gbG9va2VkIGF0IHRoZSAxLTIgc3RhciByZXZpZXdzIHRvIHNlZSB3aGF0IGlzIHN0b3BwaW5nIHBlb3BsZSBmcm9tIHVzaW5nIHRoZSBhcHAgc3VjY2Vzc2Z1bGx5LlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIEkgdG9vayBhIHN0ZXAgYmFjayBmcm9tIGFsbCB0aGUgbmljZS10by1oYXZlIGNvbW1lbnRzIGxpa2Ug4oCcd2h5IGNhbuKAmXQgSSByZXZpZXcgd2l0aCBoYWxmIHN0YXJz4oCdIGFuZCB0cmllZCB0byBzdXNzIG91dCB3aGF0IHRoZSBiaWdnZXIgcGljdHVyZSBwcm9ibGVtcyB3ZXJlIHRoYXQgZGVkaWNhdGVkIHVzZXJzIGNhcmVkIGFib3V0LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPlByb2JsZW1zPC9kaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkRlY3JlYXNlZCBtb2JpbGUgYXBwIGVuZ2FnZW1lbnQgZHVlIHRvIGxpbWl0ZWQgZmVhdHVyZXMgY29tcGFyZWQgdG8gZGVza3RvcDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk91dGRhdGVkIFVJIGNvbnRyaWJ1dGVzIHRvIG5lZ2F0aXZlIHJldmlld3M8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5Hb2FsczwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5PcHRpbWl6ZSBtb2JpbGUgYXBwIGZlYXR1cmVzIGZvciBwb3dlciB1c2VyczwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlVwZGF0ZWQgVUk8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5XaHkgaXMgdGhpcyBpbXBvcnRhbnQ/PC9kaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkZhbWlsaWFyaXR5LCBjb25zaXN0ZW5jeSwgYW5kIHVzZXIgZW5nYWdlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5ubmdyb3VwLmNvbS9hcnRpY2xlcy9hZXN0aGV0aWMtdXNhYmlsaXR5LWVmZmVjdFwiIHRhcmdldD1cIl9ibGFua1wiPkFlc3RoZXRpYy1Vc2FiaWxpdHkgRWZmZWN0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPlN1Y2Nlc3MgTWV0cmljczwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5JbmNyZWFzZWQgYXBwIGRvd25sb2FkczwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk1vcmUgcG9zaXRpdmUgYXBwIHN0b3JlIHJldmlld3MvcmF0aW5nczwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkluY3JlYXNlZCBlbmdhZ2VtZW50IG9uIHRoZSBhcHA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5cbiAgICAgICAgICAgICAgICBSZXNlYXJjaCAmYW1wOyBJbmZvcm1hdGlvbiBBcmNoaXRlY3R1cmUgQW5hbHlzaXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBJIGNvbmR1Y3RlZCB1c2VyIHJlc2VhcmNoIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wdGltYWx3b3Jrc2hvcC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5PcHRpbWFsIFdvcmtzaG9w4oCZczwvYT4gdmlydHVhbCBjYXJkIHNvcnRpbmcgaW4gb3JkZXIgdG8gdW5kZXJzdGFuZCB1c2Vy4oCZcyBtZW50YWwgbW9kZWxzIGFuZCBleHBlY3RhdGlvbnMgZm9yIHdheWZpbmRpbmcuXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDY4NSB9fSBzcmM9XCIvZ29vZHJlYWQtY2FyZHNvcnQucG5nXCIvPlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIEkgZG9jdW1lbnRlZCB0aGUgY3VycmVudCBzaXRlbWFwIGZvciBib3RoIG1vYmlsZSBhbmQgZGVza3RvcCB2ZXJzaW9ucyBvZiBHb29kcmVhZHMgdXNpbmcgPGEgaHJlZj1cImh0dHM6Ly9vY3RvcHVzLmRvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+T2N0b3B1cy5kbzwvYT4uIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF5IGdyaWQgaGFsZi1hbmQtaGFsZiBmdWxsLXdpZHRoLW1vYmlsZSBzdWItcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXJnaW46ICcwIDAnIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogNTIxIH19IHNyYz1cIi9nb29kcmVhZHMtY3VycmVudC1tb2JpbGUucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4tbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yIEtleTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2gtY29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2ggYmx1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2gtdGV4dFwiPkJvdGg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3Itc3dhdGNoIGdyZWVuXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaC10ZXh0XCI+TGltaXRlZCBvbiBtb2JpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3Itc3dhdGNoIHB1cnBsZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2gtdGV4dFwiPkV4Y2x1ZGVkIGZyb20gbW9iaWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7bWFyZ2luVG9wOiAwLCBtYXhXaWR0aDogNTIxIH19IHNyYz1cIi9nb29kcmVhZHMtY3VycmVudC1kZXNrdG9wLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4tZ3QtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yIEtleTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2gtY29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2ggYmx1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2gtdGV4dFwiPkJvdGg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc3dhdGNoLWNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3Itc3dhdGNoIGdyZWVuXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLXN3YXRjaC10ZXh0XCI+TGltaXRlZCBvbiBtb2JpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc3dhdGNoLWNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3Itc3dhdGNoIHB1cnBsZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjb2xvci1zd2F0Y2gtdGV4dFwiPkV4Y2x1ZGVkIGZyb20gbW9iaWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF5IHN1Yi1wYW5lbFwiIHN0eWxlPXt7IGNvbHVtbkdhcDogMjAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItcGFuZWwtc3ViaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIE1vYmlsZSBSZWRlc2lnbjpcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogOTk5IH19IHNyYz1cIi9nb29kcmVhZHMtcmVkZXNpZ24tbW9iaWxlLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+SSBhbmFseXplZCB0aGUgZGF0YSBhbmQgY2FtZSB1cCB3aXRoIGEgbmV3IHNpdGVtYXAgdGhhdDo8L2Rpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+SXMgb3JnYW5pemVkIHRvIG1hdGNoIG1vc3QgdXNlcuKAmXMgbWVudGFsIG1vZGVsczwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkNvbnNvbGlkYXRlcyBmZWF0dXJlcyB0aGF0IHdlcmUgcHJldmlvdXNseSBtdWx0aXBsaWVkIGFuZCBzcHJlYWQgdGhyb3VnaCB0aGUgYXBwPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+QWxsb3dzIGZvciBtb3JlIHNwYWNlIHRvIGFkZCBkZXNrdG9wIGZlYXR1cmVzIGZvciBwb3dlciB1c2Vycy48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtIGJlZm9yZVwiPkJlZm9yZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiA0NzkgfX0gc3JjPVwiL2dvb2RyZWFkcy1iZWZvcmUtMS5wbmdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIFRoZSBzZWFyY2ggZnVuY3Rpb24gaXMgaW4gYSBmaXhlZCBzZWFyY2ggYmFyIGF0IHRoZSB0b3Agb2YgdGhlIGFwcCBhbmQgYWxzbyBoYXMgaXRzIG93biB0YWIgaW4gdGhlIG1lbnUuIFRoZSBmaXhlZCA8Yj5TZWFyY2g8L2I+IGJhciBhdCB0aGUgdG9wIHNvbWV0aW1lcyBmdW5jdGlvbnMgYXMgYSBnZW5lcmFsIHNlYXJjaCBvZiB0aGUgZW50aXJlIGFwcCBhbmQgc29tZXRpbWVzIGlzIG9ubHkgYSBzZWFyY2ggd2l0aGluIHlvdXIgcGVyc29uYWwgYm9va3NoZWxmIC0gd2hpY2ggSSBmb3VuZCBjb25mdXNpbmcuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZSBleHRyYS10b3AtcGFkZGluZ1wiIHN0eWxlPXt7IG1heFdpZHRoOiA3NjAgfX0gc3JjPVwiL2dvb2RyZWFkcy1iZWZvcmUtMi5wbmdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxiPk15IEJvb2tzPC9iPiwgPGI+TW9yZTwvYj4sIGFuZCA8Yj5Qcm9maWxlPC9iPiBoYXZlIG92ZXJsYXBwaW5nIGZlYXR1cmVzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtIGFmdGVyXCI+QWZ0ZXI6PC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogNzgwIH19IHNyYz1cIi9nb29kcmVhZHMtYWZ0ZXItZHNrdHAtMS5wbmdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIEkgcmVwbGFjZWQgdGhlIDxiPk1vcmU8L2I+IHRhYiB3aXRoIDxiPk1lPC9iPiBiZWNhdXNlIOKAnG1vcmXigJ0gaXMgYSB2YWd1ZSBkZXNjcmlwdGlvbi4gVGhlIDxiPk1lPC9iPiB0YWIgbm93IGhvdXNlcyB0aGUgc2FtZSBmZWF0dXJlcyBpbiBhIG1vcmUgaW50dWl0aXZlIGRlc2lnbi4gPGI+TWU8L2I+IGlzIGxhaWQgb3V0IGxpa2UgdGhlIHVzZXLigJlzIHByb2ZpbGUgYW5kIGluY2x1ZGVzIGJvb2tzaGVsdmVzLCBjaGFsbGVuZ2VzLCBhbmQgbm90ZXMgLSB3aGljaCB1c2VkIHRvIGxpdmUgaW4gYm90aCA8Yj5Nb3JlPC9iPiBhbmQgPGI+TXkgQm9va3M8L2I+LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2UgZXh0cmEtdG9wLXBhZGRpbmdcIiBzdHlsZT17eyBtYXhXaWR0aDogNzc1IH19IHNyYz1cIi9nb29kcmVhZHMtYWZ0ZXItZHNrdHAtMi5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc20gYmVmb3JlXCI+QmVmb3JlOjwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDc4MCB9fSBzcmM9XCIvZ29vZHJlYWRzLWJlZm9yZS0zLnBuZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGI+RGlzY292ZXI8L2I+IGlzIG5vdCBhcyByb2J1c3QgYXMgaXQgaXMgb24gZGVza3RvcCBhbmQgaXMgbm90IHV0aWxpemluZyBtb2JpbGUgc3BhY2UgdG8gaXRzIGZ1bGwgcG90ZW50aWFsLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbSBhZnRlclwiPkFmdGVyOjwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwMzkgfX0gc3JjPVwiL2dvb2RyZWFkcy1hZnRlci1kc2t0cC0zLnBuZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgTWFueSBmZWF0dXJlcyBvbiB0aGUgbW9iaWxlIGFwcCBhcmUgbGltaXRlZCBjb21wYXJlZCB0byBpdHMgd2ViIGVxdWl2YWxlbnQuIENoYW5naW5nIHRoZSBhcmNoaXRlY3R1cmUgb2YgdGhlIGFwcCBhbGxvd2VkIGZvciBtb3JlIHNwYWNlIGFuZCBpbnR1aXRpdmUgYWNjZXNzIHRvIG1vcmUgZmVhdHVyZXMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZSBleHRyYS10b3AtcGFkZGluZ1wiIHN0eWxlPXt7IG1heFdpZHRoOiA4NjAgfX0gc3JjPVwiL2dvb2RyZWFkcy1hZnRlci1kc2t0cC00LnBuZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGI+U2VhcmNoPC9iPiBpcyBjb25zb2xpZGF0ZWQgdG8gdGhlIG1lbnUuIElmIEkgd29ya2VkIGF0IEdvb2RyZWFkcyBJIHdvdWxkIGhhdmUgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgb2Z0ZW4gdGhlIHNlYXJjaCBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgYXBwIGlzIHVzZWQgb3IgaG93IHZpdGFsIGl0IGlzIHRvIHVzZXJzLiBGb3IgdGhlIHB1cnBvc2VzIG9mIG15IHByb2plY3QsIEkgYXNzdW1lZCB0aGF0IHRoZSB0b3Agc2VhcmNoIGJhciBpcyBub3QgdXNlZCBhcyBvZnRlbiBhcyBpdCBpcyBpbiBvdGhlciBhcHBzIHdoZXJlIHRoaXMgaXMgYSBjb3JlIGZlYXR1cmUgbGlrZSBhIHNob3BwaW5nIGFwcC4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRUU1OTVCO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJBQzNBOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3MnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9xdW90ZS1jb250YWluZXIuc3ZnXCIpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmcge1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1waWVjZS1pbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzE3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvYmxlbXMge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2JsZW1zID4gLnNlY3Rpb24tc3ViaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbG9yLXN3YXRjaCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU4MkVDO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLmJsdWUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTgyRUM7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jb2xvci1zd2F0Y2guZ3JlZW4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQUMzQTk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jb2xvci1zd2F0Y2gucHVycGxlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTk2NEU3O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jb2xvci1zd2F0Y2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5ncmlkLWltYWdlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5zdWItcGFuZWwuZ3JheSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLm5vLXdyYXAge1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdWItcGFuZWwtc3ViaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAucG9ydGZvbGlvLXBpZWNlLWltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2JsZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2JsZW1zID4gLnNlY3Rpb24tc3ViaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnF1b3RlLXRleHQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmdyaWQtaW1hZ2Utc2NoZWR1bGluZzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1Yi1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAuc3ViLXBhbmVsOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4OyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5zdWItcGFuZWwuZ3JheSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHb29kUmVhZHM7Il19 */\n/*@ sourceURL=/Users/jewelyhoxie/code/julie-portfolio/pages/goodreads.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GoodReads);

/***/ }),

/***/ 5:
/*!************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fgoodreads.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fgoodreads.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fgoodreads&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fgoodreads.js!./");


/***/ }),

/***/ "dll-reference dll_b29684ed772f9fa2503e":
/*!*******************************************!*\
  !*** external "dll_b29684ed772f9fa2503e" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_b29684ed772f9fa2503e;

/***/ })

},[[5,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=goodreads.js.map