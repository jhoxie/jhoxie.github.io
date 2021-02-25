(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/discovery.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdiscovery&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fdiscovery.js!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdiscovery&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fdiscovery.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/discovery", function() {
      var mod = __webpack_require__(/*! ./pages/discovery.js */ "./pages/discovery.js")
      if(true) {
        module.hot.accept(/*! ./pages/discovery.js */ "./pages/discovery.js", function() {
          if(!next.router.components["/discovery"]) return
          var updatedPage = __webpack_require__(/*! ./pages/discovery.js */ "./pages/discovery.js")
          next.router.update("/discovery", updatedPage)
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

/***/ "./pages/discovery.js":
/*!****************************!*\
  !*** ./pages/discovery.js ***!
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
    _jsxFileName = "/Users/jewelyhoxie/code/julie-portfolio/pages/discovery.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Discovery = function Discovery() {
  return __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, "Discovery experience for an artist cooperative "), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Creating credibility and community through discovery"), __jsx("div", {
    style: {
      marginTop: 60
    },
    className: "jsx-1324996013" + " " + "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/discovery-1.png",
    className: "jsx-1324996013" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "grid one-third-two-thirds problems full-width-mobile extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "gray sub-panel meta no-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1324996013" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "Client:"), __jsx("span", {
    className: "jsx-1324996013" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 58
    }
  }, " Ampled")), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1324996013" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-1324996013" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 56
    }
  }, " December 2020")), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1324996013" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-1324996013" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 57
    }
  }, " Figma, Slack"))), __jsx("div", {
    className: "jsx-1324996013" + " " + "disclaimer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 24
    }
  }, "Disclaimer:"), " The artists featured here are purely for mockup purposes. These artists are not currently on the platform.")))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "What is Ampled?"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Ampled is a platform for fans to financially support musicians in exchange for exclusive content. This sounds like Patreon. But the difference is that it is a cooperative. Musicians get a seat at the decision-making table and make money directly through community support.")), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Bringing user feedback to life"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Listening to users should always be part of the design process but as a cooperative, we take it a step further. Users help drive the product roadmap. Our journey of making a discovery page is a perfect example of that.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }), __jsx("img", {
    style: {
      maxWidth: 833,
      marginBottom: 30
    },
    src: "/discovery-peeps.png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), "As support tickets came in I noticed a theme among both artist-owners and new users. They were asking how they could find other artists on the platform. There was not a browse page because artists gained supporters by linking their page to social media.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  }), "To better understand the importance of a discovery feature I made proto-personas based on user feedback and gained insight through making an empathy map."), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }), __jsx("img", {
    style: {
      maxWidth: 686
    },
    src: "/discovery-empmap.png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 23
    }
  }), "The empathy map helped me see the problem and ", __jsx("i", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 63
    }
  }, "why"), " people were asking for the discovery feature. The most significant insight was that people were ", __jsx("i", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 170
    }
  }, "evaluating the credibility"), " of the platform based on how many users it had. People were also frustrated because they ", __jsx("i", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 293
    }
  }, "expected"), " to have a discovery experience like other social platforms.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  }), "A discovery page gives users more insight into how many people are using the platform and if the people using it are interesting or similar to them."), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Problem"), __jsx("p", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "How might we gain user\u2019s trust and help them find interesting artists?", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), "How might we make a feature lean enough to not distract from the platform's other priorities?", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }), "How might we create a sense of ownership? ", __jsx("i", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 55
    }
  }, "(This is a value we want to uphold as a cooperative with every design decision)"))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Why is this important?"), __jsx("p", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Artist discovery is not a primary goal of the platform but I learned that an artist discovery page would aid in ", __jsx("strong", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 129
    }
  }, "credibility"), " (which is especially important because we are a new platform asking people to enter their credit card information), a sense of ", __jsx("strong", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 285
    }
  }, "community"), ", and better ", __jsx("strong", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 324
    }
  }, "inform"), " new users about the platform.")), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "What does success look like?"), __jsx("ul", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "Trust from musicians and supporters"), __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Increased number of artists and supporters"), __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "New users understand how the platform works"))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Ideation & Iteration"), __jsx("img", {
    style: {
      maxWidth: 686
    },
    src: "/discovery-sketch.png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "I collaborated with the engineering team to understand the capabilities of the filter and search infrastructure. Then I sketched some solutions for a lightweight discovery experience.")), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Final designs and the decisions behind them"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Highlighting ownership"), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }), "Becoming an owner is a milestone experience so I thought it would be nice to highlight new artist owners at the top."), __jsx("div", {
    className: "jsx-1324996013" + " " + "grid full-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxWidth: 686
    },
    src: "/discovery-2.png",
    className: "jsx-1324996013" + " " + "grid-image extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Credibility")), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "The \u201Cfeatured\u201D section is the default sort state. Featured artists are based on a combination of factors: a recently updated supporter page, number of supporters, and how long the artist has been on the platform. This combination allows for the featured artists to always be changing, be active/current artists, and be artists who have some amount of content to show."), __jsx("div", {
    className: "jsx-1324996013" + " " + "grid full-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxWidth: 686
    },
    src: "/discovery-3.png",
    className: "jsx-1324996013" + " " + "grid-image extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "Default filter states lead to a better understanding")), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "I maintained simple and slimmed down filter categories (i.e.: only included major cities instead of all cities) in order to balance the priorities of the platform. The default filters inform users and give context to what artists they are looking at instead of looking at an ambiguous/random assortment of musicians."), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), "Watch the prototype below:", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1324996013" + " " + "grid full-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("video", {
    controls: true,
    src: "discovery-prototype.mov",
    poster: "/ampled-cover.png",
    style: {
      maxWidth: 686
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: "jsx-1324996013" + " " + "grid-image extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, "Mobile mockup"), __jsx("div", {
    className: "jsx-1324996013" + " " + "grid full-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxWidth: 686
    },
    src: "/discovery-4.png",
    className: "jsx-1324996013" + " " + "grid-image extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "Looking forward"), "I still need to test more users to see how well the discovery page is meeting our success metrics and what improvements can be made from there. There is still room to make the search filters more robust so that more artists can be easily found. I think it would also be important to have the artist-owners contribute more to the discovery experience like making artist curated-sections."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1324996013",
    __self: _this
  }, "a.jsx-1324996013{-webkit-text-decoration:underline;text-decoration:underline;}.before.jsx-1324996013{color:#EE595B;}.after.jsx-1324996013{color:#2AC3A9;}.quote-text.jsx-1324996013{font-weight:normal;font-size:18px;line-height:36px;padding:36px;padding-bottom:72px;background-image:url(\"/quote-container.svg\");text-align:center;}.grid-image-scheduling.jsx-1324996013{object-fit:cover;width:100%;}.portfolio-piece-img.jsx-1324996013{max-width:721.67px;}.problems.jsx-1324996013{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.problems.jsx-1324996013>.section-subheader.jsx-1324996013{-webkit-flex:0 0 none;-ms-flex:0 0 none;flex:0 0 none;padding-right:40px;}.disclaimer.jsx-1324996013{font-family:Roboto;font-weight:300;font-size:18px;line-height:30px;margin-left:42;}.color-swatch.jsx-1324996013{display:inline-block;width:18px;height:18px;background-color:#3582EC;margin-right:8px;}.color-swatch.blue.jsx-1324996013{background-color:#3582EC;}.color-swatch.green.jsx-1324996013{background-color:#2AC3A9;}.color-swatch.purple.jsx-1324996013{background-color:#A964E7;}.color-swatch-text.jsx-1324996013{font-size:16px;line-height:16px;margin-right:20px;}.color-swatch-container.jsx-1324996013{padding-top:16px;padding-bottom:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.grid-image.jsx-1324996013{max-width:100%;width:100%;}.sub-panel.gray.jsx-1324996013{padding:20px;}.no-wrap.jsx-1324996013{white-space:nowrap;}@media only screen and (min-width:768px){.disclaimer.jsx-1324996013{margin-left:42px;}.sub-panel-subheader.jsx-1324996013{margin-bottom:16px;font-size:16px;}}@media only screen and (max-width:767px){.meta.jsx-1324996013{width:100%;}.portfolio-piece-img.jsx-1324996013{margin-bottom:50px;width:300px;}.problems.jsx-1324996013{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.problems.jsx-1324996013>.section-subheader.jsx-1324996013{padding-right:0x;}.quote-text.jsx-1324996013{font-size:12px;line-height:26px;padding:24px 12px;padding-bottom:50px;}.quote-text.jsx-1324996013:first-of-type{margin-bottom:18px;}.grid-image-scheduling.jsx-1324996013{margin-top:30px;}.grid-image-scheduling.jsx-1324996013:first-of-type{margin-top:0px;}.sub-panel.jsx-1324996013{white-space:normal;}.sub-panel.jsx-1324996013:first-of-type{margin-bottom:18px;}.sub-panel.gray.jsx-1324996013{padding:8px;padding-left:16px;padding-right:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9jb2RlL2p1bGllLXBvcnRmb2xpby9wYWdlcy9kaXNjb3ZlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElvQixBQUcyQyxBQUdaLEFBR0EsQUFHSyxBQVNGLEFBSUUsQUFLQSxBQUdMLEFBSUssQUFPRSxBQU9JLEFBR0EsQUFHQSxBQUdWLEFBS0UsQUFNRixBQUlGLEFBR00sQUFJRSxBQUdFLEFBTVIsQUFHUSxBQUlHLEFBR0wsQUFHRixBQU1JLEFBR0gsQUFHRCxBQUdJLEFBR0EsQUFHUCxXQWpDaEIsQ0FrQ3NCLENBbER6QixDQXJFRCxBQUdBLENBbURxQixBQVdOLEFBaUNVLEFBWXBCLENBSEEsQ0E1RlUsQUE0Q1MsQUFpQnBCLEFBbUJBLEVBekZlLEFBYW5CLEFBWW9CLEFBeUNuQixBQU9zQixBQVNILEFBZ0JoQixBQVNBLEFBR0MsRUE5RVUsSUFPZCxBQUdBLEFBR0EsQ0FlQSxFQWxERCxFQXdHMkIsQ0EvQnZCLENBbERZLEFBZ0JNLEFBNENJLEVBNUZMLEFBeUVqQixDQWhEZSxFQTRCSSxPQXBCTSxLQWlGeEIsQ0F4RmdCLEFBdUJwQixBQTRDMkIsQ0E1RlgsR0FtQk0sTUE5QnZCLElBWXdCLEdBeUJMLEVBT0UsQ0E0RGpCLEdBekVKLEtBZ0VJLElBekRKLEVBekJpRCxFQWdDaEQsT0FsQkQsb0NBYnNCLENBa0RMLGlCQWpEakIseURBa0RDIiwiZmlsZSI6Ii9Vc2Vycy9qZXdlbHlob3hpZS9jb2RlL2p1bGllLXBvcnRmb2xpby9wYWdlcy9kaXNjb3ZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEaXNjb3ZlcnkgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBIZXJvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5EaXNjb3ZlcnkgZXhwZXJpZW5jZSBmb3IgYW4gYXJ0aXN0IGNvb3BlcmF0aXZlIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DcmVhdGluZyBjcmVkaWJpbGl0eSBhbmQgY29tbXVuaXR5IHRocm91Z2ggZGlzY292ZXJ5PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDYwIH19PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXBpZWNlLWltZ1wiIHNyYz1cIi9kaXNjb3ZlcnktMS5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgey8qIE1ldGEgKi99XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG9uZS10aGlyZC10d28tdGhpcmRzIHByb2JsZW1zIGZ1bGwtd2lkdGgtbW9iaWxlIGV4dHJhLXRvcC1wYWRkaW5nIG5vLXRvcC1wYWRkaW5nLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBzdWItcGFuZWwgbWV0YSBuby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5DbGllbnQ6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gQW1wbGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkRhdGU6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gRGVjZW1iZXIgMjAyMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5Ub29sczo8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBGaWdtYSwgU2xhY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD48aT5EaXNjbGFpbWVyOjwvaT4gVGhlIGFydGlzdHMgZmVhdHVyZWQgaGVyZSBhcmUgcHVyZWx5IGZvciBtb2NrdXAgcHVycG9zZXMuIFRoZXNlIGFydGlzdHMgYXJlIG5vdCBjdXJyZW50bHkgb24gdGhlIHBsYXRmb3JtLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPldoYXQgaXMgQW1wbGVkP1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEFtcGxlZCBpcyBhIHBsYXRmb3JtIGZvciBmYW5zIHRvIGZpbmFuY2lhbGx5IHN1cHBvcnQgbXVzaWNpYW5zIGluIGV4Y2hhbmdlIGZvciBleGNsdXNpdmUgY29udGVudC4gVGhpcyBzb3VuZHMgbGlrZSBQYXRyZW9uLiBCdXQgdGhlIGRpZmZlcmVuY2UgaXMgdGhhdCBpdCBpcyBhIGNvb3BlcmF0aXZlLiBNdXNpY2lhbnMgZ2V0IGEgc2VhdCBhdCB0aGUgZGVjaXNpb24tbWFraW5nIHRhYmxlIGFuZCBtYWtlIG1vbmV5IGRpcmVjdGx5IHRocm91Z2ggY29tbXVuaXR5IHN1cHBvcnQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+QnJpbmdpbmcgdXNlciBmZWVkYmFjayB0byBsaWZlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgTGlzdGVuaW5nIHRvIHVzZXJzIHNob3VsZCBhbHdheXMgYmUgcGFydCBvZiB0aGUgZGVzaWduIHByb2Nlc3MgYnV0IGFzIGEgY29vcGVyYXRpdmUsIHdlIHRha2UgaXQgYSBzdGVwIGZ1cnRoZXIuIFVzZXJzIGhlbHAgZHJpdmUgdGhlIHByb2R1Y3Qgcm9hZG1hcC4gT3VyIGpvdXJuZXkgb2YgbWFraW5nIGEgZGlzY292ZXJ5IHBhZ2UgaXMgYSBwZXJmZWN0IGV4YW1wbGUgb2YgdGhhdC4gXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6ODMzLCBtYXJnaW5Cb3R0b206IDMwIH19IHNyYz1cIi9kaXNjb3ZlcnktcGVlcHMucG5nXCIvPlxuICAgICAgICAgICAgICAgIEFzIHN1cHBvcnQgdGlja2V0cyBjYW1lIGluIEkgbm90aWNlZCBhIHRoZW1lIGFtb25nIGJvdGggYXJ0aXN0LW93bmVycyBhbmQgbmV3IHVzZXJzLiBUaGV5IHdlcmUgYXNraW5nIGhvdyB0aGV5IGNvdWxkIGZpbmQgb3RoZXIgYXJ0aXN0cyBvbiB0aGUgcGxhdGZvcm0uIFRoZXJlIHdhcyBub3QgYSBicm93c2UgcGFnZSBiZWNhdXNlIGFydGlzdHMgZ2FpbmVkIHN1cHBvcnRlcnMgYnkgbGlua2luZyB0aGVpciBwYWdlIHRvIHNvY2lhbCBtZWRpYS5cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICBUbyBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgaW1wb3J0YW5jZSBvZiBhIGRpc2NvdmVyeSBmZWF0dXJlIEkgbWFkZSBwcm90by1wZXJzb25hcyBiYXNlZCBvbiB1c2VyIGZlZWRiYWNrIGFuZCBnYWluZWQgaW5zaWdodCB0aHJvdWdoIG1ha2luZyBhbiBlbXBhdGh5IG1hcC4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDY4NiB9fSBzcmM9XCIvZGlzY292ZXJ5LWVtcG1hcC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgVGhlIGVtcGF0aHkgbWFwIGhlbHBlZCBtZSBzZWUgdGhlIHByb2JsZW0gYW5kIDxpPndoeTwvaT4gcGVvcGxlIHdlcmUgYXNraW5nIGZvciB0aGUgZGlzY292ZXJ5IGZlYXR1cmUuIFRoZSBtb3N0IHNpZ25pZmljYW50IGluc2lnaHQgd2FzIHRoYXQgcGVvcGxlIHdlcmUgPGk+ZXZhbHVhdGluZyB0aGUgY3JlZGliaWxpdHk8L2k+IG9mIHRoZSBwbGF0Zm9ybSBiYXNlZCBvbiBob3cgbWFueSB1c2VycyBpdCBoYWQuIFBlb3BsZSB3ZXJlIGFsc28gZnJ1c3RyYXRlZCBiZWNhdXNlIHRoZXkgPGk+ZXhwZWN0ZWQ8L2k+IHRvIGhhdmUgYSBkaXNjb3ZlcnkgZXhwZXJpZW5jZSBsaWtlIG90aGVyIHNvY2lhbCBwbGF0Zm9ybXMuIFxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIEEgZGlzY292ZXJ5IHBhZ2UgZ2l2ZXMgdXNlcnMgbW9yZSBpbnNpZ2h0IGludG8gaG93IG1hbnkgcGVvcGxlIGFyZSB1c2luZyB0aGUgcGxhdGZvcm0gYW5kIGlmIHRoZSBwZW9wbGUgdXNpbmcgaXQgYXJlIGludGVyZXN0aW5nIG9yIHNpbWlsYXIgdG8gdGhlbS5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+UHJvYmxlbTwvZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICBIb3cgbWlnaHQgd2UgZ2FpbiB1c2Vy4oCZcyB0cnVzdCBhbmQgaGVscCB0aGVtIGZpbmQgaW50ZXJlc3RpbmcgYXJ0aXN0cz9cbiAgICAgICAgICAgIDwgYnIvPjxiciAvPlxuICAgICAgICAgICAgSG93IG1pZ2h0IHdlIG1ha2UgYSBmZWF0dXJlIGxlYW4gZW5vdWdoIHRvIG5vdCBkaXN0cmFjdCBmcm9tIHRoZSBwbGF0Zm9ybSdzIG90aGVyIHByaW9yaXRpZXM/XG4gICAgICAgICAgICA8IGJyLz48YnIgLz5cbiAgICAgICAgICAgIEhvdyBtaWdodCB3ZSBjcmVhdGUgYSBzZW5zZSBvZiBvd25lcnNoaXA/IDxpPihUaGlzIGlzIGEgdmFsdWUgd2Ugd2FudCB0byB1cGhvbGQgYXMgYSBjb29wZXJhdGl2ZSB3aXRoIGV2ZXJ5IGRlc2lnbiBkZWNpc2lvbik8L2k+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPldoeSBpcyB0aGlzIGltcG9ydGFudD88L2Rpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEFydGlzdCBkaXNjb3ZlcnkgaXMgbm90IGEgcHJpbWFyeSBnb2FsIG9mIHRoZSBwbGF0Zm9ybSBidXQgSSBsZWFybmVkIHRoYXQgYW4gYXJ0aXN0IGRpc2NvdmVyeSBwYWdlIHdvdWxkIGFpZCBpbiA8c3Ryb25nPmNyZWRpYmlsaXR5PC9zdHJvbmc+ICh3aGljaCBpcyBlc3BlY2lhbGx5IGltcG9ydGFudCBiZWNhdXNlIHdlIGFyZSBhIG5ldyBwbGF0Zm9ybSBhc2tpbmcgcGVvcGxlIHRvIGVudGVyIHRoZWlyIGNyZWRpdCBjYXJkIGluZm9ybWF0aW9uKSwgYSBzZW5zZSBvZiA8c3Ryb25nPmNvbW11bml0eTwvc3Ryb25nPiwgYW5kIGJldHRlciA8c3Ryb25nPmluZm9ybTwvc3Ryb25nPiBuZXcgdXNlcnMgYWJvdXQgdGhlIHBsYXRmb3JtLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5XaGF0IGRvZXMgc3VjY2VzcyBsb29rIGxpa2U/PC9kaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlRydXN0IGZyb20gbXVzaWNpYW5zIGFuZCBzdXBwb3J0ZXJzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SW5jcmVhc2VkIG51bWJlciBvZiBhcnRpc3RzIGFuZCBzdXBwb3J0ZXJzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TmV3IHVzZXJzIHVuZGVyc3RhbmQgaG93IHRoZSBwbGF0Zm9ybSB3b3JrczwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5JZGVhdGlvbiAmIEl0ZXJhdGlvblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogNjg2IH19IHNyYz1cIi9kaXNjb3Zlcnktc2tldGNoLnBuZ1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGRpdj5JIGNvbGxhYm9yYXRlZCB3aXRoIHRoZSBlbmdpbmVlcmluZyB0ZWFtIHRvIHVuZGVyc3RhbmQgdGhlIGNhcGFiaWxpdGllcyBvZiB0aGUgZmlsdGVyIGFuZCBzZWFyY2ggaW5mcmFzdHJ1Y3R1cmUuIFRoZW4gSSBza2V0Y2hlZCBzb21lIHNvbHV0aW9ucyBmb3IgYSBsaWdodHdlaWdodCBkaXNjb3ZlcnkgZXhwZXJpZW5jZS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5GaW5hbCBkZXNpZ25zIGFuZCB0aGUgZGVjaXNpb25zIGJlaGluZCB0aGVtPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SGlnaGxpZ2h0aW5nIG93bmVyc2hpcDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgQmVjb21pbmcgYW4gb3duZXIgaXMgYSBtaWxlc3RvbmUgZXhwZXJpZW5jZSBzbyBJIHRob3VnaHQgaXQgd291bGQgYmUgbmljZSB0byBoaWdobGlnaHQgbmV3IGFydGlzdCBvd25lcnMgYXQgdGhlIHRvcC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2UgZXh0cmEtdG9wLXBhZGRpbmctc21cIiBzdHlsZT17eyBtYXhXaWR0aDogNjg2IH19IHNyYz1cIi9kaXNjb3ZlcnktMi5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdHJvbmc+Q3JlZGliaWxpdHk8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBUaGUg4oCcZmVhdHVyZWTigJ0gc2VjdGlvbiBpcyB0aGUgZGVmYXVsdCBzb3J0IHN0YXRlLiBGZWF0dXJlZCBhcnRpc3RzIGFyZSBiYXNlZCBvbiBhIGNvbWJpbmF0aW9uIG9mIGZhY3RvcnM6IGEgcmVjZW50bHkgdXBkYXRlZCBzdXBwb3J0ZXIgcGFnZSwgbnVtYmVyIG9mIHN1cHBvcnRlcnMsIGFuZCBob3cgbG9uZyB0aGUgYXJ0aXN0IGhhcyBiZWVuIG9uIHRoZSBwbGF0Zm9ybS4gVGhpcyBjb21iaW5hdGlvbiBhbGxvd3MgZm9yIHRoZSBmZWF0dXJlZCBhcnRpc3RzIHRvIGFsd2F5cyBiZSBjaGFuZ2luZywgYmUgYWN0aXZlL2N1cnJlbnQgYXJ0aXN0cywgYW5kIGJlIGFydGlzdHMgd2hvIGhhdmUgc29tZSBhbW91bnQgb2YgY29udGVudCB0byBzaG93LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZSBleHRyYS10b3AtcGFkZGluZy1zbVwiIHN0eWxlPXt7IG1heFdpZHRoOiA2ODYgfX0gc3JjPVwiL2Rpc2NvdmVyeS0zLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RGVmYXVsdCBmaWx0ZXIgc3RhdGVzIGxlYWQgdG8gYSBiZXR0ZXIgdW5kZXJzdGFuZGluZzwvc3Ryb25nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEkgbWFpbnRhaW5lZCBzaW1wbGUgYW5kIHNsaW1tZWQgZG93biBmaWx0ZXIgY2F0ZWdvcmllcyAoaS5lLjogb25seSBpbmNsdWRlZCBtYWpvciBjaXRpZXMgaW5zdGVhZCBvZiBhbGwgY2l0aWVzKSBpbiBvcmRlciB0byBiYWxhbmNlIHRoZSBwcmlvcml0aWVzIG9mIHRoZSBwbGF0Zm9ybS4gVGhlIGRlZmF1bHQgZmlsdGVycyBpbmZvcm0gdXNlcnMgYW5kIGdpdmUgY29udGV4dCB0byB3aGF0IGFydGlzdHMgdGhleSBhcmUgbG9va2luZyBhdCBpbnN0ZWFkIG9mIGxvb2tpbmcgYXQgYW4gYW1iaWd1b3VzL3JhbmRvbSBhc3NvcnRtZW50IG9mIG11c2ljaWFucy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIFdhdGNoIHRoZSBwcm90b3R5cGUgYmVsb3c6XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCJkaXNjb3ZlcnktcHJvdG90eXBlLm1vdlwiXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj1cIi9hbXBsZWQtY292ZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZSBleHRyYS10b3AtcGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDY4Nn19XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5IGxvb3AgbXV0ZWQgcGxheXNJbmxpbmUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5Nb2JpbGUgbW9ja3VwPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZSBleHRyYS10b3AtcGFkZGluZy1zbVwiIHN0eWxlPXt7IG1heFdpZHRoOiA2ODYgfX0gc3JjPVwiL2Rpc2NvdmVyeS00LnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+TG9va2luZyBmb3J3YXJkXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIEkgc3RpbGwgbmVlZCB0byB0ZXN0IG1vcmUgdXNlcnMgdG8gc2VlIGhvdyB3ZWxsIHRoZSBkaXNjb3ZlcnkgcGFnZSBpcyBtZWV0aW5nIG91ciBzdWNjZXNzIG1ldHJpY3MgYW5kIHdoYXQgaW1wcm92ZW1lbnRzIGNhbiBiZSBtYWRlIGZyb20gdGhlcmUuIFRoZXJlIGlzIHN0aWxsIHJvb20gdG8gbWFrZSB0aGUgc2VhcmNoIGZpbHRlcnMgbW9yZSByb2J1c3Qgc28gdGhhdCBtb3JlIGFydGlzdHMgY2FuIGJlIGVhc2lseSBmb3VuZC4gSSB0aGluayBpdCB3b3VsZCBhbHNvIGJlIGltcG9ydGFudCB0byBoYXZlIHRoZSBhcnRpc3Qtb3duZXJzIGNvbnRyaWJ1dGUgbW9yZSB0byB0aGUgZGlzY292ZXJ5IGV4cGVyaWVuY2UgbGlrZSBtYWtpbmcgYXJ0aXN0IGN1cmF0ZWQtc2VjdGlvbnMuIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0VFNTk1QjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZnRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyQUMzQTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucXVvdGUtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvcXVvdGUtY29udGFpbmVyLnN2Z1wiKTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ3JpZC1pbWFnZS1zY2hlZHVsaW5nIHtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8tcGllY2UtaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMS42N3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2JsZW1zIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9ibGVtcyA+IC5zZWN0aW9uLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xvci1zd2F0Y2gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1ODJFQztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5ibHVlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU4MkVDO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLmdyZWVuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFDM0E5O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLnB1cnBsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0E5NjRFNztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuZ3JpZC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuc3ViLXBhbmVsLmdyYXkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5uby13cmFwIHtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3ViLXBhbmVsLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgLm1ldGEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvcnRmb2xpby1waWVjZS1pbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9ibGVtcyB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9ibGVtcyA+IC5zZWN0aW9uLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucXVvdGUtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5xdW90ZS10ZXh0OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JpZC1pbWFnZS1zY2hlZHVsaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmc6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdWItcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLnN1Yi1wYW5lbDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDsgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAuc3ViLXBhbmVsLmdyYXkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEaXNjb3Zlcnk7Il19 */\n/*@ sourceURL=/Users/jewelyhoxie/code/julie-portfolio/pages/discovery.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Discovery);

/***/ }),

/***/ 3:
/*!************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fdiscovery&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fdiscovery.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fdiscovery&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fdiscovery.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdiscovery&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Fdiscovery.js!./");


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
//# sourceMappingURL=discovery.js.map