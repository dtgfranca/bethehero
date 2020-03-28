const connection = require('../database/conection');

module.exports = {
    async indexedDB(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ond_id', ong_id)
        .select('*');

        return response.json(incidents);
    }
}