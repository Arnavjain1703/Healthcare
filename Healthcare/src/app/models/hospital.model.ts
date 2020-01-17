export class Hospital
{
    image :String;
    hospital_name:String;
     city:String;
    // description:String;
    email:String;
    contact:String;
    street_name:String;
    id:Number;



constructor( image:String,location:String,name:String,address:String,email:String,contact:String,description:String)
{
      this.image=image;
      this.hospital_name=name;
      this.city=location;
      this.street_name=address;
      this.email= email;
    
      this.contact  = contact;

}
}