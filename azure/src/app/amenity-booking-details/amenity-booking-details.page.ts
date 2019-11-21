import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-amenity-booking-details',
  templateUrl: './amenity-booking-details.page.html',
  styleUrls: ['./amenity-booking-details.page.scss'],
})
export class AmenityBookingDetailsPage implements OnInit {
  id:number;
  dataX:any = [];
  constructor(
    private postPvd: PostProvider,
  ) { }

  ngOnInit() {
    console.log(history.state);
    this.id = history.state.id;
    this.loadData(this.id);
  }

  loadData(id)
  {
    return new Promise(resolve => {
      let body = {
        action: 'bookingListDetails',
        ID: id,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        this.dataX.push(data['data']);
        resolve(true);
        console.log(data['data']);
      });
    });
  }

}
