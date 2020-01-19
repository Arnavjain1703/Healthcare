import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { Hospital } from 'src/app/models/hospital.model';
import {  ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ServerService } from 'src/app/services/serverService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

   constructor( private route:ActivatedRoute ,
                 private appComponent:AppComponent,
               private serverservice:ServerService,
               private hospitalService:HospitalService) { }
  id:number;
  tk:any;
  id2:Number;
  Hospital:Hospital;
  ngOnInit() {
    this.id = this.route.snapshot.params.id;

       this.Hospital = this.hospitalService.gethospital(this.id);
       this.id2 = this.Hospital.id;
 

  }


  
  onSubmit(form : NgForm) {
    this.appComponent.loaderOn();
    
     const value = form.value;
     console.log(form.value)
  
     this.serverservice.query(  value.Query,this.id2,localStorage.getItem('email'))
     .subscribe(
       (response) => {
         this.appComponent.loaderOff()
         console.log(response);
         this.tk=response;
         this.appComponent.SuccessModel(this.tk)
          
                    },
 
         error =>
         { 
          
 
           console.log(error)
           this.appComponent.WarningModel(error.error.non_field_errors)
   
              
         }   
     )

}
}