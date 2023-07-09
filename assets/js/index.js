const properties = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Se un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
const inputs = Array.from(document.querySelectorAll("section input"));
let houses = document.getElementById("propiedad");
let buttonFilter = document.querySelector("button");

function getHouses(properties) {
  result.innerHTML = properties.length;
  houses.innerHTML = "";
  
  for (let property of properties) {
    let newProperty = document.createElement("div");
    newProperty.classList.add("propiedad");
    newProperty.innerHTML = `
    <div>
      <img class = "img" src="${property.src}" alt="${property.name}">
    </div>
    <h5>${property.name}</h5>
    <div class = "description">
      <p>Cuartos: ${property.rooms}</p>
      <p>Metros: ${property.m}</p>
      <p class = "">${property.description}</p>
      <button class =" ">Ver más</button>
    </div>
   
    `;  

    houses.appendChild(newProperty)
  };
};
  
getHouses(properties);

const filterProperties = () => {
  let [{value:rooms},{value:minM},{value:maxM}] = inputs;

  if (!rooms && !minM && !maxM) {
    alert("Campos vacios, por favor ingrese una especificación");
    return false
  } else if (!rooms && minM && maxM) {
    alert("Ingrese cantidad de cuartos");
    return false
  } else if (rooms && !minM && !maxM) {
    alert("Ingrese medidas");
    return false
  } else if (rooms && minM && !maxM) {
    alert("Ingrese medidas máximas");
    return false
  } else if (rooms && !minM && maxM) {
    alert("Ingrese medidas mínimas");
    return false
  } 

  let filterProperties = properties.filter(
    (property) => property.m >= minM && property.m <= maxM 
    && property.rooms >= rooms && property.rooms <= rooms);
    
  getHouses(filterProperties);
}

buttonFilter.addEventListener("click", filterProperties);