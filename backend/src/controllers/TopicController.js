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
        const [count_topics] = await connection('topic').join('user', {'user.id_user': 'topic.user_id'}).whereRaw(`title LIKE '%${search}%' OR description LIKE '%${search}%' OR user.name LIKE '%${search}%'`).count();
        const total_pages = Math.ceil(count_topics['count(*)'] / 3);
        const topics = await connection('topic').join('user', {'user.id_user': 'topic.user_id'}).whereRaw(`title LIKE '%${search}%' OR description LIKE '%${search}%' OR user.name LIKE '%${search}%'`).select('topic.*', 'user.name').orderBy('id_topic', 'desc').limit(3).offset((page - 1) * 3);
        const likes = await connection('like_topic').join('user', {'user.id_user': 'like_topic.user_id'}).join('topic', {'topic.id_topic': 'like_topic.topic_id'}).select('topic.id_topic', 'user.id_user', 'user.name');
        const commentaries = await connection('comment_topic').join('user', {'user.id_user': 'comment_topic.user_id'}).join('topic', {'topic.id_topic': 'comment_topic.topic_id'}).select('id_comment_topic', 'topic.id_topic', 'comment_topic.commentary', 'user.id_user', 'user.name', 'comment_topic.updated_at');
        topics.map(t => t["likes"] = likes.filter(l => l.id_topic === t.id_topic).filter(l => delete l.id_topic));
        topics.map(t => t["commentaries"] = commentaries.filter(c => c.id_topic === t.id_topic).filter(c => delete c.id_topic));
        return response.json({ topics, total_pages });
    },

    // Deletar tópicos
    async delete(request, response){
        const { id } = request.params;
        await connection('topic').where('id_topic', id).delete();
        return response.json({ success: `Tópico excluído com sucesso!` });
    }
}