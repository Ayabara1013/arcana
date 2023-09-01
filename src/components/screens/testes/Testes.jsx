
import { Form } from 'react-bootstrap';
import './Testes.scss';
import { useState } from 'react';

export default function Testes(props) {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='d-flex flex-row vh-100 vw-100 box'>
      <Form>
        <Form.Check inline type="switch" label="Switch label" id="toggle-switch-id" onClick={() => setToggle(!toggle)}/>
      </Form>
      <div className='b1'>
        <div className={`b2 ${toggle ? '' : 'w-400'}`}>
          box 2
        </div>

        <div className='b3'>
          box 3
        </div>
      </div>
    </div>
  )
}