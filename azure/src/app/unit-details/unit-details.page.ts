import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.page.html',
  styleUrls: ['./unit-details.page.scss'],
})
export class UnitDetailsPage implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() {
  }

  openTenantDetailsInTabs(){
    this.router.navigateByUrl('/tabs/tab1/unit-details/tenant-details')
  }

  openResidentDetailsListInTabs() {
    this.router.navigateByUrl('/tabs/tab1/unit-details/resident-details-list')
  }

  openOldTenantDetails() {
    this.router.navigateByUrl('/tabs/tab1/unit-details/old-tenant-details')
  }

  openParkingDetails() {
    this.router.navigateByUrl('/tabs/tab1/unit-details/parking-details')
  }

}
