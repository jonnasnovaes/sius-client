import { Component, OnInit } from '@angular/core';

export interface Vacina {
  nome: string;
  fabricante: string;
  dataFabricacao: string;
  quantidade: string;
}


const ELEMENT_DATA: Vacina[] = [
  {nome: 'Gripe', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  {nome: 'Covid 19', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  {nome: 'Sarampo', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  {nome: 'Febre Amarela', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  {nome: 'Catapora', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  {nome: 'Tuberculose', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  {nome: 'Poliomielite', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  {nome: 'Pneumonia', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  {nome: 'Tétano', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
  { nome: 'Rubélola', fabricante: 'Janssen', dataFabricacao: '01/03/2021', quantidade: '2'},
];

@Component({
  selector: 'app-verificar-estoque',
  templateUrl: './verificar-estoque.component.html',
  styleUrls: ['./verificar-estoque.component.scss']
})
export class VerificarEstoqueComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'fabricante', 'dataFabricacao', 'quantidade'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
