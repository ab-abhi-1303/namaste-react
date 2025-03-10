import { useRouteError } from "react-router-dom";


const Error = () => {

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Error Page</h1>
            <p>Oops, An error occurred.</p>
        </div>
    )
}

export default Error;