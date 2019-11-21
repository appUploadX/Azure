import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-rules-details',
  templateUrl: './notice-rules-details.page.html',
  styleUrls: ['./notice-rules-details.page.scss'],
})
export class NoticeRulesDetailsPage implements OnInit {
  desc: string;
  title:string;
  listType:string;
  
  constructor() { }

  ngOnInit() {
    this.title = history.state.title;
    this.listType = history.state.listType;
    this.desc = history.state.desc;
    console.log(history.state);
  }

}
