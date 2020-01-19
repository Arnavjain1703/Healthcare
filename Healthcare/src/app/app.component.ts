import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Healthcare';
  load:boolean;
  model1=false;
  model2=false;
success=false;
warning=false;
//  srcs:String;
srcs="/assets/images/cross.png";
 sentence ="Hello! Your appoinment has been submited you will be informed soon";


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
  this.model1=true;
 

}

WarningModel( sentence:string)
{
  this.srcs="/assets/images/cross.png";
  this.sentence=sentence;
  this.model2=true;
  

}
remove()
{
  this.model1=false;
  this.model2=false;
}



}
