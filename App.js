import React from "react";
import ReactDOM from "react-dom/client"

const Title=()=>(<h1 className="test">Hello World using JSX</h1>)
const HeadingComponent=()=>(
    <div>
        <Title/>
        <h1 className="test">Hello World using Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>)