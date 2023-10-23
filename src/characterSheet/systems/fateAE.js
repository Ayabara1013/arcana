const fateAE = {
  name: `Fate Accelerated Edition`,

  stats: {
    primary: { // does this actually need to be a sub cateogry? could it simply be apporaches {}?
      name: `Approaches`,
      careful: 0,
      clever: 0,
      flashy: 0,
      forceful: 0,
      quick: 0,
      sneaky: 0,
    }
  },

  details: {
    highConcept: ``,
    trouble: ``,
    otherAspects: [],
  },

  stunts: [],

  stress: {
    value: 0,
    reset: function (value) {
      if (value) {
        this.value += value;
      }
      else {
        this.value = 0;
      }
    }
  },

  consequences: {
    mild: {
      cost: 2,
      details: ``,
      active: false,
    },
    moderate: {
      cost: 4,
      details: ``,
      active: false,
    },
    severe: {
      cost: 6,
      details: ``,
      active: false,
    },

    reset: function (type) {
      if (Array.isArray(type)) {
        type.forEach(consequence => {
          consequence.active = false;
        });
      }
      else {
        type.active = false;
      }
    },
  },
}


export default fateAE;