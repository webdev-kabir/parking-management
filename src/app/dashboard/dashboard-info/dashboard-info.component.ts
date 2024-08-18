import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrl: './dashboard-info.component.scss'
})
export class DashboardInfoComponent implements OnInit {
  totalVehicleParked: number = 0;
  totalVehicleSlot: number = 50;
  totalCarParked: number = 0;
  totalMicrobusParked: number = 0;
  totalTruckParked: number = 0;
  parkedOvertime: number = 0;
  constructor() {

  }

  ngOnInit(): void {

    //@ts-ignore
    const storedFormData = JSON.parse(localStorage.getItem('formData'))
    console.log('storedFormData', storedFormData);

    for (let item of storedFormData) {
      if (item.status === 'IN') {
        this.totalVehicleParked++;
      }
      if (item.type === 'Car') {
        this.totalCarParked++;
      }
      if (item.type === 'Microbus') {
        this.totalMicrobusParked++;
      }
      if (item.type === 'Truck') {
        this.totalTruckParked++;
      }
      this.diffMinutes(item.entry)
    }
  }

  diffMinutes(entry: any) {
    const entryTime:any = new Date(entry);
    const now:any = new Date();
    const differenceInMillis = now - entryTime;
    const isMoreThanTwoHours = differenceInMillis > 2 * 60 * 60 * 1000;
    if (isMoreThanTwoHours) {
      this.parkedOvertime++;
    } else {
      console.log("Less than 2 hours have passed since the entry time.");
    }
  }



  public SystemName: string = "Vehicle";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [ 1,8,20];
 
  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: this.SystemName
      }
  ];
  // labels
  public lineChartLabels: Array<any> = ["2018-01-29 10:00:00", "2018-01-29 10:27:00", "2018-01-29 10:28:00"];
  

  public lineChartOptions: any = {
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
          max : 20,
          min : 0,
        }
      }],
      xAxes: [{
  
 
        }],
    },
      plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        //color: "#2756B3",
        color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },
      
      },
      deferred: false

    },

  };

   _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];



  public ChartType = 'bar';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

}
