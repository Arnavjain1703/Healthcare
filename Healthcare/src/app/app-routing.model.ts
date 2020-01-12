import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { VerificationComponent } from './user/verification/verification.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { HospitalsComponent } from './user/hospitals/hospitals.component';


const appRoutes: Routes=[
    {path:'', redirectTo:'frontpage',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'verification/:id',component:VerificationComponent},
    {path:'frontpage',component:HomepageComponent},
    {path:'hospital',component:HospitalsComponent}

    
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