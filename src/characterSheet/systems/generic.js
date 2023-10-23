


class Stat {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

const generic = {
  stats: {
    primary: {
      force: {
        name: "force",
        value: 2,
        modifier: 0,
      }
    },
    secondary: {
      movement: {
        name: "movement",
        value: 6,
        modifier: 0,
      },
    },
    tertiary: {},

    set: function (category, item, value) {
      this[category][item] = new Stat(item, value);
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

  // baseCharacter: {
  //   get: function () {
  //     return {
  //       stats: this.stats,
  //       health: this.health,
  //       items: this.items,
  //       details: this.details,
  //     };
  //   },
  // }

  get baseCharacter() {
    return {
      stats: this.stats,
      health: this.health,
      items: this.items,
      details: this.details,
    };
  },
}

export default generic;