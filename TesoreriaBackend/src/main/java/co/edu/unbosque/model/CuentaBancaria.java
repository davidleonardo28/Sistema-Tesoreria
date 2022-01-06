package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cuenta_bancaria")
public class CuentaBancaria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cuenta")
	private long id_cuenta;

	@Column(name = "num_cuenta")
	private String num_cuenta;

	@Column(name = "saldo_cuenta")
	private long saldo_cuenta;

	@Column(name = "notas_adicionales")
	private String notas_adicionales;

	@Column(name = "pais_cuenta")
	private String pais_cuenta;

	@Column(name = "id_tipo_cuenta")
	private String id_tipo_cuenta;

	@Column(name = "id_banco")
	private String id_banco;

	@Column(name = "nombre_cuenta")
	private String nombre_cuenta;

	public CuentaBancaria() {

	}

	public CuentaBancaria(long id_cuenta, String num_cuenta, long saldo_cuenta, String notas_adicionales,
			String pais_cuenta, String id_tipo_cuenta, String id_banco, String nombre_cuenta) {
		super();
		this.id_cuenta = id_cuenta;
		this.num_cuenta = num_cuenta;
		this.saldo_cuenta = saldo_cuenta;
		this.notas_adicionales = notas_adicionales;
		this.pais_cuenta = pais_cuenta;
		this.id_tipo_cuenta = id_tipo_cuenta;
		this.id_banco = id_banco;
		this.nombre_cuenta = nombre_cuenta;
	}

	public long getId_cuenta() {
		return id_cuenta;
	}

	public void setId_cuenta(long id_cuenta) {
		this.id_cuenta = id_cuenta;
	}

	public String getNum_cuenta() {
		return num_cuenta;
	}

	public void setNum_cuenta(String num_cuenta) {
		this.num_cuenta = num_cuenta;
	}

	public long getSaldo_cuenta() {
		return saldo_cuenta;
	}

	public void setSaldo_cuenta(long saldo_cuenta) {
		this.saldo_cuenta = saldo_cuenta;
	}

	public String getNotas_adicionales() {
		return notas_adicionales;
	}

	public void setNotas_adicionales(String notas_adicionales) {
		this.notas_adicionales = notas_adicionales;
	}

	public String getPais_cuenta() {
		return pais_cuenta;
	}

	public void setPais_cuenta(String pais_cuenta) {
		this.pais_cuenta = pais_cuenta;
	}

	public String getId_tipo_cuenta() {
		return id_tipo_cuenta;
	}

	public void setId_tipo_cuenta(String id_tipo_cuenta) {
		this.id_tipo_cuenta = id_tipo_cuenta;
	}

	public String getId_banco() {
		return id_banco;
	}

	public void setId_banco(String id_banco) {
		this.id_banco = id_banco;
	}

	public String getNombre_cuenta() {
		return nombre_cuenta;
	}

	public void setNombre_cuenta(String nombre_cuenta) {
		this.nombre_cuenta = nombre_cuenta;
	}

	@Override
	public String toString() {
		return "CuentaBancaria [id_cuenta=" + id_cuenta + ", num_cuenta=" + num_cuenta + ", saldo_cuenta="
				+ saldo_cuenta + ", notas_adicionales=" + notas_adicionales + ", pais_cuenta=" + pais_cuenta
				+ ", id_tipo_cuenta=" + id_tipo_cuenta + ", id_banco=" + id_banco + ", nombre_cuenta=" + nombre_cuenta
				+ "]";
	}

}
