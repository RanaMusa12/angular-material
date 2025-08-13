import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
  constructor(private authService :AuthService){


  }

  loginForm !: FormGroup;

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      email: new FormControl('',{
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('',{
        validators: [Validators.required]
      }),

    });
  }

  onSubmit(){

    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }



}
