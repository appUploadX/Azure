import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.page.html',
  styleUrls: ['./unit-details.page.scss'],
})
export class UnitDetailsPage implements OnInit {
  users: any = [];
  unit_code: number;
  property_code: number;
  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((dataX: any) => 
      {
        this.unit_code = dataX.unit_code;
        this.property_code = dataX.property_code;
        console.log(dataX);
      }
    );
    this.loadData(this.unit_code, this.property_code);
  }

  openTenantDetailsInTabs(tenantCode, pUnitRoom){
    this.router.navigateByUrl('/tabs/tab1/unit-details/tenant-details/'+tenantCode+'/'+pUnitRoom)
  }

  openResidentDetailsListInTabs(unit_code, condition, pUnitRoom) {
    this.router.navigateByUrl('/tabs/tab1/unit-details/resident-details-list/'+ unit_code +'/'+ condition +'/'+ pUnitRoom)
  }

  openOldTenantDetails(unit_code) {
    this.router.navigateByUrl('/tabs/tab1/unit-details/old-tenant-details/'+ unit_code)
  }

  openParkingDetails(property_code, floorNo, roomNo, propertyBuilding) {
    this.router.navigateByUrl('/tabs/tab1/unit-details/parking-details/'+property_code+'/'+floorNo+'/'+roomNo+'/'+propertyBuilding)
  }

  loadData(unit_code, property_code)
  {
    return new Promise(resolve => {
      let body = {
        action: 'userDetails',
        unit_code: unit_code,
        property_code: property_code,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        this.users.push(data['result']);
        resolve(true);


        console.log(data['result']);
      });
    });
  }
}
