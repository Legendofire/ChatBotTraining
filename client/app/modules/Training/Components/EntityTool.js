import React, { Component } from 'react';
import styled, { css } from 'styled-components';
// Loading Modules

export default class EntityTool extends Component {
    constructor(props) {
        super(props);

        this.state = {
            select: '',
            text: ''
        };

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.updateEntity = this.updateEntity.bind(this);
    }

    onSelectChange(e) {
        this.setState({ select: e.target.value });
    }

    onInputChange(e) {
        this.setState({ text: e.target.value });
    }

    updateEntity() {
        console.log(`${this.state.select} --- ${this.state.text}`);
        this.props.updateEntity(this.state.select, this.state.text);
    }

    render() {
        return (
            <Container>
                { this.props.isUpdating ? <Loader>Updating...</Loader> : null}
                <EntityInput onChange={this.onInputChange}/>
                <EntitySelection onChange={this.onSelectChange}>
                    <option value={null}> Select an Entity</option>
                    {
                        this.props.entities ?
                            this.props.entities.entities.map((entity) => (
                                entity.values.map((value, index) => {
                                    let optionValue = `${entity.entity} : ${value.value}`;
                                    return <option key={index} value={optionValue}> {optionValue} </option>;
                                })
                            )) :
                            <option value={null}> No Entities Detected</option>
                    }
                </EntitySelection>
                <EntitySelectionConfirmButton onClick={this.updateEntity} >Confirm Choice</EntitySelectionConfirmButton>
            </Container>
        );
    }
}

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const EntityInput = styled.input`
  height: 3rem;
  width: 89%;
  font-size: 2rem;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const EntitySelection = styled.select`
  height: 3rem;
  width: 90%;
  font-size: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const EntitySelectionConfirmButton = styled.button`
  border: none;
  height: 3rem;
  color: white;
  border-radius: 5px;
  width: 90%;
  background-color: #3D70B2;
`;
