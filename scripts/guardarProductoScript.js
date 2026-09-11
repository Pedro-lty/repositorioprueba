function guardar() {
    let nombreInput = document.getElementById('nombre').value;
    let categoriaInput = document.getElementById('categoria').value;
    let precioInput = document.getElementById('precio').value;
    let stockInput = document.getElementById('stock').value;

    if (!nombreInput || !precioInput) {
        alert("Por favor completa al menos el Nombre y el Precio.");
        return;
    }

    let productos = JSON.parse(localStorage.getItem('producto')) || [];

    let nuevoProducto = {
        codigo: String(productos.length + 1).padStart(3, '0'),
        nombre: nombreInput,
        categoria: categoriaInput || 'Sin categoría',
        precio: precioInput,
        stock: stockInput || '0'
    };

    productos.push(nuevoProducto);
    localStorage.setItem('producto', JSON.stringify(productos));

    window.location.href = "/paginas/paginas_admin/admin_productos.html";
}