import { Button } from 'react-bootstrap'




export function SystemSelect(props) {
  const { page, setPage } = props;

  return (
    <div className={`system-select`}>
      <Button variant="primary" onClick={() => setPage('dnd5e')}>
        DnD 5e
      </Button>

      <Button variant="primary" onClick={() => setPage('generic')}>
        generic sheet
      </Button>
    </div>
  )
}