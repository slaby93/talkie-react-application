import React from "react";
import bemClassName from "bem-classname";
import 'sweetalert/dist/sweetalert.css';

class Register extends React.PureComponent {
    constructor() {
        super();
        this.classname = bemClassName.bind(null, 'Register');
    }

    onRegister() {
        const {onRegisterAction} = this.props;
        const loginValue = this.refs.login.value;
        const passwordFirst = this.refs.passwordFirst.value;
        const passwordSecond = this.refs.passwordSecond.value;

        if (this.validatePassword(loginValue, passwordFirst, passwordSecond)) {
            onRegisterAction(loginValue, passwordFirst);
        }
    }

    validatePassword(loginValue, passwordFirst, passwordSecond) {
        if (loginValue === "" || passwordFirst === "" || passwordSecond === "") {
            const message = "Please provide required values:" + (loginValue === "" ? "\n- login" : "") + (passwordFirst === "" ? "\n- first password" : "") + (passwordSecond === "" ? "\n- second password" : "");
            swal({title: message, type: "warning", timer: 3000});
        }
        else if (passwordFirst !== passwordSecond) {
            swal({title: "Passwords are different.", type: "warning", timer: 2000});
        } else {
            return true;
        }
    }

    onAbort() {
        const {onAbortAction} = this.props;
        onAbortAction()
    }

    render() {
        return (

            <div className={this.classname("registerBox")}>
			<span tabIndex="4" className={this.classname("registerAccountText")}>
				Register new account:
			</span>
                <div className={this.classname("inputBundle")}>
                    <input
                        className={this.classname("email")}
                        placeholder="Login"
                        tabIndex="1"
                        required="required"
                        ref="login"
                        type='email'/>
                    <input
                        className={this.classname("password")}
                        tabIndex="2"
                        placeholder="Password"
                        required="required"
                        ref="passwordFirst"
                        type='password'/>
                    <input
                        className={this.classname("repeatPassword")}
                        tabIndex="2"
                        placeholder="Repeat password"
                        required="required"
                        ref="passwordSecond"
                        type='password'/>
                </div>
                <button
                    className={this.classname("registerButton")}
                    tabIndex="3"
                    onClick={::this.onRegister}>
                    <span>Register</span>
                </button>

                <button
                    className={this.classname("abortButton")}
                    tabIndex="3"
                    onClick={::this.onAbort}>
                    <span>Abort</span>
                </button>
            </div>
        )
    }
}

export default Register
