import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.page.html',
  styleUrls: ['./amenities-details.page.scss'],
})
export class AmenitiesDetailsPage implements OnInit {
  amenType:any = [];
  pCode;
  uCode;
  uType;
  unit_no;


  constructor(
    private postPvd: PostProvider,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(sessionStorage);
    this.pCode = sessionStorage.getItem("PROPERTY_CODE");
    this.uCode = sessionStorage.getItem("UNIT_CODE");
    this.uType = sessionStorage.getItem("TYPE_DATA");
    this.unit_no = sessionStorage.getItem("ROOM_NO");
    this.loadData();
  }

  openAzureBeach(amenCode, pName) {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info', {state: {amenCode: amenCode,pCode: this.pCode, uCode: this.uCode, uType:this.uType, amenName: pName}})
  }

  openBookingList() {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list');
  }

  loadData()
  {
    return new Promise(resolve => {
      let body = {
        action: 'amenities',
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        for(var x = 0; x < data['data'].length;x++){ 
          this.amenType.push(data['data']);
        }
        resolve(true);
        console.log(data['data']);
      });
    });
  }

}
