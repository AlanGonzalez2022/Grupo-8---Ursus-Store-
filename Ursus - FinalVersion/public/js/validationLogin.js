window.addEventListener("load", function () {

  fetch("http://localhost:3032/emailUsuario")
    .then(function (respuesta) {
      return respuesta.json();

    })
    .then(function (dataUser) {

      let emails = dataUser.data.map(data => {
        return data.email
      })

      let form = document.querySelector("#formLogin")
      let btnIngresa = document.querySelector("#ingresa");
      let email = document.querySelector("#email");
      let password = document.querySelector("#password");
      let emailError = document.querySelector("#emailError");
      let passwordError = document.querySelector("#passwordError");

      btnIngresa.addEventListener("click", e => {
        e.preventDefault();
        let errores = {}

        // Validación Email

        if (validator.isEmpty(email.value)) {
          errores.email = "Este campo no debe de estar vacío"
        }

        if (validator.isLength(email.value, 1) && !validator.isEmail(email.value)) {
          errores.email = "Debe colocar un email valido"
        }

        if(!emails.includes(email.value)){
          errores.email = "Este mail no existe"
        }
        
        // Validación Password
        
        if (validator.isEmpty(password.value)) {
          errores.password = "Este campo no debe de estar vacío"
        }


        if (Object.keys(errores).length >= 1) {
          emailError.innerText = (errores.email) ? errores.email : ""
          passwordError.innerText = (errores.password) ? errores.password : ""

        } else {
          form.submit();
        }
      })
    })
})