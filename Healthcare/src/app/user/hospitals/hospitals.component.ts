import { Component, OnInit, Input } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { Hospital } from 'src/app/models/hospital.model';
import { DiseaseService } from 'src/app/services/DiseasesService';
import { Diseases } from 'src/app/models/Diseases.model';
import { HospitalItemComponent } from './hospital-item/hospital-item.component';
import { Subscription } from 'rxjs';
import { ServerService } from 'src/app/services/serverService';
import { LocationService } from 'src/app/services/location.service';
import { ChangeService } from 'src/app/services/changeService';
import { AppComponent } from 'src/app/app.component';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { callbackify } from 'util';
import { City } from 'src/app/models/location.model';
import { templateJitUrl } from '@angular/compiler';

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
               public serverService:ServerService,
               private locationService:LocationService,
               private changeService:ChangeService,
               private appComponent:AppComponent
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
  HospitalSubscription:Subscription;
  changeSubscription:Subscription;
  locationSubsCription:Subscription;
   ChangeDisease:Subscription;
  tk:any;
  disease:any;
  location:any;
  Locations:City[];
   show = false;
   show2:boolean;
   

  ngOnInit() {

  
  
    this.serverService.getLocation()
    .subscribe(
      (response)=>
      {
        this.tk=response;
        console.log(this.tk)
        this.locationService.setService(this.tk)
         this.appComponent.loaderOff();
      }
    )
  
    
    

    
    
    
    this.serverService.getDiseases()
     .subscribe
     (
       response =>
       { 
         this.appComponent.loaderOff();
         console.log(response);
         this.tk=response;
         this.diseaseservice.setService(this.tk);
                  
 
        

         
       }
       ,
       error=> 
       { 
        
         this.appComponent.loaderOff();
       }

     )

    
     
     
     this.changeSubscription = this.changeService.showChanged
     .subscribe((show2:any)=>
     {
         this.show2 = show2
     })
 


    
    
    
     this.DiseaseSubscription=this.diseaseservice.DiseaseChanged
    .subscribe((Diseases:Diseases[])=>
    {
      this.Diseases=Diseases
    }
    )

    
    
    
    
    this.HospitalSubscription=this.hospitalService.HospitalChanged
    .subscribe((Hospitals:Hospital[]) =>
    {   
       
      
         this.location="";
       this.Hospitals=Hospitals 
    }
    )
    
    
    
    this.locationSubsCription = this.locationService.locationChanged
    .subscribe((LOcations:City[])=>
    {
         this.Locations = LOcations
    })

    this.ChangeDisease = this.changeService.diseaseChenged
    .subscribe((Disease:String)=>
    {
      this.disease = Disease;
    })



    this.Hospitals= this.hospitalService.getCategories();
    this.Diseases = this.diseaseservice.getCategories();
    this.Locations = this.locationService.getCategories();
    this.show2= this.changeService.getshow();


    

  }
 
   
   diseaseHeading(disease:string)
   {   
     
      this.disease = 'for '+ disease;
   }
    locationHeading(location:string)
    {
        
      this.location= 'at ' + location;
      this.changeService.changeLocation(location);
       this.show=!this.show;

    }

    click()
    {
      this.show = !this.show

    }
    
}



