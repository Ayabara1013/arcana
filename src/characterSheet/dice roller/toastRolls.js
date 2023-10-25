import { notify } from '../CharacterSheet';
import { getTypeIcon, iterateTypeIcons } from './typeIcons';

export function toastRolls(results) {

  let notifyAll = ''

  // toast the individuals
  for (const result of results.totals) {
    console.log(result)
    // notify(result, { icon: '🎲' })
    if (typeof result[1] === 'number') {
      notifyAll += `+ ${result[0]} ${typeof result[1] === 'number' ? iterateTypeIcons(result[2]) : iterateTypeIcons[1]} `;
      notify(`${result[0]} (d${result[1]}) ${result[2].includes(false) ? getTypeIcon(null) : iterateTypeIcons(result[2])}`, { icon: '🎲' }); 
    }
    // do we go [#, #/'mod', [types]? or do we add an additional element at the start?
  }
  
  if (notifyAll[0] === '+') notifyAll = notifyAll.slice(2);
  notifyAll += ` = ${results.sum}`;

  console.log(notifyAll)

  notify(notifyAll, { icon: '🎲' })
}