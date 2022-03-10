exports.seed = function(knex){
  return knex('topic').del().then(function (){
    return knex('topic').insert([
      {
        title: 'John Steinbeck',
        description: 'Sempre sonhe e arrisque mais alto do que você sabe que pode… Tente ser melhor do que si mesmo.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Roy T. Bennett',
        description: 'Não tenha medo do fracasso. Tenha medo de não tentar.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'William James',
        description: 'Dê aos seus sonhos tudo o que você tem. E você se surpreenderá com a energia que surge de dentro de você.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Walt Disney',
        description: 'O segredo para fazer os sonhos se tornarem realidade pode ser resumido em quatro C’s: Curiosidade, Confiança, Coragem e Constância, e o maior de todos esses é a Confiança.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'Nunca deixe que suas memórias sejam maiores que os seus sonhos.',
        description: 'Douglas Ivester',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Howard Schultz, CEO do Startbucks',
        description: 'Todo mundo começa forte. O sucesso vem para aqueles que têm um compromisso inabalável de continuar assim até o fim.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'Herman Melville',
        description: 'É melhor falhar na originalidade do que ter sucesso na imitação.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Bob Dylan',
        description: 'Um homem é um sucesso se ele acorda de manhã e vai dormir à noite, e no meio disso e faz o que quer fazer.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'Sanford Meisner',
        description: 'Coragem significa estar disposto a arriscar tudo.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Robert F. Kennedy',
        description: 'Somente aqueles que ousam falhar muito podem conquistar muito.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'Truman Capote',
        description: 'O fracasso é o tempero que dá sabor ao sucesso.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Theodore Roosevelt',
        description: 'Faça o que você pode, com o que você tem, onde você estiver.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'Pablo Picasso',
        description: 'Tudo o que você puder imaginar é real.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Thomas Edison',
        description: 'Eu nunca falhei. Eu apenas encontrei 10 mil maneiras que não funcionam.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'John Wooden',
        description: 'Não deixe que o que você não pode fazer interfira no que você pode fazer.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Jim Ryun',
        description: 'Motivação é aquilo que te faz começar. Habito é aquilo que te faz continuar.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'Stevie Wonder',
        description: 'A habilidade pode te levar ao topo. Mas é necessário caráter para se manter lá.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Les Brown',
        description: 'Muitos de nós não estamos vivendo nossos sonhos porque estamos vivendo nossos medos.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'Ralph Waldo Emerson',
        description: 'Não vá por onde o caminho te leva. Em vez disso vá por onde não há caminho e deixe uma trilha.',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Alexander Graham Bell',
        description: 'Às vezes nós olhamos tanto tempo para uma porta que se fecha que vemos muito tarde outra que está aberta.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        title: 'Francis Ford Coppola',
        description: 'Um elemento essencial de qualquer arte é o risco. Se você não arrisca, como fará algo realmente bonito que ainda não foi visto?',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        title: 'Albert Schweitzer',
        description: 'O sucesso não é necessário para a felicidade. A felicidade é necessária para o sucesso. Se você ama o que faz, você terá sucesso.',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }
    ]);
  });
};