import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/serverService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public serverservice:ServerService) { }

  ngOnInit() {
  }

}
