import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../../core/interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  async httpGetUsuarios(): Promise<any> {
    return await this.http.get(environment.api + 'login', {observe: 'response'}).toPromise();
  }

  async httpGetUsuarioId(idUsuario): Promise<any> {
    return await this.http.get(environment.api + `login/${idUsuario}`, {observe: 'response'}).toPromise();
  }

  async httpPostUsuario(usuario: Usuario): Promise<any> {
    return await this.http.post(environment.api + 'login/new', usuario, {observe: 'response'}).toPromise();
  }

  async httpPutUsuario(usuario: Usuario): Promise<any> {
    return await this.http.put(environment.api + 'login', usuario, {observe: 'response'}).toPromise();
  }

  async httpDeleteUsuario(idUsuario): Promise<any> {
    return await this.http.delete(environment.api + `login/${idUsuario}`, {observe: 'response'}).toPromise();
  }

}
