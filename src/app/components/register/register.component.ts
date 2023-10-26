import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  usersArray:any[]=[];
  selectedUser:string='';
  registerobj:any={
    "_id": "",
    "name": "",
    "email":"",
    "password":"",
     "phonenumber": ""
  }
  constructor(private food:FoodService,private router:Router){}
ngOnInit(): void {
  this.loadUsers();
}
loadUsers(){
  this.food.getUsers().subscribe((res:any)=>{
    this.usersArray=res;
  });
 }
 deleteUser(_id:any): void {
  this.food.deleteUser(_id).subscribe((res)=>{
   
    if(res){
      alert("User Creation Done");
      this.router.navigate(['/register']);
     }
     else{
      alert("Failed to create employee");
      
     }
  
   }
  
)}
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

}
