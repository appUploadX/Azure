import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';


@Component({
  selector: 'app-notice-rules-list',
  templateUrl: './notice-rules-list.page.html',
  styleUrls: ['./notice-rules-list.page.scss'],
})
export class NoticeRulesListPage implements OnInit {
  uType: string;
  ListType:string;
  Data:any=[];

  constructor(
    private postPvd: PostProvider,
    private router: Router
  ) { }

  ngOnInit() {
    this.uType = history.state.uType;
    this.ListType = history.state.List;
    console.log(history.state);
    this.loadLists(this.uType, this.ListType);
  }

  openRulesDetails(title, listType, description, documentpath) {
    this.router.navigateByUrl('/tabs/tab1/notice-main-list/notice-rules-list/notice-rules-details', {state: {title: title, listType: listType, desc: description, docPath: documentpath}})
  }

  loadLists(uType, ListType) {
    return new Promise(resolve => {
      let body = {
        action: 'notices',
        uType: uType,
        ListType: ListType
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        for (let index = 0; index < data['data'].length; index++) {
            this.Data.push(data['data']);
        }
        resolve(true);
        console.log(data['data']);
      })
    });
  }

  

}
