import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resident-details-list',
  templateUrl: './resident-details-list.page.html',
  styleUrls: ['./resident-details-list.page.scss'],
})
export class ResidentDetailsListPage implements OnInit {
  

  constructor(private router: Router) { }


  openResidentDetailsIndividual(){
    this.router.navigateByUrl('/tabs/tab1/unit-details/resident-details-list/resident-details-individual')
  }

  ngOnInit() {
  }



}
