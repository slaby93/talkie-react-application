import React from 'react'
import Chat from './../../components/Chat'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import * as ChatReducer from './../../ducks/chat'
import _ from 'lodash'

class ChatWrapper extends React.PureComponent {

    componentDidMount() {
        const {onChatStart} = this.props
        onChatStart()
    }

    render() {
        const {onChatExit, contactInfo, sendMessage, messages} = this.props

        return (
            <Chat
                onChatExit={onChatExit}
                contactInfo={contactInfo}
                sendMessage={sendMessage}
                messages={messages}
            />
        )
    }
}
function mapStateToProps(state, props) {
    const {userId} = props.params

    return {
        contactInfo: state.contacts.list.find(item => item.id == userId),
        messages: _.get(state, `chat[${userId}].messages`, [])
    }
}
function mapDistpachToProps(dispatch, props) {
    const chatWith = _.get(props, 'routeParams.userId');

    return {

        onChatStart(){
            dispatch(ChatReducer.START_CHAT({
                with: chatWith
            }));
        },

        onChatExit: () => {
            dispatch(push(`/dashboard`))
        },
        sendMessage: (body, timestamp) => {
            dispatch(ChatReducer.MESSAGE_SEND({
                to: chatWith,
                body,
                timestamp
            }));
        }
    }
}
export default connect(mapStateToProps, mapDistpachToProps)(ChatWrapper)