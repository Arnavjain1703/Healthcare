import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/services/serverService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  load:boolean;
  tk:any;

  constructor( public serverservice: ServerService) { }

  ngOnInit() {
  }




 

  onLogin(form : NgForm) {
    this.load=true;
   
    const value = form.value;
    this.serverservice.logInUser(value.email,value.password)
    .subscribe(
      (response) => {
        console.log(response);
        this.tk = response ;
      
    
    
     
        }
      
    );
  }


}