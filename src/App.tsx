import { useReducer } from "react";
import "./App.css";

type State = {
	count: number;
};
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function App() {
	const initialState: State = { count: 0 };
	const reducer = (state: State, action: Action) => {
		switch (action.type) {
			case "increment":
				return { count: state.count + 1 };
			case "decrement":
				return { count: state.count - 1 };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<form>
			<h1>Learn useReducer</h1>
			<h2>Counter: {state.count}</h2>
			<button
				onClick={(e) => {
					e.preventDefault();
					dispatch({ type: "increment" });
				}}>
				Increment
			</button>
			<button
				onClick={(e) => {
					e.preventDefault();
					dispatch({ type: "decrement" });
				}}>
				Decrement
			</button>
		</form>
	);
}

export default App;
