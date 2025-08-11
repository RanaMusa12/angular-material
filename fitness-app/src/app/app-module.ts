import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MaterialModule } from './material.module';
import { Signup } from './auth/signup/signup';
import { Login } from './auth/login/login';
import { Welcome } from './welcome/welcome';
import { Training } from './training/training';
import { CurrentTraining } from './training/current-training/current-training';
import { NewTraining } from './training/new-training/new-training';
import { PastTrainings } from './training/past-trainings/past-trainings';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    App,
    Signup,
    Login,
    Welcome,
    Training,
    CurrentTraining,
    NewTraining,
    PastTrainings,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
