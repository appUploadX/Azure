import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  // user: any = [];
  typeData: string;
  unit_code: string;
  property_code: string;
  newCode: string;
  hasTenant: string;
  fullname: string;
  TUN: string;
  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    console.log(localStorage);
    this.unit_code = localStorage.getItem("UNIT_CODE");
    this.typeData = localStorage.getItem("TYPE_DATA");
    this.property_code = localStorage.getItem("PROPERTY_CODE");
    this.hasTenant = localStorage.getItem("HAS_TENANT");
    this.newCode = localStorage.getItem("NEW_CODE");
    this.fullname = localStorage.getItem("FULLNAME");
    this.TUN = localStorage.getItem("TUN");
  }

  ionViewWillEnter() {
    console.log(localStorage);
    this.unit_code = localStorage.getItem("UNIT_CODE");
    this.typeData = localStorage.getItem("TYPE_DATA");
    this.property_code = localStorage.getItem("PROPERTY_CODE");
    this.hasTenant = localStorage.getItem("HAS_TENANT");
    this.newCode = localStorage.getItem("NEW_CODE");
    this.fullname = localStorage.getItem("FULLNAME");
    this.TUN = localStorage.getItem("TUN");
  }

  async openToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  openUnitDetailsInTabs() {
    // console.log(unit_code, property_code, typeData);
    // this.router.navigate(['/unit-details/'], { state: { uCode: unit_code, pCode: property_code, uType: typeData}});
    this.router.navigateByUrl('/tabs/tab1/unit-details');

  }

  openVisitorsInTabs() {
    // this.router.navigateByUrl('/tabs/tab1/visitors-details', { state: { uCode:unit_code, newCode: newCode, fullname: this.fullname, TUN: this.TUN}});
    if (this.hasTenant == "ActiveTenant") {
      this.openToast("You have active tenant.");
    }
    else {
      this.router.navigateByUrl('/tabs/tab1/visitors-details');
    }
  }

  openNoticeInTabs() {
    this.router.navigateByUrl('/tabs/tab1/notice-main-list', { state: { uCode: this.unit_code, pCode: this.property_code, uType: this.typeData } });
  }

  openAmenitiesInTabs() {
    if (this.hasTenant == "ActiveTenant") {
      this.openToast("You have active tenant.");
    }
    else {
      this.router.navigateByUrl('tabs/tab1/amenities-details')
    }
  }

}
