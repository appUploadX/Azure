import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  Email:string;
  Type:string;
  Data:any = [];
  DataConfirm:any = [];
  RoomNo:string;
  constructor(private router: Router, private postPvd: PostProvider, public alertController: AlertController) { }

  ngOnInit() {
    this.RoomNo = sessionStorage.getItem("ROOM_NO");
    this.Email = sessionStorage.getItem("EMAIL");
    this.Type = sessionStorage.getItem("TYPE_DATA");
    console.log(sessionStorage)
  }

  ionViewWillEnter()
  {
    console.log(sessionStorage)
    this.RoomNo = sessionStorage.getItem("ROOM_NO");
    this.Email = sessionStorage.getItem("EMAIL");
    this.Type = sessionStorage.getItem("TYPE_DATA");
    this.loadData(this.Email, this.Type);
  }

  async presentAlertConfirm(no) {
    const alert = await this.alertController.create({
      header: 'Switch to Unit '+no+'?',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Agree',
          handler: () => {
            console.log('Confirm Okay');
            this.confirmChange(no);
          }
        }
      ]
    });

    await alert.present();
  }

  openChangePassword() {
    this.router.navigateByUrl('/tabs/tab4/change-password')
  }

  loadData(Email, Type)
  {
    this.Data = [];
    return new Promise(resolve => {
      let body = {
        action: 'MultipleUnit',
        Type: Type,
        Email: Email,
        RoomNo: this.RoomNo,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        
        for(var i = 0; i < data['result'].length;i++){
          this.Data.push(data['result']);
        }

        resolve(true);
        console.log(data);
      });
    });
  }

  confirmChange(no)
  {
    this.Data = [];
    return new Promise(resolve => {
      let body = {
        action: 'changeUnit',
        Type: this.Type,
        Email: this.Email,
        RoomNo: no,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        
        // for(var i = 0; i < data['result'].length;i++){
        //   this.DataConfirm.push(data['result']);
        // }
          if(data['uType'] == "Owner")
          {
            sessionStorage.setItem("UNIT_CODE", data['dataX']['unit_code']);
            sessionStorage.setItem("TYPE_DATA", data['uType']);
            sessionStorage.setItem("HAS_TENANT", data['hasTenant']);
            sessionStorage.setItem("NEW_CODE", data['dataX']['new_code']);
            sessionStorage.setItem("FULLNAME", data['dataX']['fullname']);
            sessionStorage.setItem("TUN", data['TUN']);
            sessionStorage.setItem("ROOM_NO", data['ROOM_NO']);
            sessionStorage.setItem("EMAIL", data['dataX']['EmailAddress']);

            sessionStorage.setItem("PROPERTY_CODE", data['dataX']['property_code']);
            this.router.navigateByUrl('/tabs/tab1');
          }
          else if(data['uType'] == "Tenant")
          {
            sessionStorage.setItem("UNIT_CODE", data['dataX']['unit_code']);
            sessionStorage.setItem("TYPE_DATA", data['uType']);
            sessionStorage.setItem("HAS_TENANT", data['hasTenant']);
            sessionStorage.setItem("NEW_CODE", data['dataX']['new_code']);
            sessionStorage.setItem("FULLNAME", data['dataX']['fullname']);
            sessionStorage.setItem("TUN", data['TUN']);
            sessionStorage.setItem("ROOM_NO", data['ROOM_NO']);
            sessionStorage.setItem("EMAIL", data['dataX']['tEmailAddress']);

            sessionStorage.setItem("PROPERTY_CODE", data['propC']['property_code']);
            this.router.navigateByUrl('/tabs/tab1');
          }
        resolve(true);
        console.log(data);
      });
    });
  }

}
