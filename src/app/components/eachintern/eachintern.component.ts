import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-eachintern',
  templateUrl: './eachintern.component.html',
  styleUrls: ['./eachintern.component.css']
})
export class EachinternComponent implements OnInit {
  users1:Object;
  constructor(private service:AdminService) { }
  ngOnInit():void {
    this.service.profile2().subscribe(data=>{
      this.users1 = data;
      console.log(this.users1);
    })
  }
  ngOnDestroy() {

  }

}