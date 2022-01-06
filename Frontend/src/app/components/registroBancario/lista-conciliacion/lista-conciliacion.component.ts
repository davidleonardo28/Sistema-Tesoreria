import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Conciliacion } from 'src/app/entity/Conciliacion';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import {PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);
const pdf = new PdfMakeWrapper;
@Component({
  selector: 'app-lista-conciliacion',
  templateUrl: './lista-conciliacion.component.html',
  styleUrls: ['./lista-conciliacion.component.css']
})
export class ListaConciliacionComponent implements OnInit {

  public listaConciliacion: Conciliacion[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: ListaExtrasService) { 

  }
  
  displayedColumns: string[] = ['id_conciliacion', 'fecha_final', 'saldo_extracto',
  'total_ingresos', 'saldo_final', 'id_cuenta','total_gastos'];
  dataSource = new MatTableDataSource<any>();
  data:any;
  PDFexistente: boolean = false;
  datos:any;
  generarPDF(): void {
    if (!this.PDFexistente) {
      // PDF
      pdf.info({
        title: 'Lista de conciliaciones bancarias',
        subject: 'Se mostrara la cantida de Lista de conciliaciones bancarias que existen en la base de datos'
      });
      pdf.add(new Txt('Reportes Lista de conciliaciones bancarias').alignment('center').bold().fontSize(24).end)
      const tabla = [this.TablaPDF]

      this.datos.forEach(i => {
        let fila = []
        for (let key in i) {
            fila.push(i[key])

        }
        tabla.push(fila)
      })
      pdf.add(new Table(tabla).widths(['auto', 'auto', 'auto', 'auto', 'auto', 'auto','auto']).alignment('center').fontSize(20)
        .margin(5).end)
      pdf.pageOrientation("landscape")
      pdf.footer(new Txt('SRP technology').color('blue').fontSize(18).alignment('center').end)
      pdf.create().open();
      this.PDFexistente = true;
    }else {
      alert("Porfavor recargue la pagina si desea intentar descargar el documento de nuevo.")
    }
  }
   
  TablaPDF: string[] = ['id coinciliación', 'Fecha final',
    'Saldo extracto', 'Ingresos totales', 'Saldo final',
    'ID cuenta', 'Total Gastos'];

  ngOnInit(): void {
    this.service.getConciliacion().subscribe(Conciliacion => {
      this.dataSource = new MatTableDataSource(Conciliacion);
      this.datos = Conciliacion;
    })
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }
  

}
