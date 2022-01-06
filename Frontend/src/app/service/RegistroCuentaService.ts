import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CuentaBancaria } from "../entity/CuentaBancaria";

@Injectable({
    providedIn: 'root'
})
export class RegistroCuentaService {


    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/api/v1';

    registro(cuenta: CuentaBancaria){
        return this.http.post(this.Url+'/api/registroCuenta', cuenta);
    }

}