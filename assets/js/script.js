// Array de productos
const productos = [
    {
      nombre: "Ojos",
      imagen: "./assets/img/ojos.png",
      descripcion: "Una descripción detallada de los ojos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur urna quis eros sollicitudin, sed hendrerit justo bibendum."
    },
    {
      nombre: "Mineon",
      imagen: "./assets/img/mineon.png",
      descripcion: "Una descripción detallada de Mineon. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur urna quis eros sollicitudin, sed hendrerit justo bibendum."
    },
    {
      nombre: "AUTO",
      imagen: "./assets/img/auto.png",
      descripcion: "Una descripción detallada de AUTO. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur urna quis eros sollicitudin, sed hendrerit justo bibendum."
    }
  ];
  
  // funcion busqueda
  function search() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const resultados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchText)
    );
  
    mostrarResultados(resultados);
  }
  
  // Funcion para mostrar los resultados 
  function mostrarResultados(resultados) {
    const contenedorResultados = document.getElementById("resultadosBusqueda");
    contenedorResultados.innerHTML = "";
  
    if (resultados.length === 0) {
      contenedorResultados.innerHTML = "<p>No se encontraron resultados.</p>";
      return;
    }
  
    resultados.forEach(producto => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("card", "mb-3");
      divProducto.innerHTML = `
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${producto.imagen}" class="card-img" alt="${producto.nombre}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      contenedorResultados.appendChild(divProducto);
    });
  }