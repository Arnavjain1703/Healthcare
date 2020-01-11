
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { Router, NavigationEnd } from '@angular/router';
import { ServerService } from 'src/app/services/serverService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  tk:any;
  id:any;
  load=false;

  constructor(private serverservice: ServerService,
              private router: Router,) { }

  ngOnInit() {
    this.load=false;
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //   window.scrollTo(0, 0);
    // });
  }

  onSignup(form : NgForm) {
    this.load=true;
    console.log(JSON.stringify(form.value));
    const value = form.value;
    this.serverservice.signUpUser(value.name,value.email,value.password,value.confirmPassword)
    .subscribe(
      (response) => {
        this.tk=response;
        this.id=this.tk.user_id;
        console.log(this.tk.details);
        this.router.navigate(['/verification/'+this.id]);
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
        this.load=false;
      },
    );
  }

}