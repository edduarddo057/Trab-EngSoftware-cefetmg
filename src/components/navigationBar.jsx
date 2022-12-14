import React from "react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useAuth from "../hooks/useAuth";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect } from "react";
import { useState } from "react";

const NavigationBar = ({ children }) => {
  const { user, signout, signed } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const tipoUsario = localStorage.getItem("type");

  return (
    <Fragment>
      {location.pathname !== "/" && (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Container>
            <Navbar.Brand>Germes Pardini</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/galeria")}>
                  Galeria
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/agendar")}>
                  Agendar
                </Nav.Link>
                {signed && (
                  <Fragment>
                    <Nav.Link onClick={() => navigate("/cadastro")}>
                      Cadastros
                    </Nav.Link>
                    <NavDropdown title="Listagens" id="collasible-nav-dropdown">
                      <NavDropdown.Item
                        onClick={() => navigate("/listagens/2")}
                      >
                        Listagem de funcionários
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/listagens/1")}
                      >
                        Listagem de pacientes
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/listagens/endereco")}
                      >
                        Listagem de endereços
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/listagens/agendamentos")}
                      >
                        Listagem de agendamentos
                      </NavDropdown.Item>
                      {tipoUsario && tipoUsario === "3" && (
                        <Fragment>
                          <NavDropdown.Divider />
                          <NavDropdown.Item
                            onClick={() =>
                              navigate(
                                `/listagens/agendamentos/${user.user_id}`
                              )
                            }
                          >
                            Listagem de consultas
                          </NavDropdown.Item>
                        </Fragment>
                      )}
                    </NavDropdown>
                  </Fragment>
                )}
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} on>
                  Bem-vindo {user ? user.nome : ""}
                </Nav.Link>
                <Nav.Link onClick={() => (signed ? signout() : navigate("/"))}>
                  {signed ? "Sair" : "Login"}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      {children}
    </Fragment>
  );
};

export default NavigationBar;
