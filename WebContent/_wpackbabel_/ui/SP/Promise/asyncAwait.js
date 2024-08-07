function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/*amd /ui/SP/Promise/asyncAwait.xml 24263 ce6c6cd1f958ffcd3332a0eedc3a245c3681b4b4418ff8adab8cc64ac735ade4 */
define({
  declaration: {
    A: {
      version: '1.0',
      encoding: 'UTF-8'
    }
  },
  E: [{
    T: 1,
    N: 'html',
    A: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      'xmlns:ev': 'http://www.w3.org/2001/xml-events',
      'xmlns:w2': 'http://www.inswave.com/websquare',
      'xmlns:xf': 'http://www.w3.org/2002/xforms'
    },
    E: [{
      T: 1,
      N: 'head',
      A: {},
      E: [{
        T: 1,
        N: 'w2:type',
        E: [{
          T: 3,
          text: 'COMPONENT'
        }]
      }, {
        T: 1,
        N: 'w2:buildDate'
      }, {
        T: 1,
        N: 'xf:model',
        E: [{
          T: 1,
          N: 'w2:dataCollection',
          A: {
            baseNode: 'map'
          },
          E: [{
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_fileDesc'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'desc',
                  name: '',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'test',
                  name: '',
                  dataType: 'text'
                }
              }]
            }, {
              T: 1,
              N: 'w2:data',
              A: {
                use: 'true'
              },
              E: [{
                T: 1,
                N: 'desc',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 Layer Alert, Confirm, Popup에서 Async/Await 기술을 적용하는 방법을 제공한다.\nAsync/Await은 Internet Explorer에서는 지원하지 않습니다.\n</div>\n<div class="etc_tit">1. ALERT</div>\n  - Async/Await 기술을 적용해서 Layer Alert 창을 실행하는 방법을 제공한다.\n<div class="etc_tit">2. CONFIRM</div>\n  - Async/Await 기술을 적용해서 Layer Confirm 창을 실행하는 방법을 제공한다.\n</pre>\n<div class="etc_tit">3. 반복 ALERT</div>\n  - Async/Await 기술을 적용해서 반복문에서 Layer Alert 창을 실행하는 방법을 제공한다.\n<div class="etc_tit">4. 반복 CONFIRM</div>\n  - Async/Await 기술을 적용해서 반복문에서 Layer Confirm 창을 실행하는 방법을 제공한다.\n</pre>\n<div class="etc_tit">5. 팝업</div>\n  - Async/Await 기술을 적용해서 Layer 팝업창 실행하는 방법을 제공한다.\n<div class="etc_tit">6. Submission</div>\n  - Async/Await 기술을 적용해서 Submission을 실행하는 방법을 제공한다.\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n1. ALERT\n1) [실행] 버튼을 클릭한다.\n\n2. CONFIRM\n1) [실행] 버튼을 클릭한다.\n\n3. 반복 ALERT\n1) [실행] 버튼을 클릭한다.\n\n4. 반복 CONFIRM\n1) [실행] 버튼을 클릭한다.\n\n5. 팝업\n1) [실행] 버튼을 클릭한다.\n\n6. Submission\n1) [실행] 버튼을 클릭한다.\n\n7. 반복 정적 Submission\n1) [실행] 버튼을 클릭한다.\n\n8. 반복 동적 Submission\n1) [실행] 버튼을 클릭한다.\n\n<div class="etc_tit">2. 결과</div>\n1. ALERT\n1) Alert 창이 순서대로 실행된다.\n\n2. CONFIRM\n1) Confirm 창이 순서대로 실행된다.\n\n3. 반복 ALERT\n1) 반복문에서 Alert 창이 순서대로 실행된다.\n\n4. 반복 CONFIRM\n1) 반복문에서 Confirm 창이 순서대로 실행된다.\n\n5. 팝업\n1) 팝업 창이 순서대로 실행된다.\n\n6. Submission\n1) Submission이 순서대로 실행된다.\n\n7. 반복 정적 Submission\n1) 정적으로 생성된 Submission이 반복해서 실행된다.\n\n8. 반복 동적 Submission\n1) 동적으로 생성된 Submission이 반복해서 실행된다.\n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              id: 'dlt_sampleCode',
              baseNode: 'map'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case1-1',
                  name: 'case1-1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case1-2',
                  name: 'case1-2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case2-1',
                  name: 'case2-1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case2-2',
                  name: 'case2-2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case3-1',
                  name: 'case3-1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case3-2',
                  name: 'case3-2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case4-1',
                  name: 'case4-1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case4-2',
                  name: 'case4-2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case5',
                  name: 'case5',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case6',
                  name: 'case6',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case7',
                  name: 'case7',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'case8',
                  name: 'case8',
                  dataType: 'text'
                }
              }]
            }, {
              T: 1,
              N: 'w2:data',
              A: {
                use: 'true'
              },
              E: [{
                T: 1,
                N: 'case1-1',
                E: [{
                  T: 4,
                  cdata: 'alert("Step - 1");\nconsole.log("Step - 1");\n\nalert("Step - 2");\nconsole.log("Step - 2");\n\nalert("Step - 3");\nconsole.log("Step - 3");'
                }]
              }, {
                T: 1,
                N: 'case1-2',
                E: [{
                  T: 4,
                  cdata: 'await com.win.alert("Step - 1");\nconsole.log("Step - 1");\n\nawait com.win.alert("Step - 2");\nconsole.log("Step - 2");\n\nawait com.win.alert("Step - 3");\nconsole.log("Step - 3");'
                }]
              }, {
                T: 1,
                N: 'case2-1',
                E: [{
                  T: 4,
                  cdata: 'var rtn = confirm("확인창");\nif (rtn) {\n	console.log("1차 확인 선택");\n	rtn = confirm("확인 선택 후 2차확인");\n} else {\n	console.log("1차 취소 선택");\n	rtn = confirm("취소 선택 후 2차확인");\n}\n\nif (rtn) {\n	console.log("2차 확인 선택");\n} else {\n	console.log("2차 취소 선택");\n}'
                }]
              }, {
                T: 1,
                N: 'case2-2',
                E: [{
                  T: 4,
                  cdata: 'if (await com.win.confirm("확인창")) {\n	console.log("1차 확인 선택");\n	var rtn = await com.win.confirm("확인 선택 후 1차확인");\n} else {\n	console.log("1차 취소 선택");\n	var rtn = await com.win.confirm("취소 선택 후 1차확인");\n}\n\nif (rtn) {\n	console.log("2차 확인 선택");\n} else {\n	console.log("2차 취소 선택");\n}'
                }]
              }, {
                T: 1,
                N: 'case3-1',
                E: [{
                  T: 4,
                  cdata: 'scwin.idx = 0; // 반복횟수\nfor (var i = 0; i < 5; i++) {\n	scwin.idx++;\n	console.log(scwin.idx + " 반복횟수");\n	alert(scwin.idx + " 반복횟수");\n}\n\nconsole.log("최종확인");\nalert("최종확인");'
                }]
              }, {
                T: 1,
                N: 'case3-2',
                E: [{
                  T: 4,
                  cdata: 'scwin.idx = 0; // 반복횟수\nfor (var i = 0; i < 5; i++) {\n	scwin.idx++\n	console.log(scwin.idx + " 반복횟수");\n	await com.win.alert(scwin.idx + " 반복횟수");\n};\nconsole.log("최종확인");\nawait com.win.alert("최종확인");'
                }]
              }, {
                T: 1,
                N: 'case4-1',
                E: [{
                  T: 4,
                  cdata: 'var arr = [];\nvar rtn;\nscwin.idx = 0;\n\nfor (var i = 0; i < 3; i++) {\n	rtn = confirm(scwin.idx+1 +"확인체크");\n	if (rtn) { \n		arr.push(scwin.idx+1 + "확인");\n	} else { \n		arr.push(scwin.idx+1 +"취소");\n	}\n	console.log(scwin.idx + " 반복횟수");\n	scwin.idx++\n}\n\nalert(arr.join(", ") +"선택함");'
                }]
              }, {
                T: 1,
                N: 'case4-2',
                E: [{
                  T: 4,
                  cdata: 'var arr = [];\nscwin.idx = 0;\n\nfor (var i = 0; i < 3; i++) {\n	if (await com.win.confirm(scwin.idx+1 +"확인체크")) {\n		arr.push(scwin.idx+1 + "확인");\n	} else {\n		arr.push(scwin.idx+1 +"취소");\n	}\n	console.log(scwin.idx + " 반복횟수");\n	scwin.idx++\n}\nawait com.win.alert(arr.join(", ") +"선택함");'
                }]
              }, {
                T: 1,
                N: 'case5',
                E: [{
                  T: 4,
                  cdata: 'var data = { message : "샘플 팝업(1)을 오픈합니다." };\n		var optsions = { id : "SamplePopup1",\n						popupName : "샘플 팝업(1)",\n						modal : true,\n						width : 560, height: 400 };\n		returnParam = await com.win.openPopup("/ui/SP/Promise/messageBox1.xml", optsions, data);\n		console.log( "샘플 팝업(1) 리턴 파라미터 : " + returnParam);\n		\n		var data = { message : "샘플 팝업(2)을 오픈합니다." };\n		var optsions = { id : "SamplePopup2",\n						popupName : "샘플 팝업(2)",\n						modal : true,\n						width : 560, height: 400 };\n		returnParam = await com.win.openPopup("/ui/SP/Promise/messageBox2.xml", optsions, data);\n		console.log( "샘플 팝업(2) 리턴 파라미터 : " + com.str.serialize(returnParam));'
                }]
              }, {
                T: 1,
                N: 'case6',
                E: [{
                  T: 4,
                  cdata: 'var rtn = await com.sbm.execute(sbm_commonCode, { dma_commonCode: {GRP_CD: "00020" } });\nconsole.log("[sbm_commonGroup] 통신 정상 완료 : " + com.str.serialize(rtn.responseJSON.dlt_commonCode_00020));\n\nrtn = await com.sbm.execute(sbm_commonCode, { dma_commonCode: {GRP_CD: "00001" } });\nconsole.log("[sbm_commonCode] 통신 정상 완료 : " + com.str.serialize(rtn.responseJSON.dlt_commonCode_00001));'
                }]
              }, {
                T: 1,
                N: 'case7',
                E: [{
                  T: 4,
                  cdata: 'var arr = [];\nscwin.idx = 0;\n\nfor (var i = 0; i < 3; i++) {\n	var codeGroup = "0000" + (i + 1);\n	var rtn = await com.sbm.execute(sbm_commonCode, { dma_commonCode: {GRP_CD: codeGroup } });\n	console.log("[sbm_commonGroup] 통신 정상 완료 : " + com.str.serialize(rtn.responseJSON["dlt_commonCode_" + codeGroup]));\n	console.log(scwin.idx + " 반복횟수");\n	scwin.idx++;\n}'
                }]
              }, {
                T: 1,
                N: 'case8',
                E: [{
                  T: 4,
                  cdata: 'var arr = [];\nscwin.idx = 0;\nvar searchCodeGrpOption = { id : "sbm_commonGroup", action : "/common/selectCodeList"};\n\nfor (var i = 0; i < 3; i++) {\n	var codeGroup = "0000" + (i + 1);\n	var rtn = await com.sbm.executeDynamic(searchCodeGrpOption, { dma_commonCode: {GRP_CD: codeGroup } });\n	console.log("[sbm_commonGroup] 통신 정상 완료 : " + com.str.serialize(rtn.responseJSON["dlt_commonCode_" + codeGroup]));\n	console.log(scwin.idx + " 반복횟수");\n	scwin.idx++;\n}'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_commonCode',
            ref: '',
            target: 'data:json,dlt_commonCode',
            action: '/common/selectCodeList',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            mode: 'asynchronous',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            processMsg: '',
            'ev:submit': '',
            'ev:submitdone': '',
            'ev:submiterror': '',
            abortTrigger: ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_commonGroup',
            ref: 'data:json,dma_search',
            target: 'data:json,dlt_commonGrp',
            action: '/common/selectCommonGroup',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            mode: 'asynchronous'
          }
        }, {
          T: 1,
          N: 'w2:workflowCollection'
        }]
      }, {
        T: 1,
        N: 'w2:layoutInfo'
      }, {
        T: 1,
        N: 'w2:publicInfo',
        A: {
          method: ''
        }
      }, {
        T: 1,
        N: 'script',
        A: {
          type: 'text/javascript',
          lazy: 'false'
        },
        E: [{
          T: 4,
          cdata: function cdata(scopeObj) {
            with (scopeObj) {
              scwin.onpageload = function () {
                if (com.util.getUserAgent($p) === 'msie') {
                  com.win.alert($p, 'Async/Await은 IE에서 지원하지 않습니다.');
                }
              };
              scwin.btn_trigger1_onclick = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return com.win.alert($p, 'Step - 1');
                      case 2:
                        console.log('Step - 1');
                        _context.next = 5;
                        return com.win.alert($p, 'Step - 2');
                      case 5:
                        console.log('Step - 2');
                        _context.next = 8;
                        return com.win.alert($p, 'Step - 3');
                      case 8:
                        console.log('Step - 3');
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }();
              scwin.btn_trigger2_onclick = /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                  var rtn;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return com.win.confirm($p, '확인창');
                      case 2:
                        if (!_context2.sent) {
                          _context2.next = 9;
                          break;
                        }
                        console.log('1차 확인 선택');
                        _context2.next = 6;
                        return com.win.confirm($p, '확인 선택 후 1차확인');
                      case 6:
                        rtn = _context2.sent;
                        _context2.next = 13;
                        break;
                      case 9:
                        console.log('1차 취소 선택');
                        _context2.next = 12;
                        return com.win.confirm($p, '취소 선택 후 1차확인');
                      case 12:
                        rtn = _context2.sent;
                      case 13:
                        if (rtn) {
                          console.log('2차 확인 선택');
                        } else {
                          console.log('2차 취소 선택');
                        }
                      case 14:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }();
              scwin.btn_trigger3_onclick = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
                  var i;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        scwin.idx = 0;
                        i = 0;
                      case 2:
                        if (!(i < 5)) {
                          _context3.next = 10;
                          break;
                        }
                        scwin.idx++;
                        console.log(scwin.idx + ' 반복횟수');
                        _context3.next = 7;
                        return com.win.alert($p, scwin.idx + ' 반복횟수');
                      case 7:
                        i++;
                        _context3.next = 2;
                        break;
                      case 10:
                        ;
                        console.log('최종확인');
                        _context3.next = 14;
                        return com.win.alert($p, '최종확인');
                      case 14:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }();
              scwin.btn_trigger4_onclick = /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
                  var arr, i;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        arr = [];
                        scwin.idx = 0;
                        i = 0;
                      case 3:
                        if (!(i < 3)) {
                          _context4.next = 16;
                          break;
                        }
                        _context4.next = 6;
                        return com.win.confirm($p, scwin.idx + 1 + '확인체크');
                      case 6:
                        if (!_context4.sent) {
                          _context4.next = 10;
                          break;
                        }
                        arr.push(scwin.idx + 1 + '확인');
                        _context4.next = 11;
                        break;
                      case 10:
                        arr.push(scwin.idx + 1 + '취소');
                      case 11:
                        console.log(scwin.idx + ' 반복횟수');
                        scwin.idx++;
                      case 13:
                        i++;
                        _context4.next = 3;
                        break;
                      case 16:
                        _context4.next = 18;
                        return com.win.alert($p, arr.join(', ') + '선택함');
                      case 18:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x4) {
                  return _ref4.apply(this, arguments);
                };
              }();
              scwin.btn_trigger5_onclick = /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
                  var data, optsions;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        data = {
                          message: '샘플 팝업(1)을 오픈합니다.'
                        };
                        optsions = {
                          id: 'SamplePopup1',
                          popupName: '샘플 팝업(1)',
                          modal: true,
                          width: 560,
                          height: 400
                        };
                        _context5.next = 4;
                        return com.win.openPopup($p, '/ui/SP/Promise/messageBox1.xml', optsions, data);
                      case 4:
                        returnParam = _context5.sent;
                        console.log('샘플 팝업(1) 리턴 파라미터 : ' + returnParam);
                        data = {
                          message: '샘플 팝업(2)을 오픈합니다.'
                        };
                        optsions = {
                          id: 'SamplePopup2',
                          popupName: '샘플 팝업(2)',
                          modal: true,
                          width: 560,
                          height: 400
                        };
                        _context5.next = 10;
                        return com.win.openPopup($p, '/ui/SP/Promise/messageBox2.xml', optsions, data);
                      case 10:
                        returnParam = _context5.sent;
                        console.log('샘플 팝업(2) 리턴 파라미터 : ' + com.str.serialize($p, returnParam));
                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x5) {
                  return _ref5.apply(this, arguments);
                };
              }();
              scwin.btn_trigger6_onclick = /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
                  var rtn;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return com.sbm.execute($p, sbm_commonCode, {
                          dma_commonCode: {
                            GRP_CD: '00020'
                          }
                        });
                      case 2:
                        rtn = _context6.sent;
                        console.log('[sbm_commonGroup] 통신 정상 완료 : ' + com.str.serialize($p, rtn.responseJSON.dlt_commonCode_00020));
                        _context6.next = 6;
                        return com.sbm.execute($p, sbm_commonCode, {
                          dma_commonCode: {
                            GRP_CD: '00001'
                          }
                        });
                      case 6:
                        rtn = _context6.sent;
                        console.log('[sbm_commonCode] 통신 정상 완료 : ' + com.str.serialize($p, rtn.responseJSON.dlt_commonCode_00001));
                      case 8:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function (_x6) {
                  return _ref6.apply(this, arguments);
                };
              }();
              scwin.btn_trigger7_onclick = /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
                  var arr, i, codeGroup, rtn;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        arr = [];
                        scwin.idx = 0;
                        i = 0;
                      case 3:
                        if (!(i < 3)) {
                          _context7.next = 14;
                          break;
                        }
                        codeGroup = '0000' + (i + 1);
                        _context7.next = 7;
                        return com.sbm.execute($p, sbm_commonCode, {
                          dma_commonCode: {
                            GRP_CD: codeGroup
                          }
                        });
                      case 7:
                        rtn = _context7.sent;
                        console.log('[sbm_commonGroup] 통신 정상 완료 : ' + com.str.serialize($p, rtn.responseJSON['dlt_commonCode_' + codeGroup]));
                        console.log(scwin.idx + ' 반복횟수');
                        scwin.idx++;
                      case 11:
                        i++;
                        _context7.next = 3;
                        break;
                      case 14:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function (_x7) {
                  return _ref7.apply(this, arguments);
                };
              }();
              scwin.btn_trigger8_onclick = /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {
                  var arr, searchCodeGrpOption, i, codeGroup, rtn;
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        arr = [];
                        scwin.idx = 0;
                        searchCodeGrpOption = {
                          id: 'sbm_commonGroup',
                          action: '/common/selectCodeList'
                        };
                        i = 0;
                      case 4:
                        if (!(i < 3)) {
                          _context8.next = 15;
                          break;
                        }
                        codeGroup = '0000' + (i + 1);
                        _context8.next = 8;
                        return com.sbm.executeDynamic($p, searchCodeGrpOption, {
                          dma_commonCode: {
                            GRP_CD: codeGroup
                          }
                        });
                      case 8:
                        rtn = _context8.sent;
                        console.log('[sbm_commonGroup] 통신 정상 완료 : ' + com.str.serialize($p, rtn.responseJSON['dlt_commonCode_' + codeGroup]));
                        console.log(scwin.idx + ' 반복횟수');
                        scwin.idx++;
                      case 12:
                        i++;
                        _context8.next = 4;
                        break;
                      case 15:
                      case "end":
                        return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function (_x8) {
                  return _ref8.apply(this, arguments);
                };
              }();
            }
          }
        }]
      }]
    }, {
      T: 1,
      N: 'body',
      A: {
        'ev:onpageload': 'scwin.onpageload'
      },
      E: [{
        T: 1,
        N: 'xf:group',
        A: {
          "class": 'sub_contents',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'w2:wframe',
          A: {
            id: '',
            style: '',
            src: '../../cm/xml/contentHeader.xml',
            scope: ''
          }
        }, {
          T: 1,
          N: 'w2:wframe',
          A: {
            id: '',
            src: '../../cm/xml/contentDesc.xml',
            scope: ''
          }
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '1. ALERT',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: 'grp_search',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_trigger1',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_trigger1_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '실행'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'w2tb tb',
              id: 'grp_memberBasicDetailTop',
              style: 'width:100%;',
              tagname: 'table',
              adaptive: 'layout',
              adaptiveThreshold: '900'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Native&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT11',
                    ref: 'data:dlt_sampleCode.case1-1',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Async&nbsp;/&nbsp;Await&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT12',
                    ref: 'data:dlt_sampleCode.case1-2',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '2. CONFIRM',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: 'grp_group1',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_trigger2',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_trigger2_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '실행'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'w2tb tb',
              id: 'grp_group2',
              style: 'width:100%;',
              tagname: 'table',
              adaptive: 'layout',
              adaptiveThreshold: '900'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Native&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT21',
                    ref: 'data:dlt_sampleCode.case2-1',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Async&nbsp;/&nbsp;Await&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT22',
                    ref: 'data:dlt_sampleCode.case2-2',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '3. 반복 ALERT',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: 'grp_group3',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_trigger3',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_trigger3_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '실행'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'w2tb tb',
              id: 'grp_group4',
              style: 'width:100%;',
              tagname: 'table',
              adaptive: 'layout',
              adaptiveThreshold: '900'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Native&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT31',
                    ref: 'data:dlt_sampleCode.case3-1',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Async&nbsp;/&nbsp;Await&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT32',
                    ref: 'data:dlt_sampleCode.case3-2',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '4. 반복 CONFIRM',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: 'grp_group5',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_trigger4',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_trigger4_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '실행'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'w2tb tb',
              id: 'grp_group6',
              style: 'width:100%;',
              tagname: 'table',
              adaptive: 'layout',
              adaptiveThreshold: '900'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Native&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT41',
                    ref: 'data:dlt_sampleCode.case4-1',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Async&nbsp;/&nbsp;Await&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT42',
                    ref: 'data:dlt_sampleCode.case4-2',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '5. 팝업',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: 'grp_group7',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_trigger5',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_trigger5_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '실행'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'w2tb tb',
              id: 'grp_group8',
              style: 'width:100%;',
              tagname: 'table',
              adaptive: 'layout',
              adaptiveThreshold: '900'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Async&nbsp;/&nbsp;Await&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT50',
                    ref: 'data:dlt_sampleCode.case5',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '6. Submission',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: 'grp_group9',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_trigger6',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_trigger6_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '실행'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'w2tb tb',
              id: 'grp_group10',
              style: 'width:100%;',
              tagname: 'table',
              adaptive: 'layout',
              adaptiveThreshold: '900'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Async&nbsp;/&nbsp;Await&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT60',
                    ref: 'data:dlt_sampleCode.case6',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '7. 반복 정적 Submission',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: 'group1',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                'ev:onclick': 'scwin.btn_trigger7_onclick',
                id: 'btn_trigger7',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '실행'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptive: 'layout',
              adaptiveThreshold: '900',
              "class": 'w2tb tb',
              id: 'group2',
              style: 'width:100%;',
              tagname: 'table'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Async&nbsp;/&nbsp;Await&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT70',
                    ref: 'data:dlt_sampleCode.case7',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '8. 반복 동적 Submission',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: 'grp_group13',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                'ev:onclick': 'scwin.btn_trigger8_onclick',
                id: 'btn_trigger8',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '실행'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptive: 'layout',
              adaptiveThreshold: '900',
              "class": 'w2tb tb',
              id: 'grp_group14',
              style: 'width:100%;',
              tagname: 'table'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:141px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: 'Async&nbsp;/&nbsp;Await&nbsp;코딩방식'
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: 'txa_CONTENT80',
                    ref: 'data:dlt_sampleCode.case8',
                    style: 'width:100%;height:160px;'
                  }
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});