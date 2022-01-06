package co.edu.unbosque.model;

import java.util.List;

public interface MovimientosDao {

	int numMov();

	void registrar(Movimientos mov);

	List<Movimientos> getListMovimientos();

	List<Movimientos> getListEstado();
	
	void estadoConciliacion(List<Movimientos> mov);
}
