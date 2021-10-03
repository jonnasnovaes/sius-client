import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-dashboard',
  templateUrl: './relatorio-dashboard.component.html',
  styleUrls: ['./relatorio-dashboard.component.scss']
})
export class RelatorioDashboardComponent implements OnInit {

  constructor() { }

  chart1 = {
    title: '',
    type: 'PieChart',
    data: [
      ['Agendado', 154],
      ['Agendamento Perdido', 151],
      ['Em investigação', 40],
      ['Cancêr Descartado', 20],
      ['Câncer Confirmado', 10],
    ],
    // columnNames: ['London', 'New York', 'Paris', 'Berlin', 'Kairo'],
    options: {
      colors: ['#248FBE', '#007462', '#F6A400', '#103F8F', '#F44336'],
      is3D: false,
      pieHole: 0.4
    },
    height: 280,
    width: ((window.screen.width - 500) / 2)
  };

  chart2 = {
    title: '',
    type: 'Bar',
    data: [
      ['Agendado', 154],
      ['Agendamento Perdido', 151],
      ['Em investigação', 40],
      ['Cancêr Descartado', 20],
      ['Câncer Confirmado', 10],
    ],
    // columnNames: ['London', 'New York', 'Paris', 'Berlin', 'Kairo'],
    options: {
      // colors: ['#FBA61C', '#0284CA', '#002A64', '#A2D1DE', '#585858'],
      colors: ['#103F8F', '#0284CA', '#002A64', '#A2D1DE', '#585858'],
      is3D: false,
      pieHole: 0.4
    },
    height: 270,
    width: ((window.screen.width - 500) / 2)
  };

  chart3 = {
    title: '',
    type: 'Line',
    data: [
      ['Agendado', 154],
      ['Agendamento Perdido', 151],
      ['Em investigação', 40],
      ['Cancêr Descartado', 20],
      ['Câncer Confirmado', 10],
    ],
    // columnNames: ['London', 'New York', 'Paris', 'Berlin', 'Kairo'],
    options: {
      colors: ['#FBA61C', '#0284CA', '#002A64', '#A2D1DE', '#585858'],
      is3D: false,
      pieHole: 0.4
    },
    height: 260,
    width: (window.screen.width - 400)
  };

  ngOnInit(): void {
  }

  // calcWidthChartLine(): number {
  //   return (window.screen.width - 294);
  // }

}
