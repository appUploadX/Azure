import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs/observable/timer'
import { AppVersion } from '@ionic-native/app-version/ngx';
import { PostProvider } from '../providers/post-providers'

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {

	showSplash = true;

	//checkVer
	AppVer: String;

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		//CheckVer
		private appVersion: AppVersion,
		private postPvd: PostProvider,
		private alertController: AlertController,
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();

			timer(3000).subscribe(() => this.showSplash = false)

			this.appVersion.getVersionNumber().then(versionNumber => {
				this.AppVer = versionNumber;

				if (this.platform.is('android')) {
					var devPlat = 'android';
					localStorage.setItem("PLATFORM", 'AND');
				}

				if (this.platform.is('ios')) {
					var devPlat = 'ios';
					localStorage.setItem("PLATFORM", 'IOS');
				}
				
				if (versionNumber != undefined) {
					return new Promise(resolve => {
						let body = {
							action: 'checkVersion',
							currentVersion: versionNumber,
							devPlat: devPlat,
						}

						this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
							if (data['platform'] == 'android') {
								if (data['updated'] == 'no') {
									// alert(JSON.stringify(data));
									this.presentAlertConfirm();
								}
							}
						});
					});
				}
			}).catch(err => {
				console.log(err);
			})


		});
	}

	async presentAlertConfirm() {
		const alert = await this.alertController.create({
			header: 'The app needs to be updated before you use Azure-Connect app.',
			backdropDismiss: false,
			// message: 'Message <strong>text</strong>!!!',
			buttons: [
				{
					text: 'Update',
					handler: () => {
						// window.location.href = "https://play.app.goo.gl/?link=https://https://play.google.com/store/apps/details?id=com.agsi.AzureConnect";
						window.open("https://play.google.com/store/apps/details?id=com.agsi.AzureConnect", "_system");
						navigator['app'].exitApp();
						// console.log('Confirm Okay');
						// document.location.href = 'index.html';
					}
				}
			]
		});

		await alert.present();
	}
}
