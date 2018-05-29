import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Loading Modules
import SentenceClassification from './Components/InitialClassification';
import EntityClassificationTool from './Components/EntityTool';
import IntentClassificationTool from './Components/IntentsTool';
// Loading Actions
import { updateIntents, updateEntities } from '../ChatLayout/chatActions';

class ChartContainer extends React.Component {
    render() {
        return (
            <Container>
                <Header> CIB ChatBot Training </Header>
                <SentenceClass> <SentenceClassification sentenceInFocus={this.props.Chat.sentenceInFocus} /> </SentenceClass>
                <AdditionalClassInfo> <IntentClassificationTool sentenceInFocus={this.props.Chat.sentenceInFocus} isUpdating={this.props.Chat.intentUpdating} intents={this.props.Chat.intents} updateIntent={this.props.updateIntents}/> </AdditionalClassInfo>
                <AdditionalClassInfo> <EntityClassificationTool sentenceInFocus={this.props.Chat.sentenceInFocus} isUpdating={this.props.Chat.entityUpdating} entities={this.props.Chat.entities} updateEntity={this.props.updateEntities}/> </AdditionalClassInfo>
            </Container>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateIntents: updateIntents,
        updateEntities: updateEntities
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        Chat: state.Chat
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(ChartContainer);

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    color: white;
    font-size: 2rem;
`;

const Header = styled.div`
    font-size: 3rem;
    margin-bottom: 10px;
`;

const SentenceClass = styled.div`
    height: 20vh;
    margin-bottom: 10px;
`;

const AdditionalClassInfo = styled.div`
    height: 30vh;
    font-size: 1.5rem;
    margin-bottom: 10px;
`;
