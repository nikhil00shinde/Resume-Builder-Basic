let initialState = {
	fname: "",
	lname: "",
	email: "",
	phone: "",
	state: "",
	city: "",
	degree: "",
	college: "",
	cgpa: "",
	year: "",
};

let detailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_DETAILS":
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

export default detailsReducer;
