exports.seed = function(knex){
  return knex('comment_topic').del().then(function (){
    return knex('comment_topic').insert([
      {
        commentary: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        topic_id: '1',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topic_id: '1',
        user_id: '236b6224b378220493a00bdb8045f8fc'
      }, {
        commentary: 'Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.',
        topic_id: '1',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topic_id: '1',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.',
        topic_id: '1',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.',
        topic_id: '1',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
        topic_id: '7',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        commentary: 'Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
        topic_id: '7',
        user_id: '236b6224b378220493a00bdb8045f8fc'
      }, {
        commentary: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.',
        topic_id: '7',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        topic_id: '7',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
        topic_id: '7',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
        topic_id: '7',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        topic_id: '13',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        commentary: 'Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.',
        topic_id: '13',
        user_id: '236b6224b378220493a00bdb8045f8fc'
      }, {
        commentary: 'Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        topic_id: '13',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topic_id: '13',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.',
        topic_id: '13',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        topic_id: '13',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.',
        topic_id: '19',
        user_id: 'f3f9955f269fbd989f9aeb99bf0d09df'
      }, {
        commentary: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh.',
        topic_id: '19',
        user_id: '236b6224b378220493a00bdb8045f8fc'
      }, {
        commentary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.',
        topic_id: '19',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        topic_id: '19',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.',
        topic_id: '19',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
        topic_id: '19',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.',
        topic_id: '2',
        user_id: '236b6224b378220493a00bdb8045f8fc'
      }, {
        commentary: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
        topic_id: '2',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.',
        topic_id: '2',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topic_id: '2',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topic_id: '2',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.',
        topic_id: '8',
        user_id: '236b6224b378220493a00bdb8045f8fc'
      }, {
        commentary: 'Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        topic_id: '8',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
        topic_id: '8',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
        topic_id: '8',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Sed porttitor lectus nibh. Proin eget tortor risus.',
        topic_id: '8',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Sed porttitor lectus nibh. Proin eget tortor risus.',
        topic_id: '14',
        user_id: '236b6224b378220493a00bdb8045f8fc'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
        topic_id: '14',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.',
        topic_id: '14',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat.',
        topic_id: '14',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
        topic_id: '14',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.',
        topic_id: '3',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.',
        topic_id: '3',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.',
        topic_id: '3',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topic_id: '3',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        topic_id: '9',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        topic_id: '9',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
        topic_id: '9',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Proin eget tortor risus. Nulla porttitor accumsan tincidunt.',
        topic_id: '9',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.',
        topic_id: '15',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.',
        topic_id: '15',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada.',
        topic_id: '15',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.',
        topic_id: '15',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.',
        topic_id: '20',
        user_id: 'ccf2bf0d1ac51165d3f6eabe7a13f57b'
      }, {
        commentary: 'Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        topic_id: '20',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        topic_id: '20',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
        topic_id: '20',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topic_id: '4',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
        topic_id: '4',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
        topic_id: '4',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
        topic_id: '10',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        topic_id: '10',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topic_id: '10',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.',
        topic_id: '16',
        user_id: '8fd0be62620fb250e717e47898023ff2'
      }, {
        commentary: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.',
        topic_id: '16',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
        topic_id: '16',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
        topic_id: '5',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.',
        topic_id: '5',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.',
        topic_id: '11',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
        topic_id: '11',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
        topic_id: '17',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
        topic_id: '17',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        topic_id: '21',
        user_id: '94bd7f01eef1b128b9bf6fe420203327'
      }, {
        commentary: 'Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        topic_id: '21',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        topic_id: '6',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus.',
        topic_id: '12',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }, {
        commentary: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
        topic_id: '18',
        user_id: '7084294bb725356f23b02596f0e63ee8'
      }
    ]);
  });
};