import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
// import { $ } from 'protractor';
import * as $ from "jquery";


@Component({
	selector: 'app-change-password',
	templateUrl: './change-password.page.html',
	styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
	isHidden: boolean;
	Hidden: boolean;
	currentPass: string;
	pass1: string;
	pass2: string;
	email: string;
	unit_code: string;
	u_type: string;
	ID: string;
	constructor(private router: Router, private postPvd: PostProvider, public toastController: ToastController, ) { }

	ngOnInit() {
		this.isHidden = true;
		this.Hidden = false;
		this.email = localStorage.getItem("EMAIL");
		this.unit_code = localStorage.getItem("UNIT_CODE");
		this.u_type = localStorage.getItem("TYPE_DATA");
		console.log(localStorage);
	}

	async openToast(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000
		});
		toast.present();
	}

	showCurrent() {
		var cur = $(".XcurrentPass");
		var eye = $(".eyecur");
		if (cur[0].type == "password") {
			cur[0].type = "text";
			eye[0].name = "eye";
		}
		else {
			cur[0].type = "password";
			eye[0].name = "eye-off";
		}
	}

	showOne() {
		var cur = $(".Xpass1");
		var eye = $(".eyeOne");
		if (cur[0].type == "password") {
			cur[0].type = "text";
			eye[0].name = "eye";
		}
		else {
			cur[0].type = "password";
			eye[0].name = "eye-off";
		}
	}

	showTwo() {
		var cur = $(".Xpass2");
		var eye = $(".eyeTwo");
		if (cur[0].type == "password") {
			cur[0].type = "text";
			eye[0].name = "eye";
		}
		else {
			cur[0].type = "password";
			eye[0].name = "eye-off";
		}
	}

	checkPass() {
		// console.log(this.currentPass)
		return new Promise(resolve => {
			let body = {
				action: 'checkPass',
				pword: this.currentPass,
				email: this.email,
				ucode: this.unit_code,
				utype: this.u_type,
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				if (data['status'] == "Success") {
					// console.log("okay");
					this.ID = data['ID'];
					this.isHidden = false;
					this.Hidden = true;
				}
				else {
					this.openToast("<center>Password is incorrect!</center>");
				}

			});
		});
	}

	submit() {
		var pass1 = $(".Xpass1");
		var pass2 = $(".Xpass2");
		if (pass1[0].value != "" && pass2[0].value != "") {
			if (pass1[0].value == pass2[0].value) {
				return new Promise(resolve => {
					let body = {
						action: 'changePass',
						pword: this.pass1,
						email: this.email,
						ucode: this.unit_code,
						utype: this.u_type,
						ID: this.ID,
					};

					this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
						if (data['status'] == "Success") {
							var cur = $(".XcurrentPass");
							var pw1 = $(".Xpass1");
							var pw2 = $(".Xpass2");

							cur[0].value = "";
							pw1[0].value = "";
							pw2[0].value = "";

							this.isHidden = true;
							this.Hidden = false;
							this.openToast("<center>Password successfully changed!</center>");
							this.router.navigateByUrl('/tabs/tab1');
						}
						else {
							this.openToast("<center>Password is incorrect!</center>");
						}

					});
				});
			}
			else {
				this.openToast("Passwords dont't match.");
			}

		}

	}



}
