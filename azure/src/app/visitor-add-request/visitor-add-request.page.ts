import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VisitorAddRequestModalPage } from '../visitor-add-request-modal/visitor-add-request-modal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';


@Component({
  selector: 'app-visitor-add-request',
  templateUrl: './visitor-add-request.page.html',
  styleUrls: ['./visitor-add-request.page.scss'],
})
export class VisitorAddRequestPage implements OnInit {
  types: any = [];
  typesIND: any = [];
  ishidden: boolean;
  label:string;
  description;

  //Name of inputs
  vtUnitOwner;
  vtTowerUnit;
  vtCarparkSlotNo;
  vtGuestOnSite;
  vtGuestContact;
  vtArrivalDate;
  vtArrivalTime;
  vtDepartureDate;
  vtDepartureTime;
  vtPrimaryVisitorName;
  vtPrimaryVisitorNationality;
  vtPrimaryVisitorContactNo;
  vtPrimaryVisitorEmailAddress;
  vtPrimaryVisitorAddress;
  vtAdditionalVisitorCount;
  vtVehicleDetailsCount;
  vtRemarks;

  constructor(
    private modalController: ModalController,
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ishidden = true;
    this.loadData();
  }

  async openModal(description) {
    const modal = await this.modalController.create({
      component: VisitorAddRequestModalPage,
      componentProps: { 
        vtTermsConditionX: description,
      }
    });
    return await modal.present();
  }

  loadData()
  {
    return new Promise(resolve => {
      let body = {
        action: 'typeDetails',
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        for(var i = 0; i < data['typeData'].length;i++){  
          this.types.push(data['typeData']);
        }

        resolve(true);
        console.log(data['typeData']);
      });
    });
  }

  onChangeX(selectedValue){
    console.info("Selected:",selectedValue);
    this.label = selectedValue;
    if(selectedValue != null)
    {
      this.ishidden = false;
    }

    return new Promise(resolve => {
      let body = {
        action: 'typeData',
        value: selectedValue
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        
          this.typesIND.push(data['typeDataX']);
          this.description = data['typeDataX']['vtTermsCondition'];

        resolve(true);
        console.log(data['typeDataX']);
      });
    });
  }


  submit()
  {
    return new Promise(resolve => {
      let body = {
        action: 'addVisitors',
        vtUnitOwner: this.vtUnitOwner,
        vtTowerUnit: this.vtTowerUnit,
        vtCarparkSlotNo: this.vtCarparkSlotNo,
        vtGuestOnSite: this.vtGuestOnSite,
        vtGuestContact: this.vtGuestContact,
        vtArrivalDate: this.vtArrivalDate,
        vtArrivalTime: this.vtArrivalTime,
        vtDepartureDate: this.vtDepartureDate,
        vtDepartureTime: this.vtDepartureTime,
        vtPrimaryVisitorName: this.vtPrimaryVisitorName,
        vtPrimaryVisitorNationality: this.vtPrimaryVisitorNationality,
        vtPrimaryVisitorContactNo: this.vtPrimaryVisitorContactNo,
        vtPrimaryVisitorEmailAddress: this.vtPrimaryVisitorEmailAddress,
        vtPrimaryVisitorAddress: this.vtPrimaryVisitorAddress,
        vtAdditionalVisitorCount: this.vtAdditionalVisitorCount,
        vtVehicleDetailsCount: this.vtVehicleDetailsCount,
        vtRemarks: this.vtRemarks,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        this.router.navigate(['/user-details']);
        console.log('ok');
      })
    });
  }

}
