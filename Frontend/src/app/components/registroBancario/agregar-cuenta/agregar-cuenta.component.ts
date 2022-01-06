import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Banco } from 'src/app/entity/Banco';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { TipoCuenta } from 'src/app/entity/TipoCuenta';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import { RegistroCuentaService } from 'src/app/service/RegistroCuentaService';

@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.css']
})

export class AgregarCuentaComponent implements OnInit {
  public registroBancario: FormGroup;

  tipoCuenta: TipoCuenta[] = [];
  listaBancos: Banco[] = [];
  Pais: any = ['Colombia', 'Ecuador', 'México', 'España', 'Estados Unidos', 'Brasil', 'Argentina', 'Canada', 'Suiza', 'Chile'];
  nombreCuenta: String;
  nombreBanco: String;
  cuentaBancaria: CuentaBancaria;
  public numCuenta: number;

  constructor(private router: Router, private service: ListaExtrasService, private serviceCuenta: RegistroCuentaService) {
    this.registroBancario = this.createForm();
  }

  ngOnInit(): void {

    this.service.getBanco().subscribe(banco => {
      this.listaBancos = banco;
    })

    this.service.getTipoCuenta().subscribe(cuenta => {
      this.tipoCuenta = cuenta;
    })

    this.service.getNumCuenta().subscribe(numero => {
      this.numCuenta = numero;
    })

    this.registroBancario.get('TipoCuenta').valueChanges.subscribe(valor => {
      if (valor == '1') {
        this.nombreCuenta = "Corriente"
      } else if (valor == '2') {
        this.nombreCuenta = "Ahorros"
      } else if (valor == '3') {
        this.nombreCuenta = "Con Chequera"
      } else if (valor == '4') {
        this.nombreCuenta = "Nómina"
      } else if (valor == '5') {
        this.nombreCuenta = "En Dólares"
      }
    })

    this.registroBancario.get('TipoBanco').valueChanges.subscribe(valor => {
      if (valor == '1') {
        this.nombreBanco = "Bancolombia"
      } else if (valor == '2') {
        this.nombreBanco = "Banco Av Villas"
      } else if (valor == '3') {
        this.nombreBanco = "Banco Caja Social"
      } else if (valor == '4') {
        this.nombreBanco = "Banco de Bogotá"
      } else if (valor == '5') {
        this.nombreBanco = "Banco de Occidente"
      } else if (valor == '6') {
        this.nombreBanco = "Banco Itaú"
      } else if (valor == '7') {
        this.nombreBanco = "Banco Popular"
      } else if (valor == '8') {
        this.nombreBanco = "BBVA Colombia"
      } else if (valor == '9') {
        this.nombreBanco = "Davivienda"
      } else if (valor == '10') {
        this.nombreBanco = "Scotiabank Copatria"
      }
    })

  }

  get TipoCuenta() { return this.registroBancario.get('TipoCuenta'); }
  get TipoBanco() { return this.registroBancario.get('TipoBanco'); }
  get TipoPais() { return this.registroBancario.get('TipoPais'); }
  get CuentaBancaria() { return this.registroBancario.get('CuentaBancaria'); }
  get saldo() { return this.registroBancario.get('saldo'); }
  get notas() { return this.registroBancario.get('notas'); }

  createForm() {
    return new FormGroup({
      TipoCuenta: new FormControl('', [Validators.required]),
      TipoBanco: new FormControl('', [Validators.required]),
      TipoPais: new FormControl('', [Validators.required]),
      CuentaBancaria: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern('[- +()0-9]+')]),
      saldo: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      notas: new FormControl('')
    })
  }

  changeTipoCuenta(e) {
    this.TipoCuenta.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeTipoBanco(e) {
    this.TipoBanco.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeTipoPais(e) {
    this.Pais.setValue(e.target.value, {
      onlySelf: true
    })
  }
  onSaveForm(): void {
    console.log(this.registroBancario.value);
  }

  onResetForm(): void {
    this.registroBancario.reset();
  }

  guardar() {

    if (this.CuentaBancaria.status == 'INVALID' || this.saldo.status == 'INVALID' || this.notas.status == 'INVALID'
      || this.TipoPais.status == 'INVALID' || this.TipoCuenta.status == 'INVALID' || this.TipoBanco.status == 'INVALID') {
      alert("Datos inválidos.")
    } else {

      this.cuentaBancaria = {
        id_cuenta: this.numCuenta,
        num_cuenta: this.CuentaBancaria.value,
        saldo_cuenta: this.saldo.value,
        notas_adicionales: this.notas.value,
        pais_cuenta: this.TipoPais.value,
        id_tipo_cuenta: this.TipoCuenta.value,
        id_banco: this.TipoBanco.value,
        nombre_cuenta: "Cuenta " + this.nombreCuenta + " " + this.nombreBanco
      };

      this.serviceCuenta.registro(this.cuentaBancaria).subscribe(data => {
        alert("Nueva cuenta bancaria guardada exitosamente.")
        window.location.reload()
      })

      this.onResetForm()
    }
  }
}



