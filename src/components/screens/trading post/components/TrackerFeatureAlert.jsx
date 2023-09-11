


export default function TrackerFeatureAlert(props) {
  return (
    // <div class="alert__new-feature alert alert-info alert-dismissible fade show" role="alert">
    //   {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    //   <span className="fw-bold">{`<<fa-exclamation mark here>>`}</span>{props.children}
    //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    // </div>
    <div class="alert__new-feature alert alert-info" role="alert">
      <span className="fw-bold">{`<<fa-exclamation mark here>>`}&nbsp;</span>{props.children}
    </div>
  )
}