const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const md5 = require('md5');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

module.exports = {
    // Registrar usuário
    async register(request, response){
        const { email, password, name, genre, birth_date } = request.body;
        const id_user = crypto.randomBytes(16).toString('HEX');
        try{
            await connection('user').insert({ id_user, email, password: md5(`${password}+p3dr0h8@d3v`), name, genre, birth_date });
            const token = jwt.sign({ id_user: id_user, email: email, name: name, genre: genre, birth_date: birth_date, andress: null, image: null, permission: 'membro' }, 'p3dr0h8@d3v', { expiresIn: "1d" });
            return response.json({ token: token });
        } catch(error){
            response.json({ error: `Esse email já está registrado!` });
        }
    },

    // Logar usuário
    async login(request, response){
        const { email, password } = request.body;
        const user = await connection('user').where({ email, password: md5(`${password}+p3dr0h8@d3v`) }).select('*').first();
        if(!user) return response.json({ warning: `Essa conta não foi encontrada! Verifique o email ou senha!` });
        const token = jwt.sign({ id_user: user.id_user, email: user.email, name: user.name, genre: user.genre, birth_date: user.birth_date, address: user.address, image: user.image, permission: user.permission }, 'p3dr0h8@d3v', { expiresIn: "1d" });
        return response.json({ token: token });
    },

    // recuperar senha do usuário
    async recover(request, response){
        const { email, name, birth_date } = request.body;
        const user = await connection('user').where({ email, name, birth_date }).select('*').first();
        if(!user) return response.json({ warning: `Esse usuário não foi encontrado! Verifique os dados!` });
        try{
            const senha = crypto.randomBytes(4).toString('HEX');
            await connection('user').where('id_user', user.id_user).update({ password: md5(`${senha}+p3dr0h8@d3v`) });
            // https://myaccount.google.com/lesssecureapps?pli=1
            var transporte = nodemailer.createTransport({ service: `gmail`, auth: { user: 'rosesignalsofc@gmail.com', pass: 'r0s3s1gn4ls@0fc' } });
            var layout_email = { from: 'rosesignalsofc@gmail.com', to: user.email, subject: 'RoseSignals - Recuperação de senha', html: `<h1>Sua nova senha de acesso é: </h1><h3><strong>${senha}</strong></h3><small>Não responda esse email!</small>` }
            transporte.sendMail(layout_email).then(() => response.json({ success: `Sua nova senha foi enviada para seu email` })).catch(error => response.json({ error: `Não foi possível enviar o e-mail com sua nova senha. Contate o desenvolvedor! ${error}` }));
        } catch(error){
            return response.json({ error: `Não foi possível alterar sua senha!` });
        }
    },

    // Atualizar usuário (administradores e membros)
    async update(request, response){
        const { id } = request.params;
        const { email, name, genre, birth_date, address, permission } = request.body;
        try{
            await connection('user').where('id_user', id).update({ email, name, genre, birth_date, address, permission });
            return response.json({ success: `Usuário atualizado com sucesso!` });
        } catch(error){
            response.json({ error: `Erro ao atualizar o usuário!` });
        }
    },

    // Atualizar imagem do usuário
    async updateImg(request, response){
        const { id } = request.params;
        const user = await connection('user').where('id_user', id).select('*').first();
        if(user.image !== null){
            const name_image = user.image.split('/')[5];
            promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "uploads", "users", name_image));
        }
        const image = `http://localhost:3333/image/user/${request.files[0].filename}`;
        try{
            await connection('user').where('id_user', id).update({ image });
            return response.json({ success: `Imagem atualizada com sucesso!` });
        } catch(error){
            response.json({ error: `Erro ao atualizar a imagem!` });
        }
    },

    // Listar usuário (Apenas para administradores)
    async list(request, response){
        const { permission, search, page } = request.query;
        const [count_users] = await connection('user').whereRaw(permission === 'todos' ? `email LIKE '%${search}%' OR name LIKE '%${search}%' OR address LIKE '%${search}%'` : `permission = '${permission}' AND (email LIKE '%${search}%' OR name LIKE '%${search}%' OR address LIKE '%${search}%')`).count();
        const total_pages = Math.ceil(count_users['count(*)'] / 9);
        const users = await connection('user').whereRaw(permission === 'todos' ? `email LIKE '%${search}%' OR name LIKE '%${search}%' OR address LIKE '%${search}%'` : `permission = '${permission}' AND (email LIKE '%${search}%' OR name LIKE '%${search}%' OR address LIKE '%${search}%')`).select('*').orderBy('name').limit(9).offset((page - 1) * 9);
        return response.json({ users, total_pages });
    },

    // Deletar usuário (Apenas para administradores)
    async delete(request, response){
        const { id } = request.params;
        await connection('user').where('id_user', id).delete();
        return response.json({ success: `Usuário excluído com sucesso!` });
    }
}