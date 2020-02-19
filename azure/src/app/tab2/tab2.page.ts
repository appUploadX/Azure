import { Component } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { ProfileEditPage } from 'src/app/profile-edit/profile-edit.page';
import { Camera } from '@ionic-native/camera/ngx';

import { ImageProviderService } from 'src/app/service/image-provider.service';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	Data: any = [];
	uType: String;
	uCode: String;
	Email: String;
	Name: String;
	Aniv: string;
	uniCount: String;
	countResi: String;
	countPark: String;

	UID: string;

	base64img: string = '';
	base64Image: string = '';
	base64ImageX: string = '';
	new_code: string;
	constructor(private postPvd: PostProvider,
		private modalController: ModalController,
		private camera: Camera,
		public imgPov: ImageProviderService,
		private transfer: FileTransfer,
		public loadingCtrl: LoadingController,
	) { }


	async openEditProfile() {
		const modal = await this.modalController.create({
			component: ProfileEditPage,
			componentProps: {
			}
		});

		modal.onDidDismiss().then(data => {
			this.Name = localStorage.getItem("FULLNAME");
			this.loadData(this.uType, this.uCode, this.Email);
		});

		return await modal.present();
	}




	ngOnInit() {
		this.UID = localStorage.getItem("USER_ID");
		this.uType = localStorage.getItem("TYPE_DATA");
		this.uCode = localStorage.getItem("UNIT_CODE");
		this.Email = localStorage.getItem("EMAIL");
		this.Name = localStorage.getItem("FULLNAME");
		this.new_code = localStorage.getItem("NEW_CODE");
		console.log(localStorage);
		this.loadData(this.uType, this.uCode, this.Email);
	}

	ionViewWillEnter() {
		this.UID = localStorage.getItem("USER_ID");
		this.uType = localStorage.getItem("TYPE_DATA");
		this.uCode = localStorage.getItem("UNIT_CODE");
		this.Email = localStorage.getItem("EMAIL");
		this.Name = localStorage.getItem("FULLNAME");
		this.new_code = localStorage.getItem("NEW_CODE");
		this.loadData(this.uType, this.uCode, this.Email);
		console.log(localStorage, "xxxxx");

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
				this.uniCount = data['uniCount'];
				this.countResi = data['countResi'];
				this.countPark = data['countPark'];
				resolve(true);
				console.log(data);
			});
		});
	}

	openGallery() {
		// alert("haha");
		this.base64img = "";

		this.camera.getPicture({
			targetWidth: 512,
			targetHeight: 512,
			sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.PictureSourceType.PHOTOLIBRARY,
		}).then((ImageData => {
			this.base64img = "data:image/jpeg;base64," + ImageData;
			this.imgPov.setImage(this.base64img);
			this.Upload();
		}), error => {
			console.log(error);
		})
	}

	Upload() {
		this.base64Image = this.imgPov.getImage();

		let loader = this.loadingCtrl.create({
			message: "Uploading...."
		});

		const fileTransfer: FileTransferObject = this.transfer.create();

		let options: FileUploadOptions = {
			fileKey: "photo",
			fileName: localStorage.getItem("NEW_CODE") + ".jpg",
			chunkedMode: false,
			mimeType: "image/jpeg",
			params: { 'ID': localStorage.getItem("USER_ID"), 'user_type': localStorage.getItem('TYPE_DATA') },
			headers: {}
		}

		fileTransfer.upload(this.base64Image, 'https://www.azure-connect.com/androidUploadPic.php', options).then(data => {
			// alert(JSON.stringify(data));
			alert("Profile picture updated successfully!");
			this.base64ImageX = this.imgPov.getImage();
			// loader.dismiss();
		}, error => {
			alert("error");
			alert("error" + JSON.stringify(error));
			// loader.dismiss();
		});
	}
}
