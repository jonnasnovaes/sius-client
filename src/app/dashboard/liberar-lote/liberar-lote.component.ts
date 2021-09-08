import { Component, OnInit } from '@angular/core';

export interface Vacina {
  nome: string;
  fabricante: string;
  numeroLote: string;
  recebimento: string;
}


const ELEMENT_DATA: Vacina[] = [
  {nome: 'Gripe', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  {nome: 'Covid 19', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  {nome: 'Sarampo', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  {nome: 'Febre Amarela', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  {nome: 'Catapora', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  {nome: 'Tuberculose', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  {nome: 'Poliomielite', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  {nome: 'Pneumonia', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  {nome: 'Tétano', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
  { nome: 'Rubélola', fabricante: 'Janssen', numeroLote: '2021080392', recebimento: ''},
];

@Component({
  selector: 'app-liberar-lote',
  templateUrl: './liberar-lote.component.html',
  styleUrls: ['./liberar-lote.component.scss']
})
export class LiberarLoteComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'fabricante', 'numeroLote', 'recebimento'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
