import React from 'react';
import {Card} from 'react-bootstrap'
import { Nav, NavItem, Navbar,NavbarBrand,Container } from 'react-bootstrap';
import './footer.scss';

const Footer =()=> (
  <footer className='col-12 fixed-bottom footer d-flex justify-content-center' >
      <Navbar color="dark">
          <Container>
              <NavbarBrand>
                  <div className="footerText ">Privacy policy <br/> Terms & Conditions <br/>Copyrights reserved
                      © 2019</div>
              </NavbarBrand>
          </Container>
      </Navbar>
  </footer>
);

export default Footer;
