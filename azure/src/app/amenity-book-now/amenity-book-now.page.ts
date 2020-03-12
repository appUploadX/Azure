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
    refNo: string;

    counterSave: number = 0;
    Used: any;

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
        var newDate = new Date(dateX[0]);
        var addDate = new Date(newDate);
        addDate.setDate(newDate.getDate() + 2);
        var addTwo = addDate.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false, timeZone: "Asia/Manila"}).split(", ");

        var expTom = addTwo[0].split("/");

        if (expTom[0].length == 1) {
            var m = "0" + expTom[0];
        }
        else {
            var m = expTom[0];
        }

        if (expTom[1].length == 1) {
            var d = "0" + expTom[1];
        }
        else {
            var d = expTom[1];
        }

        this.minDate = expTom[2] + "-" + m + "-" + d;
        console.log(expTom[2] + "-" + m + "-" + d);


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
        console.log(val.detail.value);
        var time = val.detail.value;
        var date = this.bookingdate.split("T");
        if (this.timeSlots != null) {
            this.ishidden = false;

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
                        if (data['countVUnit'] > 0) {
                            for (let index = 0; index < data['visitUnit'].length; index++) {
                                this.visitUnit.push(data['visitUnit']);
                            }
                        }

                        if (data['visitAdditional'] != null) {
                            for (let index = 0; index < data['visitAdditional'].length; index++) {
                                this.visitAdditional.push(data['visitAdditional']);
                            }
                        }
                        
                        this.amenDetails.push(data['amenDetails']);
                        this.Free = data['amenDetails']['FreeUsers'];
                        this.Used = data['amenDetails']['Used'];
                        if (data['amenDetails']['FreeUsers'] == 0) {
                            this.ckDisable = true;
                        }
                        else {
                            this.ckDisable = false;
                        }
                    }
                    console.log(this.amenDetails);
                    console.log(data);
                    resolve(true);
                });
            });
        }
        else {
            this.ishidden = true;
        }
    }

    read(value) {
        

        var day = new Date(value);
        var whatday = day.getDay();
        
        if(whatday != 1){
            this.isReadonly = false;
            this.timeSlots = null;
            this.ishidden = true;
        }
        else
        {
            this.isReadonly = true;
            this.timeSlots = null;
            this.ishidden = true;
            this.openToast("Sorry the selected date is scheduled closed.");
        }

        
    }

    addCheckbox(e, free) {
        var thisAttr = [];
        if (e.detail.checked == true) {
            this.countCK += 1;
            this.ishiddenbtn = false;
        }
        else {
            this.countCK -= 1;
            if (this.countCK > 0) {
                this.ishiddenbtn = false;
            }
            else {
                this.ishiddenbtn = true;
            }
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

        if (count == 0 && countSel != 0) {
            if (this.counterSave == 0) {
                this.counterSave += 1;

                return new Promise(resolve => {
                    let body = {
                        action: 'addBookingNew',
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
                        platf: localStorage.getItem("PLATFORM"),
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

            this.counterSave += 1;

        }
        else {
            this.openToast("<center>All fields are required!</center>");
        }
    }

    test() {
        alert(this.timeSlots);
    }

}