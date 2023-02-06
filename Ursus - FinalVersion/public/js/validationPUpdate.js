window.addEventListener("load", function () {

  let form = document.querySelector("#formUpdate")
  let btnGuardar = document.querySelector("#btnGuardar");
  let nombre = document.querySelector("#nombre");
  let imagen = document.querySelector("#imagen");
  let precio = document.querySelector("#precio")
  let nombreError = document.querySelector("#nombreError");
  let imagenError = document.querySelector("#imagenError");
  let precioError = document.querySelector("#precioError")

  btnGuardar.addEventListener("click", e => {
    e.preventDefault();
    let errores = {}

    if (validator.isEmpty(nombre.value)) {
      errores.nombre = "Este campo no debe de estar vacío"
    }

    if (validator.isLength(nombre.value, 1, 5)) {
      errores.nombre = "Debe de tener como minimo 5 caracteres"
    }

    if (validator.isEmpty(precio.value)) {
      errores.precio = "Este campo no debe de estar vacío"
    }

    if (imagen.value) {
      if (
        (!imagen.value.includes(".jpg") && !imagen.value.includes(".jpeg")) &&
        (!imagen.value.includes(".png") && !imagen.value.includes(".gif"))
      ) {
        errores.imagen = "Extensiones permitidas: .jpg .jpeg .png. .gif"
      }
    }

    if (Object.keys(errores).length >= 1) {
      nombreError.innerText = (errores.nombre) ? errores.nombre : ""
      imagenError.innerText = (errores.imagen) ? errores.imagen : ""
      precioError.innerText = (errores.precio) ? errores.precio : ""
    } else {
      form.submit();
    }
  })
})