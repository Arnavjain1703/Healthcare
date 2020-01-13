import { Component, OnInit, Input } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { Hospital } from 'src/app/models/hospital.model';
import { DiseaseService } from 'src/app/services/DiseasesService';
import { Diseases } from 'src/app/models/Diseases.model';
import { HospitalItemComponent } from './hospital-item/hospital-item.component';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  Hospitals:Hospital[];
  Diseases:Diseases[];

  constructor( private hospitalService:HospitalService,
               private diseaseservice:DiseaseService
            ) { }
  
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  path:any;
  i:number=0;
  imgpath:any;
  pageOfItems: Array<any>;

  ngOnInit() {

    this.Hospitals= this.hospitalService.getCategories();
    this.Diseases = this.diseaseservice.getCategories();
    

    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100vh',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
          number: {
              value: 80,
          },
          color: {
              value: '#58D68D',
          },
          shape: {
              polygon: {
                "nb_sides": 5
              },
          },
          line_linked: {
            "enable": true,
            "distance": 150,
            "color": "#58D68D",
            "opacity": 0.5,
            "width": 2
          },
      }
    };

  }
  // @Input () collectionSize=10;

  // @Input () page= 4;
  // @Input () pageSize: Number;



 
}



