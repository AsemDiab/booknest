-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2023 at 04:07 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booknest`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `BookID` int(11) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Auther` varchar(50) NOT NULL,
  `CopiesCount` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `Type` int(11) NOT NULL,
  `cover` varchar(50) NOT NULL,
  `Description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`BookID`, `Title`, `Auther`, `CopiesCount`, `Price`, `Type`, `cover`, `Description`) VALUES
(15, 'اخر الأبواب الموصدة', 'ابتسام أبو ميالة', 13, 10, 9, '657cb0a013b0c.tmp', ''),
(16, ' A Love and Boyend', 'Don Sofer', 10, 5, 9, '6582b94b83e52.tmp', ''),
(17, 'PHP and Mysql 5 second edition', 'W.jason Gilmore', 10, 4, 9, '657cb0529b61f.tmp', ''),
(19, 'PHP and Mysql 5 second edition', 'W.jason Gilmore', 10, 4, 9, '6582c1316142a.tmp', ''),
(20, 'Programming Python', 'Mark Lutz', 100, 10, 9, '6582c3787eea5.tmp', '');

-- --------------------------------------------------------

--
-- Table structure for table `booktype`
--

CREATE TABLE `booktype` (
  `TypeCode` int(11) NOT NULL,
  `TypeNAme` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booktype`
--

INSERT INTO `booktype` (`TypeCode`, `TypeNAme`) VALUES
(0, 'other'),
(1, 'managa'),
(2, 'philosophy'),
(9, 'novel');

-- --------------------------------------------------------

--
-- Table structure for table `orderitems`
--

CREATE TABLE `orderitems` (
  `orderID` int(11) NOT NULL,
  `bookID` int(11) NOT NULL,
  `quntaty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ordertable`
--

CREATE TABLE `ordertable` (
  `orderID` int(11) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'not shiped',
  `userName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ordertable`
--


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userName` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `social` varchar(225) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `position` point NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userName`, `password`, `social`, `phoneNumber`, `position`) VALUES
('Ahmad', '57df227149444fe2b6636df931acdd04190fecac', 'https://www.facebook.com/asem.hesham.58', '0599257551', 0x000000000101000000c5feb27bf2b02840efc9c342adb953c0),
('AhmadAli', '57df227149444fe2b6636df931acdd04190fecac', 'https://www.linkedin.com/in/asem-diab-167209249/', '0569090925', 0x000000000101000000c5feb27bf2b02840efc9c342adb953c0),
('AhmadMohammad', '57df227149444fe2b6636df931acdd04190fecac', 'https://www.linkedin.com/in/asem-diab-167209249/', '0569090925', 0x000000000101000000c5feb27bf2b02840efc9c342adb953c0),
('Asem', '57df227149444fe2b6636df931acdd04190fecac', 'https://www.facebook.com/asem.hesham.58', '0598138847', 0x000000000101000000c5feb27bf2b02840efc9c342adb953c0),
('AsemDiab', '57df227149444fe2b6636df931acdd04190fecac', 'https://www.facebook.com/asem.hesham.58', '0598138847', 0x000000000101000000c5feb27bf2b02840efc9c342adb953c0),
('JohnDoe', SHA1('Asem@123'), 'https://www.facebook.com', '0569090925', 0x00000000010100000061f8e30580184040beb0f21449a44140),
('Othman', '57df227149444fe2b6636df931acdd04190fecac', 'https://www.facebook.com/asem.hesham.58', '0598138847', 0x000000000101000000c5feb27bf2b02840efc9c342adb953c0),

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`BookID`),
  ADD KEY `Type` (`Type`);

--
-- Indexes for table `booktype`
--
ALTER TABLE `booktype`
  ADD PRIMARY KEY (`TypeCode`),
  ADD UNIQUE KEY `TypeCode` (`TypeCode`);

--
-- Indexes for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`orderID`,`bookID`),
  ADD KEY `bookID` (`bookID`);

--
-- Indexes for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `BookID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `booktype`
--
ALTER TABLE `booktype`
  MODIFY `TypeCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `ordertable`
--
ALTER TABLE `ordertable`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`Type`) REFERENCES `booktype` (`TypeCode`) ON UPDATE CASCADE;

--
-- Constraints for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`orderID`) REFERENCES `ordertable` (`orderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`bookID`) REFERENCES `book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD CONSTRAINT `ordertable_ibfk_1` FOREIGN KEY (`userName`) REFERENCES `users` (`userName`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
