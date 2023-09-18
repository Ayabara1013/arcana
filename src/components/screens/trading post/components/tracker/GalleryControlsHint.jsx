import GalleryAlert from './GalleryAlert'


export default function GalleryControlsHint (props) {
  return(
    <>
      <div className='layer-5 d-flex flex-column p-1 rounded mb-2'>
        <div className='d-flex flex-row justify-content-between'>
          <div>
            <span className='fw-900'>Click</span> to select,
            hold&nbsp;<span className='fw-900'>SHIFT</span> to mark as tracked,&nbsp;
            <span className='fw-900'>CRTL</span> to mark as collected!
          </div>
          <div style={{ fontSize: '50%' }}>(or just click the icons)</div>
        </div>
      
        {/* <div className='tracking-alert-text'>if there are issues with the tracked items not showing correctly, please just reload the page, im working on a fix!</div> */}
      </div>

      {/* <div className="tracking-alert alert alert-danger" role="alert">
        <div className='tracking-alert__text bs-protect'>
          if there are issues with the tracked items not showing correctly, please just reload the page, im working on a fix!
        </div>
      </div> */}

      <GalleryAlert variant={'danger'} >
        if there are issues with the tracked items not showing correctly, please just reload the page, im working on a fix!
      </GalleryAlert>

      {/* <GalleryAlert>
        if there is any issue, please let me know!
      </GalleryAlert> */}
    </>
  )
}