package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="empleado")
public class User {
	
	@Id @GeneratedValue(strategy= GenerationType.IDENTITY) 
	@Column(name="id_emp") 
	private long id_emp;
	
	@Column(name="nombres_emp")
	private String nombres_emp;
	
	@Column(name="apellidos_emp")
	private String apellidos_emp;
	
	@Column(name="num_id_emp")
	private String num_id_emp;
	
	@Column(name="correo_emp")
	private String correo_emp;
	
	@Column(name="sexo_emp")
	private char sexo_emp;
	
	@Column(name="telefono_emp")
	private String telefono_emp;
	
	@Column(name="id_nivel")
	private String id_nivel;
	
	@Column(name="id_fun")
	private String id_fun;
	
	@Column(name="estado_emp")
	private boolean estado_emp;
	
	@Column(name="contrasena_emp")
	private String contrasena_emp;
	
	@Column(name="tipo_documento_emp")
	private String tipo_documento_emp;
	
	public User() {
		
	}
	
	public User(long id_emp,String nombres_emp, String apellidos_emp,
				String num_id_emp, String correo_emp, char sexo_emp, String telefono_emp,
				String id_nivel, String id_fun, boolean estado_emp, String contrasena_emp, String tipo_documento_emp) {
		super();
		
		this.id_emp= id_emp;
		this.nombres_emp= nombres_emp;
		this.apellidos_emp= apellidos_emp;
		this.num_id_emp= num_id_emp;
		this.correo_emp= correo_emp;
		this.sexo_emp= sexo_emp;
		this.telefono_emp= telefono_emp;
		this.id_nivel= id_nivel;
		this.id_fun= id_fun;
		this.estado_emp= estado_emp;
		this.contrasena_emp= contrasena_emp;
		this.tipo_documento_emp = tipo_documento_emp;
	}

	public long getId_emp() {
		return id_emp;
	}

	public void setId_emp(long id_emp) {
		this.id_emp = id_emp;
	}

	public String getNombres_emp() {
		return nombres_emp;
	}

	public void setNombres_emp(String nombres_emp) {
		this.nombres_emp = nombres_emp;
	}

	public String getApellidos_emp() {
		return apellidos_emp;
	}

	public void setApellidos_emp(String apellidos_emp) {
		this.apellidos_emp = apellidos_emp;
	}

	public String getNum_id_emp() {
		return num_id_emp;
	}

	public void setNum_id_emp(String num_id_emp) {
		this.num_id_emp = num_id_emp;
	}

	public String getCorreo_emp() {
		return correo_emp;
	}

	public void setCorreo_emp(String correo_emp) {
		this.correo_emp = correo_emp;
	}

	public char getSexo_emp() {
		return sexo_emp;
	}

	public void setSexo_emp(char sexo_emp) {
		this.sexo_emp = sexo_emp;
	}

	public String getTelefono_emp() {
		return telefono_emp;
	}

	public void setTelefono_emp(String telefono_emp) {
		this.telefono_emp = telefono_emp;
	}

	public String getId_nivel() {
		return id_nivel;
	}

	public void setId_nivel(String id_nivel) {
		this.id_nivel = id_nivel;
	}

	public String getId_fun() {
		return id_fun;
	}

	public void setId_fun(String id_fun) {
		this.id_fun = id_fun;
	}

	public boolean isEstado_emp() {
		return estado_emp;
	}

	public void setEstado_emp(boolean estado_emp) {
		this.estado_emp = estado_emp;
	}

	public String getContrasena_emp() {
		return contrasena_emp;
	}

	public void setContrasena_emp(String contrasena_emp) {
		this.contrasena_emp = contrasena_emp;
	}
	
	public String getTipo_documento_emp() {
		return tipo_documento_emp;
	}

	public void setTipo_documento_emp(String tipo_documento_emp) {
		this.tipo_documento_emp = tipo_documento_emp;
	}

	@Override
	public String toString() {
		return "User [nombres_emp=" + nombres_emp + ", apellidos_emp=" + apellidos_emp + ", num_id_empl=" + num_id_emp
				+ ", correo_emp=" + correo_emp + ", sexo_emp=" + sexo_emp + ", telefono_emp=" + telefono_emp
				+ ", id_nivel=" + id_nivel + ", id_fun=" + id_fun + ", estado_emp=" + estado_emp + ", contrasena_emp="
				+ contrasena_emp + tipo_documento_emp +", tipo_documento_emp" + "]";
	}
	
	
}
