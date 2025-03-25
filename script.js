const productos = [
    {
        nombre: "Set de mate de Stitch",
        oferta: false,
        categoria: "Mates",
        precio: 17000,
        unidades: 1,
        imagen: "img/mate set.png",
        descripcion: "Set de mate de Stitch y Ángel. Incluye el mate, bombilla, yerbero, azucarero y cucharita."
    },
    {
        nombre: "Mates grandes",
        oferta: false,
        categoria: "Mates",
        precio: 8500,
        unidades: 1,
        imagen: "img/mate2500.jpg",
        descripcion: "Mates de los personajes Stitch, Ángel, Kitty y de Hogwarts (Harry Potter) impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mate de Pokemon",
        oferta: false,
        categoria: "Mates",
        precio: 8000,
        unidades: 1,
        imagen: "img/mate charmander.png",
        descripcion: "Mate de Pokemon Charmander, impreso con material PLA y pintado a mano. El precio es por unidad."
    },
    {
        nombre: "Mate de carpincho",
        oferta: false,
        categoria: "Mates",
        precio: 8000,
        unidades: 1,
        imagen: "img/carpincho mate.jpg",
        descripcion: "Mate de carpincho, impreso con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mate y posavaso Hello Kitty",
        oferta: false,
        categoria: "Mates",
        precio: 9000,
        unidades: 2,
        imagen: "img/kitty.png",
        descripcion: "Mate y posavaso de Hello Kitty, impreso con material PLA. El precio es por el conjunto."
    },
    {
        nombre: "Mates de personajes",
        oferta: false,
        categoria: "Mates",
        precio: 7000,
        unidades: 1,
        imagen: "img/mate2000.jpg",
        descripcion: "Mates de los personajes Stitch, Ángel, Hongos de Mario Bross, Chimuelo y Luna, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mates temáticos",
        oferta: false,
        categoria: "Mates",
        precio: 6500,
        unidades: 1,
        imagen: "img/mate1500.jpg",
        descripcion: "Mates de diamantes y caballos, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Mates personalizados",
        oferta: false,
        categoria: "Mates",
        precio: 7500,
        unidades: 1,
        imagen: "img/mate personalizado.jpg",
        descripcion: "Mates personalizados, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Despolvillador de yerba mate personalizado",
        oferta: false,
        categoria: "Mates",
        precio: 11000,
        unidades: 1,
        imagen: "img/despolvillador.jpg",
        descripcion: "Despolvillador de yerba mate personalizado con su nombre o logo, impreso en 3D con material PLA. Se puede realizar en otros colores. El precio es por unidad."
    },
    {
        nombre: "Estructra de lampara de astronauta",
        oferta: false,
        categoria: "Lamparas",
        precio: 9000,
        unidades: 1,
        imagen: "img/astronauta.jpg",
        descripcion: "Estructura para armar lampara de astronauta sobre la luna,de 18 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Estructra de lampara de la Tierra",
        oferta: false,
        categoria: "Lamparas",
        precio: 7000,
        unidades: 1,
        imagen: "img/planeta.jpg",
        descripcion: "Estructura para armar lampara de la Tierra sobre un pilar de 13 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Macetas de Afrodita y Venus",
        oferta: false,
        categoria: "Macetas",
        precio: 8500,
        unidades: 1,
        imagen: "img/venus.jpg",
        descripcion: "Macetas Venus y Afrodita, de 15 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Macetas Baby Groot",
        oferta: false,
        categoria: "Macetas",
        precio: 9000,
        unidades: 1,
        imagen: "img/combo groot.jpg",
        descripcion: "Macetas Baby Groot, de 15 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Macetas Robert",
        oferta: false,
        categoria: "Macetas",
        precio: 12000,
        unidades: 4,
        imagen: "img/RS.jpg",
        descripcion: "Modelos de maceta Robert, de 8 cm de altura, disponibles en blanco. El precio es por cuatro unidades."
    },
    {
        nombre: "Macetas de animales",
        oferta: false,
        categoria: "Macetas",
        precio: 9000,
        unidades: 2,
        imagen: "img/maceta animales.jpg",
        descripcion: "Modelos de macetas de gato y perro, de 8 cm de altura, disponibles en transparente, blanco, bronce y negro, con y sin plantas. El precio por dos unidades."
    },
    {
        nombre: "Macetas de meditación",
        oferta: false,
        categoria: "Macetas",
        precio: 4000,
        unidades: 1,
        imagen: "img/cabezas.jpg",
        descripcion: "Modelos de macetas de meditación de 8 cm de altura, disponibles en transparente, blanco y bronce. El precio es por unidad."
    },
    {
        nombre: "Florero dona y maceta David",
        oferta: false,
        categoria: "Adornos",
        precio: 12000,
        unidades: 2,
        imagen: "img/david dona.jpg",
        descripcion: "Maceta de David y florero dona minimalista, ambos de 15 cm de altura. El precio es de los dos floreros."
    },
    {
        nombre: "Elefantes de la fortuna",
        oferta: false,
        categoria: "Adornos",
        precio: 6500,
        unidades: 1,
        imagen: "img/elefantes.jpg",
        descripcion: "Figuras de elefantes de la fortuna, de 10 cm de altura. Disponibles en color bronce y blanco. El precio es por unidad."
    },
    {
        nombre: "Porta lápices",
        oferta: false,
        categoria: "Adornos",
        precio: 7000,
        unidades: 1,
        imagen: "img/portalapices.jpg",
        descripcion: "Porta lápices de David (15 cm de altura), Bob Patiño (15 cm de altura) y Baby Groot, y de Homero arbusto. El precio es por unidad."
    },
    {
        nombre: "Demon Slayer",
        oferta: true,
        categoria: "Figuras",
        precio: 7500,
        unidades: 1,
        imagen: "img/figuras.jpg",
        descripcion: "Figuras de Nezuko Kamado (10 cm de altura), Tanjiro Kamado (15 cm de altura), Zenitsu Agatsuma (15 cm de altura) e Inozuke Hashibira (15 cm de altura). Impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Nezuko con caja portalapices",
        oferta: true,
        categoria: "Figuras",
        precio: 18500,
        unidades: 1,
        imagen: "img/nezuko.jpg",
        descripcion: "Caja portalapices de Nezuko, de 12 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Itachi Uchiha",
        oferta: true,
        categoria: "Figuras",
        precio: 14000,
        unidades: 1,
        imagen: "img/itachi.jpg",
        descripcion: "Figura de Itachi Uchiha, 15 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Naruto Uzumaki",
        oferta: true,
        categoria: "Figuras",
        precio: 8500,
        unidades: 1,
        imagen: "img/naruto.jpg",
        descripcion: "Figura de Naruto Uzumaki, 20 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Sasuke Uchiha",
        oferta: true,
        categoria: "Figuras",
        precio: 10000,
        unidades: 1,
        imagen: "img/sasuke.jpg",
        descripcion: "Figura de Sasuke Uchiha, 15 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Pochita",
        oferta: true,
        categoria: "Figuras",
        precio: 8500,
        unidades: 1,
        imagen: "img/pochita.jpg",
        descripcion: "Figura de Pochita articulada, 13 cm de altura y 16 cm de largo, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Dragon Ball de 20 cm de altura",
        oferta: true,
        categoria: "Figuras",
        precio: 14500,
        unidades: 1,
        imagen: "img/DB.jpg",
        descripcion: "Figuras de Gohan (versión niño y adulto), Frezeer, Goku, Trunks, Vegeta y Gogetta. Todos estos modelos son de 20 cm de altura. Impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Dragon Ball de 10 cm de altura",
        oferta: true,
        categoria: "Figuras",
        precio: 9000,
        unidades: 2,
        imagen: "img/DB2.jpg",
        descripcion: "Figuras de Piccolo, Goku, Gohan, Vegeta (con distintas transformaciones) y Gogetta. Todos estos modelos son de 10 cm de altura. Impresas con material PLA. El precio es por dos unidades."
    },
    {
        nombre: "Pokemon",
        oferta: true,
        categoria: "Figuras",
        precio: 10000,
        unidades: 2,
        imagen: "img/pokemon.jpg",
        descripcion: "Figuras de Squirtle (10 cm de altura), Charmander (10 cm de altura), Bulbasaur (8 cm de altura), Pikachu (10 cm de altura) y Jigglypuff (8 cm de altura). Impresas con material PLA. El precio es por dos unidades."
    },
    {
        nombre: "La Bella y la Bestia",
        oferta: true,
        categoria: "Figuras",
        precio: 25000,
        unidades: 5,
        imagen: "img/bella y bestia.jpg",
        descripcion: "Figuras de Din Don (13 cm de altura), Bella (10 cm de altura), Sra.Potts (12 cm de altura), Chip (7 cm de altura) y Lumiere (15 cm de altura). Impresas con material PLA. El precio es por las cinco unidades."
    },
    {
        nombre: "Caballeros del zodiaco (Saint Seiya)",
        oferta: true,
        categoria: "Figuras",
        precio: 13000,
        unidades: 1,
        imagen: "img/CZ.png",
        descripcion: "Figuras de Seiya de Pegasus y Afrodita de Piscis. Estos dos modelos son de 15 cm de altura. Impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Pandora Box de Pegasus",
        oferta: true,
        categoria: "Figuras",
        precio: 15500,
        unidades: 1,
        imagen: "img/CZ2.jpg",
        descripcion: "Pandora Box de Pegasus, de 12 cm de altura. Impresa con material PLA. Viene con un llavero de regalo."
    },
    {
        nombre: "Attack on Titan",
        oferta: true,
        categoria: "Figuras",
        precio: 15500,
        unidades: 1,
        imagen: "img/AT.jpg",
        descripcion: "Figuras de Eren Yeager (versión Titan) y Levi Ackerman. Estos dos modelos son de 20 cm de altura. Impresas con material PLA. El precio es por unidad."
    },
    {
        nombre: "Sonic",
        oferta: true,
        categoria: "Figuras",
        precio: 9000,
        unidades: 1,
        imagen: "img/Sonic.jpg",
        descripcion: "Figura de Sonic de 10 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Messi",
        oferta: true,
        categoria: "Figuras",
        precio: 7000,
        unidades: 1,
        imagen: "img/messi.jpg",
        descripcion: "Figura de Messi con la camiseta con tres estrellas, de 15 cm de altura, impresa con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de Sasuke/ Ironman",
        oferta: true,
        categoria: "Gamer",
        precio: 22500,
        unidades: 1,
        imagen: "img/PJ4000.png",
        descripcion: "Portajoystick o celular de Sasuke y Ironman, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de Call of Duty (Ghost)/ Crash Bandicoot",
        oferta: true,
        categoria: "Gamer",
        precio: 17500,
        unidades: 1,
        imagen: "img/PJ3800.jpg",
        descripcion: "Portajoystick o celular de Call of Duty (Ghost) y Crash Bandicoot, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de Spiderman",
        oferta: true,
        categoria: "Gamer",
        precio: 12500,
        unidades: 1,
        imagen: "img/spiderman.jpg",
        descripcion: "Portajoystick o celular de Spiderman, impreso con material PLA. El precio es por unidad."
    },
    {
        nombre: "Portajoystick de God of War/ Goku",
        oferta: true,
        categoria: "Gamer",
        precio: 18500,
        unidades: 1,
        imagen: "img/PJ3500.jpg",
        descripcion: "Portajoystick o celular de God of War y Goku, impresos con material PLA. El precio es por unidad."
    },
    {
        nombre: "Porta auricular de Batman",
        oferta: true,
        categoria: "Gamer",
        precio: 14500,
        unidades: 1,
        imagen: "img/batman.jpg",
        descripcion: "Porta auricular del modelo de Batman, impreso con material PLA."
    },
    {
        nombre: "Llaveros de Flork",
        oferta: false,
        categoria: "Llaveros",
        precio: 8500,
        unidades: 10,
        imagen: "img/flork.jpg",
        descripcion: "Llaveros Flork de distintos modelos, 5 cm de largo aproximadamente, impresos con material PLA. El precio es por 10 unidades."
    },
    {
        nombre: "Llaveros de equipos",
        oferta: false,
        categoria: "Llaveros",
        precio: 9000,
        unidades: 10,
        imagen: "img/equipos.jpg",
        descripcion: "Llaveros de distintos equipos, impresos con material PLA. El precio es por 10 unidades."
    },
    {
        nombre: "Llaveros de autodefensa",
        oferta: false,
        categoria: "Llaveros",
        precio: 7500,
        unidades: 5,
        imagen: "img/llavero gato.jpg",
        descripcion: "Llaveros de autodefensa con forma de gatos, impresos con material PLA. El precio es por 5 unidades."
    },
    {
        nombre: "Llaveros animales porta celulares",
        oferta: false,
        categoria: "Llaveros",
        precio: 4000,
        unidades: 5,
        imagen: "img/llaveros animales.jpg",
        descripcion: "Llaveros de animales porta celulares, impresos con material PLA. El precio es por 5 unidades."
    },
    {
        nombre: "Set para cocina de Bob esponja",
        oferta: false,
        categoria: "Cocina",
        precio: 10500,
        unidades: 2,
        imagen: "img/otros.jpg",
        descripcion: "Porta esponja de Bob esponja y Porta virulana de Patricio estrella. El precio es por el set."
    },
    {
        nombre: "Cortadores de Mario",
        oferta: false,
        categoria: "Cocina",
        precio: 3000,
        unidades: 3,
        imagen: "img/cortador mario.jpg",
        descripcion: "Cortadores de Mario, impresos con material PLA, de 8,5 cm x 8,5 cm aproximadamente. El precio es por los tres modelos."
    },
    {
        nombre: "Accesorios para latas",
        oferta: true,
        categoria: "Cocina",
        precio: 10000,
        unidades: 1,
        imagen: "img/latas.jpg",
        descripcion: "Porta latas para almacenar en el refrigerador con capacidad para cinco latas de 473 cc. El precio es por unidad."
    },
    {
        nombre: "Porta latas de cerveza",
        oferta: false,
        categoria: "Cocina",
        precio: 4500,
        unidades: 1,
        imagen: "img/vaso de barril.jpg",
        descripcion: "Porta latas para latas de 473 cc. El precio es por unidad."
    },
    {
        nombre: "Jabonera y porta cepillos",
        oferta: false,
        categoria: "Baño",
        precio: 7000,
        unidades: 1,
        imagen: "img/jabonera.jpg",
        descripcion: "Jabonera y porta cepillos para el baño, impreso con material PLA, disponible en color blanco."
    },
    {
        nombre: "Porta espiral Dr. Strange",
        oferta: false,
        categoria: "Otros",
        precio: 7000,
        unidades: 1,
        imagen: "img/portaespiral.jpg",
        descripcion: "Porta espiral Dr. Strange, de 15 cm de altura. El precio es por unidad."
    },
    {
        nombre: "Flauta dulce con forma de dragón",
        oferta: false,
        categoria: "Otros",
        precio: 7000,
        unidades: 1,
        imagen: "img/flauta dragon.jpg",
        descripcion: "Flauta dulce con forma de dragón, impresa con material PLA, disponible en varios colores. El precio es por unidad."
    },
];

const listaProductos = document.getElementById("lista-productos");
const categoriaFiltro = document.getElementById("categoria");
const precioFiltro = document.getElementById("precio");
const ofertaFiltro = document.getElementById("oferta");

categoriaFiltro.addEventListener("change", mostrarProductos);
precioFiltro.addEventListener("change", mostrarProductos);
ofertaFiltro.addEventListener("change", mostrarProductos);

function mostrarProductos() {
    let productosFiltrados = productos;

    // Aplicar filtros adicionales (categoria y precio)
    if (categoriaFiltro.value) {
        productosFiltrados = productosFiltrados.filter(producto => producto.categoria === categoriaFiltro.value);
    }

    if (precioFiltro.value) {
        productosFiltrados = productosFiltrados.filter(producto => producto.precio <= parseInt(precioFiltro.value));
    }

    // Aplicar filtro de oferta
    if (ofertaFiltro.value === "true") {
        productosFiltrados = productosFiltrados.filter(producto => producto.oferta === true);
    }


    listaProductos.innerHTML = "";
    productosFiltrados.forEach((producto) => {
        const idProducto = producto.nombre.replace(/\s/g, "-");

        // Crear el elemento de la división
        const division = document.createElement("div");
        division.classList.add("producto");
        division.id = idProducto;
        // Verificar si el producto está en oferta
        if (producto.oferta) {
            // Mostrar información del producto en oferta
            const precioactual = producto.precio * 0.95;
            const productoHTML = `
        <div class="producto" id=${idProducto}>
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%;">
        <h4>EN OFERTA HASTA AGOTAR STOCK!</h4>
            <h3>${producto.nombre}</h3>
            <button class="agregar-carrito" data-nombre="${producto.nombre}" data-precio="${precioactual}">Consultar stock</button>
            <p class="precio"><del>$${producto.precio}</del> $${precioactual} x ${producto.unidades} ud.</p>
        </div>
    `;

            division.innerHTML += productoHTML;
        } else {
            // Mostrar información del producto sin oferta
            const precioactual = producto.precio;
            const productoHTML = `
            <div class="producto" id=${idProducto}>
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%;">
                <h3>${producto.nombre}</h3>
                <button class="agregar-carrito" data-nombre="${producto.nombre}" data-precio="${precioactual}">Consultar stock</button>
                <p class="precio">$${precioactual} x ${producto.unidades} ud.</p>
            </div>
        `;
            division.innerHTML += productoHTML;
        }

        // Obtener el contenido de la división sin la ID
        const contenidoHTML = division.innerHTML


        // Crear el contenido de la división
        const contenido = document.createElement("div");
        contenido.classList.add("contenido");
        contenido.innerHTML = `
        <div class="subcontenido">
  ${contenidoHTML}<div class="producto">
    <p class="descripcion">${producto.descripcion}</p>
    <button id="urlproducto-${idProducto}" data-url="${idProducto}">Copiar enlace del Producto</button>
    <br></br>
    <button class="cerrar" data-id="${idProducto}">Volver</button>
  </div>
</div>
`;


        // Agregar evento de clic para mostrar/ocultar la división como ventana
        division.addEventListener("click", function (event) {
            // Verificar si el botón fue el elemento que recibió el clic
            if (event.target.classList.contains("agregar-carrito")) {
                return; // No hacer nada si fue el botón
            }

            contenido.style.display = "block";
            document.documentElement.style.overflow = 'hidden';
        });

        // Agregar evento de clic para mostrar/ocultar la división como ventana
division.addEventListener("click", function (event) {
    // Verificar si el botón fue el elemento que recibió el clic
    if (event.target.classList.contains("agregar-carrito")) {
        return; // No hacer nada si fue el botón
    }

    contenido.style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    history.pushState({ modalOpen: true }, null, window.location.href); // Empuja un nuevo estado al historial
});

// Agregar evento de clic al botón de cierre para ocultar la división
const cerrar = contenido.querySelector(".cerrar");
cerrar.addEventListener("click", function (event) {
    event.stopPropagation();
    contenido.style.display = "none";
    document.documentElement.style.overflow = 'auto';
    history.back(); // Retrocede en el historial
});

// Agregar evento para detectar cuando el usuario presiona el botón de volver del navegador
window.addEventListener("popstate", function (event) {
    if (contenido.style.display === "block") {
        contenido.style.display = "none";
        document.documentElement.style.overflow = 'auto';
    }
});

// Agregar el contenido a la división
division.appendChild(contenido);

// Agregar la división al contenedor principal
listaProductos.appendChild(division);

    });



    const agregarBotones = document.querySelectorAll('.agregar-carrito');

    agregarBotones.forEach((boton) => {
        boton.addEventListener('click', () => {
            const nombre = boton.dataset.nombre;
            const precio = Number(boton.dataset.precio);
            const producto = { nombre, precio };
            productosSeleccionados.push(producto);
            mostrarCarrito();
    
            const confirmar = confirm("Producto agregado a la lista. ¿Deseas ver la lista completa ahora?");
            if (confirmar) {
                // Redirigir a una página donde se muestre la lista de productos seleccionados
                window.location.href = "#carrito-lista"; // Cambia el enlace por la URL de tu página
            }
        });
    });


    const btnURLProductos = document.querySelectorAll('[id^="urlproducto-"]');

    btnURLProductos.forEach((btnURLProducto) => {
        btnURLProducto.addEventListener('click', () => {
            const idProducto = btnURLProducto.dataset.url;
            const currentURL = window.location.href;
            const hasID = currentURL.includes('#');

            let url;
            if (hasID) {
                url = `${currentURL.substring(0, currentURL.indexOf('#'))}#${idProducto}`;
            } else {
                url = `${currentURL}#${idProducto}`;
            }

            copiarURL(url);
            mostrarAlerta();
        });
    });

    function copiarURL(url) {
        const elementoTemp = document.createElement('input');
        elementoTemp.value = url;
        document.body.appendChild(elementoTemp);
        elementoTemp.select();
        document.execCommand('copy');
        document.body.removeChild(elementoTemp);
    }

    function mostrarAlerta() {
        alert("URL copiada al portapapeles");
    }

}


const carritoLista = document.querySelector('#carrito-lista');
const carritoTotal = document.querySelector('#carrito-total');
let productosSeleccionados = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function mostrarCarrito() {
    carritoLista.innerHTML = '';
    productosSeleccionados.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} `;
        const botonQuitar = document.createElement('button');
        botonQuitar.innerText = 'Quitar';
        botonQuitar.onclick = function () {
            quitarDelCarrito(index);
            mostrarCarrito();
        };
        li.appendChild(botonQuitar);
        carritoLista.appendChild(li);
    });
}

function quitarDelCarrito(index) {
    productosSeleccionados.splice(index, 1);
}

const btnWhatsapp = document.getElementById('btn-whatsapp');

btnWhatsapp.addEventListener('click', () => {
    let mensaje = 'Lista para consultar stock:\n';
    productosSeleccionados.forEach((producto) => {
        mensaje += `${producto.nombre}\n`;
    });
    

    const telefono = '3765188420'; // Ingresa aquí el número de teléfono de destino
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url);
});

categoriaFiltro.addEventListener("change", mostrarProductos);
precioFiltro.addEventListener("input", mostrarProductos);

mostrarProductos();