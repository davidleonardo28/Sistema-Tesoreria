import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Impuesto } from 'src/app/entity/Impuesto';
import { Concepto } from 'src/app/entity/Concepto';
import { Beneficiario } from 'src/app/entity/Beneficiario';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { MetodoPago } from 'src/app/entity/MetodoPago';
import { Retencion } from 'src/app/entity/Retencion';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import { Movimiento } from 'src/app/entity/Movimiento';
import { MovimientoService } from 'src/app/service/MovimientoService';


@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  public gastoForm: FormGroup;
  public listaImpuesto: Impuesto[] = [];
  public listaConcepto: Concepto[] = [];
  public listaBenef: Beneficiario[] = [];
  public listaCuenta: CuentaBancaria[] = [];
  public listaMetodo: MetodoPago[] = [];
  public listaRetencion: Retencion[] = [];
  public numMovim: number;
  public estado: boolean;
  public impto: number = 0;
  public retencio: number = 0;
  public ingreso: Movimiento;
  public currentDate: Date;
  public valorTotal: number;
  public isDesabled: Boolean;


  constructor(private router: Router, private service: ListaExtrasService,
    private formBuilder: FormBuilder, private serviceMov: MovimientoService) {

    this.gastoForm = this.createForm();

  }

  ngOnInit(): void {

    this.service.getImpuesto().subscribe(impuesto => {
      this.listaImpuesto = impuesto;
    })

    this.service.getBeneficiario().subscribe(benef => {
      this.listaBenef = benef;
    })

    this.service.getConceptoGasto().subscribe(concepto => {
      this.listaConcepto = concepto;
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

    this.service.getNumMov().subscribe(num => {
      this.numMovim = num;
    })

    this.estado = true

    this.gastoForm.get('metodoPago').valueChanges.subscribe(value => {
      if (value == '2') {
        this.estado = false
        this.num.statusChanges
      } else if (value == '3' || value == '4' || value == '5' || value == '6') {
        this.estado = false
        this.num.setValue('Número Consignación')
        this.num.statusChanges
      } else if (value == '1') {
        this.estado = true
        this.extra.setValue('')
        this.num.statusChanges

      }
    })

    this.gastoForm.get('valor_concepto').valueChanges.subscribe(valor => {

      this.subtotal.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(valor * this.gastoForm.get('cantidad').value))
      this.setImpuesto(this.impuesto.value)
      this.setRetencion(this.tipoRetencion.value)
      this.total.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format((this.valor_concepto.value * this.cantidad.value) + this.impto - this.retencio))
      this.valorTotal = (this.valor_concepto.value * this.cantidad.value) + this.impto - this.retencio
    })

    this.gastoForm.get('cantidad').valueChanges.subscribe(cantidad => {

      this.subtotal.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(cantidad * this.gastoForm.get('valor_concepto').value))
      this.total.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format((this.valor_concepto.value * this.cantidad.value) + this.impto - this.retencio))
      this.valorTotal = (this.valor_concepto.value * this.cantidad.value) + this.impto - this.retencio
    })

    this.gastoForm.get('impuesto').valueChanges.subscribe(imp => {
      this.setImpuesto(imp)
      this.total.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format((this.valor_concepto.value * this.cantidad.value) + this.impto - this.retencio))
      this.valorTotal = (this.valor_concepto.value * this.cantidad.value) + this.impto - this.retencio
    })

    this.gastoForm.get('tipoRetencion').valueChanges.subscribe(re => {
      this.setRetencion(re)
      this.total.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format((this.valor_concepto.value * this.cantidad.value) + this.impto - this.retencio))
      this.valorTotal = (this.valor_concepto.value * this.cantidad.value) + this.impto - this.retencio
    })

  }

  get fecha() { return this.gastoForm.get('fecha'); }
  get beneficiario() { return this.gastoForm.get('beneficiario'); }
  get cuentaBancaria() { return this.gastoForm.get('cuentaBancaria'); }
  get metodoPago() { return this.gastoForm.get('metodoPago'); }
  get notasAdicionales() { return this.gastoForm.get('notasAdicionales'); }
  get concepto() { return this.gastoForm.get('concepto'); }
  get valor_concepto() { return this.gastoForm.get('valor_concepto'); }
  get impuesto() { return this.gastoForm.get('impuesto'); }
  get cantidad() { return this.gastoForm.get('cantidad'); }
  get notasAdicionales2() { return this.gastoForm.get('notasAdicionales2'); }
  get tipoRetencion() { return this.gastoForm.get('tipoRetencion'); }
  get extra() { return this.gastoForm.get('extra'); }
  get num() { return this.gastoForm.get('num'); }
  get subtotal() { return this.gastoForm.get('subtotal'); }
  get valorImpuesto() { return this.gastoForm.get('valorImpuesto'); }
  get valorRetencion() { return this.gastoForm.get('valorRetencion'); }
  get total() { return this.gastoForm.get('total'); }

  createForm() {
    return new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      beneficiario: new FormControl('', [Validators.required]),
      cuentaBancaria: new FormControl('', [Validators.required]),
      metodoPago: new FormControl('', [Validators.required]),
      notasAdicionales: new FormControl(''),
      concepto: new FormControl('', [Validators.required]),
      valor_concepto: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      impuesto: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      notasAdicionales2: new FormControl(''),
      tipoRetencion: new FormControl('', [Validators.required]),
      extra: new FormControl('', [Validators.pattern('[- +()0-9]+')]),
      subtotal: new FormControl(''),
      valorImpuesto: new FormControl(''),
      valorRetencion: new FormControl(''),
      total: new FormControl('')
    })

  }

  changeBeneficiario(e) {
    this.beneficiario.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeCuenta(e) {
    this.cuentaBancaria.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeMetodoPago(e) {
    this.metodoPago.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeConcepto(e) {
    this.concepto.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeImpuesto(e) {
    this.impuesto.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeRetencion(e) {
    this.tipoRetencion.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onResetForm(): void {
    this.gastoForm.reset();
  }

  onSaveForm(): void {
    console.log(this.gastoForm.value);
  }

  guardar() {

    if (this.fecha.status == 'INVALID' || this.extra.status == 'INVALID' || this.valor_concepto.status == 'INVALID'
      || this.cantidad.status == 'INVALID' || this.valorTotal == null || this.valorTotal == 0 || this.notasAdicionales.status == 'INVALID'
      || this.notasAdicionales2.status == 'INVALID' || this.beneficiario.status == 'INVALID' ||
      this.metodoPago.status == 'INVALID' || this.concepto.status == 'INVALID' || this.cuentaBancaria.status == 'INVALID'
      || this.impuesto.status == 'INVALID' || this.tipoRetencion.status == 'INVALID') {
      alert("Datos inválidos.")
    } else {

      this.ingreso = {
        id_movim: this.numMovim,
        fecha_movim: this.fecha.value,
        num_pago: this.extra.value,
        valor_concepto: this.valor_concepto.value,
        cantidad_movim: this.cantidad.value,
        total_movim: this.valorTotal.toString(),
        notas_info: this.notasAdicionales.value,
        notas_concepto: this.notasAdicionales2.value,
        id_benef: this.beneficiario.value,
        id_pago: this.metodoPago.value,
        id_concepto: this.concepto.value,
        id_cuenta: this.cuentaBancaria.value,
        id_impuesto: this.impuesto.value,
        id_retencion: this.tipoRetencion.value,
        id_tipo_mov: '2',
        estado_conciliacion: false
      };

      this.serviceMov.registro(this.ingreso).subscribe(data => {
        alert("Nuevo gasto guardado exitosamente.")
      })

      this.listaCuenta[this.cuentaBancaria.value - 1].saldo_cuenta = this.listaCuenta[this.cuentaBancaria.value - 1].saldo_cuenta - this.valorTotal;

      this.service.actualizarSaldo(this.listaCuenta[this.cuentaBancaria.value - 1]).subscribe(data => {
        window.location.reload()
      })

    }
  }

  numMov() {
    return this.numMovim;
  }

  setImpuesto(imp: any) {

    if (imp == '1' || imp == '13') {
      this.impto = 0;
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(0))
      this.valorImpuesto.statusChanges

    } else if (imp == '2') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.05;
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    } else if (imp == '3' || imp == '10') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.16
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    } else if (imp == '4') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.19
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    } else if (imp == '5') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.20
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    } else if (imp == '6') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.35
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    } else if (imp == '7') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.02
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    } else if (imp == '8' || imp == '12') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.04
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    } else if (imp == '9') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.08
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    } else if (imp == '11') {
      this.impto = this.gastoForm.get('valor_concepto').value * 0.31
      this.valorImpuesto.setValue(new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.impto))
      this.valorImpuesto.statusChanges

    }
  }

  setRetencion(ret: any) {

    if (ret == '1' || ret == '21') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.15;
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '2') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 1;
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '3' || ret == '22') {
      this.retencio = 0
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '4') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.0001
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '5') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.0005
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '6') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.01
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '7') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.015
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '8' || ret == '20') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.1
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '9') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.11
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '10') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.02
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '11') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.025
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '12') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.2
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '13') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.03
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '14') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.035
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '15') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.04
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '16') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.06
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '17') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.07
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '18') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.05
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    } else if (ret == '19') {
      this.retencio = this.gastoForm.get('valor_concepto').value * 0.08
      this.valorRetencion.setValue('-' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.retencio))
      this.valorRetencion.statusChanges

    }
  }


  Cancelar() {
    window.location.reload();
  }
}
