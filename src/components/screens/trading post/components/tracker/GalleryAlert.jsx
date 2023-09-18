import { Alert } from 'react-bootstrap';



export default function GalleryAlert(props) {
  const { variant = 'info'} = props;

  return (
    <Alert variant={variant}className='w-100'>
    {props.children}
    </Alert>  
  )
}