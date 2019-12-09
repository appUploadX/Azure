(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<script\r\n  src=\"https://code.jquery.com/jquery-3.4.1.js\"\r\n  integrity=\"sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=\"\r\n  crossorigin=\"anonymous\"></script>\r\n\r\n<ion-content class=\"loginbg\">\r\n    <form class=\"box\" (submit)=\"onSubmit(user.value, pass.value)\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col col-6>\r\n            <div class=\"divimg\">\r\n              <img class=\"imgloginlogo\" src=\"/assets/azurel.png\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <h1>Login</h1>\r\n      <input type=\"text\" #user  class=\"required user\" required placeholder=\"Username\">\r\n      <input type=\"password\" #pass class=\"required\" required placeholder=\"Password\">\r\n      <input type=\"submit\" value=\"Login\">\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nh2,\np,\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.loginbg {\n  --background: #072549;\n}\nion-col div {\n  background-color: #191a30;\n  border: 1px solid #191a30;\n  border-radius: 2px;\n  padding: 5px;\n  text-align: center;\n}\n.box {\n  width: 300px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}\n.box h1 {\n  color: #ffffff;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-family: \"Assistant_bold\";\n  margin-top: 0;\n}\n.box input[type=text], .box input[type=password] {\n  border: 0;\n  background: none;\n  display: block;\n  margin: 20px auto;\n  text-align: center;\n  border: 2px solid #0653ac;\n  padding: 14px 10px;\n  width: 240px;\n  outline: none;\n  color: #ffffff;\n  border-radius: 24px;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n}\n.box input[type=text]:focus, .box input[type=password]:focus {\n  width: 260px;\n  border-color: #0967d3;\n}\n.box input[type=submit] {\n  border: 0;\n  background: -webkit-gradient(linear, left top, right top, from(#0967d3), to(#09a0d3));\n  background: linear-gradient(to right, #0967d3, #09a0d3);\n  margin: 20px auto;\n  text-align: center;\n  padding: 14px 40px;\n  color: white;\n  border-radius: 24px;\n  text-transform: uppercase;\n  font-family: \"Assistant_bold\";\n  margin-top: 0;\n}\n.imgloginlogo {\n  width: 80%;\n  margin: 0 auto;\n}\n.divimg {\n  background-color: transparent !important;\n  border: none !important;\n  border-radius: 2px;\n  padding: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBenVyZUFjY2Vzc1xcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBOzs7RUFFYyw0QkFBQTtBQ0VkO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURaQTtFQUNJLHFCQUFBO0FDZUo7QURaQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2VKO0FEWkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxrQkFBQTtBQ2VKO0FEYkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ2dCSjtBRFpBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUFBLGlCQUFBO0FDZUo7QURaQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ2VKO0FEYkE7RUFDSSxTQUFBO0VBQ0EscUZBQUE7RUFBQSx1REFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDZ0JKO0FEYkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ2dCSjtBRGJBO0VBQ0ksd0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDZ0JKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbmgyLFxyXG5wLFxyXG4gaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG5cclxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcblxyXG5cclxuXHJcbi5sb2dpbmJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzA3MjU0OTtcclxufVxyXG5cclxuaW9uLWNvbCBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MWEzMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTFhMzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm94IGgxIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG5cclxufVxyXG4uYm94IGlucHV0W3R5cGUgPSBcInRleHRcIl0sIC5ib3ggaW5wdXRbdHlwZSA9IFwicGFzc3dvcmRcIl0ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDY1M2FjO1xyXG4gICAgcGFkZGluZzogMTRweCAxMHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGUgPSBcInRleHRcIl06Zm9jdXMsIC5ib3ggaW5wdXRbdHlwZSA9IFwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDk2N2QzO1xyXG59XHJcbi5ib3ggaW5wdXRbdHlwZSA9IFwic3VibWl0XCJdIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA5NjdkMywgIzA5YTBkMyk7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uaW1nbG9naW5sb2dvIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmRpdmltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5oMixcbnAsXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4ubG9naW5iZyB7XG4gIC0tYmFja2dyb3VuZDogIzA3MjU0OTtcbn1cblxuaW9uLWNvbCBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxYTMwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTkxYTMwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm94IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3ggaDEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJveCBpbnB1dFt0eXBlPXRleHRdLCAuYm94IGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgIzA2NTNhYztcbiAgcGFkZGluZzogMTRweCAxMHB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cblxuLmJveCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAuYm94IGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgd2lkdGg6IDI2MHB4O1xuICBib3JkZXItY29sb3I6ICMwOTY3ZDM7XG59XG5cbi5ib3ggaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOTY3ZDMsICMwOWEwZDMpO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmltZ2xvZ2lubG9nbyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZGl2aW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var LoginPage = /** @class */ (function () {
    function LoginPage(postPvd, router, toastController) {
        this.postPvd = postPvd;
        this.router = router;
        this.toastController = toastController;
        this.Data = [];
    }
    LoginPage.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__(".required").val("");
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        // console.log(localStorage.getItem("UNIT_CODE"));
        // console.log(localStorage.getItem("TYPE_DATA"));
        // console.log(localStorage.getItem("HAS_TENANT"));
        // console.log(localStorage.getItem("NEW_CODE"));
        // console.log(localStorage.getItem("FULLNAME"));
        // console.log(localStorage.getItem("TUN"));
        // console.log(localStorage.getItem("ROOM_NO"));
        // console.log(localStorage.getItem("EMAIL"));
        jquery__WEBPACK_IMPORTED_MODULE_5__(".required").trigger("reset");
        jquery__WEBPACK_IMPORTED_MODULE_5__(".required").val("");
        console.log(localStorage);
        if (localStorage.getItem("UNIT_CODE") !== null && localStorage.getItem("NEW_CODE") !== null) {
            if (localStorage.getItem("TERMS") !== 'null') {
                this.router.navigateByUrl('/tabs/tab1');
            }
            else {
                this.router.navigateByUrl('terms-and-conditions');
            }
        }
    };
    LoginPage.prototype.openToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onSubmit = function (user, pass) {
        var _this = this;
        var count = 0;
        jquery__WEBPACK_IMPORTED_MODULE_5__(".required").each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).val() == "") {
                count++;
            }
            if (count > 0) {
                if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).val() == "") {
                    jquery__WEBPACK_IMPORTED_MODULE_5__(this).css({ "border": '#FF0000 1px solid' });
                }
            }
        });
        console.log(count);
        if (count == 0) {
            var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
            if (pattern.test(jquery__WEBPACK_IMPORTED_MODULE_5__(".user").val())) {
                return new Promise(function (resolve) {
                    var body = {
                        action: 'login',
                        user: user,
                        pass: pass,
                    };
                    _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                        if (data['status'] == "Success") {
                            _this.typeData = data['uType'];
                            _this.Status = data['status'];
                            _this.Has = data['hasTenant'];
                            _this.Data.push(data['data']);
                            console.log(data['dataX'][0]);
                            if (data['uType'] == "Owner") {
                                localStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
                                localStorage.setItem("TYPE_DATA", _this.typeData);
                                localStorage.setItem("HAS_TENANT", data['hasTenant']);
                                localStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
                                localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
                                localStorage.setItem("TUN", data['TUN']);
                                localStorage.setItem("ROOM_NO", data['ROOM_NO']);
                                localStorage.setItem("EMAIL", data['dataX'][0]['EmailAddress']);
                                localStorage.setItem("PROPERTY_CODE", data['dataX'][0]['property_code']);
                                localStorage.setItem("USER_ID", data['dataX'][0]['id']);
                                localStorage.setItem("TERMS", data['dataX'][0]['pTermsAndCondition']);
                                localStorage.setItem("BEDROOM", data['unit_details']['bedroom']);
                                localStorage.setItem("UNITSIZE", data['unit_details']['unitsize']);
                                if (data['dataX'][0]['pTermsAndCondition'] !== null) {
                                    _this.router.navigateByUrl('/tabs/tab1');
                                }
                                else {
                                    _this.router.navigateByUrl('terms-and-conditions');
                                }
                            }
                            else if (data['uType'] == "Tenant") {
                                localStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
                                localStorage.setItem("TYPE_DATA", _this.typeData);
                                localStorage.setItem("HAS_TENANT", data['hasTenant']);
                                localStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
                                localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
                                localStorage.setItem("TUN", data['TUN']);
                                localStorage.setItem("ROOM_NO", data['ROOM_NO']);
                                localStorage.setItem("EMAIL", data['dataX'][0]['tEmailAddress']);
                                localStorage.setItem("PROPERTY_CODE", data['propC']['property_code']);
                                localStorage.setItem("USER_ID", data['dataX'][0]['id']);
                                localStorage.setItem("TERMS", data['dataX'][0]['tTermsAndCondition']);
                                localStorage.setItem("BEDROOM", data['unit_details']['bedroom']);
                                localStorage.setItem("UNITSIZE", data['unit_details']['unitsize']);
                                if (data['dataX'][0]['tTermsAndCondition'] !== null) {
                                    _this.router.navigateByUrl('/tabs/tab1');
                                }
                                else {
                                    _this.router.navigateByUrl('terms-and-conditions');
                                }
                            }
                        }
                        else {
                            _this.openToast('<center>Invalid credentials!</center>');
                        }
                    });
                });
            }
            else {
                this.openToast("<center>Incorrect email format!</center>");
            }
        }
        else {
            this.openToast("<center>All fields are required!</center>");
        }
    };
    LoginPage.ctorParameters = function () { return [
        { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map