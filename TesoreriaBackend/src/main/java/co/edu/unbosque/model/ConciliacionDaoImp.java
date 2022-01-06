package co.edu.unbosque.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class ConciliacionDaoImp implements ConciliacionDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Conciliacion> getList() {

		return entityManager.createQuery("FROM Conciliacion ORDER BY CAST(id_conciliacion AS int)").getResultList();

	}

	@Override
	public int numConciliacion() {

		return Integer.parseInt(entityManager
				.createQuery("SELECT MAX(CAST(id_conciliacion AS int)) AS id_conciliacion FROM Conciliacion	")
				.getResultList().get(0).toString()) + 1;

	}

	public void registrar(Conciliacion con) {

		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();

		try {
			date = format.parse(con.getFecha_final());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		String query = "INSERT INTO conciliacion_bancaria (id_conciliacion,fecha_final,saldo_extracto,total_ingresos,saldo_final,id_cuenta,total_gastos) "
				+ "VALUES (:id_conciliacion,:fecha_final,:saldo_extracto,:total_ingresos,:saldo_final,:id_cuenta,:total_gastos)";
		entityManager.createNativeQuery(query).setParameter("id_conciliacion", con.getId_conciliacion())
				.setParameter("fecha_final", date)
				.setParameter("saldo_extracto", con.getSaldo_extracto())
				.setParameter("total_ingresos", Double.parseDouble(con.getTotal_ingresos()))
				.setParameter("saldo_final", Double.parseDouble(con.getSaldo_final()))
				.setParameter("id_cuenta", con.getId_cuenta())
				.setParameter("total_gastos", Double.parseDouble(con.getTotal_gastos())).executeUpdate();
	}

	@Override
	public double valorSaldoFinal() {

		return Double.parseDouble(entityManager.createQuery(
				"select saldo_final from Conciliacion group by id_conciliacion order by cast(id_conciliacion as int) desc")
				.getResultList().get(0).toString());

	}

}
