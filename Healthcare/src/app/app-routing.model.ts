import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { VerificationComponent } from './user/verification/verification.component';


const appRoutes: Routes=[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'verification/:id',component:VerificationComponent}

    
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