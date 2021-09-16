import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CadastrarVacinaService} from '../cadastrar-vacina.service';
import {Vacina} from '../../../core/interfaces/Vacina';

@Component({
  selector: 'app-cadastrar-modal',
  templateUrl: './vacina-modal.component.html',
  styleUrls: ['./vacina.modal.component.scss']
})
export class VacinaModalComponent implements OnInit {

  @Input() dadosVacina: Vacina;
  @Input() idVacina: number;
  @Input() typeModal: string;

  titulo: string;

  form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    fabricante: new FormControl('', Validators.required),
    dataFabricacao: new FormControl('', Validators.required),
    numeroRegistro: new FormControl('', Validators.required),
  });

  loading = false;

  constructor(
    private cadastrarVacinaService: CadastrarVacinaService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    if (this.typeModal === 'update') {
      this.titulo = 'Atualizar';

      this.form.patchValue({
        nome: this.dadosVacina.nome,
        fabricante: this.dadosVacina.fabricante,
        dataFabricacao: this.dadosVacina.dataFabricacao,
        numeroRegistro: this.dadosVacina.numeroRegistro,
      });
    }
    else {
      this.titulo = 'Cadastrar';
    }
  }

  closeModal(botaoSelecionado: string): void {
    this.activeModal.close(botaoSelecionado);
  }

  async cadastrarVacina(): Promise<any> {
    this.loading = true;

    const novaVacina = {
      nome: this.form.get('nome').value,
      fabricante: this.form.get('fabricante').value,
      dataFabricacao: this.form.get('dataFabricacao').value,
      numeroRegistro: Number(this.form.get('numeroRegistro').value),
    };

    const response = await this.cadastrarVacinaService.httpPostVacinas(novaVacina);

    if (response.status === 200) {
      this.closeModal('ok');
    }
    else {
      this.closeModal('error');
    }
    // loading = false;
  }

  async atualizarVacina(): Promise<any> {
    this.loading = true;

    const novaVacina = {
      id: this.idVacina,
      nome: this.form.get('nome').value,
      fabricante: this.form.get('fabricante').value,
      dataFabricacao: this.form.get('dataFabricacao').value,
      numeroRegistro: Number(this.form.get('numeroRegistro').value),
    };

    const response = await this.cadastrarVacinaService.httpPutVacina(novaVacina);

    if (response.status === 200) {
      this.closeModal('ok');
    }
    else {
      this.closeModal('error');
    }
  }

}
