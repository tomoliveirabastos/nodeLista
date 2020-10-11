const express = require('express');
const ItemService = require('./../Service/ItemService');

const ItemController = express.Router();
const itemService = new ItemService();

ItemController.post('/item/:lista', async(req, res) =>{
    const { lista: lista } = req.params;
    const body = req.body;
    await itemService.registrar_item(lista, body);
    return res.json({
        msg: 'Deu certo'
    });
});

ItemController.get('/items/:lista', async(req, res) =>{
    let items = await itemService.items(req.params.lista);
    return res.json(items);
});

ItemController.delete('/item/:id', async(req, res)=>{
    await itemService.delete(req.params.id);
    return res.json({
        msg: 'Deu certo'
    });
});

ItemController.get('/item/:id', async(req, res) =>{
    const item = await itemService.item(req.params.id);
    return res.json(item);
});

ItemController.put('/item/:id', async(req, res)=>{
    await itemService.update(req.params.id, req.body);
    return res.json({
        msg: 'Deu Certo'
    });
});

module.exports = ItemController;