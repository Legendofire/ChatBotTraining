import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ChatWindowView from '../../ChatLayout/Containers/ChatWindowView';

export default class ChatLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatLog: [],
            contextID: 'a14aa746-8668-4633-94a3-07617ac2cda1'
        };
        this.getLogForContextID = this.getLogForContextID.bind(this);
    }

    updateContextID(e) {
        this.setState({ contextID: e.target.value });
    }

    getLogForContextID() {
        axios.post('/getLogs', {
            conversation_id: this.state.contextID
        }).then((response) => {
            this.setState({ chatLog: response.data });
        }).catch((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <Container>
                <SearchBar>
                    <InputField value={this.state.contextID} onChange={(e) => { this.updateContextID(e); }}/>
                    <SubmitButton onClick={() => { this.getLogForContextID(); }}> Search </SubmitButton>
                </SearchBar>
                <ChatArea>
                    <ChatWindowView height={71} chatLog={this.state.chatLog}/>
                </ChatArea>
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const SearchBar = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  position: relative;
`;

const InputField = styled.input`
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
    width: 80%;
    height: 2.5rem;
    padding: 10px;
    font-size: 1em;
    border-radius: 10px;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #3d70b2;
  width: 20%;
  margin-left: 10px;
  font-size: 1.5rem;
  color: white;
`;

const ChatArea = styled.div`
    margin-top: 10px;
    width: 100%;
`;
