import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerobj:any={
    "_id": "",
    "name": "",
    "email":"",
    "password":"",
     "phonenumber": ""
  }
  constructor(private food:FoodService){}

  onRegister(){
   this.food.register(this.registerobj).subscribe((res:any)=>{
     if(res.result){
      alert("User Creation Done")
     }
     else{

      alert(res.message)
     }

   })

  }
}
