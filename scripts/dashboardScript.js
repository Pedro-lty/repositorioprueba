document.addEventListener('DOMContentLoaded', () => {

    const productos = JSON.parse(localStorage.getItem('producto')) || [];
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const elemProductos = document.getElementById('cant-productos');
    const elemUsuarios = document.getElementById('cant-usuarios');
    const elemStock = document.getElementById('total-stock');

    if (elemProductos) elemProductos.textContent = productos.length;
    if (elemUsuarios) elemUsuarios.textContent = usuarios.length;

    if (elemStock) {
        const sumaStock = productos.reduce((total, p) => total + (parseInt(p.stock) || 0), 0);
        elemStock.textContent = sumaStock;
    }
});