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
    className: "jsx-725087360" + " " + "casestudy-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-header-new",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/TEEQHero.png",
    className: "jsx-725087360" + " " + "portfolio-piece-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-725087360" + " " + "section-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Rent Control Quiz & Calculator")), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Project Overview"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Renters in California can verify their eligibility for rent control and a calculate whether or not their rent increases are legal using Tech Equity\u2019s quiz and calculator.", __jsx("br", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 22
    }
  }), "The quiz needed to be redesigned to ", __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 49
    }
  }, "scale for state and local city laws"), " and to ", __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 99
    }
  }, "decrease quiz abandonment"), ". The calculator needed to ", __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 158
    }
  }, "allow for multiple rent increases over time"), ".")), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "My Role"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "As the only designer on the team, I was tasked to redesign the quiz and the calculator. I was responsible for creating the user flow, wireframing, prototyping,  user testing, synthesizing research, and iterating on final designs. I collaborated with product management, research, and engineering.")), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Duration"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "3 months (part time)")), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Tools"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Figma, Google Sheets")), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel extra-extra-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Prototype"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "See the rent calculator prototype ", __jsx("a", {
    href: " https://www.figma.com/proto/KOvgS1u9iXXfYmN5u3wRj7/Tenant-Protections-2?page-id=642%3A1607&node-id=1162%3A3208&viewport=300%2C300%2C0.05&scaling=scale-down&starting-point-node-id=1162%3A3208",
    target: "_blank",
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 47
    }
  }, "here"))), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel alt-panel-bg extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Problems"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-725087360" + " " + "no-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "User testing showed the quiz felt too long and people expressed frustration with not knowing how close they were to completion. "), __jsx("li", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "People struggled to know the answers to some of the quiz questions."), __jsx("li", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "The current flow did not include local laws that may impact eligibility."), __jsx("li", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Users wanted to check if multiple rent increases over time (past and present) were legal.")))), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel alt-panel-bg extra-extra-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Solutions"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-725087360" + " " + "no-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Quiz flow uses conditional logic to allow for efficiency and variable questions. "), __jsx("li", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Visually indicate how far along people are in the quiz and provide resources to answer questions to decrease abandonment. "), __jsx("li", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Expand quiz to include complex local laws while maintaining visual simplicity."), __jsx("li", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "Include multiple rent increase inputs.")))), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Sneak peek of the before & after"), __jsx("div", {
    className: "jsx-725087360",
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
    src: "/TE-SneakBAA.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel extra-extra-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Design audit"), __jsx("div", {
    className: "jsx-725087360" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "I audited the current state of the product to find opportunities to optimize the design."), __jsx("div", {
    className: "jsx-725087360" + " " + "grid half-and-half full-width-mobile extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/TE-BeforeQ.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/TE-BeforeRC.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel alt-panel-bg extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Research"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "A research team compiled a spreadsheet of all the factors that determine rent control eligibility.                ", __jsx("br", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 127
    }
  })), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TERS.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel alt-panel-bg extra-extra-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "Userflow"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "I synthesized the information from the spreadsheet to make an efficient user flow that includes both state and city eligibility.", __jsx("br", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }), "The flow uses conditional logic and variable questions where the next question is based on the previous question\u2019s answer. This allows for efficiency and for people to only be asked questions relevant to that their experience.", __jsx("br", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }), "I determined the max workflow to figure out what design patterns and forms need to be designed.", __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 30
    },
    src: "/TEUF.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel extra-top-padding extra-extra-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Lofi explorations"), __jsx("div", {
    className: "jsx-725087360" + " " + "thin-border-indigo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "Eligibility Quiz"), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-EQlofi1.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }), __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, "Option 1."), " The vertical progress bar shows the user how far along they are in the quiz. The numbers and check marks would be clickable so you can go back to change your answer.", __jsx("br", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), "After answering each question the user will either move on to the next question or be directed to their result. For example, if they answer yes to the first question they would be directed to the \u2018ineligible\u2019 result without completing the rest of the steps. The problem with this is that the sudden jump in this context may be too abrupt and cause confusion.", __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-EQlofi2.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }), __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, "Option 2."), " Alternatively, I designed an abstract horizontal progress bar showing how far the user has progressed but without concrete numbers. The abstract progress bar causes less confusion for someone who may jump to the results early on in the quiz compared to option 1."), __jsx("br", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-725087360" + " " + "thin-border-indigo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "Calculator"), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1039,
      marginBottom: 16
    },
    src: "/TE-RClofi1.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "Option 1."), " This shows the calculator as a form input. After entering the rent increase and date, the two inputs are grouped together in a box that is editable. This gives the user feedback that they successfully completed the input and creates visual organization. However, I still felt this design was a bit overwhelming especially on the initial screen.", __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1039,
      marginBottom: 16
    },
    src: "/TE-RClofi2.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), __jsx("b", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, "Option 2."), " This design is simpler visually and more conversational where it asks one question at a time to guide the user through a flow. After each input is successfully completed it gets groups into an editable box that is placed on a timeline. This gives the user feedback of completion and organizes the elements chronologically.")), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel alt-panel-bg extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "Team testing"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "I tested the two design options for the quiz with our cross functional team and we decided to proceed with the option 2. I polished up the design using the Tech Equity style guidelines with some minor changes for WCAG compliance. This design followed enough well known design patterns that I didn\u2019t think it need as much testing compared to the calculator. As a team we decided to move forward with option 2 for the calculator. I polished up the design and decided to use the rest of my time to user test the calculator.")), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel alt-panel-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "User testing with hifi protype"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "I tested the high fidelity clickable prototype with a group of California renters of various age groups to see if the workflow made sense. I compiled the feedback and created an action plan to make changes to the design based on the findings.                ", __jsx("br", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 271
    }
  }), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-usertestingnotion.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel alt-panel-bg extra-extra-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "Major Finding"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, "Across the board users reacted negatively to the jump between these two screens:", __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-UTtransition.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }), "Due to the red color and caution symbol everyone initially thought that they made a mistake after entering their rent.", __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }), "I updated the result to a neutral color and switched out the caution sympbol. I changed the \u201Cadd more dates\u201D button to a design more consistent with how the rest of the questions were asked in order to better inform the user how to interact with that feature.", __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-UTbaa.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, "Final Design: Eligibility Quiz"), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-EQideationoverview.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }), "Final flow:", __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-EQfinalflowdesktop.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }), "Responsive design:", __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-EQresponsive.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, "Final Design: Calculator"), __jsx("div", {
    className: "jsx-725087360" + " " + "extra-top-padding-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx("img", {
    style: {
      maxWidth: 1041,
      marginBottom: 16
    },
    src: "/TE-CalcIterations.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, "Mobile Prototype"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, "See the rent calculator prototype ", __jsx("a", {
    href: " https://www.figma.com/proto/KOvgS1u9iXXfYmN5u3wRj7/Tenant-Protections-2?page-id=642%3A1607&node-id=1162%3A3208&viewport=300%2C300%2C0.05&scaling=scale-down&starting-point-node-id=1162%3A3208",
    target: "_blank",
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 47
    }
  }, "here"), "             ")), __jsx("img", {
    src: "/TE-RCfinal.png",
    className: "jsx-725087360" + " " + "grid-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-725087360" + " " + "casestudy-panel final-design-panel-bg extra-extra-bottom-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-725087360" + " " + "section-subheader extra-top-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, "Next Steps"), __jsx("div", {
    className: "jsx-725087360",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, "Engineering is currently building the quiz. I will help with the QA process along with other team members to ensure the design is implemented accurately. Then the plan is to release the quiz locally to only the Bay Area so that we can work out any issues that may arise before releasing to all of California.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "725087360",
    __self: _this
  }, "a.jsx-725087360{-webkit-text-decoration:underline;text-decoration:underline;}.before.jsx-725087360{color:#EE595B;}.after.jsx-725087360{color:#2AC3A9;}.quote-text.jsx-725087360{font-weight:normal;font-size:18px;line-height:36px;padding:36px;padding-bottom:72px;background-image:url(\"/quote-container.svg\");text-align:center;}.grid-image-scheduling.jsx-725087360{object-fit:cover;width:100%;}.portfolio-piece-img.jsx-725087360{max-width:100%;}.problems.jsx-725087360{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.problems.jsx-725087360>.section-subheader.jsx-725087360{-webkit-flex:0 0 none;-ms-flex:0 0 none;flex:0 0 none;padding-right:40px;}.disclaimer.jsx-725087360{font-family:Roboto;font-weight:300;font-size:18px;line-height:30px;margin-left:42;}.color-swatch.jsx-725087360{display:inline-block;width:18px;height:18px;background-color:#3582EC;margin-right:8px;}.color-swatch.blue.jsx-725087360{background-color:#3582EC;}.color-swatch.green.jsx-725087360{background-color:#2AC3A9;}.color-swatch.purple.jsx-725087360{background-color:#A964E7;}.color-swatch-text.jsx-725087360{font-size:16px;line-height:16px;margin-right:20px;}.color-swatch-container.jsx-725087360{padding-top:16px;padding-bottom:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.grid-image.jsx-725087360{max-width:100%;width:100%;}.sub-panel.gray.jsx-725087360{padding:20px;}.no-wrap.jsx-725087360{white-space:nowrap;}@media only screen and (min-width:768px){.disclaimer.jsx-725087360{margin-left:42px;}.sub-panel-subheader.jsx-725087360{margin-bottom:16px;font-size:16px;}}@media only screen and (max-width:767px){.meta.jsx-725087360{width:100%;}.portfolio-piece-img.jsx-725087360{margin-bottom:50px;width:1279px;}.problems.jsx-725087360{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.problems.jsx-725087360>.section-subheader.jsx-725087360{padding-right:0x;}.quote-text.jsx-725087360{font-size:12px;line-height:26px;padding:24px 12px;padding-bottom:50px;}.quote-text.jsx-725087360:first-of-type{margin-bottom:18px;}.grid-image-scheduling.jsx-725087360{margin-top:30px;}.grid-image-scheduling.jsx-725087360:first-of-type{margin-top:0px;}.sub-panel.jsx-725087360{white-space:normal;}.sub-panel.jsx-725087360:first-of-type{margin-bottom:18px;}.sub-panel.gray.jsx-725087360{padding:8px;padding-left:16px;padding-right:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXdlbHlob3hpZS9qaG94aWUuZ2l0aHViLmlvL3BhZ2VzL2VsaWdpYmlsaXR5LXF1aXouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOExvQixBQUcyQyxBQUdaLEFBR0EsQUFHSyxBQVNGLEFBSUYsQUFLSSxBQUdMLEFBSUssQUFPRSxBQU9JLEFBR0EsQUFHQSxBQUdWLEFBS0UsQUFNRixBQUlGLEFBR00sQUFJRSxBQUdFLEFBTVIsQUFHUSxBQUlHLEFBR0wsQUFHRixBQU1JLEFBR0gsQUFHRCxBQUdJLEFBR0EsQUFHUCxXQWpDaEIsQ0FrQ3NCLENBbER6QixDQXJFRCxBQUdBLENBZ0JBLEFBbUNxQixBQVdOLEFBaUNVLEFBWXBCLENBSEEsQ0E1RlUsQUE0Q1MsQUFpQnBCLEFBbUJBLEVBekZlLEFBeUJDLEFBeUNuQixBQU9zQixBQVNGLEFBZ0JqQixBQVNBLEFBR0MsRUE5RVUsSUFPZCxBQUdBLEFBR0EsQ0FlQSxFQWxERCxFQXdHMkIsRUFqRlgsQUFnQk0sQUFrQ2xCLEFBVXNCLEVBNUZMLEFBeUVqQixDQWhEZSxFQTRCSSxPQXBCTSxLQWlGeEIsQ0F4RmdCLEFBdUJwQixBQTRDMkIsQ0E1RlgsR0FtQk0sTUE5QnZCLElBWXdCLEdBeUJMLEVBT0UsQ0E0RGpCLEdBekVKLEtBZ0VJLElBekRKLEVBekJpRCxFQWdDaEQsT0FsQkQsb0NBYnNCLENBa0RMLGlCQWpEakIseURBa0RDIiwiZmlsZSI6Ii9Vc2Vycy9qZXdlbHlob3hpZS9qaG94aWUuZ2l0aHViLmlvL3BhZ2VzL2VsaWdpYmlsaXR5LXF1aXouanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbGlnaWJpbGl0eVF1aXogPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBIZXJvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1oZWFkZXItbmV3XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcnRmb2xpby1waWVjZS1pbWdcIiBzcmM9XCIvVEVFUUhlcm8ucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlJlbnQgQ29udHJvbCBRdWl6ICZhbXA7IENhbGN1bGF0b3I8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBNZXRhICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZ1wiPlByb2plY3QgT3ZlcnZpZXc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBSZW50ZXJzIGluIENhbGlmb3JuaWEgY2FuIHZlcmlmeSB0aGVpciBlbGlnaWJpbGl0eSBmb3IgcmVudCBjb250cm9sIGFuZCBhIGNhbGN1bGF0ZSB3aGV0aGVyIG9yIG5vdCB0aGVpciByZW50IGluY3JlYXNlcyBhcmUgbGVnYWwgdXNpbmcgVGVjaCBFcXVpdHnigJlzIHF1aXogYW5kIGNhbGN1bGF0b3IuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnI+PC9icj48ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+PC9kaXY+XG4gICAgICAgICAgICBUaGUgcXVpeiBuZWVkZWQgdG8gYmUgcmVkZXNpZ25lZCB0byA8Yj5zY2FsZSBmb3Igc3RhdGUgYW5kIGxvY2FsIGNpdHkgbGF3czwvYj4gYW5kIHRvIDxiPmRlY3JlYXNlIHF1aXogYWJhbmRvbm1lbnQ8L2I+LiBUaGUgY2FsY3VsYXRvciBuZWVkZWQgdG8gPGI+YWxsb3cgZm9yIG11bHRpcGxlIHJlbnQgaW5jcmVhc2VzIG92ZXIgdGltZTwvYj4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+TXkgUm9sZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEFzIHRoZSBvbmx5IGRlc2lnbmVyIG9uIHRoZSB0ZWFtLCBJIHdhcyB0YXNrZWQgdG8gcmVkZXNpZ24gdGhlIHF1aXogYW5kIHRoZSBjYWxjdWxhdG9yLiBJIHdhcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIHVzZXIgZmxvdywgd2lyZWZyYW1pbmcsIHByb3RvdHlwaW5nLCAgdXNlciB0ZXN0aW5nLCBzeW50aGVzaXppbmcgcmVzZWFyY2gsIGFuZCBpdGVyYXRpbmcgb24gZmluYWwgZGVzaWducy4gSSBjb2xsYWJvcmF0ZWQgd2l0aCBwcm9kdWN0IG1hbmFnZW1lbnQsIHJlc2VhcmNoLCBhbmQgZW5naW5lZXJpbmcuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+RHVyYXRpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAzIG1vbnRocyAocGFydCB0aW1lKSAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyXCI+VG9vbHM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBGaWdtYSwgR29vZ2xlIFNoZWV0cyAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbCBleHRyYS1leHRyYS1ib3R0b20tcGFkZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlclwiPlByb3RvdHlwZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFNlZSB0aGUgcmVudCBjYWxjdWxhdG9yIHByb3RvdHlwZSA8YSBocmVmPVwiIGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9wcm90by9LT3ZnUzF1OWlYWGZZbU41dTN3Umo3L1RlbmFudC1Qcm90ZWN0aW9ucy0yP3BhZ2UtaWQ9NjQyJTNBMTYwNyZub2RlLWlkPTExNjIlM0EzMjA4JnZpZXdwb3J0PTMwMCUyQzMwMCUyQzAuMDUmc2NhbGluZz1zY2FsZS1kb3duJnN0YXJ0aW5nLXBvaW50LW5vZGUtaWQ9MTE2MiUzQTMyMDhcIiB0YXJnZXQ9XCJfYmxhbmtcIj5oZXJlPC9hPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWwgYWx0LXBhbmVsLWJnIGV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nXCI+UHJvYmxlbXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5vLWJvdHRvbS1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Vc2VyIHRlc3Rpbmcgc2hvd2VkIHRoZSBxdWl6IGZlbHQgdG9vIGxvbmcgYW5kIHBlb3BsZSBleHByZXNzZWQgZnJ1c3RyYXRpb24gd2l0aCBub3Qga25vd2luZyBob3cgY2xvc2UgdGhleSB3ZXJlIHRvIGNvbXBsZXRpb24uIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5QZW9wbGUgc3RydWdnbGVkIHRvIGtub3cgdGhlIGFuc3dlcnMgdG8gc29tZSBvZiB0aGUgcXVpeiBxdWVzdGlvbnMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSBjdXJyZW50IGZsb3cgZGlkIG5vdCBpbmNsdWRlIGxvY2FsIGxhd3MgdGhhdCBtYXkgaW1wYWN0IGVsaWdpYmlsaXR5LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Vc2VycyB3YW50ZWQgdG8gY2hlY2sgaWYgbXVsdGlwbGUgcmVudCBpbmNyZWFzZXMgb3ZlciB0aW1lIChwYXN0IGFuZCBwcmVzZW50KSB3ZXJlIGxlZ2FsLjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWwgYWx0LXBhbmVsLWJnIGV4dHJhLWV4dHJhLWJvdHRvbS1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nXCI+U29sdXRpb25zPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuby1ib3R0b20tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UXVpeiBmbG93IHVzZXMgY29uZGl0aW9uYWwgbG9naWMgdG8gYWxsb3cgZm9yIGVmZmljaWVuY3kgYW5kIHZhcmlhYmxlIHF1ZXN0aW9ucy4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlZpc3VhbGx5IGluZGljYXRlIGhvdyBmYXIgYWxvbmcgcGVvcGxlIGFyZSBpbiB0aGUgcXVpeiBhbmQgcHJvdmlkZSByZXNvdXJjZXMgdG8gYW5zd2VyIHF1ZXN0aW9ucyB0byBkZWNyZWFzZSBhYmFuZG9ubWVudC4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkV4cGFuZCBxdWl6IHRvIGluY2x1ZGUgY29tcGxleCBsb2NhbCBsYXdzIHdoaWxlIG1haW50YWluaW5nIHZpc3VhbCBzaW1wbGljaXR5LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5JbmNsdWRlIG11bHRpcGxlIHJlbnQgaW5jcmVhc2UgaW5wdXRzLjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWwgZXh0cmEtdG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmdcIj5TbmVhayBwZWVrIG9mIHRoZSBiZWZvcmUgJmFtcDsgYWZ0ZXI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFLVNuZWFrQkFBLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsIGV4dHJhLWV4dHJhLWJvdHRvbS1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nXCI+RGVzaWduIGF1ZGl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIEkgYXVkaXRlZCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcHJvZHVjdCB0byBmaW5kIG9wcG9ydHVuaXRpZXMgdG8gb3B0aW1pemUgdGhlIGRlc2lnbi5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGhhbGYtYW5kLWhhbGYgZnVsbC13aWR0aC1tb2JpbGUgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzcmM9XCIvVEUtQmVmb3JlUS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHNyYz1cIi9URS1CZWZvcmVSQy5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbCBhbHQtcGFuZWwtYmcgZXh0cmEtdG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmdcIj5SZXNlYXJjaFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQSByZXNlYXJjaCB0ZWFtIGNvbXBpbGVkIGEgc3ByZWFkc2hlZXQgb2YgYWxsIHRoZSBmYWN0b3JzIHRoYXQgZGV0ZXJtaW5lIHJlbnQgY29udHJvbCBlbGlnaWJpbGl0eS4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmctc21cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogMTA0MSwgbWFyZ2luQm90dG9tOiAxNiB9fSBzcmM9XCIvVEVSUy5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbCBhbHQtcGFuZWwtYmcgZXh0cmEtZXh0cmEtYm90dG9tLXBhZGRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmctc21cIj5Vc2VyZmxvdzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBJIHN5bnRoZXNpemVkIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzcHJlYWRzaGVldCB0byBtYWtlIGFuIGVmZmljaWVudCB1c2VyIGZsb3cgdGhhdCBpbmNsdWRlcyBib3RoIHN0YXRlIGFuZCBjaXR5IGVsaWdpYmlsaXR5LiBcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nLXNtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgVGhlIGZsb3cgdXNlcyBjb25kaXRpb25hbCBsb2dpYyBhbmQgdmFyaWFibGUgcXVlc3Rpb25zIHdoZXJlIHRoZSBuZXh0IHF1ZXN0aW9uIGlzIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBxdWVzdGlvbuKAmXMgYW5zd2VyLiBcbiAgICAgICAgICAgICAgICBUaGlzIGFsbG93cyBmb3IgZWZmaWNpZW5jeSBhbmQgZm9yIHBlb3BsZSB0byBvbmx5IGJlIGFza2VkIHF1ZXN0aW9ucyByZWxldmFudCB0byB0aGF0IHRoZWlyIGV4cGVyaWVuY2UuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZy1zbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIEkgZGV0ZXJtaW5lZCB0aGUgbWF4IHdvcmtmbG93IHRvIGZpZ3VyZSBvdXQgd2hhdCBkZXNpZ24gcGF0dGVybnMgYW5kIGZvcm1zIG5lZWQgdG8gYmUgZGVzaWduZWQuIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmctc21cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMzAgfX0gc3JjPVwiL1RFVUYucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWwgZXh0cmEtdG9wLXBhZGRpbmcgZXh0cmEtZXh0cmEtYm90dG9tLXBhZGRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXIgZXh0cmEtdG9wLXBhZGRpbmdcIj5Mb2ZpIGV4cGxvcmF0aW9uczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGluLWJvcmRlci1pbmRpZ29cIj5cbiAgICAgICAgICAgICAgICA8Yj5FbGlnaWJpbGl0eSBRdWl6PC9iPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmctc21cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFLUVRbG9maTEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGI+T3B0aW9uIDEuPC9iPiBUaGUgdmVydGljYWwgcHJvZ3Jlc3MgYmFyIHNob3dzIHRoZSB1c2VyIGhvdyBmYXIgYWxvbmcgdGhleSBhcmUgaW4gdGhlIHF1aXouIFRoZSBudW1iZXJzIGFuZCBjaGVjayBtYXJrcyB3b3VsZCBiZSBjbGlja2FibGUgc28geW91IGNhbiBnbyBiYWNrIHRvIGNoYW5nZSB5b3VyIGFuc3dlci5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZy1zbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIEFmdGVyIGFuc3dlcmluZyBlYWNoIHF1ZXN0aW9uIHRoZSB1c2VyIHdpbGwgZWl0aGVyIG1vdmUgb24gdG8gdGhlIG5leHQgcXVlc3Rpb24gb3IgYmUgZGlyZWN0ZWQgdG8gdGhlaXIgcmVzdWx0LiBGb3IgZXhhbXBsZSwgaWYgdGhleSBhbnN3ZXIgeWVzIHRvIHRoZSBmaXJzdCBxdWVzdGlvbiB0aGV5IHdvdWxkIGJlIGRpcmVjdGVkIHRvIHRoZSDigJhpbmVsaWdpYmxl4oCZIHJlc3VsdCB3aXRob3V0IGNvbXBsZXRpbmcgdGhlIHJlc3Qgb2YgdGhlIHN0ZXBzLiBUaGUgcHJvYmxlbSB3aXRoIHRoaXMgaXMgdGhhdCB0aGUgc3VkZGVuIGp1bXAgaW4gdGhpcyBjb250ZXh0IG1heSBiZSB0b28gYWJydXB0IGFuZCBjYXVzZSBjb25mdXNpb24uXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogMTA0MSwgbWFyZ2luQm90dG9tOiAxNiB9fSBzcmM9XCIvVEUtRVFsb2ZpMi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8Yj5PcHRpb24gMi48L2I+IEFsdGVybmF0aXZlbHksIEkgZGVzaWduZWQgYW4gYWJzdHJhY3QgaG9yaXpvbnRhbCBwcm9ncmVzcyBiYXIgc2hvd2luZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBwcm9ncmVzc2VkIGJ1dCB3aXRob3V0IGNvbmNyZXRlIG51bWJlcnMuIFRoZSBhYnN0cmFjdCBwcm9ncmVzcyBiYXIgY2F1c2VzIGxlc3MgY29uZnVzaW9uIGZvciBzb21lb25lIHdobyBtYXkganVtcCB0byB0aGUgcmVzdWx0cyBlYXJseSBvbiBpbiB0aGUgcXVpeiBjb21wYXJlZCB0byBvcHRpb24gMS4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpbi1ib3JkZXItaW5kaWdvXCI+XG4gICAgICAgICAgICAgICAgPGI+Q2FsY3VsYXRvcjwvYj4gIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmctc21cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogMTAzOSwgbWFyZ2luQm90dG9tOiAxNiB9fSBzcmM9XCIvVEUtUkNsb2ZpMS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxiPk9wdGlvbiAxLjwvYj4gVGhpcyBzaG93cyB0aGUgY2FsY3VsYXRvciBhcyBhIGZvcm0gaW5wdXQuIEFmdGVyIGVudGVyaW5nIHRoZSByZW50IGluY3JlYXNlIGFuZCBkYXRlLCB0aGUgdHdvIGlucHV0cyBhcmUgZ3JvdXBlZCB0b2dldGhlciBpbiBhIGJveCB0aGF0IGlzIGVkaXRhYmxlLiBUaGlzIGdpdmVzIHRoZSB1c2VyIGZlZWRiYWNrIHRoYXQgdGhleSBzdWNjZXNzZnVsbHkgY29tcGxldGVkIHRoZSBpbnB1dCBhbmQgY3JlYXRlcyB2aXN1YWwgb3JnYW5pemF0aW9uLiBIb3dldmVyLCBJIHN0aWxsIGZlbHQgdGhpcyBkZXNpZ24gd2FzIGEgYml0IG92ZXJ3aGVsbWluZyBlc3BlY2lhbGx5IG9uIHRoZSBpbml0aWFsIHNjcmVlbi5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwMzksIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFLVJDbG9maTIucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8Yj5PcHRpb24gMi48L2I+IFRoaXMgZGVzaWduIGlzIHNpbXBsZXIgdmlzdWFsbHkgYW5kIG1vcmUgY29udmVyc2F0aW9uYWwgd2hlcmUgaXQgYXNrcyBvbmUgcXVlc3Rpb24gYXQgYSB0aW1lIHRvIGd1aWRlIHRoZSB1c2VyIHRocm91Z2ggYSBmbG93LiBBZnRlciBlYWNoIGlucHV0IGlzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQgaXQgZ2V0cyBncm91cHMgaW50byBhbiBlZGl0YWJsZSBib3ggdGhhdCBpcyBwbGFjZWQgb24gYSB0aW1lbGluZS4gVGhpcyBnaXZlcyB0aGUgdXNlciBmZWVkYmFjayBvZiBjb21wbGV0aW9uIGFuZCBvcmdhbml6ZXMgdGhlIGVsZW1lbnRzIGNocm9ub2xvZ2ljYWxseS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWwgYWx0LXBhbmVsLWJnIGV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nXCI+VGVhbSB0ZXN0aW5nPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSSB0ZXN0ZWQgdGhlIHR3byBkZXNpZ24gb3B0aW9ucyBmb3IgdGhlIHF1aXogd2l0aCBvdXIgY3Jvc3MgZnVuY3Rpb25hbCB0ZWFtIGFuZCB3ZSBkZWNpZGVkIHRvIHByb2NlZWQgd2l0aCB0aGUgb3B0aW9uIDIuIEkgcG9saXNoZWQgdXAgdGhlIGRlc2lnbiB1c2luZyB0aGUgVGVjaCBFcXVpdHkgc3R5bGUgZ3VpZGVsaW5lcyB3aXRoIHNvbWUgbWlub3IgY2hhbmdlcyBmb3IgV0NBRyBjb21wbGlhbmNlLiBUaGlzIGRlc2lnbiBmb2xsb3dlZCBlbm91Z2ggd2VsbCBrbm93biBkZXNpZ24gcGF0dGVybnMgdGhhdCBJIGRpZG7igJl0IHRoaW5rIGl0IG5lZWQgYXMgbXVjaCB0ZXN0aW5nIGNvbXBhcmVkIHRvIHRoZSBjYWxjdWxhdG9yLiBBcyBhIHRlYW0gd2UgZGVjaWRlZCB0byBtb3ZlIGZvcndhcmQgd2l0aCBvcHRpb24gMiBmb3IgdGhlIGNhbGN1bGF0b3IuIEkgcG9saXNoZWQgdXAgdGhlIGRlc2lnbiBhbmQgZGVjaWRlZCB0byB1c2UgdGhlIHJlc3Qgb2YgbXkgdGltZSB0byB1c2VyIHRlc3QgdGhlIGNhbGN1bGF0b3IuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsIGFsdC1wYW5lbC1iZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZ1wiPlVzZXIgdGVzdGluZyB3aXRoIGhpZmkgcHJvdHlwZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEkgdGVzdGVkIHRoZSBoaWdoIGZpZGVsaXR5IGNsaWNrYWJsZSBwcm90b3R5cGUgd2l0aCBhIGdyb3VwIG9mIENhbGlmb3JuaWEgcmVudGVycyBvZiB2YXJpb3VzIGFnZSBncm91cHMgdG8gc2VlIGlmIHRoZSB3b3JrZmxvdyBtYWRlIHNlbnNlLiBJIGNvbXBpbGVkIHRoZSBmZWVkYmFjayBhbmQgY3JlYXRlZCBhbiBhY3Rpb24gcGxhbiB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIGRlc2lnbiBiYXNlZCBvbiB0aGUgZmluZGluZ3MuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmctc21cIi8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFLXVzZXJ0ZXN0aW5nbm90aW9uLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsIGFsdC1wYW5lbC1iZyBleHRyYS1leHRyYS1ib3R0b20tcGFkZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZ1wiPk1ham9yIEZpbmRpbmc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBBY3Jvc3MgdGhlIGJvYXJkIHVzZXJzIHJlYWN0ZWQgbmVnYXRpdmVseSB0byB0aGUganVtcCBiZXR3ZWVuIHRoZXNlIHR3byBzY3JlZW5zOiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nLXNtXCIvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxLCBtYXJnaW5Cb3R0b206IDE2IH19IHNyYz1cIi9URS1VVHRyYW5zaXRpb24ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICBEdWUgdG8gdGhlIHJlZCBjb2xvciBhbmQgY2F1dGlvbiBzeW1ib2wgZXZlcnlvbmUgaW5pdGlhbGx5IHRob3VnaHQgdGhhdCB0aGV5IG1hZGUgYSBtaXN0YWtlIGFmdGVyIGVudGVyaW5nIHRoZWlyIHJlbnQuIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICBJIHVwZGF0ZWQgdGhlIHJlc3VsdCB0byBhIG5ldXRyYWwgY29sb3IgYW5kIHN3aXRjaGVkIG91dCB0aGUgY2F1dGlvbiBzeW1wYm9sLiBJIGNoYW5nZWQgdGhlIOKAnGFkZCBtb3JlIGRhdGVz4oCdIGJ1dHRvbiB0byBhIGRlc2lnbiBtb3JlIGNvbnNpc3RlbnQgd2l0aCBob3cgdGhlIHJlc3Qgb2YgdGhlIHF1ZXN0aW9ucyB3ZXJlIGFza2VkIGluIG9yZGVyIHRvIGJldHRlciBpbmZvcm0gdGhlIHVzZXIgaG93IHRvIGludGVyYWN0IHdpdGggdGhhdCBmZWF0dXJlLlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtdG9wLXBhZGRpbmctc21cIi8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEwNDEsIG1hcmdpbkJvdHRvbTogMTYgfX0gc3JjPVwiL1RFLVVUYmFhLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXN0dWR5LXBhbmVsIGV4dHJhLXRvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nXCI+RmluYWwgRGVzaWduOiBFbGlnaWJpbGl0eSBRdWl6PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nLXNtXCIvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxLCBtYXJnaW5Cb3R0b206IDE2IH19IHNyYz1cIi9URS1FUWlkZWF0aW9ub3ZlcnZpZXcucG5nXCIgLz5cbiAgICAgICAgICAgIEZpbmFsIGZsb3c6XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRvcC1wYWRkaW5nLXNtXCIvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxLCBtYXJnaW5Cb3R0b206IDE2IH19IHNyYz1cIi9URS1FUWZpbmFsZmxvd2Rlc2t0b3AucG5nXCIgLz5cbiAgICAgICAgICAgIFJlc3BvbnNpdmUgZGVzaWduOlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZy1zbVwiLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1hZ2VcIiBzdHlsZT17eyBtYXhXaWR0aDogMTA0MSwgbWFyZ2luQm90dG9tOiAxNiB9fSBzcmM9XCIvVEUtRVFyZXNwb25zaXZlLnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PiAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmhlYWRlciBleHRyYS10b3AtcGFkZGluZ1wiPkZpbmFsIERlc2lnbjogQ2FsY3VsYXRvcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS10b3AtcGFkZGluZy1zbVwiLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWFnZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMDQxLCBtYXJnaW5Cb3R0b206IDE2IH19IHNyYz1cIi9URS1DYWxjSXRlcmF0aW9ucy5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zdWJoZWFkZXJcIj5Nb2JpbGUgUHJvdG90eXBlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU2VlIHRoZSByZW50IGNhbGN1bGF0b3IgcHJvdG90eXBlIDxhIGhyZWY9XCIgaHR0cHM6Ly93d3cuZmlnbWEuY29tL3Byb3RvL0tPdmdTMXU5aVhYZlltTjV1M3dSajcvVGVuYW50LVByb3RlY3Rpb25zLTI/cGFnZS1pZD02NDIlM0ExNjA3Jm5vZGUtaWQ9MTE2MiUzQTMyMDgmdmlld3BvcnQ9MzAwJTJDMzAwJTJDMC4wNSZzY2FsaW5nPXNjYWxlLWRvd24mc3RhcnRpbmctcG9pbnQtbm9kZS1pZD0xMTYyJTNBMzIwOFwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+ICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3JjPVwiL1RFLVJDZmluYWwucG5nXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktcGFuZWwgZmluYWwtZGVzaWduLXBhbmVsLWJnIGV4dHJhLWV4dHJhLWJvdHRvbS1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc3ViaGVhZGVyIGV4dHJhLXRvcC1wYWRkaW5nXCI+TmV4dCBTdGVwczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBFbmdpbmVlcmluZyBpcyBjdXJyZW50bHkgYnVpbGRpbmcgdGhlIHF1aXouIEkgd2lsbCBoZWxwIHdpdGggdGhlIFFBIHByb2Nlc3MgYWxvbmcgd2l0aCBvdGhlciB0ZWFtIG1lbWJlcnMgdG8gZW5zdXJlIHRoZSBkZXNpZ24gaXMgaW1wbGVtZW50ZWQgYWNjdXJhdGVseS4gVGhlbiB0aGUgcGxhbiBpcyB0byByZWxlYXNlIHRoZSBxdWl6IGxvY2FsbHkgdG8gb25seSB0aGUgQmF5IEFyZWEgc28gdGhhdCB3ZSBjYW4gd29yayBvdXQgYW55IGlzc3VlcyB0aGF0IG1heSBhcmlzZSBiZWZvcmUgcmVsZWFzaW5nIHRvIGFsbCBvZiBDYWxpZm9ybmlhLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRUU1OTVCO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJBQzNBOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3MnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9xdW90ZS1jb250YWluZXIuc3ZnXCIpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmcge1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1waWVjZS1pbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9ibGVtcyB7XG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvYmxlbXMgPiAuc2VjdGlvbi1zdWJoZWFkZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sb3Itc3dhdGNoIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTgyRUM7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jb2xvci1zd2F0Y2guYmx1ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1ODJFQztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5ncmVlbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBQzNBOTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC5wdXJwbGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBOTY0RTc7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jb2xvci1zd2F0Y2gtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmNvbG9yLXN3YXRjaC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmdyaWQtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLnN1Yi1wYW5lbC5ncmF5IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAubm8td3JhcCB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1Yi1wYW5lbC1zdWJoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIC5tZXRhIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3J0Zm9saW8tcGllY2UtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNzlweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2JsZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2JsZW1zID4gLnNlY3Rpb24tc3ViaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnF1b3RlLXRleHQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmlkLWltYWdlLXNjaGVkdWxpbmcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmdyaWQtaW1hZ2Utc2NoZWR1bGluZzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1Yi1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAuc3ViLXBhbmVsOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4OyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5zdWItcGFuZWwuZ3JheSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVsaWdpYmlsaXR5UXVpejsiXX0= */\n/*@ sourceURL=/Users/jewelyhoxie/jhoxie.github.io/pages/eligibility-quiz.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EligibilityQuiz);

/***/ }),

/***/ 3:
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

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=eligibility-quiz.js.map