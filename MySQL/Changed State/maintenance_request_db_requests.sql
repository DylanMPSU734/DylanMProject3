-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: maintenance_request_db
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requests` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `tenant_id` int NOT NULL,
  `apartment` int NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `location` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `photo` varchar(1000) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `staff_id` int DEFAULT NULL,
  PRIMARY KEY (`request_id`),
  UNIQUE KEY `request_id_UNIQUE` (`request_id`),
  KEY `req_tenant_id_idx` (`tenant_id`),
  KEY `req_apartment_idx` (`apartment`),
  KEY `req_staff_id_idx` (`staff_id`),
  CONSTRAINT `req_apartment` FOREIGN KEY (`apartment`) REFERENCES `apartments` (`apartment`),
  CONSTRAINT `req_staff_id` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`user_id`),
  CONSTRAINT `req_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
INSERT INTO `requests` VALUES (1,4,107,'2023-11-21 21:13:43','kitchen','Sink leaking','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UMuDTf6GRK5Yvr_uIvu-DQHaE7%26pid%3DApi&f=1&ipt=11fa044882724e2a9c189f25bac2e85ca98ec578926e3fa0810229961b0644b0&ipo=images','Completed',3),(2,4,107,'2023-11-21 08:45:12','kitchen','still leaking','','Pending',NULL),(3,5,208,'2023-11-23 16:43:51','bathroom','mold','','Pending',NULL),(10,4,105,'2023-12-09 20:30:25','living room','air conditioner broke','https://static.homeguide.com/assets/images/content/homeguide-repairing-a-window-ac-unit-and-adding-weatherstripping.jpg','Completed',2),(11,5,209,'2023-12-09 20:33:30','kitchen','dish washer stopped working','','Completed',2),(12,5,209,'2023-12-09 20:34:17','test','testing','','Completed',3),(13,5,209,'2023-12-09 20:34:34','more tests','more testing','','Pending',NULL),(14,9,205,'2023-12-09 20:37:14','tenant4 apartment','theres a problem','','Completed',3),(15,15,206,'2023-12-09 20:37:58','tenant 5\'s apartment','problem after moving in','','Pending',NULL),(16,4,107,'2023-12-09 20:41:44','kitchen','a month later and theres still a problem',NULL,'Completed',2);
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-09 23:09:05
