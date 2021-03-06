import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { detailCreator } from "../redux/actions/detailsActions";
import "./css/form.css";
import Preview from "./preview";

let PersonalData = () => {
	let details = useSelector((state) => state.details);

	let history = useHistory();

	let { fname, lname, email, phone, city, state } = details;

	let dispatch = useDispatch();

	return (
		<>
			<div className="personal-container">
				<div className="personal-form">
					<h1 className="m-4">Personal Details</h1>
					<div class="row m-3">
						{/* initially row & col have flex properties lagi hoti hain on them */}
						{/* React - Redux hone ke Qaran input ki value same hi rahegi, on state change */}
						<div class="col-5">
							<input
								value={fname}
								onChange={(e) => {
									dispatch(detailCreator({ fname: e.currentTarget.value }));
								}}
								type="text"
								class="form-control"
								placeholder="First name"
							/>
						</div>
						<div class="col-5">
							<input
								value={lname}
								onChange={(e) => {
									dispatch(detailCreator({ lname: e.currentTarget.value }));
								}}
								type="text"
								class="form-control"
								placeholder="Last name"
							/>
						</div>
						<div class="col-5">
							<input
								value={email}
								onChange={(e) => {
									dispatch(detailCreator({ email: e.currentTarget.value }));
								}}
								type="email"
								class="form-control"
								placeholder="Email"
							/>
						</div>
						<div class="col-5">
							<input
								value={phone}
								onChange={(e) => {
									dispatch(detailCreator({ phone: e.currentTarget.value }));
								}}
								type="number"
								class="form-control"
								placeholder="Phone"
							/>
						</div>
						<div class="col-5">
							<input
								value={city}
								onChange={(e) => {
									dispatch(detailCreator({ city: e.currentTarget.value }));
								}}
								type="text"
								class="form-control"
								placeholder="City"
							/>
						</div>
						<div class="col-5">
							<input
								value={state}
								onChange={(e) => {
									dispatch(detailCreator({ state: e.currentTarget.value }));
								}}
								type="text"
								class="form-control"
								placeholder="State"
							/>
						</div>
					</div>
					<button
						onClick={() => {
							history.push("/qualifications");
						}}
						className="btn btn-primary m-4"
					>
						Next
					</button>
				</div>
				<Preview />
			</div>
		</>
	);
};

export default PersonalData;
