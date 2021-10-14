import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../../core/interfaces/Usuario";
import {AuthService} from "../../../services/auth.service";
import {VacinaEstoque} from "../../../core/interfaces/Vacina";

@Component({
  selector: 'app-editar-estoque-modal',
  templateUrl: './editar-estoque-modal.component.html',
  styleUrls: ['./editar-estoque-modal.component.scss']
})
export class EditarEstoqueModalComponent implements OnInit {

  vacinaEstoque: VacinaEstoque;

  loading = false;

  form = new FormGroup({
    quantidade: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(botaoSelecionado: string): void {
    this.activeModal.close(botaoSelecionado);
  }

  editarEstoque(): void {
    this.activeModal.close({status: 'ok', quantidade: Number(this.form.get('quantidade').value)});
  }

}
