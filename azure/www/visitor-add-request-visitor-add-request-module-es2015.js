(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-add-request-visitor-add-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-add-request/visitor-add-request.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-add-request/visitor-add-request.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons size=\"small\" slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title class=\"header_title\">Add Visitors Requests</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n  <ion-card>\r\n    <ion-card-content class=\"bglinear cardcontent\">\r\n      <ion-list class=\"bglinear\">\r\n          <ion-item class=\"bglinear2 select-border-o\">\r\n            <ion-label class=\"titlealert\">Visitor Types</ion-label>\r\n            <ion-select class=\"titleselect\" placeholder=\"Select One\" #newSelect [(ngModel)]=\"Types\" (ionChange)=\"onChangeX(Types)\">\r\n              <ion-select-option *ngFor='let res of types; let i = index'>{{res[i].vtCategory}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"show_modal\" [hidden]=ishidden>\r\n    <a (click)=\"openModal(description)\">Show Description</a>\r\n  </div>\r\n\r\n  <ion-card class=\"title_type\" [hidden]=ishidden>\r\n    <p class=\"t_gaf\">Guest Advise Form</p>\r\n    <p class=\"t_sub\">{{label}}</p>\r\n  </ion-card>\r\n\r\n  <div [hidden]=ishidden>\r\n    <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">Unit Owner/SPA/Staff Details</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\" *ngIf='vtUnitOwnerX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Unit Owner/SPA Name <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtUnitOwner\">{{fullname}}</ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtTowerUnitX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Tower Unit Number <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtTowerUnit\">{{TUN}}</ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtCarparkSlotNoX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Carpark Slot Number <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtCarparkSlotNo\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtGuestOnSiteX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Visitors On-Site Contact Person <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input checked\" type=\"text\" [(ngModel)]=\"vtGuestOnSite\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtGuestContactX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Contact Number <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input checked\" type=\"number\" [(ngModel)]=\"vtGuestContact\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">Arrival/Departure Details</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\" *ngIf='vtArrivalDateX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Arrival Date <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-datetime class=\"text_input checked\" displayFormat=\"YYYY-MM-DD\" min=\"2019-01-01\" max=\"{{maxDate}}\" [(ngModel)]=\"vtArrivalDate\" (ionChange)=\"arriveChange(vtArrivalDate)\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtArrivalTimeX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Arrival Time <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-datetime class=\"text_input checked\" id=\"vtArrivalTime\" displayFormat=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"vtArrivalTime\" (ionChange)=\"arriveTimeChange(vtArrivalTime)\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtDepartureDateX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Departure Date <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-datetime class=\"text_input checked\" displayFormat=\"YYYY-MM-DD\" min=\"{{minDepTime}}\" max=\"{{maxDate}}\" [(ngModel)]=\"vtDepartureDate\" (ionChange)=\"departChange(vtDepartureDate)\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtDepartureTimeX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Departure Time <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-datetime class=\"text_input checked\" id=\"vtDepartureTime\" displayFormat=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"vtDepartureTime\" (ionChange)=\"departTimeChange(vtDepartureTime)\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">Primary Visitor Details</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorNameX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Name of Primary Visitor <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input checked\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorName\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorNationalityX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Nationality <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input checked\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorNationality\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorContactNoX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Contact Number <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input checked\" type=\"number\" [(ngModel)]=\"vtPrimaryVisitorContactNo\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorEmailAddressX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Email Address <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input checked email\" type=\"email\" [(ngModel)]=\"vtPrimaryVisitorEmailAddress\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row\" *ngIf='vtPrimaryVisitorAddressX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Address <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input checked\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorAddress\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">Additional Visitor Details</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\" *ngIf='vtAdditionalVisitorCountX == \"checked\"'>\r\n          <ion-row class=\"v-row\">\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Count <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input\" type=\"number\" id=\"additional\" [(ngModel)]=\"vtAdditionalVisitorCount\" (keyup)=\"countVisit($event)\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row2 nopad\" >\r\n            <ion-col class=\"nopad\" size=\"6\">\r\n              <p class=\"font_semibold countAddV\">Name</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"6\">\r\n              <p class=\"font_semibold countAddV\">Type</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row2\" *ngFor=\"let countX of visitC; let i = index\">\r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"text_input visitVal\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"visitC[i].value\" ></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-select class=\"selectadult\" placeholder=\"Select One\" [(ngModel)]=\"visitC[i].valueX\">\r\n                  <ion-select-option class=\"visitSel\" value=\"Adult\">Adult</ion-select-option>\r\n                  <ion-select-option class=\"visitSel\" value=\"Children\">Children</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">Vehicle Details</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\" *ngIf='vtVehicleDetailsCountX == \"checked\"'>\r\n          <ion-row class=\"v-row\">\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label class=\"text_label\" position=\"stacked\">Count <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtVehicleDetailsCount\" (keyup)=\"countVehicle($event)\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row2 nopad\">\r\n            <ion-col class=\"nopad\" size=\"3\">\r\n              <p class=\"font_semibold countAddV\">Type</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"3\">\r\n              <p class=\"font_semibold countAddV\">Make and Model</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"3\">\r\n              <p class=\"font_semibold countAddV\">Color</p>\r\n            </ion-col>\r\n            <ion-col class=\"nopad\" size=\"3\">\r\n              <p class=\"font_semibold countAddV\">Plate No.</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"v-row2\" *ngFor=\"let countV of vehicles; let i = index\">\r\n            <ion-col size=\"3\">\r\n              <ion-input class=\"text_input\" placeholder=\"Type\" [(ngModel)]=\"vehicles[i].vehType\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-input class=\"text_input\" placeholder=\"Make and Model\" [(ngModel)]=\"vehicles[i].vehModel\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-input class=\"text_input\" placeholder=\"Color\" [(ngModel)]=\"vehicles[i].vehColor\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-input class=\"text_input\" placeholder=\"Plate No.\" [(ngModel)]=\"vehicles[i].vehPlate\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">Additional Remarks</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\" *ngIf='vtRemarksX == \"checked\"'>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-input class=\"text_input checked\" type=\"text\" placeholder=\"Type here...\" [(ngModel)]=\"vtRemarks\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          \r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">To Be Filled By Admin</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\">\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-input class=\"text_input\" type=\"text\" placeholder=\"Type here...\" [(ngModel)]=\"vtRemarksByAdmin\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n    <!-- <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">To Be Filled By Admin</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\">\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <div class=\"remark_admin\">\r\n                  <p>Remark: </p>\r\n                </div>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"v_personal\">\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row nopad\">\r\n            <ion-col size=\"12\" class=\"nopad\">\r\n              <p class=\"termsconditions\">By clicking the <span class=\"font_semibold\">\"I Accept Terms and Conditions\"</span> button below, I hereby declare that I understand and agree \r\n                to all stipulations herewith and assume full responsibility for my visitors’/guests’ conduct and actions including but not limited to incurred \r\n                monetary penalties, for the duration of their stay. All visitors/guests are to abide by the Building Policies and Procedures and AURRCC House \r\n                Rules and Regulations. Violators of any of the provisions stipulated in the said documents will be penalized and are to pay the corresponding \r\n                penalty fee. The Management reserves the right to refuse entry and/or escort erring guests out of the Property. The Developer/ AURRCC / Property \r\n                Management Office shall not be liable for any untoward incident, accident, injury, loss of property, or lives that may arise from the guests‘ \r\n                stay in Azure Urban Resort Residences.</p>\r\n              \r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"nopad\">\r\n              <ion-item>\r\n                <ion-checkbox class=\"required\" color=\"primary\" slot=\"start\" [(ngModel)]=\"condition\"></ion-checkbox>\r\n                <ion-label class=\"text_terms\">I Accept Terms and Conditions</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-grid class=\"btns\">\r\n        <ion-row class=\"v-row pt-0\">\r\n            <ion-col size=\"6\" class=\"pt-0\">\r\n              <ion-button color=\"primary\" expand=\"block\">Cancel</ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"pt-0\">\r\n              <ion-button color=\"primary\" expand=\"block\" (click)=\"submit()\">Submit</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n    </ion-grid>\r\n\r\n    \r\n  </div>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visitor_add_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-add-request.page */ "./src/app/visitor-add-request/visitor-add-request.page.ts");
/* harmony import */ var _visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../visitor-add-request-modal/visitor-add-request-modal.page */ "./src/app/visitor-add-request-modal/visitor-add-request-modal.page.ts");








const routes = [
    {
        path: '',
        component: _visitor_add_request_page__WEBPACK_IMPORTED_MODULE_6__["VisitorAddRequestPage"]
    }
];
let VisitorAddRequestPageModule = class VisitorAddRequestPageModule {
};
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



/***/ }),

/***/ "./src/app/visitor-add-request/visitor-add-request.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/visitor-add-request/visitor-add-request.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: absolute;\n}\n.alert-head.sc-ion-alert-md {\n  background: #0967d3;\n  padding: 15px 10px;\n}\n.alert-title.sc-ion-alert-md h2 {\n  font-size: 17px;\n  text-align: center;\n  color: #fff;\n}\n.titlealert {\n  font-size: 14px;\n  color: #fff;\n}\n.titleselect {\n  font-size: 14px;\n  color: #fff;\n}\n.bglinear {\n  background: -webkit-gradient(linear, left top, right top, from(#35343e), to(#5e5b6a));\n  background: linear-gradient(to right, #35343e, #5e5b6a);\n}\n.bglinear2 {\n  --background: linear-gradient(to right, #35343e, #5e5b6a);\n}\n.select-border-o {\n  --border-style: none;\n}\n.cardcontent {\n  padding: 5px 10px;\n}\n.show_modal {\n  margin: 0 11px;\n  text-align: right;\n}\n.show_modal a {\n  color: #0062d2;\n}\n.title_type {\n  --background: #ffffff;\n  margin: 10px 0;\n  border-radius: 0;\n}\n.t_gaf {\n  text-align: center;\n  font-size: 15px;\n  font-family: \"Assistant_bold\";\n  color: #404040;\n  margin-bottom: 0;\n  margin-top: 10px;\n}\n.t_sub {\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Assistant_bold\";\n  color: #404040;\n  text-transform: uppercase;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.v_title_detail {\n  background: #eceef7;\n  padding: 5px 11px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.v-row {\n  padding: 6px 0;\n}\n.v-row2 {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 0;\n}\n.item-native {\n  padding: 0 !important;\n}\n.text_label {\n  font-family: \"Assistant_reg\";\n  font-size: 14px;\n}\n.text_input {\n  color: #3e3e3e;\n  font-size: 14px;\n  font-family: \"Assistant_reg\";\n}\n.selectadult {\n  max-width: 100%;\n  font-size: 14px;\n  color: #3e3e3e;\n}\n.nopad {\n  padding: 0;\n}\n.countAddV {\n  background: #eceef7;\n  padding: 5px 10px;\n  text-align: center;\n}\n.remark_admin p {\n  color: #8c8c8c;\n}\n.termsconditions {\n  font-style: italic;\n  text-align: justify;\n  padding: 13px 16px;\n  border-bottom: 1px solid #dedede;\n}\n.text_terms {\n  color: #3e3e3e;\n  font-size: 14px;\n  font-family: \"Assistant_reg\";\n}\n.btns {\n  margin-top: 0px;\n  padding-top: 0;\n}\n.pt-0 {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRvci1hZGQtcmVxdWVzdC9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXEF6dXJlQWNjZXNzXFxBenVyZVxcYXp1cmUvc3JjXFxhcHBcXHZpc2l0b3ItYWRkLXJlcXVlc3RcXHZpc2l0b3ItYWRkLXJlcXVlc3QucGFnZS5zY3NzIiwic3JjL2FwcC92aXNpdG9yLWFkZC1yZXF1ZXN0L3Zpc2l0b3ItYWRkLXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NKO0FEQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBRENBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURDQTtFQUFhLDRCQUFBO0FDRWI7QURBQTtFQUFXLDRCQUFBO0FDSVg7QURIQTtFQUFhLDhCQUFBO0FDT2I7QUROQTtFQUFnQixpQ0FBQTtBQ1VoQjtBRFRBO0VBQVksNkJBQUE7QUNhWjtBRFpBO0VBQWlCLGtDQUFBO0FDZ0JqQjtBRGRBO0VBQ0ksa0JBQUE7QUNpQko7QURmQTtFQUNJLGtCQUFBO0FDa0JKO0FEZkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDa0JKO0FEaEJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ21CSjtBRGpCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDb0JKO0FEbEJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNxQko7QURuQkE7RUFDSSxxRkFBQTtFQUFBLHVEQUFBO0FDc0JKO0FEcEJBO0VBQ0kseURBQUE7QUN1Qko7QURyQkE7RUFDSSxvQkFBQTtBQ3dCSjtBRHRCQTtFQUNJLGlCQUFBO0FDeUJKO0FEdkJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDMEJKO0FEeEJBO0VBQ0ksY0FBQTtBQzJCSjtBRHpCQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDNEJKO0FEMUJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzZCSjtBRDNCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDOEJKO0FEM0JBO0VBQ0kscUJBQUE7QUM4Qko7QUQzQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM4Qko7QUQ1QkE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FDK0JKO0FEN0JBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZ0NKO0FEOUJBO0VBQ0ksY0FBQTtBQ2lDSjtBRC9CQTtFQUNJLGdDQUFBO0VBQ0EsY0FBQTtBQ2tDSjtBRGhDQTtFQUFjLHFCQUFBO0FDb0NkO0FEbkNBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDc0NKO0FEcENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ3VDSjtBRHJDQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3dDSjtBRHRDQTtFQUNJLFVBQUE7QUN5Q0o7QUR2Q0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMwQ0o7QUR4Q0E7RUFDSSxjQUFBO0FDMkNKO0FEekNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUM0Q0o7QUQxQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDNkNKO0FEM0NBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUM4Q0o7QUQ1Q0E7RUFBTyxjQUFBO0FDZ0RQIiwiZmlsZSI6InNyYy9hcHAvdmlzaXRvci1hZGQtcmVxdWVzdC92aXNpdG9yLWFkZC1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtcmVnLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtZXh0cmFib2xkLndvZmYyKTtcclxufVxyXG5pb24tY29udGVudCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcblxyXG4uZm9udF9yZWcge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7fVxyXG4uZm9udF9saWdodCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfbGlnaHQnO31cclxuLmZvbnRfc2VtaWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3NlbWlib2xkJzt9XHJcbi5mb250X2JvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO31cclxuLmZvbnRfZXh0cmFib2xkIHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9leHRyYWJvbGQnO31cclxuXHJcbi5oZWFkZXJfdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDk2N2QzO1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG59XHJcbi5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWQgaDIge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnRpdGxlYWxlcnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnRpdGxlc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5iZ2xpbmVhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNTM0M2UsICM1ZTViNmEpO1xyXG59XHJcbi5iZ2xpbmVhcjIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNTM0M2UsICM1ZTViNmEpO1xyXG59XHJcbi5zZWxlY3QtYm9yZGVyLW8ge1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuLmNhcmRjb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbi5zaG93X21vZGFsIHtcclxuICAgIG1hcmdpbjogMCAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNob3dfbW9kYWwgYSB7XHJcbiAgICBjb2xvcjogIzAwNjJkMjtcclxufVxyXG4udGl0bGVfdHlwZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnRfZ2FmIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4udF9zdWIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2QzZDVkZTtcclxufVxyXG5cclxuLnZfcGVyc29uYWwge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjsgXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udl90aXRsZV9kZXRhaWwge1xyXG4gICAgYmFja2dyb3VuZDogI2VjZWVmNztcclxuICAgIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XHJcbn1cclxuLnZfZGV0YWlscyBwIHtcclxuICAgIG1hcmdpbjogMDs7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzM5MzkzOTtcclxufVxyXG4udi1yb3cge1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbn1cclxuLnYtcm93MiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG59XHJcbi5pdGVtLW5hdGl2ZSB7cGFkZGluZzogMCFpbXBvcnRhbnQ7fVxyXG4udGV4dF9sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi50ZXh0X2lucHV0IHtcclxuICAgIGNvbG9yOiAjM2UzZTNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxufVxyXG4uc2VsZWN0YWR1bHQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzZTNlM2U7XHJcbn1cclxuLm5vcGFkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNvdW50QWRkViB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJlbWFya19hZG1pbiBwIHtcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG59XHJcbi50ZXJtc2NvbmRpdGlvbnMge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDEzcHggMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi50ZXh0X3Rlcm1zIHtcclxuICAgIGNvbG9yOiAjM2UzZTNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxufVxyXG4uYnRucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4ucHQtMCB7cGFkZGluZy10b3A6IDA7fSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtc2VtaWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xufVxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X3JlZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfbGlnaHQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfbGlnaHRcIjtcbn1cblxuLmZvbnRfc2VtaWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLmZvbnRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG59XG5cbi5mb250X2V4dHJhYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtbWQge1xuICBiYWNrZ3JvdW5kOiAjMDk2N2QzO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG5cbi5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWQgaDIge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aXRsZWFsZXJ0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpdGxlc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJnbGluZWFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzUzNDNlLCAjNWU1YjZhKTtcbn1cblxuLmJnbGluZWFyMiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzUzNDNlLCAjNWU1YjZhKTtcbn1cblxuLnNlbGVjdC1ib3JkZXItbyB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uY2FyZGNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLnNob3dfbW9kYWwge1xuICBtYXJnaW46IDAgMTFweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zaG93X21vZGFsIGEge1xuICBjb2xvcjogIzAwNjJkMjtcbn1cblxuLnRpdGxlX3R5cGUge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbjogMTBweCAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4udF9nYWYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50X3N1YiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBjb2xvcjogIzQwNDA0MDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkNWRlO1xufVxuXG4udl9wZXJzb25hbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi52X3RpdGxlX2RldGFpbCB7XG4gIGJhY2tncm91bmQ6ICNlY2VlZjc7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBjb2xvcjogIzI5MjkyOTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcbn1cblxuLnZfZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzkzOTM5O1xufVxuXG4udi1yb3cge1xuICBwYWRkaW5nOiA2cHggMDtcbn1cblxuLnYtcm93MiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICBwYWRkaW5nOiA2cHggMDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dF9sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGV4dF9pbnB1dCB7XG4gIGNvbG9yOiAjM2UzZTNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLnNlbGVjdGFkdWx0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM2UzZTNlO1xufVxuXG4ubm9wYWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY291bnRBZGRWIHtcbiAgYmFja2dyb3VuZDogI2VjZWVmNztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlbWFya19hZG1pbiBwIHtcbiAgY29sb3I6ICM4YzhjOGM7XG59XG5cbi50ZXJtc2NvbmRpdGlvbnMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG59XG5cbi50ZXh0X3Rlcm1zIHtcbiAgY29sb3I6ICMzZTNlM2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uYnRucyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5wdC0wIHtcbiAgcGFkZGluZy10b3A6IDA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/visitor-add-request-modal/visitor-add-request-modal.page */ "./src/app/visitor-add-request-modal/visitor-add-request-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);








let VisitorAddRequestPage = class VisitorAddRequestPage {
    constructor(modalController, postPvd, router, actRoute, toastController) {
        this.modalController = modalController;
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.types = [];
        this.typesIND = [];
        this.visitC = [];
        this.vehicles = [];
        this.maxDate = (new Date().getFullYear() + 1) + "-12-31";
        this.ErrorDateTime = 0;
        this.ErrorDateTimeArr = 0;
        this.ErrorDateTimeDep = 0;
    }
    ngOnInit() {
        console.log(history.state);
        this.newCode = localStorage.getItem("NEW_CODE");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.fullname = localStorage.getItem("FULLNAME");
        this.TUN = localStorage.getItem("TUN");
        this.userType = localStorage.getItem("TYPE_DATA");
        this.ishidden = true;
        console.log(localStorage);
        this.loadData();
    }
    openModal(description) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_3__["VisitorAddRequestModalPage"],
                componentProps: {
                    vtTermsConditionX: description,
                }
            });
            return yield modal.present();
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
    countVisit(ev) {
        this.visitC = [];
        if (parseInt(ev.target.value) > this.numberAllowed - 1) {
            this.openToast("<center>Maximum of " + (this.numberAllowed - 1) + " only!</center>");
        }
        else {
            for (var i = 0; i < ev.target.value; i++) {
                this.visitC.push({ 'value': '', 'valueX': '' });
            }
            console.log('this.visitC', this.visitC);
            // console.log(ev.target.value);
        }
    }
    countVehicle(ev) {
        this.vehicles = [];
        for (var i = 0; i < ev.target.value; i++) {
            this.vehicles.push({ 'vehType': '', 'vehModel': '', 'vehColor': '', 'vehPlate': '' });
        }
        console.log('this.vehicles', this.vehicles);
        // console.log(ev.target.value);
    }
    loadData() {
        return new Promise(resolve => {
            let body = {
                action: 'typeDetails',
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                for (var i = 0; i < data['typeData'].length; i++) {
                    this.types.push(data['typeData']);
                }
                resolve(true);
                console.log(data['typeData']);
            });
        });
    }
    onChangeX(selectedValue) {
        console.info("Selected:", this.newCode);
        this.label = selectedValue;
        this.ishidden = true;
        if (selectedValue != null) {
            this.ishidden = false;
        }
        return new Promise(resolve => {
            let body = {
                action: 'typeData',
                value: selectedValue,
                uCode: this.uCode,
                newCode: this.newCode,
                userType: this.userType
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                this.vtUnitOwnerX = data['typeDataX']['vtUnitOwner'];
                this.vtTowerUnitX = data['typeDataX']['vtTowerUnit'];
                this.vtCarparkSlotNoX = data['typeDataX']['vtCarparkSlotNo'];
                this.vtGuestOnSiteX = data['typeDataX']['vtGuestOnSite'];
                this.vtGuestContacX = data['typeDataX']['vtGuestContac'];
                this.vtArrivalDateX = data['typeDataX']['vtArrivalDate'];
                this.vtArrivalTimeX = data['typeDataX']['vtArrivalTime'];
                this.vtDepartureDateX = data['typeDataX']['vtDepartureDate'];
                this.vtDepartureTimeX = data['typeDataX']['vtDepartureTime'];
                this.vtPrimaryVisitorNameX = data['typeDataX']['vtPrimaryVisitorName'];
                this.vtGuestContactX = data['typeDataX']['vtGuestContact'];
                this.vtPrimaryVisitorNationalityX = data['typeDataX']['vtPrimaryVisitorNationality'];
                this.vtPrimaryVisitorContactNoX = data['typeDataX']['vtPrimaryVisitorContactNo'];
                this.vtPrimaryVisitorEmailAddressX = data['typeDataX']['vtPrimaryVisitorEmailAddress'];
                this.vtPrimaryVisitorAddressX = data['typeDataX']['vtPrimaryVisitorAddress'];
                this.vtAdditionalVisitorCountX = data['typeDataX']['vtAdditionalVisitorCount'];
                this.vtVehicleDetailsCountX = data['typeDataX']['vtVehicleDetailsCount'];
                this.vtRemarksX = data['typeDataX']['vtRemarks'];
                // this.typesIND.push(data['typeDataX']);
                this.description = data['typeDataX']['vtTermsCondition'];
                this.numberAllowed = data['numberAllowed'];
                resolve(true);
                console.log(data['numberAllowed']);
            });
        });
    }
    arriveChange(val) {
        var value = val.split('T');
        this.minDepTime = value[0];
        if (jquery__WEBPACK_IMPORTED_MODULE_6__("#vtArrivalTime").val() != "") {
            this.arriveTimeChange(this.vtArrivalTime);
        }
    }
    arriveTimeChange(value) {
        console.log(this.vtArrivalDate);
        var expDate = this.vtArrivalDate.split("T");
        var expTime = value.split("T");
        var expTimeSplit = expTime[1].split(":");
        var date = expDate[0] + "T" + expTimeSplit[0] + ":" + expTimeSplit[1] + ":00.000+08:00";
        this.ArrtimeChange(date);
    }
    departChange(val) {
        var value = val.split('T');
        if (jquery__WEBPACK_IMPORTED_MODULE_6__("#vtDepartureTime").val() != "") {
            this.departTimeChange(this.vtDepartureTime);
        }
    }
    departTimeChange(value) {
        console.log(this.vtDepartureDate);
        var expDate = this.vtDepartureDate.split("T");
        var expTime = value.split("T");
        var expTimeSplit = expTime[1].split(":");
        var date = expDate[0] + "T" + expTimeSplit[0] + ":" + expTimeSplit[1] + ":00.000+08:00";
        this.DeptimeChange(date);
    }
    ArrtimeChange(date) {
        console.log(date);
        return new Promise(resolve => {
            let body = {
                action: 'checkRequest',
                unit_code: this.uCode,
                newCode: this.newCode,
                departureTime: date,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                if (data['status'] == 'Allowed') {
                    this.openToast('<center>Available!</center>');
                    this.ErrorDateTimeArr = 0;
                    console.log(this.ErrorDateTimeArr + "AllowedARR");
                }
                else {
                    this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
                    this.ErrorDateTimeArr = 1;
                    console.log(this.ErrorDateTimeArr + "Error");
                }
                resolve(true);
                console.log(data['status']);
            });
        });
    }
    DeptimeChange(date) {
        console.log(date);
        return new Promise(resolve => {
            let body = {
                action: 'checkRequest',
                unit_code: this.uCode,
                newCode: this.newCode,
                departureTime: date,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                if (data['status'] == 'Allowed') {
                    this.openToast('<center>Available!</center>');
                    this.ErrorDateTimeDep = 0;
                    console.log(this.ErrorDateTimeDep + "AllowedDEP");
                }
                else {
                    this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
                    this.ErrorDateTimeDep = 1;
                    console.log(this.ErrorDateTimeDep + "NotAllowedDEP");
                }
                resolve(true);
                console.log(data['status']);
            });
        });
    }
    CKSubmitTime() {
        //Arrive
        var expDateArr = this.vtArrivalDate.split("T");
        var expTimeArr = this.vtArrivalTime.split("T");
        var expTimeSplitArr = expTimeArr[1].split(":");
        var dateArr = expDateArr[0] + "T" + expTimeSplitArr[0] + ":" + expTimeSplitArr[1] + ":00.000+08:00";
        //Depart
        var expDateDep = this.vtDepartureDate.split("T");
        var expTimeDep = this.vtDepartureTime.split("T");
        var expTimeSplitDep = expTimeDep[1].split(":");
        var dateDep = expDateDep[0] + "T" + expTimeSplitDep[0] + ":" + expTimeSplitDep[1] + ":00.000+08:00";
        return new Promise(resolve => {
            let body = {
                action: 'checkRequestAll',
                unit_code: this.uCode,
                newCode: this.newCode,
                ArrTime: dateArr,
                DepTime: dateDep,
            };
            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                if (data['status'] == 'Allowed') {
                    this.openToast('<center>Available!</center>');
                    this.ErrorDateTime = 0;
                    console.log(this.ErrorDateTime + "AllowedDEP");
                }
                else {
                    this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
                    this.ErrorDateTime = 1;
                    console.log(this.ErrorDateTime + "NotAllowedDEP");
                }
                resolve(true);
                console.log(data['status']);
            });
        });
    }
    submit() {
        var count = 0;
        this.CKSubmitTime();
        jquery__WEBPACK_IMPORTED_MODULE_6__(".checked").each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).val() == "") {
                count++;
            }
            if (count > 0) {
                if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).val() == "") {
                    jquery__WEBPACK_IMPORTED_MODULE_6__(this).css({ "background-color": '#FF0000 1px solid' });
                }
            }
        });
        if (jquery__WEBPACK_IMPORTED_MODULE_6__("#additional").val() != "") {
            var countVal = 0;
            var countSel = 0;
            jquery__WEBPACK_IMPORTED_MODULE_6__(".visitVal").each(function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).val() != "") {
                    countVal++;
                }
                if (countVal > 0) {
                    if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).val() == "") {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).css({ "border": '#FF0000 1px solid' });
                    }
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__(".visitSel").each(function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":selected")) {
                    countSel++;
                }
                if (countSel > 0) {
                    if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).val() == "") {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).css({ "border": '#FF0000 1px solid' });
                    }
                }
            });
        }
        var count_check = 0;
        if (this.condition == "1") {
            count_check++;
        }
        if (count == 0 && (countVal == jquery__WEBPACK_IMPORTED_MODULE_6__("#additional").val() || jquery__WEBPACK_IMPORTED_MODULE_6__("#additional").val() == "") && (countSel == jquery__WEBPACK_IMPORTED_MODULE_6__("#additional").val() || jquery__WEBPACK_IMPORTED_MODULE_6__("#additional").val() == "") && count_check != 0) {
            var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
            if (pattern.test(jquery__WEBPACK_IMPORTED_MODULE_6__(".email").val())) {
                if (this.ErrorDateTimeDep === 0 && this.ErrorDateTimeArr === 0) {
                    var expDateArr = this.vtArrivalDate.split("T");
                    var expTimeArr = this.vtArrivalTime.split("T");
                    var expTimeSplitArr = expTimeArr[1].split(":");
                    var dateArr = expDateArr[0] + "T" + expTimeSplitArr[0] + ":" + expTimeSplitArr[1] + ":00.000+08:00";
                    //Depart
                    var expDateDep = this.vtDepartureDate.split("T");
                    var expTimeDep = this.vtDepartureTime.split("T");
                    var expTimeSplitDep = expTimeDep[1].split(":");
                    var dateDep = expDateDep[0] + "T" + expTimeSplitDep[0] + ":" + expTimeSplitDep[1] + ":00.000+08:00";
                    return new Promise(resolve => {
                        let body = {
                            action: 'checkRequestAll',
                            unit_code: this.uCode,
                            newCode: this.newCode,
                            ArrTime: dateArr,
                            DepTime: dateDep,
                        };
                        this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                            if (data['status'] == 'Allowed') {
                                return new Promise(resolve => {
                                    let body = {
                                        action: 'addVisitors',
                                        vuVisitorType: this.label,
                                        vtUnitOwner: this.fullname,
                                        vtTowerUnit: this.TUN,
                                        vtCarparkSlotNo: this.vtCarparkSlotNo,
                                        vtGuestOnSite: this.vtGuestOnSite,
                                        vtGuestContact: this.vtGuestContact,
                                        vtArrivalDate: this.vtArrivalDate,
                                        vtArrivalTime: this.vtArrivalTime,
                                        vtDepartureDate: this.vtDepartureDate,
                                        vtDepartureTime: this.vtDepartureTime,
                                        vuNamePrimaryVisitor: this.vtPrimaryVisitorName,
                                        vtPrimaryVisitorNationality: this.vtPrimaryVisitorNationality,
                                        vtPrimaryVisitorContactNo: this.vtPrimaryVisitorContactNo,
                                        vtPrimaryVisitorEmailAddress: this.vtPrimaryVisitorEmailAddress,
                                        vtPrimaryVisitorAddress: this.vtPrimaryVisitorAddress,
                                        vtAdditionalVisitorCount: this.vtAdditionalVisitorCount,
                                        vtVehicleDetailsCount: this.vtVehicleDetailsCount,
                                        vtRemarks: this.vtRemarks,
                                        vtRemarksByAdmin: this.vtRemarksByAdmin,
                                        condition: this.condition,
                                        vuUnitCode: this.uCode,
                                        ownerCode: this.newCode,
                                        avName: this.visitC,
                                        vehicles: this.vehicles
                                    };
                                    this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                                        if (data['status'] == "Success") {
                                            this.openToast("<center>Data succesfully saved!</center>");
                                            setTimeout(() => { this.router.navigateByUrl('/tabs/tab1/visitors-details'); }, 2000);
                                        }
                                    });
                                });
                                // this.openToast('<center>Allowed.</center>');
                            }
                            else {
                                this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
                            }
                            // resolve(true);
                            console.log(data['status']);
                        });
                    });
                }
                else {
                    this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__(".email").css({ "border": '#FF0000 1px solid' });
                this.openToast("<center>Incorrect email format!</center>");
            }
        }
        else {
            this.openToast("<center>Some of the fields are required!</center>");
        }
    }
};
VisitorAddRequestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=visitor-add-request-visitor-add-request-module-es2015.js.map