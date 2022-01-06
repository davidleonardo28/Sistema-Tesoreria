import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);
const pdf = new PdfMakeWrapper;

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})

export class VerUsuariosComponent implements OnInit {
  usuario: Usuario = new Usuario();
  category: string;
  title: string;
  datos: any;
  PDFexistente: boolean = false;
  generarPDF(): void {
    if (!this.PDFexistente) {
      // PDF
      pdf.info({
        title: 'Reporte de Usuarios registrados',
        subject: 'Se mostrara la cantida de usuarios que existen en la base de datos'
      });

      pdf.add(new Txt('Reportes de Usuarios').alignment('center').bold().fontSize(24).end)
      const tabla = [this.TablaPdf]

      this.datos.forEach(i => {
        let fila = []
        for (let key in i) {
          // se ignora para que no aparezca en la tabla
          if (key != "contrasena_emp")
            fila.push(i[key])

        }
        tabla.push(fila)
      })
      // witdths funciona con la cantidad de columnas
      pdf.add(new Table(tabla).widths(['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto']).fontSize(10).alignment('center')
        .margin(5).end)
      pdf.pageOrientation("landscape")
      pdf.footer(new Txt('SRP technology').color('blue').fontSize(18).alignment('center').end)
      pdf.create().open();
      this.PDFexistente = true;
    }else {
      alert("Porfavor recargue la pagina si desea intentar descargar el documento de nuevo.")
    }


  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(public service: ListaUsiarioService) {

  }
  displayedColumns: string[] = ['id_emp', 'nombres_emp',
    'apellidos_emp', 'num_id_emp', 'correo_emp',
    'sexo_emp', 'telefono_emp', 'id_nivel', 'id_fun', 'estado_emp',
    'contrasena_emp', 'tipo_documento_emp', 'acciones'];
  dataSource = new MatTableDataSource<any>();

  TablaPdf: string[] = ['id', 'nombres',
    'apellidos', 'numero:', 'correo',
    'género', 'telefono', 'nivel', 'función', 'estado', 'documento'];

  ngOnInit(): void {
    this.service.loginAut().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.datos = data;
     
    })
  }
  actualizar(empleado: any) {
    if (window.confirm("¿Está seguro que desea desbloquear el usuario seleccionado?")) {
      this.usuario = empleado;
      this.service.actualizar(this.usuario).subscribe(
        data => {
          alert("Usuario desbloqueado.")
          window.location.reload();
        }
      )
      console.log(this.usuario.estado_emp)
    }
  }

  bloquear(empleado: any) {
    this.usuario = empleado;
    this.usuario.estado_emp = false;
    if (window.confirm("¿Está seguro que desea bloquear el usuario seleccionado?")) {
      this.service.bloquear(this.usuario).subscribe(data => {
        alert("Usuario bloqueado.")
        window.location.reload()
      })
    }
  }

  estado(es: boolean): String {
    if (es) {
      return "Activo";
    } else {
      return "Inactivo";
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  nivel(num: number): String {
    if (num == 1) {
      return "Administrador";
    } else {
      return "Operario";
    }
  }

  funcionalidad(num: number): String {
    if (num == 1) {
      return "Tesorero";
    } else if (num == 2) {
      return "Empleado";
    } else {
      return "Financiero";
    }
  }


}


