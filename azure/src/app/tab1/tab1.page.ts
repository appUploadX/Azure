import { Component } from '@angular/core';  
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  // user: any = [];
  typeData: string;
  unit_code: number;
  property_code: number;
  newCode: number;
  hasTenant: string;
  fullname: string;
  TUN: string;
  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute,
    ) {}

  ngOnInit ()
  {
    console.log(history.state);
    this.unit_code = history.state['uCode'];
    this.typeData = history.state['typeCode'];
    this.property_code = history.state['proCode'];
    this.hasTenant = history.state['hasTenant'];
    this.newCode = history.state['newCode'];
    this.fullname = history.state['fullname'];
    this.TUN = history.state['TUN'];
  }

  

  openUnitDetailsInTabs(unit_code, property_code, typeData) {
    console.log(unit_code, property_code, typeData);
    this.router.navigate(['/unit-details/'], { state: { uCode: unit_code, pCode: property_code, uType: typeData}});
  }

  openVisitorsInTabs(unit_code, newCode) {
    this.router.navigateByUrl('/tabs/tab1/visitors-details', { state: { uCode:unit_code, newCode: newCode, fullname: this.fullname, TUN: this.TUN}});
  }

  openNoticeInTabs() {
    this.router.navigateByUrl('/tabs/tab1/notice-main-list',  { state: { uCode: this.unit_code, pCode: this.property_code, uType: this.typeData}});
  }

  openAmenitiesInTabs() {
    this.router.navigateByUrl('tabs/tab1/amenities-details',  { state: { uCode: this.unit_code, pCode: this.property_code, uType: this.typeData}})
  }

}
