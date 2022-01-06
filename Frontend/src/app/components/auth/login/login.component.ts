import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuarioService } from 'src/app/service/TipoUsuarioService';
import { TipoUsuario } from 'src/app/entity/TipoUsuario';
import { catchError } from 'rxjs';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  contador = 0;
  tipoUsuario: TipoUsuario= new TipoUsuario();
  usuario: Usuario= new Usuario();
  constructor(private router:Router, private service:TipoUsuarioService, private actualizar: ListaUsiarioService) { }
 
  ngOnInit(): void {
  }

  Login(){
    this.actualizarUsuario(this.tipoUsuario)
    this.service.loginAut(this.tipoUsuario).pipe(catchError(this.service.credencialesInvalidas)).subscribe(data =>{
      if(data["estado_emp"] == true){
        console.log(data)
        this.router.navigate(["/admin"])
      }else{
        alert("El usuario se encuentra bloqueado")
      }
    })
    console.log(this.tipoUsuario.correo_emp)
    console.log(this.tipoUsuario.contrasena_emp)
  }

  actualizarUsuario(empleado: any){
    this.contador ++
    this.usuario = empleado;
    if(this.contador>2){
      this.usuario["estado_emp"]= false
      this.actualizar.bloquear(this.usuario).subscribe(data =>{
        console.log(data)
        alert("usuario bloqueado")
        window.location.reload();
      })
      console.log(this.usuario.estado_emp)
    }
  }

}
