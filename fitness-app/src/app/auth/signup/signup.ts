import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {

  maxDate: Date | undefined;

  ngOnInit(): void {
    
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getFullYear() - 18);
  }

  
  onSubmit(f:NgForm){

    console.log(f.value);
    f.reset();

  }
}
