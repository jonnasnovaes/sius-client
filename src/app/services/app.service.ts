import { Injectable } from '@angular/core';
import {AlertModalComponent} from '../core/alert-modal/alert-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private modal: NgbModal
  ) { }

  async alertModal(mensagem: string, retornarAcao: boolean): Promise<any> {
    const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
    alertModal.componentInstance.message = mensagem;

    return await alertModal.result.then(r => {
      return retornarAcao;
    });

  }
}
