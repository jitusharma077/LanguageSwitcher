import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n';
import LocaleContext from './LocaleContext';


function Nevigation() {
    const { t } = useTranslation()
    const { locale } = useContext(LocaleContext);

    function changeLocale (l) {
        if (locale !== l) {
          i18n.changeLanguage(l);
        }
      }
    return (
        <>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">React i18n</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title={t('language')} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => changeLocale('en')} href="#">English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLocale('sp')} href="#">Spanish</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </>
    )
}

export default Nevigation
