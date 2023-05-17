function MyButton(props){
    const {input,setInput,todoList,setTodoList} = props;
    const handleClick = () => {
        const id=todoList.length + 1;
        console.log(props);
        
        setTodoList((prev)=>[
            ...prev,
            { id : id,
              task:input
            },
        ]);
        setInput("");
    }
    return(
        <button onClick={handleClick}>Add</button>
    );
}

export default MyButton;