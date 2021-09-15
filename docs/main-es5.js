function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/algo/algo.component.ts":
  /*!****************************************!*\
    !*** ./src/app/algo/algo.component.ts ***!
    \****************************************/

  /*! exports provided: AlgoComponent */

  /***/
  function srcAppAlgoAlgoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgoComponent", function () {
      return AlgoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "height": a0,
        "background-color": a1
      };
    };

    function AlgoComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 15);
      }

      if (rf & 2) {
        var ele_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("element ", ele_r2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ele_r2 + "px", ele_r2 === ctx_r0.numCompare1 || ele_r2 === ctx_r0.numCompare2 ? ctx_r0.sortColor : ctx_r0.color(0)));
      }
    }

    function AlgoComponent_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sort_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", sort_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sort_r3.name);
      }
    }

    var AlgoComponent =
    /*#__PURE__*/
    function () {
      function AlgoComponent() {
        var _this = this;

        _classCallCheck(this, AlgoComponent);

        this.pink = "#ff4081";
        this.green = "#69f0ae";
        this.yellow = "#ffd740";
        this.array = [0];
        this.numCompare1 = 0;
        this.numCompare2 = 0;
        this.delaymin = 1;
        this.delaymax = 800;
        this.delayVal = this.delaymin;
        this.quantitymin = 3;
        this.quantitymax = 70;
        this.quantityVal = this.quantitymin;
        this.sortList = [{
          id: 1,
          name: "Selection"
        }, {
          id: 2,
          name: "Bubble"
        }];
        this.isRunning = false;
        this.isSearchMode = true;

        this.sleep = function (milliseconds) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, milliseconds);
          });
        };

        this.selectionSort = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var i, j, temp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isRunning = true;
                    i = 0;

                  case 2:
                    if (!(i < this.array.length)) {
                      _context.next = 26;
                      break;
                    }

                    this.numCompare1 = this.array[i];
                    this.sortColor = this.color(1);
                    j = i + 1;

                  case 6:
                    if (!(j < this.array.length)) {
                      _context.next = 23;
                      break;
                    }

                    this.numCompare2 = this.array[j];
                    this.sortColor = this.color(1);
                    _context.next = 11;
                    return this.sleep(this.delayVal);

                  case 11:
                    if (!(this.array[i] > this.array[j])) {
                      _context.next = 20;
                      break;
                    }

                    temp = this.array[i];
                    this.array[i] = this.array[j];
                    this.array[j] = temp;
                    this.numCompare1 = this.array[i];
                    this.numCompare2 = this.array[j];
                    this.sortColor = this.color(2);
                    _context.next = 20;
                    return this.sleep(this.delayVal);

                  case 20:
                    j++;
                    _context.next = 6;
                    break;

                  case 23:
                    i++;
                    _context.next = 2;
                    break;

                  case 26:
                    this.sortColor = this.color(0);
                    this.isRunning = false;

                  case 28:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };

        this.bubbleSort = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var size, i, j, temp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isRunning = true;
                    size = this.array.length;
                    i = 0;

                  case 3:
                    if (!(i < this.array.length)) {
                      _context2.next = 25;
                      break;
                    }

                    j = 0;

                  case 5:
                    if (!(j < size - 1)) {
                      _context2.next = 21;
                      break;
                    }

                    this.numCompare1 = this.array[j];
                    this.numCompare2 = this.array[j + 1];
                    this.sortColor = this.color(1);
                    _context2.next = 11;
                    return this.sleep(this.delayVal);

                  case 11:
                    if (!(this.array[j] > this.array[j + 1])) {
                      _context2.next = 18;
                      break;
                    }

                    temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                    this.sortColor = this.color(2);
                    _context2.next = 18;
                    return this.sleep(this.delayVal);

                  case 18:
                    j++;
                    _context2.next = 5;
                    break;

                  case 21:
                    size--;

                  case 22:
                    i++;
                    _context2.next = 3;
                    break;

                  case 25:
                    this.sortColor = this.color(0);
                    this.isRunning = false;

                  case 27:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };

        this.heapSort = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        };
      }

      _createClass(AlgoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setHeightCssForArray();
          this.createArray();
        }
      }, {
        key: "setDelayValue",
        value: function setDelayValue(event) {
          this.delayVal = event.value;
        }
      }, {
        key: "setQuantityValue",
        value: function setQuantityValue(event) {
          this.quantityVal = event.value;
          this.createArray();
        }
      }, {
        key: "setHeightCssForArray",
        value: function setHeightCssForArray() {
          document.getElementById("array").style.height = AlgoComponent.MAX_ELE + "px";
        }
      }, {
        key: "randomNumber",
        value: function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }, {
        key: "generateRandomArray",
        value: function generateRandomArray(min, max, quantity) {
          if (this.array.length > quantity) {
            this.array = [0]; // reset.
          }

          for (var i = 0; i < quantity; i++) {
            this.array[i] = this.randomNumber(min, max);
          }

          return this.array;
        }
      }, {
        key: "createArray",
        value: function createArray() {
          this.generateRandomArray(AlgoComponent.MIN_ELE, AlgoComponent.MAX_ELE, this.quantityVal);
        }
      }, {
        key: "color",
        value: function color(caseNumber) {
          switch (caseNumber) {
            case 0:
              return this.pink;
            // normal

            case 1:
              return this.green;
            // compare

            case 2:
              return this.yellow;
            // swap

            default:
              return null;
          }
        }
      }, {
        key: "choosingSort",
        value: function choosingSort() {
          switch (Number(this.selectedSortId)) {
            case 1:
              {
                this.selectionSort();
                break;
              }

            case 2:
              {
                this.bubbleSort();
                break;
              }

            case 3:
              {
                this.heapSort();
                break;
              }
          }
        }
      }]);

      return AlgoComponent;
    }();

    AlgoComponent.MIN_ELE = 10;
    AlgoComponent.MAX_ELE = 350;

    AlgoComponent.ɵfac = function AlgoComponent_Factory(t) {
      return new (t || AlgoComponent)();
    };

    AlgoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AlgoComponent,
      selectors: [["app-algo"]],
      decls: 28,
      vars: 13,
      consts: [[1, "container"], ["id", "content", 1, "content"], [1, "list-of-elements"], ["id", "array", 1, "array"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [1, "setting"], ["mat-mini-fab", "", "color", "accent", 3, "disabled", "click"], [1, "selection"], ["id", "selection-label", "for", ""], [3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "delay"], ["step", "50", 3, "min", "max", "input"], [1, "quantity"], ["step", "5", 3, "min", "max", "disabled", "input"], [3, "ngStyle"], [3, "value"]],
      template: function AlgoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AlgoComponent_div_4_Template, 1, 7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgoComponent_Template_button_click_7_listener() {
            return ctx.choosingSort();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "play_arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgoComponent_Template_button_click_10_listener() {
            return ctx.createArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "loop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sort ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AlgoComponent_Template_select_ngModelChange_16_listener($event) {
            return ctx.selectedSortId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AlgoComponent_option_17_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Delay ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-slider", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AlgoComponent_Template_mat_slider_input_21_listener($event) {
            return ctx.setDelayValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-slider", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AlgoComponent_Template_mat_slider_input_26_listener($event) {
            return ctx.setQuantityValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.array);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isRunning);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isRunning);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedSortId)("disabled", ctx.isRunning);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sortList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("min", ctx.delaymin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", ctx.delaymax);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.delayVal, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("min", ctx.quantitymin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", ctx.quantitymax);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isRunning);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.quantityVal, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      styles: ["@-webkit-keyframes fadedDown {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate(0, -100px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 0);\n  }\n}\n@keyframes fadedDown {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate(0, -100px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes growUp {\n  0% {\n    height: 0px;\n  }\n}\n@keyframes growUp {\n  0% {\n    height: 0px;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: 3% auto auto auto;\n  padding: 20px;\n  border: 0px solid transparent;\n  border-radius: 10px;\n  background-color: #f5f5f5;\n  -webkit-animation: fadedDown 0.4s;\n          animation: fadedDown 0.4s;\n}\n.list-of-elements[_ngcontent-%COMP%] {\n  width: 700px;\n}\n.list-of-elements[_ngcontent-%COMP%]   .array[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.list-of-elements[_ngcontent-%COMP%]   .array[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  width: 30px;\n  background-color: #ff4081;\n  margin-right: 0.5%;\n  border: 0px transparent;\n  border-radius: 7px;\n}\n.list-of-elements[_ngcontent-%COMP%]   .search-visualize[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  display: flex;\n  justify-content: center;\n}\n.list-of-elements[_ngcontent-%COMP%]   .search-visualize[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  margin-right: 0.5%;\n  border: 1px #ff4081;\n  border-radius: 7px;\n}\n.setting[_ngcontent-%COMP%] {\n  display: flex;\n}\n.setting[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.setting[_ngcontent-%COMP%]   .delay[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n.setting[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.setting[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  margin: 14px 0 0 20px;\n}\n.setting[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   #selection-label[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnby9FOlxcUHJvamVjdHNcXGFuZ3VsYXItcHJvamVjdFxcZXotYWxnb3JpdGhtXFxlei1hbGdvcml0aG0vc3JjXFxhcHBcXGFsZ29cXGFsZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ28vYWxnby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsK0JBQUE7RUNDRjtFRENBO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsMEJBQUE7RUNDRjtBQUNGO0FEWEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLCtCQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0U7SUFDRSxXQUFBO0VDQUY7QUFDRjtBREhBO0VBQ0U7SUFDRSxXQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDREY7QURJQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNERjtBRElBO0VBRUUsWUFBQTtBQ0ZGO0FESUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNGSjtBRElJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRk47QURPRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDTEo7QURNSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTE47QURVQTtFQUNFLGFBQUE7QUNQRjtBRFNFO0VBQ0Usa0JBQUE7QUNQSjtBRFVFO0VBQ0UsY0FBQTtBQ1JKO0FEV0U7RUFDRSxrQkFBQTtBQ1RKO0FEWUU7RUFDRSxxQkFBQTtBQ1ZKO0FEV0k7RUFDRSxrQkFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvYWxnby9hbGdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBmYWRlZERvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyb3dVcCB7XHJcbiAgMCUge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBtYXJnaW46IDMlIGF1dG8gYXV0byBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGFuaW1hdGlvbjogZmFkZWREb3duIDAuNHM7XHJcbn1cclxuXHJcbi5saXN0LW9mLWVsZW1lbnRzIHtcclxuXHJcbiAgd2lkdGg6IDcwMHB4O1xyXG5cclxuICAuYXJyYXkge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5lbGVtZW50IHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41JTtcclxuICAgICAgYm9yZGVyOiAwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgLy8gYW5pbWF0aW9uOiBncm93VXAgMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXZpc3VhbGl6ZSB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAuZWxlbWVudCB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xyXG4gICAgICBib3JkZXI6IDFweCAjZmY0MDgxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2V0dGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5kZWxheSB7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICB9XHJcblxyXG4gIC5xdWFudGl0eSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMTRweCAwIDAgMjBweDtcclxuICAgICNzZWxlY3Rpb24tbGFiZWx7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGtleWZyYW1lcyBmYWRlZERvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jvd1VwIHtcbiAgMCUge1xuICAgIGhlaWdodDogMHB4O1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luOiAzJSBhdXRvIGF1dG8gYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGFuaW1hdGlvbjogZmFkZWREb3duIDAuNHM7XG59XG5cbi5saXN0LW9mLWVsZW1lbnRzIHtcbiAgd2lkdGg6IDcwMHB4O1xufVxuLmxpc3Qtb2YtZWxlbWVudHMgLmFycmF5IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3Qtb2YtZWxlbWVudHMgLmFycmF5IC5lbGVtZW50IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG4gIG1hcmdpbi1yaWdodDogMC41JTtcbiAgYm9yZGVyOiAwcHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5saXN0LW9mLWVsZW1lbnRzIC5zZWFyY2gtdmlzdWFsaXplIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0LW9mLWVsZW1lbnRzIC5zZWFyY2gtdmlzdWFsaXplIC5lbGVtZW50IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xuICBib3JkZXI6IDFweCAjZmY0MDgxO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZXR0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zZXR0aW5nIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZXR0aW5nIC5kZWxheSB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLnNldHRpbmcgLnF1YW50aXR5IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnNldHRpbmcgLnNlbGVjdGlvbiB7XG4gIG1hcmdpbjogMTRweCAwIDAgMjBweDtcbn1cbi5zZXR0aW5nIC5zZWxlY3Rpb24gI3NlbGVjdGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlgoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-algo",
          templateUrl: "./algo.component.html",
          styleUrls: ["./algo.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _algo_algo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./algo/algo.component */
    "./src/app/algo/algo.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");

    var routes = [{
      path: 'sort',
      component: _algo_algo_component__WEBPACK_IMPORTED_MODULE_2__["AlgoComponent"]
    }, {
      path: 'search',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ez-algorithm';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _algo_algo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./algo/algo.component */
    "./src/app/algo/algo.component.ts");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _algo_algo_component__WEBPACK_IMPORTED_MODULE_10__["AlgoComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _algo_algo_component__WEBPACK_IMPORTED_MODULE_10__["AlgoComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/sort"];
    };

    var _c1 = function _c1() {
      return ["/search"];
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "btnAddAnimation",
        value: function btnAddAnimation() {
          document.getElementById("content").style.visibility = "visible";
          document.getElementById("content").style.opacity = "1";
          document.getElementById("content").style.transform = "translate(0, 0)";
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 8,
      vars: 4,
      consts: [[1, "header"], ["id", "title"], [1, "menu"], ["mat-stroked-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EzAlgorithm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: [".header[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 16px;\n}\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFxQcm9qZWN0c1xcYW5ndWxhci1wcm9qZWN0XFxlei1hbGdvcml0aG1cXGV6LWFsZ29yaXRobS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDRSxrQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICN0aXRsZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyICN0aXRsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG59XG4uaGVhZGVyIC5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhlYWRlciAubWVudSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        "visibility": a0
      };
    };

    function SearchComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r8 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("element ", i_r8, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, i_r8 === ctx_r4.posCompare || i_r8 === ctx_r4.posFound ? "visible" : "hidden"));
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "border-color": a0,
        "background-color": a1
      };
    };

    function SearchComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ele_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("element ", i_r10, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, i_r10 === ctx_r5.posCompare || i_r10 === ctx_r5.posFound ? ctx_r5.searchColor : ctx_r5.color("pink"), i_r10 < ctx_r5.left || i_r10 > ctx_r5.right ? ctx_r5.color("pink") : "transparent"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ele_r9);
      }
    }

    function SearchComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " input should be a number!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        var _this2 = this;

        _classCallCheck(this, SearchComponent);

        this.array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        this.pink = '#ff4081';
        this.green = '#69f0ae';
        this.yellow = '#ffd740';
        this.posCompare = -1;
        this.numFound = -1;
        this.posFound = -1;
        this.isNotFound = false;
        this.isRunning = false;
        this.valid = true;
        this.searchList = [{
          id: 1,
          name: "Linear Search"
        }, {
          id: 2,
          name: "Binary Search"
        }];

        this.linearSearch = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var i;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isRunning = true;
                    this.isNotFound = false;
                    this.reset();
                    i = 0;

                  case 4:
                    if (!(i < this.array.length)) {
                      _context4.next = 16;
                      break;
                    }

                    this.posCompare = i;
                    this.searchColor = this.color('green');
                    _context4.next = 9;
                    return this.sleep(200);

                  case 9:
                    if (!(this.array[i] == this.target)) {
                      _context4.next = 13;
                      break;
                    }

                    this.posFound = i;
                    this.searchColor = this.color('yellow');
                    return _context4.abrupt("return", this.isRunning = false);

                  case 13:
                    i++;
                    _context4.next = 4;
                    break;

                  case 16:
                    this.searchColor = this.color('pink');
                    this.isNotFound = true;
                    _context4.next = 20;
                    return this.sleep(400);

                  case 20:
                    this.reset();
                    this.isRunning = false;

                  case 22:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        };

        this.sleep = function (milliseconds) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, milliseconds);
          });
        };

        this.left = 0;
        this.right = this.array.length - 1;

        this.binarySearch = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var mid;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isRunning = true;
                    this.isNotFound = false;
                    this.reset();
                    this.left = 0;
                    this.right = this.array.length - 1;
                    mid = 0;

                  case 6:
                    if (!(this.left <= this.right)) {
                      _context5.next = 22;
                      break;
                    }

                    mid = Math.floor((this.right + this.left + 1) / 2);
                    this.posCompare = mid;
                    this.searchColor = this.color('green');
                    _context5.next = 12;
                    return this.sleep(700);

                  case 12:
                    if (!(this.target == this.array[mid])) {
                      _context5.next = 19;
                      break;
                    }

                    console.log("pos = " + mid);
                    this.posFound = mid;
                    this.searchColor = this.color('yellow');
                    return _context5.abrupt("break", 22);

                  case 19:
                    if (this.target < this.array[mid]) {
                      this.right = mid - 1;
                    } else if (this.target > this.array[mid]) {
                      this.left = mid + 1;
                    }

                  case 20:
                    _context5.next = 6;
                    break;

                  case 22:
                    this.searchColor = this.color('pink');
                    this.isNotFound = true;
                    _context5.next = 26;
                    return this.sleep(300);

                  case 26:
                    this.reset();
                    this.isRunning = false;

                  case 28:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        };
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange(val) {
          if (isNaN(val)) {
            this.valid = false;
          } else {
            this.valid = true;
            this.target = val;
          }
        }
      }, {
        key: "color",
        value: function color(nameOfColor) {
          switch (nameOfColor) {
            case 'pink':
              return this.pink;
            // normal

            case 'green':
              return this.green;
            // compare

            case 'yellow':
              return this.yellow;
            // found

            case 'red':
              return "red";
            // not found.

            default:
              return null;
          }
        }
      }, {
        key: "choosingSearch",
        value: function choosingSearch() {}
      }, {
        key: "generateRandomArray",
        value: function generateRandomArray(min, max, quantity) {
          for (var i = 0; i < quantity; i++) {
            this.array[i] = this.randomNumber(min, max);
          }

          return this.array;
        }
      }, {
        key: "randomNumber",
        value: function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }, {
        key: "createArray",
        value: function createArray() {
          this.reset();
          this.generateRandomArray(0, 25, 15);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.posCompare = -1;
          this.posFound = -1;
        }
      }, {
        key: "runSearch",
        value: function runSearch() {
          if (this.isTargetInvalid()) {
            // this.linearSearch();
            this.binarySearch();
          }
        }
      }, {
        key: "isTargetInvalid",
        value: function isTargetInvalid() {
          if (this.target != null) {
            console.log("co gia tri");
            return true;
          } else {
            console.log("hell no!");
            return false;
          }
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)();
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 20,
      vars: 7,
      consts: [[1, "container"], ["id", "content", 1, "content"], [1, "list-of-elements"], [1, "pointer"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [1, "search-visualize"], [1, "setting"], ["mat-mini-fab", "", "color", "accent", 3, "disabled", "click"], [1, "target-input"], ["for", ""], ["type", "tel", 3, "ngModel", "disabled", "ngModelChange", "change"], ["class", "alert-text", 4, "ngIf"], [3, "ngStyle"], [2, "margin", "4px 0 0 0"], [2, "margin", "4px 0 0 0", "font-size", "19px"], [1, "alert-text"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchComponent_div_4_Template, 4, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchComponent_div_6_Template, 3, 8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_9_listener() {
            return ctx.runSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "play_arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_12_listener() {
            return ctx.createArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "loop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Target");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.target = $event;
          })("change", function SearchComponent_Template_input_change_18_listener() {
            return ctx.onChange(ctx.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SearchComponent_span_19_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.array);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.array);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isRunning || !ctx.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.target)("disabled", ctx.isRunning);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["@-webkit-keyframes fadedDown {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate(0, -100px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 0);\n  }\n}\n@keyframes fadedDown {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate(0, -100px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 0);\n  }\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: 3% auto auto auto;\n  padding: 20px;\n  border: 0px solid transparent;\n  border-radius: 10px;\n  background-color: #f5f5f5;\n  -webkit-animation: fadedDown 0.4s;\n          animation: fadedDown 0.4s;\n}\n.list-of-elements[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.list-of-elements[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  display: flex;\n  justify-content: center;\n}\n.list-of-elements[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  height: 33px;\n  width: 33px;\n  background-color: transparent;\n  margin-right: 3px;\n  text-align: center;\n  visibility: hidden;\n}\n.list-of-elements[_ngcontent-%COMP%]   .search-visualize[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.list-of-elements[_ngcontent-%COMP%]   .search-visualize[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n  background-color: transparent;\n  margin-right: 3px;\n  border: 3px solid;\n  border-radius: 7px;\n  text-align: center;\n}\n.setting[_ngcontent-%COMP%] {\n  display: flex;\n}\n.setting[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.setting[_ngcontent-%COMP%]   .delay[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n.setting[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.setting[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  margin: 14px 0 0 20px;\n}\n.setting[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   #selection-label[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n.setting[_ngcontent-%COMP%]   .target-input[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n.setting[_ngcontent-%COMP%]   .target-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 10px 0 10px;\n}\n.setting[_ngcontent-%COMP%]   .target-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 45px;\n}\n.alert-text[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0U6XFxQcm9qZWN0c1xcYW5ndWxhci1wcm9qZWN0XFxlei1hbGdvcml0aG1cXGV6LWFsZ29yaXRobS9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLCtCQUFBO0VDQ0o7RURDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0VDQ0o7QUFDRjtBRFhBO0VBQ0k7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSwrQkFBQTtFQ0NKO0VEQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSwwQkFBQTtFQ0NKO0FBQ0Y7QURFRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0U7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDQUo7QURHRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0FOO0FEQ007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURHSTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZOO0FER007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBRE1FO0VBQ0UsYUFBQTtBQ0hKO0FES0k7RUFDRSxrQkFBQTtBQ0hOO0FETUk7RUFDRSxjQUFBO0FDSk47QURPSTtFQUNFLGtCQUFBO0FDTE47QURRSTtFQUNFLHFCQUFBO0FDTk47QURPTTtFQUNFLGtCQUFBO0FDTFI7QURTSTtFQUNFLFlBQUE7QUNQTjtBRFFNO0VBQ0UscUJBQUE7QUNOUjtBRFFNO0VBQ0UsV0FBQTtBQ05SO0FEWUU7RUFDRSxVQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBmYWRlZERvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDMlIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBhbmltYXRpb246IGZhZGVkRG93biAwLjRzO1xyXG4gIH1cclxuXHJcbiAgLmxpc3Qtb2YtZWxlbWVudHMge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICAgIC5wb2ludGVye1xyXG4gICAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAuZWxlbWVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLXZpc3VhbGl6ZSB7XHJcbiAgICAgIC8vIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC5lbGVtZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNldHRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbGF5IHtcclxuICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3Rpb24ge1xyXG4gICAgICBtYXJnaW46IDE0cHggMCAwIDIwcHg7XHJcbiAgICAgICNzZWxlY3Rpb24tbGFiZWx7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhcmdldC1pbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtdGV4dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuIiwiQGtleWZyYW1lcyBmYWRlZERvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXJnaW46IDMlIGF1dG8gYXV0byBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYW5pbWF0aW9uOiBmYWRlZERvd24gMC40cztcbn1cblxuLmxpc3Qtb2YtZWxlbWVudHMge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4ubGlzdC1vZi1lbGVtZW50cyAucG9pbnRlciB7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGlzdC1vZi1lbGVtZW50cyAucG9pbnRlciAuZWxlbWVudCB7XG4gIGhlaWdodDogMzNweDtcbiAgd2lkdGg6IDMzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubGlzdC1vZi1lbGVtZW50cyAuc2VhcmNoLXZpc3VhbGl6ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3Qtb2YtZWxlbWVudHMgLnNlYXJjaC12aXN1YWxpemUgLmVsZW1lbnQge1xuICBoZWlnaHQ6IDI3cHg7XG4gIHdpZHRoOiAyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNldHRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNldHRpbmcgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNldHRpbmcgLmRlbGF5IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uc2V0dGluZyAucXVhbnRpdHkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uc2V0dGluZyAuc2VsZWN0aW9uIHtcbiAgbWFyZ2luOiAxNHB4IDAgMCAyMHB4O1xufVxuLnNldHRpbmcgLnNlbGVjdGlvbiAjc2VsZWN0aW9uLWxhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLnNldHRpbmcgLnRhcmdldC1pbnB1dCB7XG4gIHBhZGRpbmc6IDlweDtcbn1cbi5zZXR0aW5nIC50YXJnZXQtaW5wdXQgbGFiZWwge1xuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG59XG4uc2V0dGluZyAudGFyZ2V0LWlucHV0IGlucHV0IHtcbiAgd2lkdGg6IDQ1cHg7XG59XG5cbi5hbGVydC10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\angular-project\ez-algorithm\ez-algorithm\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map