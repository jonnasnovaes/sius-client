import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CadastrarVacinaService {

  constructor(
    private http: HttpClient
  ) { }

    async httpGetVacinas(): Promise<any> {
      return await this.http.get(environment.api + 'vacina', {observe: 'response'}).toPromise();
    }

    async httpGetVacinaId(idVacina): Promise<any> {
      return await this.http.get(environment.api + `vacina/${idVacina}`, {observe: 'response'}).toPromise();
    }

    async httpPostVacinas(vacina): Promise<any> {
      return await this.http.post(environment.api + 'vacina', vacina, {observe: 'response'}).toPromise();
    }

    async httpPutVacina(vacina): Promise<any> {
      return await this.http.put(environment.api + 'vacina', vacina, {observe: 'response'}).toPromise();
    }

  async httpDeleteVacinas(idVacina): Promise<any> {
    return await this.http.delete(environment.api + `vacina/${idVacina}`, {observe: 'response'}).toPromise();
  }
}
