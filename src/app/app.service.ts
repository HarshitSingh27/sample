


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from './users';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  url:string="http://localhost:3000";

  constructor(private http:HttpClient) { 
  }
  
  signup(username,password,regno,options,email)
  {
    const user = {
      username: username,
      password: password,
      regno: regno,
      options: options,
      email: email    
    };
   return this.http.post(this.url+'/signup',user);
  }

  login(username,password)
  {
    const user = {
      username: username,
      password: password 
    };
   return this.http.post(this.url+'/signup',user);
  }
  profile()
  {
    return this.http.get(`${this.url}/profile`);
  }
  dashboard()
  {
    return this.http.get(this.url+'/user/dashboard');
  }
  taskone(id:any)
  {
    return this.http.get(this.url+'/user/taskone'+"?id="+id);
  }
  addingtask(data)
  {
    return this.http.post(this.url+'/admin/addtask',data)
  }
}

/*
  signup(user: users)
  {
   return this.http.post(this.url+'/signup',user);
  }*/

/*************************************************************************************************************************************************************************************************/