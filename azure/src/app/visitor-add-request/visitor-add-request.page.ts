import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VisitorAddRequestModalPage } from 'src/app/visitor-add-request-modal/visitor-add-request-modal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';


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
  newCode:string;
  uCode:string;

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
  avName;

  //Name of data kung check o uncheck
  vtUnitOwnerX:string;
  vtTowerUnitX:string;
  vtCarparkSlotNoX:string;
  vtGuestOnSiteX:string;
  vtGuestContacX:string;
  vtArrivalDateX:string;
  vtArrivalTimeX:string;
  vtDepartureDateX:string;
  vtDepartureTimeX:string;
  vtPrimaryVisitorNameX:string;
  vtGuestContactX: string;
  vtPrimaryVisitorNationalityX:string;
  vtPrimaryVisitorContactNoX:string;
  vtPrimaryVisitorEmailAddressX:string;
  vtPrimaryVisitorAddressX:string;
  vtAdditionalVisitorCountX:string;
  vtVehicleDetailsCountX:string;
  vtRemarksX:string;
  vtRemarksByAdmin:string;
  condition:string;
  fullname:string;
  TUN:string;
  vuVehicleDetailsType:string;
  vuVehicleDetailsModel:string;
  vuVehicleDetailsColor:string;
  vuVehicleDetailsPlateNo:string;
  visitC:any = [];
  Types:string;
  constructor(
    private modalController: ModalController,
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    console.log(history.state);
    this.newCode = sessionStorage.getItem("NEW_CODE");
    this.uCode = sessionStorage.getItem("UNIT_CODE");
    this.fullname = sessionStorage.getItem("FULLNAME");
    this.TUN = sessionStorage.getItem("TUN");

    this.ishidden = true;
    console.log(sessionStorage);
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

  async openToast(msg)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  countVisit(ev) {
    this.visitC = [];
    for(var i = 0; i < ev.target.value;i++){  
      this.visitC.push({'value':'', 'valueX':''});
    }
    console.log('this.visitC',this.visitC);
    // console.log(ev.target.value);
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
    console.info("Selected:",this.newCode);
    this.label = selectedValue;
    this.ishidden = true;

    if(selectedValue != null)
    {
      this.ishidden = false;
    }

    return new Promise(resolve => {
      let body = {
        action: 'typeData',
        value: selectedValue,
        uCode: this.uCode,
        newCode: this.newCode,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        this.vtUnitOwnerX = data['typeDataX']['vtUnitOwner'];
        this.vtTowerUnitX = data['typeDataX']['vtTowerUnit'];
        this.vtCarparkSlotNoX = data['typeDataX']['vtCarparkSlotNo'];
        this.vtGuestOnSiteX = data['typeDataX']['vtGuestOnSite'];
        this.vtGuestContacX = data['typeDataX']['vtGuestContac'];
        this.vtArrivalDateX = data['typeDataX']['vtArrivalDate'];
        this.vtArrivalTimeX = data['typeDataX']['vtArrivalTime'];
        this.vtDepartureDateX = data['typeDataX']['vtDepartureDate'];
        this.vtDepartureTimeX = data['typeDataX']['vtDepartureTime'];
        this.vtPrimaryVisitorNameX = data['typeDataX']['vtPrimaryVisitorName'];
        this.vtGuestContactX = data['typeDataX']['vtGuestContact'];
        this.vtPrimaryVisitorNationalityX = data['typeDataX']['vtPrimaryVisitorNationality'];
        this.vtPrimaryVisitorContactNoX = data['typeDataX']['vtPrimaryVisitorContactNo'];
        this.vtPrimaryVisitorEmailAddressX = data['typeDataX']['vtPrimaryVisitorEmailAddress'];
        this.vtPrimaryVisitorAddressX = data['typeDataX']['vtPrimaryVisitorAddress'];
        this.vtAdditionalVisitorCountX = data['typeDataX']['vtAdditionalVisitorCount'];
        this.vtVehicleDetailsCountX = data['typeDataX']['vtVehicleDetailsCount'];
        this.vtRemarksX = data['typeDataX']['vtRemarks'];

        // this.typesIND.push(data['typeDataX']);
        this.description = data['typeDataX']['vtTermsCondition'];
        resolve(true);
        console.log(data['typeDataX']);
      });
    });
  }


  submit()
  {
    // console.log(this.visitC);
    return new Promise(resolve => {
      let body = {
        action: 'addVisitors',
        vuVisitorType: this.label,
        vtUnitOwner: this.fullname,
        vtTowerUnit: this.TUN,
        vtCarparkSlotNo: this.vtCarparkSlotNo,
        vtGuestOnSite: this.vtGuestOnSite,
        vtGuestContact: this.vtGuestContact,
        vtArrivalDate: this.vtArrivalDate,
        vtArrivalTime: this.vtArrivalTime,
        vtDepartureDate: this.vtDepartureDate,
        vtDepartureTime: this.vtDepartureTime,
        vuNamePrimaryVisitor: this.vtPrimaryVisitorName,
        vtPrimaryVisitorNationality: this.vtPrimaryVisitorNationality,
        vtPrimaryVisitorContactNo: this.vtPrimaryVisitorContactNo,
        vtPrimaryVisitorEmailAddress: this.vtPrimaryVisitorEmailAddress,
        vtPrimaryVisitorAddress: this.vtPrimaryVisitorAddress,
        vtAdditionalVisitorCount: this.vtAdditionalVisitorCount,
        vtVehicleDetailsCount: this.vtVehicleDetailsCount,
        vtRemarks: this.vtRemarks,
        vtRemarksByAdmin: this.vtRemarksByAdmin,
        condition: this.condition,
        vuUnitCode: this.uCode,
        ownerCode: this.newCode,

        avName: this.visitC,

        vuVehicleDetailsType: this.vuVehicleDetailsType,
        vuVehicleDetailsModel: this.vuVehicleDetailsModel,
        vuVehicleDetailsColor: this.vuVehicleDetailsColor,
        vuVehicleDetailsPlateNo: this.vuVehicleDetailsPlateNo,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        // this.router.navigate(['/user-details']);
        if(data['status'] == "Success")
        {
          this.openToast("Data succesfully saved!");
          setTimeout(()=>{ this.router.navigateByUrl('/tabs/tab1/visitors-details') }, 2000)
          
        }
        
      })
    });
  }

}
