(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notice-rules-details-notice-rules-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notice-rules-details/notice-rules-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notice-rules-details/notice-rules-details.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons size=\"small\" slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title class=\"header_title\">{{listType}} Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    \n<ion-content class=\"card-background-page\">\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>{{title}}</ion-card-subtitle>\n\n        </ion-card-header>\n      \n        <ion-card-content [innerHTML]=\"desc\">\n          \n        </ion-card-content>\n        \n        <ion-chip class=\"ion_chip\" *ngIf=\"docPath !== null\" (click)=\"download(docPath)\">\n            <ion-icon name=\"download\"></ion-icon>\n            <ion-label>Download</ion-label>\n        </ion-chip>\n      </ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notice_rules_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice-rules-details.page */ "./src/app/notice-rules-details/notice-rules-details.page.ts");







var routes = [
    {
        path: '',
        component: _notice_rules_details_page__WEBPACK_IMPORTED_MODULE_6__["NoticeRulesDetailsPage"]
    }
];
var NoticeRulesDetailsPageModule = /** @class */ (function () {
    function NoticeRulesDetailsPageModule() {
    }
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
    return NoticeRulesDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/notice-rules-details/notice-rules-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/notice-rules-details/notice-rules-details.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.nopad {\n  padding: 0;\n}\nion-card-content p {\n  color: #3c3c3c;\n  font-family: \"Assistant_reg\";\n}\nion-card-subtitle {\n  text-transform: uppercase;\n  color: #525252;\n  font-family: \"Assistant_extrabold\";\n  font-size: 15px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.ion_chip {\n  margin-left: 16px;\n  margin-bottom: 20px;\n  --background: #0e76ed;\n}\n.ion_chip ion-icon, .ion_chip ion-label {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlLXJ1bGVzLWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBcHBBenVyZVxcYXp1cmUvc3JjXFxhcHBcXG5vdGljZS1ydWxlcy1kZXRhaWxzXFxub3RpY2UtcnVsZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL25vdGljZS1ydWxlcy1kZXRhaWxzL25vdGljZS1ydWxlcy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBRENBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBRENBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQ0E7RUFBYSw0QkFBQTtBQ0ViO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURiQTtFQUNJLGtCQUFBO0FDZ0JKO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQVEsVUFBQTtBQ21CUjtBRGpCQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtBQ29CSjtBRGxCQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQ3FCSjtBRGxCQTtFQUNJLGdCQUFBO0FDcUJKO0FEbEJBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDcUJKO0FEbEJBO0VBQ0ksV0FBQTtBQ3FCSiIsImZpbGUiOiJzcmMvYXBwL25vdGljZS1ydWxlcy1kZXRhaWxzL25vdGljZS1ydWxlcy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cblxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxuXG5cbi5oZWFkZXJfdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm5vcGFkIHtwYWRkaW5nOiAwO31cblxuaW9uLWNhcmQtY29udGVudCBwIHtcbiAgICBjb2xvcjogIzNjM2MzYztcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xufVxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM1MjUyNTI7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5tdC0xMCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmlvbl9jaGlwIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC0tYmFja2dyb3VuZDogIzBlNzZlZDtcbn1cblxuLmlvbl9jaGlwIGlvbi1pY29uLCAuaW9uX2NoaXAgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjtcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5vcGFkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNhcmQtY29udGVudCBwIHtcbiAgY29sb3I6ICMzYzNjM2M7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzUyNTI1MjtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5tdC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pb25fY2hpcCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICMwZTc2ZWQ7XG59XG5cbi5pb25fY2hpcCBpb24taWNvbiwgLmlvbl9jaGlwIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var NoticeRulesDetailsPage = /** @class */ (function () {
    function NoticeRulesDetailsPage(platform, document, file, fileOpener, transfer, toastController) {
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
    NoticeRulesDetailsPage.prototype.ngOnInit = function () {
        this.title = history.state.title;
        this.listType = history.state.listType;
        this.desc = history.state.desc;
        this.docPath = history.state.docPath;
        console.log(history.state);
    };
    NoticeRulesDetailsPage.prototype.openToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NoticeRulesDetailsPage.prototype.download = function (name) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var url = 'https://www.asi-ph.com/sandboxes/condominium/' + name;
        console.log(url);
        fileTransfer.download(url, this.file.dataDirectory + name).then(function (entry) {
            _this.fileOpener.open(entry.toURL(), _this.getMimeByExt(name))
                .then(function () { return _this.openToast('File is opened'); })
                .catch(function (e) { return _this.openToast('Error opening file'); });
        }, function (error) {
            console.log(error);
        });
    };
    NoticeRulesDetailsPage.prototype.getMimeByExt = function (name) {
        var extention = name.split('.').pop();
        for (var i = 0; i < this.extToMimes.length; i++) {
            var element = this.extToMimes[i];
            if (element.ext == extention) {
                return element.MType;
            }
        }
    };
    NoticeRulesDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["DocumentViewer"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
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
    return NoticeRulesDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notice-rules-details-notice-rules-details-module-es5.js.map