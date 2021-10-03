import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {RegistrarVacinacao} from '../../core/interfaces/Vacina';

@Injectable({
  providedIn: 'root'
})
export class RegistrarVacinacaoService {

  constructor(private http: HttpClient) { }

  async httpGetRegistroVacinacao(): Promise<any> {
    return await this.http.get(environment.api + 'registrar-vacinacao', {observe: 'response'}).toPromise();
  }

  async httpPostRegistroVacinacao(registrarVacinacao: RegistrarVacinacao): Promise<any> {
    return await this.http.post(environment.api + 'registrar-vacinacao', registrarVacinacao, {observe: 'response'}).toPromise();
  }
}
