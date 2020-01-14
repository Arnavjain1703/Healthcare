import { Subject } from 'rxjs';

export class ChangeService
{
      locationChanged = new Subject<String>();
      Location:String;

      changeLocation(location:String)
      {
          this.Location = location;
        this.locationChanged.next(this.Location.slice())
        
      }



}