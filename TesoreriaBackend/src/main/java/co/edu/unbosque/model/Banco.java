package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "banco")
public class Banco {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_banco")
	private long id_banco;

	@Column(name = "nombre_banco")
	private String nombre_banco;

	public Banco() {

	}

	public Banco(long id_banco, String nombre_banco) {
		super();
		this.id_banco = id_banco;
		this.nombre_banco = nombre_banco;
	}

	public long getId_banco() {
		return id_banco;
	}

	public void setId_banco(long id_banco) {
		this.id_banco = id_banco;
	}

	public String getNombre_banco() {
		return nombre_banco;
	}

	public void setNombre_banco(String nombre_banco) {
		this.nombre_banco = nombre_banco;
	}

	@Override
	public String toString() {
		return "Banco [id_banco=" + id_banco + ", nombre_banco=" + nombre_banco + "]";
	}

}
