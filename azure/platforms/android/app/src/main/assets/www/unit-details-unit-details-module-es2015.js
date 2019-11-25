(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-details-unit-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/unit-details/unit-details.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/unit-details/unit-details.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <!-- <ion-button class=\"btn_back\" routerLink=\"/tabs/tab1\"></ion-button> \n      <img class=\"imgBack\" src=\"/assets/arrow_left_white.png\"> -->\n      <ion-buttons size=\"small\" slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title class=\"header_title\">Unit Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-card class=\"welcome-card\"></ion-card>\n  <div class=\"building_div\"></div>\n\n  <ion-grid class=\"building_details_grid\" fixed *ngFor=\"let res of users\">\n      <ion-row class=\"building_details_row\">\n          <ion-col size=\"12\">\n            <p class=\"building_title\">{{res.propertyBuilding}}</p>\n          </ion-col>\n          <ion-col size=\"12\" class=\"pb-0\">\n              <p class=\"floor_text\"><img class=\"img_floor\" src=\"/assets/floors.png\"> <span>{{res.floorNoX}} Floor</span></p>\n          </ion-col>\n          <ion-col size=\"12\">\n              <p class=\"floor_text\"><img class=\"img_floor\" src=\"/assets/unit_door.png\"> <span>Unit {{res.pUnitRoom}}</span></p>\n          </ion-col>\n          <ion-col size=\"12\">\n              <hr class=\"hr_line\">\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"12\">\n              <div class=\"scroll_unit_plan\">\n                  <ion-card class=\"unit_plan_details_card\">\n                      <ion-card-header>\n                        <img class=\"img_bedroom\" src=\"/assets/icon_bed.png\">\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pBedrooms}} Bedroom</ion-card-subtitle>\n                      </ion-card-header>\n                  </ion-card>\n                  <ion-card class=\"unit_plan_details_card\">\n                      <ion-card-header>\n                        <img class=\"img_bedroom\" src=\"/assets/icon_hall.png\">\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pHall}}</ion-card-subtitle>\n                      </ion-card-header>\n                  </ion-card>\n                  <ion-card class=\"unit_plan_details_card\">\n                      <ion-card-header>\n                        <img class=\"img_bedroom\" src=\"/assets/icon_balcony.png\">\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pBalcony}} Balcony</ion-card-subtitle>\n                      </ion-card-header>\n                  </ion-card>\n                  <ion-card class=\"unit_plan_details_card\">\n                      <ion-card-header>\n                        <img class=\"img_bedroom\" src=\"/assets/icon_toilet.png\">\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pWashrooms}} Washroom</ion-card-subtitle>\n                      </ion-card-header>\n                  </ion-card>\n                  <ion-card class=\"unit_plan_details_card\">\n                      <ion-card-header>\n                        <img class=\"img_bedroom\" src=\"/assets/icon_unit.png\">\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pUnitSizeRangeX}}</ion-card-subtitle>\n                      </ion-card-header>\n                  </ion-card>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" (click)=\"openTenantDetailsInTabs(res.tenantCode, res.pUnitRoom)\" color=\"primary\">Tenant Details</ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" *ngIf=\"res.tenantCode == ''\"  (click)=\"openResidentDetailsListInTabs(res.unit_code, 'Owner', res.pUnitRoom)\" color=\"primary\">Resident Details</ion-button>\n          <ion-button expand=\"block\" *ngIf=\"res.tenantCode != ''\"  (click)=\"openResidentDetailsListInTabs(res.tenantCode, 'Tenant', res.pUnitRoom)\" color=\"primary\">Resident Details</ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" (click)=\"openParkingDetails(res.property_code, res.floorNo, res.roomNo, res.propertyBuilding)\" color=\"primary\">Parking Details</ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" (click)=\"openOldTenantDetails(res.unit_code)\" color=\"primary\">Old Tenant Details</ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  \n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/unit-details/unit-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/unit-details/unit-details.module.ts ***!
  \*****************************************************/
/*! exports provided: UnitDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDetailsPageModule", function() { return UnitDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _unit_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unit-details.page */ "./src/app/unit-details/unit-details.page.ts");







const routes = [
    {
        path: '',
        component: _unit_details_page__WEBPACK_IMPORTED_MODULE_6__["UnitDetailsPage"]
    }
];
let UnitDetailsPageModule = class UnitDetailsPageModule {
};
UnitDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_unit_details_page__WEBPACK_IMPORTED_MODULE_6__["UnitDetailsPage"]]
    })
], UnitDetailsPageModule);



/***/ }),

/***/ "./src/app/unit-details/unit-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/unit-details/unit-details.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.card-background-page .pb-0 {\n  padding-bottom: 0;\n}\n.card-background-page .m-0 {\n  margin: 0;\n}\n.card-background-page .welcome-card {\n  position: relative;\n  background-image: url(\"/assets/unitbg2.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  margin: 0;\n  height: 20vh;\n  border-radius: 0;\n  box-shadow: none;\n}\n.card-background-page .building_div {\n  background-image: url(/assets/condo.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border: 5px solid #ffffff;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 13%;\n  left: 16px;\n  border-radius: 4px;\n}\n.card-background-page .hr_line {\n  background: #a0a0a0;\n  height: 2px;\n  margin: 0;\n}\n.card-background-page .building_details_row {\n  margin-top: 30px;\n  margin-left: 10px;\n}\n.card-background-page .building_details_grid {\n  margin-bottom: 20px;\n}\n.card-background-page .building_title {\n  font-weight: bold;\n  color: #656464;\n  margin-bottom: 0;\n  font-size: 18px;\n  margin-top: 10px;\n}\n.card-background-page .img_floor {\n  width: 18px;\n  margin-right: 4px;\n}\n.card-background-page .floor_text {\n  color: #656464;\n  font-size: 13px;\n  font-weight: 500;\n  margin: 0;\n}\n.card-background-page .floor_text span {\n  height: auto;\n  position: absolute;\n  top: 8px;\n}\n.card-background-page .unit_bedroom {\n  font-weight: 400;\n  text-transform: inherit;\n  margin-top: 7px;\n  margin-bottom: 0;\n}\n.card-background-page .img_bedroom {\n  width: 20px;\n}\n.card-background-page .unit_plan_details_card {\n  margin: 0;\n  width: 110px;\n  display: inline-block;\n  margin-right: 13px;\n}\n.card-background-page .scroll_unit_plan {\n  height: 96px;\n  margin: 0 10px;\n  padding: 4px 4px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.card-background-page .scroll_unit_plan::-webkit-scrollbar {\n  width: 0px;\n}\n.card-background-page .unit_plan_details_card ion-card-header {\n  padding: 15px;\n}\n.imgBack {\n  width: 20px;\n  position: absolute;\n  top: 12px;\n  left: 16px;\n  z-index: 0;\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.btn_back {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  --background: transparent;\n  --box-shadow: none;\n  width: 30px;\n  height: 25px;\n  z-index: 1;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pdC1kZXRhaWxzL0M6XFxVc2Vyc1xcQUdTSVxcRGVza3RvcFxcQXBwQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFx1bml0LWRldGFpbHNcXHVuaXQtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3VuaXQtZGV0YWlscy91bml0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTtFQUFhLDRCQUFBO0FDRWI7QURBQTtFQUFXLDRCQUFBO0FDSVg7QURIQTtFQUFhLDhCQUFBO0FDT2I7QUROQTtFQUFnQixpQ0FBQTtBQ1VoQjtBRFRBO0VBQVksNkJBQUE7QUNhWjtBRFpBO0VBQWlCLGtDQUFBO0FDZ0JqQjtBRGJJO0VBQU8saUJBQUE7QUNpQlg7QURoQkk7RUFBTSxTQUFBO0FDbUJWO0FEbEJJO0VBQ0ksa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ29CUjtBRGxCSTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ29CUjtBRGpCSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNtQlI7QURqQkk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDbUJSO0FEakJJO0VBQ0ksbUJBQUE7QUNtQlI7QURqQkk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ21CUjtBRGpCSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ21CUjtBRGpCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDbUJSO0FEakJJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ21CUjtBRGpCSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNtQlI7QURqQkk7RUFBYyxXQUFBO0FDb0JsQjtBRG5CSTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ3FCUjtBRG5CSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNxQlI7QURuQkk7RUFDSSxVQUFBO0FDcUJSO0FEbEJJO0VBQ0ksYUFBQTtBQ29CUjtBRGZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDa0JKO0FEaEJBO0VBQ0ksa0JBQUE7QUNtQko7QURqQkE7RUFDSSxrQkFBQTtBQ29CSjtBRGxCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0FDcUJKIiwiZmlsZSI6InNyYy9hcHAvdW5pdC1kZXRhaWxzL3VuaXQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG5cbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICAucGItMCB7cGFkZGluZy1ib3R0b206IDA7fVxuICAgIC5tLTAge21hcmdpbjogMDt9XG4gICAgLndlbGNvbWUtY2FyZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3VuaXRiZzIuanBnJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgIC5idWlsZGluZ19kaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jb25kby5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMyU7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIH1cbiAgICAuaHJfbGluZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhMGEwYTA7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5idWlsZGluZ19kZXRhaWxzX3JvdyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAuYnVpbGRpbmdfZGV0YWlsc19ncmlkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmJ1aWxkaW5nX3RpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNjU2NDY0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5pbWdfZmxvb3Ige1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5mbG9vcl90ZXh0IHtcbiAgICAgICAgY29sb3I6ICM2NTY0NjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuZmxvb3JfdGV4dCBzcGFuIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOHB4O1xuICAgIH1cbiAgICAudW5pdF9iZWRyb29tIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLmltZ19iZWRyb29tIHt3aWR0aDogMjBweDt9XG4gICAgLnVuaXRfcGxhbl9kZXRhaWxzX2NhcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgfVxuICAgIC5zY3JvbGxfdW5pdF9wbGFuIHtcbiAgICAgICAgaGVpZ2h0OiA5NnB4O1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDRweDtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICAgIC5zY3JvbGxfdW5pdF9wbGFuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwcHg7XG4gICAgfVxuXG4gICAgLnVuaXRfcGxhbl9kZXRhaWxzX2NhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG5cbn1cblxuLmltZ0JhY2sge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgbGVmdDogMTZweDtcbiAgICB6LWluZGV4OiAwO1xufVxuLmhlYWRlcl90aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYnRuX2JhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDZweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5wYi0wIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm0tMCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAud2VsY29tZS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3VuaXRiZzIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMjB2aDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYnVpbGRpbmdfZGl2IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY29uZG8ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMlO1xuICBsZWZ0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmhyX2xpbmUge1xuICBiYWNrZ3JvdW5kOiAjYTBhMGEwO1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5idWlsZGluZ19kZXRhaWxzX3JvdyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5idWlsZGluZ19kZXRhaWxzX2dyaWQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5idWlsZGluZ190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzY1NjQ2NDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWdfZmxvb3Ige1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmZsb29yX3RleHQge1xuICBjb2xvcjogIzY1NjQ2NDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmZsb29yX3RleHQgc3BhbiB7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudW5pdF9iZWRyb29tIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW1nX2JlZHJvb20ge1xuICB3aWR0aDogMjBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudW5pdF9wbGFuX2RldGFpbHNfY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDExMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuc2Nyb2xsX3VuaXRfcGxhbiB7XG4gIGhlaWdodDogOTZweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHBhZGRpbmc6IDRweCA0cHg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5zY3JvbGxfdW5pdF9wbGFuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnVuaXRfcGxhbl9kZXRhaWxzX2NhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmltZ0JhY2sge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJ0bl9iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB6LWluZGV4OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/unit-details/unit-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/unit-details/unit-details.page.ts ***!
  \***************************************************/
/*! exports provided: UnitDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDetailsPage", function() { return UnitDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");




let UnitDetailsPage = class UnitDetailsPage {
    constructor(postPvd, router, actRoute) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.users = [];
    }
    ngOnInit() {
        this.unit_code = history.state['uCode'];
        this.property_code = history.state['pCode'];
        // this.property_code = history.state['pCode'];
        console.log(history.state);
        this.loadData(this.unit_code, this.property_code);
    }
    openTenantDetailsInTabs(tenantCode, pUnitRoom) {
        this.router.navigateByUrl('/tabs/tab1/unit-details/tenant-details/' + tenantCode + '/' + pUnitRoom);
    }
    openResidentDetailsListInTabs(unit_code, condition, pUnitRoom) {
        this.router.navigateByUrl('/tabs/tab1/unit-details/resident-details-list/' + unit_code + '/' + condition + '/' + pUnitRoom);
    }
    openOldTenantDetails(unit_code) {
        this.router.navigateByUrl('/tabs/tab1/unit-details/old-tenant-details/' + unit_code);
    }
    openParkingDetails(property_code, floorNo, roomNo, propertyBuilding) {
        this.router.navigateByUrl('/tabs/tab1/unit-details/parking-details/' + property_code + '/' + floorNo + '/' + roomNo + '/' + propertyBuilding);
    }
    loadData(unit_code, property_code) {
        return new Promise(resolve => {
            let body = {
                action: 'userDetails',
                unit_code: unit_code,
                property_code: property_code,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                this.users.push(data['result']);
                resolve(true);
                console.log(data['result']);
            });
        });
    }
};
UnitDetailsPage.ctorParameters = () => [
    { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UnitDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-details',
        template: __webpack_require__(/*! raw-loader!./unit-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/unit-details/unit-details.page.html"),
        styles: [__webpack_require__(/*! ./unit-details.page.scss */ "./src/app/unit-details/unit-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], UnitDetailsPage);



/***/ })

}]);
//# sourceMappingURL=unit-details-unit-details-module-es2015.js.map