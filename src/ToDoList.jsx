import React from 'react';

const ToDoList = (props) => {

    return (
    <>
    <div className = 'todo_style'>
     <i class = "fa fa-times" aria-hidden = "true" 
     onClick = {() => {
         props.onSelect(props.id);
     }} />
     <li>{props.Text}</li>
     </div>
    </>
    );
};

export default ToDoList;