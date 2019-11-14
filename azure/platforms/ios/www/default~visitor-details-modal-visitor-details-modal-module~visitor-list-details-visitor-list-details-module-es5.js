(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~visitor-details-modal-visitor-details-modal-module~visitor-list-details-visitor-list-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-details-modal/visitor-details-modal.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-details-modal/visitor-details-modal.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Description</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"btn_close\" (click)=\"closeModal()\">\n        Close\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"v_description\">\n              <p><span class=\"font_bold\">Completed Guest Advise Form</span> must be submitted two (2) working days before guests’ arrival for approval.</p>\n              <p>The Unit Owner/SPA must provide an on-site Contact Person, Name and Contact Number for their guests to contact upon \n                arrival and for the duration of their stay in Azure. Unit Owner/ SPA is responsible of informing their guests that \n                their presence at Azure is subject to the House Rules and Regulations of AURCC.</p>\n              <p>The Unit Owner/ SPA must attach herewith a photo/scan copy of their visitors’/guests’ Passport for Foreigners, Gov‘t Issued ID for locals.</p>\n              <p>Please bring valid ID each to present for verification and to deposit in exchange of visitors pass at the Concierge for check-in.</p>\n              <p>The Unit Owner / SPA must remind their guest to bring and deposit individual ID’s depending on their bedroom. For Foreigners, \n                they need to deposit photocopy of their passport. For Locals they need to deposit their Government issued ID’s while they are \n                staying inside the premises of the property.</p>\n              <p>Once request is approved, the Unit Owner will receive an email notification as well as the Primary Guest. The email to Primary Guest contains \n                the PDF Barcoded Approved GAF that should be printed to present to this to the Main Entrance Gate on the day of their arrival.</p>\n              <p>On the day of the arrival of the Unit Owner's/SPA‘s Visitor/Guest at Azure, they will then present the approved Guest Advise \n                Form at the Main Entrance Gate to be allowed entry to Azure. NO APPROVED GUEST ADVISE FORM PRESENTED BY GUEST, NO ENTRY.</p>\n              <p>For Unit Owners who own a carpark slot and wish to authorize their visitors/ guests to utilize the parking slot, please \n                indicate your parking slot number and write the instructions in the <span class=\"font_bold\">Additional Remarks</span> section below.</p>\n  \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/visitor-details-modal/visitor-details-modal.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/visitor-details-modal/visitor-details-modal.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\nion-grid {\n  padding: 0 20px;\n}\n.v_description p {\n  font-size: 14px;\n  text-align: justify;\n}\n.btn_close {\n  text-transform: inherit;\n  font-family: \"Assistant_reg\";\n  font-size: 18px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVjaGVhZ3NpL0Rlc2t0b3AvYXp1cmUvc3JjL2FwcC92aXNpdG9yLWRldGFpbHMtbW9kYWwvdmlzaXRvci1kZXRhaWxzLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlzaXRvci1kZXRhaWxzLW1vZGFsL3Zpc2l0b3ItZGV0YWlscy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBREVBO0VBQ0ksNEJBQUE7QUNBSjtBREVBO0VBQ0ksOEJBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7QUNFSjtBREFBO0VBQ0ksNkJBQUE7QUNHSjtBRERBO0VBQ0ksa0NBQUE7QUNJSjtBRERBO0VBQ0ksNEJBQUE7QUNJSjtBREZBO0VBQ0ksZUFBQTtBQ0tKO0FESEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNNSjtBREZBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvdmlzaXRvci1kZXRhaWxzLW1vZGFsL3Zpc2l0b3ItZGV0YWlscy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWxpZ2h0LndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9zZW1pYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1ib2xkLndvZmYyKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5cbi5mb250X3JlZyB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcbn1cbi5mb250X2xpZ2h0IHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XG59XG4uZm9udF9zZW1pYm9sZCB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xufVxuLmZvbnRfYm9sZCB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XG59XG4uZm9udF9leHRyYWJvbGQge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xufVxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn1cbi52X2Rlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5cbi5idG5fY2xvc2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG4uZm9udF9yZWcge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5mb250X2xpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2xpZ2h0XCI7XG59XG5cbi5mb250X3NlbWlib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG59XG5cbi5mb250X2JvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xufVxuXG4uZm9udF9leHRyYWJvbGQge1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfZXh0cmFib2xkXCI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnZfZGVzY3JpcHRpb24gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmJ0bl9jbG9zZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/visitor-details-modal/visitor-details-modal.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/visitor-details-modal/visitor-details-modal.page.ts ***!
  \*********************************************************************/
/*! exports provided: VisitorDetailsModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorDetailsModalPage", function() { return VisitorDetailsModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var VisitorDetailsModalPage = /** @class */ (function () {
    function VisitorDetailsModalPage(modalController) {
        this.modalController = modalController;
    }
    VisitorDetailsModalPage.prototype.ngOnInit = function () {
    };
    VisitorDetailsModalPage.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VisitorDetailsModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    VisitorDetailsModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitor-details-modal',
            template: __webpack_require__(/*! raw-loader!./visitor-details-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-details-modal/visitor-details-modal.page.html"),
            styles: [__webpack_require__(/*! ./visitor-details-modal.page.scss */ "./src/app/visitor-details-modal/visitor-details-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], VisitorDetailsModalPage);
    return VisitorDetailsModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~visitor-details-modal-visitor-details-modal-module~visitor-list-details-visitor-list-details-module-es5.js.map