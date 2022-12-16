import React from "react";

const Todo = props => {
    function renderTodo(){
        return props.todo.value
    }

    return(
        <div>
            <td className="text-center">
                props.index
            </td>
            <td>
                {renderTodo}
            </td>
        </div>
    )
}

export default Todo;