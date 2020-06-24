(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["taro"],{

/***/ "./node_modules/@tarojs/components/mini/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tarojs/components/mini/index.js ***!
  \*******************************************************/
/*! exports provided: View, Icon, Progress, RichText, Text, Button, Checkbox, CheckboxGroup, Editor, Form, Input, Label, Picker, PickerView, PickerViewColumn, Radio, RadioGroup, Slider, Switch, CoverImage, Textarea, CoverView, MoveableArea, MoveableView, ScrollView, Swiper, SwiperItem, FunctionalPageNavigator, Navigator, Audio, Camera, Image, LivePlayer, LivePusher, Video, Map, Canvas, Ad, OfficialAccount, OpenData, WebView, NavigationBar, Block, MovableArea, MovableView */
/*! exports used: Button, View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return View; });
/* unused harmony export Icon */
/* unused harmony export Progress */
/* unused harmony export RichText */
/* unused harmony export Text */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* unused harmony export Checkbox */
/* unused harmony export CheckboxGroup */
/* unused harmony export Editor */
/* unused harmony export Form */
/* unused harmony export Input */
/* unused harmony export Label */
/* unused harmony export Picker */
/* unused harmony export PickerView */
/* unused harmony export PickerViewColumn */
/* unused harmony export Radio */
/* unused harmony export RadioGroup */
/* unused harmony export Slider */
/* unused harmony export Switch */
/* unused harmony export CoverImage */
/* unused harmony export Textarea */
/* unused harmony export CoverView */
/* unused harmony export MoveableArea */
/* unused harmony export MoveableView */
/* unused harmony export ScrollView */
/* unused harmony export Swiper */
/* unused harmony export SwiperItem */
/* unused harmony export FunctionalPageNavigator */
/* unused harmony export Navigator */
/* unused harmony export Audio */
/* unused harmony export Camera */
/* unused harmony export Image */
/* unused harmony export LivePlayer */
/* unused harmony export LivePusher */
/* unused harmony export Video */
/* unused harmony export Map */
/* unused harmony export Canvas */
/* unused harmony export Ad */
/* unused harmony export OfficialAccount */
/* unused harmony export OpenData */
/* unused harmony export WebView */
/* unused harmony export NavigationBar */
/* unused harmony export Block */
/* unused harmony export MovableArea */
/* unused harmony export MovableView */
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Editor = 'editor';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MoveableArea = 'moveable-area';
var MoveableView = 'moveable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var FunctionalPageNavigator = 'functional-page-navigator';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var LivePusher = 'live-pusher';
var Video = 'video';
var Map = 'map';
var Canvas = 'canvas';
var Ad = 'ad';
var OfficialAccount = 'official-account';
var OpenData = 'open-data';
var WebView = 'web-view';
var NavigationBar = 'navigation-bar';
var Block = 'block';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/dist/template/comp.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/comp.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-undef */

var runtime_1 = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js"); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore


Component(runtime_1.createRecursiveComponentConfig());

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime-module.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime-module.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

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

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@tarojs/react/dist/react.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@tarojs/react/dist/react.esm.js ***!
  \******************************************************/
/*! exports provided: default, createPortal, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createPortal */
/* unused harmony export findDOMNode */
/* unused harmony export render */
/* unused harmony export unmountComponentAtNode */
/* unused harmony export unstable_batchedUpdates */
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reconciler */ "./node_modules/react-reconciler/index.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scheduler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");







function isString(o) {
  return typeof o === 'string';
}

function isObject(o) {
  return o !== null && Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(o) === 'object';
}

function isFunction(o) {
  return typeof o === 'function';
}

function isNumber(o) {
  return typeof o === 'number';
}

var EMPTY_ARR = [];

var noop = function noop() {};

var reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */

function ensure(condition, msg) {
  if (condition) {
    return;
  }

  throw new Error(msg + '\n' + reportIssue);
}

var touchEvents = {
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongTap: ''
};
var View = Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '400',
  animation: '',
  bindAnimationEnd: ''
}, touchEvents);
var Map = Object.assign({
  longitude: '',
  latitude: '',
  scale: '16',
  markers: '',
  covers: '',
  polyline: '',
  circles: '',
  controls: '',
  'include-point': 'false',
  'show-location': '',
  polygons: '',
  subkey: '',
  'layer-style': '1',
  rotate: '0',
  skew: 'skew',
  'enable-3D': 'false',
  'show-compass': 'false',
  'show-scale': 'false',
  'enable-overlooking': 'false',
  'enable-zoom': 'true',
  'enable-scroll': 'true',
  'enable-rotate': 'false',
  'enable-satellite': 'false',
  'enable-traffic': 'false',
  setting: '',
  bindMarkerTap: '',
  bindLabelTap: '',
  bindControlTap: '',
  bindCalloutTap: '',
  bindUpdated: '',
  bindRegionChange: '',
  bindPoiTap: ''
}, touchEvents);
if (false) {}
var CoverView = Object.assign({
  'scroll-top': 'false'
}, touchEvents);
var MovableView = Object.assign({
  direction: 'none',
  inertia: 'false',
  'out-of-bounds': 'false',
  x: '',
  y: '',
  damping: '20',
  friction: '2',
  disabled: '',
  scale: 'false',
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  animation: 'true',
  bindAnimationEnd: '',
  bindChange: '',
  bindScale: '',
  htouchmove: '',
  vtouchmove: '',
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents);
var ScrollView = Object.assign({
  'scroll-x': 'false',
  'scroll-y': 'false',
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': '',
  'scroll-left': '',
  'scroll-into-view': '',
  'scroll-with-animation': 'false',
  'enable-back-to-top': 'false',
  'enable-flex': 'false',
  'scroll-anchoring': 'false',
  'refresher-enabled': 'false',
  'refresher-threshold': '45',
  'refresher-default-style': singleQuote('black'),
  'refresher-background': singleQuote('#FFF'),
  'refresher-triggered': 'false',
  bindRefresherPulling: '',
  bindRefresherRefresh: '',
  bindRefresherRestore: '',
  bindRefresherAbort: '',
  bindScrolltoUpper: '',
  bindScrolltoLower: '',
  bindScroll: ''
}, touchEvents);

function singleQuote(s) {
  return "'".concat(s, "'");
}

function isEventName(s) {
  return s[0] === 'o' && s[1] === 'n';
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function updateProps(dom, oldProps, newProps) {
  var i;

  for (i in oldProps) {
    if (!(i in newProps)) {
      setProperty(dom, i, null, oldProps[i]);
    }
  }

  var isFormElement = dom instanceof _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["FormElement"];

  for (i in newProps) {
    if (oldProps[i] !== newProps[i] || isFormElement && i === 'value') {
      setProperty(dom, i, newProps[i], oldProps[i]);
    }
  }
}

function eventProxy(e) {
  var el = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["document"].getElementById(e.currentTarget.id);
  var handlers = el.__handlers[e.type];
  handlers[0](e);
}

function setEvent(dom, name, value, oldValue) {
  var isCapture = name.endsWith('Capture');
  var eventName = name.toLowerCase().slice(2);

  if (isCapture) {
    eventName = eventName.slice(0, -7);
  }

  if (eventName === 'click') {
    eventName = 'tap';
  }

  if (isFunction(value)) {
    if (!oldValue) {
      dom.addEventListener(eventName, eventProxy, isCapture);
    }

    dom.__handlers[eventName][0] = value;
  } else {
    dom.removeEventListener(eventName, eventProxy);
  }
}

function setStyle(style, key, value) {
  if (key[0] === '-') {
    style.setProperty(key, value.toString());
  }

  style[key] = isNumber(value) && IS_NON_DIMENSIONAL.test(key) === false ? value + 'px' : value == null ? '' : value;
}

function setProperty(dom, name, value, oldValue) {
  var _a, _b, _c, _d;

  name = name === 'className' ? 'class' : name;
  if (name === 'key' || name === 'children' || name === 'ref') ;else if (name === 'style') {
    var style = dom.style;

    if (isString(value)) {
      style.cssText = value;
    } else {
      if (isString(oldValue)) {
        style.cssText = '';
        oldValue = null;
      }

      if (isObject(oldValue)) {
        for (var i in oldValue) {
          if (!(value && i in value)) {
            setStyle(style, i, '');
          }
        }
      }

      if (isObject(value)) {
        for (var _i in value) {
          if (!oldValue || value[_i] !== oldValue[_i]) {
            setStyle(style, _i, value[_i]);
          }
        }
      }
    }
  } else if (isEventName(name)) {
    setEvent(dom, name, value, oldValue);
  } else if (name === 'dangerouslySetInnerHTML') {
    var newHtml = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.__html) !== null && _b !== void 0 ? _b : '';
    var oldHtml = (_d = (_c = oldValue) === null || _c === void 0 ? void 0 : _c.__html) !== null && _d !== void 0 ? _d : '';

    if (newHtml || oldHtml) {
      if (oldHtml !== newHtml) {
        dom.innerHTML = newHtml;
      }
    }
  } else if (!isFunction(value)) {
    if (value == null) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}
/* eslint-disable @typescript-eslint/indent */


var scheduleDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_4__["unstable_scheduleCallback"],
    cancelDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_4__["unstable_cancelCallback"],
    now = scheduler__WEBPACK_IMPORTED_MODULE_4__["unstable_now"];

function returnFalse() {
  return false;
}

var hostConfig = {
  createInstance: function createInstance(type) {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["document"].createElement(type);
  },
  createTextInstance: function createTextInstance(text) {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["document"].createTextNode(text);
  },
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return {};
  },
  getChildHostContext: function getChildHostContext() {
    return {};
  },
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    parent.appendChild(child);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    parent.removeChild(child);
  },
  insertBefore: function insertBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  commitTextUpdate: function commitTextUpdate(textInst, _, newText) {
    textInst.nodeValue = newText;
  },
  finalizeInitialChildren: function finalizeInitialChildren(dom, _, props) {
    updateProps(dom, {}, props);
    return false;
  },
  prepareUpdate: function prepareUpdate() {
    return EMPTY_ARR;
  },
  commitUpdate: function commitUpdate(dom, _payload, _type, oldProps, newProps) {
    updateProps(dom, oldProps, newProps);
  },
  shouldSetTextContent: returnFalse,
  shouldDeprioritizeSubtree: returnFalse,
  prepareForCommit: noop,
  resetAfterCommit: noop,
  commitMount: noop,
  now: now,
  scheduleDeferredCallback: scheduleDeferredCallback,
  cancelDeferredCallback: cancelDeferredCallback,
  clearTimeout: clearTimeout,
  setTimeout: setTimeout,
  noTimeout: -1,
  supportsMutation: true,
  supportsPersistence: false,
  isPrimaryRenderer: true,
  supportsHydration: false
};
var TaroReconciler = react_reconciler__WEBPACK_IMPORTED_MODULE_3___default()(hostConfig);
var ContainerMap = new WeakMap();

var Root = /*#__PURE__*/function () {
  function Root(renderer, domContainer) {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Root);

    this.renderer = renderer;
    this.internalRoot = renderer.createContainer(domContainer, false, false);
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Root, [{
    key: "render",
    value: function render(children, cb) {
      this.renderer.updateContainer(children, this.internalRoot, null, cb);
      return this.renderer.getPublicRootInstance(this.internalRoot);
    }
  }, {
    key: "unmount",
    value: function unmount(cb) {
      this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
  }]);

  return Root;
}();

function render(element, domContainer, cb) {
  var oldRoot = ContainerMap.get(domContainer);

  if (oldRoot != null) {
    return oldRoot.render(element, cb);
  }

  var root = new Root(TaroReconciler, domContainer);
  ContainerMap.set(domContainer, root);
  return root.render(element, cb);
}
/* eslint-disable @typescript-eslint/no-unused-vars */


var unstable_batchedUpdates = TaroReconciler.batchedUpdates;

function unmountComponentAtNode(dom) {
  ensure(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
  var root = ContainerMap.get(dom);
  if (!root) return false;
  unstable_batchedUpdates(function () {
    root.unmount(function () {
      ContainerMap.delete(dom);
    });
  });
  return true;
}

function findDOMNode(comp) {
  if (comp == null) {
    return null;
  }

  var nodeType = comp.nodeType;

  if (nodeType === 1 || nodeType === 3) {
    return comp;
  }

  return TaroReconciler.findHostInstance(comp);
}

var portalType = typeof Symbol === 'function' && Symbol.for ? Symbol.for('react.portal') : 0xeaca;

function createPortal(children, containerInfo, key) {
  return {
    $$typeof: portalType,
    key: key == null ? null : String(key),
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}

var index = {
  render: render,
  unstable_batchedUpdates: unstable_batchedUpdates,
  unmountComponentAtNode: unmountComponentAtNode,
  findDOMNode: findDOMNode,
  createPortal: createPortal
};
/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),

/***/ "./node_modules/@tarojs/runtime/dist/runtime.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \**********************************************************/
/*! exports provided: Current, Events, FormElement, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, cancelAnimationFrame, connectReactPage, connectVuePage, createComponentConfig, createDocument, createEvent, createPageConfig, createReactApp, createRecursiveComponentConfig, createVueApp, document, eventCenter, hydrate, injectPageInstance, navigator, nextTick, now, options, requestAnimationFrame, useDidHide, useDidShow, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useScope, useShareAppMessage, useTabItemTap, useTitleClick, window */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(document, window, requestAnimationFrame, cancelAnimationFrame) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return caf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReactPage", function() { return connectReactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectVuePage", function() { return connectVuePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactApp", function() { return createReactApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() { return createRecursiveComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueApp", function() { return createVueApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCenter", function() { return eventCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidHide", function() { return useDidHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidShow", function() { return useDidShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return useOptionMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return usePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return usePullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return usePullIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return useReachBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return useReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return useResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScope", function() { return useScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return useShareAppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabItemTap", function() { return useTabItemTap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return useTitleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");












function isString(o) {
  return typeof o === 'string';
}

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isObject(o) {
  return o !== null && Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(o) === 'object';
}

function isFunction(o) {
  return typeof o === 'function';
}

function isBooleanStringLiteral(o) {
  return o === 'true' || o === 'false';
}

var isArray = Array.isArray;
var EMPTY_OBJ = {};

var noop = function noop() {};

function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(s) {
  var camel = '';
  var nextCap = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }

  return camel;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */

function ensure(condition, msg) {
  if (condition) {
    return;
  }

  throw new Error(msg + '\n' + reportIssue);
}

function warn(condition, msg) {
  if (true) {
    if (condition) {
      console.warn(msg);
    }
  }
}

var touchEvents = {
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongTap: ''
};
var View = Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '400',
  animation: '',
  bindAnimationEnd: ''
}, touchEvents);
var Icon = {
  type: '',
  size: '23',
  color: ''
};
var Map$1 = Object.assign({
  longitude: '',
  latitude: '',
  scale: '16',
  markers: '',
  covers: '',
  polyline: '',
  circles: '',
  controls: '',
  'include-point': 'false',
  'show-location': '',
  polygons: '',
  subkey: '',
  'layer-style': '1',
  rotate: '0',
  skew: 'skew',
  'enable-3D': 'false',
  'show-compass': 'false',
  'show-scale': 'false',
  'enable-overlooking': 'false',
  'enable-zoom': 'true',
  'enable-scroll': 'true',
  'enable-rotate': 'false',
  'enable-satellite': 'false',
  'enable-traffic': 'false',
  setting: '',
  bindMarkerTap: '',
  bindLabelTap: '',
  bindControlTap: '',
  bindCalloutTap: '',
  bindUpdated: '',
  bindRegionChange: '',
  bindPoiTap: ''
}, touchEvents);
var Progress = {
  percent: '',
  'show-info': 'false',
  'border-radius': '0',
  'font-size': '16',
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: 'false',
  'active-mode': singleQuote('backwards'),
  duration: '30',
  bindActiveEnd: ''
};
var RichText = {
  nodes: '[]',
  space: ''
};
var Text = {
  selectable: 'false',
  space: '',
  decode: 'false'
};
var Button = {
  size: singleQuote('default'),
  type: '',
  plain: 'false',
  disabled: '',
  loading: 'false',
  'form-type': '',
  'open-type': '',
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '20',
  'hover-stay-time': '70',
  lang: 'en',
  'session-from': '',
  'send-message-title': '',
  'send-message-path': '',
  'send-message-img': '',
  'app-parameter': '',
  'show-message-card': 'false',
  bindGetUserInfo: '',
  bindGetAuthorize: '',
  bindContact: '',
  bindGetPhoneNumber: '',
  bindError: '',
  bindOpenSetting: '',
  bindLaunchApp: '',
  scope: '',
  name: ''
};

if (false) {}

var Checkbox = {
  value: '',
  disabled: '',
  checked: 'false',
  color: singleQuote('#09BB07'),
  name: ''
};
var CheckboxGroup = {
  bindChange: '',
  name: ''
};
var Editor = {
  'read-only': 'false',
  placeholder: '',
  'show-img-size': 'false',
  'show-img-toolbar': 'false',
  'show-img-resize': 'false',
  focus: 'false',
  bindReady: '',
  bindFocus: '',
  bindBlur: '',
  bindInput: '',
  bindStatusChange: '',
  name: ''
};
var Form = {
  'report-submit': 'false',
  'report-submit-timeout': '0',
  bindSubmit: '',
  bindReset: '',
  name: ''
};
var Input = {
  value: '',
  type: singleQuote(''),
  password: 'false',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: '',
  maxlength: '140',
  'cursor-spacing': '0',
  'auto-focus': 'false',
  focus: 'false',
  'confirm-type': singleQuote('done'),
  'confirm-hold': 'false',
  cursor: '',
  'selection-start': '-1',
  'selection-end': '-1',
  'adjust-position': 'true',
  'hold-keyboard': 'false',
  bindInput: '',
  bindFocus: '',
  bindBlur: '',
  bindConfirm: '',
  bindKeyboardHeightChange: '',
  name: ''
};
var Label = {
  for: '',
  name: ''
};
var Picker = {
  mode: singleQuote('selector'),
  disabled: '',
  bindCancel: '',
  range: '',
  'range-key': '',
  value: '',
  bindChange: '',
  bindColumnChange: '',
  start: '',
  end: '',
  fields: singleQuote('day'),
  'custom-item': '',
  name: ''
};
var PickerView = {
  value: '',
  'indicator-style': '',
  'indicator-class': '',
  'mask-style': '',
  'mask-class': '',
  bindChange: '',
  bindPickStart: '',
  bindPickEnd: '',
  name: ''
};
var PickerViewColumn = {
  name: ''
};
var Radio = {
  value: '',
  checked: 'false',
  disabled: '',
  color: singleQuote('#09BB07'),
  name: ''
};
var RadioGroup = {
  bindChange: '',
  name: ''
};
var Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: '',
  value: '0',
  color: singleQuote('#e9e9e9'),
  'selected-color': singleQuote('#1aad19'),
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': 'false',
  bindChange: '',
  bindChanging: '',
  name: ''
};
var Switch = {
  checked: 'false',
  disabled: '',
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: '',
  name: ''
};
var CoverImage = {
  src: '',
  bindLoad: 'eh',
  bindError: 'eh'
};
var Textarea = {
  value: '',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: '',
  maxlength: '140',
  'auto-focus': 'false',
  focus: 'false',
  'auto-height': 'false',
  fixed: 'false',
  'cursor-spacing': '0',
  cursor: '-1',
  'show-confirm-bar': 'true',
  'selection-start': '-1',
  'selection-end': '-1',
  'adjust-position': 'true',
  'hold-keyboard': 'false',
  bindFocus: '',
  bindBlur: '',
  bindLineChange: '',
  bindInput: '',
  bindConfirm: '',
  bindKeyboardHeightChange: '',
  name: ''
};
var CoverView = Object.assign({
  'scroll-top': 'false'
}, touchEvents);
var MovableArea = {
  'scale-area': 'false'
};
var MovableView = Object.assign({
  direction: 'none',
  inertia: 'false',
  'out-of-bounds': 'false',
  x: '',
  y: '',
  damping: '20',
  friction: '2',
  disabled: '',
  scale: 'false',
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  animation: 'true',
  bindAnimationEnd: '',
  bindChange: '',
  bindScale: '',
  htouchmove: '',
  vtouchmove: '',
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents);
var ScrollView = Object.assign({
  'scroll-x': 'false',
  'scroll-y': 'false',
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': '',
  'scroll-left': '',
  'scroll-into-view': '',
  'scroll-with-animation': 'false',
  'enable-back-to-top': 'false',
  'enable-flex': 'false',
  'scroll-anchoring': 'false',
  'refresher-enabled': 'false',
  'refresher-threshold': '45',
  'refresher-default-style': singleQuote('black'),
  'refresher-background': singleQuote('#FFF'),
  'refresher-triggered': 'false',
  bindRefresherPulling: '',
  bindRefresherRefresh: '',
  bindRefresherRestore: '',
  bindRefresherAbort: '',
  bindScrolltoUpper: '',
  bindScrolltoLower: '',
  bindScroll: ''
}, touchEvents);

function singleQuote(s) {
  return "'".concat(s, "'");
}

var Swiper = {
  'indicator-dots': 'false',
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: 'false',
  current: '0',
  interval: '5000',
  duration: '500',
  circular: 'false',
  vertical: 'false',
  'previous-margin': '\'0px\'',
  'next-margin': '\'0px\'',
  'display-multiple-items': '1',
  'skip-hidden-item-layout': 'false',
  'easing-function': singleQuote('default'),
  bindChange: '',
  bindTransition: '',
  bindAnimationFinish: ''
};
var SwiperItem = {
  'item-id': ''
};
var FunctionalPageNavigator = {
  version: singleQuote('release'),
  name: '',
  args: '',
  bindSuccess: '',
  bindFail: '',
  bindCancel: ''
};
var Navigator = {
  target: singleQuote('self'),
  url: '',
  'open-type': singleQuote('navigate'),
  delta: '1',
  'app-id': '',
  path: '',
  'extra-data': '',
  version: singleQuote('version'),
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: '',
  bindFail: '',
  bindComplete: ''
};
var Audio = {
  id: '',
  src: '',
  loop: 'false',
  controls: 'false',
  poster: '',
  name: '',
  author: '',
  bindError: '',
  bindPlay: '',
  bindPause: '',
  bindTimeUpdate: '',
  bindEnded: ''
};
var Camera = {
  mode: singleQuote('normal'),
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  'frame-size': singleQuote('medium'),
  bindStop: '',
  bindError: '',
  bindInitDone: '',
  bindScanCode: ''
};
var Image = {
  src: '',
  mode: singleQuote('scaleToFill'),
  webp: 'false',
  'lazy-load': 'false',
  'show-menu-by-longpress': 'false',
  bindError: '',
  bindLoad: ''
};
var LivePlayer = {
  src: '',
  mode: singleQuote('live'),
  autoplay: 'false',
  muted: 'false',
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': 'false',
  'min-cache': '1',
  'max-cache': '3',
  'sound-mode': singleQuote('speaker'),
  'auto-pause-if-navigate': 'true',
  'auto-pause-if-open-native': 'true',
  bindStateChange: '',
  bindFullScreenChange: '',
  bindNetStatus: ''
};
var LivePusher = {
  url: '',
  mode: singleQuote('RTC'),
  autopush: 'false',
  muted: 'false',
  'enable-camera': 'true',
  'auto-focus': 'true',
  orientation: singleQuote('vertical'),
  beauty: '0',
  whiteness: '0',
  aspect: singleQuote('9:16'),
  'min-bitrate': '200',
  'max-bitrate': '1000',
  'audio-quality': singleQuote('high'),
  'waiting-image': '',
  'waiting-image-hash': '',
  zoom: 'false',
  'device-position': singleQuote('front'),
  'background-mute': 'false',
  mirror: 'false',
  'remote-mirror': 'false',
  'local-mirror': 'false',
  'audio-reverb-type': '0',
  'enable-mic': 'true',
  'enable-agc': 'false',
  'enable-ans': 'false',
  'audio-volume-type': singleQuote('voicecall'),
  'video-width': '360',
  'video-height': '640',
  bindStateChange: '',
  bindNetStatus: '',
  bindBgmStart: '',
  bindBgmProgress: '',
  bindBgmComplete: ''
};
var Video = {
  src: '',
  duration: '',
  controls: 'true',
  'danmu-list': '',
  'danmu-btn': '',
  'enable-danmu': '',
  autoplay: 'false',
  loop: 'false',
  muted: 'false',
  'initial-time': '0',
  'page-gesture': 'false',
  direction: '',
  'show-progress': 'true',
  'show-fullscreen-btn': 'true',
  'show-play-btn': 'true',
  'show-center-play-btn': 'true',
  'enable-progress-gesture': 'true',
  'object-fit': singleQuote('contain'),
  poster: '',
  'show-mute-btn': 'false',
  title: '',
  'play-btn-position': singleQuote('bottom'),
  'enable-play-gesture': 'false',
  'auto-pause-if-navigate': 'true',
  'auto-pause-if-open-native': 'true',
  'vslide-gesture': 'false',
  'vslide-gesture-in-fullscreen': 'true',
  'ad-unit-id': '',
  bindPlay: '',
  bindPause: '',
  bindEnded: '',
  bindTimeUpdate: '',
  bindFullScreenChange: '',
  bindWaiting: '',
  bindError: '',
  bindProgress: '',
  bindLoadedMetadata: ''
};
var Canvas = {
  type: '',
  'canvas-id': '',
  'disable-scroll': 'false',
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongtap: '',
  bindError: ''
};
var Ad = {
  'unit-id': '',
  'ad-intervals': '',
  bindLoad: '',
  bindError: '',
  bindClose: ''
};
var OfficialAccount = {
  bindLoad: '',
  bindError: ''
};
var OpenData = {
  type: '',
  'open-gid': '',
  lang: singleQuote('en'),
  'default-text': '',
  'default-avatar': '',
  bindError: ''
};
var WebView = {
  src: '',
  bindMessage: '',
  bindLoad: ''
};
var NavigationBar = {
  title: '',
  loading: 'false',
  'front-color': '',
  'background-color': '',
  'color-animation-duration': '0',
  'color-animation-timing-func': singleQuote('linear')
};
var PageMeta = {
  'background-text-style': '',
  'background-color': '',
  'background-color-top': '',
  'background-color-bottom': '',
  'scroll-top': singleQuote(''),
  'scroll-duration': '300',
  'page-style': singleQuote(''),
  'root-font-size': singleQuote(''),
  bindResize: '',
  bindScroll: '',
  bindScrollDone: ''
};
var Block = {};
var internalComponents = {
  View: View,
  Icon: Icon,
  Progress: Progress,
  RichText: RichText,
  Text: Text,
  Button: Button,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Editor: Editor,
  Form: Form,
  Input: Input,
  Label: Label,
  Picker: Picker,
  PickerView: PickerView,
  PickerViewColumn: PickerViewColumn,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Slider: Slider,
  Switch: Switch,
  CoverImage: CoverImage,
  Textarea: Textarea,
  CoverView: CoverView,
  MovableArea: MovableArea,
  MovableView: MovableView,
  ScrollView: ScrollView,
  Swiper: Swiper,
  SwiperItem: SwiperItem,
  FunctionalPageNavigator: FunctionalPageNavigator,
  Navigator: Navigator,
  Audio: Audio,
  Camera: Camera,
  Image: Image,
  LivePlayer: LivePlayer,
  LivePusher: LivePusher,
  Video: Video,
  Canvas: Canvas,
  Ad: Ad,
  OfficialAccount: OfficialAccount,
  OpenData: OpenData,
  WebView: WebView,
  NavigationBar: NavigationBar,
  PageMeta: PageMeta,
  Block: Block,
  Map: Map$1
};
var controlledComponent = new Set(['input', 'checkbox', 'picker-view', 'radio', 'slider', 'textarea']);

var incrementId = function incrementId() {
  var id = 0;
  return function () {
    return (id++).toString();
  };
};

function isElement(node) {
  return node.nodeType === 1
  /* ELEMENT_NODE */
  ;
}

function isText(node) {
  return node.nodeType === 3
  /* TEXT_NODE */
  ;
}

var TaroEventTarget = /*#__PURE__*/function () {
  function TaroEventTarget() {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroEventTarget);

    this.__handlers = {};
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      warn(type === 'regionchange', 'map 组件的 regionchange 事件非常特殊，请使用 begin/end 事件替代。详情：https://github.com/NervJS/taro/issues/5766');
      type = type.toLowerCase();
      var handlers = this.__handlers[type];
      var isCapture = Boolean(options);
      var isOnce = false;

      if (isObject(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }

      if (isOnce) {
        var wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element

          this.removeEventListener(type, wrapper);
        };

        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }

      warn(isCapture, 'The event capture feature is unimplemented.');

      if (isArray(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();

      if (handler == null) {
        return;
      }

      var handlers = this.__handlers[type];

      if (!isArray(handlers)) {
        return;
      }

      var index = handlers.indexOf(handler);
      warn(index === -1, "\u4E8B\u4EF6: '".concat(type, "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"));
      handlers.splice(index, 1);
    }
  }]);

  return TaroEventTarget;
}();

var eventSource = new Map();

var TaroEvent = /*#__PURE__*/function () {
  function TaroEvent(type, opts, event) {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroEvent);

    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "target",
    get: function get() {
      var element = document$1.getElementById(this.mpEvent.target.id);
      return Object.assign(Object.assign(Object.assign({}, this.mpEvent.target), this.mpEvent.detail), {
        dataset: element !== null ? element.dataset : EMPTY_OBJ
      });
    }
  }, {
    key: "currentTarget",
    get: function get() {
      var element = document$1.getElementById(this.mpEvent.currentTarget.id);

      if (element === null) {
        return this.target;
      }

      return Object.assign(Object.assign(Object.assign({}, this.mpEvent.currentTarget), this.mpEvent.detail), {
        dataset: element.dataset
      });
    }
  }]);

  return TaroEvent;
}();

function createEvent(event, _) {
  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  }, event);

  for (var key in event) {
    if (key === 'currentTarget' || key === 'target' || key === 'type') {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }

  return domEv;
}

function eventHandler(event) {
  if (event.currentTarget == null) {
    event.currentTarget = event.target;
  }

  var node = document$1.getElementById(event.currentTarget.id);

  if (node != null) {
    node.dispatchEvent(createEvent(event));
  }
}
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */


function hydrate(node) {
  var _data;

  if (isText(node)) {
    var _ref;

    return _ref = {}, Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_ref, "v"
    /* Text */
    , node.nodeValue), Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_ref, "nn"
    /* NodeName */
    , node.nodeName), _ref;
  }

  var data = (_data = {}, Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_data, "nn"
  /* NodeName */
  , node.nodeName), Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_data, "uid", node.uid), _data);
  var props = node.props,
      childNodes = node.childNodes;

  for (var prop in props) {
    if (!prop.startsWith('data-') && // 在 node.dataset 的数据
    prop !== 'class' && prop !== 'style' && prop !== 'id') {
      data[ false ? undefined : prop] = props[prop];
    }
  }

  if (childNodes.length > 0) {
    data["cn"
    /* Childnodes */
    ] = childNodes.map(hydrate);
  }

  if (node.className !== '') {
    data["cl"
    /* Class */
    ] = node.className;
  }

  if (node.cssText !== '') {
    data["st"
    /* Style */
    ] = node.cssText;
  }

  return data;
}

var options = {
  prerender: true,
  debug: false,
  // html 只影响 Element#innerHTML API
  html: {
    skipElements: new Set(['style', 'script']),
    voidElements: new Set(['!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']),
    closingElements: new Set(['html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'])
  }
};

function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}

function feedPosition(position, str, len) {
  var start = position.index;
  var end = position.index = start + len;

  for (var i = start; i < end; i++) {
    var char = str.charAt(i);

    if (char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}

function jumpPosition(position, str, end) {
  var len = end - position.index;
  return feedPosition(position, str, len);
}

function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}

var whitespace = /\s/;

function isWhitespaceChar(char) {
  return whitespace.test(char);
}

function shouldBeIgnore(tagName) {
  var name = tagName.toLowerCase();

  if (options.html.skipElements.has(name)) {
    return true;
  }

  return false;
}

var alphanumeric = /[A-Za-z0-9]/;

function findTextEnd(str, index) {
  while (true) {
    var textEnd = str.indexOf('<', index);

    if (textEnd === -1) {
      return textEnd;
    }

    var char = str.charAt(textEnd + 1);

    if (char === '/' || char === '!' || alphanumeric.test(char)) {
      return textEnd;
    }

    index = textEnd + 1;
  }
}

var Scaner = /*#__PURE__*/function () {
  function Scaner(html) {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Scaner);

    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Scaner, [{
    key: "scan",
    value: function scan() {
      var html = this.html,
          position = this.position;
      var len = html.length;

      while (position.index < len) {
        var start = position.index;
        this.scanText();

        if (position.index === start) {
          var isComment = html.startsWith('!--', start + 1);

          if (isComment) {
            this.scanComment();
          } else {
            var tagName = this.scanTag();

            if (shouldBeIgnore(tagName)) {
              this.scanSkipTag(tagName);
            }
          }
        }
      }

      return this.tokens;
    }
  }, {
    key: "scanText",
    value: function scanText() {
      var type = 'text';
      var html = this.html,
          position = this.position;
      var textEnd = findTextEnd(html, position.index);

      if (textEnd === position.index) {
        return;
      }

      if (textEnd === -1) {
        textEnd = html.length;
      }

      var start = copyPosition(position);
      var content = html.slice(position.index, textEnd);
      jumpPosition(position, html, textEnd);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "scanComment",
    value: function scanComment() {
      var type = 'comment';
      var html = this.html,
          position = this.position;
      var start = copyPosition(position);
      feedPosition(position, html, 4); // "<!--".length

      var contentEnd = html.indexOf('-->', position.index);
      var commentEnd = contentEnd + 3; // "-->".length

      if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
      }

      var content = html.slice(position.index, contentEnd);
      jumpPosition(position, html, commentEnd);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: copyPosition(position)
        }
      });
    }
  }, {
    key: "scanTag",
    value: function scanTag() {
      this.scanTagStart();
      var tagName = this.scanTagName();
      this.scanAttrs();
      this.scanTagEnd();
      return tagName;
    }
  }, {
    key: "scanTagStart",
    value: function scanTagStart() {
      var type = 'tag-start';
      var html = this.html,
          position = this.position;
      var secondChar = html.charAt(position.index + 1);
      var close = secondChar === '/';
      var start = copyPosition(position);
      feedPosition(position, html, close ? 2 : 1);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          start: start
        }
      });
    }
  }, {
    key: "scanTagEnd",
    value: function scanTagEnd() {
      var type = 'tag-end';
      var html = this.html,
          position = this.position;
      var firstChar = html.charAt(position.index);
      var close = firstChar === '/';
      feedPosition(position, html, close ? 2 : 1);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          end: end
        }
      });
    }
  }, {
    key: "scanTagName",
    value: function scanTagName() {
      var type = 'tag';
      var html = this.html,
          position = this.position;
      var len = html.length;
      var start = position.index;

      while (start < len) {
        var char = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
        if (isTagChar) break;
        start++;
      }

      var end = start + 1;

      while (end < len) {
        var _char = html.charAt(end);

        var _isTagChar = !(isWhitespaceChar(_char) || _char === '/' || _char === '>');

        if (!_isTagChar) break;
        end++;
      }

      jumpPosition(position, html, end);
      var tagName = html.slice(start, end);
      this.tokens.push({
        type: type,
        content: tagName
      });
      return tagName;
    }
  }, {
    key: "scanAttrs",
    value: function scanAttrs() {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var cursor = position.index;
      var quote = null; // null, single-, or double-quote

      var wordBegin = cursor; // index of word start

      var words = []; // "key", "key=value", "key='value'", etc

      var len = html.length;

      while (cursor < len) {
        var char = html.charAt(cursor);

        if (quote) {
          var isQuoteEnd = char === quote;

          if (isQuoteEnd) {
            quote = null;
          }

          cursor++;
          continue;
        }

        var isTagEnd = char === '/' || char === '>';

        if (isTagEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          break;
        }

        var isWordEnd = isWhitespaceChar(char);

        if (isWordEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          wordBegin = cursor + 1;
          cursor++;
          continue;
        }

        var isQuoteStart = char === '\'' || char === '"';

        if (isQuoteStart) {
          quote = char;
          cursor++;
          continue;
        }

        cursor++;
      }

      jumpPosition(position, html, cursor);
      var wLen = words.length;
      var type = 'attribute';

      for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');

        if (isNotPair) {
          var secondWord = words[i + 1];

          if (secondWord && secondWord.startsWith('=')) {
            if (secondWord.length > 1) {
              var newWord = word + secondWord;
              tokens.push({
                type: type,
                content: newWord
              });
              i += 1;
              continue;
            }

            var thirdWord = words[i + 2];
            i += 1;

            if (thirdWord) {
              var _newWord = word + '=' + thirdWord;

              tokens.push({
                type: type,
                content: _newWord
              });
              i += 1;
              continue;
            }
          }
        }

        if (word.endsWith('=')) {
          var _secondWord = words[i + 1];

          if (_secondWord && !_secondWord.includes('=')) {
            var _newWord3 = word + _secondWord;

            tokens.push({
              type: type,
              content: _newWord3
            });
            i += 1;
            continue;
          }

          var _newWord2 = word.slice(0, -1);

          tokens.push({
            type: type,
            content: _newWord2
          });
          continue;
        }

        tokens.push({
          type: type,
          content: word
        });
      }
    }
  }, {
    key: "scanSkipTag",
    value: function scanSkipTag(tagName) {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var safeTagName = tagName.toLowerCase();
      var len = html.length;
      var index = position.index;

      while (index < len) {
        var nextTag = html.indexOf('</', index);

        if (nextTag === -1) {
          this.scanText();
          break;
        }

        var tagStartPosition = copyPosition(position);
        jumpPosition(tagStartPosition, html, nextTag);
        var tagState = {
          html: html,
          position: tagStartPosition,
          tokens: []
        };
        var name = this.scanTag();

        if (safeTagName !== name.toLowerCase()) {
          index = tagState.position.index;
          continue;
        }

        if (nextTag !== position.index) {
          var textStart = copyPosition(position);
          jumpPosition(position, html, nextTag);
          tokens.push({
            type: 'text',
            content: html.slice(textStart.index, nextTag),
            position: {
              start: textStart,
              end: copyPosition(position)
            }
          });
        }

        tokens.push.apply(tokens, tagState.tokens);
        jumpPosition(position, html, tagState.position.index);
        break;
      }
    }
  }]);

  return Scaner;
}();

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}

var specialMiniElements = {
  img: 'image',
  iframe: 'web-view'
}; // https://developers.weixin.qq.com/miniprogram/dev/component

var isMiniElements = makeMap('input,canvas,progress,video,audio,form', true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

var isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,bdi,kbd,strong,big,map,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp', true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);
var closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table']
};

function hasTerminalParent(tagName, stack) {
  var tagParents = closingTagAncestorBreakers[tagName];

  if (tagParents) {
    var currentIndex = stack.length - 1;

    while (currentIndex >= 0) {
      var parentTagName = stack[currentIndex].tagName;

      if (parentTagName === tagName) {
        break;
      }

      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }

      currentIndex--;
    }
  }

  return false;
}

function unquote(str) {
  var car = str.charAt(0);
  var end = str.length - 1;
  var isQuoteStart = car === '"' || car === "'";

  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }

  return str;
}

function getTagName(tag) {
  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  }

  return 'view';
}

function splitEqual(str) {
  var sep = '=';
  var idx = str.indexOf(sep);
  if (idx === -1) return [str];
  return [str.slice(0, idx), str.slice(idx + sep.length)];
}

function format(children) {
  return children.filter(function (child) {
    if (child.type === 'comment') {
      return false;
    } else if (child.type === 'text') {
      return child.content !== '';
    }

    return true;
  }).map(function (child) {
    if (child.type === 'text') {
      var text = document$1.createTextNode(child.content);

      if (isFunction(options.html.transformText)) {
        return options.html.transformText(text, child);
      }

      return text;
    }

    var el = document$1.createElement(getTagName(child.tagName));
    el.className = child.tagName;

    for (var i = 0; i < child.attributes.length; i++) {
      var attr = child.attributes[i];

      var _splitEqual = splitEqual(attr),
          _splitEqual2 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_splitEqual, 2),
          key = _splitEqual2[0],
          value = _splitEqual2[1];

      if (key === 'class') {
        el.className += ' ' + unquote(value);
      } else if (key[0] === 'o' && key[1] === 'n') {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }

    var ch = format(child.children);

    for (var _i = 0; _i < ch.length; _i++) {
      el.appendChild(ch[_i]);
    }

    if (isFunction(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }

    return el;
  });
}

function parser(html) {
  var tokens = new Scaner(html).scan();
  var root = {
    tagName: '',
    children: [],
    type: 'element',
    attributes: []
  };
  var state = {
    tokens: tokens,
    options: options,
    cursor: 0,
    stack: [root]
  };
  parse(state);
  return format(root.children);
}

function parse(state) {
  var tokens = state.tokens,
      stack = state.stack;
  var cursor = state.cursor;
  var len = tokens.length;
  var nodes = stack[stack.length - 1].children;

  while (cursor < len) {
    var token = tokens[cursor];

    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }

    var tagToken = tokens[++cursor];
    cursor++;
    var tagName = tagToken.content.toLowerCase();

    if (token.close) {
      var index = stack.length;
      var shouldRewind = false;

      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }

      while (cursor < len) {
        var endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }

      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }

    var isClosingTag = options.html.closingElements.has(tagName);
    var shouldRewindToAutoClose = isClosingTag;

    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }

    if (shouldRewindToAutoClose) {
      var currentIndex = stack.length - 1;

      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          var previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }

        currentIndex = currentIndex - 1;
      }
    }

    var attributes = [];
    var attrToken = void 0;

    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }

    cursor++;
    var children = [];
    var element = {
      type: 'element',
      tagName: tagToken.content,
      attributes: attributes,
      children: children
    };
    nodes.push(element);
    var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));

    if (hasChildren) {
      stack.push({
        tagName: tagName,
        children: children
      });
      var innerState = {
        tokens: tokens,
        cursor: cursor,
        stack: stack
      };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }

  state.cursor = cursor;
}

function setInnerHTML(element, html) {
  element.textContent = '';
  var children = parser(html);

  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}

var nodeId = incrementId();

var TaroNode = /*#__PURE__*/function (_TaroEventTarget) {
  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroNode, _TaroEventTarget);

  var _super = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroNode);

  function TaroNode(nodeType, nodeName) {
    var _this;

    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroNode);

    _this = _super.call(this);
    _this.parentNode = null;
    _this.childNodes = [];

    _this.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };

    _this.nodeType = nodeType;
    _this.nodeName = nodeName;
    _this.uid = "_n_".concat(nodeId());
    eventSource.set(_this.uid, Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroNode, [{
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this2 = this;

      newChild.remove();
      newChild.parentNode = this;
      var payload;

      if (refChild) {
        var index = this.findIndex(this.childNodes, refChild);
        this.childNodes.splice(index, 0, newChild);

        if (isReplace === true) {
          payload = {
            path: newChild._path,
            value: this.hydrate(newChild)
          };
        } else {
          payload = {
            path: "".concat(this._path, ".", "cn"
            /* Childnodes */
            ),
            value: function value() {
              return _this2.childNodes.map(hydrate);
            }
          };
        }
      } else {
        this.childNodes.push(newChild);
        payload = {
          path: newChild._path,
          value: this.hydrate(newChild)
        };
      }

      this.enqueueUpdate(payload);
      return newChild;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.insertBefore(child);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      if (oldChild.parentNode === this) {
        this.insertBefore(newChild, oldChild, true);
        oldChild.remove(true);
        return oldChild;
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(child, isReplace) {
      var _this3 = this;

      var index = this.findIndex(this.childNodes, child);
      this.childNodes.splice(index, 1);

      if (isReplace !== true) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return _this3.childNodes.map(hydrate);
          }
        });
      }

      child.parentNode = null;
      eventSource.delete(child.uid); // @TODO: eventSource memory overflow
      // child._empty()

      return child;
    }
  }, {
    key: "remove",
    value: function remove(isReplace) {
      if (this.parentNode) {
        this.parentNode.removeChild(this, isReplace);
      }
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      if (this._root === null) {
        return;
      }

      this._root.enqueueUpdate(payload);
    }
    /**
     * like jQuery's $.empty()
     */

  }, {
    key: "_empty",
    value: function _empty() {
      while (this.childNodes.length > 0) {
        var child = this.childNodes[0];
        child.parentNode = null;
        eventSource.delete(child.uid);
        this.childNodes.shift();
      }
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */

  }, {
    key: "findIndex",
    value: function findIndex(childeNodes, refChild) {
      var index = childeNodes.indexOf(refChild);
      ensure(index !== -1, 'The node to be replaced is not a child of this node.');
      return index;
    }
  }, {
    key: "_path",
    get: function get() {
      if (this.parentNode !== null) {
        var index =  false ? undefined : '[' + this.parentNode.childNodes.indexOf(this) + ']';
        return "".concat(this.parentNode._path, ".", "cn"
        /* Childnodes */
        , ".").concat(index);
      }

      return '';
    }
  }, {
    key: "_root",
    get: function get() {
      if (this.parentNode !== null) {
        return this.parentNode._root;
      }

      return null;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
      }

      return null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1] || null;
      }

      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var c = this.childNodes;
      return c[c.length - 1] || null;
    }
  }, {
    key: "textContent",
    set: function set(text) {
      if (text === '') {
        this._empty();

        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return [];
          }
        });
      }
    }
  }, {
    key: "innerHTML",
    set: function set(html) {
      setInnerHTML(this, html);
    },
    get: function get() {
      return '';
    }
  }]);

  return TaroNode;
}(TaroEventTarget);

var TaroText = /*#__PURE__*/function (_TaroNode) {
  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroText, _TaroNode);

  var _super2 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroText);

  function TaroText(text) {
    var _this4;

    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroText);

    _this4 = _super2.call(this, 3
    /* TEXT_NODE */
    , '#text');
    _this4._value = text;
    return _this4;
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroText, [{
    key: "textContent",
    set: function set(text) {
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "v"
        /* Text */
        ),
        value: text
      });
    },
    get: function get() {
      return this._value;
    }
  }, {
    key: "nodeValue",
    set: function set(text) {
      this.textContent = text;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return TaroText;
}(TaroNode);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */


var styleProperties = ['alignContent', 'alignItems', 'alignSelf', 'alignmentAdjust', 'alignmentBaseline', 'all', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'azimuth', 'backfaceVisibility', 'background', 'backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'baselineShift', 'blockOverflow', 'blockSize', 'bookmarkLabel', 'bookmarkLevel', 'bookmarkState', 'border', 'borderBlock', 'borderBlockColor', 'borderBlockEnd', 'borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth', 'borderBlockStart', 'borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth', 'borderBlockStyle', 'borderBlockWidth', 'borderBottom', 'borderBottomColor', 'borderBottomFitLength', 'borderBottomFitWidth', 'borderBottomImage', 'borderBottomLeftFitWidth', 'borderBottomLeftImage', 'borderBottomLeftRadius', 'borderBottomRightFitLength', 'borderBottomRightFitWidth', 'borderBottomRightImage', 'borderBottomRightRadius', 'borderBottomStyle', 'borderBottomWidth', 'borderBottomlEftFitLength', 'borderBoundary', 'borderBreak', 'borderCollapse', 'borderColor', 'borderCornerFit', 'borderCornerImage', 'borderCornerImageTransform', 'borderEndEndRadius', 'borderEndStartRadius', 'borderFit', 'borderFitLength', 'borderFitWidth', 'borderImage', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageTransform', 'borderImageWidth', 'borderInline', 'borderInlineColor', 'borderInlineEnd', 'borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth', 'borderInlineStart', 'borderInlineStartColor', 'borderInlineStartStyle', 'borderInlineStartWidth', 'borderInlineStyle', 'borderInlineWidth', 'borderLeft', 'borderLeftColor', 'borderLeftFitLength', 'borderLeftFitWidth', 'borderLeftImage', 'borderLeftStyle', 'borderLeftWidth', 'borderRadius', 'borderRight', 'borderRightColor', 'borderRightFitLength', 'borderRightFitWidth', 'borderRightImage', 'borderRightStyle', 'borderRightWidth', 'borderSpacing', 'borderStartEndRadius', 'borderStartStartRadius', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopFitLength', 'borderTopFitWidth', 'borderTopImage', 'borderTopLeftFitLength', 'borderTopLeftFitWidth', 'borderTopLeftImage', 'borderTopLeftRadius', 'borderTopRightFitLength', 'borderTopRightFitWidth', 'borderTopRightImage', 'borderTopRightRadius', 'borderTopStyle', 'borderTopWidth', 'borderWidth', 'bottom', 'boxDecorationBreak', 'boxShadow', 'boxSizing', 'boxSnap', 'breakAfter', 'breakBefore', 'breakInside', 'captionSide', 'caret', 'caretColor', 'caretShape', 'chains', 'clear', 'clip', 'clipPath', 'clipRule', 'color', 'colorAdjust', 'colorInterpolationFilters', 'colorScheme', 'columnCount', 'columnFill', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleStyle', 'columnRuleWidth', 'columnSpan', 'columnWidth', 'columns', 'contain', 'content', 'continue', 'counterIncrement', 'counterReset', 'counterSet', 'cue', 'cueAfter', 'cueBefore', 'cursor', 'direction', 'display', 'dominantBaseline', 'dropInitialAfterAdjust', 'dropInitialAfterAlign', 'dropInitialBeforeAdjust', 'dropInitialBeforeAlign', 'dropInitialSize', 'dropInitialValue', 'elevation', 'emptyCells', 'filter', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'floodColor', 'floodOpacity', 'flow', 'flowFrom', 'flowInto', 'font', 'fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontLanguageOverride', 'fontMaxSize', 'fontMinSize', 'fontOpticalSizing', 'fontPalette', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontSynthesis', 'fontSynthesisSmallCaps', 'fontSynthesisStyle', 'fontSynthesisWeight', 'fontVariant', 'fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantEmoji', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition', 'fontVariationSettings', 'fontWeight', 'footnoteDisplay', 'footnotePolicy', 'forcedColorAdjust', 'gap', 'glyphOrientationVertical', 'grid', 'gridArea', 'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'gridTemplate', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'hangingPunctuation', 'height', 'hyphenateCharacter', 'hyphenateLimitChars', 'hyphenateLimitLast', 'hyphenateLimitLines', 'hyphenateLimitZone', 'hyphens', 'imageOrientation', 'imageResolution', 'initialLetters', 'initialLettersAlign', 'initialLettersWrap', 'inlineBoxAlign', 'inlineSize', 'inlineSizing', 'inset', 'insetBlock', 'insetBlockEnd', 'insetBlockStart', 'insetInline', 'insetInlineEnd', 'insetInlineStart', 'isolation', 'justifyContent', 'justifyItems', 'justifySelf', 'left', 'letterSpacing', 'lightingColor', 'lineBreak', 'lineClamp', 'lineGrid', 'lineHeight', 'linePadding', 'lineSnap', 'lineStacking', 'lineStackingRuby', 'lineStackingShift', 'lineStackingStrategy', 'listStyle', 'listStyleImage', 'listStylePosition', 'listStyleType', 'margin', 'marginBlock', 'marginBlockEnd', 'marginBlockStart', 'marginBottom', 'marginInline', 'marginInlineEnd', 'marginInlineStart', 'marginLeft', 'marginRight', 'marginTop', 'marginTrim', 'markerSide', 'mask', 'maskBorder', 'maskBorderMode', 'maskBorderOutset', 'maskBorderRepeat', 'maskBorderSlice', 'maskBorderSource', 'maskBorderWidth', 'maskClip', 'maskComposite', 'maskImage', 'maskMode', 'maskOrigin', 'maskPosition', 'maskRepeat', 'maskSize', 'maskType', 'maxBlockSize', 'maxHeight', 'maxInlineSize', 'maxLines', 'maxWidth', 'minBlockSize', 'minHeight', 'minInlineSize', 'minWidth', 'mixBlendMode', 'navDown', 'navLeft', 'navRight', 'navUp', 'objectFit', 'objectPosition', 'offset', 'offsetAfter', 'offsetAnchor', 'offsetBefore', 'offsetDistance', 'offsetEnd', 'offsetPath', 'offsetPosition', 'offsetRotate', 'offsetStart', 'opacity', 'order', 'orphans', 'outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth', 'overflow', 'overflowBlock', 'overflowInline', 'overflowWrap', 'overflowX', 'overflowY', 'padding', 'paddingBlock', 'paddingBlockEnd', 'paddingBlockStart', 'paddingBottom', 'paddingInline', 'paddingInlineEnd', 'paddingInlineStart', 'paddingLeft', 'paddingRight', 'paddingTop', 'page', 'pageBreakAfter', 'pageBreakBefore', 'pageBreakInside', 'pause', 'pauseAfter', 'pauseBefore', 'perspective', 'perspectiveOrigin', 'pitch', 'pitchRange', 'placeContent', 'placeItems', 'placeSelf', 'playDuring', 'position', 'quotes', 'regionFragment', 'resize', 'richness', 'right', 'rowGap', 'rubyAlign', 'rubyMerge', 'rubyPosition', 'running', 'scrollBehavior', 'scrollMargin', 'scrollMarginBlock', 'scrollMarginBlockEnd', 'scrollMarginBlockStart', 'scrollMarginBottom', 'scrollMarginInline', 'scrollMarginInlineEnd', 'scrollMarginInlineStart', 'scrollMarginLeft', 'scrollMarginRight', 'scrollMarginTop', 'scrollPadding', 'scrollPaddingBlock', 'scrollPaddingBlockEnd', 'scrollPaddingBlockStart', 'scrollPaddingBottom', 'scrollPaddingInline', 'scrollPaddingInlineEnd', 'scrollPaddingInlineStart', 'scrollPaddingLeft', 'scrollPaddingRight', 'scrollPaddingTop', 'scrollSnapAlign', 'scrollSnapStop', 'scrollSnapType', 'shapeImageThreshold', 'shapeInside', 'shapeMargin', 'shapeOutside', 'speak', 'speakHeader', 'speakNumeral', 'speakPunctuation', 'speechRate', 'stress', 'stringSet', 'tabSize', 'tableLayout', 'textAlign', 'textAlignAll', 'textAlignLast', 'textCombineUpright', 'textDecoration', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textEmphasis', 'textEmphasisColor', 'textEmphasisPosition', 'textEmphasisStyle', 'textGroupAlign', 'textHeight', 'textIndent', 'textJustify', 'textOrientation', 'textOverflow', 'textShadow', 'textSpaceCollapse', 'textSpaceTrim', 'textSpacing', 'textTransform', 'textUnderlinePosition', 'textWrap', 'top', 'transform', 'transformBox', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'unicodeBidi', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'willChange', 'wordBreak', 'wordSpacing', 'wordWrap', 'wrapAfter', 'wrapBefore', 'wrapFlow', 'wrapInside', 'wrapThrough', 'writingMode', 'zIndex'];
var PROPERTY_THRESHOLD = 2046;
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';

function setStyle(newVal, styleKey) {
  var old = this[styleKey];

  if (newVal) {
    this._usedStyleProp.add(styleKey);
  }

  warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, "Style \u5C5E\u6027 ".concat(styleKey, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002"));

  if (old !== newVal) {
    this._value[styleKey] = newVal;

    this._element.enqueueUpdate({
      path: "".concat(this._element._path, ".", "st"
      /* Style */
      ),
      value: this.cssText
    });
  }
}

function initStyle(ctor) {
  var properties = {};

  var _loop = function _loop(i) {
    var styleKey = styleProperties[i];
    properties[styleKey] = {
      get: function get() {
        return this._value[styleKey] || '';
      },
      set: function set(newVal) {
        setStyle.call(this, newVal, styleKey);
      }
    };
  };

  for (var i = 0; i < styleProperties.length; i++) {
    _loop(i);
  }

  Object.defineProperties(ctor.prototype, properties);
}

var Style = /*#__PURE__*/function () {
  function Style(element) {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Style);

    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Style, [{
    key: "setCssVariables",
    value: function setCssVariables(styleKey) {
      var _this5 = this;

      this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return _this5._value[styleKey] || '';
        },
        set: function set(newVal) {
          setStyle.call(_this5, newVal, styleKey);
        }
      });
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      if (propertyName[0] === '-') {
        this.setCssVariables(propertyName);
      } else {
        propertyName = toCamelCase(propertyName);
      }

      if (isUndefined(value)) {
        return;
      }

      if (value === null || value === '') {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = toCamelCase(propertyName);

      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }

      var value = this[propertyName];
      this[propertyName] = '';

      this._usedStyleProp.delete(propertyName);

      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = toCamelCase(propertyName);
      var value = this[propertyName];

      if (!value) {
        return '';
      }

      return value;
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this6 = this;

      var text = '';

      this._usedStyleProp.forEach(function (key) {
        var val = _this6[key];
        if (!val) return;
        text += "".concat(toDashed(key), ": ").concat(val, ";");
      });

      return text;
    },
    set: function set(str) {
      var _this7 = this;

      if (str == null) {
        str = '';
      }

      this._usedStyleProp.forEach(function (prop) {
        _this7.removeProperty(prop);
      });

      if (str === '') {
        return;
      }

      var rules = str.split(';');

      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();

        if (rule === '') {
          continue;
        }

        var _rule$split = rule.split(':'),
            _rule$split2 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_rule$split, 2),
            propName = _rule$split2[0],
            val = _rule$split2[1];

        if (isUndefined(val)) {
          continue;
        }

        this.setProperty(propName.trim(), val.trim());
      }
    }
  }]);

  return Style;
}();

initStyle(Style);
/* eslint-disable no-dupe-class-members */

var TaroElement = /*#__PURE__*/function (_TaroNode2) {
  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroElement, _TaroNode2);

  var _super3 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroElement);

  function TaroElement(nodeType, nodeName) {
    var _this8;

    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroElement);

    _this8 = _super3.call(this, nodeType || 1
    /* ELEMENT_NODE */
    , nodeName);
    _this8.props = {};
    _this8.dataset = EMPTY_OBJ;
    _this8.tagName = nodeName.toUpperCase();
    _this8.style = new Style(Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this8));
    warn(_this8.tagName === 'MAP' && "weapp" === 'weapp', '微信小程序 map 组件的 `setting` 属性需要传递一个默认值。详情：\n https://developers.weixin.qq.com/miniprogram/dev/component/map.html');
    return _this8;
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroElement, [{
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !isUndefined(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.setAttribute('focus', true);
    }
  }, {
    key: "blur",
    value: function blur() {
      this.setAttribute('focus', false);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      warn(isString(value) && value.length > PROPERTY_THRESHOLD, "\u5143\u7D20 ".concat(this.nodeName, " \u7684 \u5C5E\u6027 ").concat(qualifiedName, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002"));

      if (qualifiedName === 'style') {
        this.style.cssText = value;
        qualifiedName = "st"
        /* Style */
        ;
      } else if (qualifiedName === 'id') {
        eventSource.delete(this.uid);
        this.props[qualifiedName] = this.uid = value;
        eventSource.set(value, this);
        qualifiedName = 'uid';
      } else {
        this.props[qualifiedName] = value;

        if (qualifiedName === 'class') {
          qualifiedName = "cl"
          /* Class */
          ;
        }

        if (qualifiedName.startsWith('data-')) {
          if (this.dataset === EMPTY_OBJ) {
            this.dataset = Object.create(null);
          }

          this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] = value;
        }
      }

      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat( false ? undefined : qualifiedName),
        value: value
      });
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      if (qualifiedName === 'style') {
        this.style.cssText = '';
      } else if (false) { var compName; } else {
        delete this.props[qualifiedName];
      }

      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat( false ? undefined : qualifiedName),
        value: ''
      });
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
      return attr !== null && attr !== void 0 ? attr : '';
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;
      var listeners = this.__handlers[event.type];

      if (!isArray(listeners)) {
        return;
      }

      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;

        if (listener._stop) {
          listener._stop = false;
        } else {
          result = listener.call(this, event);
        }

        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }

        if (event._end && event._stop) {
          break;
        }
      }

      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }

      return listeners != null;
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this; // eslint-disable-next-line no-cond-assign

      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];

        if (!isArray(listeners)) {
          continue;
        }

        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(val) {
      this.setAttribute('id', val);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute('class') || '';
    },
    set: function set(val) {
      this.setAttribute('class', val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute('style') || '';
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var _this9 = this;

      var propKeys = Object.keys(this.props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (p) {
        return {
          name: p,
          value: _this9.props[p]
        };
      });
      return attrs.concat(style ? {
        name: 'style',
        value: style
      } : []);
    }
  }, {
    key: "parentElement",
    get: function get() {
      if (this.parentNode instanceof TaroElement) {
        return this.parentNode;
      }

      return null;
    }
  }, {
    key: "textContent",
    get: function get() {
      var text = '';

      for (var i = 0; i < this.childNodes.length; i++) {
        var element = this.childNodes[i];
        text += element.textContent;
      }

      return text;
    },
    set: function set(text) {
      Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(TaroElement.prototype), "textContent", text, this, true);
    }
  }]);

  return TaroElement;
}(TaroNode);

var FormElement = /*#__PURE__*/function (_TaroElement) {
  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(FormElement, _TaroElement);

  var _super4 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(FormElement);

  function FormElement() {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, FormElement);

    return _super4.apply(this, arguments);
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(FormElement, [{
    key: "value",
    get: function get() {
      // eslint-disable-next-line dot-notation
      var val = this.props['value'];
      return val == null ? '' : val;
    },
    set: function set(val) {
      this.setAttribute('value', val);
    }
  }]);

  return FormElement;
}(TaroElement);

var Performance = /*#__PURE__*/function () {
  function Performance() {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Performance);

    this.recorder = new Map();
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Performance, [{
    key: "start",
    value: function start(id) {
      if (!options.debug) {
        return;
      }

      this.recorder.set(id, Date.now());
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (!options.debug) {
        return;
      }

      var now = Date.now();
      var prev = this.recorder.get(id);
      var time = now - prev; // eslint-disable-next-line no-console

      console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
    }
  }]);

  return Performance;
}();

var perf = new Performance();

var TaroRootElement = /*#__PURE__*/function (_TaroElement2) {
  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroRootElement, _TaroElement2);

  var _super5 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroRootElement);

  function TaroRootElement() {
    var _this10;

    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroRootElement);

    _this10 = _super5.call(this, 1
    /* ELEMENT_NODE */
    , 'root');
    _this10.pendingUpdate = false;
    _this10.updatePayloads = [];
    _this10.pendingFlush = false;
    _this10.updateCallbacks = [];
    _this10.ctx = null;
    return _this10;
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroRootElement, [{
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);

      if (this.pendingUpdate || this.ctx === null) {
        return;
      }

      this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this11 = this;

      var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prerender = arguments.length > 1 ? arguments[1] : undefined;
      this.pendingUpdate = true;
      var ctx = this.ctx;
      setTimeout(function () {
        perf.start(SET_DATA);
        var data = Object.create(null);
        var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);

        while (_this11.updatePayloads.length > 0) {
          var _this11$updatePayload = _this11.updatePayloads.shift(),
              path = _this11$updatePayload.path,
              value = _this11$updatePayload.value;

          if (path.endsWith("cn"
          /* Childnodes */
          )) {
            resetPaths.add(path);
          }

          data[path] = value;
        }

        var _loop2 = function _loop2(_path) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path.includes(p) && _path !== p) {
              delete data[_path];
            }
          });
          var value = data[_path];

          if (isFunction(value)) {
            data[_path] = value();
          }
        };

        for (var _path in data) {
          _loop2(_path);
        }

        if (isFunction(prerender)) {
          prerender(data);
        } else {
          _this11.pendingUpdate = false;
          ctx.setData(data, function () {
            perf.stop(SET_DATA);

            if (!_this11.pendingFlush) {
              _this11.flushUpdateCallback();
            }

            if (initRender) {
              perf.stop(PAGE_INIT);
            }
          });
        }
      }, 0);
    }
  }, {
    key: "enqueueUpdateCallbak",
    value: function enqueueUpdateCallbak(cb, ctx) {
      this.updateCallbacks.push(function () {
        ctx ? cb.call(ctx) : cb();
      });
    }
  }, {
    key: "flushUpdateCallback",
    value: function flushUpdateCallback() {
      this.pendingFlush = false;
      var copies = this.updateCallbacks.slice(0);
      this.updateCallbacks.length = 0;

      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
  }, {
    key: "_path",
    get: function get() {
      return 'root';
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }]);

  return TaroRootElement;
}(TaroElement);

var isBrowser = typeof document !== 'undefined' && !!document.scripts;
var doc = isBrowser ? document : EMPTY_OBJ;
var win = isBrowser ? window : EMPTY_OBJ;

var TaroDocument = /*#__PURE__*/function (_TaroElement3) {
  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroDocument, _TaroElement3);

  var _super6 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroDocument);

  function TaroDocument() {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroDocument);

    return _super6.call(this, 9
    /* DOCUMENT_NODE */
    , '#document');
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      if (type === 'root') {
        return new TaroRootElement();
      }

      if (controlledComponent.has(type)) {
        return new FormElement(1
        /* ELEMENT_NODE */
        , type);
      }

      return new TaroElement(1
      /* ELEMENT_NODE */
      , type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return new TaroText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      var el = eventSource.get(id);
      return isUndefined(el) ? null : el;
    } // @TODO: @PERF: 在 hydrate 移除掉空的 node

  }, {
    key: "createComment",
    value: function createComment() {
      return new TaroText('');
    }
  }]);

  return TaroDocument;
}(TaroElement);

function createDocument() {
  var doc = new TaroDocument();
  doc.appendChild(doc.documentElement = doc.createElement('html'));
  doc.documentElement.appendChild(doc.head = doc.createElement('head'));
  doc.documentElement.appendChild(doc.createElement('body'));
  var app = doc.createElement('app');
  app.id = 'app';
  var container = doc.createElement('container'); // 多包一层主要为了兼容 vue

  container.appendChild(app);
  doc.documentElement.lastChild.appendChild(container);
  return doc;
}

var document$1 = isBrowser ? doc : createDocument();
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var navigator = isBrowser ? win.navigator : {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Taro',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
  vendor: 'Joyent',
  vendorSub: ''
}; // https://github.com/myrne/performance-now

var now;

(function () {
  var loadTime;

  if (typeof performance !== 'undefined' && performance !== null && performance.now) {
    now = function now() {
      return performance.now();
    };
  } else if (Date.now) {
    now = function now() {
      return Date.now() - loadTime;
    };

    loadTime = Date.now();
  } else {
    now = function now() {
      return new Date().getTime() - loadTime;
    };

    loadTime = new Date().getTime();
  }
})();

var lastTime = 0; // https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0

var raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
  var _now = now();

  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.

  return setTimeout(function () {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
var caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;
var window$1 = isBrowser ? win : {
  navigator: navigator,
  document: document$1
};

if (true) {
  window$1.requestAnimationFrame = raf;
  window$1.cancelAnimationFrame = caf;
  window$1.Date = Date;
  window$1.setTimeout = setTimeout;
}

var Current = {
  app: null,
  router: null,
  page: null
};

var Events = /*#__PURE__*/function () {
  function Events(opts) {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Events, [{
    key: "on",
    value: function on(eventName, callback, context) {
      var event, node, tail, list;

      if (!callback) {
        return this;
      }

      eventName = eventName.split(Events.eventSplitter);
      var calls = this.callbacks;

      while (event = eventName.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this12 = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this12, args);

        _this12.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      var rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;
var eventCenter;

if (false) {} else {
  eventCenter = new Events();
}
/* eslint-disable dot-notation */


var instances = new Map();

function injectPageInstance(inst, id) {
  instances.set(id, inst);
}

function getPageInstance(id) {
  return instances.get(id);
}

function addLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path : '/' + path;
}

var pageId = incrementId();

function safeExecute(path, lifecycle) {
  var isReact = "react" !== 'vue'; // isReact means all kind of react-like library

  var instance = instances.get(path);

  if (instance == null) {
    return;
  }

  if (isReact) {
    if (lifecycle === 'onShow') {
      lifecycle = 'componentDidShow';
    } else if (lifecycle === 'onHide') {
      lifecycle = 'componentDidHide';
    }
  }

  var func = isReact ? instance[lifecycle] : instance.$options[lifecycle];

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  if (isArray(func)) {
    for (var i = 0; i < func.length; i++) {
      func[i].apply(instance, args);
    }

    return;
  }

  if (!isFunction(func)) {
    return;
  }

  return func.apply(instance, args);
}

function stringify(obj) {
  if (obj == null) {
    return '';
  }

  return '?' + Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
}

function getPath(id, options) {
  var path = id;

  if (!isBrowser) {
    path = id + stringify(options);
  }

  return path;
}

function getOnReadyEventKey(path) {
  return path + '.' + 'onReady';
}

function getOnShowEventKey(path) {
  return path + '.' + 'onShow';
}

function getOnHideEventKey(path) {
  return path + '.' + 'onHide';
}

function createPageConfig(component, pageName, data) {
  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId()); // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上

  var pageElement = null;
  var config = {
    onLoad: function onLoad(options, cb) {
      var _this13 = this;

      perf.start(PAGE_INIT);
      var path = getPath(id, options);
      Current.router = {
        params: options,
        path: addLeadingSlash(this.route || this.__route__),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id)
      };
      Current.app.mount(component, path, function () {
        pageElement = document$1.getElementById(path);
        ensure(pageElement !== null, '没有找到页面实例。');
        safeExecute(path, 'onLoad', options);

        if (!isBrowser) {
          pageElement.ctx = _this13;
          pageElement.performUpdate(true, cb);
        }
      });
    },
    onReady: function onReady() {
      var path = getPath(id, this.options);
      raf(function () {
        eventCenter.trigger(getOnReadyEventKey(id));
      });
      safeExecute(path, 'onReady');
    },
    onUnload: function onUnload() {
      var path = getPath(id, this.options);
      Current.app.unmount(path, function () {
        instances.delete(path);

        if (pageElement) {
          pageElement.ctx = null;
        }
      });
    },
    onShow: function onShow() {
      Current.page = this;
      var path = getPath(id, this.options);
      Current.router = {
        params: this.options,
        path: addLeadingSlash(this.route || this.__route__),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id)
      };
      raf(function () {
        eventCenter.trigger(getOnShowEventKey(id));
      });
      safeExecute(path, 'onShow');
    },
    onHide: function onHide() {
      Current.page = null;
      Current.router = null;
      var path = getPath(id, this.options);
      raf(function () {
        eventCenter.trigger(getOnHideEventKey(id));
      });
      safeExecute(path, 'onHide');
    },
    onPullDownRefresh: function onPullDownRefresh() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPullDownRefresh');
    },
    onReachBottom: function onReachBottom() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onReachBottom');
    },
    onPageScroll: function onPageScroll(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPageScroll', options);
    },
    onShareAppMessage: function onShareAppMessage(options) {
      var target = options.target;

      if (target != null) {
        var _id = target.id;
        var element = document$1.getElementById(_id);

        if (element != null) {
          options.target.dataset = element.dataset;
        }
      }

      var path = getPath(id, this.options);
      return safeExecute(path, 'onShareAppMessage', options);
    },
    onResize: function onResize(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onResize', options);
    },
    onTabItemTap: function onTabItemTap(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onTabItemTap', options);
    },
    onTitleClick: function onTitleClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onTitleClick');
    },
    onOptionMenuClick: function onOptionMenuClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onOptionMenuClick');
    },
    onPopMenuClick: function onPopMenuClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPopMenuClick');
    },
    onPullIntercept: function onPullIntercept() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPullIntercept');
    }
  };
  config.eh = eventHandler;

  if (!isUndefined(data)) {
    config.data = data;
  }

  if (isBrowser) {
    config.path = id;
  }

  return config;
}

function createComponentConfig(component, componentName, data) {
  var _a, _b, _c;

  var id = componentName !== null && componentName !== void 0 ? componentName : "taro_component_".concat(pageId());
  var componentElement = null;
  var config = {
    attached: function attached() {
      var _this14 = this;

      perf.start(PAGE_INIT);
      Current.app.mount(component, id, function () {
        componentElement = document$1.getElementById(id);
        ensure(componentElement !== null, '没有找到组件实例。');
        safeExecute(id, 'onLoad');

        if (!isBrowser) {
          componentElement.ctx = _this14;
          componentElement.performUpdate(true);
        }
      });
    },
    detached: function detached() {
      Current.app.unmount(id, function () {
        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    pageLifetimes: {
      show: function show() {
        safeExecute(id, 'onShow');
      },
      hide: function hide() {
        safeExecute(id, 'onHide');
      }
    },
    methods: {
      eh: eventHandler
    }
  };

  if (!isUndefined(data)) {
    config.data = data;
  }

  config['options'] = (_a = component === null || component === void 0 ? void 0 : component['options']) !== null && _a !== void 0 ? _a : EMPTY_OBJ;
  config['externalClasses'] = (_b = component === null || component === void 0 ? void 0 : component['externalClasses']) !== null && _b !== void 0 ? _b : EMPTY_OBJ;
  config['behaviors'] = (_c = component === null || component === void 0 ? void 0 : component['behaviors']) !== null && _c !== void 0 ? _c : EMPTY_OBJ;
  return config;
}

function createRecursiveComponentConfig() {
  return {
    properties: {
      i: {
        type: Object,
        value: Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({}, "nn"
        /* NodeName */
        , 'view')
      }
    },
    observers: {
      i: function i(val) {
        warn(val["nn"
        /* NodeName */
        ] === '#text', "\u8BF7\u5728\u6B64\u5143\u7D20\u5916\u518D\u5957\u4E00\u5C42\u975E Text \u5143\u7D20\uFF1A<text>".concat(val["v"
        /* Text */
        ], "</text>\uFF0C\u8BE6\u60C5\uFF1Ahttps://github.com/NervJS/taro/issues/6054"));
      }
    },
    options: {
      addGlobalClass: true
    },
    methods: {
      eh: eventHandler
    }
  };
}

function connectReactPage(R, id) {
  var h = R.createElement;
  return function (component) {
    var _a; // eslint-disable-next-line dot-notation


    var isReactComponent = isFunction(component['render']) || !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) || component.prototype instanceof R.Component; // compat for some others react-like library

    var inject = function inject(node) {
      return node && injectPageInstance(node, id);
    };

    var refs = isReactComponent ? {
      ref: inject
    } : {
      forwardedRef: inject
    };

    if (PageContext === EMPTY_OBJ) {
      PageContext = R.createContext('');
    }

    return /*#__PURE__*/function (_R$Component) {
      Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Page, _R$Component);

      var _super7 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Page);

      function Page() {
        var _this15;

        Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Page);

        _this15 = _super7.apply(this, arguments);
        _this15.state = {
          hasError: false
        };
        return _this15;
      }

      Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Page, [{
        key: "componentDidCatch",
        // React 16 uncaught error 会导致整个应用 crash，
        // 目前把错误缩小到页面
        value: function componentDidCatch(error, info) {
          console.warn(error);
          console.error(info.componentStack);
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.state.hasError ? [] : h(PageContext.Provider, {
            value: id
          }, h(component, Object.assign(Object.assign({}, this.props), refs)));

          if (isBrowser) {
            return h('div', {
              id: id,
              className: 'taro_page'
            }, children);
          }

          return h('root', {
            id: id
          }, children);
        }
      }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
          console.warn(error);
          return {
            hasError: true
          };
        }
      }]);

      return Page;
    }(R.Component);
  };
} // 初始值设置为 any 主要是为了过 TS 的校验


var R = EMPTY_OBJ;
var PageContext = EMPTY_OBJ;
var ReactDOM;

function createReactApp(App, react, reactdom, config) {
  R = react;
  ReactDOM = reactdom;
  ensure(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
  var ref = R.createRef();
  var wrapper;

  var AppWrapper = /*#__PURE__*/function (_R$Component2) {
    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AppWrapper, _R$Component2);

    var _super8 = Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AppWrapper);

    function AppWrapper() {
      var _this16;

      Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, AppWrapper);

      _this16 = _super8.apply(this, arguments); // run createElement() inside the render function to make sure that owner is right

      _this16.pages = [];
      _this16.elements = [];
      return _this16;
    }

    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(AppWrapper, [{
      key: "mount",
      value: function mount(component, id, cb) {
        var page = function page() {
          return R.createElement(component, {
            key: id,
            tid: id
          });
        };

        this.pages.push(page);
        this.forceUpdate(cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        for (var i = 0; i < this.elements.length; i++) {
          var element = this.elements[i];

          if (element.key === id) {
            this.elements.splice(i, 1);
            break;
          }
        }

        this.forceUpdate(cb);
      }
    }, {
      key: "render",
      value: function render() {
        while (this.pages.length > 0) {
          var page = this.pages.pop();
          this.elements.push(page());
        }

        return R.createElement(App, {
          ref: ref
        }, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
      }
    }]);

    return AppWrapper;
  }(R.Component);

  var AppConfig = /*#__PURE__*/function () {
    function AppConfig() {
      Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, AppConfig);

      this.config = config;
    }

    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(AppConfig, [{
      key: "onLaunch",
      value: function onLaunch(options) {
        // eslint-disable-next-line react/no-render-return-value
        wrapper = ReactDOM.render(R.createElement(AppWrapper), document$1.getElementById('app'));
        var app = ref.current;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (app != null && isFunction(app.onLaunch)) {
          app.onLaunch(options);
        }
      }
    }, {
      key: "onShow",
      value: function onShow(options) {
        var app = ref.current;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (app != null && isFunction(app.componentDidShow)) {
          app.componentDidShow(options);
        }
      }
    }, {
      key: "onHide",
      value: function onHide(options) {
        var app = ref.current;

        if (app != null && isFunction(app.componentDidHide)) {
          app.componentDidHide(options);
        }
      }
    }, {
      key: "render",
      value: function render(cb) {
        wrapper.forceUpdate(cb);
      }
    }, {
      key: "mount",
      value: function mount(component, id, cb) {
        var page = connectReactPage(R, id)(component);
        wrapper.mount(page, id, cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        wrapper.unmount(id, cb);
      }
    }]);

    return AppConfig;
  }();

  Current.app = new AppConfig();
  return Current.app;
}

function connectVuePage(Vue, id) {
  return function (component) {
    var injectedPage = Vue.extend({
      props: {
        tid: String
      },
      mixins: [component, {
        created: function created() {
          injectPageInstance(this, id);
        }
      }]
    });
    var options = {
      render: function render(h) {
        return h(isBrowser ? 'div' : 'root', {
          attrs: {
            id: id,
            class: isBrowser ? 'taro_page' : ''
          }
        }, [h(injectedPage, {
          props: {
            tid: id
          }
        })]);
      }
    };
    return options;
  };
}

var Vue;

function createVueApp(App, vue, config) {
  Vue = vue;
  ensure(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
  Vue.config.getTagNamespace = noop;
  var elements = [];
  var pages = [];
  var appInstance;
  var wrapper = new Vue({
    render: function render(h) {
      while (pages.length > 0) {
        var page = pages.pop();
        elements.push(page(h));
      }

      return h(App.$options, {
        ref: 'app'
      }, elements.slice());
    },
    methods: {
      mount: function mount(component, id, cb) {
        pages.push(function (h) {
          return h(component, {
            key: id
          });
        });
        this.updateSync(cb);
      },
      updateSync: function updateSync(cb) {
        this._update(this._render(), false);

        this.$children.forEach(function (child) {
          return child._update(child._render(), false);
        });
        cb();
      },
      unmount: function unmount(id, cb) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (element.key === id) {
            elements.splice(i, 1);
            break;
          }
        }

        this.updateSync(cb);
      }
    }
  });

  var AppConfig = /*#__PURE__*/function () {
    function AppConfig() {
      Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, AppConfig);

      this.config = config;
    }

    Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(AppConfig, [{
      key: "onLaunch",
      value: function onLaunch(options) {
        wrapper.$mount(document$1.getElementById('app'));
        appInstance = wrapper.$refs.app;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (appInstance != null && isFunction(appInstance.$options.onLaunch)) {
          appInstance.$options.onLaunch.call(appInstance, options);
        }
      }
    }, {
      key: "onShow",
      value: function onShow(options) {
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (appInstance != null && isFunction(appInstance.$options.onShow)) {
          appInstance.$options.onShow.call(appInstance, options);
        }
      }
    }, {
      key: "onHide",
      value: function onHide(options) {
        if (appInstance != null && isFunction(appInstance.$options.onHide)) {
          appInstance.$options.onHide.call(appInstance, options);
        }
      }
    }, {
      key: "mount",
      value: function mount(component, id, cb) {
        var page = connectVuePage(Vue, id)(component);
        wrapper.mount(page, id, cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        wrapper.unmount(id, cb);
      }
    }]);

    return AppConfig;
  }();

  Current.app = new AppConfig();
  return Current.app;
}

var taroHooks = function taroHooks(lifecycle) {
  return function (fn) {
    var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var id = R.useContext(PageContext);
    R.useLayoutEffect(function () {
      var inst = getPageInstance(id);
      var first = false;

      if (inst == null) {
        first = true;
        inst = Object.create(null);
      }

      if (lifecycle !== 'onShareAppMessage') {
        inst[lifecycle] = [].concat(Object(_Users_obito_Desktop_demo_wx_printer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(inst[lifecycle] || []), [fn.bind(null)]);
      } else {
        inst[lifecycle] = fn.bind(null);
      }

      if (first) {
        injectPageInstance(inst, id);
      }
    }, deps);
  };
};

var useDidShow = taroHooks('componentDidShow');
var useDidHide = taroHooks('componentDidHide');
var usePullDownRefresh = taroHooks('onPullDownRefresh');
var useReachBottom = taroHooks('onReachBottom');
var usePageScroll = taroHooks('onPageScroll');
var useResize = taroHooks('onResize');
var useShareAppMessage = taroHooks('onShareAppMessage');
var useTabItemTap = taroHooks('onTabItemTap');
var useTitleClick = taroHooks('onTitleClick');
var useOptionMenuClick = taroHooks('onOptionMenuClick');
var usePullIntercept = taroHooks('onPullIntercept');
var useReady = taroHooks('onReady');

var useRouter = function useRouter() {
  var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return dynamic ? Current.router : R.useMemo(function () {
    return Current.router;
  }, []);
};

var useScope = function useScope() {
  return undefined;
};

function removeLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path.slice(1) : path;
}

var nextTick = function nextTick(cb, ctx) {
  var router = Current.router;

  var timerFunc = function timerFunc() {
    setTimeout(function () {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };

  if (!isBrowser && router !== null) {
    var pageElement = null;
    var path = getPath(removeLeadingSlash(router.path), router.params);
    pageElement = document$1.getElementById(path);

    if (pageElement !== null) {
      pageElement.enqueueUpdateCallbak(cb, ctx);
    } else {
      timerFunc();
    }
  } else {
    timerFunc();
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["cancelAnimationFrame"]))

/***/ })

}]);
//# sourceMappingURL=taro.js.map