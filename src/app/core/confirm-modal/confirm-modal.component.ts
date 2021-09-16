import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  message = 'Tem certeza que dejesa continuar ?';

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(acao) {
    this.activeModal.close(acao);
  }

}
