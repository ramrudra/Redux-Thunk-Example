import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Container, Header, Divider } from 'semantic-ui-react'

import fetchMatches from '../actions';

class CountrySearch extends Component {

    constructor(props) {
        super(props);
        this.state = { country: '' };
    }

    onCountryChange(e) {
        this.setState({ country: e.target.value });
    }

    getMatches(e) {
        e.preventDefault();
        this.props.fetchMatches(this.state.country);
    }

    render() {

        return (
            <Container text>
                <Divider />
                <Header as='h2'>Women's Worldcup</Header>
                <Form>
                    <Form.Input placeholder='FIFA Country Code' value={this.state.country}  onChange={this.onCountryChange.bind(this)} />
                    <Button onClick={this.getMatches.bind(this)} primary>Get Matches</Button>
                </Form>
            </Container>

        );
    }
}

export default connect( null, { fetchMatches })(CountrySearch);