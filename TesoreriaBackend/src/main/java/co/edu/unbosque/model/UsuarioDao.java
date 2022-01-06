package co.edu.unbosque.model;

import java.util.List;

public interface UsuarioDao {

	List<User> getUsuarios();

	void eliminar(Long id_emp);

	boolean VerificarCredenciales(User user);
	
	User getUser(String correo);

	void actualizar(User user);
	
	void bloquear(User user);

	void registrar(User user);
	
	int num();

	int generoOtro();

	int generoFem();

	int generoMas();
}