// Usuarios base del sistema
const USUARIOS_BASE = [
  { email: 'admin@neonfox.com', password: 'admin123', role: 'Admin', nombre: 'Administrador' },
  { email: 'cliente@neonfox.com', password: 'cliente123', role: 'Cliente', nombre: 'Cliente Demo' }
];
 
function inicializarUsuarios() {
  try {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
 
    USUARIOS_BASE.forEach(usuarioBase => {
      const existe = usuarios.some(u => u.email && u.email.toLowerCase() === usuarioBase.email.toLowerCase());
      if (!existe) usuarios.push(usuarioBase);
    });
 
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log('[scriptLogin] Usuarios inicializados correctamente:', usuarios);
  } catch (error) {
    console.error('[scriptLogin] Error al inicializar usuarios:', error);
  }
}
 
function configurarFormularioLogin() {
  const loginForm = document.querySelector('form.login') || document.querySelector('form');
 
  if (!loginForm) {
    console.error('[scriptLogin] No se encontró el formulario de login en el DOM.');
    return;
  }
 
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('[scriptLogin] Submit detectado, procesando login...');
 
    try {
      const inputEmail = document.getElementById('correo') || document.querySelector('input[type="email"]');
      const inputPassword = document.getElementById('contraseña') || document.querySelector('input[type="password"]');
 
      if (!inputEmail || !inputPassword) {
        alert('Error: No se encontraron los campos del formulario.');
        console.error('[scriptLogin] Campos de email o password no encontrados en el DOM.');
        return;
      }
 
      const email = inputEmail.value.trim();
      const password = inputPassword.value.trim();
 
      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      console.log('[scriptLogin] Usuarios disponibles al momento del login:', usuarios);
 
      const usuarioEncontrado = usuarios.find(u => u.email && u.email.toLowerCase() === email.toLowerCase());
 
      if (!usuarioEncontrado) {
        alert('El correo no está registrado.');
        console.warn('[scriptLogin] No se encontró usuario con email:', email);
        return;
      }
 
      if (usuarioEncontrado.password !== password) {
        alert('Contraseña incorrecta.');
        console.warn('[scriptLogin] Contraseña incorrecta para:', email);
        return;
      }
 
      // Guardar la sesión activa
      localStorage.setItem('user', JSON.stringify({
        email: usuarioEncontrado.email,
        nombre: usuarioEncontrado.nombre || 'Usuario',
        role: usuarioEncontrado.role || 'Cliente'
      }));
 
      console.log('[scriptLogin] Login exitoso, redirigiendo. Rol:', usuarioEncontrado.role);
 
      // Redirección según rol
      if (usuarioEncontrado.role === 'Admin') {
        window.location.href = '/paginas/paginas_admin/admin_dashboard.html';
      } else {
        window.location.href = '/index.html';
      }
    } catch (error) {
      console.error('[scriptLogin] Error durante el proceso de login:', error);
      alert('Ocurrió un error inesperado al iniciar sesión. Revisa la consola para más detalles.');
    }
  });
 
  console.log('[scriptLogin] Listener de submit enganchado correctamente al formulario.');
}
 
// Se ejecuta de inmediato como respaldo, por si DOMContentLoaded ya disparó
// o el script se carga después de que el DOM esté listo.
try {
  inicializarUsuarios();
} catch (error) {
  console.error('[scriptLogin] Error en inicialización inmediata:', error);
}
 
document.addEventListener('DOMContentLoaded', function () {
  console.log('[scriptLogin] DOMContentLoaded disparado.');
  inicializarUsuarios();
  configurarFormularioLogin();
});
 