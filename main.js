(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee1_employee1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee1/employee1.component */ "./src/app/employee1/employee1.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");







//import { HomeComponent } from './home/home.component';
var routes = [
    {
        path: 'person',
        component: _person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]
    },
    {
        path: '',
        component: _person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]
    },
    {
        path: 'employee2',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"]
    },
    {
        path: 'employee1',
        component: _employee1_employee1_component__WEBPACK_IMPORTED_MODULE_5__["Employee1Component"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    padding: 1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n  <div class=\"mdl-layout__header mdl-layout__header--waterfall\">\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\" routerLink=\"/\">\n        GraphQL POC demonstration\n      </span>\n      <!-- Add spacer, to align navigation to the right in desktop -->\n      <div class=\"mdl-layout-spacer\"></div>\n      <!-- Navigation -->\n        <ul class=\"mdl-navigation\">\n         \n        </ul>\n    </div>\n  </div>\n\n  <div class=\"mdl-layout__drawer\">\n    \n  </div>\n\n  <div class=\"mdl-layout__content content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graphql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphql.service */ "./src/app/graphql.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'angulargraphqlclient';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.service.getOwners();
        // this.service.getOwner('514c3bc3-14df-4515-bc13-256e75dd2e9f');
        // const ownerToCreate = {
        //   name: 'new name',
        //   address: 'new address'
        // }
        // this.service.createOwner(ownerToCreate);
        // const ownerToUpdate = {
        //   name: 'updated name',
        //   address: 'updated address'
        // }
        // this.service.updateOwner(ownerToUpdate, 'BEABBE64-C19A-4FFE-B149-34D1F5B1BC45');
        //this.service.deleteOwner('BEABBE64-C19A-4FFE-B149-34D1F5B1BC45');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_graphql_service__WEBPACK_IMPORTED_MODULE_2__["GraphQLModule"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ngApolloLinkHttp.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _graphql_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphql.service */ "./src/app/graphql.service.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee1_employee1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee1/employee1.component */ "./src/app/employee1/employee1.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_9__["PersonComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"],
                _employee1_employee1_component__WEBPACK_IMPORTED_MODULE_12__["Employee1Component"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                apollo_angular__WEBPACK_IMPORTED_MODULE_4__["ApolloModule"],
                apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLinkModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _graphql_service__WEBPACK_IMPORTED_MODULE_10__["GraphQLModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Employee ID : &nbsp;  &nbsp;  \n  <input type=\"text\" id=\"id\" [(ngModel)]=\"id\">\n  </label>\n  <br>\n  \n  <br>\n  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;\n  <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\" Align=\"center\" (click)=\"update()\">\n    Filter\n  </button>\n  \n  <h4 align=\"center\">Employee Information</h4>\n  <table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n    <tr>\n      <th class=\"mdl-data-table__cell--non-numeric\"><b>EmpID</b></th>\n      <th class=\"mdl-data-table__cell--non-numeric\"><b>Name</b></th>\n      <th class=\"mdl-data-table__cell--non-numeric\">EmpCode</th>\n      <th class=\"mdl-data-table__cell--non-numeric\">Salary</th>\n    </tr>\n    <tr>      \n      <td class=\"mdl-data-table__cell--non-numeric\">{{employees.EmpID}}</td>\n      <td class=\"mdl-data-table__cell--non-numeric\">{{employees.Name}}</td>\n      <td class=\"mdl-data-table__cell--non-numeric\">{{employees.EmpCode}}</td>   \n      <td class=\"mdl-data-table__cell--non-numeric\">{{employees.Salary}}</td>\n    </tr>\n  </table>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




var EMPLOEE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query getEmployee($id:Int!) {\n    getEmployee(id: $id) {\n      EmpID\n      Name\n      EmpCode\n      Salary    \n  }\n}\n"], ["\n  query getEmployee($id:Int!) {\n    getEmployee(id: $id) {\n      EmpID\n      Name\n      EmpCode\n      Salary    \n  }\n}\n"])));
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(apollo) {
        this.apollo = apollo;
        this.id = 1;
        this.page = 0;
        this.employees = [];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.query = this.apollo
            .watchQuery({
            query: EMPLOEE_QUERY,
            variables: { id: Math.round(this.id) }
        });
        this.query.valueChanges.subscribe(function (result) {
            _this.employees = result.data.getEmployee;
        });
    };
    EmployeeComponent.prototype.update = function () {
        return this.query.refetch({ id: Math.round(this.id) });
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/employee1/employee1.component.css":
/*!***************************************************!*\
  !*** ./src/app/employee1/employee1.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlMS9lbXBsb3llZTEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employee1/employee1.component.html":
/*!****************************************************!*\
  !*** ./src/app/employee1/employee1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Employee ID : &nbsp;  &nbsp;  \n  <input type=\"text\" id=\"id\" [(ngModel)]=\"id\">\n  </label>\n  <br>\n  \n  <br>\n  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;\n  <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\" Align=\"center\" (click)=\"update()\">\n    Filter\n  </button>\n  \n  <h4 align=\"center\">Employee Information</h4>\n  <table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n    <tr>\n      <th class=\"mdl-data-table__cell--non-numeric\"><b>EmpID</b></th>\n      <th></th>\n      <th class=\"mdl-data-table__cell--non-numeric\"><b>Name</b></th>\n      <th></th>\n    </tr>\n    <tr>      \n      <td class=\"mdl-data-table__cell--non-numeric\">{{employees1.id}}</td>\n      <td></td>\n      <td class=\"mdl-data-table__cell--non-numeric\">{{employees1.emp_name}}</td>   \n      <td></td>\n    </tr>\n  </table>"

/***/ }),

/***/ "./src/app/employee1/employee1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employee1/employee1.component.ts ***!
  \**************************************************/
/*! exports provided: Employee1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee1Component", function() { return Employee1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




var EMPLOEE1_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query getEmp($id:Int!) {\n    getEmp(id: $id) {\n      id\n      emp_name   \n  }\n}\n"], ["\n  query getEmp($id:Int!) {\n    getEmp(id: $id) {\n      id\n      emp_name   \n  }\n}\n"])));
var Employee1Component = /** @class */ (function () {
    function Employee1Component(apollo) {
        this.apollo = apollo;
        this.id = 123;
        this.page = 0;
        this.employees1 = [];
    }
    Employee1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.query = this.apollo
            .watchQuery({
            query: EMPLOEE1_QUERY,
            variables: { id: Math.round(this.id) }
        });
        this.query.valueChanges.subscribe(function (result) {
            _this.employees1 = result.data.getEmp;
        });
    };
    Employee1Component.prototype.update = function () {
        return this.query.refetch({ id: Math.round(this.id) });
    };
    Employee1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee1',
            template: __webpack_require__(/*! ./employee1.component.html */ "./src/app/employee1/employee1.component.html"),
            styles: [__webpack_require__(/*! ./employee1.component.css */ "./src/app/employee1/employee1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], Employee1Component);
    return Employee1Component;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/graphql.service.ts":
/*!************************************!*\
  !*** ./src/app/graphql.service.ts ***!
  \************************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ngApolloLinkHttp.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");





function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: 'http://gpl-api-load-balancer-1082457367.us-east-1.elb.amazonaws.com/graphQL/Demo' }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"](),
    };
}
//http://localhost:2020/graphQL/Demo
//http://gpl-api-load-balancer-1082457367.us-east-1.elb.amazonaws.com/graphQL/Demo
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                },
            ],
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label><b>Employee Login Form : </b>&nbsp;  &nbsp;\n  <br>\n  <br>  \n<label><b>ID : </b>&nbsp;  &nbsp;\n  <input type=\"text\" id=\"id\" [(ngModel)]=\"id\">\n  </label>\n  <br>\n\n  <label><b>Key : </b>&nbsp;  &nbsp;\n    <input type=\"text\" id=\"key\" [(ngModel)]=\"key\">\n    </label>\n    <br>\n\n  <br>\n    &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;\n    \n  <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\"\n   Align=\"center\" (click)=\"submit()\">\n    Submit\n  </button>  \n "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PERSON_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query login($id:String!,$key:String!) {\n    login(id: $id,key: $key) {\n      token   \n  }\n}\n"], ["\n  query login($id:String!,$key:String!) {\n    login(id: $id,key: $key) {\n      token   \n  }\n}\n"])));
var LoginComponent = /** @class */ (function () {
    function LoginComponent(apollo, http) {
        this.apollo = apollo;
        this.http = http;
        this.id = "1";
        this.key = "1";
        this.page = 0;
        this.persons = [];
        this.idValue = 1;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.query = this.apollo
            .watchQuery({
            query: PERSON_QUERY,
            variables: { id: this.id, key: this.key }
        });
        this.query.valueChanges.subscribe(function (result) {
            _this.persons = result.data.getPerson;
            // this.idValue=this.id;
        });
    };
    LoginComponent.prototype.submit = function () {
        debugger;
        console.log("===22222=============");
        // const url = `${this.heroesUrl}/${id}`; 
        return this.http.post("http://localhost:3000/gql", { id: this.id, key: this.key })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            console.log("================" + user);
            console.log("================" + user.token);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/person/person.component.css":
/*!*********************************************!*\
  !*** ./src/app/person/person.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label><b>Person ID : </b>&nbsp;  &nbsp;\n<input type=\"text\" id=\"id\" [(ngModel)]=\"id\">\n</label>\n<br>\n<br>\n  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;\n  \n<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\" Align=\"center\" (click)=\"update()\">\n  Filter\n</button>\n\n<h4 align=\"center\"><b>Person Information</b></h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n  <tr>\n    <th class=\"mdl-data-table__cell--non-numeric\"><b>ID</b></th>\n    <th class=\"mdl-data-table__cell--non-numeric\"><b>Name</b></th>\n    <th class=\"mdl-data-table__cell--non-numeric\">Age</th>\n    <th class=\"mdl-data-table__cell--non-numeric\">Hair Color</th>    \n    <th class=\"mdl-data-table__cell--non-numeric\">Gender</th>\n  </tr>\n  <tr>\n    <td class=\"mdl-data-table__cell--non-numeric\">{{idValue}}</td>\n    <td class=\"mdl-data-table__cell--non-numeric\">{{persons.name}}</td>\n    <td class=\"mdl-data-table__cell--non-numeric\">{{persons.mass}}</td>\n    <td class=\"mdl-data-table__cell--non-numeric\">{{persons.hair_color}}</td>   \n    <td class=\"mdl-data-table__cell--non-numeric\">{{persons.gender}}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




var PERSON_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query getPerson($id:Int!) {\n      getPerson(id: $id) {\n      name\n      mass\n      hair_color\n      gender    \n  }\n}\n"], ["\n  query getPerson($id:Int!) {\n      getPerson(id: $id) {\n      name\n      mass\n      hair_color\n      gender    \n  }\n}\n"])));
var PersonComponent = /** @class */ (function () {
    function PersonComponent(apollo) {
        this.apollo = apollo;
        this.id = 1;
        this.page = 0;
        this.persons = [];
        this.idValue = 1;
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.query = this.apollo
            .watchQuery({
            query: PERSON_QUERY,
            variables: { id: Math.round(this.id) }
        });
        this.query.valueChanges.subscribe(function (result) {
            _this.persons = result.data.getPerson;
            _this.idValue = _this.id;
        });
    };
    PersonComponent.prototype.update = function () {
        return this.query.refetch({ id: Math.round(this.id) });
    };
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/person/person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], PersonComponent);
    return PersonComponent;
}());

var templateObject_1;


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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Projec1\angulargraphqlclient1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map