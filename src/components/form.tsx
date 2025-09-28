import { useReducer } from "react";

type State = {
	name: string;
	phone: string;
	submittedDetails: {
		name: string;
		phone: string;
	};
};

type Action =
	| {
			type: "SET_NAME";
			payload: string;
	  }
	| { type: "SET_PHONE"; payload: string }
	| { type: "SUBMIT" }
	| { type: "RESET" };

export const Form = () => {
	const reducer = (state: State, action: Action) => {
		switch (action.type) {
			case "SET_NAME":
				return { ...state, name: action.payload };
			case "SET_PHONE":
				return { ...state, phone: action.payload };
			case "SUBMIT":
				return {
					...state,
					submittedDetails: {
						name: state.name,
						phone: state.phone,
					},
					name: "",
					phone: "",
				};
			case "RESET":
				return {
					name: "",
					phone: "",
					submittedDetails: { name: "", phone: "" },
				};
			default:
				return state;
		}
	};

	const initialState = {
		name: "",
		phone: "",
		submittedDetails: {
			name: "",
			phone: "",
		},
	};

	const [state, dispatcher] = useReducer(reducer, initialState);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatcher({ type: "SUBMIT" });
			}}>
			<label
				style={{ display: "block" }}
				htmlFor='name'>
				Name
			</label>
			<input
				id='name'
				value={state.name}
				onChange={(e) => {
					dispatcher({ type: "SET_NAME", payload: e.target.value });
				}}
			/>
			<label
				style={{ display: "block" }}
				htmlFor='phone'>
				Phone
			</label>
			<input
				id='phone'
				type='text'
				value={state.phone}
				onChange={(e) => {
					dispatcher({ type: "SET_PHONE", payload: e.target.value });
				}}
			/>
			<button type='submit'>Submit</button>
			<p>
				User:{state.submittedDetails.name} Ph: {state.submittedDetails.phone}
			</p>
		</form>
	);
};
