(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/eligibility-quiz.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Feligibility-quiz.js!./":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Feligibility-quiz.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/eligibility-quiz", function() {
      var mod = __webpack_require__(/*! ./pages/eligibility-quiz.js */ "./pages/eligibility-quiz.js")
      if(true) {
        module.hot.accept(/*! ./pages/eligibility-quiz.js */ "./pages/eligibility-quiz.js", function() {
          if(!next.router.components["/eligibility-quiz"]) return
          var updatedPage = __webpack_require__(/*! ./pages/eligibility-quiz.js */ "./pages/eligibility-quiz.js")
          next.router.update("/eligibility-quiz", updatedPage)
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

/***/ "./pages/eligibility-quiz.js":
/*!***********************************!*\
  !*** ./pages/eligibility-quiz.js ***!
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
    _jsxFileName = "/Users/jewelyhoxie/code/julie-portfolio/pages/eligibility-quiz.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var EligibilityQuiz = function EligibilityQuiz() {
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
  }, "Case Study: Tech Equity Eligibility Quiz"), __jsx("div", {
    style: {
      marginTop: 60
    },
    className: "jsx-1324996013" + " " + "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/TEMOCK.png",
    className: "jsx-1324996013" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "grid one-third-two-thirds problems full-width-mobile extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "gray sub-panel meta no-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1324996013" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Client:"), __jsx("span", {
    className: "jsx-1324996013" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 58
    }
  }, " Tech Equity")), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1324996013" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-1324996013" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 56
    }
  }, " December 2021")), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1324996013" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-1324996013" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 57
    }
  }, " Figma, Google docs"))))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Project Overview"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Tech Equity has a suite of products including a quiz that renters in California can fill out to verify their eligibility for rent control under state law. This quiz is particularly useful for people who\u2019ve recently had a rent increase that they think may be illegal. My main task was to redesign the quiz to scale for local city laws and decrease quiz abandonment.")), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Problem"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-1324996013" + " " + "no-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "User testing showed that people felt that the quiz was too long or expressed frustration with not knowing how far along they were in the quiz. "), __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "People struggled to know the answers to some of the quiz questions. "), __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "The current flow did not include local laws that may impact eligibility.")))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Solution"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-1324996013" + " " + "no-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Rework the quiz flow using conditional logic for efficiency and variable questions. "), __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "Visibily show users how long the quiz is and provide resources to answer questions they may not know the answers to decrease frustration and increase quiz completion rates. "), __jsx("li", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Expand quiz to include complex local laws while maintaining visual simplicity.")))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Before"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-BeforeQ.png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Research"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "We had a research team compile a spreadsheet of everything that determines eligibility.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1324996013" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TERS.png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }))), __jsx("div", {
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
  }, "User flow"), "I extrapolated the information from the spreadsheet to make a user flow that considers both state and city eligibility as the user moves through the quiz.", __jsx("div", {
    className: "jsx-1324996013" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 30
    },
    src: "/TEUF.png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  })), "I reworked the quiz flow using conditional logic to allow for efficiency and variable questions where the subsequent question would be based on the previous answer. This solution means that people would only answer questions relevant to their situation.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), "This process helped me think through the max workflow so I could determine which components needed to be designed."), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Version 1"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TEV1 (1).png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), "The vertical progress bar shows the user how far along they are in the quiz. The numbers and check marks are clickable so you can go back to change your answer.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 24
    }
  }), "After answering each question the user will either move on to the next question or be directed to their result. For example, if they answer yes to the first question they would be directed to the \u2018ineligible\u2019 result without completing the rest of the steps. In a design critique we decided that the sudden jump in this context may be too abrupt and cause confusion.")), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Version 2"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Alternatively, I designed an abstract horizontal progress bar showing how far the user has progressed but without concrete numbers. The abstract progress bar causes less confusion for someone who may jump to the results early on in the quiz compared to Version 1.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 24
    }
  }), "Version 2 follows the Tech Equity style guidelines with some minor changes that I made in order to be ", __jsx("a", {
    href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    target: "_blank",
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 119
    }
  }, "WCAG"), " compliant.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1324996013" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TEWF (1).png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Team testing"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "I tested the two design versions with our cross functional team. We decided that Version 2 was the winner. Version 2 followed well known design patterns so I didn\u2019t think it need as much testing compared to another project our team was also working on at the time. I decided to use the rest of my time to test the more complex design project and keep this one leaner.", __jsx("br", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1324996013" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-MDMOCK.png",
    className: "jsx-1324996013" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1324996013" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1324996013" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Next Steps"), __jsx("div", {
    className: "jsx-1324996013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Engineering is currently building the quiz. I will help with the QA process along with other team members to ensure the design is implemented accurately. Then the plan is to release the quiz locally to only the Bay Area so that we can work out any issues that may arise before releasing to all of California.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1324996013",
    __self: _this
  }, "a.jsx-1324996013{-webkit-text-decoration:underline;text-decoration:underline;}.before.jsx-1324996013{color:#EE595B;}.after.jsx-1324996013{color:#2AC3A9;}.quote-text.jsx-1324996013{font-weight:normal;font-size:18px;line-height:36px;padding:36px;padding-bottom:72px;background-image:url(\"/quote-container.svg\");text-align:center;}.grid-image-scheduling.jsx-1324996013{object-fit:cover;width:100%;}.portfolio-piece-img.jsx-1324996013{max-width:721.67px;}.problems.jsx-1324996013{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.problems.jsx-1324996013>.section-subheader.jsx-1324996013{-webkit-flex:0 0 none;-ms-flex:0 0 none;flex:0 0 none;padding-right:40px;}.disclaimer.jsx-1324996013{font-family:Roboto;font-weight:300;font-size:18px;line-height:30px;margin-left:42;}.color-swatch.jsx-1324996013{display:inline-block;width:18px;height:18px;background-color:#3582EC;margin-right:8px;}.color-swatch.blue.jsx-1324996013{background-color:#3582EC;}.color-swatch.green.jsx-1324996013{background-color:#2AC3A9;}.color-swatch.purple.jsx-1324996013{background-color:#A964E7;}.color-swatch-text.jsx-1324996013{font-size:16px;line-height:16px;margin-right:20px;}.color-swatch-container.jsx-1324996013{padding-top:16px;padding-bottom:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.grid-image.jsx-1324996013{max-width:100%;width:100%;}.sub-panel.gray.jsx-1324996013{padding:20px;}.no-wrap.jsx-1324996013{white-space:nowrap;}@media only screen and (min-width:768px){.disclaimer.jsx-1324996013{margin-left:42px;}.sub-panel-subheader.jsx-1324996013{margin-bottom:16px;font-size:16px;}}@media only screen and (max-width:767px){.meta.jsx-1324996013{width:100%;}.portfolio-piece-img.jsx-1324996013{margin-bottom:50px;width:300px;}.problems.jsx-1324996013{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.problems.jsx-1324996013>.section-subheader.jsx-1324996013{padding-right:0x;}.quote-text.jsx-1324996013{font-size:12px;line-height:26px;padding:24px 12px;padding-bottom:50px;}.quote-text.jsx-1324996013:first-of-type{margin-bottom:18px;}.grid-image-scheduling.jsx-1324996013{margin-top:30px;}.grid-image-scheduling.jsx-1324996013:first-of-type{margin-top:0px;}.sub-panel.jsx-1324996013{white-space:normal;}.sub-panel.jsx-1324996013:first-of-type{margin-bottom:18px;}.sub-panel.gray.jsx-1324996013{padding:8px;padding-left:16px;padding-right:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9jb2RlL2p1bGllLXBvcnRmb2xpby9wYWdlcy9lbGlnaWJpbGl0eS1xdWl6LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIb0IsQUFHMkMsQUFHWixBQUdBLEFBR0ssQUFTRixBQUlFLEFBS0EsQUFHTCxBQUlLLEFBT0UsQUFPSSxBQUdBLEFBR0EsQUFHVixBQUtFLEFBTUYsQUFJRixBQUdNLEFBSUUsQUFHRSxBQU1SLEFBR1EsQUFJRyxBQUdMLEFBR0YsQUFNSSxBQUdILEFBR0QsQUFHSSxBQUdBLEFBR1AsV0FqQ2hCLENBa0NzQixDQWxEekIsQ0FyRUQsQUFHQSxDQW1EcUIsQUFXTixBQWlDVSxBQVlwQixDQUhBLENBNUZVLEFBNENTLEFBaUJwQixBQW1CQSxFQXpGZSxBQWFuQixBQVlvQixBQXlDbkIsQUFPc0IsQUFTSCxBQWdCaEIsQUFTQSxBQUdDLEVBOUVVLElBT2QsQUFHQSxBQUdBLENBZUEsRUFsREQsRUF3RzJCLENBL0J2QixDQWxEWSxBQWdCTSxBQTRDSSxFQTVGTCxBQXlFakIsQ0FoRGUsRUE0QkksT0FwQk0sS0FpRnhCLENBeEZnQixBQXVCcEIsQUE0QzJCLENBNUZYLEdBbUJNLE1BOUJ2QixJQVl3QixHQXlCTCxFQU9FLENBNERqQixHQXpFSixLQWdFSSxJQXpESixFQXpCaUQsRUFnQ2hELE9BbEJELG9DQWJzQixDQWtETCxpQkFqRGpCLHlEQWtEQyIsImZpbGUiOiIvVXNlcnMvamV3ZWx5aG94aWUvY29kZS9qdWxpZS1wb3J0Zm9saW8vcGFnZXMvZWxpZ2liaWxpdHktcXVpei5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVsaWdpYmlsaXR5UXVpeiA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIEhlcm8gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPkNhc2UgU3R1ZHk6IFRlY2ggRXF1aXR5IEVsaWdpYmlsaXR5IFF1aXo8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiIHN0eWxlPXt7IG1hcmdpblRvcDogNjAgfX0+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3J0Zm9saW8tcGllY2UtaW1nXCIgc3JjPVwiL1RFTU9DSy5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogTWV0YSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBvbmUtdGhpcmQtdHdvLXRoaXJkcyBwcm9ibGVtcyBmdWxsLXdpZHRoLW1vYmlsZSBleHRyYS10b3AtcGFkZGluZyBuby10b3AtcGFkZGluZy1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXkgc3ViLXBhbmVsIG1ldGEgbm8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Q2xpZW50Ojwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IFRlY2ggRXF1aXR5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkRhdGU6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gRGVjZW1iZXIgMjAyMTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5Ub29sczo8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBGaWdtYSwgR29vZ2xlIGRvY3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPlByb2plY3QgT3ZlcnZpZXc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgVGVjaCBFcXVpdHkgaGFzIGEgc3VpdGUgb2YgcHJvZHVjdHMgaW5jbHVkaW5nIGEgcXVpeiB0aGF0IHJlbnRlcnMgaW4gQ2FsaWZvcm5pYSBjYW4gZmlsbCBvdXQgdG8gdmVyaWZ5IHRoZWlyIGVsaWdpYmlsaXR5IGZvciByZW50IGNvbnRyb2wgdW5kZXIgc3RhdGUgbGF3LiBUaGlzIHF1aXogaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3IgcGVvcGxlIHdob+KAmXZlIHJlY2VudGx5IGhhZCBhIHJlbnQgaW5jcmVhc2UgdGhhdCB0aGV5IHRoaW5rIG1heSBiZSBpbGxlZ2FsLiBNeSBtYWluIHRhc2sgd2FzIHRvIHJlZGVzaWduIHRoZSBxdWl6IHRvIHNjYWxlIGZvciBsb2NhbCBjaXR5IGxhd3MgYW5kIGRlY3JlYXNlIHF1aXogYWJhbmRvbm1lbnQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+UHJvYmxlbTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm8tYm90dG9tLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVzZXIgdGVzdGluZyBzaG93ZWQgdGhhdCBwZW9wbGUgZmVsdCB0aGF0IHRoZSBxdWl6IHdhcyB0b28gbG9uZyBvciBleHByZXNzZWQgZnJ1c3RyYXRpb24gd2l0aCBub3Qga25vd2luZyBob3cgZmFyIGFsb25nIHRoZXkgd2VyZSBpbiB0aGUgcXVpei4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlBlb3BsZSBzdHJ1Z2dsZWQgdG8ga25vdyB0aGUgYW5zd2VycyB0byBzb21lIG9mIHRoZSBxdWl6IHF1ZXN0aW9ucy4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSBjdXJyZW50IGZsb3cgZGlkIG5vdCBpbmNsdWRlIGxvY2FsIGxhd3MgdGhhdCBtYXkgaW1wYWN0IGVsaWdpYmlsaXR5LjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5Tb2x1dGlvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm8tYm90dG9tLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlJld29yayB0aGUgcXVpeiBmbG93IHVzaW5nIGNvbmRpdGlvbmFsIGxvZ2ljIGZvciBlZmZpY2llbmN5IGFuZCB2YXJpYWJsZSBxdWVzdGlvbnMuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5WaXNpYmlseSBzaG93IHVzZXJzIGhvdyBsb25nIHRoZSBxdWl6IGlzIGFuZCBwcm92aWRlIHJlc291cmNlcyB0byBhbnN3ZXIgcXVlc3Rpb25zIHRoZXkgbWF5IG5vdCBrbm93IHRoZSBhbnN3ZXJzIHRvIGRlY3JlYXNlIGZydXN0cmF0aW9uIGFuZCBpbmNyZWFzZSBxdWl6IGNvbXBsZXRpb24gcmF0ZXMuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5FeHBhbmQgcXVpeiB0byBpbmNsdWRlIGNvbXBsZXggbG9jYWwgbGF3cyB3aGlsZSBtYWludGFpbmluZyB2aXN1YWwgc2ltcGxpY2l0eS48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+QmVmb3JlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxLCBtYXJnaW5Cb3R0b206IDE2IH19IHNyYz1cIi9URS1CZWZvcmVRLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+UmVzZWFyY2hcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBXZSBoYWQgYSByZXNlYXJjaCB0ZWFtIGNvbXBpbGUgYSBzcHJlYWRzaGVldCBvZiBldmVyeXRoaW5nIHRoYXQgZGV0ZXJtaW5lcyBlbGlnaWJpbGl0eS5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxLCBtYXJnaW5Cb3R0b206IDE2IH19IHNyYz1cIi9URVJTLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+VXNlciBmbG93XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBJIGV4dHJhcG9sYXRlZCB0aGUgaW5mb3JtYXRpb24gZnJvbSB0aGUgc3ByZWFkc2hlZXQgdG8gbWFrZSBhIHVzZXIgZmxvdyB0aGF0IGNvbnNpZGVycyBib3RoIHN0YXRlIGFuZCBjaXR5IGVsaWdpYmlsaXR5IGFzIHRoZSB1c2VyIG1vdmVzIHRocm91Z2ggdGhlIHF1aXouXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxLCBtYXJnaW5Cb3R0b206IDMwIH19IHNyYz1cIi9URVVGLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgSSByZXdvcmtlZCB0aGUgcXVpeiBmbG93IHVzaW5nIGNvbmRpdGlvbmFsIGxvZ2ljIHRvIGFsbG93IGZvciBlZmZpY2llbmN5IGFuZCB2YXJpYWJsZSBxdWVzdGlvbnMgd2hlcmUgdGhlIHN1YnNlcXVlbnQgcXVlc3Rpb24gd291bGQgYmUgYmFzZWQgb24gdGhlIHByZXZpb3VzIGFuc3dlci4gVGhpcyBzb2x1dGlvbiBtZWFucyB0aGF0IHBlb3BsZSB3b3VsZCBvbmx5IGFuc3dlciBxdWVzdGlvbnMgcmVsZXZhbnQgdG8gdGhlaXIgc2l0dWF0aW9uLiBcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICBUaGlzIHByb2Nlc3MgaGVscGVkIG1lIHRoaW5rIHRocm91Z2ggdGhlIG1heCB3b3JrZmxvdyBzbyBJIGNvdWxkIGRldGVybWluZSB3aGljaCBjb21wb25lbnRzIG5lZWRlZCB0byBiZSBkZXNpZ25lZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+VmVyc2lvbiAxPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogMTA0MSwgbWFyZ2luQm90dG9tOiAxNiB9fSBzcmM9XCIvVEVWMSAoMSkucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICBUaGUgdmVydGljYWwgcHJvZ3Jlc3MgYmFyIHNob3dzIHRoZSB1c2VyIGhvdyBmYXIgYWxvbmcgdGhleSBhcmUgaW4gdGhlIHF1aXouIFRoZSBudW1iZXJzIGFuZCBjaGVjayBtYXJrcyBhcmUgY2xpY2thYmxlIHNvIHlvdSBjYW4gZ28gYmFjayB0byBjaGFuZ2UgeW91ciBhbnN3ZXIuXG4gICAgICAgICAgICAgICAgPCBiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIEFmdGVyIGFuc3dlcmluZyBlYWNoIHF1ZXN0aW9uIHRoZSB1c2VyIHdpbGwgZWl0aGVyIG1vdmUgb24gdG8gdGhlIG5leHQgcXVlc3Rpb24gb3IgYmUgZGlyZWN0ZWQgdG8gdGhlaXIgcmVzdWx0LiBGb3IgZXhhbXBsZSwgaWYgdGhleSBhbnN3ZXIgeWVzIHRvIHRoZSBmaXJzdCBxdWVzdGlvbiB0aGV5IHdvdWxkIGJlIGRpcmVjdGVkIHRvIHRoZSDigJhpbmVsaWdpYmxl4oCZIHJlc3VsdCB3aXRob3V0IGNvbXBsZXRpbmcgdGhlIHJlc3Qgb2YgdGhlIHN0ZXBzLiBJbiBhIGRlc2lnbiBjcml0aXF1ZSB3ZSBkZWNpZGVkIHRoYXQgdGhlIHN1ZGRlbiBqdW1wIGluIHRoaXMgY29udGV4dCBtYXkgYmUgdG9vIGFicnVwdCBhbmQgY2F1c2UgY29uZnVzaW9uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPlZlcnNpb24gMjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBBbHRlcm5hdGl2ZWx5LCBJIGRlc2lnbmVkIGFuIGFic3RyYWN0IGhvcml6b250YWwgcHJvZ3Jlc3MgYmFyIHNob3dpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgcHJvZ3Jlc3NlZCBidXQgd2l0aG91dCBjb25jcmV0ZSBudW1iZXJzLiBUaGUgYWJzdHJhY3QgcHJvZ3Jlc3MgYmFyIGNhdXNlcyBsZXNzIGNvbmZ1c2lvbiBmb3Igc29tZW9uZSB3aG8gbWF5IGp1bXAgdG8gdGhlIHJlc3VsdHMgZWFybHkgb24gaW4gdGhlIHF1aXogY29tcGFyZWQgdG8gVmVyc2lvbiAxLlxuICAgICAgICAgICAgICAgIDwgYnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICBWZXJzaW9uIDIgZm9sbG93cyB0aGUgVGVjaCBFcXVpdHkgc3R5bGUgZ3VpZGVsaW5lcyB3aXRoIHNvbWUgbWlub3IgY2hhbmdlcyB0aGF0IEkgbWFkZSBpbiBvcmRlciB0byBiZSA8YSBocmVmPVwiaHR0cHM6Ly93d3cudzMub3JnL1dBSS9zdGFuZGFyZHMtZ3VpZGVsaW5lcy93Y2FnL1wiIHRhcmdldD1cIl9ibGFua1wiPldDQUc8L2E+IGNvbXBsaWFudC5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFV0YgKDEpLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+VGVhbSB0ZXN0aW5nPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEkgdGVzdGVkIHRoZSB0d28gZGVzaWduIHZlcnNpb25zIHdpdGggb3VyIGNyb3NzIGZ1bmN0aW9uYWwgdGVhbS4gV2UgZGVjaWRlZCB0aGF0IFZlcnNpb24gMiB3YXMgdGhlIHdpbm5lci4gVmVyc2lvbiAyIGZvbGxvd2VkIHdlbGwga25vd24gZGVzaWduIHBhdHRlcm5zIHNvIEkgZGlkbuKAmXQgdGhpbmsgaXQgbmVlZCBhcyBtdWNoIHRlc3RpbmcgY29tcGFyZWQgdG8gYW5vdGhlciBwcm9qZWN0IG91ciB0ZWFtIHdhcyBhbHNvIHdvcmtpbmcgb24gYXQgdGhlIHRpbWUuIEkgZGVjaWRlZCB0byB1c2UgdGhlIHJlc3Qgb2YgbXkgdGltZSB0byB0ZXN0IHRoZSBtb3JlIGNvbXBsZXggZGVzaWduIHByb2plY3QgYW5kIGtlZXAgdGhpcyBvbmUgbGVhbmVyLlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmdcIi8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFLU1ETU9DSy5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPk5leHQgU3RlcHM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRW5naW5lZXJpbmcgaXMgY3VycmVudGx5IGJ1aWxkaW5nIHRoZSBxdWl6LiBJIHdpbGwgaGVscCB3aXRoIHRoZSBRQSBwcm9jZXNzIGFsb25nIHdpdGggb3RoZXIgdGVhbSBtZW1iZXJzIHRvIGVuc3VyZSB0aGUgZGVzaWduIGlzIGltcGxlbWVudGVkIGFjY3VyYXRlbHkuIFRoZW4gdGhlIHBsYW4gaXMgdG8gcmVsZWFzZSB0aGUgcXVpeiBsb2NhbGx5IHRvIG9ubHkgdGhlIEJheSBBcmVhIHNvIHRoYXQgd2UgY2FuIHdvcmsgb3V0IGFueSBpc3N1ZXMgdGhhdCBtYXkgYXJpc2UgYmVmb3JlIHJlbGVhc2luZyB0byBhbGwgb2YgQ2FsaWZvcm5pYS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0VFNTk1QjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZnRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyQUMzQTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucXVvdGUtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvcXVvdGUtY29udGFpbmVyLnN2Z1wiKTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ3JpZC1pbWFnZS1zY2hlZHVsaW5nIHtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8tcGllY2UtaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMS42N3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2JsZW1zIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9ibGVtcyA+IC5zZWN0aW9uLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xvci1zd2F0Y2gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1ODJFQztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5ibHVlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU4MkVDO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLmdyZWVuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFDM0E5O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLnB1cnBsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0E5NjRFNztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuY29sb3Itc3dhdGNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuZ3JpZC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuc3ViLXBhbmVsLmdyYXkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5uby13cmFwIHtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3ViLXBhbmVsLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgLm1ldGEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvcnRmb2xpby1waWVjZS1pbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9ibGVtcyB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9ibGVtcyA+IC5zZWN0aW9uLXN1YmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucXVvdGUtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5xdW90ZS10ZXh0OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JpZC1pbWFnZS1zY2hlZHVsaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmc6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdWItcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLnN1Yi1wYW5lbDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDsgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAuc3ViLXBhbmVsLmdyYXkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbGlnaWJpbGl0eVF1aXo7Il19 */\n/*@ sourceURL=/Users/jewelyhoxie/code/julie-portfolio/pages/eligibility-quiz.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EligibilityQuiz);

/***/ }),

/***/ 5:
/*!**************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Feligibility-quiz.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Feligibility-quiz.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fcode%2Fjulie-portfolio%2Fpages%2Feligibility-quiz.js!./");


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
//# sourceMappingURL=eligibility-quiz.js.map