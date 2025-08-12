import { Component, Output, EventEmitter } from '@angular/core';
import { Training } from '../training';

@Component({
  selector: 'app-new-training',
  standalone: false,
  templateUrl: './new-training.html',
  styleUrl: './new-training.css'
})
export class NewTraining {

 @Output() traningStart= new EventEmitter<void>();

 onStartTraining(){
  this.traningStart.emit();
 }

}
