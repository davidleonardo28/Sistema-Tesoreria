import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/entity/Movimiento';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovimientoService } from 'src/app/service/MovimientoService';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import { Beneficiario } from 'src/app/entity/Beneficiario';
import { Impuesto } from 'src/app/entity/Impuesto';
import { Concepto } from 'src/app/entity/Concepto';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { MetodoPago } from 'src/app/entity/MetodoPago';
import { Retencion } from 'src/app/entity/Retencion';
import {PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);
const pdf = new PdfMakeWrapper;

@Component({
  selector: 'app-ver-movimientos',
  templateUrl: './ver-movimientos.component.html',
  styleUrls: ['./ver-movimientos.component.css']
})
export class VerMovimientosComponent implements OnInit {
  VerMovimientos: Movimiento = new Movimiento();
  category: string;
  title: string;
  public listaBenef: Beneficiario[] = [];
  public listaImpuesto: Impuesto[] = [];
  public listaConcepto: Concepto[] = [];
  public listaCuenta: CuentaBancaria[] = [];
  public listaMetodo: MetodoPago[] = [];
  public listaRetencion: Retencion[] = [];
  public VerMovform: FormGroup;
  PDFexistente: boolean = false;
  datosMov: any;
  datosBenef: any;
  datosPago: any;
  datosImp: any;
  datosReten: any;
  datosCuenta: any;
  datosConcepto: any;

  generarPDF(): void {
    if (!this.PDFexistente) {
      // PDF
      pdf.info({
        title: 'Reporte de Movimientos registrados',
        subject: 'Se mostrara la cantida de usuarios que existen en la base de datos'
      });

      pdf.add(new Txt('Reportes de Movimientos').alignment('center').bold().fontSize(24).end)
      const tabla = [this.TablaMov]

      this.datosMov.forEach(i => {
        let fila = []
        for (let key in i) {
            if (key != "estado_conciliacion" && key != "valor_concepto")
              fila.push(i[key])
        }
        tabla.push(fila)
        
      })
      // witdths funciona con la cantidad de columnas
      pdf.add(new Table(tabla).widths(['auto', 'auto', 'auto', 'auto', 'auto', 'auto',
       'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto']).fontSize(10).alignment('center')
        .margin(5).end)
      pdf.pageOrientation("landscape")
      pdf.footer(new Txt('SRP technology').color('blue').fontSize(18).alignment('center').end)
      pdf.create().open();
      this.PDFexistente = true;
    }else {
      alert("Porfavor recargue la pagina si desea intentar descargar el documento de nuevo.")
    }


  }
   
   constructor(private router: Router, private serviceMov: MovimientoService, private service: ListaExtrasService) {

  }


  displayedColumns: string[] = ['id_movim', 'fecha_movim',
    'num_pago', 'cantidad_movim',
    'total_movim', 'notas_info', 'notas_concepto', 'id_benef', 'id_pago',
    'id_concepto', 'id_cuenta', 'id_impuesto', 'id_retencion', 'id_tipo_mov'];

  dataSource = new MatTableDataSource<any>();

  TablaMov: string[] = ['id', 'Fecha',
    'Número de pago', 'Cantidad', 'Total',
    'Notas información', 'Notas Concepto','id beneficiario','id pago','id concepto'
    ,'id cuenta','id impuesto', 'id retencion', 'id tipo mov'];

  ngOnInit(): void {

    this.serviceMov.getlistMovimientos().subscribe((movimientos) => {
      this.dataSource = new MatTableDataSource(movimientos);
      this.datosMov = movimientos;
    });

    this.service.getBeneficiario().subscribe(benef => {
      this.listaBenef = benef;
      
    })

    this.service.getImpuesto().subscribe(impuesto => {
      this.listaImpuesto = impuesto;
     
    })

    this.service.getMetodoPago().subscribe(pago => {
      this.listaMetodo = pago;
      
    })

    this.service.getRetencion().subscribe(retencion => {
      this.listaRetencion = retencion;
      
    })

    this.service.getCuenta().subscribe(cuenta => {
      this.listaCuenta = cuenta;
     
    })

    this.service.getConcepto().subscribe(cuenta => {
      this.listaConcepto = cuenta;
      
    })
    
  }

  getBenef(num: number): String { return this.listaBenef[num - 1].nombre_benef }

  getImpuesto(num: number): String { return this.listaImpuesto[num - 1].nombre_imp }

  getMetodoPago(num: number): String { return this.listaMetodo[num - 1].nombre_pago }

  getRetencion(num: number): String { return this.listaRetencion[num - 1].nombre_retr }

  getCuenta(num: number): String { return this.listaCuenta[num - 1].num_cuenta }

  getConcepto(num: number): String { return this.listaConcepto[num - 1].nombre_concepto }

  tipo(num: number): String {
    if (num == 1) {
      return "Ingreso";
    } else {
      return "Egreso";
    }
  }



}
