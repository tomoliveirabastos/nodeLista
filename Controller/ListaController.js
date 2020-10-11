import express from 'express';
import ListaService from '../Service/ListaService';

const ListaController = express.Router();
const listaService = new ListaService();

ListaController.get("/teste", (req, res) => {
    return res.send('ok');
});

ListaController.post('/lista', async(req, res)=>{
    const id = await listaService.registra_lista(req.body);
    return res.json({
        msg : "Deu certo",
        id: id
    });
});

ListaController.get('/listas', async(req, res)=>{
    const listas = await listaService.listas();
    return res.json(listas);
});

ListaController.delete('/lista/:id', async(req, res) => {
    await listaService.deletar(req.params.id);
    return res.json({
        msg: `id ${req.params.id} Deletado`
    });
});

ListaController.put('/lista/:id', async(req, res) =>{
    const {name: name} = req.body;
    const {id: id} = req.params;
    listaService.update(id, name);
    return res.json({
        msg: 'Deu certo'
    });
});

ListaController.get('/lista/:id', async(req, res) => {
    const id = req.params.id;
    const lista = await listaService.lista(id);
    return res.json(lista);
});

module.exports = ListaController;