import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AlertModalComponent} from '../../core/alert-modal/alert-modal.component';
import {RegistrarVacinacaoService} from '../registrar-vacinacao/registrar-vacinacao.service';
import {RegistrarVacinacao} from '../../core/interfaces/Vacina';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-relatorio-dashboard',
  templateUrl: './relatorio-dashboard.component.html',
  styleUrls: ['./relatorio-dashboard.component.scss']
})
export class RelatorioDashboardComponent implements OnInit {

  constructor(
    private modal: NgbModal,
    private registrarVacinacaoService: RegistrarVacinacaoService,
    private cd: ChangeDetectorRef
  ) { }

  chart1 = {
    title: '',
    type: 'PieChart',
    data: [
      ['Crianças', 0],
      ['Jovens', 0],
      ['Adultos', 0],
      ['Idosos', 0],
    ],
    // columnNames: ['London', 'New York', 'Paris', 'Berlin', 'Kairo'],
    options: {
      colors: ['#248FBE', '#007462', '#F6A400', '#103F8F', '#F44336'],
      is3D: false,
      pieHole: 0.4
    },
    height: 280,
    width: ((window.screen.width - 500) / 2)
  };

  chart2 = {
    title: '',
    type: 'Bar',
    data: [
      ['Crianças', 0],
      ['Jovens', 0],
      ['Adultos', 0],
      ['Idosos', 0],
    ],
    // columnNames: ['London', 'New York', 'Paris', 'Berlin', 'Kairo'],
    options: {
      // colors: ['#FBA61C', '#0284CA', '#002A64', '#A2D1DE', '#585858'],
      colors: ['#103F8F', '#0284CA', '#002A64', '#A2D1DE', '#585858'],
      is3D: false,
      pieHole: 0.4
    },
    height: 270,
    width: ((window.screen.width - 500) / 2)
  };

  listaRegistro: Array<RegistrarVacinacao> = [];

  listaRegistroMes: Array<RegistrarVacinacao> = [];
  listaRegistroAno: Array<RegistrarVacinacao> = [];

  listaRegistroMesFilter: Array<RegistrarVacinacao> = [];
  listaRegistroAnoFilter: Array<RegistrarVacinacao> = [];

  loading = false;

  pageMes = 1;
  pageAno = 1;
  pageSize = 10;

  ngOnInit(): void {
    this.getlistaRegistroVacina().then();
  }

  async getlistaRegistroVacina(): Promise<any> {

    this.loading = true;

    const response = await this.registrarVacinacaoService.httpGetRegistroVacinacao();

    if (response['status'] === 200) {
      this.listaRegistro = [... response['body']];

      if (this.listaRegistro.length !== 0) {
        const mesAtual = new Date().getMonth() + 1;
        const anoAtual = new Date().getFullYear();

        this.listaRegistro.map(lr => {
          const dataVacinacaoSplit = lr.dataVacinacao.split('/');

          if (Number(dataVacinacaoSplit[2].split(' ')[0]) === anoAtual && Number(dataVacinacaoSplit[1]) === mesAtual) {

            this.listaRegistroMes.push(lr);

            if (lr.idade <= 12) {
              this.chart1.data[0][1] = Number(this.chart1.data[0][1]) + 1;
            } else if (lr.idade > 12 && lr.idade <= 18) {
              this.chart1.data[1][1] = Number(this.chart1.data[1][1]) + 1;
            } else if (lr.idade > 18 && lr.idade <= 64) {
              this.chart1.data[2][1] = Number(this.chart1.data[2][1]) + 1;
            } else {
              this.chart1.data[3][1] = Number(this.chart1.data[3][1]) + 1;
            }
          }

          if (Number(dataVacinacaoSplit[2].split(' ')[0]) === anoAtual) {
            this.listaRegistroAno.push(lr);

            if (lr.idade <= 12) {
              this.chart2.data[0][1] = String(Number(this.chart2.data[0][1]) + 1);
            } else if (lr.idade > 12 && lr.idade <= 18) {
              this.chart2.data[1][1] = String(Number(this.chart2.data[1][1]) + 1);
            } else if (lr.idade > 18 && lr.idade <= 64) {
              this.chart2.data[2][1] = String(Number(this.chart2.data[2][1]) + 1);
            } else {
              this.chart2.data[3][1] = String(Number(this.chart2.data[3][1]) + 1);
            }
          }

        });
      }

      this.listaRegistroMesFilter = [... this.listaRegistroMes];
      this.listaRegistroAnoFilter = [... this.listaRegistroAno];
      this.refreshPageMes();
      this.refreshPageAno();

    }
    else {
      const alertModal = this.modal.open(AlertModalComponent, {size: 'md'});
      alertModal.componentInstance.message = 'Não foi possível carregar a lista de vacinas registradas.';
    }

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }


  refreshPageMes(): void {
    this.listaRegistroMesFilter = this.listaRegistroMes.map((country, i) => ({id: i + 1, ...country}))
      .slice((this.pageMes - 1) * this.pageSize, (this.pageMes - 1) * this.pageSize + this.pageSize);
  }

  refreshPageAno(): void {
    this.listaRegistroAnoFilter = this.listaRegistroAno.map((country, i) => ({id: i + 1, ...country}))
      .slice((this.pageAno - 1) * this.pageSize, (this.pageAno - 1) * this.pageSize + this.pageSize);
  }

  // calcWidthChartLine(): number {
  //   return (window.screen.width - 294);
  // }

}
