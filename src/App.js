import logo from './logo.svg';
import './App.css';
import {tasks, task_color} from './FireBase/userdata' // EDIT: rename to CheckListDataFull?!
import Example from "./navBar"
import CheckList from "./CheckList";
import {useState} from "react";

function App() {
    console.log(window.location.href)

    const boardElements = () => {
        return (
            <div className='task-board-container'>
                {tasks.map((CheckListData) => (
                    <CheckList key={Math.random()} mainListData={CheckListData} color={task_color}/>
                ))}
            </div>
        )
    }

    return (
        
        <Example dashboard={boardElements()}/>
    );
}

export default App;


