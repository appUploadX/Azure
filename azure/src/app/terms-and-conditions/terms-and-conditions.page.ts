import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
})
export class TermsAndConditionsPage implements OnInit {
  @Input() vtTermsConditionX: any;
  USER_ID: String;
  TYPE_DATA: String;
  isChecked:Boolean;
  constructor(private postPvd: PostProvider, private router: Router) { }

  ngOnInit() {
    this.isChecked = true;

    this.USER_ID = localStorage.getItem("USER_ID");
    this.TYPE_DATA = localStorage.getItem("TYPE_DATA");
    console.log(localStorage);
    this.submit("checkLogin");
    
  }

  closeModal() {
    // this.router.navigateByUrl('/tabs/tab1');
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  checked(e) {
    if(e.target.checked == true)
    {
      this.isChecked = false;
    }
    else
    {
      this.isChecked = true;
    }
    console.log(e.target.checked);
  }

  submit(option) {
    return new Promise(resolve => {
      let body = {
        action: 'updateTerms',
        user_id: this.USER_ID,
        user_type: this.TYPE_DATA,
        option: option,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data => {
        if (data['status'] == "Success") {
          if (option !== 'checkLogin') {
            localStorage.setItem("TERMS", data['Terms']);
            this.router.navigateByUrl('/tabs/tab1');
          }
          this.vtTermsConditionX = data['TermsCondition'];
        }
      })
    });
  }
}
