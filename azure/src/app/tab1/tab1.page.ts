import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Subject } from 'rxjs/subject';
import { Observable } from 'rxjs/Rx';

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
  Siglo: string;
  
  valin: any;
  private refreshSubject: Subject<void>;
  private refreshObservable: Observable<void>;
  refreshSubscription: any;
  private timeoutId: any;

  // private initRefresh() {
  //   this.timeoutId = setInterval(() => this.checkFunction(), 1000);
  // }
  
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
    this.Siglo = localStorage.getItem("SIGLO");
    
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
    this.Siglo = localStorage.getItem("SIGLO");

    // this.valin = setInterval(() => {
    //   this.checkFunction();
    // }, 10000);
  }

  // checkFunction() {
  //   return new Promise(resolve => {
  //     let body = {
  //       action: 'checkLocal',
  //       new_code: localStorage.getItem("NEW_CODE"),
  //       email: localStorage.getItem("EMAIL"),
  //       type: localStorage.getItem("TYPE_DATA"),
  //     };

  //     this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
  //       if (data['uType'] == "Owner") {
  //         localStorage.setItem("HAS_TENANT", data['hasTenant']);
  //         localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
  //         localStorage.setItem("TERMS", data['dataX'][0]['pTermsAndCondition']);
  //         localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);
  //       }
  //       else if (data['uType'] == "Tenant") {
  //         localStorage.setItem("HAS_TENANT", data['hasTenant']);
  //         localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
  //         localStorage.setItem("TERMS", data['dataX'][0]['tTermsAndCondition']);
  //         localStorage.setItem("SIGLO", data['dataX'][0]['sigloType']);
  //       }
  //       console.log(localStorage);
  //     })
  //   });
  // }

  // ionViewDidEnter() {
  //   // this.initRefresh();
  //   this.refreshSubject = new Subject<void>();
  //   this.refreshObservable = this.refreshSubject.asObservable();
  //   this.refreshSubscription = this.refreshObservable.subscribe(() => this.checkFunction());
  // }
  
  // ionViewDidLeave() {
  //   // this.stopRefresh();
  //   this.refreshSubscription.unsubscribe();
  // }

  // private stopRefresh() {
  //   clearInterval(this.timeoutId);
  // }

  // ionViewWillLeave() {
  //   clearInterval(this.valin);
  //   clearInterval(this.valin);
  // }


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
      this.openToast("<center>You have active tenant.</center>");
    }
    else {
      if (this.Siglo != "On") {
        this.router.navigateByUrl('/tabs/tab1/visitors-details');
      }
      else {
        this.openToast("<center>Your unit is under by Siglo.</center>");
      }

    }
  }

  openNoticeInTabs() {
    this.router.navigateByUrl('/tabs/tab1/notice-main-list', { state: { uCode: this.unit_code, pCode: this.property_code, uType: this.typeData } });
  }

  openAmenitiesInTabs() {
    if (this.hasTenant == "ActiveTenant") {
      this.openToast("<center>You have active tenant.</center>");
    }
    else {
      if (this.Siglo != "On") {
        this.router.navigateByUrl('tabs/tab1/amenities-details')
      }
      else {
        this.openToast("<center>Your unit is under by Siglo.</center>");
      }
    }
  }

}
