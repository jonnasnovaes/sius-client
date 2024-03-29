import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-vacinacao',
  templateUrl: './calendario-vacinacao.component.html',
  styleUrls: ['./calendario-vacinacao.component.scss']
})
export class CalendarioVacinacaoComponent implements OnInit {

  calendario = [
    {
      titulo: 'Ao Nascer',
      vacinas: ['BCG', 'Hepatite B']
    },
    {
      titulo: '2 Meses',
      vacinas: ['Hepatite B', 'DTP/DTPa', 'Hib', 'VIP/VOP', 'Pneumocócica Conjugada', 'Rotavirus']
    },
    {
      titulo: '3 Meses',
      vacinas: ['Meningocócica C', 'Meningocócica A Conjugada', 'Meningocócica C Conjugada', 'Meningocócica W Conjugada', 'Meningocócica Y Conjugada', 'Meningocócica B Combinante']
    },
    {
      titulo: '4 Meses',
      vacinas: ['DTP/DTPa', 'Hib', 'VIP/VOP', 'Pneumocócica Conjugada', 'Rotavirus']
    },
    {
      titulo: '5 Meses',
      vacinas: ['Meningocócica C', 'Meningocócica A Conjugada', 'Meningocócica C Conjugada', 'Meningocócica W Conjugada', 'Meningocócica Y Conjugada', 'Meningocócica B Combinante']
    },
    {
      titulo: '6 Meses',
      vacinas: ['Hepatite B', 'DTP/DTPa', 'Hib', 'VIP/VOP', 'Pneumocócica Conjugada', 'Influenza']
    },
    {
      titulo: '7 Meses',
      vacinas: ['Meningocócica B Combinante', 'Influenza']
    },
    {
      titulo: '12 Meses',
      vacinas: ['Pneumocócica Conjugada', 'Meningocócica C', 'Meningocócica A Conjugada', 'Meningocócica C Conjugada', 'Meningocócica W Conjugada', 'Meningocócica Y Conjugada', 'Meningocócica B Combinante', 'SCR', 'Varicela', 'SCRB', 'Hepatite A']
    },
    {
      titulo: '15 Meses',
      vacinas: ['DTP/DTPa', 'Hib', 'VIP/VOP', 'SCR', 'Varicela', 'SCRB']
    },
    {
      titulo: '18 Meses',
        vacinas: ['Febre Amarela']
    },
    {
      titulo: '4 a 6 anos',
        vacinas: ['DTP/DTPa', 'VIP/VOP', 'Meningocócica C', 'Meningocócica A Conjugada', 'Meningocócica C Conjugada', 'Meningocócica W Conjugada', 'Meningocócica Y Conjugada']
    },
    {
      titulo: '11 anos',
        vacinas: ['Meningocócica C', 'Meningocócica A Conjugada', 'Meningocócica C Conjugada', 'Meningocócica W Conjugada', 'Meningocócica Y Conjugada']
    },
    {
      titulo: '14 anos',
        vacinas: ['dT/dTpa']
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
