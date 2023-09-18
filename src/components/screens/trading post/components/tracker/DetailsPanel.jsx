



export default function DetailsPanel(props) {
  const { activeReward } = props;
  return (
    <div className={`details__panel`}>
      <img src={activeReward.image} alt="" className='details__image mb-2' />
      
      <div className='details__data flex-grow-1'>
        <div className='data-text -name d-flex justify-content-between'>
          <div>{activeReward.name}</div>
          <div className='-price'>{activeReward.price}</div>
        </div>

        <div className='data-text -tags'>
          <span className="fw-800">Tags:</span> {activeReward.tags}
        </div>
        {/* <div className='data-text -price'>
          <span className="fw-800">Price:</span> {activeReward.price} tenders
        </div> */}
        {/* <div className='data__name'>{activeReward.price}</div> */}
        <div>last available: **FEATURE INCOMING!**</div>
      </div>
    </div>
  )
}