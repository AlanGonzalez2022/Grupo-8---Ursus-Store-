const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../../database/models")

let usersController = {
  register: function (req, res) {

    res.render("users/register");
  },

  processRegister: async function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    "email", req.body.email
    let userDb = await db.Usuario.findOne({
      where: { email: req.body.email }
    });

    if (userDb) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya esta en uso",
          },
        },
        oldData: req.body,
      });
    }

    await db.Usuario.create({
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      imagenUser: req.file.filename,
      idTipoUsuario: 2
    })

    res.redirect("/login");
  },

  login: function (req, res) {
    res.render("users/login");
  },

  processLogin: async function (req, res) {
    let userLogin = await db.Usuario.findOne({
      include: [{ association: "tipoUsuario" }],
      where: { email: req.body.email }
    });

    if (userLogin) {
      let verficationPassword = bcryptjs.compareSync(
        req.body.password,
        userLogin.password
      );

      if (verficationPassword) {
        delete userLogin.password;
        req.session.userLogged = userLogin;

        if (req.body.recordar) {
          res.cookie("cookieUser", req.body.email, { maxAge: 1000 * 60 });
        }

        return res.redirect("/profile");
      }
    }

    res.render("users/login", {
      errors: {
        email: {
          msg: "Las credenciales son incorrectas",
        },
      },
    });

    res.render("users/login", {
      errors: {
        email: {
          msg: "Mail no registrado",
        },
      },
    });
  },

  profile: function (req, res) {
    return res.render("users/userProfile", {
      user: req.session.userLogged,
    });
  },

  editProfile: function (req, res) {
    return res.render("users/editProfile", {
      user: req.session.userLogged,

    });
  },

  confirmEdit: async function (req, res) {

    if (!req.body.filename) {
      await db.Usuario.update({
        usuario: req.body.usuario,
        email: req.body.email,

      }, {
        where: { id: req.params.id }
      })
    } else {
      await db.Usuario.update({
        nombre: req.body.nombre,
        email: req.body.email,
        imagenUser: req.files[0].filename
      }, {
        where: { id: req.params.id }
      })
    }

    res.redirect("/profile")

  },

  logout: function (req, res) {
    res.clearCookie("cookieUser");
    req.session.destroy();
    return res.redirect("/");
  },

  admin: function (req, res) {
    res.render("users/admin");
  },

  processAdmin: async function (req, res) {
    let userLogin = await db.Usuario.findOne({
      include: [{ association: "tipoUsuario" }],
      where: { email: req.body.email }
    });

    if (userLogin) {
      let verficationPassword = bcryptjs.compareSync(req.body.password, userLogin.password)
      if (verficationPassword && userLogin.tipoUsuario.tipo === "admin") {
        delete userLogin.password;
        req.session.userLogged = userLogin;

        return res.redirect("/")
      }
    }

    res.render("users/admin", {
      errors: {
        email: {
          msg: "Las credenciales son incorrectas",
        },
      },
    });
  },

  emailFound: async function (req, res){
   let usuariosEmail = await db.Usuario.findAll()
      return res.status(200).json({
        total: usuariosEmail.length,
        data: usuariosEmail,
        status: 200
      })
  }

};

module.exports = usersController;
