import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/Doctorservice';
import { Doctor } from 'src/app/models/Doctor.model';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/services/serverService';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
 
  Hospital :Hospital
  id:number;
  image:String;
  DoctorSubscription:Subscription;
    Doctors : Doctor[] 
  constructor( private doctorservice:DoctorService ,
                private hospitalService:HospitalService,
                private route:ActivatedRoute,
                private serverService:ServerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.DoctorSubscription = this.doctorservice.DoctorChanged
    .subscribe((Doctors:Doctor[]) =>
    {
       this.Doctors= Doctors;
    }
    )
    this.Doctors =this.doctorservice.getCategories();
    this.Hospital= this.hospitalService.gethospital(this.id);
    console.log(this.Hospital)
    this.image= this.serverService.rootUrl+this.Hospital.image;
    console.log(this.image);

  }
   
}
