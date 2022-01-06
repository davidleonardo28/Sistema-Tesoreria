package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "metodo_pago")
public class MetodoPago {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_pago")
	private long id_pago;

	@Column(name = "nombre_pago")
	private String nombre_pago;

	public MetodoPago() {

	}

	public MetodoPago(long id_pago, String nombre_pago) {
		super();
		this.id_pago = id_pago;
		this.nombre_pago = nombre_pago;
	}

	public long getId_pago() {
		return id_pago;
	}

	public void setId_pago(long id_pago) {
		this.id_pago = id_pago;
	}

	public String getNombre_pago() {
		return nombre_pago;
	}

	public void setNombre_pago(String nombre_pago) {
		this.nombre_pago = nombre_pago;
	}

	@Override
	public String toString() {
		return "MetodoPago [id_pago=" + id_pago + ", nombre_pago=" + nombre_pago + "]";
	}

}
