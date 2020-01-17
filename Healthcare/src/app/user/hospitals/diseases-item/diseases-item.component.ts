import { Component, OnInit, Input } from '@angular/core';

import { Diseases } from 'src/app/models/Diseases.model';
import { HospitalsComponent } from '../hospitals.component';
import { ServerService } from 'src/app/services/serverService';
import { HospitalService } from 'src/app/services/hospital.service';

import { AppComponent } from 'src/app/app.component';
import { ChangeService } from 'src/app/services/changeService';


@Component({
  selector: 'app-diseases-item',
  templateUrl: './diseases-item.component.html',
  styleUrls: ['./diseases-item.component.css']
})
export class DiseasesItemComponent implements OnInit {

 tk:any;
 
  constructor( private hospitalComponent:HospitalsComponent,
               private serverService:ServerService,
               private hospitalService:HospitalService,
               private appcomponent :AppComponent,
               private changeService:ChangeService,
              ) { }

  ngOnInit() {

  
  }
  
  @Input () Disease:Diseases 

  disease(disease:string)
  {
     this.appcomponent.loaderOn()
     this.hospitalComponent.diseaseHeading(disease)

     this.serverService.getHospital(this.Disease.id)
     .subscribe
     ( 
       response =>
       {
         this.tk = response;
         console.log(this.tk);
         this.hospitalService.SetService( this.tk)
          this.appcomponent.loaderOff();
          this.changeService.changeShow(true);

         
       }
,
       error =>
       {
         this.appcomponent.loaderOff();
       }
     )

     this.changeService.changeDisease(disease)
     
     
  }

}
