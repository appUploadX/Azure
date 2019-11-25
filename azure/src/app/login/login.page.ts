import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
  TUN: string;
  constructor(
    private postPvd: PostProvider,
    private router: Router,
    public toastController: ToastController,
  ) { }


  ngOnInit() {
  }

  async openToast(msg)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  

  onSubmit(user, pass)
  {
    if(user != "" && pass != "")
    {
      return new Promise(resolve => {
        let body = {
          action: 'login',
          user: user,
          pass: pass,
        };

        this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
          if(data['status'] == "Success")
          {
            this.typeData = data['uType'];
            this.Status = data['status'];
            this.Has = data['hasTenant'];
            this.Data.push(data['data']);
            console.log(data['dataX'][0]);
            if(data['uType'] == "Owner")
            {
              sessionStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
              sessionStorage.setItem("TYPE_DATA", this.typeData);
              sessionStorage.setItem("HAS_TENANT", data['hasTenant']);
              sessionStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
              sessionStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
              sessionStorage.setItem("TUN", data['TUN']);
              sessionStorage.setItem("ROOM_NO", data['ROOM_NO']);
              sessionStorage.setItem("EMAIL", data['dataX'][0]['EmailAddress']);

              sessionStorage.setItem("PROPERTY_CODE", data['dataX'][0]['property_code']);
              this.router.navigateByUrl('/tabs/tab1');
            }
            else if(data['uType'] == "Tenant")
            {
              sessionStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
              sessionStorage.setItem("TYPE_DATA", this.typeData);
              sessionStorage.setItem("HAS_TENANT", data['hasTenant']);
              sessionStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
              sessionStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
              sessionStorage.setItem("TUN", data['TUN']);
              sessionStorage.setItem("ROOM_NO", data['ROOM_NO']);
              sessionStorage.setItem("EMAIL", data['dataX'][0]['tEmailAddress']);

              sessionStorage.setItem("PROPERTY_CODE", data['propC']['property_code']);
              this.router.navigateByUrl('/tabs/tab1');
            }
          }
          else
          {
            this.openToast('Invalid credentials!');
          }
          
        })
      });
    }
    else
    {
      this.openToast("All fields are required!");
    }
    
  }

}
