import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrarVacinacao} from '../../../core/interfaces/Vacina';
import {RegistrarVacinacaoService} from '../registrar-vacinacao.service';

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

  constructor(
    private activeModal: NgbActiveModal,
    private registrarVacinacaoService: RegistrarVacinacaoService
  ) { }

  ngOnInit(): void {
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
