import React, { useState, useEffect, componentDidMount } from "react";
import ToDoItem from "../components/todoitem.jsx";
import axios from 'axios'
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom"
import MyNavBar from '../components/navbar.jsx'

function Complaints() {
    const [roomKey, setRoomKey] = useState("");
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [request, setRequest] = useState("");
    const [posts, setPosts] = useState([]);

    setTimeout(function () {
        const currUser = JSON.parse(localStorage.getItem('user'));
        if (currUser) {
            setRoomKey(currUser.roomKey);
        }
    }, 1);

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
            roomkey: roomKey,
            title: title,
            request: request
        }

        const response = await axios({
            url: 'http://localhost:4000/api/addrequest',
            method: 'post',
            data: payload
        })

        console.log(response)
    }

    useEffect(() => {
        getComplaints();
    }, [roomKey])


    const getComplaints = async () => {
        const payload = {
            roomkey: roomKey
        }
        const response = await axios({
            url: 'http://localhost:4000/api/getcomplaints',
            method: 'post',
            data: payload
        })
        console.log(response)
        setPosts(response.data.requests)
    }


    const displayPost = (posts) => {
        if (!posts.length) {
            return null;
        } else {
            return posts.map((post, index) => (
                <div key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        }

    }

    return (
        <div>
            <h1> Enter your request </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <textarea
                        placeholder="body"
                        name="body"
                        cols="50"
                        rows="5"
                        value={request}
                        onChange={e => setRequest(e.target.value)}
                    >

                    </textarea>
                </div>

                <button>Submit</button>
            </form>
            <div>
                {displayPost(posts)}
            </div>
        </div>
    )

}

export default Complaints