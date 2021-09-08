import { Component, OnInit } from '@angular/core';

export interface Vacina {
  nome: string;
  fabricante: string;
  dataFabricacao: string;
  quantidade: string;
  solicitar: any;
}

const ELEMENT_DATA: Vacina[] = [
  {nome: 'Gripe', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  {nome: 'Covid 19', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  {nome: 'Sarampo', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  {nome: 'Febre Amarela', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  {nome: 'Catapora', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  {nome: 'Tuberculose', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  {nome: 'Poliomielite', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  {nome: 'Pneumonia', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  {nome: 'Tétano', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
  { nome: 'Rubélola', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', solicitar: ''},
];

@Component({
  selector: 'app-solicitar-vacina',
  templateUrl: './solicitar-vacina.component.html',
  styleUrls: ['./solicitar-vacina.component.scss']
})
export class SolicitarVacinaComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'fabricante', 'dataFabricacao', 'quantidade', 'solicitar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
