(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-list-details-visitor-list-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-list-details/visitor-list-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-list-details/visitor-list-details.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons size=\"small\" slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title class=\"header_title\">Visitor Request Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n<ion-content class=\"card-background-page\" *ngFor=\"let res of dataX\">\r\n  <ion-grid class=\"nopad\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"nopad\">\r\n        <div class=\"visitor_title_div\">\r\n            <h2 class=\"visitor_title\">Guest Advice Form</h2>\r\n            <div class=\"underline\"></div>\r\n            <h3 class=\"visitor_type_title\">{{res.vuVisitorType}}</h3>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"show_modal\">\r\n    <a (click)=\"openModal(res.vtTermsCondition)\">Show Description</a>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Visitor</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Visitor Advise No.:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuGuestNo}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Tower Unit No.:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuUnitTowerNo}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Arrival/Departure Details</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\" *ngIf='vtArrivalDateX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Arrival Date:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuArrivalDate}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\"  *ngIf='vtArrivalTimeX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Arrival Time:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuArrivalTime | date:'h:mm a'}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngIf='vtDepartureDateX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Departure Date:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuDepartureDate}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngIf='vtDepartureTimeX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Departure Time:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuDepartureTime | date:'h:mm a'}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Primary Visitor Details</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorNameX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Name of Primary Visitor:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuNamePrimaryVisitor}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorNationalityX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Nationality:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuPrimaryVisitorNationality}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorContactNoX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Contact Noumber:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuPrimaryVisitorContactNo}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorEmailAddressX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Email Address:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuPrimaryVisitorEmail}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorAddressX == \"checked\"'>\r\n          <ion-col size=\"6\">\r\n            <p>Address:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuPrimaryVisitorAddress}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Additional Visitor Details</div>\r\n    <div class=\"v_details\" *ngIf='vtAdditionalVisitorCountX == \"checked\"'>\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Name</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Type</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Checked In</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"font_semibold\">Checked Out</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\" *ngFor=\"let rex of dataAdd; let i = index\">\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].avName}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].avMaturity}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].avCheckInDate}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p>{{rex[i].avCheckOutDate}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">Additional Remarks</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\" *ngIf='vtRemarksX == \"checked\"'>\r\n       \r\n              <ion-col size=\"6\">\r\n                <p>Remark:</p>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <p class=\"text-right\">{{res.vuAdditionalRemarks}}</p>\r\n              </ion-col>\r\n     \r\n        </ion-row>\r\n        \r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"v_personal\">\r\n    <div class=\"v_title_detail\">To be Filled By Admin</div>\r\n    <div class=\"v_details\">\r\n      <ion-grid class=\"nopad\">\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Remark:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuRemarksByAdmin}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"v-row\">\r\n          <ion-col size=\"6\">\r\n            <p>Status:</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <p class=\"text-right\">{{res.vuApprovalStatus}}</p>\r\n            <!-- <p class=\"text-right\">Admin: Azure Urban</p>\r\n            <p class=\"text-right\">06/11/19 4:00 PM</p> -->\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-grid class=\"btns\" *ngIf=\"res.vuApprovalStatus == 'Pending'\">\r\n      <ion-row class=\"v-row pt-0\">\r\n        <ion-col size=\"12\" class=\"pt-0\">\r\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"confirmCancel(res.id)\">Cancel Request</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.nopad {\n  padding: 0;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.card-background-page .visitor_title_div {\n  background: -webkit-gradient(linear, left top, right top, from(#35343e), to(#5e5b6a));\n  background: linear-gradient(to right, #35343e, #5e5b6a);\n  padding: 4px;\n  border-radius: 5px;\n  margin: 13px 11px;\n}\n.card-background-page .visitor_title {\n  text-align: center;\n  font-size: 17px;\n  font-family: \"Assistant_bold\";\n  margin-top: 10px;\n  color: #ffffff;\n  margin-bottom: 4px;\n  font-weight: 600;\n}\n.card-background-page .visitor_type_title {\n  text-align: center;\n  font-size: 14px;\n  font-family: \"Assistant_bold\";\n  text-transform: uppercase;\n  margin-top: 0;\n  color: #ffffff;\n  font-weight: 600;\n}\n.card-background-page .v_title_detail {\n  background: #eceef7;\n  padding: 5px 11px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.card-background-page .show_modal {\n  margin: 0 11px;\n  text-align: right;\n}\n.card-background-page .show_modal a {\n  color: #0062d2;\n}\n.card-background-page .v-row {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 7px;\n}\n.card-background-page .v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.card-background-page .underline {\n  border-bottom: 1px solid #fff;\n  width: 30%;\n  margin: 0 auto;\n  margin-bottom: 4px;\n}\n.card-background-page .v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.card-background-page .text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRvci1saXN0LWRldGFpbHMvQzpcXFVzZXJzXFxBR1NJXFxEZXNrdG9wXFxBenVyZUFjY2Vzc1xcQXp1cmVcXGF6dXJlL3NyY1xcYXBwXFx2aXNpdG9yLWxpc3QtZGV0YWlsc1xcdmlzaXRvci1saXN0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC92aXNpdG9yLWxpc3QtZGV0YWlscy92aXNpdG9yLWxpc3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQ0ksa0JBQUE7QUNrQko7QURmQTtFQUFRLFVBQUE7QUNtQlI7QURqQkE7RUFDSSxxQkFBQTtBQ29CSjtBRGxCSTtFQUNJLHFGQUFBO0VBQUEsdURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQ29CUjtBRGxCSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ29CUjtBRGxCSTtFQUNJLGNBQUE7QUNvQlI7QURsQkk7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDb0JSO0FEbEJJO0VBQ0ksNkJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDb0JSO0FEbEJJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDb0JSO0FEbEJJO0VBQWEsaUJBQUE7QUNxQmpCIiwiZmlsZSI6InNyYy9hcHAvdmlzaXRvci1saXN0LWRldGFpbHMvdmlzaXRvci1saXN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuLmhlYWRlcl90aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLm5vcGFkIHtwYWRkaW5nOiAwO31cclxuXHJcbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XHJcblxyXG4gICAgLnZpc2l0b3JfdGl0bGVfZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNTM0M2UsICM1ZTViNmEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxM3B4IDExcHg7XHJcbiAgICB9XHJcbiAgICAudmlzaXRvcl90aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLnZpc2l0b3JfdHlwZV90aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC52X3RpdGxlX2RldGFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZWVmNztcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTFweDtcclxuICAgICAgICBjb2xvcjogIzI5MjkyOTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcclxuICAgIH1cclxuICAgIC5zaG93X21vZGFsIHtcclxuICAgICAgICBtYXJnaW46IDAgMTFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5zaG93X21vZGFsIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2MmQyO1xyXG4gICAgfVxyXG4gICAgLnYtcm93IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggN3B4O1xyXG4gICAgfVxyXG4gICAgLnZfcGVyc29uYWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7IFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC51bmRlcmxpbmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgLnZfZGV0YWlscyBwIHtcclxuICAgICAgICBtYXJnaW46IDA7O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzM5MzkzOTtcclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHt0ZXh0LWFsaWduOiByaWdodDt9XHJcblxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIC0tYmFja2dyb3VuZDogI2QzZDVkZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudmlzaXRvcl90aXRsZV9kaXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNTM0M2UsICM1ZTViNmEpO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxM3B4IDExcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZpc2l0b3JfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudmlzaXRvcl90eXBlX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC52X3RpdGxlX2RldGFpbCB7XG4gIGJhY2tncm91bmQ6ICNlY2VlZjc7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBjb2xvcjogIzI5MjkyOTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuc2hvd19tb2RhbCB7XG4gIG1hcmdpbjogMCAxMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuc2hvd19tb2RhbCBhIHtcbiAgY29sb3I6ICMwMDYyZDI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnYtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDZweCA3cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnZfcGVyc29uYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC51bmRlcmxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAudl9kZXRhaWxzIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzOTM5Mzk7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

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







let VisitorListDetailsPage = class VisitorListDetailsPage {
    constructor(postPvd, router, actRoute, modalController, alertController, toastController) {
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.dataX = [];
        this.dataAdd = [];
        this.dataType = [];
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
        this.loadData(this.id);
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
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                if (data['status'] == "Success") {
                    this.openToast("Request cancelled");
                    this.router.navigateByUrl('/tabs/tab1/visitors-details');
                }
            });
        });
    }
};
VisitorListDetailsPage.ctorParameters = () => [
    { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], VisitorListDetailsPage);



/***/ })

}]);
//# sourceMappingURL=visitor-list-details-visitor-list-details-module-es2015.js.map