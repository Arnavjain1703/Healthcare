import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Injectable()
export class ServerService
{


public rootUrl="https://d9f1bc59.ngrok.io";


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
getDiseases()
{   

  console.log(this.rootUrl+'specialization/');
   return this.http.get(this.rootUrl+'/specialization/');

}

getHospital(id:Number)
{
   return this.http.get(this.rootUrl+'/quickstart/category/'+id+'/' );
   console.log(id)

}

appoinmentDoctor(email:string,contact:number,age:number,description:String,doctor_name,hospital_name)
{
  const headers = new HttpHeaders({'Content-Type':'application/json'});
 console.log(JSON.stringify({email,contact,age,description,doctor_name,hospital_name}));
 console.log(this.rootUrl+'/quickstart/make_appoinment/')
 return this.http.post(this.rootUrl+'/quickstart/make_appoinment/',JSON.stringify({email,contact,age,description,doctor_name,hospital_name}),{headers:headers})

  
}
getdoctors(id:Number)
{
  return this.http.get(this.rootUrl+'/quickstart/hospital_doctor/'+id+'/')
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
