import logo from './logo.svg';
import './App.css';
import tasks from './FireBase/userdata'
import {useState} from "react";

function App() {
    const [score, updateScore] = useState(0);

    const addScore = (x) => {
        updateScore((prevScore) => prevScore + x);
    }
    const removeScore = (x) => {
        updateScore((prevScore) => prevScore - x);
    }

    const boardElements = () => {
        let elements = []
        for (let i = 0; i < 4; i++) {
            elements.push(
                <div className='task-board' key={i}>
                task board
            </div>)
        }

        return elements
    }


    return (
        <div className='app-wrapper'>
            <div>COOL HOME CHECKLISTS</div>
            <div className='score-wrapper'>
                <div className='score'>{score}</div><span>pts</span>
            </div>

            <div className='task-board-container'>
                {boardElements()}
            </div>
        </div>
    );
}

export default App;
