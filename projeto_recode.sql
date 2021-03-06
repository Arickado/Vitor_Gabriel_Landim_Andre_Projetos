SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


DROP TABLE IF EXISTS `estoque`;
CREATE TABLE IF NOT EXISTS `estoque` (
  `idestoque` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `quant` int NOT NULL,
  PRIMARY KEY (`idestoque`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `estoque` (`idestoque`, `nome`, `preco`, `quant`) VALUES
(1, 'Forno Airfryer Ovenfryer 10L Cuisinart 127V', '1481.89', 100),
(2, 'Fritadeira Elétrica Airfryer Viva Black Edition PHILIPS WALITA 220V', '1253.89', 105),
(3, 'Fritadeira Elétrica Airfryer Viva Philips Walita N 220V', '1128.49', 108),
(4, 'Fritadeira Elétrica Turbofryer Avance Philips Walita 127V', '2165.89', 110),
(5, 'Geladeira Brastemp Frost Free Duplex 375 litros cor Inox com Espaço Adapt 110V', '2249.10', 125),
(6, 'Geladeira Electrolux Cycle Defrost 362 Litros DC44 Branco - 127V', '1850.50', 112),
(7, 'Refrigerador Brastemp BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L - 220V', '2338.99', 101),
(8, 'Refrigerador Consul CRD37EB com Prateleiras Removíveis e Reguláveis Branco - 334L - 110v', '1597.06', 101),
(9, 'Torradeira DeLonghi TTM400 Inox 600W 6 Temperaturas (110)', '128.90', 107),
(10, 'Torradeira Easyline Preta - 220v - Electrolux', '129.00', 103),
(11, 'Torradeira Oster Square Retro Toaster - 220V', '169.90', 151),
(12, 'Torradeira Cuisinart para 2 Fatias com Visor em Vidro 127V', '569.90', 111);

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `idpedidos` int NOT NULL,
  `cliente` varchar(45) DEFAULT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `tel` int DEFAULT NULL,
  `produto` varchar(70) DEFAULT NULL,
  `valor_unit` decimal(10,2) DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `valor_total` decimal(15,2) DEFAULT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `pedidos` (`idpedidos`, `cliente`, `endereco`, `tel`, `produto`, `valor_unit`, `quantidade`, `valor_total`) VALUES
(0, 'Romario', NULL, NULL, 'Geladeira', NULL, NULL, NULL),
(1, 'Rosa Ginez', 'Rua A', 111111111, 'Geladeira Electrolux', '1850.50', 1, '1850.50'),
(2, 'Carlos Eduardo', 'Rua B', 222222222, 'Torradeira Easyline', '129.00', 3, '387.00'),
(3, 'Eduardo Barbosa', 'Rua C', 333333333, 'Geladeira Brastemp', '2249.10', 1, '2249.10'),
(4, 'Gizelle Ramos', 'Rua D', 444444444, 'Fritadeira Elétrica', '1253.89', 2, '2507.78'),
(5, 'Lucas Santos', 'Rua E', 555555555, 'Torradeira Cuisinart', '569.90', 1, '569.90');

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `idProdutos` varchar(4) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `descricao` varchar(120) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `imagem` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idProdutos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `produtos` (`idProdutos`, `nome`, `descricao`, `preco`, `imagem`) VALUES
('a1', 'Forno Airfryer', 'Ovenfryer 10L Cuisinart 127V', '1481.89', 'AirFryer1.png'),
('a2', 'Fritadeira Elétrica', 'Airfryer Viva Black Edition PHILIPS WALITA 220V', '1253.89', 'AirFryer2.png'),
('a3', 'Fritadeira Elétrica', 'Airfryer Viva Philips Walita N 220V', '1128.49', 'AirFryer3.png'),
('a4', 'Fritadeira Elétrica', 'Turbofryer Avance Philips Walita 127V', '2165.89', 'AirFryer4.png'),
('g1', 'Geladeira Brastemp', 'Frost Free Duplex 375 litros cor Inox com Espaço Adapt 110V', '2249.10', 'Geladeira1.png'),
('g2', 'Geladeira Electrolux', 'Cycle Defrost 362 Litros DC44 Branco - 127V', '1850.50', 'Geladeira2.png'),
('g3', 'Refrigerador Brastemp', 'BRM44HK Frost Free com Gavetão de Legumes Fresh Zone Inox - 375L - 220V', '2338.99', 'Geladeira3.png'),
('g4', 'Refrigerador Consul', 'CRD37EB com Prateleiras Removíveis e Reguláveis Branco - 334L - 110v', '1597.06', 'Geladeira4.png'),
('t1', 'Torradeira DeLonghi', 'TTM400 Inox 600W 6 Temperaturas (110)', '128.90', 'Torradeira1.png'),
('t2', 'Torradeira Easyline', 'Preta - 220v - Electrolux', '129.00', 'Torradeira2.png'),
('t3', 'Torradeira Oster', 'Square Retro Toaster - 220V', '169.90', 'Torradeira3.png'),
('t4', 'Torradeira Cuisinart', 'para 2 Fatias com Visor em Vidro 127V', '569.90', 'Torradeira4.png');

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `usuario` (`id`, `nome`, `email`, `senha`) VALUES
(1, 'vitor', 'v@gmail.com', '12345'),
(3, 'thais', 'thais@hotmail.com', '1234567'),
(5, 'roger', 'roger@roger.com', '123456');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
