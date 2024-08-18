import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const childrenRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
  }
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: childrenRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
