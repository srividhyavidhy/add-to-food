import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  selectedUser:string='';
  registerobj:any={
    "_id": "",
    "name": "",
    "email":"",
    "password":"",
     "phonenumber": ""
  }
  constructor(private food:FoodService,private router:Router){}

  onRegister(){
   this.food.register(this.registerobj).subscribe((res:any)=>{
     if(res){
      alert("User Creation Done");
      this.router.navigate(['/register']);
     }
     else{
      alert("Failed to create employee");
      
     }

   })

  }
  deleteUser(_id:string){
    this.selectedUser = _id;
    this.food.deleteUser(_id).subscribe((res:any)=>{
      this.registerobj=res;
    })
  }
}
