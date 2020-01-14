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
import { HomepageComponent } from './user/homepage/homepage.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { ParticlesModule } from 'angular-particle';
import { HospitalsComponent } from './user/hospitals/hospitals.component';
import { HospitalItemComponent } from './user/hospitals/hospital-item/hospital-item.component';
import { HospitalService } from './services/hospital.service';
import { DiseasesItemComponent } from './user/hospitals/diseases-item/diseases-item.component';
import { DiseaseService } from './services/DiseasesService';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DoctorsComponent } from './user/doctors/doctors.component';
import { DoctorItemComponent } from './user/doctors/doctor-item/doctor-item.component';
import { DoctorService } from './services/Doctorservice';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VerificationComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HospitalsComponent,
    HospitalItemComponent,
    DiseasesItemComponent,
    JwPaginationComponent,
    DoctorsComponent,
    DoctorItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ParticlesModule,
    NgbModule
    
  
  ],
  providers: [ServerService,HospitalService,DiseaseService,DoctorService,HospitalsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
