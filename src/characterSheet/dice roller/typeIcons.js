


export function getTypeIcon(type) {
  switch (type) {
    case 'advantage':
      return '🔼';
    case 'disadvantage':
      return '🔽';
    case 'fire':
      return '🔥';
    case 'cold', 'ice':
      return '❄️';
    case 'lightning':
      return '⚡';
    case 'poison':
      return '☠️';
    case 'acid':
      return '🧪';
    case 'psychic':
      return '🧠';
    case 'thunder':
      return '🌩️';
    case 'radiant':
      return '☀️';
    case 'necrotic':
      return '💀';
    case 'force':
      return '🌀';
    case 'bludgeoning':
      return '🔨';
    case 'slashing':
      return '🗡️';
    case 'piercing':
      return '🏹';
    case 'magical':
      return '✨';
    case 'physical':
      return '💪';
    case 'strength':
      return '💪';
    case 'dexterity':
      return '🤸';
    case 'constitution':
      return '🧬';
    case 'intelligence':
      return '🧠';
    case 'wisdom':
      return '🧙';
    case 'charisma':
      return '🗣️';
    case 'hit':
      return '❤️';
    case 'healing':
      return '❤️';
    case 'temp':
      return '❤️';
    case 'damage':
      return '💔';
    case 'spell':
      return '🔮';
    case 'attack':
      return '⚔️';
    case 'initiative':
      return '🎲';
    case 'death':
      return '💀';
    case 'deathsave':
      return '💀'; 
    case 'deathfail':
      return '💀';
    case 'deathsucceed':
      return '😌';
    default:
      return '🎲';// question mark emoji ?
  }
}

export function iterateTypeIcons(types) {
  let icons = '';
  for (const type of types) {
    icons += getTypeIcon(type);
  }
  return icons;
}