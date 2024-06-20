import { useRouteError } from "react-router-dom";

const Error = () => {
    let err = useRouteError()

    return(
        <div>
            <h1>{err?.status}:{err.statusText}</h1>
            <h4>{err?.data}</h4>
        </div>
    )
}

export default Error;