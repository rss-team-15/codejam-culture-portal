import petrusBrovkaMainPicture from './assets/petrus-brovka-main-photo.jpg';

import petrusBrovkaPicture1 from './assets/petrus-brovka-1.jpg';
import petrusBrovkaPicture2 from './assets/petrus-brovka-2.jpg';
import petrusBrovkaPicture3 from './assets/petrus-brovka-3.jpg';
import petrusBrovkaPicture4 from './assets/petrus-brovka-4.jpg';
import petrusBrovkaPicture5 from './assets/petrus-brovka-5.jpg';

const media = {
  photo: {
    mainPhoto: petrusBrovkaMainPicture,
    gallery: [
      petrusBrovkaPicture1,
      petrusBrovkaPicture2,
      petrusBrovkaPicture3,
      petrusBrovkaPicture4,
      petrusBrovkaPicture5
    ],
  },
  video: {
    youtube: '7xHGTr4EbK4',
  }
};

const englishInfo = {
  name: 'Petrus',
  surname: 'Brovka',
  yearsOfLife: 'June 25, 1905 [O.S.June, 12] – March 24, 1980',
  biography: [
    {
      date: '1926-1927',
      content: 'Brovka\'s first published works were printed in 1926, and the young poet briefly served as executive secretary of a local newspaper in 1927.'
    },
    {
      date: '1941-1945',
      content: 'During the Second World War, Brovka\'s mother was among the Belarusian people sent to Auschwitz by the occupying Nazi forces. Brovka himself wrote for the partisan press and published in the army newspapers, lauding the fighting effort of the Soviet people.'
    },
    {
      date: '1960s-1970s',
      content: 'Brovka reputation as a Soviet and Belarusian poet continued to grow during Brovka\'s subsequent decades in Minsk after the war. The fullest apex of his literary talents is considered to be his final decades in the 1960s and 1970s.'
    },
    {
      date: '1962',
      content: 'Brovka was awarded the prestigious Lenin Prize after his completion of the poetry volume And Time Goes On in 1962.'
    },
    {
      date: '1966',
      content: ' In 1966, Brovka edited the first volume of the Byelorussian Soviet Encyclopedia, the year he was given the title of People\'s Poet of the Byelorussian Soviet Socialist Republic. He was elected a full member of the Belarusian Academy of Sciences in 1966.'
    },
    {
      date: '1972',
      content: 'Brovka was awarded the title Hero of Socialist Labor in 1972.'
    },
  ],
  listOfWorks: [
    {
      date: '1934',
      work: 'Selected poems',
    },
    {
      date: '1935',
      work: 'The Coming of the hero',
    },
    {
      date: '1937',
      work: 'Spring homeland',
    },
    {
      date: '1940',
      work: 'Ways boroviki',
    },
    {
      date: '1943',
      work: 'Belarus',
    },
    {
      date: '1946',
      work: 'Bread',
    },
  ],
  placesOfActivity: [
   {
    activity: 'Birthplace',
    mapLink: {lat: 54.937899, lng: 28.384333}
  },
  {
    activity: 'Literary Museum of Petrus Brovka',
    mapLink: {lat: 53.899999, lng: 27.561369}
  },
  {
    activity: 'Place of burial',
    mapLink: {lat: 53.938500, lng: 27.661100}
  }
  ]
};

const russianInfo = {
  name: 'Петрусь',
  surname: 'Бровка',
  yearsOfLife: '25 июня [12 июня] 1905 – 24 марта 1980',
  biography: [
    {
      date: '1926-1927',
      content:
        'Первые опубликованные работы Бровки были напечатаны в 1926 г., молодой поэт некоторое время занимал пост исполнительного секретаря местной газеты в 1927 г.'
    },
    {
      date: '1941-1945',
      content:
        'Во время Второй мировой войны мать Бровки была в числе белорусских людей, отправленных в Освенцим оккупационными нацистскими силами. Сам Бровка писал для партизанской прессы и публиковал в армейских газетах, восхваляя боевые усилия советских людей'
    },
    {
      date: '1960-1970',
      content:
        'Репутация Бровки как советского и белорусского поэта продолжала расти в течение последующих десятилетий после войны. Триумфом его литературных талантов считаются его последние десятилетия в 1960-х и 1970-х годах'
    },
    {
      date: '1962',
      content:
        'Бровка был удостоен престижной Ленинской премии после завершения поэтического тома "И время идет" в 1962 г.'
    },
    {
      date: '1966',
      content: 'В 1966 г. Бровка отредактировал первый том Белорусской советской энциклопедии. Ему было присвоено звание народного поэта Белорусской Советской Социалистической Республики. Он был избран действительным членом Белорусской академии наук в 1966 г.'
    },
    {
      date: '1972',
      content: 'Бровка был удостоен звания Героя Социалистического Труда в 1972 г.'
    }
  ],
  listOfWorks: [
    {
      date: '1934',
      work: 'Избранные стихи и поэмы'
    },
    {
      date: '1935',
      work: 'Приход героя'
    },
    {
      date: '1937',
      work: 'Весны родины'
    },
    {
      date: '1940',
      work: 'Дорогами боровыми'
    },
    {
      date: '1943',
      work: 'Беларусь'
    },
    {
      date: '1946',
      work: 'Хлеб'
    }
  ],
  placesOfActivity: [
    {
      activity: 'Место рождения',
      mapLink: {lat: 54.937899, lng: 28.384333}
    },
    {
      activity: 'Литературный музей имени Петруся Бровки',
      mapLink: {lat: 53.899999, lng: 27.561369}
    },
    {
      activity: 'Место погребения',
      mapLink: {lat: 53.938500, lng: 27.661100}
    }
  ]
};

const belarusianInfo = {
  name: 'Пятрусь',
  surname: 'Броўка',
  yearsOfLife: '25 чэрвеня [12 чэрвеня] 1905 - 24 сакавіка 1980 ',
  biography: [
    {
      date: '1926-1927',
      content:
        'Першыя апублікаваныя працы Броўкі былі надрукаваныя ў 1926 г., малады паэт некаторы час займаў пасаду выканаўчага сакратара мясцовай газеты ў 1927 г.'
    },
    {
      date: '1941-1945',
      content:
        'Падчас Другой сусветнай вайны маці Броўкі была ў ліку беларускіх людзей, адпраўленых у Асвенцым акупацыйнымі нацысцкімі сіламі. Сам Броўка пісаў для партызанскай прэсы і публікаваў у армейскіх газетах, усхваляючы баявыя намаганні савецкіх людзей '
    },
    {
      date: '1960-1970',
      content:
        'Рэпутацыя Броўкі як савецкага і беларускага паэта працягвала расці на працягу наступных дзесяцігоддзяў пасля вайны. Трыумфам яго літаратурных талентаў лічацца яго апошнія дзесяцігоддзі ў 1960-х і 1970-х гадах'
    },
    {
      date: '1962',
      content: 'Пасля завяршэння паэтычнага тома "І час ідзе" ў 1962 г. Броўка быў узнагароджаны прэстыжнай Ленінскай прэміяй'
    },
    {
      date: '1966',
      content: 'У 1966 г. Броўка адрэдагаваў першы том Беларускай савецкай энцыклапедыі. Яму было прысвоена званне народнага паэта Беларускай Савецкай Сацыялістычнай Рэспублікі. Ён быў абраны сапраўдным членам Беларускай акадэміі навук у 1966 г.'
    },
    {
      date: '1972',
      content: 'Броўка быў удастоены звання Героя Сацыялістычнай Працы ў 1972 г.'
    }
  ],
  listOfWorks: [
    {
      date: '1934',
      work: 'Выбраныя вершы i паэмы'
    },
    {
      date: '1935',
      work: 'Прыход героя'
    },
    {
      date: '1937',
      work: 'Вясна радзімы'
    },
    {
      date: '1940',
      work: 'Шляхамі баравымі'
    },
    {
      date: '1943',
      work: 'Беларусь'
    },
    {
      date: '1946',
      work: 'Хлеб'
    }
  ],
  placesOfActivity: [
    {
      activity: 'Месца нараджэння',
      mapLink: {lat: 54.937899, lng: 28.384333}
    },
    {
      activity: 'Літаратурны музей імя Петруся Броўкі',
      mapLink: {lat: 53.899999, lng: 27.561369}
    },
    {
      activity: 'Месца захавання',
      mapLink: {lat: 53.938500, lng: 27.661100}
    }
  ]
};

export default { englishInfo, russianInfo, belarusianInfo, media };
