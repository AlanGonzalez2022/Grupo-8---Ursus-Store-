window.addEventListener("load", function () {

  fetch("http://localhost:3032/emailUsuario")
    .then(function (respuesta) {
      return respuesta.json();
      
    })
    .then(function (dataUser) {
      
    let emails = dataUser.data.map(data => {
        return data.email
      })
      
      let form = document.querySelector("#formRegister")
      let btnRegistrate = document.querySelector("#registrate");
      let usuario = document.querySelector("#usuario");
      let email = document.querySelector("#email");
      let password = document.querySelector("#password");
      let repassword = document.querySelector("#repassword");
      let imagenUser = document.querySelector("#imagenUser");
      let usuarioError = document.querySelector("#usuarioError");
      let emailError = document.querySelector("#emailError");
      let passwordError = document.querySelector("#passwordError");
      let repasswordError = document.querySelector("#repasswordError");
      let imagenUserError = document.querySelector("#imagenUserError");

      btnRegistrate.addEventListener("click", e => {
        e.preventDefault();
        let errores = {}

        // Validación Usuario

        if (validator.isEmpty(usuario.value)) {
          errores.usuario = "Este campo no debe de estar vacío"
        }

        if (validator.isLength(usuario.value, 1, 1)) {
          errores.usuario = "Debe de tener como minimo 2 caracteres"
        }

        // Validación email
        
        if (validator.isEmpty(email.value)) {
          errores.email = "Este campo no debe de estar vacío"
        }

        if (validator.isLength(email.value, 1) && !validator.isEmail(email.value)) {
          errores.email = "Debes colocar un email valido"
        }

        if(emails.includes(email.value)){
          errores.email = "Este mail ya está en uso"
        }
        
        // Validación Password
        
        if (validator.isEmpty(password.value)) {
          errores.password = "Este campo no debe de estar vacío"
        }

        // if (!validator.isLength(password.value, 8)) {
        //   errores.password = "Debe de tener como minimo 8 caracteres"
        // }

        if(!validator.isStrongPassword(password.value)){
          errores.password = "Como mínimo 8 caracteres, una mayuscula, una minuscula, un numero y un carcter especial"
        }
        
        // Validación Repassword
        
        if (repassword.value !== password.value) {
          errores.repassword = "La contraseña no coinciden"
        }

        // Validación Imagen
        
        if (
          (!imagenUser.value.includes(".jpg") && !imagenUser.value.includes(".jpeg")) &&
          (!imagenUser.value.includes(".png") && !imagenUser.value.includes(".gif"))
        ) {
          errores.imagenUser = "Extensiones permitidas: .jpg .jpeg .png. .gif"
        }

        // Mostrar Errores

        if (Object.keys(errores).length >= 1) {
          usuarioError.innerText = (errores.usuario) ? errores.usuario : ""
          emailError.innerText = (errores.email) ? errores.email : ""
          passwordError.innerText = (errores.password) ? errores.password : ""
          repasswordError.innerText = (errores.repassword) ? errores.repassword : ""
          imagenUserError.innerText = (errores.imagenUser) ? errores.imagenUser : ""
        } else {
          form.submit();
        }
      })
    })
})