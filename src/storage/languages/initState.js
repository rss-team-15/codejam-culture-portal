const englishContent = {
  home: {
    portalDescription: {
      topSectionHeader: 'Belarusian Poetry Portal',
      aboutSectionHeader: 'Find info about your favorite belarusian poets with ease !',
      usedTechnologies: 'Portal Uses',
      openSourceSectionHeader: 'All the code is open source and available on the GitHub',
      openSourceSectionButton: 'Jump Into Sources!'
    }
  }
};

const russianContent = {
  home: {
    portalDescription: {
      topSectionHeader: 'Портал Белорусской Поэзии',
      aboutSectionHeader: 'Ищите информацию о любимом белорусском поэте с лёгкостью !',
      usedTechnologies: 'Портал Использует',
      openSourceSectionHeader: 'Исходный код в открытом доступе и доступен на GitHub',
      openSourceSectionButton: 'Заглянуть в Исходники!'
    }
  }
};

export default {
  contents: {
    english: englishContent,
    russian: russianContent,
    belarusian: {}
  },
  activeLanguage: englishContent
};
