import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../entity/Usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private API_SERVER = "http://localhost:8080/api/v1";
  constructor(private httpClient: HttpClient) { }

    public saveUsuario (usuarios:Usuario): Observable<any>{
      return this.httpClient.post(this.API_SERVER+"/api/registro",usuarios)
    }
    public getId () {
      return this.httpClient.get<number>(this.API_SERVER+"/api/numEmp")
    }

  
}

