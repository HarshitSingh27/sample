import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admintask',
  templateUrl: './admintask.component.html',
  styleUrls: ['./admintask.component.css']
})
export class AdmintaskComponent implements OnInit {
  admin:any;
  id:any;
  constructor(private rs:AdminService,public router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.id=params.id;
    })
    console.log(this.id);
   }
  
  ngOnInit():void {
    this.rs.profile4(this.id).subscribe
    (
      (response)=>
      {
        console.log("for one",response)
        this.admin = response;
      }
    ),
    (error)=>console.log(error);
  }
  approve(id:any){
    console.log("hello")
    this.rs.approve(id).subscribe((res)=>{
      console.log(res);
      alert("The event has been Approved")
    })
  }  
  
  reject(id:any){
    this.rs.approve(id).subscribe((res)=>{
      console.log(res);
    })
  }
  }


