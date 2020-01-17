import { City } from '../models/location.model';
import { Subject } from 'rxjs';



export class LocationService {
  locationChanged = new Subject<City[]>();


  private  Loctions:City[]=
  [
     


  ]

  getCategories()
  {
    return this.Loctions;
    
  }

  setService(Location:City[])
  {
     this.Loctions = Location
     this.locationChanged.next(this.Loctions)
  }
}
