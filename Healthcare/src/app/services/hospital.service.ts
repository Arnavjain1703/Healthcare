import { Subject } from 'rxjs';
import { Hospital } from '../models/hospital.model';

export class HospitalService
{


    HospitalChanged = new Subject<Hospital[]>();


    private Hospitals:Hospital[] = 
    [
     
       new Hospital ('/assets/images/hospital.jpg','Khatauli','Kavita Nagar'),

       new Hospital ('/assets/images/hospital.jpg','Meerut','Kavita Nagar'),
       new Hospital ('/assets/images/hospital.jpg','Khatauli','Kavita Nagar'),
       new Hospital ('/assets/images/hospital.jpg','Khatauli','Kavita Nagar'),
       new Hospital ('/assets/images/hospital.jpg','Khatauli','Kavita Nagar'),
       new Hospital ('/assets/images/hospital.jpg','Khatauli','Kavita Nagar'),
       new Hospital ('/assets/images/hospital.jpg','Khatauli','Kavita Nagar'),


       


    ]

    getCategories()
    {

        return this.Hospitals.slice();
    }
}