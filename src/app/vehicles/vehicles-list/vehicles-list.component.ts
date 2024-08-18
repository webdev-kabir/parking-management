import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent implements OnInit{
  dataSource: any = [
    {
      license: 593201,
      type: 'Car',
      owner_name: 'Kabirul Hasan',
      owner_phone: 1763180249,
      status: 'IN',
      owner_address: 'Mirpur-01',
      entry: '6.20 PM',
      exit: '9.30PM',
      charge: '300'
    },{
      license: 589664,
      type: 'Truck',
      owner_name: 'Hasan Sikder',
      owner_phone: 176880249,
      status: 'OUT',
      owner_address: 'Mirpur-01',
      entry: '6.20 PM',
      exit: '9.30PM',
      charge: '1000'
    }
  ];
  displayedColumns: string[] = ['owner_name','type','license','entry','exit','status','action'];

  constructor(
    private router: Router
  ){

  }
  ngOnInit(): void {
    //@ts-ignore
    const storedFormData = JSON.parse(localStorage.getItem('formData'))
    this.dataSource = [];
  }
  updateUser(vehicle: any): void {
    this.router.navigate(['vehicles/update-vehicles', vehicle.license])
  }
}
