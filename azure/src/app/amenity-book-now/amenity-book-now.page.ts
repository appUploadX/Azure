import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import * as $ from "jquery";


@Component({
    selector: 'app-amenity-book-now',
    templateUrl: './amenity-book-now.page.html',
    styleUrls: ['./amenity-book-now.page.scss'],
})
export class AmenityBookNowPage implements OnInit {
    amenCode: number;
    amenName: string;
    propCode: number;
    uType: string;
    unitCode: number;
    bookingdate: string;
    timeSlots: string;
    rateperbooking: number;
    TUN: String;
    unit_code: String;
    newCode: String;
    isReadonly: boolean;
    ishidden: boolean;
    ishiddenbtn: boolean;
    ckDisable: boolean;
    visitUnit: any;
    visitAdditional: any;
    bedroom: String;
    Free: number;
    Name: String;
    amenDetails: any;

    minDate: string;
    maxDate: string = (new Date().getFullYear() + 1) + "-12-31";

    start: any;
    end: any;

    propertyCode: string;
    countCK: number = 0;
    countVUnit: number = 0;
    refNo:string;
    constructor(
        private router: Router,
        private postPvd: PostProvider,
        public toastController: ToastController,

    ) { }

    ngOnInit() {
        this.amenCode = history.state.amenCode;
        this.amenName = history.state.amenName;
        this.propCode = history.state.propCode;
        this.uType = history.state.uType;
        this.unitCode = history.state.unitCode;
        this.rateperbooking = history.state.rateperbooking;
        this.TUN = localStorage.getItem("TUN");
        this.unit_code = localStorage.getItem("UNIT_CODE");
        this.newCode = localStorage.getItem("NEW_CODE");
        this.bedroom = localStorage.getItem("BEDROOM");
        this.ishidden = true;
        this.ishiddenbtn = true;
        this.Name = localStorage.getItem("FULLNAME");
        this.propertyCode = localStorage.getItem("PROPERTY_CODE");
        this.start = history.state.start;
        console.log(history.state.start);

        // this.end = history.state.end.split(",");

        var dateX = new Date().toISOString().split("T");
        this.minDate = dateX[0];

        this.isReadonly = true;
        this.ckDisable = false;
        console.log(history.state);
        console.log(localStorage);
        console.log(dateX[0]);
    }

    async openToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    checkVisitors(val) {
        this.ishidden = false;
        console.log(val.detail.value);
        var time = val.detail.value;
        var date = this.bookingdate.split("T");
        return new Promise(resolve => {
            let body = {
                action: 'checkVisitors',
                date: date[0],
                slot: time,
                uCode: this.unit_code,
                newCode: this.newCode,
                propertyCode: this.propertyCode,
                amenCode: this.amenCode,
                amenName: this.amenName,
                bedroom: this.bedroom,
            };

            this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                this.visitUnit = [];
                this.visitAdditional = [];
                this.amenDetails = [];

                if (data['status'] == "Success") {
                    this.refNo = data['refNo'];
                    this.countVUnit = data['countVUnit'];
                    this.visitUnit.push(data['visitUnit'][0]);
                    for (let index = 0; index < data['visitAdditional'].length; index++) {
                        this.visitAdditional.push(data['visitAdditional']);
                    }

                    // for (let i = 0; i < data['amenDetails'].length; i++) {
                    this.amenDetails.push(data['amenDetails']);
                    this.Free = data['amenDetails']['FreeUsers'];
                    if (data['amenDetails']['FreeUsers'] == 0) {
                        this.ckDisable = true;
                    }
                    else {
                        this.ckDisable = false;
                    }
                    // }
                }
                console.log(this.amenDetails);
                console.log(data);
                resolve(true);
            });
        });
    }

    read(e) {
        this.isReadonly = false
    }

    addCheckbox(e, free) {
        var thisAttr = [];
        if (e.detail.checked == true) {
            this.countCK += 1;
        }
        else {
            this.countCK -= 1;
        }
        console.log(e.detail.value, e.detail.checked, this.countCK, free);

        if (this.countCK >= free) {
            console.log("hops!")
            $(".checkbook").each(function () {
                thisAttr.push($(this));
            });

            for (var i = 0; i < thisAttr.length; i++) {
                console.log(thisAttr[i][0].disabled, thisAttr[i][0].checked, thisAttr[i])
                if (thisAttr[i][0].checked == false) {
                    thisAttr[i][0].disabled = true;
                }
            }

        }
        else {
            console.log("sige")
            $(".checkbook").each(function () {
                thisAttr.push($(this));
            });

            for (var i = 0; i < thisAttr.length; i++) {
                console.log(thisAttr[i]);
                console.log(thisAttr[i][0].disabled, thisAttr[i][0].checked)
                // if (thisAttr[i][0].checked == true) {
                thisAttr[i][0].disabled = false;
                // }
            }
        }

    }

    insertBook(amenCode, amenName, propCode, uType, unitCode, rateperbooking) {
        var count = 0;
        var countSel = 0;

        if ($(".checked").val() == "") {
            count++;
        }

        var thisAttr = [];
        var visitor = [];
        var category = [];
        var code = [];
        $(".checkbook").each(function () {
            thisAttr.push($(this));
        });

        for (var i = 0; i < thisAttr.length; i++) {
            // console.log(thisAttr[i][0].disabled, thisAttr[i][0].checked, thisAttr[i])
            if (thisAttr[i][0].checked == true) {
                visitor.push(thisAttr[i][0].value)
                category.push(thisAttr[i][0].id.split(" ")[0]);
                code.push(thisAttr[i][0].id.split(" ")[1]);
            }
        }

        $(".requiredsel").each(function () {
            if ($(this).is(":selected")) {
                countSel++;
            }
        });

        // console.log(visitor);

        if (count == 0 && countSel != 0) {
            return new Promise(resolve => {
                let body = {
                    action: 'addBooking',
                    amenCode: amenCode,
                    amenName: amenName,
                    propCode: propCode,
                    uType: uType,
                    unitCode: unitCode,
                    bookingdate: this.bookingdate,
                    timeSlots: this.timeSlots,
                    rateperbooking: rateperbooking,
                    Free: this.Free,
                    Name: this.Name,
                    Visitors: visitor,
                    Category: category,
                    Code: code,
                    refNo: this.refNo,
                };

                this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
                    if (data['status'] == "Success") {
                        console.log("okay");
                        this.openToast("<center>Data succesfully saved!</center>");
                        setTimeout(() => { this.router.navigateByUrl('tabs/tab1/amenities-details') }, 2000)
                    }
                    else {
                        this.openToast("<center>All free slots are used!</center>");
                    }

                });
            });

        }
        else {
            this.openToast("<center>All fields are required!</center>");
        }
    }



}
