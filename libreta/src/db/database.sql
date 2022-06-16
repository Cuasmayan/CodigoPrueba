CREATE DATABASE IF NOT EXISTS contacto;

USE contacto;

CREATE TABLE libreta (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) DEFAULT NULL,
  apellido VARCHAR(45) DEFAULT NULL,
  correo VARCHAR(45) DEFAULT NULL,
  telefono VARCHAR(20) DEFAULT NULL,
  celular VARCHAR(20) DEFAULT NULL,
  direccion VARCHAR(45) DEFAULT NULL,
  cargo VARCHAR(45) DEFAULT NULL
  PRIMARY KEY(id)
);

DESCRIBE libreta;

INSERT INTO libreta values 
  (1, 'Sebastian', 'Sebastian', 'sebastian@gmail.com', '4454644', '33456644', 'cra 44 #32-55', 'Odontologo' ),
  (2, 'Camila', 'Feria', 'camila@gmail.com', '4454574', '33246373', 'calle 3 #21-35', 'Profesora' ),
  (3, 'Sara', 'Mendez', 'sara@gmail.com', '44264224', '33164455', 'cra 33 #11-37', 'Contadora' );

SELECT * FROM libreta;