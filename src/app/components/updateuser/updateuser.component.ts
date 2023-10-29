import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{
  updateobj:any={
    "_id": "",
    "name": "",
    "email":"",
    "password":"",
     "phonenumber": ""
  }
constructor(private user:UsersService,private router:Router){}
ngOnInit(): void {
 
}
updateData(value: any) {
  let body = {
    name: value.name,
    age: value.age
  }

  this.user.updateUser(body, `2`)
    .subscribe(response => {
      console.log(response)
    })
}
}
