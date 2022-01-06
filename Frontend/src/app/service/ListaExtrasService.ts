import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { Beneficiario } from 'src/app/entity/Beneficiario';
import { Concepto } from 'src/app/entity/Concepto';
import { Impuesto } from "../entity/Impuesto";
import { MetodoPago } from 'src/app/entity/MetodoPago';
import { Retencion } from 'src/app/entity/Retencion';
import { Banco } from 'src/app/entity/Banco';
import { TipoCuenta } from 'src/app/entity/TipoCuenta';

import { Conciliacion } from "../entity/Conciliacion";
import { Movimiento } from "../entity/Movimiento";


@Injectable({
    providedIn: 'root'
})
export class ListaExtrasService {
    eliminar(id_movim: any) {
        throw new Error('Method not implemented.');
    }


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1';

    getCuenta() {
        return this.http.get<CuentaBancaria[]>(this.Url + '/api/cuenta');
    }

    getBeneficiario() {
        return this.http.get<Beneficiario[]>(this.Url + '/api/beneficiario');
    }

    getConcepto() {
        return this.http.get<Concepto[]>(this.Url + '/api/concepto');
    }

    getConceptoIngreso() {
        return this.http.get<Concepto[]>(this.Url + '/api/conceptoIngreso');
    }

    getConceptoGasto() {
        return this.http.get<Concepto[]>(this.Url + '/api/conceptoGasto');
    }

    getImpuesto() {
        return this.http.get<Impuesto[]>(this.Url + '/api/impuesto');
    }

    getMetodoPago() {
        return this.http.get<MetodoPago[]>(this.Url + '/api/pago');
    }

    getRetencion() {
        return this.http.get<Retencion[]>(this.Url + "/api/retencion");
    }

    getNumMov() {
        return this.http.get<number>(this.Url + "/api/numMov");
    }

    getBanco() {
        return this.http.get<Banco[]>(this.Url + "/api/banco");
    }

    getTipoCuenta() {
        return this.http.get<TipoCuenta[]>(this.Url + "/api/tipoCuenta");
    }

    getNumCuenta() {
        return this.http.get<number>(this.Url + "/api/numCuenta");
    }

    getConciliacion() {
        return this.http.get<Conciliacion[]>(this.Url + "/api/conciliacion");
    }
    actualizarSaldo(cuenta: CuentaBancaria) {
        return this.http.put(this.Url + "/api/actualizarSaldo", cuenta)
    }
    getNumConciliacion() {
        return this.http.get<number>(this.Url + "/api/numConciliacion");
    }
    registroConciliacion(conciliacion: Conciliacion) {
        return this.http.post(this.Url + '/api/registroConciliacion', conciliacion);
    }
    estadoConciliacion(lista: Movimiento[]) {
        return this.http.put(this.Url + "/api/estadoConciliacion", lista)
    }
    valorSaldoFinal() {
        return this.http.get<number>(this.Url + "/api/valorSaldoFinal");
    }
}
