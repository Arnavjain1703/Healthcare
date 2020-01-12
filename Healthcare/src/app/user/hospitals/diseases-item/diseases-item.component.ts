import { Component, OnInit, Input } from '@angular/core';
import { DiseaseService } from 'src/app/services/DiseasesService';
import { Diseases } from 'src/app/models/Diseases.model';

@Component({
  selector: 'app-diseases-item',
  templateUrl: './diseases-item.component.html',
  styleUrls: ['./diseases-item.component.css']
})
export class DiseasesItemComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {

  }
  @Input () Disease:Diseases 

}
