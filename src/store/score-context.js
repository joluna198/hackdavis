import React from 'react';

const ScoreContext = React.createContext({
	score: 0, 
	addToScore: (amount) => {},
	subtractFromScore: (amount) => {}
});

export default ScoreContext;