import { Subject } from 'rxjs';
import { Hospital } from '../models/hospital.model';

export class HospitalService
{


    HospitalChanged = new Subject<Hospital[]>();


    private Hospitals:Hospital[] = 
    [
     
            
         
   


       


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