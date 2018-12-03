import React, { Component } from 'react';

import { Navbar, NavItem} from 'react-materialize'

export default class HomeHeader extends Component {
  render() {
    return (
        <div>
            <Navbar brand='Logo' fixed right className="black">
                <NavItem href="/login">Login</NavItem>
            </Navbar>
        </div>
    );
  }
}
