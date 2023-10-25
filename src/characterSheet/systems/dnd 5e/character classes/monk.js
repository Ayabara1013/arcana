import { ClassFeature, Modifier } from '../../../classes';



const monk = {
  name: 'monk',
  hitDie: 8,
  levels: {
    1: {},
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
    unarmouredDefense: new ClassFeature(
      'Unarmoured Defense',
      'monk', 1,
      "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
      false,
      'passive'
    ),

    martialArts: new ClassFeature(
      'Martial Arts',
      'monk', 1,
      "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:\nYou can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.\nYou can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.\n When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.\nCertain monasteries use specialized forms of the monk weapons.For example, you might use a club that is two lengths of wood connected by a short chain(called a nunchaku) or a sickle with a shorter, straighter blade(called a kama).Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon on the Weapons page.",
      false,
      'passive'
    )
  },

  actions: {
    
  },
}

monk.levels[1].features = [
  monk.features.unarmouredDefense,
  monk.features.martialArts,
];

monk.features.unarmouredDefense.modifiers = new Modifier('unarmoured defence', '10 + dexterity + wisdom', ['no armour', 'no shield'])

for (let option in monk.features) {
  if (monk.features[option].type === 'ability') {
    console.log(`${option}: ${monk.features[option]}`);

    monk.actions[option] = monk.features[option].name;
  }
}

export default monk;



// "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:\nYou can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.\nYou can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.\n When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.\nCertain monasteries use specialized forms of the monk weapons.For example, you might use a club that is two lengths of wood connected by a short chain(called a nunchaku) or a sickle with a shorter, straighter blade(called a kama).Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon on the Weapons page."