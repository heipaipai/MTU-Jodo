import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'


function GlobalNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">MTU Jōdō</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Competition" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/competition/addCompetitor">Add Competitor</NavDropdown.Item>
                            <NavDropdown.Item href="/competition/viewCompetitor">View Competitor</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/competition/generatePools">Generate Pools</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default GlobalNav