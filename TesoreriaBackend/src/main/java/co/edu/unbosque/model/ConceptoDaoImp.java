package co.edu.unbosque.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

import co.edu.unbosque.model.Concepto;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class ConceptoDaoImp implements ConceptoDao {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Concepto> getConceptoIngreso() {

		return entityManager.createQuery("FROM Concepto WHERE id_tipo_concepto='1'").getResultList();

	}
	
	@Override
	public List<Concepto> getConceptoGasto() {

		return entityManager.createQuery("FROM Concepto WHERE id_tipo_concepto='2'").getResultList();

	}
	
	@Override
	public List<Concepto> getConcepto() {

		return entityManager.createQuery("FROM Concepto").getResultList();

	}

}
