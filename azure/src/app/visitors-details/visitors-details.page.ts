import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import * as $ from "jquery";


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
    ThisDateTime: String;
    Type: String;
    DateSelect: boolean = true;

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

        var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).split(" ");
        var date = new Date().toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-').split('-');

        var finalDate = date[2] + '-' + date[0] + '-' + date[1];

        this.ThisDateTime = finalDate + 'T' + time + ':00:000+8:00';
        // console.log(new Date());
        this.DateSelect = true;

    }

    ionViewWillEnter() {
        console.log("Enter details page");
        this.loadData(this.unit_code, this.newCode);
        this.DateSelect = true;

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
        this.DateSelect = true;
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
            this.loadData(this.unit_code, this.newCode);
            // this.visitData = [];
            // this.visitType = [];
            // return new Promise(resolve => {
            //     let body = {
            //         action: 'visitorDetails',
            //         unit_code: unit_code,
            //         newCode: newCode
            //     };

            //     this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
            //         for (var i = 0; i < data['visitData'].length; i++) {
            //             this.visitData.push(data['visitData']);
            //         }

            //         for (var x = 0; x < data['visitData'].length; x++) {
            //             this.visitType.push(data['visitType']);
            //         }
            $("#Type").val('');
            $("#searchDate").val('');
            this.DateSelect = true;

            event.target.complete();
            //         resolve(true);
            //         console.log(this.visitData);
            //     });
            // });

        }, 2000);
    }

    typeChanged(value) {
        // console.log(value);
        this.Type = value;
        this.DateSelect = false;

        // console.log($("#searchDate").val());
        if ($("#searchDate").val() != '') {
            this.dateChanged($("#searchDate").val());
        }

    }


    //trigger ng search
    dateChanged(value) {
        console.log(value.split('T'), $("#Type").val());
        var val = value.split('T');
        this.visitData = [];
        if ($("#Type").val() != '') {
            return new Promise(resolve => {
                let body = {
                    action: 'visitorDetailsSearch',
                    unit_code: this.unit_code,
                    newCode: this.newCode,
                    type: $("#Type").val(),
                    date: val[0],
                };

                this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                    for (var i = 0; i < data['visitData'].length; i++) {
                        this.visitData.push(data['visitData']);
                    }

                    for (var x = 0; x < data['visitData'].length; x++) {
                        this.visitType.push(data['visitType']);
                    }

                    if (data['count'] == '0') {
                        this.openToast("No records found!");
                    }

                    resolve(true);
                    console.log(data['visitData']);
                });
            });
        }

    }


}
