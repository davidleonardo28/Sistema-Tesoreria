import { Component} from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { Usuario } from 'src/app/entity/Usuario';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})
export class Grafico1Component {

  usuario: Usuario = new Usuario();
  masculino: number;
  femenino: number;
  otros: number;
  
  constructor(public service: ListaUsiarioService) {}

  ngOnInit(): void {
    this.service.generoM().subscribe(impuesto => {
      this.masculino = impuesto;
     
      this.service.generoF().subscribe(impuesto => {
        this.femenino = impuesto;
        
        this.service.generoOtro().subscribe(impuesto => {
          this.otros = impuesto;
          this.doughnutChartData= [ [this.femenino, this.masculino, this.otros] ];
        })
      })
    })
    
  }
  doughnutChartLabels: Label[] = ['Femenino', 'Masculino', 'Otros'];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartData = [  ];

}

