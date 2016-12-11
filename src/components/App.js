import React, { Component } from 'react';
import CountrySearch from '../containers/CountrySearch';
import MatchesDisplay from '../containers/MatchesDisplay';

export default class App extends Component {
  render() {
    return (
        <div>
          <CountrySearch />
          <MatchesDisplay />
        </div>
    );
  }
}
