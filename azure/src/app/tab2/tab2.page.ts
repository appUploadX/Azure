import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Data :any =[];
  uType:String;
  uCode:String;
  Email:String;
  Name:String;
  Aniv:string;
  uniCount:String;
  countResi:String;
  countPark:String;
  constructor(private postPvd: PostProvider) {}
  ngOnInit ()
  {
    this.uType = sessionStorage.getItem("TYPE_DATA");
    this.uCode = sessionStorage.getItem("UNIT_CODE");
    this.Email = sessionStorage.getItem("EMAIL");
    this.Name = sessionStorage.getItem("FULLNAME");
    console.log(sessionStorage);
  }

  ionViewWillEnter()
  {
    this.loadData(this.uType, this.uCode, this.Email);
  }

  loadData(uType, uCode, Email)
  {
    this.Data = [];
    return new Promise(resolve => {
      let body = {
        action: 'UserDetails',
        uType: uType,
        uCode: uCode,
        Email: Email,
        propCode: sessionStorage.getItem("PROPERTY_CODE"),
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        
        this.Data.push(data['data']);
        this.Aniv = data['aniv'];
        this.uniCount = data['uniCount'];
        this.countResi = data['countResi'];
        this.countPark = data['countPark'];
        resolve(true);
        console.log(data);
      });
    });
  }
}
