import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class ServerService
{


private rootUrl="https://05ffcc04.ngrok.io";


constructor( 
          
    private http:HttpClient,
             
){}

body:{};


logInUser(email:string ,password:string)
{ 
  const headers = new HttpHeaders({'Content-Type':'application/json'});
  console.log(JSON.stringify({email,password}));
  console.log(this.rootUrl+'/login')
 return this.http.post(this.rootUrl+'/login/',JSON.stringify({email,password}),{headers:headers})
 
  
}

signUpUser(name:string,email:string,password:string,confirm_password:string)
{
 const headers = new HttpHeaders({'Content-Type':'application/json'});
 console.log(JSON.stringify({name,email,password,confirm_password}));
 console.log(this.rootUrl+'/quickstart/signup_as_user/')
 return this.http.post(this.rootUrl+'/quickstart/signup_as_user/',JSON.stringify({name,email,password,confirm_password}),{headers:headers})
}
resendOtp(id:string)
{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({id}));
    console.log(this.rootUrl+'/quickstart/resendotp/'+id+'/')
    return this.http.post(this.rootUrl+'/quickstart/resendotp/'+id+'/',this.body,{headers:headers})    
}
verifyUser(otp:number, id:number)
{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({id}));
    console.log(this.rootUrl+'/validateotp/'+id+'/');
    return this.http.post(this.rootUrl+'/validateotp/'+id+'/',JSON.stringify({otp}),{headers:headers})  
}


loggedIn()
{
  return !!localStorage.getItem('token')
}
logout()
  {
    localStorage.removeItem('token');

  }
}