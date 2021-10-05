import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async logar(): Promise<any> {
    const perfilAtivo = await this.authService.login(this.form.value);

    if (perfilAtivo === 0) {
      await this.router.navigateByUrl('dashboard/cadastrar-vacina');
    }
    else if (perfilAtivo === 1 || perfilAtivo === 2) {
      await this.router.navigateByUrl('dashboard/relatorio-dashboard');
    }
    else if (!perfilAtivo) {
      console.log('Erro de login');
    }
  }

}
