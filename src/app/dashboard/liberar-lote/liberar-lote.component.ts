import { Component, OnInit } from '@angular/core';
import {Vacina} from '../../core/interfaces/Vacina';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {LiberarLoteService} from './liberar-lote.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';
import {AppService} from '../../services/app.service';


@Component({
  selector: 'app-liberar-lote',
  templateUrl: './liberar-lote.component.html',
  styleUrls: ['./liberar-lote.component.scss']
})
export class LiberarLoteComponent implements OnInit {

  listaVacinas: Array<Vacina> = [];
  listaVacinasFilter: Array<Vacina> = [];

  loading = false;

  constructor(
    private modal: NgbModal,
    private liberarLoteService: LiberarLoteService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getlistaLotes().then();
  }

  async getlistaLotes(): Promise<any> {

    this.loading = true;

    const response = await this.liberarLoteService.httpGetLotes();

    if (response['status'] === 200) {
      this.listaVacinas = [... response['body']];
      this.listaVacinasFilter = [... this.listaVacinas];
    }
    else {
      const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
      alertModal.componentInstance.message = 'Não foi possível carregar a lista de lotes de vacinas.';
    }

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  acao(vacina) {
    const confirmModal = this.modal.open(ConfirmModalComponent, {size: 'md'});
    confirmModal.componentInstance.message = `Deseja liberar o lote da vacina ${vacina.nome} ?`;
    confirmModal.result.then(async result => {

      if (result === 'ok') {
        const response = await this.liberarLoteService.httpPostLotes(vacina.id);

        if (response['status'] === 200) {
          const retornoAlert = await this.appService.alertModal(`Lote da vacina ${vacina.nome} liberado para envio.`, true);
          if (retornoAlert) {
            await this.getlistaLotes();
          }
        }
        else {
          await this.appService.alertModal('Não foi possível liberar o lote da vacina.', false);
        }
      }
    });
  }

  search($event): void {
    const value = $event.target.value.toUpperCase();

    if (value === '') {
      this.listaVacinasFilter = [... this.listaVacinas];
    }
    else {
      const newListVacinas: Array<Vacina> = [];

      this.listaVacinas.map(v => {
        if (v.nome.match(value)) {
          newListVacinas.push(v);
        }
      });

      this.listaVacinasFilter = [... newListVacinas];
    }
  }

}
