
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('element-ui'), require('axios'), require('vue'), require('sortablejs'), require('async'), require('qs'), require('spark-md5'), require('vue-count-to')) :
  typeof define === 'function' && define.amd ? define(['element-ui', 'axios', 'vue', 'sortablejs', 'async', 'qs', 'spark-md5', 'vue-count-to'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rrUi = factory(global.Element, global.axios, global.Vue, global.Sortable, global.async, global.Qs, global.SparkMD5, global.CountTo));
})(this, (function (elementUi, axios, Vue, Sortable, async, Qs, SparkMD5, CountTo) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);
  var Sortable__default = /*#__PURE__*/_interopDefaultLegacy(Sortable);
  var async__default = /*#__PURE__*/_interopDefaultLegacy(async);
  var Qs__default = /*#__PURE__*/_interopDefaultLegacy(Qs);
  var SparkMD5__namespace = /*#__PURE__*/_interopNamespace(SparkMD5);
  var CountTo__default = /*#__PURE__*/_interopDefaultLegacy(CountTo);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

    _regeneratorRuntime = function () {
      return exports;
    };

    var exports = {},
        Op = Object.prototype,
        hasOwn = Op.hasOwnProperty,
        $Symbol = "function" == typeof Symbol ? Symbol : {},
        iteratorSymbol = $Symbol.iterator || "@@iterator",
        asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
        toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }

    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
          generator = Object.create(protoGenerator.prototype),
          context = new Context(tryLocsList || []);
      return generator._invoke = function (innerFn, self, context) {
        var state = "suspendedStart";
        return function (method, arg) {
          if ("executing" === state) throw new Error("Generator is already running");

          if ("completed" === state) {
            if ("throw" === method) throw arg;
            return doneResult();
          }

          for (context.method = method, context.arg = arg;;) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
              if ("suspendedStart" === state) throw state = "completed", context.arg;
              context.dispatchException(context.arg);
            } else "return" === context.method && context.abrupt("return", context.arg);
            state = "executing";
            var record = tryCatch(innerFn, self, context);

            if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
              return {
                value: record.arg,
                done: context.done
              };
            }

            "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }(innerFn, self, context), generator;
    }

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    exports.wrap = wrap;
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}

    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
        NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if ("throw" !== record.type) {
          var result = record.arg,
              value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }

        reject(record.arg);
      }

      var previousPromise;

      this._invoke = function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      };
    }

    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (undefined === method) {
        if (context.delegate = null, "throw" === context.method) {
          if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
          context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }

    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

            return next.value = undefined, next.done = !0, next;
          };

          return next.next = next;
        }
      }

      return {
        next: doneResult
      };
    }

    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }

    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (object) {
      var keys = [];

      for (var key in object) keys.push(key);

      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }

        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;

        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
              record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
                hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
      var name = child.$options.componentName;

      if (name === componentName) {
        child.$emit.apply(child, [eventName].concat(params));
      } else {
        broadcast.apply(child, [componentName, eventName].concat([params]));
      }
    });
  }
  var Emitter = {
    methods: {
      dispatch(componentName, eventName, params) {
        var parent = this.$parent || this.$root;
        var name = parent.$options.componentName;

        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;

          if (parent) {
            name = parent.$options.componentName;
          }
        }
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params));
        }
      },
      broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
      }
    }
  };

  /**
   * 动态表单组件注册类
   * 提供注册和获取方法
   */
  var WidgetRegistry = /*#__PURE__*/function () {
    function WidgetRegistry() {
      _classCallCheck(this, WidgetRegistry);

      _defineProperty(this, "widgets", new Map());

      _defineProperty(this, "defaultWidget", void 0);
    }

    _createClass(WidgetRegistry, [{
      key: "setDefault",
      value:
      /**
       * 设置默认组件，以便找不到type对应的逐渐时候显示
       * @param widget
       */
      function setDefault(widget) {
        this.defaultWidget = widget;
      }
      /**
       * 注册动态表单组件
       * @param type
       * @param widget
       */

    }, {
      key: "register",
      value: function register(type, widget) {
        this.widgets.set(type, widget);
      }
      /**
       * 判断指定的组件名称是否存在
       * @param type
       */

    }, {
      key: "has",
      value: function has(type) {
        return this.widgets.has(type);
      }
      /**
       * 根据指定类型获取动态组件
       * @param type
       */

    }, {
      key: "getType",
      value: function getType(type) {
        if (this.has(type)) {
          return this.widgets.get(type);
        }

        return this.defaultWidget;
      }
    }]);

    return WidgetRegistry;
  }();

  var widgetRegistry = new WidgetRegistry();

  var script$s = {
    name: 'dynamic-form',
    componentName: 'dynamic-form',
    mixins: [Emitter],
    props: {
      formConfig: {
        type: Object,
        required: true
      },
      value: {
        type: Object,
        required: true
      }
    },
    computed: {
      conditionLength: function conditionLength() {
        return (this.formConfig.formItemList || []).length;
      },
      rules: function rules() {
        var _rules = {};
        var formItemList = this.formConfig.formItemList || [];

        var _iterator = _createForOfIteratorHelper(formItemList),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var prop = item.key;
            var rule = item.rules || [];
            rule && rule.length && (_rules[prop] = rule);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return _rules;
      }
    },
    watch: {
      conditionLength: {
        handler: function handler() {
          this.bindRelation();
        },
        immediate: true
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.setDefaultValue();
      this.$on('keyup-enter', function () {
        return _this.submitForm('dyForm');
      });
    },
    methods: {
      createWidgets: function createWidgets(formItem) {
        var key = "df-".concat(formItem.type);
        var comp = widgetRegistry.getType(key);

        if (!comp) {
          throw new Error('invalid formItem type');
        }

        return comp;
      },
      handleChange: function handleChange(val, key) {
        this.$emit('change', key, Object.assign({}, this.value, _defineProperty({}, key, val)));
      },
      handleInput: function handleInput(val, key) {
        // if (typeof val === 'string') {
        //   val = val.replace(/^\s*|\s*$/g, '')
        // }
        this.$emit('input', _objectSpread2(_objectSpread2({}, this.value), {}, _defineProperty({}, key, val)));
      },
      //初始值和formItemList的默认值
      setDefaultValue: function setDefaultValue() {
        var _this$formConfig$form;

        var formData = _objectSpread2({}, this.value); // 设置默认值


        (_this$formConfig$form = this.formConfig.formItemList) === null || _this$formConfig$form === void 0 ? void 0 : _this$formConfig$form.forEach(function (_ref) {
          var key = _ref.key,
              value = _ref.value,
              defaultValue = _ref.defaultValue;

          if (formData[key] === undefined || formData[key] === null) {
            formData[key] = value;
          } else if (JSON.stringify(formData[key]) === '[null]') {
            //hack cascader resetFields =>[null]
            formData[key] = [];
          }

          if (defaultValue) {
            formData[key] = defaultValue;
          }
        });
        this.$emit('input', formData);
        return formData;
      },
      //针对关联widget  建立依赖关联
      bindRelation: function bindRelation() {
        var _this2 = this;

        var formItemList = this.formConfig.formItemList || [];
        formItemList.forEach(function (item) {
          var dependence = item.dependence,
              type = item.type;
          dependence && _this2.$watch('value', function (newVal, oldVal) {
            if (newVal[dependence] !== oldVal[dependence]) {
              type === 'select' && this.broadcast('sfSelectWidget', "".concat(dependence, "-change"), newVal[dependence]);
              type === 'cascader' && this.broadcast('sfCascaderWidget', "".concat(dependence, "-change"), newVal[dependence]);
            }
          });
        });
      },
      submitForm: function submitForm(formName) {
        var _this3 = this;

        this.$refs[formName].validate(function (valid) {
          if (valid) {
            _this3.$emit('submit', _this3.value);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm: function resetForm(formName) {
        var _this4 = this;

        this.$refs[formName].resetFields();
        this.$refs[formName].validate(function (valid) {
          if (valid) {
            _this4.$emit('reset', _this4.setDefaultValue());
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  const __vue_script__$s = script$s;

  /* template */
  var __vue_render__$s = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-form",
      {
        ref: "dyForm",
        staticClass: "dynamic-form",
        attrs: {
          inline: _vm.formConfig.inline,
          model: _vm.value,
          "label-position": _vm.formConfig.labelPosition,
          "label-width": _vm.formConfig.labelWidth,
          size: _vm.formConfig.size,
          rules: _vm.rules,
        },
      },
      [
        _vm.formConfig.formItemList && _vm.formConfig.formItemList.length > 0
          ? [
              _vm._l(
                _vm.formConfig.formItemList.filter(function (item) {
                  return !item.hidden
                }),
                function (formitem, index) {
                  return _c(_vm.createWidgets(formitem), {
                    key: formitem.key + index,
                    tag: "component",
                    attrs: { item: formitem, value: _vm.value[formitem.key] },
                    on: {
                      input: function ($event) {
                        return _vm.handleInput($event, formitem.key)
                      },
                      change: function ($event) {
                        return _vm.handleChange($event, formitem.key)
                      },
                    },
                  })
                }
              ),
              _vm._v(" "),
              _vm._t("custom-form"),
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm._t("default"),
        _vm._v(" "),
        _c(
          "el-row",
          { staticClass: "text-c", attrs: { type: "flex", justify: "end" } },
          [
            _c(
              "el-button",
              {
                attrs: { size: "small" },
                on: {
                  click: function ($event) {
                    return _vm.resetForm("dyForm")
                  },
                },
              },
              [_vm._v("重置")]
            ),
            _vm._v(" "),
            _c(
              "el-button",
              {
                attrs: { size: "small", type: "primary" },
                on: {
                  click: function ($event) {
                    return _vm.submitForm("dyForm")
                  },
                },
              },
              [_vm._v(" 查询 ")]
            ),
            _vm._v(" "),
            _vm._t("sf-btns"),
          ],
          2
        ),
      ],
      2
    )
  };
  var __vue_staticRenderFns__$s = [];
  __vue_render__$s._withStripped = true;

    /* style */
    const __vue_inject_styles__$s = function (inject) {
      if (!inject) return
      inject("data-v-612de86e_0", { source: ".dynamic-form[data-v-612de86e] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\DynamicForm\\index.vue","index.vue"],"names":[],"mappings":"AAuJA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;ACtJA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\r\n  <el-form\r\n    ref=\"dyForm\"\r\n    class=\"dynamic-form\"\r\n    :inline=\"formConfig.inline\"\r\n    :model=\"value\"\r\n    :label-position=\"formConfig.labelPosition\"\r\n    :label-width=\"formConfig.labelWidth\"\r\n    :size=\"formConfig.size\"\r\n    :rules=\"rules\"\r\n  >\r\n    <template v-if=\"formConfig.formItemList && formConfig.formItemList.length > 0\">\r\n      <component\r\n        :is=\"createWidgets(formitem)\"\r\n        v-for=\"(formitem, index) in formConfig.formItemList.filter((item) => !item.hidden)\"\r\n        :key=\"formitem.key + index\"\r\n        :item=\"formitem\"\r\n        :value=\"value[formitem.key]\"\r\n        @input=\"handleInput($event, formitem.key)\"\r\n        @change=\"handleChange($event, formitem.key)\"\r\n      />\r\n      <slot name=\"custom-form\"></slot>\r\n    </template>\r\n    <slot />\r\n    <el-row type=\"flex\" justify=\"end\" class=\"text-c\">\r\n      <el-button size=\"small\" @click=\"resetForm('dyForm')\">重置</el-button>\r\n      <el-button size=\"small\" type=\"primary\" @click=\"submitForm('dyForm')\"> 查询 </el-button>\r\n      <slot name=\"sf-btns\" />\r\n    </el-row>\r\n  </el-form>\r\n</template>\r\n\r\n<script>\r\nimport Emitter from 'element-ui/src/mixins/emitter'\r\nimport widgetRegistry from './WidgetRegistry'\r\nexport default {\r\n  name: 'dynamic-form',\r\n  componentName: 'dynamic-form',\r\n  mixins: [Emitter],\r\n  props: {\r\n    formConfig: {\r\n      type: Object,\r\n      required: true\r\n    },\r\n    value: {\r\n      type: Object,\r\n      required: true\r\n    }\r\n  },\r\n  computed: {\r\n    conditionLength() {\r\n      return (this.formConfig.formItemList || []).length\r\n    },\r\n    rules() {\r\n      const _rules = {}\r\n      const formItemList = this.formConfig.formItemList || []\r\n      for (const item of formItemList) {\r\n        const prop = item.key\r\n        const rule = item.rules || []\r\n        rule && rule.length && (_rules[prop] = rule)\r\n      }\r\n      return _rules\r\n    }\r\n  },\r\n  watch: {\r\n    conditionLength: {\r\n      handler() {\r\n        this.bindRelation()\r\n      },\r\n      immediate: true\r\n    }\r\n  },\r\n  mounted() {\r\n    this.setDefaultValue()\r\n    this.$on('keyup-enter', () => this.submitForm('dyForm'))\r\n  },\r\n  methods: {\r\n    createWidgets(formItem) {\r\n      const key = `df-${formItem.type}`\r\n      const comp = widgetRegistry.getType(key)\r\n      if (!comp) {\r\n        throw new Error('invalid formItem type')\r\n      }\r\n      return comp\r\n    },\r\n    handleChange(val, key) {\r\n      this.$emit('change', key, Object.assign({}, this.value, { [key]: val }))\r\n    },\r\n    handleInput(val, key) {\r\n      // if (typeof val === 'string') {\r\n      //   val = val.replace(/^\\s*|\\s*$/g, '')\r\n      // }\r\n      this.$emit('input', { ...this.value, [key]: val })\r\n    },\r\n    //初始值和formItemList的默认值\r\n    setDefaultValue() {\r\n      const formData = { ...this.value } // 设置默认值\r\n      this.formConfig.formItemList?.forEach(({ key, value, defaultValue }) => {\r\n        if (formData[key] === undefined || formData[key] === null) {\r\n          formData[key] = value\r\n        } else if (JSON.stringify(formData[key]) === '[null]') {\r\n          //hack cascader resetFields =>[null]\r\n          formData[key] = []\r\n        }\r\n        if (defaultValue) {\r\n          formData[key] = defaultValue\r\n        }\r\n      })\r\n      this.$emit('input', formData)\r\n      return formData\r\n    },\r\n    //针对关联widget  建立依赖关联\r\n    bindRelation() {\r\n      const formItemList = this.formConfig.formItemList || []\r\n      formItemList.forEach((item) => {\r\n        const { dependence, type } = item\r\n        dependence &&\r\n          this.$watch('value', function (newVal, oldVal) {\r\n            if (newVal[dependence] !== oldVal[dependence]) {\r\n              type === 'select' && this.broadcast('sfSelectWidget', `${dependence}-change`, newVal[dependence])\r\n              type === 'cascader' && this.broadcast('sfCascaderWidget', `${dependence}-change`, newVal[dependence])\r\n            }\r\n          })\r\n      })\r\n    },\r\n    submitForm(formName) {\r\n      this.$refs[formName].validate((valid) => {\r\n        if (valid) {\r\n          this.$emit('submit', this.value)\r\n        } else {\r\n          console.log('error submit!!')\r\n          return false\r\n        }\r\n      })\r\n    },\r\n    resetForm(formName) {\r\n      this.$refs[formName].resetFields()\r\n      this.$refs[formName].validate((valid) => {\r\n        if (valid) {\r\n          this.$emit('reset', this.setDefaultValue())\r\n        } else {\r\n          console.log('error submit!!')\r\n          return false\r\n        }\r\n      })\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style lang=\"sass\" scoped>\r\n.dynamic-form\r\n  display: flex\r\n  flex-wrap: wrap\r\n  align-items: flex-start\r\n</style>\r\n",".dynamic-form {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$s = "data-v-612de86e";
    /* module identifier */
    const __vue_module_identifier__$s = undefined;
    /* functional template */
    const __vue_is_functional_template__$s = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$s = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
      __vue_inject_styles__$s,
      __vue_script__$s,
      __vue_scope_id__$s,
      __vue_is_functional_template__$s,
      __vue_module_identifier__$s,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$r = {
    name: 'dy-item-wrap',
    props: {
      item: {
        type: Object,
        "default": function _default() {
          return {};
        }
      }
    }
  };

  /* script */
  const __vue_script__$r = script$r;

  /* template */
  var __vue_render__$r = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-form-item",
      { staticClass: "fi-wrap", attrs: { prop: _vm.item.key } },
      [
        _c("template", { slot: "label" }, [
          _vm.item.popover && _vm.item.popover_text
            ? _c(
                "span",
                [
                  _vm._v("\n      " + _vm._s(_vm.item.label) + "\n      "),
                  _c(
                    "el-popover",
                    { attrs: { trigger: "hover", placement: "top" } },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.item.popover_text) +
                          "\n        "
                      ),
                      _c(
                        "span",
                        { attrs: { slot: "reference" }, slot: "reference" },
                        [_c("i", { staticClass: "el-icon-info pointer" })]
                      ),
                    ]
                  ),
                ],
                1
              )
            : _c("span", [_vm._v(_vm._s(_vm.item.label))]),
        ]),
        _vm._v(" "),
        _vm._t("default"),
      ],
      2
    )
  };
  var __vue_staticRenderFns__$r = [];
  __vue_render__$r._withStripped = true;

    /* style */
    const __vue_inject_styles__$r = function (inject) {
      if (!inject) return
      inject("data-v-0e919826_0", { source: ".fi-wrap {\n  display: inline-flex;\n  margin-right: 30px;\n}\n\n/*# sourceMappingURL=DyFormitemWraper.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\DynamicForm\\DyFormitemWraper.vue","DyFormitemWraper.vue"],"names":[],"mappings":"AA+BA;EACA,oBAAA;EACA,kBAAA;AC9BA;;AAEA,+CAA+C","file":"DyFormitemWraper.vue","sourcesContent":["<template>\r\n  <el-form-item class=\"fi-wrap\" :prop=\"item.key\">\r\n    <template slot=\"label\">\r\n      <span v-if=\"item.popover && item.popover_text\">\r\n        {{ item.label }}\r\n        <el-popover trigger=\"hover\" placement=\"top\">\r\n          {{ item.popover_text }}\r\n          <span slot=\"reference\">\r\n            <i class=\"el-icon-info pointer\"></i>\r\n          </span>\r\n        </el-popover>\r\n      </span>\r\n      <span v-else>{{ item.label }}</span>\r\n    </template>\r\n    <slot />\r\n  </el-form-item>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'dy-item-wrap',\r\n  props: {\r\n    item: {\r\n      type: Object,\r\n      default: () => ({})\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style lang=\"sass\">\r\n.fi-wrap\r\n  display: inline-flex\r\n  margin-right: 30px\r\n</style>\r\n",".fi-wrap {\n  display: inline-flex;\n  margin-right: 30px;\n}\n\n/*# sourceMappingURL=DyFormitemWraper.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$r = undefined;
    /* module identifier */
    const __vue_module_identifier__$r = undefined;
    /* functional template */
    const __vue_is_functional_template__$r = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$r = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
      __vue_inject_styles__$r,
      __vue_script__$r,
      __vue_scope_id__$r,
      __vue_is_functional_template__$r,
      __vue_module_identifier__$r,
      false,
      createInjector,
      undefined,
      undefined
    );

  var LoadingInstance = null; // create an axios instance

  var service = axios__default["default"].create({
    baseURL: "https://www.baidu.com",
    // url = base url + request url
    withCredentials: true,
    // send cookies when cross-domain requests
    timeout: 65000 // request timeout

  }); // request interceptor

  service.interceptors.request.use(function (config) {
    // do something before request is sent
    if (config.loading && LoadingInstance === null) {
      LoadingInstance = Loading.service({
        lock: true,
        text: '正在努力加载中...',
        spinner: 'el-icon-loading',
        // fullscreen: false,
        background: 'rgba(255, 255, 255, 0.1)'
      });
    } // if (config.method === 'get')
    //   config.params = Qs.stringify(config.params, { arrayFormat: 'comma' })


    return config;
  }); // response interceptor

  service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  function (response) {
    var res = response.data;

    if (LoadingInstance) {
      Vue__default["default"].nextTick(function () {
        // 以服务的方式调用的 Loading 需要异步关闭
        LoadingInstance.close();
        LoadingInstance = null;
      });
    } //是否自定义response


    if (response.config.customize) {
      return res;
    } // if the custom code is not 20000, it is judged as an error.


    if (res.code !== '00000') {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      }); // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;

      if (res.code === 'A0230') {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or login again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(function () {});
      }

      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return res.data;
    }
  }, function (error) {
    console.log('err' + error); // for debug

    if (LoadingInstance) {
      Vue__default["default"].nextTick(function () {
        // 以服务的方式调用的 Loading 需要异步关闭
        LoadingInstance.close();
        LoadingInstance = null;
      });
    }

    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  });

  var DyFormMixin = {
    props: {
      item: {
        type: Object,
        "default": function _default() {
          return {};
        }
      }
    },
    created: function created() {
      //for  access 不再缓存state
      var _this$item = this.item,
          dependence = _this$item.dependence,
          requestOptions = _this$item.requestOptions,
          _this$item$strictlyCh = _this$item.strictlyCheck,
          strictlyCheck = _this$item$strictlyCh === void 0 ? true : _this$item$strictlyCh;

      if (!strictlyCheck || !dependence && requestOptions) {
        this.query();
      }
    },
    methods: {
      query: function query() {
        var _this = this;

        var _this$item2 = this.item,
            _this$item2$requestOp = _this$item2.requestOptions,
            requestOptions = _this$item2$requestOp === void 0 ? {} : _this$item2$requestOp,
            _this$item2$format = _this$item2.format,
            format = _this$item2$format === void 0 ? function (v) {
          return v;
        } : _this$item2$format;
        var url = requestOptions.url,
            method = requestOptions.method,
            _requestOptions$data = requestOptions.data,
            data = _requestOptions$data === void 0 ? {} : _requestOptions$data;
        url && service({
          url: url,
          method: method.toLowerCase() || 'get',
          data: data
        }).then(function (res) {
          _this.$set(_this.item, 'options', format(res));
        })["catch"](function (err) {
          console.log(err.message);
        });
      }
    }
  };

  //
  var script$q = {
    mixins: [DyFormMixin, Emitter],
    methods: {
      keyEvent: function keyEvent() {
        this.dispatch('dynamic-form', 'keyup-enter', this);
      }
    }
  };

  /* script */
  const __vue_script__$q = script$q;

  /* template */
  var __vue_render__$q = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-input",
          _vm._g(
            _vm._b(
              {
                attrs: {
                  clearable: "",
                  type: _vm.item.subtype,
                  placeholder: _vm.item.placeholder,
                  disabled: _vm.item.disabled,
                },
                nativeOn: {
                  keyup: function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.keyEvent.apply(null, arguments)
                  },
                },
              },
              "el-input",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$q = [];
  __vue_render__$q._withStripped = true;

    /* style */
    const __vue_inject_styles__$q = undefined;
    /* scoped */
    const __vue_scope_id__$q = undefined;
    /* module identifier */
    const __vue_module_identifier__$q = undefined;
    /* functional template */
    const __vue_is_functional_template__$q = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$q = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
      __vue_inject_styles__$q,
      __vue_script__$q,
      __vue_scope_id__$q,
      __vue_is_functional_template__$q,
      __vue_module_identifier__$q,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$p = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$p = script$p;

  /* template */
  var __vue_render__$p = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-date-picker",
          _vm._g(
            _vm._b(
              {
                staticClass: "date-separator",
                attrs: {
                  type: _vm.item.subtype,
                  format: _vm.item.viewFormat || _vm.item.valueFormat,
                  "range-separator": "至",
                  "start-placeholder": "开始时间",
                  "end-placeholder": "结束时间",
                  "default-time": ["00:00:00", "23:59:59"],
                },
              },
              "el-date-picker",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$p = [];
  __vue_render__$p._withStripped = true;

    /* style */
    const __vue_inject_styles__$p = function (inject) {
      if (!inject) return
      inject("data-v-2c22a754_0", { source: ".date-separator[data-v-2c22a754]  .el-range-separator {\n  width: 18px;\n}\n\n/*# sourceMappingURL=DateRangeWidget.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\DynamicForm\\widgets\\DateRangeWidget.vue","DateRangeWidget.vue"],"names":[],"mappings":"AAuBA;EACA,WAAA;ACtBA;;AAEA,8CAA8C","file":"DateRangeWidget.vue","sourcesContent":["<template>\r\n  <dy-item-wrap :item=\"item\">\r\n    <el-date-picker\r\n      class=\"date-separator\"\r\n      :type=\"item.subtype\"\r\n      :format=\"item.viewFormat || item.valueFormat\"\r\n      v-bind=\"$attrs\"\r\n      range-separator=\"至\"\r\n      start-placeholder=\"开始时间\"\r\n      end-placeholder=\"结束时间\"\r\n      :default-time=\"['00:00:00', '23:59:59']\"\r\n      v-on=\"$listeners\"\r\n    />\r\n  </dy-item-wrap>\r\n</template>\r\n\r\n<script>\r\nimport DyFormMixin from '../dyformitemMixin'\r\nexport default {\r\n  mixins: [DyFormMixin]\r\n}\r\n</script>\r\n<style lang=\"scss\" scoped>\r\n.date-separator ::v-deep .el-range-separator {\r\n  width: 18px;\r\n}\r\n</style>\r\n",".date-separator ::v-deep .el-range-separator {\n  width: 18px;\n}\n\n/*# sourceMappingURL=DateRangeWidget.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$p = "data-v-2c22a754";
    /* module identifier */
    const __vue_module_identifier__$p = undefined;
    /* functional template */
    const __vue_is_functional_template__$p = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$p = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
      __vue_inject_styles__$p,
      __vue_script__$p,
      __vue_scope_id__$p,
      __vue_is_functional_template__$p,
      __vue_module_identifier__$p,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  var script$o = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$o = script$o;

  /* template */
  var __vue_render__$o = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-time-picker",
          _vm._g(
            _vm._b(
              {
                attrs: {
                  format: _vm.item.valueFormat,
                  "range-separator": "至",
                  "start-placeholder": "开始时间",
                  "end-placeholder": "结束时间",
                },
              },
              "el-time-picker",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$o = [];
  __vue_render__$o._withStripped = true;

    /* style */
    const __vue_inject_styles__$o = undefined;
    /* scoped */
    const __vue_scope_id__$o = undefined;
    /* module identifier */
    const __vue_module_identifier__$o = undefined;
    /* functional template */
    const __vue_is_functional_template__$o = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$o = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
      __vue_inject_styles__$o,
      __vue_script__$o,
      __vue_scope_id__$o,
      __vue_is_functional_template__$o,
      __vue_module_identifier__$o,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$n = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$n = script$n;

  /* template */
  var __vue_render__$n = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-date-picker",
          _vm._g(
            _vm._b(
              {
                staticClass: "date-separator",
                attrs: {
                  type: _vm.item.subtype,
                  format: _vm.item.viewFormat,
                  "value-format": _vm.item.valueFormat,
                  clearable: _vm.item.clearable,
                  placeholder: _vm.item.placeholder || "选择日期时间",
                  "picker-options": _vm.item.pickerOptions,
                  "default-time": "00:00:00",
                },
              },
              "el-date-picker",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$n = [];
  __vue_render__$n._withStripped = true;

    /* style */
    const __vue_inject_styles__$n = function (inject) {
      if (!inject) return
      inject("data-v-7de6ac94_0", { source: ".date-separator[data-v-7de6ac94]  .el-range-separator {\n  width: 18px;\n}\n\n/*# sourceMappingURL=DateTimeWidget.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\DynamicForm\\widgets\\DateTimeWidget.vue","DateTimeWidget.vue"],"names":[],"mappings":"AAwBA;EACA,WAAA;ACvBA;;AAEA,6CAA6C","file":"DateTimeWidget.vue","sourcesContent":["<template>\r\n  <dy-item-wrap :item=\"item\">\r\n    <el-date-picker\r\n      class=\"date-separator\"\r\n      :type=\"item.subtype\"\r\n      :format=\"item.viewFormat\"\r\n      :value-format=\"item.valueFormat\"\r\n      :clearable=\"item.clearable\"\r\n      v-bind=\"$attrs\"\r\n      :placeholder=\"item.placeholder || '选择日期时间'\"\r\n      :picker-options=\"item.pickerOptions\"\r\n      default-time=\"00:00:00\"\r\n      v-on=\"$listeners\"\r\n    />\r\n  </dy-item-wrap>\r\n</template>\r\n\r\n<script>\r\nimport DyFormMixin from '../dyformitemMixin'\r\nexport default {\r\n  mixins: [DyFormMixin]\r\n}\r\n</script>\r\n<style lang=\"scss\" scoped>\r\n.date-separator ::v-deep .el-range-separator {\r\n  width: 18px;\r\n}\r\n</style>\r\n",".date-separator ::v-deep .el-range-separator {\n  width: 18px;\n}\n\n/*# sourceMappingURL=DateTimeWidget.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$n = "data-v-7de6ac94";
    /* module identifier */
    const __vue_module_identifier__$n = undefined;
    /* functional template */
    const __vue_is_functional_template__$n = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$n = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
      __vue_inject_styles__$n,
      __vue_script__$n,
      __vue_scope_id__$n,
      __vue_is_functional_template__$n,
      __vue_module_identifier__$n,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  var script$m = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$m = script$m;

  /* template */
  var __vue_render__$m = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-input-number",
          _vm._g(
            _vm._b(
              {
                style: { width: _vm.item.w + "px" },
                model: {
                  value: _vm.item.value,
                  callback: function ($$v) {
                    _vm.$set(_vm.item, "value", $$v);
                  },
                  expression: "item.value",
                },
              },
              "el-input-number",
              _vm.item,
              false
            ),
            _vm.$listeners
          )
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$m = [];
  __vue_render__$m._withStripped = true;

    /* style */
    const __vue_inject_styles__$m = undefined;
    /* scoped */
    const __vue_scope_id__$m = undefined;
    /* module identifier */
    const __vue_module_identifier__$m = undefined;
    /* functional template */
    const __vue_is_functional_template__$m = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$m = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
      __vue_inject_styles__$m,
      __vue_script__$m,
      __vue_scope_id__$m,
      __vue_is_functional_template__$m,
      __vue_module_identifier__$m,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$l = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$l = script$l;

  /* template */
  var __vue_render__$l = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-switch",
          _vm._g(_vm._b({}, "el-switch", _vm.$attrs, false), _vm.$listeners)
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$l = [];
  __vue_render__$l._withStripped = true;

    /* style */
    const __vue_inject_styles__$l = undefined;
    /* scoped */
    const __vue_scope_id__$l = undefined;
    /* module identifier */
    const __vue_module_identifier__$l = undefined;
    /* functional template */
    const __vue_is_functional_template__$l = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$l = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
      __vue_inject_styles__$l,
      __vue_script__$l,
      __vue_scope_id__$l,
      __vue_is_functional_template__$l,
      __vue_module_identifier__$l,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$k = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$k = script$k;

  /* template */
  var __vue_render__$k = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-slider",
          _vm._g(
            _vm._b(
              { attrs: { range: _vm.item.isRange } },
              "el-slider",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$k = [];
  __vue_render__$k._withStripped = true;

    /* style */
    const __vue_inject_styles__$k = undefined;
    /* scoped */
    const __vue_scope_id__$k = undefined;
    /* module identifier */
    const __vue_module_identifier__$k = undefined;
    /* functional template */
    const __vue_is_functional_template__$k = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$k = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
      __vue_inject_styles__$k,
      __vue_script__$k,
      __vue_scope_id__$k,
      __vue_is_functional_template__$k,
      __vue_module_identifier__$k,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$j = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$j = script$j;

  /* template */
  var __vue_render__$j = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-rate",
          _vm._g(
            _vm._b(
              {
                attrs: {
                  colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
                  "text-color": "#ff9900",
                },
              },
              "el-rate",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;

    /* style */
    const __vue_inject_styles__$j = undefined;
    /* scoped */
    const __vue_scope_id__$j = undefined;
    /* module identifier */
    const __vue_module_identifier__$j = undefined;
    /* functional template */
    const __vue_is_functional_template__$j = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$j = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
      __vue_inject_styles__$j,
      __vue_script__$j,
      __vue_scope_id__$j,
      __vue_is_functional_template__$j,
      __vue_module_identifier__$j,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$i = {
    componentName: 'sfSelectWidget',
    mixins: [DyFormMixin, Emitter],
    created: function created() {
      this.transferIdToName();
      this.remoteMethod(); //默认查询一次
    },
    watch: {
      'item.key': {
        handler: function handler() {
          this.bindRelation();
        },
        immediate: true
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        var _this$item = this.item,
            dependence = _this$item.dependence,
            requestOptions = _this$item.requestOptions;
        requestOptions && dependence && this.$on("".concat(dependence, "-change"), this.handleDependenceChange);
      },
      remoteMethod: function remoteMethod() {
        var _this = this;

        var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (typeof this.item.remoteMethod != 'function' || this.item.cannotEmptySearch && query === '') {
          return false;
        }

        clearTimeout(this.timer);
        this.timer = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _this$item2, remoteMethod, _this$item2$format, format;

          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _this$item2 = _this.item, remoteMethod = _this$item2.remoteMethod, _this$item2$format = _this$item2.format, format = _this$item2$format === void 0 ? function (v) {
                    return v;
                  } : _this$item2$format;
                  _context.t0 = format;
                  _context.next = 5;
                  return remoteMethod(query);

                case 5:
                  _context.t1 = _context.sent;
                  _this.item.options = (0, _context.t0)(_context.t1);
                  console.log(_this.item.options);
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t2 = _context["catch"](0);
                  console.log(_context.t2);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 10]]);
        })), 100);
      },
      handleBlur: function handleBlur() {
        var _this2 = this;

        if (this.item.remote) {
          setTimeout(function () {
            _this2.item.options = [];
          }, 400);
        }
      },
      transferIdToName: function transferIdToName() {
        var _this3 = this;

        var _this$item3 = this.item,
            value = _this$item3.value,
            id2name_code = _this$item3.id2name_code;
        if (!value || !id2name_code) return false;
        service({
          url: "/id2name/trans/".concat(id2name_code),
          method: 'POST',
          data: [value]
        }).then(function (data) {
          _this3.item.options = [{
            label: data[value],
            value: value
          }];
        })["catch"](function (err) {
          console.log(err);
        });
      },
      //
      handleDependenceChange: function handleDependenceChange(value) {
        var _this4 = this;

        var _this$item4 = this.item,
            requestOptions = _this$item4.requestOptions,
            _this$item4$format = _this$item4.format,
            format = _this$item4$format === void 0 ? function (v) {
          return v;
        } : _this$item4$format,
            _this$item4$strictlyC = _this$item4.strictlyCheck,
            strictlyCheck = _this$item4$strictlyC === void 0 ? true : _this$item4$strictlyC;

        if (!requestOptions.url) {
          return new Error('invalid requestOptions.url in current widget config');
        }

        if (strictlyCheck && !(value !== undefined && value !== null && value !== '')) {
          return false;
        }

        var url = requestOptions.url + (value || '');
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          service({
            url: url,
            method: 'GET'
          }).then(function (res) {
            _this4.$set(_this4.item, 'options', format(res));
          })["catch"](function (err) {
            console.log(err.message);
          });
        }, 300);
      }
    }
  };

  /* script */
  const __vue_script__$i = script$i;

  /* template */
  var __vue_render__$i = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-select",
          _vm._g(
            _vm._b(
              {
                attrs: {
                  clearable:
                    typeof _vm.item.clearable == "boolean"
                      ? _vm.item.clearable
                      : true,
                  multiple:
                    typeof _vm.item.multiple == "boolean"
                      ? _vm.item.multiple
                      : false,
                  filterable: _vm.item.remote || _vm.item.filterable,
                  placeholder: _vm.item.placeholder || "请选择",
                  remote: _vm.item.remote,
                  "remote-method": _vm.remoteMethod,
                  disabled: _vm.item.disabled,
                  name: _vm.item.name,
                },
              },
              "el-select",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          ),
          _vm._l(_vm.item.options, function (o) {
            return _c("el-option", {
              key: o.id,
              attrs: { label: o.name, value: o.id, disabled: o.disabled },
            })
          }),
          1
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;

    /* style */
    const __vue_inject_styles__$i = undefined;
    /* scoped */
    const __vue_scope_id__$i = undefined;
    /* module identifier */
    const __vue_module_identifier__$i = undefined;
    /* functional template */
    const __vue_is_functional_template__$i = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$i = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
      __vue_inject_styles__$i,
      __vue_script__$i,
      __vue_scope_id__$i,
      __vue_is_functional_template__$i,
      __vue_module_identifier__$i,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$h = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$h = script$h;

  /* template */
  var __vue_render__$h = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-radio-group",
          _vm._g(
            _vm._b(
              { attrs: { disabled: _vm.item.disabled } },
              "el-radio-group",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          ),
          _vm._l(_vm.item.options, function (o) {
            return _c(
              _vm.item.button ? "el-radio-button" : "el-radio",
              {
                key: o.value,
                tag: "component",
                attrs: {
                  label: o.value,
                  disabled: o.disabled,
                  border: _vm.item.border,
                },
              },
              [_vm._v(_vm._s(o.label))]
            )
          }),
          1
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;

    /* style */
    const __vue_inject_styles__$h = undefined;
    /* scoped */
    const __vue_scope_id__$h = undefined;
    /* module identifier */
    const __vue_module_identifier__$h = undefined;
    /* functional template */
    const __vue_is_functional_template__$h = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$h = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$h,
      __vue_script__$h,
      __vue_scope_id__$h,
      __vue_is_functional_template__$h,
      __vue_module_identifier__$h,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$g = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$g = script$g;

  /* template */
  var __vue_render__$g = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { attrs: { item: _vm.item } },
      [
        _c(
          "el-checkbox-group",
          _vm._g(
            _vm._b({}, "el-checkbox-group", _vm.$attrs, false),
            _vm.$listeners
          ),
          _vm._l(_vm.item.options, function (o) {
            return _c(
              _vm.item.button ? "el-checkbox-button" : "el-checkbox",
              {
                key: o.value,
                tag: "component",
                attrs: {
                  disabled: o.disabled,
                  label: o.value,
                  border: _vm.item.border,
                },
              },
              [_vm._v(_vm._s(o.label))]
            )
          }),
          1
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;

    /* style */
    const __vue_inject_styles__$g = undefined;
    /* scoped */
    const __vue_scope_id__$g = undefined;
    /* module identifier */
    const __vue_module_identifier__$g = undefined;
    /* functional template */
    const __vue_is_functional_template__$g = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$g = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
      __vue_inject_styles__$g,
      __vue_script__$g,
      __vue_scope_id__$g,
      __vue_is_functional_template__$g,
      __vue_module_identifier__$g,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$f = {
    componentName: 'sfCascaderWidget',
    mixins: [DyFormMixin],
    watch: {
      'item.key': {
        handler: function handler() {
          this.bindRelation();
        },
        immediate: true
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        var _this$item = this.item,
            dependence = _this$item.dependence,
            requestOptions = _this$item.requestOptions;
        requestOptions && dependence && this.$on("".concat(dependence, "-change"), this.handleDependenceChange);
      },
      handleDependenceChange: function handleDependenceChange(value) {
        var _this = this;

        var _this$item2 = this.item,
            requestOptions = _this$item2.requestOptions,
            _this$item2$format = _this$item2.format,
            format = _this$item2$format === void 0 ? function (v) {
          return v;
        } : _this$item2$format;

        if (!requestOptions.url) {
          return new Error('invalid requestOptions.url in current widget config');
        }

        if (!(value !== undefined && value !== null && value !== '')) {
          return false;
        }

        var url = requestOptions.url + (value || '');
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          service({
            url: url,
            method: 'GET'
          }).then(function (res) {
            _this.$set(_this.item, 'options', format(res));

            var formItem = _this.$refs.formItemWrap.$children[0];
            formItem && formItem.resetField();
          })["catch"](function (err) {
            console.log(err.message);
          });
        }, 300);
      }
    }
  };

  /* script */
  const __vue_script__$f = script$f;

  /* template */
  var __vue_render__$f = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dy-item-wrap",
      { ref: "formItemWrap", attrs: { item: _vm.item } },
      [
        _c(
          "el-cascader",
          _vm._g(
            _vm._b(
              {
                attrs: {
                  disabled: _vm.item.disabled || false,
                  options: _vm.item.options,
                  filterable: "",
                  clearable: "",
                  props: {
                    expandTrigger: "hover",
                    multiple: !!_vm.item.isMultiple,
                    emitPath: !_vm.item.single,
                    checkStrictly: !!_vm.item.checkStrictly,
                  },
                },
              },
              "el-cascader",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;

    /* style */
    const __vue_inject_styles__$f = undefined;
    /* scoped */
    const __vue_scope_id__$f = undefined;
    /* module identifier */
    const __vue_module_identifier__$f = undefined;
    /* functional template */
    const __vue_is_functional_template__$f = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$f = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$e = {
    mixins: [DyFormMixin]
  };

  /* script */
  const __vue_script__$e = script$e;

  /* template */
  var __vue_render__$e = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.item.hidden
      ? _c(
          "dy-item-wrap",
          { attrs: { item: _vm.item } },
          [
            _c(
              "el-row",
              { staticStyle: { "min-width": "200px" } },
              [
                _c(
                  "el-checkbox",
                  _vm._g(
                    _vm._b(
                      { attrs: { disabled: _vm.item.disabled || false } },
                      "el-checkbox",
                      _vm.$attrs,
                      false
                    ),
                    _vm.$listeners
                  )
                ),
              ],
              1
            ),
          ],
          1
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    const __vue_inject_styles__$e = undefined;
    /* scoped */
    const __vue_scope_id__$e = undefined;
    /* module identifier */
    const __vue_module_identifier__$e = undefined;
    /* functional template */
    const __vue_is_functional_template__$e = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$e = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      false,
      undefined,
      undefined,
      undefined
    );

  var register = {
    install: function install() {
      // 文本框
      widgetRegistry.register('df-string', __vue_component__$q); // 数字输入框

      widgetRegistry.register('df-number', __vue_component__$m); // 日期范围

      widgetRegistry.register('df-daterange', __vue_component__$p);
      widgetRegistry.register('df-timerang', __vue_component__$o); // 日期

      widgetRegistry.register('df-datetime', __vue_component__$n); // 开关

      widgetRegistry.register('df-switch', __vue_component__$l); // 拖动条

      widgetRegistry.register('df-slider', __vue_component__$k); // 星打分

      widgetRegistry.register('df-rate', __vue_component__$j); // 下拉框

      widgetRegistry.register('df-select', __vue_component__$i); // 单选框

      widgetRegistry.register('df-radio', __vue_component__$h); // 多选框

      widgetRegistry.register('df-checkbox', __vue_component__$g); //多级联动

      widgetRegistry.register('df-cascader', __vue_component__$f); //boolean

      widgetRegistry.register('df-boolean', __vue_component__$e);
    }
  };

  /**
   * @param {Function} func
   * @param {number} wait
   * @param {boolean} immediate
   * @return {*}
   */

  function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function later() {
      // 据上一次触发时间间隔
      var last = +new Date() - timestamp; // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null; // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用

        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      context = this;
      timestamp = +new Date();
      var callNow = immediate && !timeout; // 如果延时不存在，重新设定延时

      if (!timeout) timeout = setTimeout(later, wait);

      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  }
  /**
   * This is just a simple version of deep copy
   * Has a lot of edge cases bug
   * If you want to use a perfect deep copy, use lodash's _.cloneDeep
   * @param {Object} source
   * @returns {Object}
   */

  function deepClone(source) {
    if (!source && _typeof(source) !== 'object') {
      throw new Error('error arguments', 'deepClone');
    }

    var targetObj = source.constructor === Array ? [] : {};
    Object.keys(source).forEach(function (keys) {
      if (source[keys] && _typeof(source[keys]) === 'object') {
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    });
    return targetObj;
  }
  function isEmpty(variable) {
    return variable == null || variable === undefined || variable === '';
  }

  function insertNodeAt(fatherNode, node, position) {
    var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
    fatherNode.insertBefore(node, refNode);
  }

  function removeNode(node) {
    if (node.parentElement !== null) {
      node.parentElement.removeChild(node);
    }
  }

  var name = "rr-ui";
  var version$1 = "1.0.0";
  var description = "";
  var main = "lib/rr-vue2-elem.js";
  var module = "lib/rr-vue2-elem.js";
  var scripts = {
  	bootstrap: "yarn || npm i",
  	"build:umd": "rollup -c --format umd --file dist/components.umd.js",
  	dev: "cross-env NODE_ENV=dev rollup -c -w ",
  	build: "cross-env NODE_ENV=prod rollup -c",
  	clean: "rimraf lib",
  	dist: "npm run clean && npm run build"
  };
  var keywords = [
  ];
  var author = "";
  var license = "ISC";
  var devDependencies = {
  	"@babel/core": "^7.18.9",
  	"@babel/preset-env": "^7.18.9",
  	"@rollup/plugin-alias": "^3.1.9",
  	"@rollup/plugin-babel": "^5.3.1",
  	"@rollup/plugin-commonjs": "^22.0.1",
  	"@rollup/plugin-image": "^2.1.1",
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^13.3.0",
  	"@rollup/plugin-replace": "^4.0.0",
  	"@vue/babel-preset-jsx": "^1.3.0",
  	"@vue/compiler-sfc": "^3.2.37",
  	axios: "^0.27.2",
  	"babel-plugin-equire": "^1.1.1",
  	"cross-env": "^7.0.3",
  	"element-ui": "^2.15.9",
  	rimraf: "^3.0.2",
  	rollup: "^2.77.0",
  	"rollup-plugin-babel": "^4.4.0",
  	"rollup-plugin-commonjs": "^10.1.0",
  	"rollup-plugin-livereload": "^2.0.5",
  	"rollup-plugin-node-resolve": "^5.2.0",
  	"rollup-plugin-sass": "^1.2.12",
  	"rollup-plugin-serve": "^2.0.0",
  	"rollup-plugin-vue": "^5.1.9",
  	vue: "^2.7.7",
  	"vue-cropper": "^0.5.8",
  	"vue-template-compiler": "^2.7.7",
  	vuex: "^4.0.2"
  };
  var dependencies = {
  };
  var _package = {
  	name: name,
  	version: version$1,
  	description: description,
  	main: main,
  	module: module,
  	scripts: scripts,
  	keywords: keywords,
  	author: author,
  	license: license,
  	devDependencies: devDependencies,
  	dependencies: dependencies
  };

  var _package$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    name: name,
    version: version$1,
    description: description,
    main: main,
    module: module,
    scripts: scripts,
    keywords: keywords,
    author: author,
    license: license,
    devDependencies: devDependencies,
    dependencies: dependencies,
    'default': _package
  });

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  var require$$0 = getCjsExportFromNamespace(_package$1);

  var version = require$$0.version;

  var settings = {
    title: 'Iron Man',

    /**
     * @type {boolean} true | false
     * @description Whether show the settings right-panel
     */
    showSettings: true,

    /**
     * @type {boolean} true | false
     * @description Whether need tagsView
     */
    tagsView: true,

    /**
     * @type {boolean} true | false
     * @description Whether fix the header
     */
    fixedHeader: false,

    /**
     * @type {boolean} true | false
     * @description Whether show the logo in sidebar
     */
    sidebarLogo: true,

    /**
     * @type {string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
    errorLog: ['production', 'development'],

    /**
     * @type {string}
     */
    //imgUrlOfImg: 'https://img.fqdy.pro/',
    imgUrlOfImg: 'https://img.netpop.app/',
    imgUrlOfFile: 'https://subtitles.netpop.app/',

    /**
     * @type {string}
     * @description 七牛不支持截图文件后缀
     */
    qiniuNotSupportExt: ['webp'],

    /**
     * sentry 配置
     */
    sentryConfig: {
      dsn: 'https://846720149ecf4b618d949cba7a8d161a@sentry.rr.tv/16',
      release: "production".concat("-", version),
      tracesSampleRate: 1.0,
      environment: 'production' 
    }
  };

  var script$d = {
    name: 'dynamic-table',
    props: {
      // 自定义类名
      className: {
        type: String,
        "default": ''
      },
      // 表格字段配置
      columns: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      // 列表数据
      data: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      // 是否显示序号
      tabIndex: {
        type: Boolean,
        "default": false
      },
      // 是否有选择框
      checkBox: {
        type: Boolean,
        "default": false
      },
      //是否单选radio
      radioCheck: {
        type: Boolean,
        "default": false
      },
      // 操作栏配置
      handle: {
        type: Object,
        "default": null
      },

      /** *分页 */
      pager: {
        type: Boolean,
        "default": false
      },
      //格式化data
      formatData: {
        type: Function,
        "default": function _default(v) {
          return v;
        }
      },
      //行数据的 Key，用来优化 Table 的渲染；显示树形数据时，该属性是必填的。
      rowKey: {
        type: String,
        "default": 'id'
      },
      // 是否支持拖拽
      draggable: {
        type: Boolean,
        "default": false
      },
      // 限制表格高度
      limitMaxHeight: {
        type: Boolean,
        "default": true
      },
      pagination: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      // 默认init查询 当有校验条件时 必填等 默认查询
      initQuery: {
        type: Boolean,
        "default": true
      },
      requestOptions: {
        type: Object,
        "default": null
      },
      initialFormValue: {
        type: Function,
        "default": function _default(v) {
          return v;
        }
      },
      queryParams: {
        type: Function,
        "default": function _default(v) {
          return v;
        }
      },
      tabIndexSlot: {
        type: Boolean,
        "default": false
      },
      //该表格数据是否是数据字典格式
      dataIsDicType: {
        type: Boolean,
        "default": false
      },
      //缓存未筛选情况下totalElements总条数，在某种场景下，当有筛选情况时需要用到未筛选总条数
      cacheTotal: {
        type: Boolean,
        "default": false
      },
      //配合cacheTotal
      cacheKeys: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      //是否开启左边分页插槽
      paginationLeft: {
        type: Boolean,
        "default": false
      }
    },
    data: function data() {
      return {
        loading: false,
        TIMES: 0,
        radio: null,
        maxHeight: null,
        pagerConfig: {
          _totalElements: 0,
          //未筛选情况下的总条数，需要做缓存
          totalElements: 0,
          // 总条数
          //pageSizes: [10, 20, 50, 100], // 分页数量列表
          query: {
            // 查询条件
            page: 1,
            // 当前页
            size: 10 // 每页条数

          }
        }
      };
    },
    computed: {
      data_length: function data_length() {
        return this.data.length;
      }
    },
    watch: {// 'data.length': {
      //   handler(newVal, oldVal) {
      // if (this.draggable && newVal !== oldVal) {
      // if (this.draggable) {
      //   this.$nextTick(() => {
      //     this.setSort()
      //   })
      // }
      // if (newVal) {
      //   const _data = this.formatData(this.data)
      //   this.batchId2nameForTableData(_data, this.columns, false, (data) => {
      //     this.afterUpdateTableData()
      //   })
      //   this.$refs.elTable && this.$refs.elTable.doLayout()
      // }
      //   },
      //   immediate: true,
      //   deep: false,
      // },
      // draggable(value) {
      //   if (!value) {
      //     return this.sortable.destroy()
      //   }
      //   return value && this.data.length && this.setSort()
      // },
    },
    mounted: function mounted() {
      if (this.limitMaxHeight) {
        this.calculateMaxHeight();
        this.__resizeHandler = debounce(this.calculateMaxHeight, 100);
        window.addEventListener('resize', this.__resizeHandler);
      }

      this.initQuery && this.query();
      this.draggable && this.setSort();
    },
    beforeDestroy: function beforeDestroy() {
      this.$emit('update:data', []);
      this.limitMaxHeight && window.removeEventListener('resize', this.__resizeHandler);
    },
    updated: function updated() {
      this.batchId2nameForTableData(this.data, this.columns, false);
    },
    methods: {
      handleSizeChange: function handleSizeChange(val) {
        this.pagerConfig.query.size = val; // 每页条数

        this.pagerConfig.query.page = 1; // 每页条数切换，重置当前页

        this.query();
      },
      reset: function reset() {
        this.pagerConfig.query.page = 1;
        this.query();
      },
      query: function query() {
        var _request,
            _this = this;

        if (!this.requestOptions) {
          return false;
        }

        this.loading = true;
        var _this$requestOptions = this.requestOptions,
            url = _this$requestOptions.url,
            method = _this$requestOptions.method,
            _this$requestOptions$ = _this$requestOptions.params,
            params = _this$requestOptions$ === void 0 ? {} : _this$requestOptions$,
            baseURL = _this$requestOptions.baseURL,
            _this$requestOptions$2 = _this$requestOptions.withCredentials,
            withCredentials = _this$requestOptions$2 === void 0 ? true : _this$requestOptions$2;
        var _this$pagerConfig$que = this.pagerConfig.query,
            page = _this$pagerConfig$que.page,
            size = _this$pagerConfig$que.size;
        var reqParams = this.handleParams(this.initialFormValue()); // debugger

        var reqData = Object.assign({}, reqParams, _objectSpread2({}, params));

        if (this.pager) {
          reqData['page'] = page - 1;
          reqData['size'] = size;
        }

        var dataKey = method && method.toLowerCase() == 'get' ? 'params' : 'data';
        service((_request = {
          baseURL: baseURL,
          url: url,
          method: method,
          withCredentials: withCredentials
        }, _defineProperty(_request, dataKey, reqData), _defineProperty(_request, "paramsSerializer", function paramsSerializer(params) {
          return Qs__default["default"].stringify(params, {
            arrayFormat: 'indices',
            allowDots: true
          });
        }), _request)).then(function (data) {
          var _ref = _this.dataIsDicType ? {
            content: data,
            totalElements: 0
          } : data,
              content = _ref.content,
              totalElements = _ref.totalElements;

          if (_this.cacheTotal) {
            var status = _this.cacheKeys.every(function (item) {
              return reqData[item.key] == item.init;
            });

            if (status) {
              _this.pagerConfig._totalElements = totalElements;
            }
          }

          _this.$emit('update:data', _this.formatData(content));

          if (_this.pager && totalElements > 0) {
            _this.pagerConfig.totalElements = totalElements; //this.pagerConfig.query.page++
          }
        })["finally"](function () {
          _this.loading = false;
        });
      },
      calculateMaxHeight: function calculateMaxHeight() {
        var _this2 = this;

        this.maxHeight = (document.body.clientHeight || document.documentElement.clientHeight) - 80 - 52 - 50;
        this.$nextTick(function () {
          _this2.$refs.elTable && _this2.$refs.elTable.doLayout();
        });
      },
      // 派发按钮点击事件
      handleClick: function handleClick(event, row, $index) {
        var name = '';

        if (row.nameFlag) {
          name = row.nameFlag;
          row.nameFlag = '';
          if (name == row.name) return false;
        }

        this.$emit('handleClick', event, row, $index);
      },
      // 跳转某一页
      handleCurrentChange: function handleCurrentChange(val) {
        this.pagerConfig.query.page = val; // 当前页

        this.query();
      },
      // 为default-row添加色值
      calcuRowColor: function calcuRowColor(colorType) {
        var colrMap = {
          success: '#67C23A',
          warning: '#E6A23C',
          danger: '#F56C6C',
          theme: '#FF4240'
        };
        return {
          color: colrMap[colorType] || 'inherit'
        };
      },
      // draggable
      setSort: function setSort() {
        var _self = this;

        var el = this.$refs.elTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
        this.sortable = Sortable__default["default"].create(el, {
          ghostClass: 'sortable-ghost',
          sort: true,
          setData: function setData(dataTransfer) {
            //console.log(dataTransfer)
            dataTransfer.setData('Text', '');
          },
          onUpdate: function onUpdate(
          /**Event*/
          evt) {
            // same properties as onEnd
            console.log(evt);
            removeNode(evt.item);
            insertNodeAt(evt.from, evt.item, evt.oldIndex);

            var updatePosition = function updatePosition(list) {
              return list.splice(evt.newIndex, 0, list.splice(evt.oldIndex, 1)[0]);
            };

            var newList = _toConsumableArray(_self.data);

            var oldRow = newList[evt.oldIndex];
            var targetRow = newList[evt.newIndex];
            updatePosition(newList);
            console.log(newList);

            _self.$emit('update:data', newList);

            _self.$emit('onSort', oldRow, targetRow);
          },
          onEnd: function onEnd(evt) {
            console.log(evt); // if (this.tabIndexSlot) {
            //   console.log(evt)
            //   //this.$emit('onSort', evt.oldIndex, evt.newIndex)
            // } else {
            //   const temp = this.data.slice()
            //   const targetRow = temp.splice(evt.oldIndex, 1)[0]
            //   temp.splice(evt.newIndex, 0, targetRow)
            //   this.$emit('onSort', temp)
            // }
            // this.$nextTick(() => {
            //   //this.$set(this.data, 0, targetRow)
            //   this.$emit('update:data', temp)
            // })
            //this.$set(this.data,evt.newIndex, )
            // const targetRow = this.data.splice(evt.oldIndex, 1)[0]
            // this.data.splice(evt.newIndex, 0, targetRow)
            // const temp = JSON.parse(JSON.stringify(this.data))
            // const targetRow = temp.splice(evt.oldIndex, 1)[0]
            // temp.splice(evt.newIndex, 0, targetRow)
            // this.$emit('onSort', temp)
            //const targetRow = this.data.splice(evt.oldIndex, 1)[0]
            //this.data.splice(evt.newIndex, 0, targetRow)
            //this.$refs.elTable.doLayout()
            // const temp = this.data.slice()
            // const targetRow = temp.splice(evt.oldIndex, 1)[0]
            // temp.splice(evt.newIndex, 0, targetRow)
            // this.$emit('onSort', temp)
          }
        });
      },
      etVmIndex: function etVmIndex(domIndex) {
        var indexes = this.visibleIndexes;
        var numberIndexes = indexes.length;
        return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
      },
      batchId2nameForTableData: function batchId2nameForTableData(tableData, columns, forExcel, cb) {
        var _this3 = this;

        var _tableData = forExcel ? deepClone(tableData) : tableData; // 导出的 直接赋值


        var id2name_items = columns.map(function (item) {
          if (item.type === 'id2name') {
            return {
              rowKey: item.value,
              id2name_code: item.id2name_code,
              instance: item.instance
            };
          }

          return null;
        }).filter(Boolean);
        var tasks = [];
        id2name_items.forEach(function (obj) {
          var rowKey = obj.rowKey,
              id2name_code = obj.id2name_code,
              instance = obj.instance;
          var options = instance ? _this3[id2name_code] : _this3.$store.getters.enums[id2name_code];

          if (options && Array.isArray(options)) {
            var _iterator = _createForOfIteratorHelper(_tableData),
                _step;

            try {
              var _loop = function _loop() {
                var rows = _step.value;
                var row = rows[rowKey];

                if (Array.isArray(row)) {
                  var arr = row.filter(function (v) {
                    var obj = options.find(function (o) {
                      return o.id === v;
                    });
                    return obj && obj.name;
                  });
                  arr.length > 0 && _this3.$set(rows, rowKey + '_id2name', arr.join(','));
                } else {
                  var _obj = options.find(function (o) {
                    return o.id === row;
                  });

                  _obj && _this3.$set(rows, rowKey + '_id2name', _obj.name);
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          typeof cb === 'function' && cb(null);
        });
        async__default["default"].parallel(tasks, function () {
          //console.log(err)
          typeof cb === 'function' && cb(_tableData);
        });
      },
      afterUpdateTableData: function afterUpdateTableData() {
        var _this4 = this;

        //hack  alreadyCheckedList
        console.log('afterUpdateTableData');
        this.draggable && this.$nextTick(function () {
          _this4.setSort();
        });
      },
      handleParams: function handleParams(initialVal) {
        return Object.assign({}, initialVal, this.queryParams());
      },
      handleDbClick: function handleDbClick(row, item) {
        if (item.permission && !this.$hasPermission(item.permission)) return false;

        if (!item.ifEdit || item.ifEdit(row)) {
          this.$set(row, 'nameFlag', item.value);
        }
      },
      formatImg: function formatImg(url) {
        var index = url.lastIndexOf('.');
        var ext = url.substr(index + 1);
        return settings.qiniuNotSupportExt.includes(ext) ? url : url + '?imageView2/1/w/60/h/60';
      }
    }
  };

  /* script */
  const __vue_script__$d = script$d;

  /* template */
  var __vue_render__$d = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "page-table", class: _vm.className },
      [
        _c(
          "el-table",
          _vm._g(
            _vm._b(
              {
                directives: [
                  {
                    name: "loading",
                    rawName: "v-loading",
                    value: _vm.loading,
                    expression: "loading",
                  },
                ],
                ref: "elTable",
                staticClass: "st__table",
                staticStyle: { width: "100%" },
                attrs: {
                  stripe: "",
                  "max-height": _vm.maxHeight,
                  border: "",
                  data: _vm.data,
                  "row-key": _vm.rowKey,
                  "header-row-style": { height: "50px", color: "#606266" },
                },
              },
              "el-table",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          ),
          [
            _vm.checkBox
              ? _c(
                  "el-table-column",
                  _vm._b(
                    {
                      key: "selection",
                      attrs: { type: "selection", width: "55px" },
                    },
                    "el-table-column",
                    _vm.$attrs,
                    false
                  )
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.radioCheck
              ? _c("el-table-column", {
                  attrs: {
                    label: "选择",
                    width: "55",
                    "header-align": "center",
                    align: "center",
                    fixed: _vm.columns.some(function (item) {
                      return item.fixed
                    }),
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function (scope) {
                          return [
                            _c(
                              "el-radio",
                              {
                                staticClass: "radio",
                                attrs: { label: scope.$index },
                                model: {
                                  value: _vm.radio,
                                  callback: function ($$v) {
                                    _vm.radio = $$v;
                                  },
                                  expression: "radio",
                                },
                              },
                              [_vm._v("   ")]
                            ),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    616450058
                  ),
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.tabIndex
              ? _c("el-table-column", {
                  key: "index",
                  attrs: {
                    align: "center",
                    label: "序号",
                    width: _vm.columns.length === 0 ? "" : 80,
                    fixed: _vm.columns.some(function (item) {
                      return item.fixed
                    }),
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function (scope) {
                          return [
                            _vm.tabIndexSlot
                              ? _vm._t("sort-by-index", null, {
                                  row: scope.row,
                                  $index: scope.$index,
                                })
                              : _c("span", [_vm._v(_vm._s(scope.$index + 1))]),
                          ]
                        },
                      },
                    ],
                    null,
                    true
                  ),
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.handle
              ? _c("el-table-column", {
                  key: "handle",
                  attrs: {
                    fixed: _vm.handle.fixed,
                    align: "center",
                    label: _vm.handle.label,
                    width: _vm.handle.width,
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function (scope) {
                          return [
                            _vm._l(_vm.handle.btns || [], function (item, index) {
                              return [
                                item.slot
                                  ? _vm._t("bt-" + item.event, null, {
                                      data: {
                                        item: item,
                                        row: scope.row,
                                        $index: scope.$index,
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                item.slot
                                  ? _vm._t("dy-query-btn", null, {
                                      data: {
                                        item: item,
                                        row: scope.row,
                                        $index: scope.$index,
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                !item.slot &&
                                item.popconfirm &&
                                (!item.ifRender || item.ifRender(scope.row))
                                  ? _c(
                                      "el-popconfirm",
                                      {
                                        directives: [
                                          {
                                            name: "permission",
                                            rawName: "v-permission",
                                            value: item.permission,
                                            expression: "item.permission",
                                          },
                                        ],
                                        key: index,
                                        staticClass: "popconfirm",
                                        attrs: {
                                          icon: item.icon,
                                          title: item.popTitle || "确定删除吗？",
                                        },
                                        on: {
                                          confirm: function ($event) {
                                            return _vm.handleClick(
                                              item.event,
                                              scope.row,
                                              scope.$index
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "el-button",
                                          {
                                            class: item.class,
                                            attrs: {
                                              slot: "reference",
                                              size: "mini",
                                              type: item.type,
                                              disabled: item.disabled,
                                            },
                                            slot: "reference",
                                          },
                                          [
                                            _vm._v(
                                              "\n              " +
                                                _vm._s(item.label) +
                                                "\n            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                !item.slot &&
                                !item.popconfirm &&
                                (!item.ifRender || item.ifRender(scope.row))
                                  ? _c(
                                      "el-button",
                                      {
                                        directives: [
                                          {
                                            name: "permission",
                                            rawName: "v-permission",
                                            value: item.permission,
                                            expression: "item.permission",
                                          },
                                        ],
                                        key: index,
                                        class: item.class,
                                        attrs: {
                                          size: "mini",
                                          type: item.type,
                                          icon: item.icon,
                                          disabled: item.disabled,
                                        },
                                        on: {
                                          click: function ($event) {
                                            $event.stopPropagation();
                                            return _vm.handleClick(
                                              item.event,
                                              scope.row,
                                              scope.$index
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n            " +
                                            _vm._s(item.label) +
                                            "\n          "
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            }),
                          ]
                        },
                      },
                    ],
                    null,
                    true
                  ),
                })
              : _vm._e(),
            _vm._v(" "),
            _vm._l(
              _vm.columns.filter(function (item) {
                return !item.hidden
              }),
              function (item) {
                return _c(
                  "el-table-column",
                  {
                    key: item.label,
                    attrs: {
                      "header-align": "center",
                      prop: item.value,
                      label: item.label,
                      fixed: item.fixed,
                      align: item.align || "center",
                      width: item.width,
                      "min-width": item.minWidth || "100px",
                      "show-overflow-tooltip": item.showOverflowTooltip || false,
                      sortable: item.sortable || false,
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function (scope) {
                            return [
                              item.type === "slot"
                                ? [
                                    _vm._t("col-" + item.value, null, {
                                      row: scope.row,
                                      item: item,
                                      $index: scope.$index,
                                    }),
                                    _vm._v(" "),
                                    _vm._t("dy-query-col", null, {
                                      data: {
                                        row: scope.row,
                                        item: item,
                                        $index: scope.$index,
                                      },
                                    }),
                                  ]
                                : item.type === "pipe"
                                ? _c(
                                    "span",
                                    { style: _vm.calcuRowColor(item.color) },
                                    [
                                      _vm._v(
                                        "\n          " +
                                          _vm._s(
                                            _vm.$options.filters[item.pipe](
                                              scope.row[item.value],
                                              item.pipeArg || ""
                                            )
                                          ) +
                                          "\n        "
                                      ),
                                    ]
                                  )
                                : item.type === "popover"
                                ? _c(
                                    "el-popover",
                                    {
                                      attrs: {
                                        trigger: "hover",
                                        placement: "top",
                                      },
                                    },
                                    [
                                      _c("p", { staticClass: "text-c" }, [
                                        _vm._v(_vm._s(scope.row[item.value])),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "dy-table-popover",
                                          attrs: { slot: "reference" },
                                          slot: "reference",
                                        },
                                        [
                                          _vm._v(
                                            "\n            " +
                                              _vm._s(scope.row[item.value]) +
                                              "\n          "
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                : item.type === "image" && scope.row[item.value]
                                ? _c("el-image", {
                                    staticStyle: {
                                      width: "60px",
                                      height: "60px",
                                    },
                                    attrs: {
                                      fit: "contain",
                                      src: _vm.formatImg(scope.row[item.value]),
                                      "preview-src-list": [scope.row[item.value]],
                                    },
                                  })
                                : item.type === "tag"
                                ? _c("el-tag", [
                                    _vm._v(
                                      "\n          " +
                                        _vm._s(scope.row[item.value]) +
                                        "\n        "
                                    ),
                                  ])
                                : item.type === "link"
                                ? _c(
                                    "el-link",
                                    {
                                      attrs: {
                                        type: "primary",
                                        href: scope.row[item.value],
                                        target: "_blank",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n          " +
                                          _vm._s(scope.row[item.value]) +
                                          "\n        "
                                      ),
                                    ]
                                  )
                                : item.type === "id2name"
                                ? _c(
                                    "span",
                                    [
                                      item.subtype === "tag"
                                        ? _c(
                                            "el-tag",
                                            {
                                              attrs: { type: item.tagType || "" },
                                            },
                                            [
                                              _vm._v(
                                                "\n            " +
                                                  _vm._s(
                                                    scope.row[
                                                      item.value + "_id2name"
                                                    ]
                                                  ) +
                                                  "\n          "
                                              ),
                                            ]
                                          )
                                        : item.subtype === "image" &&
                                          scope.row[item.value + "_id2name"]
                                        ? _c("el-image", {
                                            staticStyle: {
                                              width: "60px",
                                              height: "60px",
                                            },
                                            attrs: {
                                              fit: "contain",
                                              src: scope.row[
                                                item.value + "_id2name"
                                              ],
                                              "preview-src-list": [
                                                scope.row[
                                                  item.value + "_id2name"
                                                ],
                                              ],
                                            },
                                          })
                                        : [
                                            _vm._v(
                                              _vm._s(
                                                scope.row[item.value + "_id2name"]
                                              )
                                            ),
                                          ],
                                    ],
                                    2
                                  )
                                : item.type === "time"
                                ? _c("span", [
                                    _vm._v(
                                      "\n          " +
                                        _vm._s(
                                          _vm._f("parseTime")(
                                            scope.row[item.value]
                                          )
                                        ) +
                                        "\n        "
                                    ),
                                  ])
                                : item.type === "boolean"
                                ? _c(
                                    "span",
                                    { style: _vm.calcuRowColor(item.color) },
                                    [
                                      _vm._v(
                                        "\n          " +
                                          _vm._s(
                                            scope.row[item.value] ? "是" : "否"
                                          ) +
                                          "\n        "
                                      ),
                                    ]
                                  )
                                : item.type === "dbEdit"
                                ? _c(
                                    "div",
                                    {
                                      on: {
                                        dblclick: function ($event) {
                                          return _vm.handleDbClick(
                                            scope.row,
                                            item
                                          )
                                        },
                                      },
                                    },
                                    [
                                      !!scope.row.nameFlag
                                        ? _c("el-input", {
                                            directives: [
                                              {
                                                name: "focus",
                                                rawName: "v-focus",
                                              },
                                            ],
                                            attrs: { placeholder: "请输入内容" },
                                            on: {
                                              blur: function ($event) {
                                                return _vm.handleClick(
                                                  item.value,
                                                  scope.row,
                                                  scope.$index
                                                )
                                              },
                                            },
                                            model: {
                                              value: scope.row[item.value],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  scope.row,
                                                  item.value,
                                                  $$v
                                                );
                                              },
                                              expression: "scope.row[item.value]",
                                            },
                                          })
                                        : _c("span", [
                                            _vm._v(_vm._s(scope.row[item.value])),
                                          ]),
                                    ],
                                    1
                                  )
                                : _c(
                                    "span",
                                    { style: _vm.calcuRowColor(item.color) },
                                    [
                                      _vm._v(
                                        "\n          " +
                                          _vm._s(scope.row[item.value]) +
                                          "\n        "
                                      ),
                                    ]
                                  ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  [
                    _c(
                      "template",
                      { slot: "header" },
                      [
                        item.headerType === "slot"
                          ? [
                              _vm._t("header-" + item.value, null, {
                                item: item,
                              }),
                              _vm._v(" "),
                              _vm._t("dy-query-header", null, {
                                data: { item: item },
                              }),
                            ]
                          : item.header_bubble
                          ? _c(
                              "el-popover",
                              {
                                attrs: {
                                  trigger: "hover",
                                  placement: "top",
                                  width: 300,
                                },
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    attrs: { slot: "reference" },
                                    slot: "reference",
                                  },
                                  [
                                    _vm._v(
                                      "\n            " +
                                        _vm._s(item.label) +
                                        "\n            "
                                    ),
                                    _c("i", { staticClass: "el-icon-warning" }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(_vm._s(item.header_bubble_text)),
                                ]),
                              ]
                            )
                          : [_vm._v(_vm._s(item.label))],
                      ],
                      2
                    ),
                  ],
                  2
                )
              }
            ),
          ],
          2
        ),
        _vm._v(" "),
        _vm.pager
          ? [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.data.length,
                      expression: "data.length",
                    },
                  ],
                  class: ["text-c", _vm.paginationLeft ? "pagination-flex" : ""],
                  staticStyle: { "margin-top": "20px" },
                },
                [
                  _vm._t("pagination-left"),
                  _vm._v(" "),
                  _c("el-pagination", {
                    staticClass: "flex",
                    attrs: {
                      "current-page": _vm.pagerConfig.query.page,
                      "page-size": _vm.pagerConfig.query.size,
                      layout: "total,prev, pager, next, sizes, jumper",
                      total: _vm.pagerConfig.totalElements,
                      "page-sizes": [10, 20, 50, 100],
                    },
                    on: {
                      "update:currentPage": function ($event) {
                        return _vm.$set(_vm.pagerConfig.query, "page", $event)
                      },
                      "update:current-page": function ($event) {
                        return _vm.$set(_vm.pagerConfig.query, "page", $event)
                      },
                      "update:pageSize": function ($event) {
                        return _vm.$set(_vm.pagerConfig.query, "size", $event)
                      },
                      "update:page-size": function ($event) {
                        return _vm.$set(_vm.pagerConfig.query, "size", $event)
                      },
                      "current-change": _vm.handleCurrentChange,
                      "size-change": _vm.handleSizeChange,
                    },
                  }),
                ],
                2
              ),
            ]
          : _vm._e(),
      ],
      2
    )
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    const __vue_inject_styles__$d = function (inject) {
      if (!inject) return
      inject("data-v-0daf9592_0", { source: ".page-table {\n  margin-top: 10px;\n}\n.page-table .popconfirm + .popconfirm {\n  margin-left: 10px;\n}\n.page-table .el-button + .popconfirm {\n  margin-left: 10px;\n}\n.page-table .popconfirm + .el-button {\n  margin-left: 10px;\n}\n.st__table .el-table__expanded-cell {\n  padding: 10px 50px;\n}\n.dy-table-popover {\n  display: block;\n  margin: auto;\n  width: 120px;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pagination-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\DynamicTable\\index.vue","index.vue"],"names":[],"mappings":"AAqlBA;EACA,gBAAA;ACplBA;ADslBA;EACA,iBAAA;ACplBA;ADslBA;EACA,iBAAA;ACplBA;ADslBA;EACA,iBAAA;ACplBA;ADwlBA;EACA,kBAAA;ACrlBA;ADulBA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;ACplBA;ADulBA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;ACplBA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\r\n  <div class=\"page-table\" :class=\"className\">\r\n    <el-table\r\n      ref=\"elTable\"\r\n      v-loading=\"loading\"\r\n      class=\"st__table\"\r\n      stripe\r\n      v-bind=\"$attrs\"\r\n      style=\"width: 100%\"\r\n      :max-height=\"maxHeight\"\r\n      border\r\n      :data=\"data\"\r\n      :row-key=\"rowKey\"\r\n      :header-row-style=\"{ height: '50px', color: '#606266' }\"\r\n      v-on=\"$listeners\"\r\n    >\r\n      <!--多选-->\r\n      <el-table-column v-if=\"checkBox\" :key=\"'selection'\" type=\"selection\" width=\"55px\" v-bind=\"$attrs\" />\r\n      <!--单选-->\r\n      <el-table-column v-if=\"radioCheck\" label=\"选择\" width=\"55\" header-align=\"center\" align=\"center\" :fixed=\"columns.some((item) => item.fixed)\">\r\n        <template slot-scope=\"scope\">\r\n          <el-radio v-model=\"radio\" class=\"radio\" :label=\"scope.$index\"> &nbsp; </el-radio>\r\n        </template>\r\n      </el-table-column>\r\n      <!-- tabIndex -->\r\n      <el-table-column v-if=\"tabIndex\" :key=\"'index'\" align=\"center\" label=\"序号\" :width=\"columns.length === 0 ? '' : 80\" :fixed=\"columns.some((item) => item.fixed)\">\r\n        <template v-slot=\"scope\">\r\n          <slot v-if=\"tabIndexSlot\" name=\"sort-by-index\" :row=\"scope.row\" :$index=\"scope.$index\" />\r\n          <span v-else>{{ scope.$index + 1 }}</span>\r\n        </template>\r\n      </el-table-column>\r\n      <!-- handle -->\r\n      <el-table-column v-if=\"handle\" :key=\"'handle'\" :fixed=\"handle.fixed\" align=\"center\" :label=\"handle.label\" :width=\"handle.width\">\r\n        <template v-slot=\"scope\">\r\n          <template v-for=\"(item, index) in handle.btns || []\">\r\n            <!-- 自定义操作类型 -->\r\n            <slot v-if=\"item.slot\" :name=\"'bt-' + item.event\" :data=\"{ item, row: scope.row, $index: scope.$index }\" />\r\n            <!-- -->\r\n            <slot v-if=\"item.slot\" name=\"dy-query-btn\" :data=\"{ item, row: scope.row, $index: scope.$index }\" />\r\n            <!--  -->\r\n\r\n            <el-popconfirm\r\n              v-if=\"!item.slot && item.popconfirm && (!item.ifRender || item.ifRender(scope.row))\"\r\n              class=\"popconfirm\"\r\n              v-permission=\"item.permission\"\r\n              :key=\"index\"\r\n              :icon=\"item.icon\"\r\n              :title=\"item.popTitle || '确定删除吗？'\"\r\n              @confirm=\"handleClick(item.event, scope.row, scope.$index)\"\r\n            >\r\n              <el-button slot=\"reference\" size=\"mini\" :type=\"item.type\" :disabled=\"item.disabled\" :class=\"item.class\">\r\n                {{ item.label }}\r\n              </el-button>\r\n            </el-popconfirm>\r\n            <!--  -->\r\n            <el-button\r\n              v-if=\"!item.slot && !item.popconfirm && (!item.ifRender || item.ifRender(scope.row))\"\r\n              v-permission=\"item.permission\"\r\n              :key=\"index\"\r\n              size=\"mini\"\r\n              :type=\"item.type\"\r\n              :icon=\"item.icon\"\r\n              :disabled=\"item.disabled\"\r\n              :class=\"item.class\"\r\n              @click.stop=\"handleClick(item.event, scope.row, scope.$index)\"\r\n            >\r\n              {{ item.label }}\r\n            </el-button>\r\n          </template>\r\n        </template>\r\n      </el-table-column>\r\n      <el-table-column\r\n        v-for=\"item in columns.filter((item) => !item.hidden)\"\r\n        :key=\"item.label\"\r\n        header-align=\"center\"\r\n        :prop=\"item.value\"\r\n        :label=\"item.label\"\r\n        :fixed=\"item.fixed\"\r\n        :align=\"item.align || 'center'\"\r\n        :width=\"item.width\"\r\n        :min-width=\"item.minWidth || '100px'\"\r\n        :show-overflow-tooltip=\"item.showOverflowTooltip || false\"\r\n        :sortable=\"item.sortable || false\"\r\n      >\r\n        <!-- header 自定义气泡 -->\r\n        <template slot=\"header\">\r\n          <template v-if=\"item.headerType === 'slot'\">\r\n            <slot :name=\"'header-' + item.value\" :item=\"item\" />\r\n            <slot name=\"dy-query-header\" :data=\"{ item: item }\" />\r\n          </template>\r\n          <el-popover v-else-if=\"item.header_bubble\" trigger=\"hover\" placement=\"top\" :width=\"300\">\r\n            <span slot=\"reference\">\r\n              {{ item.label }}\r\n              <i class=\"el-icon-warning\"></i>\r\n            </span>\r\n            <span>{{ item.header_bubble_text }}</span>\r\n          </el-popover>\r\n          <template v-else>{{ item.label }}</template>\r\n        </template>\r\n        <!-- col -->\r\n        <template #default=\"scope\">\r\n          <!-- 父级指定模板 自定义 -->\r\n          <template v-if=\"item.type === 'slot'\">\r\n            <slot :name=\"'col-' + item.value\" :row=\"scope.row\" :item=\"item\" :$index=\"scope.$index\" />\r\n            <slot name=\"dy-query-col\" :data=\"{ row: scope.row, item: item, $index: scope.$index }\" />\r\n          </template>\r\n          <!-- pipe -->\r\n          <span v-else-if=\"item.type === 'pipe'\" :style=\"calcuRowColor(item.color)\">\r\n            {{ $options.filters[item.pipe](scope.row[item.value], item.pipeArg || '') }}\r\n          </span>\r\n          <!-- popover-->\r\n          <el-popover v-else-if=\"item.type === 'popover'\" trigger=\"hover\" placement=\"top\">\r\n            <p class=\"text-c\">{{ scope.row[item.value] }}</p>\r\n            <span slot=\"reference\" class=\"dy-table-popover\">\r\n              {{ scope.row[item.value] }}\r\n            </span>\r\n          </el-popover>\r\n          <!-- image -->\r\n          <el-image\r\n            v-else-if=\"item.type === 'image' && scope.row[item.value]\"\r\n            fit=\"contain\"\r\n            style=\"width: 60px; height: 60px\"\r\n            :src=\"formatImg(scope.row[item.value])\"\r\n            :preview-src-list=\"[scope.row[item.value]]\"\r\n          />\r\n          <!-- tag -->\r\n          <el-tag v-else-if=\"item.type === 'tag'\">\r\n            {{ scope.row[item.value] }}\r\n          </el-tag>\r\n          <!-- link -->\r\n          <el-link v-else-if=\"item.type === 'link'\" type=\"primary\" :href=\"scope.row[item.value]\" target=\"_blank\">\r\n            {{ scope.row[item.value] }}\r\n          </el-link>\r\n          <span v-else-if=\"item.type === 'id2name'\">\r\n            <el-tag v-if=\"item.subtype === 'tag'\" :type=\"item.tagType || ''\">\r\n              {{ scope.row[item.value + '_id2name'] }}\r\n            </el-tag>\r\n            <el-image\r\n              v-else-if=\"item.subtype === 'image' && scope.row[item.value + '_id2name']\"\r\n              fit=\"contain\"\r\n              style=\"width: 60px; height: 60px\"\r\n              :src=\"scope.row[item.value + '_id2name']\"\r\n              :preview-src-list=\"[scope.row[item.value + '_id2name']]\"\r\n            />\r\n            <template v-else>{{ scope.row[item.value + '_id2name'] }}</template>\r\n          </span>\r\n          <!-- time -->\r\n          <span v-else-if=\"item.type === 'time'\">\r\n            {{ scope.row[item.value] | parseTime }}\r\n          </span>\r\n          <!-- boolean -->\r\n          <span v-else-if=\"item.type === 'boolean'\" :style=\"calcuRowColor(item.color)\">\r\n            {{ scope.row[item.value] ? '是' : '否' }}\r\n          </span>\r\n          <!-- doubleClick -->\r\n          <div v-else-if=\"item.type === 'dbEdit'\" @dblclick=\"handleDbClick(scope.row, item)\">\r\n            <el-input v-if=\"!!scope.row.nameFlag\" v-focus v-model=\"scope.row[item.value]\" placeholder=\"请输入内容\" @blur=\"handleClick(item.value, scope.row, scope.$index)\"></el-input>\r\n            <span v-else>{{ scope.row[item.value] }}</span>\r\n          </div>\r\n          <!-- default -->\r\n          <span v-else :style=\"calcuRowColor(item.color)\">\r\n            {{ scope.row[item.value] }}\r\n          </span>\r\n        </template>\r\n      </el-table-column>\r\n    </el-table>\r\n    <!--  -->\r\n    <template v-if=\"pager\">\r\n      <div v-show=\"data.length\" style=\"margin-top: 20px\" :class=\"['text-c', paginationLeft ? 'pagination-flex' : '']\">\r\n        <slot name=\"pagination-left\"></slot>\r\n        <el-pagination\r\n          class=\"flex\"\r\n          :current-page.sync=\"pagerConfig.query.page\"\r\n          :page-size.sync=\"pagerConfig.query.size\"\r\n          layout=\"total,prev, pager, next, sizes, jumper\"\r\n          :total=\"pagerConfig.totalElements\"\r\n          :page-sizes=\"[10, 20, 50, 100]\"\r\n          @current-change=\"handleCurrentChange\"\r\n          @size-change=\"handleSizeChange\"\r\n        />\r\n      </div>\r\n    </template>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { debounce, deepClone } from '@/utils/index'\r\nimport Sortable from 'sortablejs'\r\nimport async from 'async'\r\nimport request from '@/utils/request'\r\nimport { insertNodeAt, removeNode } from '@/utils/helper'\r\nimport Settings from '@/settings'\r\nimport Qs from 'qs'\r\n\r\nexport default {\r\n  name: 'dynamic-table',\r\n  props: {\r\n    // 自定义类名\r\n    className: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n    // 表格字段配置\r\n    columns: {\r\n      type: Array,\r\n      default: () => []\r\n    },\r\n    // 列表数据\r\n    data: {\r\n      type: Array,\r\n      default: () => []\r\n    },\r\n    // 是否显示序号\r\n    tabIndex: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    // 是否有选择框\r\n    checkBox: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    //是否单选radio\r\n    radioCheck: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    // 操作栏配置\r\n    handle: {\r\n      type: Object,\r\n      default: null\r\n    },\r\n    /** *分页 */\r\n    pager: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    //格式化data\r\n    formatData: {\r\n      type: Function,\r\n      default: (v) => v\r\n    },\r\n    //行数据的 Key，用来优化 Table 的渲染；显示树形数据时，该属性是必填的。\r\n    rowKey: {\r\n      type: String,\r\n      default: 'id'\r\n    },\r\n    // 是否支持拖拽\r\n    draggable: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    // 限制表格高度\r\n    limitMaxHeight: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    pagination: {\r\n      type: Object,\r\n      default: () => ({})\r\n    },\r\n    // 默认init查询 当有校验条件时 必填等 默认查询\r\n    initQuery: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    requestOptions: {\r\n      type: Object,\r\n      default: null\r\n    },\r\n    initialFormValue: {\r\n      type: Function,\r\n      default: (v) => v\r\n    },\r\n    queryParams: {\r\n      type: Function,\r\n      default: (v) => v\r\n    },\r\n    tabIndexSlot: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    //该表格数据是否是数据字典格式\r\n    dataIsDicType: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    //缓存未筛选情况下totalElements总条数，在某种场景下，当有筛选情况时需要用到未筛选总条数\r\n    cacheTotal: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    //配合cacheTotal\r\n    cacheKeys: {\r\n      type: Array,\r\n      default: () => []\r\n    },\r\n    //是否开启左边分页插槽\r\n    paginationLeft: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  data() {\r\n    return {\r\n      loading: false,\r\n      TIMES: 0,\r\n      radio: null,\r\n      maxHeight: null,\r\n      pagerConfig: {\r\n        _totalElements: 0, //未筛选情况下的总条数，需要做缓存\r\n        totalElements: 0, // 总条数\r\n        //pageSizes: [10, 20, 50, 100], // 分页数量列表\r\n        query: {\r\n          // 查询条件\r\n          page: 1, // 当前页\r\n          size: 10 // 每页条数\r\n        }\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    data_length() {\r\n      return this.data.length\r\n    }\r\n  },\r\n  watch: {\r\n    // 'data.length': {\r\n    //   handler(newVal, oldVal) {\r\n    // if (this.draggable && newVal !== oldVal) {\r\n    // if (this.draggable) {\r\n    //   this.$nextTick(() => {\r\n    //     this.setSort()\r\n    //   })\r\n    // }\r\n    // if (newVal) {\r\n    //   const _data = this.formatData(this.data)\r\n    //   this.batchId2nameForTableData(_data, this.columns, false, (data) => {\r\n    //     this.afterUpdateTableData()\r\n    //   })\r\n    //   this.$refs.elTable && this.$refs.elTable.doLayout()\r\n    // }\r\n    //   },\r\n    //   immediate: true,\r\n    //   deep: false,\r\n    // },\r\n    // draggable(value) {\r\n    //   if (!value) {\r\n    //     return this.sortable.destroy()\r\n    //   }\r\n    //   return value && this.data.length && this.setSort()\r\n    // },\r\n  },\r\n  mounted() {\r\n    if (this.limitMaxHeight) {\r\n      this.calculateMaxHeight()\r\n      this.__resizeHandler = debounce(this.calculateMaxHeight, 100)\r\n      window.addEventListener('resize', this.__resizeHandler)\r\n    }\r\n    this.initQuery && this.query()\r\n    this.draggable && this.setSort()\r\n  },\r\n  beforeDestroy() {\r\n    this.$emit('update:data', [])\r\n    this.limitMaxHeight && window.removeEventListener('resize', this.__resizeHandler)\r\n  },\r\n  updated() {\r\n    this.batchId2nameForTableData(this.data, this.columns, false)\r\n  },\r\n  methods: {\r\n    handleSizeChange(val) {\r\n      this.pagerConfig.query.size = val // 每页条数\r\n      this.pagerConfig.query.page = 1 // 每页条数切换，重置当前页\r\n      this.query()\r\n    },\r\n    reset() {\r\n      this.pagerConfig.query.page = 1\r\n      this.query()\r\n    },\r\n    query() {\r\n      if (!this.requestOptions) {\r\n        return false\r\n      }\r\n      this.loading = true\r\n      let { url, method, params = {}, baseURL,withCredentials=true } = this.requestOptions\r\n      const { page, size } = this.pagerConfig.query\r\n      const reqParams = this.handleParams(this.initialFormValue())\r\n      // debugger\r\n      const reqData = Object.assign({}, reqParams, {\r\n        ...params\r\n      })\r\n      if (this.pager) {\r\n        reqData['page'] = page - 1\r\n        reqData['size'] = size\r\n      }\r\n      const dataKey = method && method.toLowerCase() == 'get' ? 'params' : 'data'\r\n      request({\r\n        baseURL,\r\n        url,\r\n        method,\r\n        withCredentials,\r\n        [dataKey]: reqData,\r\n        paramsSerializer: function (params) {\r\n          return Qs.stringify(params, {\r\n            arrayFormat: 'indices',\r\n            allowDots: true\r\n          })\r\n        }\r\n      })\r\n        .then((data) => {\r\n          let { content, totalElements } = this.dataIsDicType\r\n            ? {\r\n                content: data,\r\n                totalElements: 0\r\n              }\r\n            : data\r\n\r\n          if (this.cacheTotal) {\r\n            let status = this.cacheKeys.every((item) => reqData[item.key] == item.init)\r\n            if (status) {\r\n              this.pagerConfig._totalElements = totalElements\r\n            }\r\n          }\r\n\r\n          this.$emit('update:data', this.formatData(content))\r\n\r\n          if (this.pager && totalElements > 0) {\r\n            this.pagerConfig.totalElements = totalElements\r\n            //this.pagerConfig.query.page++\r\n          }\r\n        })\r\n        .finally(() => {\r\n          this.loading = false\r\n        })\r\n    },\r\n    calculateMaxHeight() {\r\n      this.maxHeight = (document.body.clientHeight || document.documentElement.clientHeight) - 80 - 52 - 50\r\n      this.$nextTick(() => {\r\n        this.$refs.elTable && this.$refs.elTable.doLayout()\r\n      })\r\n    },\r\n    // 派发按钮点击事件\r\n    handleClick(event, row, $index) {\r\n      let name = ''\r\n      if (row.nameFlag) {\r\n        name = row.nameFlag\r\n        row.nameFlag = ''\r\n        if (name == row.name) return false\r\n      }\r\n      this.$emit('handleClick', event, row, $index)\r\n    },\r\n    // 跳转某一页\r\n    handleCurrentChange(val) {\r\n      this.pagerConfig.query.page = val // 当前页\r\n      this.query()\r\n    },\r\n    // 为default-row添加色值\r\n    calcuRowColor(colorType) {\r\n      const colrMap = {\r\n        success: '#67C23A',\r\n        warning: '#E6A23C',\r\n        danger: '#F56C6C',\r\n        theme: '#FF4240'\r\n      }\r\n      return { color: colrMap[colorType] || 'inherit' }\r\n    },\r\n    // draggable\r\n    setSort() {\r\n      const _self = this\r\n      const el = this.$refs.elTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]\r\n      this.sortable = Sortable.create(el, {\r\n        ghostClass: 'sortable-ghost',\r\n        sort: true,\r\n        setData: function (dataTransfer) {\r\n          //console.log(dataTransfer)\r\n          dataTransfer.setData('Text', '')\r\n        },\r\n        onUpdate: function (/**Event*/ evt) {\r\n          // same properties as onEnd\r\n          console.log(evt)\r\n          removeNode(evt.item)\r\n          insertNodeAt(evt.from, evt.item, evt.oldIndex)\r\n          const updatePosition = (list) => list.splice(evt.newIndex, 0, list.splice(evt.oldIndex, 1)[0])\r\n          const newList = [..._self.data]\r\n          const oldRow = newList[evt.oldIndex]\r\n          const targetRow = newList[evt.newIndex]\r\n          updatePosition(newList)\r\n          console.log(newList)\r\n          _self.$emit('update:data', newList)\r\n          _self.$emit('onSort', oldRow, targetRow)\r\n        },\r\n        onEnd: (evt) => {\r\n          console.log(evt)\r\n          // if (this.tabIndexSlot) {\r\n          //   console.log(evt)\r\n          //   //this.$emit('onSort', evt.oldIndex, evt.newIndex)\r\n          // } else {\r\n          //   const temp = this.data.slice()\r\n          //   const targetRow = temp.splice(evt.oldIndex, 1)[0]\r\n          //   temp.splice(evt.newIndex, 0, targetRow)\r\n          //   this.$emit('onSort', temp)\r\n          // }\r\n          // this.$nextTick(() => {\r\n          //   //this.$set(this.data, 0, targetRow)\r\n          //   this.$emit('update:data', temp)\r\n          // })\r\n          //this.$set(this.data,evt.newIndex, )\r\n          // const targetRow = this.data.splice(evt.oldIndex, 1)[0]\r\n          // this.data.splice(evt.newIndex, 0, targetRow)\r\n          // const temp = JSON.parse(JSON.stringify(this.data))\r\n          // const targetRow = temp.splice(evt.oldIndex, 1)[0]\r\n          // temp.splice(evt.newIndex, 0, targetRow)\r\n          // this.$emit('onSort', temp)\r\n          //const targetRow = this.data.splice(evt.oldIndex, 1)[0]\r\n          //this.data.splice(evt.newIndex, 0, targetRow)\r\n          //this.$refs.elTable.doLayout()\r\n          // const temp = this.data.slice()\r\n          // const targetRow = temp.splice(evt.oldIndex, 1)[0]\r\n          // temp.splice(evt.newIndex, 0, targetRow)\r\n          // this.$emit('onSort', temp)\r\n        }\r\n      })\r\n    },\r\n    etVmIndex(domIndex) {\r\n      const indexes = this.visibleIndexes\r\n      const numberIndexes = indexes.length\r\n      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex]\r\n    },\r\n    batchId2nameForTableData(tableData, columns, forExcel, cb) {\r\n      const _tableData = forExcel ? deepClone(tableData) : tableData // 导出的 直接赋值\r\n      const id2name_items = columns\r\n        .map((item) => {\r\n          if (item.type === 'id2name') {\r\n            return {\r\n              rowKey: item.value,\r\n              id2name_code: item.id2name_code,\r\n              instance: item.instance\r\n            }\r\n          }\r\n          return null\r\n        })\r\n        .filter(Boolean)\r\n      const tasks = []\r\n      id2name_items.forEach((obj) => {\r\n        const { rowKey, id2name_code, instance } = obj\r\n        const options = instance ? this[id2name_code] : this.$store.getters.enums[id2name_code]\r\n        if (options && Array.isArray(options)) {\r\n          for (const rows of _tableData) {\r\n            const row = rows[rowKey]\r\n            if (Array.isArray(row)) {\r\n              const arr = row.filter((v) => {\r\n                const obj = options.find((o) => o.id === v)\r\n                return obj && obj.name\r\n              })\r\n              arr.length > 0 && this.$set(rows, rowKey + '_id2name', arr.join(','))\r\n            } else {\r\n              const obj = options.find((o) => {\r\n                return o.id === row\r\n              })\r\n              obj && this.$set(rows, rowKey + '_id2name', obj.name)\r\n            }\r\n          }\r\n        }\r\n        typeof cb === 'function' && cb(null)\r\n      })\r\n      async.parallel(tasks, () => {\r\n        //console.log(err)\r\n        typeof cb === 'function' && cb(_tableData)\r\n      })\r\n    },\r\n    afterUpdateTableData() {\r\n      //hack  alreadyCheckedList\r\n      console.log('afterUpdateTableData')\r\n      this.draggable &&\r\n        this.$nextTick(() => {\r\n          this.setSort()\r\n        })\r\n    },\r\n    handleParams(initialVal) {\r\n      return Object.assign({}, initialVal, this.queryParams())\r\n    },\r\n    handleDbClick(row, item) {\r\n      if (item.permission && !this.$hasPermission(item.permission)) return false\r\n      if (!item.ifEdit || item.ifEdit(row)) {\r\n        this.$set(row, 'nameFlag', item.value)\r\n      }\r\n    },\r\n    formatImg(url) {\r\n      let index = url.lastIndexOf('.')\r\n      let ext = url.substr(index + 1)\r\n      return Settings.qiniuNotSupportExt.includes(ext) ? url : url + '?imageView2/1/w/60/h/60'\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\">\r\n.page-table {\r\n  margin-top: 10px;\r\n\r\n  .popconfirm + .popconfirm {\r\n    margin-left: 10px;\r\n  }\r\n  .el-button + .popconfirm {\r\n    margin-left: 10px;\r\n  }\r\n  .popconfirm + .el-button {\r\n    margin-left: 10px;\r\n  }\r\n}\r\n\r\n.st__table .el-table__expanded-cell {\r\n  padding: 10px 50px;\r\n}\r\n.dy-table-popover {\r\n  display: block;\r\n  margin: auto;\r\n  width: 120px;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.pagination-flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n</style>\r\n",".page-table {\n  margin-top: 10px;\n}\n.page-table .popconfirm + .popconfirm {\n  margin-left: 10px;\n}\n.page-table .el-button + .popconfirm {\n  margin-left: 10px;\n}\n.page-table .popconfirm + .el-button {\n  margin-left: 10px;\n}\n\n.st__table .el-table__expanded-cell {\n  padding: 10px 50px;\n}\n\n.dy-table-popover {\n  display: block;\n  margin: auto;\n  width: 120px;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.pagination-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$d = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // import { isLegalKey } from '@/utils/index'
  var script$c = {
    name: 'dynamic-page',
    props: {
      pageConfig: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      isCustomSubmit: {
        type: Boolean,
        "default": false
      }
    },
    data: function data() {
      return {
        form: {},
        checkList: [],
        //多选行
        currentRow: [] //单选行

      };
    },
    computed: {
      formSchema: function formSchema() {
        return this.pageConfig.formSchema || {
          formItemList: []
        };
      },
      tableSchema: function tableSchema() {
        return this.pageConfig.tableSchema || {};
      },
      requestOptions: function requestOptions() {
        return this.pageConfig.requestOptions || {};
      },
      recordViewSchema: function recordViewSchema() {
        return this.pageConfig.recordViewSchema || null;
      }
    },
    methods: {
      //hack 第一次 请求带入初始参数
      //场景 模态框query页面 有初始值. sf的初始化value 在st调用query之后
      initialFormValue: function initialFormValue() {
        var obj = {};
        var _this$formSchema = this.formSchema,
            _this$formSchema$form = _this$formSchema.formItemList,
            formItemList = _this$formSchema$form === void 0 ? [] : _this$formSchema$form,
            _this$formSchema$form2 = _this$formSchema.formatFormValue,
            formatFormValue = _this$formSchema$form2 === void 0 ? function (v) {
          return v;
        } : _this$formSchema$form2;
        formItemList.forEach(function (item) {
          var key = item.key,
              value = item.value;
          obj[key] = value;
        });
        return formatFormValue(obj); //return obj
      },
      formatedFormValue: function formatedFormValue() {
        var _this$formSchema$form3 = this.formSchema.formatFormValue,
            formatFormValue = _this$formSchema$form3 === void 0 ? function (v) {
          return v;
        } : _this$formSchema$form3;
        return formatFormValue(this.form);
      },
      // 表格拖拽排序事件
      // onSort(data) {
      //   // console.log('11', data)
      //   this.$emit('onSort', data)
      // },
      //刷新 供调用(当前pageIndex)
      refresh: function refresh() {
        this.$refs.st.query();
      },
      //handle sf submit
      sfSubmit: function sfSubmit(value) {
        console.log(value, 'hi');
        this.$emit('submit', value);

        if (!this.isCustomSubmit) {
          this.$refs.st.reset();
        }
      },
      //handle sf reset
      reset: function reset() {
        var _this = this;

        this.$nextTick(function () {
          _this.$refs.st.reset();
        });
      },
      handleChange: function handleChange(value) {
        this.$emit('change', value);
      },
      //st check
      handleEvent: function handleEvent(evtName, data, flag) {
        switch (evtName) {
          case 'singleSelectRow':
            this.currentRow = [data];
            break;

          case 'tableCheck':
            this.checkList = data;
            break;

          case 'rowToggle':
            this.handleRowToggle(data);
            break;

          case 'allToggleInRecordView':
            this.handleAllToggleInRecordView(data, flag);
            break;
        }
      },
      //recordView模式下，处理某一行选择
      handleRowToggle: function handleRowToggle(row) {
        var rowKey = this.tableSchema.rowKey;
        var matchIndex = this.checkList.findIndex(function (item) {
          return item[rowKey] === row[rowKey];
        });

        if (matchIndex === -1) {
          this.checkList.push(row);
        } else {
          this.checkList.splice(matchIndex, 1);
        }
      },
      //recordView模式下，处理某一页全选
      handleAllToggleInRecordView: function handleAllToggleInRecordView(selection, selected) {
        var _this2 = this;

        var rowKey = this.tableSchema.rowKey;
        var matchIndex = -1;
        selection.forEach(function (row) {
          matchIndex = _this2.checkList.findIndex(function (item) {
            return item[rowKey] === row[rowKey];
          });

          if (selected && matchIndex === -1) {
            _this2.checkList.push(row);
          }

          if (!selected && matchIndex >= 0) {
            _this2.checkList.splice(matchIndex, 1);
          }
        });
      },
      // tableSchema 跨分页  查看已选项
      viewSelectedRows: function viewSelectedRows() {
        var checkList = this.checkList,
            shema = this.recordViewSchema;

        if (!shema) {
          return this.$message.error('没有配置可用的recordViewSchema');
        }

        shema.data = checkList.slice();
        this.$createModalViewCheckedRows(shema, {
          remove: this.remove,
          batchRemove: this.batchRemove
        });
      },
      remove: function remove(curRow) {
        var rowKey = this.tableSchema.rowKey; //移除缓存中的curRow

        var _index = this.checkList.findIndex(function (item) {
          return item[rowKey] === curRow[rowKey];
        });

        if (_index >= 0) {
          this.checkList.splice(_index, 1);
          this.changeRowCheckStatus(rowKey, curRow[rowKey]);
        }
      },
      batchRemove: function batchRemove(selectRows) {
        var list = this.checkList;
        var rowKey = this.tableSchema.rowKey;

        for (var j = selectRows.length - 1; j >= 0; j--) {
          for (var i = list.length - 1; i >= 0; i--) {
            if (selectRows[j][rowKey] === list[i][rowKey]) {
              this.changeRowCheckStatus(rowKey, selectRows[j][rowKey]);
              list.splice(i, 1);
            }
          }
        }
      },
      //当前st的data  匹配curRow行变更其选中状态   st.toggleRowSelection(row, selected)
      //可能第一页curTableData不存在第二页的row.id
      changeRowCheckStatus: function changeRowCheckStatus(rowKey, id) {
        var elTable = this.elTable || this.$refs.st.$children[0];
        var curTableData = elTable.data || [];
        var matchItem = curTableData.find(function (item) {
          return item[rowKey] === id;
        });
        matchItem && elTable && elTable.toggleRowSelection(matchItem, false);
      },
      getTotalElements: function getTotalElements(type) {
        if (type === 'cache') {
          return this.$refs.st.pagerConfig._totalElements;
        }

        return this.$refs.st.pagerConfig.totalElements;
      }
    }
  };

  /* script */
  const __vue_script__$c = script$c;

  /* template */
  var __vue_render__$c = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "dynamic-query-container" },
      [
        _vm._t("dy-query-top"),
        _vm._v(" "),
        _vm.formSchema.formItemList && _vm.formSchema.formItemList.length
          ? _c(
              "dynamic-form",
              {
                ref: "sf",
                attrs: { "form-config": _vm.formSchema },
                on: {
                  change: function ($event) {
                    return _vm.handleChange(arguments)
                  },
                  submit: function ($event) {
                    return _vm.sfSubmit($event)
                  },
                  reset: function ($event) {
                    return _vm.reset($event)
                  },
                },
                model: {
                  value: _vm.form,
                  callback: function ($$v) {
                    _vm.form = $$v;
                  },
                  expression: "form",
                },
              },
              [
                _c(
                  "template",
                  { slot: "sf-btns" },
                  [_vm._t("dy-query-sf-btns")],
                  2
                ),
                _vm._v(" "),
                _c(
                  "template",
                  { slot: "custom-form" },
                  [_vm._t("dy-query-custom-form")],
                  2
                ),
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.$slots["dy-query-middle"]
          ? _c("el-form", [_c("el-form-item", [_vm._t("dy-query-middle")], 2)], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.tableSchema.columns && _vm.tableSchema.columns.length
          ? _c(
              "dynamic-table",
              _vm._g(
                _vm._b(
                  {
                    ref: "st",
                    class: {
                      mt0: !(
                        _vm.formSchema.formItemList &&
                        _vm.formSchema.formItemList.length
                      ),
                    },
                    attrs: {
                      columns: _vm.tableSchema.columns,
                      "expand-columns": _vm.tableSchema.expandColumns,
                      "expand-handle": _vm.tableSchema.expandHandle,
                      "check-box": _vm.tableSchema.checkBox,
                      "record-view": _vm.tableSchema.recordView,
                      "selected-record-count": _vm.checkList.length,
                      "record-view-schema": !!_vm.recordViewSchema,
                      "row-key": _vm.tableSchema.rowKey,
                      "radio-check": _vm.tableSchema.radioCheck,
                      "tab-index": _vm.tableSchema.tabIndex,
                      data: _vm.tableSchema.data,
                      "format-data": _vm.tableSchema.formatData,
                      handle: _vm.tableSchema.handle,
                      pager: _vm.tableSchema.pager,
                      "request-options": _vm.requestOptions,
                      "query-params": _vm.formatedFormValue,
                      "already-checked-list": _vm.tableSchema.alreadyCheckedList,
                      "initial-form-value": _vm.initialFormValue,
                      height: _vm.tableSchema.height,
                      "limit-max-height": _vm.tableSchema.limitMaxHeight,
                      draggable: _vm.tableSchema.draggable,
                      "export-excel": _vm.tableSchema.exportExcel,
                      "span-method": _vm.tableSchema.spanMethod,
                      selectable: _vm.tableSchema.selectable,
                      "init-query": _vm.tableSchema.initQuery,
                      pipe: _vm.tableSchema.pipe,
                      "tab-index-slot": _vm.tableSchema.tabIndexSlot,
                      "reserve-selection": !!_vm.tableSchema.reserveSelection,
                      cacheTotal: _vm.tableSchema.cacheTotal,
                      cacheKeys: _vm.tableSchema.cacheKeys,
                      paginationLeft: _vm.tableSchema.paginationLeft,
                    },
                    on: {
                      "update:data": function ($event) {
                        return _vm.$set(_vm.tableSchema, "data", $event)
                      },
                      handleEvent: _vm.handleEvent,
                      viewSelectedRows: _vm.viewSelectedRows,
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "dy-query-header",
                          fn: function (ref) {
                            var scope = ref.data;
                            return [
                              _vm._t("header-" + scope.item.value, null, {
                                row: scope.item,
                              }),
                            ]
                          },
                        },
                        {
                          key: "dy-query-col",
                          fn: function (ref) {
                            var scope = ref.data;
                            return [
                              _vm._t("col-" + scope.item.value, null, {
                                row: scope.row,
                                index: scope.$index,
                              }),
                            ]
                          },
                        },
                        {
                          key: "dy-query-btn",
                          fn: function (ref) {
                            var scope = ref.data;
                            return [
                              _vm._t("bt-" + scope.item.event, null, {
                                data: scope,
                              }),
                            ]
                          },
                        },
                        {
                          key: "sort-by-index",
                          fn: function (ref) {
                            var row = ref.row;
                            var $index = ref.$index;
                            return [
                              _vm._t("sort-by-index", null, {
                                row: row,
                                $index: $index,
                              }),
                            ]
                          },
                        },
                        {
                          key: "pagination-left",
                          fn: function () {
                            return [_vm._t("pagination-left")]
                          },
                          proxy: true,
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  "dynamic-table",
                  _vm.$attrs,
                  false
                ),
                _vm.$listeners
              )
            )
          : _vm._e(),
        _vm._v(" "),
        _c("el-backtop", { attrs: { target: ".app-main" } }),
      ],
      2
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    const __vue_inject_styles__$c = function (inject) {
      if (!inject) return
      inject("data-v-5e9e5b89_0", { source: ".dynamic-query-container[data-v-5e9e5b89] {\n  padding: 20px;\n  height: 100%;\n  overflow-y: auto;\n}\n.page-table .el-table__body-wrapper[data-v-5e9e5b89] {\n  min-height: 600px;\n}\n.mt0[data-v-5e9e5b89] {\n  margin-top: 0;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\DynamicPage\\index.vue","index.vue"],"names":[],"mappings":"AA8QA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;AC7QA;AD+QA;EACA,iBAAA;AC5QA;AD8QA;EACA,aAAA;AC3QA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\r\n  <div class=\"dynamic-query-container\">\r\n    <slot name=\"dy-query-top\" />\r\n    <dynamic-form\r\n      v-if=\"formSchema.formItemList && formSchema.formItemList.length\"\r\n      ref=\"sf\"\r\n      v-model=\"form\"\r\n      :form-config=\"formSchema\"\r\n      @change=\"handleChange(arguments)\"\r\n      @submit=\"sfSubmit($event)\"\r\n      @reset=\"reset($event)\"\r\n    >\r\n      <template slot=\"sf-btns\">\r\n        <slot name=\"dy-query-sf-btns\" />\r\n      </template>\r\n\r\n      <!-- 自定义 form 查询选项 -->\r\n      <template slot=\"custom-form\">\r\n        <slot name=\"dy-query-custom-form\"></slot>\r\n      </template>\r\n    </dynamic-form>\r\n    <el-form v-if=\"$slots['dy-query-middle']\">\r\n      <el-form-item>\r\n        <slot name=\"dy-query-middle\" />\r\n      </el-form-item>\r\n    </el-form>\r\n    <dynamic-table\r\n      v-if=\"tableSchema.columns && tableSchema.columns.length\"\r\n      ref=\"st\"\r\n      v-bind=\"$attrs\"\r\n      :columns=\"tableSchema.columns\"\r\n      :expand-columns=\"tableSchema.expandColumns\"\r\n      :expand-handle=\"tableSchema.expandHandle\"\r\n      :check-box=\"tableSchema.checkBox\"\r\n      :record-view=\"tableSchema.recordView\"\r\n      :selected-record-count=\"checkList.length\"\r\n      :record-view-schema=\"!!recordViewSchema\"\r\n      :row-key=\"tableSchema.rowKey\"\r\n      :radio-check=\"tableSchema.radioCheck\"\r\n      :tab-index=\"tableSchema.tabIndex\"\r\n      :data.sync=\"tableSchema.data\"\r\n      :format-data=\"tableSchema.formatData\"\r\n      :handle=\"tableSchema.handle\"\r\n      :pager=\"tableSchema.pager\"\r\n      :request-options=\"requestOptions\"\r\n      :query-params=\"formatedFormValue\"\r\n      :already-checked-list=\"tableSchema.alreadyCheckedList\"\r\n      :initial-form-value=\"initialFormValue\"\r\n      :height=\"tableSchema.height\"\r\n      :limit-max-height=\"tableSchema.limitMaxHeight\"\r\n      :draggable=\"tableSchema.draggable\"\r\n      :export-excel=\"tableSchema.exportExcel\"\r\n      :class=\"{ mt0: !(formSchema.formItemList && formSchema.formItemList.length) }\"\r\n      :span-method=\"tableSchema.spanMethod\"\r\n      :selectable=\"tableSchema.selectable\"\r\n      :init-query=\"tableSchema.initQuery\"\r\n      :pipe=\"tableSchema.pipe\"\r\n      :tab-index-slot=\"tableSchema.tabIndexSlot\"\r\n      :reserve-selection=\"!!tableSchema.reserveSelection\"\r\n      :cacheTotal=\"tableSchema.cacheTotal\"\r\n      :cacheKeys=\"tableSchema.cacheKeys\"\r\n      :paginationLeft=\"tableSchema.paginationLeft\"\r\n      @handleEvent=\"handleEvent\"\r\n      @viewSelectedRows=\"viewSelectedRows\"\r\n      v-on=\"$listeners\"\r\n    >\r\n      <!-- 接受自定义header-xxx -->\r\n      <template #dy-query-header=\"{ data: scope }\">\r\n        <slot :name=\"'header-' + scope.item.value\" :row=\"scope.item\" />\r\n      </template>\r\n\r\n      <!-- 接受自定义col-xxx -->\r\n      <template #dy-query-col=\"{ data: scope }\">\r\n        <slot :name=\"'col-' + scope.item.value\" :row=\"scope.row\" :index=\"scope.$index\"/>\r\n      </template>\r\n\r\n      <!-- 接受自定义 btns -->\r\n      <template #dy-query-btn=\"{ data: scope }\">\r\n        <slot :name=\"'bt-' + scope.item.event\" :data=\"scope\" />\r\n      </template>\r\n\r\n      <!-- 接受自定义 index -->\r\n      <template #sort-by-index=\"{ row, $index }\">\r\n        <slot name=\"sort-by-index\" :row=\"row\" :$index=\"$index\" />\r\n      </template>\r\n\r\n      <template #pagination-left>\r\n        <slot name=\"pagination-left\"></slot>\r\n      </template>\r\n    </dynamic-table>\r\n    <el-backtop target=\".app-main\"></el-backtop>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n// import { isLegalKey } from '@/utils/index'\r\n\r\nexport default {\r\n  name: 'dynamic-page',\r\n  props: {\r\n    pageConfig: {\r\n      type: Object,\r\n      default: () => ({})\r\n    },\r\n    isCustomSubmit: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  data() {\r\n    return {\r\n      form: {},\r\n      checkList: [], //多选行\r\n      currentRow: [] //单选行\r\n    }\r\n  },\r\n  computed: {\r\n    formSchema() {\r\n      return this.pageConfig.formSchema || { formItemList: [] }\r\n    },\r\n    tableSchema() {\r\n      return this.pageConfig.tableSchema || {}\r\n    },\r\n    requestOptions() {\r\n      return this.pageConfig.requestOptions || {}\r\n    },\r\n    recordViewSchema() {\r\n      return this.pageConfig.recordViewSchema || null\r\n    }\r\n  },\r\n  methods: {\r\n    //hack 第一次 请求带入初始参数\r\n    //场景 模态框query页面 有初始值. sf的初始化value 在st调用query之后\r\n    initialFormValue() {\r\n      const obj = {}\r\n      const { formItemList = [], formatFormValue = v => v } = this.formSchema\r\n      formItemList.forEach(item => {\r\n        const { key, value } = item\r\n        obj[key] = value\r\n      })\r\n      return formatFormValue(obj)\r\n      //return obj\r\n    },\r\n    formatedFormValue() {\r\n      const { formatFormValue = v => v } = this.formSchema\r\n      return formatFormValue(this.form)\r\n    },\r\n    // 表格拖拽排序事件\r\n    // onSort(data) {\r\n    //   // console.log('11', data)\r\n    //   this.$emit('onSort', data)\r\n    // },\r\n    //刷新 供调用(当前pageIndex)\r\n    refresh() {\r\n      this.$refs.st.query()\r\n    },\r\n    //handle sf submit\r\n    sfSubmit(value) {\r\n      console.log(value, 'hi')\r\n      this.$emit('submit', value)\r\n      if (!this.isCustomSubmit) {\r\n        this.$refs.st.reset()\r\n      }\r\n    },\r\n\r\n    //handle sf reset\r\n    reset() {\r\n      this.$nextTick(() => {\r\n        this.$refs.st.reset()\r\n      })\r\n    },\r\n    handleChange(value) {\r\n      this.$emit('change', value)\r\n    },\r\n    //st check\r\n    handleEvent(evtName, data, flag) {\r\n      switch (evtName) {\r\n        case 'singleSelectRow':\r\n          this.currentRow = [data]\r\n          break\r\n        case 'tableCheck':\r\n          this.checkList = data\r\n          break\r\n        case 'rowToggle':\r\n          this.handleRowToggle(data)\r\n          break\r\n        case 'allToggleInRecordView':\r\n          this.handleAllToggleInRecordView(data, flag)\r\n          break\r\n        default:\r\n          break\r\n      }\r\n    },\r\n    //recordView模式下，处理某一行选择\r\n    handleRowToggle(row) {\r\n      const rowKey = this.tableSchema.rowKey\r\n      const matchIndex = this.checkList.findIndex(item => item[rowKey] === row[rowKey])\r\n      if (matchIndex === -1) {\r\n        this.checkList.push(row)\r\n      } else {\r\n        this.checkList.splice(matchIndex, 1)\r\n      }\r\n    },\r\n    //recordView模式下，处理某一页全选\r\n    handleAllToggleInRecordView(selection, selected) {\r\n      const rowKey = this.tableSchema.rowKey\r\n      let matchIndex = -1\r\n      selection.forEach(row => {\r\n        matchIndex = this.checkList.findIndex(item => item[rowKey] === row[rowKey])\r\n        if (selected && matchIndex === -1) {\r\n          this.checkList.push(row)\r\n        }\r\n        if (!selected && matchIndex >= 0) {\r\n          this.checkList.splice(matchIndex, 1)\r\n        }\r\n      })\r\n    },\r\n    // tableSchema 跨分页  查看已选项\r\n    viewSelectedRows() {\r\n      const { checkList, recordViewSchema: shema } = this\r\n      if (!shema) {\r\n        return this.$message.error('没有配置可用的recordViewSchema')\r\n      }\r\n      shema.data = checkList.slice()\r\n      this.$createModalViewCheckedRows(shema, {\r\n        remove: this.remove,\r\n        batchRemove: this.batchRemove\r\n      })\r\n    },\r\n    remove(curRow) {\r\n      const rowKey = this.tableSchema.rowKey\r\n      //移除缓存中的curRow\r\n      const _index = this.checkList.findIndex(item => item[rowKey] === curRow[rowKey])\r\n      if (_index >= 0) {\r\n        this.checkList.splice(_index, 1)\r\n        this.changeRowCheckStatus(rowKey, curRow[rowKey])\r\n      }\r\n    },\r\n    batchRemove(selectRows) {\r\n      const list = this.checkList\r\n      const rowKey = this.tableSchema.rowKey\r\n\r\n      for (var j = selectRows.length - 1; j >= 0; j--) {\r\n        for (var i = list.length - 1; i >= 0; i--) {\r\n          if (selectRows[j][rowKey] === list[i][rowKey]) {\r\n            this.changeRowCheckStatus(rowKey, selectRows[j][rowKey])\r\n            list.splice(i, 1)\r\n          }\r\n        }\r\n      }\r\n    },\r\n    //当前st的data  匹配curRow行变更其选中状态   st.toggleRowSelection(row, selected)\r\n    //可能第一页curTableData不存在第二页的row.id\r\n    changeRowCheckStatus(rowKey, id) {\r\n      const elTable = this.elTable || this.$refs.st.$children[0]\r\n      const curTableData = elTable.data || []\r\n\r\n      const matchItem = curTableData.find(item => item[rowKey] === id)\r\n      matchItem && elTable && elTable.toggleRowSelection(matchItem, false)\r\n    },\r\n    getTotalElements(type) {\r\n      if (type === 'cache') {\r\n        return this.$refs.st.pagerConfig._totalElements\r\n      }\r\n      return this.$refs.st.pagerConfig.totalElements\r\n    }\r\n  }\r\n}\r\n</script>\r\n<style lang=\"scss\" scoped>\r\n.dynamic-query-container {\r\n  padding: 20px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.page-table .el-table__body-wrapper {\r\n  min-height: 600px;\r\n}\r\n.mt0 {\r\n  margin-top: 0;\r\n}\r\n</style>\r\n",".dynamic-query-container {\n  padding: 20px;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.page-table .el-table__body-wrapper {\n  min-height: 600px;\n}\n\n.mt0 {\n  margin-top: 0;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$c = "data-v-5e9e5b89";
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$c = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  var script$b = {
    name: 'rr-checkbox',
    props: {
      options: {
        type: Array,
        require: true
      }
    },
    data: function data() {
      return {};
    },
    methods: {}
  };

  /* script */
  const __vue_script__$b = script$b;

  /* template */
  var __vue_render__$b = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-checkbox-group",
      _vm._g(_vm._b({}, "el-checkbox-group", _vm.$attrs, false), _vm.$listeners),
      _vm._l(_vm.options, function (item) {
        return _c("el-checkbox", { key: item.id, attrs: { label: item.id } }, [
          _vm._v("\n    " + _vm._s(item.name) + "\n  "),
        ])
      }),
      1
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$b = undefined;
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$b = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      false,
      undefined,
      undefined,
      undefined
    );

  function getToken(query) {
    return service({
      url: '/third/qiniu/token',
      // 假地址 自行替换
      method: 'get',
      params: query
    });
  }

  var dist = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n});},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e,o){var n=o(2);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(t.exports=n.locals);},function(t,e,o){var n=o(0);o.n(n).a;},function(t,e,o){(t.exports=o(3)(!1)).push([t.i,'\n.vue-cropper[data-v-6dae58fd] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  direction: ltr;\n  touch-action: none;\n  text-align: left;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");\n}\n.cropper-box[data-v-6dae58fd],\n.cropper-box-canvas[data-v-6dae58fd],\n.cropper-drag-box[data-v-6dae58fd],\n.cropper-crop-box[data-v-6dae58fd],\n.cropper-face[data-v-6dae58fd] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  user-select: none;\n}\n.cropper-box-canvas img[data-v-6dae58fd] {\n  position: relative;\n  text-align: left;\n  user-select: none;\n  transform: none;\n  max-width: none;\n  max-height: none;\n}\n.cropper-box[data-v-6dae58fd] {\n  overflow: hidden;\n}\n.cropper-move[data-v-6dae58fd] {\n  cursor: move;\n}\n.cropper-crop[data-v-6dae58fd] {\n  cursor: crosshair;\n}\n.cropper-modal[data-v-6dae58fd] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.cropper-crop-box[data-v-6dae58fd] {\n  /*border: 2px solid #39f;*/\n}\n.cropper-view-box[data-v-6dae58fd] {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  user-select: none;\n}\n.cropper-view-box img[data-v-6dae58fd] {\n  user-select: none;\n  text-align: left;\n  max-width: none;\n  max-height: none;\n}\n.cropper-face[data-v-6dae58fd] {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0.1;\n}\n.crop-info[data-v-6dae58fd] {\n  position: absolute;\n  left: 0px;\n  min-width: 65px;\n  text-align: center;\n  color: white;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n}\n.crop-line[data-v-6dae58fd] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n}\n.line-w[data-v-6dae58fd] {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.line-a[data-v-6dae58fd] {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.line-s[data-v-6dae58fd] {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.line-d[data-v-6dae58fd] {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.crop-point[data-v-6dae58fd] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  opacity: 0.75;\n  background-color: #39f;\n  border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n  top: -4px;\n  left: -4px;\n  cursor: nw-resize;\n}\n.point2[data-v-6dae58fd] {\n  top: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.point3[data-v-6dae58fd] {\n  top: -4px;\n  right: -4px;\n  cursor: ne-resize;\n}\n.point4[data-v-6dae58fd] {\n  top: 50%;\n  left: -4px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.point5[data-v-6dae58fd] {\n  top: 50%;\n  right: -4px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.point6[data-v-6dae58fd] {\n  bottom: -5px;\n  left: -4px;\n  cursor: sw-resize;\n}\n.point7[data-v-6dae58fd] {\n  bottom: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.point8[data-v-6dae58fd] {\n  bottom: -5px;\n  right: -4px;\n  cursor: se-resize;\n}\n@media screen and (max-width: 500px) {\n.crop-point[data-v-6dae58fd] {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    opacity: 0.45;\n    background-color: #39f;\n    border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n    top: -10px;\n    left: -10px;\n}\n.point2[data-v-6dae58fd],\n  .point4[data-v-6dae58fd],\n  .point5[data-v-6dae58fd],\n  .point7[data-v-6dae58fd] {\n    display: none;\n}\n.point3[data-v-6dae58fd] {\n    top: -10px;\n    right: -10px;\n}\n.point4[data-v-6dae58fd] {\n    top: 0;\n    left: 0;\n}\n.point6[data-v-6dae58fd] {\n    bottom: -10px;\n    left: -10px;\n}\n.point8[data-v-6dae58fd] {\n    bottom: -10px;\n    right: -10px;\n}\n}\n',""]);},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=function(t){return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),i=n.sources.map(function(t){return "/*# sourceURL="+n.sourceRoot+t+" */"});return [o].concat(i).concat([r]).join("\n")}return [o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0);}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s));}},e};},function(t,e,o){var n={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head;}catch(t){n=null;}e[t]=n;}return e[t]}}(),s=null,a=0,c=[],h=o(5);function p(t,e){for(var o=0;o<t.length;o++){var r=t[o],i=n[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(v(r.parts[s],e));}else {var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],e));n[r.id]={id:r.id,refs:1,parts:a};}}}function u(t,e){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):o.push(n[s]={id:s,parts:[a]});}return o}function l(t,e){var o=i(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),c.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else {if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,o);o.insertBefore(e,r);}}function d(t){if(null===t.parentNode)return !1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1);}function f(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){return o.nc}();n&&(t.attrs.nonce=n);}return g(e,t.attrs),l(t,e),e}function g(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o]);});}function v(t,e){var o,n,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i;}if(e.singleton){var c=a++;o=s||(s=f(e)),n=w.bind(null,o,c,!1),r=w.bind(null,o,c,!0);}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),l(t,e),e}(e),n=function(t,e,o){var n=o.css,r=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(n=h(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a);}.bind(null,o,e),r=function(){d(o),o.href&&URL.revokeObjectURL(o.href);}):(o=f(e),n=function(t,e){var o=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=o;else {for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o));}}.bind(null,o),r=function(){d(o);});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e);}else r();}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=u(t,e);return p(o,e),function(t){for(var r=[],i=0;i<o.length;i++){var s=o[i];(a=n[s.id]).refs--,r.push(a);}t&&p(u(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete n[a.id];}}}};var m=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}();function w(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else {var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i);}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})};},function(t,e,o){o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"cropper",staticClass:"vue-cropper",on:{mouseover:t.scaleImg,mouseout:t.cancelScale}},[t.imgs?o("div",{staticClass:"cropper-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}},[o("img",{ref:"cropperImg",attrs:{src:t.imgs,alt:"cropper-img"}})])]):t._e(),t._v(" "),o("div",{staticClass:"cropper-drag-box",class:{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping},on:{mousedown:t.startMove,touchstart:t.startMove}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"}},[o("span",{staticClass:"cropper-view-box"},[o("img",{style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"},attrs:{src:t.imgs,alt:"cropper-img"}})]),t._v(" "),o("span",{staticClass:"cropper-face cropper-move",on:{mousedown:t.cropMove,touchstart:t.cropMove}}),t._v(" "),t.info?o("span",{staticClass:"crop-info",style:{top:t.cropInfo.top}},[t._v(t._s(t.cropInfo.width)+" × "+t._s(t.cropInfo.height))]):t._e(),t._v(" "),t.fixedBox?t._e():o("span",[o("span",{staticClass:"crop-line line-w",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,1);},touchstart:function(e){t.changeCropSize(e,!1,!0,0,1);}}}),t._v(" "),o("span",{staticClass:"crop-line line-a",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,1,0);},touchstart:function(e){t.changeCropSize(e,!0,!1,1,0);}}}),t._v(" "),o("span",{staticClass:"crop-line line-s",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,2);},touchstart:function(e){t.changeCropSize(e,!1,!0,0,2);}}}),t._v(" "),o("span",{staticClass:"crop-line line-d",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,2,0);},touchstart:function(e){t.changeCropSize(e,!0,!1,2,0);}}}),t._v(" "),o("span",{staticClass:"crop-point point1",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,1,1);},touchstart:function(e){t.changeCropSize(e,!0,!0,1,1);}}}),t._v(" "),o("span",{staticClass:"crop-point point2",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,1);},touchstart:function(e){t.changeCropSize(e,!1,!0,0,1);}}}),t._v(" "),o("span",{staticClass:"crop-point point3",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,2,1);},touchstart:function(e){t.changeCropSize(e,!0,!0,2,1);}}}),t._v(" "),o("span",{staticClass:"crop-point point4",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,1,0);},touchstart:function(e){t.changeCropSize(e,!0,!1,1,0);}}}),t._v(" "),o("span",{staticClass:"crop-point point5",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,2,0);},touchstart:function(e){t.changeCropSize(e,!0,!1,2,0);}}}),t._v(" "),o("span",{staticClass:"crop-point point6",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,1,2);},touchstart:function(e){t.changeCropSize(e,!0,!0,1,2);}}}),t._v(" "),o("span",{staticClass:"crop-point point7",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,2);},touchstart:function(e){t.changeCropSize(e,!1,!0,0,2);}}}),t._v(" "),o("span",{staticClass:"crop-point point8",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,2,2);},touchstart:function(e){t.changeCropSize(e,!0,!0,2,2);}}})])])])};n._withStripped=!0;var r={};r.getData=function(t){return new Promise(function(e,o){var n={};(function(t){var e=null;return new Promise(function(o,n){if(t.src)if(/^data\:/i.test(t.src))e=function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var e=atob(t),o=e.length,n=new ArrayBuffer(o),r=new Uint8Array(n),i=0;i<o;i++)r[i]=e.charCodeAt(i);return n}(t.src),o(e);else if(/^blob\:/i.test(t.src)){var r=new FileReader;r.onload=function(t){e=t.target.result,o(e);},function(t,e){var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(t){200!=this.status&&0!==this.status||e(this.response);},o.send();}(t.src,function(t){r.readAsArrayBuffer(t);});}else {var i=new XMLHttpRequest;i.onload=function(){if(200!=this.status&&0!==this.status)throw "Could not load image";e=i.response,o(e),i=null;},i.open("GET",t.src,!0),i.responseType="arraybuffer",i.send(null);}else n("img error");})})(t).then(function(t){n.arrayBuffer=t,n.orientation=function(t){var e,o,n,r,i,s,a,c,h,p=new DataView(t),u=p.byteLength;if(255===p.getUint8(0)&&216===p.getUint8(1))for(c=2;c<u;){if(255===p.getUint8(c)&&225===p.getUint8(c+1)){s=c;break}c++;}s&&(o=s+10,"Exif"===function(t,e,o){var n,r="";for(n=e,o+=e;n<o;n++)r+=String.fromCharCode(t.getUint8(n));return r}(p,s+4,4)&&(i=p.getUint16(o),((r=18761===i)||19789===i)&&42===p.getUint16(o+2,r)&&(n=p.getUint32(o+4,r))>=8&&(a=o+n)));if(a)for(u=p.getUint16(a,r),h=0;h<u;h++)if(c=a+12*h+2,274===p.getUint16(c,r)){c+=8,e=p.getUint16(c,r);break}return e}(t),e(n);}).catch(function(t){o(t);});})};var i=r,s={data:function(){return {w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return [1,1]}},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:function(){return 10}}},computed:{cropInfo:function(){var t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){var e=1;this.high&&!this.full&&(e=window.devicePixelRatio),1!==this.enlarge&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale);}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:function(){var t=!!window.ActiveXObject||"ActiveXObject"in window;return t},passive:function(){return this.isIE?null:{passive:!1}}},watch:{img:function(){this.checkedImg();},imgs:function(t){""!==t&&this.reload();},cropW:function(){this.showPreview();},cropH:function(){this.showPreview();},cropOffsertX:function(){this.showPreview();},cropOffsertY:function(){this.showPreview();},scale:function(t,e){this.showPreview();},x:function(){this.showPreview();},y:function(){this.showPreview();},autoCrop:function(t){t&&this.goAutoCrop();},autoCropWidth:function(){this.autoCrop&&this.goAutoCrop();},autoCropHeight:function(){this.autoCrop&&this.goAutoCrop();},mode:function(){this.checkedImg();},rotate:function(){this.showPreview(),this.autoCrop?this.goAutoCrop(this.cropW,this.cropH):(this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH);}},methods:{getVersion:function(t){for(var e=navigator.userAgent.split(" "),o="",n=new RegExp(t,"i"),r=0;r<e.length;r++)n.test(e[r])&&(o=e[r]);return o?o.split("/")[1].split("."):["0","0","0"]},checkOrientationImage:function(t,e,o,n){var r=this;if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){var i=this.getVersion("version");i[0]>13&&i[1]>1&&(e=-1);}else {var s=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(s){var a=s[1];((a=a.split("_"))[0]>13||a[0]>=13&&a[1]>=4)&&(e=-1);}}var c=document.createElement("canvas"),h=c.getContext("2d");switch(h.save(),e){case 2:c.width=o,c.height=n,h.translate(o,0),h.scale(-1,1);break;case 3:c.width=o,c.height=n,h.translate(o/2,n/2),h.rotate(180*Math.PI/180),h.translate(-o/2,-n/2);break;case 4:c.width=o,c.height=n,h.translate(0,n),h.scale(1,-1);break;case 5:c.height=o,c.width=n,h.rotate(.5*Math.PI),h.scale(1,-1);break;case 6:c.width=n,c.height=o,h.translate(n/2,o/2),h.rotate(90*Math.PI/180),h.translate(-o/2,-n/2);break;case 7:c.height=o,c.width=n,h.rotate(.5*Math.PI),h.translate(o,-n),h.scale(-1,1);break;case 8:c.height=o,c.width=n,h.translate(n/2,o/2),h.rotate(-90*Math.PI/180),h.translate(-o/2,-n/2);break;default:c.width=o,c.height=n;}h.drawImage(t,0,0,o,n),h.restore(),c.toBlob(function(t){var e=URL.createObjectURL(t);URL.revokeObjectURL(r.imgs),r.imgs=e;},"image/"+this.outputType,1);},checkedImg:function(){var t=this;if(null===this.img||""===this.img)return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();var e=new Image;if(e.onload=function(){if(""===t.img)return t.$emit("imgLoad","error"),t.$emit("img-load","error"),!1;var o=e.width,n=e.height;i.getData(e).then(function(r){t.orientation=r.orientation||1;var i=Number(t.maxImgSize);!t.orientation&&o<i&n<i?t.imgs=t.img:(o>i&&(n=n/o*i,o=i),n>i&&(o=o/n*i,n=i),t.checkOrientationImage(e,t.orientation,o,n));});},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error");},"data"!==this.img.substr(0,4)&&(e.crossOrigin=""),this.isIE){var o=new XMLHttpRequest;o.onload=function(){var t=URL.createObjectURL(this.response);e.src=t;},o.open("GET",this.img,!0),o.responseType="blob",o.send();}else e.src=this.img;},startMove:function(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return !1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==t.touches.length&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()});}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0;},touchScale:function(t){var e=this;t.preventDefault();var o=this.scale,n=this.touches[0].clientX,r=this.touches[0].clientY,i=t.touches[0].clientX,s=t.touches[0].clientY,a=this.touches[1].clientX,c=this.touches[1].clientY,h=t.touches[1].clientX,p=t.touches[1].clientY,u=Math.sqrt(Math.pow(n-a,2)+Math.pow(r-c,2)),l=Math.sqrt(Math.pow(i-h,2)+Math.pow(s-p,2))-u,d=1,f=(d=(d=d/this.trueWidth>d/this.trueHeight?d/this.trueHeight:d/this.trueWidth)>.1?.1:d)*l;if(!this.touchNow){if(this.touchNow=!0,l>0?o+=Math.abs(f):l<0&&o>Math.abs(f)&&(o-=Math.abs(f)),this.touches=t.touches,setTimeout(function(){e.touchNow=!1;},8),!this.checkoutImgAxis(this.x,this.y,o))return !1;this.scale=o;}},cancelTouchScale:function(t){window.removeEventListener("touchmove",this.touchScale);},moveImg:function(t){var e=this;if(t.preventDefault(),t.touches&&2===t.touches.length)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;var o,n,r="clientX"in t?t.clientX:t.touches[0].clientX,i="clientY"in t?t.clientY:t.touches[0].clientY;o=r-this.moveX,n=i-this.moveY,this.$nextTick(function(){if(e.centerBox){var t,r,i,s,a=e.getImgAxis(o,n,e.scale),c=e.getCropAxis(),h=e.trueHeight*e.scale,p=e.trueWidth*e.scale;switch(e.rotate){case 1:case-1:case 3:case-3:t=e.cropOffsertX-e.trueWidth*(1-e.scale)/2+(h-p)/2,r=e.cropOffsertY-e.trueHeight*(1-e.scale)/2+(p-h)/2,i=t-h+e.cropW,s=r-p+e.cropH;break;default:t=e.cropOffsertX-e.trueWidth*(1-e.scale)/2,r=e.cropOffsertY-e.trueHeight*(1-e.scale)/2,i=t-p+e.cropW,s=r-h+e.cropH;}a.x1>=c.x1&&(o=t),a.y1>=c.y1&&(n=r),a.x2<=c.x2&&(o=i),a.y2<=c.y2&&(n=s);}e.x=o,e.y=n,e.$emit("imgMoving",{moving:!0,axis:e.getImgAxis()}),e.$emit("img-moving",{moving:!0,axis:e.getImgAxis()});});},leaveImg:function(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()});},scaleImg:function(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive);},cancelScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize);},changeSize:function(t){var e=this;t.preventDefault();var o=this.scale,n=t.deltaY||t.wheelDelta;n=navigator.userAgent.indexOf("Firefox")>0?30*n:n,this.isIE&&(n=-n);var r=this.coe,i=(r=r/this.trueWidth>r/this.trueHeight?r/this.trueHeight:r/this.trueWidth)*n;i<0?o+=Math.abs(i):o>Math.abs(i)&&(o-=Math.abs(i));var s=i<0?"add":"reduce";if(s!==this.coeStatus&&(this.coeStatus=s,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(function(){e.scaling=!1,e.coe=e.coe+=.01;},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,o))return !1;this.scale=o;},changeScale:function(t){var e=this.scale;t=t||1;var o=20;if((t*=o=o/this.trueWidth>o/this.trueHeight?o/this.trueHeight:o/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return !1;this.scale=e;},createCrop:function(t){var e=this;t.preventDefault();var o="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,n="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick(function(){var t=o-e.cropX,r=n-e.cropY;if(t>0?(e.cropW=t+e.cropChangeX>e.w?e.w-e.cropChangeX:t,e.cropOffsertX=e.cropChangeX):(e.cropW=e.w-e.cropChangeX+Math.abs(t)>e.w?e.cropChangeX:Math.abs(t),e.cropOffsertX=e.cropChangeX+t>0?e.cropChangeX+t:0),e.fixed){var i=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];i+e.cropOffsertY>e.h?(e.cropH=e.h-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0],e.cropOffsertX=t>0?e.cropChangeX:e.cropChangeX-e.cropW):e.cropH=i,e.cropOffsertY=e.cropOffsertY;}else r>0?(e.cropH=r+e.cropChangeY>e.h?e.h-e.cropChangeY:r,e.cropOffsertY=e.cropChangeY):(e.cropH=e.h-e.cropChangeY+Math.abs(r)>e.h?e.cropChangeY:Math.abs(r),e.cropOffsertY=e.cropChangeY+r>0?e.cropChangeY+r:0);});},changeCropSize:function(t,e,o,n,r){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=o,this.changeCropTypeX=n,this.changeCropTypeY=r,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH});},changeCropNow:function(t){var e=this;t.preventDefault();var o="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,n="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0,r=this.w,i=this.h,s=0,a=0;if(this.centerBox){var c=this.getImgAxis(),h=c.x2,p=c.y2;s=c.x1>0?c.x1:0,a=c.y1>0?c.y1:0,r>h&&(r=h),i>p&&(i=p);}this.$nextTick(function(){var t=o-e.cropX,c=n-e.cropY;if(e.canChangeX&&(1===e.changeCropTypeX?e.cropOldW-t>0?(e.cropW=r-e.cropChangeX-t<=r-s?e.cropOldW-t:e.cropOldW+e.cropChangeX-s,e.cropOffsertX=r-e.cropChangeX-t<=r-s?e.cropChangeX+t:s):(e.cropW=Math.abs(t)+e.cropChangeX<=r?Math.abs(t)-e.cropOldW:r-e.cropOldW-e.cropChangeX,e.cropOffsertX=e.cropChangeX+e.cropOldW):2===e.changeCropTypeX&&(e.cropOldW+t>0?(e.cropW=e.cropOldW+t+e.cropOffsertX<=r?e.cropOldW+t:r-e.cropOffsertX,e.cropOffsertX=e.cropChangeX):(e.cropW=r-e.cropChangeX+Math.abs(t+e.cropOldW)<=r-s?Math.abs(t+e.cropOldW):e.cropChangeX-s,e.cropOffsertX=r-e.cropChangeX+Math.abs(t+e.cropOldW)<=r-s?e.cropChangeX-Math.abs(t+e.cropOldW):s))),e.canChangeY&&(1===e.changeCropTypeY?e.cropOldH-c>0?(e.cropH=i-e.cropChangeY-c<=i-a?e.cropOldH-c:e.cropOldH+e.cropChangeY-a,e.cropOffsertY=i-e.cropChangeY-c<=i-a?e.cropChangeY+c:a):(e.cropH=Math.abs(c)+e.cropChangeY<=i?Math.abs(c)-e.cropOldH:i-e.cropOldH-e.cropChangeY,e.cropOffsertY=e.cropChangeY+e.cropOldH):2===e.changeCropTypeY&&(e.cropOldH+c>0?(e.cropH=e.cropOldH+c+e.cropOffsertY<=i?e.cropOldH+c:i-e.cropOffsertY,e.cropOffsertY=e.cropChangeY):(e.cropH=i-e.cropChangeY+Math.abs(c+e.cropOldH)<=i-a?Math.abs(c+e.cropOldH):e.cropChangeY-a,e.cropOffsertY=i-e.cropChangeY+Math.abs(c+e.cropOldH)<=i-a?e.cropChangeY-Math.abs(c+e.cropOldH):a))),e.canChangeX&&e.fixed){var h=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];h+e.cropOffsertY>i?(e.cropH=i-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0]):e.cropH=h;}if(e.canChangeY&&e.fixed){var p=e.cropH/e.fixedNumber[1]*e.fixedNumber[0];p+e.cropOffsertX>r?(e.cropW=r-e.cropOffsertX,e.cropH=e.cropW/e.fixedNumber[0]*e.fixedNumber[1]):e.cropW=p;}e.$emit("crop-sizing",{cropW:e.cropW,cropH:e.cropH});});},checkCropLimitSize:function(){this.cropW,this.cropH;var t=this.limitMinSize,e=new Array;return e=Array.isArray[t]?t:[t,t],[parseFloat(e[0]),parseFloat(e[1])]},changeCropEnd:function(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd);},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop);},startCrop:function(){this.crop=!0;},stopCrop:function(){this.crop=!1;},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0;},cropMove:function(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&2===t.touches.length)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);var e,o,n="clientX"in t?t.clientX:t.touches[0].clientX,r="clientY"in t?t.clientY:t.touches[0].clientY;e=n-this.cropOffsertX,o=r-this.cropOffsertY,this.cropX=e,this.cropY=o,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()});},moveCrop:function(t,e){var o=this,n=0,r=0;t&&(t.preventDefault(),n="clientX"in t?t.clientX:t.touches[0].clientX,r="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick(function(){var t,i,s=n-o.cropX,a=r-o.cropY;if(e&&(s=o.cropOffsertX,a=o.cropOffsertY),t=s<=0?0:s+o.cropW>o.w?o.w-o.cropW:s,i=a<=0?0:a+o.cropH>o.h?o.h-o.cropH:a,o.centerBox){var c=o.getImgAxis();t<=c.x1&&(t=c.x1),t+o.cropW>c.x2&&(t=c.x2-o.cropW),i<=c.y1&&(i=c.y1),i+o.cropH>c.y2&&(i=c.y2-o.cropH);}o.cropOffsertX=t,o.cropOffsertY=i,o.$emit("cropMoving",{moving:!0,axis:o.getCropAxis()}),o.$emit("crop-moving",{moving:!0,axis:o.getCropAxis()});});},getImgAxis:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.scale;var n={x1:0,x2:0,y1:0,y2:0},r=this.trueWidth*o,i=this.trueHeight*o;switch(this.rotate){case 0:n.x1=t+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=e+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o;break;case 1:case-1:case 3:case-3:n.x1=t+this.trueWidth*(1-o)/2+(r-i)/2,n.x2=n.x1+this.trueHeight*o,n.y1=e+this.trueHeight*(1-o)/2+(i-r)/2,n.y2=n.y1+this.trueWidth*o;break;default:n.x1=t+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=e+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o;}return n},getCropAxis:function(){var t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop:function(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()});},getCropChecked:function(t){var e=this,o=document.createElement("canvas"),n=new Image,r=this.rotate,i=this.trueWidth,s=this.trueHeight,a=this.cropOffsertX,c=this.cropOffsertY;function h(t,e){o.width=Math.round(t),o.height=Math.round(e);}n.onload=function(){if(0!==e.cropW){var p=o.getContext("2d"),u=1;e.high&!e.full&&(u=window.devicePixelRatio),1!==e.enlarge&!e.full&&(u=Math.abs(Number(e.enlarge)));var l=e.cropW*u,d=e.cropH*u,f=i*e.scale*u,g=s*e.scale*u,v=(e.x-a+e.trueWidth*(1-e.scale)/2)*u,m=(e.y-c+e.trueHeight*(1-e.scale)/2)*u;switch(h(l,d),p.save(),r){case 0:e.full?(h(l/e.scale,d/e.scale),p.drawImage(n,v/e.scale,m/e.scale,f/e.scale,g/e.scale)):p.drawImage(n,v,m,f,g);break;case 1:case-3:e.full?(h(l/e.scale,d/e.scale),v=v/e.scale+(f/e.scale-g/e.scale)/2,m=m/e.scale+(g/e.scale-f/e.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g/e.scale,f/e.scale,g/e.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g,f,g));break;case 2:case-2:e.full?(h(l/e.scale,d/e.scale),p.rotate(90*r*Math.PI/180),v/=e.scale,m/=e.scale,p.drawImage(n,-v-f/e.scale,-m-g/e.scale,f/e.scale,g/e.scale)):(p.rotate(90*r*Math.PI/180),p.drawImage(n,-v-f,-m-g,f,g));break;case 3:case-1:e.full?(h(l/e.scale,d/e.scale),v=v/e.scale+(f/e.scale-g/e.scale)/2,m=m/e.scale+(g/e.scale-f/e.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f/e.scale,v,f/e.scale,g/e.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f,v,f,g));break;default:e.full?(h(l/e.scale,d/e.scale),p.drawImage(n,v/e.scale,m/e.scale,f/e.scale,g/e.scale)):p.drawImage(n,v,m,f,g);}p.restore();}else {var w=i*e.scale,x=s*e.scale,C=o.getContext("2d");switch(C.save(),r){case 0:h(w,x),C.drawImage(n,0,0,w,x);break;case 1:case-3:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,0,-x,w,x);break;case 2:case-2:h(w,x),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,-x,w,x);break;case 3:case-1:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,0,w,x);break;default:h(w,x),C.drawImage(n,0,0,w,x);}C.restore();}t(o);},"data"!==this.img.substr(0,4)&&(n.crossOrigin="Anonymous"),n.src=this.imgs;},getCropData:function(t){var e=this;this.getCropChecked(function(o){t(o.toDataURL("image/"+e.outputType,e.outputSize));});},getCropBlob:function(t){var e=this;this.getCropChecked(function(o){o.toBlob(function(e){return t(e)},"image/"+e.outputType,e.outputSize);});},showPreview:function(){var t=this;if(!this.isCanShow)return !1;this.isCanShow=!1,setTimeout(function(){t.isCanShow=!0;},16);var e=this.cropW,o=this.cropH,n=this.scale,r={};r.div={width:"".concat(e,"px"),height:"".concat(o,"px")};var i=(this.x-this.cropOffsertX)/n,s=(this.y-this.cropOffsertY)/n;r.w=e,r.h=o,r.url=this.imgs,r.img={width:"".concat(this.trueWidth,"px"),height:"".concat(this.trueHeight,"px"),transform:"scale(".concat(n,")translate3d(").concat(i,"px, ").concat(s,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,"deg)")},r.html='\n      <div class="show-preview" style="width: '.concat(r.w,"px; height: ").concat(r.h,'px,; overflow: hidden">\n        <div style="width: ').concat(e,"px; height: ").concat(o,'px">\n          <img src=').concat(r.url,' style="width: ').concat(this.trueWidth,"px; height: ").concat(this.trueHeight,"px; transform:\n          scale(").concat(n,")translate3d(").concat(i,"px, ").concat(s,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,'deg)">\n        </div>\n      </div>'),this.$emit("realTime",r),this.$emit("real-time",r);},reload:function(){var t=this,e=new Image;e.onload=function(){t.w=parseFloat(window.getComputedStyle(t.$refs.cropper).width),t.h=parseFloat(window.getComputedStyle(t.$refs.cropper).height),t.trueWidth=e.width,t.trueHeight=e.height,t.original?t.scale=1:t.scale=t.checkedMode(),t.$nextTick(function(){t.x=-(t.trueWidth-t.trueWidth*t.scale)/2+(t.w-t.trueWidth*t.scale)/2,t.y=-(t.trueHeight-t.trueHeight*t.scale)/2+(t.h-t.trueHeight*t.scale)/2,t.loading=!1,t.autoCrop&&t.goAutoCrop(),t.$emit("img-load","success"),t.$emit("imgLoad","success"),setTimeout(function(){t.showPreview();},20);});},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error");},e.src=this.imgs;},checkedMode:function(){var t=1,e=(this.trueWidth,this.trueHeight),o=this.mode.split(" ");switch(o[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":(e*=t=this.w/this.trueWidth)<this.h&&(t=(e=this.h)/this.trueHeight);break;default:try{var n=o[0];if(-1!==n.search("px")){n=n.replace("px","");var r=parseFloat(n)/this.trueWidth,i=1,s=o[1];-1!==s.search("px")&&(s=s.replace("px",""),i=(e=parseFloat(s))/this.trueHeight),t=Math.min(r,i);}if(-1!==n.search("%")&&(n=n.replace("%",""),t=parseFloat(n)/100*this.w/this.trueWidth),2===o.length&&"auto"===n){var a=o[1];-1!==a.search("px")&&(a=a.replace("px",""),t=(e=parseFloat(a))/this.trueHeight),-1!==a.search("%")&&(a=a.replace("%",""),t=(e=parseFloat(a)/100*this.h)/this.trueHeight);}}catch(e){t=1;}}return t},goAutoCrop:function(t,e){if(""!==this.imgs&&null!==this.imgs){this.clearCrop(),this.cropping=!0;var o=this.w,n=this.h;if(this.centerBox){var r=Math.abs(this.rotate)%2>0,i=(r?this.trueHeight:this.trueWidth)*this.scale,s=(r?this.trueWidth:this.trueHeight)*this.scale;o=i<o?i:o,n=s<n?s:n;}var a=t||parseFloat(this.autoCropWidth),c=e||parseFloat(this.autoCropHeight);0!==a&&0!==c||(a=.8*o,c=.8*n),a=a>o?o:a,c=c>n?n:c,this.fixed&&(c=a/this.fixedNumber[0]*this.fixedNumber[1]),c>this.h&&(a=(c=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(a,c);}},changeCrop:function(t,e){var o=this;if(this.centerBox){var n=this.getImgAxis();t>n.x2-n.x1&&(e=(t=n.x2-n.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>n.y2-n.y1&&(t=(e=n.y2-n.y1)/this.fixedNumber[1]*this.fixedNumber[0]);}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick(function(){o.cropOffsertX=(o.w-o.cropW)/2,o.cropOffsertY=(o.h-o.cropH)/2,o.centerBox&&o.moveCrop(null,!0);});},refresh:function(){var t=this;this.img;this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(function(){t.checkedImg();});},rotateLeft:function(){this.rotate=this.rotate<=-3?0:this.rotate-1;},rotateRight:function(){this.rotate=this.rotate>=3?0:this.rotate+1;},rotateClear:function(){this.rotate=0;},checkoutImgAxis:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.scale;var n=!0;if(this.centerBox){var r=this.getImgAxis(t,e,o),i=this.getCropAxis();r.x1>=i.x1&&(n=!1),r.x2<=i.x2&&(n=!1),r.y1>=i.y1&&(n=!1),r.y2<=i.y2&&(n=!1);}return n}},mounted:function(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";var t=this,e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,o,n){for(var r=atob(this.toDataURL(o,n).split(",")[1]),i=r.length,s=new Uint8Array(i),a=0;a<i;a++)s[a]=r.charCodeAt(a);e(new Blob([s],{type:t.type||"image/png"}));}}),this.showPreview(),this.checkedImg();},destroyed:function(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale();}};o(1);var a=function(t,e,o,n,r,i,s,a){var c,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=o,h._compiled=!0),n&&(h.functional=!0),i&&(h._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s);},h._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot);}:r),c)if(h.functional){h._injectStyles=c;var p=h.render;h.render=function(t,e){return c.call(e),p(t,e)};}else {var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,c):[c];}return {exports:t,options:h}}(s,n,[],!1,null,"6dae58fd",null);a.options.__file="src/vue-cropper.vue";var c=a.exports;o.d(e,"VueCropper",function(){return c});var h=function(t){t.component("VueCropper",c);};"undefined"!=typeof window&&window.Vue&&h(window.Vue);e.default={version:"0.5.8",install:h,VueCropper:c,vueCropper:c};}])});

  });

  unwrapExports(dist);
  var dist_1 = dist.VueCropper;

  //
  var script$a = {
    name: 'cropper-upload',
    props: {
      fixedNumber: {
        type: Array,
        "default": function _default() {
          return [1, 1];
        }
      }
    },
    components: {
      VueCropper: dist_1
    },
    data: function data() {
      return {
        visible: false,
        previews: {},
        showPreview: false,
        crap: false,
        cropperOption: {
          img: '',
          size: 1,
          // 输出图片压缩比, 默认 1
          fixedNumber: this.fixedNumber,
          full: true,
          // 是否输出原图比例的截图
          infoTrue: true,
          // 截图信息展示是否时真实的输出宽高
          outputType: 'png',
          canScale: false,
          // 是否开启滚轮缩放大小
          canMove: false,
          // 能否拖动图片
          canMoveBox: true,
          // 能否拖动截图框
          fixed: true,
          // 固定宽高比
          fixedBox: false,
          // 截图框固定大小
          original: false,
          // 上传图片时，是否显示原始宽高
          autoCrop: true,
          // 是否自动生成截图框
          // 只有自动截图开启 宽度高度才生效
          autoCropWidth: 200,
          autoCropHeight: 200,
          centerBox: true,
          // 截图框是否限制在图片里(只有在自动生成截图框时才生效)
          high: false,
          // 是否根据 dpr 生成适合屏幕的高清图片
          cropData: {},
          enlarge: 1,
          // 按照截图框比例输出，默认 1
          mode: 'contain',
          // 图片的默认渲染方式
          maxImgSize: 2000,
          // 上传图片时图片最大大小(默认会压缩尺寸到这个大小)
          limitMinSize: [200, 200],
          // 截图框最小限制
          name: '',
          type: ''
        }
      };
    },
    computed: {
      cropper: function cropper() {
        return this.$refs.cropper;
      }
    },
    methods: {
      show: function show(file) {
        var _this = this;

        console.log(file);
        this.cropperOption.img = file.url;
        this.cropperOption.name = file.name;
        this.cropperOption.type = file.raw.type;
        this.$nextTick(function () {
          _this.visible = true;
        });
      },
      hide: function hide() {
        this.visible = false;
      },
      // 实时预览函数
      // data 中保存了需要预览的样式及 url，直接用就行了
      onRealTime: function onRealTime(data) {
        // console.log('onRealTime -> data', data);
        this.previews = data;
      },
      onImgLoad: function onImgLoad(msg) {
        console.log('onImgLoad -> msg', msg); // 图片加载完成后，获取图片的真实宽高
        // 以最小的那个值作为裁剪框默认大小

        var _this$cropper = this.cropper,
            trueWidth = _this$cropper.trueWidth,
            trueHeight = _this$cropper.trueHeight;
        var width = Math.min(trueWidth, trueHeight);
        this.cropperOption.autoCropWidth = width;
        this.cropperOption.autoCropHeight = width;
      },
      onCropMoving: function onCropMoving(data) {
        this.cropperOption.cropData = data;
      },
      onConfirm: function onConfirm() {
        var _this2 = this;

        // 获取裁剪后的 blob 数据，传递到外部
        this.$refs.cropper.getCropBlob(function (blob) {
          console.log('crop onConfirm -> blob', blob);

          _this2.hide();

          _this2.$emit('on-finish', blob, _this2.cropperOption);
        });
      },
      onCancel: function onCancel() {
        this.hide();
        this.$emit('on-cancel', this.cropperOption);
      }
    }
  };

  /* script */
  const __vue_script__$a = script$a;

  /* template */
  var __vue_render__$a = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c(
          "el-dialog",
          {
            attrs: {
              visible: _vm.visible,
              modal: false,
              title: "图片裁剪",
              width: "800px",
              "close-on-press-escape": false,
              "close-on-click-modal": false,
              "show-close": false,
            },
            on: {
              "update:visible": function ($event) {
                _vm.visible = $event;
              },
            },
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.showPreview,
                    expression: "!showPreview",
                  },
                ],
                staticClass: "crop-container",
              },
              [
                _c(
                  "div",
                  { staticClass: "crop-box" },
                  [
                    _c("vue-cropper", {
                      ref: "cropper",
                      attrs: {
                        autoCrop: _vm.cropperOption.autoCrop,
                        autoCropHeight: _vm.cropperOption.autoCropHeight,
                        autoCropWidth: _vm.cropperOption.autoCropWidth,
                        canMove: _vm.cropperOption.canMove,
                        canMoveBox: _vm.cropperOption.canMoveBox,
                        canScale: _vm.cropperOption.canScale,
                        centerBox: _vm.cropperOption.centerBox,
                        enlarge: _vm.cropperOption.enlarge,
                        fixedBox: _vm.cropperOption.fixedBox,
                        fixed: _vm.cropperOption.fixed,
                        full: _vm.cropperOption.full,
                        high: _vm.cropperOption.high,
                        img: _vm.cropperOption.img,
                        info: true,
                        infoTrue: _vm.cropperOption.infoTrue,
                        limitMinSize: _vm.cropperOption.limitMinSize,
                        maxImgSize: _vm.cropperOption.maxImgSize,
                        mode: _vm.cropperOption.mode,
                        original: _vm.cropperOption.original,
                        outputSize: _vm.cropperOption.size,
                        outputType: _vm.cropperOption.outputType,
                        fixedNumber: _vm.cropperOption.fixedNumber,
                      },
                      on: {
                        cropMoving: _vm.onCropMoving,
                        imgLoad: _vm.onImgLoad,
                        realTime: _vm.onRealTime,
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "crop-action" },
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: { click: _vm.onConfirm },
                      },
                      [_vm._v("确 定")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        on: {
                          click: function ($event) {
                            _vm.showPreview = true;
                          },
                        },
                      },
                      [_vm._v("预 览")]
                    ),
                    _vm._v(" "),
                    _c("el-button", { on: { click: _vm.onCancel } }, [
                      _vm._v("取 消"),
                    ]),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showPreview,
                    expression: "showPreview",
                  },
                ],
                staticClass: "crop-container",
              },
              [
                _c(
                  "div",
                  { staticClass: "crop-preview", style: _vm.previews.div },
                  [
                    _c("img", {
                      style: _vm.previews.img,
                      attrs: { src: _vm.previews.url, alt: "" },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "crop-action" },
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: { click: _vm.onConfirm },
                      },
                      [_vm._v("确 定")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        on: {
                          click: function ($event) {
                            _vm.showPreview = false;
                          },
                        },
                      },
                      [_vm._v("取消预览")]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$a = function (inject) {
      if (!inject) return
      inject("data-v-54dfb56a_0", { source: ".crop-container[data-v-54dfb56a] {\n  display: flex;\n  align-items: center;\n}\n.crop-box[data-v-54dfb56a] {\n  margin: 0 auto;\n  width: 700px;\n  height: 600px;\n}\n.crop-preview[data-v-54dfb56a] {\n  margin: auto;\n  border: 1px dotted #e4e4e4;\n  overflow: hidden;\n}\n.crop-action[data-v-54dfb56a] {\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.el-button[data-v-54dfb56a] {\n  width: 98px;\n  margin-bottom: 20px;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=cropper.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\UploadFile\\cropper.vue","cropper.vue"],"names":[],"mappings":"AAgIA;EACA,aAAA;EACA,mBAAA;AC/HA;ADkIA;EACA,cAAA;EACA,YAAA;EACA,aAAA;AC/HA;ADkIA;EACA,YAAA;EACA,0BAAA;EACA,gBAAA;AC/HA;ADkIA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AC/HA;ADkIA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;AC/HA;;AAEA,sCAAsC","file":"cropper.vue","sourcesContent":["<!--cropper.vue-->\r\n<template>\r\n  <div>\r\n    <el-dialog :visible.sync=\"visible\" :modal=\"false\" title=\"图片裁剪\" width=\"800px\" :close-on-press-escape=\"false\" :close-on-click-modal=\"false\" :show-close=\"false\">\r\n      <div class=\"crop-container\" v-show=\"!showPreview\">\r\n        <div class=\"crop-box\">\r\n          <vue-cropper ref=\"cropper\" :autoCrop=\"cropperOption.autoCrop\" :autoCropHeight=\"cropperOption.autoCropHeight\" :autoCropWidth=\"cropperOption.autoCropWidth\" :canMove=\"cropperOption.canMove\" :canMoveBox=\"cropperOption.canMoveBox\" :canScale=\"cropperOption.canScale\" :centerBox=\"cropperOption.centerBox\" :enlarge=\"cropperOption.enlarge\" :fixedBox=\"cropperOption.fixedBox\" :fixed=\"cropperOption.fixed\" :full=\"cropperOption.full\" :high=\"cropperOption.high\" :img=\"cropperOption.img\" :info=\"true\" :infoTrue=\"cropperOption.infoTrue\" :limitMinSize=\"cropperOption.limitMinSize\" :maxImgSize=\"cropperOption.maxImgSize\" :mode=\"cropperOption.mode\" :original=\"cropperOption.original\" :outputSize=\"cropperOption.size\" :outputType=\"cropperOption.outputType\" :fixedNumber=\"cropperOption.fixedNumber\" @cropMoving=\"onCropMoving\" @imgLoad=\"onImgLoad\" @realTime=\"onRealTime\" />\r\n        </div>\r\n        <div class=\"crop-action\">\r\n          <el-button @click=\"onConfirm\" type=\"primary\">确 定</el-button>\r\n          <el-button @click=\"showPreview = true\">预 览</el-button>\r\n          <el-button @click=\"onCancel\">取 消</el-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"crop-container\" v-show=\"showPreview\">\r\n        <div :style=\"previews.div\" class=\"crop-preview\">\r\n          <img :src=\"previews.url\" :style=\"previews.img\" alt />\r\n        </div>\r\n        <div class=\"crop-action\">\r\n          <el-button @click=\"onConfirm\" type=\"primary\">确 定</el-button>\r\n          <el-button @click=\"showPreview = false\">取消预览</el-button>\r\n        </div>\r\n      </div>\r\n    </el-dialog>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { VueCropper } from 'vue-cropper'\r\nexport default {\r\n  name: 'cropper-upload',\r\n  props: {\r\n    fixedNumber: {\r\n      type: Array,\r\n      default: () => [1, 1],\r\n    },\r\n  },\r\n  components: {\r\n    VueCropper,\r\n  },\r\n  data() {\r\n    return {\r\n      visible: false,\r\n      previews: {},\r\n      showPreview: false,\r\n      crap: false,\r\n      cropperOption: {\r\n        img: '',\r\n        size: 1, // 输出图片压缩比, 默认 1\r\n        fixedNumber: this.fixedNumber,\r\n        full: true, // 是否输出原图比例的截图\r\n        infoTrue: true, // 截图信息展示是否时真实的输出宽高\r\n        outputType: 'png',\r\n        canScale: false, // 是否开启滚轮缩放大小\r\n        canMove: false, // 能否拖动图片\r\n        canMoveBox: true, // 能否拖动截图框\r\n        fixed: true, // 固定宽高比\r\n        fixedBox: false, // 截图框固定大小\r\n        original: false, // 上传图片时，是否显示原始宽高\r\n        autoCrop: true, // 是否自动生成截图框\r\n        // 只有自动截图开启 宽度高度才生效\r\n        autoCropWidth: 200,\r\n        autoCropHeight: 200,\r\n        centerBox: true, // 截图框是否限制在图片里(只有在自动生成截图框时才生效)\r\n        high: false, // 是否根据 dpr 生成适合屏幕的高清图片\r\n        cropData: {},\r\n        enlarge: 1, // 按照截图框比例输出，默认 1\r\n        mode: 'contain', // 图片的默认渲染方式\r\n        maxImgSize: 2000, // 上传图片时图片最大大小(默认会压缩尺寸到这个大小)\r\n        limitMinSize: [200, 200], // 截图框最小限制\r\n        name: '',\r\n        type: '',\r\n      },\r\n    }\r\n  },\r\n  computed: {\r\n    cropper() {\r\n      return this.$refs.cropper\r\n    },\r\n  },\r\n  methods: {\r\n    show(file) {\r\n      console.log(file)\r\n      this.cropperOption.img = file.url\r\n      this.cropperOption.name = file.name\r\n      this.cropperOption.type = file.raw.type\r\n      this.$nextTick(() => {\r\n        this.visible = true\r\n      })\r\n    },\r\n    hide() {\r\n      this.visible = false\r\n    },\r\n    // 实时预览函数\r\n    // data 中保存了需要预览的样式及 url，直接用就行了\r\n    onRealTime(data) {\r\n      // console.log('onRealTime -> data', data);\r\n      this.previews = data\r\n    },\r\n    onImgLoad(msg) {\r\n      console.log('onImgLoad -> msg', msg)\r\n      // 图片加载完成后，获取图片的真实宽高\r\n      // 以最小的那个值作为裁剪框默认大小\r\n      const { trueWidth, trueHeight } = this.cropper\r\n      const width = Math.min(trueWidth, trueHeight)\r\n      this.cropperOption.autoCropWidth = width\r\n      this.cropperOption.autoCropHeight = width\r\n    },\r\n    onCropMoving(data) {\r\n      this.cropperOption.cropData = data\r\n    },\r\n    onConfirm() {\r\n      // 获取裁剪后的 blob 数据，传递到外部\r\n      this.$refs.cropper.getCropBlob((blob) => {\r\n        console.log('crop onConfirm -> blob', blob)\r\n        this.hide()\r\n        this.$emit('on-finish', blob, this.cropperOption)\r\n      })\r\n    },\r\n    onCancel() {\r\n      this.hide()\r\n      this.$emit('on-cancel', this.cropperOption)\r\n    },\r\n  },\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.crop-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.crop-box {\r\n  margin: 0 auto;\r\n  width: 700px;\r\n  height: 600px;\r\n}\r\n\r\n.crop-preview {\r\n  margin: auto;\r\n  border: 1px dotted #e4e4e4;\r\n  overflow: hidden;\r\n}\r\n\r\n.crop-action {\r\n  width: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.el-button {\r\n  width: 98px;\r\n  margin-bottom: 20px;\r\n  margin-left: 10px;\r\n}\r\n</style>",".crop-container {\n  display: flex;\n  align-items: center;\n}\n\n.crop-box {\n  margin: 0 auto;\n  width: 700px;\n  height: 600px;\n}\n\n.crop-preview {\n  margin: auto;\n  border: 1px dotted #e4e4e4;\n  overflow: hidden;\n}\n\n.crop-action {\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.el-button {\n  width: 98px;\n  margin-bottom: 20px;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=cropper.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$a = "data-v-54dfb56a";
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$a = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      false,
      createInjector,
      undefined,
      undefined
    );

  /* eslint-disable */
  function getError(action, option, xhr) {
    var msg;

    if (xhr.response) {
      msg = "".concat(xhr.response.error || xhr.response);
    } else if (xhr.responseText) {
      msg = "".concat(xhr.responseText);
    } else {
      msg = "fail to post ".concat(action, " ").concat(xhr.status);
    }

    var err = new Error(msg);
    err.status = xhr.status;
    err.method = 'post';
    err.url = action;
    return err;
  }

  function getBody(xhr) {
    var text = xhr.responseText || xhr.response;

    if (!text) {
      return text;
    }

    try {
      return JSON.parse(text);
    } catch (e) {
      return text;
    }
  }

  function upload(option) {
    if (typeof XMLHttpRequest === 'undefined') {
      return;
    }

    var xhr = new XMLHttpRequest();
    var action = option.action;

    if (xhr.upload) {
      xhr.upload.onprogress = function progress(e) {
        if (e.total > 0) {
          e.percent = e.loaded / e.total * 100;
        }

        option.onProgress(e);
      };
    }

    var formData = new FormData();

    if (option.data) {
      Object.keys(option.data).forEach(function (key) {
        formData.append(key, option.data[key]);
      });
    }

    formData.append(option.filename, option.file, option.file.name);

    xhr.onerror = function error(e) {
      option.onError(e);
    };

    xhr.onload = function onload() {
      if (xhr.status < 200 || xhr.status >= 300) {
        return option.onError(getError(action, option, xhr));
      }

      option.onSuccess(getBody(xhr));
    };

    xhr.onloadend = function onloadend() {
      option.onLoadend();
    };

    xhr.open('post', action, true);

    if (option.withCredentials && 'withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    var headers = option.headers || {};

    for (var item in headers) {
      if (headers.hasOwnProperty(item) && headers[item] !== null) {
        xhr.setRequestHeader(item, headers[item]);
      }
    }

    xhr.send(formData);
    return xhr;
  }

  var script$9 = {
    name: 'upload-file',
    components: {
      Cropper: __vue_component__$a
    },
    props: {
      size: {
        type: Number,
        "default": 1024 * 10
      },
      ratio: {
        type: Number,
        "default": 3,
        validator: function validator(val) {
          return val > 0;
        }
      },
      ratioTip: {
        type: String,
        "default": '宽高3 ：1'
      },
      picWidth: {
        type: Number,
        "default": 200,
        validator: function validator(val) {
          return val > 0 && Number.isInteger(val);
        }
      },
      //新增传null
      value: {
        type: [String, Array],
        "default": ''
      },
      multiple: {
        type: Boolean,
        "default": false
      },
      //是否限制文件格式
      validateSuffix: {
        type: Boolean,
        "default": true
      },
      type: {
        type: String,
        "default": 'cover'
      },
      //是否支持裁剪
      cropper: {
        type: Boolean,
        "default": false
      },
      httpRequest: {
        type: Function,
        "default": upload
      },
      onlyIdentify: {
        type: Boolean,
        "default": false
      },
      onlyShow: {
        type: Boolean,
        "default": false
      }
    },
    data: function data() {
      return {
        TIME: 0,
        dataObj: {
          token: '',
          key: ''
        },
        cropperVisible: false,
        action: 'https://up-as0.qiniup.com',
        dialogVisible: false,
        dialogImageUrl: '',
        loading: false
      };
    },
    computed: {
      tip: function tip() {
        return "".concat(this.ratioTip, "\uFF0C\u5927\u5C0F").concat(this.size / 1024, "MB\u5185,\u683C\u5F0F(JPG,PNG,GIF)");
      },
      fileList: function fileList() {
        var queryString = '?imageView2/1/w/146/h/146';
        return Array.isArray(this.value) ? this.value.map(function (item) {
          return {
            url: item.indexOf(queryString) > -1 ? item : item + queryString
          };
        }) : this.value ? [{
          url: this.value.indexOf(queryString) ? this.value : this.value + queryString
        }] : [];
      }
    },
    methods: {
      beforeUpload: function beforeUpload(file) {
        /** 是否只识别图片比例 */
        if (this.onlyIdentify) {
          file.url = URL.createObjectURL(file);

          var _self = this;

          var newImg = new Image();
          newImg.src = file.url;

          newImg.onload = function () {
            var w = this.width,
                h = this.height;

            _self.$emit('identifySuccess', {
              w: w,
              h: h
            });
          };

          return false;
        } //console.log(this.fileList.length > this.limit, 'aaa')

        /** 是否需要校验文件 */


        if (this.validateSuffix) {
          return this.uploadValid(file);
        }

        return this.beginUpload(file);
      },
      uploadValid: function uploadValid(file) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var error = _this.$message.error;
          var isLimit = file.size / 1024 < _this.size;

          if (!/(gif|jpg|jpeg|png)$/.test(file.type)) {
            error('上传图片格式不正确!');
            reject();
          }

          if (!isLimit) {
            error("\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u5FC5\u987B\u5C0F\u4E8E".concat(_this.size, "k"));
            reject();
          }

          file.url = URL.createObjectURL(file);
          var _self = _this;
          var newImg = new Image();
          newImg.src = file.url;

          newImg.onload = function () {
            var w = this.width,
                h = this.height;

            if (parseFloat(w / h).toFixed(1) !== parseFloat(_self.ratio).toFixed(1)) {
              error('图片比例不对，请重新上传');
              reject();
            } else {
              /** resolve 提供开箱操作 */
              resolve(_self.beginUpload(file));
            }
          };
        });
      },
      beginUpload: function beginUpload(file) {
        var _self = this;

        return new Promise(function (resolve) {
          var reader = new FileReader();
          var spark = new SparkMD5__namespace.ArrayBuffer();
          var sliceSize = 1024 * 1024;
          var end = sliceSize >= file.size ? file.size : sliceSize;
          var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
          reader.readAsArrayBuffer(blobSlice.call(file, 0, end));

          reader.onload = function (evt) {
            spark.append(evt.target.result);
            var params = {
              type: _self.type,
              originalFilename: spark.end() + file.name
            };
            getToken(params).then(function (response) {
              var token = response.token,
                  fileKey = response.fileKey;
              _self.dataObj['token'] = token;
              _self.dataObj['key'] = fileKey;
              resolve(file);
            });
          };
        });
      },
      handleImageSuccess: function handleImageSuccess(res) {
        console.log('what', res);
        console.log(settings.imgUrlOfImg + res.key);
        this.updateProp([].concat(_toConsumableArray(this.value), [settings.imgUrlOfImg + res.key]));
      },
      handleExceed: function handleExceed() {
        this.$message.warning("\u5F53\u524D\u9650\u5236\u9009\u62E9".concat(this.$attrs.limit, "\u4E2A\u6587\u4EF6\uFF0C\u8BF7\u5220\u9664\u5F53\u524D\u56FE\u7247\u518D\u4E0A\u4F20"));
      },
      handleRemove: function handleRemove(file, fileList) {
        console.log('en?', file);
        this.updateProp(fileList.map(function (item) {
          return item.url;
        }));
      },
      handleError: function handleError(err, file, fileList) {
        console.log(err, file, fileList);
      },
      //更新
      updateProp: function updateProp(urls) {
        if (this.multiple) {
          this.$emit('input', urls);
        } else {
          this.$emit('input', urls.pop() || '');
        }
      },
      onCropCancel: function onCropCancel(option) {
        console.log(option);
        var uploadFiles = this.$refs.elUpload.uploadFiles;
        var index = uploadFiles.findIndex(function (item) {
          return item.url === option.img;
        });
        index > -1 && uploadFiles.splice(index, 1);
      },
      onCropFinish: function onCropFinish(blob, option) {
        var _this2 = this;

        console.log(blob, option);
        var file = new File([blob], option.name, {
          type: option.type
        });
        console.log(file);
        /** 开始自定义上传，仿照element ui的处理逻辑 */

        var before = this.beforeUpload(file);

        if (before && before.then) {
          before.then(function (file) {
            _this2.post(file);
          })["finally"](function () {
            _this2.onCropCancel(option);
          });
        }
      },
      handleChange: function handleChange(file) {
        if (this.multiple && this.fileList.length + 1 > this.limit) {
          this.$message.error("\u6700\u591A\u4E0A\u4F20".concat(this.limit, "\u5F20\u56FE\u7247"));
          return false;
        }

        console.log('我来了，哈哈', this.multiple, this.fileList.length);

        if (this.cropper && file.status == 'ready') {
          this.$refs.cropper.show(file);
        }
      },

      /** 自定义上传 */
      post: function post(rawFile) {
        var _this3 = this;

        this.loading = true;
        var options = {
          file: rawFile,
          data: this.dataObj,
          action: this.action,
          filename: 'file',
          onProgress: function onProgress(e) {
            console.log(e);
          },
          onSuccess: function onSuccess(res) {
            _this3.handleImageSuccess(res);
          },
          onError: function onError(err) {
            _this3.handleError(err, rawFile);
          },
          onLoadend: function onLoadend() {
            _this3.loading = false;
          }
        };
        this.httpRequest(options);
      },
      handlePictureCardPreview: function handlePictureCardPreview(file) {
        //console.log(file)
        //debugger
        this.dialogImageUrl = file.url.split('?')[0];
        this.dialogVisible = true;
      }
    }
  };

  /* script */
  const __vue_script__$9 = script$9;

  /* template */
  var __vue_render__$9 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c(
          "el-upload",
          _vm._b(
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.loading,
                  expression: "loading",
                },
              ],
              ref: "elUpload",
              staticClass: "upload-wrap",
              attrs: {
                data: _vm.dataObj,
                action: _vm.action,
                "file-list": _vm.fileList,
                "before-upload": _vm.beforeUpload,
                "on-exceed": _vm.handleExceed,
                "on-success": _vm.handleImageSuccess,
                "on-error": _vm.handleError,
                "auto-upload": !_vm.cropper,
                "on-remove": _vm.handleRemove,
                "on-preview": _vm.handlePictureCardPreview,
                "on-change": _vm.handleChange,
                disabled: _vm.onlyShow,
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "file",
                    fn: function (ref) {
                      var file = ref.file;
                      return [_vm._t("file", null, { file: file })]
                    },
                  },
                ],
                null,
                true
              ),
            },
            "el-upload",
            _vm.$attrs,
            false
          ),
          [
            !_vm.onlyIdentify
              ? _c(
                  "div",
                  {
                    staticClass: "el-upload__tip",
                    attrs: { slot: "tip" },
                    slot: "tip",
                  },
                  [
                    _vm._t("tip", function () {
                      return [_vm._v(_vm._s(_vm.tip))]
                    }),
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._v(" "),
            _c(
              "template",
              { slot: "default" },
              [
                _vm._t("default", function () {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: {
                          size: "small",
                          type: "primary",
                          disabled: _vm.onlyShow,
                        },
                      },
                      [_vm._v("点击上传")]
                    ),
                  ]
                }),
              ],
              2
            ),
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "cropper",
          _vm._b(
            {
              ref: "cropper",
              attrs: { visible: _vm.cropperVisible },
              on: {
                "update:visible": function ($event) {
                  _vm.cropperVisible = $event;
                },
                "on-cancel": _vm.onCropCancel,
                "on-finish": _vm.onCropFinish,
              },
            },
            "cropper",
            _vm.$attrs,
            false
          )
        ),
        _vm._v(" "),
        _c(
          "el-dialog",
          {
            attrs: { visible: _vm.dialogVisible, modal: false },
            on: {
              "update:visible": function ($event) {
                _vm.dialogVisible = $event;
              },
            },
          },
          [
            _c("img", {
              attrs: { width: "100%", src: _vm.dialogImageUrl, alt: "" },
            }),
          ]
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$9 = function (inject) {
      if (!inject) return
      inject("data-v-f36dc738_0", { source: "\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["index.vue"],"names":[],"mappings":";;AAEA,oCAAoC","file":"index.vue","sourcesContent":["\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$8 = {
    name: 'rr-select',
    props: {
      options: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      //fetchMethod 的 filter
      dependence: {
        type: [String, Number, Boolean],
        "default": undefined
      },
      //@Promise 单纯从远程fetch options  比如区域依赖于cityId  但 统计类目无依赖
      fetchMethod: {
        type: Function
      },
      format: {
        type: Function,
        "default": function _default(v) {
          return v;
        }
      },
      // 异步搜索
      remote: {
        type: Boolean,
        "default": false
      },
      // 异步搜索method
      remoteMethod: {
        type: Function
      },
      //
      id2name_code: [String],
      clearable: {
        type: Boolean,
        "default": true
      },
      //只要id变化就进行id名称转换
      alwaysIdName: {
        type: Boolean,
        "default": false
      },
      large: {
        type: Boolean,
        "default": false
      },
      w: {
        type: [Number, String],
        "default": 0
      },
      //是否显示全选按钮
      showSelectAll: {
        type: Boolean,
        "default": true
      }
    },
    data: function data() {
      return {
        TIME: 0,
        id2name_time: 0,
        asyncOptions: null,
        loading: false
      };
    },
    computed: {
      curOptions: function curOptions() {
        return this.asyncOptions || this.format(this.options) || [];
      },
      width: function width() {
        return this.large ? 420 : 168;
      },
      //id2name  value
      id: function id() {
        return this.$attrs.value;
      }
    },
    watch: {
      //城市dependence  区域    场景
      dependence: {
        immediate: true,
        handler: function handler(val) {
          var _this = this;

          if ((val || val === 0) && JSON.stringify(val) !== '[]') {
            clearTimeout(this.timer);
            this.timer = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var fetchMethod, format;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _this.loading = true;
                      _this.asyncOptions = [];
                      _this.TIME && _this.$emit('input', '');
                      _context.prev = 3;
                      fetchMethod = _this.fetchMethod, format = _this.format;
                      _context.t0 = format;
                      _context.next = 8;
                      return fetchMethod(val);

                    case 8:
                      _context.t1 = _context.sent;
                      _this.asyncOptions = (0, _context.t0)(_context.t1);
                      _this.loading = false;
                      _this.TIME++;
                      _context.next = 17;
                      break;

                    case 14:
                      _context.prev = 14;
                      _context.t2 = _context["catch"](3);
                      _this.loading = false;

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[3, 14]]);
            })), 300);
          }
        }
      } // 支持异步：因为大多数场景是查详情，然后在组件内部id2name
      // id: {
      //   immediate: true,
      //   handler: function (val) {
      //     if (val && (!this.id2name_time || this.alwaysIdName)) {
      //       this.transferIdToName(val)
      //     }
      //   },
      // },

    },
    created: function created() {
      // 没有denpendence 默认查询一次
      if (this.dependence === undefined) {
        this.fetch();
      }
    },
    methods: {
      remoteFn: function remoteFn(query) {
        var _this2 = this;

        if (typeof this.remoteMethod != 'function') {
          return false;
        }

        clearTimeout(this.remoteTimer);
        this.remoteTimer = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var remoteMethod, format;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  remoteMethod = _this2.remoteMethod, format = _this2.format;
                  _context2.t0 = format;
                  _context2.next = 5;
                  return remoteMethod(query);

                case 5:
                  _context2.t1 = _context2.sent;
                  _this2.asyncOptions = (0, _context2.t0)(_context2.t1);
                  _context2.next = 12;
                  break;

                case 9:
                  _context2.prev = 9;
                  _context2.t2 = _context2["catch"](0);
                  console.error(_context2.t2);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 9]]);
        })), 100);
      },
      handleBlur: function handleBlur() {
        var _this3 = this;

        if (this.remote) {
          setTimeout(function () {
            _this3.asyncOptions = [];
          }, 400);
        }
      },
      tapSelectAll: function tapSelectAll() {
        if (this.$attrs.multiple && this.curOptions) {
          var all = this.curOptions.map(function (t) {
            return t.value;
          });
          all.length && this.$emit('input', all);
        }
      },
      tapClear: function tapClear() {
        if (this.$attrs.clear) {
          this.$emit('input', []);
        }
      },
      //
      fetch: function fetch() {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var fetchMethod, format;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _this4.loading = true;
                  _context3.prev = 1;
                  fetchMethod = _this4.fetchMethod, format = _this4.format;
                  _context3.t0 = format;
                  _context3.next = 6;
                  return fetchMethod();

                case 6:
                  _context3.t1 = _context3.sent;
                  _this4.asyncOptions = (0, _context3.t0)(_context3.t1);
                  _this4.loading = false;
                  _context3.next = 14;
                  break;

                case 11:
                  _context3.prev = 11;
                  _context3.t2 = _context3["catch"](1);
                  _this4.loading = false;

                case 14:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[1, 11]]);
        }))();
      } //场景 品牌回传一个id 需展示名称
      // transferIdToName(value) {
      //   const { id2name_code } = this
      //   if (!id2name_code) return false
      //   value &&
      //     request({
      //       url: `/id2name/trans/${id2name_code}`,
      //       method: 'POST',
      //       data: [value],
      //     })
      //       .then((data) => {
      //         this.asyncOptions = [{ label: data[value], value: value }]
      //         this.id2name_time++
      //       })
      //       .catch((err) => {})
      // },

    }
  };

  /* script */
  const __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$8 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-row",
      { staticStyle: { width: "100%" } },
      [
        _c(
          "el-select",
          _vm._g(
            _vm._b(
              {
                directives: [
                  {
                    name: "loading",
                    rawName: "v-loading",
                    value: _vm.loading,
                    expression: "loading",
                  },
                ],
                style: { width: _vm.w || _vm.width + "px" },
                attrs: {
                  clearable: _vm.clearable,
                  remote: _vm.remote,
                  "remote-method": _vm.remoteFn,
                  disabled: _vm.$attrs.disabled,
                },
              },
              "el-select",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          ),
          _vm._l(_vm.curOptions, function (o) {
            return _c("el-option", {
              key: o.id,
              attrs: { label: o.name, value: o.id, disabled: o.disabled },
            })
          }),
          1
        ),
        _vm._v(" "),
        _vm.showSelectAll && _vm.$attrs.multiple
          ? _c(
              "el-button",
              {
                staticClass: "ml20",
                attrs: {
                  type: "primary",
                  size: "mini",
                  disabled: _vm.loading || _vm.$attrs.disabled,
                },
                on: { click: _vm.tapSelectAll },
              },
              [_vm._v("全选")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.$attrs.clear
          ? _c(
              "el-button",
              {
                attrs: {
                  size: "mini",
                  disabled: _vm.loading || _vm.$attrs.disabled,
                },
                on: { click: _vm.tapClear },
              },
              [_vm._v("清空")]
            )
          : _vm._e(),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$7 = {
    name: 'template-dialog-wraper',
    props: {
      title: {
        type: String,
        "default": '提示'
      },
      disabled: {
        type: Boolean,
        "default": false
      }
    },
    data: function data() {
      return {};
    },
    created: function created() {},
    methods: {}
  };

  /* script */
  const __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$7 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "el-dialog--center", staticStyle: { height: "100%" } },
      [
        _c(
          "div",
          { staticClass: "el-dialog__header" },
          [
            _vm._t("title", function () {
              return [
                _c("span", { staticClass: "el-dialog__title" }, [
                  _vm._v(_vm._s(_vm.title)),
                ]),
              ]
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "el-dialog__headerbtn",
                attrs: { type: "button" },
                on: {
                  click: function ($event) {
                    return _vm.$parent.$emit("close")
                  },
                },
              },
              [_c("i", { staticClass: "el-dialog__close el-icon el-icon-close" })]
            ),
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "the-height el-dialog__body" },
          [_vm._t("default")],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "el-dialog__footer" },
          [
            _vm._t("footer", function () {
              return [
                _c(
                  "el-button",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.$parent.$emit("close")
                      },
                    },
                  },
                  [_vm._v("取 消")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary", disabled: _vm.disabled },
                    on: {
                      click: function ($event) {
                        return _vm.$emit("submit")
                      },
                    },
                  },
                  [_vm._v("确 定")]
                ),
              ]
            }),
          ],
          2
        ),
      ]
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = function (inject) {
      if (!inject) return
      inject("data-v-ddcf56d2_0", { source: ".the-height {\n  height: calc(100% - 120px);\n  position: relative;\n  overflow: auto;\n}\n\n/*# sourceMappingURL=TemplateDialogWraper.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\Dialog\\TemplateDialogWraper.vue","TemplateDialogWraper.vue"],"names":[],"mappings":"AA0CA;EACA,0BAAA;EACA,kBAAA;EACA,cAAA;ACzCA;;AAEA,mDAAmD","file":"TemplateDialogWraper.vue","sourcesContent":["<template>\r\n  <div style=\"height: 100%;\" class=\"el-dialog--center\">\r\n    <div class=\"el-dialog__header\">\r\n      <slot name=\"title\">\r\n        <span class=\"el-dialog__title\">{{ title }}</span>\r\n      </slot>\r\n      <button type=\"button\" class=\"el-dialog__headerbtn\" @click=\"$parent.$emit('close')\">\r\n        <i class=\"el-dialog__close el-icon el-icon-close\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"the-height el-dialog__body\">\r\n      <slot></slot>\r\n    </div>\r\n    <div class=\"el-dialog__footer\">\r\n      <slot name=\"footer\">\r\n        <el-button @click=\"$parent.$emit('close')\">取 消</el-button>\r\n        <el-button type=\"primary\" @click=\"$emit('submit')\" :disabled=\"disabled\">确 定</el-button>\r\n      </slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  name: 'template-dialog-wraper',\r\n  props: {\r\n    title: {\r\n      type: String,\r\n      default: '提示',\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    }\r\n  },\r\n  data() {\r\n    return {}\r\n  },\r\n  created() { },\r\n  methods: {},\r\n}\r\n</script>\r\n<style lang=\"scss\">\r\n.the-height {\r\n  height: calc(100% - 120px);\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n</style>\r\n",".the-height {\n  height: calc(100% - 120px);\n  position: relative;\n  overflow: auto;\n}\n\n/*# sourceMappingURL=TemplateDialogWraper.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var defalutList = [{
    text: 'star this repository',
    done: false
  }, {
    text: 'fork this repository',
    done: false
  }, {
    text: 'follow author',
    done: false
  }, {
    text: 'vue-element-admin',
    done: true
  }, {
    text: 'vue',
    done: true
  }, {
    text: 'element-ui',
    done: true
  }, {
    text: 'axios',
    done: true
  }, {
    text: 'webpack',
    done: true
  }];
  var script$6 = {
    name: 'rr-card',
    props: {
      todos: {
        type: Array,
        "default": function _default() {
          return defalutList;
        }
      }
    },
    data: function data() {
      return {};
    },
    computed: {
      allChecked: function allChecked() {
        return this.todos.every(function (todo) {
          return todo.done;
        });
      }
    },
    methods: {
      toggleTodo: function toggleTodo(val) {
        val.done = !val.done; //this.$emit('update:todos': )
      },
      toggleAll: function toggleAll(_ref) {
        var done = _ref.done;
        this.$emit('update:todos', this.todos.map(function (todo) {
          todo.done = done;
          return todo;
        }));
      }
    }
  };

  /* script */
  const __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$6 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("section", { staticClass: "todoapp" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "section",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.todos.length,
              expression: "todos.length",
            },
          ],
          staticClass: "main",
        },
        [
          _c("input", {
            staticClass: "toggle-all",
            attrs: { id: "toggle-all", type: "checkbox" },
            domProps: { checked: _vm.allChecked },
            on: {
              change: function ($event) {
                return _vm.toggleAll({ done: !_vm.allChecked })
              },
            },
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "toggle-all" } }),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "todo-list" },
            _vm._l(_vm.todos, function (todo) {
              return _c(
                "li",
                {
                  key: todo.id,
                  staticClass: "todo",
                  on: {
                    change: function ($event) {
                      return _vm.toggleTodo(todo)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "view" }, [
                    _c("input", {
                      staticClass: "toggle",
                      attrs: { type: "checkbox" },
                      domProps: { checked: todo.done },
                    }),
                    _vm._v(" "),
                    _c("label", { domProps: { textContent: _vm._s(todo.name) } }),
                  ]),
                ]
              )
            }),
            0
          ),
        ]
      ),
    ])
  };
  var __vue_staticRenderFns__$6 = [
    function () {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("header", { staticClass: "header" }, [
        _c("input", {
          staticClass: "new-todo",
          attrs: {
            autocomplete: "off",
            placeholder: "Todo List",
            value: "翻译为",
            readonly: "",
          },
        }),
      ])
    },
  ];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = function (inject) {
      if (!inject) return
      inject("data-v-2222209e_0", { source: "@charset \"UTF-8\";\n.todoapp {\n  font: 14px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n  background: #fff;\n  z-index: 1;\n  position: relative;\n  /*\n    Hack to remove background from Mobile Safari.\n    Can't use it globally since it destroys checkboxes in Firefox\n  */\n}\n.todoapp button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.todoapp :focus {\n  outline: 0;\n}\n.todoapp .hidden {\n  display: none;\n}\n.todoapp .todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todoapp .todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n.todoapp .new-todo,\n.todoapp .edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 18px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.todoapp .new-todo {\n  padding: 10px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n.todoapp .main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n.todoapp .toggle-all {\n  text-align: center;\n  border: none;\n  /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n}\n.todoapp .toggle-all + label {\n  width: 60px;\n  height: 34px;\n  font-size: 0;\n  position: absolute;\n  top: -52px;\n  left: -13px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.todoapp .toggle-all + label:before {\n  content: \"❯\";\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n.todoapp .toggle-all:checked + label:before {\n  color: #737373;\n}\n.todoapp .todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.todoapp .todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n.todoapp .todo-list li:last-child {\n  border-bottom: none;\n}\n.todoapp .todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n.todoapp .todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n}\n.todoapp .todo-list li.editing .view {\n  display: none;\n}\n.todoapp .todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n.todoapp .todo-list li .toggle {\n  opacity: 0;\n}\n.todoapp .todo-list li .toggle + label {\n  /*\n    Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n    IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n  */\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center left;\n  background-size: 36px;\n}\n.todoapp .todo-list li .toggle:checked + label {\n  background-size: 36px;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\");\n}\n.todoapp .todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 50px;\n  display: block;\n  line-height: 1;\n  font-size: 14px;\n  transition: color 0.4s;\n}\n.todoapp .todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n.todoapp .todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  transition: color 0.2s ease-out;\n  cursor: pointer;\n}\n.todoapp .todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n.todoapp .todo-list li .destroy:after {\n  content: \"×\";\n}\n.todoapp .todo-list li:hover .destroy {\n  display: block;\n}\n.todoapp .todo-list li .edit {\n  display: none;\n}\n.todoapp .todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n.todoapp .footer {\n  color: #777;\n  position: relative;\n  padding: 10px 15px;\n  height: 40px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n.todoapp .footer:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 40px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todoapp .todo-count {\n  float: left;\n  text-align: left;\n}\n.todoapp .todo-count strong {\n  font-weight: 300;\n}\n.todoapp .filters {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  list-style: none;\n}\n.todoapp .filters li {\n  display: inline;\n}\n.todoapp .filters li a {\n  color: inherit;\n  font-size: 12px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n.todoapp .filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n.todoapp .filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n.todoapp .clear-completed,\n.todoapp html .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.todoapp .clear-completed:hover {\n  text-decoration: underline;\n}\n.todoapp .info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n.todoapp .info p {\n  line-height: 1;\n}\n.todoapp .info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n.todoapp .info a:hover {\n  text-decoration: underline;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n.todoapp .toggle-all,\n.todoapp .todo-list li .toggle {\n    background: none;\n}\n.todoapp .todo-list li .toggle {\n    height: 40px;\n}\n}\n@media (max-width: 430px) {\n.todoapp .footer {\n    height: 50px;\n}\n.todoapp .filters {\n    bottom: 10px;\n}\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["index.vue"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,yDAAyD;EACzD,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,mCAAmC;EACnC,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB;;;GAGC;AACH;AACA;EACE,SAAS;EACT,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;EACd,wBAAwB;EACxB,gBAAgB;EAChB,mCAAmC;EACnC,kCAAkC;AACpC;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,4EAA4E;AAC9E;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,8BAA8B;EAC9B,0CAA0C;EAC1C,uCAAuC;EACvC,kCAAkC;AACpC;AACA;;EAEE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,YAAY;EACZ,sBAAsB;EACtB,iDAAiD;EACjD,sBAAsB;EACtB,mCAAmC;EACnC,kCAAkC;AACpC;AACA;EACE,4BAA4B;EAC5B,YAAY;EACZ,gCAAgC;EAChC,gDAAgD;AAClD;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,6BAA6B;AAC/B;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;EACd,4BAA4B;AAC9B;AACA;EACE,cAAc;AAChB;AACA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,gCAAgC;AAClC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,kEAAkE;EAClE,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,wBAAwB;EACxB,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;AACA;EACE;;;GAGC;EACD,oUAAoU;EACpU,4BAA4B;EAC5B,gCAAgC;EAChC,qBAAqB;AACvB;AACA;EACE,qBAAqB;EACrB,yaAAya;AAC3a;AACA;EACE,qBAAqB;EACrB,4BAA4B;EAC5B,cAAc;EACd,cAAc;EACd,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,SAAS;EACT,WAAW;EACX,YAAY;EACZ,cAAc;EACd,eAAe;EACf,cAAc;EACd,+BAA+B;EAC/B,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,YAAY;EACZ,gBAAgB;EAChB,4JAA4J;AAC9J;AACA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,6CAA6C;EAC7C,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,0BAA0B;AAC5B;AACA;AACE;;IAEE,gBAAgB;AAClB;AACA;IACE,YAAY;AACd;AACF;AACA;AACE;IACE,YAAY;AACd;AACA;IACE,YAAY;AACd;AACF;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["@charset \"UTF-8\";\n.todoapp {\n  font: 14px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n  background: #fff;\n  z-index: 1;\n  position: relative;\n  /*\n    Hack to remove background from Mobile Safari.\n    Can't use it globally since it destroys checkboxes in Firefox\n  */\n}\n.todoapp button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.todoapp :focus {\n  outline: 0;\n}\n.todoapp .hidden {\n  display: none;\n}\n.todoapp .todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todoapp .todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n.todoapp .new-todo,\n.todoapp .edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 18px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.todoapp .new-todo {\n  padding: 10px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n.todoapp .main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n.todoapp .toggle-all {\n  text-align: center;\n  border: none;\n  /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n}\n.todoapp .toggle-all + label {\n  width: 60px;\n  height: 34px;\n  font-size: 0;\n  position: absolute;\n  top: -52px;\n  left: -13px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.todoapp .toggle-all + label:before {\n  content: \"❯\";\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n.todoapp .toggle-all:checked + label:before {\n  color: #737373;\n}\n.todoapp .todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.todoapp .todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n.todoapp .todo-list li:last-child {\n  border-bottom: none;\n}\n.todoapp .todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n.todoapp .todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n}\n.todoapp .todo-list li.editing .view {\n  display: none;\n}\n.todoapp .todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n.todoapp .todo-list li .toggle {\n  opacity: 0;\n}\n.todoapp .todo-list li .toggle + label {\n  /*\n    Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n    IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n  */\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center left;\n  background-size: 36px;\n}\n.todoapp .todo-list li .toggle:checked + label {\n  background-size: 36px;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\");\n}\n.todoapp .todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 50px;\n  display: block;\n  line-height: 1;\n  font-size: 14px;\n  transition: color 0.4s;\n}\n.todoapp .todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n.todoapp .todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  transition: color 0.2s ease-out;\n  cursor: pointer;\n}\n.todoapp .todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n.todoapp .todo-list li .destroy:after {\n  content: \"×\";\n}\n.todoapp .todo-list li:hover .destroy {\n  display: block;\n}\n.todoapp .todo-list li .edit {\n  display: none;\n}\n.todoapp .todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n.todoapp .footer {\n  color: #777;\n  position: relative;\n  padding: 10px 15px;\n  height: 40px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n.todoapp .footer:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 40px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todoapp .todo-count {\n  float: left;\n  text-align: left;\n}\n.todoapp .todo-count strong {\n  font-weight: 300;\n}\n.todoapp .filters {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  list-style: none;\n}\n.todoapp .filters li {\n  display: inline;\n}\n.todoapp .filters li a {\n  color: inherit;\n  font-size: 12px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n.todoapp .filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n.todoapp .filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n.todoapp .clear-completed,\n.todoapp html .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.todoapp .clear-completed:hover {\n  text-decoration: underline;\n}\n.todoapp .info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n.todoapp .info p {\n  line-height: 1;\n}\n.todoapp .info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n.todoapp .info a:hover {\n  text-decoration: underline;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .todoapp .toggle-all,\n.todoapp .todo-list li .toggle {\n    background: none;\n  }\n  .todoapp .todo-list li .toggle {\n    height: 40px;\n  }\n}\n@media (max-width: 430px) {\n  .todoapp .footer {\n    height: 50px;\n  }\n  .todoapp .filters {\n    bottom: 10px;\n  }\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$5 = {
    name: 'rr-checkradio',
    props: {
      options: {
        type: Array,
        require: true
      },
      disabled: {
        type: Boolean,
        "default": false
      }
    },
    data: function data() {
      return {};
    },
    computed: {
      watchOptions: function watchOptions() {
        return this.disabled ? this.options.map(function (option) {
          option.disabled = true;
          return option;
        }) : this.options.map(function (option) {
          // eslint-disable-next-line
          if (option.hasOwnProperty('disabled')) {
            delete option.disabled;
          }

          return option;
        });
      }
    },
    methods: {}
  };

  /* script */
  const __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$5 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-radio-group",
      _vm._g(
        _vm._b({ staticClass: "rg-wrap" }, "el-radio-group", _vm.$attrs, false),
        _vm.$listeners
      ),
      _vm._l(_vm.watchOptions, function (item, index) {
        return _c(
          "div",
          { key: index, staticClass: "radio-wrap" },
          [
            item.imgUrl
              ? _c("el-image", {
                  staticClass: "radio-img",
                  attrs: { src: item.imgUrl },
                })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "el-radio",
              _vm._b(
                { attrs: { label: item.id, disabled: item.disabled } },
                "el-radio",
                _vm.$attrs,
                false
              ),
              [_vm._v("\n      " + _vm._s(item.name) + "\n    ")]
            ),
          ],
          1
        )
      }),
      0
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = function (inject) {
      if (!inject) return
      inject("data-v-0faba680_0", { source: ".rg-wrap[data-v-0faba680] {\n  line-height: 36px;\n  font-size: 14px;\n}\n.rg-wrap .radio-wrap[data-v-0faba680] {\n  display: inline-block;\n  margin-right: 40px;\n}\n.rg-wrap .radio-wrap[data-v-0faba680]:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\RrCheckRadio\\index.vue","index.vue"],"names":[],"mappings":"AAgDA;EACA,iBAAA;EACA,eAAA;AC/CA;ADgDA;EACA,qBAAA;EACA,kBAAA;AC9CA;AD+CA;EACA,eAAA;AC7CA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\r\n  <el-radio-group class=\"rg-wrap\" v-bind=\"$attrs\" v-on=\"$listeners\">\r\n    <div class=\"radio-wrap\" v-for=\"(item, index) in watchOptions\" :key=\"index\">\r\n      <el-image class=\"radio-img\" v-if=\"item.imgUrl\" :src=\"item.imgUrl\"></el-image>\r\n      <el-radio :label=\"item.id\" :disabled=\"item.disabled\" v-bind=\"$attrs\">\r\n        {{ item.name }}\r\n      </el-radio>\r\n    </div>\r\n  </el-radio-group>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'rr-checkradio',\r\n  props: {\r\n    options: {\r\n      type: Array,\r\n      require: true\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  data() {\r\n    return {}\r\n  },\r\n  computed: {\r\n    watchOptions() {\r\n      return this.disabled\r\n        ? this.options.map((option) => {\r\n            option.disabled = true\r\n            return option\r\n          })\r\n        : this.options.map((option) => {\r\n            // eslint-disable-next-line\r\n            if (option.hasOwnProperty('disabled')) {\r\n              delete option.disabled\r\n            }\r\n            return option\r\n          })\r\n    }\r\n  },\r\n  methods: {}\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.rg-wrap {\r\n  line-height: 36px;\r\n  font-size: 14px;\r\n  .radio-wrap {\r\n    display: inline-block;\r\n    margin-right: 40px;\r\n    &:last-child {\r\n      margin-right: 0;\r\n    }\r\n  }\r\n}\r\n</style>\r\n",".rg-wrap {\n  line-height: 36px;\n  font-size: 14px;\n}\n.rg-wrap .radio-wrap {\n  display: inline-block;\n  margin-right: 40px;\n}\n.rg-wrap .radio-wrap:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$5 = "data-v-0faba680";
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      createInjector,
      undefined,
      undefined
    );

  function getDevtoolsGlobalHook() {
      return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
      // @ts-ignore
      return (typeof navigator !== 'undefined' && typeof window !== 'undefined')
          ? window
          : typeof global !== 'undefined'
              ? global
              : {};
  }
  const isProxyAvailable = typeof Proxy === 'function';

  const HOOK_SETUP = 'devtools-plugin:setup';
  const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

  let supported;
  let perf;
  function isPerformanceSupported() {
      var _a;
      if (supported !== undefined) {
          return supported;
      }
      if (typeof window !== 'undefined' && window.performance) {
          supported = true;
          perf = window.performance;
      }
      else if (typeof global !== 'undefined' && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
          supported = true;
          perf = global.perf_hooks.performance;
      }
      else {
          supported = false;
      }
      return supported;
  }
  function now() {
      return isPerformanceSupported() ? perf.now() : Date.now();
  }

  class ApiProxy {
      constructor(plugin, hook) {
          this.target = null;
          this.targetQueue = [];
          this.onQueue = [];
          this.plugin = plugin;
          this.hook = hook;
          const defaultSettings = {};
          if (plugin.settings) {
              for (const id in plugin.settings) {
                  const item = plugin.settings[id];
                  defaultSettings[id] = item.defaultValue;
              }
          }
          const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
          let currentSettings = Object.assign({}, defaultSettings);
          try {
              const raw = localStorage.getItem(localSettingsSaveId);
              const data = JSON.parse(raw);
              Object.assign(currentSettings, data);
          }
          catch (e) {
              // noop
          }
          this.fallbacks = {
              getSettings() {
                  return currentSettings;
              },
              setSettings(value) {
                  try {
                      localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                  }
                  catch (e) {
                      // noop
                  }
                  currentSettings = value;
              },
              now() {
                  return now();
              },
          };
          if (hook) {
              hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
                  if (pluginId === this.plugin.id) {
                      this.fallbacks.setSettings(value);
                  }
              });
          }
          this.proxiedOn = new Proxy({}, {
              get: (_target, prop) => {
                  if (this.target) {
                      return this.target.on[prop];
                  }
                  else {
                      return (...args) => {
                          this.onQueue.push({
                              method: prop,
                              args,
                          });
                      };
                  }
              },
          });
          this.proxiedTarget = new Proxy({}, {
              get: (_target, prop) => {
                  if (this.target) {
                      return this.target[prop];
                  }
                  else if (prop === 'on') {
                      return this.proxiedOn;
                  }
                  else if (Object.keys(this.fallbacks).includes(prop)) {
                      return (...args) => {
                          this.targetQueue.push({
                              method: prop,
                              args,
                              resolve: () => { },
                          });
                          return this.fallbacks[prop](...args);
                      };
                  }
                  else {
                      return (...args) => {
                          return new Promise(resolve => {
                              this.targetQueue.push({
                                  method: prop,
                                  args,
                                  resolve,
                              });
                          });
                      };
                  }
              },
          });
      }
      async setRealTarget(target) {
          this.target = target;
          for (const item of this.onQueue) {
              this.target.on[item.method](...item.args);
          }
          for (const item of this.targetQueue) {
              item.resolve(await this.target[item.method](...item.args));
          }
      }
  }

  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
      const descriptor = pluginDescriptor;
      const target = getTarget();
      const hook = getDevtoolsGlobalHook();
      const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
      if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
          hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
      }
      else {
          const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
          const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
          list.push({
              pluginDescriptor: descriptor,
              setupFn,
              proxy,
          });
          if (proxy)
              setupFn(proxy.proxiedTarget);
      }
  }

  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */

  var storeKey = 'store';

  /**
   * forEach for object
   */
  function forEachValue (obj, fn) {
    Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
  }

  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  function isPromise (val) {
    return val && typeof val.then === 'function'
  }

  function partial (fn, arg) {
    return function () {
      return fn(arg)
    }
  }

  function genericSubscribe (fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend
        ? subs.unshift(fn)
        : subs.push(fn);
    }
    return function () {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    }
  }

  function resetStore (store, hot) {
    store._actions = Object.create(null);
    store._mutations = Object.create(null);
    store._wrappedGetters = Object.create(null);
    store._modulesNamespaceMap = Object.create(null);
    var state = store.state;
    // init all modules
    installModule(store, state, [], store._modules.root, true);
    // reset state
    resetStoreState(store, state, hot);
  }

  function resetStoreState (store, state, hot) {
    var oldState = store._state;

    // bind store public getters
    store.getters = {};
    // reset local getters cache
    store._makeLocalGettersCache = Object.create(null);
    var wrappedGetters = store._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function (fn, key) {
      // use computed to leverage its lazy-caching mechanism
      // direct inline function use will lead to closure preserving oldState.
      // using partial to return function with only arguments preserved in closure environment.
      computedObj[key] = partial(fn, store);
      Object.defineProperty(store.getters, key, {
        // TODO: use `computed` when it's possible. at the moment we can't due to
        // https://github.com/vuejs/vuex/pull/1883
        get: function () { return computedObj[key](); },
        enumerable: true // for local getters
      });
    });

    store._state = Vue.reactive({
      data: state
    });

    // enable strict mode for new state
    if (store.strict) {
      enableStrictMode(store);
    }

    if (oldState) {
      if (hot) {
        // dispatch changes in all subscribed watchers
        // to force getter re-evaluation for hot reloading.
        store._withCommit(function () {
          oldState.data = null;
        });
      }
    }
  }

  function installModule (store, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store._modules.getNamespace(path);

    // register in namespace map
    if (module.namespaced) {
      if (store._modulesNamespaceMap[namespace] && ("production" !== 'production')) {
        console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
      }
      store._modulesNamespaceMap[namespace] = module;
    }

    // set state
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store._withCommit(function () {
        parentState[moduleName] = module.state;
      });
    }

    var local = module.context = makeLocalContext(store, namespace, path);

    module.forEachMutation(function (mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store, namespacedType, mutation, local);
    });

    module.forEachAction(function (action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store, type, handler, local);
    });

    module.forEachGetter(function (getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store, namespacedType, getter, local);
    });

    module.forEachChild(function (child, key) {
      installModule(store, rootState, path.concat(key), child, hot);
    });
  }

  /**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
  function makeLocalContext (store, namespace, path) {
    var noNamespace = namespace === '';

    var local = {
      dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;

        if (!options || !options.root) {
          type = namespace + type;
        }

        return store.dispatch(type, payload)
      },

      commit: noNamespace ? store.commit : function (_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;

        if (!options || !options.root) {
          type = namespace + type;
        }

        store.commit(type, payload, options);
      }
    };

    // getters and state object must be gotten lazily
    // because they will be changed by state update
    Object.defineProperties(local, {
      getters: {
        get: noNamespace
          ? function () { return store.getters; }
          : function () { return makeLocalGetters(store, namespace); }
      },
      state: {
        get: function () { return getNestedState(store.state, path); }
      }
    });

    return local
  }

  function makeLocalGetters (store, namespace) {
    if (!store._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store.getters).forEach(function (type) {
        // skip if the target getter is not match this namespace
        if (type.slice(0, splitPos) !== namespace) { return }

        // extract local getter type
        var localType = type.slice(splitPos);

        // Add a port to the getters proxy.
        // Define as getter property because
        // we do not want to evaluate the getters in this time.
        Object.defineProperty(gettersProxy, localType, {
          get: function () { return store.getters[type]; },
          enumerable: true
        });
      });
      store._makeLocalGettersCache[namespace] = gettersProxy;
    }

    return store._makeLocalGettersCache[namespace]
  }

  function registerMutation (store, type, handler, local) {
    var entry = store._mutations[type] || (store._mutations[type] = []);
    entry.push(function wrappedMutationHandler (payload) {
      handler.call(store, local.state, payload);
    });
  }

  function registerAction (store, type, handler, local) {
    var entry = store._actions[type] || (store._actions[type] = []);
    entry.push(function wrappedActionHandler (payload) {
      var res = handler.call(store, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store.getters,
        rootState: store.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store._devtoolHook) {
        return res.catch(function (err) {
          store._devtoolHook.emit('vuex:error', err);
          throw err
        })
      } else {
        return res
      }
    });
  }

  function registerGetter (store, type, rawGetter, local) {
    if (store._wrappedGetters[type]) {
      return
    }
    store._wrappedGetters[type] = function wrappedGetter (store) {
      return rawGetter(
        local.state, // local state
        local.getters, // local getters
        store.state, // root state
        store.getters // root getters
      )
    };
  }

  function enableStrictMode (store) {
    Vue.watch(function () { return store._state.data; }, function () {
    }, { deep: true, flush: 'sync' });
  }

  function getNestedState (state, path) {
    return path.reduce(function (state, key) { return state[key]; }, state)
  }

  function unifyObjectStyle (type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }

    return { type: type, payload: payload, options: options }
  }

  var LABEL_VUEX_BINDINGS = 'vuex bindings';
  var MUTATIONS_LAYER_ID = 'vuex:mutations';
  var ACTIONS_LAYER_ID = 'vuex:actions';
  var INSPECTOR_ID = 'vuex';

  var actionId = 0;

  function addDevtools (app, store) {
    setupDevtoolsPlugin(
      {
        id: 'org.vuejs.vuex',
        app: app,
        label: 'Vuex',
        homepage: 'https://next.vuex.vuejs.org/',
        logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
        packageName: 'vuex',
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function (api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: 'Vuex Mutations',
          color: COLOR_LIME_500
        });

        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: 'Vuex Actions',
          color: COLOR_LIME_500
        });

        api.addInspector({
          id: INSPECTOR_ID,
          label: 'Vuex',
          icon: 'storage',
          treeFilterPlaceholder: 'Filter stores...'
        });

        api.on.getInspectorTree(function (payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store._modules.root, payload.filter, '');
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store._modules.root, '')
              ];
            }
          }
        });

        api.on.getInspectorState(function (payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store._modules, modulePath),
              modulePath === 'root' ? store.getters : store._makeLocalGettersCache,
              modulePath
            );
          }
        });

        api.on.editInspectorState(function (payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== 'root') {
              path = modulePath.split('/').filter(Boolean).concat( path);
            }
            store._withCommit(function () {
              payload.set(store._state.data, path, payload.state.value);
            });
          }
        });

        store.subscribe(function (mutation, state) {
          var data = {};

          if (mutation.payload) {
            data.payload = mutation.payload;
          }

          data.state = state;

          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);

          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data: data
            }
          });
        });

        store.subscribeAction({
          before: function (action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;

            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: 'start',
                data: data
              }
            });
          },
          after: function (action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: 'duration',
                display: (duration + "ms"),
                tooltip: 'Action duration',
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;

            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: 'end',
                data: data
              }
            });
          }
        });
      }
    );
  }

  // extracted from tailwind palette
  var COLOR_LIME_500 = 0x84cc16;
  var COLOR_DARK = 0x666666;
  var COLOR_WHITE = 0xffffff;

  var TAG_NAMESPACED = {
    label: 'namespaced',
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };

  /**
   * @param {string} path
   */
  function extractNameFromPath (path) {
    return path && path !== 'root' ? path.split('/').slice(-2, -1)[0] : 'Root'
  }

  /**
   * @param {*} module
   * @return {import('@vue/devtools-api').CustomInspectorNode}
   */
  function formatStoreForInspectorTree (module, path) {
    return {
      id: path || 'root',
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function (moduleName) { return formatStoreForInspectorTree(
          module._children[moduleName],
          path + moduleName + '/'
        ); }
      )
    }
  }

  /**
   * @param {import('@vue/devtools-api').CustomInspectorNode[]} result
   * @param {*} module
   * @param {string} filter
   * @param {string} path
   */
  function flattenStoreForInspectorTree (result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || 'root',
        label: path.endsWith('/') ? path.slice(0, path.length - 1) : path || 'Root',
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function (moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + '/');
    });
  }

  /**
   * @param {*} module
   * @return {import('@vue/devtools-api').CustomInspectorState}
   */
  function formatStoreForInspectorState (module, getters, path) {
    getters = path === 'root' ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function (key) { return ({
        key: key,
        editable: true,
        value: module.state[key]
      }); })
    };

    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function (key) { return ({
        key: key.endsWith('/') ? extractNameFromPath(key) : key,
        editable: false,
        value: canThrow(function () { return tree[key]; })
      }); });
    }

    return storeState
  }

  function transformPathsToObjectTree (getters) {
    var result = {};
    Object.keys(getters).forEach(function (key) {
      var path = key.split('/');
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function (p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: 'Module',
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function () { return getters[key]; });
      } else {
        result[key] = canThrow(function () { return getters[key]; });
      }
    });
    return result
  }

  function getStoreModule (moduleMap, path) {
    var names = path.split('/').filter(function (n) { return n; });
    return names.reduce(
      function (module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error(("Missing module \"" + moduleName + "\" for path \"" + path + "\"."))
        }
        return i === names.length - 1 ? child : child._children
      },
      path === 'root' ? moduleMap : moduleMap.root._children
    )
  }

  function canThrow (cb) {
    try {
      return cb()
    } catch (e) {
      return e
    }
  }

  // Base data struct for store's module, package with some attribute and method
  var Module = function Module (rawModule, runtime) {
    this.runtime = runtime;
    // Store some children item
    this._children = Object.create(null);
    // Store the origin module object which passed by programmer
    this._rawModule = rawModule;
    var rawState = rawModule.state;

    // Store the origin module's state
    this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
  };

  var prototypeAccessors$1 = { namespaced: { configurable: true } };

  prototypeAccessors$1.namespaced.get = function () {
    return !!this._rawModule.namespaced
  };

  Module.prototype.addChild = function addChild (key, module) {
    this._children[key] = module;
  };

  Module.prototype.removeChild = function removeChild (key) {
    delete this._children[key];
  };

  Module.prototype.getChild = function getChild (key) {
    return this._children[key]
  };

  Module.prototype.hasChild = function hasChild (key) {
    return key in this._children
  };

  Module.prototype.update = function update (rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };

  Module.prototype.forEachChild = function forEachChild (fn) {
    forEachValue(this._children, fn);
  };

  Module.prototype.forEachGetter = function forEachGetter (fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };

  Module.prototype.forEachAction = function forEachAction (fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };

  Module.prototype.forEachMutation = function forEachMutation (fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };

  Object.defineProperties( Module.prototype, prototypeAccessors$1 );

  var ModuleCollection = function ModuleCollection (rawRootModule) {
    // register root module (Vuex.Store options)
    this.register([], rawRootModule, false);
  };

  ModuleCollection.prototype.get = function get (path) {
    return path.reduce(function (module, key) {
      return module.getChild(key)
    }, this.root)
  };

  ModuleCollection.prototype.getNamespace = function getNamespace (path) {
    var module = this.root;
    return path.reduce(function (namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + '/' : '')
    }, '')
  };

  ModuleCollection.prototype.update = function update$1 (rawRootModule) {
    update([], this.root, rawRootModule);
  };

  ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
      var this$1$1 = this;
      if ( runtime === void 0 ) runtime = true;

    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }

    // register nested modules
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function (rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };

  ModuleCollection.prototype.unregister = function unregister (path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);

    if (!child) {
      return
    }

    if (!child.runtime) {
      return
    }

    parent.removeChild(key);
  };

  ModuleCollection.prototype.isRegistered = function isRegistered (path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];

    if (parent) {
      return parent.hasChild(key)
    }

    return false
  };

  function update (path, targetModule, newModule) {

    // update target module
    targetModule.update(newModule);

    // update nested modules
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          return
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }

  var Store = function Store (options) {
    var this$1$1 = this;
    if ( options === void 0 ) options = {};

    var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
    var strict = options.strict; if ( strict === void 0 ) strict = false;
    var devtools = options.devtools;

    // store internal state
    this._committing = false;
    this._actions = Object.create(null);
    this._actionSubscribers = [];
    this._mutations = Object.create(null);
    this._wrappedGetters = Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = Object.create(null);
    this._devtools = devtools;

    // bind commit and dispatch to self
    var store = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch (type, payload) {
      return dispatch.call(store, type, payload)
    };
    this.commit = function boundCommit (type, payload, options) {
      return commit.call(store, type, payload, options)
    };

    // strict mode
    this.strict = strict;

    var state = this._modules.root.state;

    // init root module.
    // this also recursively registers all sub-modules
    // and collects all module getters inside this._wrappedGetters
    installModule(this, state, [], this._modules.root);

    // initialize the store state, which is responsible for the reactivity
    // (also registers _wrappedGetters as computed properties)
    resetStoreState(this, state);

    // apply plugins
    plugins.forEach(function (plugin) { return plugin(this$1$1); });
  };

  var prototypeAccessors = { state: { configurable: true } };

  Store.prototype.install = function install (app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;

    var useDevtools = this._devtools !== undefined
      ? this._devtools
      : __VUE_PROD_DEVTOOLS__;

    if (useDevtools) {
      addDevtools(app, this);
    }
  };

  prototypeAccessors.state.get = function () {
    return this._state.data
  };

  prototypeAccessors.state.set = function (v) {
  };

  Store.prototype.commit = function commit (_type, _payload, _options) {
      var this$1$1 = this;

    // check object-style commit
    var ref = unifyObjectStyle(_type, _payload, _options);
      var type = ref.type;
      var payload = ref.payload;

    var mutation = { type: type, payload: payload };
    var entry = this._mutations[type];
    if (!entry) {
      return
    }
    this._withCommit(function () {
      entry.forEach(function commitIterator (handler) {
        handler(payload);
      });
    });

    this._subscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .forEach(function (sub) { return sub(mutation, this$1$1.state); });
  };

  Store.prototype.dispatch = function dispatch (_type, _payload) {
      var this$1$1 = this;

    // check object-style dispatch
    var ref = unifyObjectStyle(_type, _payload);
      var type = ref.type;
      var payload = ref.payload;

    var action = { type: type, payload: payload };
    var entry = this._actions[type];
    if (!entry) {
      return
    }

    try {
      this._actionSubscribers
        .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
        .filter(function (sub) { return sub.before; })
        .forEach(function (sub) { return sub.before(action, this$1$1.state); });
    } catch (e) {
    }

    var result = entry.length > 1
      ? Promise.all(entry.map(function (handler) { return handler(payload); }))
      : entry[0](payload);

    return new Promise(function (resolve, reject) {
      result.then(function (res) {
        try {
          this$1$1._actionSubscribers
            .filter(function (sub) { return sub.after; })
            .forEach(function (sub) { return sub.after(action, this$1$1.state); });
        } catch (e) {
        }
        resolve(res);
      }, function (error) {
        try {
          this$1$1._actionSubscribers
            .filter(function (sub) { return sub.error; })
            .forEach(function (sub) { return sub.error(action, this$1$1.state, error); });
        } catch (e) {
        }
        reject(error);
      });
    })
  };

  Store.prototype.subscribe = function subscribe (fn, options) {
    return genericSubscribe(fn, this._subscribers, options)
  };

  Store.prototype.subscribeAction = function subscribeAction (fn, options) {
    var subs = typeof fn === 'function' ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options)
  };

  Store.prototype.watch = function watch$1 (getter, cb, options) {
      var this$1$1 = this;
    return Vue.watch(function () { return getter(this$1$1.state, this$1$1.getters); }, cb, Object.assign({}, options))
  };

  Store.prototype.replaceState = function replaceState (state) {
      var this$1$1 = this;

    this._withCommit(function () {
      this$1$1._state.data = state;
    });
  };

  Store.prototype.registerModule = function registerModule (path, rawModule, options) {
      if ( options === void 0 ) options = {};

    if (typeof path === 'string') { path = [path]; }

    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    // reset store to update getters...
    resetStoreState(this, this.state);
  };

  Store.prototype.unregisterModule = function unregisterModule (path) {
      var this$1$1 = this;

    if (typeof path === 'string') { path = [path]; }

    this._modules.unregister(path);
    this._withCommit(function () {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };

  Store.prototype.hasModule = function hasModule (path) {
    if (typeof path === 'string') { path = [path]; }

    return this._modules.isRegistered(path)
  };

  Store.prototype.hotUpdate = function hotUpdate (newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };

  Store.prototype._withCommit = function _withCommit (fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };

  Object.defineProperties( Store.prototype, prototypeAccessors );

  /**
   * Reduce the code which written in Vue.js for getting the getters
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} getters
   * @return {Object}
   */
  var mapGetters = normalizeNamespace(function (namespace, getters) {
    var res = {};
    normalizeMap(getters).forEach(function (ref) {
      var key = ref.key;
      var val = ref.val;

      // The namespace has been mutated by normalizeNamespace
      val = namespace + val;
      res[key] = function mappedGetter () {
        if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
          return
        }
        return this.$store.getters[val]
      };
      // mark vuex getter for devtools
      res[key].vuex = true;
    });
    return res
  });

  /**
   * Normalize the map
   * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
   * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
   * @param {Array|Object} map
   * @return {Object}
   */
  function normalizeMap (map) {
    if (!isValidMap(map)) {
      return []
    }
    return Array.isArray(map)
      ? map.map(function (key) { return ({ key: key, val: key }); })
      : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
  }

  /**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
  function isValidMap (map) {
    return Array.isArray(map) || isObject(map)
  }

  /**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
  function normalizeNamespace (fn) {
    return function (namespace, map) {
      if (typeof namespace !== 'string') {
        map = namespace;
        namespace = '';
      } else if (namespace.charAt(namespace.length - 1) !== '/') {
        namespace += '/';
      }
      return fn(namespace, map)
    }
  }

  /**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
  function getModuleByNamespace (store, helper, namespace) {
    var module = store._modulesNamespaceMap[namespace];
    return module
  }

  var script$4 = {
    name: 'id2-name',
    props: {
      code: {
        type: String,
        require: true
      },
      value: {
        type: [String, Number, Array, Boolean],
        //Array<Number>
        require: true
      },
      options: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      fetchMethod: {
        type: Function
      },
      format: {
        type: Function,
        "default": function _default(v) {
          return v;
        }
      },
      //展示方式 tag等 可扩展 accessory附件下载
      type: [String]
    },
    data: function data() {
      return {
        asyncOptions: this.options
      };
    },
    computed: _objectSpread2(_objectSpread2({}, mapGetters(['enums'])), {}, {
      displayVal: function displayVal() {
        var curSet = this.enums[this.code] || this.asyncOptions;
        return this.matchValue(curSet) || '--';
      }
    }),
    created: function created() {
      this.fetch();
    },
    methods: {
      fetch: function fetch() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var format, fetchMethod, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  format = _this.format, fetchMethod = _this.fetchMethod;

                  if (!isEmpty(fetchMethod)) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 3:
                  _context.prev = 3;
                  _context.t0 = format;
                  _context.next = 7;
                  return fetchMethod();

                case 7:
                  _context.t1 = _context.sent;
                  data = (0, _context.t0)(_context.t1);
                  _this.asyncOptions = data;
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t2 = _context["catch"](3);
                  console.log(_context.t2);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 12]]);
        }))();
      },
      matchValue: function matchValue() {
        var _this2 = this;

        var sets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (Array.isArray(this.value)) {
          var _set = sets.filter(function (item) {
            return _this2.value.includes(item.id);
          });

          return _set.map(function (item) {
            return item.name;
          }).join(',');
        }

        var set = sets.find(function (item) {
          return item.id == _this2.value;
        });
        return set && set['name'];
      }
    }
  };

  /* script */
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _vm.type === "tag"
          ? _c(
              "el-tag",
              _vm._g(_vm._b({}, "el-tag", _vm.$attrs, false), _vm.$listeners),
              [_vm._v(_vm._s(_vm.displayVal))]
            )
          : [_vm._v("\n    " + _vm._s(_vm.displayVal) + "\n  ")],
        _vm._v(" "),
        _vm._t("default"),
      ],
      2
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$3 = {
    name: 'rr-dropdown',
    props: {
      options: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      value: {
        type: [String, Number]
      }
    },
    methods: {
      handleCommand: function handleCommand(event) {
        console.log(event);
        this.$emit('input', event);
        this.$emit('change', event);
      }
    }
  };

  /* script */
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-dropdown",
      _vm._g(
        _vm._b(
          { staticClass: "d-wrap", on: { command: _vm.handleCommand } },
          "el-dropdown",
          _vm.$attrs,
          false
        ),
        _vm.$listeners
      ),
      [
        _c(
          "span",
          { staticClass: "el-dropdown-link" },
          [
            _c(
              "id2-name",
              { attrs: { value: _vm.value, options: _vm.options } },
              [_c("i", { staticClass: "el-icon-arrow-down el-icon--right" })]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-dropdown-menu",
          { attrs: { slot: "dropdown" }, slot: "dropdown" },
          _vm._l(_vm.options, function (item) {
            return _c(
              "el-dropdown-item",
              { key: item.id, attrs: { command: item.id } },
              [_vm._v(_vm._s(item.name))]
            )
          }),
          1
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = function (inject) {
      if (!inject) return
      inject("data-v-b7fa7d94_0", { source: ".d-wrap[data-v-b7fa7d94] {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\RrDropdown\\index.vue","index.vue"],"names":[],"mappings":"AAoCA;EACA,eAAA;ACnCA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\r\n  <el-dropdown class=\"d-wrap\" @command=\"handleCommand\" v-bind=\"$attrs\" v-on=\"$listeners\">\r\n    <span class=\"el-dropdown-link\">\r\n      <id2-name :value=\"value\" :options=\"options\">\r\n        <i class=\"el-icon-arrow-down el-icon--right\"></i>\r\n      </id2-name>\r\n    </span>\r\n    <el-dropdown-menu slot=\"dropdown\">\r\n      <el-dropdown-item v-for=\"item in options\" :key=\"item.id\" :command=\"item.id\">{{ item.name }}</el-dropdown-item>\r\n    </el-dropdown-menu>\r\n  </el-dropdown>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'rr-dropdown',\r\n  props: {\r\n    options: {\r\n      type: Array,\r\n      default: () => [],\r\n    },\r\n    value: {\r\n      type: [String, Number],\r\n    },\r\n  },\r\n  methods: {\r\n    handleCommand(event) {\r\n      console.log(event)\r\n      this.$emit('input', event)\r\n      this.$emit('change', event)\r\n    },\r\n  },\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.d-wrap {\r\n  cursor: pointer;\r\n}\r\n</style>",".d-wrap {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$3 = "data-v-b7fa7d94";
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  var script$2 = {
    name: 'rr-count-to',
    components: {
      CountTo: CountTo__default["default"]
    },
    props: {
      value: {
        type: [Number, String],
        "default": '--'
      }
    }
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "c-w" },
      [
        _vm._t("default", function () {
          return [_vm._v("\n     \n  ")]
        }),
        _vm._v(" "),
        typeof _vm.value == "number"
          ? [
              _c(
                "count-to",
                _vm._g(
                  _vm._b(
                    { attrs: { "end-val": _vm.value } },
                    "count-to",
                    _vm.$attrs,
                    false
                  ),
                  _vm.$listeners
                )
              ),
            ]
          : [_vm._v("\n    " + _vm._s(_vm.value) + "\n  ")],
      ],
      2
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-489d265d_0", { source: ".c-w[data-v-489d265d] {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\RrCountTo\\index.vue","index.vue"],"names":[],"mappings":"AAkCA;EACA,qBAAA;ACjCA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\r\n  <div class=\"c-w\">\r\n    <slot>\r\n      &nbsp;\r\n    </slot>\r\n    <template v-if=\"typeof value == 'number'\">\r\n      <count-to v-bind=\"$attrs\" :end-val=\"value\" v-on=\"$listeners\" />\r\n    </template>\r\n    <template v-else>\r\n      {{ value }}\r\n    </template>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n/**\r\n * 针对 vue-countTo 的二次封装\r\n */\r\nimport CountTo from 'vue-count-to'\r\nexport default {\r\n  name: 'rr-count-to',\r\n  components: {\r\n    CountTo,\r\n  },\r\n  props: {\r\n    value: {\r\n      type: [Number, String],\r\n      default: '--',\r\n    },\r\n  },\r\n}\r\n</script>\r\n\r\n<style lang=\"sass\" scoped>\r\n.c-w\r\n    display: inline-block\r\n</style>",".c-w {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = "data-v-489d265d";
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  var script$1 = {
    name: 'rr-echarts',
    props: {
      option: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      height: {
        type: String,
        "default": '400px'
      },
      width: {
        type: String,
        "default": '100%'
      }
    },
    data: function data() {
      return {
        myEcharts: null
      };
    },
    watch: {
      option: {
        handler: function handler(newVal, oldVal) {
          if (newVal !== oldVal) {
            this.myEcharts.setOption(newVal);
          }
        },
        deep: true
      }
    },
    mounted: function mounted() {
      var $echartsDOM = this.$refs.echarts;
      this.myEcharts = this.$echarts.init($echartsDOM); //myEcharts.setOption(this.option)
    }
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      ref: "echarts",
      staticClass: "echarts",
      style: { height: _vm.height, width: _vm.width },
    })
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: 'Sparrow',
    data: function data() {
      return {
        showEdit: false
      };
    },
    methods: {
      toggleEdit: function toggleEdit() {
        this.showEdit = !this.showEdit;
      }
    }
  };

  var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAZu0lEQVR4Xu1dC7hUZbl+vzWbjSiaoiZ5yjynY5qWlppKCrMG8JqW8gSpiOxZA3LSoizvJwO6GFiaWVJcZg0aUoF2MQ0vwKwBtUQhSENLLaXCFKuj4I29Z97zrNl743a79561ZtZt1vrX8/DwPMx3fb//5f/XWv/6P4G6diIwxuShZcFSVLDJyskEBY1CQBQEbyKQMXk9gYur/0I8ZeXkIIVPshFQBOmq//F57j5I8CSA/bqHBAUTSllZluwhkuzsFUG66j/a5OgKsPItw4FYppZaiiDJRqAr+0yeV1Hwjd5gpIDDVhqySYGUTATUDNJVd91kEYD+tmEgmGllZVYyh4fKWhGkNkH+YGXlg2qoJBMBRZBaBLEfaKmb9WSyA4AiiAOCQN2sK4IkFgEnBAGgbtaTOULUDPImQb4N4Ev9DgNilpWTmckcJsnNWhGkq/bpAicJccuAQ6GMjDVVrOQOl+RlrgjSPYPkeTQED9cYApZlSCZ5wyS5GSuCdNX+jHncddsg/BHAuwccDmqplSi2KIL0KLdu8hIA36o5AtRSqyZEcRFQBOlRyZEm99WAuwU4Ui214jLEG8sj0QTRF7Bza0kL/gHgGSsrr2cKvJDETTVhVUutmhDFQSCRBNHznAnBjD4K+G+gSpbn+9yX1VtBLbXiwIEBc0gmQQosgGjzoLobO4hx9+fkzx7YUiYiiEAyCWLyRwDO86ge96MdZ1nT5EWP7CkzEUIgmQSx7z1SsLe3e3VZQ7bjlOXT5Q2vDCo70UAgkQSxoU8X+JAQx3hYBvUS0UMwo2IqsQTR8zwBgjsBvMPDYiiSeAhmFEwlliA2+HqeEyFY7HEhFEk8BjRMc4kmSHWplefVIviqx0VQJPEY0LDMJZ4gXTNJAeLJY9+ddSTwLxEcZmXFfq+iriZFIJEE0fP8AgSTAXwAwGBfa1fBOdYU+YmvPpRx3xBIHEHSeV4qgmt9Q7QPwwSuLRlyeZA+lS9vEEgiQW4SwYXewOfCiuBWKytevZx04ViJNoJA8ghS4HghljYCWgO6xVQK/7NysvypARtKNUAEEkeQ6k25yRsAfD5AnHu6eoaCr5SyYm93UVfEEUgkQaokKXAxiIlh1UcECzp2YMaaafJcWDEov7URSCxBbGgyJq8hcGVtmHyTeKJCzFidk7CWfL4lFhfDiSZIdSZZyDOh4ZsADgmxqN/vGIyv3D9R7O9R1BUhBBJPkK7l1p4AvuPRNyL1lVewAcR1liFeb32pLx4HWnqBB6KCMyH4JOz4K9gIDRusrGxwoN4UIoknSKbAcQROA3AciMPCrhqBO6SM70T5/C09z5xomEDipD7xItYJML+Yk/lh49mo/8QSJJPnBRRMAfDRRkH0Q5/E3FQK169qk6f9sF+Pzeo3/BougeDjjvRjQJREEiRjci6BzzgqcrhCW0HMLbdi3ppJ4T3tGmXyPQJcIsD0euAQ4PNFQ26sRzdsncQRRC/wEBCPhw28G/8CbCGxIAyipAs8UTpPeWm0oenZliE/dZN3FGQTR5DqTbnJ31TvOZrs6ibKC5txzaZZssPv8NMFTu0ix6BGfQmwg2WcHOV7q75yTCRBTl7IYTs0fJ/AOY0WPhR94m5UMNWaKn/zy386z2+I4CqP7f+VgolSxnOtrXju3vPlFY/te24ukQTpRtE+H0sEnyMwzHNkfTZof2+SAk5cZch6r12lTd4qwLle2+3D3ksAtoDYUp0dgS0inX9rwJaKYMu+u2HLsgn+z5b95ZpoglSXW/azfFb7gnw2gAHhvQviPCsnt3plWM9zKQTj67LXddpkurENoXeC+EnawI9niVTqisNDpcQTZOdsYhMFmBHqy8L6C3upZYjdAKihSy9wOYhT6jbS4zhW3SRd2nkMgqutrPzCpZ6v4oogXfDaL78g+DqA4b4i7pNxISYXczJwA6ABfOsm7Sd7jW63+bsIprOCPSAoOE2VwPz2Flz94PnyglOdoOQUQTpPN+nvrN6g6uCFn+0acPIqQx50a0w3+RqAXdzqeSBv36RfZBlyswe2fDGReIJEYEevZ4UVYkExJxe4MZg2+U8J4yEF8RchphanyEo38QYtm2iCpAu8R/rbTxR0Jbzx97hlyKFOTekmHwNC2X/2kH2KjJWVJ5zGGpZcYgmim/wZgLMGAN5+BPmoAI9C8DdW8Co1vKIBr7CMV5nCK0LsR2KEJjiOtZvuBFJjrYIDV02RZ2s5003eB2BsLTkffv95OzH5gZxs88G25yYTS5B0nvbhDfbjzFYC/4TgRSF+L4LlKQ2PrJgsm92grS/hPrIDx6KMYynVM39PdqPvmayDniW6t6fbuwn96ZYURrvF1o0Dr2UTSxCvgextzz77VwTnsvOFm5fn/w4ceg2CZAq8lsSlfuffl30RTCxmZUkYvuv16SlB7KdBFHxIgBSBZ4XYDMGz5Qo2txLPrpwqduemRF1jb+YBHR0YBw2ngxjje/IDECST5xcpuM73GPpwIMAPioYEf9xSg8l6RpDqtwK1e268aH8QpGn4ZbFN7mgwds/V9Vt4NMo4AcDBAOw37N2PPl8T4qmKhidRwVMtQ7B+5bnuya4X+GEQp5M4QzqXYV5fz1iG/GdfRtMmzxEgrP+9H0U7RjdjkyHPCGIXRS/Q3ibg7GOazl6AG0FssD/TrHRg4+qpEtg29FN/zcGvv4ATWMZICI4HqsRw8y7gSQjWAnhYiN8WDXnIzWhPFzjSJosQZ0CqR6B6cX3XMuQLvQ2NNHmkBqwRYFcvnLi2ITgram/InebgKUFsp+mFvFA0B11i+56G/0Xid6JhfYX4HQRPCbC1NYWt9ez8PHYx9xj0KoZrGoZDMFwEwzXgQHaSwdMvCUXwexArUcHKXV7FCjfdpvQCTwGrT5TsJdiHnRavpxyBl1uAESsN2dTz30+9kYNfG4o/AnhvPXYb1hHcbWXl1IbthGTAc4JUZ5KFPBsaZnYtVbxKzX7rurXrT7/bpAm0dm0XGR7W/5j2blQAK0jctXozbsMs55vuRi3kR0Sr7ocaK8Box+D105Zaz/MRCI5ybMdjQQomlLKyzGOzgZnzhSBVkszjPhyESwW4LLBsounIfhl2Gzpwu3WBu9M+xs7jO9oH4TQBTrMPlujvjTeBW0qG2KfVv+XSTdpb4T8SIiwly5DOXvRNevlGkG48Mgt5fEVwmQg+0aQYeRa2/YACgtu278Dt66bJq54Z7mXoqHncdfdWrA37lJZGN1D6hY8bu74TZCdRCjTI6mxiPyFK+vUMgMUporDS4x7rY0weWhYsDZ0cgrXFrBzb7IUOjCBq2dXnULG3sywSolDMycZGB5Nu8nQIZodNjq48PPlGpVFMGtUPlCA7Z5NFPKpSwQUCuNp52miyUdUXoFLpIoqVk/vdxqnPYAsOxNdAXOFW1y95AU4pGnKPX/aDshsKQRRR+i+vAEsrxKJSTpY7GQR6gWcSuFiIUU7kg5JpbcF+90bwAyi3+YdKEH0hT0EKk0Gc7Tbw2MsLfgVifqqMh7u36By6lK37bMd+mr2LWDBSAAPAByOHBfG4lXO+7T5y8fcIKBSCVA9KaN7vv6Ncz0jERmBpyZBPRyKYBoMInCBRecrSIG5KfSAEBFdYWZkTB5ACJ4jDTY1xwDaxOWjAmFWGrIoDAIETxAat68C2qQT2jwOIKoe3ItBO7NEsXwzWql0oBLGDGnMz9+4o4xMCnIHOPy21glW/NwcCrS0YWs/m0ihmFxpBeoIxehHfVyFGAjgaxNFAdXOdIkwUR4yDmMrt2D8uzUkjQZDemOs3cWhlCI7RiGPQ+WGR/ec/HNRGiUQAASEOKebE3mLf9FckCdIXqmMWcL92DUdogsNFcHilgiPsv5u+AjFMwD60opSVh+OQWtMQpBvs4+fxgEGDqt9VfyoOBYhjDqJhbLEt2gfCOcW9qQhS/a6auA6CdzlNUMkFjwCJcaWc/Dx4z957bAqCjFjIYYNT+CqIi7yHQFn0HAEia+Vkked2QzAYeYJU37x3nsZxRAj4KJd1INDMTTt7pxtpgthPs7ArfhuR7xvqGCqJVbnaMsRuJdH0V7QJ4uysraYvQuwSENxgZeXiOOTVDASxG7HYu3/V1SQIEFhSMmRik4Q7YJiRJogd+UiT+7YIxpPVg6ab+oSMOAwYhzncZxlykkPZSItFniA90TtqHgftqWFYOzAsNQjD2I43+3e34HUAz1Q6MERS+HpAXVojXdwQg9tgGRLmcUOepd5UBKmVtZ7nRV19BvesJat+9xEBwd+trLzbRw+BmY4NQdIm77IPWAsMOeVoIATaLUPsEy6b/ooFQepoOdz0hYt4Am9Yhrg5CDyy6TQ9QdJ5/lKd2hix8SX4t5WVYRGLqq5wmp4gavaoq+6+KtmHd5cMicXnCU1PkHSB41HBl11ufbc7Xf0ZwF4ADvF1tCTT+NOWIf8dh9SbniDdRTjpFu72RhmHSgd2668wWgo7oOH5yit4XobgKgJXxqGIEczhUcuQWHyrExuCuBkkdoNNCNa40VGyzhEgsbaUa/6Dq+2ME0eQalPNMh4DsLvzkitJlwhYliEZlzqRFE8cQVz2UYxk0aIeFIEbS4Z8PupxOokvUQTJFHguiVudANNDxu7loTZLugGNmGLlJO9GJaqyiSKIbrLoaMMj8SIF9wpxHwT2bmJ1uUGA+KiVk0fcqERVNlEESZuc109Pkv8DYDe7fEQEj5B4wMrKP/QCXwUxJKrFi2pcLwzF4E0TZEdU43MTV6IIYgNjnw3MFN4lxP7U8LIAD1vZtzfX1Au8HMRsN2Aq2SoCj1tGPFofJPIplpNBPGY+319uqfYWV5d7BH5qGRKbfi+Jm0Gc1DuT5y0UTHIiq2TeioAQ/1vMyTVxwUURpFclM4t4FCuIxQ1mGINUNJxebJO7wvDth09FkF6oOrn3EGALiQUQzPCjKE1t8zXsbl0k25s6hx7BK4L0qmQ6z40DbHx8BsTN5VbMS7XDbhCjNjq+Fb8VliEnxoUc6ia9j0rqJh8EMKLHT/8k8JAQy1oHYZnd98I+SCIFvBCngeBJLhVcYU2JR+u1bjzUDNJ7iWUfVtda7VGCCvD86qnyeO/BkynwQhI31RpUAqwncGQtubj8LhpOKLbJA3HJR80gdVbS0Rt54hIIvl2ni2ZUe8Iy5APNGPhAMasZpI6KDvQVI4k/SQXTkMJcALEbMP3CRcyxcnJFHXBGWkURpI7y9EWQ7idb9g18SzvGE/huHaabVoXEx0o5+U3TJtBP4IogdVS0J0F6EmPNJHnuhLncq2UXrE/SDmASq0s5SdcBZeRVFEHqKJHdxhoajiCwqtKC22xidJup/ubk/QixDlJtVtr0F4Evlgz5TtMn0kcCiiAeVzVjcgmBcwZYq68TYD417BWTzZB/tRut2rufPYYyEuYUQTwuQ39PuERwb6WMxaUp8iPbpW7ytwCO9dh98OaIK62cxHbXsyKIx0NKz/NLPR/vEpivaZhfbJN1O5dh9ruWIdjmseswzD3RThzzQE7ikEuf+CmChDCsdJPnAajOJM18kZheysn3mjmHWrErgtRCyIffdZPLmr2NNYH17xyKY5ZNkLIPEEXGpCJICKWosSHSjuhZAO8NITTHLin4RCkrv3Ks0KSCiiAhFE43aT/x2a+3awL2d9w3dDX/iWx/DQGuLRpyeQjQBe5SESRwyKtPsNiH28VSxg1sgf0tvN1uLpKXAA/uMhyjl58mb0QyQI+DUgTxGFAn5uyXiQTOsr87sRteahUsKU6RuzIFfpHEdU5shCUjGsYW22RlWP6D9qsIEjTi/fgbVeCHNOLXACK7tAIxy8rJzIhAFkgYiiCBwFzbSdrkrVFuPErijlJOPlk7k3hJKIJEoJ6jFvADWgqbIhBKfyH8dchwHJSU+46eICiCRGBU6nm2RfmIU9FwdM+dABGALLAQFEECg7p/RxmTcwl8JgKh9BVCm2XIzRGNzfewFEF8h7i2A93kEwAOri0ZsITgSisb342ITtBUBHGCko8yeoEHgviLjy7qNT3JMmRxvcpx0VMECbmSmTzPpyBSSxgKJpSyYu8XS/ylCBLyEEib/K4A00MOY6d7RY63VkIRJOSRqed5JwQfDzkMgNhODYaaORRBQh+LPQPQTdrvP8I+HmgNicvjeCpJo8VWM0ijCDaonzH5BoHWBs3UrS7E96jhMisrr9dtJMaKiiAhFneUyfdowOZQQujsw3hZyRDVg3GAAiiChDI6O53a7eCQgt1YNOjrvkoFl6+eIr8L2nGz+VMECbFiIRDkJfuooTifQuJ1ORVBvEbUhb0gCWJ/d0LB7NVZedRFiIkXVQQJcQg4PoWxsRgfFcHsYlaWNGYmmdqKICHWXTd5H4CxvoUgmN2yA7NXTJOXfPMRc8OKICEWWDf5bwB7eh4CsUxSmJPULepe4qkI4iWaLmyNXsRRlQpKLlSciRLLrJxMcCaspGohoAhSCyGffvflgIYEfjPuU3l2mlUE8RvhPuyPyfO/OgRFAQ7wyr0AtxQNmeyVPWWnEwFFkBBGgp7nYggmeuh6a0sKR6+YLOG8lfcwkaiZUgQJuCK6yWkAfuilWxJzSzm5yEubypaaQQIfA2NMHloGVvV17GhDwZSRsaaK1ZANpdwnAmoGCXBg+HSq+wbLkI8EmEaiXCmCBFTujMnpvnS+FdxgZeXigNJInBtFkABKni5wvBBLfXGllle+wNptVBHEV3gBX8kBvG4ZMsTnFBJtXhHEx/L7TA6I4E/FrETvPC0fMQ3atCKIT4j7TY6usFdYhpzoUwrKrHpR6M8YyBR4Lolb/bH+plURmMWs5Pz2k2T7agbxuPrpPD8nghs9Ntu3ObX3yneYFUE8hDigD6DejJg4z8qJ7zOVhxA1nSlFEI9Kphd4JxjsAXACHFc05CGPUlBm+kBAEaTBYaEX2YK/4LEwTmcfXMHe90yRfzWYglIfAAFFkAaGRzrPEaLhLhB7NWCmXtXnLUOG16us9JwhoAjiDKe3SaVNfkaAuXWqe6F2n2XISV4YUjb6R0ARpI7RoRc4A0So3V5JXF/KyZfqCF+puEBAEcQFWLZohNqlJbo1msuy1S2uCOIQulEFHqQRcwCc5VDFV7FKBUeqo0N9hbhqXBHEAca6yU8DVXK814F4ICL7DkXLsglSDsRZgp0ogtQoftrkHAEui9QYEfzBysoHIxVTTINRBOmnsCNNHpnqnDX8O/mw3kFF/MTKyTn1qis95wgogvSBlW5yCoDZAPZ2DmVwkgSuKhnyzeA8JteTIkiP2utLOZTbMEcEF0Z5SIiG04ttcleUY4xLbIogXZXsOgrUXlIdF/XithN7PJCTbVGPMw7xKYLYnZ7y/AIF9s14aL0CnQ4mEawtZuVYp/JKrjEEEk2QkfP4rpYWzKFgUmMwBqctwDeLhlwVnMdke0osQTIL+XFq1RvxpnpcKhrGFttkZbKHbXDZJ5IguskvA/hacDB752lbO3ZbN01e9c6isjQQAokiyJgFPLysYRYEZzblsCBWWjmJ3nuZpgTTWdCJIYie50UQzIrquw0n5VLvP5yg5K1M7AmSyfNgdhLD3k/V1JcAetEQ77tSNTUq/gYfa4LYb8QFmEVgf39hDMT6theGYp9NE2RHIN6UkyoCsSSIXuCBwioxzo9RnX9uGTIuRvk0RSqxI4hNDhB3APhQU1TAYZAkLivl5FsOxZWYRwjEiiBjbubeHWXcIcDHPMInMmZEwwnFNnkgMgElJJDYEGT8UrZu3Y5fADg1hrX7u/UsDsAsqcQwt0inFBuC6Ca/B+CzkUa7/uBuswwZX7+60qwXgVgQ5Kh53HXoIDwnwB71AhFlPQqml7Ji/wegroARiAVB9DxzECwMGLvg3A3CQdYkeSo4h8pTNwKxIEgmzyMo2BDTsi63DDktprlFPq1YEMRGWc/zxxCcHXnEXQaollcuAfNYPDYEsXHJmLyGgN3xdRePcQrPnFpehYd9HN+kjzS5b4tgPDtfFNovDYdDsC+IdwIYFCra7p2r5ZV7zDzViNUM0h8y6Zs5Qsp40FPkAjCmllcBgFzDRSII0rTvSNTyKnSGJIUgLzbhdyBqeRU6PWK6m7cnrpkCx5G4PQJYuwpBLa9cweWbcOxnkLTJiwW43jcE/TKslld+IevKbhIIco4AS1yhEr6wWl6FX4NqBLEnSGYhx1DDigHxJp4SYDkFn4tCXdTyKgpV6Iwh9gSxk0wXOF6IrwI4pJo18TwEawGs1TSsXdUm9+oLqCOFYiRKo5ZXkShDYgjSjfboRXxfB6GtzsqTvSsQIYKo5VVk6JGQGcQJ3lEhiFpeOalWcDKJWGI5gTMqBIFaXjkpV2AyiiA9oM6YXEfgyIHQJ/BrAfzafq6WV4ENfWeOFEF64FTjnclWCL7CCjaK+LOvSy2vnA3aIKUUQXqhrZucZh/xKcABXT/9g8TPUilcv6pNnrb/TTdpP+3SHRTqHgAnO5CzRV5qSeHwFZNls0N5JRYAAoogfYCsF2h/T3Jgmdh1jSHr3/bEy+Q0AD+ssRR7uWTIO/Q8Z0Iwo1YtBfhB0ZBIt36rlUMcf1cEqaOq9jcnGnG/CN7fj/rTQ7bjsOXT5Y2uGefugWYSAi+3ACNWGrKpjnCUio8IKILUCW66wJFC2I00d+9l4p4O4sL7c/Lnnv+eNvlSv6euELOsnMysMxSl5iMCiiANgDuqwHEaYbeMtg+rWw7idisn+f5M6gXeAeKMnr8TuKVkyOQGwlCqPiKgCOIjuH2Z1k1+HcCnABwMNXMEjL57d/8PJNKjMjk7Y3wAAAAASUVORK5CYII=";

  /* script */
  const __vue_script__ = script;
  var __vue_render__ = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "sparrow" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showEdit,
              expression: "showEdit",
            },
          ],
          staticClass: "sparrow-content",
        },
        [
          _c("iframe", {
            staticClass: "sparrow-iframe",
            attrs: { src: "http://localhost:8000/" },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "sparrow-button", on: { click: _vm.toggleEdit } },
        [
          _c("img", {
            staticClass: "sparrow-button-icon",
            attrs: { src: img },
          }),
        ]
      ),
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-d8a30a96_0", { source: ".sparrow[data-v-d8a30a96] {\n  bottom: 32px;\n  position: fixed;\n  z-index: 10000;\n  right: 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: right;\n  align-items: flex-end;\n}\n.sparrow-button[data-v-d8a30a96] {\n  background: #304156;\n  width: 56px;\n  height: 56px;\n  padding: 15px;\n  border-radius: 68px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  cursor: pointer;\n}\n.sparrow-content[data-v-d8a30a96] {\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.sparrow-iframe[data-v-d8a30a96] {\n  border: 0;\n  width: 1200px;\n  height: 600px;\n}\n.sparrow-button-icon[data-v-d8a30a96] {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["E:\\workspace\\rr\\rr-c\\rr-ui\\packages\\Sparrow\\index.vue","index.vue"],"names":[],"mappings":"AA0BA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ACzBA;AD2BA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;ACxBA;AD0BA;EACA,2CAAA;EACA,kBAAA;EACA,gBAAA;ACvBA;ADyBA;EACA,SAAA;EACA,aAAA;EACA,aAAA;ACtBA;ADwBA;EACA,WAAA;EACA,YAAA;ACrBA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\r\n  <div class=\"sparrow\">\r\n    <div class=\"sparrow-content\" v-show=\"showEdit\">\r\n      <iframe class=\"sparrow-iframe\" src=\"http://localhost:8000/\" />\r\n    </div>\r\n    <div class=\"sparrow-button\" @click=\"toggleEdit\">\r\n      <img class=\"sparrow-button-icon\" src=\"@/assets/images/sparrow.png\" />\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  name: 'Sparrow',\r\n  data() {\r\n    return {\r\n      showEdit: false,\r\n    }\r\n  },\r\n  methods: {\r\n    toggleEdit() {\r\n      this.showEdit = !this.showEdit\r\n    },\r\n  },\r\n}\r\n</script>\r\n<style lang=\"scss\" scoped>\r\n.sparrow {\r\n  bottom: 32px;\r\n  position: fixed;\r\n  z-index: 10000;\r\n  right: 32px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: right;\r\n  align-items: flex-end;\r\n}\r\n.sparrow-button {\r\n  background: #304156;\r\n  width: 56px;\r\n  height: 56px;\r\n  padding: 15px;\r\n  border-radius: 68px;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n}\r\n.sparrow-content {\r\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.6);\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n.sparrow-iframe {\r\n  border: 0;\r\n  width: 1200px;\r\n  height: 600px;\r\n}\r\n.sparrow-button-icon {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n</style>\r\n",".sparrow {\n  bottom: 32px;\n  position: fixed;\n  z-index: 10000;\n  right: 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: right;\n  align-items: flex-end;\n}\n\n.sparrow-button {\n  background: #304156;\n  width: 56px;\n  height: 56px;\n  padding: 15px;\n  border-radius: 68px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  cursor: pointer;\n}\n\n.sparrow-content {\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.sparrow-iframe {\n  border: 0;\n  width: 1200px;\n  height: 600px;\n}\n\n.sparrow-button-icon {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-d8a30a96";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  var components = [__vue_component__$s, __vue_component__$r, __vue_component__$d, __vue_component__$c, __vue_component__$b, __vue_component__$9, __vue_component__$8, __vue_component__$7, __vue_component__$6, __vue_component__$5, __vue_component__$1, __vue_component__$4, __vue_component__$3, __vue_component__$2, __vue_component__];
  var index = {
    install: function install(Vue) {
      // Vue.use(Element, {
      //   size: 'small', // set element-ui default size
      //   // i18n: (key, value) => i18n.t(key, value)
      // })
      Vue.use(register);
      components.forEach(function (component) {
        Vue.component(component.name, component);
      });
    }
  };

  return index;

}));
