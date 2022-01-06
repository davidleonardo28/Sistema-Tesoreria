package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "impuesto")
public class Impuesto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_impuesto")
	private long id_impuesto;

	@Column(name = "nombre_imp")
	private String nombre_imp;

	@Column(name = "porcentaje_imp")
	private double porcentaje_imp;

	public Impuesto() {

	}

	public Impuesto(long id_impuesto, String nombre_imp, double porcentaje_imp) {
		super();
		this.id_impuesto = id_impuesto;
		this.nombre_imp = nombre_imp;
		this.porcentaje_imp = porcentaje_imp;
	}

	public long getId_impuesto() {
		return id_impuesto;
	}

	public void setId_impuesto(long id_impuesto) {
		this.id_impuesto = id_impuesto;
	}

	public String getNombre_imp() {
		return nombre_imp;
	}

	public void setNombre_imp(String nombre_imp) {
		this.nombre_imp = nombre_imp;
	}

	public double getPorcentaje_imp() {
		return porcentaje_imp;
	}

	public void setPorcentaje_imp(double porcentaje_imp) {
		this.porcentaje_imp = porcentaje_imp;
	}

	@Override
	public String toString() {
		return "Impuesto [id_impuesto=" + id_impuesto + ", nombre_imp=" + nombre_imp + ", porcentaje_imp="
				+ porcentaje_imp + "]";
	}

}
