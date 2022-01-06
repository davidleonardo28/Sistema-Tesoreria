package co.edu.unbosque.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

import co.edu.unbosque.model.CuentaBancaria;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class CuentaDaoImp implements CuentaDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<CuentaBancaria> getCuenta() {

		return entityManager.createQuery("FROM CuentaBancaria").getResultList();

	}

	@Override
	public int numCuenta() {

		return Integer.parseInt(
				entityManager.createQuery("SELECT MAX(CAST(id_cuenta AS int)) AS id_cuenta FROM CuentaBancaria	")
						.getResultList().get(0).toString())
				+ 1;

	}

	@Override
	public void registrar(CuentaBancaria cuenta) {

		String query = "INSERT INTO cuenta_bancaria (id_cuenta,num_cuenta,saldo_cuenta,notas_adicionales,pais_cuenta,id_tipo_cuenta,id_banco,nombre_cuenta) "
				+ "VALUES (:id_cuenta,:num_cuenta,:saldo_cuenta,:notas_adicionales,:pais_cuenta,:id_tipo_cuenta,:id_banco,:nombre_cuenta)";
		entityManager.createNativeQuery(query).setParameter("id_cuenta", cuenta.getId_cuenta())
				.setParameter("num_cuenta", cuenta.getNum_cuenta())
				.setParameter("saldo_cuenta", cuenta.getSaldo_cuenta())
				.setParameter("notas_adicionales", cuenta.getNotas_adicionales())
				.setParameter("pais_cuenta", cuenta.getPais_cuenta())
				.setParameter("id_tipo_cuenta", cuenta.getId_tipo_cuenta())
				.setParameter("id_banco", cuenta.getId_banco()).setParameter("nombre_cuenta", cuenta.getNombre_cuenta())
				.executeUpdate();
	}

	@Transactional
	public void actualizarSaldo(CuentaBancaria cuenta) {

		Long id = cuenta.getId_cuenta();

		entityManager
				.createQuery("UPDATE CuentaBancaria e SET e.saldo_cuenta=:saldo_cuenta WHERE e.id_cuenta='"
						+ String.valueOf(id) + "'")
				.setParameter("saldo_cuenta", cuenta.getSaldo_cuenta()).executeUpdate();

	}

}
