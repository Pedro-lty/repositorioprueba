document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const codigoBusqueda = params.get('codigo');

    const productos = JSON.parse(localStorage.getItem('producto')) || [];

    const prod = productos.find(p => String(p.codigo) === String(codigoBusqueda));

    if (prod) {
        document.getElementById('p-codigo').textContent = prod.codigo;
        document.getElementById('p-nombre').textContent = prod.nombre;
        document.getElementById('p-categoria').textContent = prod.categoria;
        document.getElementById('p-precio').textContent = prod.precio;
        document.getElementById('p-stock').textContent = prod.stock;
        document.getElementById('p-descripcion').textContent = prod.descripcion || 'Sin descripción';

        const btnEditar = document.getElementById('btn-editar');
        if (btnEditar) {
            btnEditar.href = `/paginas/paginas_admin/admin_editar_producto.html?codigo=${prod.codigo}`;
        }
    } else {
        alert('Producto no encontrado.');
        window.location.href = '/paginas/paginas_admin/admin_productos.html';
    }
});