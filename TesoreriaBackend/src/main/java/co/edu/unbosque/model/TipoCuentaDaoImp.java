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
public class TipoCuentaDaoImp implements TipoCuentaDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<TipoCuenta> getTipo() {

		return entityManager.createQuery("FROM TipoCuenta ORDER BY id_tipo_cuenta ASC").getResultList();

	}

}
