import { Component, OnInit, Input } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { Hospital } from 'src/app/models/hospital.model';
import { DiseaseService } from 'src/app/services/DiseasesService';
import { Diseases } from 'src/app/models/Diseases.model';
import { HospitalItemComponent } from './hospital-item/hospital-item.component';
import { Subscription } from 'rxjs';
import { ServerService } from 'src/app/services/serverService';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  Hospitals:Hospital[];
  Diseases:Diseases[];

  constructor( private hospitalService:HospitalService,
               private diseaseservice:DiseaseService,
               public serverService:ServerService
            ) { }
  
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  path:any;
  i:number=0;
  imgpath:any;
  pageOfItems: Array<any>;
  DiseaseSubscription:Subscription;
  tk:any;
  disease:any;
  location:any;

  ngOnInit() {

    // getting diseases

     this.serverService.getDiseases()
     .subscribe
     (
       response =>
       {
         console.log(response);
         this.tk=response;
         this.diseaseservice.setService(this.tk);
         
       }
     )

     



    this.DiseaseSubscription=this.diseaseservice.DiseaseChanged
    .subscribe((Diseases:Diseases[])=>
    {
      this.Diseases=Diseases
    }
    )
    this.Hospitals= this.hospitalService.getCategories();
    this.Diseases = this.diseaseservice.getCategories();
    


  }
 
   diseaseHeading(disease:string)
   {   
     
      this.disease = 'for '+ disease;
   }
    locationHeading(location:string)
    {
      this.location= 'at ' + location;
    }

 
}



