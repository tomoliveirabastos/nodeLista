const Database = require('./../Config/Database');

class SubitemService{
    constructor(){}

    async subitem(id){
        const subitem = await Database('subitem').where('id', id).first();
        return subitem;
    }

    async store(body){
        body.inserted = new Date();
        await Database('subitem').insert(body);
        return true;
    }

    async all_subitems(id){
        const all = await Database('subitem').where('item_id', id);
        return all;
    }

    async delete(id){
        await Database('subitem').where('id', id).delete();
        return true;
    }
}

module.exports = SubitemService;