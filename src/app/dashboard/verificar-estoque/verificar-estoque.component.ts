import { Component, OnInit } from '@angular/core';
import {Vacina, VacinaEstoque} from '../../core/interfaces/Vacina';
import {ConfirmModalComponent} from '../../core/confirm-modal/confirm-modal.component';
import {AppService} from '../../services/app.service';
import {CadastrarVacinaService} from '../cadastrar-vacina/cadastrar-vacina.service';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VerificarEstoqueService} from './verificar-estoque.service';
import {Usuario} from "../../core/interfaces/Usuario";
import {AuthService} from "../../services/auth.service";
import {EditarEstoqueModalComponent} from "./editar-estoque-modal/editar-estoque-modal.component";

@Component({
  selector: 'app-verificar-estoque',
  templateUrl: './verificar-estoque.component.html',
  styleUrls: ['./verificar-estoque.component.scss']
})
export class VerificarEstoqueComponent implements OnInit {

  usuario: Usuario;

  loading = false;

  listaVacinas: Array<VacinaEstoque> = [];
  listaVacinasFilter: Array<VacinaEstoque> = [];

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private cadastrarVacinaService: CadastrarVacinaService,
    private verificarEstoqueService: VerificarEstoqueService,
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.getDataUser();
    this.getlistaVacina().then();
  }

  async getlistaVacina(): Promise<any> {

    this.loading = true;

    const response = await this.verificarEstoqueService.httpGetEstoqueVacina();

    if (response['status'] === 200) {

      this.listaVacinas = [... response['body']];
      this.listaVacinasFilter = [... this.listaVacinas];

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

  editarEstoque(vacinaEstoque: VacinaEstoque) {
    const confirmModal = this.modal.open(EditarEstoqueModalComponent, {size: 'md'});
    confirmModal.componentInstance.vacinaEstoque = vacinaEstoque;
    confirmModal.result.then(async result => {

      if (result.status === 'ok') {

        vacinaEstoque.quantidade = result.quantidade;

        const response = await this.verificarEstoqueService.httpPutEditarEstoqueVacina(vacinaEstoque);

        if (response['status'] === 200) {
          const retornoAlert = await this.appService.alertModal(`Estoque da vacina ${vacinaEstoque.nome} alterado com sucesso.`, true);
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

  search($event): void {
    const value = $event.target.value.toUpperCase();

    if (value === '') {
      this.listaVacinasFilter = [... this.listaVacinas];
    }
    else {
      const newListVacinas: Array<VacinaEstoque> = [];

      this.listaVacinas.map(v => {
        if (v.nome.toUpperCase().match(value.toUpperCase())) {
          newListVacinas.push(v);
        }
      });

      this.listaVacinasFilter = [... newListVacinas];
    }
  }

  abrirBula(bula: string): void {
    if (bula !== '' && bula !== null) {
      window.open(`http://localhost:5000/bulas/${bula}`);
    }
  }

}
