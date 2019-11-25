(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Azure-Connect</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n    <ion-card class=\"welcome-card\">\n        <div class=\"overlay\"></div>\n        <div class=\"inline-block\">\n            <div class=\"card-title\">Azure Urban Resort</div>\n            <div class=\"card-subtitle\">Residences</div>\n        </div>\n        \n    </ion-card>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n                <a class=\"btn_a\" (click)=\"openUnitDetailsInTabs()\">\n                    <ion-card color=\"white\" class=\"menucards nomargbot\">\n                        <ion-card-header>\n                            <img class=\"imgmenus\" src=\"assets/unit.png\">\n                            <ion-card-subtitle class=\"menutitles\">Unit Details</ion-card-subtitle>\n                        </ion-card-header>\n                    </ion-card>\n                </a>\n            </ion-col>\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n                <a class=\"btn_a\" (click)=\"openAmenitiesInTabs()\">\n                    <ion-card color=\"white\" class=\"menucards nomargbot\">\n                        <ion-card-header>\n                            <img class=\"imgmenus\" src=\"assets/amenities.png\">\n                            <ion-card-subtitle class=\"menutitles\">Amenities</ion-card-subtitle>\n                        </ion-card-header>\n                    </ion-card>\n                </a>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n                <a class=\"btn_a\" (click)=\"openNoticeInTabs()\">\n                    <ion-card color=\"white\" class=\"menucards\">\n                        <ion-card-header>\n                            <img class=\"imgmenus\" src=\"assets/notice.png\">\n                            <ion-card-subtitle class=\"menutitles\">Notice</ion-card-subtitle>\n                        </ion-card-header>\n                    </ion-card>\n                </a>\n            </ion-col>\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n                <a class=\"btn_a\" *ngIf=\"typeData=='Owner' && hasTenant=='ActiveTenant'\">\n                    <ion-card color=\"white\" class=\"menucards\">\n                        <ion-card-header>\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\n                        </ion-card-header>\n                    </ion-card>\n                </a>\n\n                <a class=\"btn_a\" *ngIf=\"typeData=='Owner' && hasTenant==''\" (click)=\"openVisitorsInTabs(unit_code, newCode)\">\n                    <ion-card color=\"white\" class=\"menucards\">\n                        <ion-card-header>\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\n                        </ion-card-header>\n                    </ion-card>\n                </a>\n\n                <a class=\"btn_a\" *ngIf=\"typeData=='Tenant' && hasTenant==''\" (click)=\"openVisitorsInTabs(unit_code, newCode)\">\n                    <ion-card color=\"white\" class=\"menucards\">\n                        <ion-card-header>\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\n                        </ion-card-header>\n                    </ion-card>\n                </a>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title class=\"title_header\">Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\"  *ngFor=\"let res of Data\">\n    <div class=\"banner-card\" *ngIf=\"uType == 'Tenant'\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" class=\"col_titles\">\n                    <div class=\"img_profile_border\">\n                        <div *ngIf=\"res.tUpload == ''\" class=\"img_profile\"></div>\n                        <div *ngIf=\"res.tUpload != ''\" class=\"img_profile\" [style.background-image]=\"'url(https://www.asi-ph.com/sandboxes/condominium/'+res.tUpload+')'\"></div>\n                    </div>\n                    <div class=\"box_details\">\n                        <h1 class=\"title_name\">{{Name}}</h1>\n                        <p class=\"title_address\">{{res.tAddress}}</p>\n\n                        <div class=\"number_details\">\n                            <ion-row>\n                                <ion-col size=\"4\">\n                                    <p class=\"t_small\">Units</p>\n                                    <p class=\"t_big\">{{uniCount}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p class=\"t_small\">Residents</p>\n                                    <p class=\"t_big\">{{countResi}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p class=\"t_small\">Parking</p>\n                                    <p class=\"t_big\">{{countPark}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n            \n        </ion-grid>\n    </div>\n\n    <div class=\"banner-card\" *ngIf=\"uType == 'Owner'\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" class=\"col_titles\">\n                    <div class=\"img_profile_border\">\n                        <div *ngIf=\"res.pUpload == ''\" class=\"img_profile\"></div>\n                        <div *ngIf=\"res.pUpload != ''\" class=\"img_profile\" [style.background-image]=\"'url(https://www.asi-ph.com/sandboxes/condominium/'+res.pUpload+')'\"></div>\n                    </div>\n                    <div class=\"box_details\">\n                        <h1 class=\"title_name\">{{Name}}</h1>\n                        <p class=\"title_address\">{{res.Address}}</p>\n\n                        <div class=\"number_details\">\n                            <ion-row>\n                                <ion-col size=\"4\">\n                                    <p class=\"t_small\">Units</p>\n                                    <p class=\"t_big\">{{uniCount}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p class=\"t_small\">Residents</p>\n                                    <p class=\"t_big\">{{countResi}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p class=\"t_small\">Parking</p>\n                                    <p class=\"t_big\">{{countPark}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <div class=\"banner_overlay\"></div>\n\n    <ion-grid class=\"grid_details\" *ngIf=\"uType == 'Tenant'\">\n        <ion-row class=\"profile-row\">\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">2nd Owner</p>\n                <p class=\"profile_type_name\">Duane Brick</p>\n            </ion-col> -->\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Email</p>\n                <p class=\"profile_type_name\">{{res.tEmailAddress}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Gender</p>\n                <p class=\"profile_type_name\">{{res.tGender}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Contact Number</p>\n                <p class=\"profile_type_name\">{{res.tPhoneNumber}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Possession</p>\n                <p class=\"profile_type_name\">{{res.tAgreementStart}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Occupation</p>\n                <p class=\"profile_type_name\">{{res.tOccupation}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Blood Group</p>\n                <p class=\"profile_type_name\">{{res.tBlood}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Date of Birth</p>\n                <p class=\"profile_type_name\">{{res.tDate}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Date of Anniversary</p>\n                <p class=\"profile_type_name\">{{Aniv}}</p>\n            </ion-col>\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Intercom Number</p>\n                <p class=\"profile_type_name\">1234</p>\n            </ion-col> -->\n            <ion-col size=\"12\" class=\"col-profile-details\" *ngIf=\"uType == 'Owner'\">\n                <p class=\"profile_type\">Nominee</p>\n                <p class=\"profile_type_name\">Hakdog</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Company</p>\n                <p class=\"profile_type_name\">{{res.tCompany}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"grid_details\" *ngIf=\"uType == 'Owner'\">\n        <ion-row class=\"profile-row\">\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">2nd Owner</p>\n                <p class=\"profile_type_name\">Duane Brick</p>\n            </ion-col> -->\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Email</p>\n                <p class=\"profile_type_name\">{{res.EmailAddress}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Gender</p>\n                <p class=\"profile_type_name\">{{res.pGender}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Contact Number</p>\n                <p class=\"profile_type_name\">{{res.Mobile}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Possession</p>\n                <p class=\"profile_type_name\">{{res.pMoveindate}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Occupation</p>\n                <p class=\"profile_type_name\">{{res.pOccupation}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Blood Group</p>\n                <p class=\"profile_type_name\">{{res.pBlood}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Date of Birth</p>\n                <p class=\"profile_type_name\">{{res.pDate}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Date of Anniversary</p>\n                <p class=\"profile_type_name\">{{Aniv}}</p>\n            </ion-col>\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Intercom Number</p>\n                <p class=\"profile_type_name\">1234</p>\n            </ion-col> -->\n            <ion-col size=\"12\" class=\"col-profile-details\" *ngIf=\"uType == 'Owner'\">\n                <p class=\"profile_type\">Nominee</p>\n                <p class=\"profile_type_name\">{{res.pName}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"col-profile-details\">\n                <p class=\"profile_type\">Company</p>\n                <p class=\"profile_type_name\">{{res.pCompany}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"title_header\">\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-list>\n    <ion-list-header>Today</ion-list-header>\n    <ion-item class=\"new_opened\" (click)=\"OpenVisitorListDetals()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\"><span class=\"subject_name\">Azure</span> approved your Visitor Request.</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n    <ion-item class=\"new_opened\" (click)=\"openRulesDetails()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\"><span class=\"subject_name\">Schedule for Smoke Emission</span> was added on your Notices.</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item (click)=\"openRulesDetails()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\"><span class=\"subject_name\">Tower Crown Cleaning</span> was added on your Notices.</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"openBookingDetails()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\">Reminder: <span class=\"subject_name\">Azure beach booking</span> is Today!</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"openBookingDetails()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\"><span class=\"subject_name\">Azure Beach Booking 01/02/2020</span> was added on your list.</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n  <ion-list-header>Yesterday</ion-list-header>\n    <ion-item (click)=\"OpenVisitorListDetals()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\"><span class=\"subject_name\">Azure</span> approved your Visitor Request.</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"openRulesDetails()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\"><span class=\"subject_name\">Schedule for Smoke Emission</span> was added on your Notices.</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item (click)=\"openRulesDetails()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\"><span class=\"subject_name\">Tower Crown Cleaning</span> was added on your Notices.</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"openBookingDetails()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\">Reminder: <span class=\"subject_name\">Azure beach booking</span> is Today!</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"openBookingDetails()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v_description\"><span class=\"subject_name\">Azure Beach Booking 01/02/2020</span> was added on your list.</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"12\">\n                <p class=\"v-date\">1 minute ago</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"notifications\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.card-background-page .welcome-card {\n  position: relative;\n  background-image: url(\"/assets/homebanner.jpg\");\n  text-align: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  margin: 0;\n  height: 30vh;\n  border-radius: 0;\n}\n.card-background-page .nomargbot {\n  margin-bottom: 0;\n}\n.card-background-page .imgmenus {\n  width: 80px;\n  margin: 0 auto;\n}\n.card-background-page .overlay {\n  width: 100vh;\n  background: -webkit-gradient(linear, left top, right top, from(#055ea3), to(#0dd8ff));\n  background: linear-gradient(to right, #055ea3, #0dd8ff);\n  opacity: 0.5;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  height: 30vh;\n  left: 0;\n  transition: all ease 0.4s;\n  -o-transition: all ease 0.4s;\n  -ms-transition: all ease 0.4s;\n  -moz-transition: all ease 0.4s;\n  -webkit-transition: all ease 0.4s;\n}\n.card-background-page .inline-block {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n  height: 30vh;\n  width: 100vh;\n  line-height: 1.5em;\n}\n.card-background-page .card-title {\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  margin-top: 10px;\n}\n.card-background-page .menutitles {\n  text-align: center;\n  margin-top: 7px;\n}\n.card-background-page .btn_a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEFwcEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0Y7QURDQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDRjtBRENBO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NGO0FEQ0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURDQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDRjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEWkU7RUFDRSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDZUo7QURiRTtFQUNFLGdCQUFBO0FDZUo7QURiRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDZUo7QURaRTtFQUNFLFlBQUE7RUFDQSxxRkFBQTtFQUFBLHVEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUNjSjtBRFpFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2NKO0FEWkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2NKO0FEWEU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2FKO0FEVkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNZSjtBRFZFO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHFCQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cblxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxuXG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIC53ZWxjb21lLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2hvbWViYW5uZXIuanBnXCIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLm5vbWFyZ2JvdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAuaW1nbWVudXMge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLm92ZXJsYXkge1xuICAgIHdpZHRoOiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNTVlYTMsICMwZGQ4ZmYpO1xuICAgIG9wYWNpdHk6IDAuNTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMzB2aDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICB9XG4gIC5pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiAxMDB2aDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cbiAgLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLm1lbnV0aXRsZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gIH1cbiAgLmJ0bl9hIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLy8gLmJ0bl9hOmhvdmVyIHtcbiAgLy8gICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8vIH1cbiAgXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLndlbGNvbWUtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9ob21lYmFubmVyLmpwZ1wiKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubm9tYXJnYm90IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW1nbWVudXMge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm92ZXJsYXkge1xuICB3aWR0aDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1NWVhMywgIzBkZDhmZik7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMzB2aDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubWVudXRpdGxlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5idG5fYSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");




let Tab1Page = class Tab1Page {
    constructor(postPvd, router, actRoute) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
    }
    ngOnInit() {
        console.log(localStorage);
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.typeData = localStorage.getItem("TYPE_DATA");
        this.property_code = localStorage.getItem("PROPERTY_CODE");
        this.hasTenant = localStorage.getItem("HAS_TENANT");
        this.newCode = localStorage.getItem("NEW_CODE");
        this.fullname = localStorage.getItem("FULLNAME");
        this.TUN = localStorage.getItem("TUN");
    }
    ionViewWillEnter() {
        console.log(localStorage);
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.typeData = localStorage.getItem("TYPE_DATA");
        this.property_code = localStorage.getItem("PROPERTY_CODE");
        this.hasTenant = localStorage.getItem("HAS_TENANT");
        this.newCode = localStorage.getItem("NEW_CODE");
        this.fullname = localStorage.getItem("FULLNAME");
        this.TUN = localStorage.getItem("TUN");
    }
    openUnitDetailsInTabs() {
        // console.log(unit_code, property_code, typeData);
        // this.router.navigate(['/unit-details/'], { state: { uCode: unit_code, pCode: property_code, uType: typeData}});
        this.router.navigateByUrl('/tabs/tab1/unit-details');
    }
    openVisitorsInTabs() {
        // this.router.navigateByUrl('/tabs/tab1/visitors-details', { state: { uCode:unit_code, newCode: newCode, fullname: this.fullname, TUN: this.TUN}});
        this.router.navigateByUrl('/tabs/tab1/visitors-details');
    }
    openNoticeInTabs() {
        this.router.navigateByUrl('/tabs/tab1/notice-main-list', { state: { uCode: this.unit_code, pCode: this.property_code, uType: this.typeData } });
    }
    openAmenitiesInTabs() {
        this.router.navigateByUrl('tabs/tab1/amenities-details');
    }
};
Tab1Page.ctorParameters = () => [
    { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], Tab1Page);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"Assistant_bold\";\n}\np,\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.banner-card {\n  margin: 0;\n  background-image: url(\"/assets/unitbg2.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 32vh;\n  border-radius: 0;\n}\n.img_profile_border {\n  top: 70px;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  z-index: 10;\n}\n.img_profile {\n  width: 100px;\n  height: 100px;\n  background-image: url(\"/assets/girl.jpeg\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  z-index: 8;\n  border-radius: 50%;\n  margin: 0 auto;\n  box-shadow: 1px 14px 25px #a2b7cf;\n}\n.box_details {\n  width: 100%;\n  background: #fcfefff7;\n  border-radius: 10px;\n  margin-top: 17vh;\n  padding: 15px;\n  padding-top: 50px;\n  box-shadow: 1px 10px 30px #91b4db;\n  position: relative;\n  z-index: 9;\n}\n.title_name {\n  font-size: 20px;\n  text-align: center;\n  color: #383838;\n  margin-bottom: 5px;\n}\n.title_address {\n  margin: 0;\n  text-align: center;\n  color: #0967d3;\n  font-size: 14px;\n  font-family: \"Assistant_semibold\";\n}\n.col_titles {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.number_details {\n  margin-top: 23px;\n}\n.t_small {\n  margin: 0;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n  color: #808080;\n  text-align: center;\n}\n.t_big {\n  margin: 0;\n  font-size: 23px;\n  text-align: center;\n  color: #5e5e5e;\n}\n.banner_overlay {\n  width: 100%;\n  height: 32vh;\n  background: linear-gradient(45deg, #0057b9d1, #05e2f266);\n  position: absolute;\n  top: 0;\n  z-index: 3;\n}\n.profile-row {\n  margin-bottom: 20px;\n}\n.col-profile-details {\n  padding-left: 13px;\n  border-bottom: 1px solid #d4d4d4;\n  padding-bottom: 10px;\n}\n.profile_type {\n  color: #207fee;\n  font-size: 12.9px;\n  margin-bottom: 7px;\n  font-weight: 500;\n  margin-top: 10px;\n  font-family: \"Assistant_semibold\";\n}\n.profile_type_name {\n  margin: 0;\n  color: #4c4c4c;\n  font-weight: 400;\n  font-size: 15px;\n}\n.grid_details {\n  margin-top: 20vh;\n  padding: 10px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEFwcEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENFO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0U7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENFOzs7O0VBR0ksNkJBQUE7QUNFTjtBRERFOztFQUNhLDRCQUFBO0FDS2Y7QURIRTtFQUFXLDRCQUFBO0FDT2I7QURORTtFQUFhLDhCQUFBO0FDVWY7QURURTtFQUFnQixpQ0FBQTtBQ2FsQjtBRFpFO0VBQVksNkJBQUE7QUNnQmQ7QURmRTtFQUFpQixrQ0FBQTtBQ21CbkI7QURmQTtFQUNJLGtCQUFBO0FDa0JKO0FEaEJBO0VBQ0ksU0FBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDbUJKO0FEakJBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDb0JKO0FEbEJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQ3FCSjtBRG5CQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3NCSjtBRHBCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3VCSjtBRHJCQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUN3Qko7QUR0QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDeUJKO0FEdkJBO0VBQ0ksZ0JBQUE7QUMwQko7QUR4QkE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMyQko7QUR6QkE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQzRCSjtBRDFCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDNkJKO0FEM0JBO0VBQWMsbUJBQUE7QUMrQmQ7QUQ5QkE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNpQ0o7QUQvQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ2tDSjtBRGhDQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbUNKO0FEakNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ29DSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xuICB9XG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XG4gIHAsXG4gIGlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cbiAgXG4gIC5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG4gIC5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxuICAuZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cbiAgLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxuICAuZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxuXG5cblxuLnRpdGxlX2hlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhbm5lci1jYXJkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3VuaXRiZzIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAzMnZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uaW1nX3Byb2ZpbGVfYm9yZGVyIHtcbiAgICB0b3A6IDcwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA7XG59XG4uaW1nX3Byb2ZpbGUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9naXJsLmpwZWcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB6LWluZGV4OiA4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3gtc2hhZG93OiAxcHggMTRweCAyNXB4ICNhMmI3Y2Y7XG59XG4uYm94X2RldGFpbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmY2ZlZmZmNztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDE3dmg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMTBweCAzMHB4ICM5MWI0ZGI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk7XG59XG4udGl0bGVfbmFtZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzM4MzgzODtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udGl0bGVfYWRkcmVzcyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzA5NjdkMztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xufVxuLmNvbF90aXRsZXMge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLm51bWJlcl9kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xufVxuLnRfc21hbGwge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRfYmlnIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzVlNWU1ZTtcbn1cbi5iYW5uZXJfb3ZlcmxheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwNTdiOWQxLCAjMDVlMmYyNjYpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMztcbn1cbi5wcm9maWxlLXJvdyB7bWFyZ2luLWJvdHRvbTogMjBweDt9XG4uY29sLXByb2ZpbGUtZGV0YWlscyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnByb2ZpbGVfdHlwZSB7XG4gICAgY29sb3I6ICMyMDdmZWU7XG4gICAgZm9udC1zaXplOiAxMi45cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XG59XG4ucHJvZmlsZV90eXBlX25hbWUge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzRjNGM0YztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5ncmlkX2RldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaDEsXG5oMixcbmgzLFxuaDQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG5wLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLnRpdGxlX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhbm5lci1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3VuaXRiZzIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDMydmg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5pbWdfcHJvZmlsZV9ib3JkZXIge1xuICB0b3A6IDcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uaW1nX3Byb2ZpbGUge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvZ2lybC5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiA4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMTRweCAyNXB4ICNhMmI3Y2Y7XG59XG5cbi5ib3hfZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmNmZWZmZjc7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE3dmg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAzMHB4ICM5MWI0ZGI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbn1cblxuLnRpdGxlX25hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzODM4Mzg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRpdGxlX2FkZHJlc3Mge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwOTY3ZDM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5jb2xfdGl0bGVzIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubnVtYmVyX2RldGFpbHMge1xuICBtYXJnaW4tdG9wOiAyM3B4O1xufVxuXG4udF9zbWFsbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRfYmlnIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1ZTVlNWU7XG59XG5cbi5iYW5uZXJfb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMydmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwNTdiOWQxLCAjMDVlMmYyNjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMztcbn1cblxuLnByb2ZpbGUtcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbC1wcm9maWxlLWRldGFpbHMge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2ZpbGVfdHlwZSB7XG4gIGNvbG9yOiAjMjA3ZmVlO1xuICBmb250LXNpemU6IDEyLjlweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLnByb2ZpbGVfdHlwZV9uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZ3JpZF9kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");



let Tab2Page = class Tab2Page {
    constructor(postPvd) {
        this.postPvd = postPvd;
        this.Data = [];
    }
    ngOnInit() {
        this.uType = sessionStorage.getItem("TYPE_DATA");
        this.uCode = sessionStorage.getItem("UNIT_CODE");
        this.Email = sessionStorage.getItem("EMAIL");
        this.Name = sessionStorage.getItem("FULLNAME");
        console.log(sessionStorage);
    }
    ionViewWillEnter() {
        this.loadData(this.uType, this.uCode, this.Email);
    }
    loadData(uType, uCode, Email) {
        this.Data = [];
        return new Promise(resolve => {
            let body = {
                action: 'UserDetails',
                uType: uType,
                uCode: uCode,
                Email: Email,
                propCode: sessionStorage.getItem("PROPERTY_CODE"),
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                this.Data.push(data['data']);
                this.Aniv = data['aniv'];
                this.uniCount = data['uniCount'];
                this.countResi = data['countResi'];
                this.countPark = data['countPark'];
                resolve(true);
                console.log(data);
            });
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]])
], Tab2Page);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.nopad {\n  padding: 0;\n}\n.card-background-page ion-list {\n  margin-bottom: 20px;\n}\n.card-background-page ion-list-header {\n  color: #5f5f5f;\n  font-weight: 600;\n  min-height: 30px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-family: \"Assistant_bold\";\n}\n.card-background-page .v_description {\n  font-size: 14px;\n  color: #2f2f2f;\n  text-align: justify;\n}\n.card-background-page .v-date {\n  text-align: left;\n  color: #5d5d5d;\n  font-size: 12px;\n  margin-right: 50px;\n}\n.card-background-page ion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.card-background-page .subject_name {\n  font-family: \"Assistant_bold\";\n}\n.card-background-page .new_opened {\n  --background: #deeeff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEFwcEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWdCLDRCQUFBO0FDRWhCO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURkQTtFQUNJLGtCQUFBO0FDaUJKO0FEZkE7RUFDSSxVQUFBO0FDa0JKO0FEZEk7RUFDSSxtQkFBQTtBQ2lCUjtBRGZJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ2lCUjtBRGZJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2lCUjtBRGZJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDaUJSO0FEZkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNpQlI7QURmSTtFQUNJLDZCQUFBO0FDaUJSO0FEZkk7RUFDSSxxQkFBQTtBQ2lCUiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5wLCBpb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG5cbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cblxuLnRpdGxlX2hlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5vcGFkIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XG4gICAgfVxuICAgIC52X2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gICAgLnYtZGF0ZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjNWQ1ZDVkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5zdWJqZWN0X25hbWUge1xuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICB9XG4gICAgLm5ld19vcGVuZWQge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNkZWVlZmY7XG4gICAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxucCwgaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLnRpdGxlX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vcGFkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tbGlzdC1oZWFkZXIge1xuICBjb2xvcjogIzVmNWY1ZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52X2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzJmMmYyZjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudi1kYXRlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM1ZDVkNWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5zdWJqZWN0X25hbWUge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5uZXdfb3BlbmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZGVlZWZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let Tab3Page = class Tab3Page {
    constructor(router) {
        this.router = router;
    }
    OpenVisitorListDetals() {
        this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details');
    }
    openBookingDetails() {
        this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list/amenity-booking-details');
    }
    openRulesDetails() {
        this.router.navigateByUrl('/tabs/tab1/notice-main-list/notice-rules-list/notice-rules-details');
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Tab3Page);



/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    // HOME
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts")).then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab1/unit-details',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | unit-details-unit-details-module */ "unit-details-unit-details-module").then(__webpack_require__.bind(null, /*! ../unit-details/unit-details.module */ "./src/app/unit-details/unit-details.module.ts")).then(m => m.UnitDetailsPageModule)
                    }
                ]
            },
            {
                path: 'tab1/unit-details/tenant-details/:tenantCode/:pUnitRoom',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | tenant-details-tenant-details-module */ "tenant-details-tenant-details-module").then(__webpack_require__.bind(null, /*! ../tenant-details/tenant-details.module */ "./src/app/tenant-details/tenant-details.module.ts")).then(m => m.TenantDetailsPageModule)
                    }
                ]
            },
            {
                path: 'tab1/unit-details/resident-details-list/:unit_code/:condition/:pUnitRoom',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | resident-details-list-resident-details-list-module */ "resident-details-list-resident-details-list-module").then(__webpack_require__.bind(null, /*! ../resident-details-list/resident-details-list.module */ "./src/app/resident-details-list/resident-details-list.module.ts")).then(m => m.ResidentDetailsListPageModule)
                    }
                ]
            },
            {
                path: 'tab1/unit-details/resident-details-list/resident-details-individual',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | resident-details-individual-resident-details-individual-module */ "resident-details-individual-resident-details-individual-module").then(__webpack_require__.bind(null, /*! ../resident-details-individual/resident-details-individual.module */ "./src/app/resident-details-individual/resident-details-individual.module.ts")).then(m => m.ResidentDetailsIndividualPageModule)
                    }
                ]
            },
            {
                path: 'tab1/unit-details/old-tenant-details/:unit_code',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | old-tenant-details-old-tenant-details-module */ "old-tenant-details-old-tenant-details-module").then(__webpack_require__.bind(null, /*! ../old-tenant-details/old-tenant-details.module */ "./src/app/old-tenant-details/old-tenant-details.module.ts")).then(m => m.OldTenantDetailsPageModule)
                    }
                ]
            },
            {
                path: 'tab1/unit-details/parking-details/:property_code/:floorNo/:roomNo/:propertyBuilding',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | parking-details-parking-details-module */ "parking-details-parking-details-module").then(__webpack_require__.bind(null, /*! ../parking-details/parking-details.module */ "./src/app/parking-details/parking-details.module.ts")).then(m => m.ParkingDetailsPageModule)
                    }
                ]
            },
            // VISITOR MODULE
            {
                path: 'tab1/visitors-details',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | visitors-details-visitors-details-module */ "visitors-details-visitors-details-module").then(__webpack_require__.bind(null, /*! ../visitors-details/visitors-details.module */ "./src/app/visitors-details/visitors-details.module.ts")).then(m => m.VisitorsDetailsPageModule)
                    }
                ]
            },
            {
                path: 'tab1/visitors-details/visitor-list-details',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | visitor-list-details-visitor-list-details-module */[__webpack_require__.e("common"), __webpack_require__.e("visitor-list-details-visitor-list-details-module")]).then(__webpack_require__.bind(null, /*! ../visitor-list-details/visitor-list-details.module */ "./src/app/visitor-list-details/visitor-list-details.module.ts")).then(m => m.VisitorListDetailsPageModule)
                    }
                ]
            },
            {
                path: 'tab1/visitors-details/visitor-add-request',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | visitor-add-request-visitor-add-request-module */[__webpack_require__.e("common"), __webpack_require__.e("visitor-add-request-visitor-add-request-module")]).then(__webpack_require__.bind(null, /*! ../visitor-add-request/visitor-add-request.module */ "./src/app/visitor-add-request/visitor-add-request.module.ts")).then(m => m.VisitorAddRequestPageModule)
                    }
                ]
            },
            // NOTICES MODULE
            {
                path: 'tab1/notice-main-list',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | notice-main-list-notice-main-list-module */ "notice-main-list-notice-main-list-module").then(__webpack_require__.bind(null, /*! ../notice-main-list/notice-main-list.module */ "./src/app/notice-main-list/notice-main-list.module.ts")).then(m => m.NoticeMainListPageModule)
                    }
                ]
            },
            {
                path: 'tab1/notice-main-list/notice-rules-list',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | notice-rules-list-notice-rules-list-module */ "notice-rules-list-notice-rules-list-module").then(__webpack_require__.bind(null, /*! ../notice-rules-list/notice-rules-list.module */ "./src/app/notice-rules-list/notice-rules-list.module.ts")).then(m => m.NoticeRulesListPageModule)
                    }
                ]
            },
            {
                path: 'tab1/notice-main-list/notice-rules-list/notice-rules-details',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | notice-rules-details-notice-rules-details-module */ "notice-rules-details-notice-rules-details-module").then(__webpack_require__.bind(null, /*! ../notice-rules-details/notice-rules-details.module */ "./src/app/notice-rules-details/notice-rules-details.module.ts")).then(m => m.NoticeRulesDetailsPageModule)
                    }
                ]
            },
            // AMENITIES MODULE
            {
                path: 'tab1/amenities-details',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | amenities-details-amenities-details-module */ "amenities-details-amenities-details-module").then(__webpack_require__.bind(null, /*! ../amenities-details/amenities-details.module */ "./src/app/amenities-details/amenities-details.module.ts")).then(m => m.AmenitiesDetailsPageModule)
                    }
                ]
            },
            {
                path: 'tab1/amenities-details/amenity-info',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | amenity-info-amenity-info-module */ "amenity-info-amenity-info-module").then(__webpack_require__.bind(null, /*! ../amenity-info/amenity-info.module */ "./src/app/amenity-info/amenity-info.module.ts")).then(m => m.AmenityInfoPageModule)
                    }
                ]
            },
            {
                path: 'tab1/amenities-details/amenity-info/amenity-book-now',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | amenity-book-now-amenity-book-now-module */ "amenity-book-now-amenity-book-now-module").then(__webpack_require__.bind(null, /*! ../amenity-book-now/amenity-book-now.module */ "./src/app/amenity-book-now/amenity-book-now.module.ts")).then(m => m.AmenityBookNowPageModule)
                    }
                ]
            },
            {
                path: 'tab1/amenities-details/amenity-booking-list',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | amenity-booking-list-amenity-booking-list-module */ "amenity-booking-list-amenity-booking-list-module").then(__webpack_require__.bind(null, /*! ../amenity-booking-list/amenity-booking-list.module */ "./src/app/amenity-booking-list/amenity-booking-list.module.ts")).then(m => m.AmenityBookingListPageModule)
                    }
                ]
            },
            {
                path: 'tab1/amenities-details/amenity-booking-list/amenity-booking-details',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | amenity-booking-details-amenity-booking-details-module */ "amenity-booking-details-amenity-booking-details-module").then(__webpack_require__.bind(null, /*! ../amenity-booking-details/amenity-booking-details.module */ "./src/app/amenity-booking-details/amenity-booking-details.module.ts")).then(m => m.AmenityBookingDetailsPageModule)
                    }
                ]
            },
            // PROFILE
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts")).then(m => m.Tab2PageModule)
                    }
                ]
            },
            // NOTIFICATIONS
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(m => m.Tab3PageModule)
                    }
                ]
            },
            // MENU SIDE BAR
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../tab4/tab4.module */ "./src/app/tab4/tab4.module.ts")).then(m => m.Tab4PageModule)
                    }
                ]
            },
            {
                path: 'tab4/change-password',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | change-password-change-password-module */ "change-password-change-password-module").then(__webpack_require__.bind(null, /*! ../change-password/change-password.module */ "./src/app/change-password/change-password.module.ts")).then(m => m.ChangePasswordPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _tab1_tab1_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts");
/* harmony import */ var _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts");
/* harmony import */ var _tab3_tab3_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts");
/* harmony import */ var _tab4_tab4_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab4/tab4.module */ "./src/app/tab4/tab4.module.ts");











let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab1_tab1_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageModule"],
            _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_8__["Tab2PageModule"],
            _tab3_tab3_module__WEBPACK_IMPORTED_MODULE_9__["Tab3PageModule"],
            _tab4_tab4_module__WEBPACK_IMPORTED_MODULE_10__["Tab4PageModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map