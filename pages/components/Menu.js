import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div>
            <Navbar className={styles.nav}>
                <NavbarBrand className={styles.navbrand}>Jornada Recode</NavbarBrand>
                    <Nav className={styles.nav} navbar>

                        <NavItem className={styles.navitem}>
                            <NavLink className={styles.navlink} href="/">Home</NavLink>
                        </NavItem>

                        <NavItem className={styles.navitem}>
                            <NavLink className={styles.navlink} href="/sobre">Sobre</NavLink>
                        </NavItem>

                    </Nav>
            </Navbar>
        </div>
    );
}

export default Menu