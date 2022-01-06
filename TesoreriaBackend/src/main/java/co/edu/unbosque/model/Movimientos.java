package co.edu.unbosque.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "movimientos")
public class Movimientos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_movim")
	private long id_movim;

	@Column(name = "fecha_movim")
	private Date fecha_movim;

	@Column(name = "num_pago")
	private String num_pago;

	@Column(name = "valor_concepto")
	private String valor_concepto;

	@Column(name = "cantidad_movim")
	private String cantidad_movim;

	@Column(name = "total_movim")
	private String total_movim;

	@Column(name = "notas_info")
	private String notas_info;

	@Column(name = "notas_concepto")
	private String notas_concepto;

	@Column(name = "id_benef")
	private String id_benef;

	@Column(name = "id_pago")
	private String id_pago;

	@Column(name = "id_concepto")
	private String id_concepto;

	@Column(name = "id_cuenta")
	private String id_cuenta;

	@Column(name = "id_impuesto")
	private String id_impuesto;

	@Column(name = "id_retencion")
	private String id_retencion;

	@Column(name = "id_tipo_mov")
	private String id_tipo_mov;

	@Column(name = "estado_conciliacion")
	private boolean estado_conciliacion;

	public Movimientos() {

	}

	public Movimientos(long id_movim, Date fecha_movim, String num_pago, String valor_concepto, String cantidad_movim,
			String total_movim, String notas_info, String notas_concepto, String id_benef, String id_pago,
			String id_concepto, String id_cuenta, String id_impuesto, String id_retencion, String id_tipo_mov,
			boolean estado_conciliacion) {
		super();
		this.id_movim = id_movim;
		this.fecha_movim = fecha_movim;
		this.num_pago = num_pago;
		this.valor_concepto = valor_concepto;
		this.cantidad_movim = cantidad_movim;
		this.total_movim = total_movim;
		this.notas_info = notas_info;
		this.notas_concepto = notas_concepto;
		this.id_benef = id_benef;
		this.id_pago = id_pago;
		this.id_concepto = id_concepto;
		this.id_cuenta = id_cuenta;
		this.id_impuesto = id_impuesto;
		this.id_retencion = id_retencion;
		this.id_tipo_mov = id_tipo_mov;
		this.estado_conciliacion = estado_conciliacion;
	}

	public long getId_movim() {
		return id_movim;
	}

	public void setId_movim(long id_movim) {
		this.id_movim = id_movim;
	}

	public Date getFecha_movim() {
		return fecha_movim;
	}

	public void setFecha_movim(Date fecha_movim) {
		this.fecha_movim = fecha_movim;
	}

	public String getNum_pago() {
		return num_pago;
	}

	public void setNum_pago(String num_pago) {
		this.num_pago = num_pago;
	}

	public String getValor_concepto() {
		return valor_concepto;
	}

	public void setValor_concepto(String valor_concepto) {
		this.valor_concepto = valor_concepto;
	}

	public String getCantidad_movim() {
		return cantidad_movim;
	}

	public void setCantidad_movim(String cantidad_movim) {
		this.cantidad_movim = cantidad_movim;
	}

	public String getTotal_movim() {
		return total_movim;
	}

	public void setTotal_movim(String total_movim) {
		this.total_movim = total_movim;
	}

	public String getNotas_info() {
		return notas_info;
	}

	public void setNotas_info(String notas_info) {
		this.notas_info = notas_info;
	}

	public String getNotas_concepto() {
		return notas_concepto;
	}

	public void setNotas_concepto(String notas_concepto) {
		this.notas_concepto = notas_concepto;
	}

	public String getId_benef() {
		return id_benef;
	}

	public void setId_benef(String id_benef) {
		this.id_benef = id_benef;
	}

	public String getId_pago() {
		return id_pago;
	}

	public void setId_pago(String id_pago) {
		this.id_pago = id_pago;
	}

	public String getId_concepto() {
		return id_concepto;
	}

	public void setId_concepto(String id_concepto) {
		this.id_concepto = id_concepto;
	}

	public String getId_cuenta() {
		return id_cuenta;
	}

	public void setId_cuenta(String id_cuenta) {
		this.id_cuenta = id_cuenta;
	}

	public String getId_impuesto() {
		return id_impuesto;
	}

	public void setId_impuesto(String id_impuesto) {
		this.id_impuesto = id_impuesto;
	}

	public String getId_retencion() {
		return id_retencion;
	}

	public void setId_retencion(String id_retencion) {
		this.id_retencion = id_retencion;
	}

	public String getId_tipo_mov() {
		return id_tipo_mov;
	}

	public void setId_tipo_mov(String id_tipo_mov) {
		this.id_tipo_mov = id_tipo_mov;
	}

	public boolean isEstado_conciliacion() {
		return estado_conciliacion;
	}

	public void setEstado_conciliacion(boolean estado_conciliacion) {
		this.estado_conciliacion = estado_conciliacion;
	}

	@Override
	public String toString() {
		return "Movimientos [id_movim=" + id_movim + ", fecha_movim=" + fecha_movim + ", num_pago=" + num_pago
				+ ", valor_concepto=" + valor_concepto + ", cantidad_movim=" + cantidad_movim + ", total_movim="
				+ total_movim + ", notas_info=" + notas_info + ", notas_concepto=" + notas_concepto + ", id_benef="
				+ id_benef + ", id_pago=" + id_pago + ", id_concepto=" + id_concepto + ", id_cuenta=" + id_cuenta
				+ ", id_impuesto=" + id_impuesto + ", id_retencion=" + id_retencion + ", id_tipo_mov=" + id_tipo_mov
				+ ", estado_conciliacion=" + estado_conciliacion + "]";
	}

}
