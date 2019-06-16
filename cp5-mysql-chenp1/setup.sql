CREATE DATABASE IF NOT EXISTS shipDB;

USE shipDB;

CREATE TABLE ship(
   id INT NOT NULL AUTO_INCREMENT,
   shipName VARCHAR(255),
   nation VARCHAR(255),
   tier INT,
   type VARCHAR(255),
   PRIMARY KEY(id)
);

INSERT INTO ship(shipName, nation, tier, type)
VALUES ("Shimakaze", "IJN", 10, "destroyer"),
("Akizuki", "IJN", 8, "destroyer"),
("Fletcher", "USN", 9, "destroyer"),
("Benson", "USN", 8, "destroyer"),
("Zao", "IJN", 10, "cruiser"),
("Des Moines", "USN", 10, "cruiser"),
("Baltimore", "USN", 8, "cruiser"),
("Minotaur", "UK", 10, "cruiser"),
("Irian", "Pan-Asia", 8, "cruiser"),
("Prinz Eugen", "Germany", 8, "cruiser"),
("Lazo", "USSR", 7, "cruiser"),
("Belfast", "UK", 7, "cruiser"),
("Midway", "USN", 10, "aircaft_carrier"),
("Hakuryu", "IJN", 10, "aircaft_carrier"),
("Kaga", "IJN", 8, "aircaft_carrier"),
("Yamato", "IJN", 10, "battleship"),
("Hood", "UK", 7, "battleship"),
("Bismarck", "Germany", 8, "battleship"),
("Tirpitz", "Germany", 8, "battleship"),
("Missouri", "USN", 9, "battleship"),
("Montana", "USN", 10, "battleship");
