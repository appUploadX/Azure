(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amenity-info-amenity-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenity-info/amenity-info.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenity-info/amenity-info.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons size=\"small\" slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-button class=\"btnbook\" slot=\"end\" (click)=\"openAmenityBookNow(amenName, amenCode, propCode, unitCode, uType,rate)\">Book</ion-button>\r\n    <ion-title class=\"header_title\">{{amenName}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n    \r\n<ion-content class=\"card-background-page\" *ngFor=\"let res of amenData\">\r\n  <ion-card>\r\n    <ion-card-header class=\"pb-5\">\r\n      <div class=\"carousel\">\r\n        <ion-slides pager>\r\n          <ion-slide>\r\n            <div class=\"carousel_img1\"></div>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <div class=\"carousel_img2\"></div>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <div class=\"carousel_img3\"></div>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <div class=\"carousel_img4\"></div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n      <ion-card-subtitle>Slide to right <ion-icon class=\"icon_arrow\" name=\"arrow-forward\"></ion-icon></ion-card-subtitle>\r\n    </ion-card-header>\r\n    \r\n    <ion-card-content class=\"pt-0\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"a_row\">\r\n          <ion-col size=\"5\">\r\n            <p>Status</p>\r\n          </ion-col>\r\n          <ion-col size=\"7\">\r\n            <p>{{res.amenitiesstatus}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"a_row\">\r\n          <ion-col size=\"5\">\r\n            <p>Location</p>\r\n          </ion-col>\r\n          <ion-col size=\"7\">\r\n            <p>{{res.pLocation}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"a_row\">\r\n          <ion-col size=\"5\">\r\n            <p>Pre Booking</p>\r\n          </ion-col>\r\n          <ion-col size=\"7\">\r\n            <p>{{res.pBefore}} Day(s)</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid class=\"table_schedule\">\r\n          <ion-row class=\"a_row\">\r\n              <ion-col size=\"12\" class=\"table-head\">\r\n                <p>Schedule</p>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <p class=\"t_center\">S</p>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <p class=\"t_center\">M</p>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <p class=\"t_center\">T</p>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <p class=\"t_center\">W</p>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <p class=\"t_center\">TH</p>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <p class=\"t_center\">F</p>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"a_row\">\r\n              <ion-col size=\"2\" class=\"c_center\">\r\n                  <ion-checkbox checked=\"true\"></ion-checkbox>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"c_center\">\r\n                  <ion-checkbox checked=\"false\"></ion-checkbox>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"c_center\">\r\n                  <ion-checkbox checked=\"true\"></ion-checkbox>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"c_center\">\r\n                  <ion-checkbox checked=\"true\"></ion-checkbox>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"c_center\">\r\n                  <ion-checkbox checked=\"true\"></ion-checkbox>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"c_center\">\r\n                  <ion-checkbox checked=\"true\"></ion-checkbox>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <p class=\"p_note\">Note: Mondays are open only during holidays.</p>\r\n              </ion-col>\r\n            </ion-row>\r\n      </ion-grid>\r\n\r\n    </ion-card-content>\r\n    <div class=\"cover_checkbox\"></div>\r\n  </ion-card>\r\n\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Description</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"12\" [innerHTML]=\"res.description\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Terms & Conditions</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"12\" [innerHTML]=\"res.termsandcondition\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/amenity-info/amenity-info.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/amenity-info/amenity-info.module.ts ***!
  \*****************************************************/
/*! exports provided: AmenityInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityInfoPageModule", function() { return AmenityInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _amenity_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./amenity-info.page */ "./src/app/amenity-info/amenity-info.page.ts");







var routes = [
    {
        path: '',
        component: _amenity_info_page__WEBPACK_IMPORTED_MODULE_6__["AmenityInfoPage"]
    }
];
var AmenityInfoPageModule = /** @class */ (function () {
    function AmenityInfoPageModule() {
    }
    AmenityInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_amenity_info_page__WEBPACK_IMPORTED_MODULE_6__["AmenityInfoPage"]]
        })
    ], AmenityInfoPageModule);
    return AmenityInfoPageModule;
}());



/***/ }),

/***/ "./src/app/amenity-info/amenity-info.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/amenity-info/amenity-info.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\n.btnbook {\n  position: absolute;\n  right: 0;\n  top: 5px;\n  --box-shadow: none;\n}\np,\nion-content {\n  font-family: \"Assistant_reg\";\n  color: #323232;\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.card-background-page .carousel {\n  height: 30vh;\n}\n.card-background-page ion-card {\n  background: #fff;\n}\n.card-background-page .carousel_img1 {\n  background-image: url(\"/assets/azurebeach.png\");\n  height: 30vh;\n  width: 100%;\n  background-position: 50% 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.card-background-page .carousel_img2 {\n  background-image: url(\"/assets/azure2.jpg\");\n  height: 30vh;\n  width: 100%;\n  background-position: 50% 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.card-background-page .carousel_img3 {\n  background-image: url(\"/assets/attire.jpg\");\n  height: 30vh;\n  width: 100%;\n  background-position: 50% 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.card-background-page .carousel_img4 {\n  background-image: url(\"/assets/attire2.jpg\");\n  height: 30vh;\n  width: 100%;\n  background-position: 50% 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.card-background-page ion-card-subtitle {\n  text-align: right;\n  font-family: \"Assistant_reg\";\n  margin-top: 5px;\n}\n.card-background-page .a_row {\n  border-bottom: 1px solid #e6e6e6;\n}\n.card-background-page .nopad {\n  padding: 0;\n}\n.card-background-page .mt-20 {\n  margin-top: 20px;\n}\n.card-background-page .pt-0 {\n  padding-top: 0;\n}\n.card-background-page .pb-5 {\n  padding-bottom: 5px;\n}\n.card-background-page .a_row p {\n  font-size: 13px;\n  color: #323232;\n  margin-bottom: 0;\n}\n.card-background-page .table-head {\n  background: #5f6270;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.card-background-page .table-head p {\n  margin: 0;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"Assistant_bold\";\n}\n.card-background-page .t_center {\n  text-align: center;\n  font-family: \"Assistant_semibold\";\n}\n.card-background-page .c_center {\n  text-align: center;\n  border-right: 1px solid #dbdbdb;\n}\n.card-background-page .c_center:last-child {\n  border-right: none;\n}\n.card-background-page .p_note {\n  font-size: 12px;\n  margin: 0;\n}\n.card-background-page .table_schedule {\n  padding: 0;\n  margin-top: 20px;\n  border: 1px solid #cfcfcf;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.card-background-page .cover_checkbox {\n  background: #0000;\n  height: 41px;\n  width: 100%;\n  position: absolute;\n  top: 83.3%;\n  z-index: 9;\n}\n.card-background-page .title_type {\n  font-family: \"Assistant_bold\";\n  text-transform: uppercase;\n}\n.card-background-page .text_justify {\n  text-align: justify;\n}\n.card-background-page ion-card {\n  margin: 13px 0;\n  border-radius: 0;\n}\n.card-background-page .v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.card-background-page .v_title_detail {\n  background: #eceef7;\n  padding: 5px 16px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.card-background-page .v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.card-background-page .v-row {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 7px;\n}\n.card-background-page .text_info {\n  padding: 0px 5px;\n}\n.card-background-page .icon_arrow {\n  font-size: 16px;\n  position: relative;\n  top: 3.7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0eS1pbmZvL0M6XFxVc2Vyc1xcQUdTSVxcRGVza3RvcFxcMjAyMFxcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFxhbWVuaXR5LWluZm9cXGFtZW5pdHktaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2FtZW5pdHktaW5mby9hbWVuaXR5LWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0E7O0VBQ2EsNEJBQUE7RUFBOEIsY0FBQTtBQ0kzQztBREZBO0VBQVcsNEJBQUE7QUNNWDtBRExBO0VBQWEsOEJBQUE7QUNTYjtBRFJBO0VBQWdCLGlDQUFBO0FDWWhCO0FEWEE7RUFBWSw2QkFBQTtBQ2VaO0FEZEE7RUFBaUIsa0NBQUE7QUNrQmpCO0FEakJBO0VBQ0ksa0JBQUE7QUNvQko7QURsQkE7RUFDSSxrQkFBQTtBQ3FCSjtBRGxCQTtFQUNJLHFCQUFBO0FDcUJKO0FEbkJJO0VBQ0ksWUFBQTtBQ3FCUjtBRG5CSTtFQUNJLGdCQUFBO0FDcUJSO0FEbkJJO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ3FCUjtBRG5CSTtFQUNJLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNxQlI7QURuQkk7RUFDSSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDcUJSO0FEbkJJO0VBQ0ksNENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ3FCUjtBRG5CSTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDcUJSO0FEbkJJO0VBQ0ksZ0NBQUE7QUNxQlI7QURuQkk7RUFDSSxVQUFBO0FDcUJSO0FEbkJJO0VBQ0ksZ0JBQUE7QUNxQlI7QURuQkk7RUFDSSxjQUFBO0FDcUJSO0FEbkJJO0VBQ0ksbUJBQUE7QUNxQlI7QURsQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNvQlI7QURsQkk7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0FDb0JSO0FEbEJJO0VBQ0ksa0JBQUE7RUFDQSwrQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGtCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNvQlI7QURsQkk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNvQlI7QURsQkk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ29CUjtBRGxCSTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7QUNvQlI7QURsQkk7RUFDSSxtQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ29CUjtBRGxCSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUNvQlI7QURsQkk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNvQlI7QURsQkk7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksZ0JBQUE7QUNvQlI7QURsQkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDb0JSIiwiZmlsZSI6InNyYy9hcHAvYW1lbml0eS1pbmZvL2FtZW5pdHktaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxuLmJ0bmJvb2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5wLFxyXG5pb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzsgY29sb3I6ICMzMjMyMzI7fVxyXG5cclxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcbi5oZWFkZXJfdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XHJcblxyXG4gICAgLmNhcm91c2VsIHtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbF9pbWcxIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYXp1cmViZWFjaC5wbmcnKTtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWxfaW1nMiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2F6dXJlMi5qcGcnKTtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWxfaW1nMyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2F0dGlyZS5qcGcnKTtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWxfaW1nNCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2F0dGlyZTIuanBnJyk7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuYV9yb3cge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgfVxyXG4gICAgLm5vcGFkIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLm10LTIwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnB0LTAge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnBiLTUge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFfcm93IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzMyMzIzMjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWhlYWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1ZjYyNzA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaGVhZCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICB9XHJcbiAgICAudF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICB9XHJcbiAgICAuY19jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGJkYmRiO1xyXG4gICAgfVxyXG4gICAgLmNfY2VudGVyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIH1cclxuICAgIC5wX25vdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAudGFibGVfc2NoZWR1bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvdmVyX2NoZWNrYm94IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDtcclxuICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogODMuMyU7XHJcbiAgICAgICAgei1pbmRleDogOTsgXHJcbiAgICB9XHJcbiAgICAudGl0bGVfdHlwZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC50ZXh0X2p1c3RpZnkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxM3B4IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIC52X3BlcnNvbmFsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAudl90aXRsZV9kZXRhaWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2VlZjc7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XHJcbiAgICB9XHJcbiAgICAudl9kZXRhaWxzIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDs7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzkzOTM5O1xyXG4gICAgfVxyXG4gICAgLnYtcm93IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggN3B4O1xyXG4gICAgfVxyXG4gICAgLnRleHRfaW5mbyB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIH1cclxuICAgIC5pY29uX2Fycm93IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMy43cHg7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuLmJ0bmJvb2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5wLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGNvbG9yOiAjMzIzMjMyO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkNWRlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJvdXNlbCB7XG4gIGhlaWdodDogMzB2aDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcm91c2VsX2ltZzEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2F6dXJlYmVhY2gucG5nXCIpO1xuICBoZWlnaHQ6IDMwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJvdXNlbF9pbWcyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9henVyZTIuanBnXCIpO1xuICBoZWlnaHQ6IDMwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJvdXNlbF9pbWczIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hdHRpcmUuanBnXCIpO1xuICBoZWlnaHQ6IDMwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJvdXNlbF9pbWc0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hdHRpcmUyLmpwZ1wiKTtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYV9yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubm9wYWQge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnB0LTAge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAucGItNSB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmFfcm93IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50YWJsZS1oZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNjI3MDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50YWJsZS1oZWFkIHAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY19jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYmRiZGI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNfY2VudGVyOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnBfbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50YWJsZV9zY2hlZHVsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY292ZXJfY2hlY2tib3gge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDtcbiAgaGVpZ2h0OiA0MXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgzLjMlO1xuICB6LWluZGV4OiA5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50aXRsZV90eXBlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudGV4dF9qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZCB7XG4gIG1hcmdpbjogMTNweCAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52X3BlcnNvbmFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl90aXRsZV9kZXRhaWwge1xuICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xuICBwYWRkaW5nOiA1cHggMTZweDtcbiAgY29sb3I6ICMyOTI5Mjk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzkzOTM5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52LXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICBwYWRkaW5nOiA2cHggN3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC50ZXh0X2luZm8ge1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pY29uX2Fycm93IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMy43cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/amenity-info/amenity-info.page.ts":
/*!***************************************************!*\
  !*** ./src/app/amenity-info/amenity-info.page.ts ***!
  \***************************************************/
/*! exports provided: AmenityInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityInfoPage", function() { return AmenityInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AmenityInfoPage = /** @class */ (function () {
    function AmenityInfoPage(postPvd, router, toastController) {
        this.postPvd = postPvd;
        this.router = router;
        this.toastController = toastController;
        this.amenData = [];
    }
    AmenityInfoPage.prototype.ngOnInit = function () {
        this.amenName = history.state.amenName;
        this.amenCode = history.state.amenCode;
        this.propCode = history.state.pCode;
        this.unitCode = history.state.uCode;
        this.uType = history.state.uType;
        this.loadData(this.amenCode);
        console.log(localStorage);
    };
    AmenityInfoPage.prototype.openToast = function (msg) {
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
    AmenityInfoPage.prototype.openAmenityBookNow = function (amenName, amenCode, propCode, unitCode, uType, rate) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'check_hastenant',
                uType: localStorage.getItem('TYPE_DATA'),
                uCode: localStorage.getItem('UNIT_CODE'),
                propCode: localStorage.getItem("PROPERTY_CODE"),
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                if (data['hasTenant'] == "ActiveTenant") {
                    _this.openToast("<center>You have active tenant.</center>");
                }
                else {
                    if (data['siglo'] != "On") {
                        _this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info/amenity-book-now', { state: { amenName: amenName, amenCode: amenCode, propCode: propCode, unitCode: unitCode, uType: uType, rateperbooking: rate, start: _this.start } });
                    }
                    else {
                        _this.openToast("<center>This unit is managed by Siglo.</center>");
                    }
                }
                resolve(true);
                console.log(data);
            });
        });
    };
    AmenityInfoPage.prototype.loadData = function (amenCode) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'amenDetails',
                amenCode: amenCode,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.amenData.push(data['data']);
                _this.rate = data['data']['rateperbooking'];
                _this.start = data['slotTime'];
                resolve(true);
                console.log(data['data'], data['amenDaysData']);
            });
        });
    };
    AmenityInfoPage.ctorParameters = function () { return [
        { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    AmenityInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-amenity-info',
            template: __webpack_require__(/*! raw-loader!./amenity-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/amenity-info/amenity-info.page.html"),
            styles: [__webpack_require__(/*! ./amenity-info.page.scss */ "./src/app/amenity-info/amenity-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], AmenityInfoPage);
    return AmenityInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=amenity-info-amenity-info-module-es5.js.map