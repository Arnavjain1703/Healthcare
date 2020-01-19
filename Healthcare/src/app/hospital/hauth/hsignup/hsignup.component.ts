import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/services/serverService';


import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Diseases } from 'src/app/models/Diseases.model';
import { City } from 'src/app/models/location.model';



@Component({
  selector: 'app-hsignup',
  templateUrl: './hsignup.component.html',
  styleUrls: ['./hsignup.component.css']
})
export class HsignupComponent implements OnInit {

  
  one=true;
  two=false;
  three=false;
  selectedFile:File=null;
  hSpec:Diseases[];
  locations:City[];
  res:any;
  i:number;
  Diseases_id:number[]=[];
  city:City;
  city_id:number;
  
 

  

 
 

  constructor(private serverservice: ServerService,
              private router: Router,
              ) { }

  ngOnInit() {
    // this.load=false;
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //   window.scrollTo(0, 0);
    // });
    this.serverservice.getDiseases()
    .subscribe(
      (response) => {
        console.log(response);
        this.res=response;
        this.hSpec=this.res;
        
        
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
        
      },
    );
    this.serverservice.getLocation()
    .subscribe(
      (response) => {
        console.log(response);
        this.res=response;
        this.locations=this.res;
       
        
        
        
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
        
      },
    );
  }
  step2(form : NgForm){
    this.one=false;
    this.two=true;
   
  }
  onFileSelected(event){
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
    
    
    
  }

  onCheck(spec:Diseases){
    console.log(spec);
    
      this.Diseases_id.push(spec.id);
      console.log(this.Diseases_id);


  }
  onRadio(city:City){
    console.log(city);
    
      this.city_id = city.id;
      console.log(this.city_id);


  }
 

  onSignup(form : NgForm) {
   
    // console.log(JSON.stringify(form.value));
    // const value = form.value;
    const value = form.value;
    const fd= new FormData();
    
    fd.append('hospital_name',value.hospital_name);
    fd.append('email',value.email);
    fd.append('password',value.password);
    fd.append('confirm_password',value.confirm_password);
    fd.append('image',this.selectedFile, this.selectedFile.name);
    fd.append('street_name',value.street_name);
    fd.append('specialization',JSON.stringify(this.Diseases_id));
    fd.append('city',JSON.stringify(this.city_id));
    fd.append('contact',value.contact);
    console.log(value.hospital_name)
    console.log(value.password)
    console.log(JSON.stringify(this.Diseases_id))
    console.log(JSON.stringify(this.city_id))
    console.log(this.selectedFile, this.selectedFile.name)
    
    this.serverservice.hsignup(fd)
    .subscribe(
      (response) => {
        this.res=response;
        console.log(response);
        
        // this.router.navigate(['/verify',this.uname.userName]);
        
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
        
      },
    );
  }

}
