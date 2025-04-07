CREATE DATABASE `shelter-donations` DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_hungarian_ci`;

GRANT USAGE ON *.* TO `shelter`@`%` IDENTIFIED BY PASSWORD '*D64370698BF5E1084A5A78B598DC2011E6BC6B1C';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES, EXECUTE, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, EVENT, TRIGGER ON `shelter-donations`.* TO `shelter`@`%`;