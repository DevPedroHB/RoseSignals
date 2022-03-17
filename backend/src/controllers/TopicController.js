const connection = require('../database/connection');

module.exports = {
    // Criar tópicos
    async create(request, response){
        if(request.user.permission !== 'admin') return response.json({ warning: `Você deve ser administrador para criar tópicos!`});
        const { title, description } = request.body;
        try{
            await connection('topic').insert({ title, description, user_id: request.user.id_user });
            return response.json({ success: `Tópico criado com sucesso!` });
        } catch(error){
            response.json({ error: `Não foi possível criar o tópico!` });
        }
    },

    // Atualizar tópico
    async update(request, response){
        if(request.user.permission !== 'admin') return response.json({ warning: `Você deve ser administrador para atualizar tópicos!`});
        const { id_topic } = request.params;
        const { title, description } = request.body;
        try{
            await connection('topic').where({ id_topic }).update({ title, description });
            return response.json({ success: `Tópico atualizado com sucesso!` });
        } catch(error){
            response.json({ error: `Erro ao atualizar o tópico!` });
        }
    },

    // Listar tópicos junto com suas reações
    async list(request, response){
        const { search, page } = request.query;
        const [count_topics] = await connection('topic').join('user', {'user.id_user': 'topic.user_id'}).whereRaw(`title LIKE '%${search}%' OR description LIKE '%${search}%' OR user.name LIKE '%${search}%'`).count();
        const total_pages = Math.ceil(count_topics['count(*)'] / 3);
        const topics = await connection('topic').join('user', {'user.id_user': 'topic.user_id'}).whereRaw(`title LIKE '%${search}%' OR description LIKE '%${search}%' OR user.name LIKE '%${search}%'`).select('topic.*', 'user.name').orderBy('id_topic', 'desc').limit(3).offset((page - 1) * 3);
        const reactions = await connection('reaction').join('user', {'user.id_user': 'reaction.user_id'}).join('topic', {'topic.id_topic': 'reaction.topic_id'}).select('reaction.id_reaction', 'topic.id_topic', 'user.id_user', 'user.name', 'reaction.type', 'reaction.commentary', 'reaction.updated_at');
        topics.map(t => t["reactions"] = reactions.filter(r => r.id_topic === t.id_topic).filter(r => delete r.id_topic));
        return response.json({ topics, total_pages });
    },

    // Listar um tópico específico junto com suas reações
    async listSpecific(request, response){
        const { id_topic } = request.params;
        const [ topic ] = await connection('topic').join('user', {'user.id_user': 'topic.user_id'}).where({ id_topic }).select('topic.*', 'user.name');
        const reactions = await connection('reaction').join('user', {'user.id_user': 'reaction.user_id'}).join('topic', {'topic.id_topic': 'reaction.topic_id'}).where({ id_topic }).select('reaction.id_reaction', 'topic.id_topic', 'user.id_user', 'user.name', 'reaction.type', 'reaction.commentary', 'reaction.updated_at');
        topic["reactions"] = reactions.filter(r => delete r.id_topic);
        return response.json({ topic });
    },

    // Deletar tópicos
    async delete(request, response){
        if(request.user.permission !== 'admin') return response.json({ warning: `Você deve ser administrador para excluir tópicos!`});
        const { id_topic } = request.params;
        await connection('topic').where({ id_topic }).delete();
        return response.json({ success: `Tópico excluído com sucesso!` });
    }
}