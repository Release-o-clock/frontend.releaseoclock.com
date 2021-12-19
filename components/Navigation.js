import { Navbar, NavLink, NavItem, Container, Nav } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand>Release o&apos;clock</Navbar.Brand>
                <Navbar.Toggle aria-controls="navmenu" />
                <Navbar.Collapse id="navmenu">
                    <Nav className="ms-auto py-3">
                        <NavItem>
                            <NavLink href="#test1">Test 1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test2">Test 2</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#test3">Test 3</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation