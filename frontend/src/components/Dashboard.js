import React, { useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import { baseurl } from '../core';
import io from 'socket.io-client';
import "../App.css";

function Dashboard() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get(`${baseurl}/api/v1/post`,
            {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
                console.log(posts)
            })
            .catch(err => alert("Error in getting data"))
    }, [])


    useEffect(() => {

        // const socket = io("https://mern-cricket-dashboard.herokuapp.com");
        // to connect with locally running Socker.io server
        const socket = io(baseurl);

        socket.on('connect', function () {
            console.log("connected to server")
        });

        socket.on('disconnect', function (message) {
            console.log("disconnected from server: ", message);
        });

        socket.on('POSTS', function (data) {
            console.log(data);
            setPosts((prev) => [data, ...prev])
            console.log(posts)

        });


        return () => {
            socket.close();
        };
    }, []);




    return (
        <>
            <div className="dash-main">
                <div className="main">
                    {posts?.map((posts, index) => (
                        <>
                            <div className="dash-main">
                                <div className="details">
                                    <h3 id="title">{posts.teamA} Vs {posts.teamB}</h3>
                                    <h6 className="battingteam">Format: {posts.format}</h6>
                                    <h6 className="battingteam">Batting Team: {posts.battingteam}</h6>
                                </div>
                                <div className="dashboard">
                                    <div className="battingside">
                                        <h3 className="team">{posts.teamA}</h3>
                                        <h4><span>Runs: {posts.runs}</span>/<span>{posts.wicket}</span></h4>
                                        <h4><span>{posts.batsmanA} </span><span>{posts.batsmanAruns}</span> <span>({posts.batsmanAballs})</span></h4>
                                        <h4><span>{posts.batsmanB} </span><span>{posts.batsmanBruns}</span> <span>({posts.batsmanBballs})</span></h4>
                                        <h4 className="runrate">Req RunRate <span>{posts.runrate}</span></h4>

                                    </div>



                                    <div className="bowlingside">

                                        <h3 className="team">{posts.teamB}</h3>
                                        <h4><span>Over:{posts.overs}</span></h4>

                                        <h4><span>{posts.bowlerA} </span><span>{posts.bowlerAover}</span> <span>({posts.bowlerAruns}</span>/<span>{posts.bowlerAwickets})</span></h4>
                                        <h4><span>{posts.bowlerB} </span><span>{posts.bowlerBover}</span> <span>({posts.bowlerBruns}</span>/<span>{posts.bowlerAwickets})</span></h4>
                                        <h4 className="target">Target <span>{posts.target}</span></h4>


                                    </div>
                                </div>
                            </div>
                        </>

                    ))}


                </div>
            </div>
        </>
    )
}

export default Dashboard;
