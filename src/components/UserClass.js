import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            userInfo:{
                name:"Dummy",
                location:'Default',
                url:"https://dummyurl.com"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch(ABOUT_USER)
        const json = await data.json()
        this.setState({
            userInfo:{
                name:json.login,
                location:json.location,
                url:json.avatar_url
            }
        })
    }

    render(){
        const {name,location,url}=this.state.userInfo;
        return (
            <div className="user-card">
                <h4>Count:{this.state.count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment count</button>
                <div style={{marginTop:10,marginBottom:10}}>
                    <img src={url} alt={"test"} style={{borderRadius:50,height:100}}/>
                </div>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
            </div>
        )
    }
}

export default UserClass;