import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exersise } from '../exersise.module';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-past-trainings',
  standalone: false,
  templateUrl: './past-trainings.html',
  styleUrl: './past-trainings.css'
})
export class PastTrainings implements OnInit, AfterViewInit {

  displayedColumns = ['date', 'name', 'duration', 'calories','state'];
  dataSource = new MatTableDataSource<Exersise>();

  constructor(private trainingService: TrainingService){}


  @ViewChild(MatSort) sort !:MatSort;
  @ViewChild(MatPaginator) paginator !:MatPaginator;

  ngOnInit(): void {
   this.dataSource.data= this.trainingService.getCompletedOrCancelledExercises();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort= this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue:string){

    this.dataSource.filter = filterValue.trim().toLocaleLowerCase() ;
  }

}
