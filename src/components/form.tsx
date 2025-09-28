import { useReducer } from "react";

type State = {
	name: string;
	submittedName: string;
};

type Action =
	| {
			type: "SET_NAME";
			payload: string;
	  }
	| { type: "SUBMIT" }
	| { type: "RESET" };

export const Form = () => {
	const reducer = (state: State, action: Action) => {
		switch (action.type) {
			case "SET_NAME":
				return { ...state, name: action.payload };
			case "SUBMIT":
				return { ...state, submittedName: state.name, name: "" };
			case "RESET":
				return { name: "", submittedName: "" };
			default:
				return state;
		}
	};

	const initialState = {
		name: "",
		submittedName: "",
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
			<button type='submit'>Submit</button>
			<p>User:{state.submittedName}</p>
		</form>
	);
};
