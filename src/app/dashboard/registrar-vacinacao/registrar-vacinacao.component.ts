import { Component, OnInit } from '@angular/core';

export interface Vacina {
  nome: string;
  fabricante: string;
  dataFabricacao: string;
  quantidade: string;
  registrar: any;
}

const ELEMENT_DATA: Vacina[] = [
  {nome: 'Gripe', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  {nome: 'Covid 19', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  {nome: 'Sarampo', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  {nome: 'Febre Amarela', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  {nome: 'Catapora', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  {nome: 'Tuberculose', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  {nome: 'Poliomielite', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  {nome: 'Pneumonia', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  {nome: 'Tétano', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
  { nome: 'Rubélola', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2', registrar: ''},
];

@Component({
  selector: 'app-registrar-vacinacao',
  templateUrl: './registrar-vacinacao.component.html',
  styleUrls: ['./registrar-vacinacao.component.scss']
})
export class RegistrarVacinacaoComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'fabricante', 'dataFabricacao', 'quantidade', 'registrar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
