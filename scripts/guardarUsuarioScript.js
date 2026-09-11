document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-usuario');

    if (!formulario) return;

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const contrasena = document.getElementById('contrasena').value;
        const confirmar = document.getElementById('confirmar').value;

        if (contrasena !== confirmar) {
            alert('Las contraseñas no coinciden');
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const nuevoUsuario = {
            id: String(usuarios.length + 1).padStart(3, '0'),
            nombre: document.getElementById('nombre').value,
            correo: document.getElementById('correo').value,
            rol: document.getElementById('rol').value,
            estado: 'Activo'
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuario guardado con éxito');
        window.location.href = '/paginas/paginas_admin/admin_usuarios.html';
    });
});