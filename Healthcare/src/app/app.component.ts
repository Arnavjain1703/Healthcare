import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Healthcare';
  load:boolean;
  model=false;
success=false;
warning=false;
//  srcs:String;
srcs:String
 sentence:string


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
   
SuccessModel( sentence:string)
{
  this.srcs="/assets/images/tic.png";
  this.sentence=sentence;
  this.model=true;
  this.success=true;
  this.warning=false;

}

WarningModel( sentence:string)
{
  this.srcs="/assets/images/cross.png";
  this.sentence=sentence;
  this.model=true;
  this.warning=true;
  this.success=false;

}
remove()
{
  this.model=false;
}


}
