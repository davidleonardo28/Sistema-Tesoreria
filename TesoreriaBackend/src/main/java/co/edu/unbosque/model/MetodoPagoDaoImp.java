package co.edu.unbosque.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

import co.edu.unbosque.model.MetodoPago;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class MetodoPagoDaoImp implements MetodoPagoDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<MetodoPago> getMetodoPago() {

		return entityManager.createQuery("FROM MetodoPago").getResultList();

	}
	
}
