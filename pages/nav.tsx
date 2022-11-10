import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function Navbar() {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/viewCompetitors" eventKey="link-1">View Competitors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/registerCompetitor" eventKey="link-2">Register Competitor</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Competition" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Action</NavDropdown.Item>
            </NavDropdown>
        </Nav>

    )
}