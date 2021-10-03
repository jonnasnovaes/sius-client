import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrarVacinacao, Vacina} from '../../../core/interfaces/Vacina';
import {RegistrarVacinacaoService} from '../registrar-vacinacao.service';
import {CadastrarVacinaService} from '../../cadastrar-vacina/cadastrar-vacina.service';
import {AlertModalComponent} from '../../../core/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registrar-vacinacao-modal',
  templateUrl: './registrar-vacinacao-modal.component.html',
  styleUrls: ['./registrar-vacinacao-modal.component.scss']
})
export class RegistrarVacinacaoModalComponent implements OnInit {

  idadeMaxima = Array(120);

  loading = false;

  form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    numeroSus: new FormControl('', Validators.required),
    idade: new FormControl('', Validators.required),
    vacina: new FormControl('', Validators.required),
    dataVacinacao: new FormControl('', Validators.required),
  });

  listaVacina: Array<Vacina> = [];

  constructor(
    private activeModal: NgbActiveModal,
    private registrarVacinacaoService: RegistrarVacinacaoService,
    private cadastrarVacinaService: CadastrarVacinaService,
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
    this.getVacinas().then();
  }

  async getVacinas(): Promise<any> {
    const response = await this.cadastrarVacinaService.httpGetVacinas();
    if (response['status'] === 200) {
      this.listaVacina = [... response['body']];
    }
    else {
      const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
      alertModal.componentInstance.message = 'Não foi possível carregar a lista de vacinas para um novo registro';
    }
  }

  async registrarVacinacao(): Promise<any> {
    this.loading = true;

    const data = this.form.get('dataVacinacao').value;
    const dataSplit = data.split('-');

    const novoRegistroVacinacao: RegistrarVacinacao = {
      nome: this.form.get('nome').value,
      numeroSus: this.form.get('numeroSus').value,
      idade: Number(this.form.get('idade').value),
      vacina: this.form.get('vacina').value,
      dataVacinacao: dataSplit[2] + '/' + dataSplit[1] + '/' + dataSplit[0],
    };

    const response = await this.registrarVacinacaoService.httpPostRegistroVacinacao(novoRegistroVacinacao);

    if (response.status === 200) {
      this.closeModal('ok');
    }
    else {
      this.closeModal('error');
    }
    this.loading = false;
  }

  closeModal(botaoSelecionado: string): void {
    this.activeModal.close(botaoSelecionado);
  }

}
