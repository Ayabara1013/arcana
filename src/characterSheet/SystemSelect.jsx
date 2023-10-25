import { Button } from 'react-bootstrap'
import { roll } from './dice roller/rolls';
import { notify } from './CharacterSheet';
import { getTypeIcon, iterateTypeIcons } from './dice roller/typeIcons';



export function SystemSelect(props) {
  const { page, setPage } = props;

  return (
    <div className={`system-select`}>
      <div>
        <Button variant="primary" onClick={() => setPage('dnd5e')}>
          DnD 5e
        </Button>
        <Button variant="primary" onClick={() => setPage('generic')}>
          generic sheet
        </Button>
      </div>

      <div>
        <div>test functions</div>

        <div>
          <Button variant="primary" onClick={() => {
            let result = roll(`!roll 2d6 + 1d10 fire + 6d4 force ice + 5 strength + 22 magical ice`);
            toastRolls(result);
          }}>
            make a test roll
          </Button>
        </div>
      </div>

      
    </div>
  )
}




function toastRolls(results) {

  let notifyAll = ''

  // toast the individuals
  for (const result of results.totals) {
    console.log(result)
    // notify(result, { icon: '🎲' })
    if (typeof result[1] === 'number') {
      // notifyAll += `+ ${result[0]} ${typeof result[1] === 'number' ? `(d${result[1]})` : '' } `;
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