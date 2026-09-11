document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const idBusqueda = params.get('id');

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const index = usuarios.findIndex(u => String(u.id) === String(idBusqueda));

    if (index === -1) {
        alert('Usuario no encontrado');
        window.location.href = '/paginas/paginas_admin/admin_usuarios.html';
        return;
    }

    const u = usuarios[index];

    document.getElementById('nombre').value = u.nombre;
    document.getElementById('rol').value = u.rol;
    document.getElementById('correo').value = u.correo;
    if (document.getElementById('estado')) document.getElementById('estado').value = u.estado;

    const formulario = document.getElementById('formulario-editar-usuario');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        usuarios[index].nombre = document.getElementById('nombre').value;
        usuarios[index].rol = document.getElementById('rol').value;
        usuarios[index].correo = document.getElementById('correo').value;
        if (document.getElementById('estado')) {
            usuarios[index].estado = document.getElementById('estado').value;
        }

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuario actualizado con éxito');
        window.location.href = '/paginas/paginas_admin/admin_usuarios.html';
    });
});