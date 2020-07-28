import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  users1:Object;
  constructor(private service:AdminService) { }
  ngOnInit():void {
    this.service.profile1().subscribe(data=>{
      this.users1 = data;
      console.log(this.users1);
    })
  }
  ngOnDestroy() {

  }

}