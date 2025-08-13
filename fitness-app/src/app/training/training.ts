import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';
@Component({
  selector: 'app-training',
  standalone: false,
  templateUrl: './training.html',
  styleUrl: './training.css'
})
export class Training implements OnInit{
  ongoingTraining = false;

  exersiseSubscription !: Subscription;

  constructor(private trainingService :TrainingService){}
  ngOnInit(): void {
    this.exersiseSubscription= this.trainingService.exersiseChanged.subscribe(
      exercise =>{
        if(exercise){
          this.ongoingTraining = true;
        }else{
          this.ongoingTraining = false;
        }
      
    }
    );
  }

}
