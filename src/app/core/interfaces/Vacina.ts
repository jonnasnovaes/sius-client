export interface Vacina {
  id: number;
  nome: string;
  fabricante: string;
  dataFabricacao?: string;
  numeroRegistro?: number;
}

export interface VacinaEstoque {
  id: number;
  idVacina: number;
  nome: string;
  fabricante: string;
  quantidade: number;
}
