import { Subject } from 'rxjs';
import { Doctor } from '../models/Doctor.model';

export class DoctorService
{
     
    DoctorChanged = new Subject<Doctor[]>();

    private Doctors:Doctor[] = 
    [

         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully','Theripist'),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully','Theripist'),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully','Theripist'),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully','Theripist'),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully','Theripist'),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully','Theripist'),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully','Theripist'),



    ]

    getCategories()
    {
        return this.Doctors
    }

}