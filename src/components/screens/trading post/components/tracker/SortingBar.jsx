import { Form } from 'react-bootstrap';



export default function SortingBar(props) {
  const { viewDetails, setViewDetails, viewTrackedCollected, setViewTrackedCollected } = props;
  return (
    <div className='sorting-bar d-flex justify-content-between'>
      <div>sorting things (coming soon!)</div>

      <div className='details__controls'>
      <Form.Check inline type="switch"
          // label="view item details"
          label="include collected items in Tracked view"
          id="view-tracked-collected-switch"
          defaultChecked={viewTrackedCollected}
          onClick={() => setViewTrackedCollected(!viewTrackedCollected)} />

        <Form.Check inline type="switch"
          // label="view item details"
          label="smaller detail panel & larger grid"
          id="view-item-details-switch"
          defaultChecked={viewDetails}
          onClick={() => setViewDetails(!viewDetails)} />
      </div>
    </div>
  )
}