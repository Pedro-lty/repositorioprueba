document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const codigoBusqueda = params.get('codigo');

    let productos = JSON.parse(localStorage.getItem('producto')) || [];

    const index = productos.findIndex(p => String(p.codigo) === String(codigoBusqueda));

    if (index === -1) {
        alert('Producto no encontrado');
        window.location.href = '/paginas/paginas_admin/admin_productos.html';
        return;
    }

    const prod = productos[index];

    document.getElementById('nombre').value = prod.nombre;
    document.getElementById('categoria').value = prod.categoria;
    document.getElementById('precio').value = prod.precio;
    document.getElementById('stock').value = prod.stock;
    document.getElementById('descripcion').value = prod.descripcion || '';

    const formulario = document.getElementById('formulario-editar');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        productos[index].nombre = document.getElementById('nombre').value;
        productos[index].categoria = document.getElementById('categoria').value;
        productos[index].precio = document.getElementById('precio').value;
        productos[index].stock = document.getElementById('stock').value;
        productos[index].descripcion = document.getElementById('descripcion').value;

        localStorage.setItem('producto', JSON.stringify(productos));

        alert('Producto actualizado con éxito');
        window.location.href = '/paginas/paginas_admin/admin_productos.html';
    });
});