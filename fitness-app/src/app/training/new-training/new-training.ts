import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Training } from '../training';
import {TrainingService} from '../training.service'
import { Exersise } from '../exersise.module';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-training',
  standalone: false,
  templateUrl: './new-training.html',
  styleUrl: './new-training.css'
})
export class NewTraining implements OnInit {

  constructor(private trainingService: TrainingService, private db :AngularFirestore){}

  exersises : Exersise[]=[];

 @Output() traningStart= new EventEmitter<void>();

 onStartTraining(form: NgForm){
  this.trainingService.startExersise(form.value.exercise)
 }

 ngOnInit(): void {

  // this.exersises = this.trainingService.getAvailableExersises();
   this.db.collection('availableExercises').valueChanges().subscribe(result =>{

    console.log(result);

   })
 }

}
