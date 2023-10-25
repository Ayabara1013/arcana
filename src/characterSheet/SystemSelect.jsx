import { Button } from 'react-bootstrap'
import { roll } from './dice roller/rolls';
import { notify } from './CharacterSheet';
import { getTypeIcon, iterateTypeIcons } from './dice roller/typeIcons';
import { toastRolls } from './dice roller/toastRolls';



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




