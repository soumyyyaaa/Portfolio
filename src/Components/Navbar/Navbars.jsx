import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../S-Logo.png";

function Navbars() {
    const onButtonClick = () => {
        const pdfUrl = "../../Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <Navbar key="md" expand="md" className="justify-content-center">
                <Container fluid>
                    <a className="navbar-brand" href="/">
                        <img className="logo" src={logo} alt="Soumya" />
                    </a>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-md`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    >
                        <Offcanvas.Header closeButton>
                            <h1 className="offcanvas-header">Menu</h1>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end ">
                                <Nav.Item>
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/projects">
                                        Projects
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/experience">
                                        Experience
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={onButtonClick}>
                                    <Nav.Link>Resume</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="https://github.com/soumyyyaaa"
                                        target="_blank"
                                    >
                                        <i className="fa fa-brands fa-github fa-lg"></i>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="https://www.linkedin.com/in/soumya-agrawal-7011661ba/"
                                        target="_blank"
                                    >
                                        <i className="fa fa-brands fa-linkedin fa-lg"></i>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="https://www.instagram.com/soumyyyaaa/"
                                        target="_blank"
                                        className="icon"
                                    >
                                        <i className="fa fa-brands fa-instagram fa-lg"></i>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;
