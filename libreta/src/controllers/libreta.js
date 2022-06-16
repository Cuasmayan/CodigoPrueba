const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database');



router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM libreta', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});


router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM libreta WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM libreta WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Contacto Deleted'});
    } else {
      console.log(err);
    }
  });
});


router.post('/', (req, res) => {
  const {id, nombre, apellido, correo, telefono, celular, direccion, cargo} = req.body;
  console.log(id, nombre, apellido, correo, telefono, celular, direccion, cargo);
  const query = `
    SET @id = ?;
    SET @nombre = ?;
    SET @apellido = ?;
    SET @correo = ?;
    SET @telefono = ?;
    SET @celular = ?;
    SET @direccion = ?;
    SET @cargo = ?;
    CALL ContactoAddOrEdit(@id, @nombre, @apellido, @correo, @telefono, @celular, @direccion, @cargo);
  `;
  mysqlConnection.query(query, [id, nombre, apellido, correo, telefono, celular, direccion, cargo], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Contacto Saved'});
    } else {
      console.log(err);
    }
  });

});

router.put('/:id', (req, res) => {
  const { nombre, apellido, correo, telefono, celular, direccion, cargo } = req.body;
  const { id } = req.params;
  const query = `
  SET @id = ?;
  SET @nombre = ?;
  SET @apellido = ?;
  SET @correo = ?;
  SET @telefono = ?;
  SET @celular = ?;
  SET @direccion = ?;
  SET @cargo = ?;
  CALL ContactoAddOrEdit(@id, @nombre, @apellido, @correo, @telefono, @celular, @direccion, @cargo);
  `;
  mysqlConnection.query(query, [id, nombre, apellido, correo, telefono, celular, direccion, cargo], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Contacto Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;