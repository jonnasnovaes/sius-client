export interface Vacina {
  id: number;
  nome: string;
  fabricante: string;
  dataFabricacao?: string;
  numeroRegistro?: number;
  bula?: string;
}

export interface VacinaEstoque {
  id: number;
  idVacina: number;
  nome: string;
  fabricante: string;
  quantidade: number;
  bula?: string;
}

export interface RegistrarVacinacao {
  nome: string;
  numeroSus: string;
  idade: number;
  vacina: string;
  dataVacinacao: string;
}

export interface StatusSolicitacaoVacina {
  id: number;
  idVacina: number;
  liberado: boolean;
  recebido: boolean;
}
