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
  visitData:any = [];
  visitType:any = [];
  unit_code: string;
  newCode: string;
  fullname: string;
  TUN:string;
  unit_no: string;

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
    console.log(localStorage);
  }

  ionViewWillEnter()
  {
    console.log("Enter details page");
    this.loadData(this.unit_code, this.newCode);
  }
  
  OpenVisitorListDetails(id) {
    this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details', {state: {id: id}})
  }

  async openToast(msg)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  openAddVisitorRequest() {
    let hour = new Date().getHours()
    let min = new Date().getMinutes()
    return new Promise(resolve => {
      let body = {
        action: 'checkRequest',
        unit_code: this.unit_code,
        newCode: this.newCode,
        hour: hour,
        min: min
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        if(data['status'] == 'Allowed')
        {
          this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request')
        }
        else
        {
          this.openToast('<center>There is an existing request!</center>');
        }
        resolve(true);
        console.log(data['status']);
      });
    });
    // this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request', {state: {newCode: this.newCode, uCode: this.unit_code, fullname: this.fullname, TUN: this.TUN}})
  }

  loadData(unit_code, newCode)
  {
    this.visitData = [];
    return new Promise(resolve => {
      let body = {
        action: 'visitorDetails',
        unit_code: unit_code,
        newCode: newCode
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        for(var i = 0; i < data['visitData'].length;i++){  
          this.visitData.push(data['visitData']);
        }

        for(var x = 0; x < data['visitData'].length;x++){ 
          this.visitType.push(data['visitType']);
        }
        resolve(true);
        console.log(data['visitData']);
      });
    });
  }


  
}
