(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-title>Azure-Connect</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n    <ion-card class=\"welcome-card\">\r\n        <div class=\"overlay\"></div>\r\n        <div class=\"inline-block\">\r\n            <div class=\"card-title\">Azure Urban Resort</div>\r\n            <div class=\"card-subtitle\">Residences</div>\r\n        </div>\r\n        \r\n    </ion-card>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                <a class=\"btn_a\" (click)=\"openUnitDetailsInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards nomargbot\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/unit.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Unit Details</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n            </ion-col>\r\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                <a class=\"btn_a\" (click)=\"openAmenitiesInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards nomargbot\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/amenities.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Amenities</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                <a class=\"btn_a\" (click)=\"openNoticeInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/notice.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Notice</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n            </ion-col>\r\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                <a class=\"btn_a\" *ngIf=\"typeData=='Owner' && hasTenant=='ActiveTenant'\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n\r\n                <a class=\"btn_a\" *ngIf=\"typeData=='Owner' && hasTenant==''\" (click)=\"openVisitorsInTabs(unit_code, newCode)\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n\r\n                <a class=\"btn_a\" *ngIf=\"typeData=='Tenant' && hasTenant==''\" (click)=\"openVisitorsInTabs(unit_code, newCode)\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-title class=\"title_header\">Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\"  *ngFor=\"let res of Data\">\r\n    <div class=\"banner-card\" *ngIf=\"uType == 'Tenant'\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"12\" class=\"col_titles\">\r\n                    <div class=\"img_profile_border\">\r\n                        <div *ngIf=\"res.tUpload == ''\" class=\"img_profile\"></div>\r\n                        <div *ngIf=\"res.tUpload != ''\" class=\"img_profile\" [style.background-image]=\"'url(https://www.asi-ph.com/sandboxes/condominium/'+res.tUpload+')'\"></div>\r\n                    </div>\r\n                    <div class=\"box_details\">\r\n                        <h1 class=\"title_name\">{{Name}}</h1>\r\n                        <p class=\"title_address\">{{res.tAddress}}</p>\r\n\r\n                        <div class=\"number_details\">\r\n                            <ion-row>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Units</p>\r\n                                    <p class=\"t_big\">{{uniCount}}</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Residents</p>\r\n                                    <p class=\"t_big\">{{countResi}}</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Parking</p>\r\n                                    <p class=\"t_big\">{{countPark}}</p>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n            \r\n        </ion-grid>\r\n    </div>\r\n\r\n    <div class=\"banner-card\" *ngIf=\"uType == 'Owner'\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"12\" class=\"col_titles\">\r\n                    <div class=\"img_profile_border\">\r\n                        <div *ngIf=\"res.pUpload == ''\" class=\"img_profile\"></div>\r\n                        <div *ngIf=\"res.pUpload != ''\" class=\"img_profile\" [style.background-image]=\"'url(https://www.asi-ph.com/sandboxes/condominium/'+res.pUpload+')'\"></div>\r\n                    </div>\r\n                    <div class=\"box_details\">\r\n                        <h1 class=\"title_name\">{{Name}}</h1>\r\n                        <p class=\"title_address\">{{res.Address}}</p>\r\n\r\n                        <div class=\"number_details\">\r\n                            <ion-row>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Units</p>\r\n                                    <p class=\"t_big\">{{uniCount}}</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Residents</p>\r\n                                    <p class=\"t_big\">{{countResi}}</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Parking</p>\r\n                                    <p class=\"t_big\">{{countPark}}</p>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n    <div class=\"banner_overlay\"></div>\r\n\r\n    <ion-grid class=\"grid_details\" *ngIf=\"uType == 'Tenant'\">\r\n        <ion-row class=\"profile-row\">\r\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">2nd Owner</p>\r\n                <p class=\"profile_type_name\">Duane Brick</p>\r\n            </ion-col> -->\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Email</p>\r\n                <p class=\"profile_type_name\">{{res.tEmailAddress}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Gender</p>\r\n                <p class=\"profile_type_name\">{{res.tGender}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Contact Number</p>\r\n                <p class=\"profile_type_name\">{{res.tPhoneNumber}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Possession</p>\r\n                <p class=\"profile_type_name\">{{res.tAgreementStart}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Occupation</p>\r\n                <p class=\"profile_type_name\">{{res.tOccupation}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Blood Group</p>\r\n                <p class=\"profile_type_name\">{{res.tBlood}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Date of Birth</p>\r\n                <p class=\"profile_type_name\">{{res.tDate}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Date of Anniversary</p>\r\n                <p class=\"profile_type_name\">{{Aniv}}</p>\r\n            </ion-col>\r\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Intercom Number</p>\r\n                <p class=\"profile_type_name\">1234</p>\r\n            </ion-col> -->\r\n            <ion-col size=\"12\" class=\"col-profile-details\" *ngIf=\"uType == 'Owner'\">\r\n                <p class=\"profile_type\">Nominee</p>\r\n                <p class=\"profile_type_name\">Hakdog</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Company</p>\r\n                <p class=\"profile_type_name\">{{res.tCompany}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid class=\"grid_details\" *ngIf=\"uType == 'Owner'\">\r\n        <ion-row class=\"profile-row\">\r\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">2nd Owner</p>\r\n                <p class=\"profile_type_name\">Duane Brick</p>\r\n            </ion-col> -->\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Email</p>\r\n                <p class=\"profile_type_name\">{{res.EmailAddress}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Gender</p>\r\n                <p class=\"profile_type_name\">{{res.pGender}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Contact Number</p>\r\n                <p class=\"profile_type_name\">{{res.Mobile}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Possession</p>\r\n                <p class=\"profile_type_name\">{{res.pMoveindate}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Occupation</p>\r\n                <p class=\"profile_type_name\">{{res.pOccupation}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Blood Group</p>\r\n                <p class=\"profile_type_name\">{{res.pBlood}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Date of Birth</p>\r\n                <p class=\"profile_type_name\">{{res.pDate}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Date of Anniversary</p>\r\n                <p class=\"profile_type_name\">{{Aniv}}</p>\r\n            </ion-col>\r\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Intercom Number</p>\r\n                <p class=\"profile_type_name\">1234</p>\r\n            </ion-col> -->\r\n            <ion-col size=\"12\" class=\"col-profile-details\" *ngIf=\"uType == 'Owner'\">\r\n                <p class=\"profile_type\">Nominee</p>\r\n                <p class=\"profile_type_name\">{{res.pName}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Company</p>\r\n                <p class=\"profile_type_name\">{{res.pCompany}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"title_header\">\r\n      Notifications\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n  <ion-list>\r\n    <ion-list-header>Today</ion-list-header>\r\n    <ion-item class=\"new_opened\" (click)=\"OpenVisitorListDetals()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Azure</span> approved your Visitor Request.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"new_opened\" (click)=\"openRulesDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Schedule for Smoke Emission</span> was added on your Notices.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item (click)=\"openRulesDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Tower Crown Cleaning</span> was added on your Notices.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"openBookingDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\">Reminder: <span class=\"subject_name\">Azure beach booking</span> is Today!</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"openBookingDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Azure Beach Booking 01/02/2020</span> was added on your list.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n  <ion-list-header>Yesterday</ion-list-header>\r\n    <ion-item (click)=\"OpenVisitorListDetals()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Azure</span> approved your Visitor Request.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"openRulesDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Schedule for Smoke Emission</span> was added on your Notices.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item (click)=\"openRulesDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Tower Crown Cleaning</span> was added on your Notices.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"openBookingDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\">Reminder: <span class=\"subject_name\">Azure beach booking</span> is Today!</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"openBookingDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Azure Beach Booking 01/02/2020</span> was added on your list.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n  \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon name=\"notifications\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab4\">\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.card-background-page .welcome-card {\n  position: relative;\n  background-image: url(\"/assets/homebanner.jpg\");\n  text-align: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  margin: 0;\n  height: 30vh;\n  border-radius: 0;\n}\n.card-background-page .nomargbot {\n  margin-bottom: 0;\n}\n.card-background-page .imgmenus {\n  width: 80px;\n  margin: 0 auto;\n}\n.card-background-page .overlay {\n  width: 100vh;\n  background: -webkit-gradient(linear, left top, right top, from(#055ea3), to(#0dd8ff));\n  background: linear-gradient(to right, #055ea3, #0dd8ff);\n  opacity: 0.5;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  height: 30vh;\n  left: 0;\n  transition: all ease 0.4s;\n  -o-transition: all ease 0.4s;\n  -ms-transition: all ease 0.4s;\n  -moz-transition: all ease 0.4s;\n  -webkit-transition: all ease 0.4s;\n}\n.card-background-page .inline-block {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n  height: 30vh;\n  width: 100vh;\n  line-height: 1.5em;\n}\n.card-background-page .card-title {\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  margin-top: 10px;\n}\n.card-background-page .menutitles {\n  text-align: center;\n  margin-top: 7px;\n}\n.card-background-page .btn_a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEF6dXJlQWNjZXNzXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NGO0FEQ0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0Y7QURDQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDRjtBRENBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FEQ0E7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0Y7QURDQTtFQUFhLDRCQUFBO0FDRWI7QURBQTtFQUFXLDRCQUFBO0FDSVg7QURIQTtFQUFhLDhCQUFBO0FDT2I7QUROQTtFQUFnQixpQ0FBQTtBQ1VoQjtBRFRBO0VBQVksNkJBQUE7QUNhWjtBRFpBO0VBQWlCLGtDQUFBO0FDZ0JqQjtBRFpFO0VBQ0Usa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2VKO0FEYkU7RUFDRSxnQkFBQTtBQ2VKO0FEYkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ2VKO0FEWkU7RUFDRSxZQUFBO0VBQ0EscUZBQUE7RUFBQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDY0o7QURaRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNjSjtBRFpFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNjSjtBRFhFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFZFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWUo7QURWRTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxxQkFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxuaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG5cclxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcblxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuICAud2VsY29tZS1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaG9tZWJhbm5lci5qcGdcIik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICAubm9tYXJnYm90IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5pbWdtZW51cyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDU1ZWEzLCAjMGRkOGZmKTtcclxuICAgIG9wYWNpdHk6IDAuNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XHJcbiAgfVxyXG4gIC5pbmxpbmUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZoO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIH1cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuMGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudXRpdGxlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgfVxyXG4gIC5idG5fYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLy8gLmJ0bl9hOmhvdmVyIHtcclxuICAvLyAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gIC8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8vIH1cclxuICBcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC53ZWxjb21lLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaG9tZWJhbm5lci5qcGdcIik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm5vbWFyZ2JvdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZ21lbnVzIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNTVlYTMsICMwZGQ4ZmYpO1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDMwdmg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMzB2aDtcbiAgd2lkdGg6IDEwMHZoO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm1lbnV0aXRsZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYnRuX2Ege1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"Assistant_bold\";\n}\np,\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.banner-card {\n  margin: 0;\n  background-image: url(\"/assets/unitbg2.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 32vh;\n  border-radius: 0;\n}\n.img_profile_border {\n  top: 70px;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  z-index: 10;\n}\n.img_profile {\n  width: 100px;\n  height: 100px;\n  background-image: url(\"/assets/girl.jpeg\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  z-index: 8;\n  border-radius: 50%;\n  margin: 0 auto;\n  box-shadow: 1px 14px 25px #a2b7cf;\n}\n.box_details {\n  width: 100%;\n  background: #fcfefff7;\n  border-radius: 10px;\n  margin-top: 17vh;\n  padding: 15px;\n  padding-top: 50px;\n  box-shadow: 1px 10px 30px #91b4db;\n  position: relative;\n  z-index: 9;\n}\n.title_name {\n  font-size: 20px;\n  text-align: center;\n  color: #383838;\n  margin-bottom: 5px;\n}\n.title_address {\n  margin: 0;\n  text-align: center;\n  color: #0967d3;\n  font-size: 14px;\n  font-family: \"Assistant_semibold\";\n}\n.col_titles {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.number_details {\n  margin-top: 23px;\n}\n.t_small {\n  margin: 0;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n  color: #808080;\n  text-align: center;\n}\n.t_big {\n  margin: 0;\n  font-size: 23px;\n  text-align: center;\n  color: #5e5e5e;\n}\n.banner_overlay {\n  width: 100%;\n  height: 32vh;\n  background: linear-gradient(45deg, #0057b9d1, #05e2f266);\n  position: absolute;\n  top: 0;\n  z-index: 3;\n}\n.profile-row {\n  margin-bottom: 20px;\n}\n.col-profile-details {\n  padding-left: 13px;\n  border-bottom: 1px solid #d4d4d4;\n  padding-bottom: 10px;\n}\n.profile_type {\n  color: #207fee;\n  font-size: 12.9px;\n  margin-bottom: 7px;\n  font-weight: 500;\n  margin-top: 10px;\n  font-family: \"Assistant_semibold\";\n}\n.profile_type_name {\n  margin: 0;\n  color: #4c4c4c;\n  font-weight: 400;\n  font-size: 15px;\n}\n.grid_details {\n  margin-top: 20vh;\n  padding: 10px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEF6dXJlQWNjZXNzXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXHRhYjJcXHRhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDRTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0U7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDRTs7OztFQUdJLDZCQUFBO0FDRU47QURERTs7RUFDYSw0QkFBQTtBQ0tmO0FESEU7RUFBVyw0QkFBQTtBQ09iO0FETkU7RUFBYSw4QkFBQTtBQ1VmO0FEVEU7RUFBZ0IsaUNBQUE7QUNhbEI7QURaRTtFQUFZLDZCQUFBO0FDZ0JkO0FEZkU7RUFBaUIsa0NBQUE7QUNtQm5CO0FEZkE7RUFDSSxrQkFBQTtBQ2tCSjtBRGhCQTtFQUNJLFNBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ21CSjtBRGpCQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ29CSjtBRGxCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUNxQko7QURuQkE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNzQko7QURwQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUN1Qko7QURyQkE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDd0JKO0FEdEJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ3lCSjtBRHZCQTtFQUNJLGdCQUFBO0FDMEJKO0FEeEJBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDMkJKO0FEekJBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUM0Qko7QUQxQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQzZCSjtBRDNCQTtFQUFjLG1CQUFBO0FDK0JkO0FEOUJBO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDaUNKO0FEL0JBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNrQ0o7QURoQ0E7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ21DSjtBRGpDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNvQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG4gIH1cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG4gIH1cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG4gIH1cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxuICB9XHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuICBwLFxyXG4gIGlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuICBcclxuICAuZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG4gIC5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4gIC5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4gIC5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuICAuZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuXHJcblxyXG4udGl0bGVfaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmFubmVyLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3VuaXRiZzIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDMydmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5pbWdfcHJvZmlsZV9ib3JkZXIge1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLmltZ19wcm9maWxlIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZ2lybC5qcGVnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAxcHggMTRweCAyNXB4ICNhMmI3Y2Y7XHJcbn1cclxuLmJveF9kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjZmVmZmY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE3dmg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMTBweCAzMHB4ICM5MWI0ZGI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi50aXRsZV9uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi50aXRsZV9hZGRyZXNzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDk2N2QzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG59XHJcbi5jb2xfdGl0bGVzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm51bWJlcl9kZXRhaWxzIHtcclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbn1cclxuLnRfc21hbGwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50X2JpZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzVlNWU1ZTtcclxufVxyXG4uYmFubmVyX292ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMydmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMDU3YjlkMSwgIzA1ZTJmMjY2KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuLnByb2ZpbGUtcm93IHttYXJnaW4tYm90dG9tOiAyMHB4O31cclxuLmNvbC1wcm9maWxlLWRldGFpbHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ucHJvZmlsZV90eXBlIHtcclxuICAgIGNvbG9yOiAjMjA3ZmVlO1xyXG4gICAgZm9udC1zaXplOiAxMi45cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxufVxyXG4ucHJvZmlsZV90eXBlX25hbWUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5ncmlkX2RldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaDEsXG5oMixcbmgzLFxuaDQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG5wLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLnRpdGxlX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhbm5lci1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3VuaXRiZzIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDMydmg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5pbWdfcHJvZmlsZV9ib3JkZXIge1xuICB0b3A6IDcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uaW1nX3Byb2ZpbGUge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvZ2lybC5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiA4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMTRweCAyNXB4ICNhMmI3Y2Y7XG59XG5cbi5ib3hfZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmNmZWZmZjc7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE3dmg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAzMHB4ICM5MWI0ZGI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbn1cblxuLnRpdGxlX25hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzODM4Mzg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRpdGxlX2FkZHJlc3Mge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwOTY3ZDM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5jb2xfdGl0bGVzIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubnVtYmVyX2RldGFpbHMge1xuICBtYXJnaW4tdG9wOiAyM3B4O1xufVxuXG4udF9zbWFsbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRfYmlnIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1ZTVlNWU7XG59XG5cbi5iYW5uZXJfb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMydmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwNTdiOWQxLCAjMDVlMmYyNjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMztcbn1cblxuLnByb2ZpbGUtcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbC1wcm9maWxlLWRldGFpbHMge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2ZpbGVfdHlwZSB7XG4gIGNvbG9yOiAjMjA3ZmVlO1xuICBmb250LXNpemU6IDEyLjlweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLnByb2ZpbGVfdHlwZV9uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZ3JpZF9kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xufSJdfQ== */"

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
        this.uType = localStorage.getItem("TYPE_DATA");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.Email = localStorage.getItem("EMAIL");
        this.Name = localStorage.getItem("FULLNAME");
        console.log(localStorage);
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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.nopad {\n  padding: 0;\n}\n.card-background-page ion-list {\n  margin-bottom: 20px;\n}\n.card-background-page ion-list-header {\n  color: #5f5f5f;\n  font-weight: 600;\n  min-height: 30px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-family: \"Assistant_bold\";\n}\n.card-background-page .v_description {\n  font-size: 14px;\n  color: #2f2f2f;\n  text-align: justify;\n}\n.card-background-page .v-date {\n  text-align: left;\n  color: #5d5d5d;\n  font-size: 12px;\n  margin-right: 50px;\n}\n.card-background-page ion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.card-background-page .subject_name {\n  font-family: \"Assistant_bold\";\n}\n.card-background-page .new_opened {\n  --background: #deeeff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEF6dXJlQWNjZXNzXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTtFQUFnQiw0QkFBQTtBQ0VoQjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQ0ksVUFBQTtBQ2tCSjtBRGRJO0VBQ0ksbUJBQUE7QUNpQlI7QURmSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNpQlI7QURmSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNpQlI7QURmSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2lCUjtBRGZJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDaUJSO0FEZkk7RUFDSSw2QkFBQTtBQ2lCUjtBRGZJO0VBQ0kscUJBQUE7QUNpQlIiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbnAsIGlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuLnRpdGxlX2hlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vcGFkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgfVxyXG4gICAgLnZfZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzJmMmYyZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG4gICAgLnYtZGF0ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogIzVkNWQ1ZDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgLnN1YmplY3RfbmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICB9XHJcbiAgICAubmV3X29wZW5lZCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZGVlZWZmO1xyXG4gICAgfVxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5wLCBpb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4udGl0bGVfaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9wYWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1saXN0LWhlYWRlciB7XG4gIGNvbG9yOiAjNWY1ZjVmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMmYyZjJmO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52LWRhdGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzVkNWQ1ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnN1YmplY3RfbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm5ld19vcGVuZWQge1xuICAtLWJhY2tncm91bmQ6ICNkZWVlZmY7XG59Il19 */"

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
                path: 'tab1/unit-details/resident-details-list',
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
                        loadChildren: () => Promise.all(/*! import() | visitor-add-request-visitor-add-request-module */[__webpack_require__.e("default~amenity-book-now-amenity-book-now-module~login-login-module~visitor-add-request-visitor-add-~eba8b2a5"), __webpack_require__.e("common"), __webpack_require__.e("visitor-add-request-visitor-add-request-module")]).then(__webpack_require__.bind(null, /*! ../visitor-add-request/visitor-add-request.module */ "./src/app/visitor-add-request/visitor-add-request.module.ts")).then(m => m.VisitorAddRequestPageModule)
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
                        loadChildren: () => Promise.all(/*! import() | amenity-book-now-amenity-book-now-module */[__webpack_require__.e("default~amenity-book-now-amenity-book-now-module~login-login-module~visitor-add-request-visitor-add-~eba8b2a5"), __webpack_require__.e("amenity-book-now-amenity-book-now-module")]).then(__webpack_require__.bind(null, /*! ../amenity-book-now/amenity-book-now.module */ "./src/app/amenity-book-now/amenity-book-now.module.ts")).then(m => m.AmenityBookNowPageModule)
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