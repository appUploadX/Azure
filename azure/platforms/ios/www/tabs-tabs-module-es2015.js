(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-title>Azure-Connect</ion-title>\r\n        <!-- style=\"\r\n            text-align: right;\r\n            position: absolute;\r\n            left: 200px;\r\n        \" -->\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n    <ion-card class=\"welcome-card\">\r\n        <div class=\"overlay\"></div>\r\n        <div class=\"inline-block\">\r\n            <div class=\"card-title\">Azure Urban Resort</div>\r\n            <div class=\"card-subtitle\">Residences</div>\r\n            <div class=\"card-subtitle\" *ngIf=\"UnitNum\">(Unit {{shortName}}-{{UnitNum}})</div>\r\n        </div>\r\n\r\n    </ion-card>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                <a class=\"btn_a\" (click)=\"openUnitDetailsInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards nomargbot\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/unit.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Unit Details</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n            </ion-col>\r\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                <a class=\"btn_a\" (click)=\"openAmenitiesInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards nomargbot\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/amenities.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Amenities</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                <a class=\"btn_a\" (click)=\"openNoticeInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/notice.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Notice</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n            </ion-col>\r\n            <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                <!-- <a class=\"btn_a\" *ngIf=\"typeData=='Owner' && hasTenant=='ActiveTenant'\" (click)=\"openVisitorsInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n\r\n                <a class=\"btn_a\" *ngIf=\"typeData=='Owner' && hasTenant==''\" (click)=\"openVisitorsInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a> -->\r\n\r\n                <a class=\"btn_a\" *ngIf=\"typeData=='Owner'\" (click)=\"openVisitorsInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n\r\n                <a class=\"btn_a\" *ngIf=\"typeData=='Tenant'\" (click)=\"openVisitorsInTabs()\">\r\n                    <ion-card color=\"white\" class=\"menucards\">\r\n                        <ion-card-header>\r\n                            <img class=\"imgmenus\" src=\"assets/visitors.png\">\r\n                            <ion-card-subtitle class=\"menutitles\">Visitors</ion-card-subtitle>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                </a>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-title class=\"title_header\">Profile</ion-title>\r\n        <ion-button class=\"btneditprof\" slot=\"end\" (click)=\"openEditProfile()\">\r\n            <ion-icon name=\"create\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\" *ngFor=\"let res of Data\">\r\n    <div class=\"banner-card\" *ngIf=\"uType == 'Tenant'\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"12\" class=\"col_titles\">\r\n                    <div class=\"img_profile_border\" *ngIf=\"base64ImageX == ''\">\r\n                        <div *ngIf=\"res.tUpload == null\" class=\"img_profile\">\r\n                            <ion-icon class=\"icon_camera\" name=\"camera\" (click)=\"openGallery()\"></ion-icon>\r\n                        </div>\r\n                        <div *ngIf=\"res.tUpload != null\" class=\"img_profile\"\r\n                            [style.background-image]=\"'url(https://www.asi-ph.com/sandboxes/condominium/'+res.tUpload+')'\">\r\n                            <ion-icon class=\"icon_camera\" name=\"camera\" (click)=\"openGallery()\"></ion-icon>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"img_profile_border\" *ngIf=\"base64ImageX != ''\">\r\n                        <div class=\"img_profile\" [style.background-image]=\"'url('+base64ImageX+')'\" (click)=\"openGallery()\">\r\n                            <ion-icon class=\"icon_camera\" name=\"camera\" (click)=\"openGallery()\"></ion-icon>\r\n                            <!-- <img class=\"img_profile\" [src]=\"base64ImageX\" (click)=\"openGallery()\" /> -->\r\n                        </div>\r\n                        <!-- <div class=\"img_profile\" [style.background-image]=\"'url('+base64ImageX+')'\"><ion-icon name=\"camera\" (click)=\"openGallery()\"></ion-icon></div> -->\r\n                    </div>\r\n\r\n                    <div class=\"box_details\">\r\n                        <h1 class=\"title_name\">{{Name}}</h1>\r\n                        <p class=\"title_address\">{{res.tAddress}}</p>\r\n\r\n                        <div class=\"number_details\">\r\n                            <ion-row>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Units</p>\r\n                                    <p class=\"t_big\">{{uniCount}}</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Residents</p>\r\n                                    <p class=\"t_big\">{{countResi}}</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Parking</p>\r\n                                    <p class=\"t_big\">{{countPark}}</p>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n        </ion-grid>\r\n    </div>\r\n\r\n    <div class=\"banner-card\" *ngIf=\"uType == 'Owner'\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"12\" class=\"col_titles\">\r\n                    <div class=\"img_profile_border\" *ngIf=\"base64ImageX == ''\">\r\n                        <div *ngIf=\"res.pUpload == null\" class=\"img_profile\">\r\n                            <ion-icon class=\"icon_camera\" name=\"camera\" (click)=\"openGallery()\"></ion-icon>\r\n                        </div>\r\n                        <div *ngIf=\"res.pUpload != null\" class=\"img_profile\"\r\n                            [style.background-image]=\"'url(https://www.asi-ph.com/sandboxes/condominium/'+res.pUpload+')'\">\r\n                            <ion-icon class=\"icon_camera\" name=\"camera\" (click)=\"openGallery()\"></ion-icon>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"img_profile_border\" *ngIf=\"base64ImageX != ''\">\r\n                        <div class=\"img_profile\" [style.background-image]=\"'url('+base64ImageX+')'\" (click)=\"openGallery()\">\r\n                            <ion-icon class=\"icon_camera\" name=\"camera\" (click)=\"openGallery()\"></ion-icon>\r\n                            <!-- <img class=\"img_profile\" [src]=\"base64ImageX\" (click)=\"openGallery()\" /> -->\r\n                        </div>\r\n                        <!-- <div class=\"img_profile\" [style.background-image]=\"'url('+base64ImageX+')'\"><ion-icon name=\"camera\" (click)=\"openGallery()\"></ion-icon></div> -->\r\n                    </div>\r\n\r\n                    <div class=\"box_details\">\r\n                        <h1 class=\"title_name\">{{Name}}</h1>\r\n                        <p class=\"title_address\">{{res.Address}}</p>\r\n\r\n                        <div class=\"number_details\">\r\n                            <ion-row>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Units</p>\r\n                                    <p class=\"t_big\">{{uniCount}}</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Residents</p>\r\n                                    <p class=\"t_big\">{{countResi}}</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"4\">\r\n                                    <p class=\"t_small\">Parking</p>\r\n                                    <p class=\"t_big\">{{countPark}}</p>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n    <div class=\"banner_overlay\"></div>\r\n\r\n    <ion-grid class=\"grid_details\" *ngIf=\"uType == 'Tenant'\">\r\n        <ion-row class=\"profile-row\">\r\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">2nd Owner</p>\r\n                <p class=\"profile_type_name\">Duane Brick</p>\r\n            </ion-col> -->\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Email</p>\r\n                <p class=\"profile_type_name\">{{res.tEmailAddress}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Gender</p>\r\n                <p class=\"profile_type_name\">{{res.tGender}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Contact Number</p>\r\n                <p class=\"profile_type_name\">{{res.tPhoneNumber}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Possession</p>\r\n                <p class=\"profile_type_name\">{{res.tAgreementStart}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Occupation</p>\r\n                <p class=\"profile_type_name\">{{res.tOccupation}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Blood Group</p>\r\n                <p class=\"profile_type_name\">{{res.tBlood}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Date of Birth</p>\r\n                <p class=\"profile_type_name\">{{res.tDate}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Date of Anniversary</p>\r\n                <p class=\"profile_type_name\">{{Aniv}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Company</p>\r\n                <p class=\"profile_type_name\">{{res.tCompany}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Nationality</p>\r\n                <p class=\"profile_type_name\">{{res.tNationality}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Country</p>\r\n                <p class=\"profile_type_name\">{{res.tCountry}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid class=\"grid_details\" *ngIf=\"uType == 'Owner'\">\r\n        <ion-row class=\"profile-row\">\r\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">2nd Owner</p>\r\n                <p class=\"profile_type_name\">Duane Brick</p>\r\n            </ion-col> -->\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Email</p>\r\n                <p class=\"profile_type_name\">{{res.EmailAddress}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Gender</p>\r\n                <p class=\"profile_type_name\">{{res.pGender}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Contact Number</p>\r\n                <p class=\"profile_type_name\">{{res.Mobile}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Possession</p>\r\n                <p class=\"profile_type_name\">{{res.pMoveindate}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Occupation</p>\r\n                <p class=\"profile_type_name\">{{res.pOccupation}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Blood Group</p>\r\n                <p class=\"profile_type_name\">{{res.pBlood}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Date of Birth</p>\r\n                <p class=\"profile_type_name\">{{res.pDate}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Date of Anniversary</p>\r\n                <p class=\"profile_type_name\">{{Aniv}}</p>\r\n            </ion-col>\r\n            <!-- <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Intercom Number</p>\r\n                <p class=\"profile_type_name\">1234</p>\r\n            </ion-col> -->\r\n            <ion-col size=\"12\" class=\"col-profile-details\" *ngIf=\"uType == 'Owner'\">\r\n                <p class=\"profile_type\">Nominee</p>\r\n                <p class=\"profile_type_name\">{{res.pName}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Company</p>\r\n                <p class=\"profile_type_name\">{{res.pCompany}}</p>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Nationality</p>\r\n                <p class=\"profile_type_name\">{{res.pNationality}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"col-profile-details\">\r\n                <p class=\"profile_type\">Country</p>\r\n                <p class=\"profile_type_name\">{{res.pCountry}}</p>\r\n            </ion-col>\r\n            \r\n\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"title_header\">\r\n      Notifications\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n  <ion-list>\r\n    <ion-list-header>Today</ion-list-header>\r\n    <!-- <ion-item class=\"new_opened\" (click)=\"OpenVisitorListDetals()\"> -->\r\n    <ion-item class=\"new_opened\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n              <p class=\"v_description\"><span class=\"subject_name\">Azure Notification</span> is under construction.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n              <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n    <!-- <ion-item class=\"new_opened\" (click)=\"openRulesDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Schedule for Smoke Emission</span> was added on your Notices.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item (click)=\"openRulesDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Tower Crown Cleaning</span> was added on your Notices.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"openBookingDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\">Reminder: <span class=\"subject_name\">Azure beach booking</span> is Today!</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"openBookingDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Azure Beach Booking 01/02/2020</span> was added on your list.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n  <ion-list-header>Yesterday</ion-list-header>\r\n    <ion-item (click)=\"OpenVisitorListDetals()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Azure</span> approved your Visitor Request.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"openRulesDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Schedule for Smoke Emission</span> was added on your Notices.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item (click)=\"openRulesDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Tower Crown Cleaning</span> was added on your Notices.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"openBookingDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\">Reminder: <span class=\"subject_name\">Azure beach booking</span> is Today!</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"openBookingDetails()\">\r\n      <ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v_description\"><span class=\"subject_name\">Azure Beach Booking 01/02/2020</span> was added on your list.</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"12\">\r\n                <p class=\"v-date\">1 minute ago</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n</ion-content>"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.card-background-page .welcome-card {\n  position: relative;\n  background-image: url(\"/assets/homebanner.jpg\");\n  text-align: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  margin: 0;\n  height: 30vh;\n  border-radius: 0;\n}\n.card-background-page .nomargbot {\n  margin-bottom: 0;\n}\n.card-background-page .imgmenus {\n  width: 80px;\n  margin: 0 auto;\n}\n.card-background-page .overlay {\n  width: 100vh;\n  background: -webkit-gradient(linear, left top, right top, from(#055ea3), to(#0dd8ff));\n  background: linear-gradient(to right, #055ea3, #0dd8ff);\n  opacity: 0.5;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  height: 30vh;\n  left: 0;\n  transition: all ease 0.4s;\n  -o-transition: all ease 0.4s;\n  -ms-transition: all ease 0.4s;\n  -moz-transition: all ease 0.4s;\n  -webkit-transition: all ease 0.4s;\n}\n.card-background-page .inline-block {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n  height: 30vh;\n  width: 100vh;\n  line-height: 1.5em;\n}\n.card-background-page .card-title {\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  margin-top: 10px;\n}\n.card-background-page .menutitles {\n  text-align: center;\n  margin-top: 7px;\n}\n.card-background-page .btn_a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXDIwMjBcXEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0Y7QURDQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDRjtBRENBO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NGO0FEQ0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURDQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDRjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEWkU7RUFDRSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDZUo7QURiRTtFQUNFLGdCQUFBO0FDZUo7QURiRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDZUo7QURaRTtFQUNFLFlBQUE7RUFDQSxxRkFBQTtFQUFBLHVEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUNjSjtBRFpFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2NKO0FEWkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2NKO0FEWEU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2FKO0FEVkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNZSjtBRFZFO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHFCQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxufVxyXG5pb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcblxyXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cclxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XHJcbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cclxuXHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gIC53ZWxjb21lLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9ob21lYmFubmVyLmpwZ1wiKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5ub21hcmdib3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmltZ21lbnVzIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheSB7XHJcbiAgICB3aWR0aDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNTVlYTMsICMwZGQ4ZmYpO1xyXG4gICAgb3BhY2l0eTogMC41MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxuICB9XHJcbiAgLmlubGluZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB3aWR0aDogMTAwdmg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5tZW51dGl0bGVzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICB9XHJcbiAgLmJ0bl9hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAvLyAuYnRuX2E6aG92ZXIge1xyXG4gIC8vICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLy8gfVxyXG4gIFxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLndlbGNvbWUtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9ob21lYmFubmVyLmpwZ1wiKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubm9tYXJnYm90IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW1nbWVudXMge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm92ZXJsYXkge1xuICB3aWR0aDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1NWVhMywgIzBkZDhmZik7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMzB2aDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubWVudXRpdGxlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5idG5fYSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");





let Tab1Page = class Tab1Page {
    constructor(postPvd, router, actRoute, toastController) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.toastController = toastController;
        // private initRefresh() {
        //   this.timeoutId = setInterval(() => this.checkFunction(), 1000);
        // }
        this.strpassword = '';
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
        this.Siglo = localStorage.getItem("SIGLO");
        if (history.state.from != '') {
            this.checkIfDefault();
        }
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
        this.Siglo = localStorage.getItem("SIGLO");
        this.UnitNum = localStorage.getItem("ROOM_NO");
        this.shortName = localStorage.getItem("SHORT_NAME");
        // this.valin = setInterval(() => {
        //   this.checkFunction();
        // }, 10000);
        if (history.state.from != '') {
            this.checkIfDefault();
        }
    }
    // checkFunction() {
    //   return new Promise(resolve => {
    //     let body = {
    //       action: 'checkLocal',
    //       new_code: localStorage.getItem("NEW_CODE"),
    //       email: localStorage.getItem("EMAIL"),
    //       type: localStorage.getItem("TYPE_DATA"),
    //     };
    //     this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
    //       if (data['uType'] == "Owner") {
    //         localStorage.setItem("HAS_TENANT", data['hasTenant']);
    //         localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
    //         localStorage.setItem("TERMS", data['dataX'][0]['pTermsAndCondition']);
    //         localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);
    //       }
    //       else if (data['uType'] == "Tenant") {
    //         localStorage.setItem("HAS_TENANT", data['hasTenant']);
    //         localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
    //         localStorage.setItem("TERMS", data['dataX'][0]['tTermsAndCondition']);
    //         localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);
    //       }
    //       console.log(localStorage);
    //     })
    //   });
    // }
    // ionViewDidEnter() {
    //   // this.initRefresh();
    //   this.refreshSubject = new Subject<void>();
    //   this.refreshObservable = this.refreshSubject.asObservable();
    //   this.refreshSubscription = this.refreshObservable.subscribe(() => this.checkFunction());
    // }
    // ionViewDidLeave() {
    //   // this.stopRefresh();
    //   this.refreshSubscription.unsubscribe();
    // }
    // private stopRefresh() {
    //   clearInterval(this.timeoutId);
    // }
    // ionViewWillLeave() {
    //   clearInterval(this.valin);
    //   clearInterval(this.valin);
    // }
    openToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    openUnitDetailsInTabs() {
        // console.log(unit_code, property_code, typeData);
        // this.router.navigate(['/unit-details/'], { state: { uCode: unit_code, pCode: property_code, uType: typeData}});
        this.router.navigateByUrl('/tabs/tab1/unit-details');
    }
    openVisitorsInTabs() {
        this.router.navigateByUrl('/tabs/tab1/visitors-details');
    }
    openNoticeInTabs() {
        this.router.navigateByUrl('/tabs/tab1/notice-main-list', { state: { uCode: this.unit_code, pCode: this.property_code, uType: this.typeData } });
    }
    openAmenitiesInTabs() {
        this.router.navigateByUrl('tabs/tab1/amenities-details');
    }
    checkIfDefault() {
        return new Promise(resolve => {
            let body = {
                action: 'check_password',
                uID: localStorage.getItem('USER_ID'),
                uTYPE: localStorage.getItem('TYPE_DATA'),
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                if (data['correct'] == "yes") {
                    alert("We advise you to change your password to ensure the safety of your account.");
                    // this.router.navigateByUrl('/tabs/tab1');
                    this.router.navigateByUrl('/change-password', { state: { 'from': 'TAB1' } });
                }
                resolve(true);
                console.log(data);
            });
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
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
/* harmony import */ var _profile_edit_profile_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile-edit/profile-edit.page */ "./src/app/profile-edit/profile-edit.page.ts");








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
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"], _profile_edit_profile_edit_page__WEBPACK_IMPORTED_MODULE_7__["ProfileEditPage"]],
        entryComponents: [_profile_edit_profile_edit_page__WEBPACK_IMPORTED_MODULE_7__["ProfileEditPage"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"Assistant_bold\";\n}\np,\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.banner-card {\n  margin: 0;\n  background-image: url(\"/assets/unitbg2.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 32vh;\n  border-radius: 0;\n}\n.img_profile_border {\n  top: 9vh;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  z-index: 10;\n}\n.img_profile {\n  width: 100px;\n  height: 100px;\n  background-image: url(\"/assets/defaultimg.png\");\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  z-index: 8;\n  border-radius: 50%;\n  margin: 0 auto;\n  box-shadow: 1px 14px 25px #a2b7cf;\n}\n.icon_camera {\n  background: #0967d3 !important;\n  border-radius: 50%;\n  padding: 5px;\n  position: relative;\n  top: 12vh;\n  border: 1px solid #fff;\n  color: #fff;\n  font-size: 14px;\n}\n.box_details {\n  width: 100%;\n  background: #fcfefff7;\n  border-radius: 10px;\n  margin-top: 17vh;\n  padding: 15px;\n  padding-top: 50px;\n  box-shadow: 1px 10px 30px #91b4db;\n  position: relative;\n  z-index: 9;\n}\n.title_name {\n  font-size: 20px;\n  text-align: center;\n  color: #383838;\n  margin-bottom: 5px;\n}\n.title_address {\n  margin: 0;\n  text-align: center;\n  color: #0967d3;\n  font-size: 14px;\n  font-family: \"Assistant_semibold\";\n}\n.col_titles {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.number_details {\n  margin-top: 23px;\n}\n.t_small {\n  margin: 0;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n  color: #808080;\n  text-align: center;\n}\n.t_big {\n  margin: 0;\n  font-size: 23px;\n  text-align: center;\n  color: #5e5e5e;\n}\n.banner_overlay {\n  width: 100%;\n  height: 32vh;\n  background: linear-gradient(45deg, #0057b9d1, #05e2f266);\n  position: absolute;\n  top: 0;\n  z-index: 3;\n}\n.profile-row {\n  margin-bottom: 20px;\n}\n.col-profile-details {\n  padding-left: 13px;\n  border-bottom: 1px solid #d4d4d4;\n  padding-bottom: 10px;\n}\n.profile_type {\n  color: #207fee;\n  font-size: 12.9px;\n  margin-bottom: 7px;\n  font-weight: 500;\n  margin-top: 10px;\n  font-family: \"Assistant_semibold\";\n}\n.profile_type_name {\n  margin: 0;\n  color: #4c4c4c;\n  font-weight: 400;\n  font-size: 15px;\n}\n.grid_details {\n  margin-top: 20vh;\n  padding: 10px 25px;\n}\n.btneditprof {\n  position: absolute;\n  right: 0;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXDIwMjBcXEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENFO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0U7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENFOzs7O0VBR0ksNkJBQUE7QUNFTjtBRERFOztFQUNhLDRCQUFBO0FDS2Y7QURIRTtFQUFXLDRCQUFBO0FDT2I7QURORTtFQUFhLDhCQUFBO0FDVWY7QURURTtFQUFnQixpQ0FBQTtBQ2FsQjtBRFpFO0VBQVksNkJBQUE7QUNnQmQ7QURmRTtFQUFpQixrQ0FBQTtBQ21CbkI7QURmQTtFQUNJLGtCQUFBO0FDa0JKO0FEaEJBO0VBQ0ksU0FBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDbUJKO0FEakJBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDb0JKO0FEbEJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQ3FCSjtBRG5CQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3NCSjtBRHBCQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3VCSjtBRHJCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3dCSjtBRHRCQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUN5Qko7QUR2QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDMEJKO0FEeEJBO0VBQ0ksZ0JBQUE7QUMyQko7QUR6QkE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUM0Qko7QUQxQkE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQzZCSjtBRDNCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDOEJKO0FENUJBO0VBQWMsbUJBQUE7QUNnQ2Q7QUQvQkE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNrQ0o7QURoQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ21DSjtBRGpDQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDb0NKO0FEbENBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ3FDSjtBRGxDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDcUNKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbiAgfVxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbiAgfVxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbiAgcCxcclxuICBpb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbiAgXHJcbiAgLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuICAuZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cclxuICAuZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuICAuZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbiAgLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cclxuXHJcblxyXG5cclxuLnRpdGxlX2hlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJhbm5lci1jYXJkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy91bml0YmcyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAzMnZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uaW1nX3Byb2ZpbGVfYm9yZGVyIHtcclxuICAgIHRvcDogOXZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLmltZ19wcm9maWxlIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZGVmYXVsdGltZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxNHB4IDI1cHggI2EyYjdjZjtcclxufVxyXG4uaWNvbl9jYW1lcmEge1xyXG4gICAgYmFja2dyb3VuZDogIzA5NjdkMyFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEydmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJveF9kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjZmVmZmY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE3dmg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMTBweCAzMHB4ICM5MWI0ZGI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi50aXRsZV9uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi50aXRsZV9hZGRyZXNzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDk2N2QzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG59XHJcbi5jb2xfdGl0bGVzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm51bWJlcl9kZXRhaWxzIHtcclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbn1cclxuLnRfc21hbGwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50X2JpZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzVlNWU1ZTtcclxufVxyXG4uYmFubmVyX292ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMydmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMDU3YjlkMSwgIzA1ZTJmMjY2KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuLnByb2ZpbGUtcm93IHttYXJnaW4tYm90dG9tOiAyMHB4O31cclxuLmNvbC1wcm9maWxlLWRldGFpbHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ucHJvZmlsZV90eXBlIHtcclxuICAgIGNvbG9yOiAjMjA3ZmVlO1xyXG4gICAgZm9udC1zaXplOiAxMi45cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxufVxyXG4ucHJvZmlsZV90eXBlX25hbWUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5ncmlkX2RldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxufVxyXG5cclxuLmJ0bmVkaXRwcm9mIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5oMSxcbmgyLFxuaDMsXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbnAsXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4udGl0bGVfaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFubmVyLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdW5pdGJnMi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMzJ2aDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmltZ19wcm9maWxlX2JvcmRlciB7XG4gIHRvcDogOXZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmltZ19wcm9maWxlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2RlZmF1bHRpbWcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiA4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMTRweCAyNXB4ICNhMmI3Y2Y7XG59XG5cbi5pY29uX2NhbWVyYSB7XG4gIGJhY2tncm91bmQ6ICMwOTY3ZDMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMnZoO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYm94X2RldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZjZmVmZmY3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxN3ZoO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMzBweCAjOTFiNGRiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG59XG5cbi50aXRsZV9uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzgzODM4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50aXRsZV9hZGRyZXNzIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDk2N2QzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uY29sX3RpdGxlcyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLm51bWJlcl9kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMjNweDtcbn1cblxuLnRfc21hbGwge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGNvbG9yOiAjODA4MDgwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50X2JpZyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWU1ZTVlO1xufVxuXG4uYmFubmVyX292ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMDU3YjlkMSwgIzA1ZTJmMjY2KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5wcm9maWxlLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb2wtcHJvZmlsZS1kZXRhaWxzIHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wcm9maWxlX3R5cGUge1xuICBjb2xvcjogIzIwN2ZlZTtcbiAgZm9udC1zaXplOiAxMi45cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5wcm9maWxlX3R5cGVfbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmdyaWRfZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbn1cblxuLmJ0bmVkaXRwcm9mIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var src_app_profile_edit_profile_edit_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/profile-edit/profile-edit.page */ "./src/app/profile-edit/profile-edit.page.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_service_image_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/image-provider.service */ "./src/app/service/image-provider.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");








let Tab2Page = class Tab2Page {
    constructor(postPvd, modalController, camera, imgPov, transfer, loadingCtrl) {
        this.postPvd = postPvd;
        this.modalController = modalController;
        this.camera = camera;
        this.imgPov = imgPov;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.Data = [];
        this.base64img = '';
        this.base64Image = '';
        this.base64ImageX = '';
    }
    openEditProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_profile_edit_profile_edit_page__WEBPACK_IMPORTED_MODULE_4__["ProfileEditPage"],
                componentProps: {}
            });
            modal.onDidDismiss().then(data => {
                this.Name = localStorage.getItem("FULLNAME");
                this.loadData(this.uType, this.uCode, this.Email);
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.UID = localStorage.getItem("USER_ID");
        this.uType = localStorage.getItem("TYPE_DATA");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.Email = localStorage.getItem("EMAIL");
        this.Name = localStorage.getItem("FULLNAME");
        this.new_code = localStorage.getItem("NEW_CODE");
        console.log(localStorage);
        this.loadData(this.uType, this.uCode, this.Email);
    }
    ionViewWillEnter() {
        this.UID = localStorage.getItem("USER_ID");
        this.uType = localStorage.getItem("TYPE_DATA");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.Email = localStorage.getItem("EMAIL");
        this.Name = localStorage.getItem("FULLNAME");
        this.new_code = localStorage.getItem("NEW_CODE");
        this.loadData(this.uType, this.uCode, this.Email);
        console.log(localStorage, "xxxxx");
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
                this.uniCount = data['uniCount'];
                this.countResi = data['countResi'];
                this.countPark = data['countPark'];
                resolve(true);
                console.log(data);
            });
        });
    }
    openGallery() {
        // alert("haha");
        this.base64img = "";
        this.camera.getPicture({
            targetWidth: 512,
            targetHeight: 512,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.PictureSourceType.PHOTOLIBRARY,
        }).then((ImageData => {
            this.base64img = "data:image/jpeg;base64," + ImageData;
            this.imgPov.setImage(this.base64img);
            this.Upload();
        }), error => {
            console.log(error);
        });
    }
    Upload() {
        this.base64Image = this.imgPov.getImage();
        let loader = this.loadingCtrl.create({
            message: "Uploading...."
        });
        const fileTransfer = this.transfer.create();
        let options = {
            fileKey: "photo",
            fileName: localStorage.getItem("NEW_CODE") + ".jpg",
            chunkedMode: false,
            mimeType: "image/jpeg",
            params: { 'ID': localStorage.getItem("USER_ID"), 'user_type': localStorage.getItem('TYPE_DATA') },
            headers: {}
        };
        fileTransfer.upload(this.base64Image, 'https://www.azure-connect.com/androidUploadPic.php', options).then(data => {
            // alert(JSON.stringify(data));
            alert("Profile picture updated successfully!");
            this.base64ImageX = this.imgPov.getImage();
            // loader.dismiss();
        }, error => {
            alert("error");
            alert("error" + JSON.stringify(error));
            // loader.dismiss();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: src_app_service_image_provider_service__WEBPACK_IMPORTED_MODULE_6__["ImageProviderService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        src_app_service_image_provider_service__WEBPACK_IMPORTED_MODULE_6__["ImageProviderService"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\np, ion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.title_header {\n  text-align: center;\n}\n.nopad {\n  padding: 0;\n}\n.card-background-page ion-list {\n  margin-bottom: 20px;\n}\n.card-background-page ion-list-header {\n  color: #5f5f5f;\n  font-weight: 600;\n  min-height: 30px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-family: \"Assistant_bold\";\n}\n.card-background-page .v_description {\n  font-size: 14px;\n  color: #2f2f2f;\n  text-align: justify;\n}\n.card-background-page .v-date {\n  text-align: left;\n  color: #5d5d5d;\n  font-size: 12px;\n  margin-right: 50px;\n}\n.card-background-page ion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.card-background-page .subject_name {\n  font-family: \"Assistant_bold\";\n}\n.card-background-page .new_opened {\n  --background: #deeeff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXDIwMjBcXEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWdCLDRCQUFBO0FDRWhCO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURkQTtFQUNJLGtCQUFBO0FDaUJKO0FEZkE7RUFDSSxVQUFBO0FDa0JKO0FEZEk7RUFDSSxtQkFBQTtBQ2lCUjtBRGZJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ2lCUjtBRGZJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2lCUjtBRGZJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDaUJSO0FEZkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNpQlI7QURmSTtFQUNJLDZCQUFBO0FDaUJSO0FEZkk7RUFDSSxxQkFBQTtBQ2lCUiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XHJcbn1cclxucCwgaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG5cclxuLmZvbnRfcmVnIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XHJcbi5mb250X3NlbWlib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7fVxyXG4uZm9udF9ib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJzt9XHJcbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XHJcblxyXG4udGl0bGVfaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm9wYWQge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBjb2xvcjogIzVmNWY1ZjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICB9XHJcbiAgICAudl9kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMmYyZjJmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICAudi1kYXRlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiAjNWQ1ZDVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuc3ViamVjdF9uYW1lIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIH1cclxuICAgIC5uZXdfb3BlbmVkIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNkZWVlZmY7XHJcbiAgICB9XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbnAsIGlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi50aXRsZV9oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWxpc3QtaGVhZGVyIHtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl9kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtZGF0ZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNWQ1ZDVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuc3ViamVjdF9uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubmV3X29wZW5lZCB7XG4gIC0tYmFja2dyb3VuZDogI2RlZWVmZjtcbn0iXX0= */"

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
                        loadChildren: () => Promise.all(/*! import() | visitors-details-visitors-details-module */[__webpack_require__.e("default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec"), __webpack_require__.e("visitors-details-visitors-details-module")]).then(__webpack_require__.bind(null, /*! ../visitors-details/visitors-details.module */ "./src/app/visitors-details/visitors-details.module.ts")).then(m => m.VisitorsDetailsPageModule)
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
                        loadChildren: () => Promise.all(/*! import() | visitor-add-request-visitor-add-request-module */[__webpack_require__.e("default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec"), __webpack_require__.e("common"), __webpack_require__.e("visitor-add-request-visitor-add-request-module")]).then(__webpack_require__.bind(null, /*! ../visitor-add-request/visitor-add-request.module */ "./src/app/visitor-add-request/visitor-add-request.module.ts")).then(m => m.VisitorAddRequestPageModule)
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
                        loadChildren: () => Promise.all(/*! import() | amenity-book-now-amenity-book-now-module */[__webpack_require__.e("default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec"), __webpack_require__.e("amenity-book-now-amenity-book-now-module")]).then(__webpack_require__.bind(null, /*! ../amenity-book-now/amenity-book-now.module */ "./src/app/amenity-book-now/amenity-book-now.module.ts")).then(m => m.AmenityBookNowPageModule)
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
                        loadChildren: () => Promise.all(/*! import() | change-password-change-password-module */[__webpack_require__.e("default~amenity-book-now-amenity-book-now-module~change-password-change-password-module~forgot-passw~adbc2eec"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null, /*! ../change-password/change-password.module */ "./src/app/change-password/change-password.module.ts")).then(m => m.ChangePasswordPageModule)
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