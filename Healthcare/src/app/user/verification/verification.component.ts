
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/services/serverService';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  resend=false;
  name:any;
  tk:any;
  seconds:number=59;
  minute:number=1;

  

          
            
              constructor(private serverservice: ServerService,
                          private route: ActivatedRoute,
                          private router: Router,) { }
            
              ngOnInit() {
                this.name = this.route.snapshot.params.id;
            
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
                // console.log(this.id);
                this.serverservice.verifyUser(value.otp, this.name)
                .subscribe(
                  (response) =>{ 
                    this.tk = response ;
                    console.log(this.tk);
                    // console.log(this.tk.userLoginResponse.userName);
                    localStorage.setItem('token', this.tk.token);
                    // localStorage.setItem('name',this.tk.userLoginResponse.userName);
                    this.router.navigate(['/']);
                  },
                  (error) =>console.log(error), 
                );
              }
}
  