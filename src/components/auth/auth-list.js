import React, { useState, useEffect } from "react";
import {login} from "../../actions";
import {connect} from "react-redux";
import classes from "./auth-list.module.css";

const AuthList = ({user, isAuthenticated, onLogin, history}) => {
    const [data, setData] = useState({
        login: '',
        password: ''
    });

    const [style, setStyle] = useState({
        type: true
    });

    const {login, password} = data;

    useEffect(() => {
        if(login===user.login && password===user.password){
            setStyle({type: false});
        } else {
            setStyle({type: true});
        }

        if(isAuthenticated) {
            history.push('/profile');
        }
        // eslint-disable-next-line
    }, [login, password, isAuthenticated]);



    const onChange = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
    };

    return (
        <div className={classes.container}>
            <form onSubmit={onSubmit} className={classes.item__body}>
                <input
                    className={classes.item__input}
                    type="text" name="login"
                    value={login} onChange={onChange}
                    placeholder="Введите логин"
                    autoComplete="off"
                />
                <input
                    className={classes.item__input}
                    type="password" name="password"
                    value={password} onChange={onChange}
                    placeholder="Введите пароль"
                    autoComplete="off"
                />
                <button
                    className={classes.item__btn}
                    onClick={onLogin}
                    disabled={style.type}
                >
                    Войти
                </button>
            </form>
        </div>
    )
};



const mapStateToProps = ({user, isAuthenticated}) => {
    return {
        user,
        isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch(login())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthList);