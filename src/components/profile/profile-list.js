import React from "react";
import {connect} from "react-redux";
import classes from "./profile-list.module.css";

const ProfileList = ({login, isAuthenticated}) => {
    return (
        <div className={classes.container}>
            {isAuthenticated
                ? <h1>{login}</h1>
                : <h1>Not logged in</h1>
            }
        </div>
    )
}

const mapStateToProps = ({user, isAuthenticated}) => {
    return {
        login: user.login,
        isAuthenticated
    }
}

export default connect(mapStateToProps)(ProfileList);