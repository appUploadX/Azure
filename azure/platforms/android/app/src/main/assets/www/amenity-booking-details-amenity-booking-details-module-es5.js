(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amenity-booking-details-amenity-booking-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenity-booking-details/amenity-booking-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenity-booking-details/amenity-booking-details.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons size=\"small\" slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title class=\"header_title\">Booking Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n    \r\n<ion-content class=\"card-background-page\">\r\n  <ion-card *ngFor=\"let res of dataX\">\r\n    <ion-card-header>\r\n      <img class=\"img_amenity\" src=\"/assets/azurebeach.png\">\r\n      <ion-card-subtitle>{{res.amenityName}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"nopad\">\r\n              <p>Booking Date: </p>\r\n            </ion-col>\r\n            <ion-col size=\"8\" class=\"nopad\">\r\n              <p>{{res.bookingdate}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"nopad\">\r\n              <p>Time Slot: </p>\r\n            </ion-col>\r\n            <ion-col size=\"8\" class=\"nopad\">\r\n              <p>{{res.timeSlots}}</p>\r\n            </ion-col>\r\n            <!-- <ion-col size=\"4\" class=\"nopad\">\r\n                <p>Stay Duration: </p>\r\n            </ion-col>\r\n            <ion-col size=\"8\" class=\"nopad\">\r\n              <p>July 1, 2019 to July 2, 2019</p>\r\n            </ion-col> -->\r\n          </ion-row>\r\n        </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/amenity-booking-details/amenity-booking-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/amenity-booking-details/amenity-booking-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: AmenityBookingDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityBookingDetailsPageModule", function() { return AmenityBookingDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _amenity_booking_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./amenity-booking-details.page */ "./src/app/amenity-booking-details/amenity-booking-details.page.ts");







var routes = [
    {
        path: '',
        component: _amenity_booking_details_page__WEBPACK_IMPORTED_MODULE_6__["AmenityBookingDetailsPage"]
    }
];
var AmenityBookingDetailsPageModule = /** @class */ (function () {
    function AmenityBookingDetailsPageModule() {
    }
    AmenityBookingDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_amenity_booking_details_page__WEBPACK_IMPORTED_MODULE_6__["AmenityBookingDetailsPage"]]
        })
    ], AmenityBookingDetailsPageModule);
    return AmenityBookingDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/amenity-booking-details/amenity-booking-details.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/amenity-booking-details/amenity-booking-details.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.nopad {\n  padding: 0;\n}\n.card-background-page .img_amenity {\n  width: 80px;\n  border-radius: 50%;\n  border: 3px solid #629ed8;\n  height: 80px;\n  background-image: url(\"/assets/azurebeach.png\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n}\n.card-background-page ion-card-subtitle {\n  margin-top: 15px;\n  color: #fff;\n  font-size: 14px;\n  border-bottom: 2px solid #629ed8;\n  padding-bottom: 5px;\n  font-family: \"Assistant_bold\";\n}\n.card-background-page ion-card {\n  background: -webkit-gradient(linear, left top, right top, from(#0553ad), to(#056de4));\n  background: linear-gradient(to right, #0553ad, #056de4);\n}\n.card-background-page ion-card-header {\n  padding-bottom: 5px;\n}\n.card-background-page ion-card-content {\n  padding: 0 20px 20px 20px;\n}\n.card-background-page ion-card-content p {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 6px;\n  color: #fff;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0eS1ib29raW5nLWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBenVyZUFjY2Vzc1xcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxhbWVuaXR5LWJvb2tpbmctZGV0YWlsc1xcYW1lbml0eS1ib29raW5nLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9hbWVuaXR5LWJvb2tpbmctZGV0YWlscy9hbWVuaXR5LWJvb2tpbmctZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWdCLDRCQUFBO0FDRWhCO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURkQTtFQUNJLGtCQUFBO0FDaUJKO0FEZkE7RUFDSSxrQkFBQTtBQ2tCSjtBRGhCQTtFQUNJLFVBQUE7QUNtQko7QURkSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDaUJSO0FEZkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDaUJSO0FEZkk7RUFDSSxxRkFBQTtFQUFBLHVEQUFBO0FDaUJSO0FEZkk7RUFDSSxtQkFBQTtBQ2lCUjtBRGZJO0VBQ0kseUJBQUE7QUNpQlI7QURmSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNpQlIiLCJmaWxlIjoic3JjL2FwcC9hbWVuaXR5LWJvb2tpbmctZGV0YWlscy9hbWVuaXR5LWJvb2tpbmctZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxucCwgaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG5cclxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcblxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ub3BhZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgeyBcclxuXHJcbiAgICAuaW1nX2FtZW5pdHkge1xyXG4gICAgICAgIHdpZHRoOjgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2MjllZDg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9henVyZWJlYWNoLnBuZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjI5ZWQ4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDU1M2FkLCAjMDU2ZGU0KTtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbnAsIGlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5vcGFkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWdfYW1lbml0eSB7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM2MjllZDg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9henVyZWJlYWNoLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjI5ZWQ4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDU1M2FkLCAjMDU2ZGU0KTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/amenity-booking-details/amenity-booking-details.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/amenity-booking-details/amenity-booking-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: AmenityBookingDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityBookingDetailsPage", function() { return AmenityBookingDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");



var AmenityBookingDetailsPage = /** @class */ (function () {
    function AmenityBookingDetailsPage(postPvd) {
        this.postPvd = postPvd;
        this.dataX = [];
    }
    AmenityBookingDetailsPage.prototype.ngOnInit = function () {
        console.log(history.state);
        this.id = history.state.id;
        this.loadData(this.id);
    };
    AmenityBookingDetailsPage.prototype.loadData = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'bookingListDetails',
                ID: id,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.dataX.push(data['data']);
                resolve(true);
                console.log(data['data']);
            });
        });
    };
    AmenityBookingDetailsPage.ctorParameters = function () { return [
        { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"] }
    ]; };
    AmenityBookingDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-amenity-booking-details',
            template: __webpack_require__(/*! raw-loader!./amenity-booking-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/amenity-booking-details/amenity-booking-details.page.html"),
            styles: [__webpack_require__(/*! ./amenity-booking-details.page.scss */ "./src/app/amenity-booking-details/amenity-booking-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]])
    ], AmenityBookingDetailsPage);
    return AmenityBookingDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=amenity-booking-details-amenity-booking-details-module-es5.js.map