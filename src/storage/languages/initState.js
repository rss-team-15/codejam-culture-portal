import slnchnProfileImage from './assets/slnchn.png';
import igor82bvProfileImage from './assets/igor82bv.jpg';
import sannaoProfileImage from './assets/sannnao.jpg';
import sergmitminProfileImage from './assets/sergmitmin.jpg';
import ekater1naProfileImage from './assets/ekater1na.jpg';
import grenborkProfileImage from './assets/grenbork.jpg';

import poetsList from '../../utils/poetsList';

import {
  daysOfWeekEng,
  daysOfWeekRus,
  daysOfWeekBel,
  monthsEng,
  monthsRus,
  monthsBel
} from '../../utils/dateStuff';

const poetOfTheDay = poetsList[Math.floor(Math.random() * poetsList.length)];

const poetPhoto = poetOfTheDay.media.photo.mainPhoto;

const date = new Date();
const dayNumber = date.getDate();
const year = date.getFullYear();

const dayEng = daysOfWeekEng[date.getDay()];
const dayRus = daysOfWeekRus[date.getDay()];
const dayBel = daysOfWeekBel[date.getDay()];

const monthEng = monthsEng[date.getMonth()];
const monthRus = monthsRus[date.getMonth()];
const monthBel = monthsBel[date.getMonth()];

const englishContent = {
  navbar: {
    homeLink: 'Home',
    poetsList: 'Poets List'
  },
  home: {
    portalDescription: {
      topSectionHeader: 'Belarusian Poetry Portal',
      aboutSectionHeader: 'Find info about your favorite belarusian poets with ease !',
      usedTechnologies: 'Portal Uses',
      openSourceSectionHeader: 'All the code is open source and available on the GitHub',
      openSourceSectionButton: 'Jump Into Sources!'
    },
    poetOfTheDay: {
      poetOfTheDayCardTitle: 'Author Of The Day',
      curDateTitle: `${monthEng} ${dayNumber}, ${dayEng} ${year}`,
      poetInfo: poetOfTheDay.englishInfo,
      learnMoreBtn: 'Learn More'
    },
    developersList: {
      developersListHeader: 'Project was created by the team of six developers',
      developers: [
        {
          githubImg: slnchnProfileImage,
          name: 'Aliaksandr',
          surname: 'Kavalenka',
          githubLink: 'https://github.com/Slnchn',
          githubNickname: 'Slnchn',
          contactLink: 'https://t.me/addicted2y0u',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: igor82bvProfileImage,
          name: 'Ihar',
          surname: 'Baranau',
          githubLink: 'https://github.com/igor82bv',
          githubNickname: 'igor82bv',
          contactLink: '',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: sannaoProfileImage,
          name: 'Aleksandr',
          surname: 'Piskun',
          githubLink: 'https://github.com/sannnao',
          githubNickname: 'Sannnao',
          contactLink: 'https://t.me/sannnao',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: sergmitminProfileImage,
          name: 'Siarhei',
          surname: 'Mitasau',
          githubLink: 'https://github.com/sergmitmin',
          githubNickname: 'SergMitMin',
          contactLink: '',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: ekater1naProfileImage,
          name: 'Ekaterina',
          surname: 'Lysiuk',
          githubLink: 'https://github.com/ekater1na',
          githubNickname: 'ekater1na',
          contactLink: 'https://t.me/ObsssQ',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: grenborkProfileImage,
          name: 'Nikolay',
          surname: 'Shishkin',
          githubLink: 'https://github.com/grenbork',
          githubNickname: 'grenbork',
          contactLink: '',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        }
      ]
    }
  }
};

const russianContent = {
  navbar: {
    homeLink: 'Главная',
    poetsList: 'Список Поэтов'
  },
  home: {
    portalDescription: {
      topSectionHeader: 'Портал Белорусской Поэзии',
      aboutSectionHeader: 'Ищите информацию о любимом белорусском поэте с лёгкостью !',
      usedTechnologies: 'Портал Использует',
      openSourceSectionHeader: 'Исходный код в открытом доступе и доступен на GitHub',
      openSourceSectionButton: 'Заглянуть в Исходники!'
    },
    poetOfTheDay: {
      poetOfTheDayCardTitle: 'Автор Дня',
      curDateTitle: `${monthRus} ${dayNumber}, ${dayRus} ${year}`,
      poetInfo: poetOfTheDay.russianInfo,
      learnMoreBtn: 'Узнать Больше'
    },
    developersList: {
      developersListHeader: 'Над проектом работала команда из шести разработчиков',
      developers: [
        {
          githubImg: slnchnProfileImage,
          name: 'Александр',
          surname: 'Коваленко',
          githubLink: 'https://github.com/Slnchn',
          githubNickname: 'Slnchn',
          contactLink: 'https://t.me/addicted2y0u',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: igor82bvProfileImage,
          name: 'Игорь',
          surname: 'Баранов',
          githubLink: 'https://github.com/igor82bv',
          githubNickname: 'igor82bv',
          contactLink: '',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: sannaoProfileImage,
          name: 'Александр',
          surname: 'Пискун',
          githubLink: 'https://github.com/sannnao',
          githubNickname: 'Sannnao',
          contactLink: 'https://t.me/sannnao',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: sergmitminProfileImage,
          name: 'Сергей',
          surname: 'Митасов',
          githubLink: 'https://github.com/sergmitmin',
          githubNickname: 'SergMitMin',
          contactLink: '',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: ekater1naProfileImage,
          name: 'Екатерина',
          surname: 'Лисюк',
          githubLink: 'https://github.com/ekater1na',
          githubNickname: 'ekater1na',
          contactLink: 'https://t.me/ObsssQ',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        },
        {
          githubImg: grenborkProfileImage,
          name: 'Николай',
          surname: 'Shishkin',
          githubLink: 'https://github.com/grenbork',
          githubNickname: 'grenbork',
          contactLink: '',
          tasksCreated: 7,
          tasksAll: 25,
          teamMembers: 6
        }
      ]
    }
  }
};

export default {
  contents: {
    english: englishContent,
    russian: russianContent,
    belarusian: {}
  },
  activeLanguage: englishContent,
  poetPhoto
};
