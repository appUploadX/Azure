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
              localStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
              localStorage.setItem("TYPE_DATA", this.typeData);
              localStorage.setItem("HAS_TENANT", data['hasTenant']);
              localStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
              localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
              localStorage.setItem("TUN", data['TUN']);
              localStorage.setItem("ROOM_NO", data['ROOM_NO']);
              localStorage.setItem("EMAIL", data['dataX'][0]['EmailAddress']);

              localStorage.setItem("PROPERTY_CODE", data['dataX'][0]['property_code']);
              this.router.navigateByUrl('/tabs/tab1');
            }
            else if(data['uType'] == "Tenant")
            {
              localStorage.setItem("UNIT_CODE", data['dataX'][0]['unit_code']);
              localStorage.setItem("TYPE_DATA", this.typeData);
              localStorage.setItem("HAS_TENANT", data['hasTenant']);
              localStorage.setItem("NEW_CODE", data['dataX'][0]['new_code']);
              localStorage.setItem("FULLNAME", data['dataX'][0]['fullname']);
              localStorage.setItem("TUN", data['TUN']);
              localStorage.setItem("ROOM_NO", data['ROOM_NO']);
              localStorage.setItem("EMAIL", data['dataX'][0]['tEmailAddress']);

              localStorage.setItem("PROPERTY_CODE", data['propC']['property_code']);
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
