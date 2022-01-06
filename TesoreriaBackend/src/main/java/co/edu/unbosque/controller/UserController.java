package co.edu.unbosque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.model.BeneficiarioDao;
import co.edu.unbosque.model.ConceptoDao;
import co.edu.unbosque.model.Conciliacion;
import co.edu.unbosque.model.ConciliacionDao;
import co.edu.unbosque.model.CuentaDao;
import co.edu.unbosque.model.ImpuestoDao;
import co.edu.unbosque.model.MetodoPagoDao;
import co.edu.unbosque.model.Movimientos;
import co.edu.unbosque.model.MovimientosDao;
import co.edu.unbosque.model.RetencionDao;
import co.edu.unbosque.model.TipoCuenta;
import co.edu.unbosque.model.TipoCuentaDao;
import co.edu.unbosque.model.UsuarioDao;
import co.edu.unbosque.model.Banco;
import co.edu.unbosque.model.BancoDao;
import co.edu.unbosque.model.Beneficiario;
import co.edu.unbosque.model.Concepto;
import co.edu.unbosque.model.CuentaBancaria;
import co.edu.unbosque.model.Impuesto;
import co.edu.unbosque.model.MetodoPago;
import co.edu.unbosque.model.Retencion;
import co.edu.unbosque.model.User;

@RestController
@RequestMapping("/api/v1")
@ComponentScan(basePackageClasses = { UsuarioDao.class })
@CrossOrigin(origins = { "https://localhost:4200", "http://localhost:4200" })
public class UserController {

	@Autowired
	private UsuarioDao usuarioDao;

	@Autowired
	private ImpuestoDao impuestoDao;

	@Autowired
	private BeneficiarioDao beneficiarioDao;

	@Autowired
	private ConceptoDao conceptoDao;

	@Autowired
	private MetodoPagoDao metodoPagoDao;

	@Autowired
	private RetencionDao retencionDao;

	@Autowired
	private CuentaDao cuentaDao;

	@Autowired
	private MovimientosDao movimDao;

	@Autowired
	private ConciliacionDao conciliacionDao;

	@Autowired
	private TipoCuentaDao tipoCuentaDao;

	@Autowired
	private BancoDao bancoDao;

	@RequestMapping(value = "api/users", method = RequestMethod.GET)
	public List<User> getUsers() {
		return usuarioDao.getUsuarios();
	}

	@RequestMapping(value = "/api/registro", method = RequestMethod.POST)
	public void registrarUsuario(@RequestBody User user) {
		usuarioDao.registrar(user);
	}

	@RequestMapping(value = "/api/numEmp", method = RequestMethod.GET)
	public int numId() {
		return usuarioDao.num();
	}

	@RequestMapping(value = "api/eliminar/{id_emp}", method = RequestMethod.DELETE)
	public void eliminar(@PathVariable Long id_emp) {
		usuarioDao.eliminar(id_emp);
	}

	/** Autentication login */
	@RequestMapping(value = "api/login", method = RequestMethod.POST)
	public ResponseEntity<User> login(@RequestBody User user) {
		if (usuarioDao.VerificarCredenciales(user)) {
			return ResponseEntity.ok().body(usuarioDao.getUser(user.getCorreo_emp()));
		}
		return ResponseEntity.status(401).body(user);
	}

	@RequestMapping(value = "/api/desbloquear", method = RequestMethod.PUT)
	public void actualizar(@RequestBody User user) {
		usuarioDao.actualizar(user);
	}

	@RequestMapping(value = "api/bloquear", method = RequestMethod.PUT)
	public void bloquear(@RequestBody User user) {
		usuarioDao.bloquear(user);
	}

	@RequestMapping(value = "api/impuesto", method = RequestMethod.GET)
	public List<Impuesto> getImpuesto() {
		return impuestoDao.getImpuesto();
	}

	@RequestMapping(value = "api/beneficiario", method = RequestMethod.GET)
	public List<Beneficiario> getBeneficiario() {
		return beneficiarioDao.getBeneficiaro();
	}

	@RequestMapping(value = "api/concepto", method = RequestMethod.GET)
	public List<Concepto> getConcepto() {
		return conceptoDao.getConcepto();
	}

	@RequestMapping(value = "api/conceptoGasto", method = RequestMethod.GET)
	public List<Concepto> getConceptoGasto() {
		return conceptoDao.getConceptoGasto();
	}

	@RequestMapping(value = "api/conceptoIngreso", method = RequestMethod.GET)
	public List<Concepto> getConceptoIngreso() {
		return conceptoDao.getConceptoIngreso();
	}

	@RequestMapping(value = "api/pago", method = RequestMethod.GET)
	public List<MetodoPago> getMetodoPago() {
		return metodoPagoDao.getMetodoPago();
	}

	@RequestMapping(value = "api/retencion", method = RequestMethod.GET)
	public List<Retencion> getRetencion() {
		return retencionDao.getRetencion();
	}

	@RequestMapping(value = "api/cuenta", method = RequestMethod.GET)
	public List<CuentaBancaria> getCuenta() {
		return cuentaDao.getCuenta();
	}

	@RequestMapping(value = "api/numMov", method = RequestMethod.GET)
	public int numGasto() {
		return movimDao.numMov();
	}

	@RequestMapping(value = "api/numCuenta", method = RequestMethod.GET)
	public int numCuenta() {
		return cuentaDao.numCuenta();
	}

	@RequestMapping(value = "/api/registroMov", method = RequestMethod.POST)
	public void registrarMovimiento(@RequestBody Movimientos movimiento) {
		movimDao.registrar(movimiento);
	}

	@RequestMapping(value = "/api/conciliacion", method = RequestMethod.GET)
	public List<Conciliacion> geList() {
		return conciliacionDao.getList();
	}

	@RequestMapping(value = "/api/tipoCuenta", method = RequestMethod.GET)
	public List<TipoCuenta> getTipoCuenta() {
		return tipoCuentaDao.getTipo();
	}

	@RequestMapping(value = "/api/banco", method = RequestMethod.GET)
	public List<Banco> getBanco() {
		return bancoDao.getBanco();
	}

	@RequestMapping(value = "/api/registroCuenta", method = RequestMethod.POST)
	public void registrarCuentaBancaria(@RequestBody CuentaBancaria cuenta) {
		cuentaDao.registrar(cuenta);
	}

	@RequestMapping(value = "/api/listamovimiento", method = RequestMethod.GET)
	public List<Movimientos> getListMovimientos() {
		return movimDao.getListMovimientos();
	}
	
	@RequestMapping(value = "/api/listaEstado", method = RequestMethod.GET)
	public List<Movimientos> getListEstado() {
		return movimDao.getListEstado();
	}

	@RequestMapping(value = "/api/genOtro", method = RequestMethod.GET)
	public int generoOtro() {
		return usuarioDao.generoOtro();
	}

	@RequestMapping(value = "/api/genFem", method = RequestMethod.GET)
	public int generoFem() {
		return usuarioDao.generoFem();
	}

	@RequestMapping(value = "/api/genMas", method = RequestMethod.GET)
	public int generoMas() {
		return usuarioDao.generoMas();
	}

	@RequestMapping(value = "api/numConciliacion", method = RequestMethod.GET)
	public int numConciliacion() {
		return conciliacionDao.numConciliacion();
	}

	@RequestMapping(value = "/api/registroConciliacion", method = RequestMethod.POST)
	public void registrarConciliacion(@RequestBody Conciliacion conciliacion) {
		conciliacionDao.registrar(conciliacion);
	}

	@RequestMapping(value = "api/estadoConciliacion", method = RequestMethod.PUT)
	public void estadoConciliacion(@RequestBody List<Movimientos> mov) {
		movimDao.estadoConciliacion(mov);
	}

	@RequestMapping(value = "api/valorSaldoFinal", method = RequestMethod.GET)
	public double valorSaldoFinal() {
		return conciliacionDao.valorSaldoFinal();
	}
	@RequestMapping(value = "api/actualizarSaldo", method = RequestMethod.PUT)
	public void actualizarSaldo(@RequestBody CuentaBancaria cuenta) {
		cuentaDao.actualizarSaldo(cuenta);
	}
}
