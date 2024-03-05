import {memo} from "react";

const Todo = ({ id, title, completed, deleteTodoHandler, changeTodoHandler }) => {
    return <div className='single-todo' key={id}>
        <span>{`${id}.`}</span>
        <span>{title}</span>
        <div className={`${completed ? 'completed' : 'not-completed'}`}>{completed ? 'completed' : 'not completed'}</div>
        <button onClick={() => deleteTodoHandler(id)}>delete</button>
        <button onClick={() => changeTodoHandler(id)}>change status</button>
    </div>
}

export default memo(Todo)
