import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor.model';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() Doctor:Doctor;

}
