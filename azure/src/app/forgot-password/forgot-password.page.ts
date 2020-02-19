import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as $ from "jquery";

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.page.html',
	styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

	constructor(
		private postPvd: PostProvider,
		private router: Router,
		public toastController: ToastController,
	) { }

	ngOnInit() {
	}

	async openToast(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 3000
		});
		toast.present();
	}


	emailCheck() {
		var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

		if (pattern.test($("#email").val())) {
			this.openToast("Valid email!");
			$("#sendEmail").show();
		}
		else {
			this.openToast("Invalid email!");
		}
	}

	sendCodeReset() {
		return new Promise(resolve => {
			let body = {
				action: 'sendCodeReset',
				email: $("#email").val(),
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				if (data['status'] == 'Success') {
					$("#sendEmail").hide();
					$("#email").hide();
					$("#textCode").show();
					this.openToast("Reset code has been sent please see your email!");
				}
			});
		});
	}

	codeCheck() {
		var code = $("#textCode").val();
		if (code.length == 5) {
			return new Promise(resolve => {
				let body = {
					action: 'checkCode',
					email: $("#email").val(),
					code: code,
				};

				this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
					if (data['status'] == 'Success') {
						$("#textCode").hide();
						$(".password").show();
						this.openToast("Enter your new password!");
					}
					else {
						this.openToast("Invalid code entered!");
					}
				});
			});
		}

	}

	passCheck(){
		var pass1 = $("#password1").val();
		var pass2 = $("#password2").val();
		if((pass1 != "" && pass2 != "") && (pass1.length == pass2.length)){
			if(pass1 == pass2){
				$("#confirmPassword").show();
			}
			else{
				$("#confirmPassword").hide();
				this.openToast("Password mismatch!");
			}
		}
		else{
			$("#confirmPassword").hide();
		}
	}

	confirmPassword(){
		return new Promise(resolve => {
			let body = {
				action: 'updatePassword',
				email: $("#email").val(),
				code: $("#textCode").val(),
				password: $("#password1").val(),
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				if (data['status'] == 'Success') {
					this.openToast("Password updated successfully!");
					this.router.navigateByUrl('');
				}
				else {
					this.openToast("Password update failed!");
				}
			});
		});
	}

	returnLogin(){
		this.router.navigateByUrl('');
	}


	checkEmail(){
		var email = $("#email").val();
		var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

		if (pattern.test(email)) {
			// this.openToast("Valid email!");
			// $("#sendEmail").show();
			return new Promise(resolve => {
				let body = {
					action: 'verifyEmail',
					email: email
				}
				
				this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data =>{
					if(data['success'] == 'success'){
						this.openToast("Email is verified. Please click 'Send code' to continue!");
						$("#sendEmail").show();
						$("#verifyEmail").hide();
					}
					else
					{
						this.openToast("Email is not registered!");
					}
				})
	
			});
		}
		else {
			this.openToast("Invalid email pattern!");
		}
	}
	
}
