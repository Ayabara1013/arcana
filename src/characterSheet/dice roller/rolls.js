// import { parse } from 'yargs';



export class Results {
  constructor(sum, rolls, mods) {
    this.sum = 0;
    this.rolls = {
      d4: [],
      d6: [],
      d8: [],
      d10: [],
      d12: [],
      d20: [],
      d100: [],
    };
    this.mods = {};
  }
}

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
    this.operation = this.setOperation(operation); // operation is either 'add' or 'subtract'
    this.value = value ?? 0;      // value is the number of the modifier, like 2 or 5 
    this.type = type ?? null;     // type is either 'flat' or 'multiplier' // OR // type will be something like proficiency, fire, etc. // should this be a tags array?
    this.source = source ?? null; // source is the name of the modifier, like 'strength' or 'proficiency'
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

/**
 * @param {*} val 
 * @returns 
 */
export function rollDie(val) {
  let result = Math.floor(Math.random() * val) + 1;
  // console.log(`rolled ${result} on a d${val}`)
  return result;
}

/**
 * 
 * @param {*} input 
 * @returns 
 */
export function parseRolls(command) {
  const input = command || `!roll 2d6 + 1d10 fire + 6d4 force ice + 5 strength + 22 magical ice`;

  const results = {
    rolls: [],
    mods: [],
  };

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
  
  // console.log(dieMatches);
  // console.log(modMatches);

  // add the die rolls to the results
  for (let i = 0; i < dieMatches.length; i++) {
    const match = dieMatches[i].match(/([+-])?\s?([0-9]+)d([0-9]+)\s?([^+-]*)/);
    results.rolls.push(new Roll(match[1], match[2], match[3], match[4].split(' ')));
  }

  // add the modifiers to the results
  for (let i = 0; i < modMatches.length; i++) {
    const match = modMatches[i].match(/([+\-!](\S+)?)\s?(?:(?!\d+d\d+)[\w\s])+/);
    // console.log(match[0]);

    const operation = match[1][0];
    const value = match[0].slice(1).trim().match(/(\d+)/)[0];
    const type = match[0].replace(/[^\w\s]|[\d]/g, '').trim().split(' ');
    // const result = new Modifier(operation, value, type);

    // console.log(operation);
    // console.log(value);
    // console.log(type);

    results.mods.push(new Modifier(operation, value, type));
  }

  // console.log(results);

  return results;
}

// parseRolls();

export function roll(rolls) {
  const results = new Results();
  console.log(rolls);
  console.log(rolls.rolls);
  console.log(rolls.mods);

  if (rolls.rolls) {
    console.log('--- rolling dice ---');

    for (let i = 0; i < rolls.rolls.length; i++) {
      let rr = rolls.rolls[i];
      let string = `${rr.operation === 'add' ? '+' : rr.operation === 'subtract' ? '-' : ''} ${rr.quantity}d${rr.die} ${rr.type[0] !== '' ? `[ ${rr.type.join(', ')} ]` : `[ untyped ]`}`;
      console.log(string);
    }
  }

  if (rolls.mods) {
    console.log('--- applying modifiers ---');
    
  }
}

export function displayRollResults() {
  return `--- displaying roll results ---`;
}