(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resident-details-individual-resident-details-individual-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/resident-details-individual/resident-details-individual.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resident-details-individual/resident-details-individual.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <!-- <ion-button class=\"btn_back\" routerLink=\"/tabs/tab1/unit-details/resident-details-list\"></ion-button> \r\n        <img class=\"imgBack\" src=\"/assets/arrow_left_white.png\"> -->\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title class=\"header_title\">Resident Details</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content class=\"card-background-page\" *ngFor=\"let res of users\">\r\n    <ion-card class=\"banner-card\">\r\n      <div class=\"banner-tenant\">\r\n        <div class=\"img_tenant_border\">\r\n          <div *ngIf=\"res.p_upload == null\" class=\"img_tenant\"></div>\r\n          <div *ngIf=\"res.p_upload != null\" class=\"img_tenant\" [style.background-image]=\"'url(https://www.asi-ph.com/sandboxes/condominium/'+res.p_upload+')'\"></div>\r\n        </div>\r\n        <p class=\"tenant_name\">{{res.p_name}} {{res.p_middle}} {{res.p_lastname}}</p>\r\n        <p class=\"tenant_title\">{{res.owner}} - {{res.pUnitCode}} </p>\r\n      </div>\r\n    </ion-card>\r\n      \r\n    <ion-grid>\r\n      <ion-row class=\"tenant-row\">\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n          <p class=\"tenant_type\">Email</p>\r\n          <p class=\"tenant_type_name\">{{res.p_emailaddress}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Contact Number</p>\r\n            <p class=\"tenant_type_name\">{{res.p_phonenumber}}</p>\r\n          </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Gender</p>\r\n            <p class=\"tenant_type_name\">{{res.p_gender}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Relation</p>\r\n            <p class=\"tenant_type_name\">{{res.p_relationofowner}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Date of Birth</p>\r\n            <p class=\"tenant_type_name\">{{res.p_dateofbirth}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Move-in Date</p>\r\n            <p class=\"tenant_type_name\">{{res.p_moveindate}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"col-tenant-details\">\r\n            <p class=\"tenant_type\">Address</p>\r\n            <p class=\"tenant_type_name\">{{res.p_address}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/resident-details-individual/resident-details-individual.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/resident-details-individual/resident-details-individual.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ResidentDetailsIndividualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentDetailsIndividualPageModule", function() { return ResidentDetailsIndividualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resident_details_individual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resident-details-individual.page */ "./src/app/resident-details-individual/resident-details-individual.page.ts");







var routes = [
    {
        path: '',
        component: _resident_details_individual_page__WEBPACK_IMPORTED_MODULE_6__["ResidentDetailsIndividualPage"]
    }
];
var ResidentDetailsIndividualPageModule = /** @class */ (function () {
    function ResidentDetailsIndividualPageModule() {
    }
    ResidentDetailsIndividualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resident_details_individual_page__WEBPACK_IMPORTED_MODULE_6__["ResidentDetailsIndividualPage"]]
        })
    ], ResidentDetailsIndividualPageModule);
    return ResidentDetailsIndividualPageModule;
}());



/***/ }),

/***/ "./src/app/resident-details-individual/resident-details-individual.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/resident-details-individual/resident-details-individual.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.btn_back {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  --background: transparent;\n  --box-shadow: none;\n  width: 30px;\n  height: 25px;\n  z-index: 1;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n}\n.imgBack {\n  width: 20px;\n  position: absolute;\n  top: 12px;\n  left: 16px;\n  z-index: 0;\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page .banner-tenant {\n  width: 100%;\n}\n.card-background-page .banner-card {\n  margin: 0;\n  background: -webkit-gradient(linear, left top, right top, from(#0087de), to(#0bd3e1));\n  background: linear-gradient(to right, #0087de, #0bd3e1);\n  height: 29.5vh;\n  border-radius: 0;\n}\n.card-background-page .img_tenant {\n  width: 90px;\n  margin: 0 auto;\n  border: 4px solid #cdf0ff;\n  border-radius: 50%;\n  background-image: url(\"/assets/defaultimg.png\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 90px;\n}\n.card-background-page .tenant_name {\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 7px;\n  margin-bottom: 1px;\n}\n.card-background-page .tenant_title {\n  text-align: center;\n  margin: 0;\n  text-transform: uppercase;\n  color: #0d3a7d;\n  font-size: 13px;\n  font-weight: 500;\n}\n.card-background-page .img_tenant_border {\n  padding: 9px;\n  margin: 0 auto;\n  margin-top: 22px;\n  width: 110px;\n  height: 110px;\n  border: 1px solid #cdf0ff;\n  border-radius: 50%;\n}\n.card-background-page .tenant_type {\n  color: #00a1d8;\n  font-size: 13px;\n  margin-bottom: 7px;\n  font-weight: 500;\n  margin-top: 10px;\n}\n.card-background-page .tenant-row {\n  margin-bottom: 20px;\n}\n.card-background-page .tenant_type_name {\n  margin: 0;\n  color: #4c4c4c;\n  font-weight: 400;\n  font-size: 16px;\n}\n.card-background-page .col-tenant-details {\n  padding-left: 13px;\n  border-bottom: 1px solid #d4d4d4;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzaWRlbnQtZGV0YWlscy1pbmRpdmlkdWFsL0M6XFxVc2Vyc1xcQUdTSVxcRGVza3RvcFxcMjAyMFxcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxyZXNpZGVudC1kZXRhaWxzLWluZGl2aWR1YWxcXHJlc2lkZW50LWRldGFpbHMtaW5kaXZpZHVhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jlc2lkZW50LWRldGFpbHMtaW5kaXZpZHVhbC9yZXNpZGVudC1kZXRhaWxzLWluZGl2aWR1YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTtFQUFhLDRCQUFBO0FDRWI7QURBQTtFQUFXLDRCQUFBO0FDSVg7QURIQTtFQUFhLDhCQUFBO0FDT2I7QUROQTtFQUFnQixpQ0FBQTtBQ1VoQjtBRFRBO0VBQVksNkJBQUE7QUNhWjtBRFpBO0VBQWlCLGtDQUFBO0FDZ0JqQjtBRGRBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7QUNpQko7QURmQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ2tCSjtBRGhCQTtFQUNJLGtCQUFBO0FDbUJKO0FEakJBO0VBQ0ksa0JBQUE7QUNvQko7QURoQkk7RUFDSSxXQUFBO0FDbUJSO0FEakJJO0VBQ0ksU0FBQTtFQUNBLHFGQUFBO0VBQUEsdURBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNtQlI7QURqQkk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNtQlI7QURqQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNtQlI7QURqQkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNtQlI7QURqQkk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDbUJSO0FEakJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNtQlI7QURqQkk7RUFBYSxtQkFBQTtBQ29CakI7QURuQkk7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3FCUjtBRG5CSTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ3FCUiIsImZpbGUiOiJzcmMvYXBwL3Jlc2lkZW50LWRldGFpbHMtaW5kaXZpZHVhbC9yZXNpZGVudC1kZXRhaWxzLWluZGl2aWR1YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuLmJ0bl9iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmltZ0JhY2sge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgLmJhbm5lci10ZW5hbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lci1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4N2RlLCAjMGJkM2UxKTtcclxuICAgICAgICBoZWlnaHQ6IDI5LjV2aDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gICAgLmltZ190ZW5hbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNjZGYwZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9kZWZhdWx0aW1nLnBuZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIC50ZW5hbnRfbmFtZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICB9XHJcbiAgICAudGVuYW50X3RpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICMwZDNhN2Q7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuaW1nX3RlbmFudF9ib3JkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGYwZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgLnRlbmFudF90eXBlIHtcclxuICAgICAgICBjb2xvcjogIzAwYTFkODtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC50ZW5hbnQtcm93IHttYXJnaW4tYm90dG9tOiAyMHB4O31cclxuICAgIC50ZW5hbnRfdHlwZV9uYW1lIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuY29sLXRlbmFudC1kZXRhaWxzIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uYnRuX2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICBsZWZ0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbWdCYWNrIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxNnB4O1xuICB6LWluZGV4OiAwO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYmFubmVyLXRlbmFudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5iYW5uZXItY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4N2RlLCAjMGJkM2UxKTtcbiAgaGVpZ2h0OiAyOS41dmg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZ190ZW5hbnQge1xuICB3aWR0aDogOTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogNHB4IHNvbGlkICNjZGYwZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9kZWZhdWx0aW1nLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZW5hbnRfbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRlbmFudF90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzBkM2E3ZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWdfdGVuYW50X2JvcmRlciB7XG4gIHBhZGRpbmc6IDlweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkZjBmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZW5hbnRfdHlwZSB7XG4gIGNvbG9yOiAjMDBhMWQ4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudGVuYW50LXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRlbmFudF90eXBlX25hbWUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNvbC10ZW5hbnQtZGV0YWlscyB7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/resident-details-individual/resident-details-individual.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resident-details-individual/resident-details-individual.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ResidentDetailsIndividualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentDetailsIndividualPage", function() { return ResidentDetailsIndividualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");




var ResidentDetailsIndividualPage = /** @class */ (function () {
    function ResidentDetailsIndividualPage(postPvd, router, actRoute) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.users = [];
    }
    ResidentDetailsIndividualPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.id;
            _this.pUnitCode = data.pUnitCode;
            console.log(data);
        });
        this.loadData(this.id, this.pUnitCode);
    };
    ResidentDetailsIndividualPage.prototype.loadData = function (id, pUnitRoom) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'occDetails',
                id: id,
                pUnitCode: _this.pUnitCode,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.users.push(data['data']);
                resolve(true);
                console.log(data['data']);
            });
        });
    };
    ResidentDetailsIndividualPage.ctorParameters = function () { return [
        { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ResidentDetailsIndividualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resident-details-individual',
            template: __webpack_require__(/*! raw-loader!./resident-details-individual.page.html */ "./node_modules/raw-loader/index.js!./src/app/resident-details-individual/resident-details-individual.page.html"),
            styles: [__webpack_require__(/*! ./resident-details-individual.page.scss */ "./src/app/resident-details-individual/resident-details-individual.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResidentDetailsIndividualPage);
    return ResidentDetailsIndividualPage;
}());



/***/ })

}]);
//# sourceMappingURL=resident-details-individual-resident-details-individual-module-es5.js.map