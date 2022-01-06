package co.edu.unbosque.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "beneficiario")
public class Beneficiario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_benef")
	private long id_benef;

	@Column(name = "nombre_benef")
	private String nombre_benef;

	@Column(name = "num_id_benef")
	private String num_id_benef;

	@Column(name = "correo_benef")
	private String correo_benef;

	@Column(name = "telefono_benef")
	private String telefono_benef;

	@Column(name = "id_tipo_benef")
	private String id_tipo_benef;

	public Beneficiario() {

	}

	public Beneficiario(long id_benef, String nombre_benef, String num_id_benef, String correo_benef,
			String telefono_benef, String id_tipo_benef) {
		super();
		this.id_benef = id_benef;
		this.nombre_benef = nombre_benef;
		this.num_id_benef = num_id_benef;
		this.correo_benef = correo_benef;
		this.telefono_benef = telefono_benef;
		this.id_tipo_benef = id_tipo_benef;
	}

	public long getId_benef() {
		return id_benef;
	}

	public void setId_benef(long id_benef) {
		this.id_benef = id_benef;
	}

	public String getNombre_benef() {
		return nombre_benef;
	}

	public void setNombre_benef(String nombre_benef) {
		this.nombre_benef = nombre_benef;
	}

	public String getNum_id_benef() {
		return num_id_benef;
	}

	public void setNum_id_benef(String num_id_benef) {
		this.num_id_benef = num_id_benef;
	}

	public String getCorreo_benef() {
		return correo_benef;
	}

	public void setCorreo_benef(String correo_benef) {
		this.correo_benef = correo_benef;
	}

	public String getTelefono_benef() {
		return telefono_benef;
	}

	public void setTelefono_benef(String telefono_benef) {
		this.telefono_benef = telefono_benef;
	}

	public String getId_tipo_benef() {
		return id_tipo_benef;
	}

	public void setId_tipo_benef(String id_tipo_benef) {
		this.id_tipo_benef = id_tipo_benef;
	}

	@Override
	public String toString() {
		return "Beneficiario [id_benef=" + id_benef + ", nombre_benef=" + nombre_benef + ", num_id_benef="
				+ num_id_benef + ", correo_benef=" + correo_benef + ", telefono_benef=" + telefono_benef
				+ ", id_tipo_benef=" + id_tipo_benef + "]";
	}

}
