(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amenities-details-amenities-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenities-details/amenities-details.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenities-details/amenities-details.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons size=\"small\" slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title class=\"header_title\">Amenity List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n    \r\n<ion-content class=\"card-background-page\">\r\n  <p class=\"identify_unit\">UNIT {{unit_no}}</p>\r\n  <div class=\"booking_div\">\r\n    <ion-chip class=\"btn_booking_list\" (click)=\"openBookingList()\">\r\n      <ion-icon name=\"list\"></ion-icon>\r\n      <ion-label>Booking List</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n  <ion-list *ngFor=\"let res of amenType; let i = index\">\r\n    <ion-item (click)=\"openAzureBeach(res[i].amenities_code, res[i].pName)\">\r\n      <ion-avatar class=\"avatar_amenities\" slot=\"start\">\r\n          <img class=\"img_amenity\" src=\"/assets/azurebeach.png\">\r\n      </ion-avatar>\r\n      <ion-label class=\"label_div\">\r\n        <h2>{{res[i].pName}}</h2>\r\n        <p class=\"text_sublabels\"><ion-icon name=\"fitness\"></ion-icon> {{res[i].pCategory}}</p>\r\n        <p class=\"text_sublabels\"><ion-icon name=\"people\"></ion-icon> {{res[i].capacity}} </p>\r\n        <img class=\"img_arrow\" src=\"assets/arrow_right_blue.png\">\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/amenities-details/amenities-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/amenities-details/amenities-details.module.ts ***!
  \***************************************************************/
/*! exports provided: AmenitiesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesDetailsPageModule", function() { return AmenitiesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _amenities_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./amenities-details.page */ "./src/app/amenities-details/amenities-details.page.ts");







var routes = [
    {
        path: '',
        component: _amenities_details_page__WEBPACK_IMPORTED_MODULE_6__["AmenitiesDetailsPage"]
    }
];
var AmenitiesDetailsPageModule = /** @class */ (function () {
    function AmenitiesDetailsPageModule() {
    }
    AmenitiesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_amenities_details_page__WEBPACK_IMPORTED_MODULE_6__["AmenitiesDetailsPage"]]
        })
    ], AmenitiesDetailsPageModule);
    return AmenitiesDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/amenities-details/amenities-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/amenities-details/amenities-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page .identify_unit {\n  position: absolute;\n  font-size: 14px;\n  top: 15px;\n  margin: 0;\n  left: 15px;\n  font-family: \"Assistant_bold\";\n  color: #777777;\n}\n.card-background-page .avatar_amenities {\n  width: 50px;\n  height: 50px;\n}\n.card-background-page .img_arrow {\n  width: 20px;\n  position: absolute;\n  top: 35%;\n  right: 5px;\n  border-radius: 50%;\n}\n.card-background-page .text_sublabels {\n  font-size: 13px;\n}\n.card-background-page .label_div {\n  position: relative;\n}\n.card-background-page .btn_booking_list {\n  background: #6c6f7e;\n  color: #fff;\n}\n.card-background-page .btn_booking_list ion-icon {\n  color: #fff;\n}\n.card-background-page .booking_div {\n  margin-top: 10px;\n  text-align: right;\n  margin-right: 12px;\n}\n.card-background-page ion-list {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0aWVzLWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXGFtZW5pdGllcy1kZXRhaWxzXFxhbWVuaXRpZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FtZW5pdGllcy1kZXRhaWxzL2FtZW5pdGllcy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBRENBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBRENBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQ0E7RUFBZ0IsNEJBQUE7QUNFaEI7QURBQTtFQUFXLDRCQUFBO0FDSVg7QURIQTtFQUFhLDhCQUFBO0FDT2I7QUROQTtFQUFnQixpQ0FBQTtBQ1VoQjtBRFRBO0VBQVksNkJBQUE7QUNhWjtBRFpBO0VBQWlCLGtDQUFBO0FDZ0JqQjtBRGZBO0VBQ0ksa0JBQUE7QUNrQko7QURoQkE7RUFDSSxrQkFBQTtBQ21CSjtBRGZJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FDa0JSO0FEaEJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNrQlI7QURoQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDa0JSO0FEaEJJO0VBQ0ksZUFBQTtBQ2tCUjtBRGhCSTtFQUNJLGtCQUFBO0FDa0JSO0FEaEJJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDa0JSO0FEaEJJO0VBQ0ksV0FBQTtBQ2tCUjtBRGhCSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2tCUjtBRGhCSTtFQUNJLGNBQUE7QUNrQlIiLCJmaWxlIjoic3JjL2FwcC9hbWVuaXRpZXMtZGV0YWlscy9hbWVuaXRpZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxucCwgaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG5cclxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcbi5oZWFkZXJfdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICAuaWRlbnRpZnlfdW5pdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICB9XHJcbiAgICAuYXZhdGFyX2FtZW5pdGllcyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmltZ19hcnJvdyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgLnRleHRfc3VibGFiZWxzIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWxfZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuYnRuX2Jvb2tpbmdfbGlzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzZjNmY3ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5idG5fYm9va2luZ19saXN0IGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5ib29raW5nX2RpdiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcblxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5wLCBpb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaWRlbnRpZnlfdW5pdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0b3A6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmF2YXRhcl9hbWVuaXRpZXMge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWdfYXJyb3cge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZXh0X3N1YmxhYmVscyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWxfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5idG5fYm9va2luZ19saXN0IHtcbiAgYmFja2dyb3VuZDogIzZjNmY3ZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmJ0bl9ib29raW5nX2xpc3QgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYm9va2luZ19kaXYge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/amenities-details/amenities-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/amenities-details/amenities-details.page.ts ***!
  \*************************************************************/
/*! exports provided: AmenitiesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesDetailsPage", function() { return AmenitiesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");




var AmenitiesDetailsPage = /** @class */ (function () {
    function AmenitiesDetailsPage(postPvd, router) {
        this.postPvd = postPvd;
        this.router = router;
        this.amenType = [];
    }
    AmenitiesDetailsPage.prototype.ngOnInit = function () {
        console.log(localStorage);
        this.pCode = localStorage.getItem("PROPERTY_CODE");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.uType = localStorage.getItem("TYPE_DATA");
        this.unit_no = localStorage.getItem("ROOM_NO");
        this.loadData();
    };
    AmenitiesDetailsPage.prototype.openAzureBeach = function (amenCode, pName) {
        // this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info', {state: {amenCode: amenCode,pCode: this.pCode, uCode: this.uCode, uType:this.uType, amenName: pName}})
        this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info', { state: { amenCode: amenCode, pCode: this.pCode, uCode: this.uCode, uType: this.uType, amenName: pName } });
    };
    AmenitiesDetailsPage.prototype.openBookingList = function () {
        this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list');
    };
    AmenitiesDetailsPage.prototype.loadData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'amenities',
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                for (var x = 0; x < data['data'].length; x++) {
                    _this.amenType.push(data['data']);
                }
                resolve(true);
                console.log(data['data']);
            });
        });
    };
    AmenitiesDetailsPage.ctorParameters = function () { return [
        { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AmenitiesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-amenities-details',
            template: __webpack_require__(/*! raw-loader!./amenities-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/amenities-details/amenities-details.page.html"),
            styles: [__webpack_require__(/*! ./amenities-details.page.scss */ "./src/app/amenities-details/amenities-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AmenitiesDetailsPage);
    return AmenitiesDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=amenities-details-amenities-details-module-es5.js.map