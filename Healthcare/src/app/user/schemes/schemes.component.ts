import { Component, OnInit } from '@angular/core';
import { scheme } from 'src/app/models/scheme.model';
import { schemeService } from 'src/app/services/scheme.service';


@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css']
})



export class SchemesComponent implements OnInit  {
     
  schems:scheme[];
  constructor(private schemService:schemeService){}

  ngOnInit()
  {
      this.schems=this.schemService.getschemes();
  }
}
