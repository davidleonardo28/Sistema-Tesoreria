import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { RegistroService } from 'src/app/service/registroService';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent {
  public registroForm: FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  number: number = 0;
  gender: any = ['M', 'F', 'O'];
  typedocument: any = ['Cédula de Ciudadania', 'Cédula de Extranjería', 'Registro Civil', 'NIT']

  constructor(private router: Router, public registroService: RegistroService) {
    this.registroForm = this.createForm();
    this.registroService.getId().subscribe(num => {
      this.number = num;
    })
  }
  get nombre() { return this.registroForm.get('nombre'); }
  get apellido() { return this.registroForm.get('apellido'); }
  get telefono() { return this.registroForm.get('telefono'); }
  get email() { return this.registroForm.get('email'); }
  get contrasena() { return this.registroForm.get('contrasena'); }
  get tDocumento() { return this.registroForm.get('tDocumento'); }
  get nDocumento() { return this.registroForm.get('nDocumento'); }
  get tUsuario() { return this.registroForm.get('tUsuario'); }
  get funcionalidad() { return this.registroForm.get('funcionalidad'); }
  get genero() { return this.registroForm.get('genero'); }

  createForm() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.emailPattern)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,} [a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,}')]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern('[- +()0-9]+')]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
      tDocumento: new FormControl('', [Validators.required]),
      nDocumento: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern('[- +()0-9]+')]),
      funcionalidad: new FormControl('', [Validators.required]),
      tUsuario: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required])
    })
  }
  changeGender(e) {
    this.gender.setValue(e.target.value, {
      onlySelf: true
    })
  }
  changeDocument(e) {
    this.typedocument.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onResetForm(): void {
    this.registroForm.reset();
  }

  onSaveForm(): void {
    console.log(this.registroForm.value);
  }

  guardar() {

    if (this.nombre.status == 'INVALID' || this.apellido.status == 'INVALID' || this.nDocumento.status == 'INVALID'
      || this.email.status == 'INVALID' || this.genero.status == 'INVALID' || this.telefono.status == 'INVALID' ||
      this.tUsuario.status == 'INVALID' || this.funcionalidad.status == 'INVALID' || this.contrasena.status == 'INVALID'
      || this.tDocumento.status == 'INVALID') {
      alert('Datos inválidos.')

    } else {

        const usuario: Usuario = {
          id_emp: this.number,
          nombres_emp: this.nombre.value,
          apellidos_emp: this.apellido.value,
          num_id_emp: this.nDocumento.value,
          correo_emp: this.email.value,
          sexo_emp: this.genero.value,
          telefono_emp: this.telefono.value.toString(),
          id_nivel: this.tUsuario.value,
          id_fun: this.funcionalidad.value,
          estado_emp: true,
          contrasena_emp: this.contrasena.value,
          tipo_documento_emp: this.tDocumento.value

        };
        this.registroService.saveUsuario(usuario).subscribe(resp => {
          alert("Se ha registrado el usuario exitosamente.")
          window.location.reload()
        },
          error => { console.error(error) }
        )
    }
  }

}