import React, { Component } from 'react';
import styled from 'styled-components';
// Loading Modules
export default class EntityTool extends Component {
    constructor(props) {
        super(props);

        this.state = {
            select: ''
        };

        this.onSelectChange = this.onSelectChange.bind(this);
        this.updateIntent = this.updateIntent.bind(this);
    }

    onSelectChange(e) {
        this.setState({ select: e.target.value });
    }

    updateIntent() {
        this.props.updateIntent(this.state.select, this.props.sentenceInFocus);
    }

    render() {
        return (

            <Container>
                { this.props.isUpdating ? <Loader>Updating...</Loader> : null}
                <IntentSelection onChange={this.onSelectChange}>
                    <option value={null}> Select an Intent</option>
                    {
                        this.props.intents ?
                            this.props.intents.intents.map((intent, index) => (
                                <option key={index} value={intent.intent}> {intent.intent} </option>
                            )) :
                            <option value={null}> No Intents Detected</option>
                    }
                </IntentSelection>
                <IntentSelectionConfirmButton onClick={this.updateIntent}>Confirm Choice</IntentSelectionConfirmButton>
            </Container>
        );
    }
}
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Loader = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.7);
  text-align: center;
  padding-top: 100px;
`;

// const WordSelectionContainer = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   height: 33vh;
//   overflow-y: scroll;
//   padding: 10px;
//   font-size: 2rem;
//   display: flex;
//   flex-direction: row-reverse;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
// `;
//
// const WordSelectionButton = styled.button`
//   height: 3rem;
//   border: none;
//   background-color: #F1F1F1;
//   color: black;
//   font-size: 2rem;
//   border-radius: 5px;
//   margin: 10px 10px 10px 10px;
// `;

const IntentSelection = styled.select`
  height: 3rem;
  width: 90%;
  font-size: 1rem;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const IntentSelectionConfirmButton = styled.button`
  border: none;
  height: 3rem;
  color: white;
  border-radius: 5px;
  width: 90%;
  background-color: #3D70B2;
`;
