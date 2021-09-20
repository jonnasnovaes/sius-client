import { Component, OnInit } from '@angular/core';
import {Vacina} from '../../core/interfaces/Vacina';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {CadastrarVacinaService} from '../cadastrar-vacina/cadastrar-vacina.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';


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
    private cadastrarVacinaService: CadastrarVacinaService
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

  acao(vacina: Vacina) {
    const confirmModal = this.modal.open(ConfirmModalComponent, {size: 'md'});
    confirmModal.componentInstance.message = `Deseja solicitar um novo lote da vacina ${vacina.nome} ?`;
    confirmModal.result.then(async result => {

      if (result === 'ok') {
        // const response = await this.cadastrarVacinaService.httpDeleteVacinas(idVacina);

        // if (response['status'] === 200) {
        //   const retornoAlert = await this.appService.alertModal('Vacina deletada com sucesso !', true);
        //   if (retornoAlert) {
        //     await this.getlistaVacina();
        //   }
        // }
        // else {
        //   await this.appService.alertModal('Não foi possível deletar a vacina.', false);
        // }
      }
    });
  }

}
