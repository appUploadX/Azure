import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { VisitorAddRequestModalPage } from 'src/app/visitor-add-request-modal/visitor-add-request-modal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import * as $ from "jquery";


@Component({
	selector: 'app-visitor-add-request',
	templateUrl: './visitor-add-request.page.html',
	styleUrls: ['./visitor-add-request.page.scss'],
})
export class VisitorAddRequestPage implements OnInit {
	types: any = [];
	typesIND: any = [];
	ishidden: boolean;
	label: string;
	description;
	newCode: string;
	uCode: string;
	propCode: string;

	//Name of inputs
	vtUnitOwner;
	vtTowerUnit;
	vtCarparkSlotNo;
	vtGuestOnSite;
	vtGuestContact;
	vtArrivalDate;
	vtArrivalTime;
	vtDepartureDate;
	vtDepartureTime;
	vtPrimaryVisitorName;
	vtPrimaryVisitorNationality;
	vtPrimaryVisitorIDProofDetails;
	vtPrimaryVisitorContactNo;
	vtPrimaryVisitorEmailAddress;
	vtPrimaryVisitorAddress;
	vtAdditionalVisitorCount;
	vtVehicleDetailsCount;
	vtRemarks;
	avName;

	//Name of data kung check o uncheck
	vtUnitOwnerX: string;
	vtTowerUnitX: string;
	vtCarparkSlotNoX: string;
	vtGuestOnSiteX: string;
	vtGuestContacX: string;
	vtArrivalDateX: string;
	vtArrivalTimeX: string;
	vtDepartureDateX: string;
	vtDepartureTimeX: string;
	vtPrimaryVisitorNameX: string;
	vtGuestContactX: string;
	vtPrimaryVisitorNationalityX: string;
	vtPrimaryVisitorIDProofDetailsX: string;
	vtPrimaryVisitorContactNoX: string;
	vtPrimaryVisitorEmailAddressX: string;
	vtPrimaryVisitorAddressX: string;
	vtAdditionalVisitorCountX: string;
	vtVehicleDetailsCountX: string;
	vtRemarksX: string;
	vtRemarksByAdmin: string;
	condition: string;
	fullname: string;
	TUN: string;
	vuVehicleDetailsType: string;
	vuVehicleDetailsModel: string;
	vuVehicleDetailsColor: string;
	vuVehicleDetailsPlateNo: string;
	visitC: any = [];
	vehicles: any = [];
	Types: string;
	userType: string;
	numberAllowed: number;

	minDepTime: string;
	minDate: string;

	maxDate: string = (new Date().getFullYear() + 1) + "-12-31";
	ErrorDateTime = 0;
	ErrorDateTimeArr = 0;
	ErrorDateTimeDep = 0;

	isReadonly: boolean;
	isATime: boolean;

	minDateArrX: string;
	maxDateArrX: string;
	isDTime: boolean;
	minDepTimeX: string;

	EMAIL: string;

	private loading;

	constructor(
		private modalController: ModalController,
		private postPvd: PostProvider,
		private router: Router,
		private actRoute: ActivatedRoute,
		public toastController: ToastController,
		private loadingControl: LoadingController,
	) {
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
		this.loadData();

	}

	async openModal(description) {
		const modal = await this.modalController.create({
			component: VisitorAddRequestModalPage,
			componentProps: {
				vtTermsConditionX: description,
			}
		});
		return await modal.present();
	}

	async openToast(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000
		});
		toast.present();
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


				this.description = data['typeDataX']['vtTermsCondition'];
				this.numberAllowed = data['numberAllowed'];

				resolve(true);
				console.log(data['numberAllowed']);
			});
		});
	}


	textChange(Val, elem) {
		console.log(elem)
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

		var datexx = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).split(" ");
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

		if ($("#vtArrivalTime").val() != "") {
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
				var m = "0"+expTom[0];
			}
			else {
				var m = expTom[0];
			}

			if (expTom[1].length == 1) {
				var d = "0"+expTom[1];
			}
			else {
				var d = expTom[1];
			}

			this.minDepTime = expTom[2]+"-"+m+"-"+d;
			console.log( expTom[2]+"-"+m+"-"+d);
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

		var datexx = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).split(" ");
		if (datex[0] == value[0]) {
			var exp = this.vtArrivalTime.split(":");

			var expLen = exp[0].length;

			console.log(exp[0], expLen)
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


		if ($("#vtDepartureTime").val() != "") {
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
		// this.CKSubmitTime();
		$(".checked").each(function () {
			if ($(this).val() == "") {
				count++;
				req.push(this);
				reqType.push($(this));
			}

			if (count > 0) {
				if ($(this).val() == "") {
					$(this).css({ "background-color": '#FF0000 1px solid' });
				}
			}
		});

		if ($("#additional").val() != "") {
			var countVal = 0;
			var countSel = 0;
			$(".visitVal").each(function () {
				if ($(this).val() != "") {
					countVal++;
				}

				if (countVal > 0) {
					if ($(this).val() == "") {
						$(this).css({ "border": '#FF0000 1px solid' });
					}
				}
			});

			$(".visitSel").each(function () {
				if ($(this).is(":selected")) {
					countSel++;
				}

				if (countSel > 0) {
					if ($(this).val() == "") {
						$(this).css({ "border": '#FF0000 1px solid' });
					}
				}
			});
		}

		if ($("#vehicleCount").val() != "") {
			var countVehVal = 0;
			var countVehSel = 0;
			$(".vehicleData").each(function () {
				if ($(this).val() != "") {
					countVehVal++;
				}

				if (countVehVal > 0) {
					if ($(this).val() == "") {
						$(this).css({ "border": '#FF0000 1px solid' });
					}
				}
			});

			$(".vehCountSel").each(function () {
				if ($(this).is(":selected")) {
					countVehSel++;
				}

				if (countVehSel > 0) {
					if ($(this).val() == "") {
						$(this).css({ "border": '#FF0000 1px solid' });
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

		if (count == 0 && (countVal == $("#additional").val() || $("#additional").val() == "") && (countSel == $("#additional").val() || $("#additional").val() == "") && count_check != 0) {
			var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
			if (pattern.test($(".email").val())) {
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

								this.loadingControl.create({
									message: "Loading, please wait....."
								}).then((overlay => {
									this.loading = overlay,
										this.loading.present()
								}))

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

										avName: this.visitC,
										vehicles: this.vehicles,
										theEmail: this.EMAIL,
									};

									this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
										if (data['status'] == "Success") {
											this.loading.dismiss();
											this.openToast("<center>Data succesfully saved!</center>");
											setTimeout(() => { this.router.navigateByUrl('/tabs/tab1/visitors-details') }, 2000)
										}
									})
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
}
