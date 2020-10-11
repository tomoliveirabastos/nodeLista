const Database = require('./../Config/Database');

class ListaService{
    constructor(){
    }
    async registra_lista(json){
        const [id] = await Database('lista').insert({
            name: json.name,
            inserted: new Date()
        });

        return id;
    }

    async listas(){
        const listas = await Database('lista');
        return listas;
    }

    async deletar(id){
        await Database('lista').where('id', id).delete();
        return true;
    }

    async update(id, name){
        await Database('lista').update('name', name).where('id', id);
        return true;
    }

    async lista(id){
        const lista = await Database('lista').where('id', id).first();
        return lista;
    }
}
module.exports  = ListaService;