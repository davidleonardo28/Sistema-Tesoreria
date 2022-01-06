package co.edu.unbosque.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "conciliacion_bancaria")
public class Conciliacion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_conciliacion")
	private long id_conciliacion;

	@Column(name = "fecha_final")
	private String fecha_final;

	@Column(name = "saldo_extracto")
	private long saldo_extracto;

	@Column(name = "total_ingresos")
	private String total_ingresos;

	@Column(name = "saldo_final")
	private String saldo_final;

	@Column(name = "id_cuenta")
	private String id_cuenta;

	@Column(name = "total_gastos")
	private String total_gastos;

	public Conciliacion() {

	}

	public Conciliacion(long id_conciliacion, String fecha_final, long saldo_extracto, String total_ingresos,
			String saldo_final, String id_cuenta, String total_gastos) {
		super();
		this.id_conciliacion = id_conciliacion;
		this.fecha_final = fecha_final;
		this.saldo_extracto = saldo_extracto;
		this.total_ingresos = total_ingresos;
		this.saldo_final = saldo_final;
		this.id_cuenta = id_cuenta;
		this.total_gastos = total_gastos;
	}

	public long getId_conciliacion() {
		return id_conciliacion;
	}

	public void setId_conciliacion(long id_conciliacion) {
		this.id_conciliacion = id_conciliacion;
	}

	public String getFecha_final() {
		return fecha_final;
	}

	public void setFecha_final(String fecha_final) {
		this.fecha_final = fecha_final;
	}

	public long getSaldo_extracto() {
		return saldo_extracto;
	}

	public void setSaldo_extracto(long saldo_extracto) {
		this.saldo_extracto = saldo_extracto;
	}

	public String getTotal_ingresos() {
		return total_ingresos;
	}

	public void setTotal_ingresos(String total_ingresos) {
		this.total_ingresos = total_ingresos;
	}

	public String getSaldo_final() {
		return saldo_final;
	}

	public void setSaldo_final(String saldo_final) {
		this.saldo_final = saldo_final;
	}

	public String getId_cuenta() {
		return id_cuenta;
	}

	public void setId_cuenta(String id_cuenta) {
		this.id_cuenta = id_cuenta;
	}

	public String getTotal_gastos() {
		return total_gastos;
	}

	public void setTotal_gastos(String total_gastos) {
		this.total_gastos = total_gastos;
	}

	@Override
	public String toString() {
		return "Conciliacion [id_conciliacion=" + id_conciliacion + ", fecha_final=" + fecha_final + ", saldo_extracto="
				+ saldo_extracto + ", total_ingresos=" + total_ingresos + ", saldo_final=" + saldo_final
				+ ", id_cuenta=" + id_cuenta + ", total_gastos=" + total_gastos + "]";
	}

}
