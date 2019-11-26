(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tenant-details-tenant-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tenant-details/tenant-details.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tenant-details/tenant-details.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <!-- <ion-button class=\"btn_back\" routerLink=\"/tabs/tab1/unit-details\"></ion-button> \r\n        <img class=\"imgBack\" src=\"/assets/arrow_left_white.png\"> -->\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title class=\"header_title\">Tenant Details</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"card-background-page\" *ngFor=\"let res of tenants\">\r\n    <ion-card class=\"banner-card\">\r\n        <div class=\"banner-tenant\">\r\n          <div class=\"img_tenant_border\">\r\n            <div *ngIf=\"res.tUpload == ''\" class=\"img_tenant\"></div>\r\n            <div *ngIf=\"res.tUpload != ''\" class=\"img_tenant\" [style.background-image]=\"'url(https://www.asi-ph.com/sandboxes/condominium/'+res.tUpload+')'\"></div>\r\n          </div>\r\n            <p class=\"tenant_name\">{{res.fullname}}</p>\r\n            <p class=\"tenant_title\">Tenant - {{res.pUnitRoom}}</p>\r\n        </div>\r\n    </ion-card>\r\n      \r\n    <ion-grid>\r\n      <ion-row class=\"tenant-row\">\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n          <p class=\"tenant_type\">Email</p>\r\n          <p class=\"tenant_type_name\">{{res.tEmailAddress}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Contact Number</p>\r\n            <p class=\"tenant_type_name\">{{res.tPhoneNumber}}</p>\r\n          </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Gender</p>\r\n            <p class=\"tenant_type_name\">{{res.tGender}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Occupation</p>\r\n            <p class=\"tenant_type_name\">{{res.tOccupation}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Date of Birth</p>\r\n            <p class=\"tenant_type_name\">{{res.tDate}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Move-in Date</p>\r\n            <p class=\"tenant_type_name\">{{res.tMoveindate}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Intercom No.</p>\r\n            <p class=\"tenant_type_name\">{{res.tItercom}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Turn-over Date</p>\r\n            <p class=\"tenant_type_name\">{{res.tTurnoverdate}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Agreement Start Date</p>\r\n            <p class=\"tenant_type_name\">{{res.tAgreementStart}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Agreement End Date</p>\r\n            <p class=\"tenant_type_name\">{{res.tAgreementEnd}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/tenant-details/tenant-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/tenant-details/tenant-details.module.ts ***!
  \*********************************************************/
/*! exports provided: TenantDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantDetailsPageModule", function() { return TenantDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tenant_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tenant-details.page */ "./src/app/tenant-details/tenant-details.page.ts");







var routes = [
    {
        path: '',
        component: _tenant_details_page__WEBPACK_IMPORTED_MODULE_6__["TenantDetailsPage"]
    }
];
var TenantDetailsPageModule = /** @class */ (function () {
    function TenantDetailsPageModule() {
    }
    TenantDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tenant_details_page__WEBPACK_IMPORTED_MODULE_6__["TenantDetailsPage"]]
        })
    ], TenantDetailsPageModule);
    return TenantDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/tenant-details/tenant-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/tenant-details/tenant-details.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.btn_back {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  --background: transparent;\n  --box-shadow: none;\n  width: 30px;\n  height: 25px;\n  z-index: 1;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n}\n.imgBack {\n  width: 20px;\n  position: absolute;\n  top: 12px;\n  left: 16px;\n  z-index: 0;\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page .banner-tenant {\n  width: 100%;\n}\n.card-background-page .banner-card {\n  margin: 0;\n  background: -webkit-gradient(linear, left top, right top, from(#0087de), to(#0bd3e1));\n  background: linear-gradient(to right, #0087de, #0bd3e1);\n  height: 29.5vh;\n  border-radius: 0;\n}\n.card-background-page .img_tenant {\n  width: 90px;\n  margin: 0 auto;\n  border: 4px solid #cdf0ff;\n  border-radius: 50%;\n  background-image: url(\"/assets/person.png\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 90px;\n}\n.card-background-page .tenant_name {\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 7px;\n  margin-bottom: 1px;\n}\n.card-background-page .tenant_title {\n  text-align: center;\n  margin: 0;\n  text-transform: uppercase;\n  color: #0d3a7d;\n  font-size: 13px;\n  font-weight: 500;\n}\n.card-background-page .img_tenant_border {\n  padding: 9px;\n  margin: 0 auto;\n  margin-top: 22px;\n  width: 110px;\n  height: 110px;\n  border: 1px solid #cdf0ff;\n  border-radius: 50%;\n}\n.card-background-page .tenant_type {\n  color: #00a1d8;\n  font-size: 13px;\n  margin-bottom: 7px;\n  font-weight: 500;\n  margin-top: 10px;\n}\n.card-background-page .tenant-row {\n  margin-bottom: 20px;\n}\n.card-background-page .tenant_type_name {\n  margin: 0;\n  color: #4c4c4c;\n  font-weight: 400;\n  font-size: 16px;\n}\n.card-background-page .col-tenant-details {\n  padding-left: 13px;\n  border-bottom: 1px solid #d4d4d4;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVuYW50LWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBenVyZUFjY2Vzc1xcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFx0ZW5hbnQtZGV0YWlsc1xcdGVuYW50LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC90ZW5hbnQtZGV0YWlscy90ZW5hbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtBQ2lCSjtBRGZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDa0JKO0FEaEJBO0VBQ0ksa0JBQUE7QUNtQko7QURqQkE7RUFDSSxrQkFBQTtBQ29CSjtBRGhCSTtFQUNJLFdBQUE7QUNtQlI7QURqQkk7RUFDSSxTQUFBO0VBQ0EscUZBQUE7RUFBQSx1REFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ21CUjtBRGpCSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ21CUjtBRGpCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ21CUjtBRGpCSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ21CUjtBRGpCSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNtQlI7QURqQkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ21CUjtBRGpCSTtFQUFhLG1CQUFBO0FDb0JqQjtBRG5CSTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcUJSO0FEbkJJO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDcUJSIiwiZmlsZSI6InNyYy9hcHAvdGVuYW50LWRldGFpbHMvdGVuYW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuLmJ0bl9iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmltZ0JhY2sge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgLmJhbm5lci10ZW5hbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lci1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4N2RlLCAjMGJkM2UxKTtcclxuICAgICAgICBoZWlnaHQ6IDI5LjV2aDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gICAgLmltZ190ZW5hbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNjZGYwZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9wZXJzb24ucG5nJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgLnRlbmFudF9uYW1lIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIH1cclxuICAgIC50ZW5hbnRfdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzBkM2E3ZDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5pbWdfdGVuYW50X2JvcmRlciB7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkZjBmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAudGVuYW50X3R5cGUge1xyXG4gICAgICAgIGNvbG9yOiAjMDBhMWQ4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRlbmFudC1yb3cge21hcmdpbi1ib3R0b206IDIwcHg7fVxyXG4gICAgLnRlbmFudF90eXBlX25hbWUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogIzRjNGM0YztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5jb2wtdGVuYW50LWRldGFpbHMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5idG5fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgei1pbmRleDogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbn1cblxuLmltZ0JhY2sge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5iYW5uZXItdGVuYW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmJhbm5lci1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDg3ZGUsICMwYmQzZTEpO1xuICBoZWlnaHQ6IDI5LjV2aDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW1nX3RlbmFudCB7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiA0cHggc29saWQgI2NkZjBmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BlcnNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogOTBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudGVuYW50X25hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZW5hbnRfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwZDNhN2Q7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW1nX3RlbmFudF9ib3JkZXIge1xuICBwYWRkaW5nOiA5cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGYwZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudGVuYW50X3R5cGUge1xuICBjb2xvcjogIzAwYTFkODtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRlbmFudC1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZW5hbnRfdHlwZV9uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jb2wtdGVuYW50LWRldGFpbHMge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tenant-details/tenant-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/tenant-details/tenant-details.page.ts ***!
  \*******************************************************/
/*! exports provided: TenantDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantDetailsPage", function() { return TenantDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");




var TenantDetailsPage = /** @class */ (function () {
    function TenantDetailsPage(postPvd, router, actRoute) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.tenants = [];
    }
    TenantDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.tenantCode = data.tenantCode;
            _this.pUnitRoom = data.pUnitRoom;
        });
        this.loadData(this.tenantCode, this.pUnitRoom);
    };
    TenantDetailsPage.prototype.loadData = function (tenantCode, pUnitRoom) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'tenDetails',
                tenantCode: tenantCode,
                pUnitRoom: pUnitRoom,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.tenants.push(data['data']);
                resolve(true);
                console.log(data['data']);
            });
        });
    };
    TenantDetailsPage.ctorParameters = function () { return [
        { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TenantDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tenant-details',
            template: __webpack_require__(/*! raw-loader!./tenant-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/tenant-details/tenant-details.page.html"),
            styles: [__webpack_require__(/*! ./tenant-details.page.scss */ "./src/app/tenant-details/tenant-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TenantDetailsPage);
    return TenantDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tenant-details-tenant-details-module-es5.js.map