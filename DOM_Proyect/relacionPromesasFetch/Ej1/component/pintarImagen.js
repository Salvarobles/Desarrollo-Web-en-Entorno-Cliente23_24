const element = document.querySelector(".image-container");
const pintarPromesas = (element) => {

    element.innerText = "loading...";
    const imageUrl = "https://raw.githubusercontent.com/isaiasfl/ApuntesDWEC/main/Ejercicios/img_dev.jpeg";
    
    loadAsync(imageUrl)
        .then((element) => {
            element.innerHTML = "Loading...";
            element.appendChild(element);
            return element;
        })
        .catch((err) => alert(err));
  };

/**
 * Crea una función que cargue una imagen de forma asíncrona y la añada al cuerpo del documento.
 * @param {imgUrl} src 
 * @returns 
 */
const loadAsync = (src) => {
    return new Promise((resolve, reject) => {
        const imagen = new Image();
        imagen.onerror = () => reject(new Error("La imagen no se cargó correctamente"));
        imagen.onload = () => resolve(imagen);
        setTimeout(() => {
            imagen.src = src;
        }, 2000);
      });
  };
  
  const loadAsync2 = async (src) => {
    const img_1 = await new Promise((resolve, reject) => {
      document.body.innerHTML = "Loading...";
  
      const img = new Image();
      img.src = src;
  
      setTimeout(() => {
        img.onload = () => {
          resolve(img);
        };
  
        img.onerror(() => {
          reject(`Error al cargar la imagen desde ${src}`);
        });
      });
    });
    document.body.appendChild(img_1);
  };

  pintarPromesas(cardElement);