import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';

const routes: Routes = [
  {
    path:'',
    component: VehiclesListComponent
  },
  {
    path:'add-vehicles',
    component: VehiclesFormComponent
  },
  {
    path:'update-vehicles/:id',
    component: VehiclesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
