import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { VerificationComponent } from './user/verification/verification.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { HospitalsComponent } from './user/hospitals/hospitals.component';
import { DoctorsComponent } from './user/doctors/doctors.component';
import { ProfileComponent } from './user/doctors/profile/profile.component';
import { AppoinmentComponent } from './user/appoinment/appoinment.component';
import { SchemesComponent } from './user/schemes/schemes.component';


const appRoutes: Routes=[
    {path:'', redirectTo:'frontpage',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'verification/:id',component:VerificationComponent},
    {path:'frontpage',component:HomepageComponent},
    {path:'hospital',component:HospitalsComponent},
    {path:'doctor/:id',component:DoctorsComponent},
    {path:'profile/:id/:id2',component:ProfileComponent},
    {path:'appoinment/:id2',component:AppoinmentComponent},
    {path:'appoinment/:id/:id2',component:AppoinmentComponent},
    {path:'schemes',component:SchemesComponent},

    
]

@NgModule(
    {
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    }
    )
    
    export class AppRoutingModule
    {
    
    }