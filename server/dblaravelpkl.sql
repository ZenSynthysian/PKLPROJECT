-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2024 at 05:29 AM
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
-- Database: `dblaravelpkl`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_08_19_202735_create_pkls_table', 1),
(5, '2024_08_19_212812_create_personal_access_tokens_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(2, 'App\\Models\\User', 5, 'api-pkl', '576e67335606bdef50fd8b31d4082e93dcb7c86381063eb1ddbb7a2e9153088e', '[\"*\"]', NULL, NULL, '2024-08-24 07:34:25', '2024-08-24 07:34:25'),
(3, 'App\\Models\\User', 6, 'api-pkl', '111e2d36be0a1da305fed2e2f2e12800b762f11c8feee388177f128dc519cdcc', '[\"*\"]', NULL, NULL, '2024-08-24 07:35:21', '2024-08-24 07:35:21'),
(7, 'App\\Models\\User', 7, 'api-pkl', 'a94c83ee5bc9229f64b70833d409729a1891f0a84b45e50c1e9ff50c6c9c34a8', '[\"*\"]', NULL, NULL, '2024-08-25 01:29:26', '2024-08-25 01:29:26'),
(8, 'App\\Models\\User', 7, 'api-pkl', '30c8c955204dbb49e520c0334021313a6b2a1a0e63e11e1af0d778039a82c730', '[\"*\"]', NULL, NULL, '2024-08-25 01:30:12', '2024-08-25 01:30:12'),
(9, 'App\\Models\\User', 7, 'api-pkl', '81321b925f29709ef919dd0421533d670ef2d3eb63c8ebdb3eca058af67d7009', '[\"*\"]', '2024-08-25 20:18:34', NULL, '2024-08-25 20:16:25', '2024-08-25 20:18:34'),
(10, 'App\\Models\\User', 7, 'api-pkl', '3a9cf77fe4b7484d4e8b37fde308d0b23eff229f28a4ef56e68498e42ab22eeb', '[\"*\"]', NULL, NULL, '2024-08-25 20:24:16', '2024-08-25 20:24:16'),
(11, 'App\\Models\\User', 5, 'api-pkl', '87804daeac00e09b4cdaf0af380b4b570cf20b34b4713c6713391a2115326ebe', '[\"*\"]', NULL, NULL, '2024-08-25 20:28:04', '2024-08-25 20:28:04'),
(12, 'App\\Models\\User', 5, 'api-pkl', 'fe8bfd0d555b33ef323220e390ae4ec21e3b54cfd9d4eae5cd8ac65f1da06a11', '[\"*\"]', NULL, NULL, '2024-08-25 20:28:11', '2024-08-25 20:28:11'),
(13, 'App\\Models\\User', 5, 'api-pkl', 'b3c9e906253281acd75e41cbfdb6b32c19a1d560f7785268a8376eec27ab573f', '[\"*\"]', NULL, NULL, '2024-08-25 20:28:17', '2024-08-25 20:28:17'),
(14, 'App\\Models\\User', 5, 'api-pkl', '3cb5db8245ae48dd10f63f76c70d68b59d0031243e9536a477b652c77809f351', '[\"*\"]', NULL, NULL, '2024-08-25 20:28:42', '2024-08-25 20:28:42'),
(15, 'App\\Models\\User', 5, 'api-pkl', 'c28abf36103c6a3ab004d126926320c0c6c7fb1f14b830ffed0db0fdbb67f18b', '[\"*\"]', NULL, NULL, '2024-08-25 20:32:34', '2024-08-25 20:32:34'),
(16, 'App\\Models\\User', 5, 'api-pkl', '9b1729daa7493472eef99cc56537c732e9916e22fe447a46e7a92805562bacf1', '[\"*\"]', NULL, NULL, '2024-08-25 20:32:46', '2024-08-25 20:32:46'),
(17, 'App\\Models\\User', 5, 'api-pkl', '41ebee698ed2b9ba90c8d2febc6e7df8bf51b726eac7192a12d4eb504f172146', '[\"*\"]', NULL, NULL, '2024-08-25 20:33:43', '2024-08-25 20:33:43'),
(18, 'App\\Models\\User', 5, 'api-pkl', 'd1a51ea68e90792ba122ec81fab97887328f57090504f91cb6674a44d0d4de33', '[\"*\"]', NULL, NULL, '2024-08-25 20:33:43', '2024-08-25 20:33:43'),
(19, 'App\\Models\\User', 5, 'api-pkl', '6b3ccf3a9b28f9943650465b15301633a5df3f5159192921a3195f347b6a2738', '[\"*\"]', NULL, NULL, '2024-08-25 20:34:02', '2024-08-25 20:34:02'),
(20, 'App\\Models\\User', 5, 'api-pkl', '21ab81e52c1541dc71bf096bf54bd2ca7e8e37cec20e1cc94e51755a9e819a10', '[\"*\"]', NULL, NULL, '2024-08-25 21:51:45', '2024-08-25 21:51:45'),
(21, 'App\\Models\\User', 5, 'api-pkl', '79133808d4aa52ecb61ab18ae30040189fc8982a667905f3d599b32de7b1b5aa', '[\"*\"]', NULL, NULL, '2024-08-25 21:58:20', '2024-08-25 21:58:20'),
(22, 'App\\Models\\User', 5, 'api-pkl', '63f442430795184300c212aa953f15af06a3e272448dde415d41be511f5cf468', '[\"*\"]', '2024-08-25 22:50:34', NULL, '2024-08-25 22:01:54', '2024-08-25 22:50:34'),
(23, 'App\\Models\\User', 5, 'api-pkl', '94c66a20dad13d1a481c62c716b72031a5c4230c80785b63ceaa23a328233183', '[\"*\"]', '2024-08-26 00:30:41', NULL, '2024-08-25 22:59:54', '2024-08-26 00:30:41'),
(24, 'App\\Models\\User', 5, 'api-pkl', 'a4f17d9f52e871b59c50837917e092912b0f61f24c834529b77b199db5118417', '[\"*\"]', '2024-08-26 00:47:51', NULL, '2024-08-26 00:47:47', '2024-08-26 00:47:51'),
(25, 'App\\Models\\User', 5, 'api-pkl', 'e461b36a827d2628b105353d859903a6de7b7702b28da6d2122e92ef9d91f15e', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:16', '2024-08-26 18:51:16'),
(26, 'App\\Models\\User', 5, 'api-pkl', '530cc72cee287c7f20d4e09b37c982b944279b8ff56d5b0bbd7fabab7f2ba56d', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:17', '2024-08-26 18:51:17'),
(27, 'App\\Models\\User', 5, 'api-pkl', 'fcc65dd64cc538ba3a775f8c4b81b5ecac628315b7b3a90779bee735048fcfbb', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:18', '2024-08-26 18:51:18'),
(28, 'App\\Models\\User', 5, 'api-pkl', '7982aae30d9f99a03373767bad400bf3a61689d659561f47bc1b4a93c739e0d8', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:18', '2024-08-26 18:51:18'),
(29, 'App\\Models\\User', 5, 'api-pkl', 'a2f721a5dba758bd8752f387e28f278249b3176598b3cfac615380b2b887092d', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:18', '2024-08-26 18:51:18'),
(30, 'App\\Models\\User', 5, 'api-pkl', '8860ee1ffb8033cf417e072ebe4fd570008b4cf08e5272217adb085f6c635cad', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:19', '2024-08-26 18:51:19'),
(31, 'App\\Models\\User', 5, 'api-pkl', '401d4289e89a79f3ad20ba9c123fcb9d9c7a7f742f144ace3986e141ab3c890f', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:19', '2024-08-26 18:51:19'),
(32, 'App\\Models\\User', 5, 'api-pkl', '1ef38d095d59fbced2fb45a09a323c1627ea4a6bf7697f29cdce5a23e669544c', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:24', '2024-08-26 18:51:24'),
(33, 'App\\Models\\User', 5, 'api-pkl', '9b9988f07cd43da8d5ccbc9bdaca42e4464e61930a35ff5eb41acdba0e482cb6', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:25', '2024-08-26 18:51:25'),
(34, 'App\\Models\\User', 5, 'api-pkl', '5dc197fa97029ef418a673dda58af93ee94c6730422f6e5a782d9fe65c989a68', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:36', '2024-08-26 18:51:36'),
(35, 'App\\Models\\User', 5, 'api-pkl', 'dab6b92324ce5a49f5d9a402e11eef122ee4a401877d6e3a4b2f12bd5d93740c', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:36', '2024-08-26 18:51:36'),
(36, 'App\\Models\\User', 5, 'api-pkl', '4981aee84abf6940c30e81ed89ffee1ef299beb3ba1ea7684863d5b8819e5755', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:36', '2024-08-26 18:51:36'),
(37, 'App\\Models\\User', 5, 'api-pkl', '74af48475cc7e030ab75d28362981710c1c643f41c69386bd58ddb9d014c49b8', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:37', '2024-08-26 18:51:37'),
(38, 'App\\Models\\User', 5, 'api-pkl', '8e313d1d39e84a90b5b10b977aebcd771b1c0916a572c320794d3bac170fa7f7', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:38', '2024-08-26 18:51:38'),
(39, 'App\\Models\\User', 5, 'api-pkl', '225419b10940e413f9b514e6e3238e160ecee0d5397c0ba0eb77673a1b9e868a', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:38', '2024-08-26 18:51:38'),
(40, 'App\\Models\\User', 5, 'api-pkl', '75fdcaa2dc2c10564f48697bb26f080b723425c193d7c55365c806051766284b', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:38', '2024-08-26 18:51:38'),
(41, 'App\\Models\\User', 5, 'api-pkl', 'f400ad916060b4bdca83d4d3348be476465a1b84a0fd56c29f78cf3a0ea6b65f', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:41', '2024-08-26 18:51:41'),
(42, 'App\\Models\\User', 5, 'api-pkl', 'c396bd0931f07c84fca00c4020712274dc89992dd7c3f38420fc2e9b1cdfd40e', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:41', '2024-08-26 18:51:41'),
(43, 'App\\Models\\User', 5, 'api-pkl', '660d06470649439cf44df8d203ec9838ddbd2c146b00ece0c7cc987a7544bdce', '[\"*\"]', NULL, NULL, '2024-08-26 18:51:42', '2024-08-26 18:51:42'),
(44, 'App\\Models\\User', 5, 'api-pkl', 'f747156907b0e002055c392b3ed6d0df0d32ecbe4d8328854650cb88e7bb039b', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:06', '2024-08-26 18:52:06'),
(45, 'App\\Models\\User', 5, 'api-pkl', '02d0708eb4930df7ec009be80f6bda9b25d1ed0c7768b3e1a1ca176fcc0f6e2b', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:07', '2024-08-26 18:52:07'),
(46, 'App\\Models\\User', 5, 'api-pkl', 'cfa826aaf4b1629a4348abc26eadc3d64b87bb77755151c631ec9395873caec7', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:08', '2024-08-26 18:52:08'),
(47, 'App\\Models\\User', 5, 'api-pkl', 'b0b2bc7aaa2d65d8dcd2f6b53d49e23228eb0f08e679d8056e789975ad7bc127', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:08', '2024-08-26 18:52:08'),
(48, 'App\\Models\\User', 5, 'api-pkl', 'a172124d2e4ddabc13eb56bdef38de0cae2c5259d11a8dee51f1bb33b334760a', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:09', '2024-08-26 18:52:09'),
(49, 'App\\Models\\User', 5, 'api-pkl', 'aae949aa4368a368c8328ea0d6174435e102ed76644573ebc3e28f38e6740983', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:09', '2024-08-26 18:52:09'),
(50, 'App\\Models\\User', 5, 'api-pkl', '2b9d7191bee026fb1f5303aaccf89efd2fdf253875c522c4c8770ff774513472', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:10', '2024-08-26 18:52:10'),
(51, 'App\\Models\\User', 5, 'api-pkl', '91c5cb7845becd21936af3b75a10425eafe53af659fef3e416ad4cfa7c2b333f', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:11', '2024-08-26 18:52:11'),
(52, 'App\\Models\\User', 5, 'api-pkl', '2bbe939649bd768d6580802e6a62f57387d48b61d9a2684890af98c9d5440eab', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:11', '2024-08-26 18:52:11'),
(53, 'App\\Models\\User', 5, 'api-pkl', '6af3f480eec8467f8c01ab91a7ca5a300046ad350022e16c04d74ef99db200a9', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:12', '2024-08-26 18:52:12'),
(54, 'App\\Models\\User', 5, 'api-pkl', 'ac4b0efe9e7ef6c6d5e87fdbc78d0cfdf1ea53507050c9a67e6c6ed53ca692a4', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:12', '2024-08-26 18:52:12'),
(55, 'App\\Models\\User', 5, 'api-pkl', 'b1f756820ce7c2f4ccf69d78539dc52ce6ad423e61128e019ad075ec4e85eb56', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:13', '2024-08-26 18:52:13'),
(56, 'App\\Models\\User', 5, 'api-pkl', '6c77e462f54560197f0f6db83c491fddee0a285c98c2786d66ef91dc7f20922c', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:13', '2024-08-26 18:52:13'),
(57, 'App\\Models\\User', 5, 'api-pkl', '27a18e5dfd1c33db32d6027745cb2b12d7a58db6a023837055975523b05dfe8e', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:14', '2024-08-26 18:52:14'),
(58, 'App\\Models\\User', 5, 'api-pkl', 'ea0b0c4fcf9aed3860eab539fa166604380fcfc2a52b800bb878672f9b0981f5', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:14', '2024-08-26 18:52:14'),
(59, 'App\\Models\\User', 5, 'api-pkl', '089e0561043586fad8fd7506115826828e5de33fd50c863a62e003494b5bd297', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:15', '2024-08-26 18:52:15'),
(60, 'App\\Models\\User', 5, 'api-pkl', '927441748fba36bbf2f985b3e58ae99b5aa78a5f7d8d6c1c108ae556cb5ed839', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:15', '2024-08-26 18:52:15'),
(61, 'App\\Models\\User', 5, 'api-pkl', '16396fdbe24adeb2b94fdd331f8276b9fbd6629f8cf054c950dcc8214aa3bd74', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:15', '2024-08-26 18:52:15'),
(62, 'App\\Models\\User', 5, 'api-pkl', '88440d1ec173a654376007e48e0577a10da5378c2bbf90876ba30b89277c090c', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:16', '2024-08-26 18:52:16'),
(63, 'App\\Models\\User', 5, 'api-pkl', 'af07a1933fdedc69363a3a625721697114aa4a632ee272f2c0935fe45fa9dbc7', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:16', '2024-08-26 18:52:16'),
(64, 'App\\Models\\User', 5, 'api-pkl', 'faad2015aa6095b7500a8bd7ec18e6fc6f765c97cfa81fcbbea9ca789e41706a', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:17', '2024-08-26 18:52:17'),
(65, 'App\\Models\\User', 5, 'api-pkl', '6b1608ec93f512f44bba12db3b731d8158d490b4202d20fcdec105c1377ce723', '[\"*\"]', NULL, NULL, '2024-08-26 18:52:27', '2024-08-26 18:52:27'),
(66, 'App\\Models\\User', 5, 'api-pkl', 'd0bdeb1e517fa3fd02bbd59b3d73ede865db453b34423eaf3674b67364d381bd', '[\"*\"]', NULL, NULL, '2024-08-26 18:53:15', '2024-08-26 18:53:15'),
(67, 'App\\Models\\User', 5, 'api-pkl', 'eae1f5be116a7acf2c9c0e736bcd8629ad3414ef83186e688bd80668b2df9598', '[\"*\"]', NULL, NULL, '2024-08-26 18:53:56', '2024-08-26 18:53:56'),
(68, 'App\\Models\\User', 5, 'api-pkl', '937398db56db0e19b456a67d8ba864c93648fdbf7d1d16ff8d83002ccdd5fafc', '[\"*\"]', NULL, NULL, '2024-08-26 18:55:11', '2024-08-26 18:55:11'),
(69, 'App\\Models\\User', 5, 'api-pkl', '97f1fee2847a6855e11561257c2c06b8ccfee09d1ee0d51977dd679d07b9a1a8', '[\"*\"]', NULL, NULL, '2024-08-26 18:57:03', '2024-08-26 18:57:03'),
(70, 'App\\Models\\User', 5, 'api-pkl', '1c49dc6c80ff5f226a2509099659aaa2547ccac1c1fabfbf63f1abf614743e57', '[\"*\"]', '2024-08-26 19:19:08', NULL, '2024-08-26 18:57:04', '2024-08-26 19:19:08'),
(73, 'App\\Models\\User', 5, 'api-pkl', '7b95203e74d38852000eb20879410ad71283b04296c580bc8d2ebf6922a6d9ef', '[\"*\"]', NULL, NULL, '2024-08-26 19:20:04', '2024-08-26 19:20:04'),
(74, 'App\\Models\\User', 5, 'api-pkl', '1d1036ca6c694cd72b85328be571aeef67a14188e9d3f6b2d273c8b4afdb46e3', '[\"*\"]', NULL, NULL, '2024-08-26 19:20:41', '2024-08-26 19:20:41'),
(75, 'App\\Models\\User', 5, 'api-pkl', '17381864206a68d875c88b3b8e791268102069391bbd4ad482cd87b7e7979ec1', '[\"*\"]', NULL, NULL, '2024-08-26 19:21:33', '2024-08-26 19:21:33'),
(82, 'App\\Models\\User', 5, 'api-pkl', 'e42ab01f868981f468dfb83b81c80f69b509af9faf217c04f4580934a1db4b4c', '[\"*\"]', NULL, NULL, '2024-08-26 20:26:29', '2024-08-26 20:26:29');

-- --------------------------------------------------------

--
-- Table structure for table `pkl`
--

CREATE TABLE `pkl` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nomor_pjk` varchar(255) DEFAULT NULL,
  `kepada` varchar(255) DEFAULT NULL,
  `kode_anggaran` varchar(255) DEFAULT NULL,
  `wbs_cc` varchar(255) DEFAULT NULL,
  `refrensi` varchar(255) DEFAULT NULL,
  `no_permohonan_uang_muka` varchar(255) DEFAULT NULL,
  `jumlah_pencairan` int(50) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `no_rekening` varchar(255) DEFAULT NULL,
  `nama_dan_alamat_bank` varchar(255) DEFAULT NULL,
  `unit_organisasi` varchar(255) DEFAULT NULL,
  `awal_pelaksanaan` date DEFAULT NULL,
  `akhir_pelaksanaan` date DEFAULT NULL,
  `jumlah_pengambilan` int(50) DEFAULT NULL,
  `jumlah_pjk` int(50) DEFAULT NULL,
  `jumlah_setor` int(50) DEFAULT NULL,
  `saldo` int(50) DEFAULT NULL,
  `pejabat_yang_berwenang` varchar(255) DEFAULT NULL,
  `tempat_tanggal_tanda_tangan` date DEFAULT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `nama_ttd` varchar(255) DEFAULT NULL,
  `catatan_kadiv` varchar(255) DEFAULT NULL,
  `nama_catatan_kadiv` varchar(255) DEFAULT NULL,
  `sn` varchar(255) DEFAULT NULL,
  `nomor_tanda_terima_uang` varchar(32) DEFAULT NULL,
  `valuta` varchar(20) DEFAULT 'IDR',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pkl`
--

INSERT INTO `pkl` (`id`, `nomor_pjk`, `kepada`, `kode_anggaran`, `wbs_cc`, `refrensi`, `no_permohonan_uang_muka`, `jumlah_pencairan`, `nama`, `no_rekening`, `nama_dan_alamat_bank`, `unit_organisasi`, `awal_pelaksanaan`, `akhir_pelaksanaan`, `jumlah_pengambilan`, `jumlah_pjk`, `jumlah_setor`, `saldo`, `pejabat_yang_berwenang`, `tempat_tanggal_tanda_tangan`, `nik`, `nama_ttd`, `catatan_kadiv`, `nama_catatan_kadiv`, `sn`, `nomor_tanda_terima_uang`, `valuta`, `created_at`, `updated_at`) VALUES
(11, '2211344a', 'dimasadw', '12fwa345', 'asda', 'alifdwaa', '12345dwasdd', 2223, 'dimasdaw', '13010106322508k,o', '1234daw', '3321', '2024-08-14', '2024-08-16', 10, 123132, 12321, 312312, 'Ujang', '2024-08-09', NULL, NULL, NULL, NULL, NULL, NULL, 'USD', '2024-08-21 23:08:58', '2024-08-26 00:30:41'),
(12, '22113', 'dimasadwswsws', '12fwa345', NULL, 'alifdwa', '12345dwasd', 2223, 'dimasdaw', '13010106322508k,o', '1234daw', '3321', '2024-08-14', '2024-08-16', 2232, 123132, 12321, 312312, 'Ujang', '2024-06-09', NULL, NULL, NULL, NULL, NULL, NULL, 'IDR', '2024-08-21 23:09:07', '2024-08-26 19:54:12'),
(14, '22113555111333', 'dimasadw', '12fwa345', NULL, 'alifdwa', '12345dwasd', 2223, 'dimasdaw', '13010106322508k,o', '1234daw', '3321', '2024-08-14', '2024-08-16', 2232, 123132, 12321, 312312, 'Ujang', '2024-08-09', NULL, NULL, NULL, NULL, NULL, NULL, 'IDR', '2024-08-21 23:09:37', '2024-08-21 23:09:37'),
(16, '22113', 'dimasadw111111', '12fwa345', NULL, 'alifdwa', '12345dwasd', 2223, 'dimasdaw', '13010106322508k,o', '1234daw', '3321', '2024-08-14', '2024-08-16', 2232, 123132, 12321, 312312, 'Ujang', '2024-08-09', NULL, NULL, NULL, NULL, NULL, NULL, 'IDR', '2024-08-21 23:08:58', '2024-08-21 23:08:58'),
(17, 'PR-0000-NP-2405', 'KADIV AKUTANSI', 'E21', NULL, 'PC0000-FP-2311-00011', 'PU-2311-00007', NULL, 'DIAH PARAMITA', '130101006322508', 'BANK RAKYAT INDONESIA', 'PF', '2023-11-10', '2023-11-10', 35800000, 29373803, 672400000, NULL, 'ROBIE TAWAKAL', '2024-05-06', NULL, NULL, NULL, NULL, 'sdd', NULL, 'IDR', '2024-08-25 23:33:06', '2024-08-26 00:14:47');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('awLHt8HZ9DSDnrZPqUxdNGPgDell7pGQ8qVvgfb6', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidXhkcnE3VUs2ekE3V0xxY0xNSUlUNGM0czY1QmROOHF6UjA2aUxCeiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1724728544),
('bYGbaqgdONzicRB7MawD8XjwphRmSdMSKR3V2FVB', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT2FXSGZGWVlwNDd6MFVBS2E5VDRGend4VWZWTjBhZU1nYWoyRXJuVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1724501730),
('HKAW8qBwi8GFMrkqSTM5TQeQUa1X5buL1iWQblH5', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZmVjejVjOUJRVkg0MzZUUVVDQ1hyU3F2djhrVUJGcWlORlBGVkViQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1724501718);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `nik` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `nik`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(5, 'alif', '123', NULL, '$2y$12$ZPr6zgjT2dRDnxs7cwqVM.R6PXPgJbpyqQlrZJR8cpctZ9Xh6fuqy', NULL, '2024-08-24 07:33:03', '2024-08-24 07:33:03'),
(6, 'marsel', '1234', NULL, '$2y$12$xOX44N2xAOAZgCyWDxPW6eIZp8uHmlXEYSM5bfmtvMi.SD5bYrmV.', NULL, '2024-08-24 07:35:12', '2024-08-24 07:35:12'),
(7, 'dimas', '111222', NULL, '$2y$12$8ofRhNT9LHRw4ZZyI6bQT.8GBuf2m6SZHbvwQwDoiV4DK.V7WLwi6', NULL, '2024-08-25 01:27:52', '2024-08-25 01:27:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `pkl`
--
ALTER TABLE `pkl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`nik`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `pkl`
--
ALTER TABLE `pkl`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
