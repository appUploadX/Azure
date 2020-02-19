import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

@Component({
	selector: 'app-amenity-booking-list',
	templateUrl: './amenity-booking-list.page.html',
	styleUrls: ['./amenity-booking-list.page.scss'],
})
export class AmenityBookingListPage implements OnInit {
	uCode: string;
	uType: string;
	unit_no: string;
	dataX: any = [];

	constructor(
		private postPvd: PostProvider,
		private router: Router
	) { }

	ngOnInit() {
		this.uCode = localStorage.getItem("UNIT_CODE");
		this.uType = localStorage.getItem("TYPE_DATA");
		this.unit_no = localStorage.getItem("ROOM_NO");
		console.log(localStorage);
		this.loadData(this.uCode, this.uType);
	}

	openBookingDetails(id) {
		this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list/amenity-booking-details', { state: { id: id } })
	}

	loadData(uCode, uType) {
		return new Promise(resolve => {
			let body = {
				action: 'bookingList',
				uCode: uCode,
				uType: uType,
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				for (var x = 0; x < data['data'].length; x++) {
					this.dataX.push(data['data']);
				}
				resolve(true);
				console.log(data['data']);
			});
		});
	}

	doRefresh(event) {
		setTimeout(() => {
			this.dataX = [];
			return new Promise(resolve => {
				let body = {
					action: 'bookingList',
					uCode: this.uCode,
					uType: this.uType,
				};
	
				this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
					for (var x = 0; x < data['data'].length; x++) {
						this.dataX.push(data['data']);
					}
					event.target.complete();
					resolve(true);
					console.log(data['data']);
				});
			});
		}, 2000);
	}
}
