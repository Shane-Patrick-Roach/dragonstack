const  DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  // get function to ensure the time is set when the dragon is created not when the file is run. 
  get birthdate() {
    return new Date()
  }
}

class Dragon {
  constructor({ birthdate, nickname } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
  }
}

module.exports = Dragon;

