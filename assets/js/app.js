$(function() {

  // Display random headline
  const headlines = [
    'THE MEW BJÖRK LIMES',
    'NO FUCKS GIVEN',
    'META MODERNISM',
    'LOW-DOWN [LIVE]',
    'BNSWPOTO¹',
    '0% – 100%',
    'PCTTU I, II, III',
    'DSP (CSP); S1, E38',
    '瞬間、心、重ねて',
    'がけっぷち',
    '深夜二時五十分以降に暴れ出す',
    'うちの猫が鷹に食われたんだ',
    '五月病',
    '初手竜舞',
    '積読'
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
