import { ClassFeature, Modifier } from '../classes';



const fighter = {
  name: 'Fighter',
  hitDie: 10,
  levels: {
    1: {/* see lower region with declarations */},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
  },

  features: {
    fightingStyle: new ClassFeature(
      'Fighting Style', // name
      'Fighter', 1, // class, level
      "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.", // description
      null, // uses
      'passive' // type
    ),

    secondWind: new ClassFeature(
      'Second Wind', // name
      'Fighter', 1, // class, level
      'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.\nOnce you use this feature, you must finish a short or long rest before you can use it again.', // description
      { current: 1, max: 1, interval: 'short rest' }, // uses
      'ability', // type
    ),
  
    actionSurge1: new ClassFeature(
      'Action Surge', // name
      'Fighter', 2, // class, level
      'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.', // description
      { current: 1, max: 1, interval: 'short rest' }, // uses
      'ability',  // type
    ),
  },

  actions: {
    
  },
}

fighter.features.fightingStyle.options = {
  archery: {
    name: 'Archery',
    description: 'You gain a +2 bonus to attack rolls you make with ranged weapons.',
    modifiers: new Modifier('attack roll', 2, 'with ranged weapon'),
  },
  defense: {
    name: 'Defense',
    description: 'While you are wearing armor, you gain a +1 bonus to AC.',
    modifiers: new Modifier('armour class', 1, 'while wearing armor'),
  }
}

fighter.levels[1].features = [
  fighter.features.fightingStyle,
  fighter.features.secondWind
];

fighter.levels[2].features = [
  fighter.features.actionSurge1
];

for (let option in fighter.features) {
  if (fighter.features[option].type === 'ability') {
    // fighter.actions[option] = fighter.features[option]

    console.log(`${option}: ${fighter.features[option]}`);

    fighter.actions[option] = fighter.features[option].name;
  }
}

export default fighter;