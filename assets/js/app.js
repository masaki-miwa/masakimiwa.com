$(function() {

  // Display random headline
  const headlines = [
    'THE MEW BJÖRK LIMES',
    'NO FUCKS GIVEN',
    'METAMODERNISM',
    'LOW-DOWN [LIVE]',
    '壱クールのレギュラーよりも、一回の伝説',
    'がけっぷち',
    '深夜２時５０分以降に暴れ出す',
    'うちの猫が鷹に食われたんだ'
  ];
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  $('.headline p').text(randomHeadline);

  // OK Shadow
  $('.headline p').okshadow({
    color: 'black',
    textShadow: true,
    transparent: true,
    xMax: 0,
    yMax: 0,
    fuzzMin: 1,
    fuzzMax: 9000,
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
