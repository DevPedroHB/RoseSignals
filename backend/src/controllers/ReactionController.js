const connection = require('../database/connection');

module.exports = {
    // Criar reação
    async create(request, response){
        const { topic_id } = request.params;
        const { type, commentary } = request.body;
        try{
            await connection('reaction').insert({ type, commentary, topic_id, user_id: request.user.id_user });
            return response.json({ success: `Reação criada com sucesso!` });
        } catch(error){
            response.json({ error: `Não foi possível criar a reação!` });
        }
    },

    // Atualizar reação
    async update(request, response){
        const { id_reaction } = request.params;
        const { type } = request.body;
        try{
            await connection('reaction').where({ id_reaction }).update({ type });
            return response.json({ success: `Reação atualizado com sucesso!` });
        } catch(error){
            response.json({ error: `Erro ao atualizar a reação!` });
        }
    },

    // Deletar reação
    async delete(request, response){
        const { id_reaction } = request.params;
        await connection('reaction').where({ id_reaction }).delete();
        return response.json({ success: `Reação excluída com sucesso!` });
    }
}