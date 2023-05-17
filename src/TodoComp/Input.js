function Input(props){
    const {setInput} = props;

    const adjustInput = (e) => {
        
        setInput(e.target.value);
        
    }
    
    return (
        <input type="text" placeholder='type here' onChange={adjustInput}/>
    );
}

export default Input;
