import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


import * as $ from "jquery";



@Component({
	selector: 'app-profile-edit',
	templateUrl: './profile-edit.page.html',
	styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
	uid: string;
	Email: string;
	uType: string;
	uCode: string;

	Data: any = [];
	Aniv: any;

	constructor(private postPvd: PostProvider, private modalController: ModalController, private router: Router, public toastController: ToastController,) { }
	async closeModal() {
		await this.modalController.dismiss();
	}

	ngOnInit() {
		this.uid = localStorage.getItem("USER_ID");
		this.uType = localStorage.getItem("TYPE_DATA");
		this.uCode = localStorage.getItem("UNIT_CODE");
		this.Email = localStorage.getItem("EMAIL");
		// this.loadData(this.uType, this.uCode, this.Email);
		console.log(localStorage);
	}

	ionViewWillEnter() {
		this.uid = localStorage.getItem("USER_ID");
		this.uType = localStorage.getItem("TYPE_DATA");
		this.uCode = localStorage.getItem("UNIT_CODE");
		this.Email = localStorage.getItem("EMAIL");
		this.loadData(this.uType, this.uCode, this.Email);
		console.log(localStorage);
	}

	loadData(uType, uCode, Email) {
		this.Data = [];
		return new Promise(resolve => {
			let body = {
				action: 'UserDetails',
				uType: uType,
				uCode: uCode,
				Email: Email,
				propCode: localStorage.getItem("PROPERTY_CODE"),
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				this.Data = [];
				this.Data.push(data['data']);
				this.Aniv = data['aniv'];
				resolve(true);
				console.log(data);
			});
		});
	}

	saveData() {
		// console.log($("#bday").val());
		// var splitbday = $("#bday").val().split("T");

		// console.log(splitbday[0]);
		return new Promise(resolve => {
			let body = {
				action: "updateUserDetails",
				// name: $("#name").val(),
				gender: $("#gender").val(),
				occupation: $("#occupation").val(),
				// bday: splitbday[0],
				address: $("#address").val(),
				nationality: $("#nationality").val(),
				country: $("#country").val(),
				uid: $("#user_id").val(),
				utype: localStorage.getItem("TYPE_DATA"),
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				if (data['status'] == "Success") {
					this.openToast("Profile updated successfully!");
					this.router.navigateByUrl('/tabs/tab2');
					this.modalController.dismiss();
				}
			});
		});

	}

	async openToast(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000,
		});
		toast.present();
	}

}
