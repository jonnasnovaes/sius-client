import { Component, OnInit } from '@angular/core';
import {Vacina} from '../../core/interfaces/Vacina';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CadastrarVacinaService} from '../cadastrar-vacina/cadastrar-vacina.service';
import {SolicitarVacinaService} from '../solicitar-vacina/solicitar-vacina.service';
import {AppService} from '../../services/app.service';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-registrar-lote',
  templateUrl: './registrar-lote.component.html',
  styleUrls: ['./registrar-lote.component.scss']
})
export class RegistrarLoteComponent implements OnInit {

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

      // if (vacinasSolicitadas['body'].length === 0) {
      //   this.listaVacinas = [... response['body']];
      // }
      // else {
      //   console.log(response['body']);
      //   console.log(vacinasSolicitadas['body']);
      //   this.listaVacinas = await this.filterListVacina([... response['body']], vacinasSolicitadas['body']);
      // }

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
    confirmModal.componentInstance.message = `Deseja registrar o lote da vacina ${vacina.nome} ?`;
    confirmModal.result.then(async result => {

      if (result === 'ok') {
        console.log(vacina);
        const response = await this.solicitarVacina.httpPutSolicitarLoteVacina(vacina, true, true);

        if (response['status'] === 200) {
          const retornoAlert = await this.appService.alertModal(`O lote da vacina ${vacina.nome} foi registrado com sucesso.`, true);
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
        if ((lv.liberado === true && lv.recebido === false)) {
          newListVacina.push(v);
        }
      });
    });
    return [... newListVacina];
  }

}
