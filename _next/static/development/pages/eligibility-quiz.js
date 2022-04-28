(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/eligibility-quiz.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Feligibility-quiz.js!./":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Feligibility-quiz.js ***!
  \****************************************************************************************************************************************************************************************************/
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
    _jsxFileName = "/Users/jewelyhoxie/jhoxie.github.io/pages/eligibility-quiz.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var EligibilityQuiz = function EligibilityQuiz() {
  return __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-header",
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
    className: "jsx-3654820683" + " " + "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/TEEQHero.png",
    className: "jsx-3654820683" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "grid one-third-two-thirds problems full-width-mobile extra-top-padding no-top-padding-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "gray sub-panel meta no-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-3654820683" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Client:"), __jsx("span", {
    className: "jsx-3654820683" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 58
    }
  }, " Tech Equity")), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-3654820683" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "Date:"), __jsx("span", {
    className: "jsx-3654820683" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 56
    }
  }, " December 2021")), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-3654820683" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "Tools:"), __jsx("span", {
    className: "jsx-3654820683" + " " + "thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 57
    }
  }, " Figma, Google docs"))))), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Project Overview"), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Tech Equity has a suite of products including a quiz that renters in California can fill out to verify their eligibility for rent control under state law. This quiz is particularly useful for people who\u2019ve recently had a rent increase that they think may be illegal. My main task was to redesign the quiz to scale for local city laws and decrease quiz abandonment.")), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Problem"), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-3654820683" + " " + "no-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "User testing showed that people felt that the quiz was too long or expressed frustration with not knowing how far along they were in the quiz. "), __jsx("li", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "People struggled to know the answers to some of the quiz questions. "), __jsx("li", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "The current flow did not include local laws that may impact eligibility.")))), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Solution"), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-3654820683" + " " + "no-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Rework the quiz flow using conditional logic for efficiency and variable questions. "), __jsx("li", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "Visibily show users how long the quiz is and provide resources to answer questions they may not know the answers to decrease frustration and increase quiz completion rates. "), __jsx("li", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Expand quiz to include complex local laws while maintaining visual simplicity.")))), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Before"), __jsx("div", {
    className: "jsx-3654820683",
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
    className: "jsx-3654820683" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Research"), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "We had a research team compile a spreadsheet of everything that determines eligibility.", __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3654820683" + " " + "extra-top-padding",
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
    className: "jsx-3654820683" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "User flow"), "I extrapolated the information from the spreadsheet to make a user flow that considers both state and city eligibility as the user moves through the quiz.", __jsx("div", {
    className: "jsx-3654820683" + " " + "extra-top-padding",
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
    className: "jsx-3654820683" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  })), "I reworked the quiz flow using conditional logic to allow for efficiency and variable questions where the subsequent question would be based on the previous answer. This solution means that people would only answer questions relevant to their situation.", __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), "This process helped me think through the max workflow so I could determine which components needed to be designed."), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Version 1"), __jsx("div", {
    className: "jsx-3654820683",
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
    className: "jsx-3654820683" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), "The vertical progress bar shows the user how far along they are in the quiz. The numbers and check marks are clickable so you can go back to change your answer.", __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 24
    }
  }), "After answering each question the user will either move on to the next question or be directed to their result. For example, if they answer yes to the first question they would be directed to the \u2018ineligible\u2019 result without completing the rest of the steps. In a design critique we decided that the sudden jump in this context may be too abrupt and cause confusion.")), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Version 2"), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Alternatively, I designed an abstract horizontal progress bar showing how far the user has progressed but without concrete numbers. The abstract progress bar causes less confusion for someone who may jump to the results early on in the quiz compared to Version 1.", __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 24
    }
  }), "Version 2 follows the Tech Equity style guidelines with some minor changes that I made in order to be ", __jsx("a", {
    href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    target: "_blank",
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 119
    }
  }, "WCAG"), " compliant.", __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3654820683" + " " + "extra-top-padding",
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
    className: "jsx-3654820683" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Team testing"), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "I tested the two design versions with our cross functional team. We decided that Version 2 was the winner. Version 2 followed well known design patterns so I didn\u2019t think it need as much testing compared to another project our team was also working on at the time. I decided to use the rest of my time to test the more complex design project and keep this one leaner.", __jsx("br", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3654820683" + " " + "extra-top-padding",
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
    className: "jsx-3654820683" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-3654820683" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3654820683" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Next Steps"), __jsx("div", {
    className: "jsx-3654820683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Engineering is currently building the quiz. I will help with the QA process along with other team members to ensure the design is implemented accurately. Then the plan is to release the quiz locally to only the Bay Area so that we can work out any issues that may arise before releasing to all of California.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3654820683",
    __self: _this
  }, ".casestudy-header.jsx-3654820683{padding-left:0;padding-right:0;}a.jsx-3654820683{-webkit-text-decoration:underline;text-decoration:underline;}.before.jsx-3654820683{color:#EE595B;}.after.jsx-3654820683{color:#2AC3A9;}.quote-text.jsx-3654820683{font-weight:normal;font-size:18px;line-height:36px;padding:36px;padding-bottom:72px;background-image:url(\"/quote-container.svg\");text-align:center;}.grid-image-scheduling.jsx-3654820683{object-fit:cover;width:100%;}.portfolio-piece-img.jsx-3654820683{max-width:100%;}.problems.jsx-3654820683{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.problems.jsx-3654820683>.section-subheader.jsx-3654820683{-webkit-flex:0 0 none;-ms-flex:0 0 none;flex:0 0 none;padding-right:40px;}.disclaimer.jsx-3654820683{font-family:Roboto;font-weight:300;font-size:18px;line-height:30px;margin-left:42;}.color-swatch.jsx-3654820683{display:inline-block;width:18px;height:18px;background-color:#3582EC;margin-right:8px;}.color-swatch.blue.jsx-3654820683{background-color:#3582EC;}.color-swatch.green.jsx-3654820683{background-color:#2AC3A9;}.color-swatch.purple.jsx-3654820683{background-color:#A964E7;}.color-swatch-text.jsx-3654820683{font-size:16px;line-height:16px;margin-right:20px;}.color-swatch-container.jsx-3654820683{padding-top:16px;padding-bottom:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.grid-image.jsx-3654820683{max-width:100%;width:100%;}.sub-panel.gray.jsx-3654820683{padding:20px;}.no-wrap.jsx-3654820683{white-space:nowrap;}@media only screen and (min-width:768px){.disclaimer.jsx-3654820683{margin-left:42px;}.sub-panel-subheader.jsx-3654820683{margin-bottom:16px;font-size:16px;}}@media only screen and (max-width:767px){.meta.jsx-3654820683{width:100%;}.portfolio-piece-img.jsx-3654820683{margin-bottom:50px;width:1279px;}.problems.jsx-3654820683{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.problems.jsx-3654820683>.section-subheader.jsx-3654820683{padding-right:0x;}.quote-text.jsx-3654820683{font-size:12px;line-height:26px;padding:24px 12px;padding-bottom:50px;}.quote-text.jsx-3654820683:first-of-type{margin-bottom:18px;}.grid-image-scheduling.jsx-3654820683{margin-top:30px;}.grid-image-scheduling.jsx-3654820683:first-of-type{margin-top:0px;}.sub-panel.jsx-3654820683{white-space:normal;}.sub-panel.jsx-3654820683:first-of-type{margin-bottom:18px;}.sub-panel.gray.jsx-3654820683{padding:8px;padding-left:16px;padding-right:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9qaG94aWUuZ2l0aHViLmlvL3BhZ2VzL2VsaWdpYmlsaXR5LXF1aXouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hvQixBQUdnQyxBQUlXLEFBR1osQUFHQSxBQUdLLEFBU0YsQUFJRixBQUtJLEFBR0wsQUFJSyxBQU9FLEFBT0ksQUFHQSxBQUdBLEFBR1YsQUFLRSxBQU1GLEFBSUYsQUFHTSxBQUlFLEFBR0UsQUFNUixBQUdRLEFBSUcsQUFHTCxBQUdGLEFBTUksQUFHSCxBQUdELEFBR0ksQUFHQSxBQUdQLFdBakNoQixDQWtDc0IsQ0FsRHpCLENBckVELEFBR0EsQ0FWb0IsQUEwQnBCLEFBbUNxQixBQVdOLEFBaUNVLEFBWXBCLENBSEEsQ0E1RlUsQUE0Q1MsQUFpQnBCLEFBbUJBLEVBekZlLEFBeUJDLEFBeUNuQixBQU9zQixBQVNGLEFBZ0JqQixBQVNBLEFBR0MsRUE5RVUsSUFPZCxBQUdBLEFBR0EsQ0FlQSxFQWxERCxFQXdHMkIsQ0E5SDNCLENBNkNnQixBQWdCTSxBQWtDbEIsQUFVc0IsRUE1RkwsQUF5RWpCLENBaERlLEVBNEJJLE9BcEJNLEtBaUZ4QixDQXhGZ0IsQUF1QnBCLEFBNEMyQixDQTVGWCxHQW1CTSxNQTlCdkIsSUFZd0IsR0F5QkwsRUFPRSxDQTREakIsR0F6RUosS0FnRUksSUF6REosRUF6QmlELEVBZ0NoRCxPQWxCRCxvQ0Fic0IsQ0FrREwsaUJBakRqQix5REFrREMiLCJmaWxlIjoiL1VzZXJzL2pld2VseWhveGllL2pob3hpZS5naXRodWIuaW8vcGFnZXMvZWxpZ2liaWxpdHktcXVpei5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVsaWdpYmlsaXR5UXVpeiA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIEhlcm8gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPkNhc2UgU3R1ZHk6IFRlY2ggRXF1aXR5IEVsaWdpYmlsaXR5IFF1aXo8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiIHN0eWxlPXt7IG1hcmdpblRvcDogNjAgfX0+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3J0Zm9saW8tcGllY2UtaW1nXCIgc3JjPVwiL1RFRVFIZXJvLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBNZXRhICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG9uZS10aGlyZC10d28tdGhpcmRzIHByb2JsZW1zIGZ1bGwtd2lkdGgtbW9iaWxlIGV4dHJhLXRvcC1wYWRkaW5nIG5vLXRvcC1wYWRkaW5nLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheSBzdWItcGFuZWwgbWV0YSBuby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5DbGllbnQ6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRoaW5cIj4gVGVjaCBFcXVpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+RGF0ZTo8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGhpblwiPiBEZWNlbWJlciAyMDIxPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlRvb2xzOjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0aGluXCI+IEZpZ21hLCBHb29nbGUgZG9jczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+UHJvamVjdCBPdmVydmlldzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBUZWNoIEVxdWl0eSBoYXMgYSBzdWl0ZSBvZiBwcm9kdWN0cyBpbmNsdWRpbmcgYSBxdWl6IHRoYXQgcmVudGVycyBpbiBDYWxpZm9ybmlhIGNhbiBmaWxsIG91dCB0byB2ZXJpZnkgdGhlaXIgZWxpZ2liaWxpdHkgZm9yIHJlbnQgY29udHJvbCB1bmRlciBzdGF0ZSBsYXcuIFRoaXMgcXVpeiBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBwZW9wbGUgd2hv4oCZdmUgcmVjZW50bHkgaGFkIGEgcmVudCBpbmNyZWFzZSB0aGF0IHRoZXkgdGhpbmsgbWF5IGJlIGlsbGVnYWwuIE15IG1haW4gdGFzayB3YXMgdG8gcmVkZXNpZ24gdGhlIHF1aXogdG8gc2NhbGUgZm9yIGxvY2FsIGNpdHkgbGF3cyBhbmQgZGVjcmVhc2UgcXVpeiBhYmFuZG9ubWVudC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5Qcm9ibGVtPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuby1ib3R0b20tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VXNlciB0ZXN0aW5nIHNob3dlZCB0aGF0IHBlb3BsZSBmZWx0IHRoYXQgdGhlIHF1aXogd2FzIHRvbyBsb25nIG9yIGV4cHJlc3NlZCBmcnVzdHJhdGlvbiB3aXRoIG5vdCBrbm93aW5nIGhvdyBmYXIgYWxvbmcgdGhleSB3ZXJlIGluIHRoZSBxdWl6LiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UGVvcGxlIHN0cnVnZ2xlZCB0byBrbm93IHRoZSBhbnN3ZXJzIHRvIHNvbWUgb2YgdGhlIHF1aXogcXVlc3Rpb25zLiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VGhlIGN1cnJlbnQgZmxvdyBkaWQgbm90IGluY2x1ZGUgbG9jYWwgbGF3cyB0aGF0IG1heSBpbXBhY3QgZWxpZ2liaWxpdHkuPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZy1zbVwiPlNvbHV0aW9uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuby1ib3R0b20tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UmV3b3JrIHRoZSBxdWl6IGZsb3cgdXNpbmcgY29uZGl0aW9uYWwgbG9naWMgZm9yIGVmZmljaWVuY3kgYW5kIHZhcmlhYmxlIHF1ZXN0aW9ucy4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlZpc2liaWx5IHNob3cgdXNlcnMgaG93IGxvbmcgdGhlIHF1aXogaXMgYW5kIHByb3ZpZGUgcmVzb3VyY2VzIHRvIGFuc3dlciBxdWVzdGlvbnMgdGhleSBtYXkgbm90IGtub3cgdGhlIGFuc3dlcnMgdG8gZGVjcmVhc2UgZnJ1c3RyYXRpb24gYW5kIGluY3JlYXNlIHF1aXogY29tcGxldGlvbiByYXRlcy4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkV4cGFuZCBxdWl6IHRvIGluY2x1ZGUgY29tcGxleCBsb2NhbCBsYXdzIHdoaWxlIG1haW50YWluaW5nIHZpc3VhbCBzaW1wbGljaXR5LjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5CZWZvcmU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFLUJlZm9yZVEucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5SZXNlYXJjaFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFdlIGhhZCBhIHJlc2VhcmNoIHRlYW0gY29tcGlsZSBhIHNwcmVhZHNoZWV0IG9mIGV2ZXJ5dGhpbmcgdGhhdCBkZXRlcm1pbmVzIGVsaWdpYmlsaXR5LlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFUlMucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5Vc2VyIGZsb3dcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIEkgZXh0cmFwb2xhdGVkIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzcHJlYWRzaGVldCB0byBtYWtlIGEgdXNlciBmbG93IHRoYXQgY29uc2lkZXJzIGJvdGggc3RhdGUgYW5kIGNpdHkgZWxpZ2liaWxpdHkgYXMgdGhlIHVzZXIgbW92ZXMgdGhyb3VnaCB0aGUgcXVpei5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMzAgfX0gc3JjPVwiL1RFVUYucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBJIHJld29ya2VkIHRoZSBxdWl6IGZsb3cgdXNpbmcgY29uZGl0aW9uYWwgbG9naWMgdG8gYWxsb3cgZm9yIGVmZmljaWVuY3kgYW5kIHZhcmlhYmxlIHF1ZXN0aW9ucyB3aGVyZSB0aGUgc3Vic2VxdWVudCBxdWVzdGlvbiB3b3VsZCBiZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgYW5zd2VyLiBUaGlzIHNvbHV0aW9uIG1lYW5zIHRoYXQgcGVvcGxlIHdvdWxkIG9ubHkgYW5zd2VyIHF1ZXN0aW9ucyByZWxldmFudCB0byB0aGVpciBzaXR1YXRpb24uIFxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIFRoaXMgcHJvY2VzcyBoZWxwZWQgbWUgdGhpbmsgdGhyb3VnaCB0aGUgbWF4IHdvcmtmbG93IHNvIEkgY291bGQgZGV0ZXJtaW5lIHdoaWNoIGNvbXBvbmVudHMgbmVlZGVkIHRvIGJlIGRlc2lnbmVkLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5WZXJzaW9uIDE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxLCBtYXJnaW5Cb3R0b206IDE2IH19IHNyYz1cIi9URVYxICgxKS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIFRoZSB2ZXJ0aWNhbCBwcm9ncmVzcyBiYXIgc2hvd3MgdGhlIHVzZXIgaG93IGZhciBhbG9uZyB0aGV5IGFyZSBpbiB0aGUgcXVpei4gVGhlIG51bWJlcnMgYW5kIGNoZWNrIG1hcmtzIGFyZSBjbGlja2FibGUgc28geW91IGNhbiBnbyBiYWNrIHRvIGNoYW5nZSB5b3VyIGFuc3dlci5cbiAgICAgICAgICAgICAgICA8IGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgQWZ0ZXIgYW5zd2VyaW5nIGVhY2ggcXVlc3Rpb24gdGhlIHVzZXIgd2lsbCBlaXRoZXIgbW92ZSBvbiB0byB0aGUgbmV4dCBxdWVzdGlvbiBvciBiZSBkaXJlY3RlZCB0byB0aGVpciByZXN1bHQuIEZvciBleGFtcGxlLCBpZiB0aGV5IGFuc3dlciB5ZXMgdG8gdGhlIGZpcnN0IHF1ZXN0aW9uIHRoZXkgd291bGQgYmUgZGlyZWN0ZWQgdG8gdGhlIOKAmGluZWxpZ2libGXigJkgcmVzdWx0IHdpdGhvdXQgY29tcGxldGluZyB0aGUgcmVzdCBvZiB0aGUgc3RlcHMuIEluIGEgZGVzaWduIGNyaXRpcXVlIHdlIGRlY2lkZWQgdGhhdCB0aGUgc3VkZGVuIGp1bXAgaW4gdGhpcyBjb250ZXh0IG1heSBiZSB0b28gYWJydXB0IGFuZCBjYXVzZSBjb25mdXNpb24uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+VmVyc2lvbiAyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEFsdGVybmF0aXZlbHksIEkgZGVzaWduZWQgYW4gYWJzdHJhY3QgaG9yaXpvbnRhbCBwcm9ncmVzcyBiYXIgc2hvd2luZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBwcm9ncmVzc2VkIGJ1dCB3aXRob3V0IGNvbmNyZXRlIG51bWJlcnMuIFRoZSBhYnN0cmFjdCBwcm9ncmVzcyBiYXIgY2F1c2VzIGxlc3MgY29uZnVzaW9uIGZvciBzb21lb25lIHdobyBtYXkganVtcCB0byB0aGUgcmVzdWx0cyBlYXJseSBvbiBpbiB0aGUgcXVpeiBjb21wYXJlZCB0byBWZXJzaW9uIDEuXG4gICAgICAgICAgICAgICAgPCBiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIFZlcnNpb24gMiBmb2xsb3dzIHRoZSBUZWNoIEVxdWl0eSBzdHlsZSBndWlkZWxpbmVzIHdpdGggc29tZSBtaW5vciBjaGFuZ2VzIHRoYXQgSSBtYWRlIGluIG9yZGVyIHRvIGJlIDxhIGhyZWY9XCJodHRwczovL3d3dy53My5vcmcvV0FJL3N0YW5kYXJkcy1ndWlkZWxpbmVzL3djYWcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V0NBRzwvYT4gY29tcGxpYW50LlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogMTA0MSwgbWFyZ2luQm90dG9tOiAxNiB9fSBzcmM9XCIvVEVXRiAoMSkucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5UZWFtIHRlc3Rpbmc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgSSB0ZXN0ZWQgdGhlIHR3byBkZXNpZ24gdmVyc2lvbnMgd2l0aCBvdXIgY3Jvc3MgZnVuY3Rpb25hbCB0ZWFtLiBXZSBkZWNpZGVkIHRoYXQgVmVyc2lvbiAyIHdhcyB0aGUgd2lubmVyLiBWZXJzaW9uIDIgZm9sbG93ZWQgd2VsbCBrbm93biBkZXNpZ24gcGF0dGVybnMgc28gSSBkaWRu4oCZdCB0aGluayBpdCBuZWVkIGFzIG11Y2ggdGVzdGluZyBjb21wYXJlZCB0byBhbm90aGVyIHByb2plY3Qgb3VyIHRlYW0gd2FzIGFsc28gd29ya2luZyBvbiBhdCB0aGUgdGltZS4gSSBkZWNpZGVkIHRvIHVzZSB0aGUgcmVzdCBvZiBteSB0aW1lIHRvIHRlc3QgdGhlIG1vcmUgY29tcGxleCBkZXNpZ24gcHJvamVjdCBhbmQga2VlcCB0aGlzIG9uZSBsZWFuZXIuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogMTA0MSwgbWFyZ2luQm90dG9tOiAxNiB9fSBzcmM9XCIvVEUtTURNT0NLLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+TmV4dCBTdGVwczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBFbmdpbmVlcmluZyBpcyBjdXJyZW50bHkgYnVpbGRpbmcgdGhlIHF1aXouIEkgd2lsbCBoZWxwIHdpdGggdGhlIFFBIHByb2Nlc3MgYWxvbmcgd2l0aCBvdGhlciB0ZWFtIG1lbWJlcnMgdG8gZW5zdXJlIHRoZSBkZXNpZ24gaXMgaW1wbGVtZW50ZWQgYWNjdXJhdGVseS4gVGhlbiB0aGUgcGxhbiBpcyB0byByZWxlYXNlIHRoZSBxdWl6IGxvY2FsbHkgdG8gb25seSB0aGUgQmF5IEFyZWEgc28gdGhhdCB3ZSBjYW4gd29yayBvdXQgYW55IGlzc3VlcyB0aGF0IG1heSBhcmlzZSBiZWZvcmUgcmVsZWFzaW5nIHRvIGFsbCBvZiBDYWxpZm9ybmlhLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2FzZXN0dWR5LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRUU1OTVCO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJBQzNBOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3MnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9xdW90ZS1jb250YWluZXIuc3ZnXCIpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmcge1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1waWVjZS1pbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9ibGVtcyB7XG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvYmxlbXMgPiAuc2VjdGlvbi1zdWJoZWFkZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sb3Itc3dhdGNoIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTgyRUM7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jb2xvci1zd2F0Y2guYmx1ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1ODJFQztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5ncmVlbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBQzNBOTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5wdXJwbGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBOTY0RTc7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jb2xvci1zd2F0Y2gtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmdyaWQtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLnN1Yi1wYW5lbC5ncmF5IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAubm8td3JhcCB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1Yi1wYW5lbC1zdWJoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIC5tZXRhIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3J0Zm9saW8tcGllY2UtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNzlweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2JsZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2JsZW1zID4gLnNlY3Rpb24tc3ViaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnF1b3RlLXRleHQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmdyaWQtaW1hZ2Utc2NoZWR1bGluZzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1Yi1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAuc3ViLXBhbmVsOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4OyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5zdWItcGFuZWwuZ3JheSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVsaWdpYmlsaXR5UXVpejsiXX0= */\n/*@ sourceURL=/Users/jewelyhoxie/jhoxie.github.io/pages/eligibility-quiz.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EligibilityQuiz);

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Feligibility-quiz.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Feligibility-quiz.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Feligibility-quiz&absolutePagePath=%2FUsers%2Fjewelyhoxie%2Fjhoxie.github.io%2Fpages%2Feligibility-quiz.js!./");


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
//# sourceMappingURL=eligibility-quiz.js.map