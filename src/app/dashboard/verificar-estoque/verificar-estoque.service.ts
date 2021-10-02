import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Vacina, VacinaEstoque} from '../../core/interfaces/Vacina';

@Injectable({
  providedIn: 'root'
})
export class VerificarEstoqueService {

  constructor(private http: HttpClient) { }

  async httpGetEstoqueVacina(): Promise<any> {
    return await this.http.get(environment.api + 'estoque-vacina', {observe: 'response'}).toPromise();
  }

  async httpPutEstoqueVacina(vacina: VacinaEstoque): Promise<any> {
    return await this.http.put(environment.api + 'estoque-vacina', vacina, {observe: 'response'}).toPromise();
  }

}
