import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './guard-service/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"userView",component:UserDashbordComponent,canActivate:[AuthGuardGuard]},
  {path:"signupView",component:SignupComponent},
  {path:"loginView",component:LoginComponent},
  {path:"**",component:DashboardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
