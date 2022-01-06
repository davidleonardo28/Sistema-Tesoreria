package co.edu.unbosque.model;

import java.util.List;

public interface ConciliacionDao {

	List<Conciliacion> getList();
	
	int numConciliacion();
	
	void registrar(Conciliacion con);
	
	double valorSaldoFinal();
}
