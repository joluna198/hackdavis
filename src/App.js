import logo from './logo.svg';
import './App.css';
import {tasks} from './FireBase/userdata' // EDIT: rename to CheckListDataFull?!
import {useState} from "react";
import Example from "./navBar"
import CheckList from "./CheckList";

function App() {
    const [score, updateScore] = useState(0);

    const addScore = (x) => {
        updateScore((prevScore) => prevScore + x);
    }

    const removeScore = (x) => {
        updateScore((prevScore) => prevScore - x);
    }
    console.log(score);

    /// This function is for destructoring the data
    const boardElements = () => {
        return (
            <div className='task-board-container'>
                {tasks.map((CheckListData) => (
                    // board(CheckListData)
                    <CheckList taskData={CheckListData} onAdd={addScore} onRemove={removeScore}/>
                ))}
            </div>
        )
    }

    return (
        <Example dashboard={boardElements()}/>
    );
}

export default App;



// DEPRECIATED
// const board = (layer1) => {
//     return (
//         <div className='task-board'>
//             {/*The first layer of the data*/}
//             <h1>{layer1.title}</h1>
//             {/*Second layer*/}
//             {layer1.data.map((layer2) => (
//                 <div>
//                     <h2>{layer2.title}</h2>
//                     {/* Third Layer*/}
//                     {layer2.data.map((layer3) => (
//                         <div>
//                             <p>{layer3.title}</p>
//                             <p>{layer3.score}</p>
//                         </div>
//                     ))}
//                 </div>

//             ))}
//         </div>
//     )
// }