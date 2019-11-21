import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-amenity-booking-list',
  templateUrl: './amenity-booking-list.page.html',
  styleUrls: ['./amenity-booking-list.page.scss'],
})
export class AmenityBookingListPage implements OnInit {
  uCode:number;
  uType:string;
  dataX:any = [];

  constructor(
    private postPvd: PostProvider,
    private router: Router
  ) { }

  ngOnInit() {
    this.uCode = history.state.uCode;
    this.uType = history.state.uType;
    console.log(history.state);
    this.loadData(this.uCode, this.uType);
  }

  openBookingDetails(id) {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list/amenity-booking-details', {state: {id: id}})
  }

  loadData(uCode, uType)
  {
    return new Promise(resolve => {
      let body = {
        action: 'bookingList',
        uCode: uCode,
        uType: uType,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        for(var x = 0; x < data['data'].length;x++){ 
          this.dataX.push(data['data']);
        }
        resolve(true);
        console.log(data['data']);
      });
    });
  }
}
