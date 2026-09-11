document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('detalle-usuario');
    if (!contenedor) return;

    const params = new URLSearchParams(window.location.search);
    const idUsuario = params.get('id');

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => String(u.id) === String(idUsuario));

    if (!usuario) {
        contenedor.innerHTML = '<p>Usuario no encontrado.</p>';
        return;
    }

    contenedor.innerHTML = `
        <p><strong>ID:</strong> ${usuario.id}</p>
        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Correo:</strong> ${usuario.correo}</p>
        <p><strong>Rol:</strong> ${usuario.rol}</p>
        <p><strong>Estado:</strong> ${usuario.estado || 'Activo'}</p>
        <a class="boton" href="/paginas/paginas_admin/admin_editar_usuario.html?id=${usuario.id}">Editar usuario</a>
    `;
});