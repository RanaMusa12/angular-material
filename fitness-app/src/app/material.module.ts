import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [MatButtonModule, MatIconModule,MatCheckboxModule,MatSidenavModule,FlexLayoutModule, MatListModule,MatSelectModule,
     MatFormFieldModule, MatInputModule,MatDatepickerModule,MatNativeDateModule,MatToolbarModule,MatTabsModule,MatCardModule],

  exports: [MatButtonModule, MatIconModule,MatCheckboxModule,MatSidenavModule,FlexLayoutModule, MatListModule,MatSelectModule,
     MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatToolbarModule, MatTabsModule,MatCardModule]
})
export class MaterialModule{}