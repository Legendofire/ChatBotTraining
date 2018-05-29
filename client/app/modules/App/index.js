import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Loading Modules
import ChatLayout from '../ChatLayout';
import Training from '../Training';
import DevTools from '../DevTools';

import { getIntents, getEntities } from '../ChatLayout/chatActions';

class App extends React.Component {
    componentDidMount() {
        this.props.getIntents();
        this.props.getEntities();
    }
    render() {
        return (
            <Container>
                {
                    <DevTools />
                }
                <TrainingContainer>
                    <Training intents={this.props.Chat.intents} entities={this.props.Chat.entities}/>
                </TrainingContainer>
                <ChatContainer>
                    <ChatLayout />
                </ChatContainer>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        Chat: state.Chat
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getIntents: getIntents,
        getEntities: getEntities
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: "IBM Plex Sans";
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`;

const ChatContainer = styled.div`
    display: inline-block;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: #F1F1F1;
`;

const TrainingContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #212121;
`;
