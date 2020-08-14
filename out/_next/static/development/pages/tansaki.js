(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/tansaki.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftansaki&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Ftansaki.js!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftansaki&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Ftansaki.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/tansaki", function() {
      var mod = __webpack_require__(/*! ./pages/tansaki.js */ "./pages/tansaki.js")
      if(true) {
        module.hot.accept(/*! ./pages/tansaki.js */ "./pages/tansaki.js", function() {
          if(!next.router.components["/tansaki"]) return
          var updatedPage = __webpack_require__(/*! ./pages/tansaki.js */ "./pages/tansaki.js")
          next.router.update("/tansaki", updatedPage)
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

/***/ "./pages/tansaki.js":
/*!**************************!*\
  !*** ./pages/tansaki.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/nathanhayflick/Dev/julie-portfolio/pages/tansaki.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Tansaki = function Tansaki() {
  return __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      marginTop: 24
    },
    className: "jsx-488144719" + " " + "casestudy-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "grid two-thirds-one-third full-width-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "grid-tile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }, "Anime recommendation generator"), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, "I was hired to redesign the landing page for Tansaki")), __jsx("div", {
    className: "jsx-488144719" + " " + "grid-tile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/anime-header.png",
    className: "jsx-488144719" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "gray sub-panel meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-488144719" + " " + "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-488144719" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 58
    }
  }, " Februrary 2020")), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-488144719" + " " + "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-488144719" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 59
    }
  }, " Figma, Whimsical")), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-488144719" + " " + "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Role:"), __jsx("span", {
    className: "jsx-488144719" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 58
    }
  }, " Ideate, style guide, lo-fi and hi-fi mock ups and prototype ")))), __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-488144719" + " " + "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Client")), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Tansaki is website that provides recommendations for anime movies and tv shows. The creator engineered the website as a person project because he wanted a better way to get recommendations based off of shows/movies he already liked.")), __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Audience"), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "People ages 18 and up with internet access and who are already interested in anc actively watch anime online.")), __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Project Overview"), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "I was hired by Tansaki to redesign landing page so people have a better idea of what the webside is about."))), __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-panel extra-top-padding gray",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Before"), __jsx("img", {
    src: "/tansaki-critiques.png",
    className: "jsx-488144719" + " " + "grid-image hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/tansaki-notes-mobile.png",
    className: "jsx-488144719" + " " + "grid-image hidden-gt-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-panel extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Painpoints"), __jsx("ul", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "The purpose and functions of the website were not clearly stated on the landing page "), __jsx("li", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "The content was disorganized and cluttered"), __jsx("li", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Lack of visual hierarchy ")), __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Goals"), __jsx("ul", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "Implement a clear call to action"), __jsx("li", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Improve spacing, colors, and font choses to create more visual harmony"), __jsx("li", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Increase engagement")), __jsx("div", {
    className: "jsx-488144719" + " " + "gray sub-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Constraints")), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "The website relies on an external API so there are limits to how much and how often information could be generated."), __jsx("br", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Interactions and information that Tansaki wanted to keep the same."), __jsx("br", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Time and distance barrier as we do not live close to each other and I was a full time employee at another company while working on this project."))), __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Ideation & Wireframing"), __jsx("div", {
    className: "jsx-488144719" + " " + "grid quarters full-width-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/tansaki-layout-1.png",
    className: "jsx-488144719" + " " + "layouts hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/tansaki-layout-2.png",
    className: "jsx-488144719" + " " + "layouts hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/tansaki-layout-3.png",
    className: "jsx-488144719" + " " + "layouts hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/tansaki-layout-4.png",
    className: "jsx-488144719" + " " + "layouts hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: '100%'
    },
    src: "/tansaki-layout-mobile.png",
    className: "jsx-488144719" + " " + "hidden-gt-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  })), __jsx("img", {
    style: {
      maxWidth: '100%'
    },
    src: "/tansaki-styleguide.png",
    className: "jsx-488144719" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-488144719" + " " + "casestudy-panel extra-top-padding gray",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Final Designs"), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "A clear Call To Action allows first time users to understand the purpose of the website.", __jsx("br", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 23
    }
  }), "Top Searches component was moved to the top and gave the shows a priority to create more understanding and made it easier for the user to click through the filter options.", __jsx("br", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 23
    }
  }), "Color, type weight/size, and spacing were thoughtfully used for a clear visual heirarchy."), __jsx("div", {
    className: "jsx-488144719" + " " + "sides-80",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "grid half-and-half full-width-mobile extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, "Landing page"), __jsx("img", {
    src: "/tansaki-finished-1.png",
    className: "jsx-488144719" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, "Scroll down"), __jsx("img", {
    src: "/tansaki-finished-2.png",
    className: "jsx-488144719" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-488144719" + " " + "caption extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, "Hover state"), __jsx("img", {
    src: "/tansaki-finished-3.png",
    className: "jsx-488144719" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }))), __jsx("div", {
    style: {
      paddingBottom: 60
    },
    className: "jsx-488144719" + " " + "grid thirds full-width-mobile extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "Mobile landing"), __jsx("img", {
    src: "/tansaki-mobile-1.png",
    className: "jsx-488144719" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, "Scroll down"), __jsx("img", {
    src: "/tansaki-mobile-2.png",
    className: "jsx-488144719" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-488144719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-488144719" + " " + "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, "Select"), __jsx("img", {
    src: "/tansaki-mobile-3.png",
    className: "jsx-488144719" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "488144719",
    __self: _this
  }, ".portfolio-piece-img.jsx-488144719{width:381px;height:283px;}@media only screen and (max-width:767px){.portfolio-piece-img.jsx-488144719{width:213px;height:158px;}.caption.jsx-488144719{margin-top:30px;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW5oYXlmbGljay9EZXYvanVsaWUtcG9ydGZvbGlvL3BhZ2VzL3RhbnNha2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUpvQixBQUc2QixBQUtJLEFBSUksWUFSUCxBQUtJLElBSUssU0FSekIsQUFLSSxTQUlBIiwiZmlsZSI6Ii9Vc2Vycy9uYXRoYW5oYXlmbGljay9EZXYvanVsaWUtcG9ydGZvbGlvL3BhZ2VzL3RhbnNha2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUYW5zYWtpID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LWNvbnRhaW5lclwiPlxuICAgICAgICB7LyogSGVybyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktaGVhZGVyXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDI0fX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdHdvLXRoaXJkcy1vbmUtdGhpcmQgZnVsbC13aWR0aC1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtdGlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+QW5pbWUgcmVjb21tZW5kYXRpb24gZ2VuZXJhdG9yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SSB3YXMgaGlyZWQgdG8gcmVkZXNpZ24gdGhlIGxhbmRpbmcgcGFnZSBmb3IgVGFuc2FraTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC10aWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXBpZWNlLWltZ1wiIHNyYz1cIi9hbmltZS1oZWFkZXIucG5nXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogTWV0YSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBzdWItcGFuZWwgbWV0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lZGl1bVwiPkRhdGU6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gRmVicnVyYXJ5IDIwMjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVkaXVtXCI+VG9vbHM6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gRmlnbWEsIFdoaW1zaWNhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZWRpdW1cIj5Sb2xlOjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IElkZWF0ZSwgc3R5bGUgZ3VpZGUsIGxvLWZpIGFuZCBoaS1maSBtb2NrIHVwcyBhbmQgcHJvdG90eXBlIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZWRpdW1cIj5DbGllbnQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgVGFuc2FraSBpcyB3ZWJzaXRlIHRoYXQgcHJvdmlkZXMgcmVjb21tZW5kYXRpb25zIGZvciBhbmltZSBtb3ZpZXMgYW5kIHR2IHNob3dzLiBUaGUgY3JlYXRvciBlbmdpbmVlcmVkIHRoZSB3ZWJzaXRlIGFzIGEgcGVyc29uIHByb2plY3QgYmVjYXVzZSBoZSB3YW50ZWQgYSBiZXR0ZXIgd2F5IHRvIGdldCByZWNvbW1lbmRhdGlvbnMgYmFzZWQgb2ZmIG9mIHNob3dzL21vdmllcyBoZSBhbHJlYWR5IGxpa2VkLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlclwiPlxuICAgICAgICAgICAgICAgIEF1ZGllbmNlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+UGVvcGxlIGFnZXMgMTggYW5kIHVwIHdpdGggaW50ZXJuZXQgYWNjZXNzIGFuZCB3aG8gYXJlIGFscmVhZHkgaW50ZXJlc3RlZCBpbiBhbmMgYWN0aXZlbHkgd2F0Y2ggYW5pbWUgb25saW5lLjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IE92ZXJ2aWV3XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgSSB3YXMgaGlyZWQgYnkgVGFuc2FraSB0byByZWRlc2lnbiBsYW5kaW5nIHBhZ2Ugc28gcGVvcGxlIGhhdmUgYSBiZXR0ZXIgaWRlYSBvZiB3aGF0IHRoZSB3ZWJzaWRlIGlzIGFib3V0LlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbCBleHRyYS10b3AtcGFkZGluZyBncmF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgQmVmb3JlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZSBoaWRkZW4tbW9iaWxlXCIgc3JjPVwiL3RhbnNha2ktY3JpdGlxdWVzLnBuZ1wiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2UgaGlkZGVuLWd0LW1vYmlsZVwiIHNyYz1cIi90YW5zYWtpLW5vdGVzLW1vYmlsZS5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEJhY2tncm91bmQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsIGV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgUGFpbnBvaW50c1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlRoZSBwdXJwb3NlIGFuZCBmdW5jdGlvbnMgb2YgdGhlIHdlYnNpdGUgd2VyZSBub3QgY2xlYXJseSBzdGF0ZWQgb24gdGhlIGxhbmRpbmcgcGFnZSA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5UaGUgY29udGVudCB3YXMgZGlzb3JnYW5pemVkIGFuZCBjbHV0dGVyZWQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5MYWNrIG9mIHZpc3VhbCBoaWVyYXJjaHkgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgR29hbHNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5JbXBsZW1lbnQgYSBjbGVhciBjYWxsIHRvIGFjdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkltcHJvdmUgc3BhY2luZywgY29sb3JzLCBhbmQgZm9udCBjaG9zZXMgdG8gY3JlYXRlIG1vcmUgdmlzdWFsIGhhcm1vbnk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5JbmNyZWFzZSBlbmdhZ2VtZW50PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXkgc3ViLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RyYWludHNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHdlYnNpdGUgcmVsaWVzIG9uIGFuIGV4dGVybmFsIEFQSSBzbyB0aGVyZSBhcmUgbGltaXRzIHRvIGhvdyBtdWNoIGFuZCBob3cgb2Z0ZW4gaW5mb3JtYXRpb24gY291bGQgYmUgZ2VuZXJhdGVkLiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBJbnRlcmFjdGlvbnMgYW5kIGluZm9ybWF0aW9uIHRoYXQgVGFuc2FraSB3YW50ZWQgdG8ga2VlcCB0aGUgc2FtZS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBUaW1lIGFuZCBkaXN0YW5jZSBiYXJyaWVyIGFzIHdlIGRvIG5vdCBsaXZlIGNsb3NlIHRvIGVhY2ggb3RoZXIgYW5kIEkgd2FzIGEgZnVsbCB0aW1lIGVtcGxveWVlIGF0IGFub3RoZXIgY29tcGFueSB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICBJZGVhdGlvbiAmYW1wOyBXaXJlZnJhbWluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcXVhcnRlcnMgZnVsbC13aWR0aC1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxheW91dHMgaGlkZGVuLW1vYmlsZVwiIHNyYz1cIi90YW5zYWtpLWxheW91dC0xLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsYXlvdXRzIGhpZGRlbi1tb2JpbGVcIiBzcmM9XCIvdGFuc2FraS1sYXlvdXQtMi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGF5b3V0cyBoaWRkZW4tbW9iaWxlXCIgc3JjPVwiL3RhbnNha2ktbGF5b3V0LTMucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxheW91dHMgaGlkZGVuLW1vYmlsZVwiIHNyYz1cIi90YW5zYWtpLWxheW91dC00LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoaWRkZW4tZ3QtbW9iaWxlXCIgc3R5bGU9e3ttYXhXaWR0aDogJzEwMCUnfX0gc3JjPVwiL3RhbnNha2ktbGF5b3V0LW1vYmlsZS5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCIgc3R5bGU9e3ttYXhXaWR0aDogJzEwMCUnfX0gc3JjPVwiL3RhbnNha2ktc3R5bGVndWlkZS5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWwgZXh0cmEtdG9wLXBhZGRpbmcgZ3JheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIEZpbmFsIERlc2lnbnNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBBIGNsZWFyIENhbGwgVG8gQWN0aW9uIGFsbG93cyBmaXJzdCB0aW1lIHVzZXJzIHRvIHVuZGVyc3RhbmQgdGhlIHB1cnBvc2Ugb2YgdGhlIHdlYnNpdGUuXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgVG9wIFNlYXJjaGVzIGNvbXBvbmVudCB3YXMgbW92ZWQgdG8gdGhlIHRvcCBhbmQgZ2F2ZSB0aGUgc2hvd3MgYSBwcmlvcml0eSB0byBjcmVhdGUgbW9yZSB1bmRlcnN0YW5kaW5nIGFuZCBtYWRlIGl0IGVhc2llciBmb3IgdGhlIHVzZXIgdG8gY2xpY2sgdGhyb3VnaCB0aGUgZmlsdGVyIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgQ29sb3IsIHR5cGUgd2VpZ2h0L3NpemUsIGFuZCBzcGFjaW5nIHdlcmUgdGhvdWdodGZ1bGx5IHVzZWQgZm9yIGEgY2xlYXIgdmlzdWFsIGhlaXJhcmNoeS4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZXMtODBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgaGFsZi1hbmQtaGFsZiBmdWxsLXdpZHRoLW1vYmlsZSBleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+TGFuZGluZyBwYWdlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzcmM9XCIvdGFuc2FraS1maW5pc2hlZC0xLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+U2Nyb2xsIGRvd248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHNyYz1cIi90YW5zYWtpLWZpbmlzaGVkLTIucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvbiBleHRyYS10b3AtcGFkZGluZyBuby10b3AtcGFkZGluZy1tb2JpbGVcIj5Ib3ZlciBzdGF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3JjPVwiL3RhbnNha2ktZmluaXNoZWQtMy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB0aGlyZHMgZnVsbC13aWR0aC1tb2JpbGUgZXh0cmEtdG9wLXBhZGRpbmcgbm8tdG9wLXBhZGRpbmctbW9iaWxlXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNjAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5Nb2JpbGUgbGFuZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3JjPVwiL3RhbnNha2ktbW9iaWxlLTEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5TY3JvbGwgZG93bjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3JjPVwiL3RhbnNha2ktbW9iaWxlLTIucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5TZWxlY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHNyYz1cIi90YW5zYWtpLW1vYmlsZS0zLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgLnBvcnRmb2xpby1waWVjZS1pbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzODFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4M3B4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSAge1xuICAgICAgICAgICAgICAgIC5wb3J0Zm9saW8tcGllY2UtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIxM3B4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1OHB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRhbnNha2k7XG4iXX0= */\n/*@ sourceURL=/Users/nathanhayflick/Dev/julie-portfolio/pages/tansaki.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tansaki);

/***/ }),

/***/ 4:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Ftansaki&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Ftansaki.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Ftansaki&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Ftansaki.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftansaki&absolutePagePath=%2FUsers%2Fnathanhayflick%2FDev%2Fjulie-portfolio%2Fpages%2Ftansaki.js!./");


/***/ }),

/***/ "dll-reference dll_b29684ed772f9fa2503e":
/*!*******************************************!*\
  !*** external "dll_b29684ed772f9fa2503e" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_b29684ed772f9fa2503e;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=tansaki.js.map