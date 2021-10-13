import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AlertModalComponent} from "../core/alert-modal/alert-modal.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('coordenador@sams.gov.br'),
    senha: new FormControl('123')
  });

  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  async logar(): Promise<any> {
    this.loading = true;

    const perfilAtivo = await this.authService.login(this.form.value);

    setTimeout(async () => {
      if (perfilAtivo === 0) {
        await this.router.navigateByUrl('dashboard/cadastrar-vacina');
      }
      else if (perfilAtivo === 1 || perfilAtivo === 2) {
        await this.router.navigateByUrl('dashboard/relatorio-dashboard');
      }
      else if (!perfilAtivo) {
        const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
        alertModal.componentInstance.message = 'Erro ao tentar logar no sistema.';
      }

      this.loading = false;
    }, 3000);

  }

}
