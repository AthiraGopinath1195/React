import { useState } from "react";

const User = ({name,contact,location}) =>{
    const [count,setCount]=useState(0);

    return (
        <div className="user-card">
            <h4>Count:{count}</h4>
            <h2>Name:{name}</h2>
            <h3>Location: {contact}</h3>
            <h4>Contact: {location}</h4>
        </div>
    )
}

export default User;