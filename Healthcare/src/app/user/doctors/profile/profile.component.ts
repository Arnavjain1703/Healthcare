import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/services/serverService';
import { Doctor } from 'src/app/models/Doctor.model';
import { DoctorService } from 'src/app/services/Doctorservice';
import { Category } from 'src/app/models/categoer.model';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private route:ActivatedRoute,
                private DoctorService:DoctorService,
                private serverService:ServerService,
                private router:Router,
                private categoryService:CategoryService) { }
   id:number;
   id2:number
  Doctor:Doctor;
  image:String;
  CategorySubscription:Subscription  ;
  categories:Category[]     
  Category:String
  Id:number;
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.id2= this.route.snapshot.params.id2
     this.Doctor=this.DoctorService.getdoctor(this.id);
     this.image  = this.serverService.rootUrl+this.Doctor.image;
     
     this.CategorySubscription=this.categoryService.categoryChanged
     .subscribe((categories:Category[]) =>
     {   
        this.categories =categories 
     }
     )
 
      
    
    
     this.categories= this.categoryService.getCategories();
     this.image = this.serverService.rootUrl+ this.Doctor.image
     this.Id = this.Doctor.Specialization
     this.Category = this.categories[this.Id].category;
     
 
   }

  

  appoinment()
  {
    this.router.navigate(['appoinment/'+'/'+this.id+'/'+this.id2])
  }

}
