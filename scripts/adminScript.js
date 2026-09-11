document.addEventListener('DOMContentLoaded', () => {

//SECCIÓN PRODUCTOS
    const contenedorProd = document.getElementById('lista-prod');

    if (contenedorProd) {
        let productos = JSON.parse(localStorage.getItem('producto'));

        if (!productos) {
            productos = [
                {
                    codigo: '001',
                    nombre: 'Teclado',
                    categoria: 'Periféricos',
                    precio: '49.990',
                    stock: '10'
                }
            ];
            localStorage.setItem('producto', JSON.stringify(productos));
        }

        contenedorProd.innerHTML = '';

        productos.forEach(producto => {
            contenedorProd.innerHTML += `
                <article class="producto">
                    <h2>${producto.nombre}</h2>
                    <p>Código: ${producto.codigo} | Categoría: ${producto.categoria}</p>
                    <p>Precio: $${producto.precio} | Stock: ${producto.stock} unidades</p>
                    <a href="paginas/paginas_admin/admin_mostrar_producto.html?codigo=${producto.codigo}">Ver producto</a>
                    <a href="paginas/paginas_admin/admin_editar_producto.html?codigo=${producto.codigo}">Editar</a>
                </article>
            `;
        });
    }

});
