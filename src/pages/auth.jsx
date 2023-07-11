import { Fragment } from "react";
import Sign from "../components/Sign";

export default function Auth() {
  return (
    <Fragment>
        <ul className="nav nav-pills mb-3 mt-5 justify-content-center" id="pills-tab" role="tablist" >
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Sign In</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sign Up</button>
            </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                <Sign type='signIn' />
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                <Sign type='signUp' />
            </div>
        </div>
    </Fragment>
  )
}