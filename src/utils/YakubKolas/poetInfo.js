import yakubKolasMainPicture from './assets/yakub-kolas-main-photo.jpg';

import yakubKolasPicture1 from './assets/yakub-kolas-1.jpg';
import yakubKolasPicture2 from './assets/yakub-kolas-2.jpg';
import yakubKolasPicture3 from './assets/yakub-kolas-3.jpg';
import yakubKolasPicture4 from './assets/yakub-kolas-4.jpg';
import yakubKolasPicture5 from './assets/yakub-kolas-5.jpg';

const media = {
  photo: {
    mainPhoto: yakubKolasMainPicture,
    gallery: [
      yakubKolasPicture1,
      yakubKolasPicture2,
      yakubKolasPicture3,
      yakubKolasPicture4,
      yakubKolasPicture5
    ],
  },
  video: {
    youtube: [
      'https://www.youtube.com/watch?v=FRfHUhw9KkI',
      'https://www.youtube.com/watch?v=HxFeWGZspJQ',
      'https://www.youtube.com/watch?v=GNvCm0tK9gw'
    ],
  }
};

const englishInfo = {
  name: 'Yakub',
  surname: 'Kolas',
  yearsOfLife: 'November 3 [O.S. October 22], 1882 - August 13, 1956',
  biography: [
    {
      date: '1895-1897',
      content:
        "In the years 1895-1897 Kanstantsin Mitskevich lived in Albuts, helping his parents in the house and preparing in the meantime for entrance exams to the teachers' college; he did a lot of reading"
    },
    {
      date: '1898-1902',
      content:
        "In 1898 he entered the Niasvizh Teachers' College, graduating in 1902. When a student, he took interest in fiction literature: he read works by A. Pushkin, N. Lermontov, N. Gogol, A. Koltsov, N. Nekrasov, L. Tolstoy, I. Hemnicer, T. Shevchenko, I. Franko, A. Mitskevich"
    },
    {
      date: '1902-1905',
      content:
        'After graduating from the college, in the years 1902-1905, the young teacher worked in the Palesse region, in the villages of Liusina (now in the Gantsavichi district) and Pinkavichi (now in the Pinsk district)'
    },
    {
      date: '1906',
      content:
        'On 1 September 1906, the Vilnia-based Belarusian newspaper Nasha Dolia (Our Fate) published his poem "Our Native Land", in which the author called his country "a poor land", "a God forgotten land"'
    },
    {
      date: '1920s',
      content:
        'The first half of the 1920s is a very productive time in the life of Yakub Kolas, his literary work and official career. In 1921, summoned by the government of Soviet Belarus, he returned to Minsk.'
    },
    {
      date: '1940s',
      content:
        'After the war, from the mid-1940s to his last days Yakub Kolas worked at the Belarusian Academy of Sciences'
    }
  ],
  listOfWorks: [
    {
      date: '1908',
      work: 'Songs of Captivity'
    },
    {
      date: '1910',
      work: 'Songs of Grief'
    },
    {
      date: '1923',
      work: 'A New Land'
    },
    {
      date: '1925',
      work: 'Simon the Musician'
    },
    {
      date: '1947',
      work: "The Fisherman's Hut"
    },
    {
      date: '1954',
      work: 'At a Crossroads'
    }
  ],
  placesOfActivity: [
    {
      activity: 'Yakub Kolas Manor Museum',
      mapLink:
        'https://www.google.com/maps/place/%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D1%83%D1%81%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0+%D0%AF%D0%BA%D1%83%D0%B1%D0%B0+%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%D0%B0/@53.4638026,26.7758654,15z/data=!4m5!3m4!1s0x0:0xc3379081b1ecec27!8m2!3d53.4638026!4d26.7758654'
    }
  ]
};

const russianInfo = {
  name: 'Якуб',
  surname: 'Колас',
  yearsOfLife: '3 ноября [22 октября] 1882 -  13 августа 1956',
  biography: [
    {
      date: '1895-1897',
      content:
        'На протяжении 1895-1897 Константин Мицкевич живёт в Альбути, помогает родителям по дому и готовится к вступительным экзаменам в педагогический университет; в эти годы он много читал'
    },
    {
      date: '1898-1902',
      content:
        'В 1898 г. поступил в Несвижский педагогический университет, который окончил в  1902 г. В студенческие годы заинтересовался художественной литературой: читал работы А. Пушкина, Н. Гоголя, М. Лермонтова,  Н. Некрасова, Л. Толстого и др.'
    },
    {
      date: '1902-1905',
      content:
        'После выпуска из университета, в 1902-1905 гг., молодой учитель работал в Полесье, в деревнях Ганцевичского и Пинского районов'
    },
    {
      date: '1906',
      content:
        '1 сентября 1906 г., газета "Наша нива" выпустила его рассказ "Наша земля" , в который автор называет нашу страну "несчастной" и "забытой Богом"'
    },
    {
      date: '1920s',
      content: 'Наиболее продуктивное время в карьере писателя. В 1921 г. возвращается в Минск.'
    },
    {
      date: '1940s',
      content: 'После войны до самой смерти Якуб Колас работал в Национальной Академии Наук'
    }
  ],
  listOfWorks: [
    {
      date: '1908',
      work: 'Песни неволи'
    },
    {
      date: '1910',
      work: 'Песня печали'
    },
    {
      date: '1923',
      work: 'Новая земля'
    },
    {
      date: '1925',
      work: 'Семен-Музыка'
    },
    {
      date: '1947',
      work: 'Шляпа рыбака'
    },
    {
      date: '1954',
      work: 'На перепутье'
    }
  ],
  placesOfActivity: [
    {
      activity: 'Музей имени Якуба Коласа',
      mapLink:
        'https://www.google.com/maps/place/%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D1%83%D1%81%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0+%D0%AF%D0%BA%D1%83%D0%B1%D0%B0+%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%D0%B0/@53.4638026,26.7758654,15z/data=!4m5!3m4!1s0x0:0xc3379081b1ecec27!8m2!3d53.4638026!4d26.7758654'
    }
  ]
};

const belarusianInfo = {
  name: 'Якуб',
  surname: 'Колас',
  yearsOfLife: '3 лістапада [22 кастрычніка] 1882 - 13 жніўня 1956',
  biography: [
    {
      date: '1895-1897',
      content:
        'На працягу 1895-1897 гг. Канстанцін Міцкевіч жыве ў Альбуцi, дапамагае бацькам па хаце і рыхтуецца да ўступных іспытаў у педагагічны універсітэт; у гэтыя гады ён шмат чытаў '
    },
    {
      date: '1898-1902',
      content:
        'У 1898 г. паступіў у Нясвіжскі педагагічны універсітэт, які скончыў у 1902 г. У студэнцкія гады зацікавіўся мастацкай літаратурай: чытаў працы А. Пушкіна, М. Гогаля, М. Лермантава, M. Някрасава, Л. Талстога і інш.'
    },
    {
      date: '1902-1905',
      content:
        'Пасля выпуску з універсітэта, у 1902-1905 гг., малады настаўнік працаваў на Палессі, у вёсках Ганцавіцкага і Пінскага раёнаў'
    },
    {
      date: '1906',
      content:
        '1 лістапада 1906 г., газета "Наша ніва" выпусціла яго апавяданне "Наша зямля", у якім аўтар называе нашу краіну "няшчаснай" і "забытай Богам"'
    },
    {
      date: '1920s',
      content: 'Найбольш прадуктыўнае час у кар\'еры пісьменніка. У 1921 г. вяртаецца ў Мінск. '
    },
    {
      date: '1940s',
      content: 'Пасля вайны да самай смерці Якуб Колас працаваў у Нацыянальнай Акадэміі Навук'
    }
  ],
  listOfWorks: [
    {
      date: '1908',
      work: 'Песня няволi'
    },
    {
      date: '1910',
      work: 'Песні-жальбы'
    },
    {
      date: '1923',
      work: 'Новая зямля'
    },
    {
      date: '1925',
      work: 'Сямён-Музыка'
    },
    {
      date: '1947',
      work: 'Шляпа рыбака'
    },
    {
      date: '1954',
      work: 'На ростанях'
    }
  ],
  placesOfActivity: [
    {
      activity: 'Музей імя Якуба Коласа',
      mapLink:
        'https://www.google.com/maps/place/%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D1%83%D1%81%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0+%D0%AF%D0%BA%D1%83%D0%B1%D0%B0+%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%D0%B0/@53.4638026,26.7758654,15z/data=!4m5!3m4!1s0x0:0xc3379081b1ecec27!8m2!3d53.4638026!4d26.7758654'
    }
  ]
};

export default { englishInfo, russianInfo, belarusianInfo, media };
