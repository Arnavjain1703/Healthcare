import { Component, OnInit, Input } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';
import { ChangeService } from 'src/app/services/changeService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hospital-item',
  templateUrl: './hospital-item.component.html',
  styleUrls: ['./hospital-item.component.css']
})
export class HospitalItemComponent implements OnInit {

  constructor( private changeservice:ChangeService) { }
   Location:String;
   locationSubscription:Subscriptio

   show=true;
  ngOnInit( ) {

    this.locationSubscription=this.changeservice.locationChanged
    .subscribe((location:String)=>
    {
      this.Location=location;
      console.log(this.Location);
      this.show = false;
    }
    )
  }
    

  @Input () Hospital:Hospital  ;
  @Input () index:Number;

   
  
  
}
