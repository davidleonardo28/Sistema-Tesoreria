import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { TipoUsuario } from '../entity/TipoUsuario'
import { throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
}) 
export class TipoUsuarioService {

    constructor(private http:HttpClient){}
    Url = 'http://localhost:8080/api/v1/api/login/';

    loginAut(credenciales:TipoUsuario){
        return this.http.post(this.Url, credenciales)
    }

    credencialesInvalidas(error:HttpErrorResponse){
        alert("Credenciales invalidas!")
        return throwError(() => error)
    }
}

