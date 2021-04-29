import React, { useState, useEffect } from "react";
import ToDoItem from "../components/todoitem.jsx";
import axios from 'axios'
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom"
import RentCard from '../components/rentcard.jsx'
import Table from 'react-bootstrap/Table'
import MyNavBar from '../components/navbar.jsx'



function PayRent() {
    const [roomKey, setRoomKey] = useState("");
    const [roomies, setRoomies] = useState([]);
    const [user, setUser] = useState("");
    const [rent, setRent] = useState(0)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    setTimeout(function () {
        const currUser = JSON.parse(localStorage.getItem('user'));
        if (currUser) {
            setUser(currUser.name);
            setRoomKey(currUser.roomKey);
        } else {
            setUser(null)
        }
    }, 1);



    const handleLogout = () => {
        setUser({});
        setEmail("");
        setPassword("");
        localStorage.clear();
    };


    return (
        <div>
            <MyNavBar logout={handleLogout} />
            <RentCard
                rent={600}
                date={'April 30th, 2021'} />

        </div>

    )

}

export default PayRent;