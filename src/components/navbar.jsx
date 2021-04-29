import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import { Form, Button, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import Dashboard from '../pages/dashboard.jsx'


const MyNavBar = (props) => (

    <Navbar bg="light" expand="lg" width="40rem">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/dashboard">Home</Nav.Link>
                <Nav.Link href="/chores">Tasks</Nav.Link>
                <Nav.Link href="/complaints">Requests</Nav.Link>
                <Nav.Link href="/payrent">Finances</Nav.Link>


                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="/complaints">Complaints</NavDropdown.Item>
                    <NavDropdown.Item href="/chores">Chores</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Form inline>
                <Link to="/">
                    <button onClick={props.logout}>Logout</button>
                </Link>


            </Form>
        </Navbar.Collapse>

    </Navbar>
)


export default MyNavBar


