import { Component, OnInit } from '@angular/core';
import { VisitorDetailsModalPage } from '../visitor-details-modal/visitor-details-modal.page';
import { ModalController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-providers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visitor-list-details',
  templateUrl: './visitor-list-details.page.html',
  styleUrls: ['./visitor-list-details.page.scss'],
})
export class VisitorListDetailsPage implements OnInit {
  id:number;
  vuCode:number;
  dataX:any = [];
  dataAdd:any = [];


  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute,
    private modalController: ModalController
  ) { }

  async openModal(vtTermsCondition) {
    const modal = await this.modalController.create({
      component: VisitorDetailsModalPage,
      componentProps: { 
        vtTermsConditionX: vtTermsCondition,
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.id = history.state.id;
    this.loadData(this.id);
  }

  loadData(id)
  {
    return new Promise(resolve => {
      let body = {
        action: 'visitorData',
        id: id,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{

        this.dataX.push(data['visitData']);
        for (let index = 0; index < data['visitAdditional'].length; index++) {
          this.dataAdd.push(data['visitAdditional']);    
        }

        resolve(true);
        console.log(data);
      });
    });
  }

}
