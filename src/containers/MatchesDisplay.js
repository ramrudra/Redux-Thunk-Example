import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Dimmer, Loader, Image, Segment ,Container, Header, List, Divider, Message } from 'semantic-ui-react'

class MatchesDisplay extends Component {

    singleMatch(match, i) {

        return (
            <Segment key={i}>

                <List divided relaxed>
                    <List.Item>
                       <strong>Match no: </strong> {match.match_number}
                    </List.Item>
                    <List.Item>
                        <strong>Away Team: </strong> {match.away_team.country}
                    </List.Item>
                    <List.Item>
                        <strong>Location: </strong> {match.location}
                    </List.Item>
                    <List.Item>
                        <strong>Date: </strong> {new Date(match.datetime).toDateString()}
                    </List.Item>
                    <List.Item>
                        <strong>Status: </strong> {match.status}
                    </List.Item>
                    <List.Item>
                        <strong>Winner: </strong> {match.winner}
                    </List.Item>

                </List>
            </Segment>
        );
    }

    render() {
        if(this.props.isLoading === true) {
            return (
                <Container text>
                    <Divider />
                    <Segment>
                        <Dimmer active inverted>
                            <Loader size='medium'>Loading</Loader>
                        </Dimmer>

                        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                </Container>

            );
        } else if (this.props.matches) {
            return (
                <Container text>
                    <Divider />
                    <Header as='h2'>Country: {this.props.matches[0].home_team.country} </Header>
                    <Header as='h3'>Matches: {this.props.matches.length}</Header>
                    {this.props.matches.map(this.singleMatch)}
                </Container>
            );
        } else if (!this.props.matches && this.props.error != null) {
            return(
                <Container text>
                    <Divider />
                    <Segment>
                        <Message negative>
                            <Message.Header>Please enter the correct FIFA country code</Message.Header>
                        </Message>
                    </Segment>
                </Container>
            );
        } else {
            return(
                <noscript />
            );
        }
    }
}

export default connect(state => ({
    matches: state.matches,
    isLoading: state.isLoading,
    error: state.error
}))(MatchesDisplay);