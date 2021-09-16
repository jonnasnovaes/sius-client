import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VacinaModalComponent} from './vacina-modal/vacina-modal.component';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {CadastrarVacinaService} from './cadastrar-vacina.service';
import {HttpResponse} from '@angular/common/http';
import {Vacina} from '../../core/interfaces/Vacina';
import {AppService} from '../../services/app.service';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';

// export interface Vacina {
//   nome: string;
//   fabricante: string;
//   numeroRegistro: string;
//   recebimento: string;
// }


// const ELEMENT_DATA: Vacina[] = [
//   {nome: 'Gripe', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   {nome: 'Covid 19', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   {nome: 'Sarampo', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   {nome: 'Febre Amarela', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   {nome: 'Catapora', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   {nome: 'Tuberculose', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   {nome: 'Poliomielite', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   {nome: 'Pneumonia', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   {nome: 'Tétano', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
//   { nome: 'Rubélola', fabricante: 'Janssen', numeroRegistro: '2021080392', recebimento: ''},
// ];

@Component({
  selector: 'app-cadastrar-vacina',
  templateUrl: './cadastrar-vacina.component.html',
  styleUrls: ['./cadastrar-vacina.component.scss']
})
export class CadastrarVacinaComponent implements OnInit {

  // displayedColumns: string[] = ['nome', 'fabricante', 'numeroRegistro', 'recebimento'];
  // dataSource = ELEMENT_DATA;

  listaVacinas: Array<Vacina> = [];

  loading = false;

  constructor(
    private cadastrarVacinaService: CadastrarVacinaService,
    private modal: NgbModal,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getlistaVacina().then();
  }

  async getlistaVacina(): Promise<any> {

    this.loading = true;

    const response = await this.cadastrarVacinaService.httpGetVacinas();

    if (response['status'] === 200) {
      this.listaVacinas = [... response['body']];
    }
    else {
      const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
      alertModal.componentInstance.message = 'Não foi possível carregar a lista de vacinas.';
    }

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  cadastrarVacina(): void {
    const modal = this.modal.open(VacinaModalComponent, {size: 'lg'});
    modal.componentInstance.typeModal = 'new';
    modal.result.then(r => {
      let mensagem = '';

      if (r === 'ok') {
        mensagem = 'Vacina cadastrada com sucesso!';
      }
      else if (r === 'error') {
        mensagem = 'Erro do sistema ao tentar cadastrar a vacina.';
      }

      if (mensagem !== '') {
        const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
        alertModal.componentInstance.message = mensagem;
        alertModal.result.then(async result => {
          await this.getlistaVacina();
        });
      }
    });
  }

  async acao(acao: string, idVacina: number): Promise<any> {
    if (acao === 'delete') {
      const confirmModal = this.modal.open(ConfirmModalComponent, {size: 'md'});
      confirmModal.result.then(async result => {

        if (result === 'ok') {
          const response = await this.cadastrarVacinaService.httpDeleteVacinas(idVacina);

          if (response['status'] === 200) {
            const retornoAlert = await this.appService.alertModal('Vacina deletada com sucesso !', true);
            if (retornoAlert) {
              await this.getlistaVacina();
            }
          }
          else {
            await this.appService.alertModal('Não foi possível deletar a vacina.', false);
          }
        }
      });
    }
    else if (acao === 'edit') {
      const response = await this.cadastrarVacinaService.httpGetVacinaId(idVacina);

      if (response['status'] === 200) {
        const modal = this.modal.open(VacinaModalComponent, {size: 'lg'});
        modal.componentInstance.typeModal = 'update';
        modal.componentInstance.idVacina = Number(idVacina);
        modal.componentInstance.dadosVacina = response['body'];

        modal.result.then(r => {
          let mensagem = '';

          if (r === 'ok') {
            mensagem = 'Vacina atualizada com sucesso!';
          }
          else if (r === 'error') {
            mensagem = 'Erro do sistema ao tentar cadastrar a vacina.';
          }

          if (mensagem !== '') {
            const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
            alertModal.componentInstance.message = mensagem;
            alertModal.result.then(async result => {
              await this.getlistaVacina();
            });
          }
        });
      }

    }
  }

}
