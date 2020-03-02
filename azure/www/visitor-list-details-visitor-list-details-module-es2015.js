(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-list-details-visitor-list-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-list-details/visitor-list-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-list-details/visitor-list-details.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons size=\"small\" slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"header_title\">Visitor Request Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\" *ngFor=\"let res of dataX\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event, res.id)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid class=\"nopad\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"nopad\">\r\n        <div class=\"visitor_title_div\">\r\n          <h2 class=\"visitor_title\">Guest Advice Form</h2>\r\n          <div class=\"underline\"></div>\r\n          <h3 class=\"visitor_type_title\">{{res.vuVisitorType}}</h3>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"show_modal\">\r\n    <a (click)=\"openModal(res.vtTermsCondition)\">Show Description</a>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Visitor</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Visitor Advise No.:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuGuestNo}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Carpark slot No.:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\" >\r\n            <p class=\"text-right\" *ngFor=\"let pk of carPark\">{{pk}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Visitors On-Site Contact Person:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuGuestOnSiteContact}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Contact No.:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuContact}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Arrival/Departure Details</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Arrival Date:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuArrivalDate}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Arrival Time:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuArrivalTime | date:'h:mm a'}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Departure Date:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuDepartureDate}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Departure Time:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuDepartureTime | date:'h:mm a'}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Primary Visitor Details</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Name of Primary Visitor:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuNamePrimaryVisitor}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Nationality:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuPrimaryVisitorNationality}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>ID Proof Details:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuIDProof}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Contact Number:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuPrimaryVisitorContactNo}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Email Address:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuPrimaryVisitorEmail}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Address:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuPrimaryVisitorAddress}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Additional Visitor Details</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Name</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Type</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Checked In</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Checked Out</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"3\">\r\n            <p>{{res.vuNamePrimaryVisitor}} (Primary)</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>Adult</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{res.vuCheckInPrimaryDate}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{res.vuCheckOutPrimaryDate}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngFor=\"let rex of dataAdd; let i = index\">\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].avName}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].avMaturity}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].avCheckInDate}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].avCheckOutDate}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Vehicle Details</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Type</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Make and Model</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Color</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Plate No.</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngFor=\"let rex of vehData; let i = index\">\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].Type}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].Model}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].Color}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].Plate}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Additional Remarks</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n\r\n          <ion-col size=\"6\">\r\n            <p>Remark:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuAdditionalRemarks}}</p>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">To be Filled By Admin</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Remark:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuRemarksByAdmin}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Status:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\" *ngIf=\"res.vuRequestStatus != 'Cancelled'\">{{res.vuApprovalStatus}}</p>\r\n            <p class=\"text-right\" *ngIf=\"res.vuRequestStatus == 'Cancelled'\">Cancelled</p>\r\n            <!-- <p class=\"text-right\">Admin: Azure Urban</p>\r\n            <p class=\"text-right\">06/11/19 4:00 PM</p> -->\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n  <div class=\"v_personal btns\" *ngIf=\"res.pdf_path !== null\" style=\"text-align: center;\">\r\n    <ion-chip class=\"ion_chip\" (click)=\"downloadGAF(res.pdf_path)\">\r\n      <ion-icon name=\"download\"></ion-icon>\r\n      <ion-label>Download GAF</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n\r\n  <ion-grid class=\"btns\" *ngIf=\"res.vuRequestStatus != 'Cancelled' && res.vuDepartureTime > ThisDateTime\">\r\n    <ion-row class=\"v-row pt-0\" *ngIf=\"res.vuCheckIn == 'Not Yet Check In' || res.vuCheckIn == ''\">\r\n      <ion-col size=\"12\" class=\"pt-0\">\r\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"confirmCancel(res.id)\">Cancel Request</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/visitor-list-details/visitor-list-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/visitor-list-details/visitor-list-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: VisitorListDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorListDetailsPageModule", function() { return VisitorListDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visitor_list_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-list-details.page */ "./src/app/visitor-list-details/visitor-list-details.page.ts");
/* harmony import */ var _visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../visitor-details-modal/visitor-details-modal.page */ "./src/app/visitor-details-modal/visitor-details-modal.page.ts");








const routes = [
    {
        path: '',
        component: _visitor_list_details_page__WEBPACK_IMPORTED_MODULE_6__["VisitorListDetailsPage"]
    }
];
let VisitorListDetailsPageModule = class VisitorListDetailsPageModule {
};
VisitorListDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_visitor_list_details_page__WEBPACK_IMPORTED_MODULE_6__["VisitorListDetailsPage"], _visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_7__["VisitorDetailsModalPage"]],
        entryComponents: [_visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_7__["VisitorDetailsModalPage"]]
    })
], VisitorListDetailsPageModule);



/***/ }),

/***/ "./src/app/visitor-list-details/visitor-list-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/visitor-list-details/visitor-list-details.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.nopad {\n  padding: 0;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.card-background-page .visitor_title_div {\n  background: -webkit-gradient(linear, left top, right top, from(#35343e), to(#5e5b6a));\n  background: linear-gradient(to right, #35343e, #5e5b6a);\n  padding: 4px;\n  border-radius: 5px;\n  margin: 13px 11px;\n}\n.card-background-page .visitor_title {\n  text-align: center;\n  font-size: 17px;\n  font-family: \"Assistant_bold\";\n  margin-top: 10px;\n  color: #ffffff;\n  margin-bottom: 4px;\n  font-weight: 600;\n}\n.card-background-page .visitor_type_title {\n  text-align: center;\n  font-size: 14px;\n  font-family: \"Assistant_bold\";\n  text-transform: uppercase;\n  margin-top: 0;\n  color: #ffffff;\n  font-weight: 600;\n}\n.card-background-page .v_title_detail {\n  background: #eceef7;\n  padding: 5px 11px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.card-background-page .show_modal {\n  margin: 0 11px;\n  text-align: right;\n}\n.card-background-page .show_modal a {\n  color: #0062d2;\n}\n.card-background-page .v-row {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 7px;\n}\n.card-background-page .v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.card-background-page .underline {\n  border-bottom: 1px solid #fff;\n  width: 30%;\n  margin: 0 auto;\n  margin-bottom: 4px;\n}\n.card-background-page .v_details p {\n  margin: 0;\n  font-size: 13px;\n  color: #393939;\n}\n.card-background-page .text-right {\n  text-align: right;\n}\nion-refresher {\n  background-color: #dedede;\n}\nion-refresher-content {\n  background-color: #dedede;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRvci1saXN0LWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFwyMDIwXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXHZpc2l0b3ItbGlzdC1kZXRhaWxzXFx2aXNpdG9yLWxpc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Zpc2l0b3ItbGlzdC1kZXRhaWxzL3Zpc2l0b3ItbGlzdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBRENBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBRENBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQ0E7RUFBYSw0QkFBQTtBQ0ViO0FEQUE7RUFBVyw0QkFBQTtBQ0lYO0FESEE7RUFBYSw4QkFBQTtBQ09iO0FETkE7RUFBZ0IsaUNBQUE7QUNVaEI7QURUQTtFQUFZLDZCQUFBO0FDYVo7QURaQTtFQUFpQixrQ0FBQTtBQ2dCakI7QURkQTtFQUNJLGtCQUFBO0FDaUJKO0FEZkE7RUFDSSxrQkFBQTtBQ2tCSjtBRGZBO0VBQVEsVUFBQTtBQ21CUjtBRGpCQTtFQUNJLHFCQUFBO0FDb0JKO0FEbEJJO0VBQ0kscUZBQUE7RUFBQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNvQlI7QURsQkk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FDb0JSO0FEbEJJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksY0FBQTtBQ29CUjtBRGxCSTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7QUNvQlI7QURsQkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNvQlI7QURsQkk7RUFDSSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNvQlI7QURsQkk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNvQlI7QURsQkk7RUFBYSxpQkFBQTtBQ3FCakI7QURqQkE7RUFDSSx5QkFBQTtBQ29CSjtBRGpCQTtFQUNJLHlCQUFBO0FDb0JKIiwiZmlsZSI6InNyYy9hcHAvdmlzaXRvci1saXN0LWRldGFpbHMvdmlzaXRvci1saXN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuLmhlYWRlcl90aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLm5vcGFkIHtwYWRkaW5nOiAwO31cclxuXHJcbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XHJcblxyXG4gICAgLnZpc2l0b3JfdGl0bGVfZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNTM0M2UsICM1ZTViNmEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxM3B4IDExcHg7XHJcbiAgICB9XHJcbiAgICAudmlzaXRvcl90aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLnZpc2l0b3JfdHlwZV90aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC52X3RpdGxlX2RldGFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZWVmNztcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTFweDtcclxuICAgICAgICBjb2xvcjogIzI5MjkyOTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcclxuICAgIH1cclxuICAgIC5zaG93X21vZGFsIHtcclxuICAgICAgICBtYXJnaW46IDAgMTFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5zaG93X21vZGFsIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2MmQyO1xyXG4gICAgfVxyXG4gICAgLnYtcm93IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggN3B4O1xyXG4gICAgfVxyXG4gICAgLnZfcGVyc29uYWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7IFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgLnZfZGV0YWlscyBwIHtcclxuICAgICAgICBtYXJnaW46IDA7O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzM5MzkzOTtcclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHt0ZXh0LWFsaWduOiByaWdodDt9XHJcblxyXG59XHJcblxyXG5pb24tcmVmcmVzaGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbn1cclxuICBcclxuaW9uLXJlZnJlc2hlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5vcGFkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkNWRlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52aXNpdG9yX3RpdGxlX2RpdiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM1MzQzZSwgIzVlNWI2YSk7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEzcHggMTFweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudmlzaXRvcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52aXNpdG9yX3R5cGVfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfdGl0bGVfZGV0YWlsIHtcbiAgYmFja2dyb3VuZDogI2VjZWVmNztcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGNvbG9yOiAjMjkyOTI5O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5zaG93X21vZGFsIHtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5zaG93X21vZGFsIGEge1xuICBjb2xvcjogIzAwNjJkMjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgcGFkZGluZzogNnB4IDdweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl9wZXJzb25hbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnVuZGVybGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52X2RldGFpbHMgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzM5MzkzOTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tcmVmcmVzaGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbn1cblxuaW9uLXJlZnJlc2hlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/visitor-list-details/visitor-list-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/visitor-list-details/visitor-list-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: VisitorListDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorListDetailsPage", function() { return VisitorListDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visitor-details-modal/visitor-details-modal.page */ "./src/app/visitor-details-modal/visitor-details-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");












let VisitorListDetailsPage = class VisitorListDetailsPage {
    constructor(postPvd, router, actRoute, modalController, alertController, toastController, platform, document, file, fileOpener, transfer) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.platform = platform;
        this.document = document;
        this.file = file;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.dataX = [];
        this.dataAdd = [];
        this.dataType = [];
        this.vehData = [];
        this.extToMimes = [
            { ext: 'pdf', MType: 'application/pdf' }
        ];
    }
    openModal(vtTermsCondition) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _visitor_details_modal_visitor_details_modal_page__WEBPACK_IMPORTED_MODULE_2__["VisitorDetailsModalPage"],
                componentProps: {
                    vtTermsConditionX: vtTermsCondition,
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.id = history.state.id;
        this.Name = localStorage.getItem("FULLNAME");
        this.Type = localStorage.getItem("TYPE_DATA");
        this.Siglo = localStorage.getItem("SIGLO");
        this.loadData(this.id);
        var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).split(" ");
        var date = new Date().toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-').split('-');
        var finalDate = date[2] + '-' + date[0] + '-' + date[1];
        this.ThisDateTime = finalDate + 'T' + time + ':00:000+8:00';
    }
    loadData(id) {
        return new Promise(resolve => {
            let body = {
                action: 'visitorData',
                id: id,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                this.dataX.push(data['visitData']);
                for (let index = 0; index < data['visitAdditional'].length; index++) {
                    this.dataAdd.push(data['visitAdditional']);
                }
                this.carPark = [];
                this.carPark = data['visitData']['vuCarparkSlotNo'].split(",");
                // console.log(splitter);
                // for (let pk = 0; pk < splitter.length; pk++) {
                // 	this.carPark.push(splitter[pk]);
                // 	console.log(splitter[pk]);
                // }
                console.log(this.carPark);
                this.vtAdditionalVisitorCountX = data['visitType']['vtAdditionalVisitorCount'];
                this.vtApprovalX = data['visitType']['vtApproval'];
                this.vtArrivalDateX = data['visitType']['vtArrivalDate'];
                this.vtArrivalTimeX = data['visitType']['vtArrivalTime'];
                this.vtCanAssignIDByGatekeeperX = data['visitType']['vtCanAssignIDByGatekeeper'];
                this.vtCanBeAddedByConciergeX = data['visitType']['vtCanBeAddedByConcierge'];
                this.vtCanBeAddedByGatekeeperX = data['visitType']['vtCanBeAddedByGatekeeper'];
                this.vtCarparkSlotNoX = data['visitType']['vtCarparkSlotNo'];
                this.vtDepartureDateX = data['visitType']['vtDepartureDate'];
                this.vtDepartureTimeX = data['visitType']['vtDepartureTime'];
                this.vtGuestContactX = data['visitType']['vtGuestContact'];
                this.vtGuestOnSiteX = data['visitType']['vtGuestOnSite'];
                this.vtPrimaryVisitorAddressX = data['visitType']['vtPrimaryVisitorAddress'];
                this.vtPrimaryVisitorContactNoX = data['visitType']['vtPrimaryVisitorContactNo'];
                this.vtPrimaryVisitorEmailAddressX = data['visitType']['vtPrimaryVisitorEmailAddress'];
                this.vtPrimaryVisitorIDProofDetailsX = data['visitType']['vtPrimaryVisitorIDProofDetails'];
                this.vtPrimaryVisitorNameX = data['visitType']['vtPrimaryVisitorName'];
                this.vtPrimaryVisitorNationalityX = data['visitType']['vtPrimaryVisitorNationality'];
                this.vtRemarksX = data['visitType']['vtRemarks'];
                this.vtTowerUnitX = data['visitType']['vtTowerUnit'];
                this.vtUnitOwnerX = data['visitType']['vtUnitOwner'];
                this.vtVehicleDetailsCountX = data['visitType']['vtVehicleDetailsCount'];
                this.vtVehiclesCanBeAddedByConciergeX = data['visitType']['vtVehiclesCanBeAddedByConcierge'];
                this.vtVehiclesCanBeAddedByGatekeeperX = data['visitType']['vtVehiclesCanBeAddedByGatekeeper'];
                for (let index = 0; index < data['vehData'].length; index++) {
                    this.vehData.push(data['vehData']);
                }
                resolve(true);
                console.log(data);
            });
        });
    }
    openToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    confirmCancel(ID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cancel request?',
                // message: 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Disagree',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Agree',
                        handler: () => {
                            this.cancel(ID);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancel(id) {
        return new Promise(resolve => {
            let body = {
                action: 'cancelRequest',
                id: id,
                Name: this.Name,
                Type: this.Type,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                if (data['status'] == "Success") {
                    this.openToast("Request cancelled");
                    this.router.navigateByUrl('/tabs/tab1/visitors-details');
                }
            });
        });
    }
    doRefresh(event, id) {
        console.log('Begin async operation');
        setTimeout(() => {
            return new Promise(resolve => {
                let body = {
                    action: 'visitorData',
                    id: id,
                };
                this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                    this.dataX = [];
                    this.dataAdd = [];
                    this.vehData = [];
                    this.dataX.push(data['visitData']);
                    for (let index = 0; index < data['visitAdditional'].length; index++) {
                        this.dataAdd.push(data['visitAdditional']);
                    }
                    this.carPark = [];
                    var split = data['visitData']['vuCarparkSlotNo'];
                    console.log(split + "zxczxczxc");
                    this.vtAdditionalVisitorCountX = data['visitType']['vtAdditionalVisitorCount'];
                    this.vtApprovalX = data['visitType']['vtApproval'];
                    this.vtArrivalDateX = data['visitType']['vtArrivalDate'];
                    this.vtArrivalTimeX = data['visitType']['vtArrivalTime'];
                    this.vtCanAssignIDByGatekeeperX = data['visitType']['vtCanAssignIDByGatekeeper'];
                    this.vtCanBeAddedByConciergeX = data['visitType']['vtCanBeAddedByConcierge'];
                    this.vtCanBeAddedByGatekeeperX = data['visitType']['vtCanBeAddedByGatekeeper'];
                    this.vtCarparkSlotNoX = data['visitType']['vtCarparkSlotNo'];
                    this.vtDepartureDateX = data['visitType']['vtDepartureDate'];
                    this.vtDepartureTimeX = data['visitType']['vtDepartureTime'];
                    this.vtGuestContactX = data['visitType']['vtGuestContact'];
                    this.vtGuestOnSiteX = data['visitType']['vtGuestOnSite'];
                    this.vtPrimaryVisitorAddressX = data['visitType']['vtPrimaryVisitorAddress'];
                    this.vtPrimaryVisitorContactNoX = data['visitType']['vtPrimaryVisitorContactNo'];
                    this.vtPrimaryVisitorEmailAddressX = data['visitType']['vtPrimaryVisitorEmailAddress'];
                    this.vtPrimaryVisitorIDProofDetailsX = data['visitType']['vtPrimaryVisitorIDProofDetails'];
                    this.vtPrimaryVisitorNameX = data['visitType']['vtPrimaryVisitorName'];
                    this.vtPrimaryVisitorNationalityX = data['visitType']['vtPrimaryVisitorNationality'];
                    this.vtRemarksX = data['visitType']['vtRemarks'];
                    this.vtTowerUnitX = data['visitType']['vtTowerUnit'];
                    this.vtUnitOwnerX = data['visitType']['vtUnitOwner'];
                    this.vtVehicleDetailsCountX = data['visitType']['vtVehicleDetailsCount'];
                    this.vtVehiclesCanBeAddedByConciergeX = data['visitType']['vtVehiclesCanBeAddedByConcierge'];
                    this.vtVehiclesCanBeAddedByGatekeeperX = data['visitType']['vtVehiclesCanBeAddedByGatekeeper'];
                    for (let index = 0; index < data['vehData'].length; index++) {
                        this.vehData.push(data['vehData']);
                    }
                    event.target.complete();
                    resolve(true);
                    console.log(data);
                });
            });
        }, 2000);
    }
    downloadGAF(name) {
        const fileTransfer = this.transfer.create();
        const url = 'https://www.azure-connect.com/pdf/' + name;
        this.file.checkDir(this.file.externalRootDirectory, 'downloads')
            .then(_ => 
        // Directory exists, check for file with the same name
        // _ => this.file.checkFile(this.file.externalRootDirectory, 'downloads/' + name)
        // 	.then(_ => { 
        // 		alert("A file with the same name already exists!") 
        // 	})
        // 	// File does not exist yet, we can save normally
        // 	.catch(err =>
        // 		fileTransfer.download(url, this.file.externalRootDirectory + '/downloads/' + name).then((entry) => {
        // 			alert('File saved in:  ' + entry.nativeURL);
        // 		})
        // 			.catch((err) => {
        // 				alert('Error saving file: ' + err.message);
        // 			})
        fileTransfer.download(url, this.file.externalRootDirectory + '/downloads/' + name).then((entry) => {
            alert('File saved in:  ' + entry.nativeURL);
        })
            .catch((err) => {
            alert('Error saving file: ' + err.message);
        }))
            .catch(
        // Directory does not exists, create a new one
        err => this.file.createDir(this.file.externalRootDirectory, 'downloads', false)
            .then(response => {
            alert('New folder created:  ' + response.fullPath);
            fileTransfer.download(url, this.file.externalRootDirectory + '/downloads/' + name).then((entry) => {
                alert('File saved in : /downloads/' + name);
            })
                .catch((err) => {
                alert('Error saving file:  ' + err.message);
            });
        }).catch(err => {
            alert('It was not possible to create the dir "downloads". Err: ' + err.message);
        }));
        console.log(url);
        // fileTransfer.download(url, this.file.externalRootDirectory + name).then((entry) => {
        // 	// this.fileOpener.open(entry.toURL(), this.getMimeByExt(name))
        // 	// 	.then(() => this.openToast('File is opened'))
        // 	// 	.catch(e => this.openToast('Error opening file'));
        // 	this.openToast('File downloaded in '+this.file.externalRootDirectory + name);
        // }, (error) => {
        // 	console.log(error);
        // });
    }
    getMimeByExt(name) {
        var extention = name.split('.').pop();
        for (let i = 0; i < this.extToMimes.length; i++) {
            const element = this.extToMimes[i];
            if (element.ext == extention) {
                return element.MType;
            }
        }
    }
};
VisitorListDetailsPage.ctorParameters = () => [
    { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["DocumentViewer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] }
];
VisitorListDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-list-details',
        template: __webpack_require__(/*! raw-loader!./visitor-list-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-list-details/visitor-list-details.page.html"),
        styles: [__webpack_require__(/*! ./visitor-list-details.page.scss */ "./src/app/visitor-list-details/visitor-list-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["DocumentViewer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"]])
], VisitorListDetailsPage);



/***/ })

}]);
//# sourceMappingURL=visitor-list-details-visitor-list-details-module-es2015.js.map