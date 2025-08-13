import { Exersise } from "./exersise.module";
import { Subject } from "rxjs";
export class TrainingService{


    exersiseChanged = new Subject<Exersise | null>();

   private availableExersises: Exersise[] = [
        { id: 'crunches', name: 'Crunches', duration: 5, calories: 5 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 120, calories: 3 },
        { id: 'squats', name: 'Squats', duration: 180, calories: 8 },
        { id: 'push-ups', name: 'Push Ups', duration: 30, calories: 7 },
        { id: 'burpees', name: 'Burpees', duration: 180, calories: 10 },
        { id: 'lunges', name: 'Lunges', duration: 30, calories: 6 },
        { id: 'plank', name: 'Plank', duration: 520, calories: 4 },
        { id: 'sit-ups', name: 'Sit Ups', duration: 30, calories: 5 },
        { id: 'leg-raises', name: 'Leg Raises', duration: 240, calories: 4 },
        { id: 'jumping-jacks', name: 'Jumping Jacks', duration: 240, calories: 8 },
        { id: 'mountain-climbers', name: 'Mountain Climbers', duration: 30, calories: 9 },
        { id: 'high-knees', name: 'High Knees', duration: 30, calories: 8 },
        { id: 'glute-bridges', name: 'Glute Bridges', duration: 30, calories: 4 },
        { id: 'bicycle-crunches', name: 'Bicycle Crunches', duration: 30, calories: 6 },
        { id: 'tricep-dips', name: 'Tricep Dips', duration: 60, calories: 6 },
        { id: 'wall-sits', name: 'Wall Sits', duration: 120, calories: 5 },
        { id: 'calf-raises', name: 'Calf Raises', duration: 60, calories: 4 },
        { id: 'reverse-crunches', name: 'Reverse Crunches', duration: 30, calories: 5 },
        { id: 'side-plank', name: 'Side Plank', duration: 60, calories: 4 }
];

private runningExercise : Exersise  = {name:'', duration:0, id:'' , calories: 0};
private exercises: Exersise[] = [];

getAvailableExersises(){

    return this.availableExersises.slice();
}

startExersise(selectedId: string){

    this.runningExercise = this.availableExersises.find(ex => ex.id === selectedId)!;
    this.exersiseChanged.next({...this.runningExercise});
}

getRunningExersise(){
    return {...this.runningExercise};
}
    
completeExersise(){
    this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'}); 
    this.exersiseChanged.next(null);
}


cancelExersise(progress:number){

    this.exercises.push({...this.runningExercise, date: new Date(), state:'cancelled', duration:this.runningExercise.duration *(progress/100), calories:this.runningExercise.calories*(progress/100) }); 
    this.exersiseChanged.next(null);

}

getCompletedOrCancelledExercises(){
    return this.exercises.slice();
}
}


