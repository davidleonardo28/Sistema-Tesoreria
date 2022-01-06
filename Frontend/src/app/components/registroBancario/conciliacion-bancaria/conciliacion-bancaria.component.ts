import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Movimiento } from 'src/app/entity/Movimiento';
import { MovimientoService } from 'src/app/service/MovimientoService';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { Conciliacion } from 'src/app/entity/Conciliacion';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-conciliacion-bancaria',
  templateUrl: './conciliacion-bancaria.component.html',
  styleUrls: ['./conciliacion-bancaria.component.css'],
})
export class ConciliacionBancariaComponent implements OnInit {
  contador: number = 0;
  public ConciliacionBancaria: FormGroup;
  public panel2: FormGroup;
  public panel3: FormGroup;
  public saldo_total: number = 0;
  public valorDiferencia: number = 0;
  public valorIngreso: number = 0;
  public valorGasto: number = 0;
  public valorExtracto: number = 0;
  public valorSaldoFinal: number = 0;
  public valorUltimaConc: number = 0;
  public listaCuenta: CuentaBancaria[] = [];
  public listaConciliacion: Conciliacion[] = [];
  public listaMovimientos: Movimiento[] = [];
  public listaMovimientos2: Movimiento[] = [];
  public nuevoMovimiento: Movimiento;

  public MovimientosConciliados: Movimiento[] = [];
  public conciliacion: Conciliacion;
  public numConciliacion: number;

  displayedColumns: string[] = [
    'id_movim',
    'fecha_movim',
    'id_tipo_mov',
    'total_movim',
    'acciones'
  ];
  dataSource = new MatTableDataSource<any>();

  constructor(private router: Router, private serviceMov: MovimientoService, private service: ListaExtrasService) {
    this.ConciliacionBancaria = this.createForm();
    this.panel2 = this.createForm2();
    this.panel3 = this.createForm3();
  }

  ngOnInit(): void {

    this.panel2.get('ingreso').disable()
    this.panel2.get('gasto').disable()
    this.panel2.get('saldoFinal').disable()
    this.panel2.get('diferencia').disable()
    this.panel2.get('ultimaConciliacion').disable()

    this.ConciliacionBancaria.get('fechaActual').disable()
    this.ConciliacionBancaria.get('fechaActual').setValue(formatDate(Date(), 'dd/MM/yyyy', 'en-US'))
    this.service.getCuenta().subscribe(cuenta => {
      this.listaCuenta = cuenta;
    })

    this.service.getNumConciliacion().subscribe(num => {
      this.numConciliacion = num;
    })
    
    this.serviceMov.getlistEstado().subscribe((movimientos) => {
      this.listaMovimientos = movimientos;
    })

    this.service.valorSaldoFinal().subscribe(data => {
      this.valorUltimaConc = data;
      this.panel2.get('ultimaConciliacion').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorUltimaConc))
    })


    this.panel2.get('ingreso').valueChanges.subscribe(data => {
      this.valorSaldoFinal = this.valorUltimaConc + this.valorIngreso - this.valorGasto;
      this.panel2.get('saldoFinal').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorSaldoFinal).toString())

      this.valorDiferencia = this.valorSaldoFinal - this.valorExtracto;
      this.panel2.get('diferencia').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorDiferencia))

    })

    this.panel2.get('gasto').valueChanges.subscribe(data => {
      this.valorSaldoFinal = this.valorUltimaConc + this.valorIngreso - this.valorGasto;
      this.panel2.get('saldoFinal').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorSaldoFinal).toString())

      this.valorDiferencia = this.valorSaldoFinal - this.valorExtracto;
      this.panel2.get('diferencia').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorDiferencia))

    })

    this.ConciliacionBancaria.get('extrato').valueChanges.subscribe(data => {
      this.valorExtracto = data;
      this.valorDiferencia = this.valorSaldoFinal - this.valorExtracto;
      this.panel2.get('diferencia').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorDiferencia).toString())
    })

    this.service.getConciliacion().subscribe(con => {
    })

    this.ConciliacionBancaria.get('CuentaBancaria').valueChanges.subscribe(data => {

      this.valorGasto = 0;
      this.panel2.get('gasto').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorGasto))
      this.panel2.get('gasto').statusChanges

      this.valorIngreso = 0;
      this.panel2.get('ingreso').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorIngreso))
      this.panel2.get('ingreso').statusChanges

      this.valorSaldoFinal = this.valorUltimaConc + this.valorIngreso - this.valorGasto;
      this.panel2.get('saldoFinal').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorSaldoFinal).toString())

      this.valorDiferencia = this.valorSaldoFinal - this.valorExtracto;
      this.panel2.get('diferencia').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorDiferencia).toString())

      this.listaMovimientos2.splice(0, this.listaMovimientos2.length)

      for (let index = 0; index < this.listaMovimientos.length; index++) {
        if (this.listaMovimientos[index].id_cuenta == data) {
          this.listaMovimientos2.push(this.listaMovimientos[index])
        }

      }

      this.dataSource = new MatTableDataSource(this.listaMovimientos2);

    })

  }

  get CuentaBancaria() {
    return this.ConciliacionBancaria.get('CuentaBancaria');
  }
  get extrato() {
    return this.ConciliacionBancaria.get('extrato');
  }
  get fechaActual() {
    return this.ConciliacionBancaria.get('fechaActual');
  }

  get ingreso() {
    return this.panel2.get('ingreso');
  }

  get gasto() {
    return this.panel2.get('gasto');
  }

  get saldoFinal() {
    return this.panel2.get('saldoFinal');
  }

  get diferencia() {
    return this.panel2.get('diferencia');
  }

  get ultimaConciliacion() {
    return this.panel2.get('ultimaConciliacion');
  }

  createForm() {
    return new FormGroup({
      CuentaBancaria: new FormControl('', [Validators.required]),
      extrato: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      fechaActual: new FormControl('')
    });
  }

  createForm2() {
    return new FormGroup({
      ingreso: new FormControl(''),
      gasto: new FormControl(''),
      saldoFinal: new FormControl(''),
      diferencia: new FormControl(''),
      ultimaConciliacion: new FormControl('')
    });
  }
  createForm3() {
    return new FormGroup({
      botonConci: new FormControl('')
    })
  }

  onSaveForm(): void { }

  tipo(num: number): String {
    if (num == 1) {
      return "Ingreso";
    } else {
      return "Egreso";
    }
  }

  conciliar() {

    if (this.extrato.value == 'INVALID' || this.CuentaBancaria.value == 'INVALID'
      || this.valorDiferencia != 0 || this.diferencia.value == '' || this.diferencia.value == null) {
      alert("Datos inválidos")
    } else {

      this.conciliacion = {
        id_conciliacion: this.numConciliacion,
        fecha_final: this.fechaActual.value,
        saldo_extracto: this.valorExtracto,
        total_ingresos: this.valorIngreso,
        saldo_final: this.valorSaldoFinal,
        id_cuenta: this.CuentaBancaria.value,
        total_gastos: this.valorGasto
      };

      this.service.registroConciliacion(this.conciliacion).subscribe(data => {
        alert("Conciliación registrada correctamente.")
      })

      this.service.estadoConciliacion(this.MovimientosConciliados).subscribe(data => {
        window.location.reload()
      })
    }
  }

  conciliarMov(movimiento: Movimiento, event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if (movimiento.id_tipo_mov == '1') {
      this.valorIngreso += Number.parseInt(movimiento.total_movim.toString());
      this.panel2.get('ingreso').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorIngreso))
      this.panel2.get('ingreso').statusChanges
    } else {
      this.valorGasto = this.valorGasto + Number.parseInt(movimiento.total_movim.toString());
      this.panel2.get('gasto').setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.valorGasto))
      this.panel2.get('gasto').statusChanges
    }

    this.nuevoMovimiento = movimiento;
    this.nuevoMovimiento.estado_conciliacion = true;

    this.MovimientosConciliados.push(this.nuevoMovimiento)

  }
}
