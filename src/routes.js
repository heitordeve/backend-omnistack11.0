const express = require('express');

const routes = express.routes();


routes.post('/users', (req, res) => {
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Heitor Carlos'
    });
});

module.exports = routes;