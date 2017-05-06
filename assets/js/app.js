$(function() {

  // Display random headline
  const headlines = [
    'WEBSITE, 2017',
    'THE MEW BJÖRK LIMES',
    'NO FUCKS GIVEN',
    'META MODERNISM',
    'LOW-DOWN [LIVE]',
    'BNSWPOTO¹',
    '0%–100%',
    'PCTTU I, II, III',
    'DSP(CSP); S1,E38',
    'Kodomofication',
    'COME AGAIN?',
    '瞬間、心、重ねて',
    '深夜二時五十分以降に暴れ出す',
    'うちの猫が鷹に食われたんだ',
    '五月病',
    '初手、竜舞',
    '積読',
    'つけ麺じゃない！！',
    'つけ麺かもしれない',
    '完'
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
