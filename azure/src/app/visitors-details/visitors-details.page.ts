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
  unit_code: number;
  newCode: number;
  fullname: string;
  TUN:string;

  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    this.unit_code = history.state.uCode;
    this.newCode = history.state.newCode;
    this.fullname = history.state.fullname;
    this.TUN = history.state.TUN;
    console.log(history.state);
    this.loadData(this.unit_code, this.newCode);
  }
  
  OpenVisitorListDetails(id) {
    this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details', {state: {id: id}})
  }

  openAddVisitorRequest() {
    this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-add-request', {state: {newCode: this.newCode, uCode: this.unit_code, fullname: this.fullname, TUN: this.TUN}})
  }

  loadData(unit_code, newCode)
  {
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
