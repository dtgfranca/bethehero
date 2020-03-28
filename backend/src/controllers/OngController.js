
const crypto  = require('crypto');
const connection = require('../database/conection');

module.exports = {

    async index(request, response ) {
        const ongs = await connectino('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whastapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connectino('ongs').insert({
            name,
            email,
            whastapp,
            city,
            uf
        });
    
        return response.json({ id });
    }
}