import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-tab4',
	templateUrl: './tab4.page.html',
	styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
	Email: string;
	Type: string;
	Data: any = [];
	DataConfirm: any = [];
	RoomNo: string;
	constructor(private router: Router, private postPvd: PostProvider, public alertController: AlertController) { }

	ngOnInit() {
		this.RoomNo = localStorage.getItem("ROOM_NO");
		this.Email = localStorage.getItem("EMAIL");
		this.Type = localStorage.getItem("TYPE_DATA");
		console.log(localStorage)
	}

	ionViewWillEnter() {
		console.log(localStorage)
		this.RoomNo = localStorage.getItem("ROOM_NO");
		this.Email = localStorage.getItem("EMAIL");
		this.Type = localStorage.getItem("TYPE_DATA");
		this.loadData(this.Email, this.Type);
	}

	async presentAlertConfirm(no, uniCode, type, ID) {
		const alert = await this.alertController.create({
			header: 'Switch to Unit ' + no + '?',
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
						console.log('Confirm Okay');
						this.confirmChange(no, uniCode, type, ID);
					}
				}
			]
		});

		await alert.present();
	}

	openChangePassword() {
		this.router.navigateByUrl('/tabs/tab4/change-password')
	}

	logout() {
		localStorage.clear();
		this.router.navigateByUrl('');
	}

	loadData(Email, Type) {
		this.Data = [];
		return new Promise(resolve => {
			let body = {
				action: 'MultipleUnit',
				Type: Type,
				Email: Email,
				RoomNo: this.RoomNo,
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {

				for (var i = 0; i < data['result'].length; i++) {
					this.Data.push(data['result']);
				}

				resolve(true);
				console.log(data);
			});
		});
	}

	confirmChange(no, uniCode, type, ID) {
		this.Data = [];
		localStorage.setItem("USER_ID", ID);
		return new Promise(resolve => {
			let body = {
				action: 'changeUnit',
				Type: type,
				Email: this.Email,
				RoomNo: no,
				uniCode: uniCode,
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				if (data['uType'] == "Owner") {
					localStorage.setItem("UNIT_CODE", data['dataX']['unit_code']);
					localStorage.setItem("TYPE_DATA", data['uType']);
					localStorage.setItem("HAS_TENANT", data['hasTenant']);
					localStorage.setItem("NEW_CODE", data['dataX']['new_code']);
					localStorage.setItem("FULLNAME", data['dataX']['fullname']);
					localStorage.setItem("TUN", data['TUN']);
					localStorage.setItem("ROOM_NO", data['ROOM_NO']);
					localStorage.setItem("SHORT_NAME", data['SHORT_NAME']);

					localStorage.setItem("EMAIL", data['dataX']['EmailAddress']);
					localStorage.setItem("BEDROOM", data['unit_details']['bedroom']);
					localStorage.setItem("UNITSIZE", data['unit_details']['unitsize']);

					localStorage.setItem("PROPERTY_CODE", data['dataX']['property_code']);
					localStorage.setItem("SIGLO", data['dataX']['sigloType']);
					this.router.navigateByUrl('/tabs/tab1');
				}
				else if (data['uType'] == "Tenant") {
					localStorage.setItem("UNIT_CODE", data['dataX']['unit_code']);
					localStorage.setItem("TYPE_DATA", data['uType']);
					localStorage.setItem("HAS_TENANT", data['hasTenant']);
					localStorage.setItem("NEW_CODE", data['dataX']['new_code']);
					localStorage.setItem("FULLNAME", data['dataX']['fullname']);
					localStorage.setItem("TUN", data['TUN']);
					localStorage.setItem("ROOM_NO", data['ROOM_NO']);
					localStorage.setItem("SHORT_NAME", data['SHORT_NAME']);
					localStorage.setItem("EMAIL", data['dataX']['tEmailAddress']);

					localStorage.setItem("BEDROOM", data['unit_details']['bedroom']);
					localStorage.setItem("UNITSIZE", data['unit_details']['unitsize']);

					localStorage.setItem("PROPERTY_CODE", data['propC']['property_code']);
					localStorage.setItem("SIGLO", data['dataX']['sigloType']);
					this.router.navigateByUrl('/tabs/tab1');
				}
				resolve(true);
				console.log(data);
			});
		});
	}

}
