-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-08-2024 a las 16:20:47
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--
-- Creación: 07-08-2024 a las 14:09:59
-- Última actualización: 13-08-2024 a las 14:02:42
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año_publicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `año_publicacion`, `ISBN`) VALUES
(1, 'Cien Años de Soledad', 'Gabriel Garcia Marquez', 'Ficción', '1967-05-30', '9780060883287'),
(2, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 'Clásico', '1605-01-16', '9788491050221'),
(3, '1984', 'George Orwell', 'Distopía', '1949-06-08', '9780451524935'),
(4, 'Matar a un Ruiseñor', 'Harper Lee', 'Ficción', '1960-07-11', '9780061120084'),
(5, 'El Gran Gatsby', 'F. Scott Fitzgerald', 'Clásico', '1925-04-10', '9780743273565'),
(6, 'Orgullo y Prejuicio', 'Jane Austen', 'Romántico', '1813-01-28', '9781503290563'),
(7, 'La Odisea', 'Homero', 'Épico', '0800-01-01', '9780140268867'),
(8, 'En Busca del Tiempo Perdido', 'Marcel Proust', 'Ficción', '1913-11-14', '9780812969641'),
(9, 'Crimen y Castigo', 'Fiódor Dostoyevski', 'Filosófico', '1866-01-01', '9780140449136'),
(10, 'Los Hermanos Karamazov', 'Fiódor Dostoyevski', 'Filosófico', '1880-01-01', '9780374528379');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
