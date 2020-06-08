-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: db_proyecto
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serie_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `text_review` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `rate` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reviews_fk` (`user_id`),
  CONSTRAINT `reviews_fk` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,83095,2,'me gusto','2020-05-28 23:33:15','2020-05-28 23:33:15',0),(2,60625,2,'Prueba mate','2020-05-30 19:50:42','2020-05-30 19:50:42',3),(16,1403,1,'dsaww','2020-06-01 20:38:00','2020-06-01 20:38:00',8),(17,60625,1,'puedo escribir?','2020-06-03 19:08:33','2020-06-03 19:08:33',4),(51,1403,23,'Muy piola!','2020-06-05 02:34:10','2020-06-07 16:22:07',7),(52,60625,23,'ESTO ES ID','2020-06-05 02:59:33','2020-06-05 02:59:33',3),(53,2734,23,'Una serie pocial pasable ','2020-06-05 03:09:37','2020-06-05 03:09:37',6),(54,615,23,'Fan de Fry!','2020-06-07 16:34:56','2020-06-07 16:34:56',8),(55,1434,23,'Stewie es lo masssss','2020-06-07 16:35:23','2020-06-07 16:35:23',9),(56,2190,23,'La mejor temporada de esta serie es la 3, lejos..','2020-06-07 16:35:48','2020-06-07 16:35:48',7),(58,66788,23,'Malisimas estas cosas que hacen','2020-06-08 14:31:09','2020-06-08 14:31:09',2),(59,74577,23,'La mejor serie que vi en estos dias','2020-06-08 14:31:41','2020-06-08 14:31:41',10),(60,67744,23,'algo policial con un poco de sentido al fin','2020-06-08 14:32:05','2020-06-08 14:32:05',7),(61,46648,23,'meh','2020-06-08 14:32:21','2020-06-08 14:32:21',5),(62,1405,23,'como banco esta serieeeee','2020-06-08 14:32:36','2020-06-08 14:32:36',9),(63,60735,24,'no me gusto para nada, decepciona','2020-06-08 14:34:03','2020-06-08 14:34:03',1),(64,83095,23,'10/10','2020-06-08 14:47:49','2020-06-08 14:47:49',10),(65,83095,24,'la animacion muy buena!','2020-06-08 14:57:40','2020-06-08 14:57:40',8),(66,82591,23,'lo mas bizarro q vi en anime','2020-06-08 14:58:49','2020-06-08 14:58:49',9),(67,82591,24,'vi un cap y me parecio muy gore','2020-06-08 14:59:17','2020-06-08 14:59:17',4),(68,890,23,'los clasicos del anime <3','2020-06-08 14:59:59','2020-06-08 14:59:59',10),(69,890,24,'como me gusta!','2020-06-08 15:00:11','2020-06-08 15:00:11',10),(70,1087,23,'creepy u.u','2020-06-08 15:00:31','2020-06-08 15:00:31',8),(71,1087,24,'wawwww','2020-06-08 15:00:42','2020-06-08 15:00:42',9),(72,66017,23,'dificil de seguir el hilo..','2020-06-08 15:01:47','2020-06-08 15:01:47',3),(73,66017,24,'para nada buena','2020-06-08 15:02:00','2020-06-08 15:02:00',2);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(100) NOT NULL,
  `birth_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('Lucas Grati','lucas.grati@gmail.com',1,'lucas123','1998-03-11 16:45:39'),('Bautista Cardoso','bauti.cardoso@gmail.com',2,'racing2020','1999-05-12 16:50:54'),('Luis Grampa','luis.grampa@gmail.com',3,'lelelezica1','1998-03-26 16:53:37'),('Milagros Hillar','mili.hillar@gmail.com',4,'babasonicos420','1997-09-17 04:10:30'),('Agostina Orbanich','agos.orbanich@gmail.com',5,'neuquen17','1997-12-31 11:00:34'),('Martin Venturaa','1martinventura@gmail.com',18,'$2a$10$MemgHBbgzbP40MIiPQptUeFjicf15sNwAMeH5Zuxu0UAon4UgSqia','1998-10-03 00:00:00'),('Gabriela Giambiagi','gabi.giam@gmail.com',19,'$2a$10$DYGBQXicg/Fj43rmEXRIouSmvNNN5Ean0sLSND8QmlFEEZxku/Qgu','1990-01-09 00:00:00'),('Marcos Montane','marcosmontane@gmail.com',20,'$2a$10$maHXt/nPvQik5cL9R8g/suyU1mPf2MPPr9lEu6qb5hm3XRZL4H12q','1989-02-04 00:00:00'),('Luca La Mattina','luca.lamattina@gmail.com',21,'$2a$10$LCJCRav6gRlBI8CUaNqb5e3PNhO3bRWsAFJkdhPm8WqItrGr6NmP6','1999-01-31 00:00:00'),('Antonella Denzel','anto.denzel@gmail.com',22,'$2a$10$q9wvPIA1McrWXM1n97HwB.sC108WScZ1vRiGXycoZul8XGG2JJB4q','2000-02-25 00:00:00'),('Franco La Mattina','flamattina@udesa.edu.ar',23,'$2a$10$SKBU3TlEc7ePbWLU48kHiOjNFgMBtUGa1WoeJkMP2CJzm.zrTVpzK','1999-03-10 00:00:00'),('Tadeo Sola','tadeosola@gmail.com',24,'$2a$10$Kxn95/C3wNYlIC/SA7.WZezWuKhagx91YqKPiNucGDrGSaA8lsJsO','1995-05-01 00:00:00');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_proyecto'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-08 12:03:13
