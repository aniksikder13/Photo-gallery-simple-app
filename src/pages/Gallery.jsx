import ImageArea from "../components/ImagesArea"

export default function Gallery() {
  return (
  <div className="d-flex align-items-start mt-5 mb-5">
    <div className="nav flex-column nav-pills me-3 bg-white py-3 px-3 border" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <h5>Category</h5><hr />
      <button className="nav-link active text-left" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All</button>
      <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">City</button>
      <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Village</button>
      <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Beach</button>
    </div>
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
          <ImageArea category='all' />
      </div>
      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
          <ImageArea category='city' />
      </div>
      <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex="0">
         <ImageArea category='village' />
      </div>
      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
          <ImageArea category='beach' />
      </div>
    </div>
  </div>
  )
}
