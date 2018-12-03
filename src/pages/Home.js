import React, { Component } from 'react';

import { Row} from 'react-materialize'
import HomeHeader from '../components/HomeHeader'
import HomeContent from '../components/HomeContent'
import HomeFooter from '../components/HomeFooter'

export default class Home extends Component {
  render() {
    return (
      <Row>
        <HomeHeader></HomeHeader>
        <HomeContent></HomeContent>
        <HomeFooter></HomeFooter>
      </Row>
    );
  }
}
