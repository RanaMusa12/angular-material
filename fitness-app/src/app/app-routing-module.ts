import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Training } from './training/training';
import { AuthGaurd } from './auth/auth.gaurd';


const routes: Routes = [
    {
    path: '',
    component: Welcome
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'signup',
    component: Signup
  },
  {
    path: 'training',
    component: Training,
    canActivate: [AuthGaurd]
  },
  

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]

})
export class AppRoutingModule { }
