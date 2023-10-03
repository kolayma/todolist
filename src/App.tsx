import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";


function App() {

    let task1: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}

    ]

    let task2: Array<TaskType> = [
        {id: 1, title: "Terminator", isDone: false},
        {id: 2, title: "XXX", isDone: false}

    ]

    return (
        <div className="App">
            <TodoList title="What to learn?" tasks={task1}/>
            <TodoList title="Movies" tasks={task2}/>
            {/*<TodoList title="Songs"/>*/}
        </div>
    );
}

export default App;

