import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/athiragopinath1195")
        const json = data.json()
        console.log(json)
    }

    render(){
        const {name,location,contact}=this.props;
        return (
            <div className="user-card">
                <h4>Count:{this.state.count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment count</button>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:{contact}</h4>
            </div>
        )
    }
}

export default UserClass;