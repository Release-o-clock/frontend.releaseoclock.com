import { Navbar, NavLink, NavItem, Container, Nav } from "react-bootstrap"

const Navigation = ({ global }) => {
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">{global.data.attributes.siteName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navmenu" />
                <Navbar.Collapse id="navmenu">
                    <Nav className="ms-auto py-3">
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/services">Services</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation