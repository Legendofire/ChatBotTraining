import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Importing Chat Components
import ChatWindowView from './Containers/ChatWindowView';
import ChatInput from './Components/ChatInput';
// Importing Action Creators
import { SendMessage, UpdateMsg, UpdateFocusedSentence } from './chatActions';

class ChatLayout extends Component {
    // componentDidMount() {
    //     this.props.SendMessage('', this.props.Chat.chatContext);
    // }

    render() {
        return (
            <Container>
                <ChatWindowView chatLog={this.props.Chat.chatLog} height={88} updateFocusedSentence={this.props.UpdateFocusedSentence}/>
                <ChatInput
                    onSendClick={this.props.SendMessage}
                    msg={this.props.Chat.currentMsg}
                    context={this.props.Chat.chatContext}
                    onMsgUpdate={this.props.UpdateMsg}
                    choices={this.props.Chat.choices}
                />
            </Container>
        );
    }
}

//export default ChatLayout;

function mapStateToProps(state) {
    return {
        Chat: state.Chat
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        SendMessage: SendMessage,
        UpdateMsg: UpdateMsg,
        UpdateFocusedSentence: UpdateFocusedSentence
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatLayout);


const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
