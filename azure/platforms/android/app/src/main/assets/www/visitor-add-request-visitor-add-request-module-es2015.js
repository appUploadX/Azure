(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-add-request-visitor-add-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-add-request/visitor-add-request.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-add-request/visitor-add-request.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"primary\">\r\n\t\t<ion-buttons size=\"small\" slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title class=\"header_title\">Add Visitors Requests</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n\t<ion-card>\r\n\t\t<ion-card-content class=\"bglinear cardcontent\">\r\n\t\t\t<ion-list class=\"bglinear\">\r\n\t\t\t\t<ion-item class=\"bglinear2 select-border-o\">\r\n\t\t\t\t\t<ion-label class=\"titlealert\">Visitor Types</ion-label>\r\n\t\t\t\t\t<ion-select class=\"titleselect\" placeholder=\"Select One\" #newSelect [(ngModel)]=\"Types\"\r\n\t\t\t\t\t\t(ionChange)=\"onChangeX(Types)\">\r\n\t\t\t\t\t\t<ion-select-option *ngFor='let res of types; let i = index'>{{res[i].vtCategory}}\r\n\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-list>\r\n\t\t</ion-card-content>\r\n\t</ion-card>\r\n\r\n\t<div class=\"show_modal\" [hidden]=ishidden>\r\n\t\t<a (click)=\"openModal(description)\">Show Description</a>\r\n\t</div>\r\n\r\n\t<ion-card class=\"title_type\" [hidden]=ishidden>\r\n\t\t<p class=\"t_gaf\">Guest Advise Form</p>\r\n\t\t<p class=\"t_sub\">{{label}}</p>\r\n\t</ion-card>\r\n\r\n\t<div [hidden]=ishidden>\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Unit Owner/SPA/Staff Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Unit Owner/SPA Name <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtUnitOwnerX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input class=\"text_input\" type=\"text\" [readonly]=\"isReadonly\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtUnitOwner\">{{fullname}}</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Tower Unit Number <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtTowerUnitX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input class=\"text_input\" type=\"text\" [readonly]=\"isReadonly\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtTowerUnit\">{{TUN}}</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Carpark Slot Number <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtCarparkSlotNoX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<!-- <ion-input class=\"text_input\" type=\"text\" [(ngModel)]=\"vtCarparkSlotNo\">\r\n\t\t\t\t\t\t\t\t</ion-input> -->\r\n\t\t\t\t\t\t\t\t<ion-select multiple=\"true\" [(ngModel)]=\"vtCarparkSlotNo\">\r\n\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let park of parkDetails; let pk = index\">{{park[pk].pprefix+' '+park[pk].pallocation+' - '+park[pk].ptype}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t</ion-select>\r\n\r\n\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Visitors On-Site Contact Person\r\n\t\t\t\t\t\t\t\t\t<ion-text color=\"danger\" *ngIf=\"vtGuestOnSiteX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtGuestOnSiteX == 'checked'\" class=\"text_input checked text\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" #XvtGuestOnSite id=\"XvtGuestOnSite\" (focusout)=\"textChange(vtGuestOnSite, XvtGuestOnSite)\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtGuestOnSite\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtGuestOnSiteX == 'unchecked'\" class=\"text_input unchecked text\"\r\n\t\t\t\t\t\t\t\t\t#XvtGuestOnSite (focusout)=\"textChange(vtGuestOnSite, XvtGuestOnSite)\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtGuestOnSite\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Contact Number <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtGuestContactX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtGuestContactX == 'checked'\" class=\"text_input checked\" type=\"number\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtGuestContact\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtGuestContactX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" [(ngModel)]=\"vtGuestContact\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Arrival/Departure Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Arrival Date <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtArrivalDateX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtArrivalDateX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"YYYY-MM-DD\" min=\"{{minDate}}\" max=\"{{maxDate}}\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtArrivalDate\" (ionChange)=\"arriveChange(vtArrivalDate)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtArrivalDateX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"YYYY-MM-DD\" min=\"{{minDate}}\" max=\"{{maxDate}}\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtArrivalDate\" (ionChange)=\"arriveChange(vtArrivalDate)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Arrival Time <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtArrivalTimeX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtArrivalTimeX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\tid=\"vtArrivalTime\" min=\"{{minDateArrX}}\" [readonly]=\"isATime\" displayFormat=\"HH:mm\" \r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtArrivalTime\" (ionChange)=\"arriveTimeChange(vtArrivalTime)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtArrivalTimeX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\tid=\"vtArrivalTime\" min=\"{{minDateArrX}}\" [readonly]=\"isATime\" displayFormat=\"HH:mm\" \r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtArrivalTime\" (ionChange)=\"arriveTimeChange(vtArrivalTime)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Departure Date <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtDepartureDateX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtDepartureDateX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"YYYY-MM-DD\" min=\"{{minDepTime}}\" max=\"{{maxDate}}\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtDepartureDate\" (ionChange)=\"departChange(vtDepartureDate)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtDepartureDateX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"YYYY-MM-DD\" min=\"{{minDepTime}}\" max=\"{{maxDate}}\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtDepartureDate\" (ionChange)=\"departChange(vtDepartureDate)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Departure Time <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtDepartureTimeX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtDepartureTimeX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\tid=\"vtDepartureTime\" [readonly]=\"isDTime\" min=\"{{minDepTimeX}}\" displayFormat=\"HH:mm\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtDepartureTime\" (ionChange)=\"departTimeChange(vtDepartureTime)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t<ion-datetime *ngIf=\"vtDepartureTimeX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\tid=\"vtDepartureTime\" [readonly]=\"isDTime\" min=\"{{minDepTimeX}}\" displayFormat=\"HH:mm\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtDepartureTime\" (ionChange)=\"departTimeChange(vtDepartureTime)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Primary Visitor Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Name of Primary Visitor <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtPrimaryVisitorNameX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorNameX == 'checked'\" class=\"text_input checked text\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" #XvtPrimaryVisitorName\r\n\t\t\t\t\t\t\t\t\t(focusout)=\"textChange(vtPrimaryVisitorName, XvtPrimaryVisitorName)\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorName\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorNameX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked text\" type=\"text\" #XvtPrimaryVisitorName\r\n\t\t\t\t\t\t\t\t\t(focusout)=\"textChange(vtPrimaryVisitorName, XvtPrimaryVisitorName)\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorName\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Nationality <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtPrimaryVisitorNationalityX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorNationalityX == 'checked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input checked text\" type=\"text\" #XvtPrimaryVisitorNationality\r\n\t\t\t\t\t\t\t\t\t(focusout)=\"textChange(vtPrimaryVisitorNationality, XvtPrimaryVisitorNationality)\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorNationality\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorNationalityX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked text\" type=\"text\" #XvtPrimaryVisitorNationality\r\n\t\t\t\t\t\t\t\t\t(focusout)=\"textChange(vtPrimaryVisitorNationality, XvtPrimaryVisitorNationality)\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorNationality\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">ID Proof Details <ion-text\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"danger\" *ngIf=\"vtPrimaryVisitorIDProofDetailsX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorIDProofDetailsX == 'checked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input checked\" type=\"text\" [(ngModel)]=\"vtPrimaryVisitorIDProofDetails\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorIDProofDetailsX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorIDProofDetails\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Contact Number <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtPrimaryVisitorContactNoX == 'checked'\">*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorContactNoX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" [(ngModel)]=\"vtPrimaryVisitorContactNo\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorContactNoX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked\" type=\"number\" [(ngModel)]=\"vtPrimaryVisitorContactNo\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Email Address <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtPrimaryVisitorEmailAddressX == 'checked'\">\r\n\t\t\t\t\t\t\t\t\t\t*</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorEmailAddressX == 'checked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input checked email\" type=\"email\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorEmailAddress\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorEmailAddressX == 'unchecked'\"\r\n\t\t\t\t\t\t\t\t\tclass=\"text_input unchecked email\" type=\"email\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtPrimaryVisitorEmailAddress\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Address <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtPrimaryVisitorAddressX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorAddressX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtPrimaryVisitorAddress\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtPrimaryVisitorAddressX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"vtPrimaryVisitorAddress\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Additional Visitor Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Count <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtAdditionalVisitorCountX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-input class=\"text_input\" type=\"number\" id=\"additional\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtAdditionalVisitorCount\" (keyup)=\"countVisit($event)\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<!-- <ion-input *ngIf=\"vtAdditionalVisitorCountX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"additional\" [(ngModel)]=\"vtAdditionalVisitorCount\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"countVisit($event)\">\r\n\t\t\t\t\t\t\t\t</ion-input> -->\r\n\t\t\t\t\t\t\t\t<!-- <ion-input *ngIf=\"vtAdditionalVisitorCountX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"additional\" [(ngModel)]=\"vtAdditionalVisitorCount\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"countVisit($event)\">\r\n\t\t\t\t\t\t\t\t</ion-input> -->\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row2 nopad\">\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"6\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Name</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"6\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Type</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row2\" *ngFor=\"let countX of visitC; let i = index\">\r\n\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t<ion-input class=\"text_input visitVal\" type=\"text\" placeholder=\"Name\" id=\"AddiName{{i}}\" #AddiName{{i}} (focusout)=\"AdditionalName($event, 'AddiName'+i, 'AddiSelect'+i)\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitC[i].value\">\r\n\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-select class=\"selectadult\" placeholder=\"Select One\" [(ngModel)]=\"visitC[i].valueX\" id=\"AddiSelect{{i}}\" #AddiSelect{{i}} (click)=\"theClick($event)\" [disabled]=\"disableSelect\"> \r\n\t\t\t\t\t\t\t\t\t<ion-select-option class=\"visitSel\" value=\"Adult\">Adult</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t<ion-select-option class=\"visitSel\" value=\"Children\">Child</ion-select-option>\r\n\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Vehicle Details</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_label\" position=\"stacked\">Count <ion-text color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"vtVehicleDetailsCountX == 'checked'\">*\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t<!-- <ion-input class=\"text_input\" type=\"number\" id=\"vehicleCount\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vtVehicleDetailsCount\" (keyup)=\"countVehicle($event)\"></ion-input> -->\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtVehicleDetailsCountX == 'checked'\" class=\"text_input checked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"vehicleCount\" [(ngModel)]=\"vtVehicleDetailsCount\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"countVehicle($event)\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtVehicleDetailsCountX == 'unchecked'\" class=\"text_input unchecked\"\r\n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"vehicleCount\" [(ngModel)]=\"vtVehicleDetailsCount\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"countVehicle($event)\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row2 nopad\">\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"3\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Type</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"3\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Make and Model</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"3\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Color</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col class=\"nopad\" size=\"3\">\r\n\t\t\t\t\t\t\t<p class=\"font_semibold countAddV\">Plate No.</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"v-row2\" *ngFor=\"let countV of vehicles; let i = index\">\r\n\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<ion-select class=\"selectadult\" placeholder=\"Select One\" [(ngModel)]=\"vehicles[i].vehType\">\r\n\t\t\t\t\t\t\t\t<ion-select-option class=\"vehCountSel\" value=\"Motorcycle\">Motorcycle</ion-select-option>\r\n\t\t\t\t\t\t\t\t<ion-select-option class=\"vehCountSel\" value=\"Four Wheels\">Four Wheels\r\n\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t<!-- <ion-input class=\"text_input\" placeholder=\"Type\" [(ngModel)]=\"vehicles[i].vehType\"></ion-input> -->\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<ion-input class=\"text_input vehicleData\" placeholder=\"Make and Model\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"vehicles[i].vehModel\"></ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<ion-input class=\"text_input vehicleData\" placeholder=\"Color\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"vehicles[i].vehColor\"></ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<ion-input class=\"text_input vehicleData\" placeholder=\"Plate No.\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"vehicles[i].vehPlate\"></ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_title_detail\">Additional Remarks <span color=\"danger\" *ngIf=\"vtRemarksX == 'checked'\">*</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row\">\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtRemarksX == 'checked'\" class=\"text_input checked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Type here...\" [(ngModel)]=\"vtRemarks\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t<ion-input *ngIf=\"vtRemarksX == 'unchecked'\" class=\"text_input unchecked\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Type here...\" [(ngModel)]=\"vtRemarks\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">To Be Filled By Admin</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\">\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-input class=\"text_input\" type=\"text\" placeholder=\"Type here...\" [(ngModel)]=\"vtRemarksByAdmin\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n\t\t<!-- <div class=\"v_personal\">\r\n      <div class=\"v_title_detail\">To Be Filled By Admin</div>\r\n      <div class=\"v_details\">\r\n        <ion-grid class=\"nopad\">\r\n          <ion-row class=\"v-row\">\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <div class=\"remark_admin\">\r\n                  <p>Remark: </p>\r\n                </div>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div> -->\r\n\r\n\t\t<div class=\"v_personal\">\r\n\t\t\t<div class=\"v_details\">\r\n\t\t\t\t<ion-grid class=\"nopad\">\r\n\t\t\t\t\t<ion-row class=\"v-row nopad\">\r\n\t\t\t\t\t\t<ion-col size=\"12\" class=\"nopad\">\r\n\t\t\t\t\t\t\t<p class=\"termsconditions\">By clicking the <span class=\"font_semibold\">\"I Accept Terms and\r\n\t\t\t\t\t\t\t\t\tConditions\"</span> button below, I hereby declare that I understand and agree\r\n\t\t\t\t\t\t\t\tto all stipulations herewith and assume full responsibility for my visitors’/guests’\r\n\t\t\t\t\t\t\t\tconduct and actions\r\n\t\t\t\t\t\t\t\tincluding but not limited to incurred\r\n\t\t\t\t\t\t\t\tmonetary penalties, for the duration of their stay. All visitors/guests are to abide by\r\n\t\t\t\t\t\t\t\tthe Building\r\n\t\t\t\t\t\t\t\tPolicies and Procedures and AURRCC House\r\n\t\t\t\t\t\t\t\tRules and Regulations. Violators of any of the provisions stipulated in the said\r\n\t\t\t\t\t\t\t\tdocuments will be\r\n\t\t\t\t\t\t\t\tpenalized and are to pay the corresponding\r\n\t\t\t\t\t\t\t\tpenalty fee. The Management reserves the right to refuse entry and/or escort erring\r\n\t\t\t\t\t\t\t\tguests out of the\r\n\t\t\t\t\t\t\t\tProperty. The Developer/ AURRCC / Property\r\n\t\t\t\t\t\t\t\tManagement Office shall not be liable for any untoward incident, accident, injury, loss\r\n\t\t\t\t\t\t\t\tof property, or\r\n\t\t\t\t\t\t\t\tlives that may arise from the guests‘\r\n\t\t\t\t\t\t\t\tstay in Azure Urban Resort Residences.</p>\r\n\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"12\" class=\"nopad\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-checkbox class=\"required\" color=\"primary\" slot=\"start\" [(ngModel)]=\"condition\">\r\n\t\t\t\t\t\t\t\t</ion-checkbox>\r\n\t\t\t\t\t\t\t\t<ion-label class=\"text_terms\">I Accept Terms and Conditions</ion-label>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<ion-grid class=\"btns\">\r\n\t\t\t<ion-row class=\"v-row pt-0\">\r\n\t\t\t\t<ion-col size=\"6\" class=\"pt-0\">\r\n\t\t\t\t\t<ion-button color=\"primary\" expand=\"block\">Cancel</ion-button>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"6\" class=\"pt-0\">\r\n\t\t\t\t\t<!-- <ion-button color=\"primary\" expand=\"block\" (click)=\"submit()\">Submit</ion-button> -->\r\n\t\t\t\t\t<ion-button color=\"primary\" expand=\"block\" (click)=\"submit()\">Submit</ion-button>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\r\n\r\n\t</div>\r\n\r\n</ion-content>"

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

module.exports = "@font-face {\n  font-family: \"Assistant_light\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-light.woff2);\n}\n@font-face {\n  font-family: \"Assistant_reg\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-reg.woff2);\n}\n@font-face {\n  font-family: \"Assistant_semibold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-semibold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_bold\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-bold.woff2);\n}\n@font-face {\n  font-family: \"Assistant_extrabold\";\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(/assets/fonts/assistant-extrabold.woff2);\n}\nion-content {\n  font-family: \"Assistant_reg\";\n}\n.font_reg {\n  font-family: \"Assistant_reg\";\n}\n.font_light {\n  font-family: \"Assistant_light\";\n}\n.font_semibold {\n  font-family: \"Assistant_semibold\";\n}\n.font_bold {\n  font-family: \"Assistant_bold\";\n}\n.font_extrabold {\n  font-family: \"Assistant_extrabold\";\n}\n.header_title {\n  text-align: center;\n}\nion-back-button {\n  position: relative;\n}\n.alert-head.sc-ion-alert-md {\n  background: #0967d3;\n  padding: 15px 10px;\n}\n.alert-title.sc-ion-alert-md h2 {\n  font-size: 17px;\n  text-align: center;\n  color: #fff;\n}\n.titlealert {\n  font-size: 14px;\n  color: #fff;\n}\n.titleselect {\n  font-size: 14px;\n  color: #fff;\n}\n.bglinear {\n  background: -webkit-gradient(linear, left top, right top, from(#35343e), to(#5e5b6a));\n  background: linear-gradient(to right, #35343e, #5e5b6a);\n}\n.bglinear2 {\n  --background: linear-gradient(to right, #35343e, #5e5b6a);\n}\n.select-border-o {\n  --border-style: none;\n}\n.cardcontent {\n  padding: 5px 10px;\n}\n.show_modal {\n  margin: 0 11px;\n  text-align: right;\n}\n.show_modal a {\n  color: #0062d2;\n}\n.title_type {\n  --background: #ffffff;\n  margin: 10px 0;\n  border-radius: 0;\n}\n.t_gaf {\n  text-align: center;\n  font-size: 15px;\n  font-family: \"Assistant_bold\";\n  color: #404040;\n  margin-bottom: 0;\n  margin-top: 10px;\n}\n.t_sub {\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Assistant_bold\";\n  color: #404040;\n  text-transform: uppercase;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.card-background-page {\n  --background: #d3d5de;\n}\n.v_personal {\n  background: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.v_title_detail {\n  background: #eceef7;\n  padding: 5px 11px;\n  color: #292929;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: \"Assistant_semibold\";\n}\n.v_details p {\n  margin: 0;\n  font-size: 14px;\n  color: #393939;\n}\n.v-row {\n  padding: 6px 0;\n}\n.v-row2 {\n  border-bottom: 1px solid #e4e4e4;\n  padding: 6px 0;\n}\n.item-native {\n  padding: 0 !important;\n}\n.text_label {\n  font-family: \"Assistant_reg\";\n  font-size: 14px;\n}\n.text_input {\n  color: #3e3e3e;\n  font-size: 14px;\n  font-family: \"Assistant_reg\";\n}\n.selectadult {\n  max-width: 100%;\n  font-size: 14px;\n  color: #3e3e3e;\n}\n.nopad {\n  padding: 0;\n}\n.countAddV {\n  background: #eceef7;\n  padding: 5px 10px;\n  text-align: center;\n}\n.remark_admin p {\n  color: #8c8c8c;\n}\n.termsconditions {\n  font-style: italic;\n  text-align: justify;\n  padding: 13px 16px;\n  border-bottom: 1px solid #dedede;\n}\n.text_terms {\n  color: #3e3e3e;\n  font-size: 14px;\n  font-family: \"Assistant_reg\";\n}\n.btns {\n  margin-top: 0px;\n  padding-top: 0;\n}\n.pt-0 {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRvci1hZGQtcmVxdWVzdC9DOlxcVXNlcnNcXEFHU0lcXERlc2t0b3BcXDIwMjBcXEF6dXJlXFxhenVyZS9zcmNcXGFwcFxcdmlzaXRvci1hZGQtcmVxdWVzdFxcdmlzaXRvci1hZGQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Zpc2l0b3ItYWRkLXJlcXVlc3QvdmlzaXRvci1hZGQtcmVxdWVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0NKO0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRENBO0VBQWEsNEJBQUE7QUNFYjtBREFBO0VBQVcsNEJBQUE7QUNJWDtBREhBO0VBQWEsOEJBQUE7QUNPYjtBRE5BO0VBQWdCLGlDQUFBO0FDVWhCO0FEVEE7RUFBWSw2QkFBQTtBQ2FaO0FEWkE7RUFBaUIsa0NBQUE7QUNnQmpCO0FEZEE7RUFDSSxrQkFBQTtBQ2lCSjtBRGZBO0VBQ0ksa0JBQUE7QUNrQko7QURmQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNrQko7QURoQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDbUJKO0FEakJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNvQko7QURsQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ3FCSjtBRG5CQTtFQUNJLHFGQUFBO0VBQUEsdURBQUE7QUNzQko7QURwQkE7RUFDSSx5REFBQTtBQ3VCSjtBRHJCQTtFQUNJLG9CQUFBO0FDd0JKO0FEdEJBO0VBQ0ksaUJBQUE7QUN5Qko7QUR2QkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUMwQko7QUR4QkE7RUFDSSxjQUFBO0FDMkJKO0FEekJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUM0Qko7QUQxQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDNkJKO0FEM0JBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUM4Qko7QUQzQkE7RUFDSSxxQkFBQTtBQzhCSjtBRDNCQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzhCSjtBRDVCQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUMrQko7QUQ3QkE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNnQ0o7QUQ5QkE7RUFDSSxjQUFBO0FDaUNKO0FEL0JBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0FDa0NKO0FEaENBO0VBQWMscUJBQUE7QUNvQ2Q7QURuQ0E7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUNzQ0o7QURwQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDdUNKO0FEckNBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDd0NKO0FEdENBO0VBQ0ksVUFBQTtBQ3lDSjtBRHZDQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzBDSjtBRHhDQTtFQUNJLGNBQUE7QUMyQ0o7QUR6Q0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQzRDSjtBRDFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUM2Q0o7QUQzQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQzhDSjtBRDVDQTtFQUFPLGNBQUE7QUNnRFAiLCJmaWxlIjoic3JjL2FwcC92aXNpdG9yLWFkZC1yZXF1ZXN0L3Zpc2l0b3ItYWRkLXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1yZWcud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXNlbWlib2xkLndvZmYyKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2JvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfZXh0cmFib2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1leHRyYWJvbGQud29mZjIpO1xyXG59XHJcbmlvbi1jb250ZW50IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO31cclxuXHJcbi5mb250X3JlZyB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfcmVnJzt9XHJcbi5mb250X2xpZ2h0IHtmb250LWZhbWlseTogJ0Fzc2lzdGFudF9saWdodCc7fVxyXG4uZm9udF9zZW1pYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfc2VtaWJvbGQnO31cclxuLmZvbnRfYm9sZCB7Zm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7fVxyXG4uZm9udF9leHRyYWJvbGQge2ZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X2V4dHJhYm9sZCc7fVxyXG5cclxuLmhlYWRlcl90aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIGJhY2tncm91bmQ6ICMwOTY3ZDM7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbn1cclxuLmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1tZCBoMiB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4udGl0bGVhbGVydCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4udGl0bGVzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJnbGluZWFyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM1MzQzZSwgIzVlNWI2YSk7XHJcbn1cclxuLmJnbGluZWFyMiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM1MzQzZSwgIzVlNWI2YSk7XHJcbn1cclxuLnNlbGVjdC1ib3JkZXItbyB7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG4uY2FyZGNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuLnNob3dfbW9kYWwge1xyXG4gICAgbWFyZ2luOiAwIDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uc2hvd19tb2RhbCBhIHtcclxuICAgIGNvbG9yOiAjMDA2MmQyO1xyXG59XHJcbi50aXRsZV90eXBlIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4udF9nYWYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnRfYm9sZCc7XHJcbiAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi50X3N1YiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9ib2xkJztcclxuICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZDNkNWRlO1xyXG59XHJcblxyXG4udl9wZXJzb25hbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyBcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi52X3RpdGxlX2RldGFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xyXG4gICAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgICBjb2xvcjogIzI5MjkyOTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfc2VtaWJvbGRcIjtcclxufVxyXG4udl9kZXRhaWxzIHAge1xyXG4gICAgbWFyZ2luOiAwOztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzkzOTM5O1xyXG59XHJcbi52LXJvdyB7XHJcbiAgICBwYWRkaW5nOiA2cHggMDtcclxufVxyXG4udi1yb3cyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbn1cclxuLml0ZW0tbmF0aXZlIHtwYWRkaW5nOiAwIWltcG9ydGFudDt9XHJcbi50ZXh0X2xhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50X3JlZyc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnRleHRfaW5wdXQge1xyXG4gICAgY29sb3I6ICMzZTNlM2U7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG59XHJcbi5zZWxlY3RhZHVsdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzNlM2UzZTtcclxufVxyXG4ubm9wYWQge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uY291bnRBZGRWIHtcclxuICAgIGJhY2tncm91bmQ6ICNlY2VlZjc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVtYXJrX2FkbWluIHAge1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbn1cclxuLnRlcm1zY29uZGl0aW9ucyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTNweCAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLnRleHRfdGVybXMge1xyXG4gICAgY29sb3I6ICMzZTNlM2U7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudF9yZWcnO1xyXG59XHJcbi5idG5zIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5wdC0wIHtwYWRkaW5nLXRvcDogMDt9IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hc3Npc3RhbnQtbGlnaHQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LXJlZy53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3NlbWlib2xkXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC1zZW1pYm9sZC53b2ZmMik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWJvbGQud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9leHRyYWJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXNzaXN0YW50LWV4dHJhYm9sZC53b2ZmMik7XG59XG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9yZWdcIjtcbn1cblxuLmZvbnRfcmVnIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uZm9udF9saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9saWdodFwiO1xufVxuXG4uZm9udF9zZW1pYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2JvbGRcIjtcbn1cblxuLmZvbnRfZXh0cmFib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X2V4dHJhYm9sZFwiO1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1tZCB7XG4gIGJhY2tncm91bmQ6ICMwOTY3ZDM7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cblxuLmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1tZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpdGxlYWxlcnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGl0bGVzZWxlY3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmdsaW5lYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNTM0M2UsICM1ZTViNmEpO1xufVxuXG4uYmdsaW5lYXIyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNTM0M2UsICM1ZTViNmEpO1xufVxuXG4uc2VsZWN0LWJvcmRlci1vIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5jYXJkY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4uc2hvd19tb2RhbCB7XG4gIG1hcmdpbjogMCAxMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNob3dfbW9kYWwgYSB7XG4gIGNvbG9yOiAjMDA2MmQyO1xufVxuXG4udGl0bGVfdHlwZSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi50X2dhZiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfYm9sZFwiO1xuICBjb2xvcjogIzQwNDA0MDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRfc3ViIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9ib2xkXCI7XG4gIGNvbG9yOiAjNDA0MDQwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAtLWJhY2tncm91bmQ6ICNkM2Q1ZGU7XG59XG5cbi52X3BlcnNvbmFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnZfdGl0bGVfZGV0YWlsIHtcbiAgYmFja2dyb3VuZDogI2VjZWVmNztcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGNvbG9yOiAjMjkyOTI5O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudF9zZW1pYm9sZFwiO1xufVxuXG4udl9kZXRhaWxzIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzOTM5Mzk7XG59XG5cbi52LXJvdyB7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuXG4udi1yb3cyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0X2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50ZXh0X2lucHV0IHtcbiAgY29sb3I6ICMzZTNlM2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50X3JlZ1wiO1xufVxuXG4uc2VsZWN0YWR1bHQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzZTNlM2U7XG59XG5cbi5ub3BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb3VudEFkZFYge1xuICBiYWNrZ3JvdW5kOiAjZWNlZWY3O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVtYXJrX2FkbWluIHAge1xuICBjb2xvcjogIzhjOGM4Yztcbn1cblxuLnRlcm1zY29uZGl0aW9ucyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMTNweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbn1cblxuLnRleHRfdGVybXMge1xuICBjb2xvcjogIzNlM2UzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRfcmVnXCI7XG59XG5cbi5idG5zIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnB0LTAge1xuICBwYWRkaW5nLXRvcDogMDtcbn0iXX0= */"

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
    constructor(modalController, postPvd, router, actRoute, toastController, loadingControl) {
        this.modalController = modalController;
        this.postPvd = postPvd;
        this.router = router;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.loadingControl = loadingControl;
        this.types = [];
        this.typesIND = [];
        this.visitC = [];
        this.vehicles = [];
        this.maxDate = (new Date().getFullYear() + 1) + "-12-31";
        this.ErrorDateTime = 0;
        this.ErrorDateTimeArr = 0;
        this.ErrorDateTimeDep = 0;
        this.counterSave = 0;
        this.disableSelect = false;
        this.parkDetails = [];
    }
    ngOnInit() {
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
        this.isReadonly = true;
        this.isATime = true;
        this.isDTime = true;
        this.EMAIL = localStorage.getItem("EMAIL");
        console.log(localStorage);
        this.counterSave = 0;
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
                this.vtPrimaryVisitorIDProofDetailsX = data['typeDataX']['vtPrimaryVisitorIDProofDetails'];
                this.vtPrimaryVisitorContactNoX = data['typeDataX']['vtPrimaryVisitorContactNo'];
                this.vtPrimaryVisitorEmailAddressX = data['typeDataX']['vtPrimaryVisitorEmailAddress'];
                this.vtPrimaryVisitorAddressX = data['typeDataX']['vtPrimaryVisitorAddress'];
                this.vtAdditionalVisitorCountX = data['typeDataX']['vtAdditionalVisitorCount'];
                this.vtVehicleDetailsCountX = data['typeDataX']['vtVehicleDetailsCount'];
                this.vtRemarksX = data['typeDataX']['vtRemarks'];
                this.vtCode = data['typeDataX']['vtCode'];
                this.description = data['typeDataX']['vtTermsCondition'];
                this.numberAllowed = data['numberAllowed'];
                for (let index = 0; index < data['parkDetails'].length; index++) {
                    this.parkDetails.push(data['parkDetails']);
                }
                resolve(true);
                console.log(data['numberAllowed']);
            });
        });
    }
    textChange(Val, elem) {
        console.log(elem);
        var letters = /^[A-Za-z ]+$/;
        if (letters.test(Val)) {
            console.log("true");
        }
        else {
            elem.setFocus();
            console.log("false");
            this.openToast("Only text are allowed!");
        }
    }
    arriveChange(val) {
        var value = val.split('T');
        this.minDepTime = value[0];
        if (this.vtArrivalTime != undefined) {
            this.vtArrivalTime = null;
        }
        if (this.vtDepartureDate != undefined) {
            this.vtDepartureDate = null;
        }
        if (this.vtDepartureTime != undefined) {
            this.vtDepartureTime = null;
        }
        var datex = new Date().toISOString().split("T");
        this.isATime = false;
        var datexx = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false, timeZone: "Asia/Manila" }).split(" ");
        if (datex[0] == value[0]) {
            var exp = datexx[0].split(":");
            var expLen = exp[0].length;
            if (expLen == 1) {
                this.minDateArrX = "0" + exp[0] + ":" + exp[1];
                this.maxDateArrX = "12:59";
            }
            else {
                this.minDateArrX = datexx[0];
                this.maxDateArrX = "12:59";
            }
            console.log(datexx[0]);
        }
        else {
            this.minDateArrX = "00:00";
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_6__("#vtArrivalTime").val() != "") {
            this.arriveTimeChange(this.vtArrivalTime);
        }
    }
    arriveTimeChange(value) {
        console.log(this.vtArrivalDate);
        var expDate = this.vtArrivalDate.split("T");
        var expTime = value.split("T");
        var expTimeSplit = expTime[1].split(":");
        if (expTimeSplit[0] == "23" && expTimeSplit[1] == "59") {
            var dateXPLODE = expDate[0].split("-");
            var today = new Date(dateXPLODE[0] + "-" + dateXPLODE[1] + "-" + dateXPLODE[2]);
            var tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            var tom = tomorrow.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).split(", ");
            var expTom = tom[0].split("/");
            if (expTom[0].length == 1) {
                var m = "0" + expTom[0];
            }
            else {
                var m = expTom[0];
            }
            if (expTom[1].length == 1) {
                var d = "0" + expTom[1];
            }
            else {
                var d = expTom[1];
            }
            this.minDepTime = expTom[2] + "-" + m + "-" + d;
            console.log(expTom[2] + "-" + m + "-" + d);
        }
        var date = expDate[0] + "T" + expTimeSplit[0] + ":" + expTimeSplit[1] + ":00.000+08:00";
        this.ArrtimeChange(date);
    }
    departChange(val) {
        var value = val.split('T');
        // var datex = new Date().toISOString().split("T");
        var datex = this.vtArrivalDate.split("T");
        console.log(datex[0], value[0]);
        this.isDTime = false;
        var datexx = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false, timeZone: "Asia/Manila" }).split(" ");
        if (datex[0] == value[0]) {
            var exp = this.vtArrivalTime.split(":");
            var expLen = exp[0].length;
            console.log(exp[0], expLen);
            if (expLen == 1) {
                if (exp[1] == "59") {
                    if (exp[0] != "9") {
                        this.minDepTimeX = "0" + (parseInt(exp[0]) + 1) + ":00";
                    }
                    else {
                        this.minDepTimeX = "10:00";
                    }
                }
                else {
                    if (exp[1].charAt(0) == "0") {
                        var newex = exp[1].substring(0);
                        this.minDepTimeX = "0" + exp[0] + ":0" + (parseInt(newex) + 1);
                    }
                    else {
                        this.minDepTimeX = "0" + exp[0] + ":" + (parseInt(exp[1]) + 1);
                    }
                }
            }
            else {
                if (exp[1] == "59") {
                    if (exp[0] != "23") {
                        this.minDepTimeX = (parseInt(exp[0]) + 1) + ":00";
                        console.log((parseInt(exp[0]) + 1) + ":00");
                    }
                    else {
                        this.minDepTimeX = "23:59";
                    }
                }
                else {
                    if (exp[1].charAt(0) == "0") {
                        var newex = exp[1].substring(0);
                        this.minDepTimeX = exp[0] + ":0" + (parseInt(newex) + 1);
                    }
                    else {
                        this.minDepTimeX = exp[0] + ":" + (parseInt(exp[1]) + 1);
                    }
                }
            }
            console.log(this.minDepTimeX);
        }
        else {
            this.minDepTimeX = "00:00";
        }
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
        var req = [];
        var reqType = [];
        var reqCk = [];
        jquery__WEBPACK_IMPORTED_MODULE_6__(".checked").each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).val() == "") {
                count++;
                req.push(this);
                reqType.push(jquery__WEBPACK_IMPORTED_MODULE_6__(this));
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
        else {
            reqCk.push(this);
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
                                if (this.counterSave == 0) {
                                    this.loadingControl.create({
                                        message: "Loading, please wait....."
                                    }).then((overlay => {
                                        this.loading = overlay,
                                            this.loading.present();
                                    }));
                                    this.counterSave += 1;
                                    return new Promise(resolve => {
                                        let body = {
                                            action: 'addVisitorsNew',
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
                                            vtPrimaryVisitorIDProofDetails: this.vtPrimaryVisitorIDProofDetails,
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
                                            propCode: this.propCode,
                                            vuVisitorTypeCode: this.vtCode,
                                            avName: this.visitC,
                                            vehicles: this.vehicles,
                                            theEmail: this.EMAIL,
                                        };
                                        this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                                            if (data['status'] == "Success") {
                                                this.loading.dismiss();
                                                this.openToast("<center>Data succesfully saved!</center>");
                                                setTimeout(() => { this.router.navigateByUrl('/tabs/tab1/visitors-details'); }, 2000);
                                            }
                                        });
                                    });
                                    // this.openToast('<center>Allowed.</center>');
                                }
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
                // $(".email").css({ "border": '#FF0000 1px solid' });
                this.openToast("<center>Incorrect email format!</center>");
            }
        }
        else {
            console.log(count);
            console.log(reqType[0]);
            if (count != 0) {
                if (req[0].tagName == "ION-DATETIME") {
                    req[0].open();
                }
                else {
                    req[0].setFocus();
                }
                this.openToast("<center>Some of the fields are required!</center>");
            }
            else {
                if (count_check == 0) {
                    console.log(reqCk[0]);
                    this.openToast("<center>You need to accept Terms and Conditions</center>");
                }
                else {
                    this.openToast("<center>Some of the fields are required!</center>");
                }
            }
        }
    }
    AdditionalName(i, elemx, elemSelectx) {
        var Val = i.srcElement.value;
        var elem = jquery__WEBPACK_IMPORTED_MODULE_6__("#" + elemx)[0];
        var elemSelect = jquery__WEBPACK_IMPORTED_MODULE_6__("#" + elemSelectx)[0];
        var letters = /^[A-Za-z ]+$/;
        if (letters.test(Val)) {
            console.log("true");
            this.disableSelect = false;
        }
        else {
            this.disableSelect = true;
            elem.setFocus();
            // elemSelect.dismiss();
            // console.log(elemSelect);
            // console.log(elem);
            this.openToast("No special characters allowed!");
        }
    }
    theClick(x) {
        console.log(x);
    }
};
VisitorAddRequestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__["PostProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], VisitorAddRequestPage);



/***/ })

}]);
//# sourceMappingURL=visitor-add-request-visitor-add-request-module-es2015.js.map