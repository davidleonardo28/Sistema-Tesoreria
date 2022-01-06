package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tipo_cuenta")
public class TipoCuenta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_tipo_cuenta")
	private long id_tipo_cuenta;

	@Column(name = "nombre_tipo_cuenta")
	private String nombre_tipo_cuenta;

	public TipoCuenta() {

	}

	public TipoCuenta(long id_tipo_cuenta, String nombre_tipo_cuenta) {
		super();
		this.id_tipo_cuenta = id_tipo_cuenta;
		this.nombre_tipo_cuenta = nombre_tipo_cuenta;
	}

	public long getId_tipo_cuenta() {
		return id_tipo_cuenta;
	}

	public void setId_tipo_cuenta(long id_tipo_cuenta) {
		this.id_tipo_cuenta = id_tipo_cuenta;
	}

	public String getNombre_tipo_cuenta() {
		return nombre_tipo_cuenta;
	}

	public void setNombre_tipo_cuenta(String nombre_tipo_cuenta) {
		this.nombre_tipo_cuenta = nombre_tipo_cuenta;
	}

	@Override
	public String toString() {
		return "TipoCuenta [id_tipo_cuenta=" + id_tipo_cuenta + ", nombre_tipo_cuenta=" + nombre_tipo_cuenta + "]";
	}

}
