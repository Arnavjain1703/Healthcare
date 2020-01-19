import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/services/serverService';
import { Doctor } from 'src/app/models/Doctor.model';
import { DoctorService } from 'src/app/services/Doctorservice';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private route:ActivatedRoute,
                private DoctorService:DoctorService,
                private serverService:ServerService,
                private router:Router,
                ) { }
   id:number;
   id2:number
  Doctor:Doctor;
  image:String;
  
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.id2= this.route.snapshot.params.id2
     this.Doctor=this.DoctorService.getdoctor(this.id);
     this.image  = this.serverService.rootUrl+this.Doctor.image;
    
 
      
    
  
     this.image = this.serverService.rootUrl+ this.Doctor.image
    
     
 
   }

  

  appoinment()
  {
    this.router.navigate(['appoinment/'+'/'+this.id+'/'+this.id2])
  }

}
