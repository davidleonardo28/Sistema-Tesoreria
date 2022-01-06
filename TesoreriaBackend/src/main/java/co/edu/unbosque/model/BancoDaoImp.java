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
public class BancoDaoImp implements BancoDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Banco> getBanco() {

		return entityManager.createQuery("FROM Banco ORDER BY id_banco ASC").getResultList();

	}

}
