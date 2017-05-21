import React from 'react';
import ReactDOM from 'react-dom';
import logoIcon from './../../resources/icons/logo.svg'
import Icon from './../Icon';
import bemClassName from 'bem-classname'

class LoginHeader extends React.PureComponent {
    constructor() {
        super();
        this.classname = bemClassName.bind(null, 'LoginHeader')
    }

    render() {
        return (
            <div className={this.classname()}>
                <span>Talkie</span>
                <Icon className={this.classname('talkieLogo')} icon={logoIcon} />
            </div>
        );
    }
}
export default LoginHeader;