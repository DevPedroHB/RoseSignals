const connection = require('../database/connection');

module.exports = {
    // Criar tópicos
    async create(request, response){
        const { id } = request.params;
        const { title, description } = request.body;
        try{
            await connection('topic').insert({ title, description, user_id: id });
            return response.json({ success: `Tópico criado com sucesso!` });
        } catch(error){
            response.json({ error: `Não foi possível criar o tópico!` });
        }
    },

    // Atualizar usuario
    async update(request, response){
        const { id } = request.params;
        const { title, description } = request.body;
        try{
            await connection('topic').where('id_topic', id).update({ title, description });
            return response.json({ success: `Tópico atualizado com sucesso!` });
        } catch(error){
            response.json({ error: `Erro ao atualizar o tópico!` });
        }
    },

    // Listar tópicos
    async list(request, response){
        const { search, page } = request.query;
        const [count_topics] = await connection('topic').whereRaw(`title LIKE '%${search}%' OR description LIKE '%${search}%'`).count();
        const total_pages = Math.ceil(count_topics['count(*)'] / 3);
        const topics = await connection('topic').whereRaw(`title LIKE '%${search}%' OR description LIKE '%${search}%'`).select('*').orderBy('id_topic', 'desc').limit(3).offset((page - 1) * 3);
        return response.json({ topics, total_pages });
    },

    // Deletar tópicos
    async delete(request, response){
        const { id } = request.params;
        await connection('topic').where('id_topic', id).delete();
        return response.json({ success: `Tópico excluído com sucesso!` });
    }
}