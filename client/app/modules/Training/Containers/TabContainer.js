import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class TabContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        };
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(tab) {
        this.setState({ selectedTab: tab });
    }

    render() {
        return (
            <Container>
                <TabBar>
                    <TabBarButton selected={this.state.selectedTab === 0} onClick={() => { this.selectTab(0); }}>Training</TabBarButton>
                    <TabBarButton selected={this.state.selectedTab === 1} onClick={() => { this.selectTab(1); }}>Logs</TabBarButton>
                </TabBar>
                <TabPanelContainer>
                    {
                        React.Children.map(this.props.children, (child, index) => {
                            return (this.state.selectedTab === index ? child : null);
                        })
                    }
                </TabPanelContainer>
            </Container>
        );
    }
}

const Container = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 12fr;
    width: 100%;
    height: 100%;
`;

const TabBar = styled.div`
    box-sizing: border-box;
`;

const TabBarButton = styled.button`
    border: none;
    width: 50%;
    height: 100%;
    color: #212121;
    background: #f1f1f1;
    font-size: 1em;
    border-right: solid 1px #212121;
    &:hover {
        background: #212121;
        color: #f1f1f1;
    }
    ${props => props.selected && css`
        background: #212121;
        color: #f1f1f1;
    `}
`;

const TabPanelContainer = styled.div`
      box-sizing: border-box;
`;

export const TabPanel = styled.div`
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      padding: 5px;
`;
