import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor.model';
import {  Router } from '@angular/router';
import { ServerService } from 'src/app/services/serverService';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {

  constructor( private router:Router,
                private ServerService:ServerService,
            
            ) { }

    image:String;     
    // CategorySubscription:Subscription  ;
    // categories:Category[]     
    // Category:String
    // Id:number;
    
  
    ngOnInit() {
   
     
   
    //   this.CategorySubscription=this.categoryService.categoryChanged
    // .subscribe((categories:Category[]) =>
    // {   
    //    this.categories =categories 
    // }
    // )

     
   
   
    // this.categories= this.categoryService.getCategories();
    this.image = this.ServerService.rootUrl+ this.Doctor.image
    // this.Id = this.Doctor.Specialization
    // this.Category = this.categories[this.Id].category;
    

  }
   
  @Input() Doctor:Doctor;
  @Input() index:Number;
  @Input() id:Number;
   

  profile()
  {

    this.router.navigate(['profile/'+this.index+'/'+this.id])
  }
}
