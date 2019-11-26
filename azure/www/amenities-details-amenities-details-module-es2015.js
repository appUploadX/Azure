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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _amenities_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./amenities-details.page */ "./src/app/amenities-details/amenities-details.page.ts");







const routes = [
    {
        path: '',
        component: _amenities_details_page__WEBPACK_IMPORTED_MODULE_6__["AmenitiesDetailsPage"]
    }
];
let AmenitiesDetailsPageModule = class AmenitiesDetailsPageModule {
};
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



/***/ }),

/***/ "./src/app/amenities-details/amenities-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/amenities-details/amenities-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page .identify_unit {\n  position: absolute;\n  font-size: 14px;\n  top: 15px;\n  margin: 0;\n  left: 15px;\n  font-family: \"Assistant_bold\";\n  color: #777777;\n}\n.card-background-page .avatar_amenities {\n  width: 50px;\n  height: 50px;\n}\n.card-background-page .img_arrow {\n  width: 20px;\n  position: absolute;\n  top: 35%;\n  right: 5px;\n  border-radius: 50%;\n}\n.card-background-page .text_sublabels {\n  font-size: 13px;\n}\n.card-background-page .label_div {\n  position: relative;\n}\n.card-background-page .btn_booking_list {\n  background: #6c6f7e;\n  color: #fff;\n}\n.card-background-page .btn_booking_list ion-icon {\n  color: #fff;\n}\n.card-background-page .booking_div {\n  margin-top: 10px;\n  text-align: right;\n  margin-right: 12px;\n}\n.card-background-page ion-list {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0aWVzLWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBenVyZUFjY2Vzc1xcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxhbWVuaXRpZXMtZGV0YWlsc1xcYW1lbml0aWVzLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9hbWVuaXRpZXMtZGV0YWlscy9hbWVuaXRpZXMtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWdCLDRCQUFBO0FDRWhCO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURmQTtFQUNJLGtCQUFBO0FDa0JKO0FEaEJBO0VBQ0ksa0JBQUE7QUNtQko7QURmSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ2tCUjtBRGhCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDa0JSO0FEaEJJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2tCUjtBRGhCSTtFQUNJLGVBQUE7QUNrQlI7QURoQkk7RUFDSSxrQkFBQTtBQ2tCUjtBRGhCSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ2tCUjtBRGhCSTtFQUNJLFdBQUE7QUNrQlI7QURoQkk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNrQlI7QURoQkk7RUFDSSxjQUFBO0FDa0JSIiwiZmlsZSI6InNyYy9hcHAvYW1lbml0aWVzLWRldGFpbHMvYW1lbml0aWVzLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbnAsIGlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgLmlkZW50aWZ5X3VuaXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgfVxyXG4gICAgLmF2YXRhcl9hbWVuaXRpZXMge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5pbWdfYXJyb3cge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC50ZXh0X3N1YmxhYmVscyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsX2RpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmJ0bl9ib29raW5nX2xpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2YzZmN2U7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuYnRuX2Jvb2tpbmdfbGlzdCBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuYm9va2luZ19kaXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG5cclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxucCwgaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmlkZW50aWZ5X3VuaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdG9wOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGxlZnQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5hdmF0YXJfYW1lbml0aWVzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW1nX2Fycm93IHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudGV4dF9zdWJsYWJlbHMge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYnRuX2Jvb2tpbmdfbGlzdCB7XG4gIGJhY2tncm91bmQ6ICM2YzZmN2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5idG5fYm9va2luZ19saXN0IGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmJvb2tpbmdfZGl2IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");




let AmenitiesDetailsPage = class AmenitiesDetailsPage {
    constructor(postPvd, router) {
        this.postPvd = postPvd;
        this.router = router;
        this.amenType = [];
    }
    ngOnInit() {
        console.log(sessionStorage);
        this.pCode = sessionStorage.getItem("PROPERTY_CODE");
        this.uCode = sessionStorage.getItem("UNIT_CODE");
        this.uType = sessionStorage.getItem("TYPE_DATA");
        this.unit_no = sessionStorage.getItem("ROOM_NO");
        this.loadData();
    }
    openAzureBeach(amenCode, pName) {
        this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info', { state: { amenCode: amenCode, pCode: this.pCode, uCode: this.uCode, uType: this.uType, amenName: pName } });
    }
    openBookingList() {
        this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list');
    }
    loadData() {
        return new Promise(resolve => {
            let body = {
                action: 'amenities',
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                for (var x = 0; x < data['data'].length; x++) {
                    this.amenType.push(data['data']);
                }
                resolve(true);
                console.log(data['data']);
            });
        });
    }
};
AmenitiesDetailsPage.ctorParameters = () => [
    { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AmenitiesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-amenities-details',
        template: __webpack_require__(/*! raw-loader!./amenities-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/amenities-details/amenities-details.page.html"),
        styles: [__webpack_require__(/*! ./amenities-details.page.scss */ "./src/app/amenities-details/amenities-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AmenitiesDetailsPage);



/***/ })

}]);
//# sourceMappingURL=amenities-details-amenities-details-module-es2015.js.map