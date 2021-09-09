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

    if (response.status === 200) {
      const dadosResposta = response.body;
      if (dadosResposta['perfil'] === 0) {
        localStorage.setItem('Perfil', '0');
        return 0;
      }
      else {
        localStorage.setItem('Perfil', '1');
        return 1;
      }
    }
    else {
      return false;
    }
  }

  async logout(): Promise<any> {
    localStorage.removeItem('Perfil');
    await this.router.navigateByUrl('login');
  }

  getPerfil(): number {
    return Number(localStorage.getItem('Perfil'));
  }

}
