import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  }

  state = {
    isOpen: false,
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    return (
      <div className='my-navbar'>
        <Navbar color="black" dark expand="md">
          <NavbarBrand className="brand">DEVELOPER PORTAL</NavbarBrand>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="logOut ml-auto" navbar>
              <NavItem>

                {isAuthed ? <NavLink onClick={logoutClickEvent}>LOGOUT</NavLink> : ''}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
