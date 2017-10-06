$(function() {

  // Display random headline
  const headlines = [
    'JACK, LETS MAKE THIS THE GREATEST 10MIN OF OUR LIVES',
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
    'I AM NOT WEARING ANYTHING',
    'BAE',
    'LET IT HAPPEN',
    'AUDIO, VIDEO, DISCO',
    'THE ASHES OF EMIGRE',
    'ACID REDACTION',
    '(FEARFUL SCREAM)',
    'KRITISCH GRAPHIT DESIGN',
    'COUGH PRINT PARIS',
    'EAU DE PARFUM',
    'EAU DE TOILETTE',
    '2001 SPACE ODDITY',
    'FETAMENTS',
    'wwwwww',
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
    'ペチペチ',
    '罪は三つある',
    '二秒だ',
    'てへぺろ',
    '青眼の金髪',
    'グババシュッ！',
    'ピグモン',
    '聴覚、視覚、三角',
    '前篇',
    '後篇',
    '恐怖のルート87',
    '匆々',
    '御自愛専一にて',
    'とて',
    'よーーーーーーーーーし',
    'ねもうす',
    'いいにほひ',
    '歩くクレヨン',
    'チーズな',
    'バターな',
    'ここを俺の縄張りとす！',
    '運ぶ、戦う、増える',
    '...そして食べられる',
    'フラワウの花は悪意の香り',
    'レディ＆オールドマン',
    '物々',
    'ここは おまえの ばしょだ',
    'エンディングまで泣くんじゃない',
    'ボーイミーツガール',
    'ハンドメイドのバンドエイド',
    'ハロー そしてグッバイ',
    'ドキュメンタル',
    '笑ってはいけない',
    '美的スポーツ',
    'インターネットヒーロー',
    '完',
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
