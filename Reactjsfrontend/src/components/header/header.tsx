import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OffcanvasExampleProps {
    taskid: number;
    tasktitle: string;
    taskdescription: string;
    taskstartdatetime: string;
    taskenddatetime: string;
    tasktypetitle: string;
    prioritytype: string;
    statustitle: string;
}

const OffcanvasExample: React.FC<OffcanvasExampleProps> = () => {
    const [searchItem, setSearchitem] = useState('');

    const handleSearch = async (e: any) => {
        // eslint-disable-next-line no-console
        console.log('searchItem', searchItem);
        window.location.href = `http://localhost:3001/tasksearch/${searchItem}`;
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">my pers ToDo Planner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Contact Us</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                value={searchItem}
                                onChange={(event) => setSearchitem(event.target.value)}
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary" onClick={handleSearch}>
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default OffcanvasExample;
