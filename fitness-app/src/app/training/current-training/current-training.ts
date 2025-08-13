import { Component, OnInit,  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  standalone: false,
  templateUrl: './current-training.html',
  styleUrl: './current-training.css'
})
export class CurrentTraining implements OnInit {



  constructor(private dialog: MatDialog, private trainingService :TrainingService){}
  progress=0;
  timer:number = 0;
  

  ngOnInit(): void {
    this.startOrResumeTimer();

  }

  startOrResumeTimer(){

    const step =this.trainingService.getRunningExersise().duration/100 * 1000;
    this.timer=setInterval(()=>{
        this.progress+=1;
        if(this.progress>=100){
          clearInterval(this.timer); 
          this.trainingService.completeExersise();  
          const audio = new Audio('assets/public/complete_sound.mp3'); 
          audio.play();
          
        
        }

    },step)

  }

  onStop(){
     clearInterval(this.timer);

    const dialogRef =  this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
     });

     dialogRef.afterClosed().subscribe(result =>{
      if (result){
        this.trainingService.cancelExersise(this.progress);

      }else{

        this.startOrResumeTimer();
      }
      
     })

  }

}
