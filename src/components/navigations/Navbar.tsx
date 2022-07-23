import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { toggle } from "../../store/navbar.slices";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import {
  TbLayoutSidebarRightCollapse,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-adex-light.png";
import "./Navbar.css";

type Dimension = {
  width: number;
  height: number;
};

function NavbarProv() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.nav);
  const [dimension, setDimension] = useState<Dimension>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = (): void => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    dimension.width <= 500 ? dispatch(toggle(false)) : dispatch(toggle(true));
  }, [dimension, dispatch]);

  return (
    <Navbar expand="lg" className="navbar_prov">
      <Container fluid>
        <Navbar.Brand>
          <div className="brand">
            <div
              className="collapse"
              onClick={() => dispatch(toggle(!isOpen))}
              // style={{ display: hide ? "none" : "block" }}
            >
              {isOpen ? (
                <TbLayoutSidebarLeftCollapse size={"30px"} />
              ) : (
                <TbLayoutSidebarRightCollapse size={"30px"} />
              )}
            </div>
            <div className="logo">
              <img src={Logo} alt="adex logo" />
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Todo
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarProv;
