import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./css/home.css";
import { templateCreator } from "../redux/actions/templateActions";

let Home = () => {
	let user = useSelector((state) => state.user);
	let template = useSelector((state) => state.template);
	console.log(template);
	let dispatch = useDispatch();
	let history = useHistory();

	return (
		<>
			{user ? "" : <Redirect to="/login" />}

			<button
				className="btn-primary home-logout-btn"
				onClick={() => {
					auth.signOut();
				}}
			>
				Logout
			</button>
			<div className="template-container">
				<div
					onClick={(e) => {
						dispatch(templateCreator("A"));
						history.push("/personal");
					}}
					className="template"
				>
					{/* public folder se kuch access kar sakte using link,but hum src folder ke bahar kuch access access nhi kar sakte agr humne kiya toh error aaega */}
					<img src="http://localhost:3000/skin1.svg"></img>
				</div>
				<div
					onClick={(e) => {
						dispatch(templateCreator("B"));
						history.push("/personal");
					}}
					className="template"
				>
					<img src="http://localhost:3000/skin2.svg"></img>
				</div>
			</div>
		</>
	);
};

export default Home;
