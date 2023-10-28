// URL del archivo JSON
const url = "data/data.json";

// Selecciona el contenedor "resultado"
const contenedorResultado = document.querySelector(".resultado");

// Selecciona los elementos <p> dentro del aside
const elementosDeLista = document.querySelectorAll("aside p");

// Realiza una solicitud Fetch para cargar el JSON
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Agregar un evento de clic a los elementos de la lista
    elementosDeLista.forEach((elementoLista) => {
      elementoLista.addEventListener("click", () => {
        // Encuentra el contenido correspondiente en el JSON
        const contenidoSeleccionado = data.find((dato) => dato.titulo === elementoLista.textContent);
        
        // Limpia el contenedor
        contenedorResultado.innerHTML = "";

        if (contenidoSeleccionado) {
          // Crea elementos HTML para mostrar el contenido
          const elemento = document.createElement("div");
          const titulo = document.createElement("h2");
          const genero = document.createElement("p");
          const descripcion = document.createElement("p");

          titulo.textContent = contenidoSeleccionado.titulo;
          genero.textContent = contenidoSeleccionado.genero;
          descripcion.textContent = contenidoSeleccionado.descripcion;

          elemento.classList.add("elemento");
          titulo.classList.add("titulo");
          genero.classList.add("genero");
          descripcion.classList.add("descripcion");

          elemento.appendChild(titulo);
          elemento.appendChild(genero);
          elemento.appendChild(descripcion);

          // Agrega el contenido al contenedor
          contenedorResultado.appendChild(elemento);
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error al cargar el JSON:", error);
  });
