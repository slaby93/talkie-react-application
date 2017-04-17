import React from 'react'
import bemClassName from 'bem-classname'
import ContactAvatar from './../../components/ContactAvatar'
import Icon from './../../components/Icon'
import addNewContactIcon from '../../resources/icons/addNewContact.svg'

class NewFriendContactListItem extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'NewFriendContactListItem')
    }

    render() {
        const {contact} = this.props;
        const {name, lastName} = contact;
        return (
            <div className={this.classname()}>
                <div className={this.classname('name__icon_wrapper')}>
                    <ContactAvatar/>
                    <span> {name}&nbsp;{lastName}</span>
                </div>
                <Icon className={this.classname('add_icon')} icon={addNewContactIcon}/>
            </div>
        )
    }
}
export default NewFriendContactListItem