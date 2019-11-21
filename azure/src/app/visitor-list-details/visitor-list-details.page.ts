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
  dataType:any = [];
  vtAdditionalVisitorCountX;
vtApprovalX;
vtArrivalDateX;
vtArrivalTimeX;
vtCanAssignIDByGatekeeperX;
vtCanBeAddedByConciergeX;
vtCanBeAddedByGatekeeperX;
vtCarparkSlotNoX;
vtDepartureDateX;
vtDepartureTimeX;
vtGuestContactX;
vtGuestOnSiteX;
vtPrimaryVisitorAddressX;
vtPrimaryVisitorContactNoX;
vtPrimaryVisitorEmailAddressX;
vtPrimaryVisitorIDProofDetailsX;
vtPrimaryVisitorNameX;
vtPrimaryVisitorNationalityX;
vtRemarksX;
vtTowerUnitX;
vtUnitOwnerX;
vtVehicleDetailsCountX;
vtVehiclesCanBeAddedByConciergeX;
vtVehiclesCanBeAddedByGatekeeperX;

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

        this.vtAdditionalVisitorCountX = data['visitType']['vtAdditionalVisitorCount'];
        this.vtApprovalX = data['visitType']['vtApproval'];
        this.vtArrivalDateX = data['visitType']['vtArrivalDate'];
        this.vtArrivalTimeX = data['visitType']['vtArrivalTime'];
        this.vtCanAssignIDByGatekeeperX = data['visitType']['vtCanAssignIDByGatekeeper'];
        this.vtCanBeAddedByConciergeX = data['visitType']['vtCanBeAddedByConcierge'];
        this.vtCanBeAddedByGatekeeperX = data['visitType']['vtCanBeAddedByGatekeeper'];
        this.vtCarparkSlotNoX = data['visitType']['vtCarparkSlotNo'];
        this.vtDepartureDateX = data['visitType']['vtDepartureDate'];
        this.vtDepartureTimeX = data['visitType']['vtDepartureTime'];
        this.vtGuestContactX = data['visitType']['vtGuestContact'];
        this.vtGuestOnSiteX = data['visitType']['vtGuestOnSite'];
        this.vtPrimaryVisitorAddressX = data['visitType']['vtPrimaryVisitorAddress'];
        this.vtPrimaryVisitorContactNoX = data['visitType']['vtPrimaryVisitorContactNo'];
        this.vtPrimaryVisitorEmailAddressX = data['visitType']['vtPrimaryVisitorEmailAddress'];
        this.vtPrimaryVisitorIDProofDetailsX = data['visitType']['vtPrimaryVisitorIDProofDetails'];
        this.vtPrimaryVisitorNameX = data['visitType']['vtPrimaryVisitorName'];
        this.vtPrimaryVisitorNationalityX = data['visitType']['vtPrimaryVisitorNationality'];
        this.vtRemarksX = data['visitType']['vtRemarks'];
        this.vtTowerUnitX = data['visitType']['vtTowerUnit'];
        this.vtUnitOwnerX = data['visitType']['vtUnitOwner'];
        this.vtVehicleDetailsCountX = data['visitType']['vtVehicleDetailsCount'];
        this.vtVehiclesCanBeAddedByConciergeX = data['visitType']['vtVehiclesCanBeAddedByConcierge'];
        this.vtVehiclesCanBeAddedByGatekeeperX = data['visitType']['vtVehiclesCanBeAddedByGatekeeper'];


        resolve(true);
        console.log(data);
      });
    });
  }

}
