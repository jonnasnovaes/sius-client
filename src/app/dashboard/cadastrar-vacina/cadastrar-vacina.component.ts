import { Component, OnInit } from '@angular/core';

export interface Vacina {
  nome: string;
  fabricante: string;
  numeroRegistro: string;
  recebimento: string;
}


const ELEMENT_DATA: Vacina[] = [
  {nome: 'Gripe', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  {nome: 'Covid 19', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  {nome: 'Sarampo', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  {nome: 'Febre Amarela', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  {nome: 'Catapora', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  {nome: 'Tuberculose', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  {nome: 'Poliomielite', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  {nome: 'Pneumonia', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  {nome: 'Tétano', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
  { nome: 'Rubélola', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
];

@Component({
  selector: 'app-cadastrar-vacina',
  templateUrl: './cadastrar-vacina.component.html',
  styleUrls: ['./cadastrar-vacina.component.scss']
})
export class CadastrarVacinaComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'fabricante', 'numeroRegistro', 'recebimento'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
