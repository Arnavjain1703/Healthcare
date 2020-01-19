import { Subject } from 'rxjs';
import { Doctor } from '../models/Doctor.model';

export class DoctorService
{
     
    DoctorChanged = new Subject<Doctor[]>();

    private Doctors:Doctor[] = 
    [

         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully',"sdjc"),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully',"sdjc"),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully',"sdjc"),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully',"sdjc"),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully',"sdjc"),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully',"sdjc"),
         new Doctor('/assets/images/doctor.jpg','Arnav jain' , 'Arnav is a professional theripits has an experoence of 20 years and operated a lot of tipical operation successfully',"sdjc"),
         



    ]

    getCategories()
    {
        return this.Doctors
    }
    
    getdoctor(id:number)
    {
        return this.Doctors[id];
    }
    SetDoctors(Doctor:Doctor[])
    {
       this.Doctors = Doctor;
       this.DoctorChanged.next(this.Doctors.slice())
    }

}