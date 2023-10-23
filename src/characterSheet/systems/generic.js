


class Stat {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

const generic = {
  stats: {
    primary: {},
    secondary: {},
    tertiary: {},

    set: function (item, value) {
      this[item] = newStat(item, value);
    },
  },

  health: {
    set: function (item, value) {
      this[item] = value;
    },
  },

  items: {
    set: function (item, value) {
      this[item] = value;
    },
  },

  details: {
    set: function (item, value) {
      this[item] = value;
    },
  },
}



export default generic;