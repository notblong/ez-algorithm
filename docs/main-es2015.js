(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/algo/algo.component.ts":
/*!****************************************!*\
  !*** ./src/app/algo/algo.component.ts ***!
  \****************************************/
/*! exports provided: AlgoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoComponent", function() { return AlgoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");








const _c0 = function (a0, a1) { return { "height": a0, "background-color": a1 }; };
function AlgoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ele_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("element ", ele_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ele_r2 + "px", ele_r2 === ctx_r0.numCompare1 || ele_r2 === ctx_r0.numCompare2 ? ctx_r0.sortColor : ctx_r0.color(0)));
} }
function AlgoComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sort_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", sort_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sort_r3.name);
} }
class AlgoComponent {
    constructor() {
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
        this.sortList = [
            { id: 1, name: "Selection" },
            { id: 2, name: "Bubble" },
        ];
        this.isRunning = false;
        this.isSearchMode = true;
        this.sleep = (milliseconds) => {
            return new Promise((resolve) => setTimeout(resolve, milliseconds));
        };
        this.selectionSort = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isRunning = true;
            for (let i = 0; i < this.array.length; i++) {
                this.numCompare1 = this.array[i];
                this.sortColor = this.color(1);
                for (let j = i + 1; j < this.array.length; j++) {
                    this.numCompare2 = this.array[j];
                    this.sortColor = this.color(1);
                    yield this.sleep(this.delayVal);
                    if (this.array[i] > this.array[j]) {
                        let temp = this.array[i];
                        this.array[i] = this.array[j];
                        this.array[j] = temp;
                        this.numCompare1 = this.array[i];
                        this.numCompare2 = this.array[j];
                        this.sortColor = this.color(2);
                        yield this.sleep(this.delayVal);
                    }
                }
            }
            this.sortColor = this.color(0);
            this.isRunning = false;
        });
        this.bubbleSort = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isRunning = true;
            let size = this.array.length;
            for (let i = 0; i < this.array.length; i++) {
                for (let j = 0; j < size - 1; j++) {
                    this.numCompare1 = this.array[j];
                    this.numCompare2 = this.array[j + 1];
                    this.sortColor = this.color(1);
                    yield this.sleep(this.delayVal);
                    if (this.array[j] > this.array[j + 1]) {
                        let temp = this.array[j];
                        this.array[j] = this.array[j + 1];
                        this.array[j + 1] = temp;
                        this.sortColor = this.color(2);
                        yield this.sleep(this.delayVal);
                    }
                }
                size--;
            }
            this.sortColor = this.color(0);
            this.isRunning = false;
        });
        this.heapSort = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ngOnInit() {
        this.setHeightCssForArray();
        this.createArray();
    }
    setDelayValue(event) {
        this.delayVal = event.value;
    }
    setQuantityValue(event) {
        this.quantityVal = event.value;
        this.createArray();
    }
    setHeightCssForArray() {
        document.getElementById("array").style.height =
            AlgoComponent.MAX_ELE + "px";
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    generateRandomArray(min, max, quantity) {
        if (this.array.length > quantity) {
            this.array = [0]; // reset.
        }
        for (let i = 0; i < quantity; i++) {
            this.array[i] = this.randomNumber(min, max);
        }
        return this.array;
    }
    createArray() {
        this.generateRandomArray(AlgoComponent.MIN_ELE, AlgoComponent.MAX_ELE, this.quantityVal);
    }
    color(caseNumber) {
        switch (caseNumber) {
            case 0:
                return this.pink; // normal
            case 1:
                return this.green; // compare
            case 2:
                return this.yellow; // swap
            default:
                return null;
        }
    }
    choosingSort() {
        switch (Number(this.selectedSortId)) {
            case 1: {
                this.selectionSort();
                break;
            }
            case 2: {
                this.bubbleSort();
                break;
            }
            case 3: {
                this.heapSort();
                break;
            }
        }
    }
}
AlgoComponent.MIN_ELE = 10;
AlgoComponent.MAX_ELE = 350;
AlgoComponent.ɵfac = function AlgoComponent_Factory(t) { return new (t || AlgoComponent)(); };
AlgoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlgoComponent, selectors: [["app-algo"]], decls: 28, vars: 13, consts: [[1, "container"], ["id", "content", 1, "content"], [1, "list-of-elements"], ["id", "array", 1, "array"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [1, "setting"], ["mat-mini-fab", "", "color", "accent", 3, "disabled", "click"], [1, "selection"], ["id", "selection-label", "for", ""], [3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "delay"], ["step", "50", 3, "min", "max", "input"], [1, "quantity"], ["step", "5", 3, "min", "max", "disabled", "input"], [3, "ngStyle"], [3, "value"]], template: function AlgoComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgoComponent_Template_button_click_7_listener() { return ctx.choosingSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgoComponent_Template_button_click_10_listener() { return ctx.createArray(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "loop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AlgoComponent_Template_select_ngModelChange_16_listener($event) { return ctx.selectedSortId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AlgoComponent_option_17_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Delay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AlgoComponent_Template_mat_slider_input_21_listener($event) { return ctx.setDelayValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-slider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AlgoComponent_Template_mat_slider_input_26_listener($event) { return ctx.setQuantityValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["@-webkit-keyframes fadedDown {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate(0, -100px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 0);\n  }\n}\n@keyframes fadedDown {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate(0, -100px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes growUp {\n  0% {\n    height: 0px;\n  }\n}\n@keyframes growUp {\n  0% {\n    height: 0px;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: 3% auto auto auto;\n  padding: 20px;\n  border: 0px solid transparent;\n  border-radius: 10px;\n  background-color: #f5f5f5;\n  -webkit-animation: fadedDown 0.4s;\n          animation: fadedDown 0.4s;\n}\n.list-of-elements[_ngcontent-%COMP%] {\n  width: 700px;\n}\n.list-of-elements[_ngcontent-%COMP%]   .array[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.list-of-elements[_ngcontent-%COMP%]   .array[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  width: 30px;\n  background-color: #ff4081;\n  margin-right: 0.5%;\n  border: 0px transparent;\n  border-radius: 7px;\n}\n.list-of-elements[_ngcontent-%COMP%]   .search-visualize[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  display: flex;\n  justify-content: center;\n}\n.list-of-elements[_ngcontent-%COMP%]   .search-visualize[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  margin-right: 0.5%;\n  border: 1px #ff4081;\n  border-radius: 7px;\n}\n.setting[_ngcontent-%COMP%] {\n  display: flex;\n}\n.setting[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.setting[_ngcontent-%COMP%]   .delay[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n.setting[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.setting[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  margin: 14px 0 0 20px;\n}\n.setting[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   #selection-label[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnby9FOlxcUHJvamVjdHNcXGFuZ3VsYXItcHJvamVjdFxcZXotYWxnb3JpdGhtXFxlei1hbGdvcml0aG0vc3JjXFxhcHBcXGFsZ29cXGFsZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ28vYWxnby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsK0JBQUE7RUNDRjtFRENBO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsMEJBQUE7RUNDRjtBQUNGO0FEWEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLCtCQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0U7SUFDRSxXQUFBO0VDQUY7QUFDRjtBREhBO0VBQ0U7SUFDRSxXQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDREY7QURJQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNERjtBRElBO0VBRUUsWUFBQTtBQ0ZGO0FESUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNGSjtBRElJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRk47QURPRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDTEo7QURNSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTE47QURVQTtFQUNFLGFBQUE7QUNQRjtBRFNFO0VBQ0Usa0JBQUE7QUNQSjtBRFVFO0VBQ0UsY0FBQTtBQ1JKO0FEV0U7RUFDRSxrQkFBQTtBQ1RKO0FEWUU7RUFDRSxxQkFBQTtBQ1ZKO0FEV0k7RUFDRSxrQkFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvYWxnby9hbGdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBmYWRlZERvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyb3dVcCB7XHJcbiAgMCUge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBtYXJnaW46IDMlIGF1dG8gYXV0byBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGFuaW1hdGlvbjogZmFkZWREb3duIDAuNHM7XHJcbn1cclxuXHJcbi5saXN0LW9mLWVsZW1lbnRzIHtcclxuXHJcbiAgd2lkdGg6IDcwMHB4O1xyXG5cclxuICAuYXJyYXkge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5lbGVtZW50IHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41JTtcclxuICAgICAgYm9yZGVyOiAwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgLy8gYW5pbWF0aW9uOiBncm93VXAgMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXZpc3VhbGl6ZSB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAuZWxlbWVudCB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xyXG4gICAgICBib3JkZXI6IDFweCAjZmY0MDgxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2V0dGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5kZWxheSB7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICB9XHJcblxyXG4gIC5xdWFudGl0eSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMTRweCAwIDAgMjBweDtcclxuICAgICNzZWxlY3Rpb24tbGFiZWx7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGtleWZyYW1lcyBmYWRlZERvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jvd1VwIHtcbiAgMCUge1xuICAgIGhlaWdodDogMHB4O1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luOiAzJSBhdXRvIGF1dG8gYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGFuaW1hdGlvbjogZmFkZWREb3duIDAuNHM7XG59XG5cbi5saXN0LW9mLWVsZW1lbnRzIHtcbiAgd2lkdGg6IDcwMHB4O1xufVxuLmxpc3Qtb2YtZWxlbWVudHMgLmFycmF5IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3Qtb2YtZWxlbWVudHMgLmFycmF5IC5lbGVtZW50IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG4gIG1hcmdpbi1yaWdodDogMC41JTtcbiAgYm9yZGVyOiAwcHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5saXN0LW9mLWVsZW1lbnRzIC5zZWFyY2gtdmlzdWFsaXplIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0LW9mLWVsZW1lbnRzIC5zZWFyY2gtdmlzdWFsaXplIC5lbGVtZW50IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xuICBib3JkZXI6IDFweCAjZmY0MDgxO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZXR0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zZXR0aW5nIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZXR0aW5nIC5kZWxheSB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLnNldHRpbmcgLnF1YW50aXR5IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnNldHRpbmcgLnNlbGVjdGlvbiB7XG4gIG1hcmdpbjogMTRweCAwIDAgMjBweDtcbn1cbi5zZXR0aW5nIC5zZWxlY3Rpb24gI3NlbGVjdGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlgoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-algo",
                templateUrl: "./algo.component.html",
                styleUrls: ["./algo.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _algo_algo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algo/algo.component */ "./src/app/algo/algo.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");






const routes = [
    { path: 'sort', component: _algo_algo_component__WEBPACK_IMPORTED_MODULE_2__["AlgoComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'ez-algorithm';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _algo_algo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./algo/algo.component */ "./src/app/algo/algo.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _algo_algo_component__WEBPACK_IMPORTED_MODULE_10__["AlgoComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _algo_algo_component__WEBPACK_IMPORTED_MODULE_10__["AlgoComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return ["/sort"]; };
const _c1 = function () { return ["/search"]; };
class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
    btnAddAnimation() {
        document.getElementById("content").style.visibility = "visible";
        document.getElementById("content").style.opacity = "1";
        document.getElementById("content").style.transform = "translate(0, 0)";
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 4, consts: [[1, "header"], ["id", "title"], [1, "menu"], ["mat-stroked-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 16px;\n}\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFxQcm9qZWN0c1xcYW5ndWxhci1wcm9qZWN0XFxlei1hbGdvcml0aG1cXGV6LWFsZ29yaXRobS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDRSxrQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICN0aXRsZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyICN0aXRsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG59XG4uaGVhZGVyIC5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhlYWRlciAubWVudSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = function (a0) { return { "visibility": a0 }; };
function SearchComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("element ", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, i_r7 === ctx_r4.posCompare || i_r7 === ctx_r4.posFound ? "visible" : "hidden"));
} }
const _c1 = function (a0, a1) { return { "border-color": a0, "background-color": a1 }; };
function SearchComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("element ", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, i_r9 === ctx_r5.posCompare || i_r9 === ctx_r5.posFound ? ctx_r5.searchColor : ctx_r5.color("pink"), i_r9 < ctx_r5.left || i_r9 > ctx_r5.right ? ctx_r5.color("pink") : "transparent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ele_r8);
} }
class SearchComponent {
    constructor() {
        this.array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        this.pink = '#ff4081';
        this.green = '#69f0ae';
        this.yellow = '#ffd740';
        this.posCompare = -1;
        this.numFound = -1;
        this.posFound = -1;
        this.isNotFound = false;
        this.isRunning = false;
        this.searchList = [
            { id: 1, name: "Linear Search" },
            { id: 2, name: "Binary Search" }
        ];
        this.linearSearch = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isRunning = true;
            this.isNotFound = false;
            this.reset();
            for (let i = 0; i < this.array.length; i++) {
                this.posCompare = i;
                this.searchColor = this.color('green');
                yield this.sleep(200);
                if (this.array[i] == this.target) {
                    this.posFound = i;
                    this.searchColor = this.color('yellow');
                    return this.isRunning = false;
                }
            }
            this.searchColor = this.color('pink');
            this.isNotFound = true;
            yield this.sleep(400);
            this.reset();
            this.isRunning = false;
        });
        this.sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        };
        this.left = 0;
        this.right = this.array.length - 1;
        this.binarySearch = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isRunning = true;
            this.isNotFound = false;
            this.reset();
            this.left = 0;
            this.right = this.array.length - 1;
            let mid = 0;
            while (this.left <= this.right) {
                mid = Math.floor((this.right + this.left + 1) / 2);
                this.posCompare = mid;
                this.searchColor = this.color('green');
                yield this.sleep(700);
                if (this.target == this.array[mid]) {
                    console.log("pos = " + mid);
                    this.posFound = mid;
                    this.searchColor = this.color('yellow');
                    break;
                }
                else if (this.target < this.array[mid]) {
                    this.right = mid - 1;
                }
                else if (this.target > this.array[mid]) {
                    this.left = mid + 1;
                }
            }
            this.searchColor = this.color('pink');
            this.isNotFound = true;
            yield this.sleep(300);
            this.reset();
            this.isRunning = false;
        });
    }
    ngOnInit() {
        // this.createArray();
    }
    color(nameOfColor) {
        switch (nameOfColor) {
            case 'pink': return this.pink; // normal
            case 'green': return this.green; // compare
            case 'yellow': return this.yellow; // found
            case 'red': return "red"; // not found.
            default: return null;
        }
    }
    choosingSearch() {
    }
    generateRandomArray(min, max, quantity) {
        // if (this.array.length > quantity) {
        //   this.array = [];
        // }
        for (let i = 0; i < quantity; i++) {
            this.array[i] = this.randomNumber(min, max);
        }
        return this.array;
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    createArray() {
        this.reset();
        this.generateRandomArray(0, 25, 15);
    }
    reset() {
        this.posCompare = -1;
        this.posFound = -1;
    }
    runSearch() {
        if (this.isTargetInvalid()) {
            // this.linearSearch();
            this.binarySearch();
        }
    }
    isTargetInvalid() {
        if (this.target != null) {
            console.log("co gia tri");
            return true;
        }
        else {
            console.log("hell no!");
            return false;
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 19, vars: 6, consts: [[1, "container"], ["id", "content", 1, "content"], [1, "list-of-elements"], [1, "pointer"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [1, "search-visualize"], [1, "setting"], ["mat-mini-fab", "", "color", "accent", 3, "disabled", "click"], [1, "target-input"], ["for", ""], ["type", "text", 3, "ngModel", "disabled", "ngModelChange"], [3, "ngStyle"], [2, "margin", "4px 0 0 0"], [2, "margin", "4px 0 0 0", "font-size", "19px"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_9_listener() { return ctx.runSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_12_listener() { return ctx.createArray(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "loop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_18_listener($event) { return ctx.target = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.array);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.array);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.target)("disabled", ctx.isRunning);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["@-webkit-keyframes fadedDown {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate(0, -100px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 0);\n  }\n}\n@keyframes fadedDown {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate(0, -100px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 0);\n  }\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: 3% auto auto auto;\n  padding: 20px;\n  border: 0px solid transparent;\n  border-radius: 10px;\n  background-color: #f5f5f5;\n  -webkit-animation: fadedDown 0.4s;\n          animation: fadedDown 0.4s;\n}\n.list-of-elements[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.list-of-elements[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  display: flex;\n  justify-content: center;\n}\n.list-of-elements[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  height: 33px;\n  width: 33px;\n  background-color: transparent;\n  margin-right: 3px;\n  text-align: center;\n  visibility: hidden;\n}\n.list-of-elements[_ngcontent-%COMP%]   .search-visualize[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.list-of-elements[_ngcontent-%COMP%]   .search-visualize[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n  background-color: transparent;\n  margin-right: 3px;\n  border: 3px solid;\n  border-radius: 7px;\n  text-align: center;\n}\n.setting[_ngcontent-%COMP%] {\n  display: flex;\n}\n.setting[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.setting[_ngcontent-%COMP%]   .delay[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n.setting[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.setting[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  margin: 14px 0 0 20px;\n}\n.setting[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   #selection-label[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n.setting[_ngcontent-%COMP%]   .target-input[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n.setting[_ngcontent-%COMP%]   .target-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 10px 0 10px;\n}\n.setting[_ngcontent-%COMP%]   .target-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0U6XFxQcm9qZWN0c1xcYW5ndWxhci1wcm9qZWN0XFxlei1hbGdvcml0aG1cXGV6LWFsZ29yaXRobS9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLCtCQUFBO0VDQ0o7RURDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0VDQ0o7QUFDRjtBRFhBO0VBQ0k7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSwrQkFBQTtFQ0NKO0VEQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSwwQkFBQTtFQ0NKO0FBQ0Y7QURFRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0U7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDQUo7QURHRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0FOO0FEQ007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURHSTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZOO0FER007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBRE1FO0VBQ0UsYUFBQTtBQ0hKO0FES0k7RUFDRSxrQkFBQTtBQ0hOO0FETUk7RUFDRSxjQUFBO0FDSk47QURPSTtFQUNFLGtCQUFBO0FDTE47QURRSTtFQUNFLHFCQUFBO0FDTk47QURPTTtFQUNFLGtCQUFBO0FDTFI7QURTSTtFQUNFLFlBQUE7QUNQTjtBRFFNO0VBQ0UscUJBQUE7QUNOUjtBRFFNO0VBQ0UsV0FBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZmFkZWREb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIG1hcmdpbjogMyUgYXV0byBhdXRvIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGFuaW1hdGlvbjogZmFkZWREb3duIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0LW9mLWVsZW1lbnRzIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuXHJcbiAgICAucG9pbnRlcntcclxuICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLmVsZW1lbnQge1xyXG4gICAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgICB3aWR0aDogMzNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VhcmNoLXZpc3VhbGl6ZSB7XHJcbiAgICAgIC8vIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC5lbGVtZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2V0dGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRlbGF5IHtcclxuICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucXVhbnRpdHkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VsZWN0aW9uIHtcclxuICAgICAgbWFyZ2luOiAxNHB4IDAgMCAyMHB4O1xyXG4gICAgICAjc2VsZWN0aW9uLWxhYmVse1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YXJnZXQtaW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiLCJAa2V5ZnJhbWVzIGZhZGVkRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbjogMyUgYXV0byBhdXRvIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBhbmltYXRpb246IGZhZGVkRG93biAwLjRzO1xufVxuXG4ubGlzdC1vZi1lbGVtZW50cyB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cbi5saXN0LW9mLWVsZW1lbnRzIC5wb2ludGVyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0LW9mLWVsZW1lbnRzIC5wb2ludGVyIC5lbGVtZW50IHtcbiAgaGVpZ2h0OiAzM3B4O1xuICB3aWR0aDogMzNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5saXN0LW9mLWVsZW1lbnRzIC5zZWFyY2gtdmlzdWFsaXplIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGlzdC1vZi1lbGVtZW50cyAuc2VhcmNoLXZpc3VhbGl6ZSAuZWxlbWVudCB7XG4gIGhlaWdodDogMjdweDtcbiAgd2lkdGg6IDI3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgYm9yZGVyOiAzcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2V0dGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2V0dGluZyBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2V0dGluZyAuZGVsYXkge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5zZXR0aW5nIC5xdWFudGl0eSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5zZXR0aW5nIC5zZWxlY3Rpb24ge1xuICBtYXJnaW46IDE0cHggMCAwIDIwcHg7XG59XG4uc2V0dGluZyAuc2VsZWN0aW9uICNzZWxlY3Rpb24tbGFiZWwge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uc2V0dGluZyAudGFyZ2V0LWlucHV0IHtcbiAgcGFkZGluZzogOXB4O1xufVxuLnNldHRpbmcgLnRhcmdldC1pbnB1dCBsYWJlbCB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cbi5zZXR0aW5nIC50YXJnZXQtaW5wdXQgaW5wdXQge1xuICB3aWR0aDogNDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\angular-project\ez-algorithm\ez-algorithm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map