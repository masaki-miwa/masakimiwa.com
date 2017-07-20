$(function() {

  // Display random headline
  const headlines = [
    'WEBSITE, 2017',
    'THE MEW BJÖRK LIMES',
    'META MODERNISM',
    'LOW-DOWN [LIVE]',
    'BNSWPOTO¹, 2016',
    '0%–100%, 2016',
    'PCTTU I, II, III',
    'SEASON 1; EPISODE 38',
    '9–5 PARADIGM SHIFT',
    'COME AGAIN?',
    'COME TOGETHER?',
    'BUT IT DOES FLOAT?',
    'MY SHOES ARE BLACK',
    'BED LIGHT DISTRICT',
    'COFFEE & CIGARETTES',
    '瞬間、心、重ねて',
    '深夜二時五十分以降に暴れ出す',
    '恋はいつでもハリケーン',
    'これは“恋の試練”',
    'うちの猫が鷹に食われたんだ',
    '五月病',
    '初手、竜舞',
    '積読',
    'つけ麺じゃないっ！！',
    'つけ麺かもしれない',
    'もやもや',
    'ドォォン！',
    'ドンッ！',
    'ドーン！',
    'ドン！',
    'ガゥ！',
    '罪は三つある',
    '２秒だ',
    'てへぺろ',
    '青眼の金髪',
    'グババシュッ！',
    'はぐれモン',
    'ピグモン',
    'バルタン星人',
    '聴覚、視覚、三角',
    '前篇',
    '後篇',
    '恐怖のルート８７',
    '匆々',
    '御自愛専一にて',
    'とて',
    'よーーーーーーーーーし',
    'ねもうす',
    'いいにほひ。',
    '歩くクレヨン',
    '１０４点',
    'チーズな',
    'バターな',
    'ここを俺の縄張りとす！',
    '運ぶ、戦う、増える、そして食べられる',
    'フラワウの花は悪意の香り',
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
