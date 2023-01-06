INSERT INTO categorias (id, nombre)
VALUES (DEFAULT, "Remeras"),
(DEFAULT, "Shorts"),
(DEFAULT, "Calzados"),
(DEFAULT, "Vestidos"),
(DEFAULT, "Camisas"),
(DEFAULT, "Accesorios"),
(DEFAULT, "Anteojos"),
(DEFAULT, "Trajes de baño")

INSERT INTO talles (id, nombre)
VALUES (DEFAULT, "XS"),
(DEFAULT, "S"),
(DEFAULT, "M"),
(DEFAULT, "L"),
(DEFAULT, "XL"),
(DEFAULT, "XXL")

INSERT INTO generos (id, nombre)
VALUES (DEFAULT, "Hombre"),
(DEFAULT, "Mujer"),
(DEFAULT, "Niño")

INSERT INTO tipo_usuarios (id, tipoUsuario)
VALUES (DEFAULT, "admin"),
(DEFAULT, "usuario")

INSERT INTO `ursus_db`.`productos` (`nombre`, `idCategoria`, `precio`, `imagen`, `idTalle`, `idGenero`) 
VALUES ('Summer Light', '1', '$1500', 'remera1.png', '3', '1');

INSERT INTO `ursus_db`.`productos` (`nombre`, `idCategoria`, `precio`, `imagen`, `idTalle`, `idGenero`) 
VALUES ('Summer Blue', '1', '$2500', 'remera2.png', '3', '1');

INSERT INTO `ursus_db`.`productos` (`nombre`, `idCategoria`, `precio`, `imagen`, `idTalle`, `idGenero`) 
VALUES ('Mixed', '1', '$2000', 'remera3.png', '4', '2');

INSERT INTO `ursus_db`.`productos` (`nombre`, `idCategoria`, `precio`, `imagen`, `idTalle`, `idGenero`) 
VALUES ('Green Eastwood', '1', '$1000', 'remera4.png', '5', '2');

INSERT INTO `ursus_db`.`productos` (`nombre`, `idCategoria`, `precio`, `imagen`, `idTalle`, `idGenero`) 
VALUES ('Rainbow', '1', '$4000', 'remera5.png', '2', '1');

INSERT INTO `ursus_db`.`usuarios` (`usuario`, `email`, `password`, `imagenUser`, `idTipoUsuario`) 
VALUES ('Joel', 'joel2023@gmail.com', '$2a$10$Ly2IDHLXMX7OVdFrvKBbTeT6CcwSaI6.uxCN3UBr67sjk2TgQEgG6', 'imagenUser-1670103948682.jpg', '1');

INSERT INTO `ursus_db`.`usuarios` (`usuario`, `email`, `password`, `imagenUser`, `idTipoUsuario`) 
VALUES ('Alan', 'alan@gmail.com', '$2a$10$Ly2IDHLXMX7OVdFrvKBbTeT6CcwSaI6.uxCN3UBr67sjk2TgQEgG6', 'imagenUser-1670103948682.jpg', '2');

---------------------------

INSERT INTO `ursus_db`.`productos_talles` (`idProducto`, `idTalle`) VALUES ('1', '3');
INSERT INTO `ursus_db`.`productos_talles` (`idProducto`, `idTalle`) VALUES ('2', '3');
INSERT INTO `ursus_db`.`productos_talles` (`idProducto`, `idTalle`) VALUES ('3', '4');
INSERT INTO `ursus_db`.`productos_talles` (`idProducto`, `idTalle`) VALUES ('4', '5');
INSERT INTO `ursus_db`.`productos_talles` (`idProducto`, `idTalle`) VALUES ('5', '2');

INSERT INTO `ursus_db`.`productos_generos` (`idProductos`, `idGenero`) VALUES ('1', '1');
INSERT INTO `ursus_db`.`productos_generos` (`idProductos`, `idGenero`) VALUES ('2', '1');
INSERT INTO `ursus_db`.`productos_generos` (`idProductos`, `idGenero`) VALUES ('3', '2');
INSERT INTO `ursus_db`.`productos_generos` (`idProductos`, `idGenero`) VALUES ('4', '2');
INSERT INTO `ursus_db`.`productos_generos` (`idProductos`, `idGenero`) VALUES ('5', '1');