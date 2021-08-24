import React from "react";
import AuthList from "../../components/auth";

const HomePage = props => {
    return (
        <AuthList history={props.history}/>
    )
}

export default HomePage;