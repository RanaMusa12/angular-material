import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Training } from './training/training';


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
    component: Training
  },
  

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
