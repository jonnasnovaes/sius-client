import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: any;

  perfilAtivo: number;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.getDataUser();

    if (this.usuario.perfil === 0) {
      this.usuario.perfilAtivo = 'Secretaria de Saúde';
    }
    else if (this.usuario.perfil === 1) {
      this.usuario.perfilAtivo = 'Enfermeiro';
    }
    else if (this.usuario.perfil === 2) {
      this.usuario.perfilAtivo = 'Coordenador';
    }
  }

  async logout(): Promise<any> {
    await this.authService.logout();
  }

  async redirectHome(): Promise<any> {
    await this.router.navigateByUrl('/dashboard/relatorio-dashboard');
    window.location.reload();
  }

}
