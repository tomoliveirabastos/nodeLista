const Database = require('./../Config/Database');

class ItemService{
    constructor(){}
    
    async registrar_item(lista, json){
        
        const [id] = await Database('item').insert({
            name: json.name,
            descricao: json.descricao,
            inserted: new Date(),
            lista_id: lista
        });
        
        return id;
    }

    async item(id){
        const item = await Database('item').where('id', id).first();
        return item;
    }

    async items(lista){
        const items = Database('item').where('lista_id', lista);
        return items;
    }

    async delete(id){
        await Database('item').where('id', id).delete();
        return true;
    }

    async update(id, body){
        await Database('item').where('id', id).update(body);
        return true;
    }
}

module.exports = ItemService;