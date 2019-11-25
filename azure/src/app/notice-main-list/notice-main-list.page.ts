import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-main-list',
  templateUrl: './notice-main-list.page.html',
  styleUrls: ['./notice-main-list.page.scss'],
})
export class NoticeMainListPage implements OnInit {
  uType:string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.uType = localStorage.getItem("UNIT_CODE");
    console.log(localStorage);
  }

  openRulesList(uType, List) {
    // console.log(uType, List);
    this.router.navigateByUrl('/tabs/tab1/notice-main-list/notice-rules-list', {state: {uType:uType, List: List}});
  }

}
