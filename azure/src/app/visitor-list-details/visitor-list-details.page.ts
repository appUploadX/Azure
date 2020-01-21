import { Component, OnInit } from '@angular/core';
import { VisitorDetailsModalPage } from '../visitor-details-modal/visitor-details-modal.page';
import { ModalController, AlertController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-providers';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-visitor-list-details',
	templateUrl: './visitor-list-details.page.html',
	styleUrls: ['./visitor-list-details.page.scss'],
})
export class VisitorListDetailsPage implements OnInit {
	id: number;
	vuCode: number;
	dataX: any = [];
	dataAdd: any = [];
	dataType: any = [];
	vehData: any = [];
	vtAdditionalVisitorCountX;
	vtApprovalX;
	vtArrivalDateX;
	vtArrivalTimeX;
	vtCanAssignIDByGatekeeperX;
	vtCanBeAddedByConciergeX;
	vtCanBeAddedByGatekeeperX;
	vtCarparkSlotNoX;
	vtDepartureDateX;
	vtDepartureTimeX;
	vtGuestContactX;
	vtGuestOnSiteX;
	vtPrimaryVisitorAddressX;
	vtPrimaryVisitorContactNoX;
	vtPrimaryVisitorEmailAddressX;
	vtPrimaryVisitorIDProofDetailsX;
	vtPrimaryVisitorNameX;
	vtPrimaryVisitorNationalityX;
	vtRemarksX;
	vtTowerUnitX;
	vtUnitOwnerX;
	vtVehicleDetailsCountX;
	vtVehiclesCanBeAddedByConciergeX;
	vtVehiclesCanBeAddedByGatekeeperX;

	Name: String;
	Type: String;

	Siglo: String;

	docPath: string;
	constructor(
		private postPvd: PostProvider,
		private router: Router,
		private actRoute: ActivatedRoute,
		private modalController: ModalController,
		public alertController: AlertController,
		public toastController: ToastController,
		private platform: Platform,
		private document: DocumentViewer,
		private file: File,
		private fileOpener: FileOpener,
		private transfer: FileTransfer,
	) { }

	async openModal(vtTermsCondition) {
		const modal = await this.modalController.create({
			component: VisitorDetailsModalPage,
			componentProps: {
				vtTermsConditionX: vtTermsCondition,
			}
		});
		return await modal.present();
	}

	ngOnInit() {
		this.id = history.state.id;
		this.Name = localStorage.getItem("FULLNAME");
		this.Type = localStorage.getItem("TYPE_DATA");
		this.Siglo = localStorage.getItem("SIGLO");
		this.loadData(this.id);
	}

	loadData(id) {
		return new Promise(resolve => {
			let body = {
				action: 'visitorData',
				id: id,
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {

				this.dataX.push(data['visitData']);
				for (let index = 0; index < data['visitAdditional'].length; index++) {
					this.dataAdd.push(data['visitAdditional']);
				}

				this.vtAdditionalVisitorCountX = data['visitType']['vtAdditionalVisitorCount'];
				this.vtApprovalX = data['visitType']['vtApproval'];
				this.vtArrivalDateX = data['visitType']['vtArrivalDate'];
				this.vtArrivalTimeX = data['visitType']['vtArrivalTime'];
				this.vtCanAssignIDByGatekeeperX = data['visitType']['vtCanAssignIDByGatekeeper'];
				this.vtCanBeAddedByConciergeX = data['visitType']['vtCanBeAddedByConcierge'];
				this.vtCanBeAddedByGatekeeperX = data['visitType']['vtCanBeAddedByGatekeeper'];
				this.vtCarparkSlotNoX = data['visitType']['vtCarparkSlotNo'];
				this.vtDepartureDateX = data['visitType']['vtDepartureDate'];
				this.vtDepartureTimeX = data['visitType']['vtDepartureTime'];
				this.vtGuestContactX = data['visitType']['vtGuestContact'];
				this.vtGuestOnSiteX = data['visitType']['vtGuestOnSite'];
				this.vtPrimaryVisitorAddressX = data['visitType']['vtPrimaryVisitorAddress'];
				this.vtPrimaryVisitorContactNoX = data['visitType']['vtPrimaryVisitorContactNo'];
				this.vtPrimaryVisitorEmailAddressX = data['visitType']['vtPrimaryVisitorEmailAddress'];
				this.vtPrimaryVisitorIDProofDetailsX = data['visitType']['vtPrimaryVisitorIDProofDetails'];
				this.vtPrimaryVisitorNameX = data['visitType']['vtPrimaryVisitorName'];
				this.vtPrimaryVisitorNationalityX = data['visitType']['vtPrimaryVisitorNationality'];
				this.vtRemarksX = data['visitType']['vtRemarks'];
				this.vtTowerUnitX = data['visitType']['vtTowerUnit'];
				this.vtUnitOwnerX = data['visitType']['vtUnitOwner'];
				this.vtVehicleDetailsCountX = data['visitType']['vtVehicleDetailsCount'];
				this.vtVehiclesCanBeAddedByConciergeX = data['visitType']['vtVehiclesCanBeAddedByConcierge'];
				this.vtVehiclesCanBeAddedByGatekeeperX = data['visitType']['vtVehiclesCanBeAddedByGatekeeper'];

				for (let index = 0; index < data['vehData'].length; index++) {
					this.vehData.push(data['vehData']);
				}


				resolve(true);
				console.log(data);
			});
		});
	}

	async openToast(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000
		});
		toast.present();
	}

	async confirmCancel(ID) {
		const alert = await this.alertController.create({
			header: 'Cancel request?',
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
						this.cancel(ID);
					}
				}
			]
		});

		await alert.present();
	}

	cancel(id) {
		return new Promise(resolve => {
			let body = {
				action: 'cancelRequest',
				id: id,
				Name: this.Name,
				Type: this.Type,
			};

			this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
				if (data['status'] == "Success") {
					this.openToast("Request cancelled");
					this.router.navigateByUrl('/tabs/tab1/visitors-details');
				}
			});
		});
	}

	doRefresh(event, id) {
		console.log('Begin async operation');

		setTimeout(() => {
			return new Promise(resolve => {
				let body = {
					action: 'visitorData',
					id: id,
				};

				this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
					this.dataX = [];
					this.dataAdd = [];
					this.vehData = [];

					this.dataX.push(data['visitData']);
					for (let index = 0; index < data['visitAdditional'].length; index++) {
						this.dataAdd.push(data['visitAdditional']);
					}

					this.vtAdditionalVisitorCountX = data['visitType']['vtAdditionalVisitorCount'];
					this.vtApprovalX = data['visitType']['vtApproval'];
					this.vtArrivalDateX = data['visitType']['vtArrivalDate'];
					this.vtArrivalTimeX = data['visitType']['vtArrivalTime'];
					this.vtCanAssignIDByGatekeeperX = data['visitType']['vtCanAssignIDByGatekeeper'];
					this.vtCanBeAddedByConciergeX = data['visitType']['vtCanBeAddedByConcierge'];
					this.vtCanBeAddedByGatekeeperX = data['visitType']['vtCanBeAddedByGatekeeper'];
					this.vtCarparkSlotNoX = data['visitType']['vtCarparkSlotNo'];
					this.vtDepartureDateX = data['visitType']['vtDepartureDate'];
					this.vtDepartureTimeX = data['visitType']['vtDepartureTime'];
					this.vtGuestContactX = data['visitType']['vtGuestContact'];
					this.vtGuestOnSiteX = data['visitType']['vtGuestOnSite'];
					this.vtPrimaryVisitorAddressX = data['visitType']['vtPrimaryVisitorAddress'];
					this.vtPrimaryVisitorContactNoX = data['visitType']['vtPrimaryVisitorContactNo'];
					this.vtPrimaryVisitorEmailAddressX = data['visitType']['vtPrimaryVisitorEmailAddress'];
					this.vtPrimaryVisitorIDProofDetailsX = data['visitType']['vtPrimaryVisitorIDProofDetails'];
					this.vtPrimaryVisitorNameX = data['visitType']['vtPrimaryVisitorName'];
					this.vtPrimaryVisitorNationalityX = data['visitType']['vtPrimaryVisitorNationality'];
					this.vtRemarksX = data['visitType']['vtRemarks'];
					this.vtTowerUnitX = data['visitType']['vtTowerUnit'];
					this.vtUnitOwnerX = data['visitType']['vtUnitOwner'];
					this.vtVehicleDetailsCountX = data['visitType']['vtVehicleDetailsCount'];
					this.vtVehiclesCanBeAddedByConciergeX = data['visitType']['vtVehiclesCanBeAddedByConcierge'];
					this.vtVehiclesCanBeAddedByGatekeeperX = data['visitType']['vtVehiclesCanBeAddedByGatekeeper'];

					for (let index = 0; index < data['vehData'].length; index++) {
						this.vehData.push(data['vehData']);
					}

					event.target.complete();

					resolve(true);
					console.log(data);
				});
			});

		}, 2000);
	}


	extToMimes = [
		{ ext: 'pdf', MType: 'application/pdf' }
	];

	downloadGAF(name) {
		const fileTransfer: FileTransferObject = this.transfer.create();
		const url = 'https://www.azure-connect.com/pdf/' + name;

		this.file.checkDir(this.file.externalRootDirectory, 'downloads')
			.then(
				// Directory exists, check for file with the same name
				_ => this.file.checkFile(this.file.externalRootDirectory, 'downloads/' + name)
					.then(_ => { 
						alert("A file with the same name already exists!") 
					})
					// File does not exist yet, we can save normally
					.catch(err =>
						fileTransfer.download(url, this.file.externalRootDirectory + '/downloads/' + name).then((entry) => {
							alert('File saved in:  ' + entry.nativeURL);
						})
							.catch((err) => {
								alert('Error saving file: ' + err.message);
							})
					))
			.catch(
				// Directory does not exists, create a new one
				err => this.file.createDir(this.file.externalRootDirectory, 'downloads', false)
					.then(response => {
						alert('New folder created:  ' + response.fullPath);
						fileTransfer.download(url, this.file.externalRootDirectory + '/downloads/' + name).then((entry) => {
							alert('File saved in : /downloads/' + name);
						})
							.catch((err) => {
								alert('Error saving file:  ' + err.message);
							});

					}).catch(err => {
						alert('It was not possible to create the dir "downloads". Err: ' + err.message);
					})
			);
		console.log(url);




		// fileTransfer.download(url, this.file.externalRootDirectory + name).then((entry) => {
		// 	// this.fileOpener.open(entry.toURL(), this.getMimeByExt(name))
		// 	// 	.then(() => this.openToast('File is opened'))
		// 	// 	.catch(e => this.openToast('Error opening file'));

		// 	this.openToast('File downloaded in '+this.file.externalRootDirectory + name);

		// }, (error) => {
		// 	console.log(error);

		// });
	}

	getMimeByExt(name: any) {
		var extention = name.split('.').pop();
		for (let i = 0; i < this.extToMimes.length; i++) {
			const element = this.extToMimes[i];
			if (element.ext == extention) {
				return element.MType;
			}
		}
	}

}
