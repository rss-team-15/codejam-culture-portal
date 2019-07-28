import nilHilevichMainPicture from './assets/nil-hilevich-main-photo.jpg';

import nilHilevichPicture1 from './assets/nil-hilevich-1.jpg';
import nilHilevichPicture2 from './assets/nil-hilevich-2.jpg';
import nilHilevichPicture3 from './assets/nil-hilevich-3.jpg';
import nilHilevichPicture4 from './assets/nil-hilevich-4.jpg';
import nilHilevichPicture5 from './assets/nil-hilevich-5.jpg';

const media = {
  photo: {
    mainPhoto: nilHilevichMainPicture,
    gallery: [
      nilHilevichPicture1,
      nilHilevichPicture2,
      nilHilevichPicture3,
      nilHilevichPicture4,
      nilHilevichPicture5
    ],
  },
  video: {
    youtube: [
      'https://www.youtube.com/watch?v=sWPk3sk6m6k',
      'https://www.youtube.com/watch?v=j9FC-l66ymo',
      'https://www.youtube.com/watch?v=BsylylXD9kA'
    ],
  }
};

const englishInfo = {
  name: 'Nil',
  surname: 'Hilevich',
  yearsOfLife: 'September 30, 1931 – March 29, 2016',
  biography: [
    {
      date: '1958',
      content: 'In 1958 he started to work for a newspaper Zvyazda'
    },
    {
      date: '1960-1986',
      content: 'During 1960-1986 he was working at the university, and later on became a professor.'
    },
    {
      date: '1978-1980',
      content: 'In 1978 Hilevich joined the Communist Party. In 1980 he became the executive secretary of the Writer\'s Union of BSSR, and held that position for 9 years. '
    },
    {
      date: '1989',
      content: 'In 1989 he became a chairperson of the Frantsishak Skaryna Belarusian Language Society. He also was the chief editor of the Society\'s bulletin "Our Word"'
    },
    {
      date: '1991',
      content: 'In 1991 Nil Hilevich received a People\'s Poet of Belarus nomination. He has also received some other awards in literature.'
    },
    {
      date: '2009',
      content: 'In 2009 his chosen works were published in a book in Mensk. The book has 600 pages and contains the most important works of Hilevich'
    },
  ],
  listOfWorks: [
    {
      date: '1961',
      work: 'The Jack of Diamonds',
    },
    {
      date: '1963',
      work: 'To New Wreaths',
    },
    {
      date: '1970',
      work: 'A Sin or Two',
    },
    {
      date: '1974',
      work: 'How I Learnt to Live',
    },
    {
      date: '1974',
      work: 'Mermaid in the Narač',
    },
    {
      date: '1979',
      work: 'In Good Agreement',
    },
  ],
  placesOfActivity: [
    {
      activity: 'Place of death',
      mapLink:
        'https://www.google.com/maps/place/%D0%9A%D0%B0%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B5+%D0%BA%D0%BB%D0%B0%D0%B4%D0%B1%D0%B8%D1%89%D0%B5/@53.9081635,27.5022413,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbc55aa7756d03:0xf3710a32010134a4!8m2!3d53.9081635!4d27.50443'
    }
  ]
};

const russianInfo = {
  name: 'Якуб',
  surname: 'Колас',
  yearsOfLife: '3 ноября [22 октября] 1882 -  13 августа 1956',
  biography: [
    {
      date: '1958',
      content:
        'В 1958 году Нил Гилевич начал работать в газете "Звезда"'
    },
    {
      date: '1960-1986',
      content:
        'В 1960-1986 годах Нил Гилевич работал в университете, а затем стал профессором'
    },
    {
      date: '1978-1980',
      content:
        'В 1978 году Гилевич вступил в Коммунистическую партию. В 1980 году он стал ответственным секретарем Союза писателей БССР, он занимал эту должность в течение 9 лет'
    },
    {
      date: '1989',
      content:
        'В 1989 году Нил Гилевич стал председателем Белорусского языкового общества им. Францишака Скорины. Он также был главным редактором бюллетеня Общества "Наше Слово"'
    },
    {
      date: '1991',
      content: 'В 1991 году Нил Гилевич получил звание "Народный поэт Беларуси". Он также получал другие награды в области литературы'
    },
    {
      date: '2009',
      content: 'В 2009 году избранные работы были опубликованы в книге в Менске. Книга содержит 600 страниц и содержит наиболее важные произведения Гилевича'
    }
  ],
  listOfWorks: [
    {
      date: '1961',
      work: 'Бубновый валет'
    },
    {
      date: '1963',
      work: 'Новым венкам'
    },
    {
      date: '1970',
      work: 'Или грех, или 2'
    },
    {
      date: '1974',
      work: 'Как я научился жить'
    },
    {
      date: '1974',
      work: 'Русалка на Нарочи'
    },
    {
      date: '1979',
      work: 'В согласии'
    }
  ],
  placesOfActivity: [
    {
      activity: 'Место погребения',
      mapLink:
        'https://www.google.com/maps/place/%D0%9A%D0%B0%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B5+%D0%BA%D0%BB%D0%B0%D0%B4%D0%B1%D0%B8%D1%89%D0%B5/@53.9081635,27.5022413,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbc55aa7756d03:0xf3710a32010134a4!8m2!3d53.9081635!4d27.50443'
    }
  ]
};

const belarusianInfo = {
  name: 'Якуб',
  surname: 'Колас',
  yearsOfLife: '3 лістапада [22 кастрычніка] 1882 - 13 жніўня 1956',
  biography: [
      {
        date: '1958',
        content:
          'У 1958 году Ніл Гілевіч пачаў працаваць у газеце "Звязда"'
      },
      {
        date: '1960-1986',
        content:
          'У 1960-1986 гадах Ніл Гілевіч працаваў ва ўніверсітэце, а затым стаў прафесарам'
      },
      {
        date: '1978-1980',
        content:
          'У 1978 году Гілевіч ўступіў у Камуністычную партыю. У 1980 годзе ён стаў адказным сакратаром Саюза пісьменнікаў БССР, ён займаў гэтую пасаду на працягу 9 гадоў'
      },
      {
        date: '1989',
        content:
          'У 1989 году Ніл Гілевіч стаў старшынёй Беларускага моўнага таварыства ім. Францішак Скарыны. Ён таксама быў галоўным рэдактарам бюлетэня Таварыства "Наша Слова"'
      },
      {
        date: '1991',
        content: 'У 1991 годзе Ніл Гілевіч атрымаў званне "Народны паэт Беларусі". Ён таксама атрымліваў іншыя ўзнагароды ў галіне літаратуры'
      },
      {
        date: '2009',
        content: 'У 2009 годзе выбраныя працы былі апублікаваныя ў кнізе ў Менску. Кніга змяшчае 600 старонак і утрымлівае найбольш важныя творы Гілевіча'
      }
    ],
    listOfWorks: [
      {
        date: '1961',
        work: 'Званковы валет'
      },
      {
        date: '1963',
        work: 'Да новых венікаў'
      },
      {
        date: '1970',
        work: 'Цi грэх, ці 2'
      },
      {
        date: '1974',
        work: 'Як я навучыўся жыць'
      },
      {
        date: '1974',
        work: 'Русалка на Нарачы'
      },
      {
        date: '1979',
        work: 'У добрай згодзе'
      }
    ],
  placesOfActivity: [
    {
      activity: 'Месца пахавання',
      mapLink:
        'https://www.google.com/maps/place/%D0%9A%D0%B0%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B5+%D0%BA%D0%BB%D0%B0%D0%B4%D0%B1%D0%B8%D1%89%D0%B5/@53.9081635,27.5022413,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbc55aa7756d03:0xf3710a32010134a4!8m2!3d53.9081635!4d27.50443'
    }
  ]
};

export default { englishInfo, russianInfo, belarusianInfo, media };
