import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/services/serverService';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/Doctorservice';
import { Doctor } from 'src/app/models/Doctor.model';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {


  constructor( private ServerService:ServerService,
               private  route:ActivatedRoute,
               private DoctorService:DoctorService,
               private HospitalService:HospitalService,
               private appC0mponent:AppComponent) {  }
  radio:boolean
   id:number;
   id2:number;
   Doctor:Doctor;
   tk:any;
   Hospital:Hospital;
   
  ngOnInit() {
    this.radio=false;
    this.id=this.route.snapshot.params.id;
    this.id2=this.route.snapshot.params.id2;
    this.Doctor=this.DoctorService.getdoctor(this.id)
    this.Hospital = this.HospitalService.gethospital(this.id2)
    

  }
  click()
  {
    this.radio=true;

  }

 
  onSubmit(Form:NgForm)
  {  this.appC0mponent.loaderOn()
     const value=Form.value
     if(this.id)
     {
     this.ServerService.appoinmentDoctor(value.email,value.contact,value.age,value.description,this.Doctor.name,this.Hospital.id)
     .subscribe
     (
       (response)=>
       { this.appC0mponent.loaderOff();
         console.log(response)
         this.tk = response;
         this.appC0mponent.SuccessModel(this.tk);

       },
       error =>
       {
     
       }
     )
  }

  else
  { 
    this.ServerService.appoinmentHospital(value.email,value.contact,value.age,value.description,this.Hospital.id)
    .subscribe
    (
      (response)=>
      { this.appC0mponent.loaderOff();
        this.tk = response;
        this.appC0mponent.SuccessModel(this.tk);
        console.log(response)
      },
      error =>
      {
       
      }
    )

  }
}

}