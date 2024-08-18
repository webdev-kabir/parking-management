import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrl: './vehicles-form.component.scss'
})
export class VehiclesFormComponent implements OnInit {
  vehicleForm!: FormGroup;
  vehiclesType: String[] = ['Microbus', 'Car', 'Truck'];
  vehiclesCharge: String[] = ['Microbus - 500', 'Car - 300', 'Truck - 1000'];
  vehiclesStatus: String[] = ['IN', 'OUT'];
  vehicleLicense: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
  ) {
    this.vehicleForm = this.fb.group({
      license: ['', Validators.required],
      type: ['', Validators.required],
      owner_name: ['', Validators.required],
      owner_phone: [null, Validators.required],
      status: ['', Validators.required],
      owner_address: ['', Validators.required],
      entry: ['', Validators.required],
      exit: [''],
      charge: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vehicleLicense = params['id'];
    });
    //@ts-ignore
    const storedFormData = JSON.parse(localStorage.getItem('formData'))
    let filteredVehicle = storedFormData.filter((vehicle: any) => (vehicle.license === this.vehicleLicense) && vehicle)
    console.log('filteredUsers', filteredVehicle);
    this.vehicleForm.patchValue(filteredVehicle[0]);
  }

  onSubmit(): void {
    if (this.vehicleLicense) {
      //@ts-ignore
      const storedVehicles = JSON.parse(localStorage.getItem('formData'))
      let storedFormData = storedVehicles.filter((item: any) => item.license !== this.vehicleLicense);
      storedFormData.push(this.vehicleForm.value);
      if (this.vehicleForm.get('exit')?.value && this.vehicleForm.get('status')?.value === 'OUT') {
        localStorage.setItem('formData', JSON.stringify(storedFormData));
        this.router.navigate(['/', 'vehicles']);
      }else{
        this.snack.open("Have to update the Status and Exit fields!", 'Close', {
          duration: 4000
        })
      }
    } else {
      if (this.vehicleForm.valid) {
        console.log(this.vehicleForm.value);
        this.saveFormData(this.vehicleForm.value);
      }
    }
  }

  saveFormData(formData: any) {
    //@ts-ignore
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    storedFormData.push(formData);
    console.log('storedFormData-2', storedFormData);
    localStorage.setItem('formData', JSON.stringify(storedFormData));
    this.router.navigate(['/', 'vehicles']);
  }
}
