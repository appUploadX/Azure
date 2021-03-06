(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notice-rules-list-notice-rules-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notice-rules-list/notice-rules-list.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notice-rules-list/notice-rules-list.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons size=\"small\" slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title class=\"header_title\">{{ListType}}</ion-title>\r\n    </ion-toolbar>\r\n    <!-- <ion-toolbar>\r\n      <ion-searchbar class=\"searchbars\" color=\"dark\"></ion-searchbar>\r\n    </ion-toolbar> -->\r\n  </ion-header>\r\n    \r\n<ion-content class=\"card-background-page\" *ngIf=\"ListType == 'Rules'\">\r\n    <ion-list class=\"list-notice\" *ngFor=\"let res of Data; let i = index\">\r\n        <ion-item (click)=\"openRulesDetails(res[i].title, ListType, res[i].ruleDescription, res[i].documentpath)\">{{res[i].title}}\r\n            <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-content class=\"card-background-page\" *ngIf=\"ListType == 'Notice Board'\">\r\n    <ion-list class=\"list-notice\" *ngFor=\"let res of Data; let i = index\">\r\n        <ion-item (click)=\"openRulesDetails(res[i].title, ListType, res[i].noticeDescription, res[i].documentpath)\">{{res[i].title}}\r\n            <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-content class=\"card-background-page\" *ngIf=\"ListType == 'News'\">\r\n    <ion-list class=\"list-notice\" *ngFor=\"let res of Data; let i = index\">\r\n        <ion-item (click)=\"openRulesDetails(res[i].title, ListType, res[i].Description, res[i].documentpath)\">{{res[i].title}}\r\n            <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-content class=\"card-background-page\" *ngIf=\"ListType == 'Holiday/Important Date'\">\r\n    <ion-list class=\"list-notice\" *ngFor=\"let res of Data; let i = index\">\r\n        <ion-item (click)=\"openRulesDetails(res[i].title, ListType, res[i].Description, res[i].documentpath)\">{{res[i].title}}\r\n            <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-content class=\"card-background-page\" *ngIf=\"ListType == 'Important Location'\">\r\n    <ion-list class=\"list-notice\" *ngFor=\"let res of Data; let i = index\">\r\n        <ion-item (click)=\"openRulesDetails(res[i].title, ListType, res[i].description, res[i].documentpath)\">{{res[i].title}}\r\n            <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/notice-rules-list/notice-rules-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notice-rules-list/notice-rules-list.module.ts ***!
  \***************************************************************/
/*! exports provided: NoticeRulesListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeRulesListPageModule", function() { return NoticeRulesListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notice_rules_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice-rules-list.page */ "./src/app/notice-rules-list/notice-rules-list.page.ts");







var routes = [
    {
        path: '',
        component: _notice_rules_list_page__WEBPACK_IMPORTED_MODULE_6__["NoticeRulesListPage"]
    }
];
var NoticeRulesListPageModule = /** @class */ (function () {
    function NoticeRulesListPageModule() {
    }
    NoticeRulesListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notice_rules_list_page__WEBPACK_IMPORTED_MODULE_6__["NoticeRulesListPage"]]
        })
    ], NoticeRulesListPageModule);
    return NoticeRulesListPageModule;
}());



/***/ }),

/***/ "./src/app/notice-rules-list/notice-rules-list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/notice-rules-list/notice-rules-list.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.nopad {\n  padding: 0;\n}\n.searchbars {\n  --ion-color-base: #676975 !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: #ffffff !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.card-background-page .list-notice ion-item {\n  color: #3e3e3e;\n  font-size: 15px;\n}\n.card-background-page .img_arrow {\n  width: 17px;\n  position: absolute;\n  top: 16px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlLXJ1bGVzLWxpc3QvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFwyMDIwXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXG5vdGljZS1ydWxlcy1saXN0XFxub3RpY2UtcnVsZXMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL25vdGljZS1ydWxlcy1saXN0L25vdGljZS1ydWxlcy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBRENBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBRENBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQ0E7RUFBYSw0QkFBQTtBQ0ViO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURiQTtFQUNJLGtCQUFBO0FDZ0JKO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQVEsVUFBQTtBQ21CUjtBRGxCQTtFQUNJLG9DQUFBO0VBQ0Esc0VBQUE7RUFDQSx3Q0FBQTtFQUNBLHNGQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtBQ3FCSjtBRGZJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNrQlI7QURoQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2tCUiIsImZpbGUiOiJzcmMvYXBwL25vdGljZS1ydWxlcy1saXN0L25vdGljZS1ydWxlcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxufVxyXG5pb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcblxyXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cclxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XHJcbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cclxuXHJcblxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ub3BhZCB7cGFkZGluZzogMDt9XHJcbi5zZWFyY2hiYXJzIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM2NzY5NzUgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUsICMxZTIwMjMpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50LCAjMzgzYTNlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgXHJcblxyXG4gICAgLmxpc3Qtbm90aWNlIGlvbi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogIzNlM2UzZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1nX2Fycm93IHtcclxuICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubm9wYWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2VhcmNoYmFycyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM2NzY5NzUgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiwgMzQsIDM2LCA0MCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5saXN0LW5vdGljZSBpb24taXRlbSB7XG4gIGNvbG9yOiAjM2UzZTNlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZ19hcnJvdyB7XG4gIHdpZHRoOiAxN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/notice-rules-list/notice-rules-list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/notice-rules-list/notice-rules-list.page.ts ***!
  \*************************************************************/
/*! exports provided: NoticeRulesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeRulesListPage", function() { return NoticeRulesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");




var NoticeRulesListPage = /** @class */ (function () {
    function NoticeRulesListPage(postPvd, router) {
        this.postPvd = postPvd;
        this.router = router;
        this.Data = [];
    }
    NoticeRulesListPage.prototype.ngOnInit = function () {
        this.uType = localStorage.getItem("TYPE_DATA");
        this.ListType = history.state.List;
        console.log(localStorage, history.state);
        this.loadLists(this.uType, this.ListType);
    };
    NoticeRulesListPage.prototype.ionViewWillEnter = function () {
        this.loadLists(this.uType, this.ListType);
    };
    NoticeRulesListPage.prototype.openRulesDetails = function (title, listType, description, documentpath) {
        this.router.navigateByUrl('/tabs/tab1/notice-main-list/notice-rules-list/notice-rules-details', { state: { title: title, listType: listType, desc: description, docPath: documentpath } });
    };
    NoticeRulesListPage.prototype.loadLists = function (uType, ListType) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'notices',
                uType: uType,
                ListType: ListType
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.Data = [];
                for (var index = 0; index < data['data'].length; index++) {
                    _this.Data.push(data['data']);
                }
                resolve(true);
                console.log(data['data']);
            });
        });
    };
    NoticeRulesListPage.ctorParameters = function () { return [
        { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NoticeRulesListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notice-rules-list',
            template: __webpack_require__(/*! raw-loader!./notice-rules-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/notice-rules-list/notice-rules-list.page.html"),
            styles: [__webpack_require__(/*! ./notice-rules-list.page.scss */ "./src/app/notice-rules-list/notice-rules-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NoticeRulesListPage);
    return NoticeRulesListPage;
}());



/***/ })

}]);
//# sourceMappingURL=notice-rules-list-notice-rules-list-module-es5.js.map