import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{
_id:any;
userobj:any={
    "_id": "",
    "name": "",
    "email":"",
    "password":"",
     "phonenumber": ""
  }
  errors: any;
constructor(private user:UsersService,private route:ActivatedRoute, private router: Router){}
ngOnInit(): void {
 this._id = this.route.snapshot.paramMap.get('_id');
 alert(this._id);

 this.user.getUser(this._id).subscribe((res)=>{
  this.userobj = res
 })
}
onUpdate(){
this.user.updateUser(this.userobj,this._id).subscribe((res)=>{
  if(res){
    alert("Update user successfully");
    this.router.navigate(['/userlist']);
   }
   else{
    alert("Failed to update user");
    
   }

 })

}
} 