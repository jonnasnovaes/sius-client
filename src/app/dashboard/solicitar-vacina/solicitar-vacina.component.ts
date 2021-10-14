import { Component, OnInit } from '@angular/core';
import {StatusSolicitacaoVacina, Vacina} from '../../core/interfaces/Vacina';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {CadastrarVacinaService} from '../cadastrar-vacina/cadastrar-vacina.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';
import {SolicitarVacinaService} from './solicitar-vacina.service';
import {AppService} from '../../services/app.service';
import {AuthService} from "../../services/auth.service";
import {Usuario} from "../../core/interfaces/Usuario";


@Component({
  selector: 'app-solicitar-vacina',
  templateUrl: './solicitar-vacina.component.html',
  styleUrls: ['./solicitar-vacina.component.scss']
})
export class SolicitarVacinaComponent implements OnInit {

  loading = false;

  listaVacinas: Array<Vacina> = [];
  vacinasSolicitadas: Array<StatusSolicitacaoVacina>;

  usuario: Usuario;

  constructor(
    private modal: NgbModal,
    private cadastrarVacinaService: CadastrarVacinaService,
    private solicitarVacina: SolicitarVacinaService,
    private appService: AppService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.getDataUser();
    this.getlistaVacina().then();
  }

  async getlistaVacina(): Promise<any> {

    this.loading = true;

    const response = await this.cadastrarVacinaService.httpGetVacinas();

    if (response['status'] === 200) {
      const vacinasSolicitadas = await this.solicitarVacina.httpGetSolicitarLoteVacina();
      this.vacinasSolicitadas = vacinasSolicitadas['body'];

      console.log(this.vacinasSolicitadas);

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
        const itemNewListExist = newListVacina.find(nlv => nlv.id === v.id);

        if (this.usuario.perfil === 1) {
          if (lv.liberado === true && lv.recebido === true && itemNewListExist === undefined && v.id === lv.idVacina) {
            newListVacina.push(v);
          }
        }
        else {
          if (itemNewListExist === undefined && v.id === lv.idVacina) {
            newListVacina.push(v);
          }
        }
      });
    });
    return [... newListVacina];
  }


  statusSolicitacaoVacina(vacina: Vacina, tipoBotao: string): boolean {
    const statusSolicitacaoVacina = this.vacinasSolicitadas.find(v => v.id === vacina.id);

    if (tipoBotao === 'solicitar') {
      if (!statusSolicitacaoVacina.recebido) {
        return true;
      }
    }
    else {
      if (statusSolicitacaoVacina.liberado) {
        return true;
      }
    }
    return false;
  }

  cancelarSolicitacao(vacina: Vacina): void {
    const confirmModal = this.modal.open(ConfirmModalComponent, {size: 'md'});
    confirmModal.componentInstance.message = `Deseja cancelar a solicitação da vacina ${vacina.nome} ?`;
    confirmModal.result.then(async result => {

      if (result === 'ok') {
        const response = await this.solicitarVacina.httpPutSolicitarLoteVacinaCancelado(vacina, true, true);

        if (response['status'] === 200) {
          const retornoAlert = await this.appService.alertModal(`Lote da vacina ${vacina.nome} cancelado com sucesso.`, true);
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

}
