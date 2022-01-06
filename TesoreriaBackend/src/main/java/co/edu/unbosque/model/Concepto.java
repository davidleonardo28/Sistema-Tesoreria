package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "concepto_cuenta_contable")
public class Concepto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_concepto")
	private long id_concepto;

	@Column(name = "nombre_concepto")
	private String nombre_concepto;

	@Column(name = "id_tipo_concepto")
	private String id_tipo_concepto;

	public Concepto() {

	}

	public Concepto(long id_concepto, String nombre_concepto, String id_tipo_concepto) {
		super();
		this.id_concepto = id_concepto;
		this.nombre_concepto = nombre_concepto;
		this.id_tipo_concepto = id_tipo_concepto;
	}

	public long getId_concepto() {
		return id_concepto;
	}

	public void setId_concepto(long id_concepto) {
		this.id_concepto = id_concepto;
	}

	public String getNombre_concepto() {
		return nombre_concepto;
	}

	public void setNombre_concepto(String nombre_concepto) {
		this.nombre_concepto = nombre_concepto;
	}

	public String getId_tipo_concepto() {
		return id_tipo_concepto;
	}

	public void setId_tipo_concepto(String id_tipo_concepto) {
		this.id_tipo_concepto = id_tipo_concepto;
	}

	@Override
	public String toString() {
		return "Concepto [id_concepto=" + id_concepto + ", nombre_concepto=" + nombre_concepto + ", id_tipo_concepto="
				+ id_tipo_concepto + "]";
	}

}
