exports.seed = function(knex){
  return knex('user').del().then(function (){
    return knex('user').insert([
      {
        id_user: 'f3f9955f269fbd989f9aeb99bf0d09df',
        email: 'pedrohenriquebergamo.16@gmail.com',
        password: 'f00415daa244c2d048da0675b2739ea2',
        name: 'Pedro Henrique Bérgamo',
        genre: 'M',
        birth_date: '2002-03-18',
        address: 'Rua Vitantônio Scisci, 235 - Jardim Juscelino Kubitschek, Indaiatuba - São Paulo',
        permission: 'admin'
      }, {
        id_user: '236b6224b378220493a00bdb8045f8fc',
        email: 'mariabergamo2011@gmail.com',
        password: 'fb643e6ec2047baff490776227f03b66',
        name: 'Maria Pereira Bérgamo',
        genre: 'F',
        birth_date: '1962-11-20',
        address: 'Rua Vitantônio Scisci, 235 - Jardim Juscelino Kubitschek, Indaiatuba - São Paulo'
      }, {
        id_user: 'ccf2bf0d1ac51165d3f6eabe7a13f57b',
        email: 'miguel@gmail.com',
        password: '3781048afbb894007bab8327326dfcba',
        name: 'Miguel Henrique Bérgamo',
        genre: 'M',
        birth_date: '2016-01-01',
        address: 'Av. Dr. Adilson Rodrigues, 2000 - Jardim das Samambaias, Jundiaí - SP, 13211-685'
      }, {
        id_user: '8fd0be62620fb250e717e47898023ff2',
        email: 'inaja@gmail.com',
        password: '99722eb04c3b8af0fb65e77999fb4696',
        name: 'Inaja Pereira Bérgamo',
        genre: 'F',
        birth_date: '1990-01-01',
        address: 'Av. Dr. Adilson Rodrigues, 2000 - Jardim das Samambaias, Jundiaí - SP, 13211-685'
      }, {
        id_user: '94bd7f01eef1b128b9bf6fe420203327',
        email: 'mateus@gmail.com',
        password: '84b929666355359e08bfcce54fc59333',
        name: 'Mateus Henrique Bérgamo',
        genre: 'M',
        birth_date: '2010-01-01',
        address: 'Av. Dr. Adilson Rodrigues, 2000 - Jardim das Samambaias, Jundiaí - SP, 13211-685'
      }, {
        id_user: '7084294bb725356f23b02596f0e63ee8',
        email: 'sueli@gmail.com',
        password: '3ee87108b8116d876e258d58ee413602',
        name: 'Sueli Aparecida Bérgamo',
        genre: 'F',
        birth_date: '1990-01-01',
        address: 'R. Carijó, 153 - Vila Soriano, Indaiatuba - SP, 13335-310',
        permission: 'admin'
      }
    ]);
  });
};