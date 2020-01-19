import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/services/serverService';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  load:boolean;
  tk:any;

  constructor( public serverservice: ServerService,
               private router :Router,
               private appComponent:AppComponent) { }

  ngOnInit() {
  }




 

  onLogin(form : NgForm) {
   this.appComponent.loaderOn();
   
    const value = form.value;
    this.serverservice.logInUser(value.email,value.password)
    .subscribe(
      (response) => {
        this.appComponent.loaderOff()
        console.log(response);
        this.tk=response;
       
         localStorage.setItem('user_id',this.tk.user_id)
        this.load=false;
        localStorage.setItem('token',this.tk.token);
        localStorage.setItem('email',this.tk.email)
        this.router.navigate(['hospital'])

                   },

        error =>
        { 
          this.appComponent.loaderOff();

          console.log(error)
          this.appComponent.WarningModel(error.error.non_field_errors)
  
             
        }           
      
           

    );
  }


}