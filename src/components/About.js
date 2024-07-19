import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>About page loaded</h1>
            <UserClass name={'Athira Gopinath'} location={'Bengaluru'} contact={'test@gmail.com'}/>
        </div>
    )

}

export default About;