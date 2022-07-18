-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 18, 2022 at 09:06 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apirest-express-mysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `nameTask` varchar(15) NOT NULL,
  `descriptionTask` text NOT NULL,
  `codeUser` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `nameTask`, `descriptionTask`, `codeUser`) VALUES
(1, 'Hacer RestApi', 'Realizar una RestApi completa para hacer todas las acciones.', 'USER_0001'),
(2, 'Hacer mas rutas', 'Seguir practicando con diferentes rutas', 'USER_0001'),
(4, 'Practicando', 'Seguir practicando los diferentes metodos por hacer.', 'USER_0001'),
(5, 'Usuario2', 'Agregando con el usuario2.', 'USER_0002'),
(6, 'taskActualizado', 'Actualice esta tarea a lo malandro.', 'USER_0002');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `codeUser` varchar(9) NOT NULL,
  `name` varchar(10) NOT NULL,
  `lastName` varchar(10) NOT NULL,
  `age` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `codeUser`, `name`, `lastName`, `age`) VALUES
(1, 'USER_0001', 'Angel', 'Rangel', 25),
(2, 'USER_0002', 'Andreina', 'Liscano', 29);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_dateUser`
-- (See below for the actual view)
--
CREATE TABLE `v_dateUser` (
`NAME` varchar(10)
,`lastName` varchar(10)
,`age` int(4)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_userTask`
-- (See below for the actual view)
--
CREATE TABLE `v_userTask` (
`name` varchar(10)
,`lastName` varchar(10)
,`nameTask` varchar(15)
,`descriptionTask` text
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_userTaskCode`
-- (See below for the actual view)
--
CREATE TABLE `v_userTaskCode` (
`name` varchar(10)
,`lastName` varchar(10)
,`Codigo` varchar(9)
,`nameTask` varchar(15)
,`descriptionTask` text
);

-- --------------------------------------------------------

--
-- Structure for view `v_dateUser`
--
DROP TABLE IF EXISTS `v_dateUser`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_dateUser`  AS SELECT `users`.`name` AS `NAME`, `users`.`lastName` AS `lastName`, `users`.`age` AS `age` FROM `users``users`  ;

-- --------------------------------------------------------

--
-- Structure for view `v_userTask`
--
DROP TABLE IF EXISTS `v_userTask`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_userTask`  AS SELECT `users`.`name` AS `name`, `users`.`lastName` AS `lastName`, `task`.`nameTask` AS `nameTask`, `task`.`descriptionTask` AS `descriptionTask` FROM (`users` join `task` on(`users`.`codeUser` = `task`.`codeUser`))  ;

-- --------------------------------------------------------

--
-- Structure for view `v_userTaskCode`
--
DROP TABLE IF EXISTS `v_userTaskCode`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_userTaskCode`  AS SELECT `users`.`name` AS `name`, `users`.`lastName` AS `lastName`, `users`.`codeUser` AS `Codigo`, `task`.`nameTask` AS `nameTask`, `task`.`descriptionTask` AS `descriptionTask` FROM (`users` join `task` on(`users`.`codeUser` = `task`.`codeUser`))  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codeUser` (`codeUser`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codeUser` (`codeUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`codeUser`) REFERENCES `task` (`codeUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
