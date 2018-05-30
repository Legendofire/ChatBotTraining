import React, { Component } from 'react';
import styled from 'styled-components';
import scrollIntoView from 'scroll-into-view-if-needed';
// Loading Modules
import ChatItem from '../Components/ChatItem';

class ChatWindowView extends Component {
    componentDidMount() {
        const node = document.getElementById('last-chat-element');

        scrollIntoView(node, {
            scrollMode: 'if-needed',
            block: 'nearest',
            inline: 'nearest'
        });
    }

    componentDidUpdate() {
        const node = document.getElementById('last-chat-element');

        scrollIntoView(node, {
            scrollMode: 'if-needed',
            block: 'nearest',
            inline: 'nearest'
        });
    }

    render() {
        return (
            <Container height={this.props.height}>
                {this.props.chatLog.map((msg, index) => (
                    <ChatItem key={index} {...msg} updateSentence={() => this.props.updateFocusedSentence(msg)} />
                ))}
                <div id="last-chat-element" />
            </Container>
        );
    }
}

export default ChatWindowView;

const Container = styled.div`
    width: 95%;
    height: ${props => props.height}vh;
    padding: 10px;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
