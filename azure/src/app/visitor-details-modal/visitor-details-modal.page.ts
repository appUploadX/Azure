import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visitor-details-modal',
  templateUrl: './visitor-details-modal.page.html',
  styleUrls: ['./visitor-details-modal.page.scss'],
})
export class VisitorDetailsModalPage implements OnInit {
  @Input() vtTermsConditionX:any;

  ngOnInit() {
    console.log(this.vtTermsConditionX)
  }

  constructor(private modalController: ModalController) { }

  

  async closeModal() {
    await this.modalController.dismiss();
  }

}
