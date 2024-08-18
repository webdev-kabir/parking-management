import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
import { BaseChartDirective } from 'ng2-charts';


@NgModule({
  declarations: [
  
    DashboardInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BaseChartDirective
  ]
})
export class DashboardModule { }
