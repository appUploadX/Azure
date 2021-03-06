import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as $ from "jquery";


@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	user: string;
	pass: string;

	typeData: string;
	Status: string;
	Has: string;
	Data: any = [];
	TUN: string;
	constructor(
		private postPvd: PostProvider,
		private router: Router,
		public toastController: ToastController,
	) { }



	ngOnInit() {
		$(".required").val("");
	}

	ionViewWillEnter() {
		$(".required").trigger("reset");
		$(".required").val("");

		console.log(localStorage);
		if (localStorage.getItem("UNIT_CODE") !== null && localStorage.getItem("NEW_CODE") !== null) {

			return new Promise(resolve => {
				let body = {
					action: 'checkLocal',
					new_code: localStorage.getItem("NEW_CODE"),
					email: localStorage.getItem("EMAIL"),
					type: localStorage.getItem("TYPE_DATA"),
				};

				this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
					if (data['status'] == "Success") {
						this.typeData = data['uType'];
						this.Status = data['status'];
						this.Has = data['hasTenant'];
						this.Data.push(data['data']);
						console.log(data['dataX'][0]);
						if (data['uType'] == "Owner") {
							localStorage.setItem("HAS_TENANT", data['hasTenant']);
							localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
							localStorage.setItem("TERMS", data['dataX'][0]['pTermsAndCondition']);
							localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);

							if (data['dataX'][0]['pTermsAndCondition'] == null || data['dataX'][0]['pTermsAndCondition'] == '') {
								this.router.navigateByUrl('terms-and-conditions');
							}
							else {
								this.router.navigateByUrl('/tabs/tab1', {state: {'from': 'Login'}});
							}
						}
						else if (data['uType'] == "Tenant") {
							localStorage.setItem("HAS_TENANT", data['hasTenant']);
							localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
							localStorage.setItem("TERMS", data['dataX'][0]['tTermsAndCondition']);
							localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);

							if (data['dataX'][0]['tTermsAndCondition'] == null || data['dataX'][0]['tTermsAndCondition'] == '') {
								this.router.navigateByUrl('terms-and-conditions');
							}
							else {
								this.router.navigateByUrl('/tabs/tab1', {state: {'from': 'Login'}});
							}
						}
					}
					else {
						this.openToast('<center>Invalid credentials!</center>');
					}

				})
			});
		}

	}

	async openToast(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000,
		});
		toast.present();
	}

	openForgotPassword() {
		this.router.navigateByUrl('/forgot-password');
	}


	onSubmit(user, pass) {
		var count = 0;
		$(".required").each(function () {
			if ($(this).val() == "") {
				count++;
			}

			if (count > 0) {
				if ($(this).val() == "") {
					$(this).css({ "border": '#FF0000 1px solid' });
				}
			}
		});

		console.log(count);

		if (count == 0) {
			var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
			if (pattern.test($(".user").val())) {
				return new Promise(resolve => {
					let body = {
						action: 'login',
						user: user,
						pass: pass,
					};

					this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
						if (data['status'] == "Success") {
							this.typeData = data['uType'];
							this.Status = data['status'];
							this.Has = data['hasTenant'];
							this.Data.push(data['data']);
							console.log(data['dataX'][0]);
							if (data['uType'] == "Owner") {
								localStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
								localStorage.setItem("TYPE_DATA", this.typeData);
								localStorage.setItem("HAS_TENANT", data['hasTenant']);
								localStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
								localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
								localStorage.setItem("TUN", data['TUN']);
								localStorage.setItem("ROOM_NO", data['ROOM_NO']);
								localStorage.setItem("SHORT_NAME", data['SHORT_NAME']);
								localStorage.setItem("EMAIL", data['dataX'][0]['EmailAddress']);

								localStorage.setItem("PROPERTY_CODE", data['dataX'][0]['property_code']);
								localStorage.setItem("USER_ID", data['dataX'][0]['id']);
								localStorage.setItem("TERMS", data['dataX'][0]['pTermsAndCondition']);

								localStorage.setItem("BEDROOM", data['unit_details']['bedroom']);
								localStorage.setItem("UNITSIZE", data['unit_details']['unitsize']);

								localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);

								if (data['dataX'][0]['pTermsAndCondition'] == null || data['dataX'][0]['pTermsAndCondition'] == '') {
									this.router.navigateByUrl('terms-and-conditions');
								}
								else {
									this.router.navigateByUrl('/tabs/tab1', {state: {'from': 'Login'}});
								}
							}
							else if (data['uType'] == "Tenant") {
								localStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
								localStorage.setItem("TYPE_DATA", this.typeData);
								localStorage.setItem("HAS_TENANT", data['hasTenant']);
								localStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
								localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
								localStorage.setItem("TUN", data['TUN']);
								localStorage.setItem("ROOM_NO", data['ROOM_NO']);
								localStorage.setItem("SHORT_NAME", data['SHORT_NAME']);
								localStorage.setItem("EMAIL", data['dataX'][0]['tEmailAddress']);

								localStorage.setItem("PROPERTY_CODE", data['propC']['property_code']);
								localStorage.setItem("USER_ID", data['dataX'][0]['id']);
								localStorage.setItem("TERMS", data['dataX'][0]['tTermsAndCondition']);

								localStorage.setItem("BEDROOM", data['unit_details']['bedroom']);
								localStorage.setItem("UNITSIZE", data['unit_details']['unitsize']);

								localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);

								if (data['dataX'][0]['tTermsAndCondition'] == null || data['dataX'][0]['tTermsAndCondition'] == '') {
									this.router.navigateByUrl('terms-and-conditions');
								}
								else {
									this.router.navigateByUrl('/tabs/tab1', {state: {'from': 'Login'}});
								}


							}
						}
						else {
							this.openToast('<center>Invalid credentials!</center>');
						}

					})
				});
			}
			else {
				this.openToast("<center>Incorrect email format!</center>");
			}

		}
		else {
			this.openToast("<center>All fields are required!</center>");
		}

	}


}
