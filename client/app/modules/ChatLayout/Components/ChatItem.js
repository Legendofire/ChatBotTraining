import React from 'react';
import styled, { css } from 'styled-components';
// Loading Modules

export default (props) => (
    <Container isOwn= {props.isOwn}>
        <ImageContainer>
            <Image src={props.isOwn ? 'assets/img/businessman.png' : 'assets/img/manager.png'}/>
        </ImageContainer>
        <TextContainer isOwn= {props.isOwn}>
            {
                props.isOwn ?
                    <FocusOnSentenceButton onClick={props.updateSentence} > select </FocusOnSentenceButton> :
                    null
            }
            <Text>{props.text}</Text>
            {
                props.map ?
                    <MapContainer
                        width= "calc(100% + 40px)"
                        height= "calc(100% + 100px)"
                        frameBorder= "0"
                        src= "https://www.google.com/maps/embed/v1/place?key=AIzaSyBfczA9Q9CdmvDtmOuWBwRvpJ7uVfr3rYk&q=cib+atm"
                    /> :
                    null
            }
        </TextContainer>
    </Container>
);

const Container = styled.div`
    width: 60%;
    flex-shrink: 0;
    min-height: 100px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    margin-bottom: 15px;
    color: white;
    font-weight: 600;
    ${props => props.isOwn && css`
      align-self: flex-end;
      justify-content: space-between;
      flex-direction: row-reverse;
    `}
`;

const ImageContainer = styled.div`
    height: 80px;
    width: 80px;
`;

const Image = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`;

const TextContainer = styled.div`
    width: 100%;
    padding: 20px;
    margin-left: 20px;
    margin-right: 0px;
    box-sizing: border-box;
    font-size: 1.2rem;
    border-radius: 20px;
    position:relative;
    display: flex;
    direction: rtl;
    flex-direction: column;
    background-color: rgba(61,112,178);
    box-shadow: 2px 3px 5px rgba(0,0,0,0.3);
    ${props => props.isOwn && css`
      margin-left: 0px;
      margin-right: 20px;
    `}
`;

const Text = styled.p`
    margin: 0;
    padding: 0;
`;

const FocusOnSentenceButton = styled.button`
    position: absolute;
    top: 5px;
    left: 10px;
    border-radius: 5px;
    border: none;
    background-color: #212121;
    color: white;
`;

const MapContainer = styled.iframe`
    margin-top: 10px;
    border-radius: 10px;
`;
