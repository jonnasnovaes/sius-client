import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LiberarLoteService {

  constructor(
    private http: HttpClient
  ) { }

  async httpGetLotes(): Promise<any> {
    return await this.http.get(environment.api + 'liberar-lote', {observe: 'response'}).toPromise();
  }

  async httpPostLotes(idVacina: number): Promise<any> {
    return await this.http.put(environment.api + 'liberar-lote', {idVacina, liberado: true}, {observe: 'response'}).toPromise();
  }

}
