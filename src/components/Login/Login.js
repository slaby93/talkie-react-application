import React from 'react'
import bemClassName from 'bem-classname'
import {Link} from 'react-router'

class Login extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'Login')
    }

    render() {
        return (
            <div className={this.classname()}>
                <input type='email'/>
                <input type='password'/>
                <button>Login</button>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        )
    }
}
export default Login
