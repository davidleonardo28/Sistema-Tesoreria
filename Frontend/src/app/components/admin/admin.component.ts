import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html', 
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  usuario: Usuario = new Usuario();
  category: string;
  title: string;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service:ListaUsiarioService, ) { 
    
  }
  

  

  ngOnInit(): void {
    
  }
  
  actualizar(empleado: any){
   this.usuario = empleado;
   this.service.actualizar(this.usuario).subscribe(
     data => {
       console.log(data)
       alert("Usuario desbloqueado.")
       window.location.reload();
     }
   )
   console.log(this.usuario.estado_emp)

 }

}