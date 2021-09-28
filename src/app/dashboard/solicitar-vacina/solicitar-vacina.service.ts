import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Vacina} from '../../core/interfaces/Vacina';

@Injectable({
  providedIn: 'root'
})
export class SolicitarVacinaService {

  constructor(private http: HttpClient) { }

  async httpGetSolicitarLoteVacina(): Promise<any> {
    return await this.http.get(environment.api + 'solicitar-vacina', {observe: 'response'}).toPromise();
  }

  async httpPutSolicitarLoteVacina(vacina: Vacina, liberado: boolean, recebido: boolean): Promise<any> {
    return await this.http.put(environment.api + 'solicitar-vacina',
      {idVacina: vacina.id, liberado, recebido},
      {observe: 'response'}
    ).toPromise();
  }

}
