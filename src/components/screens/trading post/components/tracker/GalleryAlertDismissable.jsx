import { useState } from 'react';
import { Alert } from 'react-bootstrap';



export default function GalleryAlertDismissable(props) {
  const { variant = 'info' } = props;
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <Alert variant={variant} dismissable onClose={handleCloseAlert} className='w-100'>
    {props.children}
  </Alert>  
  )
}
