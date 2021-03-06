(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amenity-booking-list-amenity-booking-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenity-booking-list/amenity-booking-list.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenity-booking-list/amenity-booking-list.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons size=\"small\" slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title class=\"header_title\">Amenity Booking List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n    \r\n<ion-content class=\"card-background-page\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list>\r\n    <ion-list-header>UNIT {{unit_no}}</ion-list-header>\r\n    <ion-item *ngFor=\"let res of dataX; let i = index\" (click)=\"openBookingDetails(res[i].referrenceNo)\">\r\n      <ion-avatar class=\"avatar_amenities\" slot=\"start\">\r\n          <img class=\"img_amenity\" src=\"/assets/azurebeach.png\">\r\n        </ion-avatar>\r\n        <ion-label class=\"label_div\">\r\n          <h2>{{res[i].amenityName}}</h2>\r\n          <p class=\"text_sublabels\"><ion-icon name=\"calendar\"></ion-icon> {{res[i].bookingdate}}</p>\r\n          <p class=\"text_sublabels\"><ion-icon name=\"time\"></ion-icon> {{res[i].timeSlots}}</p>\r\n          <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\r\n        </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/amenity-booking-list/amenity-booking-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/amenity-booking-list/amenity-booking-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: AmenityBookingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityBookingListPageModule", function() { return AmenityBookingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _amenity_booking_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./amenity-booking-list.page */ "./src/app/amenity-booking-list/amenity-booking-list.page.ts");







var routes = [
    {
        path: '',
        component: _amenity_booking_list_page__WEBPACK_IMPORTED_MODULE_6__["AmenityBookingListPage"]
    }
];
var AmenityBookingListPageModule = /** @class */ (function () {
    function AmenityBookingListPageModule() {
    }
    AmenityBookingListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_amenity_booking_list_page__WEBPACK_IMPORTED_MODULE_6__["AmenityBookingListPage"]]
        })
    ], AmenityBookingListPageModule);
    return AmenityBookingListPageModule;
}());



/***/ }),

/***/ "./src/app/amenity-booking-list/amenity-booking-list.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/amenity-booking-list/amenity-booking-list.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nh2,\np,\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page .text_sublabels {\n  font-size: 13px;\n}\n.card-background-page .img_arrow {\n  width: 20px;\n  position: absolute;\n  top: 35%;\n  right: 5px;\n  border-radius: 50%;\n}\n.card-background-page .label_div {\n  position: relative;\n}\n.card-background-page .avatar_amenities {\n  width: 50px;\n  height: 50px;\n}\nion-refresher {\n  background-color: #dedede;\n}\nion-refresher-content {\n  background-color: #dedede;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0eS1ib29raW5nLWxpc3QvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFwyMDIwXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXGFtZW5pdHktYm9va2luZy1saXN0XFxhbWVuaXR5LWJvb2tpbmctbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FtZW5pdHktYm9va2luZy1saXN0L2FtZW5pdHktYm9va2luZy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBRENBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBRENBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQ0E7OztFQUVjLDRCQUFBO0FDRWQ7QURBQTtFQUFXLDRCQUFBO0FDSVg7QURIQTtFQUFhLDhCQUFBO0FDT2I7QUROQTtFQUFnQixpQ0FBQTtBQ1VoQjtBRFRBO0VBQVksNkJBQUE7QUNhWjtBRFpBO0VBQWlCLGtDQUFBO0FDZ0JqQjtBRGZBO0VBQ0ksa0JBQUE7QUNrQko7QURoQkE7RUFDSSxrQkFBQTtBQ21CSjtBRGRJO0VBQ0ksZUFBQTtBQ2lCUjtBRGZJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2lCUjtBRGZJO0VBQ0ksa0JBQUE7QUNpQlI7QURmSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDaUJSO0FEZEE7RUFDSSx5QkFBQTtBQ2lCSjtBRGRBO0VBQ0kseUJBQUE7QUNpQkoiLCJmaWxlIjoic3JjL2FwcC9hbWVuaXR5LWJvb2tpbmctbGlzdC9hbWVuaXR5LWJvb2tpbmctbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxuaDIsXHJcbnAsXHJcbiBpb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcblxyXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cclxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XHJcbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cclxuLmhlYWRlcl90aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgICAudGV4dF9zdWJsYWJlbHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5pbWdfYXJyb3cge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC5sYWJlbF9kaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5hdmF0YXJfYW1lbml0aWVzIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuaW9uLXJlZnJlc2hlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG59XHJcbiAgXHJcbmlvbi1yZWZyZXNoZXItY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaDIsXG5wLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHRfc3VibGFiZWxzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWdfYXJyb3cge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmF2YXRhcl9hbWVuaXRpZXMge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tcmVmcmVzaGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbn1cblxuaW9uLXJlZnJlc2hlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/amenity-booking-list/amenity-booking-list.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/amenity-booking-list/amenity-booking-list.page.ts ***!
  \*******************************************************************/
/*! exports provided: AmenityBookingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityBookingListPage", function() { return AmenityBookingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");




var AmenityBookingListPage = /** @class */ (function () {
    function AmenityBookingListPage(postPvd, router) {
        this.postPvd = postPvd;
        this.router = router;
        this.dataX = [];
    }
    AmenityBookingListPage.prototype.ngOnInit = function () {
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.uType = localStorage.getItem("TYPE_DATA");
        this.unit_no = localStorage.getItem("ROOM_NO");
        console.log(localStorage);
        this.loadData(this.uCode, this.uType);
    };
    AmenityBookingListPage.prototype.openBookingDetails = function (id) {
        this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list/amenity-booking-details', { state: { id: id } });
    };
    AmenityBookingListPage.prototype.loadData = function (uCode, uType) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'bookingList',
                uCode: uCode,
                uType: uType,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                for (var x = 0; x < data['data'].length; x++) {
                    _this.dataX.push(data['data']);
                }
                resolve(true);
                console.log(data['data']);
            });
        });
    };
    AmenityBookingListPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.dataX = [];
            return new Promise(function (resolve) {
                var body = {
                    action: 'bookingList',
                    uCode: _this.uCode,
                    uType: _this.uType,
                };
                _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                    for (var x = 0; x < data['data'].length; x++) {
                        _this.dataX.push(data['data']);
                    }
                    event.target.complete();
                    resolve(true);
                    console.log(data['data']);
                });
            });
        }, 2000);
    };
    AmenityBookingListPage.ctorParameters = function () { return [
        { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AmenityBookingListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-amenity-booking-list',
            template: __webpack_require__(/*! raw-loader!./amenity-booking-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/amenity-booking-list/amenity-booking-list.page.html"),
            styles: [__webpack_require__(/*! ./amenity-booking-list.page.scss */ "./src/app/amenity-booking-list/amenity-booking-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AmenityBookingListPage);
    return AmenityBookingListPage;
}());



/***/ })

}]);
//# sourceMappingURL=amenity-booking-list-amenity-booking-list-module-es5.js.map