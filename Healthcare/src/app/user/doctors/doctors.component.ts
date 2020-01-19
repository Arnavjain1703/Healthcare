import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/Doctorservice';
import { Doctor } from 'src/app/models/Doctor.model';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/services/serverService';
import { Subscriber, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { AppComponent } from 'src/app/app.component';
import { Category } from 'src/app/models/categoer.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
 
  Hospital :Hospital
  id:number;
  tk:any;
  image:String;
  DoctorSubscription:Subscription;
    Doctors : Doctor[] 
    categories:Category[]
    CategorySubscription:Subscription
  constructor( private doctorservice:DoctorService ,
                private hospitalService:HospitalService,
                private route:ActivatedRoute,
                private serverService:ServerService,
                private categoryservice:CategoryService,
                private appComponent:AppComponent,
                private router:Router ) { }

  ngOnInit() {

    this.serverService.Specilization()
    .subscribe((response)=>
    {
      this.appComponent.loaderOff()
      this.tk= response;
      
      this.categoryservice.setService(this.tk);
       

    }
    )
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

  appoinment()
  {
       this.router.navigate(['appoinment/'+this.id])
  }

  query()
  {
      this.router.navigate(['query/' +this.id])
  }


   
}
