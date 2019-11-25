import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

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
    private actRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    this.unit_code = sessionStorage.getItem("UNIT_CODE");
    this.newCode = sessionStorage.getItem("NEW_CODE");
    this.fullname = sessionStorage.getItem("FULLNAME");
    this.TUN = sessionStorage.getItem("TUN");
    this.unit_no = sessionStorage.getItem("ROOM_NO");
    console.log(sessionStorage);
  }

  ionViewWillEnter()
  {
    console.log("Enter details page");
    this.loadData(this.unit_code, this.newCode);
  }
  
  OpenVisitorListDetails(id) {
    this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details', {state: {id: id}})
  }

  openAddVisitorRequest() {
    // this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request', {state: {newCode: this.newCode, uCode: this.unit_code, fullname: this.fullname, TUN: this.TUN}})
    this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request')
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
