function Clear(props){
    const {setTodoList} = props;
    const clearAll = ()=>{
        setTodoList([]);
    }
    return(
        <button onClick={clearAll}>clear</button>
    );
}

export default Clear;