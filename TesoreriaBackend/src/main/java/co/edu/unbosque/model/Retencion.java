package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "retencion")
public class Retencion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_retencion")
	private long id_retencion;

	@Column(name = "nombre_retr")
	private String nombre_retr;

	@Column(name = "porcentaje_retr")
	private double porcentaje_retr;

	public Retencion() {

	}

	public Retencion(long id_retencion, String nombre_retr, double porcentaje_retr) {
		super();
		this.id_retencion = id_retencion;
		this.nombre_retr = nombre_retr;
		this.porcentaje_retr = porcentaje_retr;
	}

	public long getId_retencion() {
		return id_retencion;
	}

	public void setId_retencion(long id_retencion) {
		this.id_retencion = id_retencion;
	}

	public String getNombre_retr() {
		return nombre_retr;
	}

	public void setNombre_retr(String nombre_retr) {
		this.nombre_retr = nombre_retr;
	}

	public double getPorcentaje_retr() {
		return porcentaje_retr;
	}

	public void setPorcentaje_retr(double porcentaje_retr) {
		this.porcentaje_retr = porcentaje_retr;
	}

	@Override
	public String toString() {
		return "Retencion [id_retencion=" + id_retencion + ", nombre_retr=" + nombre_retr + ", porcentaje_retr="
				+ porcentaje_retr + "]";
	}

}
