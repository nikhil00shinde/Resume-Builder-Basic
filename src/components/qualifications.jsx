import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { detailCreator } from "../redux/actions/detailsActions";
import Preview from "./preview";
import "./css/form.css";
import { saveResume } from "../redux/actions/saveActions";

let Qualification = () => {
	let dispatch = useDispatch();
	let history = useHistory();

	let { degree, year, cgpa, college, isPublic } = useSelector(
		(state) => state.details
	);

	let details = useSelector((state) => state.details);
	let code = useSelector((state) => state.template);
	let { uid } = useSelector((state) => state.user);

	return (
		<>
			<div className="qual-container">
				<div className="qual-form">
					<h1 className="m-4">Personal Details</h1>
					<div class="row m-3">
						<div class="col-5">
							<input
								value={degree}
								onChange={(e) => {
									dispatch(detailCreator({ degree: e.currentTarget.value }));
								}}
								type="text"
								class="form-control"
								placeholder="Degree"
							/>
						</div>
						<div class="col-5">
							<input
								value={college}
								onChange={(e) => {
									dispatch(detailCreator({ college: e.currentTarget.value }));
								}}
								type="text"
								class="form-control"
								placeholder="College"
							/>
						</div>
						<div class="col-5">
							<input
								value={cgpa}
								onChange={(e) => {
									dispatch(detailCreator({ cgpa: e.currentTarget.value }));
								}}
								type="number"
								class="form-control"
								placeholder="CGPA"
							/>
						</div>
						<div class="col-5">
							<input
								cgpa={year}
								onChange={(e) => {
									dispatch(detailCreator({ year: e.currentTarget.value }));
								}}
								type="number"
								class="form-control"
								placeholder="Year of grad"
							/>
						</div>
						<div class="form-check m-4">
							<input
								class="form-check-input"
								type="checkbox"
								id="flexCheckDefault"
								checked={isPublic}
								onClick={(e) => {
									dispatch(
										detailCreator({ isPublic: e.currentTarget.checked })
									);
									// console.log(e.currentTarget.checked);
								}}
							/>
							<label class="form-check-label" for="flexCheckDefault">
								Make public
							</label>
						</div>
					</div>
					<button
						onClick={() => {
							history.push("/personal");
						}}
						className="btn btn-primary m-4"
					>
						Back
					</button>
				</div>
				<Preview />
			</div>
			<button className="btn btn-primary qual-gen">Generate link</button>
			<button
				onClick={() => {
					dispatch(saveResume(uid, details, code));
				}}
				className="btn btn-primary qual-save"
			>
				Save to Database
			</button>
		</>
	);
};

export default Qualification;
