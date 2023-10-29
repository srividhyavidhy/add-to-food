import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  usersArray:any[]=[];
  selectedUser:string='';
  constructor(private user:UsersService,private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.user.getUsers().subscribe((res:any)=>{
      this.usersArray=res;
    });
   }
  
   deleteUser(event:any, _id:string){
    if(confirm('Are your sure you want to delete this data ?'))
    {
      event.target.innerText ="Deleting....";
  
      this.user.deleteUser(_id).subscribe((res:any)=>{
        this.loadUsers();
        if(res){
          alert("User Creation Done");
          this.router.navigate(['/userlist']);
         }
         else{
          alert("Failed to create employee");
          
         }
      })
    }
  }
}
