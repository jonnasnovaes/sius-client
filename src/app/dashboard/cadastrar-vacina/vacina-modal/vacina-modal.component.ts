import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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

  nomeArquivoBula = '';
  arquivoBula = null;
  @ViewChild('inputArquivoBula') inputArquivoBula: ElementRef;

  form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    fabricante: new FormControl('', Validators.required),
    dataFabricacao: new FormControl('', Validators.required),
    numeroRegistro: new FormControl('', Validators.required),
  });

  loading = false;

  constructor(
    private cadastrarVacinaService: CadastrarVacinaService,
    private activeModal: NgbActiveModal,
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

      this.nomeArquivoBula = this.dadosVacina.bula;
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

    // const novaVacina = {
    //   nome: this.form.get('nome').value,
    //   fabricante: this.form.get('fabricante').value,
    //   dataFabricacao: this.form.get('dataFabricacao').value,
    //   numeroRegistro: Number(this.form.get('numeroRegistro').value),
    // };

    const formData = new FormData();
    formData.append('nome', this.form.get('nome').value);
    formData.append('fabricante', this.form.get('fabricante').value);
    formData.append('dataFabricacao', this.form.get('dataFabricacao').value);
    formData.append('numeroRegistro', this.form.get('numeroRegistro').value);
    formData.append('bula', this.arquivoBula);

    const response = await this.cadastrarVacinaService.httpPostVacinas(formData);

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

    // const novaVacina = {
    //   id: this.idVacina,
    //   nome: this.form.get('nome').value,
    //   fabricante: this.form.get('fabricante').value,
    //   dataFabricacao: this.form.get('dataFabricacao').value,
    //   numeroRegistro: Number(this.form.get('numeroRegistro').value),
    // };

    const formData = new FormData();
    formData.append('id', String(this.idVacina));
    formData.append('nome', this.form.get('nome').value);
    formData.append('fabricante', this.form.get('fabricante').value);
    formData.append('dataFabricacao', this.form.get('dataFabricacao').value);
    formData.append('numeroRegistro', this.form.get('numeroRegistro').value);
    formData.append('bula', this.arquivoBula);

    const response = await this.cadastrarVacinaService.httpPutVacina(formData);

    if (response.status === 200) {
      this.closeModal('ok');
    }
    else {
      this.closeModal('error');
    }
  }

  setUpperCase(): void {

    const nome = this.form.get('nome').value;
    const fabricante = this.form.get('fabricante').value;

    this.form.patchValue({
      nome: nome.toUpperCase(),
      fabricante: fabricante.toUpperCase()
    });
  }

  addArquivoBula(): void {
    const event = new MouseEvent('click', {bubbles: true});
    this.inputArquivoBula.nativeElement.dispatchEvent(event);
  }
  handleFileInput(arquivo: FileList): void {
    this.arquivoBula = arquivo.item(0);
    this.nomeArquivoBula = arquivo.item(0).name;
  }

  resetArquivoBula(): void {
    this.arquivoBula = null;
    this.nomeArquivoBula = '';
  }

}
