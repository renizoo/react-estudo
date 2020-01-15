const express = require('express');

const app = express();

//get(pegar algo), post(criar algo), put(editar algo), delete(deletar algo)

app.get('/', (request, response) => {
    return response.json({message: 'Hello Omnistac'});
});

app.listen(3333);