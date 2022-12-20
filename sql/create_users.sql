CREATE TABLE IF NOT EXISTS heroku_bf7cb810553a372.`users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `email` varchar(80) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `country` varchar(35) NOT NULL,
  `birthdate` date NOT NULL,
  `verified_email` boolean NOT NULL,
  `approved_citizenship` boolean NOT NULL,
  `rank` varchar(25) NOT NULL,
  `wallet_address` varchar(42),
  `profile_image` varchar(255),
  `twitter_user` varchar(50),
  `discord_user` varchar(50),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;