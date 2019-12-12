import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';


@Component({
    selector: 'app-visitors-details',
    templateUrl: './visitors-details.page.html',
    styleUrls: ['./visitors-details.page.scss'],
})
export class VisitorsDetailsPage implements OnInit {
    visitData: any = [];
    visitType: any = [];
    unit_code: string;
    newCode: string;
    fullname: string;
    TUN: string;
    unit_no: string;

    Siglo: String;

    constructor(
        private postPvd: PostProvider,
        private router: Router,
        private actRoute: ActivatedRoute,
        public toastController: ToastController,

    ) { }


    ngOnInit() {
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.newCode = localStorage.getItem("NEW_CODE");
        this.fullname = localStorage.getItem("FULLNAME");
        this.TUN = localStorage.getItem("TUN");
        this.unit_no = localStorage.getItem("ROOM_NO");
        this.Siglo = localStorage.getItem("SIGLO");
        console.log(localStorage);
    }

    ionViewWillEnter() {
        console.log("Enter details page");
        this.loadData(this.unit_code, this.newCode);
    }

    OpenVisitorListDetails(id) {
        this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details', { state: { id: id } })
    }

    async openToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    openAddVisitorRequest() {
        if (this.Siglo == "On") {
            this.openToast("<center>Sorry you're not allowed to make a request!</center>");
        }
        else { 
            this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request')
        }
    }

    loadData(unit_code, newCode) {
        this.visitData = [];
        return new Promise(resolve => {
            let body = {
                action: 'visitorDetails',
                unit_code: unit_code,
                newCode: newCode
            };

            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                for (var i = 0; i < data['visitData'].length; i++) {
                    this.visitData.push(data['visitData']);
                }

                for (var x = 0; x < data['visitData'].length; x++) {
                    this.visitType.push(data['visitType']);
                }
                resolve(true);
                console.log(data['visitData']);
            });
        });
    }


    doRefresh(event, unit_code, newCode) {
        console.log('Begin async operation');

        setTimeout(() => {
            this.visitData = [];
            this.visitType = [];
            return new Promise(resolve => {
                let body = {
                    action: 'visitorDetails',
                    unit_code: unit_code,
                    newCode: newCode
                };

                this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                    for (var i = 0; i < data['visitData'].length; i++) {
                        this.visitData.push(data['visitData']);
                    }

                    for (var x = 0; x < data['visitData'].length; x++) {
                        this.visitType.push(data['visitType']);
                    }

                    event.target.complete();
                    resolve(true);
                    console.log(data['visitData']);
                });
            });

        }, 2000);
    }


}
