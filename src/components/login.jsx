import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";

let Login = () => {
	let history = useHistory();
	let user = useSelector((state) => state.user);
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	return (
		<>
			{user ? <Redirect to="/home" /> : ""}
			<div className="row">
				<div className="col-4 offset-4">
					<h1 className="mt-4 mb-4">Login</h1>
					<form>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input
								value={email}
								onChange={(e) => {
									setEmail(e.currentTarget.value);
								}}
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								value={password}
								onChange={(e) => {
									setPassword(e.currentTarget.value);
								}}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>

						<button
							onClick={(e) => {
								e.preventDefault();
								auth.signInWithEmailAndPassword(email, password);
							}}
							type="submit"
							className="btn btn-primary"
						>
							Login
						</button>
						<br />
						<br />
						<button
							onClick={() => {
								history.push("/signup");
							}}
							type="submit"
							className="btn btn-primary"
						>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
