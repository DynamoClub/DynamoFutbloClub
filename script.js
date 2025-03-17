document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Al hacer scroll, cambiamos el navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburguesa (móvil)
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Dropdown en mobile
  dropdowns.forEach(dropdown => {
    const parentLink = dropdown.querySelector('a');
    parentLink.addEventListener('click', (e) => {
      // e.preventDefault(); // solo si no quieres navegar
      dropdown.classList.toggle('active');
    });
  });
});

//// Script Trofeos Inicio  
document.addEventListener('DOMContentLoaded', () => {
  const trofeoItems = document.querySelectorAll('.trofeo-item');

  trofeoItems.forEach((item) => {
      item.addEventListener('click', (e) => {
          // Prevenir que el clic afecte a otras tarjetas
          e.stopPropagation();

          // Cerrar todas las demás tarjetas activas
          trofeoItems.forEach((otherItem) => {
              if (otherItem !== item) {
                  otherItem.classList.remove('activo');
              }
          });

          // Alternar la tarjeta seleccionada
          item.classList.toggle('activo');
      });
  });
});
//// Script Trofeos Fin

///Scrip Noticias Index.hmtl (Inicio)
  document.addEventListener("DOMContentLoaded", () => {
  const noticias = [
  {
    imagen: "./Noticias/incripcionesabiertas.webp",
    titulo: "🎉 ¡Inicio Oficial de Entrenamientos en Vegas de Comfandi! ",
    descripcion: "La espera ha terminado y hoy, miércoles 15 de enero, damos inicio a los entrenamientos en nuestra Sede Vegas de Comfandi. ",
    link: "./NoticiasElaboradas/Inicio Oficial de Entrenamientos en Vegas de Comfandi.html",
    fecha: "2025-01-16"
  },
  {
    imagen: "./Noticias/comunicadooficial.webp",
    titulo: "📣 ¡El Club Deportivo Dynamo Inicia Actividades en Ciudad Córdoba! ⚽",
    descripcion: "El Club Deportivo Dynamo informa a todos los seguidores, deportistas y padres de familia que este jueves 16 de enero se realizará nuestra primera reunión del año",
    link: "./NoticiasElaboradas/El_Club_Deportivo_Dynamo_Inicia_Actividades_en_Ciudad_Córdoba.html",
    fecha: "2025-01-15"
  },
  {
    imagen: "./Noticias/formadopromesas.webp",
    titulo: "Formando Grandes Promesas",
    descripcion: "Estamos a pocos días de iniciar y Arrancamos con todo Prepárate para una nueva temporada llena de esfuerzo, diversión y superación en nuestro club deportivo.",
    link: "./NoticiasElaboradas/Formando_Grandes_Promesas.html",
    fecha: "2025-01-14"
  },
  {
    imagen: "./Noticias/vueltasaclases.webp",
    titulo: "Estamos a 5 Días de Iniciar",
    descripcion: "¡De Vueltas a Clases!",
    link: "./NoticiasElaboradas/Estamos_a_5_Días_de_Iniciar.html",
    fecha: "2025-01-11"
  },
  {
    imagen: "./Noticias/matriculasabiertas.webp",
    titulo: "¡Llegamos recargados, unete a nuestra familia inscripciones abiertas!",
    descripcion: "Matriculas Abiertas",
    link: "./NoticiasElaboradas/Llegamos_recargados,_unete_a_nuestra_familia_inscripciones_abiertas.html",
    fecha: "2025-01-09"
  },
  {
    imagen: "./Noticias/despedida2024.webp",
    titulo: "Prepárate para la despedida de Fin de Año",
    descripcion: "¡NUESTRA GRAN DESPEDIDA SE ACERCA NO FALTES!",
    link: "./NoticiasElaboradas/Prepárate_para_la_despedida_de_Fin_de_Año.html",
    fecha: "2024-12-17"
  },
  {
    imagen: "../Noticias/campeones.webp",
    titulo: "Final Copa Atlas| Formativo 🏆",
    descripcion: "Hoy  finaliza el torneo copa átlas para nuestras categorías formativas, que se consagraron campeonas",
    link: "./NoticiasElaboradas/Final_Copa_Atlas_Formativo.html",
    fecha: "2024-12-15"
  },
  {
    imagen: "./Noticias/exformadores.webp",
    titulo: "De Ex Jugadores de nuestro club a formadores de nuestro club🧡🖤",
    descripcion: "En club deportivo dynamo, no solo formamos grandes deportistas; también nos dedicamos a formar a los futuros formadores del fútbol. ",
    link: "./NoticiasElaboradas/De_Ex_Jugadores_de_nuestro_club_a_formadores_de_nuestro_club.html",
    fecha: "2024-12-11"
  },
  {
    imagen: "./Noticias/botadeoro.webp",
    titulo: "Bota de Oro @lifutbolvalle",
    descripcion: "Nuestro jugador Juan José Preciado de la categoría Sub-13 se alzó con la bota de oro, siendo uno de los jugadores más destacados de liga vallecaucana de fútbol con 34 anotaciones⚽️",
    link: "./NoticiasElaboradas/Bota_de_Oro_@lifutbolvalle.html",
    fecha: "2024-12-10"
  },
  {
    imagen: "./Noticias/subcampeones.webp",
    titulo: "Liga Vallecaucana | ¡SubCampeones! U-14",
    descripcion: "VOLVEREMOS MÁS FUERTES⚔️",
    link: "../NoticiasElaboradas/Liga_Vallecaucana__SubCampeones_U_14.html",
    fecha: "2024-12-10"
  },



  //Espacio para agregar mas noticas


  ];





  // Ordenar las noticias por fecha (más recientes primero)
  const noticiasOrdenadas = noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  // Insertar la noticia estelar (la más reciente)
  const noticiaEstelar = noticiasOrdenadas[0];
  const contenedorDerecho = document.querySelector(".news-large");
  contenedorDerecho.innerHTML = `
    <article class="news-item2">
      <img src="${noticiaEstelar.imagen}" alt="${noticiaEstelar.titulo}">
      <div class="news-content">
        <p class="news-date">${new Date(noticiaEstelar.fecha).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</p>
        <h3 class="news-title">
          <a href="${noticiaEstelar.link}">${noticiaEstelar.titulo}</a>
        </h3>
        <p class="news-description">${noticiaEstelar.descripcion}</p>
      </div>
    </article>
  `;

  // Insertar las siguientes noticias en el contenedor izquierdo
  const contenedorIzquierdo = document.querySelector(".news-small");
  noticiasOrdenadas.slice(1, 3).forEach((noticia) => {
    const noticiaElemento = document.createElement("article");
    noticiaElemento.className = "news-item";
    noticiaElemento.innerHTML = `
      <img src="${noticia.imagen}" alt="${noticia.titulo}">
      <div class="news-content">
        <p class="news-date">${new Date(noticia.fecha).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</p>
        <h3 class="news-title">
          <a href="${noticia.link}">${noticia.titulo}</a>
        </h3>
        <p class="news-description">${noticia.descripcion}</p>
      </div>
    `;
    contenedorIzquierdo.appendChild(noticiaElemento);
  });
});
///Scrip Noticias Index.html (Fin)


///Noticias noticias.html (Inicio)  -->
document.addEventListener("DOMContentLoaded", () => {
    const noticiasContenedor = document.getElementById("noticias-contenedor");
    const cargarMasBtn = document.getElementById("cargar-mas");
  
    // Noticias precargadas con fechas
 
    // Noticias precargadas con fechas y enlaces actualizados
const noticias = [
  {
    imagen: "./Noticias/incripcionesabiertas.webp",
    titulo: "🎉 ¡Inicio Oficial de Entrenamientos en Vegas de Comfandi! ",
    descripcion: "La espera ha terminado y hoy, miércoles 15 de enero, damos inicio a los entrenamientos en nuestra Sede Vegas de Comfandi. ",
    link: "./NoticiasElaboradas/Inicio Oficial de Entrenamientos en Vegas de Comfandi.html",
    fecha: "2025-01-16"
  },
  {
    imagen: "./Noticias/comunicadooficial.webp",
    titulo: "📣 ¡El Club Deportivo Dynamo Inicia Actividades en Ciudad Córdoba! ⚽",
    descripcion: "El Club Deportivo Dynamo informa a todos los seguidores, deportistas y padres de familia que este jueves 16 de enero se realizará nuestra primera reunión del año",
    link: "./NoticiasElaboradas/El_Club_Deportivo_Dynamo_Inicia_Actividades_en_Ciudad_Córdoba.html",
    fecha: "2025-01-15"
  },
  {
    imagen: "./Noticias/formadopromesas.webp",
    titulo: "Formando Grandes Promesas",
    descripcion: "Estamos a pocos días de iniciar y Arrancamos con todo Prepárate para una nueva temporada llena de esfuerzo, diversión y superación en nuestro club deportivo.",
    link: "./NoticiasElaboradas/Formando_Grandes_Promesas.html",
    fecha: "2025-01-14"
  },
  {
    imagen: "./Noticias/vueltasaclases.webp",
    titulo: "Estamos a 5 Días de Iniciar",
    descripcion: "¡De Vueltas a Clases!",
    link: "./NoticiasElaboradas/Estamos_a_5_Días_de_Iniciar.html",
    fecha: "2025-01-11"
  },
  {
    imagen: "./Noticias/matriculasabiertas.webp",
    titulo: "¡Llegamos recargados, unete a nuestra familia inscripciones abiertas!",
    descripcion: "Matriculas Abiertas",
    link: "./NoticiasElaboradas/Llegamos_recargados,_unete_a_nuestra_familia_inscripciones_abiertas.html",
    fecha: "2025-01-09"
  },
  {
    imagen: "./Noticias/despedida2024.webp",
    titulo: "Prepárate para la despedida de Fin de Año",
    descripcion: "¡NUESTRA GRAN DESPEDIDA SE ACERCA NO FALTES!",
    link: "./NoticiasElaboradas/Prepárate_para_la_despedida_de_Fin_de_Año.html",
    fecha: "2024-12-17"
  },
  {
    imagen: "./Noticias/campeones.webp",
    titulo: "Final Copa Atlas| Formativo 🏆",
    descripcion: "Hoy finaliza el torneo copa átlas para nuestras categorías formativas, que se consagraron campeonas",
    link: "./NoticiasElaboradas/Final_Copa_Atlas_Formativo.html",
    fecha: "2024-12-15"
  },
  {
    imagen: "./Noticias/exformadores.webp",
    titulo: "De Ex Jugadores de nuestro club a formadores de nuestro club🧡🖤",
    descripcion: "En club deportivo dynamo, no solo formamos grandes deportistas; también nos dedicamos a formar a los futuros formadores del fútbol. ",
    link: "./NoticiasElaboradas/De_Ex_Jugadores_de_nuestro_club_a_formadores_de_nuestro_club.html",
    fecha: "2024-12-11"
  },
  {
    imagen: "./Noticias/botadeoro.webp",
    titulo: "Bota de Oro @lifutbolvalle",
    descripcion: "Nuestro jugador Juan José Preciado de la categoría Sub-13 se alzó con la bota de oro, siendo uno de los jugadores más destacados de liga vallecaucana de fútbol con 34 anotaciones⚽️",
    link: "./NoticiasElaboradas/Bota_de_Oro_@lifutbolvalle.html",
    fecha: "2024-12-10"
  },
  {
    imagen: "./Noticias/subcampeones.webp",
    titulo: "Liga Vallecaucana | ¡SubCampeones! U-14",
    descripcion: "VOLVEREMOS MÁS FUERTES⚔️",
    link: "../NoticiasElaboradas/Liga_Vallecaucana__SubCampeones_U_14.html",
    fecha: "2024-12-10"
  },

  ///Agregar mas noticias



];


    // Ordenar noticias por fecha más reciente
    noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  
    let noticiasCargadas = 0;
    const cantidadPorCarga = 3; // Número de noticias a cargar por clic
  
    function cargarNoticias() {
      const limite = noticiasCargadas + cantidadPorCarga;
      for (let i = noticiasCargadas; i < limite && i < noticias.length; i++) {
        const noticia = noticias[i];
  
        const noticiaElemento = document.createElement("div");
        noticiaElemento.className = "noticia";
        noticiaElemento.innerHTML = `
          <img src="${noticia.imagen}" alt="${noticia.titulo}">
          <div class="noticia-contenido">
            <h3 class="noticia-titulo">${noticia.titulo}</h3>
            <p class="noticia-fecha">${new Date(noticia.fecha).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}</p>
            <p class="noticia-descripcion">${noticia.descripcion}</p>
            <a href="${noticia.link}" class="noticia-boton">Leer más</a>
          </div>
        `;
        noticiasContenedor.appendChild(noticiaElemento);
      }
  
      noticiasCargadas = limite;
  
      // Ocultar el botón si se han cargado todas las noticias
      if (noticiasCargadas >= noticias.length) {
        cargarMasBtn.style.display = "none";
      }
    }
  
    cargarMasBtn.addEventListener("click", cargarNoticias);
  
    // Cargar las primeras noticias al inicio
    cargarNoticias();
  });
///Noticias noticias.html (Fin)  -->


/// Tienes que saber noticiaselaboradas (inicio)
document.addEventListener("DOMContentLoaded", () => {
  const otrasNoticiasContenedor = document.getElementById("otras-noticias-contenedor");

  // Noticias con fechas
// Noticias con fechas y enlaces actualizados
const noticias = [
  {
    imagen: "../Noticias/incripcionesabiertas.webp",
    titulo: "🎉 ¡Inicio Oficial de Entrenamientos en Vegas de Comfandi!",
    link: "../NoticiasElaboradas/Inicio_Oficial_de_Entrenamientos_en_Vegas_de_Comfandi.html",
    fecha: "2025-01-16"
  },
  {
    imagen: "../Noticias/comunicadooficial.webp",
    titulo: "📣 ¡El Club Deportivo Dynamo Inicia Actividades en Ciudad Córdoba! ⚽",
    link: "../NoticiasElaboradas/El_Club_Deportivo_Dynamo_Inicia_Actividades_en_Ciudad_Córdoba.html",
    fecha: "2025-01-15"
  },
  {
    imagen: "../Noticias/formadopromesas.webp",
    titulo: "Formando Grandes Promesas",
    link: "../NoticiasElaboradas/Formando_Grandes_Promesas.html",
    fecha: "2025-01-14"
  },
  {
    imagen: "../Noticias/vueltasaclases.webp",
    titulo: "Estamos a 5 Días de Iniciar",
    link: "../NoticiasElaboradas/Estamos_a_5_Días_de_Iniciar.html",
    fecha: "2025-01-11"
  },
  {
    imagen: "../Noticias/matriculasabiertas.webp",
    titulo: "¡Llegamos recargados, únete a nuestra familia inscripciones abiertas!",
    link: "../NoticiasElaboradas/Llegamos_recargados,_unete_a_nuestra_familia_inscripciones_abiertas.html",
    fecha: "2025-01-09"
  },
  {
    imagen: "../Noticias/despedida2024.webp",
    titulo: "Prepárate para la despedida de Fin de Año",
    link: "../NoticiasElaboradas/Prepárate_para_la_despedida_de_Fin_de_Año.html",
    fecha: "2024-12-17"
  },
  {
    imagen: "../Noticias/campeones.webp",
    titulo: "Final Copa Atlas| Formativo 🏆",
    link: "../NoticiasElaboradas/Final_Copa_Atlas_Formativo.html",
    fecha: "2024-12-15"
  },
  {
    imagen: "../Noticias/exformadores.webp",
    titulo: "De Ex Jugadores de nuestro club a formadores de nuestro club🧡🖤",
    link: "../NoticiasElaboradas/De_Ex_Jugadores_de_nuestro_club_a_formadores_de_nuestro_club.html",
    fecha: "2024-12-11"
  },
  {
    imagen: "../Noticias/botadeoro.webp",
    titulo: "Bota de Oro @lifutbolvalle",
    link: "../NoticiasElaboradas/Bota_de_Oro_@lifutbolvalle.html",
    fecha: "2024-12-10"
  },
  {
    imagen: "../Noticias/subcampeones.webp",
    titulo: "Liga Vallecaucana | ¡SubCampeones! U-14",
    link: "../NoticiasElaboradas/Liga_Vallecaucana__SubCampeones_U_14.html",
    fecha: "2024-12-10"
  },

  //Agregar mas noticias

];


  // Seleccionar 3 noticias aleatorias
  const noticiasAleatorias = noticias.sort(() => 0.5 - Math.random()).slice(0, 3);

  // Insertar noticias en el contenedor
  noticiasAleatorias.forEach((noticia) => {
    const noticiaCard = document.createElement("div");
    noticiaCard.className = "noticia-card";
    noticiaCard.innerHTML = `
      <img src="${noticia.imagen}" alt="${noticia.titulo}">
      <div class="noticia-card-contenido">
        <h3>${noticia.titulo}</h3>
        <p class="noticia-fecha-relacionada">Publicado el: ${new Date(noticia.fecha).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</p>
        <a href="${noticia.link}">Leer más</a>
      </div>
    `;
    otrasNoticiasContenedor.appendChild(noticiaCard);
  });
});

/// Tienes que saber noticiaselaboradas (Fin)


///Script de Formulario (Inicio)
    document.addEventListener("DOMContentLoaded", function () {
        const nombreInput = document.getElementById("nombre");
        const hijoInput = document.getElementById("hijo");
        const categoriaInput = document.getElementById("categoria");
        const posicionSelect = document.getElementById("posicion");
        const mensajePrevia = document.getElementById("mensaje-previa");
        const enviarWhatsApp = document.getElementById("enviar-whatsapp");

        // Función para mostrar un mensaje de error
        function mostrarError(campo, mensaje) {
            const error = campo.nextElementSibling;
            if (error && error.classList.contains("error")) {
                error.textContent = mensaje;
            } else {
                const nuevoError = document.createElement("div");
                nuevoError.textContent = mensaje;
                nuevoError.className = "error";
                nuevoError.style.color = "red";
                nuevoError.style.fontSize = "0.9rem";
                nuevoError.style.marginTop = "5px";
                campo.parentNode.appendChild(nuevoError);
            }
        }

        // Función para limpiar mensajes de error
        function limpiarError(campo) {
            const error = campo.nextElementSibling;
            if (error && error.classList.contains("error")) {
                campo.parentNode.removeChild(error);
            }
        }

        // Actualizar mensaje en tiempo real
        function actualizarMensaje() {
            const nombre = nombreInput.value.trim();
            const hijo = hijoInput.value.trim();
            const categoria = categoriaInput.value.trim();
            const posicion = posicionSelect.value;

            mensajePrevia.value = 
                `Hola, mi nombre es ${nombre}. Quiero inscribir a mi hijo/a ${hijo}, categoría ${categoria}, ` +
                `y su posición favorita en el campo es ${posicion}. ¡Gracias!`;
        }

        // Validar formulario
        function validarFormulario() {
            let valido = true;

            if (!nombreInput.value.trim()) {
                mostrarError(nombreInput, "Por favor, ingresa tu nombre.");
                valido = false;
            } else {
                limpiarError(nombreInput);
            }

            if (!hijoInput.value.trim()) {
                mostrarError(hijoInput, "Por favor, ingresa el nombre de tu hijo/a.");
                valido = false;
            } else {
                limpiarError(hijoInput);
            }

            if (!categoriaInput.value.trim()) {
                mostrarError(categoriaInput, "Por favor, ingresa la categoría.");
                valido = false;
            } else {
                limpiarError(categoriaInput);
            }

            if (!posicionSelect.value) {
                mostrarError(posicionSelect, "Por favor, selecciona una posición.");
                valido = false;
            } else {
                limpiarError(posicionSelect);
            }

            return valido;
        }

        // Escuchar cambios en los inputs
        [nombreInput, hijoInput, categoriaInput, posicionSelect].forEach((input) =>
            input.addEventListener("input", actualizarMensaje)
        );

        // Enviar mensaje por WhatsApp
        enviarWhatsApp.addEventListener("click", function () {
            if (validarFormulario()) {
                const mensaje = encodeURIComponent(mensajePrevia.value);
                const url = `https://wa.me/573178023523?text=${mensaje}`; // Reemplaza con tu número
                window.open(url, "_blank");
            }
        });
    });
//Script de Formulario(Fin)


//<!-- Formulario Funcionalidad Formadores Inicio -->
    document.addEventListener("DOMContentLoaded", function () {
        const nombreInput = document.getElementById("nombre");
        const especialidadInput = document.getElementById("especialidad");
        const experienciaInput = document.getElementById("experiencia");
        const mensajeInput = document.getElementById("mensaje");
        const mensajePrevia = document.getElementById("mensaje-previa");
        const enviarWhatsApp = document.getElementById("enviar-whatsapp");

        // Función para mostrar un mensaje de error
        function mostrarError(campo, mensaje) {
            const error = campo.nextElementSibling;
            if (error && error.classList.contains("error")) {
                error.textContent = mensaje;
            } else {
                const nuevoError = document.createElement("div");
                nuevoError.textContent = mensaje;
                nuevoError.className = "error";
                nuevoError.style.color = "red";
                nuevoError.style.fontSize = "0.9rem";
                nuevoError.style.marginTop = "5px";
                campo.parentNode.appendChild(nuevoError);
            }
        }

        // Función para limpiar mensajes de error
        function limpiarError(campo) {
            const error = campo.nextElementSibling;
            if (error && error.classList.contains("error")) {
                campo.parentNode.removeChild(error);
            }
        }

        // Actualizar mensaje en tiempo real
        function actualizarMensaje() {
            const nombre = nombreInput.value.trim();
            const especialidad = especialidadInput.value.trim();
            const experiencia = experienciaInput.value.trim();
            const mensajeAdicional = mensajeInput.value.trim();

            mensajePrevia.value = 
                `Hola, mi nombre es ${nombre}. Soy especialista en ${especialidad} y tengo ${experiencia} años de experiencia. ` +
                `${mensajeAdicional ? "Mensaje adicional: " + mensajeAdicional : ""}`;
        }

        // Validar formulario
        function validarFormulario() {
            let valido = true;

            if (!nombreInput.value.trim()) {
                mostrarError(nombreInput, "Por favor, ingresa tu nombre.");
                valido = false;
            } else {
                limpiarError(nombreInput);
            }

            if (!especialidadInput.value.trim()) {
                mostrarError(especialidadInput, "Por favor, ingresa tu especialidad.");
                valido = false;
            } else {
                limpiarError(especialidadInput);
            }

            if (!experienciaInput.value.trim()) {
                mostrarError(experienciaInput, "Por favor, ingresa tus años de experiencia.");
                valido = false;
            } else {
                limpiarError(experienciaInput);
            }

            return valido;
        }

        // Escuchar cambios en los inputs
        [nombreInput, especialidadInput, experienciaInput, mensajeInput].forEach((input) =>
            input.addEventListener("input", actualizarMensaje)
        );

        // Enviar mensaje por WhatsApp
        enviarWhatsApp.addEventListener("click", function () {
            if (validarFormulario()) {
                const mensaje = encodeURIComponent(mensajePrevia.value);
                const url = `https://wa.me/573178023523?text=${mensaje}`; // Reemplaza con tu número
                window.open(url, "_blank");
            }
        });
    });
///<!-- Formulario Funcionalidad Formadores Fin -->



///<!-- Formulario Contacto Contacto.html Funcionalidad Inicio -->
document.addEventListener("DOMContentLoaded", function () {
        const nombreInput = document.getElementById("nombre");
        const apellidoInput = document.getElementById("apellido");
        const asuntoInput = document.getElementById("asunto");
        const nombreNinoInput = document.getElementById("nombre-nino");
        const categoriaInput = document.getElementById("categoria");
        const posicionInput = document.getElementById("posicion");
        const especialidadInput = document.getElementById("especialidad");
        const experienciaInput = document.getElementById("experiencia");
        const mensajeAdicionalInput = document.getElementById("mensaje-adicional");
        const mensajeAdicionalTecnicoInput = document.getElementById("mensaje-adicional-tecnico");
        const textoGenerado = document.getElementById("texto-generado");
        const enviarWhatsApp = document.querySelector(".boton-enviar");

        // Función para mostrar un mensaje de error
        function mostrarError(campo, mensaje) {
            const error = campo.nextElementSibling;
            if (error && error.classList.contains("error")) {
                error.textContent = mensaje;
            } else {
                const nuevoError = document.createElement("div");
                nuevoError.textContent = mensaje;
                nuevoError.className = "error";
                nuevoError.style.color = "red";
                nuevoError.style.fontSize = "0.9rem";
                nuevoError.style.marginTop = "5px";
                campo.parentNode.appendChild(nuevoError);
            }
        }

        // Función para limpiar mensajes de error
        function limpiarError(campo) {
            const error = campo.nextElementSibling;
            if (error && error.classList.contains("error")) {
                campo.parentNode.removeChild(error);
            }
        }

        // Validar campos obligatorios según el asunto
        function validarFormulario() {
            let valido = true;

            if (!nombreInput.value.trim()) {
                mostrarError(nombreInput, "Por favor, ingresa tu nombre.");
                valido = false;
            } else {
                limpiarError(nombreInput);
            }

            if (!apellidoInput.value.trim()) {
                mostrarError(apellidoInput, "Por favor, ingresa tu apellido.");
                valido = false;
            } else {
                limpiarError(apellidoInput);
            }

            if (asuntoInput.value === "inscripcion-jugador") {
                if (!nombreNinoInput.value.trim()) {
                    mostrarError(nombreNinoInput, "Por favor, ingresa el nombre del niño/a.");
                    valido = false;
                } else {
                    limpiarError(nombreNinoInput);
                }

                if (!categoriaInput.value.trim()) {
                    mostrarError(categoriaInput, "Por favor, ingresa la categoría.");
                    valido = false;
                } else {
                    limpiarError(categoriaInput);
                }

                if (!posicionInput.value.trim()) {
                    mostrarError(posicionInput, "Por favor, selecciona la posición favorita.");
                    valido = false;
                } else {
                    limpiarError(posicionInput);
                }
            } else if (asuntoInput.value === "grupo-tecnico") {
                if (!especialidadInput.value.trim()) {
                    mostrarError(especialidadInput, "Por favor, ingresa tu especialidad.");
                    valido = false;
                } else {
                    limpiarError(especialidadInput);
                }

                if (!experienciaInput.value.trim()) {
                    mostrarError(experienciaInput, "Por favor, ingresa tus años de experiencia.");
                    valido = false;
                } else {
                    limpiarError(experienciaInput);
                }
            }

            return valido;
        }

        // Generar mensaje para WhatsApp
        function generarMensaje() {
            const nombre = nombreInput.value.trim();
            const apellido = apellidoInput.value.trim();
            let mensaje = "";

            if (asuntoInput.value === "inscripcion-jugador") {
                const nombreNino = nombreNinoInput.value.trim();
                const categoria = categoriaInput.value.trim();
                const posicion = posicionInput.value.trim();
                const mensajeAdicional = mensajeAdicionalInput.value.trim();
                mensaje = `Hola, mi nombre es ${nombre} ${apellido}. Quiero inscribir a mi hijo/a ${nombreNino}, categoría ${categoria}, y su posición favorita en el campo es ${posicion}. ¡Gracias! ${mensajeAdicional ? "Mensaje adicional: " + mensajeAdicional : ""}`;
            } else if (asuntoInput.value === "grupo-tecnico") {
                const especialidad = especialidadInput.value.trim();
                const experiencia = experienciaInput.value.trim();
                const mensajeAdicionalTecnico = mensajeAdicionalTecnicoInput.value.trim();
                mensaje = `Hola, mi nombre es ${nombre} ${apellido}. Soy especialista en ${especialidad} y tengo ${experiencia} año(s) de experiencia. ¡Gracias! ${mensajeAdicionalTecnico ? "Mensaje adicional: " + mensajeAdicionalTecnico : ""}`;
            }

            return encodeURIComponent(mensaje.trim());
        }

        // Enviar mensaje por WhatsApp
        enviarWhatsApp.addEventListener("click", function (e) {
            e.preventDefault();
            if (validarFormulario()) {
                const mensaje = generarMensaje();
                const url = `https://wa.me/573178023523?text=${mensaje}`; // Reemplaza con tu número de WhatsApp
                window.open(url, "_blank");
            }
        });
    });
//<!-- Formulario Contacto Contacto.html Funcionalidad Fin -->