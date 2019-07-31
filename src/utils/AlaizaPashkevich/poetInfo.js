import alaizaPashkevichMainPicture from './assets/alaiza-pashkevich-main-photo.jpg';

import alaizaPashkevichPicture1 from './assets/alaiza-pashkevich-1.jpg';
import alaizaPashkevichPicture2 from './assets/alaiza-pashkevich-2.jpg';
import alaizaPashkevichPicture3 from './assets/alaiza-pashkevich-3.jpg';
import alaizaPashkevichPicture4 from './assets/alaiza-pashkevich-4.jpg';
import alaizaPashkevichPicture5 from './assets/alaiza-pashkevich-5.jpg';

const media = {
  photo: {
    mainPhoto: alaizaPashkevichMainPicture,
    gallery: [
      alaizaPashkevichPicture1,
      alaizaPashkevichPicture2,
      alaizaPashkevichPicture3,
      alaizaPashkevichPicture4,
      alaizaPashkevichPicture5,
    ],
  },
  video: {
    youtube: 'GlYYLSkqG90',
  },
};

const englishInfo = {
  name: 'Alaiza',
  surname: 'Pashkevich',
  yearsOfLife: 'July 15, 1876 – November 5, 1916',
  biography: [
    {
      date: '1902-1904',
      content:
        'After moving to Pashkevich Petersburg, in 1902, she graduated externally from the Gymnasium Alexandria for girls and joined a school for physical education teachers, Lieshafta AF',
    },
    {
      date: '1904',
      content:
        "Pashkievich was one of the founders of the Belarusian Socialist Assembly. In 1904, she gave up teaching and returned to Vilnius. She organized workers' groups, wrote and promoted anti-government proclamations, and took part in debates and political meetings.",
    },
    {
      date: '1908-1909',
      content:
        "In 1908–1909 she lived in Krakow and studied at the Jagiellonian University's Faculty of humanities..",
    },
    {
      date: '1911',
      content:
        'In 1911, she married Steponas Kairys, a Lithuanian engineer and social democracy activist. In the same year, she returned to Belarus and joined national educational activities.',
    },
    {
      date: '1914-1915',
      content:
        'During World War I, Alaiza Pashkievich worked as a Sister of Charity in a military hospital in Vilnius.',
    },
    {
      date: '1916',
      content:
        'At the beginning of 1916, she traveled to her parents and helped villagers sick with typhoid. She also fell ill with typhus and died 5 February 1916.',
    },
  ],
  listOfWorks: [
    {
      date: '1904',
      work: "Man hasn't changed",
    },
    {
      date: '1905',
      work: 'Faith of a Belarusian',
    },
    {
      date: '1905',
      work: "On the New Year's Eve",
    },
    {
      date: '1906',
      work: 'Belarusian violin',
    },
    {
      date: '1906',
      work: 'Cross to the freedom',
    },
    {
      date: '1906',
      work: 'With the banner',
    },
  ],
  placesOfActivity: [
    {
      activity: 'Birthplace',
      mapLink: { lat: 53.495293, lng: 24.45423 },
    },
    {
      activity: 'A monument to Alaiza Pashkevich',
      mapLink: { lat: 53.606939, lng: 24.741627 },
    },
    {
      activity: 'Place of burial',
      mapLink: { lat: 53.49528, lng: 24.45422 },
    },
  ],
};

const russianInfo = {
  name: 'Алоиза',
  surname: 'Пашкевич',
  yearsOfLife: '15 июля 1876 – 5 ноября 1916',
  biography: [
    {
      date: '1902-1904',
      content:
        'После переезда в  Петербург, Пашкевич в 1902 г. окончила Александрийскую гимназию для девочек и поступила на Курсы воспитательниц и руководительниц физического образования (Высшие курсы Лесгафта) в Санкт-Петербурге',
    },
    {
      date: '1904',
      content:
        'Пашкевич была одним из основателей Белорусской социалистической громады. В 1904 году она бросила преподавание и вернулась в Вильнюс. Она организовывала рабочие группы, писала и пропагандировала антиправительственные прокламации, участвовала в дебатах и ​​политических встречах',
    },
    {
      date: '1908-1909',
      content:
        'В 1908–1909 гг. она жила в Кракове и училась на гуманитарном факультете Ягеллонского университета',
    },
    {
      date: '1911',
      content:
        'В 1911 г. она вышла замуж за Степонаса Кайриса, литовского инженера и активиста социал-демократии. В том же году она вернулась в Беларусь и присоединилась к общенациональной образовательной деятельности',
    },
    {
      date: '1914-1915',
      content:
        'Во время Первой мировой войны Алаиза Пашкевич работала сестрой милосердия в военном госпитале в Вильнюсе',
    },
    {
      date: '1916',
      content:
        'В начале 1916 г. она ездила к родителям и помогала сельским жителям, больным брюшным тифом. Она также заболела тифом и умерла 5 февраля 1916 г.',
    },
  ],
  listOfWorks: [
    {
      date: '1904',
      work: 'Мужик не изменился',
    },
    {
      date: '1905',
      work: 'Вера белоруса',
    },
    {
      date: '1905',
      work: 'В канун Нового года',
    },
    {
      date: '1906',
      work: 'Скрипка белорусская',
    },
    {
      date: '1906',
      work: 'Крест на свободу',
    },
    {
      date: '1906',
      work: 'Под знаменем',
    },
  ],
  placesOfActivity: [
    {
      activity: 'Место рождения',
      mapLink: { lat: 53.495293, lng: 24.45423 },
    },
    {
      activity: 'Памятник Алаизе Пашкевич',
      mapLink: { lat: 53.606939, lng: 24.741627 },
    },
    {
      activity: 'Место погребения',
      mapLink: { lat: 53.49528, lng: 24.45422 },
    },
  ],
};

const belarusianInfo = {
  name: 'Алаiза',
  surname: 'Пашкевiч',
  yearsOfLife: '15 ліпеня 1876 - 5 лістапада 1916 ',
  biography: [
    {
      date: '1902-1904',
      content:
        'Пасля пераезду ў Пецярбург, Пашкевіч у 1902 г. скончыла Александрыйскую гімназію для дзяўчынак і паступіла на Курсы выхавальніц і кіраўніц фізічнай адукацыі (Вышэйшыя курсы Лесгафта) у Санкт-Пецярбургу',
    },
    {
      date: '1904',
      content:
        'Пашкевіч была адным з заснавальнікаў Беларускай сацыялістычнай грамады. У 1904 годзе яна кінула выкладанне і вярнулася ў Вільню. Яна арганізоўвала рабочыя групы, пісала і прапагандавала антыўрадавыя пракламацыі, удзельнічала ў дэбатах і палітычных сустрэчах ',
    },
    {
      date: '1908-1909',
      content:
        'У 1908-1909 гг. яна жыла ў Кракаве і вучылася на гуманітарным факультэце Ягелонскага універсітэта ',
    },
    {
      date: '1911',
      content:
        'У 1911 г. яна выйшла замуж за Степонаса Кайриса, літоўскага інжынера і актывіста сацыял-дэмакратыі. У тым жа годзе яна вярнулася ў Беларусь і далучылася да агульнанацыянальнай адукацыйнай дзейнасці ',
    },
    {
      date: '1914-1915',
      content:
        'Падчас Першай сусветнай вайны Алаізы Пашкевіч працавала сястрой міласэрнасці ў ваенным шпіталі ў Вільні',
    },
    {
      date: '1916',
      content:
        'У пачатку 1916 г. яна ездзіла да бацькоў і дапамагала сельскім жыхарам, хворым брушным тыфам. Яна таксама захварэла тыфам і памерла 5 лютага 1916 г.',
    },
  ],
  listOfWorks: [
    {
      date: '1904',
      work: 'Мужык не змяніўся',
    },
    {
      date: '1905',
      work: 'Вера беларуса',
    },
    {
      date: '1905',
      work: 'Напярэдадні Новага года',
    },
    {
      date: '1906',
      work: 'Скрыпка Беларуская',
    },
    {
      date: '1906',
      work: 'Хрэст на свабоду',
    },
    {
      date: '1906',
      work: 'Пад штандартам',
    },
  ],
  placesOfActivity: [
    {
      activity: 'Месца нараджэння',
      mapLink: { lat: 53.495293, lng: 24.45423 },
    },
    {
      activity: 'Помнiк Алаiзе Пашкевiч',
      mapLink: { lat: 53.606939, lng: 24.741627 },
    },
    {
      activity: 'Месца захавання',
      mapLink: { lat: 53.49528, lng: 24.45422 },
    },
  ],
};

export default { englishInfo, russianInfo, belarusianInfo, media };
