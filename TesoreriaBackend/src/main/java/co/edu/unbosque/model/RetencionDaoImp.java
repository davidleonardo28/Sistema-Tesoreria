package co.edu.unbosque.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

import co.edu.unbosque.model.Retencion;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class RetencionDaoImp implements RetencionDao {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Retencion> getRetencion() {

		return entityManager.createQuery("FROM Retencion").getResultList();

	}

}
