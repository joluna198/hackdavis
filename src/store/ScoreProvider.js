import { useReducer } from 'react';
import ScoreContext from './score-context';

const defaultScoreState = {
	score: 0,	
};

const scoreReducer = (state, action) => {
	if (action.type === 'ADD') {
		let updatedScore = state.score + action.amount
		console.log("updating score from ", state.score, "to ", updatedScore)
		return {
			...state,
			score: updatedScore
		};
	}
	if (action.type === 'SUBTRACT') {
		let updatedScore = state.score - action.amount
		console.log("updating score from ", state.score, "to ", updatedScore)
		return {
			...state,
			score: updatedScore
		};
	}
	return defaultScoreState; // safety
};

const ScoreProvider = (props) => {
	const [scoreState, dispatchScoreAction] = useReducer(
		scoreReducer,
		defaultScoreState
	);

	const addToScoreHandler = (amount) => {
		dispatchScoreAction({ type: 'ADD', amount: amount });
	};

	const subtractFromScoreHandler = (amount) => {
		dispatchScoreAction({ type: 'SUBTRACT', amount: amount });
	};

	const scoreContext = {
		score: scoreState.score,
		addToScore: addToScoreHandler,
		subtractFromScore: subtractFromScoreHandler,
	};

	return (
		<ScoreContext.Provider value={scoreContext}>
			{props.children}
		</ScoreContext.Provider>
	);
};

export default ScoreProvider;