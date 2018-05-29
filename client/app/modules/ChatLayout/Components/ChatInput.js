import React, { Component } from "react";
import styled from "styled-components";
// Loading Modules

export default class ChatInput extends Component {
    render() {
        return (
            <Container>
                {this.props.choices.length > 0 ? (
                    <BtnsContainer>
                        {this.props.choices.map((choice, index) => (
                            <StyledButton
                                key={index}
                                onClick={() => {
                                    console.log(choice);
                                    this.props.onMsgUpdate(choice);
                                    this.props.onSendClick(choice, this.props.context);
                                }}
                            >
                                {" "}
                                {choice}{" "}
                            </StyledButton>
                        ))}
                    </BtnsContainer>
                ) : (
                    <InputContainer>
                        <InputField
                            value={this.props.msg}
                            onKeyPress={e => {
                                if (e.charCode === 13) {
                                    this.props.onSendClick(this.props.msg, this.props.context);
                                }
                            }}
                            onChange={e => {
                                this.props.onMsgUpdate(e.target.value);
                            }}
                            autofocus
                        />
                        <SubmitButton
                            onClick={() => {
                                this.props.onSendClick(this.props.msg, this.props.context);
                            }}
                        >
                            {" "}
              Send{" "}
                        </SubmitButton>
                    </InputContainer>
                )}
            </Container>
        );
    }
}

const Container = styled.div`
  box-sizing: border-box;
  width: 97%;
  height: 4em;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
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
  font-size: 1.5em;
  border-radius: 10px;
  direction: rtl;
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

const BtnsContainer = styled.div`
  box-sizing: border-box;
  width: 97%;
  height: 100%;
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  position: relative;
  justify-content: space-evenly;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #ff8042;
  width: 20%;
  height: 2.5em;
  margin-left: 10px;
  font-size: 1.5rem;
  color: white;
`;
