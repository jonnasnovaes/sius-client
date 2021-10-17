import { Component, OnInit } from '@angular/core';
import {RegistrarVacinacaoModalComponent} from '../registrar-vacinacao/registrar-vacinacao-modal/registrar-vacinacao-modal.component';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UsuarioModalComponent} from './usuario-modal/usuario-modal.component';
import {Usuario} from '../../core/interfaces/Usuario';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';
import {VacinaModalComponent} from '../cadastrar-vacina/vacina-modal/vacina-modal.component';
import {AppService} from '../../services/app.service';
import {UsuariosService} from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  loading = false;

  listaUsuario: Array<Usuario> = [];
  listaUsuarioFilter: Array<Usuario> = [];

  constructor(
    private appService: AppService,
    private modal: NgbModal,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.getUsuarios().then();
  }

  async getUsuarios() {
    this.loading = true;

    const response = await this.usuarioService.httpGetUsuarios();

    if (response['status'] === 200) {
      const resposeUsuario: Array<Usuario> = [... response['body']];
      this.listaUsuario = resposeUsuario.filter(ru => ru.perfil === 1 || ru.perfil === 2);
      this.listaUsuarioFilter = [... this.listaUsuario];
    }
    else {
      const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
      alertModal.componentInstance.message = 'Não foi possível carregar a lista de usuarios.';
    }

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  novoUsuario() {
    const modal = this.modal.open(UsuarioModalComponent, {size: 'lg'});
    modal.componentInstance.typeModal = 'new';
    modal.result.then(r => {
      let mensagem = '';

      if (r === 'ok') {
        mensagem = 'Usuario registrado com sucesso!';
      }
      else if (r === 'error') {
        mensagem = 'Erro do sistema ao tentar registrar o usuario.';
      }

      if (mensagem !== '') {
        const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
        alertModal.componentInstance.message = mensagem;
        alertModal.result.then(async result => {
          await this.getUsuarios();
        });
      }
    });
  }

  async acao(acao: string, idUsuario: number): Promise<any> {
    if (acao === 'delete') {
      const confirmModal = this.modal.open(ConfirmModalComponent, {size: 'md'});
      confirmModal.result.then(async result => {

        if (result === 'ok') {
          const response = await this.usuarioService.httpDeleteUsuario(idUsuario);

          if (response['status'] === 200) {
            const retornoAlert = await this.appService.alertModal('Usuario deletado com sucesso !', true);
            if (retornoAlert) {
              await this.getUsuarios();
            }
          }
          else {
            await this.appService.alertModal('Não foi possível deletar o usuario.', false);
          }
        }
      });
    }
    else if (acao === 'edit') {
      const response = await this.usuarioService.httpGetUsuarioId(idUsuario);

      if (response['status'] === 200) {
        const modal = this.modal.open(UsuarioModalComponent, {size: 'lg'});
        modal.componentInstance.typeModal = 'update';
        modal.componentInstance.idUsuario = Number(idUsuario);
        modal.componentInstance.dadosUsuario = response['body'];

        modal.result.then(r => {
          let mensagem = '';

          if (r === 'ok') {
            mensagem = 'Usuario atualizado com sucesso!';
          }
          else if (r === 'error') {
            mensagem = 'Erro do sistema ao tentar atualizar o usuario.';
          }

          if (mensagem !== '') {
            const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
            alertModal.componentInstance.message = mensagem;
            alertModal.result.then(async result => {
              await this.getUsuarios();
            });
          }
        });
      }

    }
  }


  search($event): void {
    const value = $event.target.value.toUpperCase();

    if (value === '') {
      this.listaUsuarioFilter = [... this.listaUsuario];
    }
    else {
      const newListUsuario: Array<Usuario> = [];

      this.listaUsuario.map(v => {
        if (v.nome.match(value)) {
          newListUsuario.push(v);
        }
      });

      this.listaUsuarioFilter = [... newListUsuario];
    }
  }


}
