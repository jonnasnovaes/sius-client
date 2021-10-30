import { Component, OnInit } from '@angular/core';
import {VacinaModalComponent} from '../cadastrar-vacina/vacina-modal/vacina-modal.component';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegistrarVacinacaoModalComponent} from './registrar-vacinacao-modal/registrar-vacinacao-modal.component';
import {RegistrarVacinacao} from '../../core/interfaces/Vacina';
import {RegistrarVacinacaoService} from './registrar-vacinacao.service';

@Component({
  selector: 'app-registrar-vacinacao',
  templateUrl: './registrar-vacinacao.component.html',
  styleUrls: ['./registrar-vacinacao.component.scss']
})
export class RegistrarVacinacaoComponent implements OnInit {

  listaRegistro: Array<RegistrarVacinacao> = [];
  listaRegistroFilter: Array<RegistrarVacinacao> = [];

  loading = false;

  constructor(
    private modal: NgbModal,
    private registrarVacinacaoService: RegistrarVacinacaoService
  ) { }

  ngOnInit(): void {
    this.getlistaRegistroVacina().then();
  }

  async getlistaRegistroVacina(): Promise<any> {

    this.loading = true;

    const response = await this.registrarVacinacaoService.httpGetRegistroVacinacao();

    if (response['status'] === 200) {
      const listaRegistroResponse = [... response['body']];
      listaRegistroResponse.map(lr => {
        const dateTimeSplit = lr.dataVacinacao.split(' ');

        this.listaRegistro.push({
          nome: lr.nome,
          numeroSus: lr.numeroSus,
          idade: lr.idade,
          vacina: lr.vacina,
          dataVacinacao: dateTimeSplit[0],
          horaVacinacao: dateTimeSplit[1]
        });

      });

      this.listaRegistroFilter = [... this.listaRegistro];
    }
    else {
      const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
      alertModal.componentInstance.message = 'Não foi possível carregar a lista de vacinas registradas.';
    }

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  novoRegistro(): void {
    const modal = this.modal.open(RegistrarVacinacaoModalComponent, {size: 'lg'});
    modal.result.then(r => {
      let mensagem = '';

      if (r === 'ok') {
        mensagem = 'Registro de vacina realizado com sucesso!';
      }
      else if (r === 'error') {
        mensagem = 'Erro do sistema ao tentar registrar a vacinacao.';
      }

      if (mensagem !== '') {
        const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
        alertModal.componentInstance.message = mensagem;
        alertModal.result.then(async result => {
          await this.getlistaRegistroVacina();
        });
      }
    });
  }

  search($event): void {
    const value = $event.target.value.toUpperCase();

    if (value === '') {
      this.listaRegistroFilter = [... this.listaRegistro];
    }
    else {
      const newListVacinas: Array<RegistrarVacinacao> = [];

      this.listaRegistro.map(v => {
        if (v.nome.toUpperCase().match(value.toUpperCase())) {
          newListVacinas.push(v);
        }
      });

      this.listaRegistroFilter = [... newListVacinas];
    }
  }

}
