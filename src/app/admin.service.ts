import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {users1} from './users1';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url1:string="http://localhost:3000";

  constructor(private http:HttpClient) { }

profile1()
{
  return this.http.get(`${this.url1}/admin/dashboard`);
}
profile2()
{
  return this.http.get(`${this.url1}/admin/dashboard/tasks`);
}
profile3()
{
  return this.http.get(`${this.url1}/admin/dashboard/taskone`);
}
profile4(id:any)
  {
    return this.http.get(this.url1+'/admin/dashboard/tasks'+"?id="+id);
  }
  approve(id:any){
    let body={
      id:id
    }
    return this.http.post(this.url1+'/approve',body);
  }
  disapprove(id:any){
    let body={
      id:id
    }
    return this.http.post(this.url1+'/disapprove',body);
  }
}
