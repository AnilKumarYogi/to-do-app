function Delete(props){
    const {setTodoList,id} = props;
    const handleDelete = (index) => {
        setTodoList((prev)=>
            prev.filter((todo)=>todo.id!==index)
        );
    }

    return (
        <button onClick={()=>handleDelete(id)}>delete</button>
    );

}

export default Delete;