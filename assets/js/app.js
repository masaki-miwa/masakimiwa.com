$(function() {

  // Display random headline
  const headlines = [
    'A CAR, A MAN, A MARACA',
    'A lad named E. Mandala',
    'A nut for a jar of tuna',
    'Amy, must I jujitsu my ma?',
    'Decaf and DNA faced',
    'Dentist? Sit Ned',
    'Draw Kwan awkward',
    'Draw nine men inward',
    'Emily’s sassy lime',
    'Evil rats on no star live',
    'Flee to me, remote elf',
    'Go dog',
    'I’m a lasagna, bang a salami',
    'Laid at a dial',
    'Laminated E.T. animal',
    'Late metal',
    'Margot trades used art to gram',
    'Naomi, did I moan?',
    'Never odd or even',
    'No cab, no tuna nut on bacon',
    'No lemon, no melon',
    'No sir! Away! A papaya war is on',
    'No, I told Ed \“lotion\”',
    'Olson is in Oslo',
    'Oozy rat in a sanitary zoo',
    'Pets tell Abe ballet step',
    'Sex at noon taxes',
    'Some men interpret nine memos',
    'UFO tofu',
    'Walmart’s tram law',
    'Warsaw was raw',
    'Wet sanitary rat in a stew',
    'Won’t lovers revolt now?',
    'Wonton? Not now',
    'Zeus was deified, saw Suez',    
    '瞬間、心、重ねて',
    '恋はいつでもハリケーン',
    'これは“恋の試練”',
    '初手、竜舞',
    '積読',
    'ドォォン！',
    '罪は三つある',
    'てへぺろ',
    'グババシュッ！',
    '御自愛専一にて',
    'ここは おまえの ばしょだ',
    'ハンドメイドのバンドエイド',
    'ハロー そしてグッバイ',
    'チーズ・フォンデュ',
    '抹茶プーリン',
    '完',
    '幻想のグラブドーム',
    '喜いで染まるまで',
    '平和の和を',
    '不協和音（Discord）',
    'i 罠 B wiθ U'

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
