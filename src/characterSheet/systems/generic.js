const generic = {
  stats: {
    primary: {},
    secondary: {},
    tertiary: {},

    Stat: class {
      constructor(name, value) {
        this.name = name;
        this.value = value;
      }
    },

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

  },
}



export default generic;