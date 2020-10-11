const express = require('express');
const SubitemService = require('./../Service/SubitemService');

const SubitemController = express.Router();
const subitemService = new SubitemService();


SubitemController.get('/subitem/:id', async(req, res) =>{
    const subitem = await subitemService.subitem(req.params.id);
    return res.json(subitem);
});

SubitemController.post('/subitem', async(req, res)=>{
    await subitemService.store(req.body);
    return res.json({
        msg: 'Deu certo'
    });
});

SubitemController.get('/subitems/:itemId', async(req, res) =>{
    const subitem = await subitemService.all_subitems(req.params.itemId);
    return res.json(subitem);
});

SubitemController.delete('/subitem/:id', async(req, res)=>{
    await subitemService.delete(req.params.id);
    return res.json({
        msg: 'Deu certo'
    });
});

module.exports = SubitemController;