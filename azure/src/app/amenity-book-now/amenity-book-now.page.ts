import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-amenity-book-now',
  templateUrl: './amenity-book-now.page.html',
  styleUrls: ['./amenity-book-now.page.scss'],
})
export class AmenityBookNowPage implements OnInit {
  amenCode:number;
  amenName:string;
  propCode:number;
  uType:string;
  unitCode:number;
  bookingdate:string;
  timeSlots:string;
  rateperbooking: number;
  constructor(
    private postPvd: PostProvider,
  ) { }

  ngOnInit() {
    this.amenCode = history.state.amenCode;
    this.amenName = history.state.amenName;
    this.propCode = history.state.propCode;
    this.uType = history.state.uType;
    this.unitCode = history.state.unitCode;
    this.rateperbooking = history.state.rateperbooking;
    console.log(history.state);
  }

  insertBook(amenCode, amenName, propCode, uType, unitCode, rateperbooking)
  {
    return new Promise(resolve => {
      let body = {
        action: 'addBooking',
        amenCode: amenCode,
        amenName: amenName,
        propCode: propCode,
        uType: uType,
        unitCode: unitCode,
        bookingdate: this.bookingdate,
        timeSlots: this.timeSlots,
        rateperbooking: rateperbooking,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        console.log("okay");
      });
    });
  }

}
