import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/serverService';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public serverservice:ServerService,
                private appCOmponent:AppComponent) { }

  ngOnInit() {
  }

  loader()
  {
    this.appCOmponent.loaderOn();
  }

}
