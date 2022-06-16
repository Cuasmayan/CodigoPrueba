USE contacto;

DELIMITER $$
USE `contacto`$$

CREATE PROCEDURE `ContactoAddOrEdit` (
  IN _id INT,
  IN _nombre VARCHAR(45),
  IN _apellido VARCHAR(45),
  IN _correo VARCHAR(45),
  IN _telefono VARCHAR(20),
  IN _celular VARCHAR(20),
  IN _direccion VARCHAR(45),
  IN _cargo VARCHAR(45)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO libreta (nombre, apellido, correo, telefono, celular, direccion, cargo)
    VALUES (_nombre, _apellido, _correo, _telefono, _celular, _direccion, _cargo);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE libreta
    SET
    nombre = _nombre,
    apellido = _apellido,
    correo = _correo,
    telefono = _telefono,
    celular = _celular,
    direccion = _direccion,
    cargo = _cargo
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
