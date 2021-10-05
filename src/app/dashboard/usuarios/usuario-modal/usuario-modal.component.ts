import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegistrarVacinacaoService} from '../../registrar-vacinacao/registrar-vacinacao.service';
import {CadastrarVacinaService} from '../../cadastrar-vacina/cadastrar-vacina.service';
import {Usuario} from '../../../core/interfaces/Usuario';
import {UsuariosService} from '../usuarios.service';
import {Vacina} from '../../../core/interfaces/Vacina';

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.scss']
})
export class UsuarioModalComponent implements OnInit {

  @Input() dadosUsuario: Usuario;
  @Input() idUsuario: number;
  @Input() typeModal: string;

  loading = false;

  messageError = false;

  form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    perfil: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    cSenha: new FormControl('', Validators.required),
  });

  titulo: string;

  constructor(
    private activeModal: NgbActiveModal,
    private modal: NgbModal,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    if (this.typeModal === 'update') {
      this.titulo = 'Atualizar';

      this.form.patchValue({
        nome: this.dadosUsuario.nome,
        email: this.dadosUsuario.email,
        perfil: this.dadosUsuario.perfil,
      });
    }
    else {
      this.titulo = 'Cadastrar';
    }
  }

  closeModal(botaoSelecionado: string): void {
    this.activeModal.close(botaoSelecionado);
  }

  async registrarUsuario() {
    this.loading = true;

    const novoUsuario: Usuario = {
       nome: this.form.get('nome').value,
       email: this.form.get('email').value,
        senha: this.form.get('senha').value,
       perfil: Number(this.form.get('perfil').value),
    };

    const response = await this.usuarioService.httpPostUsuario(novoUsuario);

    if (response.status === 200) {
      this.closeModal('ok');
    }
    else {
      this.closeModal('error');
    }
    this.loading = false;
  }

  async atualizarUsuario() {
    this.loading = true;

    const usuarioAtualizado: Usuario = {
      id: this.idUsuario,
      nome: this.form.get('nome').value,
      email: this.form.get('email').value,
      senha: this.form.get('senha').value,
      perfil: Number(this.form.get('perfil').value),
    };

    const response = await this.usuarioService.httpPutUsuario(usuarioAtualizado);

    if (response.status === 200) {
      this.closeModal('ok');
    }
    else {
      this.closeModal('error');
    }
  }

  verificaSenha() {
    if (this.form.get('senha').value !== this.form.get('cSenha').value) {
      this.messageError = true;
    }
    else {
      this.messageError = false;
    }
  }


}
