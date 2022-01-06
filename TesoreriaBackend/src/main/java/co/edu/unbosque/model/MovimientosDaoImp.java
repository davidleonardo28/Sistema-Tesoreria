package co.edu.unbosque.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class MovimientosDaoImp implements MovimientosDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public int numMov() {

		return Integer
				.parseInt(entityManager.createQuery("SELECT MAX(CAST(id_movim AS int)) AS id_movim FROM Movimientos")
						.getResultList().get(0).toString())
				+ 1;

	}

	public void registrar(Movimientos mov) {

		String query = "INSERT INTO Movimientos (id_movim,fecha_movim,num_pago,valor_concepto,cantidad_movim,total_movim,notas_info,notas_concepto,id_benef,id_pago,id_concepto,id_cuenta,id_impuesto,id_retencion,id_tipo_mov,estado_conciliacion) "
				+ "VALUES (:id_movim,:fecha_movim,:num_pago,:valor_concepto,:cantidad_movim,:total_movim,:notas_info,:notas_concepto,:id_benef,:id_pago,:id_concepto,:id_cuenta,:id_impuesto,:id_retencion,:id_tipo_mov,:estado_conciliacion)";
		entityManager.createNativeQuery(query).setParameter("id_movim", mov.getId_movim())
				.setParameter("fecha_movim", mov.getFecha_movim()).setParameter("num_pago", mov.getNum_pago())
				.setParameter("valor_concepto", Double.parseDouble(mov.getValor_concepto()))
				.setParameter("cantidad_movim", Double.parseDouble(mov.getCantidad_movim()))
				.setParameter("total_movim", Double.parseDouble(mov.getTotal_movim()))
				.setParameter("notas_info", mov.getNotas_info()).setParameter("notas_concepto", mov.getNotas_concepto())
				.setParameter("id_benef", mov.getId_benef()).setParameter("id_pago", mov.getId_pago())
				.setParameter("id_concepto", mov.getId_concepto()).setParameter("id_cuenta", mov.getId_cuenta())
				.setParameter("id_impuesto", mov.getId_impuesto()).setParameter("id_retencion", mov.getId_retencion())
				.setParameter("id_tipo_mov", mov.getId_tipo_mov())
				.setParameter("estado_conciliacion", mov.isEstado_conciliacion()).executeUpdate();
	}

	@Override
	public List<Movimientos> getListMovimientos() {
		return entityManager.createQuery("FROM Movimientos order by (CAST(id_movim AS int))").getResultList();

	}

	@Override
	public List<Movimientos> getListEstado() {
		return entityManager
				.createQuery("FROM Movimientos WHERE estado_conciliacion='false' ORDER BY (CAST(id_movim AS int))")
				.getResultList();

	}

	@Transactional
	public void estadoConciliacion(List<Movimientos> mov) {
		
		Long id = (long) 0;

		for (int i = 0; i < mov.size(); i++) {
			id = mov.get(i).getId_movim();

			entityManager
					.createQuery(
							"UPDATE Movimientos e SET e.estado_conciliacion=:estado_conciliacion WHERE e.id_movim='"
									+ String.valueOf(id) + "'")
					.setParameter("estado_conciliacion", mov.get(i).isEstado_conciliacion()).executeUpdate();

		}
	}

}
