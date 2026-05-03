const arrayFotos = [
  {
    id: 1,
    alt: "mujer en la playa de Cancún",
    tags: ["mar", "arena", "mujer"],
    src: "assets/images/viajes-1.jpg",
  },
  {
    id: 2,
    alt: "paseo de Hawaii",
    tags: ["mar", "pasarela", "resort"],
    src: "assets/images/viajes-2.jpg",
  },
  {
    id: 3,
    alt: "cartelera de California",
    tags: ["cartel", "cielo"],
    src: "assets/images/viajes-3.jpg",
  },
  {
    id: 4,
    alt: "puente de Marruecos",
    tags: ["río", "puente", "edificio"],
    src: "assets/images/viajes-4.jpg",
  },
  {
    id: 5,
    alt: "puente de Sevilla",
    tags: ["río", "puente", "edificio"],
    src: "assets/images/viajes-5.jpg",
  },
  {
    id: 6,
    alt: "paseo de Gijón",
    tags: ["mar", "paseo", "monte"],
    src: "assets/images/viajes-6.jpg",
  },
  {
    id: 7,
    alt: "castillo de Jaén",
    tags: ["castillo", "edificio", "monte"],
    src: "assets/images/viajes-7.jpg",
  },

]

let totalTags = arrayFotos.map(function(num) { //con el .map() me quedo con los tags de cada objeto. 

  return num.tags;
});

let fila = totalTags.flat(); //.flat() para aplanar los arrays anteriores para que se queden en un solo array.

const arrayFiltrados = [...new Set(fila)]; //Crea un nuevo objeto Set, que automáticamente elimina cualquier valor duplicado ( los Sets solo permiten valores únicos).
// el ... (spread) está para reconvierte el Set en un array tradicional. 

const contenedorBotones = document.querySelector(".botones");//busca la primera vez que aparezca la clase botones en el documento HTML y guarda el resultado en la variable contenedorBotones.

arrayFiltrados.forEach(function(item) {
  const btn = document.createElement("button");//crea los botones 
  btn.classList.add("boton");//le añado la clase .boton a cada boton para poder estilizarlo desde css.
  btn.textContent = item;//añade el tag 
  contenedorBotones.appendChild(btn);//aquí se mete el botón dentro del contenendor. 
 
});

const contenedorEncontrado = document.querySelector(".encontrado");//busca la primera vez que aparezca la clase encontrado en el documento HTML y guarda el resultado en la variable contenedorEncontrado.

const contenedorColeccion = document.querySelector(".coleccion");





contenedorBotones.addEventListener("click", (ev) => {

  if (ev.target.tagName !== "BUTTON") return;

  const tag = ev.target.textContent; //hace referencia al botón que se pulsa: event.target y con el .textContent te da el texto del botón

  /*mostrarImagen(tag); //le pasa el texto a la función */

  const filtrados = arrayFotos.filter(foto => foto.tags.includes(tag));//includes sirve para comprobar si el tag está dentro del array de tags de cada foto y filter lo filtra.

  contenedorColeccion.innerHTML = "";//.innerHTML limpia el contenedor con la info anterior para que no se acomule

  contenedorEncontrado.innerHTML = "";
  
  
  
  
  
  const texto = document.createElement("p"); //crea el texto que va a ir dentro del botón

  texto.classList.add("info_encontrados")

  texto.textContent = `Se han encontrado ${filtrados.length} imágenes con el tag ${tag}`; //crea el contenido del texto

  contenedorEncontrado.appendChild(texto);//aquí ese mete el texto dentro del contenendor. 

  
  
  
  
  const contenedorTxiki = document.createElement("div");
  contenedorTxiki.classList.add("txikis");
  const contenedorGrande = document.createElement("div");
  contenedorGrande.classList.add("grande");

  

  
  
  
  
  
  
  
  filtrados.forEach(function(argazki,index) {//forEach() para que lo haga las veces que corresponda dependiendo del número de imágenenes que cumplan la condición de tener (o no) el tag

    const contenedorImagen = document.createElement("figure");//crea el contenedor figure para la imagen 
    const imagen = document.createElement("img");//crea la imagen 
    const descripcion = document.createElement("figcaption");
    descripcion.classList.add("desc");

    imagen.classList.add("img");//le asigna la clase img a la imagen 
    imagen.src = argazki.src;//añade la ruta de la imagen filtrada con el tag
    imagen.alt = argazki.alt;//añade la descripcion a la imagen filtrada con el tag

    descripcion.textContent = argazki.alt;

    contenedorImagen.appendChild(descripcion);//mete a descripcion dentro de contenedorImagen
    contenedorImagen.appendChild(imagen);//mete a imagen en contenedorImagen (hijo)

    if (index === 0) { //primera foto en grande 
    imagen.classList.add("img-grande");
    contenedorGrande.appendChild(contenedorImagen);
    } else {
    imagen.classList.add("img-txiki"); //las demás pequeñas 
    contenedorTxiki.appendChild(contenedorImagen);
    }

  });

  contenedorColeccion.appendChild(contenedorGrande);//mete a contenedorGrande dentro del contenedorColeccion
  contenedorColeccion.appendChild(contenedorTxiki);//mete a contenedorTxiki dentro del contenedorColeccion

});







