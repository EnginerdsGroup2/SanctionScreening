import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PersonService } from '../shared-service/person.service';
 import { BaseChartDirective } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  totalStatus:any;
  sanctionComplete:Number;
  sancationFail:Number;
  validationFail:Number;
  validationPass:Number;
  rollBack:Number;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public pieChartLabels:string[] = ['Completed Transaction', 'Failed Transaction'];
  public pieChartData:number[] = [0,0];
  public pieChartType:string = 'pie';
  public pieChartColors:{}[] = [{ backgroundColor : ['rgb(127,219,145)','rgb(255,85,107)'] }];

  constructor(private _personService:PersonService) {}
  
  ngOnInit() {
    
      this._personService.getCount().subscribe((statusCount)=>{
      console.log(statusCount[0]);
      console.log(statusCount[1]);
      console.log(statusCount[2]);
      console.log(statusCount[3]);
      console.log(statusCount[4]);
      console.log(statusCount[5]);
        
      this.pieChartData[0]=Math.round((statusCount[1]*100)/statusCount[0]);
      this.pieChartData[1]=Math.round(((statusCount[2]+statusCount[3]+statusCount[4]+statusCount[5])*100)/statusCount[0]);
      this.sanctionComplete=statusCount[1];
      this.sancationFail=statusCount[2];
      this.validationPass=statusCount[3];
      this.validationFail=statusCount[4];
      this.rollBack=statusCount[5];
    },(error)=>{
       console.log(error);
    })  
    setTimeout(() => {
        if (this.chart && this.chart.chart && this.chart.chart.config) {
          this.chart.chart.config.data.labels = this.pieChartLabels;
          this.chart.chart.update();
        }
    });
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
}
