package co.edu.unbosque.model;

import java.util.List;

import co.edu.unbosque.model.CuentaBancaria;

public interface CuentaDao {

	List<CuentaBancaria> getCuenta();

	int numCuenta();

	void registrar(CuentaBancaria cuenta);
	
	void actualizarSaldo(CuentaBancaria cuenta);

}
