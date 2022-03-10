exports.seed = function(knex){
  return knex('usuario').del().then(function (){
    return knex('usuario').insert([
      {
        id_usuario: '7d6c5ff77d6c5ff7',
        email: 'pedrohenriquebergamo.16@gmail.com',
        senha: '1.q.2.w.3.e',
        nome: 'Pedro Henrique Bérgamo',
        sexo: 'M',
        data_nascimento: '2002-03-18',
        endereco: 'Rua Vitantônio Scisci, 235 - Jardim Juscelino Kubitschek, Indaiatuba - São Paulo',
        permissao: 'ADMIN'
      }
    ]);
  });
};