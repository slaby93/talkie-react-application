import React from 'react'
import bemClassName from 'bem-classname'
import { Link } from 'react-router'
import Icon from './../Icon';
import logoIcon from './../../resources/icons/logo.svg';
import LoginHeader from './../LoginHeader';

class Login extends React.PureComponent {
    constructor() {
        super();
        this.classname = bemClassName.bind(null, 'Login')
        this.onLogin = ::this.onLogin;
    }

    onLogin() {
        const { login } = this.props;
        const loginValue = this.refs.login.value;
        const passwordValue = this.refs.password.value;
        login(loginValue, passwordValue)
    }

    render() {

        return (
            <div className={this.classname()}>
                 <LoginHeader />
                <div className={this.classname("loginBox")}>
                    <div className={this.classname("inputBundle")}>
                        <input
                            className={this.classname("email")}
                            placeholder="Login"
                            tabIndex="1"
                            ref="login"
                            type='email' />
                        <input
                            className={this.classname("password")}
                            tabIndex="2"
                            placeholder="Password"
                            ref="password"
                            type='password' />
                    </div>
                    <button
                        className={this.classname("loginButton")}
                        tabIndex="3"
                        onClick={this.onLogin}>

                        <span>Log In</span>
                    </button>
                    <Link to='/register'>
                        <span tabIndex="4" className={this.classname("registerText")}
                        >Don't have account? Register one now!</span>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Login
