function MyOutput(props){
    const {todoList} = props;
    return(
    <ul>
        {
            todoList.map((todo) =>{ 
                return(
                    <li key={todo.id}>{todo.task}</li>
                );
            })
        }
    </ul>
    );
}

export default MyOutput;