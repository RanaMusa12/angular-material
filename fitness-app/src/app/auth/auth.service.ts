import { AbstractControlDirective } from '@angular/forms';
import { AuthData } from './auth-data.module';
import {User} from './user.module'
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable()
export class AuthService{

    constructor(private router: Router, private afAuth: AngularFireAuth){

    };

    authChange = new Subject<boolean>();
    private user!: User |null;

    registerUser(authData: AuthData){
        this.afAuth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // User registered and logged in automatically
      })
      .catch(error => {
        console.error('Registration error:', error);
        // Handle errors here (show to user)
      });
        this.authSuccessfuly();
    }

    login(authData:AuthData){

         this.user={
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        };
        this.authSuccessfuly();
    }

    logout(){

        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }


    getUser(){

        return {...this.user};
    }

    isAuth(){

        return this.user != null
    }

    private authSuccessfuly(){

        this.authChange.next(true);   
         this.router.navigate(['/training']);

    }

}