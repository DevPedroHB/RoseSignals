exports.seed = function(knex){
  return knex('spreadsheet').del().then(function (){
    return knex('spreadsheet').insert([
      {
        name_spreadsheet: 'Planilha Janeiro de 2022',
        initial_bankroll: 250,
        objective: 2750,
        daily_profit: 10,
        payout: 91,
        in_box: 275,
        type_spreadsheet: 'public',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        name_spreadsheet: 'Planilha Fevereiro de 2022',
        initial_bankroll: 100,
        objective: 1100,
        daily_profit: 5,
        payout: 91,
        in_box: 105,
        type_spreadsheet: 'public',
        user_id: '236b6224b378220493a00bdb8045f8fc'
      }, {
        name_spreadsheet: 'Planilha Março de 2022',
        initial_bankroll: 1000,
        objective: 11000,
        daily_profit: 3,
        payout: 91,
        in_box: 1100,
        type_spreadsheet: 'public',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        name_spreadsheet: 'Planilha Janeiro de 2022',
        initial_bankroll: 60,
        objective: 660,
        daily_profit: 5,
        payout: 91,
        in_box: 63,
        type_spreadsheet: 'public',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        name_spreadsheet: 'Planilha Fevereiro de 2022',
        initial_bankroll: 500,
        objective: 3500,
        daily_profit: 15,
        payout: 91,
        in_box: 575,
        type_spreadsheet: 'public',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        name_spreadsheet: 'Planilha Março de 2022',
        initial_bankroll: 12,
        objective: 2750,
        daily_profit: 10,
        payout: 91,
        in_box: 27,
        type_spreadsheet: 'public',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }
    ]);
  });
};