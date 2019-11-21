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


  constructor(
    private postPvd: PostProvider,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(history.state);
    this.pCode = history.state.pCode;
    this.uCode = history.state.uCode;
    this.uType = history.state.uType;
    this.loadData();
  }

  openAzureBeach(amenCode) {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info', {state: {amenCode: amenCode,pCode: this.pCode, uCode: this.uCode, uType:this.uType}})
  }

  openBookingList() {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list')
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
