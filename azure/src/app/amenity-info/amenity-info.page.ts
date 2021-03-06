import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-amenity-info',
	templateUrl: './amenity-info.page.html',
	styleUrls: ['./amenity-info.page.scss'],
})
export class AmenityInfoPage implements OnInit {
	amenName: string;
	amenCode: number;
	amenData: any = [];
	amenDays: any;

	start: any;
	end: any;

	rate: number;
	propCode: number;
	unitCode: number;
	uType: string;

	constructor(
		private postPvd: PostProvider,
		private router: Router,
		public toastController: ToastController,
	) { }

	ngOnInit() {
		this.amenName = history.state.amenName;
		this.amenCode = history.state.amenCode;
		this.propCode = history.state.pCode;
		this.unitCode = history.state.uCode;
		this.uType = history.state.uType;

		this.loadData(this.amenCode);
		console.log(localStorage);
	}

	async openToast(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000,
		});
		toast.present();
	}

	openAmenityBookNow(amenName, amenCode, propCode, unitCode, uType, rate) {

		return new Promise(resolve => {
			let body = {
				action: 'check_hastenant',
				uType: localStorage.getItem('TYPE_DATA'),
				uCode: localStorage.getItem('UNIT_CODE'),
				propCode: localStorage.getItem("PROPERTY_CODE"),
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				if (data['hasTenant'] == "ActiveTenant") {
					this.openToast("<center>You have active tenant.</center>");
				}
				else {
					if (data['siglo'] != "On") {
						this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info/amenity-book-now', { state: { amenName: amenName, amenCode: amenCode, propCode: propCode, unitCode: unitCode, uType: uType, rateperbooking: rate, start: this.start } })
					}
					else {
						this.openToast("<center>This unit is managed by Siglo.</center>");
					}
				}
				resolve(true);
				console.log(data);
			});
		});

	}

	loadData(amenCode) {
		return new Promise(resolve => {
			let body = {
				action: 'amenDetails',
				amenCode: amenCode,
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				this.amenData.push(data['data']);
				this.rate = data['data']['rateperbooking'];
				this.start = data['slotTime'];
				resolve(true);
				console.log(data['data'], data['amenDaysData']);
			});
		});
	}

}
