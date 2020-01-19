import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schemes-item',
  templateUrl: './schemes-item.component.html',
  styleUrls: ['./schemes-item.component.css']
})
export class SchemesItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
  }

  @Input() schem;

}
