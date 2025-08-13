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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Header } from './navigation/header/header';
import { SidenavList } from './navigation/sidenav-list/sidenav-list';
import {StopTrainingComponent} from './training/current-training/stop-training.component'
import { AuthService} from './auth/auth.service'
import { TrainingService } from './training/training.service';
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';




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
    Header,
    SidenavList,
    StopTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AuthService,
    TrainingService,
  ],
  bootstrap: [App],
})
export class AppModule {}