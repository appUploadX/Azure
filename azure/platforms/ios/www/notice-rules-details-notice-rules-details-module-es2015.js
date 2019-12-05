(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notice-rules-details-notice-rules-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notice-rules-details/notice-rules-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notice-rules-details/notice-rules-details.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons size=\"small\" slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title class=\"header_title\">{{listType}} Details</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n    \r\n<ion-content class=\"card-background-page\">\r\n    <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>{{title}}</ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content [innerHTML]=\"desc\">\r\n          \r\n        </ion-card-content>\r\n        \r\n        <ion-chip class=\"ion_chip\" *ngIf=\"docPath !== null\" (click)=\"download(docPath)\">\r\n            <ion-icon name=\"download\"></ion-icon>\r\n            <ion-label>Download</ion-label>\r\n        </ion-chip>\r\n      </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/notice-rules-details/notice-rules-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/notice-rules-details/notice-rules-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: NoticeRulesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeRulesDetailsPageModule", function() { return NoticeRulesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notice_rules_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice-rules-details.page */ "./src/app/notice-rules-details/notice-rules-details.page.ts");







const routes = [
    {
        path: '',
        component: _notice_rules_details_page__WEBPACK_IMPORTED_MODULE_6__["NoticeRulesDetailsPage"]
    }
];
let NoticeRulesDetailsPageModule = class NoticeRulesDetailsPageModule {
};
NoticeRulesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notice_rules_details_page__WEBPACK_IMPORTED_MODULE_6__["NoticeRulesDetailsPage"]]
    })
], NoticeRulesDetailsPageModule);



/***/ }),

/***/ "./src/app/notice-rules-details/notice-rules-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/notice-rules-details/notice-rules-details.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.nopad {\n  padding: 0;\n}\nion-card-content p {\n  color: #3c3c3c;\n  font-family: \"Assistant_reg\";\n}\nion-card-subtitle {\n  text-transform: uppercase;\n  color: #525252;\n  font-family: \"Assistant_extrabold\";\n  font-size: 15px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.ion_chip {\n  margin-left: 16px;\n  margin-bottom: 20px;\n  --background: #0e76ed;\n}\n.ion_chip ion-icon, .ion_chip ion-label {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlLXJ1bGVzLWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBenVyZUFjY2Vzc1xcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxub3RpY2UtcnVsZXMtZGV0YWlsc1xcbm90aWNlLXJ1bGVzLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9ub3RpY2UtcnVsZXMtZGV0YWlscy9ub3RpY2UtcnVsZXMtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEYkE7RUFDSSxrQkFBQTtBQ2dCSjtBRGRBO0VBQ0ksa0JBQUE7QUNpQko7QURmQTtFQUFRLFVBQUE7QUNtQlI7QURqQkE7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7QUNvQko7QURsQkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUNxQko7QURsQkE7RUFDSSxnQkFBQTtBQ3FCSjtBRGxCQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ3FCSjtBRGxCQTtFQUNJLFdBQUE7QUNxQkoiLCJmaWxlIjoic3JjL2FwcC9ub3RpY2UtcnVsZXMtZGV0YWlscy9ub3RpY2UtcnVsZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxuaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG5cclxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcblxyXG5cclxuLmhlYWRlcl90aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ubm9wYWQge3BhZGRpbmc6IDA7fVxyXG5cclxuaW9uLWNhcmQtY29udGVudCBwIHtcclxuICAgIGNvbG9yOiAjM2MzYzNjO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxufVxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM1MjUyNTI7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubXQtMTAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmlvbl9jaGlwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzBlNzZlZDtcclxufVxyXG5cclxuLmlvbl9jaGlwIGlvbi1pY29uLCAuaW9uX2NoaXAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjM2MzYzNjO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM1MjUyNTI7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW9uX2NoaXAge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMGU3NmVkO1xufVxuXG4uaW9uX2NoaXAgaW9uLWljb24sIC5pb25fY2hpcCBpb24tbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/notice-rules-details/notice-rules-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/notice-rules-details/notice-rules-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: NoticeRulesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeRulesDetailsPage", function() { return NoticeRulesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








let NoticeRulesDetailsPage = class NoticeRulesDetailsPage {
    constructor(platform, document, file, fileOpener, transfer, toastController) {
        this.platform = platform;
        this.document = document;
        this.file = file;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.toastController = toastController;
        this.extToMimes = [
            { ext: 'jpeg', MType: 'image/jpeg' },
            { ext: 'jpg', MType: 'image/jpeg' },
            { ext: 'png', MType: 'image/png' },
            { ext: 'doc', MType: 'application/msword' },
            { ext: 'docx', MType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
            { ext: 'xls', MType: 'application/vnd.ms-excel' },
            { ext: 'xlsx', MType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
            { ext: 'gif', MType: 'image/gif' },
            { ext: 'pdf', MType: 'application/pdf' }
        ];
    }
    ngOnInit() {
        this.title = history.state.title;
        this.listType = history.state.listType;
        this.desc = history.state.desc;
        this.docPath = history.state.docPath;
        console.log(history.state);
    }
    openToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    download(name) {
        const fileTransfer = this.transfer.create();
        const url = 'https://www.asi-ph.com/sandboxes/condominium/' + name;
        console.log(url);
        fileTransfer.download(url, this.file.dataDirectory + name).then((entry) => {
            this.fileOpener.open(entry.toURL(), this.getMimeByExt(name))
                .then(() => this.openToast('File is opened'))
                .catch(e => this.openToast('Error opening file'));
        }, (error) => {
            console.log(error);
        });
    }
    getMimeByExt(name) {
        var extention = name.split('.').pop();
        for (let i = 0; i < this.extToMimes.length; i++) {
            const element = this.extToMimes[i];
            if (element.ext == extention) {
                return element.MType;
            }
        }
    }
};
NoticeRulesDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["DocumentViewer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
NoticeRulesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice-rules-details',
        template: __webpack_require__(/*! raw-loader!./notice-rules-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/notice-rules-details/notice-rules-details.page.html"),
        styles: [__webpack_require__(/*! ./notice-rules-details.page.scss */ "./src/app/notice-rules-details/notice-rules-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["DocumentViewer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], NoticeRulesDetailsPage);



/***/ })

}]);
//# sourceMappingURL=notice-rules-details-notice-rules-details-module-es2015.js.map