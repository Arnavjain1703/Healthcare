import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/Doctorservice';
import { Doctor } from 'src/app/models/Doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
 
  Doctors : Doctor[] 
  constructor( private doctorservice:DoctorService) { }

  ngOnInit() {

    this.Doctors =this.doctorservice.getCategories();
  }
   
}
