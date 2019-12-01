import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  barChartOptions = {
    scaleShowVerticalLines:false,
    responsive: true
  };
  barChartLabels = ['Strongly Disagree','Disagree',"Not sure","Agree","Strongly Agree"];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {data:[5,59,90,81,56],label:'Question 1'},
    {data:[11,59,75,25,60],label:'Question 2'},
    {data:[65,46,72,27,10],label:'Question 3'},
    {data:[51,59,50,82,52],label:'Question 4'},
    {data:[30,32,55,11,71],label:'Question 5'}
  ];
  chartColors= [{
    backgroundColor: 'rgba(0,8,225,0.54)',
    borderColor: 'rgb(0,171,225)',
    pointBackgroundColor: 'rgba(0,61,225,0.85)',
    pointBorderColor: '#221eff',
    pointHoverBackgroundColor: '#001bff',
    pointHoverBorderColor: 'rgba(3,1,225,0.67)'
  }];
  constructor() { }

  ngOnInit() {
  }

}
