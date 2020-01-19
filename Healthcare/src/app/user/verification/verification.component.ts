
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/services/serverService';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  resend=false;
  name:any;
  tk:any;
  id:any
  seconds:number=59;
  minute:number=1;

  

          
            
              constructor(private serverservice: ServerService,
                          private route: ActivatedRoute,
                          private router: Router,
                          private appComponent:AppComponent) { }
            
              ngOnInit() {
                this.name = this.route.snapshot.params.id;
                this.id = this.route.snapshot.params.id2;

            
                setTimeout(() => {
                  this.resend=true;
                }, 120000);
            
                setInterval(()=>{
                  if(this.seconds>0) {
                    this.seconds--;
                  }
                  else {
                    this.minute--;
                    this.seconds=59;
                  }
                },1000);
              }
            
              onResend() {
                this.seconds=60;
                this.minute=1;
                setInterval(()=>{
                  if(this.seconds>0) {
                    this.seconds--;
                  }
                  else {
                    this.minute--;
                    this.seconds=60;
                  }
                },1000000);
                this.resend = false;
                setTimeout(() => {
                  this.resend = true;
                }, 120000);
                this.serverservice.resendOtp(this.name)
                .subscribe(
                  (response) =>{
                     console.log(response);
                    },
                  (error) =>{ 
                    console.log(error);
                  },
                );
              }
            
              Verify(form : NgForm) {
                const value = form.value;
                this.appComponent.loaderOn();
                // console.log(this.id);
                this.serverservice.verifyUser(value.otp, this.name)
                .subscribe(
                  (response) =>{ 
                    this.tk = response ;
                    console.log(this.tk);
                    this.appComponent.loaderOff();
                    // console.log(this.tk.userLoginResponse.userName);
                    localStorage.setItem('token', this.tk.token);
                    // localStorage.setItem('name',this.tk.userLoginResponse.userName);
                    this.router.navigate(['/']);
                  },
                  (error) =>console.log(error), 
                );
              }
}
  