-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: ursus_db
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Remera'),(2,'Short'),(3,'Calzado'),(4,'Vestido'),(5,'Camisa'),(6,'Pantalon');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Hombre'),(2,'Mujer'),(3,'Niño');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Summer Light ',1,'Disponible','$1500','remera1.png'),(2,'Summer Blue',1,'Disponible','$2500','remera2.png'),(3,'Mixed',1,'Disponible','$2000','remera3.png'),(4,'Green Eastwood',1,'Disponible','$1000','remera4.png'),(5,'Rainbow',1,'Disponible','$4000','remera5.png'),(6,'The Sky',1,'Disponible','$3700','imagen-1672695973511.png'),(7,'Moody',2,'Disponible','$1500','short1.png'),(8,'Board',2,'Disponible','$1200','short2.png'),(9,'Jogger',2,'Disponible','$3000','short3.png'),(10,'Linen',2,'Disponible','$4500','short4.png'),(11,'Frayed',3,'Disponible','$5000','calzado1.png'),(12,'Wrap',3,'Disponible','$8000','calzado2.png'),(13,'High Rise',3,'Disponible','$10000','calzado3.png'),(14,'Striped',3,'Disponible','$5000','calzado4.png'),(15,'Lace',4,'Disponible','$5000','vestidos1.png'),(16,'Plaid',4,'Disponible','$7000','vestidos2.png'),(17,'Camo',4,'Disponible','$4500','vestidos3.png'),(18,'Faux',4,'Disponible','$8200','vestidos4.png'),(19,'Apront',5,'Disponible','$3200','camisas1.png'),(20,'Velour',5,'Disponible','$2500','camisas2.png'),(21,'Paisley',5,'Disponible','$4100','camisas3.png'),(22,'Jacquard',5,'Disponible','$9500','camisas4.png'),(23,'Lattice',6,'Disponible','$5000','pantalon1.png'),(24,'Applique',6,'Disponible','$7500','pantalon2.png'),(25,'Rouchet',6,'Disponible','$4500','pantalon3.png'),(26,'Avuumi',6,'Disponible','$7200','pantalon4.png');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos_generos`
--

LOCK TABLES `productos_generos` WRITE;
/*!40000 ALTER TABLE `productos_generos` DISABLE KEYS */;
INSERT INTO `productos_generos` VALUES (1,1,1),(2,2,1),(3,3,2),(4,4,2),(5,5,1),(6,6,1),(7,7,1),(8,8,1),(9,9,2),(10,10,2),(11,11,1),(12,12,3),(13,13,2),(14,14,1),(15,15,2),(16,16,2),(17,17,2),(18,18,2),(19,19,1),(20,20,1),(21,21,2),(22,22,2),(23,23,3),(24,24,3),(25,25,1),(26,26,1);
/*!40000 ALTER TABLE `productos_generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos_talles`
--

LOCK TABLES `productos_talles` WRITE;
/*!40000 ALTER TABLE `productos_talles` DISABLE KEYS */;
INSERT INTO `productos_talles` VALUES (1,1,3),(2,2,3),(3,3,4),(4,4,5),(5,5,2),(6,6,5),(7,1,4),(8,1,2),(9,1,1),(10,2,1),(11,3,1),(12,3,2),(13,7,2),(14,7,3),(15,7,4),(16,8,4),(17,9,5),(18,9,6),(19,10,3),(20,11,5),(21,12,2),(22,12,4),(23,13,5),(24,14,3),(25,16,2),(26,16,1),(27,17,5),(28,18,4),(29,19,3),(30,19,3),(31,20,2),(32,20,1),(33,21,4),(34,22,3),(35,23,6),(36,23,5),(37,24,2),(38,25,3),(39,26,3),(40,15,4),(41,15,3);
/*!40000 ALTER TABLE `productos_talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,'XS'),(2,'S'),(3,'M'),(4,'L'),(5,'XL'),(6,'XXL');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tipo_usuarios`
--

LOCK TABLES `tipo_usuarios` WRITE;
/*!40000 ALTER TABLE `tipo_usuarios` DISABLE KEYS */;
INSERT INTO `tipo_usuarios` VALUES (1,'admin'),(2,'usuario');
/*!40000 ALTER TABLE `tipo_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Joel','joel2023@gmail.com','$2a$10$Ly2IDHLXMX7OVdFrvKBbTeT6CcwSaI6.uxCN3UBr67sjk2TgQEgG6','imagenUser-1670103948682.jpg',1),(2,'Alan','alan@gmail.com','$2a$10$Ly2IDHLXMX7OVdFrvKBbTeT6CcwSaI6.uxCN3UBr67sjk2TgQEgG6','imagenUser-1670103948682.jpg',2),(3,'Richy','ricardo@gmail.com','$2a$10$6QTATcPrezfmkGwqCx0LZ./hrHccKq9ZWobaBK.z4jBUiLffN6O9S','imagenUser-1672689912691.jpg',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-06 18:58:39
