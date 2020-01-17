import { Subject } from 'rxjs';

export class ChangeService
{
      locationChanged = new Subject<String>();

      showChanged = new Subject<Boolean>();
      diseaseChenged = new Subject<String>();
      Location:String;
      loca:String;
      show:any;
      Disease:String;
      
      changeLocation(location:String)
      {
          this.Location = location;
        this.locationChanged.next(this.Location.slice())
        console.log(this.Location);
        
      }


      changeShow(show:Boolean)
      {
        this.show= show;
        this.showChanged.next(this.show)
        
        
      }
      changeDisease(Disease:String)
      {
        this.Disease = Disease;
        this.diseaseChenged.next(this.Disease)
      }

      getshow()
      {
        return this.show;
      }





}