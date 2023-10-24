
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
  constructor(quantity, die, type) {
    this.quantity = quantity ?? 0;
    this.die = die ?? 0;
    this.type = type ?? null;
  }
}

export class Modifier {
  constructor(value, source, type) {
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




export function ParseCommand(Command) {

}




// example rolls

const comm1 = '!roll 2d6+1d10+5';
const comm2 = `!roll 2d6 1d10 5`;
const comm3 = `!roll 2d6 + slashing 1d10 fire + 5 strength`;
const comm4 = `!roll 2d6 slashing 1d10 fire 5 strength`;
const comm5 = `!roll 2d6 slashing+1d10 fire+5 strength`; // this as a spaced plus, as well as a non spaced plus
const comm6 = `!roll 2d6 slashing+1d10 fire + 5 strength`; // this as a spaced plus, as well as a non spaced plus
const comm7 = `!roll 2d6(slash)+1d10(fire)+ 5 str`;         //this now uses brackets, do we want to allow brackets? it also has a shortened STR modifier
const comm8 = `roll 2d6 SLASHING + 1d10 FIRE + 5 STR`;      // this is all caps, do we want to allow all caps?

export function parseRolls(input) {
  input = `!roll 2d6 +1d10 +5`;
  const rolls = [];


  /**
   * // for comm1 : 
   * 1. remove the command, leaving only the rolls
   * 2. split the rolls into an array, splitting on the + sign?
   */

  input = input.split(' ').slice(1); // this removes the command, leaving only the rolls
  console.log(input);
  // rolls.push(input.split('+')); // this adds the rolls to an array

  return rolls;
}

const regex = [
  { pattern: /(!\w+)/g, type: 'command' },
  { pattern: /(?:\+ )?\d+d\d+(?=\s[+\-])/g, type: 'basic roll' }, // the /s may not be good
  // { pattern: /(?:\+ )?\d+d\d+/g, type: 'basic roll' }, // the /s may not be good
];


/**
 * @param {*} command this will be a string, like '!roll 2d6+1d10+5' OR '!roll 2d6 1d10 5'
 */
export function roll(command) {
  // add the rolls to an array?
  // const rolls = {
  //   rolls: [],
  //   mods: [],
  // }

  // const results = '';

  const input = command || `!roll 2d6 + 1d10 fire + 5 strength`;

  // console.log(input.split(' ')[0].slice(1))
  // const commandType = input.split(' ')[0].slice(1);

  // const pattern= /(\S+)\s|([^+\-]+)|[+\-]\s*[^+\-]+/g;
  // const pattern = /(\S+[^+-]*)|[-+](\s*\S+[^+-]*)|([^+-]*)/g;
  // const pModifier = /[+-]/g;

  // const pattern = {
  //   command: /(!\w+)/g,
  //   dieRoll: /(\d+d\d+)/g,
  // }



  regex.forEach(({ pattern, type }) => {
    const matches = input.match(pattern);

    if (matches) {
      console.log(type, matches);

      // if (type === 'basic roll') {
      //   console.log(matches[0])
      // }
    }
  })
}





export function displayRollResults() {
  return `--- displaying roll results ---`;
}