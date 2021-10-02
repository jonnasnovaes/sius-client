import { Component, OnInit } from '@angular/core';
import {Vacina, VacinaEstoque} from '../../core/interfaces/Vacina';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';
import {AppService} from '../../services/app.service';
import {CadastrarVacinaService} from '../cadastrar-vacina/cadastrar-vacina.service';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VerificarEstoqueService} from './verificar-estoque.service';

@Component({
  selector: 'app-verificar-estoque',
  templateUrl: './verificar-estoque.component.html',
  styleUrls: ['./verificar-estoque.component.scss']
})
export class VerificarEstoqueComponent implements OnInit {

  loading = false;

  listaVacinas: Array<VacinaEstoque> = [];

  constructor(
    private appService: AppService,
    private cadastrarVacinaService: CadastrarVacinaService,
    private verificarEstoqueService: VerificarEstoqueService,
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
    this.getlistaVacina().then();
  }

  async getlistaVacina(): Promise<any> {

    this.loading = true;

    const response = await this.verificarEstoqueService.httpGetEstoqueVacina();

    if (response['status'] === 200) {

      this.listaVacinas = [... response['body']];

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

  acao(vacina: VacinaEstoque) {
    const confirmModal = this.modal.open(ConfirmModalComponent, {size: 'md'});
    confirmModal.componentInstance.message = `Deseja dar baixa em uma unidade da vacina ${vacina.nome} ?`;
    confirmModal.result.then(async result => {

      if (result === 'ok') {
        const response = await this.verificarEstoqueService.httpPutEstoqueVacina(vacina);

        if (response['status'] === 200) {
          const retornoAlert = await this.appService.alertModal(`Unidade da vacina ${vacina.nome} registrada com sucesso.`, true);
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

  // async filterListVacina(listaVacinaCompleta, listaVacinasSolicitadas): Promise<Array<Vacina>> {
  //   let newListVacina: Array<Vacina> = [];
  //   console.log(listaVacinasSolicitadas);
  //   console.log(listaVacinaCompleta);
  //   listaVacinaCompleta.map(v => {
  //     listaVacinasSolicitadas.map(lv => {
  //       const itemNewListExist = newListVacina.find(nlv => nlv.id === v.id);
  //       console.log(itemNewListExist);
  //       if (lv.liberado === true && lv.recebido === true && itemNewListExist === undefined && v.id === lv.idVacina) {
  //         newListVacina.push(v);
  //       }
  //     });
  //   });
  //   return [... newListVacina];
  // }

}
