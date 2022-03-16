const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const md5 = require('md5');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
require('dotenv').config();

module.exports = {
    // Registrar usuário
    async register(request, response){
        const { email, password, name, genre, birth_date } = request.body;
        const id_user = crypto.randomBytes(16).toString('HEX');
        try{
            await connection('user').insert({ id_user, email, password: md5(`${password}+${process.env.CRYPTOGRAPHY}`), name, genre, birth_date });
            const token = jwt.sign({ id_user: id_user, email: email, name: name, genre: genre, birth_date: birth_date, andress: null, image: null, permission: 'membro' }, process.env.CRYPTOGRAPHY, { expiresIn: "1d" });
            return response.json({ token: token });
        } catch(error){
            response.json({ error: `Esse email já está registrado!` });
        }
    },

    // Logar usuário
    async login(request, response){
        const { email, password } = request.body;
        const user = await connection('user').where({ email, password: md5(`${password}+${process.env.CRYPTOGRAPHY}`) }).select('*').first();
        if(!user) return response.json({ warning: `Essa conta não foi encontrada! Verifique o email ou senha!` });
        const token = jwt.sign({ id_user: user.id_user, email: user.email, name: user.name, genre: user.genre, birth_date: user.birth_date, address: user.address, about: user.about, image: user.image, permission: user.permission }, process.env.CRYPTOGRAPHY, { expiresIn: "1d" });
        return response.json({ token: token });
    },

    // Recuperar senha do usuário
    async recover(request, response){
        const { email, name, birth_date } = request.body;
        const user = await connection('user').where({ email, name, birth_date }).select('*').first();
        if(!user) return response.json({ warning: `Esse usuário não foi encontrado! Verifique os dados!` });
        try{
            const senha = crypto.randomBytes(4).toString('HEX');
            await connection('user').where('id_user', user.id_user).update({ password: md5(`${senha}+${process.env.CRYPTOGRAPHY}`) });
            // https://myaccount.google.com/lesssecureapps?pli=1
            var transporte = nodemailer.createTransport({ service: `gmail`, auth: { user: process.env.EMAIL, pass: process.env.PASSWORD } });
            var layout_email = { from: 'rosesignalsofc@gmail.com', to: user.email, subject: 'RoseSignals - Recuperação de senha', html: `<h1>Sua nova senha de acesso é: </h1><h3><strong>${senha}</strong></h3><small>Não responda esse email!</small>` }
            transporte.sendMail(layout_email).then(() => response.json({ success: `Sua nova senha foi enviada para seu email` })).catch(error => response.json({ error: `Não foi possível enviar o e-mail com sua nova senha. Contate o desenvolvedor! ${error}` }));
        } catch(error){
            return response.json({ error: `Não foi possível alterar sua senha!` });
        }
    },

    // Atualizar usuário
    async update(request, response){
        const { email, name, genre, birth_date, address, about } = request.body;
        try{
            await connection('user').where({ id_user: request.user.id_user }).update({ email, name, genre, birth_date, address, about });
            const token = jwt.sign({ id_user: request.user.id_user, email: email, name: name, genre: genre, birth_date: birth_date, address: address, about: about, image: request.user.image, permission: request.user.permission }, process.env.CRYPTOGRAPHY, { expiresIn: "1d" });
            return response.json({ success: `Usuário atualizado com sucesso!`, token });
        } catch(error){
            response.json({ error: `Erro ao atualizar o usuário! ${error}` });
        }
    },

    // Atualizar imagem do usuário
    async updateImg(request, response){
        if(request.user.image !== null){
            const name_image = request.user.image.split('/')[5];
            promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "uploads", "users", name_image));
        }
        const image = `http://localhost:3333/image/user/${request.files[0].filename}`;
        try{
            await connection('user').where({ id_user: request.user.id_user }).update({ image });
            const token = jwt.sign({ id_user: request.user.id_user, email: request.user.email, name: request.user.name, genre: request.user.genre, birth_date: request.user.birth_date, address: request.user.address, about: request.user.about, image: image, permission: request.user.permission }, process.env.CRYPTOGRAPHY, { expiresIn: "1d" });
            return response.json({ success: `Imagem atualizada com sucesso!`, token });
        } catch(error){
            response.json({ error: `Erro ao atualizar a imagem! ${error}` });
        }
    },

    // Listar usuário (Apenas para administradores)
    async list(request, response){
        if(request.user.permission !== 'admin') return response.json({ warning: `Você deve ser administrador para listar os usuários!` })
        const { permission, search, page } = request.query;
        const [count_users] = await connection('user').whereRaw(permission === 'todos' ? `email LIKE '%${search}%' OR name LIKE '%${search}%' OR address LIKE '%${search}%'` : `permission = '${permission}' AND (email LIKE '%${search}%' OR name LIKE '%${search}%' OR address LIKE '%${search}%')`).count();
        const total_pages = Math.ceil(count_users['count(*)'] / 9);
        const users = await connection('user').whereRaw(permission === 'todos' ? `email LIKE '%${search}%' OR name LIKE '%${search}%' OR address LIKE '%${search}%'` : `permission = '${permission}' AND (email LIKE '%${search}%' OR name LIKE '%${search}%' OR address LIKE '%${search}%')`).select('*').orderBy('name').limit(9).offset((page - 1) * 9);
        return response.json({ users, total_pages });
    },

    // Listar todos os tópicos criado por um usuário junto com suas reações
    async topics(request, response){
        const { id_user } = request.params;
        const { search, page } = request.query;
        const [count_topics] = await connection('topic').join('user', {'user.id_user': 'topic.user_id'}).whereRaw(`user.id_user LIKE '%${id_user}%' OR description LIKE '%${search}%' OR title LIKE '%${search}%'`).count();
        const total_pages = Math.ceil(count_topics['count(*)'] / 3);
        const topics = await connection('topic').join('user', {'user.id_user': 'topic.user_id'}).whereRaw(`user.id_user LIKE '%${id_user}%' OR title LIKE '%${search}%' OR description LIKE '%${search}%'`).select('topic.*', 'user.name').orderBy('id_topic', 'desc').limit(3).offset((page - 1) * 3);
        const reactions = await connection('reaction').join('user', {'user.id_user': 'reaction.user_id'}).join('topic', {'topic.id_topic': 'reaction.topic_id'}).select('reaction.id_reaction', 'topic.id_topic', 'user.id_user', 'user.name', 'reaction.type', 'reaction.commentary', 'reaction.updated_at');
        topics.map(t => t["reactions"] = reactions.filter(r => r.id_topic === t.id_topic).filter(r => delete r.id_topic));
        return response.json({ topics, total_pages });
    },

    // Listar todos as planilhas criada por um usuário
    async spreadsheets(request, response){
        const { id_user } = request.params;
        const spreadsheets = await connection('spreadsheet').join('user', {'user.id_user': 'spreadsheet.user_id'}).where({ id_user }).select('spreadsheet.*', 'user.name');
        return response.json({ spreadsheets });
    },

    // Deletar usuário (Apenas para administradores)
    async delete(request, response){
        if(request.user.permission !== 'admin') return response.json({ warning: `Você deve ser administrador para excluir usuários!` })
        const { id_user } = request.params;
        await connection('user').where({ id_user }).delete();
        return response.json({ success: `Usuário excluído com sucesso!` });
    }
}