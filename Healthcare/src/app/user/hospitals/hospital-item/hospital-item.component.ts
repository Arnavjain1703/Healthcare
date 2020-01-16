import { Component, OnInit, Input } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';
import { ChangeService } from 'src/app/services/changeService';
import { Subscription } from 'rxjs';
import { ServerService } from 'src/app/services/serverService';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AppComponent } from 'src/app/app.component';
import { DoctorService } from 'src/app/services/Doctorservice';

@Component({
  selector: 'app-hospital-item',
  templateUrl: './hospital-item.component.html',
  styleUrls: ['./hospital-item.component.css']
})
export class HospitalItemComponent implements OnInit {

  constructor( private changeservice:ChangeService,
                private severService:ServerService,
                private  router :Router,
                private appComponent:AppComponent,
                private doctorService:DoctorService) { }
   Location:String;
   locationSubscription:Subscription;
   image:String;
    tk:any;
   show=true;
  ngOnInit( ) {
    this.image = this.severService.rootUrl+this.Hospital.image;
    this.locationSubscription=this.changeservice.locationChanged
    .subscribe((location:String)=>
    {
      this.Location=location;
      console.log(this.Location);
      this.show = false;
    }
    )
  }
    

  @Input () Hospital:Hospital  ;
  @Input () index:Number;

getDoctors()
{  this.appComponent.loaderOn()
  this.severService.getdoctors( this.Hospital.id )
  .subscribe(
    (response) =>
    {  this.appComponent.loaderOff()
       console.log(response);
       this.tk= response;
        this.doctorService.SetDoctors(this.tk)
        this.router.navigate(['doctor/'+this.index])
    },
    error =>
    {
      this.appComponent.loaderOff();
      this.router.navigate(['doctor/'+this.index])

    }
  )
}


   
  
  
}
