import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';
//import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-conciliacion-bancaria',
  templateUrl: './conciliacion-bancaria.component.html',
  styleUrls: ['./conciliacion-bancaria.component.css']
})
export class ConciliacionBancariaComponent implements OnInit {
  usuario: Usuario = new Usuario();
  category: string;
  title: string;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service:ListaUsiarioService) { 
    
  }
  
 
  displayedColumns: string[] = ['numero', 'fecha', 'Saldo final',
  'Ingresos Bancatios', 'Gastos bancarios', 'acciones'];
 


  dataSource = new MatTableDataSource<any>();

  

  ngOnInit(): void {
    this.service.loginAut().subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data)
    })
   
      
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;

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