import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  async login(login): Promise<any> {
    const response = await this.http.post(environment.api + 'login', login, {observe: 'response'}).toPromise();

    localStorage.setItem('Nome', response['body']['nome']);

    if (response.status === 200) {
      const dadosResposta = response.body;
      if (dadosResposta['perfil'] === 0) {
        localStorage.setItem('Perfil', '0');
        return 0;
      }
      else if (dadosResposta['perfil'] === 1) {
        localStorage.setItem('Perfil', '1');
        return 1;
      }
      else if (dadosResposta['perfil'] === 2) {
        localStorage.setItem('Perfil', '2');
        return 2;
      }
    }
    else {
      return false;
    }
  }

  async logout(): Promise<any> {
    localStorage.removeItem('Perfil');
    localStorage.removeItem('Nome');
    await this.router.navigateByUrl('login');
  }

  getDataUser(): any {
    return {nome: localStorage.getItem('Nome'), perfil: Number(localStorage.getItem('Perfil'))};
  }

}
