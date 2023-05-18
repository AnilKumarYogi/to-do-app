import Delete from "./Delete";
function MyOutput(props){
    const {todoList,setTodoList} = props;
    return(
    <ul>
        {
            todoList.map((todo) =>{ 
                return(
                    <div>
                    <li key={todo.id}>{todo.task}
                    <Delete setTodoList={setTodoList} id={todo.id}/>
                    </li>
                    </div>
                );
            })
        }
    </ul>
    );
}

export default MyOutput;