-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: projeto_recode
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idpedidos` int NOT NULL,
  `cliente` varchar(45) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `tel` int NOT NULL,
  `produto` varchar(70) NOT NULL,
  `valor_unit` decimal(10,2) NOT NULL,
  `quantidade` int NOT NULL,
  `valor_total` decimal(15,2) NOT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'Rosa Ginez','Rua A',111111111,'Geladeira Electrolux',1850.50,1,1850.50),(2,'Carlos Eduardo','Rua B',222222222,'Torradeira Easyline',129.00,3,387.00),(3,'Eduardo Barbosa','Rua C',333333333,'Geladeira Brastemp',2249.10,1,2249.10),(4,'Gizelle Ramos','Rua D',444444444,'Fritadeira Elétrica',1253.89,2,2507.78),(5,'Lucas Santos','Rua E',555555555,'Torradeira Cuisinart',569.90,1,569.90);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `idProdutos` varchar(4) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `descricao` varchar(120) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `img` varchar(45) NOT NULL,
  PRIMARY KEY (`idProdutos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES ('a1','Forno Airfryer','Ovenfryer 10L Cuisinart 127V',1481.89,'airfryer1'),('a2','Fritadeira Elétrica','Airfryer Viva Black Edition PHILIPS WALITA 220V',1253.89,'airfryer2'),('a3','Fritadeira Elétrica','Airfryer Viva Philips Walita N 220V',1128.49,'airfryer3'),('a4','Fritadeira Elétrica','Turbofryer Avance Philips Walita 127V',2165.89,'airfryer4'),('g1','Geladeira Brastemp','Frost Free Duplex 375 litros cor Inox com Espaço Adapt 110V',2249.10,'geladeira1'),('g2','Geladeira Electrolux','Cycle Defrost 362 Litros DC44 Branco - 127V',1850.50,'geladeira2'),('g3','Refrigerador Brastemp','BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L - 220V',2338.99,'geladeira3'),('g4','Refrigerador Consul','CRD37EB com Prateleiras Removíveis e Reguláveis Branco - 334L - 110v',1597.06,'geladeira4'),('t1','Torradeira DeLonghi','TTM400 Inox 600W 6 Temperaturas (110)',128.90,'torradeira1'),('t2','Torradeira Easyline','Preta - 220v - Electrolux',129.00,'torradeira2'),('t3','Torradeira Oster','Square Retro Toaster - 220V',169.90,'torradeira3'),('t4','Torradeira Cuisinart','para 2 Fatias com Visor em Vidro 127V',569.90,'torradeira4');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-23  8:09:21
