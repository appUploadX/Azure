(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-details-unit-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/unit-details/unit-details.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/unit-details/unit-details.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <!-- <ion-button class=\"btn_back\" routerLink=\"/tabs/tab1\"></ion-button> \r\n      <img class=\"imgBack\" src=\"/assets/arrow_left_white.png\"> -->\r\n      <ion-buttons size=\"small\" slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title class=\"header_title\">Unit Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n  <ion-card class=\"welcome-card\"></ion-card>\r\n  <div class=\"building_div\"></div>\r\n\r\n  <ion-grid class=\"building_details_grid\" fixed *ngFor=\"let res of users\">\r\n      <ion-row class=\"building_details_row\">\r\n          <ion-col size=\"12\">\r\n            <p class=\"building_title\">{{res.propertyBuilding}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"pb-0\">\r\n              <p class=\"floor_text\"><img class=\"img_floor\" src=\"/assets/floors.png\"> <span>{{res.floorNoX}} Floor</span></p>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n              <p class=\"floor_text\"><img class=\"img_floor\" src=\"/assets/unit_door.png\"> <span>Unit {{res.pUnitRoom}}</span></p>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n              <hr class=\"hr_line\">\r\n          </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n          <ion-col size=\"12\">\r\n              <div class=\"scroll_unit_plan\">\r\n                  <ion-card class=\"unit_plan_details_card\">\r\n                      <ion-card-header>\r\n                        <img class=\"img_bedroom\" src=\"/assets/icon_bed.png\">\r\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pBedrooms}} Bedroom</ion-card-subtitle>\r\n                      </ion-card-header>\r\n                  </ion-card>\r\n                  <ion-card class=\"unit_plan_details_card\">\r\n                      <ion-card-header>\r\n                        <img class=\"img_bedroom\" src=\"/assets/icon_hall.png\">\r\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pHall}}</ion-card-subtitle>\r\n                      </ion-card-header>\r\n                  </ion-card>\r\n                  <ion-card class=\"unit_plan_details_card\">\r\n                      <ion-card-header>\r\n                        <img class=\"img_bedroom\" src=\"/assets/icon_balcony.png\">\r\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pBalcony}} Balcony</ion-card-subtitle>\r\n                      </ion-card-header>\r\n                  </ion-card>\r\n                  <ion-card class=\"unit_plan_details_card\">\r\n                      <ion-card-header>\r\n                        <img class=\"img_bedroom\" src=\"/assets/icon_toilet.png\">\r\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pWashrooms}} Washroom</ion-card-subtitle>\r\n                      </ion-card-header>\r\n                  </ion-card>\r\n                  <ion-card class=\"unit_plan_details_card\">\r\n                      <ion-card-header>\r\n                        <img class=\"img_bedroom\" src=\"/assets/icon_unit.png\">\r\n                        <ion-card-subtitle class=\"unit_bedroom\">{{res.pUnitSizeRangeX}}</ion-card-subtitle>\r\n                      </ion-card-header>\r\n                  </ion-card>\r\n              </div>\r\n          </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" *ngIf=\"res.tenantCode != null\">\r\n          <ion-button expand=\"block\" (click)=\"openTenantDetailsInTabs(res.tenantCode, res.pUnitRoom)\" color=\"primary\">Tenant Details</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-button expand=\"block\" *ngIf=\"res.tenantCode == ''\"  (click)=\"openResidentDetailsListInTabs(res.unit_code, 'Owner', res.pUnitRoom)\" color=\"primary\">Resident Details</ion-button>\r\n          <ion-button expand=\"block\" *ngIf=\"res.tenantCode != ''\"  (click)=\"openResidentDetailsListInTabs(res.tenantCode, 'Tenant', res.pUnitRoom)\" color=\"primary\">Resident Details</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-button expand=\"block\" (click)=\"openParkingDetails(res.property_code, res.floorNo, res.roomNo, res.propertyBuilding)\" color=\"primary\">Parking Details</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-button expand=\"block\" (click)=\"openOldTenantDetails(res.unit_code)\" color=\"primary\">Old Tenant Details</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _unit_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unit-details.page */ "./src/app/unit-details/unit-details.page.ts");







var routes = [
    {
        path: '',
        component: _unit_details_page__WEBPACK_IMPORTED_MODULE_6__["UnitDetailsPage"]
    }
];
var UnitDetailsPageModule = /** @class */ (function () {
    function UnitDetailsPageModule() {
    }
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
    return UnitDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/unit-details/unit-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/unit-details/unit-details.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.card-background-page .pb-0 {\n  padding-bottom: 0;\n}\n.card-background-page .m-0 {\n  margin: 0;\n}\n.card-background-page .welcome-card {\n  position: relative;\n  background-image: url(\"/assets/unitbg2.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  margin: 0;\n  height: 20vh;\n  border-radius: 0;\n  box-shadow: none;\n}\n.card-background-page .building_div {\n  background-image: url(/assets/condo.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border: 5px solid #ffffff;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 13%;\n  left: 16px;\n  border-radius: 4px;\n}\n.card-background-page .hr_line {\n  background: #a0a0a0;\n  height: 2px;\n  margin: 0;\n}\n.card-background-page .building_details_row {\n  margin-top: 30px;\n  margin-left: 10px;\n}\n.card-background-page .building_details_grid {\n  margin-bottom: 20px;\n}\n.card-background-page .building_title {\n  font-weight: bold;\n  color: #656464;\n  margin-bottom: 0;\n  font-size: 18px;\n  margin-top: 10px;\n}\n.card-background-page .img_floor {\n  width: 18px;\n  margin-right: 4px;\n}\n.card-background-page .floor_text {\n  color: #656464;\n  font-size: 13px;\n  font-weight: 500;\n  margin: 0;\n}\n.card-background-page .floor_text span {\n  height: auto;\n  position: absolute;\n  top: 8px;\n}\n.card-background-page .unit_bedroom {\n  font-weight: 400;\n  text-transform: inherit;\n  margin-top: 7px;\n  margin-bottom: 0;\n}\n.card-background-page .img_bedroom {\n  width: 20px;\n}\n.card-background-page .unit_plan_details_card {\n  margin: 0;\n  width: 110px;\n  display: inline-block;\n  margin-right: 13px;\n}\n.card-background-page .scroll_unit_plan {\n  height: 96px;\n  margin: 0 10px;\n  padding: 4px 4px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.card-background-page .scroll_unit_plan::-webkit-scrollbar {\n  width: 0px;\n}\n.card-background-page .unit_plan_details_card ion-card-header {\n  padding: 15px;\n}\n.imgBack {\n  width: 20px;\n  position: absolute;\n  top: 12px;\n  left: 16px;\n  z-index: 0;\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.btn_back {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  --background: transparent;\n  --box-shadow: none;\n  width: 30px;\n  height: 25px;\n  z-index: 1;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pdC1kZXRhaWxzL0M6XFxVc2Vyc1xcQUdTSVxcRGVza3RvcFxcQXp1cmVBY2Nlc3NcXEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdW5pdC1kZXRhaWxzXFx1bml0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC91bml0LWRldGFpbHMvdW5pdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBRENBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBRENBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQ0E7RUFBYSw0QkFBQTtBQ0ViO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURiSTtFQUFPLGlCQUFBO0FDaUJYO0FEaEJJO0VBQU0sU0FBQTtBQ21CVjtBRGxCSTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNvQlI7QURsQkk7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNvQlI7QURqQkk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDbUJSO0FEakJJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ21CUjtBRGpCSTtFQUNJLG1CQUFBO0FDbUJSO0FEakJJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNtQlI7QURqQkk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNtQlI7QURqQkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ21CUjtBRGpCSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNtQlI7QURqQkk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbUJSO0FEakJJO0VBQWMsV0FBQTtBQ29CbEI7QURuQkk7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNxQlI7QURuQkk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDcUJSO0FEbkJJO0VBQ0ksVUFBQTtBQ3FCUjtBRGxCSTtFQUNJLGFBQUE7QUNvQlI7QURmQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ2tCSjtBRGhCQTtFQUNJLGtCQUFBO0FDbUJKO0FEakJBO0VBQ0ksa0JBQUE7QUNvQko7QURsQkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtBQ3FCSiIsImZpbGUiOiJzcmMvYXBwL3VuaXQtZGV0YWlscy91bml0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuICAgIC5wYi0wIHtwYWRkaW5nLWJvdHRvbTogMDt9XHJcbiAgICAubS0wIHttYXJnaW46IDA7fVxyXG4gICAgLndlbGNvbWUtY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy91bml0YmcyLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAuYnVpbGRpbmdfZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jb25kby5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTMlO1xyXG4gICAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5ocl9saW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYTBhMGEwO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5idWlsZGluZ19kZXRhaWxzX3JvdyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5idWlsZGluZ19kZXRhaWxzX2dyaWQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuYnVpbGRpbmdfdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjNjU2NDY0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nX2Zsb29yIHtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIC5mbG9vcl90ZXh0IHtcclxuICAgICAgICBjb2xvcjogIzY1NjQ2NDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuZmxvb3JfdGV4dCBzcGFuIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLnVuaXRfYmVkcm9vbSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5pbWdfYmVkcm9vbSB7d2lkdGg6IDIwcHg7fVxyXG4gICAgLnVuaXRfcGxhbl9kZXRhaWxzX2NhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgIH1cclxuICAgIC5zY3JvbGxfdW5pdF9wbGFuIHtcclxuICAgICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDRweDtcclxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsX3VuaXRfcGxhbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVuaXRfcGxhbl9kZXRhaWxzX2NhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmltZ0JhY2sge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5idG5fYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnBiLTAge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubS0wIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC53ZWxjb21lLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdW5pdGJnMi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyMHZoO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5idWlsZGluZ19kaXYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jb25kby5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMyU7XG4gIGxlZnQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaHJfbGluZSB7XG4gIGJhY2tncm91bmQ6ICNhMGEwYTA7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW46IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmJ1aWxkaW5nX2RldGFpbHNfcm93IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmJ1aWxkaW5nX2RldGFpbHNfZ3JpZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmJ1aWxkaW5nX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjU2NDY0O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZ19mbG9vciB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuZmxvb3JfdGV4dCB7XG4gIGNvbG9yOiAjNjU2NDY0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuZmxvb3JfdGV4dCBzcGFuIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC51bml0X2JlZHJvb20ge1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWdfYmVkcm9vbSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC51bml0X3BsYW5fZGV0YWlsc19jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5zY3JvbGxfdW5pdF9wbGFuIHtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgcGFkZGluZzogNHB4IDRweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnNjcm9sbF91bml0X3BsYW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudW5pdF9wbGFuX2RldGFpbHNfY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uaW1nQmFjayB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMDtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYnRuX2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICBsZWZ0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");




var UnitDetailsPage = /** @class */ (function () {
    function UnitDetailsPage(postPvd, router, actRoute) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.users = [];
    }
    UnitDetailsPage.prototype.ngOnInit = function () {
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.property_code = localStorage.getItem("PROPERTY_CODE");
        console.log(localStorage);
        this.loadData(this.unit_code, this.property_code);
    };
    UnitDetailsPage.prototype.ionViewWillEnter = function () {
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.property_code = localStorage.getItem("PROPERTY_CODE");
        console.log(localStorage);
        this.loadData(this.unit_code, this.property_code);
    };
    UnitDetailsPage.prototype.openTenantDetailsInTabs = function (tenantCode, pUnitRoom) {
        this.router.navigateByUrl('/tabs/tab1/unit-details/tenant-details/' + tenantCode + '/' + pUnitRoom);
    };
    UnitDetailsPage.prototype.openResidentDetailsListInTabs = function (unit_code, condition, pUnitRoom) {
        this.router.navigateByUrl('/tabs/tab1/unit-details/resident-details-list', { state: { unit_code: unit_code, condition: condition, pUnitRoom: pUnitRoom } });
    };
    UnitDetailsPage.prototype.openOldTenantDetails = function (unit_code) {
        this.router.navigateByUrl('/tabs/tab1/unit-details/old-tenant-details/' + unit_code);
    };
    UnitDetailsPage.prototype.openParkingDetails = function (property_code, floorNo, roomNo, propertyBuilding) {
        this.router.navigateByUrl('/tabs/tab1/unit-details/parking-details/' + property_code + '/' + floorNo + '/' + roomNo + '/' + propertyBuilding);
    };
    UnitDetailsPage.prototype.loadData = function (unit_code, property_code) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'userDetails',
                unit_code: unit_code,
                property_code: property_code,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.users = [];
                _this.users.push(data['result']);
                resolve(true);
                console.log(data['result']);
            });
        });
    };
    UnitDetailsPage.ctorParameters = function () { return [
        { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
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
    return UnitDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=unit-details-unit-details-module-es5.js.map