import { Component, OnInit, Input } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';

@Component({
  selector: 'app-hospital-item',
  templateUrl: './hospital-item.component.html',
  styleUrls: ['./hospital-item.component.css']
})
export class HospitalItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
  @Input () Hospital:Hospital  ;
  @Input () index:Number;
  
}
