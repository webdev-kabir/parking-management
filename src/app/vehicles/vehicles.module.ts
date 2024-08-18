import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';


@NgModule({
  declarations: [
    VehiclesListComponent,
    VehiclesFormComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    RouterModule,
    MatTableModule,
    MatMenuModule,
    MatSnackBarModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ]
})
export class VehiclesModule { }
