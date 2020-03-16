(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./amenities-details/amenities-details.module": [
		"./src/app/amenities-details/amenities-details.module.ts",
		"amenities-details-amenities-details-module"
	],
	"./amenity-book-now/amenity-book-now.module": [
		"./src/app/amenity-book-now/amenity-book-now.module.ts",
		"default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec",
		"amenity-book-now-amenity-book-now-module"
	],
	"./amenity-booking-details/amenity-booking-details.module": [
		"./src/app/amenity-booking-details/amenity-booking-details.module.ts",
		"amenity-booking-details-amenity-booking-details-module"
	],
	"./amenity-booking-list/amenity-booking-list.module": [
		"./src/app/amenity-booking-list/amenity-booking-list.module.ts",
		"amenity-booking-list-amenity-booking-list-module"
	],
	"./amenity-info/amenity-info.module": [
		"./src/app/amenity-info/amenity-info.module.ts",
		"amenity-info-amenity-info-module"
	],
	"./change-password/change-password.module": [
		"./src/app/change-password/change-password.module.ts",
		"default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec",
		"change-password-change-password-module"
	],
	"./forgot-password/forgot-password.module": [
		"./src/app/forgot-password/forgot-password.module.ts",
		"default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec",
		"forgot-password-forgot-password-module"
	],
	"./notice-main-list/notice-main-list.module": [
		"./src/app/notice-main-list/notice-main-list.module.ts",
		"notice-main-list-notice-main-list-module"
	],
	"./notice-rules-details/notice-rules-details.module": [
		"./src/app/notice-rules-details/notice-rules-details.module.ts",
		"notice-rules-details-notice-rules-details-module"
	],
	"./notice-rules-list/notice-rules-list.module": [
		"./src/app/notice-rules-list/notice-rules-list.module.ts",
		"notice-rules-list-notice-rules-list-module"
	],
	"./old-tenant-details/old-tenant-details.module": [
		"./src/app/old-tenant-details/old-tenant-details.module.ts",
		"old-tenant-details-old-tenant-details-module"
	],
	"./parking-details/parking-details.module": [
		"./src/app/parking-details/parking-details.module.ts",
		"parking-details-parking-details-module"
	],
	"./profile-details/profile-details.module": [
		"./src/app/profile-details/profile-details.module.ts",
		"profile-details-profile-details-module"
	],
	"./profile-edit/profile-edit.module": [
		"./src/app/profile-edit/profile-edit.module.ts",
		"default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec",
		"default~profile-edit-profile-edit-module~tabs-tabs-module",
		"profile-edit-profile-edit-module"
	],
	"./resident-details-individual/resident-details-individual.module": [
		"./src/app/resident-details-individual/resident-details-individual.module.ts",
		"resident-details-individual-resident-details-individual-module"
	],
	"./resident-details-list/resident-details-list.module": [
		"./src/app/resident-details-list/resident-details-list.module.ts",
		"resident-details-list-resident-details-list-module"
	],
	"./tab4/tab4.module": [
		"./src/app/tab4/tab4.module.ts",
		"default~tab4-tab4-module~tabs-tabs-module"
	],
	"./tenant-details/tenant-details.module": [
		"./src/app/tenant-details/tenant-details.module.ts",
		"tenant-details-tenant-details-module"
	],
	"./terms-and-conditions/terms-and-conditions.module": [
		"./src/app/terms-and-conditions/terms-and-conditions.module.ts",
		"terms-and-conditions-terms-and-conditions-module"
	],
	"./unit-details/unit-details.module": [
		"./src/app/unit-details/unit-details.module.ts",
		"unit-details-unit-details-module"
	],
	"./visitor-add-request-modal/visitor-add-request-modal.module": [
		"./src/app/visitor-add-request-modal/visitor-add-request-modal.module.ts",
		"common",
		"visitor-add-request-modal-visitor-add-request-modal-module"
	],
	"./visitor-add-request/visitor-add-request.module": [
		"./src/app/visitor-add-request/visitor-add-request.module.ts",
		"default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec",
		"common",
		"visitor-add-request-visitor-add-request-module"
	],
	"./visitor-details-modal/visitor-details-modal.module": [
		"./src/app/visitor-details-modal/visitor-details-modal.module.ts",
		"common",
		"visitor-details-modal-visitor-details-modal-module"
	],
	"./visitor-list-details/visitor-list-details.module": [
		"./src/app/visitor-list-details/visitor-list-details.module.ts",
		"common",
		"visitor-list-details-visitor-list-details-module"
	],
	"./visitors-details/visitors-details.module": [
		"./src/app/visitors-details/visitors-details.module.ts",
		"default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec",
		"visitors-details-visitors-details-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSplash\" class=\"splash\">\r\n  <div class=\"spinner\">\r\n    <div class=\"dot1\"></div>\r\n    <div class=\"dot2\"></div>\r\n  </div>\r\n</div>\r\n\r\n<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | tabs-tabs-module */[__webpack_require__.e("default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec"), __webpack_require__.e("default~tab4-tab4-module~tabs-tabs-module"), __webpack_require__.e("default~profile-edit-profile-edit-module~tabs-tabs-module"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(m => m.TabsPageModule)
    },
    // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'unit-details', loadChildren: './unit-details/unit-details.module#UnitDetailsPageModule' },
    { path: 'tenant-details', loadChildren: './tenant-details/tenant-details.module#TenantDetailsPageModule' },
    { path: 'resident-details-list', loadChildren: './resident-details-list/resident-details-list.module#ResidentDetailsListPageModule' },
    { path: 'resident-details-individual/:id/:pUnitCode', loadChildren: './resident-details-individual/resident-details-individual.module#ResidentDetailsIndividualPageModule' },
    { path: 'old-tenant-details', loadChildren: './old-tenant-details/old-tenant-details.module#OldTenantDetailsPageModule' },
    { path: 'parking-details', loadChildren: './parking-details/parking-details.module#ParkingDetailsPageModule' },
    { path: 'visitors-details', loadChildren: './visitors-details/visitors-details.module#VisitorsDetailsPageModule' },
    { path: 'visitor-list-details', loadChildren: './visitor-list-details/visitor-list-details.module#VisitorListDetailsPageModule' },
    { path: 'visitor-details-modal', loadChildren: './visitor-details-modal/visitor-details-modal.module#VisitorDetailsModalPageModule' },
    { path: 'visitor-add-request', loadChildren: './visitor-add-request/visitor-add-request.module#VisitorAddRequestPageModule' },
    { path: 'visitor-add-request-modal', loadChildren: './visitor-add-request-modal/visitor-add-request-modal.module#VisitorAddRequestModalPageModule' },
    { path: 'notice-main-list', loadChildren: './notice-main-list/notice-main-list.module#NoticeMainListPageModule' },
    { path: 'notice-rules-list', loadChildren: './notice-rules-list/notice-rules-list.module#NoticeRulesListPageModule' },
    { path: 'notice-rules-details', loadChildren: './notice-rules-details/notice-rules-details.module#NoticeRulesDetailsPageModule' },
    { path: 'amenities-details', loadChildren: './amenities-details/amenities-details.module#AmenitiesDetailsPageModule' },
    { path: 'amenity-info', loadChildren: './amenity-info/amenity-info.module#AmenityInfoPageModule' },
    { path: 'amenity-book-now', loadChildren: './amenity-book-now/amenity-book-now.module#AmenityBookNowPageModule' },
    { path: 'amenity-booking-list', loadChildren: './amenity-booking-list/amenity-booking-list.module#AmenityBookingListPageModule' },
    { path: 'amenity-booking-details', loadChildren: './amenity-booking-details/amenity-booking-details.module#AmenityBookingDetailsPageModule' },
    { path: 'profile-details', loadChildren: './profile-details/profile-details.module#ProfileDetailsPageModule' },
    { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
    { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
    { path: 'terms-and-conditions', loadChildren: './terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule' },
    { path: 'profile-edit', loadChildren: './profile-edit/profile-edit.module#ProfileEditPageModule' },
    { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nbody, p, h1, h2, h3, h4, h5, span, div {\n  font-family: \"Assistant_reg\";\n}\n.splash {\n  position: relative;\n  widows: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0640c4), to(#2baafb));\n  background: linear-gradient(to top, #0640c4, #2baafb);\n}\n.spinner {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-align: center;\n  -webkit-animation: sk-rotate 2s infinite linear;\n  animation: sk-rotate 2s infinite linear;\n}\n.dot1, .dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: #ffffff;\n  border-radius: 100%;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n.dot2 {\n  top: auto;\n  bottom: 0;\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes sk-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes sk-rotate {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFwyMDIwXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURFQTtFQUNJLDRCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVGQUFBO0VBQUEscURBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQ0FBQTtFQUNBLHVDQUFBO0FDREo7QURJRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsb0RBQUE7RUFDQSw0Q0FBQTtBQ0ZKO0FES0U7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNGSjtBREtFO0VBQStCO0lBQU8saUNBQUE7RUNBdEM7QUFDRjtBREFFO0VBQXVCO0lBQU8seUJBQUE7SUFBMkIsaUNBQUE7RUNLekQ7QUFDRjtBREpFO0VBQ0U7SUFBVywyQkFBQTtFQ09iO0VETkU7SUFBTSwyQkFBQTtFQ1NSO0FBQ0Y7QURQRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSwyQkFBQTtFQ1NKO0VEUkk7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0VDVUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxufVxyXG5cclxuYm9keSwgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBzcGFuLCBkaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxufVxyXG5cclxuLnNwbGFzaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWRvd3M6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjQwYzQsICMyYmFhZmIpO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZSAyLjBzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbjogc2stcm90YXRlIDIuMHMgaW5maW5pdGUgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICAuZG90MSwgLmRvdDIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3QyIHtcclxuICAgIHRvcDogYXV0bztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGUgeyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH19XHJcbiAgQGtleWZyYW1lcyBzay1yb3RhdGUgeyAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH19XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgMCUsIDEwMCUgeyBcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgIH0gNTAlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICB9XHJcbiAgfSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuYm9keSwgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBzcGFuLCBkaXYge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5zcGxhc2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZG93czogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjQwYzQsICMyYmFhZmIpO1xufVxuXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHNrLXJvdGF0ZSAycyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5kb3QxLCAuZG90MiB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmRvdDIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGUge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/timer */ "./node_modules/rxjs-compat/_esm2015/observable/timer.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/post-providers */ "./src/providers/post-providers.ts");








let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, 
    //CheckVer
    appVersion, postPvd, alertController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appVersion = appVersion;
        this.postPvd = postPvd;
        this.alertController = alertController;
        this.showSplash = true;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            Object(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000).subscribe(() => this.showSplash = false);
            this.appVersion.getVersionNumber().then(versionNumber => {
                this.AppVer = versionNumber;
                if (this.platform.is('android')) {
                    var devPlat = 'android';
                    localStorage.setItem("PLATFORM", 'AND');
                }
                if (this.platform.is('ios')) {
                    var devPlat = 'ios';
                    localStorage.setItem("PLATFORM", 'IOS');
                }
                if (versionNumber != undefined) {
                    return new Promise(resolve => {
                        let body = {
                            action: 'checkVersion',
                            currentVersion: versionNumber,
                            devPlat: devPlat,
                        };
                        this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                            if (data['platform'] == 'android') {
                                if (data['updated'] == 'no') {
                                    // alert(JSON.stringify(data));
                                    this.presentAlertConfirm('android');
                                }
                            }
                            else if (data['platform'] == 'ios') {
                                if (data['updated'] == 'no') {
                                    // alert(JSON.stringify(data));
                                    this.presentAlertConfirm('ios');
                                }
                            }
                        });
                    });
                }
            }).catch(err => {
                console.log(err);
            });
        });
    }
    presentAlertConfirm(plt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'The app needs to be updated before you use Azure-Connect app.',
                backdropDismiss: false,
                // message: 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Update',
                        handler: () => {
                            // window.location.href = "https://play.app.goo.gl/?link=https://https://play.google.com/store/apps/details?id=com.agsi.AzureConnect";
                            if (plt == 'android') {
                                window.open("https://play.google.com/store/apps/details?id=com.agsi.AzureConnect", "_system");
                                navigator['app'].exitApp();
                            }
                            else {
                                window.open("https://apps.apple.com/ph/app/azure-connect/id1490206148", "_system");
                                navigator['app'].exitApp();
                            }
                            // console.log('Confirm Okay');
                            // document.location.href = 'index.html';
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"] },
    { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_7__["PostProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"],
        _providers_post_providers__WEBPACK_IMPORTED_MODULE_7__["PostProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _app_service_image_provider_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/service/image-provider.service */ "./src/app/service/image-provider.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");


















let AppModule = class AppModule {
    constructor() {
    }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_10__["PostProvider"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__["DocumentViewer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"],
            _app_service_image_provider_service__WEBPACK_IMPORTED_MODULE_16__["ImageProviderService"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_17__["AppVersion"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppModule);



/***/ }),

/***/ "./src/app/service/image-provider.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/image-provider.service.ts ***!
  \***************************************************/
/*! exports provided: ImageProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProviderService", function() { return ImageProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ImageProviderService = class ImageProviderService {
    constructor(http) {
        this.http = http;
        this.base64img = '';
    }
    setImage(img) {
        this.base64img = img;
    }
    getImage() {
        return this.base64img;
    }
};
ImageProviderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImageProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ImageProviderService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "./src/providers/post-providers.ts":
/*!*****************************************!*\
  !*** ./src/providers/post-providers.ts ***!
  \*****************************************/
/*! exports provided: PostProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostProvider", function() { return PostProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");





let PostProvider = class PostProvider {
    constructor(http) {
        this.http = http;
        this.server = "https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/";
    }
    postData(body, file) {
        let type = "application/json; charset=UTF-8";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': type });
        // let options = new RequestOptions({ headers: headers });
        return this.http.post(this.server + file, JSON.stringify(body));
    }
};
PostProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PostProvider);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AGSI\Desktop\2020\Azure\azure\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map