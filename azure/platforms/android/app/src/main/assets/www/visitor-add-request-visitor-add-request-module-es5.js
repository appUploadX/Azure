(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-add-request-visitor-add-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-add-request/visitor-add-request.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-add-request/visitor-add-request.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"primary\">\r\n\t\t<ion-buttons size=\"small\" slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title class=\"header_title\">Add Visitors Requests</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n\t<ion-card>\r\n\t\t<ion-card-content class=\"bglinear cardcontent\">\r\n\t\t\t<ion-list class=\"bglinear\">\r\n\t\t\t\t<ion-item class=\"bglinear2 select-border-o\">\r\n\t\t\t\t\t<ion-label class=\"titlealert\">Visitor Types</ion-label>\r\n\t\t\t\t\t<ion-select class=\"titleselect\" placeholder=\"Select One\" #newSelect [(ngModel)]=\"Types\"\r\n\t\t\t\t\t\t(ionChange)=\"onChangeX(Types)\">\r\n\t\t\t\t\t\t<ion-select-option *ngFor='let res of types; let i = index'>{{res[i].vtCategory}}\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-list>\r\n\t\t</ion-card-content>\r\n\t</ion-card>\r\n\r\n\t<div class=\"show_modal\" [hidden]=ishidden>\r\n\t\t<a (click)=\"openModal(description)\">Show Description</a>\r\n\t</div>\r\n\r\n\t<ion-card class=\"title_type\" [hidden]=ishidden>\r\n\t\t<p class=\"t_gaf\">Guest Advise Form</p>\r\n\t\t<p class=\"t_sub\">{{label}}</p>\r\n\t</ion-card>\r\n\r\n\t<div [hidden]=ishidden>\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Unit Owner/SPA/Staff Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Unit Owner/SPA Name <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtUnitOwnerX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtUnitOwnerX == 'checked'\" class=\"text_input checked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtUnitOwner\">{{fullname}}\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtUnitOwnerX == 'unchecked'\" class=\"text_input unchecked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtUnitOwner\">{{fullname}}\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Tower Unit Number <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtTowerUnitX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtTowerUnitX == 'checked'\" class=\"text_input checked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtTowerUnit\">{{TUN}}</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtTowerUnitX == 'unchecked'\" class=\"text_input unchecked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtTowerUnit\">{{TUN}}</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Carpark Slot Number <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtCarparkSlotNoX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtCarparkSlotNoX == 'checked'\" class=\"text_input checked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtCarparkSlotNo\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtCarparkSlotNoX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtCarparkSlotNo\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Visitors On-Site Contact Person\r\n\t\t\t\t\t\t\t\t\t<ion-text color=\"danger\" *ngIf=\"vtGuestOnSiteX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtGuestOnSiteX == 'checked'\" class=\"text_input checked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtGuestOnSite\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtGuestOnSiteX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtGuestOnSite\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Contact Number <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtGuestContactX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtGuestContactX == 'checked'\" class=\"text_input checked\" type=\"number\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtGuestContact\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtGuestContactX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" [(ngModel)]=\"vtGuestContact\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Arrival/Departure Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Arrival Date <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtArrivalDateX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtArrivalDateX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"YYYY-MM-DD\" min=\"{{minDate}}\" max=\"{{maxDate}}\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtArrivalDate\" (ionChange)=\"arriveChange(vtArrivalDate)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtArrivalDateX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"YYYY-MM-DD\" min=\"2019-01-01\" max=\"{{maxDate}}\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtArrivalDate\" (ionChange)=\"arriveChange(vtArrivalDate)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Arrival Time <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtArrivalTimeX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtArrivalTimeX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\tid=\"vtArrivalTime\" displayFormat=\"h:mm A\" picker-format=\"h:mm A\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtArrivalTime\" (ionChange)=\"arriveTimeChange(vtArrivalTime)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtArrivalTimeX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\tid=\"vtArrivalTime\" displayFormat=\"h:mm A\" picker-format=\"h:mm A\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtArrivalTime\" (ionChange)=\"arriveTimeChange(vtArrivalTime)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Departure Date <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtDepartureDateX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtDepartureDateX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"YYYY-MM-DD\" min=\"{{minDepTime}}\" max=\"{{maxDate}}\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtDepartureDate\" (ionChange)=\"departChange(vtDepartureDate)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtDepartureDateX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"YYYY-MM-DD\" min=\"{{minDepTime}}\" max=\"{{maxDate}}\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtDepartureDate\" (ionChange)=\"departChange(vtDepartureDate)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Departure Time <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtDepartureTimeX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtDepartureTimeX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\tid=\"vtDepartureTime\" displayFormat=\"h:mm A\" picker-format=\"h:mm A\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtDepartureTime\" (ionChange)=\"departTimeChange(vtDepartureTime)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtDepartureTimeX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\tid=\"vtDepartureTime\" displayFormat=\"h:mm A\" picker-format=\"h:mm A\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtDepartureTime\" (ionChange)=\"departTimeChange(vtDepartureTime)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Primary Visitor Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Name of Primary Visitor <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtPrimaryVisitorNameX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorNameX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtPrimaryVisitorName\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorNameX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtPrimaryVisitorName\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Nationality <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtPrimaryVisitorNationalityX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorNationalityX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtPrimaryVisitorNationality\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorNationalityX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorNationality\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">ID Proof Details <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtPrimaryVisitorIDProofDetailsX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorIDProofDetailsX == 'checked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input checked\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorIDProofDetails\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorIDProofDetailsX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorIDProofDetails\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Contact Number <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtPrimaryVisitorContactNoX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorContactNoX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" [(ngModel)]=\"vtPrimaryVisitorContactNo\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorContactNoX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked\" type=\"number\" [(ngModel)]=\"vtPrimaryVisitorContactNo\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Email Address <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtPrimaryVisitorEmailAddressX == 'checked'\">\r\n\t\t\t\t\t\t\t\t\t\t*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorEmailAddressX == 'checked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input checked email\" type=\"email\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorEmailAddress\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorEmailAddressX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked email\" type=\"email\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorEmailAddress\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Address <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtPrimaryVisitorAddressX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorAddressX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtPrimaryVisitorAddress\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorAddressX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtPrimaryVisitorAddress\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Additional Visitor Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Count <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtAdditionalVisitorCountX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtAdditionalVisitorCountX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"additional\" [(ngModel)]=\"vtAdditionalVisitorCount\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"countVisit($event)\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtAdditionalVisitorCountX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"additional\" [(ngModel)]=\"vtAdditionalVisitorCount\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"countVisit($event)\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row2 nopad\">\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"6\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Name</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"6\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Type</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row2\" *ngFor=\"let countX of visitC; let i = index\">\r\n\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t<ion-input class=\"text_input visitVal\" type=\"text\" placeholder=\"Name\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitC[i].value\">\r\n\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-select class=\"selectadult\" placeholder=\"Select One\" [(ngModel)]=\"visitC[i].valueX\">\r\n\t\t\t\t\t\t\t\t\t<ion-select-option class=\"visitSel\" value=\"Adult\">Adult</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t<ion-select-option class=\"visitSel\" value=\"Children\">Children</ion-select-option>\r\n\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Vehicle Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Count <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtVehicleDetailsCountX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtVehicleDetailsCountX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"vehicleCount\" [(ngModel)]=\"vtVehicleDetailsCount\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"countVehicle($event)\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtVehicleDetailsCountX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"vehicleCount\" [(ngModel)]=\"vtVehicleDetailsCount\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"countVehicle($event)\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row2 nopad\">\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"3\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Type</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"3\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Make and Model</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"3\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Color</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"3\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Plate No.</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row2\" *ngFor=\"let countV of vehicles; let i = index\">\r\n\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<ion-select class=\"selectadult\" placeholder=\"Select One\" [(ngModel)]=\"vehicles[i].vehType\">\r\n\t\t\t\t\t\t\t\t<ion-select-option class=\"vehCountSel\" value=\"Motorcycle\">Motorcycle</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option class=\"vehCountSel\" value=\"Four Wheels\">Four Wheels\r\n\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t<!-- <ion-input class=\"text_input\" placeholder=\"Type\" [(ngModel)]=\"vehicles[i].vehType\"></ion-input> -->\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<ion-input class=\"text_input vehicleData\" placeholder=\"Make and Model\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"vehicles[i].vehModel\"></ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<ion-input class=\"text_input vehicleData\" placeholder=\"Color\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"vehicles[i].vehColor\"></ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<ion-input class=\"text_input vehicleData\" placeholder=\"Plate No.\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"vehicles[i].vehPlate\"></ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Additional Remarks <span color=\"danger\" *ngIf=\"vtRemarksX == 'checked'\">*</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtRemarksX == 'checked'\" class=\"text_input checked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Type here...\" [(ngModel)]=\"vtRemarks\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtRemarksX == 'unchecked'\" class=\"text_input unchecked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Type here...\" [(ngModel)]=\"vtRemarks\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">To Be Filled By Admin</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\">\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-input class=\"text_input\" type=\"text\" placeholder=\"Type here...\" [(ngModel)]=\"vtRemarksByAdmin\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n\t\t<!-- <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">To Be Filled By Admin</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\">\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <div class=\"remark_admin\">\r\n                  <p>Remark: </p>\r\n                </div>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div> -->\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row nopad\">\r\n\t\t\t\t\t\t<ion-col size=\"12\" class=\"nopad\">\r\n\t\t\t\t\t\t\t<p class=\"termsconditions\">By clicking the <span class=\"font_semibold\">\"I Accept Terms and\r\n\t\t\t\t\t\t\t\t\tConditions\"</span> button below, I hereby declare that I understand and agree\r\n\t\t\t\t\t\t\t\tto all stipulations herewith and assume full responsibility for my visitors’/guests’\r\n\t\t\t\t\t\t\t\tconduct and actions\r\n\t\t\t\t\t\t\t\tincluding but not limited to incurred\r\n\t\t\t\t\t\t\t\tmonetary penalties, for the duration of their stay. All visitors/guests are to abide by\r\n\t\t\t\t\t\t\t\tthe Building\r\n\t\t\t\t\t\t\t\tPolicies and Procedures and AURRCC House\r\n\t\t\t\t\t\t\t\tRules and Regulations. Violators of any of the provisions stipulated in the said\r\n\t\t\t\t\t\t\t\tdocuments will be\r\n\t\t\t\t\t\t\t\tpenalized and are to pay the corresponding\r\n\t\t\t\t\t\t\t\tpenalty fee. The Management reserves the right to refuse entry and/or escort erring\r\n\t\t\t\t\t\t\t\tguests out of the\r\n\t\t\t\t\t\t\t\tProperty. The Developer/ AURRCC / Property\r\n\t\t\t\t\t\t\t\tManagement Office shall not be liable for any untoward incident, accident, injury, loss\r\n\t\t\t\t\t\t\t\tof property, or\r\n\t\t\t\t\t\t\t\tlives that may arise from the guests‘\r\n\t\t\t\t\t\t\t\tstay in Azure Urban Resort Residences.</p>\r\n\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"12\" class=\"nopad\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-checkbox class=\"required\" color=\"primary\" slot=\"start\" [(ngModel)]=\"condition\">\r\n\t\t\t\t\t\t\t\t</ion-checkbox>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_terms\">I Accept Terms and Conditions</ion-label>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<ion-grid class=\"btns\">\r\n\t\t\t<ion-row class=\"v-row pt-0\">\r\n\t\t\t\t<ion-col size=\"6\" class=\"pt-0\">\r\n\t\t\t\t\t<ion-button color=\"primary\" expand=\"block\">Cancel</ion-button>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"6\" class=\"pt-0\">\r\n\t\t\t\t\t<ion-button color=\"primary\" expand=\"block\" (click)=\"submit()\">Submit</ion-button>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\r\n\r\n\t</div>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_visitor_add_request_modal_visitor_add_request_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/visitor-add-request-modal/visitor-add-request-modal.page */ "./src/app/visitor-add-request-modal/visitor-add-request-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);








var VisitorAddRequestPage = /** @class */ (function () {
    function VisitorAddRequestPage(modalController, postPvd, router, actRoute, toastController) {
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
    VisitorAddRequestPage.prototype.ngOnInit = function () {
        console.log(history.state);
        this.newCode = localStorage.getItem("NEW_CODE");
        this.uCode = localStorage.getItem("UNIT_CODE");
        this.fullname = localStorage.getItem("FULLNAME");
        this.TUN = localStorage.getItem("TUN");
        this.userType = localStorage.getItem("TYPE_DATA");
        this.propCode = localStorage.getItem("PROPERTY_CODE");
        this.ishidden = true;
        var dateX = new Date().toISOString().split("T");
        this.minDate = dateX[0];
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
                _this.vtPrimaryVisitorIDProofDetailsX = data['typeDataX']['vtPrimaryVisitorIDProofDetails'];
                _this.vtPrimaryVisitorContactNoX = data['typeDataX']['vtPrimaryVisitorContactNo'];
                _this.vtPrimaryVisitorEmailAddressX = data['typeDataX']['vtPrimaryVisitorEmailAddress'];
                _this.vtPrimaryVisitorAddressX = data['typeDataX']['vtPrimaryVisitorAddress'];
                _this.vtAdditionalVisitorCountX = data['typeDataX']['vtAdditionalVisitorCount'];
                _this.vtVehicleDetailsCountX = data['typeDataX']['vtVehicleDetailsCount'];
                _this.vtRemarksX = data['typeDataX']['vtRemarks'];
                _this.description = data['typeDataX']['vtTermsCondition'];
                _this.numberAllowed = data['numberAllowed'];
                resolve(true);
                console.log(data['numberAllowed']);
            });
        });
    };
    VisitorAddRequestPage.prototype.arriveChange = function (val) {
        var value = val.split('T');
        this.minDepTime = value[0];
        if (jquery__WEBPACK_IMPORTED_MODULE_6__("#vtArrivalTime").val() != "") {
            this.arriveTimeChange(this.vtArrivalTime);
        }
    };
    VisitorAddRequestPage.prototype.arriveTimeChange = function (value) {
        console.log(this.vtArrivalDate);
        var expDate = this.vtArrivalDate.split("T");
        var expTime = value.split("T");
        var expTimeSplit = expTime[1].split(":");
        var date = expDate[0] + "T" + expTimeSplit[0] + ":" + expTimeSplit[1] + ":00.000+08:00";
        this.ArrtimeChange(date);
    };
    VisitorAddRequestPage.prototype.departChange = function (val) {
        var value = val.split('T');
        if (jquery__WEBPACK_IMPORTED_MODULE_6__("#vtDepartureTime").val() != "") {
            this.departTimeChange(this.vtDepartureTime);
        }
    };
    VisitorAddRequestPage.prototype.departTimeChange = function (value) {
        console.log(this.vtDepartureDate);
        var expDate = this.vtDepartureDate.split("T");
        var expTime = value.split("T");
        var expTimeSplit = expTime[1].split(":");
        var date = expDate[0] + "T" + expTimeSplit[0] + ":" + expTimeSplit[1] + ":00.000+08:00";
        this.DeptimeChange(date);
    };
    VisitorAddRequestPage.prototype.ArrtimeChange = function (date) {
        var _this = this;
        console.log(date);
        return new Promise(function (resolve) {
            var body = {
                action: 'checkRequest',
                unit_code: _this.uCode,
                newCode: _this.newCode,
                departureTime: date,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                if (data['status'] == 'Allowed') {
                    _this.openToast('<center>Available!</center>');
                    _this.ErrorDateTimeArr = 0;
                    console.log(_this.ErrorDateTimeArr + "AllowedARR");
                }
                else {
                    _this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
                    _this.ErrorDateTimeArr = 1;
                    console.log(_this.ErrorDateTimeArr + "Error");
                }
                resolve(true);
                console.log(data['status']);
            });
        });
    };
    VisitorAddRequestPage.prototype.DeptimeChange = function (date) {
        var _this = this;
        console.log(date);
        return new Promise(function (resolve) {
            var body = {
                action: 'checkRequest',
                unit_code: _this.uCode,
                newCode: _this.newCode,
                departureTime: date,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                if (data['status'] == 'Allowed') {
                    _this.openToast('<center>Available!</center>');
                    _this.ErrorDateTimeDep = 0;
                    console.log(_this.ErrorDateTimeDep + "AllowedDEP");
                }
                else {
                    _this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
                    _this.ErrorDateTimeDep = 1;
                    console.log(_this.ErrorDateTimeDep + "NotAllowedDEP");
                }
                resolve(true);
                console.log(data['status']);
            });
        });
    };
    VisitorAddRequestPage.prototype.CKSubmitTime = function () {
        var _this = this;
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
        return new Promise(function (resolve) {
            var body = {
                action: 'checkRequestAll',
                unit_code: _this.uCode,
                newCode: _this.newCode,
                ArrTime: dateArr,
                DepTime: dateDep,
            };
            _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                if (data['status'] == 'Allowed') {
                    _this.openToast('<center>Available!</center>');
                    _this.ErrorDateTime = 0;
                    console.log(_this.ErrorDateTime + "AllowedDEP");
                }
                else {
                    _this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
                    _this.ErrorDateTime = 1;
                    console.log(_this.ErrorDateTime + "NotAllowedDEP");
                }
                resolve(true);
                console.log(data['status']);
            });
        });
    };
    VisitorAddRequestPage.prototype.submit = function () {
        var _this = this;
        var count = -2;
        // this.CKSubmitTime();
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
        if (jquery__WEBPACK_IMPORTED_MODULE_6__("#vehicleCount").val() != "") {
            var countVehVal = 0;
            var countVehSel = 0;
            jquery__WEBPACK_IMPORTED_MODULE_6__(".vehicleData").each(function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).val() != "") {
                    countVehVal++;
                }
                if (countVehVal > 0) {
                    if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).val() == "") {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).css({ "border": '#FF0000 1px solid' });
                    }
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__(".vehCountSel").each(function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":selected")) {
                    countVehSel++;
                }
                if (countVehSel > 0) {
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
                    return new Promise(function (resolve) {
                        var body = {
                            action: 'checkRequestAll',
                            unit_code: _this.uCode,
                            newCode: _this.newCode,
                            ArrTime: dateArr,
                            DepTime: dateDep,
                        };
                        _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                            if (data['status'] == 'Allowed') {
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
                                        vtPrimaryVisitorIDProofDetails: _this.vtPrimaryVisitorIDProofDetails,
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
                                        propCode: _this.propCode,
                                        avName: _this.visitC,
                                        vehicles: _this.vehicles
                                    };
                                    _this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(function (data) {
                                        if (data['status'] == "Success") {
                                            _this.openToast("<center>Data succesfully saved!</center>");
                                            setTimeout(function () { _this.router.navigateByUrl('/tabs/tab1/visitors-details'); }, 2000);
                                        }
                                    });
                                });
                                // this.openToast('<center>Allowed.</center>');
                            }
                            else {
                                _this.openToast('<center>Error! You already have a guest/s on these date and time.</center>');
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
                // $(".email").css({ "border": '#FF0000 1px solid' });
                this.openToast("<center>Incorrect email format!</center>");
            }
        }
        else {
            console.log(count);
            this.openToast("<center>Some of the fields are required!</center>");
        }
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