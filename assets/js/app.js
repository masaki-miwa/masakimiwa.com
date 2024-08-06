$(function() {

  // Display random headline
  const headlines = [  
    '本能',  
    '群青日和',  
    '群青日和',  
    '新しい文明開化',  
    '透明人間',  
    '閃光少女',  
    'ナイロンの糸',    
    'モス',
    'ユリイカ',
    'プラトー',
    '惑星タントラ',
    'Attune / Detune'
    

  ];
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  $('.headline p').text(randomHeadline);

  // OK Shadow
  $('.headline p').okshadow({
    color: 'black',
    textShadow: true,
    transparent: true,
    downwards: true,
    xMax: 0,
    yMax: 0,
    fuzzMin: 1,
    fuzzMax: 50,
    fuzz: 10
  });

  // Show image on hover of link
  $('.has-image').on('mouseenter', function() {
    const dataSelector = $(this).attr('data-selector');
    $('img[data-selector="' + dataSelector + '"]').addClass('visible');
  }).on('mouseout', function() {
    $('.overlay img').removeClass('visible');
  });

});
