(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-add-request-visitor-add-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-add-request/visitor-add-request.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-add-request/visitor-add-request.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons size=\"small\" slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title class=\"header_title\">Add Visitors Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-card>\n    <ion-card-content class=\"bglinear cardcontent\">\n      <ion-list class=\"bglinear\">\n          <ion-item class=\"bglinear2 select-border-o\">\n            <ion-label class=\"titlealert\">Visitor Types</ion-label>\n            <ion-select class=\"titleselect\" placeholder=\"Select One\" #newSelect [(ngModel)]=\"Types\" (ionChange)=\"onChangeX(Types)\">\n              <ion-select-option *ngFor='let res of types; let i = index'>{{res[i].vtCategory}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"show_modal\" [hidden]=ishidden>\n    <a (click)=\"openModal(description)\">Show Description</a>\n  </div>\n\n  <ion-card class=\"title_type\" [hidden]=ishidden>\n    <p class=\"t_gaf\">Guest Advise Form</p>\n    <p class=\"t_sub\">{{label}}</p>\n  </ion-card>\n\n  <div [hidden]=ishidden>\n    <div class=\"v_personal\">\n      <div class=\"v_title_detail\">Unit Owner/SPA/Staff Details</div>\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\">\n          <ion-row class=\"v-row\" *ngIf='vtUnitOwnerX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Unit Owner/SPA Name <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtUnitOwner\">{{fullname}}</ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtTowerUnitX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Tower Unit Number <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtTowerUnit\">{{TUN}}</ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtCarparkSlotNoX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Carpark Slot Number <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtCarparkSlotNo\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtGuestOnSiteX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Visitors On-Site Contact Person <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtGuestOnSite\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtGuestContactX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Contact Number <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"number\" [(ngModel)]=\"vtGuestContact\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"v_personal\">\n      <div class=\"v_title_detail\">Arrival/Departure Details</div>\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\">\n          <ion-row class=\"v-row\" *ngIf='vtArrivalDateX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Arrival Date <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-datetime class=\"text_input\" displayFormat=\"YYYY-MM-DD\" min=\"2019-01-01\" [(ngModel)]=\"vtArrivalDate\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtArrivalTimeX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Arrival Time <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-datetime class=\"text_input\" displayFormat=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"vtArrivalTime\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtDepartureDateX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Departure Date <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-datetime class=\"text_input\" displayFormat=\"YYYY-MM-DD\" min=\"2019-01-01\" [(ngModel)]=\"vtDepartureDate\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtDepartureTimeX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Departure Time <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-datetime class=\"text_input\" displayFormat=\"h:mm A\" picker-format=\"h:mm A\"  [(ngModel)]=\"vtDepartureTime\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"v_personal\">\n      <div class=\"v_title_detail\">Primary Visitor Details</div>\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\">\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorNameX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Name of Primary Visitor <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorName\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorNationalityX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Nationality <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorNationality\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorContactNoX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Contact Number <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"number\" [(ngModel)]=\"vtPrimaryVisitorContactNo\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorEmailAddressX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Email Address <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"email\" [(ngModel)]=\"vtPrimaryVisitorEmailAddress\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorAddressX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Address <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorAddress\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"v_personal\">\n      <div class=\"v_title_detail\">Additional Visitor Details</div>\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\" *ngIf='vtAdditionalVisitorCountX == \"checked\"'>\n          <ion-row class=\"v-row\">\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Count <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"number\" [(ngModel)]=\"vtAdditionalVisitorCount\" (keyup)=\"countVisit($event)\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row2 nopad\" >\n            <ion-col class=\"nopad\" size=\"6\">\n              <p class=\"font_semibold countAddV\">Name</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"6\">\n              <p class=\"font_semibold countAddV\">Type</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row2\" *ngFor=\"let countX of visitC; let i = index\">\n            <ion-col size=\"6\">\n              <ion-input class=\"text_input\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"visitC[i].value\" ></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-select class=\"selectadult\" placeholder=\"Select One\" [(ngModel)]=\"visitC[i].valueX\">\n                  <ion-select-option value=\"Adult\">Adult</ion-select-option>\n                  <ion-select-option value=\"Children\">Children</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"v_personal\">\n      <div class=\"v_title_detail\">Vehicle Details</div>\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\" *ngIf='vtVehicleDetailsCountX == \"checked\"'>\n          <ion-row class=\"v-row\">\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label class=\"text_label\" position=\"stacked\">Count <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtVehicleDetailsCount\" (keyup)=\"countVehicle($event)\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row2 nopad\">\n            <ion-col class=\"nopad\" size=\"3\">\n              <p class=\"font_semibold countAddV\">Type</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"3\">\n              <p class=\"font_semibold countAddV\">Model</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"3\">\n              <p class=\"font_semibold countAddV\">Color</p>\n            </ion-col>\n            <ion-col class=\"nopad\" size=\"3\">\n              <p class=\"font_semibold countAddV\">Plate No.</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"v-row2\" *ngFor=\"let countV of vehicles; let i = index\">\n            <ion-col size=\"3\">\n              <ion-input class=\"text_input\" placeholder=\"Type\" [(ngModel)]=\"vehicles[i].vehType\"></ion-input>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-input class=\"text_input\" placeholder=\"Model\" [(ngModel)]=\"vehicles[i].vehModel\"></ion-input>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-input class=\"text_input\" placeholder=\"Color\" [(ngModel)]=\"vehicles[i].vehColor\"></ion-input>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-input class=\"text_input\" placeholder=\"Plate No.\" [(ngModel)]=\"vehicles[i].vehPlate\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"v_personal\">\n      <div class=\"v_title_detail\">Additional Remarks</div>\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\">\n          <ion-row class=\"v-row\" *ngIf='vtRemarksX == \"checked\"'>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-input class=\"text_input\" type=\"text\" placeholder=\"Type here...\" [(ngModel)]=\"vtRemarks\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          \n        </ion-grid>\n      </div>\n    </div>\n\n    <div class=\"v_personal\">\n      <div class=\"v_title_detail\">To Be Filled By Admin</div>\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\">\n          <ion-row class=\"v-row\">\n            <ion-col size=\"12\">\n              <ion-item>\n                <div class=\"remark_admin\">\n                  <ion-item>\n                    <ion-input class=\"text_input\" type=\"text\" placeholder=\"Type here...\" [(ngModel)]=\"vtRemarksByAdmin\"></ion-input>\n                  </ion-item>\n                </div>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n\n    <!-- <div class=\"v_personal\">\n      <div class=\"v_title_detail\">To Be Filled By Admin</div>\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\">\n          <ion-row class=\"v-row\">\n            <ion-col size=\"12\">\n              <ion-item>\n                <div class=\"remark_admin\">\n                  <p>Remark: </p>\n                </div>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div> -->\n\n    <div class=\"v_personal\">\n      <div class=\"v_details\">\n        <ion-grid class=\"nopad\">\n          <ion-row class=\"v-row nopad\">\n            <ion-col size=\"12\" class=\"nopad\">\n              <p class=\"termsconditions\">By clicking the <span class=\"font_semibold\">\"I Accept Terms and Conditions\"</span> button below, I hereby declare that I understand and agree \n                to all stipulations herewith and assume full responsibility for my visitors’/guests’ conduct and actions including but not limited to incurred \n                monetary penalties, for the duration of their stay. All visitors/guests are to abide by the Building Policies and Procedures and AURRCC House \n                Rules and Regulations. Violators of any of the provisions stipulated in the said documents will be penalized and are to pay the corresponding \n                penalty fee. The Management reserves the right to refuse entry and/or escort erring guests out of the Property. The Developer/ AURRCC / Property \n                Management Office shall not be liable for any untoward incident, accident, injury, loss of property, or lives that may arise from the guests‘ \n                stay in Azure Urban Resort Residences.</p>\n              \n            </ion-col>\n            <ion-col size=\"12\" class=\"nopad\">\n              <ion-item>\n                <ion-checkbox color=\"primary\" slot=\"start\" [(ngModel)]=\"condition\"></ion-checkbox>\n                <ion-label class=\"text_terms\">I Accept Terms and Conditions</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <ion-grid class=\"btns\">\n        <ion-row class=\"v-row pt-0\">\n            <ion-col size=\"6\" class=\"pt-0\">\n              <ion-button color=\"primary\" expand=\"block\">Cancel</ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"pt-0\">\n              <ion-button color=\"primary\" expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n            </ion-col>\n          </ion-row>\n    </ion-grid>\n\n    \n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/visitor-add-request/visitor-add-request.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/visitor-add-request/visitor-add-request.module.ts ***!
  \*******************************************************************/
/*! exports provided: VisitorAddRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorAddRequestPageModule", function() { return VisitorAddRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visitor_add_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-add-request.page */ "./src/app/visitor-add-request/visitor-add-request.page.ts");
/* harmony import */ var _visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../visitor-add-request-modal/visitor-add-request-modal.page */ "./src/app/visitor-add-request-modal/visitor-add-request-modal.page.ts");








var routes = [
    {
        path: '',
        component: _visitor_add_request_page__WEBPACK_IMPORTED_MODULE_6__["VisitorAddRequestPage"]
    }
];
var VisitorAddRequestPageModule = /** @class */ (function () {
    function VisitorAddRequestPageModule() {
    }
    VisitorAddRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_visitor_add_request_page__WEBPACK_IMPORTED_MODULE_6__["VisitorAddRequestPage"], _visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_7__["VisitorAddRequestModalPage"]],
            entryComponents: [_visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_7__["VisitorAddRequestModalPage"]]
        })
    ], VisitorAddRequestPageModule);
    return VisitorAddRequestPageModule;
}());



/***/ }),

/***/ "./src/app/visitor-add-request/visitor-add-request.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/visitor-add-request/visitor-add-request.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.alert-head.sc-ion-alert-md {\n  background: #0967d3;\n  padding: 15px 10px;\n}\n.alert-title.sc-ion-alert-md h2 {\n  font-size: 17px;\n  text-align: center;\n  color: #fff;\n}\n.titlealert {\n  font-size: 14px;\n  color: #fff;\n}\n.titleselect {\n  font-size: 14px;\n  color: #fff;\n}\n.bglinear {\n  background: -webkit-gradient(linear, left top, right top, from(#35343e), to(#5e5b6a));\n  background: linear-gradient(to right, #35343e, #5e5b6a);\n}\n.bglinear2 {\n  --background: linear-gradient(to right, #35343e, #5e5b6a);\n}\n.select-border-o {\n  --border-style: none;\n}\n.cardcontent {\n  padding: 5px 10px;\n}\n.show_modal {\n  margin: 0 11px;\n  text-align: right;\n}\n.show_modal a {\n  color: #0062d2;\n}\n.title_type {\n  --background: #ffffff;\n  margin: 10px 0;\n  border-radius: 0;\n}\n.t_gaf {\n  text-align: center;\n  font-size: 15px;\n  font-family: \"Assistant_bold\";\n  color: #404040;\n  margin-bottom: 0;\n  margin-top: 10px;\n}\n.t_sub {\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Assistant_bold\";\n  color: #404040;\n  text-transform: uppercase;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.v_title_detail {\n  background: #eceef7;\n  padding: 5px 11px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.v-row {\n  padding: 6px 0;\n}\n.v-row2 {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 0;\n}\n.item-native {\n  padding: 0 !important;\n}\n.text_label {\n  font-family: \"Assistant_reg\";\n  font-size: 14px;\n}\n.text_input {\n  color: #3e3e3e;\n  font-size: 14px;\n  font-family: \"Assistant_reg\";\n}\n.selectadult {\n  max-width: 100%;\n  font-size: 14px;\n  color: #3e3e3e;\n}\n.nopad {\n  padding: 0;\n}\n.countAddV {\n  background: #eceef7;\n  padding: 5px 10px;\n  text-align: center;\n}\n.remark_admin p {\n  color: #8c8c8c;\n}\n.termsconditions {\n  font-style: italic;\n  text-align: justify;\n  padding: 13px 16px;\n  border-bottom: 1px solid #dedede;\n}\n.text_terms {\n  color: #3e3e3e;\n  font-size: 14px;\n  font-family: \"Assistant_reg\";\n}\n.btns {\n  margin-top: 0px;\n  padding-top: 0;\n}\n.pt-0 {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRvci1hZGQtcmVxdWVzdC9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEFwcEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdmlzaXRvci1hZGQtcmVxdWVzdFxcdmlzaXRvci1hZGQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Zpc2l0b3ItYWRkLXJlcXVlc3QvdmlzaXRvci1hZGQtcmVxdWVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQ0ksa0JBQUE7QUNrQko7QURmQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNrQko7QURoQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDbUJKO0FEakJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNvQko7QURsQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ3FCSjtBRG5CQTtFQUNJLHFGQUFBO0VBQUEsdURBQUE7QUNzQko7QURwQkE7RUFDSSx5REFBQTtBQ3VCSjtBRHJCQTtFQUNJLG9CQUFBO0FDd0JKO0FEdEJBO0VBQ0ksaUJBQUE7QUN5Qko7QUR2QkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUMwQko7QUR4QkE7RUFDSSxjQUFBO0FDMkJKO0FEekJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUM0Qko7QUQxQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDNkJKO0FEM0JBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUM4Qko7QUQzQkE7RUFDSSxxQkFBQTtBQzhCSjtBRDNCQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzhCSjtBRDVCQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUMrQko7QUQ3QkE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNnQ0o7QUQ5QkE7RUFDSSxjQUFBO0FDaUNKO0FEL0JBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0FDa0NKO0FEaENBO0VBQWMscUJBQUE7QUNvQ2Q7QURuQ0E7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUNzQ0o7QURwQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDdUNKO0FEckNBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDd0NKO0FEdENBO0VBQ0ksVUFBQTtBQ3lDSjtBRHZDQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzBDSjtBRHhDQTtFQUNJLGNBQUE7QUMyQ0o7QUR6Q0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQzRDSjtBRDFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUM2Q0o7QUQzQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQzhDSjtBRDVDQTtFQUFPLGNBQUE7QUNnRFAiLCJmaWxlIjoic3JjL2FwcC92aXNpdG9yLWFkZC1yZXF1ZXN0L3Zpc2l0b3ItYWRkLXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaW9uLWNvbnRlbnQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxuXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxuLmZvbnRfbGlnaHQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2xpZ2h0Jzt9XG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cbi5mb250X2V4dHJhYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJzt9XG5cbi5oZWFkZXJfdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtbWQge1xuICAgIGJhY2tncm91bmQ6ICMwOTY3ZDM7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xufVxuLmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1tZCBoMiB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi50aXRsZWFsZXJ0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG4udGl0bGVzZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5iZ2xpbmVhciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzUzNDNlLCAjNWU1YjZhKTtcbn1cbi5iZ2xpbmVhcjIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzUzNDNlLCAjNWU1YjZhKTtcbn1cbi5zZWxlY3QtYm9yZGVyLW8ge1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuLmNhcmRjb250ZW50IHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5zaG93X21vZGFsIHtcbiAgICBtYXJnaW46IDAgMTFweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zaG93X21vZGFsIGEge1xuICAgIGNvbG9yOiAjMDA2MmQyO1xufVxuLnRpdGxlX3R5cGUge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnRfZ2FmIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50X3N1YiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcbiAgICBjb2xvcjogIzQwNDA0MDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XG59XG5cbi52X3BlcnNvbmFsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyBcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4udl90aXRsZV9kZXRhaWwge1xuICAgIGJhY2tncm91bmQ6ICNlY2VlZjc7XG4gICAgcGFkZGluZzogNXB4IDExcHg7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG4udl9kZXRhaWxzIHAge1xuICAgIG1hcmdpbjogMDs7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzkzOTM5O1xufVxuLnYtcm93IHtcbiAgICBwYWRkaW5nOiA2cHggMDtcbn1cbi52LXJvdzIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgIHBhZGRpbmc6IDZweCAwO1xufVxuLml0ZW0tbmF0aXZlIHtwYWRkaW5nOiAwIWltcG9ydGFudDt9XG4udGV4dF9sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4udGV4dF9pbnB1dCB7XG4gICAgY29sb3I6ICMzZTNlM2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XG59XG4uc2VsZWN0YWR1bHQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzZTNlM2U7XG59XG4ubm9wYWQge1xuICAgIHBhZGRpbmc6IDA7XG59XG4uY291bnRBZGRWIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZW1hcmtfYWRtaW4gcCB7XG4gICAgY29sb3I6ICM4YzhjOGM7XG59XG4udGVybXNjb25kaXRpb25zIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG59XG4udGV4dF90ZXJtcyB7XG4gICAgY29sb3I6ICMzZTNlM2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XG59XG4uYnRucyB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuLnB0LTAge3BhZGRpbmctdG9wOiAwO30iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1saWdodC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcbn1cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgYmFja2dyb3VuZDogIzA5NjdkMztcbiAgcGFkZGluZzogMTVweCAxMHB4O1xufVxuXG4uYWxlcnQtdGl0bGUuc2MtaW9uLWFsZXJ0LW1kIGgyIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGl0bGVhbGVydCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aXRsZXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5iZ2xpbmVhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM1MzQzZSwgIzVlNWI2YSk7XG59XG5cbi5iZ2xpbmVhcjIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM1MzQzZSwgIzVlNWI2YSk7XG59XG5cbi5zZWxlY3QtYm9yZGVyLW8ge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmNhcmRjb250ZW50IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5zaG93X21vZGFsIHtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2hvd19tb2RhbCBhIHtcbiAgY29sb3I6ICMwMDYyZDI7XG59XG5cbi50aXRsZV90eXBlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnRfZ2FmIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGNvbG9yOiAjNDA0MDQwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udF9zdWIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIC0tYmFja2dyb3VuZDogI2QzZDVkZTtcbn1cblxuLnZfcGVyc29uYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4udl90aXRsZV9kZXRhaWwge1xuICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgY29sb3I6ICMyOTI5Mjk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi52X2RldGFpbHMgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzM5MzkzOTtcbn1cblxuLnYtcm93IHtcbiAgcGFkZGluZzogNnB4IDA7XG59XG5cbi52LXJvdzIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgcGFkZGluZzogNnB4IDA7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLnRleHRfbGFiZWwge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRleHRfaW5wdXQge1xuICBjb2xvcjogIzNlM2UzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5zZWxlY3RhZHVsdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzNlM2UzZTtcbn1cblxuLm5vcGFkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvdW50QWRkViB7XG4gIGJhY2tncm91bmQ6ICNlY2VlZjc7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZW1hcmtfYWRtaW4gcCB7XG4gIGNvbG9yOiAjOGM4YzhjO1xufVxuXG4udGVybXNjb25kaXRpb25zIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxM3B4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xufVxuXG4udGV4dF90ZXJtcyB7XG4gIGNvbG9yOiAjM2UzZTNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmJ0bnMge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucHQtMCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/visitor-add-request/visitor-add-request.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/visitor-add-request/visitor-add-request.page.ts ***!
  \*****************************************************************/
/*! exports provided: VisitorAddRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorAddRequestPage", function() { return VisitorAddRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/visitor-add-request-modal/visitor-add-request-modal.page */ "./src/app/visitor-add-request-modal/visitor-add-request-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");







var VisitorAddRequestPage = /** @class */ (function () {
    function VisitorAddRequestPage(modalController, postPvd, router, actRoute, toastController) {
        // this.formgroup = formbuilder.group({
        //   vtUnitOwner: ['',Validators.required],
        //   vtTowerUnit: ['',Validators.required],
        // });
        this.modalController = modalController;
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.types = [];
        this.typesIND = [];
        this.visitC = [];
        this.vehicles = [];
    }
    VisitorAddRequestPage.prototype.ngOnInit = function () {
        console.log(history.state);
        this.newCode = localStorage.getItem("NEW_CODE");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.fullname = localStorage.getItem("FULLNAME");
        this.TUN = localStorage.getItem("TUN");
        this.userType = localStorage.getItem("TYPE_DATA");
        this.ishidden = true;
        console.log(localStorage);
        this.loadData();
    };
    VisitorAddRequestPage.prototype.openModal = function (description) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_3__["VisitorAddRequestModalPage"],
                            componentProps: {
                                vtTermsConditionX: description,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitorAddRequestPage.prototype.openToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    VisitorAddRequestPage.prototype.countVisit = function (ev) {
        this.visitC = [];
        if (parseInt(ev['key']) > this.numberAllowed) {
            this.openToast("Maximum of " + this.numberAllowed + " only!");
        }
        else {
            for (var i = 0; i < ev.target.value; i++) {
                this.visitC.push({ 'value': '', 'valueX': '' });
            }
            console.log('this.visitC', this.visitC);
            // console.log(ev.target.value);
        }
    };
    VisitorAddRequestPage.prototype.countVehicle = function (ev) {
        this.vehicles = [];
        for (var i = 0; i < ev.target.value; i++) {
            this.vehicles.push({ 'vehType': '', 'vehModel': '', 'vehColor': '', 'vehPlate': '' });
        }
        console.log('this.vehicles', this.vehicles);
        // console.log(ev.target.value);
    };
    VisitorAddRequestPage.prototype.loadData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                action: 'typeDetails',
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                for (var i = 0; i < data['typeData'].length; i++) {
                    _this.types.push(data['typeData']);
                }
                resolve(true);
                console.log(data['typeData']);
            });
        });
    };
    VisitorAddRequestPage.prototype.onChangeX = function (selectedValue) {
        var _this = this;
        console.info("Selected:", this.newCode);
        this.label = selectedValue;
        this.ishidden = true;
        if (selectedValue != null) {
            this.ishidden = false;
        }
        return new Promise(function (resolve) {
            var body = {
                action: 'typeData',
                value: selectedValue,
                uCode: _this.uCode,
                newCode: _this.newCode,
                userType: _this.userType
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                _this.vtUnitOwnerX = data['typeDataX']['vtUnitOwner'];
                _this.vtTowerUnitX = data['typeDataX']['vtTowerUnit'];
                _this.vtCarparkSlotNoX = data['typeDataX']['vtCarparkSlotNo'];
                _this.vtGuestOnSiteX = data['typeDataX']['vtGuestOnSite'];
                _this.vtGuestContacX = data['typeDataX']['vtGuestContac'];
                _this.vtArrivalDateX = data['typeDataX']['vtArrivalDate'];
                _this.vtArrivalTimeX = data['typeDataX']['vtArrivalTime'];
                _this.vtDepartureDateX = data['typeDataX']['vtDepartureDate'];
                _this.vtDepartureTimeX = data['typeDataX']['vtDepartureTime'];
                _this.vtPrimaryVisitorNameX = data['typeDataX']['vtPrimaryVisitorName'];
                _this.vtGuestContactX = data['typeDataX']['vtGuestContact'];
                _this.vtPrimaryVisitorNationalityX = data['typeDataX']['vtPrimaryVisitorNationality'];
                _this.vtPrimaryVisitorContactNoX = data['typeDataX']['vtPrimaryVisitorContactNo'];
                _this.vtPrimaryVisitorEmailAddressX = data['typeDataX']['vtPrimaryVisitorEmailAddress'];
                _this.vtPrimaryVisitorAddressX = data['typeDataX']['vtPrimaryVisitorAddress'];
                _this.vtAdditionalVisitorCountX = data['typeDataX']['vtAdditionalVisitorCount'];
                _this.vtVehicleDetailsCountX = data['typeDataX']['vtVehicleDetailsCount'];
                _this.vtRemarksX = data['typeDataX']['vtRemarks'];
                // this.typesIND.push(data['typeDataX']);
                _this.description = data['typeDataX']['vtTermsCondition'];
                _this.numberAllowed = data['numberAllowed'];
                resolve(true);
                console.log(data['numberAllowed']);
            });
        });
    };
    VisitorAddRequestPage.prototype.submit = function () {
        var _this = this;
        // console.log(this.visitC);
        return new Promise(function (resolve) {
            var body = {
                action: 'addVisitors',
                vuVisitorType: _this.label,
                vtUnitOwner: _this.fullname,
                vtTowerUnit: _this.TUN,
                vtCarparkSlotNo: _this.vtCarparkSlotNo,
                vtGuestOnSite: _this.vtGuestOnSite,
                vtGuestContact: _this.vtGuestContact,
                vtArrivalDate: _this.vtArrivalDate,
                vtArrivalTime: _this.vtArrivalTime,
                vtDepartureDate: _this.vtDepartureDate,
                vtDepartureTime: _this.vtDepartureTime,
                vuNamePrimaryVisitor: _this.vtPrimaryVisitorName,
                vtPrimaryVisitorNationality: _this.vtPrimaryVisitorNationality,
                vtPrimaryVisitorContactNo: _this.vtPrimaryVisitorContactNo,
                vtPrimaryVisitorEmailAddress: _this.vtPrimaryVisitorEmailAddress,
                vtPrimaryVisitorAddress: _this.vtPrimaryVisitorAddress,
                vtAdditionalVisitorCount: _this.vtAdditionalVisitorCount,
                vtVehicleDetailsCount: _this.vtVehicleDetailsCount,
                vtRemarks: _this.vtRemarks,
                vtRemarksByAdmin: _this.vtRemarksByAdmin,
                condition: _this.condition,
                vuUnitCode: _this.uCode,
                ownerCode: _this.newCode,
                avName: _this.visitC,
                vehicles: _this.vehicles
                // vuVehicleDetailsType: this.vuVehicleDetailsType,
                // vuVehicleDetailsModel: this.vuVehicleDetailsModel,
                // vuVehicleDetailsColor: this.vuVehicleDetailsColor,
                // vuVehicleDetailsPlateNo: this.vuVehicleDetailsPlateNo,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                // this.router.navigate(['/user-details']);
                if (data['status'] == "Success") {
                    _this.openToast("Data succesfully saved!");
                    setTimeout(function () { _this.router.navigateByUrl('/tabs/tab1/visitors-details'); }, 2000);
                }
            });
        });
    };
    VisitorAddRequestPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__["PostProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    VisitorAddRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitor-add-request',
            template: __webpack_require__(/*! raw-loader!./visitor-add-request.page.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-add-request/visitor-add-request.page.html"),
            styles: [__webpack_require__(/*! ./visitor-add-request.page.scss */ "./src/app/visitor-add-request/visitor-add-request.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], VisitorAddRequestPage);
    return VisitorAddRequestPage;
}());



/***/ })

}]);
//# sourceMappingURL=visitor-add-request-visitor-add-request-module-es5.js.map