import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { UsersService } from 'src/app/services/users.service';

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
 
  constructor(private user:UsersService,private router:Router, private route:ActivatedRoute){}
ngOnInit(): void {
  this.loadUsers();
}
loadUsers(){
  this.user.getUsers().subscribe((res:any)=>{
    this.usersArray=res;
  });
 }

  onRegister(){
   this.user.register(this.registerobj).subscribe((res:any)=>{
     if(res){
      alert("User Creation Done");
      this.router.navigate(['/register']);
     }
     else{
      alert("Failed to create employee");
      
     }

   })
  
  }
deleteUser(event:any, _id:string){
  if(confirm('Are your sure you want to delete this data ?'))
  {
    event.target.innerText ="Deleting....";

    this.user.deleteUser(_id).subscribe((res:any)=>{
      this.loadUsers();
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

}
