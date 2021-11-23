import '../App.css';
import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
import { baseurl } from '../core';


function Admin() {

    const [score, setScore] = useState({
        format: "",
        runs: "",
        overs: "",
        teamA: "",
        teamB: "",
        battingteam:"",
        wicket: "",
        batsmanA: "",
        batsmanB: "",
        batsmanAruns: "",
        batsmanBruns: "",
        batsmanAballs: "",
        batsmanBballs: "",
        bowlerA: "",
        bowlerB: "",
        bowlerAruns: "",
        bowlerBruns: "",
        bowlerAover: "",
        bowlerBover: "",
        bowlerAwickets: "",
        bowlerBwickets: "",
        target: "",
        runrate: "",
    })

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/score`)
            .then(response => {
                console.log(response.data)
                setScore(response.data)
                console.log(score)
            })
            .catch(err => alert("Error in getting data"))
    }, [])


    const submit = () => {
        axios.post(`${baseurl}/api/v1/post`, score)
            .then((res) => {
                console.log("res: ", res.data);
            })
    }








    return (
        <>
            <div className="app-main">
                <div className="post-main">

                    <form id="post-form" onSubmit={submit}>
                        <h3 className="side">ADMIN PANEL TO UPDATE</h3>

                        <div className="teamcontrol">

                            <TextField
                                id="outlined-basic"
                                name="teamA"
                                label="First Team"
                                type="text"
                                className="box"
                                id="team"
                                variant="outlined"

                                value={score.teamA}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, teamA: e.target.value }
                                    })
                                }}
                            />
                            <h1>VS</h1>

                            <TextField
                                id="outlined-basic"
                                name="teamB"
                                label="Second Team"
                                type="text"
                                className="box"
                                id="team"

                                value={score.teamB}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, teamB: e.target.value }
                                    })
                                }}

                                variant="outlined" />
                                
                                <h2>Batting Team</h2>

                            <TextField
                                id="outlined-basic"
                                name="battingteam"
                                label="Batting Team"
                                type="text"
                                className="box"
                                id="team"

                                value={score.battingteam}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, battingteam: e.target.value }
                                    })
                                }}

                                variant="outlined" />

                        </div>


                        <div className="control">
                            <div className="battingcontrol">

                                <h3 className="side">Batting Side</h3>
                                <TextField
                                    id="outlined-basic"
                                    name="post"
                                    label="Game Format"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.format}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, format: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="runs"
                                    label="Team Score"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.runs}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, runs: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="wicket"
                                    label="Wickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.wicket}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, wicket: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanA"
                                    label="FIrst Batsman Name"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanA}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanA: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanAruns"
                                    label="First Batsman Runs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanAruns}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanAruns: e.target.value }
                                        })
                                    }}
                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanAballs"
                                    label="First Batsman Balls"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanAballs}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanAballs: e.target.value }
                                        })
                                    }}
                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanB"
                                    label="Second Batsman Name"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanB}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanB: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="batsmanBruns"
                                    label="Second Batsman Runs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanBruns}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanBruns: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="batsmanBballs"
                                    label="Second Batsman Balls"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanBballs}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanBballs: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="runrate"
                                    label="Req RunRate"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.runrate}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, runrate: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />


                            </div>

                            <hr />

                            <div className="bowlingcontrol">
                                <h3 className="side">Bowling Side</h3>

                                <TextField
                                    id="outlined-basic"
                                    name="overs"
                                    label="Overs Bowled"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.overs}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, overs: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="target"
                                    label="Target"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.target}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, target: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerA"
                                    label="First Bowler"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerA}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerA: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAruns"
                                    label="First Bowler Runs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerAruns}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerAruns: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAwickets"
                                    label="First Bowler Wickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerAwickets}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerAwickets: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAover"
                                    label="First Bowler Overs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerAover}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerAover: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerB"
                                    label="Second Bowler"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerB}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerB: e.target.value }
                                        })
                                    }}
                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBruns"
                                    label="Second Bowler Runs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerBruns}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerBruns: e.target.value }
                                        })
                                    }}
                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBwickets"
                                    label="Second Bowler Wickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerBwickets}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerBwickets: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBover"
                                    label="Second Bowler Over"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerBover}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerBover: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                            </div>

                        </div>
                        <Button id="btn" variant="contained" color="primary" type="submit">
                            Update
                        </Button>
                    </form>
                </div>
            </div>



        </>
    );
}

export default Admin;

