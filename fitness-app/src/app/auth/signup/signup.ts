import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {

  constructor(private authService :  AuthService){}

  maxDate: Date | undefined;

  ngOnInit(): void {
    
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getFullYear() - 18);
  }

  
  onSubmit(f:NgForm){

    console.log(f.value);
    this.authService.registerUser({

      email: f.value.email,
      password :f.value.password
    })
    f.reset();

  }
}
