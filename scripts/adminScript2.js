//SECCIÓN USUARIOS
    const contenedorUser = document.getElementById('lista-usuarios');

    if (contenedorUser) {
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        contenedorUser.innerHTML = '';

        if (usuarios.length === 0) {
            contenedorUser.innerHTML = '<p>No hay usuarios registrados.</p>';
        } else {
            usuarios.forEach(u => {
                contenedorUser.innerHTML += `
                    <article class="usuario">
                        <h2>${u.nombre}</h2>
                        <p>ID: ${u.id} | Rol: ${u.rol}</p>
                        <p>Correo: ${u.correo} | Estado: ${u.estado}</p>
                        <a href="paginas/paginas_admin/admin_mostrar_usuario.html?id=${u.id}">Ver usuario</a>
                        <a href="paginas/paginas_admin/admin_editar_usuario.html?id=${u.id}">Editar</a>
                    </article>
                `;
            });
        }
    }
;