(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GabrielHS\Desktop\ESCUELA\testing-calculator\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "DjGF":
/*!**************************************!*\
  !*** ./src/app/addition/addition.ts ***!
  \**************************************/
/*! exports provided: addition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addition", function() { return addition; });
function addition(a, b) {
    let sum = 0;
    sum = a + b;
    return sum;
}


/***/ }),

/***/ "FGkT":
/*!****************************!*\
  !*** ./src/app/sqr/sqr.ts ***!
  \****************************/
/*! exports provided: sqr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqr", function() { return sqr; });
function sqr(oper1) {
    return oper1 * oper1;
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ui.component */ "lxnM");



class AppComponent {
    constructor() {
        this.title = 'testing-calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hernandezsjg calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-ui");
    } }, directives: [_ui_ui_component__WEBPACK_IMPORTED_MODULE_1__["UiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XNJG":
/*!****************************!*\
  !*** ./src/app/exp/exp.ts ***!
  \****************************/
/*! exports provided: exp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
function exp(a, b) {
    return Math.pow(a, b);
}


/***/ }),

/***/ "YpNG":
/*!**************************************!*\
  !*** ./src/app/division/division.ts ***!
  \**************************************/
/*! exports provided: division */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "division", function() { return division; });
function division(oper1, oper2) {
    // refactoring
    let div = oper1 / oper2;
    return div;
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui.component */ "lxnM");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__["UiComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__["UiComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gkOo":
/*!******************************!*\
  !*** ./src/app/sqrt/sqrt.ts ***!
  \******************************/
/*! exports provided: sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
function sqrt(a) {
    return Math.sqrt(a);
}


/***/ }),

/***/ "lxnM":
/*!************************************!*\
  !*** ./src/app/ui/ui.component.ts ***!
  \************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _addition_addition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addition/addition */ "DjGF");
/* harmony import */ var _substraction_substraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substraction/substraction */ "mQ/+");
/* harmony import */ var _multiplication_multiplication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../multiplication/multiplication */ "pL8T");
/* harmony import */ var _division_division__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../division/division */ "YpNG");
/* harmony import */ var _exp_exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exp/exp */ "XNJG");
/* harmony import */ var _sqr_sqr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sqr/sqr */ "FGkT");
/* harmony import */ var _sqrt_sqrt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sqrt/sqrt */ "gkOo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










class UiComponent {
    constructor() {
        this.result = 0;
        this.operator1 = 0;
        this.operator2 = 0;
    }
    ngOnInit() {
    }
    addition() {
        let myresult = 0;
        myresult = Object(_addition_addition__WEBPACK_IMPORTED_MODULE_1__["addition"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    substraction() {
        let myresult = 0;
        myresult = Object(_substraction_substraction__WEBPACK_IMPORTED_MODULE_2__["substraction"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    division() {
        let myresult = 0;
        myresult = Object(_division_division__WEBPACK_IMPORTED_MODULE_4__["division"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    multiplication() {
        let myresult = 0;
        myresult = Object(_multiplication_multiplication__WEBPACK_IMPORTED_MODULE_3__["multiplication"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    exp() {
        let myresult = 0;
        myresult = Object(_exp_exp__WEBPACK_IMPORTED_MODULE_5__["exp"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    sqr() {
        let myresult = 0;
        myresult = Object(_sqr_sqr__WEBPACK_IMPORTED_MODULE_6__["sqr"])(this.operator1);
        this.result = myresult;
    }
    sqrt() {
        let myresult = 0;
        myresult = Object(_sqrt_sqrt__WEBPACK_IMPORTED_MODULE_7__["sqrt"])(this.operator1);
        this.result = myresult;
    }
}
UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(); };
UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiComponent, selectors: [["app-ui"]], decls: 19, vars: 3, consts: [[1, "calculator"], [1, "input-group"], [1, "input-group-addon"], [1, "glyphicon", "glyphicon-pencil"], ["id", "operator1", "type", "number", "name", "operator1", "placeholder", "0.0", 1, "form-control", "operator1", 3, "ngModel", "ngModelChange"], ["id", "operator2", "type", "number", "name", "operator2", "placeholder", "0.0", 1, "form-control", "operator2", 3, "ngModel", "ngModelChange"], [1, "glyphicon", "glyphicon-plus", "addition-button", 3, "click"], [1, "glyphicon", "glyphicon-minus", "substraction-button", 3, "click"], [1, "glyphicon", "glyphicon-asterisk", "multiplication-button", 3, "click"], [1, "fas", "fa-divide", "division-button", 3, "click"], [1, "glyphicon", "glyphicon-chevron-up", "exp-button", 3, "click"], [1, "fas", "fa-superscript", "sqr-button", 3, "click"], [1, "fas", "fa-square-root-alt", "sqrt-button", 3, "click"], [1, "result"]], template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_5_listener($event) { return ctx.operator1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_9_listener($event) { return ctx.operator2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_10_listener() { return ctx.addition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_11_listener() { return ctx.substraction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_12_listener() { return ctx.multiplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_13_listener() { return ctx.division(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_14_listener() { return ctx.exp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_15_listener() { return ctx.sqr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_16_listener() { return ctx.sqrt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operator1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operator2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".calculator[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #999;\r\n    display: inline;\r\n}\r\n\r\n.result[_ngcontent-%COMP%] {\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    display: flex;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    color: black;\r\n    background: rgb(0, 183, 255);\r\n    width: 5.7em;\r\n    height: 1.5em;\r\n    padding-left:5px;\r\n    font-weight: 100;\r\n}\r\n\r\n.operator1[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 0px;\r\n    width: 5.9em;\r\n    height: 1.5em;\r\n    font-size: 2em;\r\n    background: #ff9500;\r\n}\r\n\r\n.operator2[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 0px;\r\n    width: 5.9em;\r\n    height: 1.5em;\r\n    font-size: 2em;\r\n    background: #ff9500;\r\n}\r\n\r\n.addition-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: black;\r\n    font-size: 2em;\r\n    background: rgb(25, 209, 50);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.substraction-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: black;\r\n    font-size: 2em;\r\n    background: rgb(25, 209, 50);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.multiplication-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: black;\r\n    font-size: 2em;\r\n    background: rgb(25, 209, 50);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.division-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: black;\r\n    font-size: 2em;\r\n    background: rgb(25, 209, 50);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.exp-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: black;\r\n    font-size: 2em;\r\n    background: rgb(25, 209, 50);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.sqr-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: black;\r\n    font-size: 2em;\r\n    background: rgb(25, 209, 50);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.sqrt-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: black;\r\n    font-size: 2em;\r\n    background: rgb(25, 209, 50);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC91aS91aS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGN1bGF0b3Ige1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxODMsIDI1NSk7XHJcbiAgICB3aWR0aDogNS43ZW07XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5vcGVyYXRvcjEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiA1LjllbTtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbn1cclxuXHJcbi5vcGVyYXRvcjIge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiA1LjllbTtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbn1cclxuXHJcbi5hZGRpdGlvbi1idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUsIDIwOSwgNTApO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN1YnN0cmFjdGlvbi1idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUsIDIwOSwgNTApO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLm11bHRpcGxpY2F0aW9uLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNSwgMjA5LCA1MCk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24tYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1LCAyMDksIDUwKTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5leHAtYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1LCAyMDksIDUwKTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zcXItYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1LCAyMDksIDUwKTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zcXJ0LWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNSwgMjA5LCA1MCk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui',
                templateUrl: './ui.component.html',
                styleUrls: ['./ui.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mQ/+":
/*!**********************************************!*\
  !*** ./src/app/substraction/substraction.ts ***!
  \**********************************************/
/*! exports provided: substraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substraction", function() { return substraction; });
function substraction(oper1, oper2) {
    // refactoring
    let subs = 0;
    subs = oper1 - oper2;
    return subs;
}


/***/ }),

/***/ "pL8T":
/*!**************************************************!*\
  !*** ./src/app/multiplication/multiplication.ts ***!
  \**************************************************/
/*! exports provided: multiplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplication", function() { return multiplication; });
function multiplication(oper1, oper2) {
    // refactoring
    let mul = oper1 * oper2;
    return mul;
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map