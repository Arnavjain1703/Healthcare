import { Subject } from 'rxjs';
import { Hospital } from '../models/hospital.model';

export class HospitalService
{


    HospitalChanged = new Subject<Hospital[]>();


    private Hospitals:Hospital[] = 
    [
     
       new Hospital ('/assets/images/hospital.jpg','Khatauli','Kavita Nagar','Jain KUnj Nagar COlony Khatauli','arnavjainkht@gmail.com', '9412211658',
         'we provide a good facility to all our patients' ),
       new Hospital ('/assets/images/hospital.jpg','Khatauli','Kavita Nagar','Jain KUnj Nagar COlony Khatauli','arnavjainkht@gmail.com', '9412211658',
         'we provide a good facility to all our patients' ),
         new Hospital ('/assets/images/hospital.jpg','Meerut','Kavita Nagar','Jain KUnj Nagar COlony Khatauli','arnavjainkht@gmail.com', '9412211658',
         'we provide a good facility to all our patients' ),
         new Hospital ('/assets/images/hospital.jpg','Delhi','Kavita Nagar','Jain KUnj Nagar COlony Khatauli','arnavjainkht@gmail.com', '9412211658',
         'we provide a good facility to all our patients' ),
         new Hospital ('/assets/images/hospital.jpg','Delhi','Kavita Nagar','Jain KUnj Nagar COlony Khatauli','arnavjainkht@gmail.com', '9412211658',
         'we provide a good facility to all our patients' ),
         new Hospital ('/assets/images/hospital.jpg','Dasna','Kavita Nagar','Jain KUnj Nagar COlony Khatauli','arnavjainkht@gmail.com', '9412211658',
         'we provide a good facility to all our patients' ),
         new Hospital ('/assets/images/hospital.jpg','Dasna','Kavita Nagar','Jain KUnj Nagar COlony Khatauli','arnavjainkht@gmail.com', '9412211658',
         'we provide a good facility to all our patients' ),        
         
   


       


    ]

    getCategories()
    {

        return this.Hospitals.slice();
    }

    gethospital(id:number)
    {
        return this.Hospitals[id];
    }
    SetService(Hospitals:Hospital[])
    {
       this.Hospitals = Hospitals;
       this.HospitalChanged.next(this.Hospitals.slice())
    }
}