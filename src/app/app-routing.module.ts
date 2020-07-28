import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FirstComponent } from './components/first/first.component';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { AdminlandingComponent } from './components/adminlanding/adminlanding.component';
import { EachinternComponent } from './components/eachintern/eachintern.component';
import { AdmintaskComponent } from './components/admintask/admintask.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import {} from '@angular/router'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'land',component:LandingComponent},
  {path:'profile',component:ProfileComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'list/:id',component:TasksComponent},
  {path:'',component:FirstComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'adminlanding',component:AdminlandingComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'eachintern',component:EachinternComponent},
  {path:'admintask',component:AdmintaskComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'adminprofile',component:AdminprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy:PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }