import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  router: any;
  constructor(private service:AppService) { }
  onSubmit(data)
  {
    this.service.addingtask(data).subscribe((result)=>{
      this.router.navigate(['/eachintern']);
    })
  }
  ngOnInit() {
  }
}