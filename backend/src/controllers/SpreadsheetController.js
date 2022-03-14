const connection = require("../database/connection");

module.exports = {
    // Criar planilha
    async create(request, response){
        const { user_id } = request.params;
        const { name_spreadsheet, initial_bankroll, objective, daily_profit, payout, in_box, type_spreadsheet } = request.body;
        try{
            await connection('spreadsheet').insert({ name_spreadsheet, initial_bankroll, objective, daily_profit, payout, in_box, type_spreadsheet, user_id });
            return response.json({ success: `Planilha criada com sucesso!` });
        } catch(error){
            response.json({ error: `Não foi possível criar a planilha!` });
        }
    },

    // Atualizar planilha (apena o dono da planilha pode atualizar)
    async update(request, response){
        const { id_spreadsheet, user_id } = request.params;
        const { name_spreadsheet, initial_bankroll, objective, daily_profit, payout, in_box, type_spreadsheet } = request.body;
        try{
            await connection('spreadsheet').where({ id_spreadsheet, user_id }).update({ name_spreadsheet, initial_bankroll, objective, daily_profit, payout, in_box, type_spreadsheet });
            return response.json({ success: `Planilha atualizada com sucesso!` });
        } catch(error){
            response.json({ error: `Erro ao atualizar a planilha!` });
        }
    },

    // Listar planilhas públicas
    async list(request, response){
        const { search, page } = request.query;
        const [count_spreadsheets] = await connection('spreadsheet').join('user', {'user.id_user': 'spreadsheet.user_id'}).whereRaw(`type_spreadsheet = 'public' AND (user.name LIKE '%${search}%' OR name_spreadsheet LIKE '%${search}%')`).count();
        const total_pages = Math.ceil(count_spreadsheets['count(*)'] / 6);
        const spreadsheets = await connection('spreadsheet').join('user', {'user.id_user': 'spreadsheet.user_id'}).whereRaw(`type_spreadsheet = 'public' AND (user.name LIKE '%${search}%' OR name_spreadsheet LIKE '%${search}%')`).select('spreadsheet.*', 'user.name').orderBy('in_box', 'desc').limit(6).offset((page - 1) * 6);
        return response.json({ spreadsheets, total_pages });
    },

    // Listar uma planilha pública específica
    async listSpecific(request, response){
        const { id_spreadsheet } = request.params;
        const [spreadsheet] = await connection('spreadsheet').join('user', {'user.id_user': 'spreadsheet.user_id'}).where({ id_spreadsheet }).select('spreadsheet.*', 'user.name');
        if(spreadsheet.type_spreadsheet === 'private') return response.json({ warning: `Planilha do usuário(a) ${spreadsheet.name} está privada!` });
        return response.json({ spreadsheet });
    },

    // Deletar planilha (apena o dono da planilha pode deletar)
    async delete(request, response){
        const { id_spreadsheet, user_id } = request.params;
        await connection('spreadsheet').where({ id_spreadsheet, user_id }).delete();
        return response.json({ success: `Planilha excluída com sucesso!` });
    }
}