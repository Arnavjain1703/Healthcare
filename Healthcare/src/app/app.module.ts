import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.model';
import { ServerService } from './services/serverService';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './user/signup/signup.component';
import { VerificationComponent } from './user/verification/verification.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
