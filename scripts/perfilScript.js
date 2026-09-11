document.addEventListener('DOMContentLoaded', () => {
    const usuarioActivo = JSON.parse(localStorage.getItem('user'));

    const elemNombre = document.getElementById('perfil-nombre');
    const elemCorreo = document.getElementById('perfil-correo');
    const elemRol = document.getElementById('perfil-rol');

    if (usuarioActivo) {
        if (elemNombre) elemNombre.textContent = usuarioActivo.nombre || 'Administrador';
        if (elemCorreo) elemCorreo.textContent = usuarioActivo.email || 'No registrado';
        if (elemRol) elemRol.textContent = usuarioActivo.role || 'Admin';
    } else {
        if (elemNombre) elemNombre.textContent = 'Sin sesión';
        if (elemCorreo) elemCorreo.textContent = 'No has iniciado sesión';
        if (elemRol) elemRol.textContent = 'Invitado';
    }
});