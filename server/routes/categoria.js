const express = require('express');
const _ = require('underscore');
const Categoria = require('../models/categoria');
const app = express();

app.post('/categoria', (req, res) => {
    let body = req.body;

    let categoria = new Categoria ({
        nombre: body.nombre,
        usuario: body.usuario
    });

    categoria.save((err, catDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
            return res.status(200).json({
                ok: true,
                catDB
        });
    });
});

app.put('/categoria/:id', (req, res) =>{
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre','usuario']);

    Categoria.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query'}, (err, catDB) =>{
        if(err) { 
            return res.status(400).json({
                ok: false,
                err
            });
        }
            return res.status(200).json({
                ok: true,
                catDB
        });        
    });
});

app.get('/categoria', (req, res) => {
    Categoria.find()
    .exec((err, categoria) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            });     
        }
            return res.status(200).json({
                ok: true,
                count: categoria.length,
                categoria
                
        });
    });
});

app.delete('/categoria/:id', (req, res) => {
    let id = req.params.id

    Categoria.findByIdAndUpdate(id, { disponible: false }, { new: true, runValidators: true, context: 'query'}, (err, resp) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

            return res.status(200).json({
                ok: true,
                resp
        });
    });
});

module.exports = app;