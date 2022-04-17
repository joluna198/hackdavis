import logo from './logo.svg';
import './App.css';
import {tasks} from './FireBase/userdata'
import {useState} from "react";

function App() {
    const [score, updateScore] = useState(0);

    const addScore = (x) => {
        updateScore((prevScore) => prevScore + x);
    }
    const removeScore = (x) => {
        updateScore((prevScore) => prevScore - x);
    }

    const board = (layer1) => {
        return (
            <div className='task-board'>
                {/*The first layer of the data*/}
                <h1>{layer1.title}</h1>
                {/*Second layer*/}
                {layer1.data.map((layer2) => (
                    <div>
                        <h2>{layer2.title}</h2>
                        {/* Third Layer*/}
                        {layer2.data.map((layer3) => (
                            <div>
                                <p>{layer3.title}</p>
                                <p>{layer3.score}</p>
                            </div>
                        ))}
                    </div>

                ))}
            </div>
        )
    }

    /// This function is for destructoring the data
    const boardElements = () => {
        return (
            <div className='task-board-container'>
                {tasks.map((layer1) => (
                    board(layer1)
                ))}
            </div>
        )
    }


    return (
        <div className='app-wrapper'>
            <div>COOL HOME CHECKLISTS</div>
            <div className='score-wrapper'>
                <div className='score'>{score}</div>
                <span>pts</span>
            </div>

            {boardElements()}

        </div>
    );
}

export default App;
