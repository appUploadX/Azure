(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~profile-edit-profile-edit-module~tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-edit/profile-edit.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-edit/profile-edit.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"title_header\">Edit Profile</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"btn_close\" (click)=\"closeModal()\">\r\n        Cancel\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\" *ngFor=\"let res of Data\">\r\n  <ion-grid *ngIf=\"uType == 'Owner'\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <input type=\"hidden\" value=\"{{res.id}}\" id=\"user_id\">\r\n          <ion-label position=\"stacked\">Name</ion-label>\r\n          <ion-input required type=\"text\" class=\"txtinput\" value=\"{{res.fullname}}\" id=\"name\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Gender</ion-label>\r\n          <ion-select name=\"\" id=\"gender\">\r\n            <ion-select-option value=\"Male\" *ngIf=\"res.pGender == 'Male'\" selected>Male</ion-select-option>\r\n            <ion-select-option value=\"Male\" *ngIf=\"res.pGender != 'Male'\">Male</ion-select-option>\r\n            <ion-select-option value=\"Female\" *ngIf=\"res.pGender == 'Female'\" selected>Female</ion-select-option>\r\n            <ion-select-option value=\"Female\" *ngIf=\"res.pGender != 'Female'\">Female</ion-select-option>\r\n          </ion-select>\r\n          <!-- <input type=\"text\" class=\"txtinput\" value=\"{{res.pGender}}\"> -->\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Occupation</ion-label>\r\n          <ion-input type=\"text\" class=\"txtinput\" value=\"{{res.pOccupation}}\" id=\"occupation\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Date of Birth</ion-label>\r\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" class=\"txtinput\" value=\"{{res.pDate}}\" id=\"bday\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Address</ion-label>\r\n          <ion-input type=\"text\" class=\"txtinput\" value=\"{{res.Address}}\" id=\"address\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Nationality</ion-label>\r\n          <ion-input type=\"text\" class=\"txtinput\" value=\"{{res.pNationality}}\" id=\"nationality\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Country</ion-label>\r\n          <ion-input type=\"text\" class=\"txtinput\" value=\"{{res.pCountry}}\" id=\"country\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"12\" class=\"pt-0\">\r\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"saveData()\">Save</ion-button>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"uType == 'Tenant'\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <input type=\"hidden\" value=\"{{res.id}}\" id=\"user_id\">\r\n          <ion-label position=\"stacked\">Name</ion-label>\r\n          <ion-input required type=\"text\" class=\"txtinput\" value=\"{{res.fullname}}\" id=\"name\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Gender</ion-label>\r\n          <ion-select name=\"\" id=\"gender\">\r\n            <ion-select-option value=\"Male\" *ngIf=\"res.tGender == 'Male'\" selected>Male</ion-select-option>\r\n            <ion-select-option value=\"Male\" *ngIf=\"res.tGender != 'Male'\">Male</ion-select-option>\r\n            <ion-select-option value=\"Female\" *ngIf=\"res.tGender == 'Female'\" selected>Female</ion-select-option>\r\n            <ion-select-option value=\"Female\" *ngIf=\"res.tGender != 'Female'\">Female</ion-select-option>\r\n          </ion-select>\r\n          <!-- <input type=\"text\" class=\"txtinput\" value=\"{{res.pGender}}\"> -->\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Occupation</ion-label>\r\n          <ion-input type=\"text\" class=\"txtinput\" value=\"{{res.tOccupation}}\" id=\"occupation\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Date of Birth</ion-label>\r\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" class=\"txtinput\" value=\"{{res.tDate}}\" id=\"bday\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Address</ion-label>\r\n          <ion-input type=\"text\" class=\"txtinput\" value=\"{{res.tAddress}}\" id=\"address\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Nationality</ion-label>\r\n          <ion-input type=\"text\" class=\"txtinput\" value=\"{{res.tNationality}}\" id=\"nationality\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" class=\"lineborder\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Country</ion-label>\r\n          <ion-input type=\"text\" class=\"txtinput\" value=\"{{res.tCountry}}\" id=\"country\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"12\" class=\"pt-0\">\r\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"saveData()\">Save</ion-button>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.title_header {\n  text-align: center;\n}\n.txtinput {\n  border: none;\n  width: 100%;\n  box-shadow: none;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  height: 30px;\n  font-size: 12px;\n  padding-bottom: 0;\n}\n.txtinput:focus {\n  outline: 0;\n  box-shadow: none;\n  border-bottom: 2px solid #167ff7;\n}\n.btn_close {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1lZGl0L0M6XFxVc2Vyc1xcQUdTSVxcRGVza3RvcFxcMjAyMFxcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxwcm9maWxlLWVkaXRcXHByb2ZpbGUtZWRpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURFQTtFQUNJLDRCQUFBO0FDQUo7QURFQTtFQUNJLDhCQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0FDRUo7QURBQTtFQUNJLDZCQUFBO0FDR0o7QUREQTtFQUNJLGtDQUFBO0FDSUo7QUREQTtFQUNJLDRCQUFBO0FDSUo7QUREQTtFQUNJLGtCQUFBO0FDSUo7QUREQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0lKO0FERkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0tKO0FERkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcblxyXG4uZm9udF9yZWcge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxufVxyXG4uZm9udF9saWdodCB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbn1cclxuLmZvbnRfc2VtaWJvbGQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG59XHJcbi5mb250X2JvbGQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbn1cclxuLmZvbnRfZXh0cmFib2xkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbn1cclxuXHJcbi50aXRsZV9oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udHh0aW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi50eHRpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjIsIDEyNywgMjQ3KTtcclxufVxyXG5cclxuLmJ0bl9jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLnRpdGxlX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnR4dGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udHh0aW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE2N2ZmNztcbn1cblxuLmJ0bl9jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.page.ts":
/*!***************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.ts ***!
  \***************************************************/
/*! exports provided: ProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPage", function() { return ProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);







let ProfileEditPage = class ProfileEditPage {
    constructor(postPvd, modalController, router, toastController) {
        this.postPvd = postPvd;
        this.modalController = modalController;
        this.router = router;
        this.toastController = toastController;
        this.Data = [];
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    ngOnInit() {
        this.uid = localStorage.getItem("USER_ID");
        this.uType = localStorage.getItem("TYPE_DATA");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.Email = localStorage.getItem("EMAIL");
        // this.loadData(this.uType, this.uCode, this.Email);
        console.log(localStorage);
    }
    ionViewWillEnter() {
        this.uid = localStorage.getItem("USER_ID");
        this.uType = localStorage.getItem("TYPE_DATA");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.Email = localStorage.getItem("EMAIL");
        this.loadData(this.uType, this.uCode, this.Email);
        console.log(localStorage);
    }
    loadData(uType, uCode, Email) {
        this.Data = [];
        return new Promise(resolve => {
            let body = {
                action: 'UserDetails',
                uType: uType,
                uCode: uCode,
                Email: Email,
                propCode: localStorage.getItem("PROPERTY_CODE"),
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                this.Data = [];
                this.Data.push(data['data']);
                this.Aniv = data['aniv'];
                resolve(true);
                console.log(data);
            });
        });
    }
    saveData() {
        console.log(jquery__WEBPACK_IMPORTED_MODULE_5__("#bday").val());
        var splitbday = jquery__WEBPACK_IMPORTED_MODULE_5__("#bday").val().split("T");
        console.log(splitbday[0]);
        return new Promise(resolve => {
            let body = {
                action: "updateUserDetails",
                name: jquery__WEBPACK_IMPORTED_MODULE_5__("#name").val(),
                gender: jquery__WEBPACK_IMPORTED_MODULE_5__("#gender").val(),
                occupation: jquery__WEBPACK_IMPORTED_MODULE_5__("#occupation").val(),
                bday: splitbday[0],
                address: jquery__WEBPACK_IMPORTED_MODULE_5__("#address").val(),
                nationality: jquery__WEBPACK_IMPORTED_MODULE_5__("#nationality").val(),
                country: jquery__WEBPACK_IMPORTED_MODULE_5__("#country").val(),
                uid: jquery__WEBPACK_IMPORTED_MODULE_5__("#user_id").val(),
                utype: localStorage.getItem("TYPE_DATA"),
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                if (data['status'] == "Success") {
                    localStorage.setItem("FULLNAME", data['fullname']);
                    console.log(localStorage.getItem("FULLNAME"));
                    this.openToast("Profile updated successfully!");
                    this.router.navigateByUrl('/tabs/tab2');
                    this.modalController.dismiss();
                }
            });
        });
    }
    openToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
};
ProfileEditPage.ctorParameters = () => [
    { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-edit',
        template: __webpack_require__(/*! raw-loader!./profile-edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile-edit/profile-edit.page.html"),
        styles: [__webpack_require__(/*! ./profile-edit.page.scss */ "./src/app/profile-edit/profile-edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ProfileEditPage);



/***/ })

}]);
//# sourceMappingURL=default~profile-edit-profile-edit-module~tabs-tabs-module-es2015.js.map