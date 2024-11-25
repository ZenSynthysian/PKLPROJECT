-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2024 at 05:59 AM
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
-- Database: `dbdocpjk`
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
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `country` varchar(100) DEFAULT NULL,
  `currency` varchar(100) DEFAULT NULL,
  `code` varchar(4) DEFAULT NULL,
  `minor_unit` smallint(6) DEFAULT NULL,
  `symbol` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`country`, `currency`, `code`, `minor_unit`, `symbol`) VALUES
('Afghanistan', 'Afghani', 'AFN', 2, '؋'),
('Åland Islands', 'Euro', 'EUR', 2, '€'),
('Albania', 'Lek', 'ALL', 2, 'Lek'),
('Algeria', 'Algerian Dinar', 'DZD', 2, NULL),
('American Samoa', 'US Dollar', 'USD', 2, '$'),
('Andorra', 'Euro', 'EUR', 2, '€'),
('Angola', 'Kwanza', 'AOA', 2, NULL),
('Anguilla', 'East Caribbean Dollar', 'XCD', 2, NULL),
('Antigua And Barbuda', 'East Caribbean Dollar', 'XCD', 2, NULL),
('Argentina', 'Argentine Peso', 'ARS', 2, '$'),
('Armenia', 'Armenian Dram', 'AMD', 2, NULL),
('Aruba', 'Aruban Florin', 'AWG', 2, NULL),
('Australia', 'Australian Dollar', 'AUD', 2, '$'),
('Austria', 'Euro', 'EUR', 2, '€'),
('Azerbaijan', 'Azerbaijan Manat', 'AZN', 2, NULL),
('Bahamas', 'Bahamian Dollar', 'BSD', 2, '$'),
('Bahrain', 'Bahraini Dinar', 'BHD', 3, NULL),
('Bangladesh', 'Taka', 'BDT', 2, '৳'),
('Barbados', 'Barbados Dollar', 'BBD', 2, '$'),
('Belarus', 'Belarusian Ruble', 'BYN', 2, NULL),
('Belgium', 'Euro', 'EUR', 2, '€'),
('Belize', 'Belize Dollar', 'BZD', 2, 'BZ$'),
('Benin', 'CFA Franc BCEAO', 'XOF', 0, NULL),
('Bermuda', 'Bermudian Dollar', 'BMD', 2, NULL),
('Bhutan', 'Indian Rupee', 'INR', 2, '₹'),
('Bhutan', 'Ngultrum', 'BTN', 2, NULL),
('Bolivia', 'Boliviano', 'BOB', 2, NULL),
('Bolivia', 'Mvdol', 'BOV', 2, NULL),
('Bonaire, Sint Eustatius And Saba', 'US Dollar', 'USD', 2, '$'),
('Bosnia And Herzegovina', 'Convertible Mark', 'BAM', 2, NULL),
('Botswana', 'Pula', 'BWP', 2, NULL),
('Bouvet Island', 'Norwegian Krone', 'NOK', 2, NULL),
('Brazil', 'Brazilian Real', 'BRL', 2, 'R$'),
('British Indian Ocean Territory', 'US Dollar', 'USD', 2, '$'),
('Brunei Darussalam', 'Brunei Dollar', 'BND', 2, NULL),
('Bulgaria', 'Bulgarian Lev', 'BGN', 2, 'лв'),
('Burkina Faso', 'CFA Franc BCEAO', 'XOF', 0, NULL),
('Burundi', 'Burundi Franc', 'BIF', 0, NULL),
('Cabo Verde', 'Cabo Verde Escudo', 'CVE', 2, NULL),
('Cambodia', 'Riel', 'KHR', 2, '៛'),
('Cameroon', 'CFA Franc BEAC', 'XAF', 0, NULL),
('Canada', 'Canadian Dollar', 'CAD', 2, '$'),
('Cayman Islands', 'Cayman Islands Dollar', 'KYD', 2, NULL),
('Central African Republic', 'CFA Franc BEAC', 'XAF', 0, NULL),
('Chad', 'CFA Franc BEAC', 'XAF', 0, NULL),
('Chile', 'Chilean Peso', 'CLP', 0, '$'),
('Chile', 'Unidad de Fomento', 'CLF', 4, NULL),
('China', 'Yuan Renminbi', 'CNY', 2, '¥'),
('Christmas Island', 'Australian Dollar', 'AUD', 2, NULL),
('Cocos (keeling) Islands', 'Australian Dollar', 'AUD', 2, NULL),
('Colombia', 'Colombian Peso', 'COP', 2, '$'),
('Colombia', 'Unidad de Valor Real', 'COU', 2, NULL),
('Comoros', 'Comorian Franc ', 'KMF', 0, NULL),
('Congo (the Democratic Republic Of The)', 'Congolese Franc', 'CDF', 2, NULL),
('Congo', 'CFA Franc BEAC', 'XAF', 0, NULL),
('Cook Islands', 'New Zealand Dollar', 'NZD', 2, '$'),
('Costa Rica', 'Costa Rican Colon', 'CRC', 2, NULL),
('Côte D\'ivoire', 'CFA Franc BCEAO', 'XOF', 0, NULL),
('Croatia', 'Kuna', 'HRK', 2, 'kn'),
('Cuba', 'Cuban Peso', 'CUP', 2, NULL),
('Cuba', 'Peso Convertible', 'CUC', 2, NULL),
('Curaçao', 'Netherlands Antillean Guilder', 'ANG', 2, NULL),
('Cyprus', 'Euro', 'EUR', 2, '€'),
('Czechia', 'Czech Koruna', 'CZK', 2, 'Kč'),
('Denmark', 'Danish Krone', 'DKK', 2, 'kr'),
('Djibouti', 'Djibouti Franc', 'DJF', 0, NULL),
('Dominica', 'East Caribbean Dollar', 'XCD', 2, NULL),
('Dominican Republic', 'Dominican Peso', 'DOP', 2, NULL),
('Ecuador', 'US Dollar', 'USD', 2, '$'),
('Egypt', 'Egyptian Pound', 'EGP', 2, NULL),
('El Salvador', 'El Salvador Colon', 'SVC', 2, NULL),
('El Salvador', 'US Dollar', 'USD', 2, '$'),
('Equatorial Guinea', 'CFA Franc BEAC', 'XAF', 0, NULL),
('Eritrea', 'Nakfa', 'ERN', 2, NULL),
('Estonia', 'Euro', 'EUR', 2, '€'),
('Eswatini', 'Lilangeni', 'SZL', 2, NULL),
('Ethiopia', 'Ethiopian Birr', 'ETB', 2, NULL),
('European Union', 'Euro', 'EUR', 2, '€'),
('Falkland Islands [Malvinas]', 'Falkland Islands Pound', 'FKP', 2, NULL),
('Faroe Islands', 'Danish Krone', 'DKK', 2, NULL),
('Fiji', 'Fiji Dollar', 'FJD', 2, NULL),
('Finland', 'Euro', 'EUR', 2, '€'),
('France', 'Euro', 'EUR', 2, '€'),
('French Guiana', 'Euro', 'EUR', 2, '€'),
('French Polynesia', 'CFP Franc', 'XPF', 0, NULL),
('French Southern Territories', 'Euro', 'EUR', 2, '€'),
('Gabon', 'CFA Franc BEAC', 'XAF', 0, NULL),
('Gambia', 'Dalasi', 'GMD', 2, NULL),
('Georgia', 'Lari', 'GEL', 2, '₾'),
('Germany', 'Euro', 'EUR', 2, '€'),
('Ghana', 'Ghana Cedi', 'GHS', 2, NULL),
('Gibraltar', 'Gibraltar Pound', 'GIP', 2, NULL),
('Greece', 'Euro', 'EUR', 2, '€'),
('Greenland', 'Danish Krone', 'DKK', 2, NULL),
('Grenada', 'East Caribbean Dollar', 'XCD', 2, NULL),
('Guadeloupe', 'Euro', 'EUR', 2, '€'),
('Guam', 'US Dollar', 'USD', 2, '$'),
('Guatemala', 'Quetzal', 'GTQ', 2, NULL),
('Guernsey', 'Pound Sterling', 'GBP', 2, '£'),
('Guinea', 'Guinean Franc', 'GNF', 0, NULL),
('Guinea-bissau', 'CFA Franc BCEAO', 'XOF', 0, NULL),
('Guyana', 'Guyana Dollar', 'GYD', 2, NULL),
('Haiti', 'Gourde', 'HTG', 2, NULL),
('Haiti', 'US Dollar', 'USD', 2, '$'),
('Heard Island And Mcdonald Islands', 'Australian Dollar', 'AUD', 2, NULL),
('Holy See (Vatican)', 'Euro', 'EUR', 2, '€'),
('Honduras', 'Lempira', 'HNL', 2, NULL),
('Hong Kong', 'Hong Kong Dollar', 'HKD', 2, '$'),
('Hungary', 'Forint', 'HUF', 2, 'ft'),
('Iceland', 'Iceland Krona', 'ISK', 0, NULL),
('India', 'Indian Rupee', 'INR', 2, '₹'),
('Indonesia', 'Rupiah', 'IDR', 2, 'Rp'),
('International Monetary Fund (IMF)', 'SDR (Special Drawing Right)', 'XDR', 0, NULL),
('Iran', 'Iranian Rial', 'IRR', 2, NULL),
('Iraq', 'Iraqi Dinar', 'IQD', 3, NULL),
('Ireland', 'Euro', 'EUR', 2, '€'),
('Isle Of Man', 'Pound Sterling', 'GBP', 2, '£'),
('Israel', 'New Israeli Sheqel', 'ILS', 2, '₪'),
('Italy', 'Euro', 'EUR', 2, '€'),
('Jamaica', 'Jamaican Dollar', 'JMD', 2, NULL),
('Japan', 'Yen', 'JPY', 0, '¥'),
('Jersey', 'Pound Sterling', 'GBP', 2, '£'),
('Jordan', 'Jordanian Dinar', 'JOD', 3, NULL),
('Kazakhstan', 'Tenge', 'KZT', 2, NULL),
('Kenya', 'Kenyan Shilling', 'KES', 2, 'Ksh'),
('Kiribati', 'Australian Dollar', 'AUD', 2, NULL),
('Korea (the Democratic People’s Republic Of)', 'North Korean Won', 'KPW', 2, NULL),
('Korea (the Republic Of)', 'Won', 'KRW', 0, '₩'),
('Kuwait', 'Kuwaiti Dinar', 'KWD', 3, NULL),
('Kyrgyzstan', 'Som', 'KGS', 2, NULL),
('Lao People’s Democratic Republic', 'Lao Kip', 'LAK', 2, NULL),
('Latvia', 'Euro', 'EUR', 2, '€'),
('Lebanon', 'Lebanese Pound', 'LBP', 2, NULL),
('Lesotho', 'Loti', 'LSL', 2, NULL),
('Lesotho', 'Rand', 'ZAR', 2, NULL),
('Liberia', 'Liberian Dollar', 'LRD', 2, NULL),
('Libya', 'Libyan Dinar', 'LYD', 3, NULL),
('Liechtenstein', 'Swiss Franc', 'CHF', 2, NULL),
('Lithuania', 'Euro', 'EUR', 2, '€'),
('Luxembourg', 'Euro', 'EUR', 2, '€'),
('Macao', 'Pataca', 'MOP', 2, NULL),
('North Macedonia', 'Denar', 'MKD', 2, NULL),
('Madagascar', 'Malagasy Ariary', 'MGA', 2, NULL),
('Malawi', 'Malawi Kwacha', 'MWK', 2, NULL),
('Malaysia', 'Malaysian Ringgit', 'MYR', 2, 'RM'),
('Maldives', 'Rufiyaa', 'MVR', 2, NULL),
('Mali', 'CFA Franc BCEAO', 'XOF', 0, NULL),
('Malta', 'Euro', 'EUR', 2, '€'),
('Marshall Islands', 'US Dollar', 'USD', 2, '$'),
('Martinique', 'Euro', 'EUR', 2, '€'),
('Mauritania', 'Ouguiya', 'MRU', 2, NULL),
('Mauritius', 'Mauritius Rupee', 'MUR', 2, NULL),
('Mayotte', 'Euro', 'EUR', 2, '€'),
('Member Countries Of The African Development Bank Group', 'ADB Unit of Account', 'XUA', 0, NULL),
('Mexico', 'Mexican Peso', 'MXN', 2, '$'),
('Mexico', 'Mexican Unidad de Inversion (UDI)', 'MXV', 2, NULL),
('Micronesia', 'US Dollar', 'USD', 2, '$'),
('Moldova', 'Moldovan Leu', 'MDL', 2, NULL),
('Monaco', 'Euro', 'EUR', 2, '€'),
('Mongolia', 'Tugrik', 'MNT', 2, NULL),
('Montenegro', 'Euro', 'EUR', 2, '€'),
('Montserrat', 'East Caribbean Dollar', 'XCD', 2, NULL),
('Morocco', 'Moroccan Dirham', 'MAD', 2, ' .د.م '),
('Mozambique', 'Mozambique Metical', 'MZN', 2, NULL),
('Myanmar', 'Kyat', 'MMK', 2, NULL),
('Namibia', 'Namibia Dollar', 'NAD', 2, NULL),
('Namibia', 'Rand', 'ZAR', 2, NULL),
('Nauru', 'Australian Dollar', 'AUD', 2, NULL),
('Nepal', 'Nepalese Rupee', 'NPR', 2, NULL),
('Netherlands', 'Euro', 'EUR', 2, '€'),
('New Caledonia', 'CFP Franc', 'XPF', 0, NULL),
('New Zealand', 'New Zealand Dollar', 'NZD', 2, '$'),
('Nicaragua', 'Cordoba Oro', 'NIO', 2, NULL),
('Niger', 'CFA Franc BCEAO', 'XOF', 0, NULL),
('Nigeria', 'Naira', 'NGN', 2, '₦'),
('Niue', 'New Zealand Dollar', 'NZD', 2, '$'),
('Norfolk Island', 'Australian Dollar', 'AUD', 2, NULL),
('Northern Mariana Islands', 'US Dollar', 'USD', 2, '$'),
('Norway', 'Norwegian Krone', 'NOK', 2, 'kr'),
('Oman', 'Rial Omani', 'OMR', 3, NULL),
('Pakistan', 'Pakistan Rupee', 'PKR', 2, 'Rs'),
('Palau', 'US Dollar', 'USD', 2, '$'),
('Panama', 'Balboa', 'PAB', 2, NULL),
('Panama', 'US Dollar', 'USD', 2, '$'),
('Papua New Guinea', 'Kina', 'PGK', 2, NULL),
('Paraguay', 'Guarani', 'PYG', 0, NULL),
('Peru', 'Sol', 'PEN', 2, 'S'),
('Philippines', 'Philippine Peso', 'PHP', 2, '₱'),
('Pitcairn', 'New Zealand Dollar', 'NZD', 2, '$'),
('Poland', 'Zloty', 'PLN', 2, 'zł'),
('Portugal', 'Euro', 'EUR', 2, '€'),
('Puerto Rico', 'US Dollar', 'USD', 2, '$'),
('Qatar', 'Qatari Rial', 'QAR', 2, NULL),
('Réunion', 'Euro', 'EUR', 2, '€'),
('Romania', 'Romanian Leu', 'RON', 2, 'lei'),
('Russian Federation', 'Russian Ruble', 'RUB', 2, '₽'),
('Rwanda', 'Rwanda Franc', 'RWF', 0, NULL),
('Saint Barthélemy', 'Euro', 'EUR', 2, '€'),
('Saint Helena, Ascension And Tristan Da Cunha', 'Saint Helena Pound', 'SHP', 2, NULL),
('Saint Kitts And Nevis', 'East Caribbean Dollar', 'XCD', 2, NULL),
('Saint Lucia', 'East Caribbean Dollar', 'XCD', 2, NULL),
('Saint Martin (French Part)', 'Euro', 'EUR', 2, '€'),
('Saint Pierre And Miquelon', 'Euro', 'EUR', 2, '€'),
('Saint Vincent And The Grenadines', 'East Caribbean Dollar', 'XCD', 2, NULL),
('Samoa', 'Tala', 'WST', 2, NULL),
('San Marino', 'Euro', 'EUR', 2, '€'),
('Sao Tome And Principe', 'Dobra', 'STN', 2, NULL),
('Saudi Arabia', 'Saudi Riyal', 'SAR', 2, NULL),
('Senegal', 'CFA Franc BCEAO', 'XOF', 0, NULL),
('Serbia', 'Serbian Dinar', 'RSD', 2, NULL),
('Seychelles', 'Seychelles Rupee', 'SCR', 2, NULL),
('Sierra Leone', 'Leone', 'SLL', 2, NULL),
('Singapore', 'Singapore Dollar', 'SGD', 2, '$'),
('Sint Maarten (Dutch Part)', 'Netherlands Antillean Guilder', 'ANG', 2, NULL),
('Sistema Unitario De Compensacion Regional De Pagos \"sucre\"\"\"', 'Sucre', 'XSU', 0, NULL),
('Slovakia', 'Euro', 'EUR', 2, '€'),
('Slovenia', 'Euro', 'EUR', 2, '€'),
('Solomon Islands', 'Solomon Islands Dollar', 'SBD', 2, NULL),
('Somalia', 'Somali Shilling', 'SOS', 2, NULL),
('South Africa', 'Rand', 'ZAR', 2, 'R'),
('South Sudan', 'South Sudanese Pound', 'SSP', 2, NULL),
('Spain', 'Euro', 'EUR', 2, '€'),
('Sri Lanka', 'Sri Lanka Rupee', 'LKR', 2, 'Rs'),
('Sudan (the)', 'Sudanese Pound', 'SDG', 2, NULL),
('Suriname', 'Surinam Dollar', 'SRD', 2, NULL),
('Svalbard And Jan Mayen', 'Norwegian Krone', 'NOK', 2, NULL),
('Sweden', 'Swedish Krona', 'SEK', 2, 'kr'),
('Switzerland', 'Swiss Franc', 'CHF', 2, NULL),
('Switzerland', 'WIR Euro', 'CHE', 2, NULL),
('Switzerland', 'WIR Franc', 'CHW', 2, NULL),
('Syrian Arab Republic', 'Syrian Pound', 'SYP', 2, NULL),
('Taiwan', 'New Taiwan Dollar', 'TWD', 2, NULL),
('Tajikistan', 'Somoni', 'TJS', 2, NULL),
('Tanzania, United Republic Of', 'Tanzanian Shilling', 'TZS', 2, NULL),
('Thailand', 'Baht', 'THB', 2, '฿'),
('Timor-leste', 'US Dollar', 'USD', 2, '$'),
('Togo', 'CFA Franc BCEAO', 'XOF', 0, NULL),
('Tokelau', 'New Zealand Dollar', 'NZD', 2, '$'),
('Tonga', 'Pa’anga', 'TOP', 2, NULL),
('Trinidad And Tobago', 'Trinidad and Tobago Dollar', 'TTD', 2, NULL),
('Tunisia', 'Tunisian Dinar', 'TND', 3, NULL),
('Turkey', 'Turkish Lira', 'TRY', 2, '₺'),
('Turkmenistan', 'Turkmenistan New Manat', 'TMT', 2, NULL),
('Turks And Caicos Islands', 'US Dollar', 'USD', 2, '$'),
('Tuvalu', 'Australian Dollar', 'AUD', 2, NULL),
('Uganda', 'Uganda Shilling', 'UGX', 0, NULL),
('Ukraine', 'Hryvnia', 'UAH', 2, '₴'),
('United Arab Emirates', 'UAE Dirham', 'AED', 2, 'د.إ'),
('United Kingdom Of Great Britain And Northern Ireland', 'Pound Sterling', 'GBP', 2, '£'),
('United States Minor Outlying Islands', 'US Dollar', 'USD', 2, '$'),
('United States Of America', 'US Dollar', 'USD', 2, '$'),
('United States Of America', 'US Dollar (Next day)', 'USN', 2, NULL),
('Uruguay', 'Peso Uruguayo', 'UYU', 2, NULL),
('Uruguay', 'Uruguay Peso en Unidades Indexadas (UI)', 'UYI', 0, NULL),
('Uruguay', 'Unidad Previsional', 'UYW', 4, NULL),
('Uzbekistan', 'Uzbekistan Sum', 'UZS', 2, NULL),
('Vanuatu', 'Vatu', 'VUV', 0, NULL),
('Venezuela', 'Bolívar Soberano', 'VES', 2, NULL),
('Vietnam', 'Dong', 'VND', 0, '₫'),
('Virgin Islands (British)', 'US Dollar', 'USD', 2, '$'),
('Virgin Islands (U.S.)', 'US Dollar', 'USD', 2, '$'),
('Wallis And Futuna', 'CFP Franc', 'XPF', 0, NULL),
('Western Sahara', 'Moroccan Dirham', 'MAD', 2, NULL),
('Yemen', 'Yemeni Rial', 'YER', 2, NULL),
('Zambia', 'Zambian Kwacha', 'ZMW', 2, NULL),
('Zimbabwe', 'Zimbabwe Dollar', 'ZWL', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `data_pribadi`
--

CREATE TABLE `data_pribadi` (
  `id` int(225) NOT NULL,
  `nama` varchar(225) NOT NULL,
  `no_rek` varchar(225) NOT NULL,
  `nama_alamat_bank` varchar(225) NOT NULL,
  `unit_organisasi` varchar(225) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_pribadi`
--

INSERT INTO `data_pribadi` (`id`, `nama`, `no_rek`, `nama_alamat_bank`, `unit_organisasi`, `created_at`, `updated_at`) VALUES
(3, 'marseli', '1234', 'pahlawan', 'pm', '2024-08-26 21:47:48', '2024-08-26 21:47:48');

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
-- Table structure for table `folder`
--

CREATE TABLE `folder` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `folder`
--

INSERT INTO `folder` (`id`, `title`, `created_at`, `updated_at`) VALUES
(5, '1111', '2024-09-11 23:36:53', '2024-09-12 20:31:27'),
(16, '1234', '2024-09-12 20:13:45', '2024-09-12 20:13:45');

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
-- Table structure for table `kadiv`
--

CREATE TABLE `kadiv` (
  `id` int(11) NOT NULL,
  `divisi` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kadiv`
--

INSERT INTO `kadiv` (`id`, `divisi`, `nama`, `nik`, `created_at`, `updated_at`) VALUES
(2, 'kaya', 'alif', '123', '2024-08-27 20:12:14', '2024-08-27 20:12:14'),
(3, 'gfff', 'raujl', '321', '2024-08-27 20:15:37', '2024-08-27 20:30:17'),
(4, 'pf', 'marsel sonjaya', '012345', '2024-08-27 20:29:09', '2024-08-27 20:29:09'),
(5, 'KADIV AKUTANSI', 'MOCHAMAD ARIEF', NULL, '2024-09-10 00:30:57', '2024-09-10 00:30:57'),
(6, NULL, 'ROBIE TAWAKAL', '100023', '2024-09-10 00:30:57', '2024-09-10 00:30:57');

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
(82, 'App\\Models\\User', 5, 'api-pkl', 'e42ab01f868981f468dfb83b81c80f69b509af9faf217c04f4580934a1db4b4c', '[\"*\"]', NULL, NULL, '2024-08-26 20:26:29', '2024-08-26 20:26:29'),
(83, 'App\\Models\\User', 5, 'api-pkl', 'ae7267bc0f758f48e241f281343f502811769b93ca1f7c9512fbfffa5a761bf3', '[\"*\"]', '2024-09-10 00:52:37', NULL, '2024-09-10 00:08:07', '2024-09-10 00:52:37'),
(84, 'App\\Models\\User', 5, 'api-pkl', '03892dd223712010cfa97e0c6740549c211cdede8f32cd9fe4984c9e716ccb9e', '[\"*\"]', '2024-09-10 03:32:04', NULL, '2024-09-10 03:14:26', '2024-09-10 03:32:04'),
(85, 'App\\Models\\User', 5, 'api-pkl', '79492c9e1d319e94513a5b50b62cc6af6522bc4cb643dd595289154911efa8ed', '[\"*\"]', '2024-09-10 04:53:12', NULL, '2024-09-10 03:29:27', '2024-09-10 04:53:12'),
(86, 'App\\Models\\User', 5, 'api-pkl', 'b5ce3899ddbd096f545e4336c370b32bded1bbe0ec31a553ea5fbaff0c463a16', '[\"*\"]', NULL, NULL, '2024-09-10 19:15:55', '2024-09-10 19:15:55'),
(87, 'App\\Models\\User', 5, 'api-pkl', 'ae2d1a3f08de77970403b5ac20554a160752e586d94ce56124b2431438e41d9f', '[\"*\"]', '2024-09-10 20:40:23', NULL, '2024-09-10 19:39:06', '2024-09-10 20:40:23'),
(88, 'App\\Models\\User', 5, 'api-pkl', '2991e4704b4fd6462dd6c69f10b7a7e56a39a570a185c243e08c58b53a3764d5', '[\"*\"]', '2024-09-12 00:05:01', NULL, '2024-09-11 20:25:27', '2024-09-12 00:05:01'),
(89, 'App\\Models\\User', 5, 'api-pkl', 'bbb06a013ebc9e237b8856dad0ff978f351b7659e772cf72a3fdab26b501d1ce', '[\"*\"]', '2024-09-12 20:57:59', NULL, '2024-09-12 20:11:28', '2024-09-12 20:57:59');

-- --------------------------------------------------------

--
-- Table structure for table `pjk`
--

CREATE TABLE `pjk` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `folder` varchar(255) DEFAULT NULL,
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
  `tempat_tanggal_tanda_tangan` varchar(225) DEFAULT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `nama_ttd` varchar(255) DEFAULT NULL,
  `catatan_kadiv` varchar(255) DEFAULT NULL,
  `nama_catatan_kadiv` varchar(255) DEFAULT NULL,
  `sn` varchar(255) DEFAULT NULL,
  `nomor_tanda_terima_uang` varchar(255) DEFAULT NULL,
  `tempat` varchar(255) DEFAULT NULL,
  `valuta` varchar(255) DEFAULT 'IDR',
  `valuta2` varchar(255) DEFAULT 'IDR',
  `valuta3` varchar(255) DEFAULT 'IDR',
  `valuta4` varchar(255) DEFAULT 'IDR',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pjk`
--

INSERT INTO `pjk` (`id`, `folder`, `nomor_pjk`, `kepada`, `kode_anggaran`, `wbs_cc`, `refrensi`, `no_permohonan_uang_muka`, `jumlah_pencairan`, `nama`, `no_rekening`, `nama_dan_alamat_bank`, `unit_organisasi`, `awal_pelaksanaan`, `akhir_pelaksanaan`, `jumlah_pengambilan`, `jumlah_pjk`, `jumlah_setor`, `saldo`, `pejabat_yang_berwenang`, `tempat_tanggal_tanda_tangan`, `nik`, `nama_ttd`, `catatan_kadiv`, `nama_catatan_kadiv`, `sn`, `nomor_tanda_terima_uang`, `tempat`, `valuta`, `valuta2`, `valuta3`, `valuta4`, `created_at`, `updated_at`) VALUES
(101, NULL, 'Raden Kambali Saragih', 'Kani Handayani S.Sos', 'Luis Martana Setiawan', 'Calista Astuti S.E.I', 'Ajeng Astuti', 'Upik Hendri Nashiruddin M.TI.', 66, 'Daliman Haryanto', 'Cawisadi Capa Anggriawan', 'Lutfan Upik Sihombing S.I.Kom', 'Gilang Thamrin', '2003-02-11', '1993-03-01', 61, 44, 34, 93, 'Lanjar Januar', 'Karimah Rahmi Kusmawati S.H.', 'Yessi Novitasari', 'Anita Calista Nasyiah', 'Puti Lestari', NULL, 'Silvia Wahyuni S.Gz', 'Balapati Siregar S.Gz', 'Elma Yolanda', 'Patricia Paulin Suartini', 'Tami Wirda Laksita M.Farm', 'Talia Raisa Hasanah', 'Arsipatra Hutapea', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(102, NULL, 'Caturangga Maheswara', 'Ibrahim Saptono', 'Ophelia Suartini', 'Chelsea Mayasari', 'Putri Suryatmi M.M.', 'Elisa Yolanda', 36, 'Legawa Prasetyo S.Farm', 'Jayeng Dabukke S.I.Kom', 'Ana Andriani', 'Yessi Ciaobella Usada S.Pt', '1986-06-19', '2000-10-07', 20, 74, 1, 64, 'Ophelia Ciaobella Wahyuni', 'Lili Nasyidah', 'Eka Edi Hutapea S.T.', 'Kambali Sitorus', 'Kiandra Suartini', NULL, 'Raihan Ikhsan Napitupulu', 'Ratih Prastuti S.Pt', 'Maya Lailasari', 'Adikara Gunarto', 'Emong Laswi Irawan S.T.', 'Wakiman Prasetya S.H.', 'Cakrawangsa Samosir', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(103, NULL, 'Prayitna Saefullah', 'Kenes Pangestu', 'Bakianto Sitompul', 'Jaka Ajiono Ramadan S.E.I', 'Manah Halim', 'Hendri Bahuwarna Wahyudin', 99, 'Lasmanto Jumadi Dongoran S.Kom', 'Wira Jagaraga Prakasa', 'Taufik Waluyo Kusumo M.Kom.', 'Jamal Waskita', '2013-06-01', '1974-10-23', 18, 26, 23, 38, 'Cahyo Irawan S.E.I', 'Wani Kusmawati M.Pd', 'Darman Maheswara', 'Salsabila Mulyani', 'Hasta Winarno', NULL, 'Maya Puspita', 'Maria Namaga', 'Widya Karimah Suartini', 'Natalia Betania Mardhiyah', 'Zaenab Zulaika', 'Mulyanto Sihombing', 'Jasmin Melani', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(104, NULL, 'Cahyo Manullang', 'Hasan Suryono', 'Puti Nasyidah', 'Wardi Yahya Widodo S.Ked', 'Elvina Sudiati', 'Putri Rahayu', 84, 'Bahuwarna Tirtayasa Putra S.Sos', 'Umi Bella Yolanda', 'Rahmi Usada', 'Maida Farida', '2000-06-05', '1973-07-28', 97, 67, 45, 32, 'Dono Marpaung M.Kom.', 'Mahmud Suwarno', 'Reza Harjasa Sihombing S.IP', 'Jindra Ardianto', 'Prayogo Wijaya', NULL, 'Dadi Mandala', 'Nadine Nasyidah S.Psi', 'Devi Hassanah', 'Laras Astuti', 'Jasmin Zalindra Lailasari', 'Empluk Marpaung', 'Lili Purnawati S.IP', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(105, NULL, 'Kamidin Lurhur Rajasa', 'Diana Ika Utami', 'Rafid Emong Pangestu M.Ak', 'Belinda Pudjiastuti', 'Eman Luwar Rajata', 'Alika Yuni Yuliarti M.TI.', 70, 'Warsita Waskita M.Ak', 'Yessi Diana Nasyiah S.I.Kom', 'Mala Melani', 'Eva Purwanti', '1972-06-26', '1972-11-09', 73, 8, 95, 83, 'Saka Lazuardi', 'Mariadi Mahendra S.Kom', 'Pardi Pradana', 'Fitriani Pratiwi', 'Hari Pangestu M.Pd', NULL, 'Umaya Yoga Thamrin S.Gz', 'Gatra Narji Budiyanto S.Ked', 'Legawa Baktianto Uwais M.TI.', 'Zaenab Titin Hastuti S.H.', 'Cemplunk Maheswara S.Ked', 'Siti Handayani', 'Jaga Mangunsong', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(106, NULL, 'Jati Parman Nainggolan S.H.', 'Irwan Argono Sinaga', 'Genta Puspita', 'Laras Kuswandari', 'Ilyas Nugraha Rajasa M.Ak', 'Unjani Faizah Puspasari', 9, 'Rahmi Fitria Namaga', 'Luhung Mansur S.Pd', 'Vanya Purwanti', 'Lega Damanik', '2001-12-20', '2023-10-14', 67, 56, 52, 16, 'Raden Jarwi Mansur', 'Jasmin Uchita Padmasari', 'Titi Laksita', 'Gaiman Dongoran', 'Titin Maryati', NULL, 'Bakti Daliono Hidayanto M.M.', 'Eva Yulianti', 'Mulyanto Rajasa', 'Bakiono Respati Waskita', 'Zizi Laksmiwati', 'Edi Budiyanto', 'Almira Mayasari M.Farm', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(107, NULL, 'Puji Laras Riyanti S.Pt', 'Dadi Saputra', 'Almira Bella Sudiati', 'Purwa Marpaung', 'Nyoman Lazuardi', 'Sarah Yuliarti', 74, 'Lintang Lestari', 'Bella Sudiati', 'Nadia Rika Fujiati', 'Sakura Yuliarti', '2013-07-03', '2011-12-22', 51, 24, 32, 6, 'Tari Samiah Permata', 'Yunita Dian Uyainah S.T.', 'Anggabaya Manullang', 'Bancar Gunawan S.Farm', 'Bakidin Wijaya', NULL, 'Muhammad Asirwada Irawan', 'Margana Mandala', 'Puji Mayasari', 'Dadap Jamal Maheswara S.Pt', 'Sabrina Rahimah', 'Jumari Sihombing S.Psi', 'Betania Namaga S.E.', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(108, NULL, 'Ridwan Damanik', 'Raden Tomi Sinaga', 'Ami Aryani S.Ked', 'Kani Yulianti S.Ked', 'Cakrabirawa Wacana', 'Pranawa Ade Maheswara S.I.Kom', 49, 'Rahmi Aisyah Nasyidah', 'Karna Najib Iswahyudi', 'Gambira Lazuardi S.E.I', 'Kasiran Tamba', '2010-11-20', '1993-01-22', 17, 40, 19, 21, 'Argono Hidayat S.E.', 'Ophelia Riyanti', 'Lega Pradipta', 'Mulya Kuswoyo', 'Carub Uwais', NULL, 'Olga Edward Wahyudin', 'Vanya Eli Pratiwi', 'Qori Rahmawati S.Psi', 'Lili Purwanti', 'Warji Mandala', 'Lintang Rahmi Namaga M.Pd', 'Kasim Galak Prabowo S.IP', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(109, NULL, 'Ridwan Eja Narpati M.TI.', 'Upik Pranowo S.T.', 'Silvia Maryati', 'Indah Handayani', 'Fitria Gawati Lestari', 'Karta Dabukke', 6, 'Septi Sudiati M.Pd', 'Zaenab Febi Yulianti S.H.', 'Bagiya Hutasoit', 'Kuncara Zulkarnain', '1971-01-29', '1986-10-07', 95, 96, 32, 87, 'Rachel Usamah S.E.I', 'Syahrini Pertiwi', 'Wardaya Damanik', 'Danu Danuja Saptono', 'Kala Lazuardi S.Ked', NULL, 'Ophelia Suryatmi', 'Banawa Marbun', 'Raina Puspita', 'Juli Lailasari', 'Rina Lala Suryatmi', 'Kadir Pradipta', 'Maria Purwanti S.Psi', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(110, NULL, 'Jelita Winarsih', 'Karja Nababan', 'Adika Pangestu Maheswara M.Kom.', 'Wirda Aryani', 'Aurora Utami S.Psi', 'Aisyah Mayasari', 100, 'Harsaya Purwanto Kusumo', 'Emas Unggul Pradipta S.IP', 'Vino Dongoran', 'Harsana Sihombing', '2013-01-24', '2007-06-19', 50, 39, 52, 3, 'Elma Ghaliyati Lailasari', 'Clara Zelda Kuswandari S.E.', 'Mariadi Prayoga', 'Anita Rahimah', 'Wakiman Prakasa', NULL, 'Harsana Malik Firgantoro S.Psi', 'Amalia Yulia Mandasari S.E.', 'Tirta Mursinin Anggriawan S.IP', 'Padma Novi Zulaika', 'Anggabaya Pradipta', 'Hendri Aslijan Tampubolon', 'Darmaji Sihotang', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(111, NULL, 'Rosman Hakim', 'Suci Oktaviani', 'Natalia Yuliarti', 'Oni Farida S.H.', 'Cager Banawa Hakim', 'Cici Lestari', 71, 'Ella Maryati', 'Tedi Mansur', 'Rahmi Susanti', 'Lutfan Mansur S.E.I', '2006-08-16', '1970-01-03', 10, 81, 41, 21, 'Kezia Winarsih', 'Ridwan Artanto Santoso S.Pd', 'Asmianto Balamantri Saefullah S.Psi', 'Vega Prayoga', 'Hani Wijayanti S.Farm', NULL, 'Rika Wahyuni', 'Ami Prastuti', 'Ghaliyati Pudjiastuti S.I.Kom', 'Gilda Rahayu', 'Cinta Melani', 'Damu Permadi M.Farm', 'Banara Uwais', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(112, NULL, 'Umaya Mustofa Prasetyo M.M.', 'Rangga Waskita', 'Irnanto Hakim', 'Damu Sihombing', 'Vanesa Yuliarti S.Gz', 'Ilsa Gabriella Handayani S.H.', 70, 'Lili Kusmawati', 'Jaeman Oskar Dongoran', 'Ade Wibisono', 'Ibrani Lazuardi', '2020-02-10', '2002-12-13', 24, 80, 98, 41, 'Rahmi Siska Laksmiwati M.Farm', 'Mutia Haryanti', 'Amelia Yulianti', 'Gangsar Wacana', 'Karimah Puspasari', NULL, 'Wira Rajata', 'Harimurti Pangestu', 'Puput Pratiwi S.Pt', 'Mila Usamah', 'Ghaliyati Ophelia Mayasari S.Pt', 'Saiful Dongoran', 'Eman Tarihoran', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(113, NULL, 'Novi Maryati', 'Indra Uwais', 'Yuni Mila Hassanah S.Sos', 'Edward Rajasa', 'Surya Setiawan', 'Opan Januar', 57, 'Kartika Yulianti', 'Maryanto Marpaung', 'Jelita Wijayanti', 'Septi Laksita', '2008-06-29', '1983-01-21', 52, 4, 26, 34, 'Lasmanto Wibowo', 'Widya Vanya Wahyuni M.Ak', 'Dina Ajeng Mulyani S.Sos', 'Michelle Tina Novitasari S.Ked', 'Maria Padmasari', NULL, 'Mustika Daniswara Budiyanto', 'Saka Kemba Nababan M.Kom.', 'Rika Maryati S.Farm', 'Dian Hassanah', 'Vicky Wahyuni', 'Tasnim Tampubolon', 'Elisa Sabrina Usamah S.T.', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(114, NULL, 'Upik Gunawan', 'Keisha Riyanti', 'Siti Lalita Yuliarti', 'Padmi Yuniar', 'Prakosa Putra', 'Citra Padma Laksita S.H.', 18, 'Sarah Wastuti S.T.', 'Gatra Maulana', 'Malik Kusumo', 'Dadi Pradana', '1982-12-22', '2016-04-15', 43, 99, 9, 84, 'Agnes Rahmawati S.T.', 'Rahmi Mulyani', 'Taufan Salahudin', 'Mahdi Damanik M.Kom.', 'Zelda Uchita Hastuti', NULL, 'Rina Oktaviani', 'Ophelia Putri Kusmawati', 'Ciaobella Agustina', 'Titin Puspasari M.M.', 'Mujur Rajasa', 'Agus Napitupulu', 'Maimunah Nadia Laksmiwati M.TI.', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(115, NULL, 'Marsudi Natsir', 'Gilda Elma Yulianti M.Kom.', 'Mala Ophelia Hariyah', 'Cahyono Anggriawan', 'Limar Prakasa', 'Sadina Uchita Nurdiyanti', 42, 'Farhunnisa Utami', 'Gamanto Digdaya Tamba', 'Ami Usamah', 'Catur Jarwa Firgantoro', '1983-03-31', '1977-04-19', 63, 84, 25, 9, 'Karman Utama', 'Amalia Kiandra Hassanah', 'Mulyono Simanjuntak M.Ak', 'Laswi Prasetya Setiawan S.H.', 'Dinda Fitriani Agustina S.Ked', NULL, 'Zahra Andriani S.Gz', 'Niyaga Gunawan', 'Lala Mulyani S.Kom', 'Najwa Pratiwi', 'Titin Malika Lailasari M.Kom.', 'Nova Farida', 'Kairav Gunawan S.Sos', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(116, NULL, 'Zulfa Fujiati', 'Keisha Agustina M.TI.', 'Vivi Andriani', 'Zahra Putri Pudjiastuti S.Pd', 'Sakura Hassanah S.E.', 'Abyasa Rajata', 64, 'Patricia Suartini', 'Yessi Puspita', 'Jamal Langgeng Saefullah S.E.I', 'Empluk Kurniawan', '2004-10-04', '2006-07-09', 81, 31, 33, 78, 'Karya Saptono', 'Lalita Uyainah M.Ak', 'Jamil Wacana M.Farm', 'Tira Endah Mayasari', 'Taufan Ganjaran Nugroho M.M.', NULL, 'Lanjar Opung Permadi S.E.I', 'Nurul Safitri', 'Gading Jefri Santoso S.Ked', 'Jelita Suartini', 'Lala Lailasari', 'Hasna Susanti', 'Mulyono Aditya Putra M.Kom.', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(117, NULL, 'Febi Ulva Uyainah', 'Farah Hastuti M.Farm', 'Candra Saadat Jailani', 'Maria Rahmawati', 'Violet Gasti Namaga', 'Pia Tari Safitri S.Psi', 61, 'Kenzie Permadi', 'Yani Pertiwi', 'Elma Pratiwi', 'Kania Sudiati M.Kom.', '2001-05-16', '1973-10-29', 30, 34, 83, 70, 'Cagak Setiawan', 'Samiah Nasyiah', 'Yani Puspita S.Kom', 'Nadia Suryatmi S.T.', 'Kamila Ida Nuraini', NULL, 'Agus Santoso M.Pd', 'Diah Nuraini', 'Jamalia Haryanti', 'Nyoman Balapati Gunawan', 'Cahyadi Nasim Simanjuntak', 'Maria Hastuti', 'Gaiman Kuswoyo', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(118, NULL, 'Raisa Wastuti M.M.', 'Vicky Nadia Suryatmi', 'Melinda Andriani', 'Najam Budiyanto', 'Hairyanto Reza Hutasoit', 'Maya Melani S.I.Kom', 65, 'Tami Halimah', 'Jabal Situmorang', 'Hartana Kurniawan', 'Kezia Wahyuni', '1978-02-14', '2008-07-01', 78, 28, 31, 51, 'Arta Sihombing S.I.Kom', 'Nasrullah Endra Putra S.Sos', 'Siti Laksmiwati S.Psi', 'Prasetyo Januar', 'Kenari Habibi S.Kom', NULL, 'Tiara Nadine Kusmawati', 'Emin Hidayat S.Gz', 'Najam Irawan', 'Halima Riyanti S.Psi', 'Sabrina Shania Yulianti M.M.', 'Balamantri Gatot Pratama', 'Icha Ratih Pertiwi', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(119, NULL, 'Respati Putra S.Kom', 'Rahmi Yuliarti S.T.', 'Yunita Sarah Purwanti M.M.', 'Aurora Alika Rahimah S.E.I', 'Budi Raharja Halim', 'Raharja Natsir', 92, 'Banawi Widodo', 'Gandewa Pradipta', 'Narji Mulya Mansur M.Pd', 'Putri Lala Uyainah', '2020-08-27', '1999-05-13', 51, 5, 88, 81, 'Balidin Sihotang S.E.I', 'Zelaya Ira Astuti M.TI.', 'Galar Gadang Hutapea S.Psi', 'Cawisono Ega Wacana', 'Violet Suartini', NULL, 'Abyasa Samosir', 'Oni Puspita', 'Dagel Kusuma Simanjuntak', 'Citra Nasyidah', 'Artanto Thamrin', 'Farah Andriani', 'Ayu Usamah', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(120, NULL, 'Oliva Winarsih S.Gz', 'Candra Rudi Damanik', 'Tasnim Pranowo', 'Emil Wibisono M.M.', 'Karen Susanti', 'Kani Ifa Rahayu S.E.I', 66, 'Dasa Luthfi Budiman S.Kom', 'Cengkir Kawaya Narpati', 'Fitriani Mardhiyah', 'Iriana Laksmiwati', '2004-12-11', '1987-06-08', 48, 49, 38, 19, 'Najam Marbun', 'Widya Siska Aryani M.Kom.', 'Jane Rahayu M.M.', 'Maya Kusmawati M.Kom.', 'Najwa Fathonah Usada', NULL, 'Rahmi Aisyah Usamah', 'Cayadi Kusumo', 'Koko Raditya Mangunsong S.IP', 'Michelle Mayasari S.Pd', 'Yusuf Marpaung S.Sos', 'Puji Amelia Nurdiyanti', 'Lala Dalima Andriani', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(121, NULL, 'Oni Yuliana Prastuti S.I.Kom', 'Edi Halim S.Pd', 'Gandi Jaga Sitompul', 'Lulut Hendri Sihombing', 'Harto Wibisono', 'Gabriella Nasyiah', 81, 'Febi Paramita Padmasari', 'Umi Natalia Hariyah', 'Kamaria Rahayu', 'Candrakanta Iswahyudi', '2007-11-16', '2007-09-21', 87, 24, 37, 61, 'Ida Ratna Namaga', 'Tantri Amalia Lestari S.Gz', 'Qori Mandasari', 'Kani Suartini S.T.', 'Darijan Megantara', NULL, 'Ika Rahmawati', 'Enteng Kusumo', 'Carub Pangestu', 'Mahfud Sirait', 'Rudi Siregar', 'Sabar Prasetyo S.T.', 'Laras Hartati', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(122, NULL, 'Vicky Uyainah', 'Siska Yulianti', 'Lasmanto Ikin Wibowo S.Ked', 'Rina Yulianti', 'Karen Rahayu', 'Jail Wijaya S.Pd', 53, 'Makara Saputra M.TI.', 'Uchita Zizi Padmasari', 'Agnes Novitasari S.E.I', 'Widya Wahyuni', '2006-05-13', '1974-10-29', 66, 4, 77, 56, 'Raden Jailani', 'Rafi Salahudin S.H.', 'Ani Astuti S.Psi', 'Lidya Pratiwi S.Pt', 'Tiara Halimah', NULL, 'Drajat Lazuardi', 'Cakrawala Prasasta', 'Mumpuni Olga Kuswoyo S.Kom', 'Cecep Mandala', 'Rahmat Maryadi S.Kom', 'Nrima Nababan S.Gz', 'Belinda Restu Pertiwi', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(123, NULL, 'Zulaikha Lili Laksita', 'Ciaobella Yuliarti S.Gz', 'Citra Kezia Uyainah M.M.', 'Mahfud Uwais', 'Banawa Dadi Waskita S.Pt', 'Fitria Nasyiah', 52, 'Abyasa Ramadan', 'Shakila Riyanti', 'Ayu Mulyani', 'Vanesa Pudjiastuti S.H.', '1980-08-02', '2006-07-02', 91, 25, 67, 22, 'Daru Cahyo Uwais', 'Syahrini Yolanda', 'Ivan Simbolon', 'Violet Mandasari', 'Abyasa Widodo', NULL, 'Darsirah Mumpuni Sitompul S.Pd', 'Latif Prayoga', 'Jumadi Hutagalung', 'Raina Astuti', 'Calista Fujiati M.Kom.', 'Latika Wastuti S.Psi', 'Farhunnisa Maryati S.Farm', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(124, NULL, 'Cawisadi Nalar Pratama S.Gz', 'Elma Padmasari M.Kom.', 'Jarwi Liman Gunawan S.Farm', 'Eli Rachel Lailasari', 'Indah Tina Hartati', 'Vanya Hartati', 11, 'Harsaya Firmansyah', 'Agnes Suartini', 'Taufik Sinaga', 'Titi Rahimah', '2000-04-30', '1977-03-13', 97, 77, 12, 47, 'Tiara Laksmiwati', 'Qori Nasyidah', 'Suci Ina Nuraini S.Pt', 'Purwadi Setiawan', 'Ganjaran Pranowo S.H.', NULL, 'Diana Usamah', 'Malika Haryanti', 'Kiandra Maryati', 'Baktiadi Ajimin Lazuardi', 'Taswir Rajasa', 'Harsana Atma Wasita M.Ak', 'Rina Purnawati', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(125, '2024', 'Novi Ana Kusmawati M.Kom.', 'Kuncara Satya Suwarno M.Pd', 'Wage Paiman Sihombing', 'Fitriani Prastuti', 'Uda Purwa Pangestu M.TI.', 'Ajeng Almira Yulianti', 59, 'Caket Nashiruddin', 'Catur Salahudin', 'Ira Amelia Hassanah', 'Jefri Bakiadi Prabowo', '1983-10-24', '2021-10-25', 58, 86, 2, 20, 'Ihsan Najmudin', 'Oliva Lili Anggraini', 'Elvin Nababan S.Sos', 'Titi Clara Hasanah', 'Johan Nugroho', NULL, 'Tania Pertiwi', 'Karsa Mansur S.H.', 'Gina Pertiwi', 'Nasab Budiman', 'Jumadi Mansur S.IP', 'Bahuwarna Kasim Haryanto M.Pd', 'Jayeng Jumadi Hutagalung', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(126, NULL, 'Betania Andriani', 'Hamzah Saiful Santoso', 'Endra Pangestu Marbun', 'Ganda Waskita M.TI.', 'Cawuk Simanjuntak', 'Empluk Suryono M.Farm', 46, 'Pranata Tampubolon', 'Harsanto Firmansyah', 'Uchita Patricia Nasyiah S.Pt', 'Kamidin Harimurti Firgantoro S.E.', '2016-06-15', '2013-02-06', 59, 68, 88, 72, 'Timbul Martani Lazuardi M.Farm', 'Kenari Simbolon', 'Salman Latupono', 'Calista Maryati', 'Devi Yolanda', NULL, 'Prakosa Pranata Habibi S.Pt', 'Farah Aryani', 'Galur Haryanto S.Farm', 'Wage Winarno S.Pt', 'Edi Damanik M.Pd', 'Imam Hakim S.Pd', 'Vino Pradana', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(127, NULL, 'Faizah Safitri', 'Queen Nuraini', 'Daryani Nrima Hidayanto', 'Enteng Uwais', 'Bahuwirya Haryanto', 'Vanesa Hartati', 100, 'Mila Mulyani', 'Gawati Lalita Nasyidah S.Pd', 'Dewi Wijayanti', 'Iriana Tiara Astuti', '2021-11-08', '1986-01-24', 9, 36, 36, 62, 'Baktiadi Gunawan', 'Sabrina Fujiati', 'Sari Hesti Laksita M.Ak', 'Kamaria Prastuti', 'Jarwadi Haryanto', NULL, 'Cagak Prakasa', 'Zulaikha Pudjiastuti', 'Zelda Zulaika S.Farm', 'Carub Manullang', 'Bakianto Saputra', 'Ophelia Zulfa Aryani S.Sos', 'Wawan Manullang M.Pd', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(128, NULL, 'Candrakanta Sitorus', 'Tami Oliva Rahayu M.M.', 'Bakiadi Bakda Budiman M.Pd', 'Gatra Balamantri Budiyanto S.H.', 'Tari Hastuti', 'Dalimin Narji Setiawan', 16, 'Ade Puspasari', 'Agnes Prastuti S.Ked', 'Ihsan Darijan Wasita S.E.', 'Hendra Pranata Sitompul M.Kom.', '1993-06-16', '1990-04-14', 45, 86, 90, 53, 'Erik Luwes Wasita M.Kom.', 'Shakila Purwanti', 'Amelia Mardhiyah', 'Janet Rahmawati', 'Kartika Nurdiyanti', NULL, 'Oliva Yulianti', 'Clara Winarsih', 'Hartaka Manullang S.Farm', 'Tari Novi Nurdiyanti S.Pd', 'Uda Maheswara', 'Nrima Pratama S.H.', 'Salwa Hastuti M.Ak', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(129, NULL, 'Nadine Puspasari', 'Asmadi Januar', 'Ani Yolanda M.Ak', 'Titi Rahimah', 'Gandi Prasetya', 'Malik Karna Kuswoyo', 12, 'Gandewa Hidayanto', 'Salimah Laksmiwati', 'Raihan Uwais M.Farm', 'Irma Ani Wijayanti', '2001-02-21', '2001-12-21', 21, 86, 96, 37, 'Fitriani Laksita', 'Bahuwirya Nugroho M.Pd', 'Raina Hassanah', 'Elvin Danu Suwarno', 'Amelia Sudiati', NULL, 'Kambali Aditya Suwarno S.E.', 'Karsana Jagapati Tarihoran M.TI.', 'Paiman Kusumo', 'Aisyah Lailasari', 'Reksa Sihombing', 'Michelle Palastri', 'Yani Puti Mayasari S.I.Kom', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(130, NULL, 'Galur Sinaga', 'Slamet Xanana Sihombing S.Ked', 'Cornelia Hartati', 'Lalita Rahimah', 'Rahayu Icha Uyainah S.IP', 'Jagaraga Siregar', 89, 'Wardaya Putu Gunawan', 'Darimin Gaduh Waskita S.Farm', 'Prayogo Jagaraga Marbun', 'Gangsa Mahendra', '1992-11-26', '2003-11-25', 41, 23, 49, 90, 'Tasnim Santoso', 'Kanda Hidayanto', 'Yuliana Eka Puspita S.Psi', 'Kamila Sarah Puspita', 'Vicky Prastuti', NULL, 'Gasti Zamira Padmasari M.Kom.', 'Fathonah Rahmi Fujiati M.TI.', 'Sari Kuswandari', 'Prima Haryanto', 'Wardi Kuswoyo S.Psi', 'Joko Hidayat', 'Dinda Pudjiastuti S.E.', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(131, NULL, 'Vicky Anggraini', 'Kunthara Jayadi Waskita', 'Martana Lazuardi', 'Ganep Laswi Suryono S.Psi', 'Juli Wahyuni S.Pd', 'Among Baktianto Wibisono', 52, 'Amelia Astuti S.Kom', 'Taufan Manah Pradipta S.T.', 'Lantar Tasnim Rajasa', 'Satya Kurniawan', '1980-03-28', '2010-10-24', 84, 55, 63, 17, 'Yuni Sarah Rahimah', 'Rachel Yolanda', 'Usman Januar', 'Putri Wahyuni', 'Dadap Pranowo', NULL, 'Salwa Olivia Winarsih', 'Cahyo Dongoran S.Kom', 'Taswir Haryanto S.E.', 'Halima Hartati S.E.', 'Heryanto Narpati', 'Yance Fujiati M.Farm', 'Farah Pudjiastuti M.M.', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(132, NULL, 'Farah Wahyuni M.M.', 'Suci Purwanti', 'Niyaga Budiman', 'Abyasa Radit Samosir', 'Kamal Samosir S.Pt', 'Padmi Yance Suryatmi S.Pt', 72, 'Zelaya Rahmi Handayani S.E.', 'Yuni Siska Usamah S.Psi', 'Warsita Prayitna Hardiansyah', 'Hafshah Lailasari', '1980-12-08', '2016-04-30', 18, 22, 10, 39, 'Diah Melani S.I.Kom', 'Belinda Kuswandari', 'Nadine Usamah', 'Rahmi Lailasari M.Ak', 'Marwata Maheswara', NULL, 'Emin Hakim S.E.', 'Among Prasetyo Sirait', 'Yono Nababan', 'Indah Widiastuti', 'Rama Kuswoyo', 'Sarah Nasyidah S.H.', 'Puput Yuliarti', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(133, NULL, 'Natalia Irma Nurdiyanti S.E.', 'Joko Lazuardi M.Farm', 'Karimah Aryani S.IP', 'Ciaobella Hartati', 'Rusman Kuncara Firmansyah', 'Ina Nasyidah', 84, 'Rahman Mandala M.Ak', 'Mariadi Utama S.H.', 'Salman Dirja Marpaung S.Ked', 'Jefri Karsa Wibisono M.Kom.', '1980-10-28', '2001-04-30', 89, 56, 67, 43, 'Qori Haryanti', 'Jatmiko Uwais', 'Karya Mahfud Gunawan', 'Asmuni Firmansyah', 'Darimin Jailani', NULL, 'Gangsa Firmansyah', 'Vera Hastuti S.T.', 'Laras Laksmiwati', 'Cakrabirawa Atmaja Wibisono S.Farm', 'Tania Ulya Mardhiyah', 'Manah Prabowo', 'Mahmud Mujur Maulana', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(134, NULL, 'Gandi Rafi Dabukke S.E.', 'Ridwan Waluyo', 'Jamalia Astuti', 'Najwa Yuniar M.TI.', 'Perkasa Budiman', 'Darman Pangestu Wahyudin M.Ak', 24, 'Karimah Karimah Novitasari S.Ked', 'Keisha Halimah', 'Lidya Mandasari', 'Vinsen Nashiruddin', '1998-07-11', '1987-11-10', 37, 86, 70, 25, 'Lili Usamah', 'Icha Hartati', 'Laila Pratiwi', 'Maida Uyainah', 'Keisha Tiara Haryanti S.Psi', NULL, 'Gabriella Prastuti', 'Cahyadi Hutapea', 'Prakosa Saptono', 'Cemani Marpaung', 'Tira Mayasari S.IP', 'Alika Mayasari', 'Zalindra Haryanti S.Sos', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(135, NULL, 'Kenari Sihombing S.Pd', 'Sadina Rahmi Palastri S.Kom', 'Yusuf Kurniawan', 'Tantri Victoria Lestari S.Ked', 'Martani Widodo', 'Carla Melani', 87, 'Cemeti Suryono', 'Gandi Hardiansyah', 'Nasim Napitupulu', 'Elisa Rahmawati M.Kom.', '1970-10-08', '2008-03-16', 78, 4, 59, 16, 'Dacin Kurnia Nugroho S.I.Kom', 'Gaman Catur Wijaya S.Psi', 'Latika Permata', 'Mumpuni Latupono S.Gz', 'Kamila Puspasari', NULL, 'Zalindra Rahayu', 'Mustika Wacana', 'Bakti Budiman', 'Prabu Wibisono', 'Taufan Pratama', 'Sadina Suryatmi', 'Rahmi Permata', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(136, NULL, 'Karna Rajasa S.Sos', 'Julia Usamah', 'Lulut Rajata', 'Rika Zulaika', 'Vivi Eli Hartati', 'Ani Handayani', 61, 'Maras Hutasoit', 'Fitria Prastuti', 'Vino Emas Megantara', 'Calista Hasanah', '1991-04-21', '2010-11-11', 54, 34, 90, 37, 'Martani Rajata', 'Anom Mansur', 'Kamal Saefullah', 'Artawan Najmudin S.Kom', 'Hesti Faizah Andriani S.Psi', NULL, 'Samsul Naradi Sihombing', 'Bahuwirya Maryadi S.T.', 'Hilda Hassanah S.Pt', 'Omar Maheswara', 'Tina Sudiati', 'Jumadi Sitompul', 'Hadi Setya Rajata', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(137, NULL, 'Vicky Aryani', 'Xanana Gilang Halim', 'Gina Mulyani M.TI.', 'Cakrabuana Tampubolon S.Kom', 'Farah Winarsih S.Pd', 'Faizah Aryani S.Kom', 52, 'Kamila Rahimah', 'Manah Satya Mahendra M.Pd', 'Rina Hartati', 'Hendri Sabri Megantara', '1974-06-02', '2004-04-12', 55, 96, 97, 40, 'Sidiq Megantara', 'Ajeng Vicky Mulyani S.Pd', 'Agnes Gasti Kusmawati', 'Eka Purnawati', 'Sari Rahimah', NULL, 'Indah Palastri', 'Digdaya Mulya Mansur', 'Amalia Rahmawati', 'Bakiadi Hasim Sihombing M.Ak', 'Maya Mila Sudiati S.E.I', 'Dinda Aryani', 'Omar Nainggolan', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(138, NULL, 'Uchita Kamaria Pratiwi S.I.Kom', 'Darmaji Banawi Jailani S.Sos', 'Ilsa Puspasari', 'Najib Adiarja Maulana M.TI.', 'Harjasa Nugroho', 'Usyi Rahimah', 39, 'Marsito Simbolon S.Pd', 'Citra Safitri', 'Lidya Nuraini', 'Maria Zalindra Palastri', '1972-07-05', '1995-06-17', 44, 81, 82, 34, 'Cakrawala Sitorus', 'Kusuma Rajata', 'Cawisadi Januar S.Psi', 'Dimaz Suryono', 'Jumadi Karya Hutasoit', NULL, 'Ira Puspasari S.E.', 'Kamila Ana Pertiwi M.Ak', 'Cornelia Wulandari', 'Muhammad Anggriawan', 'Vanya Gilda Laksita', 'Gara Daru Marpaung', 'Wahyu Mangunsong', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(139, NULL, 'Paramita Chelsea Halimah', 'Kasiran Situmorang', 'Asmuni Sihotang', 'Ika Padmasari', 'Cayadi Gadang Nainggolan M.TI.', 'Mursinin Hakim', 91, 'Fitriani Ratna Lestari M.TI.', 'Malika Hassanah S.Kom', 'Karya Irawan', 'Prabowo Wahyudin M.Kom.', '1980-08-18', '1975-01-23', 9, 19, 91, 88, 'Lantar Hidayat', 'Pranawa Hidayanto', 'Silvia Tira Hastuti', 'Cahyo Ramadan S.T.', 'Febi Anggraini', NULL, 'Amelia Prastuti', 'Eli Purnawati', 'Dariati Megantara', 'Hasim Atmaja Wacana', 'Nalar Paiman Megantara S.I.Kom', 'Zulaikha Uchita Zulaika S.IP', 'Janet Umi Yuliarti', '2024-09-11 20:24:50', '2024-09-11 20:24:50'),
(140, NULL, 'Banawa Teguh Pradipta', 'Gilda Hamima Handayani S.T.', 'Jumari Garda Suryono', 'Budi Asirwanda Prakasa M.Kom.', 'Rahayu Aurora Suartini S.Pd', 'Intan Tira Pudjiastuti', 52, 'Ega Setiawan', 'Pranata Halim', 'Juli Permata', 'Atmaja Hutapea M.Ak', '1998-11-21', '1978-04-21', 100, 8, 30, 47, 'Gamanto Salahudin', 'Danang Maheswara', 'Hasta Maulana', 'Yulia Ella Laksita', 'Jamalia Mardhiyah', NULL, 'Darmana Mansur', 'Drajat Wacana', 'Warsita Bagiya Mahendra', 'Warsita Parman Napitupulu', 'Bagya Pradipta', 'Paulin Syahrini Nurdiyanti', 'Jane Diah Uyainah', '2024-09-11 20:24:50', '2024-09-11 20:24:50');

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
  `role` enum('admin','user') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `nik`, `email_verified_at`, `password`, `remember_token`, `role`, `created_at`, `updated_at`) VALUES
(5, 'alif', '123', NULL, '$2y$12$ZPr6zgjT2dRDnxs7cwqVM.R6PXPgJbpyqQlrZJR8cpctZ9Xh6fuqy', NULL, 'admin', '2024-08-24 07:33:03', '2024-08-24 07:33:03'),
(6, 'marsel', '1234', NULL, '$2y$12$xOX44N2xAOAZgCyWDxPW6eIZp8uHmlXEYSM5bfmtvMi.SD5bYrmV.', NULL, 'user', '2024-08-24 07:35:12', '2024-08-24 07:35:12'),
(8, 'contoh1', '3212', NULL, '$2y$12$CniQcF.Wh03xo/byOu4P6.rU3k4Ws0V3X3bu9Pt3WbPSeDvTQJBVO', NULL, 'admin', '2024-08-26 22:55:38', '2024-08-26 22:55:38'),
(9, 'contoh121212', '32121212', NULL, '$2y$12$VtydQtDIbsGwD1IULpAbXOKiAUuA1H6uJZNNVB4g.3I1ay3IC5.4u', NULL, 'admin', '2024-08-27 00:12:03', '2024-08-27 00:12:03');

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
-- Indexes for table `data_pribadi`
--
ALTER TABLE `data_pribadi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `folder`
--
ALTER TABLE `folder`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `kadiv`
--
ALTER TABLE `kadiv`
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
-- Indexes for table `pjk`
--
ALTER TABLE `pjk`
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
-- AUTO_INCREMENT for table `data_pribadi`
--
ALTER TABLE `data_pribadi`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `folder`
--
ALTER TABLE `folder`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kadiv`
--
ALTER TABLE `kadiv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `pjk`
--
ALTER TABLE `pjk`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
