import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);
const pdf = new PdfMakeWrapper;

@Component({
  selector: 'app-cuentas-bancarias-dos',
  templateUrl: './cuentas-bancarias-dos.component.html',
  styleUrls: ['./cuentas-bancarias-dos.component.css']
})
export class CuentasBancariasDOSComponent implements OnInit {
  datos: any;
  PDFexistente: boolean = false;
  public listaCuenta: CuentaBancaria[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: ListaExtrasService) {

  }
  generarPDF(): void {
    if (!this.PDFexistente) {
      // PDF
      pdf.info({
        title: 'Reporte de Cuentas Bancarias',
        subject: 'Se mostrara la cantida de Cuentas Bancarias que existen en la base de datos'
      });

      pdf.add(new Txt('Reportes de Cuentas Bancarias').alignment('center').bold().fontSize(24).end)
      const tabla = [this.TablaPdf]

      this.datos.forEach(i => {
        let fila = []
        for (let key in i) {
          if (key != "notas_adicionales" && key != "id_tipo_cuenta" && key != "id_banco")
            fila.push(i[key])

        }
        tabla.push(fila)
      })
      pdf.add(new Table(tabla).widths(['auto', 'auto', 'auto', 'auto', 'auto']).fontSize(20).alignment('center')
        .margin(5).end)
      pdf.pageOrientation("landscape")
      pdf.footer(new Txt('SRP technology').color('blue').fontSize(18).alignment('center').end)
      pdf.create().open();
      this.PDFexistente = true;
    }else {
      alert("Porfavor recargue la pagina si desea intentar descargar el documento de nuevo.")
    }


  }
  displayedColumns: string[] = ['id_cuenta', 'num_cuenta', 'nombre_cuenta',
    'saldo_cuenta', 'pais_cuenta', 'acciones'];
  dataSource = new MatTableDataSource<any>();

  TablaPdf: string[] = ['id', 'Numero de cuenta', 'Saldo', 'Pais',
  'Nombre Cuenta'];

  ngOnInit(): void {
    this.service.getCuenta().subscribe(cuenta => {
      this.dataSource = new MatTableDataSource(cuenta);
      this.datos = cuenta;
    })
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }

}
