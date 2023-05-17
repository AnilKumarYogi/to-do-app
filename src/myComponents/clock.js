import React, { useState } from "react";
function Clock(){
    const [time, setTime] = useState(new Date().toString());
    // console.log(time); 
    function showDate(){
        console.log(new Date().toString());
        setTime(new Date().toString());
        // return <h1>{new Date().toString()}</h1>;
    }

    setInterval(showDate,1000);
    return <h1>{time}</h1>;
}

export default Clock;