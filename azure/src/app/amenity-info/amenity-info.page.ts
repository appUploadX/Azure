import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-amenity-info',
  templateUrl: './amenity-info.page.html',
  styleUrls: ['./amenity-info.page.scss'],
})
export class AmenityInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(history.state);
  }

  openAmenityBookNow() {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info/amenity-book-now')
  }

}
