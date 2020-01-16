import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/Doctorservice';
import { ServerService } from 'src/app/services/serverService';
import { Hospital } from 'src/app/models/hospital.model';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {

  constructor( private router:Router,
                private ServerService:ServerService) { }

    image:String;            
  ngOnInit() {
    this.image = this.ServerService.rootUrl+ this.Doctor.image

  }
   
  @Input() Doctor:Doctor;
  @Input() index:Number;
  @Input() id:Number;
   

  profile()
  {

    this.router.navigate(['profile/'+this.index+'/'+this.id])
  }
}
