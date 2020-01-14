import { Component, OnInit, Input } from '@angular/core';
import { DiseaseService } from 'src/app/services/DiseasesService';
import { Diseases } from 'src/app/models/Diseases.model';
import { HospitalsComponent } from '../hospitals.component';

@Component({
  selector: 'app-diseases-item',
  templateUrl: './diseases-item.component.html',
  styleUrls: ['./diseases-item.component.css']
})
export class DiseasesItemComponent implements OnInit {

 
  constructor( private hospitalComponent:HospitalsComponent) { }

  ngOnInit() {

  }
  @Input () Disease:Diseases 

  disease(disease:string)
  {
    
     this.hospitalComponent.diseaseHeading(disease)
  }

}
