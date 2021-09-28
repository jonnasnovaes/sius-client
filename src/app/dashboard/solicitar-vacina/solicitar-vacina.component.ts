import { Component, OnInit } from '@angular/core';
import {Vacina} from '../../core/interfaces/Vacina';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {CadastrarVacinaService} from '../cadastrar-vacina/cadastrar-vacina.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';
import {SolicitarVacinaService} from './solicitar-vacina.service';
import {AppService} from '../../services/app.service';


@Component({
  selector: 'app-solicitar-vacina',
  templateUrl: './solicitar-vacina.component.html',
  styleUrls: ['./solicitar-vacina.component.scss']
})
export class SolicitarVacinaComponent implements OnInit {

  loading = false;

  listaVacinas: Array<Vacina> = [];

  constructor(
    private modal: NgbModal,
    private cadastrarVacinaService: CadastrarVacinaService,
    private solicitarVacina: SolicitarVacinaService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getlistaVacina().then();
  }

  async getlistaVacina(): Promise<any> {

    this.loading = true;

    const response = await this.cadastrarVacinaService.httpGetVacinas();

    if (response['status'] === 200) {
      const vacinasSolicitadas = await this.solicitarVacina.httpGetSolicitarLoteVacina();

      console.log(vacinasSolicitadas);

      this.listaVacinas = await this.filterListVacina([... response['body']], vacinasSolicitadas['body']);

      this.loading = false;

    }
    else {
      const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
      alertModal.componentInstance.message = 'Não foi possível carregar a lista de vacinas.';
    }

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  acao(vacina: Vacina) {
    const confirmModal = this.modal.open(ConfirmModalComponent, {size: 'md'});
    confirmModal.componentInstance.message = `Deseja solicitar um novo lote da vacina ${vacina.nome} ?`;
    confirmModal.result.then(async result => {

      if (result === 'ok') {
        const response = await this.solicitarVacina.httpPutSolicitarLoteVacina(vacina, false, false);

        if (response['status'] === 200) {
          const retornoAlert = await this.appService.alertModal(`Lote da vacina ${vacina.nome} solicitado com sucesso.`, true);
          if (retornoAlert) {
            await this.getlistaVacina();
          }
        }
        else {
          await this.appService.alertModal(response['error'].detail, false);
        }
      }
    });
  }

  async filterListVacina(listaVacinaCompleta, listaVacinasSolicitadas): Promise<Array<Vacina>> {
    let newListVacina: Array<Vacina> = [];
    listaVacinaCompleta.map(v => {
      listaVacinasSolicitadas.map(lv => {
        if ((lv.liberado === true && lv.recebido === true)) {
          newListVacina.push(v);
        }
      });
    });
    return [... newListVacina];
  }

}
