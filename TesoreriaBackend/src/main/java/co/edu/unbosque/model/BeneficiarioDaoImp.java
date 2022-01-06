package co.edu.unbosque.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

import co.edu.unbosque.model.Beneficiario;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class BeneficiarioDaoImp implements BeneficiarioDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Beneficiario> getBeneficiaro() {

		return entityManager.createQuery("FROM Beneficiario ORDER BY id_benef ASC").getResultList();

	}

}
