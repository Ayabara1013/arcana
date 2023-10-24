export class Results {
  constructor(sum, rolls, mods) {
    this.sum = sum ?? 0;
    this.rolls = {
      d4: rolls?.d4 ?? new Roll(),
      d6: rolls?.d6 ?? new Roll(),
      d8: rolls?.d8 ?? new Roll(),
      d10: rolls?.d10 ?? new Roll(),
      d12: rolls?.d12 ?? new Roll(),
      d20: rolls?.d20 ?? new Roll(),
      d100: rolls?.d100 ?? new Roll(),
    };
    this.mods = mods ?? {};             // this will be an object of modifiers, like { strength: new Modifier(), proficiency: new Modifier() }
  }
}

// const rollTemplate = [`quantity`, `die`, `type`];

export class Roll {
  constructor(operation, quantity, die, type) {
    this.operation = this.setOperation(operation);
    this.quantity = quantity ?? 0;
    this.die = die ?? 0;
    this.type = type ?? null;
  }

  setOperation(operation) {
    if (operation === 'add' || operation === 'subtract') {
      return operation;
    }
    else if (operation === '+') {
      return 'add';
    }
    else if (operation === '-') {
      return 'subtract';
    }
    else {
      return 'add';
    }
  }
}

export class Modifier {
  constructor(operation, value, source, type) {
    this.operation = operation ?? 'add'; // operation is either 'add' or 'subtract'
    this.value = value ?? 0;      // value is the number of the modifier, like 2 or 5 
    this.source = source ?? null; // source is the name of the modifier, like 'strength' or 'proficiency'
    this.type = type ?? null;     // type is either 'flat' or 'multiplier' // OR // type will be something like proficiency, fire, etc. // should this be a tags array?
  }
}




/**
 * @param {*} val 
 * @returns 
 */
export function rollDie(val) {
  let result = Math.floor(Math.random() * val) + 1;
  // console.log(`rolled ${result} on a d${val}`)
  return result;
}




// export function ParseCommand(Command) {

// }

// const commands = ['!roll', '!r', '!dice', '!d', '!rolls', '!dice'];


// // example rolls

// const comm1 = '!roll 2d6+1d10+5';
// const comm2 = `!roll 2d6 1d10 5`;
// const comm3 = `!roll 2d6 + slashing 1d10 fire + 5 strength`;
// const comm4 = `!roll 2d6 slashing 1d10 fire 5 strength`;
// const comm5 = `!roll 2d6 slashing+1d10 fire+5 strength`; // this as a spaced plus, as well as a non spaced plus
// const comm6 = `!roll 2d6 slashing+1d10 fire + 5 strength`; // this as a spaced plus, as well as a non spaced plus
// const comm7 = `!roll 2d6(slash)+1d10(fire)+ 5 str`;         //this now uses brackets, do we want to allow brackets? it also has a shortened STR modifier
// const comm8 = `roll 2d6 SLASHING + 1d10 FIRE + 5 STR`;      // this is all caps, do we want to allow all caps?



/**
 * 
 * @param {*} input 
 * @returns 
 */
export function parseRolls(command) {
  const input = command || `!roll 2d6 + 1d10 fire + 6d4 force ice + 5 strength + 2 magical ice`;

  const results = {
    rolls: [],
    mods: [],
  };

  // const regex = {
  //   roll: /([+-])?\s?([0-9]+)d([0-9]+)\s?([^+-]*)/g,
  //   mod:  /([+\-!](\S+)?)\s?(?:(?!\d+d\d+)[\w\s])+/g,
  // }
  const dieRegex = /([+-])?\s?([0-9]+)d([0-9]+)\s?([^+-]*)/g;
  const modRegex = /([+\-!](\S+)?)\s?(?:(?!\d+d\d+)[\w\s])+/g;

  let dieMatches = input.match(dieRegex);
  let modMatches = input.match(modRegex);

  for (let i = 0; i < dieMatches.length; i++) {
    dieMatches[i] = dieMatches[i].trim();
  }

  for (let i = 0; i < modMatches.length; i++) {
    modMatches[i] = modMatches[i].trim();
  }
  modMatches = modMatches.filter((match) => match.length > 1 && match[0] !== '!');
  
  console.log(dieMatches);
  console.log(modMatches);



  // add the die rolls to the results
  for (let i = 0; i < dieMatches.length; i++) {
    const match = dieMatches[i].match(/([+-])?\s?([0-9]+)d([0-9]+)\s?([^+-]*)/);
    results.rolls.push(new Roll(match[1], match[2], match[3], match[4].split(' ')));
  }


  console.log(results);

  // const text = '2d6 magical fire';
  // const reg = /([+-])?\s?([0-9]+)d([0-9]+)\s?([^+-]*)/;
  // let matches = [];
  // let match = text.match(reg);
  // console.log(match);


  // let roll = new Roll(match[1], match[2], match[3], match[4].split(' '));

  // console.log(roll);

}

parseRolls();

// const regex = [
//   { pattern: /(!\w+)/g, type: 'command' },
//   { pattern: /[+-]?([^+-]+)/g, type: 'catch-all' },
//   { pattern: /(?:\+ )?\d+d\d+(?=\s[+\-])/g, type: 'basic roll' }, // the /s may not be good
//   { pattern: /[+-]?\s?\w+\s?[^+-]/g, type: 'flat modifier' }, // check for the flats
//   { pattern: /[+-]?([^+-])/g, type: 'stat modifier' }, // check for the stats
// ];

// regex = {
//   command: /(!\w+)/g,
//   catchAll: /[+-]?([^+-]+)/g,
//   basicRoll: /(?:\+ )?\d+d\d+(?=\s[+\-])/g,
//   flatModifier: /[+-]?\s?\w+\s?[^+-]/g,
//   statModifier: /[+-]?([^+-])/g,
// }



// /**
//  * @param {*} command this will be a string, like '!roll 2d6+1d10+5' OR '!roll 2d6 1d10 5'
//  */
// export function roll(command) {
//   // add the rolls to an array?
//   // const rolls = {
//   //   rolls: [],
//   //   mods: [],
//   // }

//   // const results = '';

//   const input = command || `!roll 2d6 + 1d10 fire + 5 strength`;

//   const rolls = [];



//   // console.log(input.split(' ')[0].slice(1))
//   // const commandType = input.split(' ')[0].slice(1);

//   // const pattern= /(\S+)\s|([^+\-]+)|[+\-]\s*[^+\-]+/g;
//   // const pattern = /(\S+[^+-]*)|[-+](\s*\S+[^+-]*)|([^+-]*)/g;
//   // const pModifier = /[+-]/g;

//   // const pattern = {
//   //   command: /(!\w+)/g,
//   //   dieRoll: /(\d+d\d+)/g,
//   // }




//   regex.forEach(({ pattern, type }) => {
//     const matches = input.match(pattern);

//     if (matches) {
//       console.log(type, matches);

//       // if (type === 'basic roll') {
//       //   console.log(matches[0])
//       // }
//     }
//   })
// }





export function displayRollResults() {
  return `--- displaying roll results ---`;
}