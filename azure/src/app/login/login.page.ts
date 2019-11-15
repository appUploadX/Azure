import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:string;
  pass:string;

  typeData:string;
  Status:string;
  Has:string;
  Data: any = [];

  constructor(
    private postPvd: PostProvider,
    private router: Router,
  ) { }


  ngOnInit() {
  }

  openHome() {
    // console.log(this.user);
    this.router.navigateByUrl('/tabs/tab1')
  }

  onSubmit(user, pass)
  {
    return new Promise(resolve => {
      let body = {
        action: 'login',
        user: user,
        pass: pass,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        this.typeData = data['uType'];
        this.Status = data['status'];
        this.Has = data['hasTenant'];
        this.Data.push(data['data']);
        console.log(data['dataX'][0]);
        if(this.Status == "Success")
        {
          // this.router.navigateByUrl('/tabs/tab1/'+this.typeData+'/'+data['dataX'][0]['unit_code']+'/'+data['dataX'][0]['property_code'], {skipLocationChange: true});
          this.router.navigateByUrl('/tabs/tab1', { state: { typeCode:this.typeData, uCode: data['dataX'][0]['unit_code'], proCode: data['dataX'][0]['property_code'], hasTenant: data['hasTenant'] }});
        }
        
      })
    });
  }

}
