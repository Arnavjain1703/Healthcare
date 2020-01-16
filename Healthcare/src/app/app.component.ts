import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Healthcare';
  load:boolean;


   loaderOn()
   {
     this.load = true;
     console.log(this.load)
   }

   loaderOff()
   {
     this.load = false;
     console.log(this.load)

   }

}
