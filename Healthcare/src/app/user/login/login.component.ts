import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/services/serverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  load:boolean;
  tk:any;

  constructor( public serverservice: ServerService,
               private router :Router) { }

  ngOnInit() {
  }




 

  onLogin(form : NgForm) {
    this.load=true;
   
    const value = form.value;
    this.serverservice.logInUser(value.email,value.password)
    .subscribe(
      (response) => {
        console.log(response);
        this.tk=response;
        console.log(this.tk.token);
        this.load=false;
        localStorage.setItem('token',this.tk.token)
        // this.router.navigate['/hospital'];

                   },

        error =>
        {
            this.load = false;
        }           
      
           

    );
  }


}